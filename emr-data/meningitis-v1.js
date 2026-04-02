/* emr-data/meningitis-v1.js — Auto-generated EMR case data for Bacterial Meningitis */
window.EMR_DATA = {
  "patient": {
    "name": "Emily Johnson",
  "patientHPI": "I have the worst headache of my life, I'm burning up with fever, my neck is so stiff I can barely move it, and the lights are killing my eyes. I live in the dorms at college and I just feel absolutely terrible.",
    "dob": "04/06/1999",
    "age": "27",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-338691",
    "language": "English",
    "race": "Asian",
    "phone": "(404) 555-3623",
    "email": "kevin.johnson@email.com",
    "address": "7670 Iris Blvd, Columbus, OH 43203",
    "insurance": "Oscar Health",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "Walmart Pharmacy — Sunrise Blvd",
    "emergencyContact": {
      "name": "James Johnson",
      "phone": "(503) 555-7985",
      "relationship": "Parent"
    },
    "chiefComplaint": "Severe headache, fever, neck stiffness, photophobia",
    "diagnosis": "Bacterial Meningitis"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "College student in dormitory",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Combined OCP",
      "dose": "",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "108/62",
      "hr": "118",
      "rr": "22",
      "temp": "39.8°C",
      "spo2": "97%",
      "pain": "9/10",
      "bmi": "33",
      "weight": "96 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Severe headache, fever, neck stiffness, photophobia",
      "hpi": "Emily Johnson is a 27-year-old female presenting with severe headache, fever, neck stiffness, photophobia. Past medical history includes College student in dormitory. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Bacterial Meningitis — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-199463",
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
              "value": "22.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
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
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "Lactate",
              "value": "3.6",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Csf Wbc",
              "value": "2200",
              "unit": "cells/µL",
              "range": "0-5",
              "flag": "H"
            },
            {
              "test": "Csf Protein",
              "value": "320",
              "unit": "mg/dL",
              "range": "15-45",
              "flag": "H"
            },
            {
              "test": "Csf Glucose",
              "value": "18",
              "unit": "mg/dL",
              "range": "40-70",
              "flag": "L"
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
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-234518",
      "clinical": "Severe headache, fever, neck stiffness, photophobia",
      "technique": "Standard protocol",
      "findings": "No acute intracranial abnormality. No mass effect or hydrocephalus.",
      "impression": "Normal. Safe for lumbar puncture.",
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
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social — college parties"
    ],
    [
      "Living",
      "College dormitory"
    ],
    [
      "Vaccination",
      "Meningococcal vaccine up to date — serogroup B not covered"
    ]
  ]
};

/* ── CASES format extension ─────────── */
window.CASES = window.CASES || {};
window.CASES['meningitis-v1'] = {
  id: 'meningitis-v1', name: 'Emily Johnson',
  chiefComplaint: 'Viral vs Bacterial Meningitis — CSF Differentiation',
  diagnosis: 'Viral vs Bacterial Meningitis — CSF Differentiation',
  orders: {
    correct: [{ id: 'lp-csf-analysis', name: 'LP with complete CSF analysis — differentiates viral from bacterial', rationale: 'CSF analysis is essential: viral = lymphocytic pleocytosis (100-500 WBC), normal glucose, normal/mildly elevated protein, negative gram stain/culture. Bacterial = PMN pleocytosis (>1000 WBC), low glucose (<45 mg/dL), elevated protein (>100), positive gram stain (50-80%). Cryptococcal: India ink stain, antigen.' },{ id: 'empirical-antibiotics-mv', name: 'Empirical antibiotics + acyclovir — treat until CSF culture results return', rationale: 'When bacterial vs viral meningitis cannot be definitively distinguished clinically: treat empirically with ceftriaxone + vancomycin + dexamethasone (bacterial coverage) + acyclovir (HSV encephalitis). CSF results guide de-escalation. Do not withhold antibiotics while awaiting culture results.' }],
    incorrect: [{ id: 'discharge-viral', name: 'Discharge home — CSF is viral pattern', rationale: 'Viral meningitis requires admission for symptomatic management (IV fluids, analgesics, antiemetics) and to observe for clinical deterioration or bacterial co-infection. Outpatient management of viral meningitis is only appropriate for mild, immunocompetent patients with clear viral etiology and reliable follow-up.' },{ id: 'no-lp-viral', name: 'No LP needed — clinical signs are viral', rationale: 'Clinical signs CANNOT reliably distinguish viral from bacterial meningitis — LP is required. However, if CT showing contraindications to LP: treat empirically for bacterial meningitis (ceftriaxone + vancomycin + dexamethasone + acyclovir) and proceed to LP as soon as safe.' }]
  },
  teachingPoints: {
    keyLearning: ['CSF comparison table: bacterial: WBC >1000 (PMN), protein >100, glucose <45 (CSF:serum <0.4), positive culture (70-85%). Viral: WBC 100-500 (lymphocytes), protein 50-100, glucose normal, negative culture. TB: lymphocytes, protein very high, glucose very low, AFB smear low sensitivity.','Enteroviruses: most common cause of viral meningitis (85-95%). Peaks in summer/fall. Coxsackievirus, echovirus, enterovirus 71. Self-limited, 7-10 days. HSV-1 and HSV-2: can cause both meningitis (HSV-2, Mollaret meningitis — recurrent) and encephalitis (HSV-1).','Bacterial meningitis mortality: 20-30% even with treatment. Neurological sequelae (hearing loss, cognitive impairment) in 30-50% of survivors. Outcomes worsen with delay in antibiotics — every hour matters.'],
    boardPearls: ['EBV and CMV meningitis: lymphocytic pleocytosis + atypical lymphocytes + heterophile antibody test (monospot). Less severe than bacterial. Cryptococcal meningitis: India ink positive, cryptococcal antigen, in HIV/immunocompromised patients.','Herpes simplex encephalitis: temporal lobe involvement, fever + altered consciousness + seizures. CSF: lymphocytic pleocytosis, RBCs (hemorrhagic), normal glucose. EEG: periodic lateralizing epileptiform discharges (PLEDs) from temporal lobe. MRI: temporal lobe T2 hyperintensity. Treat with acyclovir 10 mg/kg q8h × 14-21 days.','Listeria meningitis MRI: rhombencephalitis — brainstem + cerebellum involvement. Consider Listeria in elderly, immunocompromised, pregnant — add ampicillin to empirical regimen.']
  }
};
