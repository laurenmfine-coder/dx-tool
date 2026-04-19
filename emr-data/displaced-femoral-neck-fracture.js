// Virtual EMR Case: Displaced Femoral Neck Fracture
// Variant: displaced-femoral-neck-fracture | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Doris Jean Campbell",
    "patientHPI": "I've been feeling really unsteady on my feet lately and almost fell twice last month - luckily I grabbed onto furniture both times. My hip has been aching more than usual, especially when I try to get up from sitting, and walking feels more difficult than it used to.",
    "dob": "11/14/1941",
    "age": 83,
    "sex": "Female",
    "mrn": "RDX-2025-28503",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B with Humana Medicare Advantage",
    "pcp": "Dr. Lawrence Chen, MD",
    "pharmacy": "CVS Pharmacy — 2600 Broward Blvd, Fort Lauderdale, FL",
    "language": "English",
    "race": "White",
    "address": "4561 E Roosevelt Rd, Minneapolis, MN 55403",
    "phone": "(954) 555-8726",
    "email": "d.campbell41@email.com",
    "emergencyContact": {
      "name": "Patricia Campbell-Ross (Daughter)",
      "phone": "(954) 555-8750"
    }
  },
  "problems": [
    {
      "problem": "Osteoporosis, Severe",
      "icd": "M80.08XA",
      "onset": "2015",
      "status": "Active",
      "notes": "T-score -3.4 femoral neck; -3.1 lumbar spine; on zoledronic acid annual infusion; prior vertebral compression fracture T12 (2020)"
    },
    {
      "problem": "Vertebral Compression Fracture T12",
      "icd": "M80.08XS",
      "onset": "2020",
      "status": "Resolved",
      "notes": "Osteoporotic compression fracture; managed conservatively with bracing"
    },
    {
      "problem": "Atrial Fibrillation, Persistent",
      "icd": "I48.1",
      "onset": "2017",
      "status": "Active",
      "notes": "Rate controlled; on warfarin (CHA2DS2-VASc 5)"
    },
    {
      "problem": "Chronic Kidney Disease, Stage 3a",
      "icd": "N18.31",
      "onset": "2019",
      "status": "Active",
      "notes": "eGFR 52; multifactorial — age, HTN, DM"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2008",
      "status": "Active",
      "notes": "A1c 7.0%; on metformin (dose-adjusted for CKD) and glipizide"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2000",
      "status": "Active",
      "notes": "On losartan and metoprolol"
    }
  ],
  "medications": [
    {
      "name": "Warfarin 3mg daily (dose varies per INR)",
      "sig": "Take as directed by INR clinic — currently 3mg daily",
      "prescriber": "Dr. Chen",
      "start": "06/2017",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Metoprolol Succinate 50mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Chen",
      "start": "06/2017",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Losartan 50mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Chen",
      "start": "01/2002",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Metformin 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals (renal dose)",
      "prescriber": "Dr. Chen",
      "start": "01/2009",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Glipizide 5mg daily",
      "sig": "Take 1 tablet by mouth once daily before breakfast",
      "prescriber": "Dr. Chen",
      "start": "06/2018",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Zoledronic Acid 5mg IV annually",
      "sig": "Infuse 5 mg IV over 15 minutes annually — administered in office",
      "prescriber": "Dr. Chen",
      "start": "06/2021",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Calcium-Vitamin D 600mg/800IU BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Chen",
      "start": "06/2016",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Aspirin",
      "type": "Drug",
      "reaction": "GI bleeding (upper GI bleed 2015)",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Iodinated Contrast",
      "type": "Drug",
      "reaction": "Urticaria and bronchospasm",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "12/04/2024",
      "bp": "136/72",
      "hr": 72,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "95%",
      "wt": "124 lbs",
      "ht": "5'2\"",
      "bmi": 22.7,
      "setting": "PCP Office"
    },
    {
      "date": "06/12/2024",
      "bp": "140/74",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "96%",
      "wt": "126 lbs",
      "ht": "5'2\"",
      "bmi": 23,
      "setting": "PCP Office"
    },
    {
      "date": "12/10/2023",
      "bp": "134/70",
      "hr": 70,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "96%",
      "wt": "128 lbs",
      "ht": "5'2\"",
      "bmi": 23.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/04/2024",
      "type": "Primary Care",
      "provider": "Dr. Lawrence Chen, MD",
      "cc": "Fall risk assessment; INR check; DM/HTN management",
      "hpi": "83-year-old female with severe osteoporosis (T-score -3.4 femoral neck), persistent atrial fibrillation on warfarin, CKD 3a, DM2, and prior T12 compression fracture for routine visit. Has been increasingly unsteady on feet — daughter reports 2 near-falls in past month (caught herself on furniture). Uses cane at home but daughter wants her to use walker. Kyphotic posture worsening since compression fracture. INR has been labile — ranged 1.8-4.2 over past 3 months. Compliant with zoledronic acid (last infusion 06/2024).",
      "exam": "General: Thin elderly female, kyphotic posture. CV: Irregularly irregular. Lungs: CTAB. MSK: Thoracic kyphosis. Gait: Slow, unsteady, uses cane. Timed Up-and-Go: 18 seconds (elevated fall risk). Skin: No bruising.",
      "assessment": "1. Fall risk — HIGH; TUG 18 seconds; osteoporosis with prior fragility fracture; on warfarin\n2. Osteoporosis, severe — on zoledronic acid; kyphosis worsening\n3. AF on warfarin — labile INR; BLEEDING RISK with falls\n4. CKD 3a — stable\n5. DM2 — well controlled",
      "plan": "1. STRONGLY recommend transition from cane to rolling walker — daughter to purchase\n2. Home safety assessment ordered — remove throw rugs, improve lighting, grab bars\n3. PT referral for balance and strengthening\n4. INR today: 2.6 (therapeutic); recheck in 2 weeks\n5. Discussed switching warfarin to apixaban — renal function borderline; will discuss with cardiologist\n6. DEXA scan due — order for February\n7. HIGH FALL RISK WARNING: hip fracture would be catastrophic given severe osteoporosis and anticoagulation"
    },
    {
      "id": "V002",
      "date": "06/12/2024",
      "type": "Primary Care",
      "provider": "Dr. Lawrence Chen, MD",
      "cc": "Post zoledronic acid infusion check; routine labs",
      "hpi": "82-year-old female 1 week post annual zoledronic acid infusion. Tolerated well — mild flu-like symptoms for 24 hours post-infusion, resolved with acetaminophen. No new symptoms.",
      "exam": "General: NAD. MSK: Kyphotic, stable.",
      "assessment": "1. Post zoledronic acid — tolerated\n2. Stable chronic conditions",
      "plan": "1. Continue current medications\n2. INR 2.4 — therapeutic\n3. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "12/04/2024",
      "time": "09:30",
      "orderedBy": "Dr. Lawrence Chen, MD",
      "collected": "12/04/2024 09:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-285030",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "106",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "28",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.3",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": "H"
            },
            {
              "test": "eGFR",
              "value": "52",
              "unit": "mL/min/1.73m²",
              "range": ">60",
              "flag": "L"
            },
            {
              "test": "Sodium",
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.6",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
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
              "value": "6.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "11.4",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "34.2",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": "L"
            },
            {
              "test": "Platelet Count",
              "value": "182",
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
              "value": "24.8",
              "unit": "seconds",
              "range": "11.0-13.5",
              "flag": "H"
            },
            {
              "test": "INR",
              "value": "2.6",
              "unit": "",
              "range": "2.0-3.0 (target AF)",
              "flag": ""
            }
          ]
        },
        {
          "name": "HEMOGLOBIN A1c",
          "results": [
            {
              "test": "HbA1c",
              "value": "7.0",
              "unit": "%",
              "range": "<5.7 normal",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "03/2020",
      "study": "CT THORACIC SPINE WITHOUT CONTRAST",
      "accession": "IMG-2020-28503",
      "status": "FINAL",
      "orderedBy": "Dr. Lawrence Chen, MD",
      "readBy": "Dr. Robert Anderson, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Urgent",
      "clinical": "78F with acute mid-back pain after bending. Severe osteoporosis. R/O compression fracture.",
      "technique": "CT thoracic spine without contrast.",
      "findings": "T12 vertebral body: Acute compression fracture with approximately 40% loss of anterior vertebral body height. No retropulsion into spinal canal. Posterior elements intact.\\n\\nRemaining thoracic vertebral bodies: Diffuse osteopenia. No additional acute fractures. Old T8 mild anterior wedging — chronic.\\n\\nSpinal canal: Patent. No cord compression.",
      "impression": "1. Acute T12 vertebral compression fracture — osteoporotic, 40% anterior height loss.\\n2. Diffuse osteopenia.\\n3. Chronic mild T8 wedging.\\n4. No spinal canal compromise.",
      "dictated": "03/15/2020 14:00",
      "verified": "03/15/2020 16:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (High-Dose Quadrivalent)",
      "date": "10/02/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD290",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/18/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-804",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "2023",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Osteoporosis, hip fracture at age 82, deceased at 86",
    "Father: Hypertension, MI, deceased at 68",
    "Sister: Osteoporosis, vertebral fracture, alive at 80",
    "Daughter: Healthy, age 56"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired librarian — 30 years at Broward County Library"
    ],
    [
      "Marital",
      "Widowed — husband deceased 2012"
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
      "Limited — walks indoors with cane; seated exercises"
    ],
    [
      "Housing",
      "Lives alone in ground-floor condo; daughter visits 3x/week; considering assisted living"
    ],
    [
      "Safety",
      "Uses cane (should use walker); grab bars in bathroom; medical alert pendant; area rugs still present (daughter plans to remove); night light in hallway"
    ],
    [
      "Advance Directive",
      "Yes — healthcare proxy: daughter Patricia Campbell-Ross; full code"
    ]
  ],
  "meta": {
    "caseId": "displaced-femoral-neck-fracture",
    "diagnosis": "Displaced Femoral Neck Fracture",
    "acuity": 2,
    "presentation": "Geriatric Emergency",
    "category": "musculoskeletal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Doris is anxious and somewhat embarrassed about her increasing frailty, speaking softly but cooperatively. She appears uncomfortable and slightly distressed, favoring her left side when moving, but tries to downplay her pain out of concern about being a burden.",
    "interviewQuestions": [
      "Can you tell me exactly what happened when you injured your hip?",
      "Did you fall or have any trauma to your hip recently?",
      "When did the hip pain first start and has it gotten worse?",
      "Can you describe the pain - is it sharp, dull, aching, or burning?",
      "Where exactly does it hurt and does the pain go anywhere else?",
      "On a scale of 1 to 10, how would you rate your pain right now?",
      "What makes the pain worse - walking, sitting, lying down?",
      "Have you tried anything that helps with the pain?",
      "Are you having any other symptoms like nausea, dizziness, or shortness of breath?",
      "Have you had any similar hip problems or fractures before?",
      "Can you tell me about all the medications you're currently taking?",
      "Do you have any allergies to medications or other substances?",
      "Has anyone in your family had problems with broken bones or osteoporosis?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking - could you explain that differently?",
      "onset": "I fell this morning around 8 AM when I was trying to get out of bed. My foot got caught in the bedsheet and I went down hard on my left side. The pain started immediately and hasn't let up since then.",
      "character": "It's a deep, severe aching pain that feels like it's coming from deep inside my hip joint. Sometimes it feels like a sharp stabbing when I try to move.",
      "location": "The pain is right here in my left hip and groin area, and it seems to shoot down toward my knee sometimes when I try to move my leg.",
      "severity": "Right now it's about an 8 out of 10, especially when I try to move. Even lying still it's about a 6. I can barely put any weight on my left leg at all.",
      "aggravating": "Any movement makes it much worse - trying to stand, walk, or even shift in bed. Rolling over is excruciating. Weight bearing on my left leg is almost impossible.",
      "relieving": "Nothing really helps much. I tried taking some Tylenol but it barely touched it. Staying perfectly still helps a little bit, but even then it still aches constantly.",
      "associated": "I feel a bit nauseous from the pain, and I've been feeling dizzy when I try to stand up. My left leg feels shorter somehow and it wants to turn outward.",
      "denies": "No chest pain, no shortness of breath, no headache, no numbness or tingling in my legs. No loss of consciousness when I fell.",
      "history": "I broke two vertebrae in my back about 3 years ago, and I've always been told I have severe osteoporosis. I've never broken a hip before though. I've been more unsteady lately and almost fell twice last month.",
      "medications": "Warfarin 3mg daily (dose varies per INR); Metoprolol Succinate 50mg daily; Losartan 50mg daily; Metformin 500mg BID; Glipizide 5mg daily; Zoledronic Acid 5mg IV annually; Calcium-Vitamin D 600mg/800IU BID",
      "allergies": "Aspirin, Iodinated Contrast",
      "family": "My mother broke her hip when she was 82, just like me, and had severe osteoporosis. My sister is 80 and has had vertebral fractures from osteoporosis too. It seems to run in our family unfortunately.",
      "social": "I'm a retired librarian - worked at the Broward County Library for 30 years. I've been widowed since 2012 when my husband passed. I never smoked and don't drink alcohol or use any drugs."
    },
    "examManeuvers": [
      "Inspection of lower extremities positioning",
      "Hip range of motion testing",
      "Weight bearing assessment",
      "Palpation of greater trochanter",
      "Palpation of femoral triangle/groin",
      "Log roll test",
      "Straight leg raise test",
      "Distal neurovascular examination",
      "Assessment of leg length discrepancy",
      "Patrick's test (FABER)"
    ],
    "examFindings": {
      "Inspection of lower extremities positioning": "Left lower extremity is shortened, externally rotated approximately 45 degrees, and patient holds it in slight flexion",
      "Hip range of motion testing": "Active range of motion severely limited by pain in all directions. Passive movement causes severe pain and is limited",
      "Weight bearing assessment": "Unable to bear weight on left lower extremity. Patient experiences severe pain with any attempt at weight bearing",
      "Palpation of greater trochanter": "Tenderness to palpation over the greater trochanter region with possible prominence/deformity",
      "Palpation of femoral triangle/groin": "Significant tenderness to palpation in the groin and femoral triangle area",
      "Log roll test": "Positive - passive internal and external rotation of the hip causes severe pain",
      "Straight leg raise test": "Unable to perform active straight leg raise on the left side due to pain and weakness",
      "Distal neurovascular examination": "Dorsalis pedis and posterior tibial pulses palpable, capillary refill <2 seconds, sensation intact, able to wiggle toes",
      "Assessment of leg length discrepancy": "Apparent leg length discrepancy with left leg appearing approximately 2cm shorter than right",
      "Patrick's test (FABER)": "Unable to perform due to severe pain with hip flexion and external rotation"
    },
    "ddxTargets": [
      "Displaced Femoral Neck Fracture (correct diagnosis)",
      "Intertrochanteric Hip Fracture",
      "Hip Dislocation",
      "Septic Arthritis of Hip",
      "Pathological Fracture from Metastatic Disease",
      "Severe Hip Osteoarthritis with Acute Exacerbation",
      "Greater Trochanteric Bursitis"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'typical elderly fall' and missing the specific fracture pattern, or focusing solely on osteoporosis history without considering other pathological causes",
      "prematureClosure": "Risk of stopping at 'hip fracture' without determining the specific type and displacement, which is crucial for surgical planning and prognosis",
      "availabilityBias": "May overweight common hip pathology like arthritis or bursitis in elderly patients, potentially delaying recognition of the fracture severity"
    },
    "coachPrompts": {
      "phase2": "Before you interview Mrs. Campbell, think about the key historical features that would help you differentiate between the various causes of hip pain in an elderly patient with osteoporosis. What specific mechanism of injury details and functional limitations would be most concerning for fracture versus other conditions?",
      "phase5": "Now that you've gathered your history and physical exam findings, let's think through this systematically. Mrs. Campbell has classic signs - what does the combination of external rotation, shortening, and inability to bear weight tell you? How does her osteoporosis history and the mechanism of injury factor into your diagnostic reasoning?",
      "finalDebrief": "This case illustrates the importance of recognizing the classic presentation of displaced femoral neck fractures - the external rotation and shortening are pathognomonic signs. Notice how your differential evolved from considering various hip pathologies to focusing on fracture types based on the mechanism and physical findings. The patient's osteoporosis, anticoagulation status, and comorbidities all factor into surgical planning and prognosis."
    }
  }
};
