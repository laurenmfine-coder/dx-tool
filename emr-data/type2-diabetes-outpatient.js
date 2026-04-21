/* emr-data/type2-diabetes-outpatient.js
   Type 2 Diabetes — Outpatient Optimization and GLP-1 Initiation
   Category: endocrine | Acuity: ESI-4
   Settings: Clinic
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Bernadette Johnson",
      "patientHPI": "I came in for my 3-month diabetes checkup. I've been trying to eat better but my blood sugars are still high. My doctor mentioned something about a new shot that also helps with weight loss.",
      "dob": "09/30/1968",
      "age": "57",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-441287",
      "language": "English",
      "race": "Black/African American",
      "phone": "(404) 555-1287",
      "email": "b.johnson@email.com",
      "address": "2218 Boulevard SE, Atlanta, GA 30317",
      "insurance": "Medicaid",
      "pcp": "Dr. Renata Davis, MD",
      "pharmacy": "CVS — Boulevard SE",
      "emergencyContact": {
        "name": "Robert Johnson",
        "phone": "(404) 555-9988",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "",
        "severity": "",
        "type": ""
      }
    ],
    "immunizations": [
      {
        "name": "Influenza",
        "date": "10/2025",
        "lot": "FL-25",
        "site": "Left Deltoid"
      },
      {
        "name": "Hepatitis B series",
        "date": "Completed 2022",
        "lot": "",
        "site": ""
      }
    ],
    "familyHistory": [
      "Mother: T2DM, died of MI at 62",
      "Father: T2DM, hypertension",
      "Sister: T2DM",
      "Brother: T2DM"
    ],
    "socialHistory": [
      [
        "Diabetes duration",
        "Diagnosed T2DM 8 years ago. HbA1c trend: 11.2% (2021) → 9.4% (2023) → 8.8% (today). Slowly improving but above goal."
      ],
      [
        "Diet",
        "Low-income household — food desert area. Limited access to fresh produce. High processed food intake."
      ],
      [
        "Exercise",
        "None currently — 'my knees hurt too much'"
      ],
      [
        "Smoking",
        "Former — quit 5 years ago, 20 pack-years"
      ],
      [
        "Alcohol",
        "Rare"
      ],
      [
        "Weight",
        "BMI 38.4 kg/m² — Class II obesity. Weight 224 lbs (102 kg). Has gained 12 lbs since last visit."
      ]
    ]
  },
  "encounters": {
    "clinic": {
      "patient": {
        "chiefComplaint": "57F T2DM — 3-month follow-up — HbA1c 8.8% — suboptimal control, weight gain, ASCVD risk — GLP-1 agonist initiation discussion",
        "diagnosis": "Type 2 Diabetes Mellitus — Suboptimally Controlled — Initiating Semaglutide (Ozempic)"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "T2DM — HbA1c 8.8% (goal <7%). On metformin 1000mg BID + glipizide 5mg BID. Not at goal. Adding GLP-1 agonist (semaglutide) — proven CV benefit (SUSTAIN-6 trial) and weight loss benefit. Can also potentially reduce/eliminate glipizide.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "E11.9"
        },
        {
          "id": "prob-2",
          "description": "Obesity — BMI 38.4, Class II. Weight gain of 12 lbs since last visit. Glipizide contributes to weight gain (sulfonylurea). GLP-1 agonist will help both T2DM and weight.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "E66.9"
        },
        {
          "id": "prob-3",
          "description": "ASCVD risk — 10-year risk 22% (high). Family history MI, Black female >55yo, T2DM, hypertension, former smoker. Needs high-intensity statin (not on any statin currently).",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "Z87.891"
        },
        {
          "id": "prob-4",
          "description": "Hypertension — BP 148/92 today. Not at goal (<130/80 in T2DM). On lisinopril 10mg — needs uptitration or addition of CCB.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "I10"
        },
        {
          "id": "prob-5",
          "description": "CKD staging — eGFR 58 (CKD stage 3a). Microalbuminuria positive. ACE-I (lisinopril) nephroprotective — continue. Metformin safe if eGFR >45 — continue.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "N18.3"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Metformin",
          "dose": "1000mg",
          "route": "PO",
          "frequency": "BID with meals",
          "status": "Active — continue",
          "prescriber": "Dr. Renata Davis, MD"
        },
        {
          "id": "med-2",
          "name": "Glipizide",
          "dose": "5mg",
          "route": "PO",
          "frequency": "BID — consider reducing as semaglutide takes effect (hypoglycemia risk)",
          "status": "Active — reduce pending GLP-1 response",
          "prescriber": "Dr. Renata Davis, MD"
        },
        {
          "id": "med-3",
          "name": "Lisinopril",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily — increase to 20mg (BP not at goal)",
          "status": "Uptitrating",
          "prescriber": "Dr. Renata Davis, MD"
        },
        {
          "id": "med-4",
          "name": "Semaglutide (Ozempic)",
          "dose": "0.25mg SQ weekly x4 weeks, then 0.5mg",
          "route": "SQ",
          "frequency": "Weekly injection — start low to reduce GI side effects",
          "status": "NEW — starting today",
          "prescriber": "Dr. Renata Davis, MD"
        },
        {
          "id": "med-5",
          "name": "Atorvastatin",
          "dose": "40mg",
          "route": "PO",
          "frequency": "Nightly — NEW (high-intensity statin for ASCVD risk >20%)",
          "status": "NEW — starting today",
          "prescriber": "Dr. Renata Davis, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "10:00",
          "bp": "148/92",
          "hr": "78",
          "rr": "16",
          "temp": "36.8°C",
          "spo2": "99%",
          "pain": "2/10"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Outpatient Diabetes Follow-Up",
          "date": "03/15/2026",
          "provider": "Dr. Renata Davis, MD",
          "cc": "T2DM 3-month follow-up — HbA1c 8.8%, obesity, uncontrolled HTN, high ASCVD risk",
          "hpi": "57F with T2DM x8y returns for 3-month diabetes follow-up. HbA1c 8.8% — above goal of <7% (or <8% in older patients with comorbidities — but at 57yo, goal should still be <7%). Weight 224 lbs, up 12 lbs. BP 148/92 (goal <130/80 in DM). eGFR 58, microalbuminuria. 10-year ASCVD risk 22% — not on statin.\n\nGLP-1 AGONIST DISCUSSION:\nSemaglutide benefits for this patient:\n✓ HbA1c reduction (1-2% expected)\n✓ Weight loss (10-15% body weight in SUSTAIN trials)\n✓ CV benefit: SUSTAIN-6 showed 26% reduction in MACE in T2DM with ASCVD risk\n✓ Renoprotective effects (emerging evidence)\n✓ Once weekly — better adherence than daily medications\n\nSide effects to counsel:\n- GI: nausea (most common, usually transient — start low dose, take with meal)\n- Not to be used if personal/family history of medullary thyroid cancer or MEN2\n- Cost: covered by Medicaid for T2DM indication (check formulary)\n- Injection technique teaching today\n\nBARRIERS ADDRESSED:\n- Cost: Medicaid covers Ozempic for T2DM\n- Injection fear: demonstrated auto-injector pen — 'less painful than finger sticks'\n- Food desert: connected with community health worker for produce access program\n- Knee pain limiting exercise: referral to aquatic therapy (pool exercise reduces joint stress)",
          "assessment": "T2DM inadequately controlled. Initiating semaglutide (GLP-1 agonist). Adding high-intensity statin (should have been started years ago given ASCVD risk). Uptitrating lisinopril. Reducing glipizide as GLP-1 takes effect to prevent hypoglycemia.",
          "plan": "Start semaglutide 0.25mg SQ weekly x4 weeks → 0.5mg (dose escalation reduces GI side effects). Injection technique demonstrated — patient able to demonstrate return. Reduce glipizide to 5mg daily (from BID) at 3 months when HbA1c reassessed. Increase lisinopril 10→20mg. Start atorvastatin 40mg nightly. Labs in 3 months: HbA1c, CMP, LFTs (statin baseline). Refer aquatic therapy for knee pain/exercise. Community health worker for nutrition support. Follow-up 3 months."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "09:00",
          "status": "Final",
          "orderedBy": "Dr. Renata Davis",
          "accession": "LAB-441287",
          "collected": "03/15/2026 08:55",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood and Urine",
          "groups": [
            {
              "name": "DIABETES MONITORING",
              "results": [
                {
                  "test": "HbA1c",
                  "value": "8.8",
                  "unit": "%",
                  "range": "<7.0% goal",
                  "flag": "H"
                },
                {
                  "test": "Fasting Glucose",
                  "value": "188",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": "H"
                }
              ]
            },
            {
              "name": "RENAL FUNCTION",
              "results": [
                {
                  "test": "Creatinine",
                  "value": "1.1",
                  "unit": "mg/dL",
                  "range": "0.5-1.1",
                  "flag": ""
                },
                {
                  "test": "eGFR",
                  "value": "58",
                  "unit": "mL/min/1.73m²",
                  "range": ">60 (CKD 3a)",
                  "flag": "L"
                },
                {
                  "test": "Urine Albumin:Creatinine Ratio",
                  "value": "82",
                  "unit": "mg/g (microalbuminuria)",
                  "range": "<30 normal; 30-300 = micro",
                  "flag": "H"
                }
              ]
            },
            {
              "name": "LIPIDS — FASTING",
              "results": [
                {
                  "test": "LDL",
                  "value": "148",
                  "unit": "mg/dL",
                  "range": "<70 for ASCVD risk >20%",
                  "flag": "H"
                },
                {
                  "test": "HDL",
                  "value": "38",
                  "unit": "mg/dL",
                  "range": ">50 females",
                  "flag": "L"
                },
                {
                  "test": "Triglycerides",
                  "value": "228",
                  "unit": "mg/dL",
                  "range": "<150",
                  "flag": "H"
                },
                {
                  "test": "Total Cholesterol",
                  "value": "234",
                  "unit": "mg/dL",
                  "range": "<200",
                  "flag": "H"
                }
              ]
            },
            {
              "name": "LIVER FUNCTION (STATIN BASELINE)",
              "results": [
                {
                  "test": "AST",
                  "value": "22",
                  "unit": "U/L",
                  "range": "10-40",
                  "flag": ""
                },
                {
                  "test": "ALT",
                  "value": "28",
                  "unit": "U/L",
                  "range": "7-56",
                  "flag": ""
                }
              ]
            }
          ]
        }
      ],
      "imaging": []
    },
    "ed": {
      "patient": {
        "chiefComplaint": "Not applicable — clinic visit",
        "diagnosis": "Clinic only"
      },
      "problems": [],
      "medications": [],
      "vitals": [],
      "visits": [],
      "labs": [],
      "imaging": []
    }
  },
  "references": [
    {
      "id": "ADA-Standards-2024",
      "title": "ADA Standards of Care in Diabetes — 2024",
      "authors": "American Diabetes Association Professional Practice Committee",
      "journal": "Diabetes Care",
      "year": 2024,
      "doi": "10.2337/dc24-SINT",
      "url": "https://diabetesjournals.org/care/issue/47/Supplement_1",
      "openAccess": true,
      "validates": [
        "HbA1c targets",
        "GLP-1 agonist selection",
        "ASCVD risk reduction",
        "Statin therapy in diabetes",
        "BP targets in T2DM"
      ]
    },
    {
      "id": "SUSTAIN-6",
      "title": "Semaglutide and Cardiovascular Outcomes in Patients with Type 2 Diabetes (SUSTAIN-6)",
      "authors": "Marso SP, Bain SC, Consoli A, et al.",
      "journal": "NEJM",
      "year": 2016,
      "doi": "10.1056/NEJMoa1607141",
      "url": "https://www.nejm.org/doi/10.1056/NEJMoa1607141",
      "openAccess": false,
      "validates": [
        "CV benefit of semaglutide",
        "MACE reduction 26%",
        "Weight loss benefit"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Type 2 Diabetes — Outpatient Optimization and GLP-1 Initiation",
    "caseId": "type2-diabetes-outpatient"
  },
  "guided": {
    "coachPrompts": {
      "final": "Diagnosis: suboptimally controlled type 2 diabetes mellitus requiring outpatient management optimization with GLP-1 receptor agonist initiation. Key learning: (1) Type 2 diabetes management has transformed in the past decade — the goal is no longer just glycemic control but cardiovascular and renal risk reduction using agents with proven outcomes benefit. Target A1c individualized: ~7% for most, tighter (6.5%) for young/healthy, looser (8%) for elderly, multiple comorbidities, limited life expectancy, or high hypoglycemia risk. (2) First-line therapy remains metformin for most patients (unless contraindicated — eGFR <30, decompensated heart failure, active alcohol use disorder with liver disease). Metformin offers: A1c reduction 1-2%, weight neutrality, no hypoglycemia alone, CV safety, low cost. Side effects: GI (lower with extended-release), rare lactic acidosis, vitamin B12 deficiency over time (check B12 annually). (3) Second-line agent selection is now heavily driven by comorbidities (ADA/EASD 2024 consensus): (a) Established ASCVD, heart failure, or CKD with albuminuria: add SGLT2 inhibitor (empagliflozin, dapagliflozin, canagliflozin) OR GLP-1 receptor agonist (semaglutide, dulaglutide, liraglutide, tirzepatide) — both classes reduce CV events and mortality; SGLT2i especially for HF and CKD. (b) Weight loss goal prominent: GLP-1 RA (semaglutide — oral or injectable; liraglutide; tirzepatide as dual GIP/GLP-1 agonist — most potent). Weight loss 5-15% achievable. (c) Cost constraint: sulfonylureas or basal insulin (effective but cause weight gain and hypoglycemia). (d) Avoid hypoglycemia priority: DPP-4 inhibitors, SGLT2i, GLP-1 RA, thiazolidinediones. (4) GLP-1 receptor agonists — detail. Mechanism: incretin mimetic — increases glucose-dependent insulin secretion, suppresses glucagon, slows gastric emptying, reduces appetite centrally. A1c reduction: 1-2%. Weight loss: 5-15%. CV outcomes: reduction in MACE in patients with established CV disease (LEADER, SUSTAIN-6, REWIND). Renal benefit: reduced albuminuria, slower CKD progression. Side effects: GI (nausea, vomiting, diarrhea — often transient; start low and titrate slowly), rare pancreatitis, contraindicated in personal or family history of medullary thyroid cancer or MEN 2. Administration: weekly SQ (semaglutide, dulaglutide) or daily (liraglutide, oral semaglutide) or weekly (tirzepatide). Cost and coverage highly variable — prior authorization often required. Avoid GLP-1 with DPP-4 inhibitor (no additive benefit, same pathway). (5) Comprehensive diabetes management beyond glycemic control. Cardiovascular: BP control (<130/80), statin for all patients 40-75 with diabetes (moderate intensity; high intensity for ASCVD), aspirin for established CVD, smoking cessation. Renal: ACE-I/ARB for albuminuria or hypertension; finerenone for CKD with albuminuria; SGLT2i. Retinal: annual eye exam. Foot: annual comprehensive exam; education on foot care. Neuropathic: screening; duloxetine, pregabalin, gabapentin for painful neuropathy. Mental health: depression screening annually. Vaccinations: annual influenza, pneumococcal, HBV, zoster, COVID. Dietary: Mediterranean or DASH diet pattern; dietitian referral when available. Physical activity: >=150 min moderate or >=75 min vigorous aerobic plus 2-3 sessions of resistance training. Diabetes self-management education and support (DSMES) — underutilized but high-yield. Classic pitfalls: (a) treating A1c in isolation without addressing CV and renal risk. (b) Continuing sulfonylureas and basal insulin as 'second-line' when newer agents reduce CV events and cause weight loss instead of gain. (c) Not screening for diabetic complications annually. (d) Over-restricting diet and unrealistic goals — diabetes fatigue is real. (e) Forgetting to coordinate with endocrinology, cardiology, nephrology, ophthalmology."
    }
  }
};
