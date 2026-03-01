// Virtual EMR Case: Hereditary Angioedema
// Variant: hereditary-angioedema | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Nicole Dubois",
    "dob": "08/14/1994",
    "age": 31,
    "sex": "Female",
    "mrn": "NSU-2025-38461",
    "pronouns": "She/Her",
    "insurance": "Cigna PPO",
    "pcp": "Dr. Rachel Toussaint, MD",
    "pharmacy": "CVS Pharmacy — 700 N Flamingo Rd, Pembroke Pines, FL",
    "language": "English, French",
    "race": "Multiracial",
    "address": "14920 Pines Blvd, Pembroke Pines, FL 33027",
    "phone": "(954) 555-9174",
    "email": "nicole.dubois94@email.com",
    "emergencyContact": {
      "name": "Marc Dubois (Father)",
      "phone": "(954) 555-9188"
    }
  },
  "problems": [
    {
      "problem": "Hereditary Angioedema, Type I",
      "icd": "D84.1",
      "onset": "2016",
      "status": "Active",
      "notes": "Diagnosed age 22 after recurrent episodes; confirmed low C1-INH level and function, low C4; father and paternal aunt affected; on long-term prophylaxis"
    },
    {
      "problem": "Recurrent Abdominal Attacks (HAE-Related)",
      "icd": "D84.1",
      "onset": "2016",
      "status": "Active",
      "notes": "Abdominal attacks 2-3x/year despite prophylaxis; often mistaken for surgical abdomen"
    },
    {
      "problem": "Generalized Anxiety Disorder",
      "icd": "F41.1",
      "onset": "2018",
      "status": "Active",
      "notes": "Related to unpredictability of HAE attacks"
    },
    {
      "problem": "Iron Deficiency Anemia",
      "icd": "D50.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Heavy menstrual bleeding"
    }
  ],
  "medications": [
    {
      "name": "Lanadelumab 300mg SubQ every 2 weeks",
      "sig": "Inject 300 mg subcutaneously every 14 days for HAE prophylaxis",
      "prescriber": "Dr. Stern",
      "start": "06/2022",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Icatibant 30mg SubQ PRN",
      "sig": "Inject 30 mg subcutaneously at onset of HAE attack; may repeat once after 6 hours",
      "prescriber": "Dr. Stern",
      "start": "01/2017",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "C1-Esterase Inhibitor Concentrate (Berinert) 20 IU/kg IV PRN",
      "sig": "Administer IV at weight-based dosing for severe or laryngeal HAE attacks",
      "prescriber": "Dr. Stern",
      "start": "03/2018",
      "refills": 1,
      "status": "PRN"
    },
    {
      "name": "Sertraline 75mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Toussaint",
      "start": "04/2019",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Ferrous Sulfate 325mg daily",
      "sig": "Take 1 tablet by mouth daily on empty stomach with orange juice",
      "prescriber": "Dr. Toussaint",
      "start": "03/2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Norethindrone 0.35mg daily",
      "sig": "Take 1 tablet by mouth daily at the same time each day",
      "prescriber": "Dr. Toussaint",
      "start": "04/2024",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Estrogen-Containing Contraceptives",
      "type": "Drug",
      "reaction": "Triggers HAE attacks — contraindicated in HAE",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "ACE Inhibitors",
      "type": "Drug",
      "reaction": "Contraindicated — can precipitate bradykinin-mediated angioedema in HAE",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/18/2026",
      "bp": "108/66",
      "hr": 96,
      "rr": 18,
      "temp": "98.8°F",
      "spo2": "99%",
      "wt": "140 lbs",
      "ht": "5'7\"",
      "bmi": 21.9,
      "setting": "ED"
    },
    {
      "date": "12/02/2025",
      "bp": "112/70",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "142 lbs",
      "ht": "5'7\"",
      "bmi": 22.2,
      "setting": "Specialist"
    },
    {
      "date": "08/14/2025",
      "bp": "110/68",
      "hr": 74,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "141 lbs",
      "ht": "5'7\"",
      "bmi": 22.1,
      "setting": "PCP Office"
    },
    {
      "date": "02/10/2025",
      "bp": "106/64",
      "hr": 68,
      "rr": 14,
      "temp": "98.2°F",
      "spo2": "99%",
      "wt": "138 lbs",
      "ht": "5'7\"",
      "bmi": 21.6,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/02/2025",
      "type": "Specialist",
      "provider": "Dr. Alicia Stern, MD (Allergy/Immunology)",
      "cc": "HAE follow-up; prophylaxis assessment",
      "hpi": "31-year-old female with HAE Type I on lanadelumab prophylaxis. Reports significant reduction in attacks since starting lanadelumab — from ~8 attacks/year to 2-3/year. Most recent attack 3 weeks ago: abdominal (severe cramping, nausea, vomiting x 12 hours), self-treated with icatibant with resolution in 4 hours. Has not had a laryngeal attack in 2+ years. Denies peripheral attacks recently. Carries icatibant and Berinert at all times. C4 level remains low at baseline (expected in HAE).",
      "exam": "General: Well-appearing, NAD. HEENT: No facial or lip edema. Oropharynx clear, no laryngeal symptoms. Neck: Supple, no LAD. Lungs: CTAB. Abdomen: Soft, NT/ND. Skin: No peripheral edema, no rash. SubQ injection sites: No induration or bruising.",
      "assessment": "1. HAE Type I — on lanadelumab prophylaxis; breakthrough abdominal attacks 2-3x/year\n2. GAD — stable on sertraline\n3. Iron deficiency anemia — improving on supplementation",
      "plan": "1. Continue lanadelumab 300mg SubQ q2wk\n2. Continue on-demand icatibant and Berinert\n3. Discussed adding danazol for refractory attacks — patient declines due to side effect profile\n4. Review C4, C1-INH levels\n5. Ensure emergency action plan is current and shared with ED\n6. RTC 3 months"
    },
    {
      "id": "V002",
      "date": "08/14/2025",
      "type": "Primary Care",
      "provider": "Dr. Rachel Toussaint, MD",
      "cc": "Annual wellness; iron deficiency follow-up",
      "hpi": "31-year-old female for annual exam. HAE managed by allergy/immunology. Reports stable mood on sertraline. Heavy menstrual bleeding improved since starting norethindrone. Iron supplementation ongoing. Reports good energy level. No new complaints.",
      "exam": "General: NAD. HEENT: Conjunctivae pink. CV: RRR. Lungs: CTAB. Abdomen: Soft, NT/ND. Pelvic: Deferred (GYN follow-up). Skin: No rashes or edema.",
      "assessment": "1. Annual wellness\n2. HAE — managed by specialist\n3. Iron deficiency anemia — improving\n4. Menorrhagia — improved on norethindrone",
      "plan": "1. Repeat CBC, ferritin, iron studies\n2. Continue norethindrone; GYN referral if bleeding recurs\n3. Continue sertraline 75mg daily\n4. RTC 6 months or PRN"
    },
    {
      "id": "V003",
      "date": "06/08/2025",
      "type": "ED",
      "provider": "Dr. Karen Moy, MD (Emergency Medicine)",
      "cc": "Severe abdominal pain, nausea, vomiting — known HAE",
      "hpi": "31-year-old female with known HAE Type I presenting with acute-onset severe diffuse abdominal pain, nausea, and multiple episodes of vomiting for 6 hours. Self-administered icatibant 30mg SubQ at home 2 hours ago with partial improvement. Reports this is consistent with her typical abdominal HAE attack pattern. No diarrhea, no fever. LMP 2 weeks ago. Denies triggers; menses-related attacks are her most common pattern.",
      "exam": "General: In moderate distress, diaphoretic. Abdomen: Diffuse tenderness, no rebound, no guarding. Distended with hypoactive BS. No peritoneal signs. HEENT: No facial or lip swelling. Lungs: CTAB.",
      "assessment": "1. HAE abdominal attack — classic presentation; partial response to icatibant\n2. No surgical abdomen",
      "plan": "1. C1-INH concentrate (Berinert) 20 IU/kg IV — significant improvement in 30 minutes\n2. IV ondansetron 4mg, IV normal saline 1L\n3. CT abdomen deferred given known HAE pattern and clinical improvement\n4. Monitored 3 hours — pain resolved, tolerating oral fluids\n5. Discharged with allergy/immunology follow-up\n6. Reminded to pre-treat before dental procedures"
    }
  ],
  "labs": [
    {
      "date": "12/02/2025",
      "time": "10:30",
      "orderedBy": "Dr. Alicia Stern, MD",
      "collected": "12/02/2025 10:00",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2025-120228",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLEMENT PANEL",
          "results": [
            { "test": "C4", "value": "6", "unit": "mg/dL", "range": "14-40", "flag": "L" },
            { "test": "C3", "value": "112", "unit": "mg/dL", "range": "90-180", "flag": "" },
            { "test": "C1-INH Level (Antigenic)", "value": "8", "unit": "mg/dL", "range": "21-39", "flag": "L" },
            { "test": "C1-INH Functional Assay", "value": "22", "unit": "%", "range": "70-130", "flag": "L" },
            { "test": "C1q", "value": "16.4", "unit": "mg/dL", "range": "11.8-23.8", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "7.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "11.8", "unit": "g/dL", "range": "12.0-16.0", "flag": "L" },
            { "test": "Hematocrit", "value": "35.4", "unit": "%", "range": "36.0-46.0", "flag": "L" },
            { "test": "MCV", "value": "82.1", "unit": "fL", "range": "80-100", "flag": "" },
            { "test": "Platelet Count", "value": "268", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "IRON STUDIES",
          "results": [
            { "test": "Ferritin", "value": "18", "unit": "ng/mL", "range": "12-150", "flag": "" },
            { "test": "Iron", "value": "48", "unit": "µg/dL", "range": "37-145", "flag": "" },
            { "test": "TIBC", "value": "380", "unit": "µg/dL", "range": "250-370", "flag": "H" },
            { "test": "Transferrin Saturation", "value": "13", "unit": "%", "range": "20-50", "flag": "L" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "06/08/2025",
      "study": "ABDOMINAL XR (KUB)",
      "accession": "IMG-2025-06083",
      "status": "FINAL",
      "orderedBy": "Dr. Karen Moy, MD (ED)",
      "readBy": "Dr. Elena Suarez, MD (Radiology)",
      "facility": "NSU Health — Davie Campus Imaging",
      "priority": "STAT",
      "clinical": "31F with HAE presenting with acute abdominal pain. R/O obstruction.",
      "technique": "Single supine AP view of the abdomen.",
      "findings": "Bowel: Mildly dilated loops of small bowel centrally. Air-fluid levels not well assessed on supine film. No free air. No calcified masses.\\n\\nOther: No radiopaque calculi. Osseous structures unremarkable.",
      "impression": "1. Mild small bowel dilation — may represent ileus versus early HAE-related bowel wall edema.\\n2. No free air or obstruction.\\n3. Clinical correlation recommended.",
      "dictated": "06/08/2025 22:18",
      "verified": "06/08/2025 23:05"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/05/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-308",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2025-26)",
      "date": "10/25/2025",
      "site": "Right deltoid IM",
      "lot": "CM2025-658",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) (3/3)",
      "date": "2015",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Father: Hereditary Angioedema Type I (diagnosed age 30), alive at 58",
    "Paternal aunt: Hereditary Angioedema Type I, died from laryngeal attack at age 42",
    "Mother: Hypertension, alive at 57",
    "Brother: Unaffected (tested negative for HAE), alive at 28"
  ],
  "socialHistory": [
    ["Occupation", "Marketing coordinator (advertising agency)"],
    ["Marital", "Single, in a relationship"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social, 2-3 drinks/week; alcohol can trigger mild attacks"],
    ["Drugs", "Denies"],
    ["Exercise", "Pilates 3x/week; swimming 2x/week"],
    ["Housing", "Apartment, lives alone; icatibant and Berinert stored in home refrigerator"],
    ["Safety", "Denies IPV; seatbelt always; wears medical alert bracelet"],
    ["Advance Directive", "None on file; medical alert bracelet states HAE diagnosis and emergency treatment"]
  ],
  "meta": {
    "caseId": "hereditary-angioedema",
    "diagnosis": "Hereditary Angioedema (Type I)",
    "acuity": 2,
    "presentation": "Allergic Reaction",
    "category": "immunologic"
  }
};
