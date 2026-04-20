
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "James Callahan",
      "patientHPI": "My heart has been pounding and racing all morning. It came on suddenly about four hours ago while I was drinking my coffee. I feel lightheaded and a little short of breath. I've never had anything like this before.",
      "dob": "10/22/1960",
      "age": "65",
      "sex": "Male",
      "pronouns": "he/him",
      "mrn": "MRN-228561",
      "language": "English",
      "race": "White",
      "phone": "(617) 555-8561",
      "email": "j.callahan@email.com",
      "address": "14 Beacon St, Boston, MA 02108",
      "insurance": "Blue Cross Blue Shield",
      "pcp": "Dr. Michael Sullivan, MD",
      "pharmacy": "CVS \u2014 Beacon St",
      "emergencyContact": {
        "name": "Katherine Callahan",
        "phone": "(617) 555-4433",
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
      "Father: coronary artery disease, MI at 58",
      "Mother: atrial fibrillation, stroke at 70"
    ],
    "socialHistory": [
      [
        "Caffeine",
        "4-5 cups of coffee daily \u2014 caffeine trigger for AF"
      ],
      [
        "Alcohol",
        "2-3 drinks nightly \u2014 alcohol is a common AF trigger ('Holiday Heart')"
      ],
      [
        "Smoking",
        "Former \u2014 quit 10 years ago, 20 pack-years"
      ],
      [
        "Exercise",
        "Moderately active \u2014 plays golf 2x/week"
      ],
      [
        "Hypertension",
        "Diagnosed 3 years ago \u2014 on lisinopril 10mg daily"
      ]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "65M \u2014 sudden onset palpitations + mild dyspnea x4h \u2014 HR 142 irregular \u2014 EKG confirms AF with RVR \u2014 onset within 12h \u2014 cardioversion candidate",
        "diagnosis": "New-Onset Atrial Fibrillation with Rapid Ventricular Response (RVR) \u2014 Hemodynamically Stable"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "New-onset AF with RVR \u2014 HR 142, irregular. Onset <12h (4h by history). Hemodynamically stable (BP 136/84). Cardioversion candidate (onset <12h = low thromboembolic risk for immediate cardioversion without anticoagulation bridge per guidelines).",
          "status": "Active",
          "onset": "Acute",
          "icd10": "I48.0"
        },
        {
          "id": "prob-2",
          "description": "CHA2DS2-VASc score = 2 (age \u226565 = 1pt, HTN = 1pt). Score \u22652 in males = anticoagulation indicated. Will need long-term anticoagulation even if cardioversion successful.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "I48.0"
        },
        {
          "id": "prob-3",
          "description": "CHADS2-VASc calculation: C=0, H=1(HTN), A2=0, D=0, S2=0, V=0, A=1(age 65), Sc=0 \u2192 TOTAL 2",
          "status": "Active",
          "onset": "Acute",
          "icd10": "I48.0"
        },
        {
          "id": "prob-4",
          "description": "Thyroid function \u2014 TSH needed to exclude hyperthyroidism as trigger (new AF workup)",
          "status": "Active",
          "onset": "Acute",
          "icd10": "E05.90"
        },
        {
          "id": "prob-5",
          "description": "Triggers: caffeine (4-5 cups/day), alcohol (2-3 drinks nightly \u2014 Holiday Heart phenomenon). Lifestyle counseling essential.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "F10.10"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Lisinopril",
          "dose": "10mg",
          "route": "PO",
          "frequency": "Daily",
          "status": "Active \u2014 continue",
          "prescriber": "Dr. Michael Sullivan, MD"
        },
        {
          "id": "med-2",
          "name": "Metoprolol tartrate",
          "dose": "5mg IV",
          "route": "IV",
          "frequency": "Q5 min x3 doses PRN for rate control (target HR <100)",
          "status": "Active \u2014 for rate control",
          "prescriber": "Dr. Attending"
        },
        {
          "id": "med-3",
          "name": "Heparin",
          "dose": "Bolus per weight-based protocol",
          "route": "IV",
          "frequency": "Continuous infusion \u2014 before cardioversion if onset unclear or >12h",
          "status": "HOLD \u2014 onset <12h, cardioversion planned",
          "prescriber": "Dr. Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "11:00",
          "bp": "136/84",
          "hr": "142",
          "rr": "20",
          "temp": "37.0\u00b0C",
          "spo2": "96%",
          "pain": "2/10"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Emergency Visit",
          "date": "03/15/2026",
          "provider": "Dr. Attending",
          "cc": "New-onset AF with RVR \u2014 rate vs rhythm decision",
          "hpi": "65M with HTN presents with 4-hour history of sudden-onset palpitations and mild dyspnea. HR 142, irregularly irregular. EKG confirms AF with RVR \u2014 no flutter, no WPW (no delta waves). No chest pain. BP 136/84 \u2014 hemodynamically STABLE.\n\nAF MANAGEMENT FRAMEWORK:\n1. HEMODYNAMICALLY UNSTABLE? (hypotension, chest pain, pulmonary edema, altered mental status)\n   \u2192 Immediate ELECTRICAL cardioversion (synchronized DC cardioversion)\n   \u2192 This patient: STABLE \u2014 medical management first\n\n2. ONSET <48h? (ideally <12h)\n   \u2192 Cardioversion WITHOUT anticoagulation bridge if onset documented <12h\n   \u2192 MUST anticoagulate AFTER cardioversion regardless (prevents post-cardioversion thrombus from 'atrial stunning')\n   \u2192 This patient: onset 4h \u2014 cardioversion appropriate\n\n3. ONSET >48h OR UNKNOWN?\n   \u2192 3 weeks anticoagulation before cardioversion OR TEE to exclude LAA thrombus\n   \u2192 4 weeks anticoagulation after cardioversion regardless\n\n4. RATE vs RHYTHM CONTROL?\n   \u2192 Both acceptable for most patients (AFFIRM trial)\n   \u2192 Rhythm control may be preferred: first episode, young patient, symptomatic, heart failure\n   \u2192 This patient: first episode + symptomatic \u2192 attempt rhythm control\n\nCHA2DS2-VASc = 2 \u2192 long-term anticoagulation REQUIRED (DOAC preferred over warfarin)\n\nTHYROID: TSH mandatory in new-onset AF \u2014 hyperthyroid can cause persistent AF refractory to cardioversion.",
          "assessment": "Hemodynamically stable new-onset AF, onset <12h. Attempt pharmacologic cardioversion (amiodarone or flecainide \u2014 depends on structural heart disease). If fails, synchronized electrical cardioversion. Start DOAC regardless of cardioversion outcome (CHA2DS2-VASc 2). Rate control in interim with metoprolol.",
          "plan": "Metoprolol 5mg IV for rate control while preparing for cardioversion (goal HR <110 for stable AF). ECHO to assess LV function (needed before flecainide \u2014 avoid if structural heart disease). If EF normal: flecainide 200mg PO (pill-in-pocket) or IV amiodarone 150mg over 10 min. Electrical cardioversion if pharmacologic fails. Start apixaban (CHA2DS2-VASc 2) IMMEDIATELY post-cardioversion. TSH, echo, Holter monitor outpatient. AF clinic referral. Lifestyle: reduce alcohol and caffeine. Cardiology follow-up in 2 weeks."
        }
      ],
      "labs": [
        {
          "date": "03/15/2026",
          "time": "11:20",
          "status": "Final",
          "orderedBy": "Dr. Attending",
          "accession": "LAB-228561",
          "collected": "03/15/2026 11:15",
          "fasting": "Not fasting",
          "facility": "ReasonDx Medical Center",
          "specimenType": "Blood",
          "groups": [
            {
              "name": "AF WORKUP",
              "results": [
                {
                  "test": "TSH",
                  "value": "1.8",
                  "unit": "mIU/L",
                  "range": "0.4-4.0 (hyperthyroid excluded)",
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
                  "test": "Magnesium",
                  "value": "1.9",
                  "unit": "mg/dL",
                  "range": "1.7-2.2",
                  "flag": ""
                },
                {
                  "test": "TSH",
                  "value": "1.8",
                  "unit": "mIU/L",
                  "range": "0.4-4.0",
                  "flag": ""
                },
                {
                  "test": "BNP",
                  "value": "142",
                  "unit": "pg/mL",
                  "range": "<100 (mildly elevated \u2014 tachycardia effect)",
                  "flag": "H"
                },
                {
                  "test": "Troponin I",
                  "value": "0.01",
                  "unit": "ng/mL",
                  "range": "<0.04",
                  "flag": ""
                },
                {
                  "test": "CBC",
                  "value": "WBC 8.2, Hgb 14.8, Plt 222 \u2014 normal",
                  "unit": "",
                  "range": "Normal",
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
          "type": "EKG 12-Lead",
          "date": "03/15/2026",
          "time": "11:05",
          "orderedBy": "Dr. Attending",
          "findings": "Irregularly irregular rhythm, no distinct P waves, fibrillatory baseline, ventricular rate 142 bpm. QRS narrow (85ms). No delta waves. No ST changes. No LVH. QTc 420ms.",
          "impression": "Atrial fibrillation with rapid ventricular response. No evidence of WPW or pre-excitation. QTc normal \u2014 safe for antiarrhythmic therapy.",
          "critical": false
        },
        {
          "id": "img-2",
          "type": "Transthoracic Echocardiogram (urgent)",
          "date": "03/15/2026",
          "time": "12:00",
          "orderedBy": "Dr. Attending",
          "findings": "Left ventricular ejection fraction 60% \u2014 PRESERVED. No wall motion abnormalities. No significant valvular disease. Left atrium mildly enlarged (4.2cm). No pericardial effusion.",
          "impression": "Preserved EF. No structural heart disease. EF normal \u2014 flecainide safe to use for cardioversion.",
          "critical": false
        }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Successfully cardioverted to sinus rhythm with IV amiodarone \u2014 HR 72 NSR \u2014 apixaban started",
        "diagnosis": "Atrial Fibrillation \u2014 Successfully Cardioverted \u2014 Sinus Rhythm \u2014 Apixaban Initiated"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "AF \u2014 cardioverted to NSR with IV amiodarone 150mg. Currently in sinus rhythm HR 72. Apixaban 5mg BID started immediately post-cardioversion (atrial stunning risk x4 weeks).",
          "status": "Resolved (in sinus)",
          "onset": "Acute",
          "icd10": "I48.0"
        },
        {
          "id": "prob-2",
          "description": "Long-term anticoagulation \u2014 apixaban 5mg BID indefinitely (CHA2DS2-VASc 2). Even if AF does not recur, risk of recurrence in first year is ~50%.",
          "status": "Active",
          "onset": "Acute",
          "icd10": "I48.0"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Apixaban (Eliquis)",
          "dose": "5mg",
          "route": "PO",
          "frequency": "BID \u2014 LONG TERM. CHA2DS2-VASc 2.",
          "status": "Active \u2014 started post-cardioversion",
          "prescriber": "Dr. Attending"
        },
        {
          "id": "med-2",
          "name": "Metoprolol succinate",
          "dose": "25mg",
          "route": "PO",
          "frequency": "Daily \u2014 rate control for any AF recurrence + ventricular rate protection",
          "status": "NEW \u2014 starting at discharge",
          "prescriber": "Dr. Attending"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "15:00",
          "bp": "128/78",
          "hr": "72",
          "rr": "16",
          "temp": "37.0\u00b0C",
          "spo2": "98%",
          "pain": "0/10"
        }
      ],
      "visits": [
        {
          "id": "visit-2",
          "type": "Observation Note \u2014 Post Cardioversion",
          "date": "03/15/2026",
          "provider": "Dr. Attending",
          "cc": "Successfully cardioverted \u2014 discharge planning",
          "hpi": "IV amiodarone 150mg over 10 min \u2192 cardioverted to sinus rhythm within 45 minutes. Currently HR 72, NSR confirmed on telemetry x3h. Asymptomatic. Apixaban 5mg given first dose. Starting metoprolol at discharge for rate protection if AF recurs.\n\nDISCHARGE TEACHING:\n- Apixaban: take with food, DO NOT skip doses, no NSAIDs (bleeding risk)\n- If palpitations recur \u2192 go to ED\n- Alcohol: MUST reduce (major modifiable AF trigger)\n- Caffeine: moderate (4-5 cups \u2192 1-2 cups)\n- Follow-up: cardiology 2 weeks, Holter monitor to document AF burden",
          "assessment": "Successful cardioversion. Discharge on apixaban + metoprolol. Cardiology follow-up.",
          "plan": "Discharge home. Apixaban 5mg BID indefinitely. Metoprolol succinate 25mg daily. Lifestyle: alcohol reduction, caffeine reduction. Cardiology in 2 weeks. Holter monitor (outpatient). Echo outpatient (if not done adequately today). Return to ED if palpitations/syncope/dyspnea recur."
        }
      ],
      "labs": [],
      "imaging": []
    }
  },
  "references": [
    {
      "id": "AHA-AF-2023",
      "title": "2023 ACC/AHA/ACCP/HRS Guideline for Diagnosis and Management of Atrial Fibrillation",
      "authors": "Joglar JA, Chung MK, Armbruster AL, et al.",
      "journal": "Circulation",
      "year": 2024,
      "doi": "10.1161/CIR.0000000000001193",
      "url": "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193",
      "openAccess": true,
      "validates": [
        "CHA2DS2-VASc scoring",
        "Cardioversion timing (<12h, <48h)",
        "Rate vs rhythm control",
        "DOAC selection",
        "Anticoagulation post-cardioversion"
      ]
    }
  ],
  "meta": {
    "diagnosis": "New-Onset Atrial Fibrillation \u2014 Hemodynamically Stable, Rhythm vs Rate Control Decision",
    "caseId": "new-onset-atrial-fibrillation"
  },
  "problems": [
    {
      "problem": "New-onset atrial fibrillation \u2014 <48 hours duration",
      "icd": "I48.0",
      "onset": "2024",
      "status": "Active",
      "notes": "HR 142, BP 118/72 \u2014 hemodynamically stable. Duration estimated <48h \u2014 cardioversion appropriate."
    },
    {
      "problem": "Hypertension \u2014 underlying AF trigger",
      "icd": "I10",
      "onset": "2018",
      "status": "Active",
      "notes": "Hypertension is the most common modifiable risk factor for AF"
    },
    {
      "problem": "CHA2DS2-VASc score 2 \u2014 anticoagulation indicated",
      "icd": "I48.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Score: female sex (1) + hypertension (1) = 2. Annual stroke risk ~2.2%. Anticoagulation recommended."
    }
  ],
  "medications": [
    {
      "name": "Metoprolol tartrate 5mg IV x3 doses PRN \u2014 rate control",
      "sig": "IV push slowly, may repeat q5min up to 3 doses \u2014 target HR <110",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Anticoagulation \u2014 heparin bridge THEN apixaban",
      "sig": "Heparin infusion before cardioversion, then apixaban 5mg BID ongoing",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "DC cardioversion 200J (if <48h, anticoagulated, hemodynamically stable)",
      "sig": "Synchronized cardioversion after adequate anticoagulation",
      "prescriber": "Cardiology",
      "start": "11/2024",
      "refills": 0,
      "status": "Planned"
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "New AFib Workup",
      "results": [
        {
          "test": "TSH",
          "value": "0.3",
          "unit": "mIU/L",
          "ref": "0.4-4.0",
          "flag": "L"
        },
        {
          "test": "Free T4",
          "value": "1.9",
          "unit": "ng/dL",
          "ref": "0.8-1.8",
          "flag": "H"
        },
        {
          "test": "Potassium",
          "value": "3.2",
          "unit": "mEq/L",
          "ref": "3.5-5.0",
          "flag": "L"
        },
        {
          "test": "Magnesium",
          "value": "1.6",
          "unit": "mg/dL",
          "ref": "1.7-2.4",
          "flag": "L"
        },
        {
          "test": "Troponin I",
          "value": "0.02",
          "unit": "ng/mL",
          "ref": "<0.04",
          "flag": ""
        },
        {
          "test": "BNP",
          "value": "188",
          "unit": "pg/mL",
          "ref": "<100",
          "flag": "H"
        },
        {
          "test": "CBC \u2014 WBC",
          "value": "9.2",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "12-Lead ECG + Echocardiogram",
      "indication": "Irregular tachycardia, new AF \u2014 evaluate structure and function",
      "findings": "ECG: Atrial fibrillation, ventricular rate 142 bpm, irregularly irregular. No ST changes. Echo: EF 58%. Mild left atrial enlargement (LA diameter 4.2cm). No thrombus on TTE (TEE more sensitive if needed pre-cardioversion). No significant valvular disease.",
      "impression": "New AF with LA enlargement. No LV dysfunction. Subclinical hyperthyroidism identified on labs \u2014 contributing trigger. Hemodynamically stable, candidate for cardioversion."
    }
  ],
  "guided": {
    "ddxTargets": [
      "New AF \u2014 cardioversion and anticoagulation (correct)",
      "Multifocal atrial tachycardia \u2014 different P-wave morphology, COPD association",
      "Atrial flutter with variable block \u2014 sawtooth flutter waves, different rate",
      "Ventricular tachycardia \u2014 wide complex, different hemodynamic impact",
      "Rate control only strategy \u2014 appropriate for long-standing AF, not new onset in young patient",
      "Observation only without anticoagulation \u2014 CHA2DS2-VASc 2 requires anticoagulation"
    ],
    "coachPrompts": {
      "final": "Diagnosis: new-onset AF \u2014 subclinical hyperthyroidism as trigger. Key learning: (1) ALWAYS check TSH in new AF: hyperthyroidism (overt or subclinical as here, TSH 0.3 with elevated free T4) is a reversible trigger. Treating the thyroid disorder may restore normal sinus rhythm without cardioversion. (2) Rhythm vs rate control: AFFIRM trial \u2014 no mortality difference. BUT: new onset <48h, symptomatic, structurally normal heart = reasonable to attempt cardioversion. Older patients with long-standing AF, multiple comorbidities = rate control. (3) Cardioversion safety: <48h onset + no LA thrombus on echo = safe to cardiovert without 3-week anticoagulation. Must still anticoagulate AFTER cardioversion (post-cardioversion 'stunning' increases clot risk for 4 weeks). (4) CHA2DS2-VASc: C=heart failure(1), H=HTN(1), A2=age\u226575(2), D=DM(1), S2=prior stroke/TIA(2), V=vascular disease(1), A=age65-74(1), Sc=female sex(1). Score \u22652 in women or \u22652 in men (\u22651 if male) = anticoagulate. DOAC preferred over warfarin. (5) Hypokalemia + hypomagnesemia: electrolyte abnormalities predispose to arrhythmia and reduce cardioversion success. Replete K+ and Mg2+ before cardioversion."
    }
  }
};
