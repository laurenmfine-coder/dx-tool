/* emr-data/asthma-exacerbation.js — Auto-generated EMR case data for Asthma Exacerbation */
window.EMR_DATA = {
  "patient": {
    "name": "Destiny Carter",
    "dob": "11/13/2006",
    "age": "20",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-170401",
    "language": "English",
    "race": "White",
    "phone": "(897) 969-2159",
    "email": "destiny.carter@email.com",
    "address": "7272 Maple St, Weston, FL 33356",
    "insurance": "Medicaid",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "CVS Pharmacy — Main St",
    "emergencyContact": {
      "name": "Richard Carter",
      "phone": "(925) 620-3403",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "Acute wheezing and dyspnea, unable to complete sentences",
    "diagnosis": "Asthma Exacerbation"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Persistent asthma (moderate)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Allergic rhinitis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Eczema",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Fluticasone",
      "dose": "220mcg",
      "route": "INH",
      "frequency": "BID",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
    },
    {
      "id": "med-2",
      "name": "Albuterol",
      "dose": "90mcg",
      "route": "INH",
      "frequency": "PRN",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, DO"
    },
    {
      "id": "med-3",
      "name": "Montelukast",
      "dose": "10mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    },
    {
      "id": "med-4",
      "name": "Cetirizine",
      "dose": "10mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Aspirin",
      "reaction": "Bronchospasm",
      "severity": "Severe",
      "type": "Drug"
    },
    {
      "allergen": "Cats",
      "reaction": "Asthma exacerbation",
      "severity": "Moderate",
      "type": "Environmental"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "128/78",
      "hr": "118",
      "rr": "30",
      "temp": "37.0°C",
      "spo2": "90%",
      "pain": "5/10",
      "bmi": "28",
      "weight": "69 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Acute wheezing and dyspnea, unable to complete sentences",
      "hpi": "Destiny Carter is a 20-year-old female presenting with acute wheezing and dyspnea, unable to complete sentences. Past medical history includes Persistent asthma (moderate), Allergic rhinitis, Eczema. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Asthma Exacerbation — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-463028",
      "collected": "03/01/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "7.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "41.2",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "245",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "24",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "16",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.9",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "98",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-1",
      "date": "03/01/2026",
      "study": "Chest X-Ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-195734",
      "clinical": "Acute wheezing and dyspnea, unable to complete sentences",
      "technique": "Standard protocol",
      "findings": "Hyperinflation. No focal consolidation or pneumothorax. No pleural effusion.",
      "impression": "Hyperinflation consistent with air-trapping. No acute infiltrate.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
    }
  ],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/15/2025",
      "lot": "FL-2025",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19 (Updated)",
      "date": "09/01/2025",
      "lot": "CV-2025",
      "site": "Right Deltoid"
    },
    {
      "name": "Tdap",
      "date": "03/2020",
      "lot": "TD-2020",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Mother: asthma",
    "Sister: eczema"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Triggers",
      "Visited friend with cats yesterday"
    ],
    [
      "Medication adherence",
      "Has not been using controller inhaler regularly"
    ]
  ]
,

  "references": [
    {
      "id": "GINA-2024",
      "title": "Global Strategy for Asthma Management and Prevention",
      "authors": "Global Initiative for Asthma",
      "journal": "GINA Report",
      "year": 2024,
      "url": "https://ginasthma.org/gina-reports/",
      "openAccess": true,
      "validates": ["GINA step therapy", "Acute exacerbation management", "Discharge criteria"]
    },
    {
      "id": "NAEPP-EPR4",
      "title": "Asthma Management Guidelines: Focused Updates 2020",
      "authors": "NHLBI NAEPP Expert Panel",
      "journal": "NHLBI",
      "year": 2020,
      "url": "https://www.nhlbi.nih.gov/health-topics/asthma-management-guidelines",
      "openAccess": true,
      "validates": ["Acute severity classification", "SABA + ipratropium + steroids protocol", "IV magnesium (FEV1 <40%)", "Admission criteria"]
    },
    {
      "id": "StatPearls-Asthma-NBK430901",
      "title": "Asthma",
      "authors": "StatPearls Publishing",
      "journal": "StatPearls [Internet]",
      "year": 2024,
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK430901/",
      "openAccess": true,
      "validates": ["Type 2 inflammation pathophysiology", "AHR and airway remodeling", "Trigger identification", "Peak flow monitoring"]
    }
  ]
,

  "teachingPoints": {
    "keyLearning": [
      "Asthma exacerbation severity guides management: mild (speaks in sentences, PEFR >70%) → SABA + reassess. Moderate (speaks in phrases, PEFR 40–70%) → SABA + ipratropium + systemic steroids. Severe (speaks in words, PEFR <40%) → same + consider IV Mg²⁺, heliox. Life-threatening (altered consciousness, silent chest, PEFR <25%) → intubation preparation, ICU.",
      "IV magnesium sulfate (2g IV over 20 min) is indicated for severe exacerbations not responding to initial bronchodilator + steroid therapy. Mechanism: Mg²⁺ blocks calcium channels in bronchial smooth muscle → bronchodilation. GINA recommends in severe/life-threatening acute asthma.",
      "Systemic corticosteroids (oral or IV) are equally effective in acute asthma — oral preferred when patient can swallow. Early steroid use (within 1 hour of ED presentation) reduces hospitalization and relapse rates."
    ],
    "boardPearls": [
      "PEFR thresholds: >70% = mild; 40–70% = moderate; <40% = severe; <25% = life-threatening.",
      "SABA + ipratropium: combination superior to SABA alone in severe ED asthma (reduces hospitalization ~25%).",
      "IV Mg²⁺: 2g IV over 20 min for severe exacerbation non-responsive to bronchodilators. Bronchodilation via calcium channel blockade in smooth muscle.",
      "Oral vs IV steroids in acute asthma: equivalent efficacy. Oral preferred (less invasive, equal bioavailability for prednisone).",
      "Heliox: helium-oxygen mixture (70:30 or 80:20) — reduces turbulent airflow → lower airway resistance → improved bronchodilator delivery. For life-threatening asthma or impending intubation.",
      "Discharge criteria: PEFR >70%, sustained for 60 min after last treatment, adequate home support, systemic steroid course (prednisone 40–60 mg × 5 days).",
      "Avoid beta-blockers, NSAIDs, aspirin (unless AERD desensitized) in asthma — trigger bronchospasm."
    ]
  }
};