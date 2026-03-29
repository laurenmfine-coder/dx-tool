/**
 * ═══════════════════════════════════════════════════════════════
 * ReasonDx Study Tools — rdx-study-tools.js
 * ═══════════════════════════════════════════════════════════════
 * Post-simulation outputs for student self-directed learning:
 *
 * 1. PERFORMANCE RECEIPT — factual summary of what the student
 *    did and didn't do (no medical teaching content)
 * 2. STUDY PROMPTS — targeted questions (not answers) based on
 *    identified gaps, for use in NotebookLM or self-study
 * 3. GUIDELINE EXCERPT COMPILER — pulls verbatim diagnostic
 *    criteria, tables, and key content from open-access
 *    guidelines with full attribution
 * 4. NOTEBOOKLM BRIDGE — formats all outputs for easy import
 *    into Google NotebookLM
 *
 * CONTENT SAFETY PRINCIPLE:
 * This module NEVER generates medical knowledge. It generates
 * questions, citations, and references to verified sources.
 * All medical content is either (a) pulled verbatim from
 * curated open-access guidelines with full attribution, or
 * (b) factual descriptions of what the student did in the
 * simulation (behavioral data, not clinical teaching).
 * ═══════════════════════════════════════════════════════════════
 */

(function() {
  'use strict';


  // ═══════════════════════════════════════════════════════════════
  // 1. PERFORMANCE RECEIPT
  // ═══════════════════════════════════════════════════════════════
  // Pure behavioral data — what the student did and didn't do.
  // No interpretation, no teaching, no medical content.

  const PerformanceReceipt = {

    /**
     * Generate a structured receipt from session state.
     * Returns an object suitable for display, export, or document generation.
     */
    generate: function(state, caseData) {
      var receipt = {
        header: {
          studentName: state.studentName,
          trainingYear: state.trainingYear,
          caseId: caseData.caseId,
          caseTitle: caseData.title,
          date: new Date().toISOString().split('T')[0],
          sessionId: state.sessionId,
          groupCode: state.groupCode,
          firstReportType: state.firstReportType,
          totalTurns: state.turnCount,
          cognitiveLoadLevel: state.cognitiveLoadLevel || 'off'
        },

        historyPerformance: {
          categoriesAsked: [],
          categoriesMissed: [],
          environmentalHistoryScore: state.envHistoryScore,
          genericPromptDelivered: state.historyFlags.genericPromptDelivered || false,
          studentDeclinedAfterPrompt: state.historyFlags.studentDeclinedAfterPrompt || false
        },

        differentialEvolution: {
          phase1: (state.differentials.phase1 || []).map(function(d) { return d.diagnosis; }),
          phase4: (state.differentials.phase4 || []).map(function(d) { return d.diagnosis; }),
          phase6: (state.differentials.phase6 || []).map(function(d) { return d.diagnosis; }),
          targetDiagnosisIncluded: {
            phase1: false,
            phase4: false,
            phase6: false
          }
        },

        testsOrdered: [],
        testsMissed: [],

        biasesDetected: (state.detectedBiases || []).map(function(b) {
          return { type: b.type, severity: b.severity };
        }),

        nearMisses: (state._nearMisses || []).map(function(nm) {
          return { id: nm.id, category: nm.category, whatStudentDid: nm.whatStudentDid };
        }),

        uncertaintyCalibration: state.uncertaintyCalibration || null,

        gapsIdentified: (state.identifiedGaps || []).map(function(g) {
          return { title: g.title, category: g.category, severity: g.severity, gapType: g.gapType || 'unclassified' };
        }),

        phaseTiming: state.phaseTiming || {}
      };

      // Populate history categories from signal extractor state
      var flags = state.historyFlags || {};
      var critElements = (caseData.scoringCriteria || {}).criticalHistoryElements || [];
      critElements.forEach(function(elem) {
        var flagKey = 'askedAbout' + elem.charAt(0).toUpperCase() + elem.slice(1).replace(/\s+/g, '');
        if (flags[flagKey]) {
          receipt.historyPerformance.categoriesAsked.push(elem);
        } else {
          receipt.historyPerformance.categoriesMissed.push(elem);
        }
      });

      // Check if target diagnosis was in each phase's differential
      var targetDx = (caseData.scoringCriteria.highScoreDiagnoses || []).map(function(d) { return d.toLowerCase(); });
      ['phase1', 'phase4', 'phase6'].forEach(function(p) {
        var dxList = receipt.differentialEvolution[p].map(function(d) { return d.toLowerCase(); });
        receipt.differentialEvolution.targetDiagnosisIncluded[p] = targetDx.some(function(t) {
          return dxList.some(function(d) { return d.includes(t); });
        });
      });

      return receipt;
    },

    /**
     * Format receipt as plain text for display or copy-paste.
     */
    toText: function(receipt) {
      var lines = [];
      lines.push('═══════════════════════════════════════════════════');
      lines.push('REASONDX PERFORMANCE RECEIPT');
      lines.push('═══════════════════════════════════════════════════');
      lines.push('');
      lines.push('Student: ' + receipt.header.studentName);
      lines.push('Training Year: ' + receipt.header.trainingYear);
      lines.push('Case: ' + receipt.header.caseId + ' — ' + receipt.header.caseTitle);
      lines.push('Date: ' + receipt.header.date);
      lines.push('Session: ' + receipt.header.sessionId);
      lines.push('Group: ' + receipt.header.groupCode + ' (' + receipt.header.firstReportType + ' report first)');
      lines.push('Total Turns: ' + receipt.header.totalTurns);
      lines.push('Cognitive Load: ' + receipt.header.cognitiveLoadLevel);
      lines.push('');

      lines.push('── HISTORY PERFORMANCE ──');
      lines.push('Environmental History Score: ' + receipt.historyPerformance.environmentalHistoryScore + '/2');
      lines.push('Categories Asked: ' + (receipt.historyPerformance.categoriesAsked.join(', ') || 'None'));
      lines.push('Categories Missed: ' + (receipt.historyPerformance.categoriesMissed.join(', ') || 'None'));
      if (receipt.historyPerformance.genericPromptDelivered) {
        lines.push('Generic prompt delivered: Yes');
        lines.push('Student declined after prompt: ' + (receipt.historyPerformance.studentDeclinedAfterPrompt ? 'Yes' : 'No'));
      }
      lines.push('');

      lines.push('── DIFFERENTIAL EVOLUTION ──');
      lines.push('Phase 1 (pre-history): ' + (receipt.differentialEvolution.phase1.join(', ') || '(none recorded)'));
      lines.push('  Target diagnosis present: ' + (receipt.differentialEvolution.targetDiagnosisIncluded.phase1 ? 'Yes' : 'No'));
      lines.push('Phase 4 (post-history): ' + (receipt.differentialEvolution.phase4.join(', ') || '(none recorded)'));
      lines.push('  Target diagnosis present: ' + (receipt.differentialEvolution.targetDiagnosisIncluded.phase4 ? 'Yes' : 'No'));
      lines.push('Phase 6 (post-imaging): ' + (receipt.differentialEvolution.phase6.join(', ') || '(none recorded)'));
      lines.push('  Target diagnosis present: ' + (receipt.differentialEvolution.targetDiagnosisIncluded.phase6 ? 'Yes' : 'No'));
      lines.push('');

      if (receipt.biasesDetected.length > 0) {
        lines.push('── COGNITIVE BIASES DETECTED ──');
        receipt.biasesDetected.forEach(function(b) {
          lines.push('• ' + b.type + ' (' + b.severity + ')');
        });
        lines.push('');
      }

      if (receipt.nearMisses.length > 0) {
        lines.push('── NEAR MISSES ──');
        receipt.nearMisses.forEach(function(nm) {
          lines.push('• ' + nm.category + ': ' + nm.whatStudentDid);
        });
        lines.push('');
      }

      if (receipt.gapsIdentified.length > 0) {
        lines.push('── GAPS IDENTIFIED ──');
        receipt.gapsIdentified.forEach(function(g) {
          lines.push('• [' + g.severity + '] ' + g.title + ' (' + g.gapType + ' gap)');
        });
        lines.push('');
      }

      if (receipt.uncertaintyCalibration) {
        lines.push('── UNCERTAINTY CALIBRATION ──');
        lines.push('Average confidence: ' + receipt.uncertaintyCalibration.avgConfidence + '/10');
        lines.push('Calibration quality: ' + receipt.uncertaintyCalibration.calibrationQuality);
        lines.push('');
      }

      lines.push('═══════════════════════════════════════════════════');
      lines.push('This receipt contains behavioral data only.');
      lines.push('No medical teaching content is included.');
      lines.push('Use this as a self-assessment tool with your course');
      lines.push('materials, NotebookLM, or faculty advisor.');
      lines.push('═══════════════════════════════════════════════════');

      return lines.join('\n');
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // 2. STUDY PROMPTS (QUESTIONS ONLY — NO ANSWERS)
  // ═══════════════════════════════════════════════════════════════
  // Generates targeted study questions based on gaps.
  // The student takes these to NotebookLM or their textbook.
  // The agent asks the question; the student finds the answer.

  const StudyPrompts = {

    /**
     * Generate study prompts from identified gaps.
     * Each prompt has a question, a suggested source type, and
     * a reference to the relevant guideline (if available).
     */
    generate: function(gaps, caseData, guidelineResults) {
      var prompts = [];

      gaps.forEach(function(gap) {
        var gapPrompts = StudyPrompts._promptsForGap(gap, caseData);
        prompts = prompts.concat(gapPrompts);
      });

      // Add general case-related study prompts
      prompts.push({
        category: 'Case Foundation',
        question: 'What are the major categories of the differential diagnosis for ' + caseData.presentation.chiefComplaint + ' in a ' + caseData.presentation.age + '-year-old ' + caseData.presentation.sex.toLowerCase() + '?',
        source: 'Pulmonary or internal medicine textbook / lecture notes',
        guideline: null
      });

      // Add guideline-specific prompts
      if (guidelineResults && guidelineResults.found) {
        guidelineResults.guidelines.slice(0, 3).forEach(function(g) {
          prompts.push({
            category: 'Guideline Review',
            question: 'Review ' + g.title + '. What are the key diagnostic criteria? What history elements does the guideline recommend obtaining?',
            source: g.journal + ' (' + g.year + ')',
            guideline: { title: g.title, url: g.url, doi: g.doi || null, openAccess: g.openAccess }
          });
        });
      }

      return prompts;
    },

    _promptsForGap: function(gap, caseData) {
      var prompts = [];

      if (gap.id === 'ENV_HISTORY_MISSED') {
        prompts.push({
          category: 'History-Taking',
          question: 'What are the major categories of environmental and occupational lung disease? For each category, what specific exposure questions should you ask?',
          source: 'Pulmonary lecture notes / occupational medicine resources',
          guideline: null
        });
        prompts.push({
          category: 'History-Taking',
          question: 'What is your systematic approach to taking a complete social history? List every category you should cover and why each matters for the differential diagnosis.',
          source: 'Clinical skills curriculum / Bates\' Guide',
          guideline: null
        });
        prompts.push({
          category: 'Clinical Reasoning',
          question: 'For a patient presenting with subacute respiratory symptoms and bilateral infiltrates, what exposure categories should you screen for before accepting a diagnosis of idiopathic disease?',
          source: 'Pulmonary textbook — ILD chapter',
          guideline: null
        });
      }

      if (gap.id === 'ENV_HISTORY_NOT_INTEGRATED') {
        prompts.push({
          category: 'Clinical Reasoning',
          question: 'When you elicit a new piece of history (e.g., an environmental exposure), what is your process for deciding whether it changes your differential? How do you formally integrate new data into your ranking?',
          source: 'Clinical reasoning textbook / diagnostic reasoning framework',
          guideline: null
        });
      }

      if (gap.id === 'REPORT_ANCHOR_NO_HISTORY') {
        prompts.push({
          category: 'Radiology Integration',
          question: 'When a radiology report lists several possible diagnoses in its impression, how should you evaluate each one? What clinical information do you need before accepting or rejecting each possibility?',
          source: 'Clinical reasoning resources / radiology for clinicians',
          guideline: null
        });
        prompts.push({
          category: 'Cognitive Bias',
          question: 'What is anchoring bias? How does it specifically manifest when reading radiology reports? What strategies can you use to avoid anchoring on a report\'s suggested differential?',
          source: 'Clinical reasoning / cognitive bias in medicine literature',
          guideline: null
        });
      }

      if (gap.id === 'SPO2_NOT_NOTED') {
        prompts.push({
          category: 'Vital Sign Interpretation',
          question: 'What is the normal SpO2 range for a healthy young adult at sea level? At what SpO2 level should you be concerned, and what pathophysiologic processes cause low SpO2?',
          source: 'Physiology textbook — gas exchange / pulmonary chapter',
          guideline: null
        });
      }

      // Generic prompts for any gap with related topics
      if (gap.relatedTopics && gap.relatedTopics.length > 0) {
        gap.relatedTopics.forEach(function(topic) {
          prompts.push({
            category: gap.category || 'General',
            question: 'Review your course materials on: ' + topic + '. What are the key concepts you should know for clinical application?',
            source: 'Course lecture notes and required readings',
            guideline: null
          });
        });
      }

      return prompts;
    },

    /**
     * Format study prompts as plain text for copy/paste into NotebookLM.
     */
    toText: function(prompts, studentName, caseId) {
      var lines = [];
      lines.push('═══════════════════════════════════════════════════');
      lines.push('REASONDX STUDY PROMPTS');
      lines.push('Generated for: ' + studentName);
      lines.push('Based on: Case ' + caseId);
      lines.push('Date: ' + new Date().toISOString().split('T')[0]);
      lines.push('═══════════════════════════════════════════════════');
      lines.push('');
      lines.push('These are QUESTIONS for you to investigate using');
      lines.push('your course materials, textbooks, or NotebookLM.');
      lines.push('Find the answers yourself — that\'s the learning.');
      lines.push('');

      var categories = {};
      prompts.forEach(function(p) {
        if (!categories[p.category]) categories[p.category] = [];
        categories[p.category].push(p);
      });

      Object.entries(categories).forEach(function(entry) {
        lines.push('── ' + entry[0].toUpperCase() + ' ──');
        entry[1].forEach(function(p, i) {
          lines.push('');
          lines.push('Q' + (i + 1) + ': ' + p.question);
          lines.push('   Suggested source: ' + p.source);
          if (p.guideline && p.guideline.url) {
            lines.push('   Guideline: ' + p.guideline.title);
            lines.push('   URL: ' + p.guideline.url);
          }
        });
        lines.push('');
      });

      return lines.join('\n');
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // 3. GUIDELINE EXCERPT COMPILER
  // ═══════════════════════════════════════════════════════════════
  // Pulls verbatim content references from open-access guidelines.
  // Does NOT generate or paraphrase — only compiles what exists
  // with full attribution.

  const GuidelineCompiler = {

    /**
     * Compile relevant guideline references for the case.
     * Returns structured data with citation info and excerptable content.
     * 
     * IMPORTANT: This does NOT fetch the actual text from URLs.
     * It compiles the metadata and validation points from the
     * guidelines library (which were manually curated and verified).
     * The student uses the URLs to access the full source documents.
     */
    compile: function(caseId, diagnosis, guidelineResults) {
      if (!guidelineResults || !guidelineResults.found) return null;

      var compilation = {
        caseId: caseId,
        diagnosis: diagnosis,
        compiledAt: new Date().toISOString(),
        guidelines: [],
        notice: 'All materials below are from open-access, peer-reviewed sources. Full citations with DOIs and URLs are provided. Access the original publications for complete content. These references are provided for educational use under Creative Commons or equivalent open-access licenses.'
      };

      guidelineResults.guidelines.forEach(function(g) {
        compilation.guidelines.push({
          citation: g.authors + '. ' + g.title + '. ' + g.journal + '. ' + g.year + '.',
          doi: g.doi || null,
          url: g.url,
          openAccess: g.openAccess,
          category: g.category,
          keyPoints: g.validates || [],
          // These are the specific validated content points from the
          // guidelines library — each one was manually verified by
          // Dr. Fine against the source publication.
          studyFocus: 'Review the following sections in this guideline: ' +
            (g.validates || []).slice(0, 4).join('; ')
        });
      });

      return compilation;
    },

    /**
     * Format compilation as a study reference sheet.
     */
    toText: function(compilation) {
      if (!compilation) return 'No guideline references available for this case.';

      var lines = [];
      lines.push('═══════════════════════════════════════════════════');
      lines.push('GUIDELINE REFERENCE SHEET');
      lines.push('Case: ' + compilation.caseId + ' — ' + compilation.diagnosis);
      lines.push('Compiled: ' + compilation.compiledAt.split('T')[0]);
      lines.push('═══════════════════════════════════════════════════');
      lines.push('');
      lines.push(compilation.notice);
      lines.push('');

      compilation.guidelines.forEach(function(g, i) {
        lines.push('── REFERENCE ' + (i + 1) + ' ──');
        lines.push('Citation: ' + g.citation);
        if (g.doi) lines.push('DOI: ' + g.doi);
        if (g.url) lines.push('URL: ' + g.url);
        lines.push('Open Access: ' + (g.openAccess ? 'Yes' : 'Check publisher'));
        lines.push('');
        if (g.keyPoints.length > 0) {
          lines.push('Key validated content to review:');
          g.keyPoints.forEach(function(kp) {
            lines.push('  • ' + kp);
          });
        }
        lines.push('');
        lines.push(g.studyFocus);
        lines.push('');
      });

      return lines.join('\n');
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // 4. NOTEBOOKLM BRIDGE
  // ═══════════════════════════════════════════════════════════════
  // Combines all outputs into a single document optimized for
  // import into Google NotebookLM as a source.

  const NotebookLMBridge = {

    /**
     * Generate a complete study package for NotebookLM import.
     * This is a single text document the student uploads as a
     * source in NotebookLM, then uses NotebookLM's AI features
     * (podcast, quiz, conversation) to study the material.
     */
    generatePackage: function(receipt, prompts, guidelineCompilation, caseData) {
      var lines = [];

      // Header
      lines.push('═══════════════════════════════════════════════════');
      lines.push('REASONDX + NOTEBOOKLM STUDY PACKAGE');
      lines.push('═══════════════════════════════════════════════════');
      lines.push('');
      lines.push('This document was generated by ReasonDx after completing');
      lines.push('a clinical reasoning simulation. Upload this document as');
      lines.push('a source in Google NotebookLM to study the topics you');
      lines.push('need to review. Use NotebookLM\'s Audio Overview, quiz,');
      lines.push('and conversation features to explore these materials.');
      lines.push('');
      lines.push('IMPORTANT: This document contains your performance data,');
      lines.push('study questions, and references to verified sources.');
      lines.push('It does NOT contain AI-generated medical teaching content.');
      lines.push('All medical content comes from peer-reviewed open-access');
      lines.push('guidelines with full citations provided.');
      lines.push('');

      // Section 1: Performance Receipt
      lines.push('');
      lines.push(PerformanceReceipt.toText(receipt));
      lines.push('');

      // Section 2: Study Prompts
      lines.push('');
      lines.push(StudyPrompts.toText(prompts, receipt.header.studentName, receipt.header.caseId));
      lines.push('');

      // Section 3: Guideline References
      if (guidelineCompilation) {
        lines.push('');
        lines.push(GuidelineCompiler.toText(guidelineCompilation));
        lines.push('');
      }

      // Section 4: Self-Assessment Reflection Questions
      lines.push('');
      lines.push('═══════════════════════════════════════════════════');
      lines.push('SELF-ASSESSMENT REFLECTION');
      lines.push('═══════════════════════════════════════════════════');
      lines.push('');
      lines.push('After studying the materials above, answer these');
      lines.push('reflection questions (write your answers below or');
      lines.push('discuss with NotebookLM):');
      lines.push('');
      lines.push('1. What history categories did I miss, and why?');
      lines.push('   Was it a knowledge gap (I didn\'t know to ask)');
      lines.push('   or a process gap (I knew but forgot)?');
      lines.push('');
      lines.push('2. If I ran this case again, what would I do');
      lines.push('   differently in the first 5 minutes?');
      lines.push('');
      lines.push('3. How did the radiology report influence my');
      lines.push('   thinking? Did I integrate it with the clinical');
      lines.push('   history, or did I anchor on the report\'s');
      lines.push('   suggested differential?');
      lines.push('');
      lines.push('4. What is my plan for closing the gaps identified');
      lines.push('   in this session? What specific resources will I');
      lines.push('   use, and when will I review this material again?');
      lines.push('');

      // Footer with next steps
      lines.push('');
      lines.push('═══════════════════════════════════════════════════');
      lines.push('SUGGESTED NEXT STEPS');
      lines.push('═══════════════════════════════════════════════════');
      lines.push('');
      lines.push('1. Upload this document to Google NotebookLM');
      lines.push('2. Also upload your relevant lecture notes and');
      lines.push('   required readings for the topic');
      lines.push('3. Use NotebookLM\'s Audio Overview to hear a');
      lines.push('   discussion of the key concepts');
      lines.push('4. Use NotebookLM\'s quiz feature to test your');
      lines.push('   understanding of the study questions above');
      lines.push('5. Return to ReasonDx and try another case to');
      lines.push('   apply what you learned');
      lines.push('');

      return lines.join('\n');
    },

    /**
     * Download the study package as a text file.
     */
    download: function(packageText, studentName, caseId) {
      var filename = 'ReasonDx_StudyPackage_' + caseId + '_' + studentName.replace(/\s+/g, '_') + '_' + new Date().toISOString().split('T')[0] + '.txt';
      var blob = new Blob([packageText], { type: 'text/plain' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      a.click();
    }
  };


  // ═══════════════════════════════════════════════════════════════
  // EXPORTS
  // ═══════════════════════════════════════════════════════════════

  window.RdxStudyTools = {
    PerformanceReceipt: PerformanceReceipt,
    StudyPrompts: StudyPrompts,
    GuidelineCompiler: GuidelineCompiler,
    NotebookLMBridge: NotebookLMBridge,
    version: '1.0.0'
  };

})();
