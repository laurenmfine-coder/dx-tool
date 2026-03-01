// Virtual EMR Case: Disseminated Intravascular Coagulation (DIC) with Massive Hemorrhage
// Variant: dic-massive-transfusion | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Thomas Brown",
    "dob": "12/05/1975",
    "age": 50,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "Workers Comp + Cigna",
    "pcp": "Dr. Mark Peterson, MD",
    "pharmacy": "Walgreens \u2014 Davie, FL",
    "language": "English",
    "race": "White",
    "address": "2240 SW 64th Ave, Davie, FL",
    "phone": "(954) 555-1122",
    "email": "t.brown75@email.com",
    "emergencyContact": {
      "name": "Jennifer Brown (Wife)",
      "phone": "(954) 555-1138"
    },
    "mrn": "NSU-2025-27013"
  },
  "problems": [
    {
      "problem": "No Significant PMH",
      "icd": "Z87.89",
      "onset": "",
      "status": "Active",
      "notes": "Previously healthy"
    }
  ],
  "medications": [
    {
      "name": "None",
      "sig": "",
      "prescriber": "",
      "start": "",
      "refills": 0,
      "status": ""
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
      "date": "02/26/2026",
      "bp": "72/40",
      "hr": 138,
      "rr": 30,
      "temp": "95.8\u00b0F",
      "spo2": "88%",
      "wt": "200 lbs",
      "ht": "6'0\"",
      "bmi": 27.1,
      "setting": "ED \u2014 Trauma Bay"
    },
    {
      "date": "02/26/2026",
      "bp": "88/52",
      "hr": 122,
      "rr": 24,
      "temp": "96.4\u00b0F",
      "spo2": "92%",
      "wt": "200 lbs",
      "ht": "6'0\"",
      "bmi": 27.1,
      "setting": "ED \u2014 Post-MTP 30min"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED \u2014 Trauma Activation Level 1",
      "provider": "Dr. Sarah Mitchell, MD",
      "cc": "Multi-vehicle MVC, unrestrained driver, prolonged extrication",
      "hpi": "50M previously healthy, unrestrained driver in high-speed MVC (T-bone collision, estimated 50 mph). Prolonged extrication (~25 min). EMS: GCS 10, BP 78/42, HR 132. Left chest wall deformity. Open left femur fracture. Large scalp laceration with brisk bleeding. Estimated 1.5L blood loss at scene. 2 units O-neg pRBC and 2L NS given en route. Massive transfusion protocol activated.",
      "exam": "Intubated (RSI in field). GCS 6T. Scalp: 12 cm laceration with active hemorrhage \u2014 packed. Chest: Decreased breath sounds left (? hemothorax). Pelvic instability on compression. Left thigh: Open femur fracture with active arterial bleeding \u2014 tourniquet applied. Abdomen: Distended. Oozing from IV sites and scalp laceration (DIC concern). Cold, mottled extremities.",
      "assessment": "1. Multi-system trauma with hemorrhagic shock Class IV\n2. Likely injuries: Left hemothorax, splenic/hepatic laceration (distended abdomen), open femur fracture, scalp laceration, possible pelvic fracture\n3. Developing DIC \u2014 diffuse oozing from wounds and IV sites, coagulopathy on labs\n4. Lethal triad present: hypothermia (95.8\u00b0F), acidosis (pH 7.08), coagulopathy (INR 2.4)",
      "plan": "1. Massive transfusion protocol: 1:1:1 ratio (pRBC:FFP:Platelets)\n2. TXA 1g IV bolus \u2192 1g over 8hr (if <3hr from injury)\n3. Left chest tube (32F) \u2014 800 mL immediate return (hemothorax confirmed)\n4. FAST exam \u2192 positive in Morison pouch and left paracolic gutter\n5. Cryoprecipitate 10 units (fibrinogen <100)\n6. Calcium replacement (citrate toxicity from transfusion) \u2014 CaCl 1g IV q30min\n7. Damage control surgery: OR for exploratory laparotomy \u2192 splenectomy + packing\n8. Femur: External fixation in OR\n9. Serial coags, fibrinogen, TEG/ROTEM\n10. Hypothermia protocol: Bair Hugger, warm fluids, warm OR"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "15:00",
      "orderedBy": "Dr. Mitchell",
      "collected": "02/26/2026 15:05",
      "facility": "NSU Memorial \u2014 Trauma Lab",
      "accession": "LAB-2026-260481",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "22.4",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "6.8",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "48",
              "unit": "K/uL",
              "range": "150-400",
              "flag": "L"
            }
          ]
        },
        {
          "name": "COAGULATION \u2014 DIC",
          "results": [
            {
              "test": "PT",
              "value": "24.8",
              "unit": "sec",
              "range": "11.0-13.5",
              "flag": "H"
            },
            {
              "test": "INR",
              "value": "2.4",
              "unit": "",
              "range": "0.9-1.1",
              "flag": "H"
            },
            {
              "test": "PTT",
              "value": "58",
              "unit": "sec",
              "range": "25-35",
              "flag": "H"
            },
            {
              "test": "Fibrinogen",
              "value": "68",
              "unit": "mg/dL",
              "range": "200-400",
              "flag": "L"
            },
            {
              "test": "D-Dimer",
              "value": ">20,000",
              "unit": "ng/mL",
              "range": "<500",
              "flag": "H"
            },
            {
              "test": "FDP",
              "value": "Positive",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CRITICAL",
          "results": [
            {
              "test": "pH (ABG)",
              "value": "7.08",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "L"
            },
            {
              "test": "Base Deficit",
              "value": "-14",
              "unit": "mEq/L",
              "range": "-2 to +2",
              "flag": "L"
            },
            {
              "test": "Lactate",
              "value": "9.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Ionized Calcium",
              "value": "0.82",
              "unit": "mmol/L",
              "range": "1.12-1.32",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "5.8",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/26/2026",
      "study": "CHEST X-RAY PORTABLE",
      "accession": "CXR-2026-260481",
      "status": "FINAL",
      "orderedBy": "Dr. Mitchell",
      "readBy": "Dr. Anika Patel, MD (Radiology)",
      "facility": "NSU Memorial \u2014 ED",
      "priority": "STAT",
      "clinical": "Trauma \u2014 decreased L breath sounds",
      "technique": "Portable AP chest radiograph.",
      "findings": "Left hemothorax \u2014 large pleural effusion with meniscus sign. Multiple left rib fractures (ribs 4-8 laterally) \u2014 flail segment. Left lung partially collapsed. Right lung clear. Heart size normal. ETT in appropriate position. Left subclavian line tip in SVC.",
      "impression": "1. Left hemothorax with flail chest (ribs 4-8).\n2. Left lung collapse.\n3. ETT and lines in appropriate position.",
      "dictated": "02/26/2026 15:10",
      "verified": "02/26/2026 15:15"
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
    }
  ],
  "familyHistory": [
    "Father: HTN, alive at 78",
    "Mother: Healthy, alive at 76"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Construction foreman"
    ],
    [
      "Marital",
      "Married 22 years; 3 children"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social \u2014 2-3 beers on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Advance Directive",
      "None \u2014 wife to make decisions if incapacitated"
    ]
  ],
  "meta": {
    "caseId": "dic-massive-transfusion",
    "diagnosis": "Disseminated Intravascular Coagulation (DIC) with Massive Hemorrhage",
    "acuity": 1,
    "presentation": "Hematologic Emergency",
    "category": "hematologic"
  }
};
