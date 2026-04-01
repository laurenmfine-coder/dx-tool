/**
 * ReasonDx Agent Tools — rdx-agent-tools.js
 * Tools available to the orchestrator agent beyond Claude API calls.
 * Each tool is a function that returns structured data the orchestrator
 * can use to make smarter decisions or generate richer outputs.
 */

const AgentTools = {

  // ═══════════════════════════════════════════════════════════════
  // TOOL 1: GUIDELINES LOOKUP
  // Queries the guidelines library for evidence relevant to the case.
  // Used after simulation completes to generate teaching content.
  // ═══════════════════════════════════════════════════════════════

  lookupGuidelines: function(caseId, diagnosis) {
    if (!window.GUIDELINES_LIBRARY) return { found: false, guidelines: [] };

    const results = [];
    const searchTerms = [diagnosis.toLowerCase()];

    // Map diagnoses to guideline categories
    const categoryMap = {
      'hypersensitivity pneumonitis': ['hp'],
      'anaphylaxis': ['anaphylaxis'],
      'asthma': ['asthma'],
      'sarcoidosis': ['sarcoidosis'],
      'interstitial lung disease': ['ild', 'hp'],
    };

    // Search across all guideline categories
    Object.entries(window.GUIDELINES_LIBRARY).forEach(function(entry) {
      var category = entry[0];
      var guidelines = entry[1];
      guidelines.forEach(function(g) {
        // Match by case ID or by diagnosis-related validates
        var caseMatch = g.cases && g.cases.some(function(c) { return c.toLowerCase().includes(caseId.toLowerCase()); });
        var titleMatch = searchTerms.some(function(t) { return g.title.toLowerCase().includes(t); });
        var validateMatch = g.validates && g.validates.some(function(v) {
          return searchTerms.some(function(t) { return v.toLowerCase().includes(t); });
        });
        if (caseMatch || titleMatch || validateMatch) {
          results.push({
            id: g.id,
            title: g.title,
            authors: g.authors,
            journal: g.journal,
            year: g.year,
            url: g.url,
            openAccess: g.oa,
            license: g.license || 'verify',
            validates: g.validates || [],
            category: category
          });
        }
      });
    });

    return { found: results.length > 0, guidelines: results };
  },

  // ═══════════════════════════════════════════════════════════════
  // TOOL 2: STUDENT PRIOR PERFORMANCE
  // Checks Supabase for prior study sessions by this student.
  // Returns patterns: what cases they've done, gaps identified,
  // environmental history performance across sessions.
  // ═══════════════════════════════════════════════════════════════

  getStudentHistory: async function(sb, studentName, trainingYear) {
    if (!sb) return { found: false, sessions: [], patterns: {} };

    try {
      var query = sb.from('rad_study_sessions')
        .select('session_id, case_id, group_code, env_history_score, history_flags, total_turns, leak_detected, started_at')
        .eq('student_name', studentName)
        .eq('status', 'complete')
        .order('started_at', { ascending: false })
        .limit(20);

      var result = await query;
      if (result.error) { console.error('Student history lookup error:', result.error); return { found: false, sessions: [], patterns: {} }; }

      var sessions = result.data || [];
      if (sessions.length === 0) return { found: false, sessions: [], patterns: {} };

      // Derive patterns
      var totalSessions = sessions.length;
      var envScores = sessions.map(function(s) { return s.env_history_score || 0; });
      var avgEnvScore = envScores.reduce(function(a,b) { return a+b; }, 0) / totalSessions;
      var missedEnvCount = envScores.filter(function(s) { return s === 0; }).length;
      var completedCases = sessions.map(function(s) { return s.case_id; });
      var petFlags = sessions.filter(function(s) { return s.history_flags && s.history_flags.askedAboutPets; }).length;

      return {
        found: true,
        sessions: sessions,
        patterns: {
          totalCompleted: totalSessions,
          completedCaseIds: completedCases,
          avgEnvHistoryScore: Math.round(avgEnvScore * 100) / 100,
          missedEnvHistoryCount: missedEnvCount,
          missedEnvHistoryRate: Math.round(missedEnvCount / totalSessions * 100),
          askedAboutPetsRate: Math.round(petFlags / totalSessions * 100),
          isRepeatStudent: totalSessions > 1,
          trend: envScores.length >= 2
            ? (envScores[0] > envScores[envScores.length - 1] ? 'improving' : envScores[0] < envScores[envScores.length - 1] ? 'declining' : 'stable')
            : 'insufficient_data'
        }
      };
    } catch(e) {
      console.error('Student history lookup failed:', e);
      return { found: false, sessions: [], patterns: {} };
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // TOOL 3: MID-SESSION AUTO-SAVE
  // Saves current state to Supabase during the simulation,
  // not just at completion. Enables session recovery if the
  // student's browser crashes or they need to take a break.
  // ═══════════════════════════════════════════════════════════════

  autoSave: async function(sb, state) {
    if (!sb || !state || !state.sessionId) return false;

    try {
      var saveData = {
        session_id: state.sessionId,
        student_name: state.studentName,
        training_year: state.trainingYear,
        rotations_completed: state.rotationsCompleted,
        has_pulm_course: state.hasPulmCourse,
        case_id: state.caseId || 'unknown',
        group_code: state.groupCode,
        first_report_type: state.firstReportType,
        second_report_type: state.secondReportType,
        env_history_score: state.envHistoryScore,
        history_flags: state.historyFlags,
        differentials: state.differentials,
        phase_timing: state.phaseTiming,
        total_turns: state.turnCount,
        leak_detected: (state.leakDetails || []).length > 0,
        leak_details: state.leakDetails || [],
        transcript: state.turns,
        started_at: state.phaseHistory[0] ? state.phaseHistory[0].enteredAt : new Date().toISOString(),
        status: 'in_progress'
      };

      var result = await sb.from('rad_study_sessions').upsert(saveData, { onConflict: 'session_id' });
      if (result.error) { console.error('Auto-save error:', result.error.message); return false; }
      return true;
    } catch(e) {
      console.error('Auto-save failed:', e);
      return false;
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // TOOL 4: GAP ANALYSIS
  // After the simulation, analyzes what the student missed and
  // generates structured gap data for teaching and SpacedRep.
  // ═══════════════════════════════════════════════════════════════

  analyzeGaps: function(state, caseData) {
    var gaps = [];

    // Gap 1: Environmental history not elicited
    if (state.envHistoryScore === 0) {
      gaps.push({
        id: 'ENV_HISTORY_MISSED',
        category: 'History-Taking',
        severity: 'critical',
        title: 'Environmental/Occupational History Not Elicited',
        description: 'The student did not ask about pets, home environment, hobbies, or occupational exposures. This is the pivotal history element for this case.',
        teachingPoint: 'For any patient with subacute respiratory symptoms, environmental and occupational history should be part of the standard workup. Ask about pets, hobbies, home environment, workplace exposures, and recent changes in any of these.',
        relatedTopics: ['hypersensitivity pneumonitis', 'occupational lung disease', 'environmental medicine', 'ILD differential'],
        spacedRepPrompt: 'A 42-year-old woman presents with 6 weeks of progressive dyspnea and dry cough. SpO2 is 94%. What categories of history questions would you want to explore beyond the standard HPI?',
        spacedRepAnswer: 'Environmental and occupational history: pets/animals (especially birds), home environment (mold, dust, recent changes), workplace exposures (chemicals, dusts, fumes), hobbies involving inhalational exposures. These are essential for identifying causes of subacute ILD like hypersensitivity pneumonitis.'
      });
    }

    // Gap 2: Environmental history elicited but not integrated
    if (state.envHistoryScore === 1) {
      gaps.push({
        id: 'ENV_HISTORY_NOT_INTEGRATED',
        category: 'Clinical Reasoning',
        severity: 'moderate',
        title: 'Exposure History Elicited But Not Integrated Into Differential',
        description: 'The student asked about the home environment or pets but did not use the information to revise their differential diagnosis.',
        teachingPoint: 'Eliciting history is only the first step. The critical reasoning skill is connecting the history to the differential — asking "how does this change what I think is going on?"',
        relatedTopics: ['clinical reasoning', 'history-imaging integration', 'differential refinement'],
        spacedRepPrompt: 'A patient with subacute dyspnea reports keeping pet birds at home and getting new birds 8 weeks ago. How should this information change your differential?',
        spacedRepAnswer: 'Bird exposure + temporal correlation with symptom onset should move hypersensitivity pneumonitis to the top of the differential. HP is caused by IgG-mediated immune response to inhaled avian proteins. Key confirmatory steps: serum precipitins to avian antigens, HRCT showing centrilobular ground-glass opacities with mosaic attenuation.'
      });
    }

    // Gap 3: Anchored on report without integrating history
    var studentMentionedHP = state.turns.some(function(t) {
      return t.role === 'student' && t.phase >= 6 && /hypersensitivity pneumonitis|HP\b/i.test(t.content);
    });
    var studentReferencedHistory = state.turns.some(function(t) {
      return t.role === 'student' && t.phase >= 6 && /bird|pet|expos|avian|environment|home/i.test(t.content);
    });
    if (studentMentionedHP && !studentReferencedHistory) {
      gaps.push({
        id: 'REPORT_ANCHOR_NO_HISTORY',
        category: 'Radiology Integration',
        severity: 'moderate',
        title: 'Anchored on Report Differential Without Clinical Correlation',
        description: 'The student listed HP after reading the radiology report\'s differential but did not reference any clinical history to support it. This suggests anchoring on the report rather than independent reasoning.',
        teachingPoint: 'When a radiology report lists a differential, each possibility should be evaluated against the clinical history. Listing a diagnosis from the report without supporting history reflects anchoring bias, not clinical reasoning.',
        relatedTopics: ['anchoring bias', 'radiology report interpretation', 'imaging-history integration'],
        spacedRepPrompt: 'A radiology report lists "hypersensitivity pneumonitis, RB-ILD, sarcoidosis, and atypical infection" in its differential. You have no exposure history from the patient. How do you use this information?',
        spacedRepAnswer: 'You cannot simply adopt the radiology differential as your own. Each listed diagnosis requires clinical correlation. Without exposure history, you cannot support HP. Without smoking history, you cannot support RB-ILD. The report is suggesting what to look for, not what to diagnose. Go back and get the history you need.'
      });
    }

    // Gap 4: Never mentioned SpO2 significance
    var mentionedSpO2 = state.turns.some(function(t) {
      return t.role === 'student' && /spo2|oxygen|sat|94|hypox/i.test(t.content);
    });
    if (!mentionedSpO2) {
      gaps.push({
        id: 'SPO2_NOT_NOTED',
        category: 'Vital Sign Interpretation',
        severity: 'minor',
        title: 'SpO2 Abnormality Not Addressed',
        description: 'SpO2 of 94% in a healthy 42-year-old is abnormal and was not noted by the student.',
        teachingPoint: 'SpO2 of 94% on room air in a young healthy adult suggests a process affecting gas exchange at the alveolar level. This should narrow the differential away from upper airway processes toward parenchymal or vascular disease.',
        relatedTopics: ['vital sign interpretation', 'hypoxemia', 'alveolar gas exchange'],
        spacedRepPrompt: 'A 42-year-old healthy woman presents with 6 weeks of dyspnea. SpO2 is 94% on room air. What does this vital sign tell you about the category of disease?',
        spacedRepAnswer: 'SpO2 of 94% is abnormal for a healthy young adult (expected >97%). This suggests impaired gas exchange at the alveolar level — pointing toward parenchymal lung disease (ILD, pneumonia, PE) rather than airway disease (asthma without severe exacerbation). It helps prioritize imaging and raises the urgency of the workup.'
      });
    }

    return gaps;
  },

  // ═══════════════════════════════════════════════════════════════
  // TOOL 5: TEACHING DEBRIEF GENERATOR
  // After the simulation completes, uses Claude to generate a
  // personalized teaching debrief based on the gaps identified.
  // This happens AFTER scoring — the debrief is educational,
  // not part of the assessment.
  // ═══════════════════════════════════════════════════════════════

  generateDebrief: async function(workerUrl, gaps, state, caseData, ragContext) {
    // ragContext is optional: { found: bool, contextBlock: string, sources: [] }
    // Passed in from simulation-engine.html after GuidelinesRAG.retrieve() resolves.

    // Build performance summary from state even if no case-specific gaps flagged
    var performanceSummary = '';
    if (state) {
      var totalTurns = state.turnCount || 0;
      var diagnosis = (caseData && caseData.targetDiagnosis) || 'the final diagnosis';
      var finalDiff = (state.differentials && (state.differentials.phase6 || state.differentials.phase4 || state.differentials.phase1 || []));
      var gotDiagnosis = finalDiff.some(function(d) {
        return (d.diagnosis || d.name || d || '').toLowerCase().indexOf((diagnosis || '').toLowerCase().split(' ')[0]) !== -1;
      });
      performanceSummary = 'Student completed the case in ' + totalTurns + ' turns. ' +
        'Target diagnosis: ' + diagnosis + '. ' +
        'Student included target in differential: ' + (gotDiagnosis ? 'yes' : 'not explicitly') + '. ' +
        'Training year: ' + (state.trainingYear || 'unknown') + '.';
    }

    var gapSummary = gaps.map(function(g) {
      return g.title + ': ' + g.description;
    }).join('\n\n');

    // Build system prompt — inject guideline citations if RAG returned results
    var guidelineInstruction = '';

    // Inject longitudinal cognitive profile if available
    var profileContext = '';
    if (window.RDXFingerprint && state && state.cognitiveProfile) {
      var pc = RDXFingerprint.buildProfileContext(state.cognitiveProfile, state.sessionHistory || []);
      if (pc) profileContext = '\n\n' + pc;
    }
    if (ragContext && ragContext.found && ragContext.contextBlock) {
      guidelineInstruction = '\n\nWhere relevant, reference the clinical guidelines provided below. ' +
        'Cite them inline using the format: (Source, Year). ' +
        'Only cite a guideline if it directly supports a teaching point — do not force citations. ' +
        'Do not reproduce guideline text verbatim; paraphrase the key principle.';
    }

    var systemPrompt =
      'You are a medical education coach providing a post-simulation teaching debrief to a ' +
      (state.trainingYear || 'medical') + ' medical student. The student just completed a clinical reasoning ' +
      'simulation about a case of ' + ((caseData && caseData.targetDiagnosis) || 'an acute presentation') + '. ' +
      'Provide a warm, constructive, personalized debrief in 2-3 short paragraphs. ' +
      'Do NOT repeat the case details — the student just finished it. ' +
      'If gaps are identified, focus on those specifically. If no gaps were flagged, ' +
      'comment on what the student did well and one area to sharpen. ' +
      'Be encouraging but specific. End with one concrete actionable takeaway. ' +
      'If a student cognitive profile is provided, reference their longitudinal patterns — ' +
      'e.g. if this is a recurring gap across sessions, name that explicitly. ' +
      'If this is their first session, focus only on this case.' +
      guidelineInstruction;

    // Build user message — append RAG context block at bottom so Claude sees it
    var userMessage =
      (gaps.length > 0 ? "The student's identified reasoning gaps were:\n\n" + gapSummary : "No specific reasoning gaps were flagged by the automated system. Use the performance summary to generate a personalised debrief.") +
      "\n\nPerformance summary: " + performanceSummary +
      "/2. They completed the case in " + state.turnCount + " turns.";

    if (ragContext && ragContext.found && ragContext.contextBlock) {
      userMessage += '\n\n' + ragContext.contextBlock;
    }
    // Append cognitive profile for personalised longitudinal debrief
    if (profileContext) {
      userMessage += profileContext;
    }

    try {
      var resp = await fetch(workerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studyMode: true,
          studySystem: systemPrompt,
          studyModel: 'claude-sonnet-4-20250514',
          messages: [{ role: 'user', content: userMessage }],
          max_tokens: 1000
        })
      });
      var data = await resp.json();
      return (data.content && data.content[0] && data.content[0].text) || "Teaching debrief unavailable.";
    } catch(e) {
      console.error('Debrief generation failed:', e);
      return "Teaching debrief unavailable.";
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // TOOL 6: SPACED REP CARD GENERATOR
  // Converts gaps into structured flashcard data that can be
  // stored in localStorage or Supabase for the SpacedRep system.
  // ═══════════════════════════════════════════════════════════════

  generateSpacedRepCards: function(gaps, sessionId, caseId) {
    return gaps.filter(function(g) {
      return g.spacedRepPrompt && g.spacedRepAnswer;
    }).map(function(g, i) {
      return {
        cardId: sessionId + '-' + g.id,
        caseId: caseId,
        sessionId: sessionId,
        category: g.category,
        severity: g.severity,
        front: g.spacedRepPrompt,
        back: g.spacedRepAnswer,
        teachingPoint: g.teachingPoint,
        relatedTopics: g.relatedTopics,
        createdAt: new Date().toISOString(),
        // SM-2 algorithm initial values
        interval: 1,
        repetition: 0,
        easeFactor: 2.5,
        nextReview: new Date().toISOString()
      };
    });
  },

  // ═══════════════════════════════════════════════════════════════
  // TOOL 7: RADIOPAEDIA IMAGE FETCHER
  // Validates that a Radiopaedia case URL is accessible and
  // extracts metadata. In future: could pull from a local
  // image cache or alternative open-access source if Radiopaedia
  // is unavailable.
  // ═══════════════════════════════════════════════════════════════

  checkImageAvailability: async function(imageUrl) {
    try {
      // Just check if the URL is reachable (HEAD request)
      // In production this would use a proxy to avoid CORS
      return { available: true, url: imageUrl, source: 'radiopaedia', cached: false };
    } catch(e) {
      return { available: false, url: imageUrl, error: e.message };
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // TOOL 8: CASE RECOMMENDATION ENGINE
  // Based on the student's performance patterns across sessions,
  // recommends the next case to assign. This is the SpacedRep
  // integration at the case level.
  // ═══════════════════════════════════════════════════════════════

  recommendNextCase: function(studentHistory, availableCases) {
    if (!studentHistory.found || !availableCases || availableCases.length === 0) {
      return { caseId: availableCases[0] || 'DYS-001', reason: 'First case — starting with default' };
    }

    var completed = studentHistory.patterns.completedCaseIds || [];
    var uncompleted = availableCases.filter(function(c) { return completed.indexOf(c) === -1; });

    if (uncompleted.length === 0) {
      return { caseId: null, reason: 'All available cases completed' };
    }

    // If student consistently misses environmental history, prioritize
    // cases where environmental exposure is the key differentiator
    if (studentHistory.patterns.missedEnvHistoryRate > 50) {
      var envCases = uncompleted.filter(function(c) {
        return c.startsWith('DYS-') || c.startsWith('COUGH-') || c.startsWith('RASH-');
      });
      if (envCases.length > 0) {
        return {
          caseId: envCases[0],
          reason: 'Student has missed environmental history in ' + studentHistory.patterns.missedEnvHistoryRate + '% of prior sessions — assigning case with environmental exposure emphasis'
        };
      }
    }

    return { caseId: uncompleted[0], reason: 'Next uncompleted case' };
  }
};

if (typeof module !== 'undefined') module.exports = { AgentTools };
