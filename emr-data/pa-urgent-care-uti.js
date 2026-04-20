
window.EMR_DATA = {
  "patient": {
    "name": "Miguel Santos",
    "dob": "02/16/1984",
    "age": 41,
    "sex": "Male",
    "mrn": "RDX-2025-93372",
    "pronouns": "He/Him",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Robert Chen, MD",
    "pharmacy": "Publix Pharmacy \u2014 5200 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Dysuria 2 Days",
    "race": "American Indian or Alaska Native",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-1387",
    "email": "miguelsa@email.com",
    "emergencyContact": {
      "name": "Samuel Adeyemi (Family)",
      "phone": "(954) 555-4542"
    }
  },
  "problems": [
    {
      "problem": "Uncomplicated cystitis",
      "icd": "N30.00",
      "onset": "2024",
      "status": "Active",
      "notes": "Dysuria 2 days, frequency, pyuria \u2014 no fever, no flank pain"
    },
    {
      "problem": "Sulfonamide allergy \u2014 TMP-SMX unavailable",
      "icd": "Z88.2",
      "onset": "2015",
      "status": "Active",
      "notes": "Rash with Bactrim \u2014 TMP-SMX is first-line but allergic"
    },
    {
      "problem": "Recent fluoroquinolone use x2 \u2014 resistance consideration",
      "icd": "Z79.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Cipro x2 in past 12 months \u2014 resistance risk elevated, avoid fluoroquinolones"
    }
  ],
  "medications": [
    {
      "name": "Nitrofurantoin macrocrystals 100mg BID x5 days",
      "sig": "Take twice daily with food for 5 days \u2014 first-line alternative to TMP-SMX",
      "prescriber": "PA",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Phenazopyridine 200mg TID x2 days PRN dysuria",
      "sig": "Bladder analgesic \u2014 warn patient urine will turn orange-red",
      "prescriber": "PA",
      "start": "11/2024",
      "refills": 0,
      "status": "PRN x2 days"
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
      "wt": "127 lbs",
      "ht": "5'0\"",
      "bmi": 24.8,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "127 lbs",
      "ht": "5'0\"",
      "bmi": 24.8,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "127 lbs",
      "ht": "5'0\"",
      "bmi": 24.8,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Priya Sharma, MD",
      "summary": "Patient seen for Dysuria 2 Days",
      "assessment": "Working diagnosis: Dysuria 2 Days",
      "plan": "Referral to pa. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Urine Studies",
      "results": [
        {
          "test": "UA \u2014 WBC",
          "value": ">50",
          "unit": "cells/HPF",
          "ref": "<5",
          "flag": "H"
        },
        {
          "test": "UA \u2014 nitrites",
          "value": "Positive",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "UA \u2014 leukocyte esterase",
          "value": "3+",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "UA \u2014 bacteria",
          "value": "Many",
          "unit": "",
          "ref": "None",
          "flag": "H"
        },
        {
          "test": "Temperature",
          "value": "37.1",
          "unit": "\u00b0C",
          "ref": "<38.0",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V7879K",
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
    "caseId": "pa-urgent-care-uti",
    "diagnosis": "Uncomplicated Cystitis \u2014 Sulfa Allergy Requires Alternative Selection",
    "acuity": 3,
    "presentation": "Dysuria 2 Days",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with dysuria 2 days. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this infectious presentation.",
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
      "Uncomplicated cystitis \u2014 nitrofurantoin (correct alternative given sulfa allergy + FQ resistance)",
      "TMP-SMX \u2014 first-line but allergic, cannot use",
      "Ciprofloxacin \u2014 recent use raises resistance risk, avoid unless culture-directed",
      "Fosfomycin 3g single dose \u2014 acceptable alternative if nitrofurantoin unavailable",
      "Complicated UTI \u2014 no fever, no flank pain, no risk factors",
      "Vaginitis \u2014 UA positive, makes UTI diagnosis",
      "Pyelonephritis \u2014 no systemic features"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a pa case with chief complaint: Dysuria 2 Days. What are the most important questions for a pa to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a pa perspective, what is the most critical finding that narrows this differential? What is the pa-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the pa's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: uncomplicated cystitis \u2014 antibiotic selection with allergy and resistance context. Key PA learning: (1) IDSA guidelines first-line: TMP-SMX x5 days (unavailable here), nitrofurantoin x5 days, fosfomycin 3g single dose, pivmecillinam (not US-available). Fluoroquinolones are NOT first-line for uncomplicated UTI \u2014 reserve for resistant organisms. (2) Nitrofurantoin contraindications: eGFR <30 (inadequate urinary concentration), late pregnancy (weeks 38-42), G6PD deficiency. This patient: check creatinine \u2014 if eGFR adequate, nitrofurantoin is ideal. (3) Prior fluoroquinolone use: two courses in 12 months significantly increases E. coli fluoroquinolone resistance risk. Avoid cipro empirically; if urine culture returns, use culture-directed therapy. (4) Phenazopyridine counseling: CRITICAL \u2014 warn patient urine turns orange-red. Patients who weren't warned call the office thinking they're bleeding. 'This is expected, it's the medication, it goes away.' (5) When to get urine culture: uncomplicated cystitis in healthy women does NOT require culture. Get culture for: pregnancy, recurrent UTIs, treatment failure, symptoms >7 days, suspected complicated UTI."
    }
  }
};
