// Virtual EMR Case: Gastric Malignancy (Presenting with Syncope from Occult GI Hemorrhage)
// Variant: gastric-malignancy | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Hideo Tanaka",
  "patientHPI": "I've been losing weight without trying over the past few months and I just feel so tired all the time - I get full after just a few bites of food and my stomach feels uncomfortable.",
    "dob": "07/12/1951",
    "age": 74,
    "sex": "Male",
    "mrn": "RDX-2025-42128",
    "pronouns": "He/Him",
    "insurance": "Medicare Advantage (United Healthcare)",
    "pcp": "Dr. James Weatherly, MD",
    "pharmacy": "CVS Pharmacy — 3201 N University Dr, Riverside, FL",
    "language": "English, Japanese",
    "race": "Asian (Japanese American)",
    "address": "8199 Hickory Rd, Denver, CO 80205",
    "phone": "(954) 555-8274",
    "email": "h.tanaka51@email.com",
    "emergencyContact": {
      "name": "Yuki Tanaka (Wife)",
      "phone": "(954) 555-8290"
    }
  },
  "problems": [
    {
      "problem": "Chronic Atrophic Gastritis — H. pylori-Associated",
      "icd": "K29.40",
      "onset": "2018",
      "status": "Active",
      "notes": "H. pylori eradicated 2018 (triple therapy confirmed by UBT); EGD 2019 showed atrophic gastritis with intestinal metaplasia — surveillance EGD recommended q3yr but patient missed 2022 appointment"
    },
    {
      "problem": "Iron Deficiency Anemia — Chronic",
      "icd": "D50.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Hgb declining from 13.2 (2023) to 10.8 (08/2025); on oral iron; attributed to atrophic gastritis; colonoscopy 2024 normal"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2006",
      "status": "Active",
      "notes": "On losartan and HCTZ; controlled"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2014",
      "status": "Active",
      "notes": "On metformin; A1c 6.8; well controlled"
    },
    {
      "problem": "Unintentional Weight Loss",
      "icd": "R63.4",
      "onset": "2025",
      "status": "Active",
      "notes": "12 lb loss over 5 months; decreased appetite; early satiety — attributed to atrophic gastritis but progressive"
    },
    {
      "problem": "Benign Prostatic Hyperplasia",
      "icd": "N40.0",
      "onset": "2018",
      "status": "Active",
      "notes": "On tamsulosin; nocturia 2x/night"
    }
  ],
  "medications": [
    {
      "name": "Losartan 50mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Weatherly",
      "start": "04/2008",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Hydrochlorothiazide 12.5mg daily",
      "sig": "Take 1 tablet by mouth once daily in the morning",
      "prescriber": "Dr. Weatherly",
      "start": "09/2012",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Metformin 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Weatherly",
      "start": "08/2014",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Ferrous Sulfate 325mg BID",
      "sig": "Take 1 tablet by mouth twice daily on empty stomach with vitamin C",
      "prescriber": "Dr. Weatherly",
      "start": "09/2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Tamsulosin 0.4mg QHS",
      "sig": "Take 1 capsule by mouth at bedtime",
      "prescriber": "Dr. Weatherly",
      "start": "06/2019",
      "refills": 4,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Metoclopramide",
      "type": "Drug",
      "reaction": "Extrapyramidal symptoms — acute dystonic reaction (jaw clenching, torticollis)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/22/2026",
      "bp": "92/58",
      "hr": 108,
      "rr": 18,
      "temp": "98.0°F",
      "spo2": "97%",
      "wt": "148 lbs",
      "ht": "5'7\"",
      "bmi": 23.2,
      "setting": "ED"
    },
    {
      "date": "11/10/2025",
      "bp": "128/76",
      "hr": 82,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "152 lbs",
      "ht": "5'7\"",
      "bmi": 23.8,
      "setting": "PCP Office"
    },
    {
      "date": "08/08/2025",
      "bp": "130/78",
      "hr": 78,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "98%",
      "wt": "156 lbs",
      "ht": "5'7\"",
      "bmi": 24.4,
      "setting": "PCP Office"
    },
    {
      "date": "03/14/2025",
      "bp": "132/80",
      "hr": 72,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "98%",
      "wt": "160 lbs",
      "ht": "5'7\"",
      "bmi": 25.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/10/2025",
      "type": "Primary Care",
      "provider": "Dr. James Weatherly, MD",
      "cc": "Weight loss, worsening anemia, fatigue",
      "hpi": "74M with chronic atrophic gastritis, IDA, T2DM presents with ongoing weight loss (12 lbs over 5 months) and worsening fatigue. Hgb dropped from 11.4 to 10.2 despite oral iron x 14 months. Reports decreased appetite, early satiety after small meals, and vague epigastric discomfort. Denies melena, hematemesis, or overt GI bleeding. Stools possibly darker than usual but patient unsure. Has been compliant with iron supplementation. Missed surveillance EGD in 2022.",
      "exam": "Thin, fatigued appearance. Conjunctival pallor present. CV: RRR, no murmurs. Abdomen: Soft, mild epigastric tenderness, no masses palpable. No hepatomegaly. No ascites. Ext: No edema. Skin: Pallor.",
      "assessment": "1. Worsening IDA refractory to oral iron — concerning for ongoing GI blood loss\n2. Unintentional weight loss — alarm features present (age, prior H. pylori, atrophic gastritis with intestinal metaplasia, weight loss, progressive anemia)\n3. URGENT EGD indicated — overdue for surveillance, now symptomatic",
      "plan": "1. STAT referral to GI for EGD — concern for gastric malignancy\n2. Repeat CBC, iron studies, reticulocyte count, LDH, B12, folate\n3. Stool guaiac x3\n4. CT abdomen/pelvis if EGD confirms mass\n5. Nutritional counseling — small frequent meals\n6. Return after EGD results"
    },
    {
      "id": "V002",
      "date": "08/08/2025",
      "type": "Primary Care",
      "provider": "Dr. James Weatherly, MD",
      "cc": "Diabetes and anemia follow-up",
      "hpi": "74M presents for routine follow-up. A1c 6.8 — well controlled. Hgb 11.4, improved slightly from 10.8 on iron. Reports some fatigue. Weight 156 (down 4 lbs from March). Attributes decreased appetite to 'not feeling as hungry.' No abdominal pain, nausea, or vomiting.",
      "exam": "NAD but thin. CV: RRR. Abdomen: Soft, NT. Skin: Mild pallor.",
      "assessment": "1. T2DM — controlled\n2. IDA — improving but slowly; continue iron\n3. Weight loss — 4 lbs; monitoring",
      "plan": "1. Continue iron supplementation\n2. Recheck CBC in 3 months\n3. Discussed EGD surveillance — patient to schedule\n4. Return 3 months"
    }
  ],
  "labs": [
    {
      "date": "11/10/2025",
      "time": "09:00",
      "orderedBy": "Dr. Weatherly",
      "collected": "11/10/2025 09:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-871108",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "Yes (12 hrs)",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            { "test": "WBC", "value": "8.4", "unit": "K/uL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "10.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "L" },
            { "test": "Hematocrit", "value": "31.0", "unit": "%", "range": "38.3-48.6", "flag": "L" },
            { "test": "MCV", "value": "74", "unit": "fL", "range": "80-100", "flag": "L" },
            { "test": "RDW", "value": "18.2", "unit": "%", "range": "11.5-14.5", "flag": "H" },
            { "test": "Platelets", "value": "384", "unit": "K/uL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "IRON STUDIES",
          "results": [
            { "test": "Iron", "value": "28", "unit": "mcg/dL", "range": "60-170", "flag": "L" },
            { "test": "TIBC", "value": "420", "unit": "mcg/dL", "range": "250-370", "flag": "H" },
            { "test": "Ferritin", "value": "8", "unit": "ng/mL", "range": "12-300", "flag": "L" },
            { "test": "Transferrin Saturation", "value": "7", "unit": "%", "range": "20-50", "flag": "L" }
          ]
        },
        {
          "name": "ADDITIONAL LABS",
          "results": [
            { "test": "Reticulocyte Count", "value": "0.8", "unit": "%", "range": "0.5-2.5", "flag": "" },
            { "test": "LDH", "value": "188", "unit": "U/L", "range": "140-280", "flag": "" },
            { "test": "Vitamin B12", "value": "248", "unit": "pg/mL", "range": "200-900", "flag": "" },
            { "test": "Folate", "value": "12.4", "unit": "ng/mL", "range": ">3.0", "flag": "" }
          ]
        },
        {
          "name": "STOOL STUDIES",
          "results": [
            { "test": "Fecal Occult Blood (Guaiac) #1", "value": "Positive", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "Fecal Occult Blood (Guaiac) #2", "value": "Positive", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "Fecal Occult Blood (Guaiac) #3", "value": "Positive", "unit": "", "range": "Negative", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "03/2024",
      "study": "COLONOSCOPY",
      "accession": "ENDO-2024-30418",
      "status": "FINAL",
      "orderedBy": "Dr. Weatherly",
      "readBy": "Dr. Rafael Diaz, MD (Gastroenterology)",
      "facility": "ReasonDx Medical Center Endoscopy Suite",
      "priority": "Routine",
      "clinical": "Iron deficiency anemia — lower GI evaluation",
      "technique": "Colonoscopy performed to cecum with adequate bowel preparation.",
      "findings": "Terminal ileum: Normal mucosa.\n\nCecum/ascending: Normal.\n\nTransverse: Normal.\n\nDescending/sigmoid: Two diminutive polyps (3mm each) — removed by cold forceps.\n\nRectum: Internal hemorrhoids, grade I.\n\nBowel preparation: Good.",
      "impression": "1. Two diminutive sigmoid polyps — removed (pathology: hyperplastic).\n2. Grade I internal hemorrhoids — insufficient to explain IDA.\n3. No malignancy, no AVM, no colitis.\n4. Upper GI source should be evaluated for ongoing IDA.",
      "dictated": "03/20/2024 14:00",
      "verified": "03/20/2024 16:00"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-9310", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Moderna)", "date": "09/2025", "site": "Right deltoid IM", "lot": "CV25-2328", "mfr": "Moderna" },
    { "vaccine": "Prevnar 20", "date": "01/2024", "site": "Left deltoid IM", "lot": "PV20-680", "mfr": "Pfizer" },
    { "vaccine": "Shingrix (1/2)", "date": "04/2023", "site": "Right deltoid IM", "lot": "SX23-240", "mfr": "GSK" },
    { "vaccine": "Shingrix (2/2)", "date": "06/2023", "site": "Right deltoid IM", "lot": "SX23-388", "mfr": "GSK" },
    { "vaccine": "Tdap", "date": "08/2022", "site": "Left deltoid IM", "lot": "TD22-540", "mfr": "GSK" }
  ],
  "familyHistory": [
    "Father: Gastric cancer at age 68, deceased at 70 (born in Japan)",
    "Mother: Hypertension, T2DM, deceased at 88 (stroke)",
    "Brother: H. pylori gastritis (treated), alive at 71",
    "Sister: Healthy, alive at 69"
  ],
  "socialHistory": [
    ["Occupation", "Retired electrical engineer; retired 2016"],
    ["Marital", "Married 48 years"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Occasional sake — 1-2 times per month"],
    ["Drugs", "Denies"],
    ["Exercise", "Daily walks with wife (30 min); tai chi 2x/week — recently reduced due to fatigue"],
    ["Housing", "Condominium with wife; single-level"],
    ["Safety", "Denies IPV; seatbelt; no firearms"],
    ["Advance Directive", "Living will signed; Full code; DPOA designated (wife Yuki)"]
  ],
  "meta": {
    "caseId": "gastric-malignancy",
    "diagnosis": "Gastric Adenocarcinoma (Presenting as Syncope from Chronic Occult GI Hemorrhage — Iron-Refractory IDA with Weight Loss, History of H. pylori Atrophic Gastritis with Intestinal Metaplasia)",
    "acuity": 2,
    "presentation": "Syncope",
    "category": "gastrointestinal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Hideo Tanaka is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did syncope start?",
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
        "default": "He pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started I've been losing weight without trying over the past few months and I just feel .'",
        "character": "'It's syncope \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Gastric Adenocarcinoma.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Losartan 50mg daily; Hydrochlorothiazide 12.5mg daily; Metformin 500mg BID; Ferrous Sulfate 325mg BID; Tamsulosin 0.4mg QHS.'",
        "allergies": "'My allergies are Metoclopramide.'",
        "family": "Father: Gastric cancer at age 68, deceased at 70 (born in Japan)  Mother: Hypertension, T2DM, deceased at 88 (stroke)  Brother: H. pylori gastritis (treated), alive at 71",
        "social": "Occupation: Retired electrical engineer; retired 2016  Marital: Married 48 years  Tobacco: Never smoker  Alcohol: Occasional sake \u2014 1-2 times per month  Drugs: Denies"
    },
    "examManeuvers": [
        "General appearance",
        "Vital signs",
        "Abdominal inspection",
        "Abdominal auscultation",
        "Abdominal palpation light and deep",
        "Rebound and guarding assessment",
        "Rectal examination if indicated",
        "Skin for jaundice or stigmata"
    ],
    "examFindings": {
        "General appearance": "Clinical finding consistent with Gastric Adenocarcinoma. Document specifically what you observe.",
        "Vital signs": "Clinical finding consistent with Gastric Adenocarcinoma. Document specifically what you observe.",
        "Abdominal inspection": "Clinical finding consistent with Gastric Adenocarcinoma. Document specifically what you observe.",
        "Abdominal auscultation": "Clinical finding consistent with Gastric Adenocarcinoma. Document specifically what you observe.",
        "Abdominal palpation light and deep": "Clinical finding consistent with Gastric Adenocarcinoma. Document specifically what you observe.",
        "Rebound and guarding assessment": "Clinical finding consistent with Gastric Adenocarcinoma. Document specifically what you observe.",
        "Rectal examination if indicated": "Clinical finding consistent with Gastric Adenocarcinoma. Document specifically what you observe.",
        "Skin for jaundice or stigmata": "Clinical finding consistent with Gastric Adenocarcinoma. Document specifically what you observe."
    },
    "ddxTargets": [
        "Gastric Adenocarcinoma (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Gastric Adenocarcinoma, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Gastric Adenocarcinoma, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Gastric Adenocarcinoma based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Hideo Tanaka's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Gastric Adenocarcinoma (Presenting as Syncope from Chronic Occult GI Hemorrhage \u2014 Iron-Refractory IDA with Weight Loss, History of H. pylori Atrophic Gastritis with Intestinal Metaplasia). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
