// Virtual EMR Case: Meckel Diverticulum
// Variant: meckel-diverticulum | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Liam O'Brien",
    "dob": "07/22/2020",
    "age": 4,
    "sex": "Male",
    "mrn": "NSU-2025-47293",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield FL — PPO",
    "pcp": "Dr. Thomas Grant, MD (Pediatrics)",
    "pharmacy": "CVS Pharmacy — 6001 W Sunrise Blvd, Plantation, FL",
    "language": "English",
    "race": "White/Caucasian (Irish descent)",
    "address": "5128 NW 4th Ct, Plantation, FL 33317",
    "phone": "(954) 555-7126",
    "email": "k.obrien.parent@email.com",
    "emergencyContact": {
      "name": "Katie O'Brien (Mother)",
      "phone": "(954) 555-7128"
    }
  },
  "problems": [
    {
      "problem": "Meckel Diverticulum — Symptomatic",
      "icd": "Q43.0",
      "onset": "2025",
      "status": "Active",
      "notes": "Current presentation — painless rectal bleeding"
    },
    {
      "problem": "Allergic Rhinitis",
      "icd": "J30.9",
      "onset": "2023",
      "status": "Active",
      "notes": "Seasonal symptoms; managed with cetirizine PRN"
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 5mg/5mL — 5mL daily PRN",
      "sig": "Give 5 mL by mouth once daily as needed for allergies",
      "prescriber": "Dr. Grant",
      "start": "03/2023",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Children's Ibuprofen 100mg/5mL — 7.5mL Q6-8h PRN",
      "sig": "Give 7.5 mL by mouth every 6-8 hours as needed for pain or fever",
      "prescriber": "Dr. Grant",
      "start": "01/2025",
      "refills": 0,
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
    },
    {
      "allergen": "Tree pollen (birch, oak)",
      "type": "Environmental",
      "reaction": "Rhinorrhea, sneezing, watery eyes",
      "severity": "Mild",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "02/24/2025",
      "bp": "84/52",
      "hr": 142,
      "rr": 28,
      "temp": "98.2°F",
      "spo2": "99%",
      "wt": "40 lbs",
      "ht": "3'5\"",
      "bmi": 15.9,
      "setting": "ED"
    },
    {
      "date": "11/18/2024",
      "bp": "90/56",
      "hr": 98,
      "rr": 20,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "41 lbs",
      "ht": "3'5\"",
      "bmi": 16.3,
      "setting": "PCP Office"
    },
    {
      "date": "07/22/2024",
      "bp": "88/54",
      "hr": 96,
      "rr": 22,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "38 lbs",
      "ht": "3'4\"",
      "bmi": 15.5,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Thomas Grant, MD",
      "cc": "Well-child visit — 4-year checkup",
      "hpi": "4-year-old male presenting for annual well-child exam. Parents report no current concerns. Active and energetic. Eating well. No GI symptoms. Meeting all developmental milestones. Starting pre-K in January.",
      "exam": "General: Well-appearing, cooperative child. HEENT: Normal. CV: RRR, no murmur. Lungs: CTA. Abdomen: Soft, NT/ND, no masses, no organomegaly. GU: Normal circumcised male. Skin: No rash. Neuro: Age-appropriate.",
      "assessment": "1. Well-child visit — age 4 years\n2. Allergic rhinitis — seasonal, well-controlled\n3. Growth and development — appropriate for age",
      "plan": "1. Immunizations updated\n2. Vision screening: passed\n3. Continue cetirizine PRN for allergy season\n4. RTC 12 months for 5-year well-child"
    },
    {
      "id": "V002",
      "date": "02/22/2025",
      "type": "Primary Care",
      "provider": "Dr. Thomas Grant, MD",
      "cc": "Red stool x 1 episode — mother concerned about blood",
      "hpi": "4-year-old male brought in because mother noticed one episode of brick-red stool 2 days ago. No abdominal pain. No vomiting. No diarrhea. Eating and drinking normally. No change in activity. No recent illness. Mother initially attributed it to eating beets at school but did not confirm with school. No recurrence until this morning when a second episode of bright red, painless stool occurred.",
      "exam": "General: Well-appearing, playful, afebrile. Abdomen: Soft, NT, ND, no masses, normal bowel sounds. Rectal: deferred given age. Skin: No petechiae or purpura. No pallor.",
      "assessment": "1. Painless rectal bleeding x 2 episodes in 4-year-old male — differential includes Meckel diverticulum, juvenile polyp, allergic colitis\n2. Hemodynamically stable at this visit",
      "plan": "1. Stool guaiac — positive for occult blood\n2. CBC and type/screen ordered\n3. If bleeding recurs or becomes heavy → ED immediately\n4. Pediatric GI referral placed\n5. Parents counseled on warning signs: large volume bleeding, pallor, dizziness, abdominal pain"
    }
  ],
  "labs": [
    {
      "date": "02/24/2025",
      "time": "10:15",
      "orderedBy": "Dr. Emily Torres, MD (ED)",
      "collected": "02/24/2025 10:00",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2025-102847",
      "status": "Final",
      "specimenType": "Whole Blood (EDTA), Serum",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT (CBC) WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "9.4", "unit": "x10³/µL", "range": "5.0-13.5", "flag": "" },
            { "test": "Hemoglobin", "value": "7.8", "unit": "g/dL", "range": "11.5-14.5", "flag": "L" },
            { "test": "Hematocrit", "value": "23.4", "unit": "%", "range": "34-42", "flag": "L" },
            { "test": "MCV", "value": "72", "unit": "fL", "range": "75-87", "flag": "L" },
            { "test": "RDW", "value": "16.2", "unit": "%", "range": "11.5-14.5", "flag": "H" },
            { "test": "Platelets", "value": "342", "unit": "x10³/µL", "range": "150-400", "flag": "" },
            { "test": "Reticulocyte Count", "value": "4.8", "unit": "%", "range": "0.5-2.0", "flag": "H" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "88", "unit": "mg/dL", "range": "70-110", "flag": "" },
            { "test": "BUN", "value": "22", "unit": "mg/dL", "range": "5-18", "flag": "H" },
            { "test": "Creatinine", "value": "0.3", "unit": "mg/dL", "range": "0.2-0.5", "flag": "" },
            { "test": "Sodium", "value": "139", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.0", "unit": "mEq/L", "range": "3.5-5.5", "flag": "" },
            { "test": "Chloride", "value": "103", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "24", "unit": "mEq/L", "range": "20-28", "flag": "" }
          ]
        },
        {
          "name": "TYPE AND SCREEN",
          "results": [
            { "test": "Blood Type", "value": "O Positive", "unit": "", "range": "", "flag": "" },
            { "test": "Antibody Screen", "value": "Negative", "unit": "", "range": "Negative", "flag": "" }
          ]
        },
        {
          "name": "COAGULATION STUDIES",
          "results": [
            { "test": "PT", "value": "12.8", "unit": "sec", "range": "11.0-14.0", "flag": "" },
            { "test": "INR", "value": "1.0", "unit": "", "range": "0.9-1.1", "flag": "" },
            { "test": "PTT", "value": "28", "unit": "sec", "range": "25-35", "flag": "" }
          ]
        }
      ]
    },
    {
      "date": "02/22/2025",
      "time": "16:30",
      "orderedBy": "Dr. Thomas Grant, MD",
      "collected": "02/22/2025 16:15",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2025-101293",
      "status": "Final",
      "specimenType": "Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            { "test": "WBC", "value": "8.9", "unit": "x10³/µL", "range": "5.0-13.5", "flag": "" },
            { "test": "Hemoglobin", "value": "10.2", "unit": "g/dL", "range": "11.5-14.5", "flag": "L" },
            { "test": "Hematocrit", "value": "30.6", "unit": "%", "range": "34-42", "flag": "L" },
            { "test": "Platelets", "value": "318", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/24/2025",
      "study": "MECKEL SCAN (TECHNETIUM-99M PERTECHNETATE SCINTIGRAPHY)",
      "accession": "IMG-2025-10182",
      "status": "FINAL",
      "orderedBy": "Dr. Emily Torres, MD (ED) / Dr. David Park, MD (Pediatric Surgery)",
      "readBy": "Dr. Robert Nash, MD (Nuclear Medicine)",
      "facility": "NSU Health — Davie Campus Nuclear Medicine",
      "priority": "STAT",
      "clinical": "4-year-old male with painless rectal bleeding, dropping hemoglobin, concern for Meckel diverticulum",
      "technique": "Intravenous administration of Technetium-99m pertechnetate. Dynamic and static images of the abdomen obtained over 60 minutes in anterior projection.",
      "findings": "GASTRIC UPTAKE: Normal uptake in the stomach identified in the left upper quadrant by 5 minutes.\n\nABNORMAL FOCUS: A focal area of increased radiotracer uptake is identified in the right lower quadrant, appearing simultaneously with gastric mucosa uptake and increasing in intensity over the study period. This focus is located in the right lower abdomen, inferior and medial to the cecum.\n\nBLADDER: Normal accumulation of radiotracer in the urinary bladder.\n\nOTHER: No other abnormal foci of uptake.",
      "impression": "1. POSITIVE Meckel scan — focal uptake in the right lower quadrant synchronous with gastric mucosal uptake, consistent with ectopic gastric mucosa in a Meckel diverticulum\n2. Correlate with clinical presentation of painless GI bleeding — surgical consultation recommended",
      "dictated": "02/24/2025 12:30",
      "verified": "02/24/2025 12:45"
    }
  ],
  "immunizations": [
    { "vaccine": "DTaP (Daptacel)", "date": "11/18/2024", "site": "Left deltoid IM", "lot": "DA472R", "mfr": "Sanofi" },
    { "vaccine": "IPV (IPOL)", "date": "11/18/2024", "site": "Right deltoid IM", "lot": "IP402T", "mfr": "Sanofi" },
    { "vaccine": "MMR (M-M-R II)", "date": "11/18/2024", "site": "Left deltoid SC", "lot": "MM688K", "mfr": "Merck" },
    { "vaccine": "Varicella (Varivax)", "date": "11/18/2024", "site": "Right deltoid SC", "lot": "VV419L", "mfr": "Merck" },
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "10/01/2024", "site": "Left deltoid IM", "lot": "FL801P", "mfr": "GSK" }
  ],
  "familyHistory": [
    "Mother (age 34): Celiac disease — diagnosed at age 28; well-controlled on gluten-free diet",
    "Father (age 36): No significant medical history",
    "Maternal grandmother (age 62): Colon polyps — surveillance colonoscopies",
    "Paternal grandfather (age 68): History of diverticulitis; cholecystectomy",
    "Sibling (brother, age 6): Healthy, no GI issues"
  ],
  "socialHistory": [
    ["Guardian", "Lives with both parents and older brother"],
    ["Childcare/School", "Attends pre-K at local elementary school"],
    ["Tobacco Exposure", "None — no smokers in household"],
    ["Pets", "One golden retriever, outdoor cat"],
    ["Home Environment", "Single-family home; well water with filtration system"],
    ["Diet", "Generally good eater; eats meat, dairy, fruits, vegetables; no dietary restrictions; no recent dietary changes"],
    ["Development", "Age-appropriate; pre-reading skills, counts to 20, rides bicycle with training wheels"],
    ["Safety", "Booster seat in car; bicycle helmet worn; swim lessons completed"]
  ],
  "meta": {
    "caseId": "meckel-diverticulum",
    "diagnosis": "Symptomatic Meckel Diverticulum with Ectopic Gastric Mucosa and Acute GI Hemorrhage",
    "acuity": 2,
    "presentation": "Pediatric Emergency",
    "category": "surgical"
  }
};
