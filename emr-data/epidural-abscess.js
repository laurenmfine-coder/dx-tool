
window.EMR_DATA = {
  "patient": {
    "name": "Derek Simmons",
    "patientHPI": "I'm back for another steroid injection in my spine because my back pain came back. The first shot I got a few months ago worked great for about three months, but now that shooting pain down my right leg is back just as bad as before.",
    "dob": "01/25/1983",
    "age": 43,
    "sex": "Male",
    "mrn": "RDX-2025-72058",
    "pronouns": "He/Him",
    "insurance": "Medicaid",
    "pcp": "Dr. Anthony Reyes, MD",
    "pharmacy": "Walgreens \u2014 1300 S Andrews Ave, Fort Lauderdale, FL",
    "language": "English",
    "race": "White",
    "address": "1900 W Haddon Ave, New Orleans, LA 70118",
    "phone": "(954) 555-2693",
    "email": "d.simmons83@email.com",
    "emergencyContact": {
      "name": "Linda Simmons (Mother)",
      "phone": "(954) 555-2707"
    }
  },
  "problems": [
    {
      "problem": "Spinal epidural abscess \u2014 post-ESI, L4-L5",
      "icd": "G06.1",
      "onset": "2024",
      "status": "Active",
      "notes": "William Chen, 58M \u2014 lumbar epidural steroid injection 2 weeks ago. Progressive severe back pain since injection, now bilateral leg weakness and urinary retention developing over 48h. MRI: epidural abscess L4-5 with cord/cauda compression."
    },
    {
      "problem": "Progressive neurological deficits \u2014 surgical emergency",
      "icd": "G06.1",
      "onset": "2024",
      "status": "Active",
      "notes": "Bilateral leg weakness + urinary retention = impending cauda equina syndrome. Every hour of untreated compression = permanent neurological deficit."
    },
    {
      "problem": "Staphylococcus aureus \u2014 most common pathogen",
      "icd": "G06.1",
      "onset": "2024",
      "status": "Active",
      "notes": "S. aureus accounts for >65% of spinal epidural abscesses. MRSA and MSSA both common. IV drug use, spinal procedures, and bacteremia are leading risk factors."
    }
  ],
  "medications": [
    {
      "name": "Surgical decompression \u2014 emergent laminectomy",
      "sig": "Epidural abscess with neurological deficits = surgical emergency. Emergent laminectomy and drainage. Every hour of delay = more permanent neurological damage.",
      "prescriber": "Neurosurgery",
      "start": "2024",
      "refills": 0,
      "status": "EMERGENT \u2014 OR"
    },
    {
      "name": "Vancomycin 25-30mg/kg IV q8-12h \u2014 MRSA coverage",
      "sig": "Empiric vancomycin pending cultures. Covers MRSA and MSSA. De-escalate to nafcillin if MSSA confirmed. Target vancomycin AUC 400-600 (or trough 15-20).",
      "prescriber": "Infectious Disease/Neurosurgery",
      "start": "2024",
      "refills": 0,
      "status": "IMMEDIATE"
    },
    {
      "name": "Long-term IV antibiotics \u2014 4-8 weeks post-drainage",
      "sig": "SEA requires prolonged IV antibiotics (4-8 weeks) due to poor penetration into abscess cavity and adjacent bone. Duration based on clinical response and follow-up MRI.",
      "prescriber": "Infectious Disease",
      "start": "2024",
      "refills": 0,
      "status": "Plan \u2014 post-drainage"
    }
  ],
  "allergies": [
    {
      "allergen": "Penicillin",
      "type": "Drug",
      "reaction": "Rash and facial swelling",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/16/2026",
      "bp": "136/84",
      "hr": 104,
      "rr": 18,
      "temp": "101.8\u00b0F",
      "spo2": "97%",
      "wt": "168 lbs",
      "ht": "5'11\"",
      "bmi": 23.4,
      "setting": "ED"
    },
    {
      "date": "12/02/2025",
      "bp": "124/78",
      "hr": 76,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "99%",
      "wt": "170 lbs",
      "ht": "5'11\"",
      "bmi": 23.7,
      "setting": "Specialist"
    },
    {
      "date": "08/20/2025",
      "bp": "122/74",
      "hr": 72,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "172 lbs",
      "ht": "5'11\"",
      "bmi": 24,
      "setting": "PCP Office"
    },
    {
      "date": "02/10/2025",
      "bp": "120/76",
      "hr": 74,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "99%",
      "wt": "174 lbs",
      "ht": "5'11\"",
      "bmi": 24.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/02/2025",
      "type": "Specialist",
      "provider": "Dr. Michael Torres, MD (Pain Management)",
      "cc": "Lumbar ESI; chronic low back pain",
      "hpi": "43-year-old male with chronic LBP and L4-L5 disc herniation presenting for second epidural steroid injection. First ESI (06/2025) provided 3 months of relief. Right-sided radicular pain returned \u2014 7/10 radiating to right buttock and posterior thigh. MRI (09/2025) shows stable L4-L5 right paracentral herniation. Non-opioid management due to OUD history. Currently managed with naproxen, cyclobenzaprine, and physical therapy.",
      "exam": "General: NAD. Spine: Tenderness L4-L5 midline and right paraspinal. SLR: Positive right at 50\u00b0. Motor: 5/5 all. Sensation: Diminished right L5 dermatome.",
      "assessment": "1. Lumbar radiculopathy L5 \u2014 recurrent; proceeding with ESI #2\n2. Chronic LBP\n3. OUD \u2014 compliant with buprenorphine; no opioid prescriptions",
      "plan": "1. Right L4-L5 interlaminar ESI performed \u2014 triamcinolone 80mg/lidocaine 1%\n2. Sterile technique; no complications\n3. Continue naproxen, cyclobenzaprine\n4. Continue PT\n5. RTC 6 weeks for reassessment"
    },
    {
      "id": "V002",
      "date": "08/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Anthony Reyes, MD",
      "cc": "Follow-up: OUD, depression, back pain",
      "hpi": "43-year-old male for routine follow-up. OUD \u2014 compliant with buprenorphine x 3 years; attending weekly NA meetings. Depression stable on escitalopram. Back pain managed with NSAIDs and PT \u2014 improved after ESI in 06/2025. Working part-time at auto parts store. Denies any substance use. UDS consistent with buprenorphine only.",
      "exam": "General: NAD. Psych: Euthymic, good rapport. Spine: Mild tenderness. Neuro: Grossly intact. Arms: No track marks; old scars bilateral antecubital fossae.",
      "assessment": "1. OUD \u2014 in remission on MAT; compliant\n2. MDD \u2014 stable\n3. Chronic LBP \u2014 improved post-ESI\n4. HCV \u2014 SVR sustained",
      "plan": "1. Continue buprenorphine/naloxone\n2. Continue escitalopram\n3. UDS quarterly\n4. Pain management follow-up for possible repeat ESI\n5. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Spinal Epidural Abscess",
      "results": [
        {
          "test": "WBC",
          "value": "22.4",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "ESR",
          "value": "118",
          "unit": "mm/hr",
          "ref": "<20",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "240",
          "unit": "mg/L",
          "ref": "<10",
          "flag": "H"
        },
        {
          "test": "Blood cultures x2",
          "value": "Pending \u2014 before antibiotics",
          "unit": "",
          "ref": "",
          "flag": ""
        },
        {
          "test": "Bilateral leg strength",
          "value": "3/5 bilaterally \u2014 progressive weakness",
          "unit": "",
          "ref": "5/5",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "MRI Spine with Gadolinium \u2014 Lumbar",
      "findings": "Epidural abscess L3-L5 with rim enhancement. Cord/cauda equina compression at L4-5. Adjacent discitis and osteomyelitis L4-5. Epidural extension anteriorly.",
      "impression": "Spinal epidural abscess with cauda equina compression and adjacent discitis-osteomyelitis. Emergent neurosurgical consultation."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/08/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-316",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2025-26)",
      "date": "10/30/2025",
      "site": "Right deltoid IM",
      "lot": "CM2025-668",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Hepatitis A (Havrix) (2/2)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    },
    {
      "vaccine": "Hepatitis B (Engerix-B) (3/3)",
      "date": "2016",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Unknown medical history (estranged)",
    "Mother: Depression, T2DM, alive at 65",
    "Brother: Substance use disorder (alcohol), alive at 45",
    "No known family history of autoimmune, cancer, or neurologic disease"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Part-time auto parts store clerk; formerly construction laborer"
    ],
    [
      "Marital",
      "Single; never married; lives alone"
    ],
    [
      "Tobacco",
      "Current smoker \u2014 1/2 PPD x 20 years (10 pack-year)"
    ],
    [
      "Alcohol",
      "Sober 3 years; prior heavy use"
    ],
    [
      "Drugs",
      "History IV heroin use (2010-2022); in remission on buprenorphine/naloxone; last use >3 years ago"
    ],
    [
      "Exercise",
      "Walks daily; gym 2x/week when pain allows"
    ],
    [
      "Housing",
      "Studio apartment; lives alone"
    ],
    [
      "Safety",
      "Denies IPV; safe injection education provided historically; no current use"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "epidural-abscess",
    "diagnosis": "Spinal Epidural Abscess \u2014 Post-Epidural Steroid Injection, MSSA",
    "acuity": 2,
    "presentation": "Back Pain",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Derek appears anxious and in moderate distress, fidgeting and shifting positions frequently due to discomfort. He's cooperative but somewhat defensive about his substance use history, initially focused on getting another steroid injection rather than considering other causes for his worsening symptoms.",
    "interviewQuestions": [
      "When did your back pain start getting worse again?",
      "How would you describe the pain - is it the same as before or different?",
      "Where exactly is the pain located and does it radiate anywhere?",
      "On a scale of 1-10, how severe is your pain right now?",
      "What makes your pain worse or better?",
      "Have you had any fever, chills, or feeling unwell?",
      "Any numbness, tingling, or weakness in your legs?",
      "Any bowel or bladder problems?",
      "Tell me about the steroid injection you had - when was it exactly?",
      "Have you had any skin infections or other infections recently?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Any family history of back problems or infections?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean doc, I just need another shot for my back like I got before.",
      "onset": "The pain started coming back about 2 weeks ago, but it's gotten much worse over the past 4-5 days. It's different this time - more constant and deeper.",
      "character": "It's a deep, throbbing ache that's constant, not just the sharp shooting pain I used to get. It feels like something is eating away at my spine.",
      "location": "It's right in my lower back, same spot as always around L4-L5, but now it radiates around to my belly too, not just down my leg.",
      "severity": "Right now it's a solid 8 out of 10. I can barely sleep and it hurts even when I'm just sitting still. Before it was only bad when I moved.",
      "aggravating": "Everything makes it worse - sitting, standing, walking, even lying down. Coughing or sneezing is excruciating.",
      "relieving": "Nothing really helps anymore. The naproxen and muscle relaxers aren't touching it. I've been wanting to take more but I know I can't.",
      "associated": "I've been feeling really run down and achy all over. Had some chills and been sweating at night. My right leg feels weaker than usual.",
      "denies": "No numbness or tingling, no problems with my bowel or bladder, no skin rashes or wounds that I can see.",
      "history": "I've had chronic back pain for years from the disc herniation, but this feels completely different. Never had fever with my back pain before.",
      "medications": "Buprenorphine/Naloxone 8/2mg SL BID; Escitalopram 20mg daily; Cyclobenzaprine 10mg TID PRN; Naproxen 500mg BID",
      "allergies": "Penicillin",
      "family": "My mom has diabetes and depression, but no back problems that I know of. Don't know much about my dad's side.",
      "social": "I work part-time at an auto parts store now, used to do construction. I'm in recovery from heroin, been clean over 3 years on the buprenorphine. Still smoke about half a pack a day."
    },
    "examManeuvers": [
      "Inspection of injection site",
      "Palpation of lumbar spine",
      "Straight leg raise test",
      "Motor strength testing lower extremities",
      "Deep tendon reflexes",
      "Sensory examination",
      "Rectal examination for sphincter tone",
      "Percussion tenderness over spinous processes",
      "Range of motion testing",
      "Neurological examination for upper motor neuron signs"
    ],
    "examFindings": {
      "Inspection of injection site": "No obvious erythema, swelling, or drainage at previous ESI site, but patient reports tenderness",
      "Palpation of lumbar spine": "Marked tenderness and warmth over L4-L5 spinous processes and paraspinal muscles",
      "Straight leg raise test": "Positive bilaterally at 30 degrees, limited by severe back pain rather than radicular symptoms",
      "Motor strength testing lower extremities": "4/5 strength in right ankle dorsiflexion and plantarflexion, otherwise 5/5",
      "Deep tendon reflexes": "Diminished right Achilles reflex, otherwise symmetric",
      "Sensory examination": "Intact to light touch and pinprick in all dermatomes",
      "Rectal examination for sphincter tone": "Normal sphincter tone, no saddle anesthesia",
      "Percussion tenderness over spinous processes": "Severe percussion tenderness over L4-L5 spinous processes",
      "Range of motion testing": "Severely limited lumbar flexion and extension due to pain",
      "Neurological examination for upper motor neuron signs": "No pathologic reflexes, no clonus"
    },
    "ddxTargets": [
      "Spinal epidural abscess \u2014 post-ESI (correct)",
      "Metastatic epidural cord compression \u2014 known cancer; no fever; no inflammatory markers; different MRI enhancement",
      "Herniated disc with cauda equina \u2014 no fever; no inflammatory markers; different MRI \u2014 disc material not enhancing abscess",
      "Transverse myelitis \u2014 inflammatory; CSF pleocytosis; different MRI pattern; no focal collection",
      "Discitis-osteomyelitis alone \u2014 can coexist; but epidural collection is key finding requiring surgery"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on patient's substance use history and dismissing pain as drug-seeking behavior rather than investigating serious pathology",
      "prematureClosure": "Risk of immediately assuming recurrent disc herniation given recent ESI and chronic back pain history without considering infectious complications",
      "availabilityBias": "Risk of focusing on common mechanical causes of back pain rather than considering rare but serious post-procedural complications like epidural abscess"
    },
    "coachPrompts": {
      "phase2": "Before you interview this patient, consider the timeline and quality of his symptoms. What red flags might distinguish serious spinal pathology from routine mechanical back pain? How might his recent procedure and medical history influence your approach?",
      "phase5": "Now that you've completed your history and exam, what key features distinguish this presentation from typical mechanical back pain? What specific combination of findings should prompt urgent imaging and specialist consultation?",
      "finalDebrief": "This case highlights the importance of recognizing post-procedural complications and avoiding bias based on substance use history. How did the fever, constant pain quality, and percussion tenderness help differentiate epidural abscess from mechanical causes? What systemic factors in this patient's history may have predisposed him to this complication?",
      "final": "Diagnosis: spinal epidural abscess. Key learning: (1) Classic SEA triad: back pain + fever + neurological deficit. Only 13% have all three at presentation \u2014 most present with back pain and fever initially. The triad fully present = late presentation. Do not wait for the full triad \u2014 MRI immediately if back pain + fever + any neurological symptom. (2) Post-procedure SEA: epidural steroid injections, spinal surgery, epidural anesthesia \u2014 all introduce bacteria into the epidural space. New or worsening back pain after spinal procedure = SEA until proven otherwise. ESR and CRP are highly sensitive markers. (3) Surgery vs antibiotics alone: neurological deficits = surgery immediately. No deficits + small abscess + poor surgical candidate = antibiotics alone with very close monitoring. Any neurological deterioration = OR. (4) S. aureus dominant: >65% of cases. MRSA increasingly common. Empiric vancomycin. De-escalate to nafcillin/oxacillin for MSSA (better CNS penetration than vancomycin). Duration: 4-8 weeks IV antibiotics after drainage. (5) Adjacent discitis-osteomyelitis: SEA frequently coexists with discitis-osteomyelitis. Treat both simultaneously \u2014 longer antibiotic course required for bone involvement."
    }
  }
};
