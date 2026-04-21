
window.EMR_DATA = {
  "patient": {
    "name": "Dorothy Whitfield",
    "patientHPI": "My knees and hands have been getting so much worse these past few months - I can barely open jars or get up from my chair without wincing. The Tylenol I've been taking doesn't even touch the pain anymore, so I've been using more of those aspirin I have at home along with the gel my doctor gave me.",
    "dob": "05/30/1938",
    "age": 87,
    "sex": "Female",
    "mrn": "RDX-2025-43460",
    "pronouns": "She/Her",
    "insurance": "Medicare Part B with Medigap Plan G",
    "pcp": "Dr. Amanda Liu, MD",
    "pharmacy": "Publix Pharmacy \u2014 4895 Sheridan St, Hollywood, FL",
    "language": "English",
    "race": "White",
    "address": "7279 Pine Ave, Kansas City, MO 64112",
    "phone": "(954) 555-2714",
    "email": "d.whitfield38@email.com",
    "emergencyContact": {
      "name": "Susan Whitfield-Carr (Daughter)",
      "phone": "(954) 555-2728"
    }
  },
  "problems": [
    {
      "problem": "Chronic salicylate toxicity \u2014 occult presentation",
      "icd": "T39.091A",
      "onset": "2024",
      "status": "Active",
      "notes": "Helen Foster, 82F \u2014 confusion, tinnitus, hyperventilation, metabolic acidosis. On aspirin 325mg daily + bismuth subsalicylate (Pepto-Bismol) multiple times daily. Salicylate level 48mg/dL."
    },
    {
      "problem": "Mixed acid-base \u2014 respiratory alkalosis + high anion gap metabolic acidosis",
      "icd": "E87.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Salicylate stimulates respiratory center \u2192 respiratory alkalosis. Uncouples oxidative phosphorylation \u2192 metabolic acidosis. Mixed pattern is pathognomonic."
    },
    {
      "problem": "CNS effects \u2014 tinnitus, confusion, agitation",
      "icd": "T39.091A",
      "onset": "2024",
      "status": "Active",
      "notes": "Elderly patients develop CNS symptoms at lower serum levels than acute overdose. Tinnitus is a classic early sign."
    }
  ],
  "medications": [
    {
      "name": "Stop all salicylate sources immediately",
      "sig": "Aspirin + bismuth subsalicylate discontinued. Review ALL medications for hidden salicylate.",
      "prescriber": "Medicine/Toxicology",
      "start": "2024",
      "refills": 0,
      "status": "STOP all"
    },
    {
      "name": "IV sodium bicarbonate \u2014 urine alkalinization",
      "sig": "Target urine pH 7.5-8.0. Alkalinized urine traps ionized salicylate \u2192 prevents reabsorption \u2192 enhances elimination. Also corrects metabolic acidosis.",
      "prescriber": "Medicine/Toxicology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 IV bicarb infusion"
    },
    {
      "name": "Hemodialysis \u2014 if level >40mg/dL with symptoms in chronic toxicity",
      "sig": "Chronic toxicity threshold for dialysis is lower than acute. Level 48 with confusion = nephrology consult for dialysis.",
      "prescriber": "Nephrology/Toxicology",
      "start": "2024",
      "refills": 0,
      "status": "Nephrology consulted"
    }
  ],
  "allergies": [
    {
      "allergen": "Codeine",
      "type": "Drug",
      "reaction": "Severe nausea, vomiting, constipation",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "Ibuprofen",
      "type": "Drug",
      "reaction": "GI upset with melena (2015) \u2014 advised to avoid all oral NSAIDs",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/26/2026",
      "bp": "138/78",
      "hr": 102,
      "rr": 26,
      "temp": "99.4\u00b0F",
      "spo2": "97%",
      "wt": "132 lbs",
      "ht": "5'3\"",
      "bmi": 23.4,
      "setting": "ED"
    },
    {
      "date": "11/08/2025",
      "bp": "128/72",
      "hr": 76,
      "rr": 16,
      "temp": "98.0\u00b0F",
      "spo2": "97%",
      "wt": "136 lbs",
      "ht": "5'3\"",
      "bmi": 24.1,
      "setting": "PCP Office"
    },
    {
      "date": "06/04/2025",
      "bp": "130/74",
      "hr": 78,
      "rr": 16,
      "temp": "98.2\u00b0F",
      "spo2": "97%",
      "wt": "138 lbs",
      "ht": "5'3\"",
      "bmi": 24.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/08/2025",
      "type": "Primary Care",
      "provider": "Dr. Amanda Liu, MD",
      "cc": "Arthritis pain worsening, medication review",
      "hpi": "87F with generalized OA, CKD 3b, AFib presents for routine follow-up. Reports significant worsening of bilateral knee pain and hand stiffness over past 3 months \u2014 difficulty with daily activities. Acetaminophen 'barely touches the pain.' Topical diclofenac provides moderate relief. Asking about stronger pain options. Daughter present \u2014 reports mother seems more confused than usual over past month and complains of 'ringing in ears' (new). Currently managing independently with weekly meal prep assistance from daughter.",
      "exam": "NAD but appears uncomfortable. Hands: Heberden and Bouchard nodes bilat. Knees: Crepitus bilateral, mild effusion left knee. CV: Irregularly irregular. Lungs: CTAB. Neuro: A&O x3 but slow to respond; MoCA not repeated today.",
      "assessment": "1. OA \u2014 worsening, inadequate pain control\n2. New tinnitus \u2014 differential: salicylate use, hearing aid issue, ototoxic medication; need to ask about OTC medications\n3. Mild cognitive decline \u2014 may be worsening per daughter; reassess\n4. CKD 3b \u2014 limits pain medication options significantly\n5. AFib \u2014 rate controlled, anticoagulated",
      "plan": "1. Emphasized: NO oral NSAIDs (CKD, GI bleeding history, anticoagulation)\n2. Asked about OTC medication use \u2014 patient denies taking anything extra ('just my regular pills and some aspirin now and then')\n3. Increase topical diclofenac to TID\n4. Consider duloxetine for OA pain if tolerated\n5. Audiology referral for new tinnitus\n6. Repeat MoCA at next visit\n7. Labs: CMP, CBC\n8. Return 3 months"
    },
    {
      "id": "V002",
      "date": "06/04/2025",
      "type": "Primary Care",
      "provider": "Dr. Amanda Liu, MD",
      "cc": "Routine follow-up, CKD monitoring",
      "hpi": "87F presents for routine follow-up. CKD stable. AFib rate-controlled. OA manageable with current regimen. No new complaints. MoCA 22/30 (tested today \u2014 stable from prior).",
      "exam": "NAD. CV: Irregularly irregular. Lungs: CTAB. Ext: No edema. Neuro: A&O x3; MoCA 22/30.",
      "assessment": "1. CKD 3b \u2014 stable\n2. AFib \u2014 controlled\n3. OA \u2014 manageable\n4. MCI \u2014 stable",
      "plan": "1. Continue medications\n2. Labs: CMP, CBC\n3. Return 6 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Salicylate Toxicity",
      "results": [
        {
          "test": "Salicylate level",
          "value": "48",
          "unit": "mg/dL",
          "ref": "<20 therapeutic; >30 toxic",
          "flag": "H"
        },
        {
          "test": "ABG \u2014 pH",
          "value": "7.46",
          "unit": "",
          "ref": "7.35-7.45",
          "flag": "H"
        },
        {
          "test": "pCO2",
          "value": "28",
          "unit": "mmHg",
          "ref": "35-45",
          "flag": "L"
        },
        {
          "test": "Bicarb",
          "value": "18",
          "unit": "mEq/L",
          "ref": "22-26",
          "flag": "L"
        },
        {
          "test": "Anion gap",
          "value": "18",
          "unit": "mEq/L",
          "ref": "8-12",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (High-Dose, 2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-HD910",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Moderna)",
      "date": "09/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2620",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Prevnar 20",
      "date": "03/2024",
      "site": "Left deltoid IM",
      "lot": "PV20-812",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "04/2022",
      "site": "Right deltoid IM",
      "lot": "SX22-240",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "06/2022",
      "site": "Right deltoid IM",
      "lot": "SX22-408",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap",
      "date": "08/2020",
      "site": "Left deltoid IM",
      "lot": "TD20-510",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: CAD, deceased at 78 (MI)",
    "Mother: OA, Alzheimer disease, deceased at 92",
    "Husband: Deceased at 82 (2020) \u2014 lung cancer",
    "Daughter: Healthy, alive at 58",
    "Son: HTN, alive at 55"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired school librarian \u2014 retired 2003"
    ],
    [
      "Marital",
      "Widowed (2020); lives alone; daughter visits 2-3x/week"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Denies"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Limited \u2014 walks around condo with rolling walker; uses motorized scooter for distances"
    ],
    [
      "Housing",
      "Ground-floor condo; grab bars in bathroom; medical alert pendant; daughter has spare key"
    ],
    [
      "Safety",
      "Fall risk \u2014 uses walker; no rugs; grab bars installed; no firearms"
    ],
    [
      "Advance Directive",
      "Living will and DPOA completed; DNR/DNI; DPOA (daughter Susan)"
    ]
  ],
  "meta": {
    "caseId": "chronic-salicylate-toxicity",
    "diagnosis": "Chronic Salicylate Toxicity \u2014 Occult, Elderly Patient",
    "acuity": 2,
    "presentation": "Toxicologic Emergency",
    "category": "toxicologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Dorothy Whitfield is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did toxicologic emergency start?",
      "Can you describe exactly how it started \u2014 sudden or gradual?",
      "Where is the problem located? Does it spread anywhere?",
      "How would you rate the severity on a scale of 1 to 10?",
      "What makes it worse? What makes it better?",
      "Do you have any other symptoms along with this?",
      "Have you had anything like this before?",
      "Tell me about your medical history \u2014 any chronic conditions?",
      "What medications are you currently taking?",
      "Do you have any allergies to medications?",
      "Tell me about your family medical history.",
      "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
      "default": "She pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
      "onset": "'The symptoms started My knees and hands have been getting so much worse these past few months - I can.'",
      "character": "'It's toxicologic emergency \u2014 it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Chronic Salicylate Toxicity.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Amlodipine 5mg daily; Losartan 50mg daily; Metoprolol Succinate 50mg daily; Apixaban 5mg BID; Acetaminophen 500mg TID (scheduled); Diclofenac Gel 1% (topical); Pantoprazole 40mg daily; Vitamin D3 2000 IU daily.'",
      "allergies": "'My allergies are Codeine, Ibuprofen.'",
      "family": "Father: CAD, deceased at 78 (MI)  Mother: OA, Alzheimer disease, deceased at 92  Husband: Deceased at 82 (2020) \u2014 lung cancer",
      "social": "Occupation: Retired school librarian \u2014 retired 2003  Marital: Widowed (2020); lives alone; daughter visits 2-3x/week  Tobacco: Never smoker  Alcohol: Denies  Drugs: Denies"
    },
    "examManeuvers": [
      "General appearance and level of distress",
      "Vital signs review",
      "Cardiovascular auscultation",
      "Pulmonary auscultation",
      "Abdominal examination",
      "Extremity assessment",
      "Skin examination",
      "Targeted system examination"
    ],
    "examFindings": {
      "General appearance and level of distress": "Clinical finding consistent with Chronic Salicylate Toxicity. Document specifically what you observe.",
      "Vital signs review": "Clinical finding consistent with Chronic Salicylate Toxicity. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Chronic Salicylate Toxicity. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Chronic Salicylate Toxicity. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Chronic Salicylate Toxicity. Document specifically what you observe.",
      "Extremity assessment": "Clinical finding consistent with Chronic Salicylate Toxicity. Document specifically what you observe.",
      "Skin examination": "Clinical finding consistent with Chronic Salicylate Toxicity. Document specifically what you observe.",
      "Targeted system examination": "Clinical finding consistent with Chronic Salicylate Toxicity. Document specifically what you observe."
    },
    "ddxTargets": [
      "Chronic salicylate toxicity (correct)",
      "Sepsis \u2014 mixed acid-base; but salicylate level diagnostic",
      "Acute salicylate overdose \u2014 Done nomogram does NOT apply to chronic toxicity",
      "Methanol/ethylene glycol \u2014 osmolar gap; different history"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Chronic Salicylate Toxicity, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Chronic Salicylate Toxicity, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Chronic Salicylate Toxicity based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Dorothy Whitfield's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Chronic Salicylate Toxicity (Occult \u2014 Elderly Patient Self-Medicating OTC Aspirin 650-975mg TID for OA Pain with CKD 3b Impairing Clearance, on Apixaban, Presenting with Tinnitus, Confusion, Tachypnea, and Mixed Acid-Base Disturbance). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?",
      "final": "Diagnosis: chronic salicylate toxicity. Key learning: (1) Chronic vs acute salicylate toxicity: chronic = more dangerous at lower levels, CNS symptoms prominent (tinnitus, confusion, agitation), elderly most vulnerable, Done nomogram does NOT apply. (2) Classic mixed acid-base: salicylate stimulates respiratory center \u2192 primary respiratory alkalosis (low pCO2). Uncouples oxidative phosphorylation \u2192 lactic acidosis \u2192 high anion gap metabolic acidosis. This mixed pattern is highly characteristic. (3) Occult salicylate sources in elderly: aspirin, bismuth subsalicylate (Pepto-Bismol), oil of wintergreen, salicylate-containing topicals. Always check bismuth subsalicylate in unexplained elderly toxicity. (4) Urine alkalinization: sodium bicarbonate to target urine pH 7.5-8.0 enhances renal elimination via ion trapping. Ionized salicylate at alkaline pH cannot cross tubular membrane. (5) Dialysis in chronic toxicity: level >40mg/dL with CNS symptoms, AKI, pulmonary edema, or refractory acidosis. Threshold is lower than acute toxicity."
    }
  }
};
