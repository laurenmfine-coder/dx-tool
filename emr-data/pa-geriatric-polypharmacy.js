
window.EMR_DATA = {
  "patient": {
    "name": "Mei Lin",
    "dob": "08/22/1955",
    "age": 70,
    "sex": "Female",
    "mrn": "RDX-2025-31212",
    "pronouns": "She/Her",
    "insurance": "Cigna EPO",
    "pcp": "Dr. Marcus Johnson, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "4 Chronic Conditions",
    "race": "Asian",
    "address": "6201 Stirling Rd, Cooper City, FL 33328",
    "phone": "(954) 555-5306",
    "email": "meilin@email.com",
    "emergencyContact": {
      "name": "Aisha Johnson (Family)",
      "phone": "(954) 555-6261"
    }
  },
  "problems": [
    {
      "problem": "Polypharmacy \u2014 11 medications, medication-related fall",
      "icd": "Z79.899",
      "onset": "2024",
      "status": "Active",
      "notes": "82yo with 4 Beers Criteria inappropriate medications \u2014 deprescribing review urgent after fall"
    },
    {
      "problem": "Fall with scalp laceration \u2014 medication-related",
      "icd": "W19.XXXA",
      "onset": "2024",
      "status": "Active",
      "notes": "Orthostatic hypotension from tamsulosin + antihypertensives. New confusion from diphenhydramine."
    },
    {
      "problem": "Mild cognitive impairment \u2014 anticholinergic burden",
      "icd": "G31.84",
      "onset": "2023",
      "status": "Active",
      "notes": "ACB (Anticholinergic Cognitive Burden) score 4 \u2014 diphenhydramine, oxybutynin contributing"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Antihypertensive",
      "prescriber": "Cardiology",
      "start": "2018",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Antihypertensive/CKD",
      "prescriber": "Cardiology",
      "start": "2018",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Metoprolol 50mg BID",
      "sig": "Rate control/HTN",
      "prescriber": "Cardiology",
      "start": "2019",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Tamsulosin 0.4mg QHS \u2014 BEERS CRITERIA",
      "sig": "Urinary \u2014 high orthostatic hypotension risk in elderly",
      "prescriber": "Urology",
      "start": "2020",
      "refills": 4,
      "status": "Active \u2014 deprescribe review"
    },
    {
      "name": "Diphenhydramine 25mg QHS PRN sleep \u2014 BEERS CRITERIA",
      "sig": "OTC sleep aid \u2014 anticholinergic, causes delirium/falls",
      "prescriber": "Self",
      "start": "2022",
      "refills": 0,
      "status": "Active \u2014 HOLD immediately"
    },
    {
      "name": "Oxybutynin 5mg BID \u2014 BEERS CRITERIA",
      "sig": "Overactive bladder \u2014 anticholinergic, cognitive impairment risk",
      "prescriber": "Urology",
      "start": "2021",
      "refills": 3,
      "status": "Active \u2014 deprescribe review"
    },
    {
      "name": "Diazepam 5mg QHS PRN anxiety \u2014 BEERS CRITERIA",
      "sig": "Benzodiazepine \u2014 fall risk, cognitive impairment, avoid in elderly",
      "prescriber": "PCP",
      "start": "2020",
      "refills": 2,
      "status": "Active \u2014 deprescribe review"
    }
  ],
  "allergies": [
    {
      "allergen": "No known drug allergies",
      "type": "Drug",
      "reaction": "None",
      "severity": "N/A",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "11/18/2024",
      "bp": "128/78",
      "hr": 74,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "136 lbs",
      "ht": "5'6\"",
      "bmi": 21.9,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "136 lbs",
      "ht": "5'6\"",
      "bmi": 21.9,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "136 lbs",
      "ht": "5'6\"",
      "bmi": 21.9,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for 4 Chronic Conditions",
      "assessment": "Working diagnosis: 4 Chronic Conditions",
      "plan": "Referral to pa. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Post-Fall Workup",
      "results": [
        {
          "test": "BP lying",
          "value": "138/78",
          "unit": "mmHg",
          "ref": "",
          "flag": ""
        },
        {
          "test": "BP standing (1 min)",
          "value": "108/62",
          "unit": "mmHg",
          "ref": "drop <20 systolic normal",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.4",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": "H"
        },
        {
          "test": "Sodium",
          "value": "132",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
        },
        {
          "test": "Glucose",
          "value": "102",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "CT Head Without Contrast",
      "indication": "Fall with scalp laceration, confusion",
      "findings": "No acute intracranial hemorrhage. No midline shift. Mild diffuse cortical atrophy, age-appropriate.",
      "impression": "No acute intracranial injury. Atrophy pattern consistent with age or mild cognitive impairment."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V1226K",
      "site": "Left deltoid"
    }
  ],
  "familyHistory": [
    {
      "relation": "Father",
      "condition": "Hypertension",
      "age": "58"
    },
    {
      "relation": "Mother",
      "condition": "Type 2 diabetes",
      "age": "55"
    }
  ],
  "socialHistory": {
    "smoking": "Never smoker",
    "alcohol": "Social, 2-4 drinks/week",
    "drugs": "Denies",
    "occupation": "Healthcare professional / student",
    "exercise": "Regular, 3x/week",
    "diet": "Balanced",
    "livingArrangement": "Lives with family"
  },
  "meta": {
    "caseId": "pa-geriatric-polypharmacy",
    "diagnosis": "Geriatric Polypharmacy \u2014 11 Medications, 4 Potentially Inappropriate per Beers Criteria, Fall Risk",
    "acuity": 3,
    "presentation": "4 Chronic Conditions",
    "category": "geriatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with 4 chronic conditions. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What brings you in today?",
      "When did this start?",
      "Has it been getting better, worse, or the same?",
      "What makes it better or worse?",
      "Rate the severity 0-10.",
      "Any associated symptoms?",
      "Any prior episodes?",
      "What medications are you taking?",
      "Any allergies?",
      "Any relevant family history?",
      "Any recent travel or sick contacts?",
      "Any prior surgeries or hospitalizations?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this geriatric presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "Complete history and physical",
      "Vital signs and trending",
      "Focused systems exam",
      "Scope of practice determination",
      "Escalation criteria assessment",
      "Documentation review"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Medication-related fall \u2014 polypharmacy, Beers Criteria drugs (correct)",
      "Syncope from cardiac arrhythmia \u2014 orthostatic pattern, not arrhythmic",
      "New neurological event \u2014 CT normal",
      "Dementia causing falls \u2014 medication burden is primary, not dementia",
      "Vitamin D deficiency \u2014 contributing but medications are primary cause",
      "Environmental fall \u2014 medication effect is the modifiable primary factor"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pa case with chief complaint: 4 Chronic Conditions. What are the most important questions for a pa to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pa perspective, what is the most critical finding that narrows this differential? What is the pa-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pa's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: medication-related fall, 4 Beers Criteria inappropriate medications. Key PA learning: (1) Beers Criteria: AGS annually updated list of potentially inappropriate medications in adults \u226565. High-risk categories: benzodiazepines (diazepam), anticholinergics (diphenhydramine, oxybutynin), peripheral alpha-blockers with orthostatic risk (tamsulosin), sleep aids. Four PIMs in one patient = urgent deprescribing review. (2) Deprescribing sequence: most harmful first. Priority: STOP diphenhydramine (OTC, causing delirium + falls), TAPER diazepam (withdraw slowly \u2014 seizure risk with abrupt stop), REVIEW tamsulosin (can use mirabegron for OAB without orthostatic risk), SWITCH oxybutynin to mirabegron (beta-3 agonist, non-anticholinergic). (3) Orthostatic hypotension: lying BP 138/78 \u2192 standing 108/62 = drop of 30 mmHg systolic = positive orthostatic hypotension. This IS the fall mechanism. Address tamsulosin + antihypertensive combo. (4) Anticholinergic cognitive burden (ACB) score: diphenhydramine (ACB=3) + oxybutynin (ACB=3) = ACB 6. Scores >3 associated with cognitive decline and dementia. (5) The PA's priority communication: 'This patient has a medication-caused fall. I am stopping diphenhydramine today and initiating a taper plan for diazepam. Orthostatic hypotension is documented \u2014 tamsulosin review with urology is recommended.'"
    }
  }
};
