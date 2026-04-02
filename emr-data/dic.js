/* emr-data/dic.js — DIC: Consumptive Coagulopathy in Sepsis */
window.CASES = window.CASES || {};
window.CASES['dic'] = {
  id: 'dic', name: 'Nora Jackson', age: '44F', dob: '1981-11-05',
  mrn: 'RDX-2026-61882', setting: 'MICU', category: 'hematologic', acuity: 1,
  chiefComplaint: 'Septic shock + coagulopathy — oozing from IV sites, falling platelets, prolonged PT/PTT',
  diagnosis: 'Disseminated Intravascular Coagulation (DIC) — Sepsis-Induced',
  presentation: {
    hpi: '44F, 48h post-admission for gram-negative urosepsis (E. coli bacteremia). BP stabilized on norepinephrine. Now with new oozing from venipuncture sites, hematuria, and dropping platelet count. PT 22s, PTT 68s, fibrinogen 88 (dropping). ISTH DIC score: 5 (overt DIC defined as ≥5). Labs confirm consumptive coagulopathy from systemic coagulation activation.',
    pmh: ['No prior bleeding disorder'], meds: ['Norepinephrine drip', 'Piperacillin-tazobactam', 'Vasopressin'], allergies: ['NKDA']
  },
  vitals: { BP: '92/58 (on vasopressors)', HR: '118', RR: '22', Temp: '38.9°C', SpO2: '94%' },
  labs: {
    'ISTH DIC SCORE (≥5 = overt DIC)':
      'Platelets 48 (+2 pts) | PT prolongation >6s (+2 pts) | Fibrinogen <1g/L (+1 pt) | D-dimer markedly elevated (+3 pts) = SCORE 8 — OVERT DIC',
    'CBC': 'WBC 22,400 | Hgb 8.2 (dropping) | Plt 48 (down from 188 yesterday)',
    'Coagulation': 'PT 22s (INR 2.1) | PTT 68s | Fibrinogen 88 mg/dL (CRITICALLY LOW — normal >200)',
    'D-dimer': '>20,000 ng/mL (H — markedly elevated, reflects massive fibrin formation)',
    'Peripheral smear': 'Schistocytes present — microangiopathic hemolytic anemia from fibrin strand shearing'
  },
  orders: {
    correct: [
      { id: 'treat-cause-dic', name: 'Treat the underlying cause — source control + broad antibiotics (MOST IMPORTANT)', rationale: 'DIC is ALWAYS secondary. The ONLY treatment that reverses DIC is treating the underlying cause (sepsis, malignancy, obstetric complication, trauma). If the trigger is not eliminated, all blood product support is temporary. Source control is the definitive treatment.' },
      { id: 'cryo-dic', name: 'Cryoprecipitate for fibrinogen <150 mg/dL — give 10 units', rationale: 'Cryoprecipitate contains fibrinogen, factor VIII, vWF, and factor XIII. Target fibrinogen >150-200 mg/dL. Each unit of cryo raises fibrinogen ~10 mg/dL. 10 units is the standard empiric dose. Fibrinogen is the most important component to replace in DIC.' },
      { id: 'plt-transfuse', name: 'Platelets if <50 with active bleeding or <20 without bleeding', rationale: 'Platelet transfusion in DIC: only if actively bleeding AND platelets <50, OR platelets <20 regardless. Transfusing platelets into active DIC without treating the cause is like "adding fuel to the fire" — consumed immediately. Reserved for active hemorrhage.' },
      { id: 'ffp-dic', name: 'FFP 2-4 units if prolonged PT/PTT with active bleeding — clotting factor replacement', rationale: 'FFP replaces all clotting factors. Give 2-4 units if bleeding and PT/PTT significantly prolonged. FFP alone is insufficient — fibrinogen concentration in FFP is low (requires large volumes). Cryoprecipitate is more efficient for fibrinogen replacement.' }
    ],
    incorrect: [
      { id: 'heparin-dic', name: 'Heparin infusion — DIC involves clotting, anticoagulate', rationale: 'Heparin in DIC is controversial and generally NOT recommended for acute DIC with bleeding. May be considered for specific DIC subtypes (promyelocytic leukemia, purpura fulminans) by hematology. For sepsis-induced DIC: treat the cause, not the clotting cascade. Heparin increases bleeding risk.' },
      { id: 'transfuse-all', name: 'Transfuse aggressively to normalize all values before procedures', rationale: 'Massive blood product administration in DIC without treating the underlying cause perpetuates the consumption cycle. Normalize enough for hemostasis (fibrinogen >150, plt >50 if bleeding, INR <2) but do not target laboratory normalization — treat the cause.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'DIC is ALWAYS secondary. Causes: sepsis (most common), malignancy (AML-M3/APL), obstetric (abruption, amniotic fluid embolism, HELLP), trauma, transfusion reaction. Treat the cause first.',
      'ISTH DIC score ≥5 = overt DIC: platelets (<100=1, <50=2), PT prolongation, fibrinogen (<1g/L=1), D-dimer (moderate=2, strong=3). Serial scoring guides severity.',
      'Fibrinogen is the most critical replacement: cryoprecipitate for fibrinogen <150. Target >150-200 mg/dL. D-dimer elevation alone does not require treatment — DIC diagnosis requires the full clinical picture.',
      'Lab paradox in DIC: D-dimer elevated (fibrin formation) AND PT/PTT prolonged AND fibrinogen low (consumption). Simultaneous coagulation AND anticoagulation.'
    ],
    boardPearls: [
      'APL (AML-M3) DIC: promyelocytic granules release tissue factor → severe DIC. Treat with ATRA + ATO — rapidly reverses DIC as leukemia responds. Heparin sometimes used under hematology guidance.',
      'Obstetric DIC: amniotic fluid embolism (sudden shock + DIC + respiratory failure). Placental abruption, retained dead fetus. Treat by delivering the placenta/fetus and aggressive blood product support.',
      'Microangiopathic hemolytic anemia (MAHA): schistocytes on smear + hemolysis + thrombocytopenia. Differential: DIC (elevated PT/PTT, low fibrinogen) vs TTP (normal coags, ADAMTS13 deficient) vs HUS (renal failure + normal coags).',
      'Purpura fulminans: severe DIC → skin necrosis from microvascular thrombosis. Seen in meningococcemia, protein C/S deficiency. Treat with FFP (replaces protein C/S), heparin, protein C concentrate.'
    ]
  },
  references: [{ id: 'StatPearls-DIC', title: 'Disseminated Intravascular Coagulation', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK430882/', openAccess: true }]
};
