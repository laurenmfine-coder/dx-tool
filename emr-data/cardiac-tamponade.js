/* emr-data/cardiac-tamponade.js — EMR case data for Cardiac Tamponade (Malignant Pericardial Effusion) */
window.EMR_DATA = {
  "patient": {
    "name": "Patricia Moreno",
  "patientHPI": "I can't catch my breath and there's this heavy pressure feeling all across my chest. It's not sharp pain, just this awful fullness that makes it hard to breathe, and it seems to be getting worse.",
    "dob": "06/15/1962",
    "age": "64",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-567122",
    "language": "English",
    "race": "Black/African American",
    "phone": "(713) 555-8311",
    "email": "patricia.moreno@email.com",
    "address": "8147 Spruce St, Memphis, TN 38114",
    "insurance": "Medicare",
    "pcp": "Dr. Robert Hughes, DO",
    "pharmacy": "Walmart Pharmacy \u2014 Broward Blvd",
    "emergencyContact": {
      "name": "James Morris",
      "phone": "(412) 555-5678",
      "relationship": "Sibling"
    },
    "chiefComplaint": "I can't breathe Chest \u2014 pressure/fullness sensation, diffuse",
    "diagnosis": "Cardiac Tamponade (Malignant Pericardial Effusion)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Non-small cell lung cancer",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Completed 4 cycles of carboplatin/pemetrexed 2 months ago \u2014 disease progression",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Brain metastases",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Dexamethasone",
      "dose": "4mg BID (for brain mets edema)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    },
    {
      "id": "med-2",
      "name": "Levetiracetam",
      "dose": "500mg BID (seizure prophylaxis)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-3",
      "name": "Ondansetron",
      "dose": "8mg PRN nausea",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Sarah Mitchell, MD"
    },
    {
      "id": "med-4",
      "name": "Oxycodone",
      "dose": "5mg PRN pain",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "No Known Drug Allergies",
      "severity": "",
      "type": ""
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "09:43",
      "bp": "94/78 (NARROW PULSE PRESSURE \u2014 16mmHg; normal >25-30mmHg)",
      "hr": "118",
      "rr": "26",
      "temp": "36.8\u00b0C",
      "spo2": "92%",
      "pain": "34/10",
      "bmi": "31",
      "weight": "89 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "I can't breathe Chest \u2014 pressure/fullness sensation, diffuse",
      "hpi": "Patricia Moreno is a 64-year-old female presenting with i can't breathe chest \u2014 pressure/fullness sensation, diffuse. Past medical history includes Non-small cell lung cancer, Completed 4 cycles of carboplatin/pemetrexed 2 months ago \u2014 disease progression, Brain metastases. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Cardiac Tamponade (Malignant Pericardial Effusion) \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-656017",
      "collected": "03/03/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "8.4",
              "unit": "x10\u00b3/\u00b5L",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "10.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "44",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "290",
              "unit": "x10\u00b3/\u00b5L",
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
              "value": "141",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.1",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "104",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "26",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "17",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.3",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "88",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "8.8",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "Troponin I",
              "value": "0.02",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": ""
            },
            {
              "test": "BNP",
              "value": "620",
              "unit": "pg/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "3.6",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "POCUS \u2013 Cardiac",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-937131",
      "clinical": "I can't breathe Chest \u2014 pressure/fullness sensation, diffuse",
      "technique": "Standard protocol",
      "findings": "LARGE CIRCUMFERENTIAL PERICARDIAL EFFUSION (>2cm). RIGHT ATRIAL COLLAPSE in diastole (earliest sign of tamponade \u2014 RA has lowest intracardiac pressure). RIGHT VENTRICULAR DIASTOLIC COLLAPSE (confirms hemodynamic significance). IVC plethoric (>2.1cm) with <50% respirophasic variation (elevated RA pressure). SWINGING HEART within effusion (corresponds to electrical alternans). No left-sided collapse. LV function appears hyperdynamic (small, underfilled ventricle contracting vigorously).",
      "impression": "LARGE PERICARDIAL EFFUSION WITH TAMPONADE PHYSIOLOGY \u2014 RA and RV diastolic collapse, plethoric IVC. EMERGENT PERICARDIOCENTESIS REQUIRED.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "Chest X-ray",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-527314",
      "clinical": "I can't breathe Chest \u2014 pressure/fullness sensation, diffuse",
      "technique": "Standard protocol",
      "findings": "ENLARGED CARDIAC SILHOUETTE with 'water-bottle' configuration. Bilateral small pleural effusions. Left hilar mass (known primary lung cancer). No pneumothorax.",
      "impression": "Massive pericardial effusion with enlarged silhouette. Known lung cancer.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-3",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-174726",
      "clinical": "I can't breathe Chest \u2014 pressure/fullness sensation, diffuse",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 118 bpm. LOW VOLTAGE throughout (QRS amplitude <5mm in limb leads \u2014 pericardial fluid attenuates signal). ELECTRICAL ALTERNANS (QRS amplitude alternates beat-to-beat \u2014 swinging heart within fluid). No ST changes",
      "impression": "Classic ECG triad: tachycardia + low voltage + electrical alternans = PERICARDIAL EFFUSION WITH TAMPONADE PHYSIOLOGY",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
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
    "Father: lung cancer (smoker)"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "30 pack-years, quit at diagnosis 1 year ago"
    ],
    [
      "Alcohol",
      "None since diagnosis"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "On disability \u2014 former construction supervisor"
    ],
    [
      "Living",
      "Lives with wife and adult daughter"
    ]
  ]
};
