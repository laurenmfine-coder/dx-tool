
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Eleanor Hutchins",
      "patientHPI": "My husband says I suddenly couldn't speak and my face drooped and my right arm went weak. He called 911 immediately. This started about 40 minutes ago.",
      "dob": "08/14/1950",
      "age": "75",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-229145",
      "language": "English",
      "race": "White",
      "phone": "(617) 555-9145",
      "email": "e.hutchins@email.com",
      "address": "84 Commonwealth Ave, Boston, MA 02116",
      "insurance": "Medicare",
      "pcp": "Dr. Thomas Walsh, MD",
      "pharmacy": "CVS \u2014 Boylston St",
      "emergencyContact": {
        "name": "George Hutchins",
        "phone": "(617) 555-7722",
        "relationship": "Spouse"
      }
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "",
        "severity": "",
        "type": ""
      }
    ],
    "immunizations": [
      {
        "name": "Influenza",
        "date": "10/2025",
        "lot": "FL-25",
        "site": "Left Deltoid"
      }
    ],
    "familyHistory": [
      "Father: stroke at 78",
      "Mother: hypertension, coronary artery disease"
    ],
    "socialHistory": [
      [
        "Anticoagulation",
        "On apixaban for chronic atrial fibrillation \u2014 LAST DOSE yesterday morning"
      ],
      [
        "Last known well",
        "40 minutes ago \u2014 husband witnessed sudden onset"
      ],
      [
        "HTN",
        "Poorly controlled \u2014 SBP often >160 per records"
      ],
      [
        "Smoking",
        "Never"
      ],
      [
        "Alcohol",
        "Rare"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "75F on apixaban for AF \u2014 sudden onset aphasia + right hemiplegia, LKW 40min ago, NIHSS 18 \u2014 STROKE ALERT",
        "diagnosis": "Acute Left MCA Ischemic Stroke \u2014 LVO \u2014 tPA + Thrombectomy"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Acute ischemic stroke \u2014 left MCA territory. NIHSS 18. LVO on CTA (left M1 occlusion). Within tPA window. Thrombectomy candidate.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "I63.512"
        },
        {
          "id": "prob-2",
          "description": "Aphasia \u2014 global (expressive + receptive) \u2014 left hemisphere dominant",
          "status": "Active",
          "onset": "Acute",
          "icd10": "R47.01"
        },
        {
          "id": "prob-3",
          "description": "Right hemiplegia \u2014 face, arm, leg",
          "status": "Active",
          "onset": "Acute",
          "icd10": "G81.90"
        },
        {
          "id": "prob-4",
          "description": "Atrial fibrillation \u2014 on apixaban (last dose yesterday morning). Cardioembolic stroke mechanism most likely.",
          "status": "Chronic",
          "onset": "Chronic",
          "icd10": "I48.91"
        },
        {
          "id": "prob-5",
          "description": "tPA eligibility \u2014 within 4.5h window. Last dose apixaban >12h ago \u2014 check anti-Xa level. No hemorrhage on CT.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "Z79.01"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Apixaban",
          "dose": "5mg",
          "route": "PO",
          "frequency": "BID",
          "status": "HOLD \u2014 last dose yesterday AM (>12h ago)",
          "prescriber": "Dr. Thomas Walsh, MD"
        },
        {
          "id": "med-2",
          "name": "Lisinopril",
          "dose": "20mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Thomas Walsh, MD"
        },
        {
          "id": "med-3",
          "name": "Metoprolol succinate",
          "dose": "50mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active",
          "prescriber": "Dr. Thomas Walsh, MD"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "09:42",
          "bp": "188/104",
          "hr": "88",
          "rr": "16",
          "temp": "36.8\u00b0C",
          "spo2": "97%",
          "pain": "0/10"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Stroke Alert \u2014 Emergency Visit",
          "date": "03/15/2026",
          "provider": "Dr. Attending",
          "cc": "Stroke alert \u2014 NIHSS 18, LKW 40min, within tPA and thrombectomy window",
          "hpi": "75F with AF on apixaban brought by EMS after husband witnessed sudden onset global aphasia and right hemiplegia at 09:02. Door-to-CT: 18 minutes. NIHSS 18 (6 language + 4 motor arm + 4 motor leg + 2 gaze + 2 facial). Non-contrast CT head: no hemorrhage, no established large territory infarction (ASPECTS 9/10). CTA head/neck: left M1 occlusion. Time to tPA decision: 28 min from door.\n\ntPA ELIGIBILITY CHECKLIST:\n\u2713 Ischemic stroke diagnosis\n\u2713 LKW <4.5 hours (40 min)\n\u2713 No hemorrhage on CT\n\u2713 NIHSS \u22654 (NIHSS 18)\n\u2713 BP <185/110 after treatment (labetalol given \u2014 BP now 178/98)\n\u2717 Anticoagulation: apixaban \u2014 LAST DOSE >12H AGO \u2014 check anti-Xa. If anti-Xa level <0.5 IU/mL, tPA permissible per AHA/ASA 2023 guidelines\n\u2713 No recent surgery, trauma, GI bleed\n\u2713 Age \u226518 (75yo)\n\nLVO THROMBECTOMY: Left M1 LVO + NIHSS 18 + ASPECTS 9 = STRONG CANDIDATE for mechanical thrombectomy up to 24h from LKW if penumbra present on perfusion imaging.",
          "assessment": "Give tPA alteplase 0.9mg/kg (max 90mg) IV while activating neurointerventional radiology for thrombectomy. Both treatments are additive \u2014 do not delay tPA waiting for thrombectomy, do not delay thrombectomy because tPA was given. BP target <185/110 before tPA, <180/105 during infusion.",
          "plan": "Labetalol 10mg IV for BP (target <185/110 pre-tPA). Anti-Xa level STAT. If anti-Xa <0.5 \u2192 give tPA. Alteplase 0.9mg/kg IV (7.5mg bolus then 67.5mg over 60min for 75kg). Activate IR for thrombectomy (LKWT <24h, NIHSS 18, ASPECTS 9, perfusion mismatch). Neurology/stroke attending at bedside. ICU post-procedure. Aspirin held x24h post-tPA. Continuous BP, neuro monitoring."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "09:50",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-229145",
          "collected": "03/15/2026 09:48",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "STROKE LABS \u2014 STAT",
              "results": [
                {
                  "test": "Glucose",
                  "value": "112",
                  "unit": "mg/dL",
                  "range": "70-100",
                  "flag": "H"
                },
                {
                  "test": "INR/PT",
                  "value": "1.1",
                  "unit": "",
                  "range": "<1.7 for tPA",
                  "flag": ""
                },
                {
                  "test": "aPTT",
                  "value": "28",
                  "unit": "sec",
                  "range": "25-35",
                  "flag": ""
                },
                {
                  "test": "Anti-Xa (apixaban)",
                  "value": "0.18",
                  "unit": "IU/mL",
                  "range": "<0.5 = tPA permissible",
                  "flag": ""
                },
                {
                  "test": "Platelets",
                  "value": "218",
                  "unit": "x10\u00b3/\u00b5L",
                  "range": ">100k for tPA",
                  "flag": ""
                },
                {
                  "test": "Hemoglobin",
                  "value": "12.8",
                  "unit": "g/dL",
                  "range": "12-16",
                  "flag": ""
                },
                {
                  "test": "Creatinine",
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
          "id": "img-1",
          "type": "CT Head Without Contrast \u2014 STAT",
          "date": "03/15/2026",
          "time": "09:52",
          "orderedBy": "Dr. Attending",
          "findings": "No hemorrhage. No established large territory infarction. Subtle loss of gray-white differentiation left MCA territory (early ischemic change). ASPECTS 9/10. No midline shift.",
          "impression": "No hemorrhage. Early left MCA ischemia. tPA eligible. ASPECTS 9.",
          "critical": true
        },
        {
          "id": "img-2",
          "type": "CTA Head and Neck",
          "date": "03/15/2026",
          "time": "09:55",
          "orderedBy": "Dr. Attending",
          "findings": "Left M1 segment occlusion \u2014 abrupt cutoff with no distal flow. Proximal MCA territory at risk. Moderate collateral filling. Carotid arteries patent bilaterally. No proximal dissection.",
          "impression": "Left M1 LVO. Thrombectomy candidate. Activate neurointerventional radiology.",
          "critical": true
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Post-thrombectomy day 1 \u2014 TICI 2b reperfusion. NIHSS improved from 18 to 8.",
        "diagnosis": "Acute Left MCA Ischemic Stroke \u2014 Post-tPA + Thrombectomy (TICI 2b)"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Post-thrombectomy day 1. TICI 2b reperfusion (>50% territory). NIHSS improved 18\u21928. Aphasia partially improved \u2014 expressive > receptive.",
          "status": "Improving",
          "onset": "Acute",
          "icd10": "I63.512"
        },
        {
          "id": "prob-2",
          "description": "Hemorrhagic transformation risk \u2014 24h post-tPA CT mandatory before restarting anticoagulation",
          "status": "At Risk",
          "onset": "Acute",
          "icd10": "I61.9"
        },
        {
          "id": "prob-3",
          "description": "Atrial fibrillation \u2014 restart apixaban at 48-72h post-stroke IF no hemorrhagic transformation AND stroke not large territory (risk of hemorrhagic conversion)",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "I48.91"
        },
        {
          "id": "prob-4",
          "description": "Dysphagia screen \u2014 failed bedside swallow. NPO. Speech/Language Pathology consult. Aspiration risk.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "R13.10"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Aspirin",
          "dose": "81mg",
          "route": "PO",
          "frequency": "Daily \u2014 started 24h post-tPA",
          "status": "Active",
          "prescriber": "Dr. Neurology"
        },
        {
          "id": "med-2",
          "name": "Atorvastatin",
          "dose": "80mg",
          "route": "PO",
          "frequency": "Nightly \u2014 high-intensity statin for all ischemic stroke",
          "status": "Active",
          "prescriber": "Dr. Neurology"
        },
        {
          "id": "med-3",
          "name": "Apixaban",
          "dose": "5mg",
          "route": "PO",
          "frequency": "BID \u2014 HOLD x72h, restart after hemorrhagic transformation excluded on MRI",
          "status": "HOLD",
          "prescriber": "Dr. Neurology"
        }
      ],
      "vitals": [
        {
          "date": "03/16/2026",
          "time": "06:00",
          "bp": "158/88",
          "hr": "82",
          "rr": "14",
          "temp": "37.1\u00b0C",
          "spo2": "97%",
          "pain": "1/10"
        }
      ],
      "visits": [
        {
          "id": "visit-2",
          "type": "Neurology Stroke Unit Note",
          "date": "03/16/2026",
          "provider": "Dr. Neurology Attending",
          "cc": "Post-thrombectomy day 1 \u2014 NIHSS 8, monitoring for hemorrhagic transformation",
          "hpi": "Patient had successful thrombectomy with TICI 2b reperfusion (>50% territory reperfused). 24h post-tPA non-contrast CT shows petechial hemorrhagic transformation (HI-1) \u2014 expected, not symptomatic, does NOT preclude anticoagulation restart.\n\nKEY STROKE SECONDARY PREVENTION DECISIONS:\n1. Anticoagulation (AF): Restart apixaban at 72h given HI-1 (petechial only, not parenchymal hematoma). For large infarcts or PH2, delay 2-4 weeks.\n2. BP: Target <140/90 after 24h (permissive hypertension in first 24h to preserve penumbra \u2014 then normalize).\n3. Statin: High-intensity (atorvastatin 80mg) for all ischemic stroke regardless of LDL.\n4. Cardiac monitoring: 30-day cardiac event monitor to detect paroxysmal AF if mechanism unclear.\n5. Swallow: Failed screen \u2014 NPO, NG tube, SLP formal evaluation.",
          "assessment": "Good early neurologic recovery. Restart anticoagulation at 72h. PT/OT/SLP rehabilitation. Stroke secondary prevention bundle.",
          "plan": "Restart apixaban at 72h. Aspirin bridge until then. High-intensity statin. SLP swallow eval. PT/OT daily. 24h BP target <140/90. Cardiac telemetry x72h then 30-day cardiac monitor (Zio patch). Echocardiogram. LDL fasting. Carotid imaging (already done \u2014 carotids patent). Discharge to inpatient rehab. Outpatient neurology in 4 weeks."
        }
      ],
      "labs": [
        {
          "date": "03/16/2026",
          "time": "06:00",
          "status": "Final",
          "orderedBy": "Dr. Neurology",
          "accession": "LAB-229146",
          "collected": "03/16/2026 05:55",
          "fasting": "Fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "LIPIDS AND METABOLIC",
              "results": [
                {
                  "test": "LDL",
                  "value": "128",
                  "unit": "mg/dL",
                  "range": "<70 post-stroke",
                  "flag": "H"
                },
                {
                  "test": "Total Cholesterol",
                  "value": "198",
                  "unit": "mg/dL",
                  "range": "<200",
                  "flag": ""
                },
                {
                  "test": "HDL",
                  "value": "42",
                  "unit": "mg/dL",
                  "range": ">50",
                  "flag": "L"
                },
                {
                  "test": "HbA1c",
                  "value": "5.9",
                  "unit": "%",
                  "range": "<5.7",
                  "flag": "H"
                }
              ]
            }
          ]
        }
      ],
      "imaging": [
        {
          "id": "img-3",
          "type": "CT Head Without Contrast \u2014 24h Post-tPA",
          "date": "03/16/2026",
          "time": "09:30",
          "orderedBy": "Dr. Neurology",
          "findings": "Petechial hemorrhagic transformation (HI-1) within left MCA territory \u2014 small punctate hyperdensities without mass effect. No parenchymal hematoma (PH1 or PH2). No new hemorrhage outside infarct territory. Evolving left MCA infarction \u2014 now well-defined.",
          "impression": "HI-1 hemorrhagic transformation \u2014 expected post-tPA/thrombectomy, not symptomatic. Can restart anticoagulation at 72h. Left MCA infarction established.",
          "critical": false
        }
      ]
    }
  },
  "references": [
    {
      "id": "AHA-Stroke-2023",
      "title": "2023 AHA/ASA Guideline for the Early Management of Patients with Acute Ischemic Stroke",
      "authors": "Kleindorfer DO, Towfighi A, Chaturvedi S, et al.",
      "journal": "Stroke",
      "year": 2023,
      "doi": "10.1161/STR.0000000000000436",
      "url": "https://www.ahajournals.org/doi/10.1161/STR.0000000000000436",
      "openAccess": true,
      "validates": [
        "tPA eligibility criteria",
        "Anti-Xa threshold for tPA on DOACs",
        "BP management",
        "LVO thrombectomy criteria"
      ]
    },
    {
      "id": "StatPearls-Stroke",
      "title": "Acute Ischemic Stroke",
      "authors": "Tadi P, Lui F",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK535369/",
      "openAccess": true,
      "validates": [
        "NIHSS scoring",
        "tPA protocol",
        "Secondary prevention bundle"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Acute Ischemic Stroke \u2014 tPA Eligible, 2.5-Hour Onset, NIHSS 14",
    "caseId": "acute-ischemic-stroke-tpa"
  },
  "problems": [
    {
      "problem": "Acute ischemic stroke \u2014 MCA territory",
      "icd": "I63.512",
      "onset": "2024",
      "status": "Active",
      "notes": "NIHSS 14, last known well 2.5h ago \u2014 within tPA window. No contraindications identified."
    },
    {
      "problem": "Atrial fibrillation \u2014 new, likely cardioembolic source",
      "icd": "I48.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Irregularly irregular rhythm on ECG \u2014 first detected today. Cardioembolic stroke mechanism."
    },
    {
      "problem": "BP 194/108 \u2014 must lower before tPA",
      "icd": "I63.512",
      "onset": "2024",
      "status": "Active",
      "notes": "BP >185/110 is absolute contraindication to tPA \u2014 must reach <185/110 before administration"
    }
  ],
  "medications": [
    {
      "name": "Labetalol 10mg IV x2 \u2014 BP reduction before tPA",
      "sig": "IV push, may repeat q10 min \u2014 target BP <185/110 before tPA",
      "prescriber": "Neurology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active pre-tPA"
    },
    {
      "name": "Alteplase (tPA) 0.9mg/kg IV (max 90mg) \u2014 10% bolus over 1 min, rest over 1h",
      "sig": "Weight-based dose \u2014 10% bolus immediately, remainder over 60 minutes",
      "prescriber": "Neurology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Aspirin \u2014 HOLD x24h after tPA",
      "sig": "Do not give aspirin for 24 hours after tPA \u2014 bleeding risk",
      "prescriber": "Neurology",
      "start": "11/2024",
      "refills": 0,
      "status": "HOLD 24h post-tPA"
    },
    {
      "name": "Apixaban 5mg BID \u2014 start after 24h imaging confirms no hemorrhage",
      "sig": "Anticoagulation for AFib \u2014 start once tPA hemorrhage window cleared",
      "prescriber": "Neurology",
      "start": "11/2024",
      "refills": 5,
      "status": "Start 24h post-tPA pending imaging"
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Stroke Workup \u2014 Pre-tPA",
      "results": [
        {
          "test": "Glucose (POC)",
          "value": "112",
          "unit": "mg/dL",
          "ref": "70-400 acceptable for tPA",
          "flag": ""
        },
        {
          "test": "INR",
          "value": "1.0",
          "unit": "",
          "ref": "<1.7 for tPA",
          "flag": ""
        },
        {
          "test": "Platelets",
          "value": "228",
          "unit": "K/\u03bcL",
          "ref": ">100,000 for tPA",
          "flag": ""
        },
        {
          "test": "PTT",
          "value": "28",
          "unit": "sec",
          "ref": "<40 for tPA",
          "flag": ""
        },
        {
          "test": "Creatinine",
          "value": "1.0",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "CT Head Non-Contrast + CT Angiography Head/Neck",
      "indication": "Acute neurological deficit \u2014 stroke protocol",
      "findings": "CT Head: No hemorrhage. No hyper-dense MCA sign. No early ischemic changes (ASPECTS 9). CTA: Left M1 occlusion. Adequate collaterals. No cervical carotid stenosis. CTP (if performed): Ischemic core <10mL, penumbra 80mL \u2014 large salvageable tissue.",
      "impression": "Left M1 occlusion \u2014 LARGE ischemic penumbra. IV tPA eligible. Also candidate for mechanical thrombectomy (large vessel occlusion). Activate neurointerventional team for concurrent thrombectomy planning."
    }
  ],
  "guided": {
    "ddxTargets": [
      "Acute ischemic stroke \u2014 tPA eligible, M1 occlusion (correct)",
      "Hemorrhagic stroke \u2014 CT shows no hemorrhage",
      "Todd's paralysis \u2014 no seizure history, acute onset, CT/CTA shows occlusion",
      "Hypoglycemic hemiplegia \u2014 glucose 112, not hypoglycemic",
      "Complex migraine \u2014 no migraine history, M1 occlusion confirmed",
      "Hypertensive encephalopathy \u2014 would be bilateral, diffuse"
    ],
    "coachPrompts": {
      "final": "Diagnosis: acute ischemic stroke, M1 occlusion, tPA eligible. Key learning: (1) Time = brain: 1.9 million neurons die per minute in untreated LVO stroke. Door-to-needle time goal <60 minutes. (2) tPA eligibility checklist \u2014 key contraindications: hemorrhage on CT (absolute), BP >185/110 (must treat first), glucose <50 or >400, INR >1.7 (anticoagulated), platelets <100K, known arteriovenous malformation, recent surgery/trauma within 3 months (relative). (3) BP management: lower to <185/110 before tPA using labetalol or nicardipine. After tPA: maintain <180/105 for 24h to prevent hemorrhagic transformation. (4) Large vessel occlusion \u2192 mechanical thrombectomy: M1 occlusion + large penumbra = ideal candidate for thrombectomy (DAWN/DEFUSE trials extend window to 24h with imaging selection). tPA + thrombectomy is superior to tPA alone for LVO. Activate interventional neuro simultaneously. (5) AFib detected acutely: confirms cardioembolic mechanism. Anticoagulate AFTER hemorrhage excluded at 24-hour imaging. DOAC preferred over warfarin for AFib-related stroke."
    }
  }
};
