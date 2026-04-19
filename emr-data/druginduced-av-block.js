// Virtual EMR Case: Drug-Induced AV Block
// Variant: druginduced-av-block | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Miriam Goldstein",
    "patientHPI": "I've been managing my heart rhythm problems pretty well - I can still do my housework and walk a few blocks without too much trouble. Lately though, I've been feeling more tired than usual and sometimes dizzy, especially when I stand up quickly.",
    "dob": "06/30/1948",
    "age": 77,
    "sex": "Female",
    "mrn": "RDX-2025-54382",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B with Aetna Supplement",
    "pcp": "Dr. Patricia Coleman, MD",
    "pharmacy": "CVS Pharmacy — 5200 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "6553 Clover St, San Antonio, TX 78207",
    "phone": "(954) 555-6148",
    "email": "m.goldstein48@email.com",
    "emergencyContact": {
      "name": "Rebecca Stein (Daughter)",
      "phone": "(954) 555-6162"
    },
    "chiefComplaint": "Nausea and feeling slow for a week"
  },
  "problems": [
    {
      "problem": "Atrial Fibrillation, Persistent",
      "icd": "I48.1",
      "onset": "2018",
      "status": "Active",
      "notes": "Rate-controlled strategy; on diltiazem + digoxin; CHA2DS2-VASc 4"
    },
    {
      "problem": "Heart Failure with Preserved Ejection Fraction",
      "icd": "I50.32",
      "onset": "2020",
      "status": "Active",
      "notes": "EF 55%; diastolic dysfunction; NYHA Class II"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3b",
      "icd": "N18.32",
      "onset": "2021",
      "status": "Active",
      "notes": "eGFR 36; important — affects digoxin clearance"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2000",
      "status": "Active",
      "notes": ""
    },
    {
      "problem": "Hypothyroidism",
      "icd": "E03.9",
      "onset": "2012",
      "status": "Active",
      "notes": "Can affect digoxin sensitivity"
    },
    {
      "problem": "Osteoarthritis, Bilateral Hands",
      "icd": "M19.049",
      "onset": "2015",
      "status": "Active",
      "notes": ""
    }
  ],
  "medications": [
    {
      "name": "Diltiazem ER 240mg daily",
      "sig": "Take 1 capsule by mouth daily",
      "prescriber": "Dr. Singh",
      "start": "10/2018",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Digoxin 0.25mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Singh",
      "start": "04/2019",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Apixaban 5mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Singh",
      "start": "10/2018",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Furosemide 20mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Singh",
      "start": "06/2020",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Levothyroxine 75mcg daily",
      "sig": "Take 1 tablet by mouth daily on empty stomach",
      "prescriber": "Dr. Coleman",
      "start": "08/2013",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Acetaminophen 500mg q6h PRN",
      "sig": "Take 1-2 tablets by mouth every 6 hours as needed for pain; max 3000mg/day",
      "prescriber": "Dr. Coleman",
      "start": "03/2016",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Amiodarone",
      "type": "Drug",
      "reaction": "Thyroid toxicity (amiodarone-induced thyrotoxicosis, 2017)",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Sulfa Drugs",
      "type": "Drug",
      "reaction": "Urticaria",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/22/2026",
      "bp": "96/58",
      "hr": 38,
      "rr": 18,
      "temp": "97.8°F",
      "spo2": "94%",
      "wt": "152 lbs",
      "ht": "5'4\"",
      "bmi": 26.1,
      "setting": "ED"
    },
    {
      "date": "11/18/2025",
      "bp": "128/72",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "154 lbs",
      "ht": "5'4\"",
      "bmi": 26.4,
      "setting": "Specialist"
    },
    {
      "date": "05/20/2025",
      "bp": "132/76",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "156 lbs",
      "ht": "5'4\"",
      "bmi": 26.8,
      "setting": "PCP Office"
    },
    {
      "date": "11/12/2024",
      "bp": "130/74",
      "hr": 70,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "154 lbs",
      "ht": "5'4\"",
      "bmi": 26.4,
      "setting": "Specialist"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/18/2025",
      "type": "Specialist",
      "provider": "Dr. Rajiv Singh, MD (Cardiology)",
      "cc": "AFib rate control; HFpEF management",
      "hpi": "77-year-old female with persistent AFib and HFpEF for follow-up. Reports good rate control — no palpitations. Mild exertional dyspnea (NYHA II), stable. Able to do housework and walk 3 blocks. Weight stable. No edema. Digoxin level last checked 06/2025 was 1.0 ng/mL (therapeutic). Renal function trending downward — eGFR 36 from 42 prior year. Discussed reducing digoxin dose given declining eGFR but patient stable, so continued with close monitoring.",
      "exam": "General: NAD. CV: Irregularly irregular (AFib), rate 68. No S3. Lungs: Clear. Extremities: No edema.",
      "assessment": "1. Persistent AFib — rate controlled on diltiazem + digoxin\n2. HFpEF — stable, NYHA II\n3. CKD 3b — eGFR 36; declining; affects digoxin clearance\n4. Anticoagulation — therapeutic on apixaban",
      "plan": "1. Continue current regimen\n2. Recheck digoxin level and BMP in 3 months — consider dose reduction if eGFR declines further\n3. TSH at next visit\n4. Echo in 12 months\n5. RTC 3 months"
    },
    {
      "id": "V002",
      "date": "05/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Patricia Coleman, MD",
      "cc": "Chronic disease follow-up",
      "hpi": "77-year-old female for routine follow-up. Cardiac symptoms stable. Mild joint pain in hands. Thyroid stable — TSH 2.8 last check. CKD monitored. Reports no dizziness, no falls.",
      "exam": "General: NAD. CV: Irregularly irregular. Lungs: CTAB. Hands: Heberden and Bouchard nodes bilaterally. No synovitis.",
      "assessment": "1. HTN — controlled\n2. Hypothyroidism — stable\n3. OA hands — stable\n4. CKD 3b — monitoring",
      "plan": "1. Continue medications\n2. Labs: BMP, TSH, digoxin level\n3. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "02/22/2026",
      "time": "10:15",
      "orderedBy": "Dr. James Park, MD (ED)",
      "collected": "02/22/2026 09:45",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-022248",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "94",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "38",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "2.2",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "eGFR",
              "value": "22",
              "unit": "mL/min/1.73m²",
              "range": ">60",
              "flag": "L"
            },
            {
              "test": "Sodium",
              "value": "134",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "5.6",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "H"
            },
            {
              "test": "Magnesium",
              "value": "1.4",
              "unit": "mg/dL",
              "range": "1.7-2.2",
              "flag": "L"
            },
            {
              "test": "Calcium",
              "value": "10.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "DIGOXIN LEVEL",
          "results": [
            {
              "test": "Digoxin",
              "value": "3.2",
              "unit": "ng/mL",
              "range": "0.8-2.0 therapeutic",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CARDIAC MARKERS",
          "results": [
            {
              "test": "Troponin I",
              "value": "0.02",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": ""
            },
            {
              "test": "BNP",
              "value": "420",
              "unit": "pg/mL",
              "range": "<100",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "5.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "11.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "33.6",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": "L"
            },
            {
              "test": "Platelet Count",
              "value": "204",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/12/2024",
      "study": "TRANSTHORACIC ECHOCARDIOGRAM",
      "accession": "IMG-2024-11125",
      "status": "FINAL",
      "orderedBy": "Dr. Rajiv Singh, MD",
      "readBy": "Dr. Rajiv Singh, MD (Cardiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "77F with persistent AFib, HFpEF. Annual echo.",
      "technique": "2D and Doppler transthoracic echocardiography.",
      "findings": "Left ventricle: Normal cavity size. Concentric LVH. EF 55% by biplane Simpson's. Grade II diastolic dysfunction (E/A reversal, elevated E/e' ratio 14).\\n\\nLeft atrium: Moderately dilated (44 mm).\\n\\nValves: Mild mitral annular calcification. Trivial MR. Aortic valve: mildly sclerotic, no stenosis.\\n\\nRight heart: Normal RV. RVSP 32 mmHg.\\n\\nNo pericardial effusion.",
      "impression": "1. HFpEF — EF 55%, Grade II diastolic dysfunction.\\n2. Moderate LA dilation consistent with chronic AFib.\\n3. Concentric LVH.\\n4. No significant valvular disease.",
      "dictated": "11/12/2024 14:40",
      "verified": "11/12/2024 16:50"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "09/18/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-HD258",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2025-26)",
      "date": "10/10/2025",
      "site": "Right deltoid IM",
      "lot": "CV2025-750",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20, Prevnar 20)",
      "date": "06/2022",
      "site": "Left deltoid IM",
      "lot": "PV22-380",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "01/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-042",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "03/2021",
      "site": "Left deltoid IM",
      "lot": "SX21-188",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Atrial fibrillation, CHF, deceased at 82",
    "Mother: Hypertension, Alzheimer's disease, deceased at 90",
    "Sister: AFib (pacemaker at 76), alive at 80",
    "No family history of sudden cardiac death"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired accountant; retired 2010"
    ],
    [
      "Marital",
      "Widowed (2022); husband deceased of dementia"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "None"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Gentle walks in neighborhood with neighbor; chair yoga 2x/week"
    ],
    [
      "Housing",
      "Condo with daughter nearby; independent ADLs"
    ],
    [
      "Safety",
      "Denies IPV; fall risk — uses grab bars in bathroom; wears medical alert device"
    ],
    [
      "Advance Directive",
      "POLST on file — Full Code; HCP: daughter Rebecca Stein"
    ]
  ],
  "meta": {
    "caseId": "druginduced-av-block",
    "diagnosis": "Drug-Induced Complete AV Block (Digoxin Toxicity with CKD Progression)",
    "acuity": 2,
    "presentation": "Cardiac Emergency",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Miriam appears mildly anxious but cooperative, speaking in measured tones about her symptoms. She's forthcoming with information but downplays her symptoms initially, typical of someone accustomed to chronic illness. She shows mild distress when discussing her recent decline in energy levels.",
    "interviewQuestions": [
      "Can you describe the fatigue you've been experiencing - when did it start and how has it progressed?",
      "Tell me more about the dizziness - when does it happen and how severe is it?",
      "Have you had any episodes of feeling like you might pass out or actually fainting?",
      "Are you experiencing any chest pain, shortness of breath, or palpitations?",
      "Have you noticed any changes in your appetite, nausea, or vision problems recently?",
      "When was your last visit with your cardiologist and any recent medication changes?",
      "Have you been taking all your medications as prescribed, including the digoxin?",
      "Have you had any recent lab work done, particularly checking your kidney function?",
      "Are you experiencing any swelling in your legs or weight gain?",
      "Have you had any confusion or memory problems lately?",
      "Any recent illnesses, dehydration, or changes in your fluid intake?",
      "Have you noticed your heart beating differently - faster, slower, or irregularly?",
      "Are you having any difficulty with activities you could normally do?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking - could you explain that differently?",
      "onset": "The fatigue started about 2-3 weeks ago and has gotten progressively worse. The dizziness began about a week ago.",
      "character": "It's a heavy, overwhelming tiredness - different from my usual fatigue. The dizziness feels like the room is spinning briefly.",
      "location": "The fatigue is all over my body. The dizziness is in my head, sometimes with a brief feeling like I might fall.",
      "severity": "The fatigue is about a 7 out of 10 - it's really limiting what I can do. The dizziness is about a 6 when it happens.",
      "aggravating": "Standing up quickly makes the dizziness worse. Any activity makes the fatigue much worse than it used to.",
      "relieving": "Sitting down helps the dizziness. Nothing really helps the fatigue - even rest doesn't restore my energy.",
      "associated": "I've had some mild nausea and my appetite isn't great. Sometimes I feel a bit confused or forgetful.",
      "denies": "No chest pain, no fainting spells, no shortness of breath at rest, no leg swelling or weight gain.",
      "history": "I've never felt this tired before, even when my heart failure was acting up. This is different.",
      "medications": "Diltiazem ER 240mg daily; Digoxin 0.25mg daily; Apixaban 5mg BID; Furosemide 20mg daily; Levothyroxine 75mcg daily; Acetaminophen 500mg q6h PRN",
      "allergies": "Amiodarone, Sulfa Drugs",
      "family": "My father had heart problems and my sister needed a pacemaker for her atrial fibrillation when she was 76.",
      "social": "I'm a retired accountant, widowed since 2022. I live alone but manage well usually. I don't smoke or drink alcohol."
    },
    "examManeuvers": [
      "Cardiac auscultation",
      "Pulse palpation and rhythm assessment",
      "Blood pressure measurement in supine and standing positions",
      "Jugular venous pressure assessment",
      "Pulmonary auscultation",
      "Lower extremity edema assessment",
      "Neurologic assessment including orientation and cognition",
      "Fundoscopic examination",
      "Abdominal examination",
      "Skin examination for color and perfusion"
    ],
    "examFindings": {
      "Cardiac auscultation": "Regular rhythm with bradycardia, normal S1 and S2, no murmurs, rubs, or gallops",
      "Pulse palpation and rhythm assessment": "Radial pulse 38 bpm, regular rhythm, good volume when present",
      "Blood pressure measurement in supine and standing positions": "Supine 96/58, standing 88/52 with mild dizziness",
      "Jugular venous pressure assessment": "JVP normal at 6 cm H2O, no cannon waves visible",
      "Pulmonary auscultation": "Clear to auscultation bilaterally, no rales or wheezes",
      "Lower extremity edema assessment": "No pedal edema, good distal pulses",
      "Neurologic assessment including orientation and cognition": "Alert and oriented x3, mild confusion with complex tasks",
      "Fundoscopic examination": "Mild arteriovenous nicking, no papilledema or hemorrhages",
      "Abdominal examination": "Soft, non-tender, no organomegaly",
      "Skin examination for color and perfusion": "Slightly pale, cool extremities, capillary refill 3 seconds"
    },
    "ddxTargets": [
      "Drug-Induced Complete AV Block (Digoxin Toxicity with CKD Progression) (correct diagnosis)",
      "Diltiazem-induced bradycardia",
      "Progressive heart failure decompensation",
      "Acute myocardial infarction with conduction block",
      "Hyperkalemia with cardiac conduction abnormalities",
      "Sick sinus syndrome progression",
      "Hypothyroidism exacerbation"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on heart failure exacerbation given her established HFpEF, missing the medication toxicity component",
      "prematureClosure": "May stop at 'elderly patient with known heart disease having fatigue' without considering drug levels and interactions",
      "availabilityBias": "Recent cases of heart failure may overshadow consideration of digoxin toxicity, which is less commonly seen"
    },
    "coachPrompts": {
      "phase2": "Good differential thinking. Given her medication regimen and kidney disease history, what specific drug interactions or toxicities should you be most concerned about in an elderly patient? How might her renal function impact her current medications?",
      "phase5": "Excellent history and physical. You found bradycardia with fatigue and mild confusion in a patient on both digoxin and diltiazem with known CKD. What's the next most important step in your evaluation, and what specific lab values would help differentiate your top differentials?",
      "finalDebrief": "This case highlights how chronic kidney disease can lead to drug accumulation over time. Notice how the combination of digoxin and diltiazem in the setting of declining renal function created a perfect storm for toxicity. The key learning point is always considering medication toxicity in elderly patients with multiple cardiac drugs, especially when renal function may be declining."
    }
  }
};
