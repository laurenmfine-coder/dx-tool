/* eslint-disable no-console */ if(typeof window!=='undefined'&&!window.RDX_DEV){var _ce=console.error;console.error=function(){};}
/* rdx-demo-data.js — Injects realistic demo data for faculty dashboard testing
 * Run from browser console: RDXDemoData.inject()
 * Or add ?demo=1 to faculty-dashboard.html URL for auto-inject
 */
(function() {
  'use strict';

  function dbSet(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); } catch(e) { console.error('localStorage write failed', k, e); }
  }

  // ── DEMO USERS ─────────────────────────────────────────────────────────────
  var DEMO_FACULTY = [
    { username: 'lfine@nsu.edu',  displayName: 'Dr. Lauren Fine', tier: 'admin' },
    { username: 'jsmith@nsu.edu', displayName: 'Dr. James Smith', tier: 'faculty' },
  ];

  var DEMO_STUDENTS = [
    { username: 'alopez@nsu.edu',    displayName: 'Ana Lopez' },
    { username: 'mchen@nsu.edu',     displayName: 'Michael Chen' },
    { username: 'srahman@nsu.edu',   displayName: 'Sara Rahman' },
    { username: 'dwalker@nsu.edu',   displayName: 'Devon Walker' },
    { username: 'priya.n@nsu.edu',   displayName: 'Priya Nair' },
    { username: 'jkimura@nsu.edu',   displayName: 'Jake Kimura' },
  ];

  // ── SAMPLE NOTE CONTENT ───────────────────────────────────────────────────
  var SAMPLE_NOTES = {
    'alopez@nsu.edu': {
      hpi: 'Ms. Washington-Carter is a 68-year-old female with a history of hypertension on lisinopril who presents with acute onset tongue and lip swelling beginning approximately 3 hours prior to arrival. Patient was at rest when she noticed progressive swelling of her lower lip, which spread to involve the tongue and floor of mouth. Denies associated urticaria, pruritus, or throat tightness. No recent dietary changes, new medications, or known allergen exposures. Patient has been on lisinopril 10mg daily for 6 years. Reports a similar but milder episode approximately 8 months ago that self-resolved. No family history of recurrent angioedema.',
      assessment: 'PRIMARY DIAGNOSIS: ACE Inhibitor-mediated Angioedema\n\nDIFFERENTIAL DIAGNOSIS:\n1. ACE Inhibitor Angioedema (most likely) — bradykinin-mediated, not histamine; non-urticarial pattern consistent; no pruritus; chronic lisinopril use with prior episode\n2. Hereditary Angioedema (HAE) — consider given recurrent episodes; would need C4/C1-INH levels; no family hx but de novo mutations possible\n3. Allergic Angioedema — less likely without urticaria, trigger exposure, or pruritus\n4. Idiopathic Angioedema — diagnosis of exclusion\n\nKEY DISTINGUISHING FEATURES: Absence of urticaria and pruritus argues strongly against IgE-mediated; bradykinin-mediated angioedema does NOT respond to epinephrine or antihistamines.',
      plan: 'IMMEDIATE MANAGEMENT:\n- Discontinue lisinopril — critical, this is definitive treatment\n- Airway monitoring q30min — progressive lingual edema can cause airway compromise\n- IV access and airway equipment at bedside\n- Epinephrine NOT indicated (bradykinin-mediated, not IgE)\n- Antihistamines NOT indicated but may give for patient reassurance\n- Fresh Frozen Plasma (FFP) 2 units IV if severe/progressing — contains ACE and C1-INH\n- Icatibant (bradykinin B2 receptor antagonist) 30mg SQ — preferred if available\n\nFOLLOW-UP:\n- Allergy/Immunology referral within 1-2 weeks\n- C4, C1-INH level, C1q to rule out HAE/acquired C1-INH deficiency\n- Patient education: avoid all ACE inhibitors lifelong; ARBs generally safe but monitor\n- MedicAlert bracelet',
      communication: 'Patient was counseled in clear terms about the diagnosis and the critical importance of never taking ACE inhibitors again. She verbalized understanding and agreed to follow up with allergy. Family member present and included in discussion. Instructions provided in both English and arranged for written Spanish summary given family preference. All questions answered. Discharge paperwork prepared with red-flag symptoms requiring immediate return to ED.'
    },
    'mchen@nsu.edu': {
      hpi: '32-year-old female, Lucia Santos-Rivera, presents with difficulty breathing and hives on hands and arms after cleaning bathrooms at work with latex gloves approximately 1 hour ago. Onset was gradual over 20-30 minutes. Reports urticaria on both hands, forearms extending to upper arms. Associated mild throat tightness and voice change — hoarseness noted. Denies syncope, GI symptoms, or prior anaphylaxis. Works as house cleaner. Uninsured. Reports prior latex sensitivity — rash with gloves in the past — but never this severe. EpiPen prescribed last year, expired, left at home.',
      assessment: 'PRIMARY DIAGNOSIS: Anaphylaxis — Latex-triggered, occupational exposure\n\nDIFFERENTIAL:\n1. Anaphylaxis (confirmed) — meets Brighton Collaboration criteria: urticaria + respiratory symptoms (throat tightness, hoarseness) after allergen exposure\n2. Contact Dermatitis — cannot explain laryngeal involvement\n3. Asthma exacerbation — no prior asthma history, pattern does not fit\n\nSEVERITY: Grade 3 (laryngeal involvement with hoarseness = airway compromise risk)\nCOMPLICATING FACTORS: Uninsured, expired EpiPen, occupational exposure requiring workplace accommodation',
      plan: 'ACUTE:\n- Epinephrine 0.3mg IM anterolateral thigh NOW — do not delay\n- Supplemental O2 if SpO2 < 95%\n- IV access, normal saline bolus\n- Diphenhydramine 25-50mg IV\n- Methylprednisolone 125mg IV\n- Continuous cardiac monitoring\n- Repeat epinephrine in 5-15 min if inadequate response\n- Observe minimum 4-6 hours for biphasic reaction\n\nDISCHARGE PLANNING:\n- Prescribe 2 EpiPen auto-injectors — patient counseled on use\n- 340B pharmacy for cost assistance given uninsured status\n- Work restrictions: avoid all latex-containing products\n- OSHA workplace notification discussed\n- Allergy referral for latex-specific IgE, patch testing\n- Spanish interpreter engaged for all discharge instructions',
      communication: 'Interpreter services engaged. Patient counseled on anaphylaxis recognition, epinephrine self-administration demonstrated with trainer device — patient successfully return-demonstrated. Discharge instructions in Spanish provided. OSHA workplace rights discussed. Follow-up appointment arranged with sliding-scale allergy clinic. Patient demonstrated understanding of latex avoidance and workplace accommodation rights.'
    },
    'srahman@nsu.edu': {
      hpi: 'Patient is a 16-year-old female, presenting from school event where she reportedly ate an item possibly containing peanuts. Reports progressive throat tightness and diffuse urticaria beginning 15-20 minutes after eating. Known peanut allergy since age 4 — has EpiPen prescribed but was embarrassed to use it in front of peers. Transported by school nurse. Currently anxious and crying. Vitals on arrival: BP 98/62, HR 118, SpO2 97%.',
      assessment: 'DIAGNOSIS: Anaphylaxis — Peanut, adolescent with psychosocial barriers to epinephrine use\n\nDIFFERENTIAL:\n1. Anaphylaxis — confirmed: urticaria + throat tightness + hypotension + tachycardia post allergen\n2. Vasovagal reaction — cannot explain urticaria\n3. Panic attack — cannot explain objective findings\n\nNOTE: Critical teaching point — delay in epinephrine due to social anxiety is a documented pediatric anaphylaxis mortality risk factor. MUST address at discharge.',
      plan: 'ACUTE TREATMENT GIVEN:\n- Epinephrine 0.3mg IM right thigh\n- IV access established\n- Diphenhydramine 25mg IV\n- Famotidine 20mg IV\n- Normal saline 500mL bolus for hypotension\n- Methylprednisolone 60mg IV\n- Monitoring: repeat vitals q15min, continuous SpO2/cardiac\n\nResponse: BP improved to 112/70, HR decreased to 94, throat tightness resolved at 30 min\n4-hour observation period for biphasic reaction\n\nDISCHARGE PLAN:\n- 2 EpiPen 0.3mg prescribed\n- Anaphylaxis action plan completed (school copy, home copy, teen copy)\n- Adolescent counseling re: epinephrine use in social settings\n- Referral to adolescent allergy for psychosocial support\n- Peanut OIT discussion',
      communication: 'Patient initially tearful and refusing to discuss social concerns. Spent 15 minutes alone with patient (parent asked to step out). Validated her social anxiety around EpiPen use. Used motivational interviewing — asked her to identify what would be harder: the embarrassment of using EpiPen or being in the hospital. Shift noted in her thinking. School nurse to be contacted with permission regarding in-school plan. Mom counseled separately about not shaming over EpiPen delay. Follow-up with social work recommended.'
    },
    'dwalker@nsu.edu': {
      hpi: 'Devon Walker, a 45-year-old male presenting with recurrent facial swelling and severe abdominal cramping. This is his fourth episode in the past 18 months. Episodes last 3-4 days without treatment. No urticaria. No precipitating allergen identified. Family history: mother with similar episodes, one sibling with bowel obstruction-like presentation attributed to unknown cause. Current episode began 12 hours ago. Denies ACE inhibitor use. Labs drawn in ED.',
      assessment: 'PRIMARY DIAGNOSIS: Hereditary Angioedema (HAE) — Type I most likely\n\nSUPPORTING EVIDENCE:\n- Recurrent non-urticarial angioedema\n- Family history (autosomal dominant pattern)\n- Abdominal involvement (classic HAE)\n- Not responsive to antihistamines (bradykinin-mediated)\n- No urticaria\n\nLAB CORRELATION:\n- C4: low (screening test — low sensitivity/specificity during remission; more sensitive during attack)\n- C1-INH level: low (consistent with Type I)\n- C1q: normal (distinguishes HAE from acquired C1-INH deficiency)\n- C1-INH function: pending\n\nTYPE DIFFERENTIATION:\n- Type I (80%): low C1-INH level + low function\n- Type II (20%): normal/elevated level, low function\n- HAE with normal C1-INH: diagnosed clinically, genetic testing needed',
      plan: 'ACUTE EPISODE MANAGEMENT:\n- Icatibant (Firazyr) 30mg SQ now — bradykinin B2 antagonist, fastest onset\n- OR C1-INH concentrate (Berinert) 20 units/kg IV if icatibant unavailable\n- FFP 2 units IV as backup if above unavailable\n- IV fluid support\n- Pain management for abdominal cramping\n- IV morphine 2-4mg q4h PRN\n\nLONG-TERM:\n- Hematology/Immunology referral for HAE management\n- Consider prophylaxis: lanadelumab (Takhzyro) q2weeks or C1-INH concentrate\n- AVOID ACE inhibitors, estrogen-containing contraceptives, dental trauma\n- HAE action plan and patient ID card\n- Family screening recommended\n- Genetic counseling',
      communication: 'Patient relieved to have a diagnosis after years of recurrent episodes. Extensive counseling provided regarding HAE, triggers, and the importance of always having rescue medication. Patient asked insightful questions about the genetics — discussed autosomal dominant pattern and family screening. Written materials provided. HAE US patient association resources shared. Follow-up appointment made with immunology within 1 week.'
    },
    'priya.n@nsu.edu': {
      hpi: 'Priya Nair, 28F medical student, presents as a simulated standardized patient encounter. Chief complaint: throat tightness and hives after bee sting 20 minutes ago. Known bee allergy with prior reaction requiring ER visit 2 years ago — was prescribed EpiPen but reports she stopped carrying it.',
      assessment: 'DIAGNOSIS: Anaphylaxis — Hymenoptera sting\n\n[Note: incomplete differential — only listed anaphylaxis, did not consider alternative diagnoses or severity grading. Missing: systemic mastocytosis as comorbidity to consider with severe venom reactions.]\n\nSEVERITY: Grade 2 (urticaria + mild respiratory without hypotension)',
      plan: 'Treatment given per protocol. EpiPen prescribed. Referral to allergy placed.\n\n[Note: Venom immunotherapy discussion absent — this is the standard of care discussion for systemic Hymenoptera reactions. Failure to document VIT counseling is a significant gap for this case type.]',
      communication: 'Basic discharge instructions provided. Patient concerns addressed.'
    },
    'jkimura@nsu.edu': {
      hpi: 'Jake Kimura is a 19-year-old male who presents with worsening shortness of breath and wheezing for 3 days. He has a history of asthma since childhood, usually well-controlled on a low-dose inhaled corticosteroid. He has been using his albuterol rescue inhaler every 3-4 hours for the past 2 days without adequate relief. He reports a recent upper respiratory tract infection. Denies fever, chest pain, or productive cough. He has had one previous hospitalization for asthma at age 12.',
      assessment: 'ASSESSMENT:\n1. Moderate-Severe Asthma Exacerbation — likely viral-triggered\n   - FEV1 estimated 40-60% predicted based on exam\n   - Using accessory muscles, mild expiratory wheeze throughout\n   - Refractory to home albuterol\n\nDIFFERENTIAL:\n2. Allergic reaction with bronchospasm\n3. Vocal Cord Dysfunction — more inspiratory, can mimic\n4. Pneumonia — no fever, imaging ordered',
      plan: 'ACUTE:\n- Albuterol 2.5mg nebulization q20min x3\n- Ipratropium 0.5mg nebulization x3 doses\n- Methylprednisolone 60mg PO (or IV if cannot take PO)\n- Supplemental O2 to maintain SpO2 > 95%\n- CXR ordered\n- Repeat PEFR after initial treatment\n\nRESPONSE: Good response to initial treatment — PEFR improved from 45% to 72% predicted\n\nSTEP-UP THERAPY:\n- Increase ICS to medium dose\n- Add LABA if not already on combination\n- Prednisone 40mg daily x5 days\n\nFOLLOW-UP:\n- PCP within 3-5 days\n- Asthma action plan updated',
      communication: 'Patient counseled on asthma step-up therapy and importance of ICS adherence. Taught difference between controller and rescue inhalers using the "fire vs smoke alarm" analogy. Inhaler technique observed and corrected — was using spacer incorrectly. Asthma Action Plan (Green/Yellow/Red zones) completed and reviewed. Follow-up scheduled with primary care for spirometry in 4 weeks.'
    }
  };

  // ── TIMESTAMPS ────────────────────────────────────────────────────────────
  function hoursAgo(h) { return new Date(Date.now() - h * 3600000).toISOString(); }

  // ── GRADER FEEDBACK ───────────────────────────────────────────────────────
  var FEEDBACK = {
    'alopez@nsu.edu': {
      scores: { hpi: 28, assessment: 23, plan: 24, communication: 19 },
      comments: {
        hpi: 'Excellent HPI — chronological, complete, includes pertinent negatives (no urticaria/pruritus). Mention of prior similar episode is critical and well-captured.',
        assessment: 'Strong differential with clear reasoning. ACE-INH vs HAE distinction is exactly right. Consider adding acquired C1-INH deficiency to the differential given age and absence of family history.',
        plan: 'Near-perfect plan. The distinction between bradykinin and IgE-mediated management (no epi, no antihistamines primarily) is a key teaching point you got exactly right. Good to include icatibant.',
        communication: 'Outstanding communication documentation. Multilingual support, family inclusion, MedicAlert — comprehensive. This is the standard.',
      },
      overallComment: 'Ana — this is exceptional work. Your differential reasoning on ACE-INH angioedema demonstrates sophisticated understanding of immunology mechanisms. The key insight that bradykinin-mediated angioedema does NOT respond to epinephrine is something many physicians miss. Your communication section reflects true patient-centered care. Grade: 94/100.',
      grader: 'Dr. Lauren Fine',
      timestamp: hoursAgo(6),
      totalScore: 94,
      maxScore: 100
    },
    'mchen@nsu.edu': {
      scores: { hpi: 27, assessment: 22, plan: 23, communication: 20 },
      comments: {
        hpi: 'Well-organized HPI. Good to document prior latex sensitivity and expired EpiPen status — both are clinically and medically-legally important.',
        assessment: 'Solid diagnosis and severity grading. Consider noting that this case has occupational exposure implications and may require OSHA reporting.',
        plan: 'Excellent acute management. The 340B pharmacy consideration for an uninsured patient shows real-world clinical awareness. OSHA discussion is excellent.',
        communication: 'Best communication section in the cohort. Use of interpreter, return demonstration of EpiPen technique, and addressing workplace rights are all exemplary.',
      },
      overallComment: 'Michael — this note demonstrates strong clinical reasoning combined with excellent social awareness. The EpiPen return demonstration documentation and 340B mention are things residents sometimes forget. Workplace advocacy for the patient was especially impressive. Grade: 92/100.',
      grader: 'Dr. Lauren Fine',
      timestamp: hoursAgo(5),
      totalScore: 92,
      maxScore: 100
    },
    'srahman@nsu.edu': null  // not yet graded
  };

  // ── ANNOTATIONS ──────────────────────────────────────────────────────────
  var ANNOTATIONS = {
    'alopez@nsu.edu': [
      { selectedText: 'Epinephrine NOT indicated (bradykinin-mediated, not IgE)', comment: '✅ Excellent reasoning — this is a high-yield distinction. Many providers reflexively give epi. Understanding the mechanism changes management.', color: '#2874A6', grader: 'Dr. Lauren Fine', timestamp: hoursAgo(6) },
      { selectedText: 'Fresh Frozen Plasma (FFP) 2 units IV if severe/progressing', comment: '✅ Good alternative listed. Note: FFP contains ACE which theoretically could worsen HAE — but for ACE-INH angioedema it provides C1-INH and is appropriate.', color: '#059669', grader: 'Dr. Lauren Fine', timestamp: hoursAgo(6) },
      { selectedText: 'C4, C1-INH level, C1q to rule out HAE', comment: '✅ Perfect workup. C4 is your screening test. C1q distinguishes HAE type 3 (acquired) from HAE types 1/2.', color: '#2874A6', grader: 'Dr. Lauren Fine', timestamp: hoursAgo(6) },
    ],
    'mchen@nsu.edu': [
      { selectedText: 'Grade 3 (laryngeal involvement with hoarseness = airway compromise risk)', comment: '✅ Excellent severity grading and reasoning.', color: '#2874A6', grader: 'Dr. Lauren Fine', timestamp: hoursAgo(5) },
      { selectedText: 'OSHA workplace notification discussed', comment: '✅ This is often forgotten. Occupational latex anaphylaxis is a reportable occupational illness in most states.', color: '#059669', grader: 'Dr. Lauren Fine', timestamp: hoursAgo(5) },
    ],
    'priya.n@nsu.edu': [
      { selectedText: 'Venom immunotherapy discussion absent', comment: '⚠️ VIT reduces risk of future systemic reactions from ~60% to <5%. This MUST be documented for all patients with systemic Hymenoptera reactions.', color: '#DC2626', grader: 'Dr. Lauren Fine', timestamp: hoursAgo(2) },
      { selectedText: 'only listed anaphylaxis, did not consider alternative diagnoses', comment: '⚠️ Even when confident, always document a brief differential. Consider systemic mastocytosis (elevated tryptase) with severe venom reactions.', color: '#D97706', grader: 'Dr. Lauren Fine', timestamp: hoursAgo(2) },
    ]
  };

  // ── INJECTION ─────────────────────────────────────────────────────────────
  window.RDXDemoData = {

    inject: function() {
      // 1. Users
      var users = {};
      DEMO_FACULTY.forEach(function(u) { users[u.username] = u; });
      DEMO_STUDENTS.forEach(function(u) { users[u.username] = u; });
      dbSet('emr-users', users);

      // 2. Roles
      var roles = {};
      DEMO_FACULTY.forEach(function(u) { roles[u.username] = u.tier === 'admin' ? 'admin' : 'faculty'; });
      DEMO_STUDENTS.forEach(function(u) { roles[u.username] = 'student'; });
      dbSet('emr-roles', roles);

      // 3. Assignments: Dr. Fine gets first 4 students, Dr. Smith gets last 2
      var assignments = {
        'lfine@nsu.edu':  ['alopez@nsu.edu','mchen@nsu.edu','srahman@nsu.edu','dwalker@nsu.edu'],
        'jsmith@nsu.edu': ['priya.n@nsu.edu','jkimura@nsu.edu']
      };
      dbSet('emr-assignments', assignments);

      // 4. Submissions
      var submissionTimes = {
        'alopez@nsu.edu':  hoursAgo(48),
        'mchen@nsu.edu':   hoursAgo(36),
        'srahman@nsu.edu': hoursAgo(24),
        'dwalker@nsu.edu': hoursAgo(12),
        'priya.n@nsu.edu': hoursAgo(8),
        'jkimura@nsu.edu': hoursAgo(3)
      };
      var caseIds = {
        'alopez@nsu.edu':  'ace-angioedema',
        'mchen@nsu.edu':   'anaphylaxis-v3',
        'srahman@nsu.edu': 'anaphylaxis-v4',
        'dwalker@nsu.edu': 'hereditary-angioedema',
        'priya.n@nsu.edu': 'insect-sting-anaphylaxis',
        'jkimura@nsu.edu': 'asthma-exacerbation'
      };
      var weekLabels = {
        'alopez@nsu.edu':  'Week 3 — Angioedema',
        'mchen@nsu.edu':   'Week 2 — Anaphylaxis',
        'srahman@nsu.edu': 'Week 2 — Anaphylaxis',
        'dwalker@nsu.edu': 'Week 4 — HAE',
        'priya.n@nsu.edu': 'Week 3 — Venom Allergy',
        'jkimura@nsu.edu': 'Week 1 — Asthma'
      };

      DEMO_STUDENTS.forEach(function(student) {
        var uid = student.username;
        var note = SAMPLE_NOTES[uid] || {};
        var sub = {
          week:       weekLabels[uid] || 'Week 1',
          fields:     { hpi: note.hpi||'', assessment: note.assessment||'', plan: note.plan||'', communication: note.communication||'' },
          text:       [note.hpi, note.assessment, note.plan, note.communication].filter(Boolean).join('\n\n'),
          timestamp:  submissionTimes[uid],
          patient:    'Simulated Patient',
          studentName: uid,
          caseId:     caseIds[uid] || ''
        };
        dbSet('subs-' + uid, [sub]);
      });

      // 5. Feedback (pre-graded for Ana + Michael; none for others)
      Object.keys(FEEDBACK).forEach(function(uid) {
        var fb = FEEDBACK[uid];
        if (fb) {
          dbSet('feedback-' + uid + '-' + (weekLabels[uid] || 'Week 1'), fb);
        }
      });

      // 6. Annotations
      Object.keys(ANNOTATIONS).forEach(function(uid) {
        var ann = ANNOTATIONS[uid];
        if (ann && ann.length) {
          var week = weekLabels[uid] || 'Week 1';
          dbSet('annotations-' + uid + '-' + week, ann);
        }
      });

      // 7. Set current user as Dr. Fine (admin) — write BOTH keys so all code paths work
      var adminUser = { username: 'lfine@nsu.edu', displayName: 'Dr. Lauren Fine', role: 'admin', tier: 'admin', _demo: true };
      dbSet('emr-current-user', adminUser);
      // Also write reasondx-user (the Supabase session key) so virtual-emr.html auth bridge accepts it
      dbSet('reasondx-user', { email: 'lfine@nsu.edu', name: 'Dr. Lauren Fine', tier: 'admin', supabaseId: 'lfine@nsu.edu', _demo: true });
      // Write a student session too for the EMR student-simulation tab
      // (stored separately so each tab can have its own user context via URL ?as= param)

      console.log('[RDXDemoData] ✅ Demo data injected. Reloading faculty dashboard...');
      setTimeout(function(){ window.location.reload(); }, 400);
    },

    clear: function() {
      var keys = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && (k.startsWith('subs-') || k.startsWith('feedback-') || k.startsWith('annotations-') ||
            k === 'emr-users' || k === 'emr-roles' || k === 'emr-assignments' || k === 'emr-current-user' || k === 'reasondx-user')) {
          keys.push(k);
        }
      }
      keys.forEach(function(k){ localStorage.removeItem(k); });
      console.log('[RDXDemoData] Cleared ' + keys.length + ' demo keys');
      setTimeout(function(){ window.location.reload(); }, 200);
    }
  };

  // Auto-inject if ?demo=1 in URL
  if (window.location.search.indexOf('demo=1') >= 0) {
    window.addEventListener('DOMContentLoaded', function() {
      if (!localStorage.getItem('emr-users')) {
        console.log('[RDXDemoData] Auto-injecting demo data...');
        RDXDemoData.inject();
      }
    });
  }

})();
