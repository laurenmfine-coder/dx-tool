
window.EMR_DATA = {
  "patient": {
    "name": "Gerald Whitmore",
    "patientHPI": "My wife keeps saying I'm more forgetful lately and sometimes I lose track of what day it is, but I think that's just normal aging. I have been getting these headaches in the front of my head on and off for the past month though.",
    "dob": "12/04/1954",
    "age": 70,
    "sex": "Male",
    "mrn": "RDX-2025-81294",
    "pronouns": "He/Him",
    "insurance": "Medicare Part A/B + Cigna Supplement",
    "pcp": "Dr. Michael Torres, MD",
    "pharmacy": "CVS Pharmacy \u2014 1801 E Sunrise Blvd, Fort Lauderdale, FL",
    "language": "English",
    "race": "White/Caucasian",
    "address": "2031 Birch Ln, Columbus, OH 43206",
    "phone": "(954) 555-2918",
    "email": "g.whitmore54@email.com",
    "emergencyContact": {
      "name": "Carol Whitmore (Wife)",
      "phone": "(954) 555-2921"
    },
    "chiefComplaint": "Seizure and confusion for weeks"
  },
  "problems": [
    {
      "problem": "Primary CNS lymphoma \u2014 periventricular butterfly pattern",
      "icd": "C85.20",
      "onset": "2024",
      "status": "Active",
      "notes": "Elizabeth Park, 68F \u2014 immunocompetent. Progressive confusion, personality change, right arm weakness. MRI: periventricular butterfly-pattern homogeneous enhancing mass crossing corpus callosum."
    },
    {
      "problem": "Dramatic steroid response \u2014 diagnostic trap",
      "icd": "C85.20",
      "onset": "2024",
      "status": "Active",
      "notes": "PCNSL melts with corticosteroids. Steroids before biopsy = non-diagnostic biopsy. Withhold steroids until tissue obtained."
    },
    {
      "problem": "Biopsy required \u2014 tissue diagnosis mandatory",
      "icd": "C85.20",
      "onset": "2024",
      "status": "Active",
      "notes": "Stereotactic biopsy before any steroids. High yield >90% in PCNSL."
    }
  ],
  "medications": [
    {
      "name": "HOLD steroids until biopsy obtained",
      "sig": "PCNSL is steroid-sensitive \u2014 lymphoma cells lyse \u2192 non-diagnostic biopsy. Only use dexamethasone if life-threatening herniation.",
      "prescriber": "Neurosurgery/Neuro-oncology",
      "start": "2024",
      "refills": 0,
      "status": "HOLD"
    },
    {
      "name": "High-dose methotrexate \u22653.5g/m\u00b2 \u2014 post-biopsy",
      "sig": "Backbone of PCNSL treatment. Penetrates BBB at high doses. Combined with rituximab and cytarabine consolidation. CR in 35-60%.",
      "prescriber": "Neuro-oncology",
      "start": "2024",
      "refills": 0,
      "status": "Post-biopsy"
    },
    {
      "name": "Stereotactic biopsy \u2014 before steroids",
      "sig": "MRI-guided biopsy. Diagnostic yield >90%. Avoid steroids 7-10 days before biopsy if possible.",
      "prescriber": "Neurosurgery",
      "start": "2024",
      "refills": 0,
      "status": "Scheduled"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs (Sulfamethoxazole)",
      "type": "Drug",
      "reaction": "Stevens-Johnson syndrome (2002 \u2014 documented, biopsy-confirmed)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/26/2025",
      "bp": "158/92",
      "hr": 94,
      "rr": 18,
      "temp": "99.2\u00b0F",
      "spo2": "97%",
      "wt": "192 lbs",
      "ht": "5'11\"",
      "bmi": 26.8,
      "setting": "ED"
    },
    {
      "date": "11/20/2024",
      "bp": "138/82",
      "hr": 74,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "196 lbs",
      "ht": "5'11\"",
      "bmi": 27.3,
      "setting": "PCP Office"
    },
    {
      "date": "05/15/2024",
      "bp": "134/80",
      "hr": 72,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "198 lbs",
      "ht": "5'11\"",
      "bmi": 27.6,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/20/2024",
      "type": "Primary Care",
      "provider": "Dr. Michael Torres, MD",
      "cc": "Follow-up: diabetes, hypertension, RA; new complaint of intermittent headache and personality change",
      "hpi": "70-year-old male presenting for routine follow-up. Wife accompanied and reports husband has been 'not himself' for 3-4 weeks \u2014 more forgetful, occasionally confused about day/time, less engaged in conversations. Patient attributes this to 'getting old.' New intermittent frontal headache over past month, worse in mornings. No visual changes, weakness, or speech difficulty. No seizure activity noted. Weight loss 4 lbs in past 3 months \u2014 attributes to decreased appetite.",
      "exam": "General: Well-appearing for age, cooperative. HEENT: PERRL, EOMI. CV: RRR. Lungs: CTA. Abdomen: Soft, NT. Extremities: Mild RA changes in MCPs, no active synovitis. Neuro: A&O x3 but slow to respond. Slight decreased verbal fluency. Mild short-term memory impairment (recalled 1/3 objects at 5 min). No focal motor or sensory deficits. Gait: Normal.",
      "assessment": "1. New cognitive changes and headache in 70-year-old \u2014 differential includes early dementia, depression, hypothyroidism, B12 deficiency, intracranial pathology\n2. T2DM \u2014 A1c 7.2, acceptable\n3. HTN \u2014 controlled\n4. RA \u2014 stable on methotrexate",
      "plan": "1. Labs: TSH, B12, folate, CMP, CBC, RPR\n2. MoCA screening: 22/30 \u2014 below expected\n3. If labs unrevealing \u2192 brain MRI\n4. Wife instructed to monitor for worsening confusion, personality change, or new neurologic symptoms\n5. Continue all current medications\n6. RTC 4-6 weeks with lab results; sooner if worsening"
    },
    {
      "id": "V002",
      "date": "01/08/2025",
      "type": "Primary Care",
      "provider": "Dr. Michael Torres, MD",
      "cc": "Lab follow-up; worsening cognition and headache",
      "hpi": "70-year-old male returns with wife. Labs from 11/2024: TSH 2.8, B12 normal, folate normal, RPR non-reactive. Wife reports cognitive decline has worsened \u2014 husband got lost driving to familiar grocery store, left stove on twice. Headache now daily, worse in AM. Two episodes of right hand 'jerking' lasting 30-60 seconds over the past week \u2014 wife unsure if these are seizures.",
      "exam": "Neuro: A&O x2 (person, place). Speech somewhat dysarthric compared to baseline. Right hand fine motor coordination slightly decreased. Mild right facial droop (new). Grip strength 4/5 R. MoCA: 18/30 (decline from 22).",
      "assessment": "1. Progressive cognitive decline with new focal deficits and possible focal seizures \u2014 URGENT concern for intracranial mass lesion\n2. Right facial droop and hand weakness \u2014 localizing to left hemisphere",
      "plan": "1. STAT MRI brain with and without contrast\n2. If mass identified \u2192 neurosurgery referral\n3. Consider starting levetiracetam if seizures confirmed\n4. Discussed possibility of brain tumor with wife; patient has limited insight\n5. MRI scheduled for 01/12/2025 \u2014 wife instructed to go to ED if seizure, worsening weakness, or severe headache"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "PCNSL Workup",
      "results": [
        {
          "test": "HIV test",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "CSF cytology",
          "value": "Atypical lymphocytes \u2014 suspicious",
          "unit": "",
          "ref": "Normal",
          "flag": "H"
        },
        {
          "test": "CSF EBV PCR",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "CSF IL-10:IL-6 ratio",
          "value": ">1 (elevated IL-10 = PCNSL)",
          "unit": "",
          "ref": "<1 normal",
          "flag": "H"
        },
        {
          "test": "Whole body PET",
          "value": "No systemic lymphoma",
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
      "study": "MRI Brain with Gadolinium",
      "findings": "Periventricular homogeneous enhancing mass (4.2cm) crossing corpus callosum \u2014 butterfly pattern. Restricted diffusion on DWI. No ring enhancement.",
      "impression": "Periventricular butterfly-pattern lesion highly characteristic of PCNSL. Biopsy before steroids."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (High-Dose \u2014 Fluzone)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FH821K",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 (Pfizer, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "CV798R",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 \u2014 Prevnar 20)",
      "date": "12/2023",
      "site": "Left deltoid IM",
      "lot": "PV812T",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1st dose)",
      "date": "01/2020",
      "site": "Right deltoid IM",
      "lot": "SH281K",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2nd dose)",
      "date": "03/2020",
      "site": "Right deltoid IM",
      "lot": "SH287K",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Deceased at age 84 \u2014 Alzheimer disease",
    "Father: Deceased at age 78 \u2014 prostate cancer (indolent)",
    "Sister (age 68): Rheumatoid arthritis, hypothyroidism",
    "Brother (age 73): CAD, T2DM",
    "No family history of brain tumors or lymphoma"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired \u2014 former high school principal"
    ],
    [
      "Marital",
      "Married x 44 years; lives with wife"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social \u2014 1 glass wine with dinner most evenings"
    ],
    [
      "Drugs",
      "None"
    ],
    [
      "Exercise",
      "Daily walks with wife (prior to cognitive decline); now limited"
    ],
    [
      "Housing",
      "Single-family home; one level"
    ],
    [
      "Safety",
      "Wife reports she has hidden car keys due to driving concern; no falls; no wandering"
    ],
    [
      "Advance Directive",
      "Yes \u2014 full code; healthcare proxy: wife (Carol Whitmore)"
    ]
  ],
  "meta": {
    "caseId": "cns-lymphoma",
    "diagnosis": "Primary CNS Lymphoma \u2014 Periventricular, Immunocompetent",
    "acuity": 2,
    "presentation": "Seizure",
    "category": "oncologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Gerald appears mildly confused and somewhat irritated, frequently downplaying his symptoms and attributing them to 'normal aging.' He becomes defensive when pressed about cognitive changes but is more forthcoming about physical symptoms like headaches.",
    "interviewQuestions": [
      "Can you describe the seizure episode that brought you to the hospital today?",
      "Tell me more about these headaches you've been having",
      "Your wife mentioned memory problems - can you give me some examples?",
      "Have you noticed any weakness, numbness, or trouble with coordination?",
      "Any changes in your vision, speech, or hearing?",
      "Have you had any nausea, vomiting, or changes in appetite?",
      "Any recent weight loss or night sweats?",
      "Have you had any infections recently or felt run down?",
      "Tell me about your rheumatoid arthritis - how long have you had it and how is it treated?",
      "Any family history of cancer or neurological problems?",
      "Have you ever had seizures before today?",
      "Any recent changes to your medications?",
      "Have you been taking your methotrexate as prescribed?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you're getting at. Can you ask me something more specific?",
      "onset": "The headaches started maybe a month ago, just occasionally at first. My wife says the memory thing has been going on for a few months, but I think she's exaggerating.",
      "character": "The headaches feel like pressure, mainly in the front of my head. As for the seizure, I don't really remember it - I just woke up in the ambulance.",
      "location": "The headaches are mostly right here in the front, above my eyebrows. Sometimes they seem to go toward the back of my head too.",
      "severity": "The headaches are maybe a 5 or 6 out of 10 when they're bad. They don't completely stop me from doing things, but they're annoying.",
      "aggravating": "The headaches seem worse in the morning when I first get up. Bright lights bother me more than usual too.",
      "relieving": "Tylenol helps a little with the headaches, but not completely. Lying down in a dark room seems to help some.",
      "associated": "Now that you mention it, I have been feeling more tired lately, and sometimes I feel a little nauseous with the headaches. My wife says I've been walking a bit unsteady.",
      "denies": "No fever that I know of, no vision changes, no trouble speaking. I haven't lost weight - if anything I think I've gained a little.",
      "history": "I've had rheumatoid arthritis for about 8 years now. Started the methotrexate about 3 years ago when my joints got worse. It's helped a lot with the joint pain and swelling.",
      "medications": "Methotrexate 15mg weekly (oral); Folic Acid 1mg daily (except methotrexate day); Metformin 1000mg BID; Glipizide 5mg BID; Losartan/HCTZ 50/12.5mg daily; Tamsulosin 0.4mg QHS",
      "allergies": "Sulfa drugs (Sulfamethoxazole)",
      "family": "My mother had Alzheimer's, which is why my wife is so worried about the memory thing. My father died of prostate cancer, but it was slow-growing. My sister has rheumatoid arthritis like me.",
      "social": "I'm retired - used to be a high school principal. Been married 44 years. Never smoked, just have a glass of wine with dinner most nights. No drugs or anything like that."
    },
    "examManeuvers": [
      "Mental status examination including orientation and cognitive assessment",
      "Cranial nerve examination",
      "Motor strength testing of upper and lower extremities",
      "Deep tendon reflexes",
      "Coordination testing (finger-to-nose, heel-to-shin)",
      "Gait assessment",
      "Fundoscopic examination",
      "Neck stiffness assessment",
      "Joint examination for RA activity",
      "Lymph node examination"
    ],
    "examFindings": {
      "Mental status examination including orientation and cognitive assessment": "Oriented to person and place but unsure of exact date. Mini-mental status exam shows mild deficits in attention and short-term memory. Appears mildly confused during complex tasks.",
      "Cranial nerve examination": "Pupils equal, reactive to light. Mild left facial weakness (CN VII). Other cranial nerves intact. No papilledema on fundoscopy.",
      "Motor strength testing of upper and lower extremities": "Mild left-sided weakness, 4+/5 in left arm and leg. Right side strength normal 5/5.",
      "Deep tendon reflexes": "Hyperreflexive on the left side (3+), normal on right (2+). Positive Babinski sign on left.",
      "Coordination testing (finger-to-nose, heel-to-shin)": "Mild left-sided dysmetria and ataxia. Right side coordination normal.",
      "Gait assessment": "Slightly unsteady gait with tendency to veer to the left. No obvious ataxia but mildly cautious stepping.",
      "Fundoscopic examination": "No papilledema or retinal hemorrhages. Mild arteriolar narrowing consistent with hypertensive changes.",
      "Neck stiffness assessment": "No nuchal rigidity. Full range of motion without pain.",
      "Joint examination for RA activity": "Mild synovitis in MCPs and PIPs bilaterally, consistent with well-controlled RA. No acute flare.",
      "Lymph node examination": "No palpable lymphadenopathy in cervical, axillary, or inguinal regions."
    },
    "ddxTargets": [
      "Primary CNS lymphoma (correct)",
      "GBM \u2014 butterfly pattern can occur; heterogeneous ring enhancement more typical",
      "CNS toxoplasmosis \u2014 ring-enhancing; CD4 <200; IgG positive; AIDS",
      "Tumefactive MS \u2014 young patient; open ring sign; oligoclonal bands",
      "Brain metastasis \u2014 known primary; multiple lesions more common"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'normal aging' explanation for cognitive symptoms, especially given family history of Alzheimer's, while missing the immunosuppression context",
      "prematureClosure": "May stop at common diagnoses like stroke or Alzheimer's without considering oncologic causes in this immunosuppressed patient",
      "availabilityBias": "Might focus on more common causes of seizure in elderly rather than considering CNS lymphoma, which is rare but more likely in immunosuppressed patients"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. I notice you've included both common and serious causes of new-onset seizure in a 70-year-old. Before you interview the patient, think about what specific risk factors this patient might have that could guide your questioning. What do you know about his medical history that might be relevant?",
      "phase5": "Excellent history and physical exam. You've identified some concerning focal neurological findings and cognitive changes in an immunosuppressed patient. Given his medication regimen and the pattern of symptoms, what does this constellation suggest to you? How does his immunosuppression change your thinking about the most likely diagnoses?",
      "finalDebrief": "This case highlights the importance of considering medication-induced immunosuppression as a major risk factor. Primary CNS lymphoma, while rare in the general population, has a much higher incidence in immunosuppressed patients like those on methotrexate. The bilateral periventricular location and butterfly pattern across the corpus callosum are classic imaging findings. How did your differential evolve as you gathered more information about his immunosuppression and focal findings?",
      "final": "Diagnosis: primary CNS lymphoma. Key learning: (1) PCNSL classic MRI: periventricular, corpus callosum (butterfly), HOMOGENEOUS enhancement (not ring-enhancing), restricted diffusion. 90% DLBCL. Median age 65. (2) The steroid trap: dexamethasone causes lymphoma cell lysis \u2192 lesion shrinks or disappears \u2192 biopsy non-diagnostic. Rule: no steroids before biopsy unless herniation. (3) AIDS vs immunocompetent PCNSL: AIDS = EBV-driven, CD4 <50, responds to ART. Immunocompetent = EBV-negative, requires high-dose MTX-based chemotherapy. (4) High-dose MTX rationale: MTX at \u22653.5g/m\u00b2 penetrates BBB. Low-dose does not. Leucovorin rescue 24h after MTX is mandatory. (5) Whole-body staging with PET-CT to rule out systemic lymphoma. Vitreoretinal involvement in 15-25% \u2014 ophthalmology slit-lamp exam."
    }
  }
};
