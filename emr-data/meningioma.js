// Virtual EMR Case: Meningioma
// Variant: meningioma | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Linda Vasquez-Torres",
    "dob": "04/16/1968",
    "age": 56,
    "sex": "Female",
    "mrn": "RDX-2025-55892",
    "pronouns": "She/Her",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Sandra Delgado, MD",
    "pharmacy": "Publix Pharmacy — 5800 S University Dr, Riverside, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino (Puerto Rican)",
    "address": "7814 SW 8th St, Riverside, FL 33324",
    "phone": "(954) 555-6724",
    "email": "l.vasqueztorres@email.com",
    "emergencyContact": {
      "name": "Roberto Torres (Husband)",
      "phone": "(954) 555-6727"
    }
  },
  "problems": [
    {
      "problem": "Meningioma — Left Parasagittal (New Diagnosis)",
      "icd": "D32.0",
      "onset": "2025",
      "status": "Active",
      "notes": "Current presentation — first seizure; CT/MRI shows extra-axial dural-based mass consistent with meningioma"
    },
    {
      "problem": "Chronic Migraine with Aura",
      "icd": "G43.101",
      "onset": "2002",
      "status": "Active",
      "notes": "8-12 migraines/month; visual aura; on topiramate and sumatriptan PRN; headache character recently changed — 'different from usual migraines' per patient"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2015",
      "status": "Active",
      "notes": "On amlodipine; well-controlled"
    },
    {
      "problem": "Obesity",
      "icd": "E66.01",
      "onset": "2018",
      "status": "Active",
      "notes": "BMI 33; counseled on weight loss; postmenopausal weight gain"
    },
    {
      "problem": "Hormone Replacement Therapy (Past Use)",
      "icd": "Z79.890",
      "onset": "2016",
      "status": "Resolved",
      "notes": "Combined estrogen-progesterone HRT for menopausal symptoms from 2016-2022; discontinued due to breast cancer screening concern"
    }
  ],
  "medications": [
    {
      "name": "Topiramate 50mg BID",
      "sig": "Take 1 tablet by mouth twice daily for migraine prevention",
      "prescriber": "Dr. Patel (Neurology)",
      "start": "08/2020",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Sumatriptan 50mg PRN",
      "sig": "Take 1 tablet at onset of migraine; may repeat x 1 in 2 hours (max 200mg/day)",
      "prescriber": "Dr. Patel (Neurology)",
      "start": "04/2010",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Delgado",
      "start": "03/2016",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Metoclopramide",
      "type": "Drug",
      "reaction": "Akathisia (severe restlessness)",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/25/2025",
      "bp": "152/88",
      "hr": 92,
      "rr": 18,
      "temp": "98.6°F",
      "spo2": "98%",
      "wt": "198 lbs",
      "ht": "5'4\"",
      "bmi": 34.0,
      "setting": "ED"
    },
    {
      "date": "10/22/2024",
      "bp": "132/78",
      "hr": 74,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "196 lbs",
      "ht": "5'4\"",
      "bmi": 33.6,
      "setting": "PCP Office"
    },
    {
      "date": "04/16/2024",
      "bp": "128/76",
      "hr": 72,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "194 lbs",
      "ht": "5'4\"",
      "bmi": 33.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/22/2024",
      "type": "Primary Care",
      "provider": "Dr. Sandra Delgado, MD",
      "cc": "Routine follow-up; headache pattern change",
      "hpi": "56-year-old female with chronic migraines presenting for routine follow-up. Reports that while migraine frequency is unchanged (8-12/month), the character has shifted over the past 2-3 months — new persistent left-sided headache that does not respond to sumatriptan as well. Headaches now worse in the morning. Occasional left arm 'tingling' (new). Denies vision changes, weakness, speech problems, or seizures. Attributes symptoms to stress at work.",
      "exam": "General: Well-appearing, obese. HEENT: PERRL, EOMI. CV: RRR. Lungs: CTA. Neuro: A&O x3. Cranial nerves intact. Motor: 5/5 all extremities. Sensory: Intact. Gait: Normal. No pronator drift.",
      "assessment": "1. Migraine — pattern change; new persistent unilateral headache not responding to usual therapy; morning predominance\n2. Left arm paresthesias — new; needs evaluation\n3. HTN — controlled\n4. Obesity",
      "plan": "1. Neurology follow-up moved up — Dr. Patel's office contacted\n2. Consider MRI brain if headache pattern does not improve in 2-4 weeks\n3. Continue topiramate and sumatriptan\n4. Continue amlodipine\n5. Return precautions: weakness, speech changes, seizure → ED"
    },
    {
      "id": "V002",
      "date": "01/15/2025",
      "type": "Specialist",
      "provider": "Dr. Anita Patel, MD (Neurology)",
      "cc": "Headache pattern change, left arm paresthesias",
      "hpi": "56-year-old female with chronic migraine referred for headache pattern change. Reports 3-4 months of new persistent left-sided headache, morning-dominant, poorly responsive to sumatriptan. Intermittent left arm tingling, 2-3 episodes per week lasting minutes. No motor weakness. No seizures. No visual changes. Exam today shows subtle left pronator drift (new). MRI brain ordered — scheduled for 02/05/2025.",
      "exam": "Neuro: A&O x3. Cranial nerves: Intact, PERRL, visual fields full. Motor: Subtle left pronator drift; 5-/5 left grip (4+/5). Sensory: Diminished light touch left hand. Reflexes: 3+ left UE (2+ elsewhere). Gait: Normal. Coordination: Mild dysmetria left finger-to-nose.",
      "assessment": "1. New focal neurologic findings (left pronator drift, hyperreflexia, dysmetria) in setting of headache pattern change — concerning for right-hemisphere structural lesion\n2. MRI brain urgent — ordered STAT",
      "plan": "1. MRI brain with and without contrast — STAT\n2. If mass lesion → neurosurgery referral\n3. Start levetiracetam 500mg BID if seizure occurs before MRI\n4. Patient and husband counseled on seizure precautions and when to go to ED\n5. NOTE: Patient had appointment for MRI on 02/05 but did not attend due to work conflict — rescheduled for 03/01"
    }
  ],
  "labs": [
    {
      "date": "02/25/2025",
      "time": "21:15",
      "orderedBy": "Dr. Emily Torres, MD (ED)",
      "collected": "02/25/2025 21:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-105891",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "108", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.8", "unit": "mg/dL", "range": "0.6-1.1", "flag": "" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.0", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Calcium", "value": "9.6", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            { "test": "WBC", "value": "7.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "13.4", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Platelets", "value": "268", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/25/2025",
      "study": "MRI BRAIN WITH AND WITHOUT CONTRAST",
      "accession": "IMG-2025-10521",
      "status": "FINAL",
      "orderedBy": "Dr. Emily Torres, MD (ED)",
      "readBy": "Dr. Robert Nash, MD (Neuroradiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "56-year-old with new-onset GTC seizure, progressive headache, left arm paresthesias, left pronator drift — concern for intracranial mass",
      "technique": "Multiplanar MRI of the brain with and without gadolinium. Sequences: T1, T2, FLAIR, DWI, post-contrast T1.",
      "findings": "RIGHT PARASAGITTAL FRONTAL REGION: A well-circumscribed, extra-axial, dural-based mass in the right parasagittal frontal region measuring 4.8 x 4.0 x 3.6 cm. The mass is isointense on T1, slightly hyperintense on T2, and demonstrates avid homogeneous enhancement with a dural tail sign. It is attached to the falx cerebri and compresses the underlying right frontal cortex with 8 mm leftward midline shift.\n\nEDEMA: Moderate perilesional vasogenic edema in the right frontal white matter.\n\nVENTRICLES: Compression of the right frontal horn. No hydrocephalus.\n\nSUPERIOR SAGITTAL SINUS: Patent. No invasion of the sinus.\n\nOTHER: No additional lesions. No restricted diffusion within the mass.",
      "impression": "1. LARGE RIGHT PARASAGITTAL MENINGIOMA (4.8 cm) with classic imaging features: extra-axial, dural-based, homogeneous enhancement, dural tail sign\n2. Significant mass effect with 8 mm leftward midline shift — explains contralateral (left-sided) symptoms\n3. Superior sagittal sinus patent — favorable for surgical planning\n4. Moderate surrounding edema\n5. WHO grade I meningioma most likely based on imaging characteristics (no restricted diffusion, no necrosis)\n6. Neurosurgery consultation for resection recommended",
      "dictated": "02/25/2025 22:00",
      "verified": "02/25/2025 22:12"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "10/2024", "site": "Left deltoid IM", "lot": "FL814K", "mfr": "GSK" },
    { "vaccine": "COVID-19 (Moderna, updated)", "date": "10/2024", "site": "Right deltoid IM", "lot": "CV788T", "mfr": "Moderna" },
    { "vaccine": "Shingrix (1st dose)", "date": "05/2022", "site": "Right deltoid IM", "lot": "SH318K", "mfr": "GSK" },
    { "vaccine": "Shingrix (2nd dose)", "date": "07/2022", "site": "Right deltoid IM", "lot": "SH324K", "mfr": "GSK" },
    { "vaccine": "Tdap (Adacel)", "date": "08/2020", "site": "Left deltoid IM", "lot": "TA192R", "mfr": "Sanofi" }
  ],
  "familyHistory": [
    "Mother (age 80): Hypertension, Type 2 Diabetes, breast cancer (age 72, treated)",
    "Father: Deceased at age 68 — MI",
    "Sister (age 53): Obesity, prediabetes",
    "Brother (age 60): Healthy",
    "No family history of brain tumors or seizure disorder"
  ],
  "socialHistory": [
    ["Occupation", "Administrative supervisor at local school district — full-time"],
    ["Marital", "Married x 30 years; lives with husband"],
    ["Tobacco", "Never"],
    ["Alcohol", "Social — 1-2 glasses wine on weekends"],
    ["Drugs", "None"],
    ["Exercise", "Zumba class 2x/week; walks 3x/week"],
    ["Housing", "Single-family home"],
    ["Safety", "No concerns"],
    ["Advance Directive", "None — will establish per neurosurgery recommendation"]
  ],
  "meta": {
    "caseId": "meningioma",
    "diagnosis": "Right Parasagittal Meningioma (4.8 cm) with New-Onset Seizure, Contralateral Focal Deficits, and 8 mm Midline Shift",
    "acuity": 3,
    "presentation": "Seizure",
    "category": "oncologic"
  }
};
