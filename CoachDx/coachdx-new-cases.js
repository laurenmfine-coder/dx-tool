 score for severity',
      'RUQ ultrasound to confirm gallstones',
      'If cholangitis suspected, ERCP within 24h'
    ],
    anticipatedQuestions: [
      'What is the BISAP score?',
      'Is there evidence of biliary obstruction?',
      'How much fluid has been given?',
      'Is the patient tolerating oral intake?'
    ],
    teachingPoints: [
      '2 of 3 Atlanta criteria: pain + lipase >3x + imaging',
      'Aggressive IV fluids are the cornerstone of treatment',
      'Early enteral nutrition when tolerated (not prolonged NPO)',
      'Cholecystectomy during same admission for gallstone pancreatitis'
    ],
    integration: {
      mechanismdx: { title: 'Pancreatitis Module', link: '../mechanism/pancreatitis-module.html' },
      reasondx: { title: 'Pancreatitis Adventure', link: '../ReasonDx/pancreatitis-adventure.html' }
    }
  },

  // 5. TTP SBAR
  'ttp': {
    id: 'ttp',
    title: 'TTP - Thrombotic Microangiopathy',
    category: 'Hematology',
    acuity: 'Critical',
    patient: {
      name: 'Sarah Mitchell',
      age: 34,
      sex: 'Female',
      setting: 'Emergency',
      chiefComplaint: 'Confusion, fatigue, bruising'
    },
    scenario: `34-year-old previously healthy female presents with 3 days of progressive fatigue, confusion, and easy bruising. Labs show platelets 12k, hemoglobin 7.2, with schistocytes on smear. LDH is 1,240, haptoglobin undetectable. PT/PTT are normal.`,
    vitals: { HR: 108, BP: '132/78', RR: 18, SpO2: '98% RA', Temp: '100.4°F' },
    keyFindings: [
      'Severe thrombocytopenia (12k)',
      'MAHA: schistocytes, elevated LDH, low haptoglobin',
      'Neurologic symptoms (confusion)',
      'Normal PT/PTT (NOT DIC)',
      'Fever'
    ],
    criticalActions: [
      'STAT hematology consult for plasma exchange',
      'Do NOT transfuse platelets (fuels thrombosis)',
      'Send ADAMTS13 activity but do NOT wait for results',
      'Start high-dose steroids',
      'Arrange urgent plasmapheresis'
    ],
    anticipatedQuestions: [
      'Is plasma exchange arranged?',
      'What is the PLASMIC score?',
      'Has the patient received any platelet transfusions?',
      'Is ADAMTS13 sent?'
    ],
    teachingPoints: [
      'MAHA + thrombocytopenia + normal PT/PTT = think TTP',
      'Untreated mortality >90%, with plasma exchange <20%',
      'NEVER transfuse platelets - worsens thrombosis',
      'Start treatment before ADAMTS13 returns'
    ],
    integration: {
      mechanismdx: { title: 'TTP Module', link: '../mechanism/ttp-module.html' },
      reasondx: { title: 'TTP Adventure', link: '../ReasonDx/ttp-adventure.html' }
    }
  },

  // 6. DIC SBAR
  'dic': {
    id: 'dic',
    title: 'DIC - Consumptive Coagulopathy',
    category: 'Hematology',
    acuity: 'Critical',
    patient: {
      name: 'William Johnson',
      age: 67,
      sex: 'Male',
      setting: 'ICU',
      chiefComplaint: 'Septic shock with new bleeding'
    },
    scenario: `67-year-old male admitted to ICU for gram-negative sepsis from cholangitis. Now developing oozing from IV sites, ecchymoses, and hematuria. Labs show platelets 38k (down from 180k), PT 22 (INR 2.1), fibrinogen 85, D-dimer >20,000.`,
    vitals: { HR: 118, BP: '88/52 on pressors', RR: 24, SpO2: '92% on 6L', Temp: '102.8°F' },
    keyFindings: [
      'Sepsis as underlying trigger',
      'Dropping platelets with consumption',
      'Elevated PT/PTT (unlike TTP)',
      'Low fibrinogen, markedly elevated D-dimer',
      'Active bleeding (DIC with bleeding phenotype)'
    ],
    criticalActions: [
      'Treat underlying cause (antibiotics, source control)',
      'Transfuse products if actively bleeding: platelets, FFP, cryo',
      'Monitor fibrinogen closely (target >100-150)',
      'Continue sepsis resuscitation',
      'Consider TXA if severe bleeding'
    ],
    anticipatedQuestions: [
      'What is the underlying cause of DIC?',
      'Is fibrinogen improving with cryoprecipitate?',
      'Is source control achieved?',
      'What is the current ISTH DIC score?'
    ],
    teachingPoints: [
      'DIC is always secondary - MUST treat underlying cause',
      'PT/PTT elevated + low fibrinogen distinguishes from TTP',
      'Transfuse only if actively bleeding',
      'Both clotting AND bleeding simultaneously (the paradox)'
    ],
    integration: {
      mechanismdx: { title: 'DIC Module', link: '../mechanism/dic-module.html' },
      reasondx: { title: 'DIC Adventure', link: '../ReasonDx/dic-adventure.html' }
    }
  },

  // 7. Necrotizing Fasciitis SBAR
  'nec-fasc': {
    id: 'nec-fasc',
    title: 'Necrotizing Fasciitis - Surgical Emergency',
    category: 'Infectious Disease/Surgery',
    acuity: 'Critical',
    patient: {
      name: 'Patricia Adams',
      age: 55,
      sex: 'Female',
      setting: 'Emergency',
      chiefComplaint: 'Rapidly worsening leg infection with severe pain'
    },
    scenario: `55-year-old female with diabetes presents with 2 days of left leg redness and swelling that started as a small cut. Pain is SEVERE and out of proportion to the visible skin changes. She is febrile and tachycardic. The area of tenderness extends well beyond the erythema.`,
    vitals: { HR: 125, BP: '95/58', RR: 24, SpO2: '94% RA', Temp: '103.2°F' },
    keyFindings: [
      'Pain out of proportion to exam (KEY finding)',
      'Tenderness extending beyond visible erythema',
      'Rapidly spreading despite antibiotics',
      'Systemic toxicity (sepsis)',
      'Diabetes as risk factor'
    ],
    criticalActions: [
      'EMERGENT surgical consult - do NOT delay for imaging',
      'Broad-spectrum antibiotics: Vanc + pip-tazo + clindamycin',
      'Aggressive fluid resuscitation',
      'Prepare for emergent OR',
      'Labs: LRINEC score components'
    ],
    anticipatedQuestions: [
      'Is surgery aware and ready to take the patient?',
      'Is there crepitus on exam?',
      'What is the LRINEC score?',
      'Has broad-spectrum antibiotics been started?'
    ],
    teachingPoints: [
      'Pain out of proportion is the earliest and most reliable sign',
      'Surgery is the definitive treatment - antibiotics alone cannot cure',
      'Mortality increases ~9% per hour of surgical delay',
      'Clindamycin suppresses toxin production in GAS'
    ],
    integration: {
      mechanismdx: { title: 'Nec Fasc Module', link: '../mechanism/nec-fasc-module.html' },
      reasondx: { title: 'Nec Fasc Adventure', link: '../ReasonDx/nec-fasc-adventure.html' }
    }
  },

  // 8. Neutropenic Fever SBAR
  'neutropenic-fever': {
    id: 'neutropenic-fever',
    title: 'Neutropenic Fever - Oncologic Emergency',
    category: 'Oncology/Infectious Disease',
    acuity: 'Critical',
    patient: {
      name: 'Linda Thompson',
      age: 58,
      sex: 'Female',
      setting: 'Emergency',
      chiefComplaint: 'Fever and chills, currently on chemotherapy'
    },
    scenario: `58-year-old female receiving chemotherapy for breast cancer (last dose 8 days ago) presents with fever to 101.5°F and chills. She feels weak but has no localizing symptoms. ANC is 180 cells/μL. She has a port-a-cath in place.`,
    vitals: { HR: 102, BP: '108/68', RR: 18, SpO2: '97% RA', Temp: '101.5°F' },
    keyFindings: [
      'ANC <500 (180) = severe neutropenia',
      'Fever ≥38.3°C in neutropenic patient',
      'Recent chemotherapy (nadir timing)',
      'Indwelling catheter as potential source',
      'No localizing symptoms (typical in neutropenia)'
    ],
    criticalActions: [
      'Antibiotics within 60 minutes of presentation',
      'Blood cultures (peripheral AND from port)',
      'Start cefepime (or pip-tazo)',
      'Consider adding vancomycin if catheter infection suspected',
      'Calculate MASCC score for risk stratification'
    ],
    anticipatedQuestions: [
      'What is the ANC?',
      'Were antibiotics given within 60 minutes?',
      'Are blood cultures drawn from both port and peripheral?',
      'What is the MASCC score?'
    ],
    teachingPoints: [
      'Neutropenic fever = ANC <500 + fever ≥38.3°C',
      'Empiric antibiotics within 60 minutes - mortality increases with delay',
      'Must cover Pseudomonas (cefepime, pip-tazo, meropenem)',
      'Classic infection signs may be absent without neutrophils'
    ],
    integration: {
      mechanismdx: { title: 'Neutropenic Fever Module', link: '../mechanism/neutropenic-fever-module.html' },
      reasondx: { title: 'Neutropenic Fever Adventure', link: '../ReasonDx/neutropenic-fever-adventure.html' }
    }
  }
};

// Export for use in CoachDx system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { newCoachDxCases };
}
