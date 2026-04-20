
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
    "pharmacy": "Walmart Pharmacy \u2014 Sunrise Blvd",
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
      "problem": "Bacterial meningitis \u2014 clinical diagnosis, treatment before LP",
      "icd": "G00.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Samuel Park, 22M \u2014 fever 39.8\u00b0C, severe headache, neck stiffness, photophobia. Kernig and Brudzinski signs positive."
    },
    {
      "problem": "LP delay \u2014 CT head ordered before LP",
      "icd": "G00.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Focal neuro exam \u2192 CT first to exclude herniation. Do NOT delay antibiotics for CT \u2014 treat empirically first."
    },
    {
      "problem": "Dexamethasone \u2014 adjunct reduces hearing loss and mortality in pneumococcal meningitis",
      "icd": "G00.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Give dexamethasone 15-20 min BEFORE first antibiotic dose to reduce inflammatory cascade at time of bacterial lysis."
    }
  ],
  "medications": [
    {
      "name": "Ceftriaxone 2g IV q12h \u2014 empiric S. pneumoniae / N. meningitidis",
      "sig": "Empiric treatment \u2014 DO NOT wait for LP or CT results. Give immediately after blood cultures drawn.",
      "prescriber": "ED/Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Vancomycin 25-30mg/kg IV q8-12h \u2014 add for resistant pneumococcus",
      "sig": "Empiric coverage for penicillin-resistant S. pneumoniae until sensitivities available. Target AUC 400-600.",
      "prescriber": "Medicine/ID",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Dexamethasone 0.15mg/kg IV q6h x4 days \u2014 BEFORE antibiotics",
      "sig": "Give 15-20 min before ceftriaxone. Reduces TNF-\u03b1 surge from bacterial lysis \u2192 less hearing loss and mortality in pneumococcal meningitis.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Ampicillin 2g IV q4h \u2014 add if Listeria suspected (age >50 or immunocompromised)",
      "sig": "This 22-year-old does not require Listeria coverage. Add for immunocompromised, elderly, or neonates.",
      "prescriber": "Medicine",
      "start": "NOT given",
      "refills": 0,
      "status": "Not given \u2014 age 22, immunocompetent"
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
      "temp": "39.8\u00b0C",
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
      "assessment": "Bacterial Meningitis \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Meningitis Workup",
      "results": [
        {
          "test": "CSF \u2014 WBC",
          "value": "4200",
          "unit": "cells/\u03bcL",
          "ref": "<5",
          "flag": "H"
        },
        {
          "test": "CSF \u2014 protein",
          "value": "280",
          "unit": "mg/dL",
          "ref": "15-45",
          "flag": "H"
        },
        {
          "test": "CSF \u2014 glucose",
          "value": "22",
          "unit": "mg/dL",
          "ref": "50-80",
          "flag": "L"
        },
        {
          "test": "CSF \u2014 Gram stain",
          "value": "Gram-positive diplococci \u2014 S. pneumoniae morphology",
          "unit": "",
          "ref": "No organisms",
          "flag": "H"
        },
        {
          "test": "Blood cultures x2",
          "value": "Pending \u2014 drawn before antibiotics",
          "unit": "",
          "ref": "No growth",
          "flag": ""
        },
        {
          "test": "Serum glucose",
          "value": "108",
          "unit": "mg/dL",
          "ref": "70-100",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CT Head Non-Contrast",
      "indication": "Focal neuro exam before LP \u2014 herniation risk assessment",
      "findings": "No mass lesion. No midline shift. No cerebral edema. Cisterns patent.",
      "impression": "No contraindication to lumbar puncture. Proceed with LP."
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
      "Social \u2014 college parties"
    ],
    [
      "Living",
      "College dormitory"
    ],
    [
      "Vaccination",
      "Meningococcal vaccine up to date \u2014 serogroup B not covered"
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
      "Vital signs assessment": "Febrile at 39.8\u00b0C, tachycardic at 118 bpm, blood pressure 108/62, appears dehydrated",
      "Lymph node examination": "No significant lymphadenopathy in cervical, axillary, or inguinal regions"
    },
    "ddxTargets": [
      "Bacterial meningitis \u2014 S. pneumoniae, classic CSF profile (correct)",
      "Viral meningitis \u2014 lymphocytic pleocytosis, normal glucose, lower protein; clinical overlap early",
      "Subarachnoid hemorrhage \u2014 thunderclap headache, xanthochromia on LP, no fever typically",
      "Herpes simplex encephalitis \u2014 temporal lobe involvement, seizures, CSF PCR HSV positive",
      "Cryptococcal meningitis \u2014 immunocompromised, indolent course, India ink positive",
      "Brain abscess \u2014 focal neuro signs, ring-enhancing lesion on CT, do NOT LP if mass present"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'college student headache' and dismissing as stress, hangover, or typical headache without recognizing the severity and constellation of meningeal signs",
      "prematureClosure": "Risk of stopping at viral meningitis diagnosis without considering bacterial meningitis, or attributing symptoms to common college ailments like dehydration or sleep deprivation",
      "availabilityBias": "Recent cases of migraine or tension headaches might make clinician less likely to consider life-threatening causes like bacterial meningitis in a young, otherwise healthy patient"
    },
    "coachPrompts": {
      "phase2": "You've identified some concerning features in this case. Given this patient's setting and symptom constellation, what are the most serious diagnoses you need to rule out immediately? What specific historical details and physical exam findings will help you differentiate between your differential diagnoses?",
      "phase5": "Your physical exam reveals positive meningeal signs in a febrile college student. How does this change your differential diagnosis prioritization? What is your most concerning diagnosis now, and what immediate next steps are warranted? Consider both diagnostic workup and treatment implications.",
      "finalDebrief": "This case demonstrates the classic presentation of bacterial meningitis in a college student. Notice how the rapid symptom progression, positive meningeal signs, and dormitory setting created a high-risk scenario. Discuss how this case highlights the importance of not anchoring on 'typical college headache' and maintaining suspicion for life-threatening conditions when the clinical picture doesn't fit common benign causes.",
      "final": "Diagnosis: bacterial meningitis \u2014 S. pneumoniae. Key learning: (1) Never delay antibiotics for imaging or LP in suspected bacterial meningitis. The rule: draw blood cultures \u2192 give dexamethasone + antibiotics \u2192 then CT \u2192 then LP. Each hour of antibiotic delay increases mortality. A 30-minute delay to get a CT is acceptable only if there are focal neuro signs (papilledema, focal deficit, new seizure, immunocompromise, GCS <10). (2) CSF profile: bacterial = PMN pleocytosis (hundreds to thousands), low glucose (<40 or CSF:serum ratio <0.4), elevated protein (>100-200), positive Gram stain in ~60-80%. Viral = lymphocytic, normal glucose, mildly elevated protein, negative Gram stain. (3) Dexamethasone timing: benefit is specifically from reducing the inflammatory response triggered by antibiotic-induced bacterial lysis. Must be given BEFORE or WITH the first antibiotic dose \u2014 no benefit if given after. Reduces hearing loss and mortality specifically in S. pneumoniae meningitis. (4) Empiric antibiotic selection by age: neonates = ampicillin + gentamicin or cefotaxime. Infants\u201350yo = ceftriaxone + vancomycin. >50yo or immunocompromised = ceftriaxone + vancomycin + ampicillin (Listeria coverage). (5) Meningococcal meningitis (N. meningitidis): petechial or purpuric rash is pathognomonic \u2014 activate contact precautions immediately, notify public health for close contact prophylaxis (rifampin, ciprofloxacin, or ceftriaxone single dose)."
    }
  },
  "meta": {
    "diagnosis": "Bacterial Meningitis \u2014 Streptococcus pneumoniae, Empiric Antibiotics Before LP, Dexamethasone Adjunct",
    "caseId": "meningitis-v1"
  }
};
