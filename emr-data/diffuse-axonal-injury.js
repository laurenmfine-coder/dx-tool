// Virtual EMR Case: Diffuse Axonal Injury
// Variant: diffuse-axonal-injury | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Tyler Nguyen",
  "patientHPI": "I've been taking my ADHD medication for a while now and it's been working great for school - I can focus in class and my grades are good. I play soccer with friends and feel pretty healthy overall, though I did hit my head pretty hard during a game last week and felt a bit foggy afterward.",
    "dob": "06/08/2003",
    "age": 21,
    "sex": "Male",
    "mrn": "RDX-2025-84203",
    "pronouns": "He/Him",
    "insurance": "Aetna (Parent Plan)",
    "pcp": "Dr. Robert Kim, MD",
    "pharmacy": "Publix Pharmacy — 801 S University Dr, Plantation, FL",
    "language": "English",
    "race": "Asian",
    "address": "841 Sycamore Dr, Birmingham, AL 35210",
    "phone": "(954) 555-2218",
    "email": "t.nguyen03@email.com",
    "emergencyContact": {
      "name": "Linh Nguyen (Mother)",
      "phone": "(954) 555-2230"
    }
  },
  "problems": [
    {
      "problem": "Attention-Deficit/Hyperactivity Disorder",
      "icd": "F90.0",
      "onset": "2012",
      "status": "Active",
      "notes": "Diagnosed in childhood; managed with medication"
    },
    {
      "problem": "Seasonal Allergic Rhinitis",
      "icd": "J30.2",
      "onset": "2016",
      "status": "Active",
      "notes": "Spring and fall seasons"
    },
    {
      "problem": "Concussion, resolved",
      "icd": "S06.0X0A",
      "onset": "2021",
      "status": "Resolved",
      "notes": "Sports-related concussion (soccer); full recovery at 3 weeks"
    }
  ],
  "medications": [
    {
      "name": "Adderall XR 20mg daily",
      "sig": "Take 1 capsule by mouth every morning",
      "prescriber": "Dr. Kim",
      "start": "08/2018",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Fluticasone nasal spray 50mcg 2 sprays each nostril daily",
      "sig": "2 sprays in each nostril once daily during allergy season",
      "prescriber": "Dr. Kim",
      "start": "03/2020",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Amoxicillin",
      "type": "Drug",
      "reaction": "Maculopapular rash",
      "severity": "Mild",
      "verified": "Patient-reported"
    },
    {
      "allergen": "Tree pollen",
      "type": "Environmental",
      "reaction": "Rhinorrhea, sneezing, congestion",
      "severity": "Mild",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "08/22/2024",
      "bp": "118/72",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "165 lbs",
      "ht": "5'10\"",
      "bmi": 23.7,
      "setting": "PCP Office"
    },
    {
      "date": "02/14/2024",
      "bp": "116/70",
      "hr": 72,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "162 lbs",
      "ht": "5'10\"",
      "bmi": 23.2,
      "setting": "PCP Office"
    },
    {
      "date": "08/10/2023",
      "bp": "114/68",
      "hr": 66,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "99%",
      "wt": "160 lbs",
      "ht": "5'10\"",
      "bmi": 23.0,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "08/22/2024",
      "type": "Primary Care",
      "provider": "Dr. Robert Kim, MD",
      "cc": "ADHD medication refill and annual checkup",
      "hpi": "21-year-old male college student presenting for ADHD medication management and routine checkup. Reports Adderall XR 20mg continues to be effective for focus. Denies side effects including palpitations, insomnia, or appetite suppression. Doing well academically. Plays intramural soccer. Occasional alcohol use on weekends.",
      "exam": "General: Well-appearing young male in NAD. HEENT: PERRL, EOMI, oropharynx clear. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT/ND. Neuro: A&O x3, normal gait, no focal deficits.",
      "assessment": "1. ADHD — well controlled on current regimen\n2. Routine wellness — healthy young male",
      "plan": "1. Continue Adderall XR 20mg daily; 3-month prescriptions with follow-up\n2. Anticipatory guidance: alcohol, drug safety, safe driving\n3. RTC 6 months or PRN"
    },
    {
      "id": "V002",
      "date": "02/14/2024",
      "type": "Primary Care",
      "provider": "Dr. Robert Kim, MD",
      "cc": "ADHD follow-up",
      "hpi": "21-year-old male for routine ADHD medication check. No concerns. Tolerating medication well. Reports improved study habits. Denies mood changes, sleep disturbance.",
      "exam": "General: NAD. Vitals: WNL. CV: RRR. Neuro: A&O x3.",
      "assessment": "1. ADHD — stable",
      "plan": "1. Continue Adderall XR 20mg\n2. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "08/22/2024",
      "time": "10:00",
      "orderedBy": "Dr. Robert Kim, MD",
      "collected": "08/22/2024 09:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-082245",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "92", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "12", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.9", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "141", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.0", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "103", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "26", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "Calcium", "value": "9.8", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "6.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "15.6", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "46.2", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "230", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/01/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-267",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "09/20/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-843",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "HPV (Gardasil 9) — series complete",
      "date": "2017",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2017",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "Meningococcal ACWY (Menactra)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    }
  ],
  "familyHistory": [
    "Father: Hypertension, alive at 52",
    "Mother: Migraine headaches, alive at 49",
    "Sister: ADHD, age 18",
    "Maternal grandmother: Stroke at age 74"
  ],
  "socialHistory": [
    ["Occupation", "College student (Junior)"],
    ["Marital", "Single"],
    ["Tobacco", "Occasional vaping; denies cigarettes"],
    ["Alcohol", "Social — weekends only, 3-4 drinks"],
    ["Drugs", "Occasional marijuana"],
    ["Exercise", "Intramural soccer 2x/week; gym 3x/week"],
    ["Housing", "Off-campus apartment with roommates"],
    ["Safety", "Denies IPV; wears seatbelt"],
    ["Advance Directive", "None — not discussed"]
  ],
  "meta": {
    "caseId": "diffuse-axonal-injury",
    "diagnosis": "Diffuse Axonal Injury",
    "acuity": 1,
    "presentation": "Trauma",
    "category": "trauma"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Tyler Nguyen appears critically ill and in severe distress. They are cooperative but answers are brief due to pain or respiratory compromise. Family members may be at bedside providing additional history.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did trauma start?",
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
        "onset": "'The symptoms started I've been taking my ADHD medication for a while now and it's been working great .'",
        "character": "'It's trauma \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Diffuse Axonal Injury.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Adderall XR 20mg daily; Fluticasone nasal spray 50mcg 2 sprays each nostril daily.'",
        "allergies": "'My allergies are Amoxicillin, Tree pollen.'",
        "family": "Father: Hypertension, alive at 52  Mother: Migraine headaches, alive at 49  Sister: ADHD, age 18",
        "social": "Occupation: College student (Junior)  Marital: Single  Tobacco: Occasional vaping; denies cigarettes  Alcohol: Social \u2014 weekends only, 3-4 drinks  Drugs: Occasional marijuana"
    },
    "examManeuvers": [
        "General appearance and level of distress",
        "Vital signs review",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted system examination"
    ],
    "examFindings": {
        "General appearance and level of distress": "Clinical finding consistent with Diffuse Axonal Injury. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Diffuse Axonal Injury. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Diffuse Axonal Injury. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Diffuse Axonal Injury. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with Diffuse Axonal Injury. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with Diffuse Axonal Injury. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with Diffuse Axonal Injury. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with Diffuse Axonal Injury. Document specifically what you observe."
    },
    "ddxTargets": [
        "Diffuse Axonal Injury (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Diffuse Axonal Injury, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Diffuse Axonal Injury, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Diffuse Axonal Injury based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Tyler Nguyen's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Diffuse Axonal Injury. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
