
window.EMR_DATA = {
  "patient": {
    "name": "Yasmine Bouchard",
    "dob": "05/11/2010",
    "age": 15,
    "sex": "Female",
    "mrn": "RDX-2025-11553",
    "pronouns": "She/Her",
    "insurance": "Medicaid",
    "pcp": "Dr. Marcus Johnson, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Developmental Delay",
    "race": "Asian",
    "address": "4799 Oak St, Fort Lauderdale, FL 33537",
    "phone": "(954) 555-1536",
    "email": "yasmineb@email.com",
    "emergencyContact": {
      "name": "Alex Morgan (Family)",
      "phone": "(954) 555-6959"
    }
  },
  "problems": [
    {
      "problem": "Angelman syndrome \u2014 confirmed genetic diagnosis",
      "icd": "Q93.51",
      "onset": "Birth",
      "status": "Active",
      "notes": "Maternal chromosome 15q11-q13 deletion confirmed on methylation analysis. UBE3A absent from maternal allele."
    },
    {
      "problem": "Epilepsy \u2014 atypical absence and myoclonic seizures",
      "icd": "G40.409",
      "onset": "2022",
      "status": "Active",
      "notes": "EEG: high-amplitude delta with triphasic morphology \u2014 characteristic AS pattern. Controlled on valproate."
    },
    {
      "problem": "Severe intellectual disability \u2014 nonverbal, AAC device",
      "icd": "F73",
      "onset": "Birth",
      "status": "Active",
      "notes": "No speech. Happy affect, easily excitable. Walking present but ataxic gait."
    },
    {
      "problem": "Sleep disturbance \u2014 reduced sleep need",
      "icd": "G47.09",
      "onset": "2023",
      "status": "Active",
      "notes": "Sleeps 4-5 hours/night. Circadian rhythm disturbance common in AS."
    }
  ],
  "medications": [
    {
      "name": "Valproic acid 250mg BID \u2014 seizure control",
      "sig": "Monitor CBC and LFTs annually. Therapeutic level 50-100 mcg/mL.",
      "prescriber": "Neurology",
      "start": "2022",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Melatonin 5mg at bedtime",
      "sig": "Start 30 min before desired bedtime. Adjust to 10mg if needed.",
      "prescriber": "Developmental Peds",
      "start": "2023",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Physical therapy \u2014 gait training weekly",
      "sig": "Weekly PT \u2014 improve balance, reduce fall risk, maintain mobility",
      "prescriber": "Developmental Peds",
      "start": "2022",
      "refills": 0,
      "status": "Active ongoing"
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
      "wt": "98 lbs",
      "ht": "5'8\"",
      "bmi": 14.9,
      "setting": "Office"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "98 lbs",
      "ht": "5'8\"",
      "bmi": 14.9,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "98 lbs",
      "ht": "5'8\"",
      "bmi": 14.9,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Robert Chen, MD",
      "summary": "Patient seen for Developmental Delay",
      "assessment": "Working diagnosis: Developmental Delay",
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "01/2024",
      "panel": "AS Monitoring",
      "results": [
        {
          "test": "Valproate level",
          "value": "78",
          "unit": "mcg/mL",
          "ref": "50-100",
          "flag": ""
        },
        {
          "test": "CBC",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "LFTs",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        },
        {
          "test": "Ammonia",
          "value": "28",
          "unit": "mcmol/L",
          "ref": "15-45",
          "flag": ""
        },
        {
          "test": "Chromosomal microarray",
          "value": "Maternal 15q11-q13 deletion confirmed",
          "unit": "",
          "ref": "Normal",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "2022",
      "study": "MRI Brain",
      "indication": "Seizure onset evaluation",
      "findings": "Mild cortical atrophy. Simplified gyral pattern. Normal myelination.",
      "impression": "Mild changes consistent with Angelman syndrome. No structural epileptic substrate."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V5931K",
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
    "caseId": "angelman-syndrome",
    "diagnosis": "Angelman Syndrome \u2014 Maternal 15q11-q13 Deletion, Seizures, Severe Intellectual Disability, Characteristic Happy Affect",
    "acuity": 3,
    "presentation": "Developmental Delay",
    "category": "pediatric"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with developmental delay. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this pediatric presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "General appearance",
      "Vital signs",
      "Cardiovascular exam",
      "Pulmonary exam",
      "Abdominal exam",
      "Neurological exam",
      "Skin exam",
      "Musculoskeletal exam"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Angelman syndrome \u2014 maternal 15q11-q13 deletion, happy affect + seizures + nonverbal (correct)",
      "Prader-Willi syndrome \u2014 PATERNAL 15q11-q13 deletion; hypotonia + hyperphagia, NOT happy demeanor",
      "Rett syndrome \u2014 X-linked females only, regression after normal early development, hand-wringing",
      "Phelan-McDermid syndrome \u2014 22q13 deletion, similar phenotype, different genetic locus",
      "Lennox-Gastaut syndrome \u2014 epileptic syndrome, not a specific genetic entity",
      "Mowat-Wilson syndrome \u2014 different facial features, Hirschsprung association"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: Developmental Delay. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: Angelman syndrome. Key learning: (1) Imprinting rule for chromosome 15q11-q13: MATERNAL deletion/paternal UPD \u2192 Angelman syndrome (UBE3A gene, only maternally expressed in neurons). PATERNAL deletion/maternal UPD \u2192 Prader-Willi syndrome. Same chromosomal region, parent-of-origin determines the syndrome. (2) Clinical features of AS: happy easily excitable affect, severe intellectual disability, absent speech, seizures, ataxic gait, microcephaly. EEG pattern (high-amplitude delta with triphasic morphology) is characteristic and often seen before clinical seizures. (3) AS vs PWS: AS = happy, hyperactive, nonverbal, seizures, normal/thin build. PWS = hypotonic infant, hyperphagia, obesity, behavioral dysregulation, some speech. (4) Valproate is first-line for AS seizures \u2014 broad-spectrum for atypical absence and myoclonic. Lamotrigine may worsen myoclonus \u2014 avoid. (5) Emerging therapy: antisense oligonucleotides targeting paternal UBE3A-antisense transcript to activate the silenced paternal allele \u2014 clinical trials active."
    }
  }
};
