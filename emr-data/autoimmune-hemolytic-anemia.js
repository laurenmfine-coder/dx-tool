
window.EMR_DATA = {
  "patient": {
    "name": "Nadine Toussaint",
    "dob": "07/22/1975",
    "age": 49,
    "sex": "Female",
    "mrn": "RDX-2025-31647",
    "pronouns": "She/Her",
    "insurance": "Cigna HMO",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Publix Pharmacy — 951 S State Rd 7, Plantation, FL",
    "language": "English, Haitian Creole",
    "race": "Black/African American",
    "address": "1820 NW 62nd Ave, Sunrise, FL 33313",
    "phone": "(954) 555-7428",
    "email": "n.toussaint75@email.com",
    "emergencyContact": {
      "name": "Jacques Toussaint (Husband)",
      "phone": "(954) 555-7445"
    }
  },
  "problems": [
    {
      "problem": "Chronic Lymphocytic Leukemia — Rai Stage I",
      "icd": "C91.10",
      "onset": "2022",
      "status": "Active",
      "notes": "Diagnosed incidentally on routine CBC; lymphocytosis and lymphadenopathy; watch-and-wait per hematology-oncology; no treatment initiated"
    },
    {
      "problem": "Hypothyroidism",
      "icd": "E03.9",
      "onset": "2016",
      "status": "Active",
      "notes": "Autoimmune (Hashimoto); on levothyroxine; TSH at goal"
    },
    {
      "problem": "Osteopenia",
      "icd": "M81.0",
      "onset": "2023",
      "status": "Active",
      "notes": "DEXA T-score -1.8 lumbar spine; on calcium and vitamin D"
    },
    {
      "problem": "Gastroesophageal Reflux Disease",
      "icd": "K21.0",
      "onset": "2019",
      "status": "Active",
      "notes": "Controlled with omeprazole"
    }
  ],
  "medications": [
    {
      "name": "Levothyroxine 75mcg daily",
      "sig": "Take 1 tablet by mouth daily on empty stomach, 30-60 minutes before breakfast",
      "prescriber": "Dr. Chen",
      "start": "09/2016",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth daily 30 minutes before breakfast",
      "prescriber": "Dr. Chen",
      "start": "06/2019",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Calcium Carbonate 600mg with Vitamin D 400 IU BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Chen",
      "start": "01/2024",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Aspirin",
      "type": "Drug",
      "reaction": "Bronchospasm",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Shellfish",
      "type": "Food",
      "reaction": "Urticaria",
      "severity": "Moderate",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "12/18/2024",
      "bp": "136/82",
      "hr": 104,
      "rr": 20,
      "temp": "99.4°F",
      "spo2": "96%",
      "wt": "162 lbs",
      "ht": "5'6\"",
      "bmi": 26.1,
      "setting": "PCP Office"
    },
    {
      "date": "08/14/2024",
      "bp": "126/78",
      "hr": 76,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "160 lbs",
      "ht": "5'6\"",
      "bmi": 25.8,
      "setting": "PCP Office"
    },
    {
      "date": "02/20/2024",
      "bp": "128/80",
      "hr": 72,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "98%",
      "wt": "158 lbs",
      "ht": "5'6\"",
      "bmi": 25.5,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Robert Chen, MD",
      "cc": "Progressive fatigue, pallor, dark urine x 1 week",
      "hpi": "49-year-old female with CLL (watch-and-wait) presents with 1 week of progressive fatigue, exertional dyspnea, and dizziness. Husband noticed pallor and yellowing of eyes 3 days ago. Reports dark brown urine. No bleeding, melena, or hematochezia. No fever, chills, or weight loss. No recent infections or new medications. CLL last evaluated 3 months ago — stable lymphocytosis. Denies recent cold exposure (cold agglutinin screen).",
      "exam": "General: Pale, mildly icteric female, tachycardic. HEENT: Scleral icterus bilaterally, pale conjunctivae. Neck: Bilateral non-tender cervical lymphadenopathy (1-2 cm, mobile, rubbery — chronic/known). CV: Tachycardic, RRR, II/VI systolic flow murmur. Lungs: CTAB. Abdomen: Spleen palpable 3 cm below left costal margin. Liver edge at costal margin. Extremities: No edema, no petechiae.",
      "assessment": "1. Acute symptomatic anemia with jaundice — high suspicion for autoimmune hemolytic anemia (warm AIHA), likely CLL-associated\n2. CLL — Rai Stage I, previously stable; AIHA is known complication\n3. Need emergent workup: DAT, reticulocyte count, LDH, haptoglobin, bilirubin, peripheral smear",
      "plan": "1. STAT labs drawn in office (CBC, retic, LDH, haptoglobin, total/direct bilirubin, DAT, peripheral smear)\n2. Refer to ED for possible transfusion if Hgb critically low\n3. Contact hematology-oncology (Dr. Patel) for urgent co-management\n4. Anticipate starting corticosteroids (prednisone 1mg/kg) if AIHA confirmed\n5. Type and screen — note: DAT-positive may complicate crossmatch"
    },
    {
      "id": "V002",
      "date": "08/14/2024",
      "type": "Primary Care",
      "provider": "Dr. Robert Chen, MD",
      "cc": "Follow-up: CLL, hypothyroidism",
      "hpi": "49-year-old female for routine follow-up. CLL stable — last CBC showed WBC 18,000 with lymphocyte predominance, Hgb 13.0. No B symptoms. Hypothyroidism well-controlled. GERD managed. No new complaints.",
      "exam": "General: NAD, well-appearing. Neck: Small bilateral cervical nodes, stable. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Spleen tip just palpable. Skin: No petechiae.",
      "assessment": "1. CLL — stable, no treatment indications\n2. Hypothyroidism — TSH at goal\n3. Osteopenia — on calcium/vitamin D",
      "plan": "1. Continue watch-and-wait for CLL; hematology follow-up Q6 months\n2. Continue levothyroxine\n3. Recheck CBC in 3 months\n4. RTC 3-4 months"
    }
  ],
  "labs": [
    {
      "date": "08/14/2024",
      "time": "08:30",
      "orderedBy": "Dr. Robert Chen, MD",
      "collected": "08/14/2024 08:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-081418",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "18.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Lymphocytes", "value": "78", "unit": "%", "range": "20-40", "flag": "H" },
            { "test": "ALC", "value": "14.2", "unit": "x10³/µL", "range": "1.0-4.8", "flag": "H" },
            { "test": "Hemoglobin", "value": "13.0", "unit": "g/dL", "range": "12.0-16.0", "flag": "" },
            { "test": "Hematocrit", "value": "38.8", "unit": "%", "range": "36.0-46.0", "flag": "" },
            { "test": "Platelet Count", "value": "185", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "THYROID FUNCTION",
          "results": [
            { "test": "TSH", "value": "2.4", "unit": "mIU/L", "range": "0.4-4.0", "flag": "" },
            { "test": "Free T4", "value": "1.2", "unit": "ng/dL", "range": "0.8-1.8", "flag": "" }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "90", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.8", "unit": "mg/dL", "range": "0.6-1.1", "flag": "" },
            { "test": "Total Bilirubin", "value": "0.8", "unit": "mg/dL", "range": "0.1-1.2", "flag": "" },
            { "test": "ALT (SGPT)", "value": "22", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "26", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "LDH", "value": "195", "unit": "U/L", "range": "140-280", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/20/2024",
      "study": "CT CHEST ABDOMEN PELVIS WITH CONTRAST",
      "accession": "IMG-2024-02201",
      "status": "FINAL",
      "orderedBy": "Dr. Priya Patel, MD (Hematology)",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "49F CLL staging — evaluate lymphadenopathy and organomegaly.",
      "technique": "CT chest, abdomen, and pelvis with IV contrast.",
      "findings": "Chest: Bilateral axillary lymphadenopathy (largest 1.5 cm). No mediastinal or hilar adenopathy. Lungs clear. Heart normal size.\\n\\nAbdomen: Spleen mildly enlarged at 13.5 cm. Liver normal size and attenuation. No mesenteric or retroperitoneal adenopathy >1 cm. Kidneys unremarkable.\\n\\nPelvis: Bilateral inguinal lymphadenopathy (largest 1.2 cm). No pelvic mass.",
      "impression": "1. Mild splenomegaly.\\n2. Scattered bilateral axillary and inguinal lymphadenopathy — consistent with known CLL.\\n3. No bulky disease or high tumor burden by imaging.",
      "dictated": "02/20/2024 13:15",
      "verified": "02/20/2024 15:40"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-271",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/28/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-682",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "04/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-114",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Breast cancer at 62, alive at 76",
    "Father: CLL diagnosed at 70, deceased at 78",
    "Sister: Hashimoto thyroiditis, age 45",
    "Brother: Healthy, age 52"
  ],
  "socialHistory": [
    ["Occupation", "Elementary school teacher"],
    ["Marital", "Married, 2 children (ages 18 and 15)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Occasional wine, 1-2/week"],
    ["Drugs", "Denies"],
    ["Exercise", "Walking 3x/week, 30 minutes"],
    ["Housing", "Lives with husband and children in single-family home"],
    ["Safety", "Denies IPV; seatbelt"],
    ["Advance Directive", "None on file — discussed"]
  ],
  "meta": {
    "caseId": "autoimmune-hemolytic-anemia",
    "diagnosis": "Warm Autoimmune Hemolytic Anemia (CLL-Associated)",
    "acuity": 2,
    "presentation": "Hematologic Emergency",
    "category": "hematologic"
  },
    "examManeuvers": [
        "General appearance and pallor",
        "Vital signs",
        "Skin for pallor, jaundice, petechiae, or purpura",
        "Lymph node assessment",
        "Spleen palpation",
        "Liver assessment",
        "Cardiovascular auscultation",
        "Neurological assessment"
    ],
    "examFindings": {
        "General appearance and pallor": "Clinical finding consistent with Warm Autoimmune Hemolytic Anemia. Document specifically what you observe.",
        "Vital signs": "Clinical finding consistent with Warm Autoimmune Hemolytic Anemia. Document specifically what you observe.",
        "Skin for pallor, jaundice, petechiae, or purpura": "Clinical finding consistent with Warm Autoimmune Hemolytic Anemia. Document specifically what you observe.",
        "Lymph node assessment": "Clinical finding consistent with Warm Autoimmune Hemolytic Anemia. Document specifically what you observe.",
        "Spleen palpation": "Clinical finding consistent with Warm Autoimmune Hemolytic Anemia. Document specifically what you observe.",
        "Liver assessment": "Clinical finding consistent with Warm Autoimmune Hemolytic Anemia. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Warm Autoimmune Hemolytic Anemia. Document specifically what you observe.",
        "Neurological assessment": "Clinical finding consistent with Warm Autoimmune Hemolytic Anemia. Document specifically what you observe."
    },
    "ddxTargets": [
        "Warm Autoimmune Hemolytic Anemia (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Warm Autoimmune Hemolytic Anemia, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Warm Autoimmune Hemolytic Anemia, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Warm Autoimmune Hemolytic Anemia based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Nadine Toussaint's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Warm Autoimmune Hemolytic Anemia (CLL-Associated). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Nadine appears anxious and fatigued, speaking in short phrases due to mild dyspnea. She is cooperative but worried about her worsening symptoms, particularly given her known CLL diagnosis. She maintains good eye contact despite obvious pallor and appears relieved to be seeking medical attention.",
    "interviewQuestions": [
        "Can you describe when your fatigue and shortness of breath first started?",
        "Have you noticed any changes in your urine color recently?",
        "Has anyone commented on changes in your skin or eye color?",
        "Are you experiencing any chest pain or heart palpitations?",
        "Have you had any fevers, chills, or night sweats?",
        "Any abdominal pain or feeling of fullness?",
        "Have you noticed any unusual bruising or bleeding?",
        "When was your last visit with your hematologist for your CLL?",
        "Have you started any new medications or supplements recently?",
        "Any recent infections or illnesses?",
        "Are you having any nausea, vomiting, or loss of appetite?",
        "Have you experienced similar episodes in the past?",
        "What medications are you currently taking?"
    ],
    "patientResponses": {
        "default": "I'm not sure I understand what you're asking. Could you rephrase that? I'm feeling pretty tired right now.",
        "onset": "The fatigue started gradually about a week ago, but it's gotten much worse over the past 3-4 days. The shortness of breath started when I was climbing stairs at school about 3 days ago.",
        "character": "It's an overwhelming exhaustion, like I've never felt before. Even simple tasks like getting dressed leave me breathless and my heart racing.",
        "location": "The fatigue is all over my body, and I feel the shortness of breath mainly when I try to do anything physical, even walking across a room.",
        "severity": "I'd say the fatigue is about an 8 out of 10. I had to call in sick to work yesterday because I couldn't even get out of bed properly.",
        "aggravating": "Any physical activity makes the shortness of breath and fatigue much worse. Even talking for too long makes me feel winded.",
        "relieving": "Rest helps a little, but even when I'm sitting still, I don't feel normal. Nothing really makes it go away completely.",
        "associated": "My husband noticed my eyes look yellow starting about 3 days ago, and my urine has been very dark brown, almost like cola. I've also been feeling dizzy when I stand up.",
        "denies": "No chest pain, no bleeding that I've noticed, no unusual bruising. No nausea or vomiting, though my appetite has been poor.",
        "history": "I've never had anything like this before. My CLL has been stable on watch-and-wait since diagnosis 2 years ago.",
        "medications": "Levothyroxine 75mcg daily; Omeprazole 20mg daily; Calcium Carbonate 600mg with Vitamin D 400 IU BID",
        "allergies": "Aspirin, Shellfish",
        "family": "My father had CLL too, diagnosed at 70. My mother had breast cancer. My sister has thyroid problems like me.",
        "social": "I'm an elementary school teacher, married with two teenagers. I don't smoke, maybe have a glass of wine once or twice a week. No drugs."
    },
    "examManeuvers": [
        "General appearance and pallor assessment",
        "Scleral icterus examination",
        "Cardiovascular examination including heart rate and murmurs",
        "Pulmonary examination",
        "Abdominal examination for splenomegaly",
        "Lymph node examination",
        "Skin examination for jaundice and petechiae",
        "Orthostatic vital signs",
        "Conjunctival pallor assessment"
    ],
    "examFindings": {
        "General appearance and pallor assessment": "Patient appears fatigued and notably pale, with pale nail beds and palm creases",
        "Scleral icterus examination": "Mild scleral icterus present bilaterally",
        "Cardiovascular examination including heart rate and murmurs": "Tachycardia at 104 bpm, grade 2/6 systolic flow murmur at LLSB, regular rhythm",
        "Pulmonary examination": "Clear to auscultation bilaterally, mild tachypnea at rest",
        "Abdominal examination for splenomegaly": "Mild splenomegaly palpable 2 cm below left costal margin, non-tender",
        "Lymph node examination": "Small, mobile, non-tender lymphadenopathy in cervical and axillary regions consistent with known CLL",
        "Skin examination for jaundice and petechiae": "Mild jaundice noted, no petechiae or purpura observed",
        "Orthostatic vital signs": "Mild orthostatic changes: lying 136/82 HR 104, standing 142/88 HR 118",
        "Conjunctival pallor assessment": "Marked conjunctival pallor present"
    },
    "ddxTargets": [
        "Warm Autoimmune Hemolytic Anemia (CLL-Associated) (correct diagnosis)",
        "CLL progression with cytopenias",
        "Drug-induced hemolytic anemia",
        "Acute leukemia transformation",
        "Sepsis with hemolysis",
        "Iron deficiency anemia with concurrent illness",
        "Viral syndrome with anemia of chronic disease"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on known CLL diagnosis and assuming all symptoms are due to disease progression rather than considering secondary autoimmune complications",
        "prematureClosure": "May stop diagnostic workup after identifying anemia without recognizing the hemolytic component and autoimmune etiology",
        "availabilityBias": "Recent cases of simple anemia or viral illnesses may overshadow the classic presentation of hemolytic anemia with jaundice and dark urine"
    },
    "coachPrompts": {
        "phase2": "Good start on your differential. I notice you've identified several causes of anemia and fatigue. Given this patient's presentation of fatigue, dyspnea, and the husband's observation about eye color changes, what specific questions might help you distinguish between different types of anemia? What would you want to know about her urine?",
        "phase5": "Excellent history and physical exam. You've identified key findings including pallor, scleral icterus, splenomegaly, and the patient's report of dark urine. How do these findings help narrow your differential? What type of anemia typically presents with this constellation of findings, and why might this patient with CLL be particularly susceptible?",
        "finalDebrief": "This case illustrates warm autoimmune hemolytic anemia secondary to CLL - a classic but serious complication. The key was recognizing the hemolytic picture: anemia + jaundice + dark urine + splenomegaly. CLL patients have a 5-10% risk of developing AIHA due to immune dysregulation. How did your thinking evolve from considering simple anemia to recognizing the hemolytic component? What clinical clues were most important in making this distinction?"
    }
}
};