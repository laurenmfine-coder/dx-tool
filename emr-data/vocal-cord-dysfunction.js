// Virtual EMR Case: Vocal Cord Dysfunction
// Variant: vocal-cord-dysfunction | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Alyssa Chen",
    "dob": "10/22/2003",
    "age": 22,
    "sex": "Female",
    "mrn": "RDX-2025-82156",
    "pronouns": "She/Her",
    "insurance": "Aetna (parent plan)",
    "pcp": "Dr. Stephanie Wallace, MD",
    "pharmacy": "CVS Pharmacy — 1501 S Federal Hwy, Fort Lauderdale, FL",
    "language": "English",
    "race": "Asian",
    "address": "4205 NE 12th Terrace, Fort Lauderdale, FL 33334",
    "phone": "(954) 555-1394",
    "email": "alyssachen03@email.com",
    "emergencyContact": {
      "name": "Linda Chen (Mother)",
      "phone": "(954) 555-1408"
    }
  },
  "problems": [
    {
      "problem": "Paradoxical Vocal Fold Motion (Vocal Cord Dysfunction)",
      "icd": "J38.3",
      "onset": "2024",
      "status": "Active",
      "notes": "Diagnosed after multiple ED visits for dyspnea attributed to asthma; laryngoscopy confirmed paradoxical vocal fold adduction during episode"
    },
    {
      "problem": "Exercise-Induced Laryngeal Obstruction",
      "icd": "J38.3",
      "onset": "2024",
      "status": "Active",
      "notes": "Symptoms triggered by high-intensity exercise, anxiety, and strong scents"
    },
    {
      "problem": "Asthma, Mild Intermittent (Questionable)",
      "icd": "J45.20",
      "onset": "2020",
      "status": "Active",
      "notes": "Initially diagnosed but PFTs normal; methacholine challenge negative; likely misdiagnosis — VCD masquerading as asthma"
    },
    {
      "problem": "GERD",
      "icd": "K21.0",
      "onset": "2023",
      "status": "Active",
      "notes": "Contributing trigger for VCD episodes"
    },
    {
      "problem": "Generalized Anxiety Disorder",
      "icd": "F41.1",
      "onset": "2021",
      "status": "Active",
      "notes": "Performance anxiety; anxiety is a known VCD trigger"
    }
  ],
  "medications": [
    {
      "name": "Albuterol 90mcg INH PRN",
      "sig": "Inhale 2 puffs every 4-6 hours as needed for wheezing (limited benefit; primarily used pre-exercise)",
      "prescriber": "Dr. Wallace",
      "start": "03/2020",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth daily 30 minutes before breakfast",
      "prescriber": "Dr. Wallace",
      "start": "08/2023",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Escitalopram 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Wallace",
      "start": "06/2022",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Strong Perfumes/Fragrances",
      "type": "Environmental",
      "reaction": "Triggers VCD episodes — throat tightness, stridor",
      "severity": "Moderate",
      "verified": "Patient-reported"
    },
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/08/2026",
      "bp": "118/72",
      "hr": 104,
      "rr": 24,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "125 lbs",
      "ht": "5'4\"",
      "bmi": 21.5,
      "setting": "ED"
    },
    {
      "date": "10/14/2025",
      "bp": "110/68",
      "hr": 72,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "124 lbs",
      "ht": "5'4\"",
      "bmi": 21.3,
      "setting": "Specialist"
    },
    {
      "date": "06/20/2025",
      "bp": "108/66",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "123 lbs",
      "ht": "5'4\"",
      "bmi": 21.1,
      "setting": "PCP Office"
    },
    {
      "date": "01/10/2025",
      "bp": "112/70",
      "hr": 98,
      "rr": 22,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "122 lbs",
      "ht": "5'4\"",
      "bmi": 20.9,
      "setting": "ED"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/14/2025",
      "type": "Specialist",
      "provider": "Dr. Sanjay Gupta, MD (Allergy/Immunology)",
      "cc": "VCD follow-up; speech therapy progress assessment",
      "hpi": "22-year-old female with confirmed VCD/PVFM diagnosed via laryngoscopy in 04/2025 after multiple ED visits for dyspnea with inspiratory stridor previously attributed to asthma. Has been working with speech-language pathologist (SLP) for 5 months learning laryngeal control therapy and rescue breathing techniques. Reports significant improvement — VCD episodes decreased from 3-4/month to approximately 1/month. Can now usually abort episodes with rescue breathing techniques within 2-3 minutes. Exercise triggers markedly improved; running again with warm-up protocol. Anxiety management with escitalopram and CBT ongoing. GERD controlled on omeprazole.",
      "exam": "General: NAD, well-appearing. HEENT: Oropharynx clear. No stridor at rest. Voice clear without dysphonia. Neck: Supple, no LAD. Lungs: CTAB, no wheezes; normal inspiratory and expiratory effort. No accessory muscle use.",
      "assessment": "1. VCD/PVFM — improving with laryngeal control therapy\n2. Exercise-induced laryngeal obstruction — improving with warm-up protocol\n3. Prior asthma diagnosis — likely misdiagnosis; methacholine challenge negative; consider removing from problem list\n4. GERD — controlled, contributing trigger\n5. GAD — managed with escitalopram and CBT",
      "plan": "1. Continue SLP sessions biweekly; plan to space to monthly in 2 months if continued improvement\n2. Continue rescue breathing techniques\n3. Albuterol PRN — counsel that benefit is limited for VCD; primarily useful if any component of bronchospasm\n4. Continue omeprazole, escitalopram\n5. Exercise: warm-up protocol before running; gradual intensity increase\n6. RTC 3 months"
    },
    {
      "id": "V002",
      "date": "06/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Stephanie Wallace, MD",
      "cc": "Annual wellness; VCD management update",
      "hpi": "22-year-old female for annual exam. VCD recently diagnosed after allergy/immunology referral and laryngoscopy. Starting speech therapy next week. Reports 2-3 episodes/month of acute throat tightness and inspiratory stridor, usually triggered by running or stressful situations. Albuterol provides minimal relief. Anxiety managed with escitalopram; seeing therapist for CBT. GERD improved on omeprazole. No other complaints. Good academic performance despite health challenges.",
      "exam": "General: NAD, healthy-appearing. HEENT: WNL. CV: RRR. Lungs: CTAB. Abdomen: Soft, NT/ND. Skin: Clear. Mental health: Affect appropriate, mildly anxious.",
      "assessment": "1. Annual wellness\n2. VCD — newly diagnosed, starting speech therapy\n3. GAD — stable on escitalopram/CBT\n4. GERD — controlled",
      "plan": "1. Support VCD management per allergy/immunology\n2. Continue escitalopram 10mg\n3. Continue omeprazole 20mg\n4. Immunizations up to date\n5. RTC 6 months or PRN"
    },
    {
      "id": "V003",
      "date": "01/10/2025",
      "type": "ED",
      "provider": "Dr. Karen Moy, MD (Emergency Medicine)",
      "cc": "Acute dyspnea, stridor, throat tightness after running",
      "hpi": "22-year-old female with 'asthma' presenting with acute-onset throat tightness, difficulty breathing, and audible stridor during cross-country practice. Episode started mid-run during cold weather. Unable to 'get air in.' Coach called 911. On arrival: visible distress, inspiratory stridor, but O2 saturation 99%. Prior episodes treated as asthma exacerbations with nebulizers — minimal improvement. Reports this is her 4th ED visit in 6 months for similar presentations. Not on controller inhaler; albuterol PRN provides minimal relief. No URI symptoms, no fever, no cough.",
      "exam": "General: Anxious, in visible respiratory distress with inspiratory stridor. Speaking in full sentences between episodes of stridor. Lungs: Paradoxically, lung fields clear bilaterally with no wheezing. Upper airway stridor heard without stethoscope during episodes. CV: Tachycardic but regular. O2 sat: 98-99% on RA (inconsistent with severity of apparent respiratory distress). Throat: No swelling, no erythema.",
      "assessment": "1. Acute dyspnea with stridor — presentation atypical for asthma: clear lungs, preserved O2 saturation, inspiratory stridor, minimal response to bronchodilators\n2. High suspicion for vocal cord dysfunction/paradoxical vocal fold motion\n3. Differential includes laryngospasm, anaphylaxis (no hives/swelling/hypotension)",
      "plan": "1. Heliox administered — rapid improvement in symptoms\n2. Albuterol nebulizer — minimal additional benefit\n3. Coached calm breathing with prolonged exhalation — symptoms resolved in 15 minutes\n4. Discussed likely VCD diagnosis with patient\n5. Referral to allergy/immunology for laryngoscopy and formal evaluation\n6. Discharge in good condition; PCP follow-up"
    }
  ],
  "labs": [
    {
      "date": "02/08/2026",
      "time": "17:30",
      "orderedBy": "Dr. Karen Moy, MD (ED)",
      "collected": "02/08/2026 17:10",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-020840",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "7.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Eosinophils", "value": "2", "unit": "%", "range": "1-4", "flag": "" },
            { "test": "Hemoglobin", "value": "13.6", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "40.8", "unit": "%", "range": "36.0-46.0", "flag": "" },
            { "test": "Platelet Count", "value": "234", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "88", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.1", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "103", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "25", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "BUN", "value": "12", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.7", "unit": "mg/dL", "range": "0.6-1.2", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/10/2025",
      "study": "CHEST XR PA AND LATERAL",
      "accession": "IMG-2025-01103",
      "status": "FINAL",
      "orderedBy": "Dr. Karen Moy, MD (ED)",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "22F with acute dyspnea and stridor. History of asthma. R/O pneumonia, pneumothorax, foreign body.",
      "technique": "PA and lateral views, upright.",
      "findings": "Heart: Normal size.\\n\\nLungs: Clear bilaterally. No consolidation, mass, or pleural effusion. No pneumothorax. No hyperinflation.\\n\\nAirway: Trachea midline. No subglottic narrowing. No radiopaque foreign body.\\n\\nBones: No acute fracture.",
      "impression": "1. Normal chest radiograph.\\n2. No acute cardiopulmonary process.\\n3. No evidence of airway foreign body or subglottic pathology.",
      "dictated": "01/10/2025 19:22",
      "verified": "01/10/2025 20:05"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/01/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-298",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2025-26)",
      "date": "10/18/2025",
      "site": "Right deltoid IM",
      "lot": "CV2025-770",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2021",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) (3/3)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    },
    {
      "vaccine": "Meningococcal ACWY (Menactra)",
      "date": "2021",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    }
  ],
  "familyHistory": [
    "Mother: Asthma, Anxiety disorder, alive at 50",
    "Father: GERD, Hypertension, alive at 53",
    "Brother: Healthy, age 19",
    "Maternal grandmother: COPD, alive at 74"
  ],
  "socialHistory": [
    ["Occupation", "College senior (exercise science major); part-time campus fitness center trainer"],
    ["Marital", "Single"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Rare, 1-2 drinks at social events"],
    ["Drugs", "Denies"],
    ["Exercise", "Competitive cross-country runner (limited by VCD); weight training 3x/week; using warm-up protocol"],
    ["Housing", "University apartment with 1 roommate"],
    ["Safety", "Denies IPV; seatbelt always"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "vocal-cord-dysfunction",
    "diagnosis": "Vocal Cord Dysfunction (Paradoxical Vocal Fold Motion)",
    "acuity": 3,
    "presentation": "Allergic Reaction",
    "category": "pulmonary"
  }
};
