// Virtual EMR Case: Acute COPD Exacerbation
// Variant: copd-v1 | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Barbara Collins",
    "dob": "10/18/1958",
    "age": 67,
    "sex": "Female",
    "pronouns": "She/Her",
    "insurance": "Medicare + Medicaid",
    "pcp": "Dr. Steven Walsh, DO",
    "pharmacy": "Walgreens \u2014 Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "4480 SW 64th Ave, Riverside, FL",
    "phone": "(954) 555-2288",
    "email": "b.collins58@email.com",
    "emergencyContact": {
      "name": "Tom Collins (Husband)",
      "phone": "(954) 555-2302"
    },
    "mrn": "RDX-2025-13247"
  },
  "problems": [
    {
      "problem": "COPD \u2014 GOLD Stage III (Severe)",
      "icd": "J44.1",
      "onset": "2015",
      "status": "Active",
      "notes": "FEV1 38% predicted; 2 exacerbations in past year; on triple therapy; home O2 2L"
    },
    {
      "problem": "Current Smoker",
      "icd": "F17.210",
      "onset": "1978",
      "status": "Active",
      "notes": "1.5 PPD x 48 years (72 pack-years); multiple quit attempts"
    },
    {
      "problem": "Cor Pulmonale",
      "icd": "I27.81",
      "onset": "2024",
      "status": "Active",
      "notes": "Mild RV enlargement on echo; on diuretic"
    }
  ],
  "medications": [
    {
      "name": "Fluticasone/Vilanterol (Breo Ellipta) 200/25",
      "sig": "1 inhalation daily",
      "prescriber": "Pulmonology",
      "start": "03/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Tiotropium (Spiriva) 18mcg",
      "sig": "1 inhalation daily",
      "prescriber": "Pulmonology",
      "start": "06/2018",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Albuterol MDI",
      "sig": "2 puffs q4-6h PRN",
      "prescriber": "Pulmonology",
      "start": "01/2015",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Home O2 \u2014 2L/min nasal cannula",
      "sig": "Continuous",
      "prescriber": "Pulmonology",
      "start": "01/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Prednisone 5mg daily",
      "sig": "PO daily (chronic low-dose)",
      "prescriber": "Pulmonology",
      "start": "09/2025",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Furosemide 20mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Walsh",
      "start": "06/2024",
      "refills": 5,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "type": "Drug",
      "reaction": "Anaphylaxis",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/26/2026",
      "bp": "148/92",
      "hr": 108,
      "rr": 32,
      "temp": "101.2\u00b0F",
      "spo2": "84%",
      "wt": "142 lbs",
      "ht": "5'5\"",
      "bmi": 23.6,
      "setting": "ED"
    },
    {
      "date": "02/26/2026",
      "bp": "138/82",
      "hr": 98,
      "rr": 24,
      "temp": "100.4\u00b0F",
      "spo2": "91%",
      "wt": "142 lbs",
      "ht": "5'5\"",
      "bmi": 23.6,
      "setting": "ED \u2014 Post-BiPAP 1hr"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Worsening dyspnea, productive cough, fever x 3 days",
      "hpi": "67F with severe COPD (FEV1 38%, home O2) presents with 3-day worsening dyspnea beyond her baseline, increased sputum production (now purulent/green), and fever to 101\u00b0F. Using albuterol q2h without relief. Unable to speak in full sentences today. Ran out of antibiotics left over from last exacerbation. Still smoking. No hemoptysis, no chest pain, no leg swelling.",
      "exam": "Severe respiratory distress, tripoding, accessory muscle use, pursed-lip breathing. Barrel chest. Lungs: Diffuse bilateral expiratory wheezing with prolonged expiratory phase, scattered rhonchi. Diminished breath sounds at bases. No crackles to suggest pneumonia. CV: Tachycardic, loud P2. Extremities: Mild ankle edema.",
      "assessment": "1. Acute COPD exacerbation \u2014 infectious trigger (purulent sputum, fever)\n2. Respiratory failure \u2014 SpO2 84% on home O2\n3. Rule out pneumonia\n4. Continued tobacco use \u2014 counseling needed",
      "plan": "1. BiPAP 14/6 FiO2 40% (target SpO2 88-92% \u2014 avoid over-oxygenation)\n2. Nebulized albuterol/ipratropium q20min x 3 then q4h\n3. Methylprednisolone 125mg IV \u2192 prednisone 40mg x 5 days\n4. Azithromycin 500mg IV (PCN allergy \u2192 avoid amoxicillin)\n5. CXR, CBC, BMP, ABG, procalcitonin, sputum culture\n6. If no improvement \u2192 consider intubation (discuss GOC first)\n7. Smoking cessation counseling\n8. ICU bed requested"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "12:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 12:00",
      "facility": "ReasonDx Memorial — ED Lab",
      "accession": "LAB-2026-02261200",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "16.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "16.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "H"
            },
            {
              "test": "Hematocrit",
              "value": "52.4",
              "unit": "%",
              "range": "36-46",
              "flag": "H"
            },
            {
              "test": "Platelets",
              "value": "312",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "ABG",
          "results": [
            {
              "test": "pH",
              "value": "7.28",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "L"
            },
            {
              "test": "pCO2",
              "value": "68",
              "unit": "mmHg",
              "range": "35-45",
              "flag": "H"
            },
            {
              "test": "pO2",
              "value": "52",
              "unit": "mmHg",
              "range": "80-100",
              "flag": "L"
            },
            {
              "test": "HCO3",
              "value": "32",
              "unit": "mEq/L",
              "range": "22-26",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "2.4",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            }
          ]
        },
        {
          "name": "INFECTION",
          "results": [
            {
              "test": "Procalcitonin",
              "value": "0.82",
              "unit": "ng/mL",
              "range": "<0.1",
              "flag": "H"
            },
            {
              "test": "BMP Creatinine",
              "value": "1.0",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/26/2026",
      "study": "CHEST X-RAY PA AND LATERAL",
      "accession": "IMG-2026-022601",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. Anika Patel, MD (Radiology)",
      "facility": "ReasonDx Memorial — Radiology",
      "priority": "STAT",
      "clinical": "COPD exacerbation, fever, r/o pneumonia",
      "technique": "PA and lateral CXR.",
      "findings": "Hyperinflated lungs with flattened diaphragms. Increased AP diameter. No focal consolidation or infiltrate. No pleural effusion. No pneumothorax. Mild cardiomegaly with prominent pulmonary arteries (cor pulmonale).",
      "impression": "1. Hyperinflated lungs consistent with severe COPD.\n2. No pneumonia.\n3. Mild cardiomegaly with pulmonary hypertension pattern.",
      "dictated": "02/26/2026 15:00",
      "verified": "02/26/2026 15:20"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-8001",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster",
      "date": "09/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2101",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap",
      "date": "03/2021",
      "site": "Left deltoid IM",
      "lot": "TD21-502",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (complete)",
      "date": "2023",
      "site": "Left deltoid IM",
      "lot": "SX23-412",
      "mfr": "GSK"
    },
    {
      "vaccine": "Prevnar 20",
      "date": "03/2024",
      "site": "Left deltoid IM",
      "lot": "PV20-900",
      "mfr": "Pfizer"
    }
  ],
  "familyHistory": [
    "Father: COPD (smoker), deceased at 62",
    "Mother: Lung cancer, deceased at 70",
    "Brother: Emphysema, alive at 64"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired waitress"
    ],
    [
      "Tobacco",
      "Current \u2014 1.5 PPD x 48 years (72 pack-years)"
    ],
    [
      "Alcohol",
      "Rare"
    ],
    [
      "Housing",
      "Single-story with husband; home O2"
    ],
    [
      "Advance Directive",
      "Full code but has discussed DNI with family \u2014 undecided"
    ]
  ],
  "meta": {
    "caseId": "copd-v1",
    "diagnosis": "Acute COPD Exacerbation",
    "acuity": 3,
    "presentation": "Shortness of Breath",
    "category": "pulmonary"
  }
};
