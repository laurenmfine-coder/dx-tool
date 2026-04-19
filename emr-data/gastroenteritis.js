// Virtual EMR Case: Gastroenteritis
// Variant: gastroenteritis | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Sophia Petit-Frère",
  "patientHPI": "My mom brought me in for my regular checkup - I've been doing really well lately, walking around everywhere and saying mama, dada, and a few other words that make everyone so excited, and I love eating the same food as everyone else at the table.",
    "dob": "09/03/2023",
    "age": 1,
    "sex": "Female",
    "mrn": "RDX-2025-52741",
    "pronouns": "She/Her",
    "insurance": "Medicaid (Florida KidCare)",
    "pcp": "Dr. Rachel Kim, MD (Pediatrics)",
    "pharmacy": "Walgreens — 3001 Broward Blvd, Fort Lauderdale, FL",
    "language": "English, Haitian Creole",
    "race": "Black/Haitian",
    "address": "5639 Magnolia Blvd, Memphis, TN 38107",
    "phone": "(954) 555-6738",
    "email": "m.petitfrere@email.com",
    "emergencyContact": {
      "name": "Marie Petit-Frère (Mother)",
      "phone": "(954) 555-6740"
    }
  },
  "problems": [
    {
      "problem": "Acute Gastroenteritis with Dehydration",
      "icd": "A09",
      "onset": "2025",
      "status": "Active",
      "notes": "Current presentation — 3 days of vomiting and diarrhea"
    },
    {
      "problem": "History of Prematurity (35 weeks)",
      "icd": "P07.38",
      "onset": "2023",
      "status": "Resolved",
      "notes": "Born at 35 weeks; 3-day NICU stay for feeding; no complications since discharge"
    },
    {
      "problem": "Eczema",
      "icd": "L30.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Mild; managed with moisturizers and occasional hydrocortisone 1%"
    }
  ],
  "medications": [
    {
      "name": "Hydrocortisone 1% cream — apply BID PRN",
      "sig": "Apply thin layer to affected areas twice daily as needed for eczema flares",
      "prescriber": "Dr. Kim",
      "start": "06/2024",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Infant Acetaminophen 160mg/5mL — 3.75mL Q4-6h PRN",
      "sig": "Give 3.75 mL by mouth every 4-6 hours as needed for fever or pain",
      "prescriber": "Dr. Kim",
      "start": "09/2024",
      "refills": 0,
      "status": "PRN"
    },
    {
      "name": "Vitamin D 400 IU drops daily",
      "sig": "Give 1 mL by mouth daily",
      "prescriber": "Dr. Kim",
      "start": "10/2023",
      "refills": 3,
      "status": "Active"
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
      "date": "02/20/2025",
      "bp": "78/48",
      "hr": 178,
      "rr": 38,
      "temp": "100.9°F",
      "spo2": "98%",
      "wt": "19.6 lbs",
      "ht": "29\"",
      "bmi": 16.5,
      "setting": "ED"
    },
    {
      "date": "12/10/2024",
      "bp": "82/52",
      "hr": 128,
      "rr": 28,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "21.2 lbs",
      "ht": "29\"",
      "bmi": 17.8,
      "setting": "PCP Office"
    },
    {
      "date": "09/03/2024",
      "bp": "80/50",
      "hr": 124,
      "rr": 30,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "19.8 lbs",
      "ht": "28\"",
      "bmi": 17.9,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/10/2024",
      "type": "Primary Care",
      "provider": "Dr. Rachel Kim, MD",
      "cc": "Well-child visit — 15-month checkup",
      "hpi": "15-month-old female presenting for well-child visit. Mother reports she is walking independently, saying 3-4 words, and eating table foods well. No current illness. Stooling normally. Good appetite. Sleeping through the night.",
      "exam": "General: Well-appearing, active toddler. HEENT: Anterior fontanelle closed, TMs clear, oropharynx clear with 8 teeth. CV: RRR. Lungs: CTA. Abdomen: Soft, NT, no hepatosplenomegaly. Skin: Mild dry patches on bilateral antecubital fossae. Neuro: Walking independently, transfers objects, age-appropriate.",
      "assessment": "1. Well-child 15-month visit\n2. Eczema — mild, well-controlled\n3. Growth and development — appropriate",
      "plan": "1. Immunizations per schedule (DTaP, Hep A)\n2. Continue Vitamin D supplementation\n3. Continue moisturizers for eczema\n4. Anticipatory guidance: safety, nutrition, language development\n5. RTC 3 months for 18-month visit"
    },
    {
      "id": "V002",
      "date": "02/18/2025",
      "type": "Primary Care",
      "provider": "Dr. Rachel Kim, MD",
      "cc": "Vomiting and diarrhea x 1 day",
      "hpi": "17-month-old female brought in by mother for 1 day of non-bloody, non-bilious vomiting (6 episodes) and watery diarrhea (4 episodes). Low-grade fever of 100.2°F at home. Taking small sips of Pedialyte but vomited twice after. One wet diaper in the past 8 hours. No sick contacts known but attends daycare. No recent travel.",
      "exam": "General: Fussy, mild lethargy, no tears when crying. HEENT: Anterior fontanelle flat, mucous membranes tacky, lips slightly dry. CV: Tachycardic, regular. Lungs: CTA. Abdomen: Soft, mildly distended, hyperactive bowel sounds, no tenderness. Skin: Slightly decreased turgor. Cap refill 2-3 sec.",
      "assessment": "1. Acute gastroenteritis — likely viral (rotavirus vs norovirus)\n2. Mild-moderate dehydration — decreased urine output, tacky mucous membranes, no tears",
      "plan": "1. Trial oral rehydration with Pedialyte — 5 mL q5min\n2. If unable to tolerate PO → consider ED for IV fluids\n3. Strict output monitoring — wet diapers, stool frequency\n4. Return precautions: persistent vomiting, bloody stools, lethargy, no wet diaper x 8 hrs, sunken fontanelle\n5. Mother given detailed dehydration warning handout"
    }
  ],
  "labs": [
    {
      "date": "02/20/2025",
      "time": "14:22",
      "orderedBy": "Dr. Amanda Liu, MD (ED)",
      "collected": "02/20/2025 14:10",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-094182",
      "status": "Final",
      "specimenType": "Whole Blood (EDTA), Serum",
      "fasting": "No",
      "groups": [
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "68", "unit": "mg/dL", "range": "60-110", "flag": "" },
            { "test": "BUN", "value": "28", "unit": "mg/dL", "range": "5-18", "flag": "H" },
            { "test": "Creatinine", "value": "0.4", "unit": "mg/dL", "range": "0.1-0.4", "flag": "" },
            { "test": "Sodium", "value": "134", "unit": "mEq/L", "range": "136-145", "flag": "L" },
            { "test": "Potassium", "value": "3.2", "unit": "mEq/L", "range": "3.5-5.5", "flag": "L" },
            { "test": "Chloride", "value": "98", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "16", "unit": "mEq/L", "range": "20-28", "flag": "L" }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            { "test": "WBC", "value": "12.8", "unit": "x10³/µL", "range": "6.0-14.5", "flag": "" },
            { "test": "Hemoglobin", "value": "13.2", "unit": "g/dL", "range": "10.5-13.5", "flag": "" },
            { "test": "Hematocrit", "value": "40.1", "unit": "%", "range": "33-39", "flag": "H" },
            { "test": "Platelets", "value": "284", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "URINALYSIS",
          "results": [
            { "test": "Specific Gravity", "value": "1.032", "unit": "", "range": "1.005-1.030", "flag": "H" },
            { "test": "Ketones", "value": "Moderate", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "Glucose", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "WBC", "value": "0-2", "unit": "/HPF", "range": "0-5", "flag": "" },
            { "test": "Bacteria", "value": "None", "unit": "", "range": "None", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/20/2025",
      "study": "ABDOMINAL X-RAY — SUPINE",
      "accession": "IMG-2025-09271",
      "status": "FINAL",
      "orderedBy": "Dr. Amanda Liu, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "17-month-old with vomiting, diarrhea, abdominal distension — rule out obstruction",
      "technique": "Single supine AP radiograph of the abdomen obtained.",
      "findings": "BOWEL GAS PATTERN: Mildly dilated loops of small and large bowel with diffusely increased gas throughout. No focal dilated loop or transition point. No air-fluid levels on this supine view.\n\nNO FREE AIR: No pneumoperitoneum.\n\nSOFT TISSUES: Unremarkable.\n\nBONY STRUCTURES: Normal for age.",
      "impression": "1. Non-specific gaseous distension of bowel — consistent with gastroenteritis/ileus\n2. No evidence of bowel obstruction or perforation",
      "dictated": "02/20/2025 14:50",
      "verified": "02/20/2025 15:05"
    }
  ],
  "immunizations": [
    { "vaccine": "DTaP (Daptacel)", "date": "12/10/2024", "site": "Right thigh IM", "lot": "DA411R", "mfr": "Sanofi" },
    { "vaccine": "Hepatitis A (Havrix)", "date": "12/10/2024", "site": "Left thigh IM", "lot": "HA329T", "mfr": "GSK" },
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "10/08/2024", "site": "Left thigh IM", "lot": "FL812K", "mfr": "GSK" },
    { "vaccine": "PCV15 (Vaxneuvance)", "date": "09/03/2024", "site": "Right thigh IM", "lot": "PV241M", "mfr": "Merck" },
    { "vaccine": "Hepatitis B (Engerix-B)", "date": "09/03/2023", "site": "Right thigh IM", "lot": "HB518R", "mfr": "GSK" },
    { "vaccine": "Rotavirus (RotaTeq)", "date": "03/03/2024", "site": "Oral", "lot": "RV722P", "mfr": "Merck" }
  ],
  "familyHistory": [
    "Mother (age 26): Sickle cell trait — asymptomatic carrier",
    "Father (age 29): Hypertension, pre-diabetes",
    "Maternal grandmother (age 54): Type 2 Diabetes, hypertension, obesity",
    "Paternal grandfather (age 61): Deceased — stroke at age 58",
    "No known family history of IBD, celiac disease, or GI malignancy"
  ],
  "socialHistory": [
    ["Guardian", "Lives with mother and maternal grandmother; father involved but lives separately"],
    ["Childcare/School", "Attends home daycare with 6 other children"],
    ["Tobacco Exposure", "None — no smokers in household"],
    ["Pets", "None"],
    ["Home Environment", "Apartment, city water supply, no well water"],
    ["Diet", "Whole milk, table foods; picky with vegetables; still uses bottle at bedtime (mother counseled to wean)"],
    ["Development", "Walking independently since 13 months, says 'mama,' 'dada,' 3 other words; points to wants"],
    ["Safety", "Rear-facing car seat; cabinet locks; no pool access"]
  ],
  "meta": {
    "caseId": "gastroenteritis",
    "diagnosis": "Acute Viral Gastroenteritis with Moderate Dehydration and Non-Anion Gap Metabolic Acidosis",
    "acuity": 3,
    "presentation": "Pediatric Emergency",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Sophia Petit-Fr\u00e8re appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did pediatric emergency start?",
        "Can you describe exactly how it started \u2014 sudden or gradual?",
        "Where is the problem located? Does it spread anywhere?",
        "How would you rate the severity on a scale of 1 to 10?",
        "What makes it worse? What makes it better?",
        "Do you have any other symptoms along with this?",
        "Have you had anything like this before?",
        "Tell me about your medical history \u2014 any chronic conditions?",
        "What medications are you currently taking?",
        "Do you have any allergies to medications?",
        "Tell me about your family medical history.",
        "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
        "default": "She pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started My mom brought me in for my regular checkup - I've been doing really well lately.'",
        "character": "'It's pediatric emergency \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Acute Viral Gastroenteritis with Moderate Dehydration and Non-Anion Gap Metabolic Acidosis.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Hydrocortisone 1% cream \u2014 apply BID PRN; Infant Acetaminophen 160mg/5mL \u2014 3.75mL Q4-6h PRN; Vitamin D 400 IU drops daily.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Mother (age 26): Sickle cell trait \u2014 asymptomatic carrier  Father (age 29): Hypertension, pre-diabetes  Maternal grandmother (age 54): Type 2 Diabetes, hypertension, obesity",
        "social": "Guardian: Lives with mother and maternal grandmother; father involved but lives separately  Childcare/School: Attends home daycare with 6 other children  Tobacco Exposure: None \u2014 no smokers in household  Pets: None  Home Environment: Apartment, city water supply, no well water"
    },
    "examManeuvers": [
        "General appearance and toxicity",
        "Vital signs with temperature",
        "Skin for rash, lesions, or signs of infection",
        "Lymph node palpation",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Source-specific examination"
    ],
    "examFindings": {
        "General appearance and toxicity": "Clinical finding consistent with Acute Viral Gastroenteritis with Moderate Dehydration and Non-Anion Gap Metabolic Acidosis. Document specifically what you observe.",
        "Vital signs with temperature": "Clinical finding consistent with Acute Viral Gastroenteritis with Moderate Dehydration and Non-Anion Gap Metabolic Acidosis. Document specifically what you observe.",
        "Skin for rash, lesions, or signs of infection": "Clinical finding consistent with Acute Viral Gastroenteritis with Moderate Dehydration and Non-Anion Gap Metabolic Acidosis. Document specifically what you observe.",
        "Lymph node palpation": "Clinical finding consistent with Acute Viral Gastroenteritis with Moderate Dehydration and Non-Anion Gap Metabolic Acidosis. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Acute Viral Gastroenteritis with Moderate Dehydration and Non-Anion Gap Metabolic Acidosis. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Acute Viral Gastroenteritis with Moderate Dehydration and Non-Anion Gap Metabolic Acidosis. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with Acute Viral Gastroenteritis with Moderate Dehydration and Non-Anion Gap Metabolic Acidosis. Document specifically what you observe.",
        "Source-specific examination": "Clinical finding consistent with Acute Viral Gastroenteritis with Moderate Dehydration and Non-Anion Gap Metabolic Acidosis. Document specifically what you observe."
    },
    "ddxTargets": [
        "Acute Viral Gastroenteritis with Moderate Dehydration and Non-Anion Gap Metabolic Acidosis (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Acute Viral Gastroenteritis with Moderate Dehydration and Non-Anion Gap Metabolic Acidosis, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Acute Viral Gastroenteritis with Moderate Dehydration and Non-Anion Gap Metabolic Acidosis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Acute Viral Gastroenteritis with Moderate Dehydration and Non-Anion Gap Metabolic Acidosis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Sophia Petit-Fr\u00e8re's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Acute Viral Gastroenteritis with Moderate Dehydration and Non-Anion Gap Metabolic Acidosis. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
