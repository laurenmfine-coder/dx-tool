// Virtual EMR Case: Aortic Aneurysm (Symptomatic AAA)
// Variant: aortic-aneurysm | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Frank DiMaggio",
    "patientHPI": "I've been having this dull ache in my lower back for the past few weeks that sometimes spreads around to my left side. It's not like I pulled something or hurt myself - it just started happening and comes and goes throughout the day. I've also been feeling more tired than usual lately, which isn't like me.",
    "dob": "11/20/1952",
    "age": 73,
    "sex": "Male",
    "mrn": "RDX-2025-68241",
    "pronouns": "He/Him",
    "insurance": "Medicare Part A/B with BlueCross BlueShield Supplement",
    "pcp": "Dr. David Tanaka, MD",
    "pharmacy": "Publix Pharmacy — 4651 SW 64th Ave, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "4828 N Kedzie Blvd, Richmond, VA 23225",
    "phone": "(954) 555-3618",
    "email": "f.dimaggio52@email.com",
    "emergencyContact": {
      "name": "Maria DiMaggio (Wife)",
      "phone": "(954) 555-3632"
    }
  },
  "problems": [
    {
      "problem": "Abdominal Aortic Aneurysm",
      "icd": "I71.4",
      "onset": "2021",
      "status": "Active",
      "notes": "Infrarenal AAA; 5.2 cm on last CTA (09/2025); growth rate 0.4 cm/year; vascular surgery consultation — EVAR planned"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2002",
      "status": "Active",
      "notes": "Controlled on dual therapy"
    },
    {
      "problem": "Coronary Artery Disease",
      "icd": "I25.10",
      "onset": "2015",
      "status": "Active",
      "notes": "PCI with DES to LAD (2015); stress test 2024 negative for ischemia"
    },
    {
      "problem": "Peripheral Artery Disease",
      "icd": "I73.9",
      "onset": "2019",
      "status": "Active",
      "notes": "ABI 0.72 left, 0.78 right; claudication at 2 blocks"
    },
    {
      "problem": "Hyperlipidemia",
      "icd": "E78.5",
      "onset": "2005",
      "status": "Active",
      "notes": ""
    },
    {
      "problem": "Tobacco Use Disorder, Former",
      "icd": "Z87.891",
      "onset": "1970",
      "status": "Resolved",
      "notes": "Quit 2016; 45 pack-year history"
    }
  ],
  "medications": [
    {
      "name": "Metoprolol Succinate 50mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Singh",
      "start": "06/2015",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Tanaka",
      "start": "04/2003",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 80mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Singh",
      "start": "06/2015",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Singh",
      "start": "06/2015",
      "refills": 6,
      "status": "Active"
    },
    {
      "name": "Clopidogrel 75mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Singh",
      "start": "06/2015",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Cilostazol 100mg BID",
      "sig": "Take 1 tablet by mouth twice daily 30 minutes before or 2 hours after meals",
      "prescriber": "Dr. Martinez",
      "start": "08/2020",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Iodinated Contrast Dye",
      "type": "Drug",
      "reaction": "Hives, pruritus (premedication protocol with steroids/antihistamines used for CT)",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/06/2026",
      "bp": "138/82",
      "hr": 64,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "174 lbs",
      "ht": "5'9\"",
      "bmi": 25.7,
      "setting": "Specialist"
    },
    {
      "date": "09/22/2025",
      "bp": "142/86",
      "hr": 66,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "176 lbs",
      "ht": "5'9\"",
      "bmi": 26,
      "setting": "Specialist"
    },
    {
      "date": "03/15/2025",
      "bp": "136/80",
      "hr": 62,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "178 lbs",
      "ht": "5'9\"",
      "bmi": 26.3,
      "setting": "PCP Office"
    },
    {
      "date": "09/10/2024",
      "bp": "140/84",
      "hr": 66,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "176 lbs",
      "ht": "5'9\"",
      "bmi": 26,
      "setting": "Specialist"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/06/2026",
      "type": "Specialist",
      "provider": "Dr. Luis Martinez, MD (Vascular Surgery)",
      "cc": "AAA surveillance; preoperative evaluation",
      "hpi": "73-year-old male with known infrarenal AAA (5.2 cm, 09/2025) presenting for preoperative evaluation for elective EVAR. Reports new onset dull lower back pain over past 3 weeks — intermittent, not positional, radiates to left flank. Denies trauma. Reports increased fatigue. AAA growth rate 0.4 cm/year; meets criteria for repair. PAD stable — claudication at 2 blocks. CAD stable — no angina. Stress test (2024) negative.",
      "exam": "General: NAD. CV: RRR, no murmurs. Abdomen: Pulsatile mass palpable periumbilical region, non-tender. Peripheral pulses: Diminished bilateral dorsalis pedis. ABI: 0.72 left, 0.78 right. Neuro: Grossly intact.",
      "assessment": "1. AAA 5.2 cm — meets criteria for EVAR; new back pain concerning for symptomatic expansion\n2. PAD — stable\n3. CAD — stable; cardiac clearance needed\n4. New back pain — warrants urgent repeat imaging",
      "plan": "1. Urgent CTA abdomen/pelvis to reassess AAA size and morphology\n2. If stable, proceed with EVAR scheduling within 2-4 weeks\n3. If expansion or concerning features, emergent repair\n4. Cardiac clearance from Dr. Singh\n5. Premedication protocol for contrast allergy\n6. Continue all medications through surgery"
    },
    {
      "id": "V002",
      "date": "09/22/2025",
      "type": "Specialist",
      "provider": "Dr. Luis Martinez, MD (Vascular Surgery)",
      "cc": "AAA surveillance",
      "hpi": "73-year-old male for routine AAA surveillance. CTA today shows infrarenal AAA at 5.2 cm, increased from 4.8 cm (03/2025). Growth rate exceeds 0.5 cm in 6 months. No symptoms — no back pain, no abdominal pain, hemodynamically stable. Decision made to offer elective EVAR.",
      "exam": "General: NAD. Abdomen: Pulsatile mass, non-tender. Peripheral pulses: Diminished bilaterally.",
      "assessment": "1. Infrarenal AAA 5.2 cm — rapid growth; recommend EVAR\n2. PAD — stable",
      "plan": "1. Discuss EVAR risks/benefits — patient agrees to proceed\n2. Schedule preop workup\n3. RTC 6 weeks for preop evaluation"
    },
    {
      "id": "V003",
      "date": "03/15/2025",
      "type": "Primary Care",
      "provider": "Dr. David Tanaka, MD",
      "cc": "Chronic disease follow-up",
      "hpi": "73-year-old male for routine follow-up. BP controlled. CAD stable on medical therapy. PAD symptoms stable — claudication at 2 blocks, improved with cilostazol. AAA under surveillance. No new complaints. Former smoker — quit 9 years ago. Lipids at goal.",
      "exam": "General: NAD. CV: RRR. Lungs: CTAB. Abdomen: Soft; pulsatile mass noted. Extremities: Diminished pedal pulses.",
      "assessment": "1. HTN — controlled\n2. CAD — stable\n3. PAD — stable on cilostazol\n4. AAA — under vascular surgery surveillance",
      "plan": "1. Continue all medications\n2. Labs: BMP, CBC, lipid panel\n3. Vascular surgery follow-up per protocol\n4. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "01/06/2026",
      "time": "08:45",
      "orderedBy": "Dr. Luis Martinez, MD",
      "collected": "01/06/2026 08:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-010635",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "96",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "20",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.2",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "140",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "25",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.2",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "7.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.6",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "40.8",
              "unit": "%",
              "range": "38.0-50.0",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "192",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "COAGULATION",
          "results": [
            {
              "test": "PT",
              "value": "12.4",
              "unit": "sec",
              "range": "11.0-13.5",
              "flag": ""
            },
            {
              "test": "INR",
              "value": "1.0",
              "unit": "",
              "range": "0.8-1.1",
              "flag": ""
            },
            {
              "test": "PTT",
              "value": "30",
              "unit": "sec",
              "range": "25-35",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "09/22/2025",
      "study": "CT ANGIOGRAM ABDOMEN AND PELVIS (AORTA PROTOCOL)",
      "accession": "IMG-2025-09225",
      "status": "FINAL",
      "orderedBy": "Dr. Luis Martinez, MD",
      "readBy": "Dr. Elena Suarez, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "73M with known AAA, surveillance. Premedicated for contrast allergy.",
      "technique": "CT angiogram of the abdomen and pelvis with IV contrast, arterial and delayed phases. Premedication: prednisone 50mg PO at 13h, 7h, and 1h prior + diphenhydramine 50mg IV 1h prior.",
      "findings": "Infrarenal abdominal aorta: Fusiform aneurysm measuring 5.2 cm in maximal AP diameter (increased from 4.8 cm on 03/2025). Begins 2.5 cm below the lowest renal artery. Length approximately 7 cm. Infrarenal neck 2.0 cm, diameter 24 mm — suitable for EVAR.\\n\\nMural thrombus: Eccentric, up to 1.5 cm thickness along the anterior wall.\\n\\nIliac arteries: Right common iliac 1.6 cm (mildly ectatic). Left common iliac 1.4 cm (normal). No iliac aneurysm.\\n\\nRenal arteries: Patent bilaterally.\\n\\nSMA/celiac: Patent.\\n\\nNo retroperitoneal hematoma or contained leak.",
      "impression": "1. Infrarenal AAA measuring 5.2 cm — increased from 4.8 cm (6-month interval). Growth rate exceeds expected, concerning for instability.\\n2. Infrarenal neck anatomy suitable for EVAR.\\n3. No evidence of rupture or contained leak.\\n4. Eccentric mural thrombus.\\n5. Mild right common iliac ectasia.",
      "dictated": "09/22/2025 14:30",
      "verified": "09/22/2025 16:50"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "09/18/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-HD260",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2025-26)",
      "date": "10/08/2025",
      "site": "Right deltoid IM",
      "lot": "CM2025-638",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Pneumococcal (PCV20, Prevnar 20)",
      "date": "01/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-062",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "06/2022",
      "site": "Left deltoid IM",
      "lot": "SX22-382",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "08/2022",
      "site": "Left deltoid IM",
      "lot": "SX22-506",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: AAA (ruptured at age 72, deceased), HTN",
    "Mother: Stroke at 78, HTN, deceased at 82",
    "Brother: Peripheral artery disease, alive at 70",
    "Sister: HTN, alive at 68"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired postal carrier; retired 2017"
    ],
    [
      "Marital",
      "Married 48 years; wife Maria, age 71"
    ],
    [
      "Tobacco",
      "Former smoker — quit 2016; 45 pack-year history"
    ],
    [
      "Alcohol",
      "Occasional, 1 glass wine with dinner"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walks 20 min daily; limited by claudication at 2 blocks"
    ],
    [
      "Housing",
      "Single-family home with wife; single-story"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt always"
    ],
    [
      "Advance Directive",
      "POLST on file — Full Code; HCP: wife Maria DiMaggio"
    ]
  ],
  "meta": {
    "caseId": "aortic-aneurysm",
    "diagnosis": "Symptomatic Abdominal Aortic Aneurysm",
    "acuity": 2,
    "presentation": "Back Pain",
    "category": "cardiovascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Frank appears mildly anxious and concerned about his persistent back pain, particularly given his family history of AAA. He is cooperative and forthcoming with information, though somewhat worried about what might be causing his symptoms that feel different from typical back pain.",
    "interviewQuestions": [
      "Can you describe exactly when this back pain started?",
      "What does the pain feel like - sharp, dull, throbbing, or burning?",
      "Where exactly do you feel the pain and does it spread anywhere?",
      "On a scale of 1-10, how would you rate your pain?",
      "What makes the pain worse or better?",
      "Have you noticed any other symptoms like nausea, changes in urination, or leg pain?",
      "Have you had any episodes of dizziness or feeling faint?",
      "Have you noticed any pulsing sensation in your abdomen?",
      "Tell me about your family history, particularly your father's condition",
      "What medications are you currently taking?",
      "Do you have any allergies to medications or contrast dye?",
      "How has this pain affected your daily activities?",
      "Have you had any recent imaging of your abdomen or back?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you rephrase that?",
      "onset": "It started about 3 weeks ago, maybe a little longer. Just came on gradually - no specific injury or event I can think of.",
      "character": "It's a deep, dull ache most of the time. Sometimes it feels like a gnawing sensation, and occasionally it throbs a bit.",
      "location": "Mostly in my lower back, around the belt line area, but it wraps around to my left side and sometimes into my left flank.",
      "severity": "I'd say it's about a 4 or 5 out of 10 most days, but it can get up to a 6 or 7. It's definitely affecting my sleep and I'm moving more carefully.",
      "aggravating": "It seems worse when I've been active, like walking around the neighborhood, and sometimes when I'm lying flat at night.",
      "relieving": "Sitting in my recliner seems to help some. Tylenol takes the edge off but doesn't make it go away completely.",
      "associated": "I've been feeling more tired than usual, and sometimes I feel a little queasy. No fever though, and I haven't noticed any problems urinating.",
      "denies": "No sharp shooting pain down my legs, no numbness or tingling in my legs, no chest pain or shortness of breath with the episodes.",
      "history": "I've never had back pain like this before. I know I have that aneurysm that they've been watching, but this feels different from anything I've experienced.",
      "medications": "Metoprolol Succinate 50mg daily; Lisinopril 20mg daily; Atorvastatin 80mg QHS; Aspirin 81mg daily; Clopidogrel 75mg daily; Cilostazol 100mg BID",
      "allergies": "Iodinated Contrast Dye",
      "family": "My father had an abdominal aortic aneurysm that ruptured when he was 72 - that's how he died. That's actually how they found mine a few years ago. My mother had high blood pressure and a stroke, and my brother has circulation problems in his legs.",
      "social": "I'm a retired postal carrier, quit working in 2017. Been married to Maria for 48 years. I used to smoke for about 30 years, pack and a half a day, but I quit in 2016. I might have a glass of wine with dinner occasionally, but that's about it."
    },
    "examManeuvers": [
      "Abdominal inspection",
      "Abdominal palpation for masses",
      "Abdominal auscultation",
      "Assessment for abdominal pulsatile mass",
      "Lumbar spine range of motion",
      "Straight leg raise test",
      "Peripheral pulse examination",
      "Blood pressure in both arms",
      "Costovertebral angle tenderness",
      "Abdominal bruits assessment"
    ],
    "examFindings": {
      "Abdominal inspection": "Mild abdominal distention, no obvious masses or pulsations visible",
      "Abdominal palpation for masses": "Palpable pulsatile mass in epigastrium extending slightly to the left, approximately 5-6cm in diameter",
      "Abdominal auscultation": "Audible bruit over the epigastrium and left paraumbilical area",
      "Assessment for abdominal pulsatile mass": "Prominent pulsatile mass palpable in epigastrium, expansile in nature, tender to deep palpation",
      "Lumbar spine range of motion": "Slightly limited flexion due to discomfort, normal extension and lateral bending",
      "Straight leg raise test": "Negative bilaterally, no radicular symptoms reproduced",
      "Peripheral pulse examination": "Diminished femoral pulses bilaterally, weak dorsalis pedis and posterior tibial pulses",
      "Blood pressure in both arms": "Right arm 138/82, left arm 142/84 - no significant difference",
      "Costovertebral angle tenderness": "Mild tenderness on left side, no significant pain on percussion",
      "Abdominal bruits assessment": "Prominent systolic bruit audible over epigastrium, extending toward left flank"
    },
    "ddxTargets": [
      "Symptomatic Abdominal Aortic Aneurysm (correct diagnosis)",
      "Lumbar muscle strain/mechanical back pain",
      "Nephrolithiasis",
      "Ruptured abdominal aortic aneurysm",
      "Acute aortic dissection",
      "Lumbar disc herniation with radiculopathy",
      "Retroperitoneal hemorrhage"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'back pain' and focusing solely on musculoskeletal causes while missing the vascular emergency, especially given patient's known AAA history",
      "prematureClosure": "Risk of stopping evaluation after finding some lumbar spine tenderness without considering the systemic nature and family history of AAA",
      "availabilityBias": "Common back pain presentations may overshadow consideration of less common but more serious vascular causes, particularly in elderly male with risk factors"
    },
    "coachPrompts": {
      "phase2": "What key risk factors and historical elements make this case particularly concerning? Given his known AAA and family history, what specific questions will help you differentiate between mechanical back pain and vascular causes?",
      "phase5": "You've identified some important findings on examination. What is the significance of the palpable pulsatile mass combined with his symptoms and risk factors? How does this change your differential diagnosis prioritization?",
      "finalDebrief": "This case illustrates how AAA can present as back pain, mimicking musculoskeletal conditions. The combination of his known AAA, family history, risk factors, and key exam findings of pulsatile mass with bruit should have elevated vascular causes to the top of your differential. What red flags in the history and physical should prompt urgent vascular imaging in similar cases?"
    }
  }
};
