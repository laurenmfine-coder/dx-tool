
window.EMR_DATA = {
  "patient": {
    "name": "Eleanor Dunn",
    "patientHPI": "I've been taking aspirin every day for my joint pain, but lately I've been hearing this constant ringing in my ears that won't stop. This morning I started throwing up and I feel like I can't catch my breath properly.",
    "dob": "02/21/1957",
    "age": "69",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-135434",
    "language": "English",
    "race": "Asian",
    "phone": "(614) 555-2604",
    "email": "eleanor.dunn@email.com",
    "address": "341 Dogwood Ln, Columbus, OH 43210",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "Rite Aid \u2014 Palm Ave",
    "emergencyContact": {
      "name": "Reginald Dunn",
      "phone": "(312) 555-9856",
      "relationship": "Parent"
    },
    "chiefComplaint": "Tinnitus, vomiting, tachypnea \u2014 chronic aspirin use for arthritis",
    "diagnosis": "Salicylate Toxicity"
  },
  "problems": [
    {
      "problem": "Acute salicylate toxicity",
      "icd": "T39.011A",
      "onset": "2024",
      "status": "Active",
      "notes": "Level 65 mg/dL \u2014 tinnitus, hyperventilation, confusion"
    },
    {
      "problem": "Mixed acid-base disorder",
      "icd": "E87.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Respiratory alkalosis + metabolic acidosis \u2014 classic salicylate pattern"
    },
    {
      "problem": "Hypokalemia \u2014 barrier to urine alkalinization",
      "icd": "E87.6",
      "onset": "2024",
      "status": "Active",
      "notes": "K+ 3.1 \u2014 must replete before alkalinization will work"
    }
  ],
  "medications": [
    {
      "name": "NS 1L IV over 30 min then D5W + 3 amps NaHCO3 at 250mL/hr",
      "sig": "Rehydrate then alkalinize \u2014 target urine pH 7.5-8.0",
      "prescriber": "Toxicology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "KCl 40 mEq in IV fluids",
      "sig": "Add to every liter \u2014 cannot alkalinize urine without replete K+",
      "prescriber": "Toxicology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Codeine",
      "reaction": "Nausea",
      "severity": "Mild",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "138/82",
      "hr": "108",
      "rr": "30",
      "temp": "37.6\u00b0C",
      "spo2": "97%",
      "pain": "6/10",
      "bmi": "26",
      "weight": "101 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Tinnitus, vomiting, tachypnea \u2014 chronic aspirin use for arthritis",
      "hpi": "Eleanor Dunn is a 69-year-old female presenting with tinnitus, vomiting, tachypnea \u2014 chronic aspirin use for arthritis. Past medical history includes Osteoarthritis, Chronic pain, Tinnitus (new). See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Salicylate Toxicity \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Salicylate Toxicity Panel",
      "results": [
        {
          "test": "Salicylate level",
          "value": "65",
          "unit": "mg/dL",
          "ref": "<25 (therapeutic 15-30)",
          "flag": "H"
        },
        {
          "test": "Arterial pH",
          "value": "7.48",
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
          "test": "HCO3",
          "value": "20",
          "unit": "mEq/L",
          "ref": "22-26",
          "flag": "L"
        },
        {
          "test": "Potassium",
          "value": "3.1",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": "L"
        },
        {
          "test": "Glucose",
          "value": "62",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "L"
        },
        {
          "test": "Urine pH",
          "value": "5.5",
          "unit": "",
          "ref": "target >7.5 with treatment",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/15/2025",
      "lot": "FL-2025",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19 (Updated)",
      "date": "09/01/2025",
      "lot": "CV-2025",
      "site": "Right Deltoid"
    },
    {
      "name": "Tdap",
      "date": "03/2020",
      "lot": "TD-2020",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Aspirin use",
      "Has been taking aspirin 650mg every 4 hours for 5 days for knee pain"
    ],
    [
      "Renal function",
      "Baseline Cr 1.2"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Eleanor appears anxious and uncomfortable, frequently touching her ears and looking distressed by the persistent tinnitus. She is forthcoming about her symptoms but seems worried about the intensity of her nausea and breathing difficulties. Her distress level is moderate to high, particularly frustrated by the constant ear ringing that's affecting her sleep and daily activities.",
    "interviewQuestions": [
      "Can you describe the ringing in your ears - when did it start and what does it sound like?",
      "How much aspirin have you been taking and for how long?",
      "When did the vomiting start and how many times have you vomited?",
      "Are you having any difficulty breathing or feeling short of breath?",
      "Have you noticed any hearing changes besides the ringing?",
      "Are you experiencing any dizziness or balance problems?",
      "Have you had any confusion or changes in your thinking?",
      "Are you having any abdominal pain or stomach upset?",
      "Have you noticed any changes in your urination?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Have you ever had kidney problems before?",
      "Are you taking the aspirin with food or on an empty stomach?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble concentrating with this ringing in my ears. Could you repeat that?",
      "onset": "The ear ringing started about 3 days ago and has been getting worse. The vomiting just started this morning, and I've been feeling short of breath since yesterday.",
      "character": "It's a high-pitched, constant ringing in both ears that never stops. It's driving me crazy and I can barely sleep.",
      "location": "The ringing is in both ears equally, and the nausea feels like it's coming from my stomach.",
      "severity": "The ear ringing is about an 8 out of 10 - it's really interfering with everything. The nausea is about a 7, and I feel like I can't get enough air.",
      "aggravating": "The ringing seems worse when it's quiet, and any movement makes me feel more nauseous. The breathing gets worse when I try to do anything.",
      "relieving": "Nothing seems to help the ringing. I've tried covering my ears. The nausea gets a little better when I sit very still.",
      "associated": "I feel dizzy when I stand up, and I've been sweating more than usual. My stomach feels upset even when I'm not vomiting.",
      "denies": "No chest pain, no palpitations, no fever or chills, no blood in vomit, no severe headache, no vision changes.",
      "history": "I've never had ear ringing like this before. I've taken aspirin for years for my arthritis but never had these problems.",
      "medications": "Aspirin; Lisinopril",
      "allergies": "Codeine",
      "family": "Nothing really relevant - my parents lived to old age without major health problems.",
      "social": "I'm retired, don't smoke, maybe a glass of wine with dinner occasionally. I've been taking more aspirin lately because my knee pain has been worse."
    },
    "examManeuvers": [
      "Vital signs assessment",
      "Otoscopic examination",
      "Weber and Rinne tests",
      "Neurological assessment including mental status",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Abdominal examination",
      "Assessment of volume status and hydration",
      "Gait and balance testing",
      "Fundoscopic examination"
    ],
    "examFindings": {
      "Vital signs assessment": "BP 138/82, HR 108, RR 24, Temp 37.6\u00b0C, SpO2 97% on room air",
      "Otoscopic examination": "Tympanic membranes appear normal bilaterally, no cerumen impaction, no signs of infection",
      "Weber and Rinne tests": "Weber test lateralizes equally, Rinne test shows air conduction greater than bone conduction bilaterally",
      "Neurological assessment including mental status": "Patient appears mildly confused and has difficulty concentrating, reflexes are brisk, no focal neurological deficits",
      "Cardiovascular examination": "Tachycardic regular rhythm, no murmurs, no peripheral edema",
      "Pulmonary examination": "Tachypneic with deep respirations, lungs clear to auscultation bilaterally, no accessory muscle use",
      "Abdominal examination": "Mild epigastric tenderness, no rebound or guarding, bowel sounds present",
      "Assessment of volume status and hydration": "Mucous membranes slightly dry, skin turgor decreased, no orthostatic changes",
      "Gait and balance testing": "Unsteady gait, patient reports dizziness with position changes",
      "Fundoscopic examination": "Optic discs appear normal, no papilledema"
    },
    "ddxTargets": [
      "Acute salicylate toxicity \u2014 urine alkalinization (correct)",
      "Sepsis with lactic acidosis",
      "Hyperventilation syndrome \u2014 respiratory alkalosis only",
      "DKA \u2014 metabolic acidosis but different electrolytes",
      "Theophylline toxicity \u2014 similar autonomic picture",
      "Alcohol intoxication \u2014 different pattern"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on tinnitus as an isolated ear problem rather than recognizing it as part of salicylate toxicity syndrome, especially given the patient's age and chronic aspirin use",
      "prematureClosure": "May focus on common causes of nausea and vomiting in elderly patients without fully exploring the constellation of symptoms and medication history",
      "availabilityBias": "Tinnitus in elderly patients might trigger thoughts of common age-related hearing loss rather than considering toxic causes"
    },
    "coachPrompts": {
      "phase2": "You've identified tinnitus, vomiting, and tachypnea in a patient with chronic aspirin use. What questions about her medication regimen would be most important? Consider how these seemingly disparate symptoms might be connected by a single underlying process.",
      "phase5": "Now that you have the history of high-dose aspirin use and the physical findings of tachypnea, altered mental status, and tinnitus, what unifying diagnosis explains this constellation of findings? What would you expect to see on arterial blood gas and basic metabolic panel?",
      "finalDebrief": "This case demonstrates classic salicylate toxicity with the triad of tinnitus, altered mental status, and mixed acid-base disorder. The key was recognizing that chronic therapeutic aspirin use can lead to toxicity, especially in elderly patients. How did your differential diagnosis evolve as you gathered the medication history and recognized the pattern?",
      "final": "Diagnosis: salicylate toxicity, level 65. Key pharmacy learning: (1) Acid-base: salicylates directly stimulate medullary respiratory center \u2192 hyperventilation \u2192 respiratory alkalosis. Also uncouple oxidative phosphorylation \u2192 metabolic acidosis. Mixed pattern is the fingerprint. (2) Urine alkalinization: salicylate pKa 3.5 \u2014 at urine pH 7.5+ >99.9% ionized and cannot be reabsorbed (ion trapping). Eliminates 5-10x faster. (3) Potassium: hypokalemia prevents alkalinization \u2014 kidney swaps K+ for H+, acidifying urine. Replete K+ aggressively. (4) Glucose: give dextrose even if serum glucose 'normal' \u2014 CNS glucose may be low. Salicylate + CNS hypoglycemia = severe toxicity. (5) HD threshold: level >100, severe CNS toxicity, renal failure, pulmonary edema."
    }
  },
  "meta": {
    "diagnosis": "Acute Salicylate Toxicity \u2014 Level 65 mg/dL, Mixed Respiratory Alkalosis + Metabolic Acidosis",
    "caseId": "salicylate-toxicity"
  }
};
