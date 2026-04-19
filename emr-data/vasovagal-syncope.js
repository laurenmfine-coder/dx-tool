
window.EMR_DATA = {
  "patient": {
    "name": "Sophia Castellano",
    "dob": "12/14/2001",
    "age": 24,
    "sex": "Female",
    "mrn": "RDX-2025-42688",
    "pronouns": "She/Her",
    "insurance": "Aetna PPO (employer)",
    "pcp": "Dr. Renee Augustin, MD",
    "pharmacy": "Walgreens — 5200 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White (Italian American)",
    "address": "2918 SW 44th Ave, Fort Lauderdale, FL 33312",
    "phone": "(954) 555-4218",
    "email": "s.castellano01@email.com",
    "emergencyContact": {
      "name": "Marco Castellano (Father)",
      "phone": "(954) 555-4234"
    },
    "chiefComplaint": "Passed out at the doctor's office"
  },
  "problems": [
    {
      "problem": "Recurrent Vasovagal Syncope",
      "icd": "R55",
      "onset": "2017",
      "status": "Active",
      "notes": "3 prior episodes — all situational (blood draws, watching surgery video in class, prolonged standing at concert); prodrome of nausea, warmth, tunnel vision; negative cardiac workup 2018 (echo normal, Holter normal, ECG normal)"
    },
    {
      "problem": "Iron Deficiency Anemia — Mild",
      "icd": "D50.9",
      "onset": "2025",
      "status": "Active",
      "notes": "Heavy menstrual bleeding (menorrhagia); Hgb 11.2; ferritin 10; on oral iron; OB/GYN evaluation pending"
    },
    {
      "problem": "Menorrhagia",
      "icd": "N92.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Heavy periods lasting 7-8 days; soaking through pads; contributing to IDA; OB/GYN referral placed"
    }
  ],
  "medications": [
    {
      "name": "Ferrous Sulfate 325mg daily",
      "sig": "Take 1 tablet by mouth once daily on empty stomach with vitamin C",
      "prescriber": "Dr. Augustin",
      "start": "09/2025",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Ibuprofen 400mg PRN",
      "sig": "Take 1 tablet by mouth every 6 hours as needed for menstrual cramps",
      "prescriber": "Dr. Augustin",
      "start": "01/2022",
      "refills": 5,
      "status": "PRN"
    }
  ],
  "allergies": [
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
      "date": "02/28/2026",
      "bp": "102/64",
      "hr": 58,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "99%",
      "wt": "128 lbs",
      "ht": "5'5\"",
      "bmi": 21.3,
      "setting": "ED"
    },
    {
      "date": "09/10/2025",
      "bp": "108/68",
      "hr": 66,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "130 lbs",
      "ht": "5'5\"",
      "bmi": 21.6,
      "setting": "PCP Office"
    },
    {
      "date": "02/12/2025",
      "bp": "106/66",
      "hr": 62,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "132 lbs",
      "ht": "5'5\"",
      "bmi": 22,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "09/10/2025",
      "type": "Primary Care",
      "provider": "Dr. Renee Augustin, MD",
      "cc": "Fatigue, heavy periods, follow-up labs",
      "hpi": "24F presents with 3-month history of progressive fatigue, exertional dyspnea going up stairs (new), and worsening menorrhagia. Periods lasting 7-8 days, soaking through super pads every 2-3 hours on heavy days. Reports pallor noticed by coworkers. History of recurrent vasovagal syncope (3 prior episodes, all situational). Last episode 2022 — blood draw. No recent syncope. Labs sent.",
      "exam": "NAD but pale. Conjunctival pallor present. CV: RRR, soft flow murmur (1/6 systolic, likely anemia-related). Lungs: CTAB. Abdomen: Soft, NT. Ext: No edema.",
      "assessment": "1. Iron deficiency anemia — likely secondary to menorrhagia\n2. Menorrhagia — needs OB/GYN evaluation (structural vs hormonal)\n3. History of vasovagal syncope — no recent episodes",
      "plan": "1. Start ferrous sulfate 325mg daily\n2. OB/GYN referral for menorrhagia workup (pelvic US, consider hormonal management)\n3. Labs: CBC, iron studies, reticulocyte count\n4. Return 6 weeks with labs\n5. Discussed blood draw technique — lie flat, apply cold pack, look away"
    },
    {
      "id": "V002",
      "date": "02/12/2025",
      "type": "Primary Care",
      "provider": "Dr. Renee Augustin, MD",
      "cc": "Annual wellness",
      "hpi": "23F presents for annual wellness exam. No complaints. Periods regular but reports them getting heavier over past year. No fainting episodes since 2022. Exercising regularly. Eating well.",
      "exam": "NAD. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT. Skin: Good color.",
      "assessment": "1. Healthy young female\n2. Menorrhagia — mild, monitor",
      "plan": "1. Routine labs: CBC, CMP\n2. STI screening per guidelines\n3. Return 1 year or sooner if concerns"
    }
  ],
  "labs": [
    {
      "date": "09/10/2025",
      "time": "10:30",
      "orderedBy": "Dr. Augustin",
      "collected": "09/10/2025 10:45",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-800910",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            {
              "test": "WBC",
              "value": "6.8",
              "unit": "K/uL",
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
              "value": "34.0",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": "L"
            },
            {
              "test": "MCV",
              "value": "76",
              "unit": "fL",
              "range": "80-100",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "318",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "IRON STUDIES",
          "results": [
            {
              "test": "Iron",
              "value": "32",
              "unit": "mcg/dL",
              "range": "50-170",
              "flag": "L"
            },
            {
              "test": "TIBC",
              "value": "388",
              "unit": "mcg/dL",
              "range": "250-370",
              "flag": "H"
            },
            {
              "test": "Ferritin",
              "value": "10",
              "unit": "ng/mL",
              "range": "12-150",
              "flag": "L"
            },
            {
              "test": "Transferrin Saturation",
              "value": "8",
              "unit": "%",
              "range": "20-50",
              "flag": "L"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "03/2018",
      "study": "ECHOCARDIOGRAM — TRANSTHORACIC",
      "accession": "IMG-2018-30322",
      "status": "FINAL",
      "orderedBy": "Dr. Patel (Cardiology)",
      "readBy": "Dr. Anil Patel, MD (Cardiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "Recurrent syncope in teenager — cardiac evaluation",
      "technique": "Complete 2D and Doppler echocardiogram.",
      "findings": "Normal cardiac structure and function. Normal LV cavity size with EF 65%. No valvular abnormalities. Normal RV size and function. No ASDs, VSDs, or PFO visualized. No pericardial effusion. Aortic root normal.",
      "impression": "1. Structurally normal heart.\n2. Normal biventricular function.\n3. No valvular disease.",
      "dictated": "03/22/2018 10:00",
      "verified": "03/22/2018 11:30"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-8840",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Pfizer)",
      "date": "10/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2044",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap",
      "date": "09/2021",
      "site": "Left deltoid IM",
      "lot": "TD21-548",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) — Series Complete",
      "date": "2017",
      "site": "Left deltoid IM",
      "lot": "HP17-292",
      "mfr": "Merck"
    },
    {
      "vaccine": "Meningococcal ACWY",
      "date": "2019",
      "site": "Right deltoid IM",
      "lot": "MN19-180",
      "mfr": "Sanofi"
    }
  ],
  "familyHistory": [
    "Father: Vasovagal syncope (fainted at blood draws — multiple episodes), alive at 56",
    "Mother: Uterine fibroids requiring hysterectomy at age 42, alive at 52",
    "Sister: Heavy periods, alive at 22",
    "Maternal grandmother: Iron deficiency anemia, alive at 78"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Elementary school art teacher — first year teaching"
    ],
    [
      "Marital",
      "Single; lives alone"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Social — 2-3 drinks on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Yoga 3x/week; hiking on weekends"
    ],
    [
      "Housing",
      "1-bedroom apartment"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt; no firearms"
    ],
    [
      "Advance Directive",
      "None — not discussed (age 24)"
    ]
  ],
  "meta": {
    "caseId": "vasovagal-syncope",
    "diagnosis": "Vasovagal Syncope (Situational — Post-Phlebotomy Episode with Classic Prodrome in Patient with Recurrent NMS History, Compounded by Mild Iron Deficiency Anemia)",
    "acuity": 4,
    "presentation": "Syncope",
    "category": "neurologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Sophia Castellano appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did syncope start?",
      "Can you describe exactly how it started — sudden or gradual?",
      "Where is the problem located? Does it spread anywhere?",
      "How would you rate the severity on a scale of 1 to 10?",
      "What makes it worse? What makes it better?",
      "Do you have any other symptoms along with this?",
      "Have you had anything like this before?",
      "Tell me about your medical history — any chronic conditions?",
      "What medications are you currently taking?",
      "Do you have any allergies to medications?",
      "Tell me about your family medical history.",
      "Tell me about your lifestyle — work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
      "default": "She pauses and thinks for a moment. 'I'm not sure exactly — can you be more specific?'",
      "onset": "'The symptoms started 24F presents with 3-month history of progressive fatigue, exertional dyspnea goi.'",
      "character": "'It's syncope — it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Vasovagal Syncope.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Ferrous Sulfate 325mg daily; Ibuprofen 400mg PRN.'",
      "allergies": "'My allergies are NKDA.'",
      "family": "Father: Vasovagal syncope (fainted at blood draws — multiple episodes), alive at 56  Mother: Uterine fibroids requiring hysterectomy at age 42, alive at 52  Sister: Heavy periods, alive at 22",
      "social": "Occupation: Elementary school art teacher — first year teaching  Marital: Single; lives alone  Tobacco: Never smoker  Alcohol: Social — 2-3 drinks on weekends  Drugs: Denies"
    },
    "examManeuvers": [
      "Level of consciousness and GCS",
      "Cranial nerve examination",
      "Motor strength testing",
      "Sensory testing",
      "Coordination and cerebellar testing",
      "Gait assessment if applicable",
      "Meningeal signs",
      "Vital signs"
    ],
    "examFindings": {
      "Level of consciousness and GCS": "Clinical finding consistent with Vasovagal Syncope. Document specifically what you observe.",
      "Cranial nerve examination": "Clinical finding consistent with Vasovagal Syncope. Document specifically what you observe.",
      "Motor strength testing": "Clinical finding consistent with Vasovagal Syncope. Document specifically what you observe.",
      "Sensory testing": "Clinical finding consistent with Vasovagal Syncope. Document specifically what you observe.",
      "Coordination and cerebellar testing": "Clinical finding consistent with Vasovagal Syncope. Document specifically what you observe.",
      "Gait assessment if applicable": "Clinical finding consistent with Vasovagal Syncope. Document specifically what you observe.",
      "Meningeal signs": "Clinical finding consistent with Vasovagal Syncope. Document specifically what you observe.",
      "Vital signs": "Clinical finding consistent with Vasovagal Syncope. Document specifically what you observe."
    },
    "ddxTargets": [
      "Vasovagal Syncope (correct diagnosis)",
      "Most likely alternative diagnosis",
      "Third differential diagnosis",
      "Must-not-miss diagnosis",
      "Second must-not-miss",
      "Common clinical mimic",
      "Alternative presentation to consider"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Vasovagal Syncope, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Vasovagal Syncope, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Vasovagal Syncope based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Sophia Castellano's chart. Before you interview them — what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Vasovagal Syncope (Situational — Post-Phlebotomy Episode with Classic Prodrome in Patient with Recurrent NMS History, Compounded by Mild Iron Deficiency Anemia). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
  }
};
