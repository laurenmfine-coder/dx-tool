/* emr-data/meningitis-v1.js — Auto-generated EMR case data for Bacterial Meningitis */
window.EMR_DATA = {
  "patient": {
    "name": "Emily Johnson",
    "patientHPI": "I have a really severe headache, I'm burning up with fever, my neck is so stiff I can barely move it, and the lights are killing my eyes. I live in the dorms at college and I just feel absolutely terrible.",
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
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Emily appears acutely ill and distressed, lying still with eyes closed to avoid light, speaking in a quiet, strained voice. She is cooperative but clearly suffering, wincing with any head movement and appearing anxious about her worsening symptoms. She's forthcoming about her symptoms but seems scared and wants to know what's wrong with her.",
    "interviewQuestions": [
      "When did your symptoms start and how quickly did they develop?",
      "Can you describe the quality of your headache?",
      "Where is the headache located and does it radiate anywhere?",
      "On a scale of 1-10, how severe is your headache?",
      "What makes your headache and neck stiffness worse?",
      "Have you tried anything that helps with the pain?",
      "Besides the headache, fever, neck stiffness, and light sensitivity, what other symptoms are you experiencing?",
      "Have you had any rash or skin changes?",
      "Have you ever had symptoms like this before?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Has anyone else in your dorm been sick recently?",
      "Do you use tobacco, alcohol, or other substances?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing with this headache. Could you repeat that?",
      "onset": "It started yesterday morning with just feeling tired, but by last night the headache was getting really bad. This morning I woke up with the fever and my neck was so stiff and painful.",
      "character": "It's like the worst headache of my life - throbbing and pounding, like my head is going to explode. It's not like any headache I've ever had before.",
      "location": "It's all over my head but worst in the back and sides. It doesn't really radiate anywhere, it's just this intense pressure everywhere.",
      "severity": "It's definitely a 9 out of 10. I can barely function - I can't go to class, can't concentrate on anything, and even lying still hurts.",
      "aggravating": "Any light makes it so much worse - that's why I have the lights off. Moving my head or neck is excruciating, and loud noises make me feel sick.",
      "relieving": "I took some Tylenol and ibuprofen but they barely touched it. Lying still in a dark room helps a little bit but not much.",
      "associated": "I've been really nauseous and threw up twice this morning. I feel weak and shaky, and I've been really confused and having trouble thinking clearly.",
      "denies": "No rash that I've noticed, no ear pain, no sore throat, no cough, no problems with my vision other than the light hurting.",
      "history": "No, never anything like this. I get occasional headaches during finals but nothing even close to this severe.",
      "medications": "Combined OCP",
      "allergies": "NKDA",
      "family": "No one in my family has had meningitis or anything like that. Pretty healthy family overall.",
      "social": "I'm a junior here at college, live in the dorms. I don't smoke, I drink socially at parties but not heavily. No drugs. I've been stressed with midterms but this isn't just stress."
    },
    "examManeuvers": [
      "General appearance and mental status",
      "Neck flexion (Brudzinski sign)",
      "Hip flexion with knee extension (Kernig sign)",
      "Fundoscopic examination",
      "Neurological examination - cranial nerves",
      "Skin examination for petechial rash",
      "Neurological examination - motor and reflexes",
      "Assessment of photophobia",
      "Vital signs assessment",
      "Lymph node examination"
    ],
    "examFindings": {
      "General appearance and mental status": "Acutely ill-appearing, lethargic but arousable, mild confusion and difficulty concentrating",
      "Neck flexion (Brudzinski sign)": "Positive - passive neck flexion causes involuntary hip and knee flexion, patient reports severe pain",
      "Hip flexion with knee extension (Kernig sign)": "Positive - unable to fully extend knee when hip is flexed at 90 degrees due to pain and resistance",
      "Fundoscopic examination": "No papilledema, discs appear normal",
      "Neurological examination - cranial nerves": "Cranial nerves II-XII grossly intact, no focal deficits noted",
      "Skin examination for petechial rash": "No petechial or purpuric rash noted on trunk, extremities, or mucous membranes",
      "Neurological examination - motor and reflexes": "Motor strength 5/5 throughout, reflexes 2+ and symmetric, no focal neurologic deficits",
      "Assessment of photophobia": "Severe photophobia - patient unable to tolerate room lights, squints and turns away from penlight",
      "Vital signs assessment": "Febrile at 39.8°C, tachycardic at 118 bpm, blood pressure 108/62, appears dehydrated",
      "Lymph node examination": "No significant lymphadenopathy in cervical, axillary, or inguinal regions"
    },
    "ddxTargets": [
      "Bacterial meningitis (correct diagnosis)",
      "Viral meningitis",
      "Subarachnoid hemorrhage",
      "Brain abscess",
      "Viral encephalitis",
      "Severe migraine headache",
      "Tension headache with viral syndrome"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'college student headache' and dismissing as stress, hangover, or typical headache without recognizing the severity and constellation of meningeal signs",
      "prematureClosure": "Risk of stopping at viral meningitis diagnosis without considering bacterial meningitis, or attributing symptoms to common college ailments like dehydration or sleep deprivation",
      "availabilityBias": "Recent cases of migraine or tension headaches might make clinician less likely to consider life-threatening causes like bacterial meningitis in a young, otherwise healthy patient"
    },
    "coachPrompts": {
      "phase2": "You've identified some concerning features in this case. Given this patient's setting and symptom constellation, what are the most serious diagnoses you need to rule out immediately? What specific historical details and physical exam findings will help you differentiate between your differential diagnoses?",
      "phase5": "Your physical exam reveals positive meningeal signs in a febrile college student. How does this change your differential diagnosis prioritization? What is your most concerning diagnosis now, and what immediate next steps are warranted? Consider both diagnostic workup and treatment implications.",
      "finalDebrief": "This case demonstrates the classic presentation of bacterial meningitis in a college student. Notice how the rapid symptom progression, positive meningeal signs, and dormitory setting created a high-risk scenario. Discuss how this case highlights the importance of not anchoring on 'typical college headache' and maintaining suspicion for life-threatening conditions when the clinical picture doesn't fit common benign causes."
    }
  }
};
