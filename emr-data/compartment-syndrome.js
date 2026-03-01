// Virtual EMR Case: Acute Compartment Syndrome (Tibial Fracture)
// Variant: compartment-syndrome | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Ryan Patel",
    "dob": "06/15/1998",
    "age": 27,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "BCBS PPO",
    "pcp": "Dr. Sarah Kim, MD",
    "pharmacy": "Walgreens \u2014 Davie, FL",
    "language": "English",
    "race": "Asian (Indian)",
    "address": "1420 SW 3rd Ave, Davie, FL",
    "phone": "(954) 555-8844",
    "email": "r.patel98@email.com",
    "emergencyContact": {
      "name": "Sunita Patel (Mother)",
      "phone": "(954) 555-8860"
    },
    "mrn": "NSU-2025-61603"
  },
  "problems": [
    {
      "problem": "No Prior Medical History",
      "icd": "Z87.89",
      "onset": "",
      "status": "Active",
      "notes": "Healthy"
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
      "bp": "148/92",
      "hr": 108,
      "rr": 20,
      "temp": "98.6\u00b0F",
      "spo2": "99%",
      "wt": "175 lbs",
      "ht": "5'10\"",
      "bmi": 25.1,
      "setting": "ED"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Motorcycle accident \u2014 severe right lower leg pain, swelling, worsening despite splint",
      "hpi": "27M presents after motorcycle accident (low-speed, laid bike down). Right tibial shaft fracture confirmed on X-ray at outside facility 6 hours ago, placed in posterior splint. Since then, pain has been ESCALATING despite 2 doses of morphine \u2014 now 10/10, 'worst pain ever,' throbbing, feels like leg is going to 'explode.' Pain is OUT OF PROPORTION to visible injury. Reports numbness/tingling in right foot. Cannot dorsiflex right great toe. Nurse reports compartment pressures needed \u2014 classic 6 P's developing.",
      "exam": "Right lower leg: Tense, swollen, firm anterior compartment (woody on palpation). Splint removed \u2014 skin taut and shiny. Severe pain with passive stretch of toes (passive dorsiflexion of great toe causes excruciating calf pain \u2014 most sensitive sign). Sensation decreased in 1st web space (deep peroneal nerve territory). Dorsiflexion of right great toe 1/5 (was 5/5 initially per outside records). Pedal pulses PRESENT (pulses are last to go \u2014 late finding). Compartment pressure measured: Anterior 52 mmHg (diastolic 82 \u2192 delta pressure 30 mmHg = fasciotomy threshold).",
      "assessment": "1. ACUTE COMPARTMENT SYNDROME \u2014 right anterior compartment. Pain out of proportion, pain with passive stretch, paresthesias, muscle weakness, tense compartment, pressure 52 mmHg\n2. Tibial shaft fracture \u2014 closed\n3. SURGICAL EMERGENCY \u2014 fasciotomy within 6 hours of onset to prevent irreversible necrosis\n4. Do NOT elevate limb above heart (reduces perfusion pressure)",
      "plan": "1. EMERGENT 4-compartment fasciotomy \u2014 orthopedics to OR\n2. Remove all constrictive dressings/splints\n3. Keep limb at heart level (NOT elevated)\n4. Pain management: fentanyl 100mcg IV (no delay for imaging)\n5. NPO for OR\n6. Type & screen\n7. CMP, CPK, myoglobin\n8. Monitor for rhabdomyolysis post-fasciotomy (aggressive IV fluids)\n9. Wound VAC or delayed primary closure of fasciotomy sites in 48-72 hours"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "16:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 16:05",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-260491",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "14.2",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "12.8",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "268",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "COMPARTMENT SYNDROME LABS",
          "results": [
            {
              "test": "CPK",
              "value": "4,820",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            },
            {
              "test": "Myoglobin",
              "value": "842",
              "unit": "ng/mL",
              "range": "<90",
              "flag": "H"
            },
            {
              "test": "Potassium",
              "value": "5.2",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.4",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "3.2",
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
      "date": "02/26/2026",
      "study": "X-RAY RIGHT TIBIA/FIBULA AP AND LATERAL",
      "accession": "IMG-2026-260491",
      "status": "FINAL",
      "orderedBy": "Outside facility",
      "readBy": "Dr. Anika Patel, MD (Radiology)",
      "facility": "NSU Memorial \u2014 Radiology",
      "priority": "STAT",
      "clinical": "Motorcycle accident, tibial fracture with compartment syndrome concern",
      "technique": "AP and lateral radiographs of the right tibia/fibula.",
      "findings": "Transverse fracture through the mid-shaft of the right tibia with 5 mm displacement and 10 degrees of angulation. Fibula intact. Significant soft tissue swelling of the right calf. No open fracture on imaging (but clinical correlation needed). No foreign bodies.",
      "impression": "1. Displaced mid-shaft tibial fracture.\n2. Marked soft tissue swelling \u2014 clinical correlation for compartment syndrome.\n3. Surgical fixation will be needed after fasciotomy.",
      "dictated": "02/26/2026 16:15",
      "verified": "02/26/2026 16:20"
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
    }
  ],
  "familyHistory": [
    "Father: T2DM, alive at 56",
    "Mother: Healthy, alive at 54"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Physical therapy assistant"
    ],
    [
      "Marital",
      "Single"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social \u2014 weekends"
    ],
    [
      "Exercise",
      "CrossFit 4x/week; motorcycling as hobby"
    ]
  ],
  "meta": {
    "caseId": "compartment-syndrome",
    "diagnosis": "Acute Compartment Syndrome (Tibial Fracture)",
    "acuity": 2,
    "presentation": "Musculoskeletal Emergency",
    "category": "musculoskeletal"
  }
};
