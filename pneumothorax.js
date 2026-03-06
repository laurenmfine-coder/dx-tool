// Virtual EMR Case: Spontaneous Pneumothorax
// Variant: pneumothorax | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Tyler Reeves",
    "dob": "09/14/2001",
    "age": 23,
    "sex": "Male",
    "mrn": "RDX-2025-58214",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield FL \u2014 PPO",
    "pcp": "Dr. Samantha Greene, MD",
    "pharmacy": "CVS Pharmacy \u2014 4890 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "3211 College Ave, Fort Lauderdale, FL 33314",
    "phone": "(954) 555-2184",
    "email": "t.reeves01@email.com",
    "emergencyContact": {
      "name": "Karen Reeves (Mother)",
      "phone": "(954) 555-2190"
    }
  },
  "problems": [
    {
      "problem": "Marfanoid Habitus",
      "icd": "Q87.40",
      "onset": "2015",
      "status": "Active",
      "notes": "Evaluated by genetics \u2014 no formal Marfan syndrome diagnosis; tall, thin body habitus with mild pectus excavatum"
    },
    {
      "problem": "Nicotine Vaping Use",
      "icd": "F17.290",
      "onset": "2019",
      "status": "Active",
      "notes": "Daily vaping since age 18"
    },
    {
      "problem": "Generalized Anxiety Disorder",
      "icd": "F41.1",
      "onset": "2020",
      "status": "Active",
      "notes": ""
    }
  ],
  "medications": [
    {
      "name": "Sertraline 50mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Greene",
      "start": "09/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Albuterol 90mcg MDI PRN",
      "sig": "Inhale 2 puffs by mouth as needed for shortness of breath",
      "prescriber": "Dr. Greene",
      "start": "03/2024",
      "refills": 2,
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
    }
  ],
  "vitals": [
    {
      "date": "08/12/2024",
      "bp": "118/72",
      "hr": 68,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "154 lbs",
      "ht": "6'3\"",
      "bmi": 19.2,
      "setting": "PCP Office"
    },
    {
      "date": "02/20/2024",
      "bp": "112/68",
      "hr": 72,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "99%",
      "wt": "152 lbs",
      "ht": "6'3\"",
      "bmi": 19.0,
      "setting": "PCP Office"
    },
    {
      "date": "09/05/2023",
      "bp": "110/66",
      "hr": 66,
      "rr": 12,
      "temp": "98.2\u00b0F",
      "spo2": "100%",
      "wt": "150 lbs",
      "ht": "6'3\"",
      "bmi": 18.7,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "08/12/2024",
      "type": "Primary Care",
      "provider": "Dr. Samantha Greene, MD",
      "cc": "Anxiety follow-up, vaping cessation counseling",
      "hpi": "Mr. Reeves presents for anxiety follow-up. Reports sertraline is helpful, sleeping better. Continues daily vaping (nicotine 5%). Interested in quitting but has not set a quit date. Occasional mild chest tightness attributed to anxiety. No dyspnea, palpitations, or syncope.",
      "exam": "Tall, thin male in no distress. BMI 19.2. Mild pectus excavatum. Lungs: CTA bilaterally. CV: RRR, no murmurs. No Marfan stigmata beyond habitus (no lens subluxation, normal arm span).",
      "assessment": "1. GAD \u2014 well controlled on sertraline\n2. Nicotine vaping use \u2014 ongoing\n3. Marfanoid habitus \u2014 stable, genetics cleared for Marfan syndrome",
      "plan": "1. Continue sertraline 50mg daily\n2. Vaping cessation counseling \u2014 motivational interviewing, offered NRT\n3. Return in 6 months or PRN"
    },
    {
      "id": "V002",
      "date": "03/10/2024",
      "type": "Urgent Care",
      "provider": "Dr. Lisa Chen, MD",
      "cc": "Chest tightness and mild dyspnea",
      "hpi": "23-year-old male presents with 2 days of intermittent chest tightness, worse with deep breathing. No fever, cough, or trauma. Uses nicotine vape daily. History of anxiety. States episodes last 10-15 minutes and resolve with rest.",
      "exam": "Appears anxious but in no respiratory distress. RR 16, SpO2 99%. Lungs: CTA bilaterally. CV: RRR, no murmurs. Chest wall non-tender.",
      "assessment": "1. Chest tightness \u2014 likely anxiety-related vs. vaping-associated irritation",
      "plan": "1. Reassurance and breathing exercises\n2. Albuterol MDI PRN prescribed as trial for possible bronchospasm\n3. Strongly advised to stop vaping\n4. Follow up with PCP if recurrent"
    }
  ],
  "labs": [
    {
      "date": "08/12/2024",
      "time": "10:00 AM",
      "orderedBy": "Dr. Greene",
      "collected": "08/12/2024 10:15 AM",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-058214",
      "status": "Final",
      "specimenType": "Serum/Plasma",
      "fasting": "No",
      "groups": [
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {"test": "Glucose", "value": "92", "unit": "mg/dL", "range": "70-100", "flag": ""},
            {"test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": ""},
            {"test": "Creatinine", "value": "0.9", "unit": "mg/dL", "range": "0.7-1.3", "flag": ""},
            {"test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": ""},
            {"test": "Potassium", "value": "4.1", "unit": "mEq/L", "range": "3.5-5.0", "flag": ""},
            {"test": "Chloride", "value": "103", "unit": "mEq/L", "range": "98-106", "flag": ""},
            {"test": "CO2", "value": "25", "unit": "mEq/L", "range": "21-31", "flag": ""},
            {"test": "Calcium", "value": "9.6", "unit": "mg/dL", "range": "8.5-10.5", "flag": ""}
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "COVID-19 (Pfizer-BioNTech, Updated 2024-2025)",
      "date": "10/01/2024",
      "site": "Left deltoid IM",
      "lot": "GW9283",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "09/05/2023",
      "site": "Right deltoid IM",
      "lot": "AC22B401AB",
      "mfr": "GSK"
    },
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/01/2024",
      "site": "Right deltoid IM",
      "lot": "FL8374",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9, Dose 3 of 3)",
      "date": "04/15/2018",
      "site": "Left deltoid IM",
      "lot": "G9V034",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Father: Marfan syndrome suspected but never diagnosed, tall (6'5\"), mild mitral valve prolapse, age 52, alive",
    "Mother: Anxiety disorder, migraines, age 50, alive",
    "Brother: Healthy, age 20",
    "No family history of sudden cardiac death, aortic dissection, or DVT/PE"
  ],
  "socialHistory": [
    ["Occupation", "College student (senior) at State University, studying exercise science"],
    ["Marital", "Single, lives with roommate in off-campus apartment"],
    ["Tobacco", "No cigarette smoking. Daily nicotine vaping (5% pods) since age 18. Approximately 1 pod per day."],
    ["Alcohol", "Social \u2014 weekends, 4-6 drinks"],
    ["Drugs", "Occasional marijuana (edibles, 1-2x/month)"],
    ["Exercise", "Active \u2014 plays intramural basketball, lifts weights 3x/week"],
    ["Housing", "Second-floor apartment, Fort Lauderdale"],
    ["Safety", "Wears seatbelt. No firearms."],
    ["Advance Directive", "None on file. Mother listed as emergency contact."]
  ],
  "meta": {
    "caseId": "pneumothorax",
    "diagnosis": "Primary Spontaneous Pneumothorax",
    "acuity": 2,
    "presentation": "Shortness of Breath",
    "category": "pulmonary"
  }
};
