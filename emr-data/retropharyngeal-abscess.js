// Virtual EMR Case: Retropharyngeal Abscess
// Variant: retropharyngeal-abscess | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Aaliyah Baptiste",
  "patientHPI": "My little girl has had a runny nose for about four days, but yesterday she started pulling at her right ear and crying a lot more than usual. She's had a fever up to almost 102 and isn't eating much, though she's still drinking her milk okay.",
    "dob": "06/14/2022",
    "age": 2,
    "sex": "Female",
    "mrn": "RDX-2025-39714",
    "pronouns": "She/Her",
    "insurance": "Medicaid (Florida KidCare)",
    "pcp": "Dr. Rachel Kim, MD (Pediatrics)",
    "pharmacy": "Publix Pharmacy — 8201 W Sunrise Blvd, Plantation, FL",
    "language": "English, Haitian Creole",
    "race": "Black/Haitian",
    "address": "5690 Jasmine Way, Denver, CO 80203",
    "phone": "(954) 555-8217",
    "email": "j.baptiste.parent@email.com",
    "emergencyContact": {
      "name": "Jocelyne Baptiste (Mother)",
      "phone": "(954) 555-8219"
    }
  },
  "problems": [
    {
      "problem": "Retropharyngeal Abscess",
      "icd": "J39.0",
      "onset": "2025",
      "status": "Active",
      "notes": "Current presentation — neck stiffness, fever, drooling following URI"
    },
    {
      "problem": "Recurrent Acute Otitis Media",
      "icd": "H66.90",
      "onset": "2023",
      "status": "Active",
      "notes": "4 episodes in past 12 months; ENT referral pending; audiology WNL"
    },
    {
      "problem": "Atopic Dermatitis",
      "icd": "L20.9",
      "onset": "2023",
      "status": "Active",
      "notes": "Moderate; face and extremities; managed with emollients and triamcinolone 0.025% PRN"
    }
  ],
  "medications": [
    {
      "name": "Triamcinolone 0.025% cream — apply BID PRN",
      "sig": "Apply thin layer to affected eczema areas twice daily as needed for flares (max 2 weeks continuous)",
      "prescriber": "Dr. Kim",
      "start": "04/2024",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Children's Acetaminophen 160mg/5mL — 5mL Q4-6h PRN",
      "sig": "Give 5 mL by mouth every 4-6 hours as needed for fever or pain",
      "prescriber": "Dr. Kim",
      "start": "01/2025",
      "refills": 0,
      "status": "PRN"
    },
    {
      "name": "Amoxicillin 250mg/5mL — 5mL TID x 10 days",
      "sig": "Give 5 mL by mouth three times daily for 10 days",
      "prescriber": "Dr. Kim",
      "start": "02/10/2025",
      "refills": 0,
      "status": "Active — prescribed for AOM (started 5 days ago; incomplete course)"
    }
  ],
  "allergies": [
    {
      "allergen": "Cefdinir",
      "type": "Drug",
      "reaction": "Bloody-appearing diarrhea (serum sickness-like reaction vs GI upset)",
      "severity": "Moderate",
      "verified": "Patient-reported"
    },
    {
      "allergen": "Egg",
      "type": "Food",
      "reaction": "Perioral urticaria, vomiting",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/16/2025",
      "bp": "92/56",
      "hr": 168,
      "rr": 36,
      "temp": "104.2°F",
      "spo2": "96%",
      "wt": "28 lbs",
      "ht": "2'11\"",
      "bmi": 16.8,
      "setting": "ED"
    },
    {
      "date": "02/10/2025",
      "bp": "86/54",
      "hr": 138,
      "rr": 28,
      "temp": "101.8°F",
      "spo2": "99%",
      "wt": "28 lbs",
      "ht": "2'11\"",
      "bmi": 16.8,
      "setting": "PCP Office"
    },
    {
      "date": "09/14/2024",
      "bp": "84/52",
      "hr": 112,
      "rr": 24,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "27 lbs",
      "ht": "2'10\"",
      "bmi": 16.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/10/2025",
      "type": "Primary Care",
      "provider": "Dr. Rachel Kim, MD",
      "cc": "Fever, ear pulling, fussy x 2 days",
      "hpi": "2-year-old female with history of recurrent AOM presenting with 2-day fever (max 101.8°F), right ear pulling, irritability, and decreased appetite. Runny nose for 4 days prior. No cough. No vomiting or diarrhea. Still drinking fluids. Attending daycare — multiple kids sick.",
      "exam": "General: Fussy but consolable. HEENT: Right TM erythematous, bulging with decreased mobility; Left TM mildly dull. Mild nasal congestion. Oropharynx mildly erythematous. No exudate. Neck: Supple, shotty anterior cervical LAD bilaterally. Lungs: CTA. Abdomen: Soft, NT.",
      "assessment": "1. Acute otitis media — right ear (4th episode in 12 months)\n2. Upper respiratory infection — viral",
      "plan": "1. Amoxicillin 45 mg/kg/day divided TID x 10 days (avoided cefdinir per allergy)\n2. Acetaminophen PRN for fever/pain\n3. ENT referral placed — discuss myringotomy tubes\n4. Return if worsening despite antibiotics, neck swelling, or difficulty swallowing"
    },
    {
      "id": "V002",
      "date": "09/14/2024",
      "type": "Primary Care",
      "provider": "Dr. Rachel Kim, MD",
      "cc": "Well-child visit — 2-year checkup",
      "hpi": "2-year-old female for well-child check. Mother reports she is speaking in 2-word phrases, running, climbing. Eating well but selective. No current illness. Eczema has been flaring with the dry weather.",
      "exam": "General: Well-appearing, active toddler. HEENT: TMs clear bilaterally, oropharynx normal. CV: RRR. Lungs: CTA. Abdomen: Soft, NT. Skin: Dry patches on antecubital and popliteal fossae, mild lichenification. Neuro: Age-appropriate.",
      "assessment": "1. Well-child 2-year visit — growth and development appropriate\n2. Atopic dermatitis — mild-moderate flare\n3. Recurrent AOM — 3 episodes in prior 12 months, ENT referral discussed",
      "plan": "1. Hepatitis A vaccine given\n2. Increase emollient use; continue triamcinolone for flares\n3. ENT referral if another AOM episode within 6 months\n4. RTC 12 months or sooner PRN"
    }
  ],
  "labs": [
    {
      "date": "02/16/2025",
      "time": "22:18",
      "orderedBy": "Dr. Marcus Johnson, MD (ED)",
      "collected": "02/16/2025 22:05",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-089714",
      "status": "Final",
      "specimenType": "Whole Blood (EDTA), Serum",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT (CBC) WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "24.8", "unit": "x10³/µL", "range": "5.5-15.5", "flag": "H" },
            { "test": "Hemoglobin", "value": "11.4", "unit": "g/dL", "range": "11.0-14.0", "flag": "" },
            { "test": "Hematocrit", "value": "34.2", "unit": "%", "range": "33-39", "flag": "" },
            { "test": "Platelets", "value": "428", "unit": "x10³/µL", "range": "150-400", "flag": "H" },
            { "test": "Neutrophils", "value": "78", "unit": "%", "range": "25-62", "flag": "H" },
            { "test": "Bands", "value": "10", "unit": "%", "range": "0-5", "flag": "H" },
            { "test": "Lymphocytes", "value": "8", "unit": "%", "range": "25-50", "flag": "L" }
          ]
        },
        {
          "name": "C-REACTIVE PROTEIN",
          "results": [
            { "test": "CRP", "value": "18.4", "unit": "mg/dL", "range": "0.0-0.5", "flag": "H" }
          ]
        },
        {
          "name": "BLOOD CULTURE",
          "results": [
            { "test": "Blood Culture (Aerobic)", "value": "Pending", "unit": "", "range": "No growth", "flag": "" },
            { "test": "Blood Culture (Anaerobic)", "value": "Pending", "unit": "", "range": "No growth", "flag": "" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "94", "unit": "mg/dL", "range": "60-110", "flag": "" },
            { "test": "BUN", "value": "16", "unit": "mg/dL", "range": "5-18", "flag": "" },
            { "test": "Creatinine", "value": "0.3", "unit": "mg/dL", "range": "0.2-0.4", "flag": "" },
            { "test": "Sodium", "value": "136", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.0", "unit": "mEq/L", "range": "3.5-5.5", "flag": "" },
            { "test": "Chloride", "value": "101", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "22", "unit": "mEq/L", "range": "20-28", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/16/2025",
      "study": "CT NECK WITH CONTRAST",
      "accession": "IMG-2025-09087",
      "status": "FINAL",
      "orderedBy": "Dr. Marcus Johnson, MD (ED)",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "2-year-old with high fever, neck stiffness, drooling, refusal to swallow — concern for deep space neck infection",
      "technique": "Axial CT images of the neck obtained following IV contrast administration. Coronal and sagittal reformats reviewed.",
      "findings": "RETROPHARYNGEAL SPACE: A well-defined hypodense fluid collection with peripheral rim enhancement is identified in the retropharyngeal space, extending from C2 to C4 levels. The collection measures approximately 2.8 x 1.4 x 3.2 cm (AP x transverse x craniocaudal). Internal attenuation measures 12-18 HU, consistent with abscess.\n\nAIRWAY: The posterior pharyngeal wall is displaced anteriorly by the collection, narrowing the oropharyngeal airway to approximately 4 mm at the narrowest point (C3 level). The epiglottis and larynx appear normal.\n\nLYMPH NODES: Bilateral reactive cervical lymphadenopathy, left greater than right, with the largest node measuring 1.6 cm in the left level II chain. No suppurative lymph node identified.\n\nOTHER: Bilateral mastoid effusions. Middle ear opacification on the right, consistent with known otitis media. No extension into the danger space or mediastinum. No vascular involvement.",
      "impression": "1. RETROPHARYNGEAL ABSCESS extending C2-C4, measuring 2.8 x 1.4 x 3.2 cm with significant airway compromise (4 mm residual oropharyngeal lumen)\n2. Bilateral reactive cervical lymphadenopathy\n3. Right otitis media / bilateral mastoid effusions\n4. ENT/Pediatric Surgery consultation recommended for drainage",
      "dictated": "02/16/2025 23:05",
      "verified": "02/16/2025 23:12"
    },
    {
      "date": "02/16/2025",
      "study": "LATERAL SOFT TISSUE NECK X-RAY",
      "accession": "IMG-2025-09082",
      "status": "FINAL",
      "orderedBy": "Dr. Marcus Johnson, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "2-year-old with neck stiffness, fever, drooling",
      "technique": "Lateral soft tissue neck radiograph with neck in extension.",
      "findings": "PREVERTEBRAL SOFT TISSUES: Markedly widened retropharyngeal space measuring 14 mm at C2 level (normal <7 mm in a child this age) and 18 mm at C3-C4 (normal <14 mm). The prevertebral soft tissue width exceeds the width of the adjacent vertebral body.\n\nAIRWAY: Anterior displacement of the posterior pharyngeal wall with moderate airway narrowing. No epiglottic enlargement.\n\nCERVICAL SPINE: Normal alignment. No fracture or dislocation.",
      "impression": "1. Markedly widened retropharyngeal space — highly suspicious for retropharyngeal abscess vs phlegmon\n2. CT with contrast recommended for further characterization and surgical planning",
      "dictated": "02/16/2025 22:35",
      "verified": "02/16/2025 22:42"
    }
  ],
  "immunizations": [
    { "vaccine": "Hepatitis A (Havrix) — 2nd dose", "date": "09/14/2024", "site": "Left thigh IM", "lot": "HA412K", "mfr": "GSK" },
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "10/10/2024", "site": "Right deltoid IM", "lot": "FL819R", "mfr": "GSK" },
    { "vaccine": "DTaP (Daptacel) — 4th dose", "date": "06/14/2023", "site": "Right thigh IM", "lot": "DA392T", "mfr": "Sanofi" },
    { "vaccine": "MMR (M-M-R II)", "date": "06/14/2023", "site": "Left thigh SC", "lot": "MM641P", "mfr": "Merck" },
    { "vaccine": "Varicella (Varivax)", "date": "06/14/2023", "site": "Right thigh SC", "lot": "VV312M", "mfr": "Merck" }
  ],
  "familyHistory": [
    "Mother (age 30): Asthma, eczema — both well-controlled",
    "Father (age 33): Hypertension, sickle cell trait",
    "Maternal grandmother (age 58): Type 2 Diabetes, obesity",
    "Sibling (brother, age 5): Asthma, recurrent AOM — had myringotomy tubes at age 3",
    "Strong family history of atopy (asthma, eczema, allergic rhinitis)"
  ],
  "socialHistory": [
    ["Guardian", "Lives with both parents and older brother"],
    ["Childcare/School", "Attends large daycare center (25+ children)"],
    ["Tobacco Exposure", "None — no smokers in household"],
    ["Pets", "None"],
    ["Home Environment", "Townhouse; no mold, good ventilation"],
    ["Diet", "Eats table foods, avoids eggs per allergy; drinks whole milk; eats rice, beans, chicken, plantains, tropical fruits"],
    ["Development", "Speaking in 2-word phrases, running, climbing stairs with rail, names body parts — age-appropriate"],
    ["Safety", "Rear-facing car seat (still within weight limit); cabinet locks; pool fence"]
  ],
  "meta": {
    "caseId": "retropharyngeal-abscess",
    "diagnosis": "Retropharyngeal Abscess (C2-C4) with Airway Compromise — Complication of Acute Otitis Media/URI",
    "acuity": 2,
    "presentation": "Pediatric Emergency",
    "category": "infectious"
  }
};
