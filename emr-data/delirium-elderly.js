
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Helen Kowalski",
      "patientHPI": "Patient unable to give coherent history \u2014 she is confused and pulling at her IV. Her daughter reports: 'She was completely fine at home yesterday. She came in for a hip replacement and now she doesn't know where she is. She keeps asking for her dead husband. This is not my mother.'",
      "dob": "03/08/1940",
      "age": "85",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-551024",
      "language": "English/Polish",
      "race": "White",
      "phone": "(773) 555-1024",
      "email": "",
      "address": "5512 N. Milwaukee Ave, Chicago, IL 60630",
      "insurance": "Medicare",
      "pcp": "Dr. Stanislaw Ptak, MD",
      "pharmacy": "Walgreens \u2014 Milwaukee Ave",
      "emergencyContact": {
        "name": "Barbara Kowalski-Jones",
        "phone": "(773) 555-8844",
        "relationship": "Daughter (HCP)"
      }
    },
    "allergies": [
      {
        "allergen": "Penicillin",
        "reaction": "Rash (reported, no documentation)",
        "severity": "Unknown",
        "type": "Drug"
      }
    ],
    "immunizations": [
      {
        "name": "Influenza",
        "date": "10/2025",
        "lot": "FL-25",
        "site": "Left Deltoid"
      },
      {
        "name": "Pneumovax 23",
        "date": "2020",
        "lot": "",
        "site": ""
      },
      {
        "name": "Shingrix dose 2",
        "date": "2022",
        "lot": "",
        "site": ""
      }
    ],
    "familyHistory": [
      "Daughter reports no family history of dementia or psychiatric illness"
    ],
    "socialHistory": [
      [
        "Baseline",
        "COMPLETELY INDEPENDENT at baseline \u2014 daughter confirms: 'She drives herself to bingo, lives alone, manages her own finances, cooks every day.' Critical: baseline assessment is key in delirium."
      ],
      [
        "Living",
        "Lives alone \u2014 independent. Daughter lives nearby and sees her daily."
      ],
      [
        "Smoking",
        "Never"
      ],
      [
        "Alcohol",
        "Rare"
      ],
      [
        "Admission",
        "Admitted yesterday for elective right total hip arthroplasty \u2014 uncomplicated surgery. Became acutely confused 18h post-op."
      ]
    ]
  },
  "encounters": {
    "inpatient": {
      "patient": {
        "chiefComplaint": "85F post-op day 1 total hip arthroplasty \u2014 acute onset confusion, agitation, pulling at IV \u2014 daughter states 'this is not my mother' \u2014 DELIRIUM workup",
        "diagnosis": "Post-Operative Delirium \u2014 Hyperactive Subtype \u2014 Multiple Precipitating Factors"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Post-operative delirium \u2014 acute onset, fluctuating, inattention. CAM positive. Multiple precipitants: pain, opioids, sleep deprivation, urinary retention, unfamiliar environment, Foley catheter, sensory impairment (glasses removed, hearing aids out).",
          "status": "Active",
          "onset": "Acute",
          "icd10": "F05"
        },
        {
          "id": "prob-2",
          "description": "Pain \u2014 inadequately controlled post-op \u2192 paradoxical agitation from undertreated pain OR opioid excess. Must distinguish.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "M25.511"
        },
        {
          "id": "prob-3",
          "description": "Urinary retention \u2014 Foley in situ but was clamped for trial void \u2014 bladder scan 480mL. Painful distension contributing to delirium.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "R33.9"
        },
        {
          "id": "prob-4",
          "description": "Sleep deprivation \u2014 vitals Q2H overnight, lights on, multiple interventions \u2014 disrupted circadian rhythm",
          "status": "Active",
          "onset": "Acute",
          "icd10": "G47.00"
        },
        {
          "id": "prob-5",
          "description": "Sensory impairment unaddressed \u2014 glasses and hearing aids removed on admission. Patient cannot see or hear properly.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "H91.90"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Oxycodone",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Q4H PRN pain (ordered Q4H \u2014 may be too frequent for 85yo)",
          "status": "REVIEW \u2014 dose and frequency for elderly",
          "prescriber": "Dr. Orthopedics"
        },
        {
          "id": "med-2",
          "name": "Diphenhydramine (Benadryl)",
          "dose": "50mg",
          "route": "PO",
          "frequency": "PRN sleep \u2014 ordered by night nurse",
          "status": "STOP \u2014 Beers Criteria, anticholinergic delirium precipitant",
          "prescriber": "Night Resident"
        },
        {
          "id": "med-3",
          "name": "Metoprolol succinate",
          "dose": "50mg",
          "route": "PO",
          "frequency": "Daily \u2014 home medication",
          "status": "Active",
          "prescriber": "Dr. Stanislaw Ptak, MD"
        },
        {
          "id": "med-4",
          "name": "Lisinopril",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily \u2014 home medication",
          "status": "Active",
          "prescriber": "Dr. Stanislaw Ptak, MD"
        },
        {
          "id": "med-5",
          "name": "Atorvastatin",
          "dose": "40mg",
          "route": "PO",
          "frequency": "Nightly \u2014 home medication",
          "status": "Active",
          "prescriber": "Dr. Stanislaw Ptak, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/16/2026",
          "time": "06:00",
          "bp": "148/88",
          "hr": "96",
          "rr": "18",
          "temp": "37.6\u00b0C",
          "spo2": "94%",
          "pain": "Unable to assess verbally \u2014 grimacing"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Medicine Consult \u2014 Delirium Evaluation",
          "date": "03/16/2026",
          "provider": "Dr. Medicine/Geriatrics",
          "cc": "Post-op delirium \u2014 acute onset confusion in previously independent 85F \u2014 CAM positive",
          "hpi": "85F, fully independent at baseline, presents with acute onset confusion 18h post right total hip arthroplasty. Daughter at bedside reports complete behavioral change from baseline. CAM (Confusion Assessment Method) assessment: POSITIVE (acute onset + fluctuating course + inattention + disorganized thinking).\n\nDELIRIUM FRAMEWORK \u2014 PREDISPOSING + PRECIPITATING:\nPREDISPOSING (patient risk factors for delirium):\n- Age >65 (85yo)\n- Cognitive reserve (even without dementia, aging brain is vulnerable)\n- Sensory impairment (glasses out, hearing aids out)\n- Female sex\n- Surgical/anesthesia exposure\n\nPRECIPITATING FACTORS (FIND ME mnemonic):\nF \u2014 Fecal impaction: check\nI \u2014 Infection: UA, CXR (surgical wound check)\nN \u2014 Nutrition/fluid: NPO before surgery, poor intake post-op\nD \u2014 Drugs: OPIOIDS (oxycodone Q4H), DIPHENHYDRAMINE (Beers \u2014 STOP immediately)\nM \u2014 Metabolic: electrolytes, glucose, thyroid\nE \u2014 Environment: sleep deprivation, Foley, restraints\n\nKEY TEACHING: Delirium is NOT 'expected' or 'normal' post-op in the elderly. It is a MEDICAL EMERGENCY with 30-40% mortality and long-term cognitive consequences. Always identify and treat all precipitants. Physical restraints WORSEN delirium.",
          "assessment": "Post-op hyperactive delirium \u2014 multiple modifiable precipitants. Non-pharmacological management first. Stop anticholinergic drugs (diphenhydramine). Treat pain adequately (paradoxically, undertreated pain is a major delirium precipitant \u2014 use scheduled low-dose acetaminophen + judicious opioid). Relieve urinary retention. Restore sensory input. Sleep protocol.",
          "plan": "STOP diphenhydramine immediately (Beers Criteria \u2014 anticholinergic). Review all medications for anticholinergic burden. RESTORE GLASSES and HEARING AIDS now. Relieve urinary retention (unclamped Foley \u2014 480mL drained). Scheduled acetaminophen 1000mg Q8H (reduces opioid requirement). REDUCE opioid (oxycodone 5mg Q6H PRN \u2014 half dose, less frequent). Reorientation q1h \u2014 clocks, windows, family presence. No physical restraints (worsens delirium). NO Haldol unless patient is danger to self (mild preferred over typical antipsychotics). Sleep protocol: lights off 10pm, cluster care, NO vitals Q2H unless clinical change. Early PT \u2014 mobilize tomorrow morning. Geriatrics consult. Consider delirium order set. UA, CXR, BMP, CBC to exclude infectious/metabolic precipitant."
        }
      ],
      "labs": [
        {
          "date": "03/16/2026",
          "time": "06:30",
          "status": "Final",
          "orderedBy": "Dr. Medicine",
          "accession": "LAB-551024",
          "collected": "03/16/2026 06:25",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood and Urine",
          "groups": [
            {
              "name": "DELIRIUM WORKUP",
              "results": [
                {
                  "test": "Sodium",
                  "value": "132",
                  "unit": "mEq/L",
                  "range": "136-145",
                  "flag": "L"
                },
                {
                  "test": "Glucose",
                  "value": "148",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": "H"
                },
                {
                  "test": "BUN",
                  "value": "28",
                  "unit": "mg/dL",
                  "range": "7-20",
                  "flag": "H"
                },
                {
                  "test": "Creatinine",
                  "value": "1.2",
                  "unit": "mg/dL",
                  "range": "0.6-1.1",
                  "flag": "H"
                },
                {
                  "test": "Hemoglobin",
                  "value": "9.8",
                  "unit": "g/dL",
                  "range": "12.0-16.0",
                  "flag": "L"
                },
                {
                  "test": "TSH",
                  "value": "2.4",
                  "unit": "mIU/L",
                  "range": "0.4-4.0",
                  "flag": ""
                },
                {
                  "test": "WBC",
                  "value": "12.8",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": "4.5-11.0",
                  "flag": "H"
                }
              ]
            },
            {
              "name": "URINALYSIS",
              "results": [
                {
                  "test": "UA WBCs",
                  "value": "8-10/hpf",
                  "unit": "",
                  "range": "<5",
                  "flag": "H"
                },
                {
                  "test": "UA Bacteria",
                  "value": "Moderate",
                  "unit": "",
                  "range": "None",
                  "flag": "H"
                },
                {
                  "test": "UA Nitrite",
                  "value": "Positive",
                  "unit": "",
                  "range": "Negative",
                  "flag": "H"
                },
                {
                  "test": "Urine Culture",
                  "value": "Pending 24-48h",
                  "unit": "",
                  "range": "No growth",
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
          "type": "Chest X-Ray Portable AP",
          "date": "03/16/2026",
          "time": "07:00",
          "orderedBy": "Dr. Medicine",
          "findings": "No acute cardiopulmonary process. Mild atelectasis bilateral bases. No pneumonia. No pneumothorax. Mild cardiomegaly consistent with prior imaging.",
          "impression": "No pneumonia. Basilar atelectasis \u2014 encourage incentive spirometry.",
          "critical": false
        }
      ]
    },
    "ed": {
      "patient": {
        "chiefComplaint": "Not applicable \u2014 patient admitted directly from OR recovery",
        "diagnosis": "Admitted post-operatively"
      },
      "problems": [],
      "medications": [],
      "vitals": [],
      "visits": [],
      "labs": [],
      "imaging": []
    }
  },
  "references": [
    {
      "id": "StatPearls-Delirium",
      "title": "Delirium",
      "authors": "Fong TG, Tulebaev SR, Inouye SK",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK470530/",
      "openAccess": true,
      "validates": [
        "CAM diagnostic criteria",
        "Predisposing vs precipitating factors",
        "Non-pharmacologic management",
        "Beers Criteria medications to avoid",
        "Anticholinergic drugs and delirium"
      ]
    },
    {
      "id": "AGS-Beers-2023",
      "title": "American Geriatrics Society 2023 Beers Criteria for Potentially Inappropriate Medication Use in Older Adults",
      "authors": "American Geriatrics Society Beers Criteria Update Expert Panel",
      "journal": "Journal of the American Geriatrics Society",
      "year": 2023,
      "doi": "10.1111/jgs.18372",
      "url": "https://agsjournals.onlinelibrary.wiley.com/doi/10.1111/jgs.18372",
      "openAccess": true,
      "validates": [
        "Diphenhydramine in elderly",
        "Anticholinergic burden",
        "Inappropriate medications post-op"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Delirium in Elderly \u2014 Multifactorial, Hospital-Acquired",
    "caseId": "delirium-elderly"
  },
  "problems": [
    {
      "problem": "Acute delirium \u2014 fluctuating confusion, hospital day 3",
      "icd": "F05",
      "onset": "2024",
      "status": "Active",
      "notes": "Harold Foster, 82M \u2014 admitted for hip fracture, post-op day 2. Now acutely confused, agitated at night, pulling at IV lines. CAM positive. Multiple predisposing and precipitating factors."
    },
    {
      "problem": "Predisposing factors \u2014 high delirium risk baseline",
      "icd": "F05",
      "onset": "2024",
      "status": "Active",
      "notes": "Age >80, pre-existing cognitive impairment, hearing impairment, dehydration, functional dependence. High baseline vulnerability."
    },
    {
      "problem": "Precipitating factors \u2014 identify and treat each one",
      "icd": "F05",
      "onset": "2024",
      "status": "Active",
      "notes": "Post-op pain (undertreated), catheter, sleep deprivation, anticholinergic medications (diphenhydramine for sleep), constipation, urinary retention, dehydration. The VINDICATE mnemonic covers all causes."
    }
  ],
  "medications": [
    {
      "name": "Non-pharmacologic delirium management \u2014 FIRST LINE",
      "sig": "Reorientation (large clock, calendar, familiar objects), restore sleep-wake cycle (no vitals at night unless critical), early mobilization, remove catheter, optimize sensory input (hearing aids, glasses), minimize unnecessary medications.",
      "prescriber": "Medicine/Geriatrics",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 bundle initiated"
    },
    {
      "name": "Low-dose haloperidol 0.25-0.5mg PO/IM PRN \u2014 hyperactive delirium only",
      "sig": "Only if patient is dangerous to self or others despite non-pharmacologic measures. Does NOT treat delirium \u2014 only manages agitation. Avoid benzodiazepines (worsen delirium). Avoid in Lewy body dementia (extrapyramidal crisis).",
      "prescriber": "Medicine/Geriatrics",
      "start": "2024",
      "refills": 0,
      "status": "PRN \u2014 last resort"
    },
    {
      "name": "Discontinue all anticholinergic and sedating medications",
      "sig": "Review medication list: stop diphenhydramine, benzodiazepines, opioids (minimize), antihistamines, anticholinergics. These are modifiable precipitants.",
      "prescriber": "Medicine/Geriatrics",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 medication reconciliation"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Delirium Workup",
      "results": [
        {
          "test": "CAM (Confusion Assessment Method)",
          "value": "Positive \u2014 acute onset, fluctuating, inattention, disorganized thinking",
          "unit": "",
          "ref": "Negative = no delirium",
          "flag": "H"
        },
        {
          "test": "Sodium",
          "value": "131",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
        },
        {
          "test": "Urinalysis",
          "value": "WBC 12, bacteria present \u2014 UTI cannot be excluded",
          "unit": "",
          "ref": "<5 WBC",
          "flag": "H"
        },
        {
          "test": "Oxygen saturation",
          "value": "93",
          "unit": "%",
          "ref": "\u226595%",
          "flag": "L"
        },
        {
          "test": "Urine culture",
          "value": "Pending",
          "unit": "",
          "ref": "",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "CT Head Non-Contrast",
      "findings": "Chronic cortical atrophy consistent with age. No acute intracranial process. No hemorrhage. No midline shift.",
      "impression": "Age-related changes only. No acute intracranial cause of delirium."
    }
  ],
  "guided": {
    "ddxTargets": [
      "Hospital-acquired delirium \u2014 multifactorial (correct)",
      "Dementia alone \u2014 gradual onset, not fluctuating; delirium superimposed on dementia is common",
      "Septic encephalopathy \u2014 concurrent UTI possible; treat infection; but delirium predates positive culture",
      "Stroke \u2014 focal deficits; CT/MRI shows lesion; delirium can accompany",
      "Drug intoxication/withdrawal \u2014 medication review; diphenhydramine anticholinergic here"
    ],
    "coachPrompts": {
      "final": "Diagnosis: hospital-acquired delirium. Key learning: (1) CAM (Confusion Assessment Method) criteria: (1) acute onset and fluctuating course + (2) inattention + (3) disorganized thinking OR altered level of consciousness = delirium. CAM sensitivity 94-100%, specificity 90-95%. Must be POSITIVE for diagnosis. (2) VINDICATE mnemonic for delirium causes: Vascular (stroke, MI), Infectious (UTI, pneumonia, sepsis), Nutritional (thiamine, B12), Drugs (anticholinergics, opioids, benzos, steroids), Inflammatory (vasculitis), CNS (seizure, meningitis), Trauma (head injury), Endocrine (hypothyroid, glucose), metabolic/other. Address ALL modifiable factors. (3) Non-pharmacologic bundle (HELP program): reorientation, sleep hygiene (no vitals at 3am), early mobilization, remove catheters/restraints, hearing aids/glasses, adequate nutrition/hydration, cognitive stimulation. This is the evidence-based first-line treatment. (4) Avoid benzodiazepines: paradoxically worsen delirium. Only use in alcohol withdrawal delirium (DTs) and benzodiazepine withdrawal. (5) Delirium in dementia: dementia is the strongest predisposing factor for delirium. Delirium superimposed on dementia has worse outcomes and is underdiagnosed. Baseline cognitive function must be established from family/caregiver."
    }
  }
};
