// Virtual EMR Case: Simple Small Bowel Obstruction
// Variant: simple-sbo | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Ricardo Fernandez",
    "dob": "04/25/1970",
    "age": 54,
    "sex": "Male",
    "mrn": "RDX-2025-30856",
    "pronouns": "He/Him",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Maria Santos, MD",
    "pharmacy": "CVS Pharmacy — 5790 S Flamingo Rd, Cooper City, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino",
    "address": "9210 SW 48th St, Cooper City, FL 33328",
    "phone": "(954) 555-6429",
    "email": "r.fernandez70@email.com",
    "emergencyContact": {
      "name": "Isabella Fernandez (Wife)",
      "phone": "(954) 555-6450"
    }
  },
  "problems": [
    {
      "problem": "History of Laparoscopic Appendectomy",
      "icd": "Z87.09",
      "onset": "2015",
      "status": "Resolved",
      "notes": "Perforated appendicitis; converted to open; RLQ incision"
    },
    {
      "problem": "Adhesive Small Bowel Obstruction — Prior Episode",
      "icd": "K56.5",
      "onset": "2023",
      "status": "Resolved",
      "notes": "Partial SBO managed conservatively; NG decompression x 36 hours"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2018",
      "status": "Active",
      "notes": "Well controlled on losartan"
    },
    {
      "problem": "Gastroesophageal Reflux Disease",
      "icd": "K21.0",
      "onset": "2020",
      "status": "Active",
      "notes": "On PPI"
    }
  ],
  "medications": [
    {
      "name": "Losartan 50mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Santos",
      "start": "06/2018",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth once daily before breakfast",
      "prescriber": "Dr. Santos",
      "start": "03/2020",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Ibuprofen 400mg PRN",
      "sig": "Take 1 tablet by mouth every 6 hours as needed for headache with food",
      "prescriber": "Dr. Santos",
      "start": "01/2024",
      "refills": 1,
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
      "date": "12/12/2024",
      "bp": "126/78",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "192 lbs",
      "ht": "5'10\"",
      "bmi": 27.6,
      "setting": "PCP Office"
    },
    {
      "date": "06/08/2024",
      "bp": "128/80",
      "hr": 74,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "190 lbs",
      "ht": "5'10\"",
      "bmi": 27.3,
      "setting": "PCP Office"
    },
    {
      "date": "12/06/2023",
      "bp": "130/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "188 lbs",
      "ht": "5'10\"",
      "bmi": 27.0,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/12/2024",
      "type": "Primary Care",
      "provider": "Dr. Maria Santos, MD",
      "cc": "Routine follow-up; intermittent abdominal cramping",
      "hpi": "54-year-old male with history of perforated appendicitis (open appendectomy 2015) and prior adhesive SBO (2023, managed conservatively) presenting for routine follow-up. Reports occasional crampy periumbilical pain after eating large meals, lasting 15-30 minutes, resolving spontaneously. No vomiting, no distension, passing gas normally. Concerned about recurrence of SBO. Bowel habits regular.",
      "exam": "General: NAD, well-appearing. Abdomen: Soft, NT, ND. Well-healed RLQ scar. Active BS. No hernia.",
      "assessment": "1. History of adhesive SBO — intermittent crampy symptoms; likely subclinical partial obstruction episodes\n2. HTN — controlled\n3. GERD — controlled on PPI",
      "plan": "1. Small frequent meals; low-residue diet during crampy episodes\n2. Avoid large bolus meals\n3. Return precautions: persistent pain >4 hours, vomiting, distension, inability to pass flatus → ED\n4. Surgical consultation for prophylactic adhesiolysis discussed — patient prefers conservative approach\n5. RTC 6 months"
    },
    {
      "id": "V002",
      "date": "03/2023",
      "type": "ED",
      "provider": "Dr. Amanda Lewis, MD (Emergency Medicine)",
      "cc": "Crampy abdominal pain x 12 hours, vomiting, no flatus",
      "hpi": "53-year-old male with history of open appendectomy (2015, perforated) presenting with 12 hours of progressive crampy periumbilical pain, nausea, and bilious vomiting x3. No passage of flatus for 8 hours. Mild abdominal distension. No fever.",
      "exam": "Abdomen: Mildly distended, diffuse tenderness greatest periumbilical, hyperactive high-pitched bowel sounds. No peritoneal signs. RLQ scar well-healed.",
      "assessment": "1. Partial adhesive small bowel obstruction",
      "plan": "1. NPO, IV fluids, NG tube decompression\n2. CT abdomen/pelvis — confirmed partial SBO, transition point near RLQ, no strangulation\n3. Surgical consult — recommended conservative trial\n4. Resolved at 36 hours with return of flatus and bowel function\n5. Discharged on low-residue diet with surgery follow-up"
    }
  ],
  "labs": [
    {
      "date": "12/12/2024",
      "time": "09:00",
      "orderedBy": "Dr. Maria Santos, MD",
      "collected": "12/12/2024 08:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-308560",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "88", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.2", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "103", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "25", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "Calcium", "value": "9.3", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" },
            { "test": "ALT (SGPT)", "value": "22", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "20", "unit": "U/L", "range": "10-40", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "6.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "15.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "45.6", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "234", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "03/2023",
      "study": "CT ABDOMEN AND PELVIS WITH IV CONTRAST",
      "accession": "IMG-2023-30856",
      "status": "FINAL",
      "orderedBy": "Dr. Amanda Lewis, MD (Emergency Medicine)",
      "readBy": "Dr. Robert Anderson, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "53M with vomiting, distension, prior open appendectomy. R/O SBO.",
      "technique": "CT abdomen and pelvis with IV contrast.",
      "findings": "Small bowel: Dilated proximal small bowel loops up to 3.8 cm. Transition point in the RLQ near appendectomy site — adhesive band. Decompressed distal ileum and colon.\\n\\nBowel wall: Normal enhancement throughout. No wall thickening. No pneumatosis intestinalis. No portal venous gas.\\n\\nFree fluid: Trace free fluid between dilated loops (reactive).\\n\\nAppendix: Surgically absent.\\n\\nRemaining organs: Unremarkable.",
      "impression": "1. Partial adhesive small bowel obstruction — transition point in RLQ near appendectomy site.\\n2. No signs of closed-loop obstruction or strangulation.\\n3. Trace reactive free fluid.",
      "dictated": "03/18/2023 20:00",
      "verified": "03/18/2023 22:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/12/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-315",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "11/05/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-830",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "SX24-190",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Hypertension, T2DM, alive at 80",
    "Father: Colon cancer (age 68), deceased at 74",
    "Brother: Healthy, age 52",
    "Sister: IBS, alive at 50"
  ],
  "socialHistory": [
    ["Occupation", "IT project manager at telecommunications company"],
    ["Marital", "Married — 22 years"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social — 2-3 beers on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Gym 3x/week — weight training and cardio"],
    ["Housing", "Lives with wife and 2 children in single-family home"],
    ["Safety", "Wears seatbelt; smoke detectors; no firearms"],
    ["Advance Directive", "None — discussed"]
  ],
  "meta": {
    "caseId": "simple-sbo",
    "diagnosis": "Simple Small Bowel Obstruction (Adhesive)",
    "acuity": 3,
    "presentation": "GI Emergency",
    "category": "gastrointestinal"
  }
};
