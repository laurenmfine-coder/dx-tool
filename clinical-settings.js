// ═══════════════════════════════════════════════════════════════
// CLINICAL SETTINGS CONFIGURATION
// Defines settings, specialties, note templates, reasoning prompts,
// CoachDx personas, and case-specialty mapping
// ═══════════════════════════════════════════════════════════════

window.CLINICAL_SETTINGS = {

  // ─── CLINICAL SETTINGS (where am I?) ───
  settings: [
    {
      id: "ed",
      label: "Emergency Department",
      icon: "🚨",
      color: "#C62828",
      description: "Diagnose, stabilize, dispo. Triage acuity drives urgency. Time-pressured reasoning with incomplete data.",
      roleFrame: "ED Physician / Student",
      workflow: "triage-stabilize-diagnose-dispo",
      timeModel: "compressed-realtime",
      noteType: "ed-note",
      available: true
    },
    {
      id: "inpatient",
      label: "Inpatient Floor",
      icon: "🏥",
      color: "#1565C0",
      description: "Inherit the ED workup. Refine the diagnosis. Build a management plan. Anticipate complications. Plan for discharge.",
      roleFrame: "Admitting Resident / Student",
      workflow: "handoff-admit-manage-discharge",
      timeModel: "day-based",
      noteType: "admission-hp",
      available: true
    },
    {
      id: "consult",
      label: "Inpatient Consult",
      icon: "📋",
      color: "#6A1B9A",
      description: "Answer the specific clinical question. Provide specialty-level assessment. Recommend targeted workup.",
      roleFrame: "Consulting Specialist",
      workflow: "question-assess-recommend",
      timeModel: "single-encounter",
      noteType: "consult-note",
      available: true
    },
    {
      id: "icu",
      label: "ICU",
      icon: "💓",
      color: "#AD1457",
      description: "Manage multi-organ failure. Titrate drips. Monitor ventilator settings. Navigate goals-of-care.",
      roleFrame: "Critical Care Team",
      workflow: "stabilize-monitor-titrate",
      timeModel: "hour-based",
      noteType: "icu-note",
      available: true
    },
    {
      id: "clinic",
      label: "Outpatient Clinic",
      icon: "🩺",
      color: "#2E7D32",
      description: "Longitudinal management. Preventive care. Medication adjustments. Coordination across providers.",
      roleFrame: "PCP or Specialist",
      workflow: "review-assess-adjust-coordinate",
      timeModel: "visit-based",
      noteType: "clinic-soap",
      available: true
    },
    {
      id: "post-discharge",
      label: "Post-Discharge Follow-Up",
      icon: "🔄",
      color: "#00838F",
      description: "Transition of care. Reconcile medications. Assess recovery. Prevent readmission.",
      roleFrame: "Outpatient Provider",
      workflow: "reconcile-assess-prevent",
      timeModel: "visit-based",
      noteType: "followup-note",
      available: true
    }
  ],

  // ─── SPECIALTY ROTATIONS (what lens am I using?) ───
  specialties: [
    {
      id: "im",
      label: "Internal Medicine",
      abbrev: "IM",
      icon: "🫀",
      color: "#1565C0",
      settings: ["ed", "inpatient", "icu", "clinic", "post-discharge", "consult"],
      reasoningFocus: "Systems-based assessment. Problem-list thinking. Comorbidity management. Evidence-based guidelines.",
      caseRelevance: "all", // sees all cases
      noteFlavor: "Problem-based A&P. Address each active issue. DVT prophylaxis. Code status.",
      coachPersona: "Medicine attending on teaching rounds"
    },
    {
      id: "surgery",
      label: "Surgery",
      abbrev: "Surg",
      icon: "🔪",
      color: "#B71C1C",
      settings: ["ed", "inpatient", "icu", "clinic", "post-discharge", "consult"],
      reasoningFocus: "Operative vs. non-operative decision-making. Surgical candidacy. Pre-op workup. Post-op complications.",
      caseRelevance: "surgical",
      noteFlavor: "Brief, focused. Operative plan or recommendation. Pre-op checklist. Wound/drain management.",
      coachPersona: "Surgery attending — efficient, decision-focused, expects concise answers"
    },
    {
      id: "pediatrics",
      label: "Pediatrics",
      abbrev: "Peds",
      icon: "👶",
      color: "#FF6F00",
      settings: ["ed", "inpatient", "icu", "clinic", "post-discharge", "consult"],
      reasoningFocus: "Age-appropriate differentials. Weight-based dosing. Developmental context. Family-centered care.",
      caseRelevance: "pediatric",
      noteFlavor: "Age/weight prominently noted. Growth parameters. Developmental milestones. Family education.",
      coachPersona: "Pediatrics attending — warm, developmental-aware, family-centered"
    },
    {
      id: "obgyn",
      label: "OB/GYN",
      abbrev: "OB",
      icon: "🤰",
      color: "#880E4F",
      settings: ["ed", "inpatient", "icu", "clinic", "post-discharge", "consult"],
      reasoningFocus: "Pregnancy physiology. Teratogenic awareness. Trimester-appropriate workup. Reproductive health.",
      caseRelevance: "obstetric-gynecologic",
      noteFlavor: "LMP/EGA prominently noted. Fetal status. Pregnancy-safe medications. OB-specific review of systems.",
      coachPersona: "OB/GYN attending — high-stakes awareness, dual-patient thinking"
    },
    {
      id: "psychiatry",
      label: "Psychiatry",
      abbrev: "Psych",
      icon: "🧠",
      color: "#4A148C",
      settings: ["ed", "inpatient", "clinic", "post-discharge", "consult"],
      reasoningFocus: "Risk assessment. Capacity evaluation. Involuntary hold criteria. Psychotropic management. Safety planning.",
      caseRelevance: "psychiatric",
      noteFlavor: "MSE detailed. Risk assessment explicit. Capacity documented. Safety plan. Legal holds if applicable.",
      coachPersona: "Psychiatry attending — empathic, risk-aware, medico-legal conscious"
    },
    {
      id: "fm",
      label: "Family Medicine",
      abbrev: "FM",
      icon: "👨‍👩‍👧‍👦",
      color: "#2E7D32",
      settings: ["ed", "inpatient", "clinic", "post-discharge"],
      reasoningFocus: "Whole-patient context. Preventive care. Chronic disease optimization. Social determinants. Care coordination.",
      caseRelevance: "all",
      noteFlavor: "Comprehensive. Preventive care checklist. Social history integrated into plan. Coordination notes.",
      coachPersona: "FM preceptor — holistic, prevention-oriented, community-aware"
    },
    {
      id: "neurology",
      label: "Neurology",
      abbrev: "Neuro",
      icon: "⚡",
      color: "#311B92",
      settings: ["ed", "inpatient", "icu", "clinic", "post-discharge", "consult"],
      reasoningFocus: "Localization-first reasoning. Vascular vs. structural vs. metabolic. Time-sensitive interventions. Rehab planning.",
      caseRelevance: "neurologic",
      noteFlavor: "Detailed neuro exam. Localization statement. Vascular territory. NIH Stroke Scale if applicable.",
      coachPersona: "Neurology attending — localize first, then diagnose"
    },
    {
      id: "em",
      label: "Emergency Medicine",
      abbrev: "EM",
      icon: "🚑",
      color: "#C62828",
      settings: ["ed"],
      reasoningFocus: "Triage, stabilize, diagnose, dispo. Can't-miss diagnoses. Time-pressured decision-making.",
      caseRelevance: "all",
      noteFlavor: "ED-specific MDM. Disposition reasoning. Critical actions documented.",
      coachPersona: "EM attending — fast, focused, what's going to kill this patient in the next hour?"
    }
  ],

  // ─── CASE-SPECIALTY RELEVANCE MAPPING ───
  // Maps presentation groups to specialty relevance
  specialtyRelevance: {
    "Abdominal Pain":       ["im", "surgery", "fm", "em", "pediatrics", "obgyn"],
    "Allergic Reaction":    ["im", "em", "fm", "pediatrics"],
    "Altered Mental Status": ["im", "neurology", "psychiatry", "em", "fm"],
    "Back Pain":            ["im", "surgery", "fm", "em", "neurology"],
    "Cardiac Emergency":    ["im", "em", "surgery"],
    "Chest Pain":           ["im", "em", "fm", "surgery"],
    "ENT/Airway Emergency": ["em", "surgery", "pediatrics", "fm"],
    "Endocrine Emergency":  ["im", "em", "fm", "pediatrics"],
    "Environmental Emergency": ["em", "im", "fm", "pediatrics"],
    "Eye Emergency":        ["em", "fm", "neurology"],
    "Fever/Sepsis":         ["im", "em", "fm", "pediatrics", "surgery"],
    "GI Emergency":         ["im", "surgery", "em", "fm"],
    "Geriatric Emergency":  ["im", "em", "fm", "neurology", "psychiatry"],
    "Headache":             ["im", "neurology", "em", "fm"],
    "Hematologic Emergency": ["im", "em", "surgery"],
    "Musculoskeletal Emergency": ["surgery", "em", "fm", "im"],
    "Obstetric Emergency":  ["obgyn", "em", "fm"],
    "Pediatric Emergency":  ["pediatrics", "em", "fm"],
    "Psychiatric Emergency": ["psychiatry", "em", "im"],
    "Renal/Electrolyte Emergency": ["im", "em", "fm"],
    "Seizure":              ["neurology", "em", "im", "pediatrics"],
    "Shortness of Breath":  ["im", "em", "fm", "surgery"],
    "Skin/Soft Tissue Emergency": ["surgery", "em", "im", "fm"],
    "Syncope":              ["im", "neurology", "em", "fm"],
    "Toxicologic Emergency": ["em", "im", "psychiatry"],
    "Trauma":               ["surgery", "em"],
    "Urologic Emergency":   ["surgery", "em", "im"],
    "Vascular Emergency":   ["surgery", "em", "im"],
    "Demo Patient":         ["fm", "im"]
  },

  // ─── NOTE TEMPLATES ───
  noteTemplates: {
    "ed-note": {
      label: "ED Note",
      sections: [
        { id: "cc", label: "CHIEF COMPLAINT", hint: "Reason for visit in patient's own words" },
        { id: "hpi", label: "HISTORY OF PRESENT ILLNESS", hint: "OLDCARTS. Pertinent positives and negatives.", size: "xlarge" },
        { id: "pmh", label: "PAST MEDICAL HISTORY", hint: "Active diagnoses, surgeries, hospitalizations" },
        { id: "psh", label: "PAST SURGICAL HISTORY", hint: "Prior surgeries with dates" },
        { id: "meds", label: "MEDICATIONS", hint: "Current meds: dose, route, frequency", size: "large" },
        { id: "allergies", label: "ALLERGIES", hint: "Drug/food/environmental + reaction type" },
        { id: "fhx", label: "FAMILY HISTORY", hint: "Pertinent to presentation" },
        { id: "shx", label: "SOCIAL HISTORY", hint: "Tobacco, alcohol, drugs, occupation, living" },
        { id: "ros", label: "REVIEW OF SYSTEMS", hint: "Constitutional · HEENT · CV · Resp · GI · GU · MSK · Neuro · Psych · Skin", size: "large" },
        { id: "pe", label: "PHYSICAL EXAMINATION", hint: "General · HEENT · Neck · CV · Resp · Abdomen · Extremities · Neuro · Skin", size: "xlarge" },
        { id: "assess", label: "ASSESSMENT", hint: "Numbered problem list with clinical reasoning; DDx if appropriate", size: "large" },
        { id: "plan", label: "PLAN", hint: "Evidence-based management for each problem", size: "large" }
      ]
    },
    "admission-hp": {
      label: "Admission H&P",
      sections: [
        { id: "cc", label: "CHIEF COMPLAINT / REASON FOR ADMISSION", hint: "Why is this patient being admitted?" },
        { id: "hpi", label: "HISTORY OF PRESENT ILLNESS", hint: "Include ED course, workup results, and interventions already performed.", size: "xlarge" },
        { id: "pmh", label: "PAST MEDICAL HISTORY", hint: "Comprehensive — all active conditions" },
        { id: "psh", label: "PAST SURGICAL HISTORY", hint: "Prior surgeries with dates and complications" },
        { id: "meds", label: "HOME MEDICATIONS", hint: "Reconcile: continue, hold, modify?", size: "large" },
        { id: "allergies", label: "ALLERGIES", hint: "Drug/food/environmental + reaction type" },
        { id: "fhx", label: "FAMILY HISTORY", hint: "Relevant to current admission" },
        { id: "shx", label: "SOCIAL HISTORY", hint: "Living situation, functional baseline, ADLs, substance use, supports" },
        { id: "ros", label: "REVIEW OF SYSTEMS", hint: "14-point review. Document pertinent positives and negatives.", size: "large" },
        { id: "pe", label: "PHYSICAL EXAMINATION", hint: "Complete examination on admission. Note baseline findings.", size: "xlarge" },
        { id: "assess", label: "ASSESSMENT", hint: "Problem-based assessment. For each problem: diagnosis, reasoning, severity, DDx.", size: "xlarge" },
        { id: "plan", label: "PLAN (by problem)", hint: "For each problem: interventions, monitoring, contingencies. Include DVT prophylaxis, diet, activity, code status.", size: "xlarge" },
        { id: "overnight", label: "OVERNIGHT ANTICIPATORY GUIDANCE", hint: "What could go wrong? What are the call-back parameters? Contingency orders.", size: "large" },
        { id: "dispo", label: "ANTICIPATED DISPOSITION", hint: "Expected LOS. Discharge criteria. Barriers to discharge. Follow-up needs." }
      ]
    },
    "progress-soap": {
      label: "Daily Progress Note (SOAP)",
      sections: [
        { id: "events", label: "OVERNIGHT EVENTS", hint: "Significant events, vitals trends, nursing concerns, new results" },
        { id: "subjective", label: "SUBJECTIVE", hint: "Patient's current symptoms, concerns, pain level, sleep, appetite", size: "large" },
        { id: "objective", label: "OBJECTIVE", hint: "Vitals, I&O, exam changes from prior day, new lab/imaging results", size: "xlarge" },
        { id: "assess", label: "ASSESSMENT", hint: "Update each active problem: improving, stable, or worsening? New problems?", size: "large" },
        { id: "plan", label: "PLAN", hint: "Changes to management today. New orders. Consults. Discharge planning update.", size: "large" }
      ]
    },
    "discharge-summary": {
      label: "Discharge Summary",
      sections: [
        { id: "admit-dx", label: "ADMISSION DIAGNOSIS", hint: "Principal diagnosis and secondary diagnoses" },
        { id: "discharge-dx", label: "DISCHARGE DIAGNOSIS", hint: "Final diagnoses — may differ from admission" },
        { id: "course", label: "HOSPITAL COURSE", hint: "Chronological summary of hospital stay: workup, treatments, response, complications", size: "xlarge" },
        { id: "discharge-meds", label: "DISCHARGE MEDICATIONS", hint: "Complete list with changes from home meds highlighted", size: "large" },
        { id: "followup", label: "FOLLOW-UP", hint: "Appointments, pending results, return precautions" },
        { id: "patient-ed", label: "PATIENT EDUCATION", hint: "What was discussed with the patient about their condition, medications, red flags" }
      ]
    },
    "clinic-soap": {
      label: "Outpatient Visit Note",
      sections: [
        { id: "cc", label: "CHIEF COMPLAINT / VISIT REASON", hint: "Today's concern(s) and/or routine follow-up" },
        { id: "hpi", label: "HISTORY OF PRESENT ILLNESS", hint: "Symptom update since last visit. Medication adherence. Functional status.", size: "large" },
        { id: "ros", label: "REVIEW OF SYSTEMS", hint: "Focused review pertinent to today's concerns", size: "large" },
        { id: "pe", label: "PHYSICAL EXAMINATION", hint: "Focused exam. Note changes from baseline.", size: "large" },
        { id: "results", label: "RESULTS REVIEW", hint: "Review labs, imaging, consult notes since last visit" },
        { id: "assess", label: "ASSESSMENT", hint: "Problem-based. Status of chronic conditions. New concerns.", size: "large" },
        { id: "plan", label: "PLAN", hint: "Medication changes. Referrals. Screenings due. Lifestyle counseling. Return visit.", size: "large" },
        { id: "preventive", label: "PREVENTIVE CARE", hint: "Immunizations, cancer screening, health maintenance items reviewed" }
      ]
    },
    "followup-note": {
      label: "Post-Discharge Follow-Up Note",
      sections: [
        { id: "discharge-review", label: "DISCHARGE SUMMARY REVIEW", hint: "Admission diagnosis, hospital course summary, discharge medications" },
        { id: "interval", label: "INTERVAL HISTORY", hint: "How has the patient been since discharge? New symptoms? Med adherence?", size: "large" },
        { id: "med-recon", label: "MEDICATION RECONCILIATION", hint: "Compare discharge meds to what patient is actually taking. Discrepancies?", size: "large" },
        { id: "pe", label: "PHYSICAL EXAMINATION", hint: "Focused exam. Recovery assessment. Wound check if applicable." },
        { id: "results", label: "PENDING RESULTS", hint: "Any results from hospitalization that need follow-up?" },
        { id: "assess", label: "ASSESSMENT", hint: "Recovery trajectory. Complications? Readmission risk factors.", size: "large" },
        { id: "plan", label: "PLAN", hint: "Medication adjustments. Additional workup. Specialist referrals. Return precautions.", size: "large" }
      ]
    },
    "consult-note": {
      label: "Consultation Note",
      sections: [
        { id: "consult-q", label: "REASON FOR CONSULTATION", hint: "What specific question is the primary team asking?" },
        { id: "hpi", label: "HISTORY (per specialty focus)", hint: "Review relevant history through your specialty lens.", size: "large" },
        { id: "pe", label: "PHYSICAL EXAMINATION", hint: "Specialty-focused examination.", size: "large" },
        { id: "assess", label: "ASSESSMENT", hint: "Specialty-specific differential and most likely diagnosis.", size: "large" },
        { id: "recs", label: "RECOMMENDATIONS", hint: "Specific, actionable recommendations for the primary team.", size: "large" },
        { id: "followup", label: "FOLLOW-UP PLAN", hint: "Will you follow daily? Triggers for re-consultation?" }
      ]
    },
    "icu-note": {
      label: "ICU Progress Note",
      sections: [
        { id: "events", label: "24-HOUR EVENTS", hint: "Codes, procedures, significant clinical changes, new consults" },
        { id: "neuro", label: "NEUROLOGIC", hint: "GCS, sedation level (RASS), neuro exam, pain (CPOT)" },
        { id: "cv", label: "CARDIOVASCULAR", hint: "Hemodynamics, pressors/inotropes, rhythm, access" },
        { id: "resp", label: "RESPIRATORY", hint: "Vent settings, ABG, oxygenation, weaning parameters" },
        { id: "gi-nutrition", label: "GI / NUTRITION", hint: "Diet/tube feeds, GRV, bowel function, LFTs" },
        { id: "renal", label: "RENAL / FLUIDS", hint: "UOP, I&O, electrolytes, RRT if applicable, IVF" },
        { id: "id", label: "INFECTIOUS DISEASE", hint: "Cultures, antibiotics (day #), temp curve, WBC trend" },
        { id: "heme", label: "HEMATOLOGIC", hint: "CBC, coags, transfusions, DVT prophylaxis" },
        { id: "endo", label: "ENDOCRINE", hint: "Glucose management, insulin protocol, thyroid, adrenal" },
        { id: "assess", label: "OVERALL ASSESSMENT", hint: "Trajectory: improving, stable, worsening. Goals of care.", size: "large" },
        { id: "plan", label: "PLAN BY SYSTEM", hint: "Action items per organ system. Wean/escalation plans. Family meeting needs.", size: "xlarge" }
      ]
    }
  },

  // ─── SETTING + SPECIALTY → NOTE TEMPLATE MAPPING ───
  // Determines which note template to use based on setting and context
  getNoteTemplate: function(settingId, encounterDay) {
    if (settingId === "ed") return this.noteTemplates["ed-note"];
    if (settingId === "clinic") return this.noteTemplates["clinic-soap"];
    if (settingId === "post-discharge") return this.noteTemplates["followup-note"];
    if (settingId === "consult") return this.noteTemplates["consult-note"];
    if (settingId === "icu") return this.noteTemplates["icu-note"];
    if (settingId === "inpatient") {
      if (encounterDay === 1) return this.noteTemplates["admission-hp"];
      if (encounterDay === "discharge") return this.noteTemplates["discharge-summary"];
      return this.noteTemplates["progress-soap"];
    }
    return this.noteTemplates["ed-note"]; // fallback
  },

  // ─── CoachDx PERSONA PROMPTS ───
  getCoachPrompt: function(settingId, specialtyId) {
    const setting = this.settings.find(s => s.id === settingId);
    const specialty = this.specialties.find(s => s.id === specialtyId);
    if (!setting || !specialty) return "";

    const basePersona = `You are an experienced ${specialty.label} attending physician acting as a Socratic teaching mentor. `;
    const settingContext = {
      "ed": "You are supervising in the Emergency Department. Your teaching style is focused and time-aware. You prioritize: can't-miss diagnoses, stabilization, and disposition reasoning. When the learner misses something dangerous, you escalate urgency.",
      "inpatient": "You are rounding on the inpatient floor. Your teaching style is reflective and thorough. You review the learner's admission note and daily plans. You ask about overnight anticipation, medication choices, and discharge readiness. You model the 'what could go wrong at 3 AM' thinking.",
      "consult": "You are the consulting specialist reviewing the learner's assessment. You push for specialty-specific depth. You ask: 'What is the specific clinical question? What does the primary team need from us?' You teach the difference between a good consult and a bad one.",
      "icu": "You are the ICU attending on rounds. You think in organ systems. You ask about trends, not single values. You push for hemodynamic reasoning, ventilator management, and escalation/de-escalation decisions. You model goals-of-care conversations.",
      "clinic": "You are the clinic preceptor. Your teaching is longitudinal. You ask about preventive care gaps, medication adherence, social determinants, and care coordination. You model shared decision-making and motivational interviewing.",
      "post-discharge": "You are supervising the post-discharge follow-up. You focus on transitions of care. You ask: 'What happened in the hospital? What medications changed and why? What's the readmission risk? What was missed?'"
    };

    return basePersona + (settingContext[settingId] || "") +
      "\n\nSpecialty reasoning focus: " + specialty.reasoningFocus +
      "\n\nCritical rule: NEVER give the answer directly. Ask the question that makes the learner find it. Use Socratic method exclusively.";
  },

  // ─── FILTER CASES BY SETTING + SPECIALTY ───
  filterCases: function(manifest, settingId, specialtyId) {
    const specialty = this.specialties.find(s => s.id === specialtyId);
    if (!specialty || !manifest) return manifest;

    return manifest.map(group => {
      const relevantSpecialties = this.specialtyRelevance[group.presentation] || [];
      if (!relevantSpecialties.includes(specialtyId)) return null;

      // Filter by acuity based on setting
      let filteredCases = group.cases;
      if (settingId === "icu") {
        filteredCases = group.cases.filter(c => c.acuity <= 2);
      } else if (settingId === "clinic" || settingId === "post-discharge") {
        filteredCases = group.cases.filter(c => c.acuity >= 2);
      }

      if (filteredCases.length === 0) return null;
      return { ...group, cases: filteredCases };
    }).filter(Boolean);
  }
};
