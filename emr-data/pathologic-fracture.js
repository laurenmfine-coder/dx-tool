// Virtual EMR Case: Pathologic Fracture
// Variant: pathologic-fracture | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "William Henry Davenport",
    "dob": "08/30/1948",
    "age": 76,
    "sex": "Male",
    "mrn": "NSU-2025-34692",
    "pronouns": "He/Him",
    "insurance": "Medicare Part A/B with Aetna Medicare Advantage",
    "pcp": "Dr. Christine Wallace, MD",
    "pharmacy": "CVS Pharmacy — 5200 N Federal Hwy, Fort Lauderdale, FL",
    "language": "English",
    "race": "White",
    "address": "2180 NE 36th St, Fort Lauderdale, FL 33308",
    "phone": "(954) 555-7284",
    "email": "w.davenport48@email.com",
    "emergencyContact": {
      "name": "Laura Davenport (Wife)",
      "phone": "(954) 555-7310"
    }
  },
  "problems": [
    {
      "problem": "Prostate Cancer, Stage IV Metastatic",
      "icd": "C61",
      "onset": "2021",
      "status": "Active",
      "notes": "Gleason 4+5=9; metastatic to bone at diagnosis (lumbar spine, pelvis, right proximal femur); castration-resistant since 2023; on enzalutamide + denosumab; rising PSA"
    },
    {
      "problem": "Bone Metastases, Multiple",
      "icd": "C79.51",
      "onset": "2021",
      "status": "Active",
      "notes": "Lumbar spine L2/L4, bilateral iliac bones, right proximal femur (lytic and blastic mixed); received palliative radiation to L2 and right femur (2022)"
    },
    {
      "problem": "Right Proximal Femur Lytic Lesion",
      "icd": "C79.51",
      "onset": "2022",
      "status": "Active",
      "notes": "Subtrochanteric lytic lesion right femur with >50% cortical involvement; Mirels score 10 — PROPHYLACTIC FIXATION recommended but patient declined (2023)"
    },
    {
      "problem": "Chronic Pain Syndrome — Cancer Related",
      "icd": "G89.3",
      "onset": "2022",
      "status": "Active",
      "notes": "On extended-release oxycodone and gabapentin; palliative care involved"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2008",
      "status": "Active",
      "notes": "On amlodipine"
    },
    {
      "problem": "Normocytic Anemia of Chronic Disease",
      "icd": "D63.8",
      "onset": "2023",
      "status": "Active",
      "notes": "Related to metastatic cancer; transfusion-dependent periodically"
    }
  ],
  "medications": [
    {
      "name": "Enzalutamide 160mg daily",
      "sig": "Take 4 capsules (40mg each) by mouth once daily",
      "prescriber": "Dr. Marcus Lee, MD (Oncology)",
      "start": "09/2023",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Denosumab (Xgeva) 120mg SC monthly",
      "sig": "Inject 120 mg subcutaneously once monthly — administered in oncology office",
      "prescriber": "Dr. Marcus Lee, MD (Oncology)",
      "start": "01/2022",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Oxycodone ER 20mg BID",
      "sig": "Take 1 tablet by mouth twice daily — do not crush or chew",
      "prescriber": "Dr. Wallace / Palliative Care",
      "start": "06/2023",
      "refills": 1,
      "status": "Active"
    },
    {
      "name": "Oxycodone IR 5mg q4h PRN",
      "sig": "Take 1 tablet by mouth every 4 hours as needed for breakthrough pain",
      "prescriber": "Dr. Wallace / Palliative Care",
      "start": "06/2023",
      "refills": 1,
      "status": "PRN"
    },
    {
      "name": "Gabapentin 300mg TID",
      "sig": "Take 1 capsule by mouth three times daily",
      "prescriber": "Dr. Wallace",
      "start": "03/2023",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Docusate Sodium 100mg BID",
      "sig": "Take 1 capsule by mouth twice daily",
      "prescriber": "Dr. Wallace",
      "start": "06/2023",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Senna 8.6mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Wallace",
      "start": "06/2023",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Wallace",
      "start": "01/2009",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Hydromorphone",
      "type": "Drug",
      "reaction": "Severe pruritus and hallucinations",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/02/2025",
      "bp": "126/72",
      "hr": 82,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "96%",
      "wt": "158 lbs",
      "ht": "5'11\"",
      "bmi": 22.0,
      "setting": "Oncology Office"
    },
    {
      "date": "10/10/2024",
      "bp": "128/74",
      "hr": 78,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "162 lbs",
      "ht": "5'11\"",
      "bmi": 22.6,
      "setting": "Oncology Office"
    },
    {
      "date": "07/08/2024",
      "bp": "130/76",
      "hr": 76,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "168 lbs",
      "ht": "5'11\"",
      "bmi": 23.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/02/2025",
      "type": "Specialist",
      "provider": "Dr. Marcus Lee, MD (Oncology)",
      "cc": "Castration-resistant prostate cancer follow-up; rising PSA; bone pain",
      "hpi": "76-year-old male with metastatic castration-resistant prostate cancer (Gleason 9, bone mets to spine/pelvis/right femur) for oncology follow-up. PSA rising: 42 → 68 ng/mL over 3 months despite enzalutamide. Reports worsening right thigh pain — now moderate at rest, sharp with weight-bearing. Using cane on right side. Pain is different from prior baseline — more localized to mid-thigh. Taking 3-4 breakthrough oxycodone daily (up from 1-2). Weight down 4 lbs in 3 months. Energy declining. Palliative care involved for symptom management.",
      "exam": "General: Thin male, appears fatigued, in mild distress with position change. MSK: RIGHT THIGH — point tenderness over mid-femoral shaft (concerning for impending fracture at lytic lesion site). Pain with axial loading. Antalgic gait with cane. Spine: Mild tenderness L2-L4. Ext: No edema.",
      "assessment": "1. Metastatic CRPC — progressing; PSA rising on enzalutamide\n2. RIGHT FEMORAL LYTIC LESION — worsening pain, tenderness at lesion site, increasing pain with weight-bearing → CONCERN FOR IMPENDING PATHOLOGIC FRACTURE\n3. Weight loss — cancer cachexia\n4. Chronic cancer pain — escalating",
      "plan": "1. URGENT CT right femur — reassess cortical involvement at lytic lesion\n2. If >50% cortical destruction or new fracture → EMERGENT orthopedic surgery referral for prophylactic fixation\n3. Restricted weight-bearing right leg until imaging obtained\n4. Discuss transition from enzalutamide to cabazitaxel or radium-223\n5. Increase oxycodone ER 20mg → 30mg BID; continue breakthrough dose\n6. Restaging CT C/A/P + bone scan ordered\n7. Goals-of-care conversation initiated — patient and wife present"
    },
    {
      "id": "V002",
      "date": "07/08/2024",
      "type": "Primary Care",
      "provider": "Dr. Christine Wallace, MD",
      "cc": "Cancer pain management; general health",
      "hpi": "76-year-old male with Stage IV prostate cancer on enzalutamide and denosumab for routine PCP follow-up. Pain at baseline level — managed with oxycodone ER and gabapentin. No new symptoms at that visit. Weight stable. BP controlled.",
      "exam": "General: Thin but NAD. Abdomen: Soft, NT. Ext: No edema.",
      "assessment": "1. Metastatic prostate cancer — followed by oncology\n2. Chronic pain — managed\n3. HTN — controlled",
      "plan": "1. Refill oxycodone ER and IR, gabapentin\n2. Labs: CBC, CMP\n3. Continue oncology and palliative care follow-up\n4. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "01/02/2025",
      "time": "10:00",
      "orderedBy": "Dr. Marcus Lee, MD (Oncology)",
      "collected": "01/02/2025 09:30",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2025-346920",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "98", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "20", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.1", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "138", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.4", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Calcium", "value": "10.8", "unit": "mg/dL", "range": "8.5-10.5", "flag": "H" },
            { "test": "Alkaline Phosphatase", "value": "312", "unit": "U/L", "range": "44-147", "flag": "H" },
            { "test": "ALT (SGPT)", "value": "42", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "38", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "Albumin", "value": "3.2", "unit": "g/dL", "range": "3.5-5.5", "flag": "L" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "5.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "9.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "L" },
            { "test": "Hematocrit", "value": "29.4", "unit": "%", "range": "38.3-48.6", "flag": "L" },
            { "test": "Platelet Count", "value": "142", "unit": "x10³/µL", "range": "150-400", "flag": "L" }
          ]
        },
        {
          "name": "TUMOR MARKERS",
          "results": [
            { "test": "PSA (Total)", "value": "68.4", "unit": "ng/mL", "range": "<4.0", "flag": "H" }
          ]
        },
        {
          "name": "LDH",
          "results": [
            { "test": "Lactate Dehydrogenase", "value": "342", "unit": "U/L", "range": "140-280", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "06/2023",
      "study": "BONE SCAN (WHOLE BODY)",
      "accession": "IMG-2023-34692",
      "status": "FINAL",
      "orderedBy": "Dr. Marcus Lee, MD (Oncology)",
      "readBy": "Dr. Robert Anderson, MD (Nuclear Medicine)",
      "facility": "NSU Health — Davie Campus Imaging",
      "priority": "Routine",
      "clinical": "75M with metastatic prostate cancer. Restaging bone scan.",
      "technique": "Whole-body bone scintigraphy with Tc-99m MDP.",
      "findings": "Multiple areas of increased radiotracer uptake:\\n\\n- L2 and L4 vertebral bodies (known)\\n- Bilateral iliac bones (known)\\n- Right proximal femur — subtrochanteric region (known, increased since prior)\\n- NEW: Left 7th rib posteriorly\\n- NEW: Right sacroiliac joint region\\n\\nNo superimposed infection. No other new lesions.",
      "impression": "1. Progressive osseous metastatic disease — 2 new lesions (left 7th rib, right SI joint) compared to prior.\\n2. Increased uptake at right proximal femur — progression at known lytic lesion site.\\n3. Stable uptake at L2, L4, bilateral iliac bones.",
      "dictated": "06/20/2023 14:00",
      "verified": "06/20/2023 16:00"
    },
    {
      "date": "03/2023",
      "study": "XR RIGHT FEMUR",
      "accession": "IMG-2023-34692B",
      "status": "FINAL",
      "orderedBy": "Dr. Marcus Lee, MD (Oncology)",
      "readBy": "Dr. Lisa Nakamura, MD (Radiology)",
      "facility": "NSU Health — Davie Campus Imaging",
      "priority": "Urgent",
      "clinical": "75M with metastatic prostate cancer and right thigh pain. Assess lytic lesion.",
      "technique": "AP and lateral radiographs of the right femur.",
      "findings": "Right femur: Lytic lesion in the subtrochanteric region measuring approximately 3.5 x 2.8 cm. Estimated cortical involvement approximately 50-60%. Periosteal reaction present. No definite fracture line. Surrounding mixed lytic/blastic changes consistent with metastatic disease.",
      "impression": "1. Lytic metastatic lesion right subtrochanteric femur with approximately 50-60% cortical involvement.\\n2. Mirels score estimated 10/12 — HIGH RISK for pathologic fracture.\\n3. Recommend orthopedic evaluation for prophylactic fixation.",
      "dictated": "03/12/2023 10:00",
      "verified": "03/12/2023 12:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (High-Dose Quadrivalent)",
      "date": "10/12/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD308",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "11/01/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-822",
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
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Breast cancer, deceased at 74",
    "Father: Prostate cancer (age 72), deceased at 80",
    "Brother: Prostate cancer (age 68), alive at 74 — localized, treated with radiation",
    "Sister: Healthy, alive at 72"
  ],
  "socialHistory": [
    ["Occupation", "Retired real estate attorney"],
    ["Marital", "Married — 48 years"],
    ["Tobacco", "Former smoker — 15 pack-years; quit 2000"],
    ["Alcohol", "Rare — stopped since diagnosis"],
    ["Drugs", "Denies"],
    ["Exercise", "Very limited — walks with cane; mostly sedentary due to pain and fatigue"],
    ["Housing", "Lives with wife in single-story home; wife is primary caregiver; hospice discussed but not yet enrolled"],
    ["Safety", "Uses cane; falls precautions in place; aware of pathologic fracture risk — told to avoid twisting/heavy lifting"],
    ["Advance Directive", "Yes — healthcare proxy: wife Laura Davenport; DNR/DNI; comfort-focused care preferred; hospice discussion pending"]
  ],
  "meta": {
    "caseId": "pathologic-fracture",
    "diagnosis": "Pathologic Fracture (Metastatic Prostate Cancer)",
    "acuity": 2,
    "presentation": "Geriatric Emergency",
    "category": "musculoskeletal"
  }
};
