// Virtual EMR Case: Central Retinal Artery Occlusion (CRAO)
// Variant: crao | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Vincent Romano",
    "dob": "03/28/1950",
    "age": 75,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "Medicare",
    "pcp": "Dr. Helen Chu, MD",
    "pharmacy": "CVS \u2014 Deerfield Beach, FL",
    "language": "English",
    "race": "White (Italian)",
    "address": "1520 SE 3rd Ct, Deerfield Beach, FL",
    "phone": "(954) 555-1188",
    "email": "v.romano50@email.com",
    "emergencyContact": {
      "name": "Diane Romano (Wife)",
      "phone": "(954) 555-1204"
    },
    "mrn": "RDX-2025-36167"
  },
  "problems": [
    {
      "problem": "Atrial Fibrillation \u2014 Paroxysmal",
      "icd": "I48.0",
      "onset": "2021",
      "status": "Active",
      "notes": "On apixaban; rate-controlled with diltiazem"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2000",
      "status": "Active",
      "notes": "On lisinopril/HCTZ"
    },
    {
      "problem": "Carotid Stenosis \u2014 R ICA 60%",
      "icd": "I65.21",
      "onset": "2024",
      "status": "Active",
      "notes": "Duplex 2024 \u2014 R ICA 60% stenosis; below surgical threshold; on atorvastatin 80mg; repeat duplex planned 6 months"
    }
  ],
  "medications": [
    {
      "name": "Apixaban 5mg BID",
      "sig": "PO BID",
      "prescriber": "Dr. Chu",
      "start": "06/2021",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Diltiazem ER 240mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Chu",
      "start": "06/2021",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Lisinopril/HCTZ 20/12.5mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Chu",
      "start": "03/2005",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 80mg QHS",
      "sig": "PO at bedtime",
      "prescriber": "Dr. Chu",
      "start": "01/2024",
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
      "bp": "158/88",
      "hr": 78,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "98%",
      "wt": "175 lbs",
      "ht": "5'9\"",
      "bmi": 25.8,
      "setting": "ED"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Sudden painless vision loss \u2014 right eye, 90 minutes ago",
      "hpi": "75M with AFib and R carotid stenosis presents with sudden, painless, complete vision loss in the right eye beginning 90 minutes ago. Was reading newspaper when vision 'went dark like a curtain coming down' in R eye. No pain, no headache, no jaw claudication. No preceding TIA symptoms. No amaurosis fugax history. Notes he has been adherent with apixaban. Left eye vision normal.",
      "exam": "R eye: Visual acuity \u2014 counting fingers at 1 foot only (was 20/30 corrected). Afferent pupillary defect (RAPD/Marcus Gunn pupil) R eye. Fundoscopy: Pale, edematous retina with cherry-red spot at macula. Attenuated arterioles. 'Box-car' segmentation of blood column in retinal arteries. No emboli visualized. L eye: Normal exam, VA 20/25.",
      "assessment": "1. CENTRAL RETINAL ARTERY OCCLUSION (CRAO) \u2014 right eye. 90-minute window.\n2. Likely embolic \u2014 sources: carotid stenosis (60% R ICA) and/or AFib\n3. TIME-SENSITIVE \u2014 retinal infarction begins at 90 min, irreversible by 4-6 hours\n4. Must rule out GCA given age >50",
      "plan": "1. STAT ophthalmology consult\n2. Ocular massage (15 sec on / 5 sec off) \u2014 attempt to dislodge embolus\n3. Consider: anterior chamber paracentesis to lower IOP and increase perfusion gradient\n4. Timolol 0.5% drop R eye (lower IOP)\n5. Carbogen (95% O2 / 5% CO2) or high-flow O2 to dilate retinal arteries\n6. STAT ESR + CRP to rule out GCA (if elevated \u2192 temporal artery biopsy + high-dose steroids)\n7. CTA head/neck to evaluate carotid and intracranial vessels\n8. Cardiology re-evaluation \u2014 TEE for cardiac embolic source\n9. Stroke team notification \u2014 CRAO is now considered a stroke equivalent"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "12:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 12:10",
      "facility": "ReasonDx Memorial — ED Lab",
      "accession": "LAB-2026-260390",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "8.4",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "14.2",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "212",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "GCA SCREENING",
          "results": [
            {
              "test": "ESR",
              "value": "14",
              "unit": "mm/hr",
              "range": "0-20",
              "flag": ""
            },
            {
              "test": "CRP",
              "value": "0.4",
              "unit": "mg/dL",
              "range": "<1.0",
              "flag": ""
            }
          ]
        },
        {
          "name": "METABOLIC",
          "results": [
            {
              "test": "Glucose",
              "value": "102",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.1",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": ""
            },
            {
              "test": "A1C",
              "value": "6.2",
              "unit": "%",
              "range": "<5.7",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [],
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
    "Father: Stroke at 72, deceased at 75",
    "Mother: Macular degeneration, alive at 96",
    "Brother: Carotid stenosis, alive at 78"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired jeweler"
    ],
    [
      "Marital",
      "Married 50 years"
    ],
    [
      "Tobacco",
      "Former \u2014 1/2 PPD x 20 yrs, quit 1995"
    ],
    [
      "Alcohol",
      "1 glass wine daily"
    ],
    [
      "Advance Directive",
      "Full code; DPOA wife Diane"
    ]
  ],
  "meta": {
    "caseId": "crao",
    "diagnosis": "Central Retinal Artery Occlusion (CRAO)",
    "acuity": 2,
    "presentation": "Eye Emergency",
    "category": "ophthalmologic"
  }
};
