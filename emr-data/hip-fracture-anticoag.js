// Virtual EMR Case: Hip Fracture on Anticoagulation
// Variant: hip-fracture-anticoag | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Eleanor Fitzgerald",
    "dob": "09/12/1936",
    "age": 89,
    "sex": "Female",
    "pronouns": "She/Her",
    "insurance": "Medicare + Medigap",
    "pcp": "Dr. Joan Murphy, MD",
    "pharmacy": "CVS \u2014 Boca Raton, FL",
    "language": "English",
    "race": "White (Irish)",
    "address": "5200 Town Center Circle, Boca Raton, FL",
    "phone": "(561) 555-4488",
    "email": "e.fitzgerald36@email.com",
    "emergencyContact": {
      "name": "Patrick Fitzgerald (Son)",
      "phone": "(561) 555-4504"
    },
    "mrn": "RDX-2025-29996"
  },
  "problems": [
    {
      "problem": "Atrial Fibrillation \u2014 Permanent",
      "icd": "I48.21",
      "onset": "2018",
      "status": "Active",
      "notes": "On warfarin; INR target 2-3; last INR 2.8 (1 week ago)"
    },
    {
      "problem": "Osteoporosis \u2014 Severe",
      "icd": "M81.0",
      "onset": "2010",
      "status": "Active",
      "notes": "T-score -3.2 lumbar spine; on denosumab; prior vertebral compression fracture T12"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2000",
      "status": "Active",
      "notes": "On amlodipine"
    },
    {
      "problem": "Mild Cognitive Impairment",
      "icd": "G31.84",
      "onset": "2023",
      "status": "Active",
      "notes": "MoCA 22/30; independent in IADLs with some assistance"
    }
  ],
  "medications": [
    {
      "name": "Warfarin 3mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Murphy",
      "start": "06/2018",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Amlodipine 5mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Murphy",
      "start": "03/2005",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Denosumab 60mg subQ q6months",
      "sig": "SubQ injection every 6 months",
      "prescriber": "Dr. Murphy",
      "start": "01/2020",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Calcium 600mg + Vitamin D 800IU BID",
      "sig": "PO BID",
      "prescriber": "Dr. Murphy",
      "start": "01/2011",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Metoprolol Tartrate 25mg BID",
      "sig": "PO BID",
      "prescriber": "Dr. Murphy",
      "start": "06/2018",
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
      "date": "02/26/2026",
      "bp": "148/82",
      "hr": 82,
      "rr": 16,
      "temp": "98.0\u00b0F",
      "spo2": "96%",
      "wt": "118 lbs",
      "ht": "5'3\"",
      "bmi": 20.9,
      "setting": "ED"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Fall with left hip pain, unable to bear weight",
      "hpi": "89F on warfarin fell at home \u2014 tripped on rug, fell onto left side. Unable to stand since. Left hip pain 8/10. No head strike, no LOC. No chest pain or palpitations prior to fall. No preceding dizziness (mechanical fall). Son found her on floor 30 minutes later. Severe osteoporosis history. Last INR 2.8 one week ago.",
      "exam": "Alert, uncomfortable. Left lower extremity: Shortened and externally rotated. Tender over greater trochanter. Unable to perform SLR due to pain. Distal pulses intact. Sensation intact. No open wound. No ecchymosis over scalp. GCS 15. Cervical spine non-tender. No other injuries on secondary survey.",
      "assessment": "1. Left hip fracture \u2014 likely intertrochanteric given mechanism and osteoporosis\n2. On warfarin \u2014 need INR stat for reversal planning before OR\n3. Fall risk: osteoporosis, MCI, AFib on anticoagulation, living alone\n4. Perioperative management complex \u2014 balance fracture repair timing with anticoagulation reversal",
      "plan": "1. X-ray left hip AP and lateral\n2. STAT INR \u2014 if supratherapeutic, vitamin K 2.5mg IV + 4-factor PCC for urgent reversal\n3. Hold warfarin\n4. Type & screen\n5. Orthopedic surgery consult for fixation\n6. Pain: femoral nerve block + acetaminophen 1g IV (avoid excessive opioids given age/cognition)\n7. Pre-op: CBC, CMP, ECG, chest X-ray\n8. DVT prophylaxis discussion (bridge anticoagulation post-op)\n9. Social work: home safety assessment, fall prevention, possible rehab placement\n10. Geri consult for perioperative optimization"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "14:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 14:10",
      "facility": "ReasonDx Memorial — ED Lab",
      "accession": "LAB-2026-260431",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COAGULATION",
          "results": [
            {
              "test": "INR",
              "value": "3.2",
              "unit": "",
              "range": "0.9-1.1",
              "flag": "H"
            },
            {
              "test": "PT",
              "value": "34.8",
              "unit": "sec",
              "range": "11.0-13.5",
              "flag": "H"
            }
          ]
        },
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "9.2",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "11.0",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "178",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BMP",
          "results": [
            {
              "test": "Creatinine",
              "value": "1.0",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "138",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.2",
              "unit": "mEq/L",
              "range": "3.5-5.1",
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
      "study": "X-RAY LEFT HIP AP AND LATERAL",
      "accession": "IMG-2026-260431",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. Anika Patel, MD (Radiology)",
      "facility": "ReasonDx Memorial — Radiology",
      "priority": "STAT",
      "clinical": "Fall, hip pain, on anticoagulation",
      "technique": "AP and lateral radiographs of the left hip.",
      "findings": "Comminuted intertrochanteric fracture of the left femur. Fracture extends from greater trochanter to lesser trochanter with varus angulation. No subtrochanteric extension. Diffuse osteopenia. Prior T12 vertebral compression fracture noted (old). Right hip prosthesis (prior right THA, not previously documented).",
      "impression": "1. Comminuted left intertrochanteric femur fracture.\n2. Severe osteopenia.\n3. Orthopedic surgery consultation for fixation (ORIF vs cephalomedullary nail).\n4. Warfarin reversal needed pre-operatively.",
      "dictated": "02/26/2026 14:20",
      "verified": "02/26/2026 14:30"
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
    "Mother: Osteoporosis, hip fracture at 82, deceased at 90",
    "Father: CAD, deceased at 74",
    "Sister: Osteoporosis, alive at 86"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired elementary school teacher"
    ],
    [
      "Marital",
      "Widowed 2020; lives alone in condo"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "None"
    ],
    [
      "Exercise",
      "Walking with cane; chair yoga 1x/week"
    ],
    [
      "Advance Directive",
      "Full code; DPOA son Patrick; living will on file"
    ]
  ],
  "meta": {
    "caseId": "hip-fracture-anticoag",
    "diagnosis": "Hip Fracture on Anticoagulation",
    "acuity": 3,
    "presentation": "Geriatric Emergency",
    "category": "geriatric"
  }
};
