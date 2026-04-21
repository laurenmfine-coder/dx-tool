
window.EMR_DATA = {
  "patient": {
    "name": "Omar Hassan",
    "patientHPI": "I've been pretty good about taking my HIV medication, though I'll admit I forget maybe once or twice a week. Everything's been going well with my treatment, but lately I've had a couple episodes where I just blank out for a few seconds and my wife says I was shaking.",
    "dob": "06/30/1991",
    "age": 33,
    "sex": "Male",
    "mrn": "RDX-2025-73182",
    "pronouns": "He/Him",
    "insurance": "United Healthcare \u2014 PPO",
    "pcp": "Dr. James Whitfield, MD",
    "pharmacy": "CVS Pharmacy \u2014 4100 N Federal Hwy, Fort Lauderdale, FL",
    "language": "English, Arabic",
    "race": "Middle Eastern (Egyptian)",
    "address": "997 Juniper Dr, Indianapolis, IN 46203",
    "phone": "(954) 555-8412",
    "email": "o.hassan91@email.com",
    "emergencyContact": {
      "name": "Fatima Hassan (Wife)",
      "phone": "(954) 555-8415"
    },
    "chiefComplaint": "Seizure with fever"
  },
  "problems": [
    {
      "problem": "CNS toxoplasmosis \u2014 AIDS-defining, CD4 82",
      "icd": "B58.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Marcus Johnson, 38M \u2014 known HIV, not on ART, CD4 82, VL 180,000. New seizure, left hemiparesis, headache. MRI: multiple ring-enhancing lesions. Toxoplasma IgG positive."
    },
    {
      "problem": "Multiple ring-enhancing lesions \u2014 toxoplasmosis vs PCNSL",
      "icd": "B58.2",
      "onset": "2024",
      "status": "Active",
      "notes": "Treat toxo empirically first. No improvement at 10-14 days \u2192 biopsy for PCNSL. Toxo far more common with CD4 <200 and Toxo IgG positive."
    },
    {
      "problem": "Not on ART \u2014 IRIS risk on starting treatment",
      "icd": "B20",
      "onset": "2024",
      "status": "Active",
      "notes": "Defer ART 2-3 weeks to avoid IRIS (immune reconstitution inflammatory syndrome causing paradoxical intracranial worsening)."
    }
  ],
  "medications": [
    {
      "name": "Pyrimethamine 200mg loading then 50mg daily + sulfadiazine 1.5g q6h",
      "sig": "First-line for CNS toxoplasmosis. Duration: 6 weeks acute then lifelong suppressive therapy while CD4 <200.",
      "prescriber": "Infectious Disease",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Leucovorin 10-20mg daily \u2014 mandatory with pyrimethamine",
      "sig": "Pyrimethamine inhibits DHFR \u2192 myelosuppression. Leucovorin bypasses inhibition. ALWAYS give with pyrimethamine.",
      "prescriber": "Infectious Disease",
      "start": "2024",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "ART \u2014 defer 2-3 weeks to avoid IRIS",
      "sig": "Immediate ART with active CNS OI \u2192 IRIS \u2192 paradoxical intracranial inflammation \u2192 herniation.",
      "prescriber": "Infectious Disease",
      "start": "2024",
      "refills": 0,
      "status": "Deferred 2-3 weeks"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfonamides (TMP-SMX)",
      "type": "Drug",
      "reaction": "Diffuse maculopapular rash, fever (occurred during PCP prophylaxis in 2018)",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/27/2025",
      "bp": "142/88",
      "hr": 108,
      "rr": 18,
      "temp": "101.2\u00b0F",
      "spo2": "97%",
      "wt": "168 lbs",
      "ht": "5'9\"",
      "bmi": 24.8,
      "setting": "ED"
    },
    {
      "date": "09/10/2024",
      "bp": "122/76",
      "hr": 72,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "174 lbs",
      "ht": "5'9\"",
      "bmi": 25.7,
      "setting": "Specialist"
    },
    {
      "date": "03/20/2024",
      "bp": "118/74",
      "hr": 68,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "99%",
      "wt": "176 lbs",
      "ht": "5'9\"",
      "bmi": 26,
      "setting": "Specialist"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "09/10/2024",
      "type": "Specialist",
      "provider": "Dr. Chidi Okonkwo, MD (Infectious Disease)",
      "cc": "HIV management \u2014 routine follow-up",
      "hpi": "33-year-old male with HIV on Biktarvy for routine ID follow-up. Reports good adherence 'mostly' \u2014 admits to missing doses 1-2x/week. Denies opportunistic infection symptoms. No weight loss, night sweats, or oral thrush. Sexually active with wife only. CD4 580 (stable), viral load undetectable. No current PCP prophylaxis (CD4 >200). Prior TMP-SMX allergy \u2014 desensitization discussed but patient declined.",
      "exam": "General: Well-appearing male. HEENT: Oropharynx clear, no thrush. Skin: No KS lesions, no rash. LN: No palpable lymphadenopathy. Neuro: A&O x3, nonfocal.",
      "assessment": "1. HIV \u2014 well-controlled on Biktarvy; CD4 580, VL undetectable\n2. No current indication for OI prophylaxis\n3. TMP-SMX allergy \u2014 would need alternative PCP prophylaxis if CD4 drops <200",
      "plan": "1. Continue Biktarvy \u2014 emphasized strict daily adherence\n2. Labs in 6 months: CD4, VL, CMP, CBC\n3. Toxoplasma IgG: Positive (baseline serology \u2014 at risk for reactivation if immunosuppressed)\n4. Discussed importance of insurance continuity \u2014 connected with patient assistance program\n5. RTC 6 months"
    },
    {
      "id": "V002",
      "date": "02/15/2025",
      "type": "Primary Care",
      "provider": "Dr. James Whitfield, MD",
      "cc": "Headache x 2 weeks, intermittent confusion",
      "hpi": "33-year-old HIV+ male presenting with 2-week history of progressive headache, right-sided and constant, worse in the morning. Wife reports episodes of confusion and word-finding difficulty over the past week. Mild low-grade fevers (100.2-100.8\u00b0F). Appetite decreased, lost 8 lbs in 3 weeks. Admits he has not taken Biktarvy for approximately 2 months \u2014 insurance lapsed and he could not afford medications. No nausea, vomiting, neck stiffness, or vision changes at this visit.",
      "exam": "General: Thin male, appears fatigued. HEENT: Oropharynx \u2014 white patches on buccal mucosa suspicious for oral thrush. Neck: Supple, no meningismus. Neuro: A&O x2 (oriented to person/place, not date). Word-finding difficulty. Mild right-sided weakness (grip 4/5 R, 5/5 L). DTRs symmetric. Gait: Mildly unsteady.",
      "assessment": "1. Progressive headache with focal neurologic findings in HIV+ patient off ART \u2014 HIGH concern for CNS opportunistic infection (toxoplasmosis, cryptococcus, PML)\n2. Oral candidiasis \u2014 consistent with immunosuppression\n3. Non-adherence to ART x 2 months \u2014 likely significant CD4 decline",
      "plan": "1. URGENT: CD4 count, viral load, CBC, CMP, Toxoplasma IgG, Cryptococcal antigen\n2. STAT CT head with contrast \u2014 if unavailable today, go to ED\n3. If lesions on CT \u2192 LP (after ruling out mass effect) \u2192 MRI brain\n4. Start fluconazole 200mg loading then 100mg daily for oral thrush\n5. Patient instructed to go to ED if seizure, worsening confusion, or new weakness\n6. ART patient assistance program re-initiated \u2014 STAT"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "CNS Toxoplasmosis",
      "results": [
        {
          "test": "CD4 count",
          "value": "82",
          "unit": "cells/\u03bcL",
          "ref": "500-1500",
          "flag": "L"
        },
        {
          "test": "HIV viral load",
          "value": "180,000",
          "unit": "copies/mL",
          "ref": "Undetectable",
          "flag": "H"
        },
        {
          "test": "Toxoplasma IgG",
          "value": "Positive \u2014 1:1024",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Toxoplasma IgM",
          "value": "Negative (reactivation, not primary)",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "CSF EBV PCR",
          "value": "Negative (positive suggests PCNSL)",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "MRI Brain with Gadolinium",
      "findings": "Multiple ring-enhancing lesions (4): right basal ganglia 2.8cm, bilateral frontal lobe lesions. Eccentric target sign. Surrounding vasogenic edema.",
      "impression": "Multiple ring-enhancing lesions in AIDS \u2014 CNS toxoplasmosis most likely. Empiric treatment indicated."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FL832T",
      "mfr": "GSK"
    },
    {
      "vaccine": "COVID-19 (Pfizer, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "CV782K",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Hepatitis B (Engerix-B, booster)",
      "date": "03/2020",
      "site": "Right deltoid IM",
      "lot": "HB412R",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "06/2021",
      "site": "Left deltoid IM",
      "lot": "TA228P",
      "mfr": "Sanofi"
    }
  ],
  "familyHistory": [
    "Mother (age 62): Type 2 Diabetes, hypertension",
    "Father (age 65): Coronary artery disease \u2014 CABG at age 60",
    "Sister (age 30): Healthy",
    "No family history of seizure disorder, cancer, or autoimmune disease"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Software developer \u2014 remote work; recently reduced hours due to symptoms"
    ],
    [
      "Marital",
      "Married x 5 years; wife aware of HIV status; wife HIV-negative (on PrEP)"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Rare \u2014 occasional beer"
    ],
    [
      "Drugs",
      "None"
    ],
    [
      "Exercise",
      "Gym 3x/week (prior to symptom onset); not exercising past 3 weeks"
    ],
    [
      "Housing",
      "Condo with wife"
    ],
    [
      "Safety",
      "No concerns"
    ],
    [
      "Advance Directive",
      "None \u2014 discussed with wife during this admission"
    ]
  ],
  "meta": {
    "caseId": "cns-infection",
    "diagnosis": "CNS Toxoplasmosis \u2014 AIDS with CD4 82",
    "acuity": 2,
    "presentation": "Seizure",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Omar appears anxious and somewhat embarrassed about his medication adherence lapses, speaking quietly but cooperatively. He's clearly concerned about the seizure episodes affecting his work and marriage, showing appropriate worry but maintaining composure during the interview.",
    "interviewQuestions": [
      "Can you describe exactly what happens during these episodes where you 'blank out'?",
      "How long do these episodes typically last?",
      "What do you remember before and after the episodes?",
      "Has your wife noticed any specific triggers for these episodes?",
      "Have you had any headaches, fever, or vision changes recently?",
      "How often are you missing your HIV medications each week?",
      "When was your last CD4 count and viral load checked?",
      "Have you had any weakness, numbness, or difficulty speaking?",
      "Any nausea, vomiting, or changes in appetite lately?",
      "Have you noticed any changes in your thinking or memory?",
      "Any recent weight loss or night sweats?",
      "Are you taking any prophylaxis medications for opportunistic infections?",
      "Have you traveled recently or been exposed to any sick contacts?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Can you explain that differently?",
      "onset": "The first episode happened about 3 weeks ago. My wife said I just stopped talking mid-sentence and started shaking for maybe 30 seconds. It's happened 3 more times since then.",
      "character": "My wife says I go completely blank, like I'm not there, and then my arms and legs start jerking. I don't remember any of it happening.",
      "location": "The shaking seems to be all over, but I've also been getting these dull headaches, mostly on the right side of my head.",
      "severity": "The headaches are maybe a 4 out of 10, but the seizures are really scary. I can't work when this happens and I'm afraid to drive now.",
      "aggravating": "The headaches seem worse when I'm stressed or looking at my computer screen for too long. I haven't noticed specific triggers for the seizures.",
      "relieving": "Ibuprofen helps the headaches a little. Nothing seems to prevent the seizures - they just happen randomly.",
      "associated": "I've been having headaches, some mild nausea, and I feel more tired than usual. Also running a low fever on and off.",
      "denies": "No vision problems, no trouble speaking between episodes, no weakness in my arms or legs that I've noticed.",
      "history": "Never had anything like this before. No seizures, no major neurological problems. This is completely new for me.",
      "medications": "Bictegravir/Emtricitabine/TAF (Biktarvy) 1 tablet daily; Cetirizine 10mg daily PRN",
      "allergies": "Sulfonamides (TMP-SMX)",
      "family": "No family history of seizures or neurological problems. My parents have heart disease and diabetes, but nothing like this.",
      "social": "I'm a software developer working from home. I've had to cut back my hours because of these episodes and headaches. I'm married, don't smoke, rarely drink alcohol, no illegal drugs."
    },
    "examManeuvers": [
      "Neurological assessment including mental status",
      "Cranial nerve examination",
      "Motor strength testing",
      "Deep tendon reflexes",
      "Sensory examination",
      "Cerebellar function testing",
      "Fundoscopic examination",
      "Neck stiffness assessment",
      "Lymph node examination",
      "Skin examination for lesions"
    ],
    "examFindings": {
      "Neurological assessment including mental status": "Alert and oriented x3, but mild difficulty with attention and concentration. Mini-mental status exam shows subtle deficits in working memory.",
      "Cranial nerve examination": "Cranial nerves II-XII grossly intact. Pupils equal, round, reactive to light. No focal cranial nerve deficits.",
      "Motor strength testing": "5/5 strength in all major muscle groups bilaterally. No focal motor weakness detected.",
      "Deep tendon reflexes": "2+ reflexes bilaterally and symmetrically. No hyperreflexia or pathological reflexes.",
      "Sensory examination": "Intact to light touch, vibration, and position sense. No sensory deficits noted.",
      "Cerebellar function testing": "Finger-to-nose and heel-to-shin testing normal. No ataxia or coordination problems.",
      "Fundoscopic examination": "Optic discs appear normal. No papilledema or retinal lesions consistent with toxoplasmosis.",
      "Neck stiffness assessment": "Mild nuchal rigidity present. Negative Kernig's and Brudzinski's signs.",
      "Lymph node examination": "No significant lymphadenopathy in cervical, axillary, or inguinal regions.",
      "Skin examination for lesions": "No obvious Kaposi's sarcoma lesions. Skin appears normal without opportunistic infection signs."
    },
    "ddxTargets": [
      "CNS toxoplasmosis (correct \u2014 treat empirically)",
      "Primary CNS lymphoma \u2014 EBV+ in CSF; single periventricular lesion; biopsy if toxo fails at 10-14 days",
      "Cryptococcal meningitis \u2014 meningitic pattern; India ink; crypto antigen",
      "Bacterial brain abscess \u2014 toxo IgG positive makes toxo more likely",
      "Tuberculoma \u2014 endemic exposure; AFB culture"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on HIV status and assuming any CNS symptoms are HIV-related without considering the specific CD4 count and opportunistic infection risks",
      "prematureClosure": "Risk of stopping at 'seizure disorder' without investigating the underlying CNS pathology in an immunocompromised patient",
      "availabilityBias": "May focus on common seizure causes rather than opportunistic CNS infections specific to AIDS patients with low CD4 counts"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Given that this is a 33-year-old with HIV presenting with new-onset seizures, what specific aspects of his HIV history would be most important to explore? What does his current immune status tell you about the types of opportunistic infections he might be at risk for?",
      "phase5": "You've gathered good information about his seizures and HIV history. His medication adherence issues and the focal neurological symptoms are concerning. Given his likely low CD4 count based on the medication non-adherence, what CNS opportunistic infections should be highest on your differential? What imaging would be most helpful here?",
      "finalDebrief": "This case highlights the importance of considering opportunistic CNS infections in AIDS patients with low CD4 counts. The combination of new-onset seizures, headaches, and mild fever in someone with likely poor HIV control should immediately raise concern for toxoplasmosis, CNS lymphoma, or other opportunistic infections. The key learning point is that neurological symptoms in immunocompromised patients require urgent evaluation and empiric treatment while awaiting definitive diagnosis.",
      "final": "Diagnosis: CNS toxoplasmosis in AIDS. Key learning: (1) Empiric treatment rule: HIV, CD4 <200, Toxoplasma IgG positive, multiple ring-enhancing lesions \u2192 treat empirically for toxoplasmosis first without biopsy. Clinical and radiological improvement at 10-14 days confirms toxo. No improvement \u2192 biopsy for PCNSL. (2) Toxo IgG negative: if seronegative, toxo very unlikely (<3%) \u2192 proceed to biopsy sooner. (3) PCNSL distinction: single periventricular lesion, EBV+ in CSF (85% sensitive), responds dramatically to dexamethasone, CD4 typically <50. (4) IRIS timing: treat OI 2-3 weeks before starting ART. Exception protocols for TB meningitis, cryptococcal meningitis, PML. (5) Suppressive therapy: after 6 weeks acute treatment, lifelong pyrimethamine + sulfadiazine until CD4 >200 for \u22656 months on ART. TMP-SMX primary prophylaxis for CD4 <200 covers both PCP and toxo."
    }
  }
};
