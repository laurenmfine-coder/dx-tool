// Virtual EMR Case: DIC from Trauma/Surgery with Hemorrhagic Complications
// Variant: dic-from-traumasurgery-with-hemorrhagic | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Derek Robinson",
  "patientHPI": "I was riding my motorcycle when an SUV hit me, and I remember flying through the air before everything went black for a moment. My right leg is in terrible pain and I could see bone sticking out with a lot of blood, but the paramedics put something tight around my leg to stop the bleeding. I'm scared about what this means for my leg and whether I'll be able to walk normally again.",
    "dob": "10/30/1982",
    "age": 42,
    "sex": "Male",
    "mrn": "RDX-2025-67034",
    "pronouns": "He/Him",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Amanda Torres, MD",
    "pharmacy": "Walgreens — 5601 W Broward Blvd, Plantation, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "3979 Oak Ave, Birmingham, AL 35210",
    "phone": "(954) 555-3190",
    "email": "d.robinson82@email.com",
    "emergencyContact": {
      "name": "Shanice Robinson (Wife)",
      "phone": "(954) 555-3210"
    }
  },
  "problems": [
    {
      "problem": "Right Tibial Plateau Fracture — Schatzker Type V",
      "icd": "S82.101A",
      "onset": "2025",
      "status": "Active",
      "notes": "High-energy injury from motorcycle collision 01/28/2025; ORIF performed 01/29/2025"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2018",
      "status": "Active",
      "notes": "Controlled on lisinopril"
    },
    {
      "problem": "Obesity, Class I",
      "icd": "E66.01",
      "onset": "2019",
      "status": "Active",
      "notes": "BMI 32"
    },
    {
      "problem": "Sickle Cell Trait",
      "icd": "D57.3",
      "onset": "1982",
      "status": "Active",
      "notes": "Carrier; no sickle cell disease; documented on prior anesthetic records"
    }
  ],
  "medications": [
    {
      "name": "Lisinopril 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Torres",
      "start": "06/2018",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Ibuprofen 600mg TID PRN",
      "sig": "Take 1 tablet by mouth three times daily as needed for pain with food",
      "prescriber": "Dr. Torres",
      "start": "03/2023",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Multivitamin daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Torres",
      "start": "01/2020",
      "refills": 5,
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
      "date": "01/28/2025",
      "bp": "98/62",
      "hr": 118,
      "rr": 22,
      "temp": "97.8°F",
      "spo2": "95%",
      "wt": "220 lbs",
      "ht": "5'11\"",
      "bmi": 30.7,
      "setting": "ED"
    },
    {
      "date": "09/15/2024",
      "bp": "134/84",
      "hr": 76,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "225 lbs",
      "ht": "5'11\"",
      "bmi": 31.4,
      "setting": "PCP Office"
    },
    {
      "date": "03/10/2024",
      "bp": "130/82",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "222 lbs",
      "ht": "5'11\"",
      "bmi": 31.0,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/28/2025",
      "type": "ED",
      "provider": "Dr. Marcus Johnson, MD",
      "cc": "Motorcycle collision — right leg injury, significant hemorrhage",
      "hpi": "42-year-old male brought by EMS after motorcycle vs. SUV collision at approximately 35 mph. Patient was helmeted. Primary impact to right lower extremity. On scene: right leg deformity with open wound over proximal tibia, significant hemorrhage controlled with tourniquet. GCS 15 on arrival. C-collar in place. Reports severe right leg pain. Denies LOC, headache, neck pain, abdominal pain, or chest pain. Estimated blood loss on scene 800-1000 mL.",
      "exam": "Primary survey: A — patent, speaking full sentences. B — bilateral breath sounds, no crepitus. C — tachycardic, hypotensive, 2 large-bore IVs, tourniquet right leg. D — GCS 15, pupils equal and reactive. E — right tibial plateau open fracture with skin laceration, moderate ongoing hemorrhage. Secondary survey: Head/neck: No midline cervical tenderness. Chest: No rib tenderness. Abdomen: Soft, non-tender. Pelvis: Stable on compression. Right leg: Gross deformity, open wound 8 cm with visible bone. DP pulse dopplerable, decreased sensation lateral leg. Left extremities: No injury.",
      "assessment": "1. Open right tibial plateau fracture — Gustilo type IIIA, Schatzker type V\n2. Hemorrhagic shock — Class II-III, EBL ~1 liter\n3. Risk for DIC given traumatic mechanism and hemorrhage\n4. Sickle cell trait — noted for anesthetic planning",
      "plan": "1. Massive transfusion protocol — 2 units pRBC, 1 unit FFP, 1 platelet pack initiated\n2. TXA 1g IV\n3. Tetanus booster\n4. Cefazolin 2g IV + gentamicin 5mg/kg for open fracture\n5. Ortho trauma consult — ORIF scheduled for tomorrow AM\n6. CT right lower extremity with angiography to assess vascular injury\n7. Serial labs: CBC, coags, fibrinogen, lactate Q4h\n8. ICU admission for hemorrhage monitoring"
    },
    {
      "id": "V002",
      "date": "09/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Amanda Torres, MD",
      "cc": "Annual wellness exam",
      "hpi": "42-year-old male for annual exam. No acute complaints. HTN controlled. Exercises intermittently. Reports motorcycle riding as hobby — wears helmet. No hospitalizations. Sickle cell trait carrier — documented, no complications.",
      "exam": "General: NAD, well-appearing obese male. HEENT: WNL. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, obese, NT. Extremities: No edema. Neuro: A&O x3.",
      "assessment": "1. Annual wellness exam\n2. HTN — controlled\n3. Obesity — counseled\n4. Sickle cell trait — stable carrier",
      "plan": "1. Continue lisinopril\n2. Weight management counseling\n3. Labs: CMP, CBC, lipid panel\n4. RTC 1 year or PRN"
    }
  ],
  "labs": [
    {
      "date": "01/28/2025",
      "time": "19:30",
      "orderedBy": "Dr. Marcus Johnson, MD",
      "collected": "01/28/2025 19:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-012830",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA, Citrate)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "16.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Hemoglobin", "value": "9.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "L" },
            { "test": "Hematocrit", "value": "27.6", "unit": "%", "range": "38.3-48.6", "flag": "L" },
            { "test": "Platelet Count", "value": "112", "unit": "x10³/µL", "range": "150-400", "flag": "L" }
          ]
        },
        {
          "name": "COAGULATION PANEL",
          "results": [
            { "test": "PT", "value": "16.2", "unit": "seconds", "range": "11.0-13.5", "flag": "H" },
            { "test": "INR", "value": "1.4", "unit": "", "range": "0.8-1.1", "flag": "H" },
            { "test": "aPTT", "value": "42", "unit": "seconds", "range": "25-35", "flag": "H" },
            { "test": "Fibrinogen", "value": "148", "unit": "mg/dL", "range": "200-400", "flag": "L" },
            { "test": "D-Dimer", "value": "8.4", "unit": "µg/mL FEU", "range": "<0.5", "flag": "H" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "142", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "24", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.4", "unit": "mg/dL", "range": "0.7-1.3", "flag": "H" },
            { "test": "Potassium", "value": "5.1", "unit": "mEq/L", "range": "3.5-5.0", "flag": "H" },
            { "test": "Lactate", "value": "4.8", "unit": "mmol/L", "range": "0.5-2.0", "flag": "H" }
          ]
        },
        {
          "name": "HEMOLYSIS MARKERS",
          "results": [
            { "test": "LDH", "value": "420", "unit": "U/L", "range": "140-280", "flag": "H" },
            { "test": "Haptoglobin", "value": "18", "unit": "mg/dL", "range": "30-200", "flag": "L" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/28/2025",
      "study": "CT RIGHT LOWER EXTREMITY WITH ANGIOGRAPHY",
      "accession": "IMG-2025-01281",
      "status": "FINAL",
      "orderedBy": "Dr. Marcus Johnson, MD",
      "readBy": "Dr. Lisa Moreno, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "42M MVC, open right tibial plateau fracture, assess for vascular injury.",
      "technique": "CT right lower extremity with CT angiography runoff.",
      "findings": "Fracture: Comminuted tibial plateau fracture involving both medial and lateral plateaus with articular depression (Schatzker type V). Fracture fragments displaced 6 mm. Associated proximal fibula fracture.\\n\\nSoft tissue: Extensive soft tissue swelling and hemorrhage. Open wound defect noted anterolaterally.\\n\\nVascular: Popliteal artery patent with normal caliber. Anterior tibial, posterior tibial, and peroneal arteries patent to level of ankle. No active extravasation or pseudoaneurysm.\\n\\nCompartments: Anterior and lateral compartments appear enlarged — clinical correlation for compartment syndrome recommended.",
      "impression": "1. Comminuted open tibial plateau fracture, Schatzker type V, with lateral plateau depression and proximal fibula fracture.\\n2. No vascular injury — patent three-vessel runoff.\\n3. Soft tissue swelling concerning for evolving compartment syndrome — recommend serial compartment pressure checks.",
      "dictated": "01/28/2025 20:15",
      "verified": "01/28/2025 20:48"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/15/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-310",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "11/05/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-715",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "Td (Tetanus booster)",
      "date": "01/28/2025",
      "site": "Left deltoid IM",
      "lot": "TD25-004",
      "mfr": "Sanofi Pasteur"
    }
  ],
  "familyHistory": [
    "Mother: HTN, T2DM, alive at 66",
    "Father: Sickle cell trait carrier, HTN, alive at 68",
    "Brother: Healthy, age 38",
    "Paternal uncle: DVT at age 50"
  ],
  "socialHistory": [
    ["Occupation", "Electrician"],
    ["Marital", "Married, 2 children (ages 10 and 7)"],
    ["Tobacco", "Former smoker — 5 pack-years; quit 2019"],
    ["Alcohol", "Social, 2-3 beers on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Gym 2x/week; recreational motorcycle riding"],
    ["Housing", "Lives with wife and children in single-family home"],
    ["Safety", "Wears helmet for motorcycle; seatbelt in car"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "dic-from-traumasurgery-with-hemorrhagic",
    "diagnosis": "Disseminated Intravascular Coagulation (Trauma-Induced with Hemorrhagic Complications)",
    "acuity": 1,
    "presentation": "Hematologic Emergency",
    "category": "hematologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Derek Robinson appears critically ill and in severe distress. They are cooperative but answers are brief due to pain or respiratory compromise. Family members may be at bedside providing additional history.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did hematologic emergency start?",
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
        "onset": "'The symptoms started I was riding my motorcycle when an SUV hit me, and I remember flying through the.'",
        "character": "'It's hematologic emergency \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Disseminated Intravascular Coagulation.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Lisinopril 10mg daily; Ibuprofen 600mg TID PRN; Multivitamin daily.'",
        "allergies": "'My allergies are NKDA.'",
        "family": "Mother: HTN, T2DM, alive at 66  Father: Sickle cell trait carrier, HTN, alive at 68  Brother: Healthy, age 38",
        "social": "Occupation: Electrician  Marital: Married, 2 children (ages 10 and 7)  Tobacco: Former smoker \u2014 5 pack-years; quit 2019  Alcohol: Social, 2-3 beers on weekends  Drugs: Denies"
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
        "General appearance and pallor": "Clinical finding consistent with Disseminated Intravascular Coagulation. Document specifically what you observe.",
        "Vital signs": "Clinical finding consistent with Disseminated Intravascular Coagulation. Document specifically what you observe.",
        "Skin for pallor, jaundice, petechiae, or purpura": "Clinical finding consistent with Disseminated Intravascular Coagulation. Document specifically what you observe.",
        "Lymph node assessment": "Clinical finding consistent with Disseminated Intravascular Coagulation. Document specifically what you observe.",
        "Spleen palpation": "Clinical finding consistent with Disseminated Intravascular Coagulation. Document specifically what you observe.",
        "Liver assessment": "Clinical finding consistent with Disseminated Intravascular Coagulation. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Disseminated Intravascular Coagulation. Document specifically what you observe.",
        "Neurological assessment": "Clinical finding consistent with Disseminated Intravascular Coagulation. Document specifically what you observe."
    },
    "ddxTargets": [
        "Disseminated Intravascular Coagulation (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Disseminated Intravascular Coagulation, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Disseminated Intravascular Coagulation, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Disseminated Intravascular Coagulation based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Derek Robinson's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Disseminated Intravascular Coagulation (Trauma-Induced with Hemorrhagic Complications). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
