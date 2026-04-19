// Virtual EMR Case: Acute Compartment Syndrome
// Variant: acute-compartment-syndrome | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Marcus Rivera",
  "patientHPI": "I was riding my bike home from work when I hit this huge pothole and went down - wasn't going very fast, maybe 25 miles per hour. My right leg is killing me and looks all twisted, but what's really scaring me is that it feels like it's going to burst. The pain keeps getting worse and my foot feels all tingly and numb.",
    "dob": "06/14/1998",
    "age": 26,
    "sex": "Male",
    "mrn": "RDX-2025-31847",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Angela Torres, MD",
    "pharmacy": "CVS Pharmacy — 2600 Broward Blvd, Fort Lauderdale, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino",
    "address": "6831 Dogwood Ln, Minneapolis, MN 55411",
    "phone": "(954) 555-2841",
    "email": "m.rivera98@email.com",
    "emergencyContact": {
      "name": "Carmen Rivera (Mother)",
      "phone": "(954) 555-2860"
    }
  },
  "problems": [
    {
      "problem": "Closed Tibial Shaft Fracture — Right, Post-Reduction",
      "icd": "S82.201A",
      "onset": "01/2025",
      "status": "Active",
      "notes": "Closed mid-shaft tibial fracture right leg sustained in motorcycle accident; reduced in ED and placed in long leg cast 01/18/2025; ortho follow-up scheduled"
    },
    {
      "problem": "Exercise-Induced Asthma",
      "icd": "J45.990",
      "onset": "2012",
      "status": "Active",
      "notes": "Mild; albuterol PRN before exercise; no daily controller"
    }
  ],
  "medications": [
    {
      "name": "Albuterol HFA 90mcg PRN",
      "sig": "Inhale 2 puffs 15-20 minutes before exercise as needed",
      "prescriber": "Dr. Torres",
      "start": "06/2013",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Oxycodone 5mg Q6H PRN (post-fracture)",
      "sig": "Take 1 tablet by mouth every 6 hours as needed for severe pain",
      "prescriber": "Dr. Patel (ED)",
      "start": "01/2025",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Ibuprofen 600mg Q8H PRN",
      "sig": "Take 1 tablet by mouth every 8 hours as needed for pain with food",
      "prescriber": "Dr. Patel (ED)",
      "start": "01/2025",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/18/2025",
      "bp": "142/88",
      "hr": 102,
      "rr": 18,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "185 lbs",
      "ht": "5'11\"",
      "bmi": 25.8,
      "setting": "ED"
    },
    {
      "date": "08/14/2024",
      "bp": "118/74",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "183 lbs",
      "ht": "5'11\"",
      "bmi": 25.5,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/18/2025",
      "type": "ED",
      "provider": "Dr. Anil Patel, MD (Emergency Medicine)",
      "cc": "Right leg pain and deformity after motorcycle accident",
      "hpi": "26-year-old male brought to ED after low-speed motorcycle accident (hit pothole, laid bike down at ~25 mph). Right leg deformity and severe pain. No LOC. Helmet worn. No chest, abdominal, or head complaints. Right lower leg visibly angulated. No open wound. Distal pulses present but diminished compared to left. Sensation intact but reports tingling in right foot.",
      "exam": "General: Alert, in moderate distress, pain 8/10. HEENT: WNL, no facial trauma. Chest: CTAB, no rib tenderness. Abdomen: Soft, NT. Pelvis: Stable. Right lower leg: Visible angulation mid-shaft, significant swelling, ecchymosis. Compartments soft but tense. Distal: DP pulse 1+ (left 2+), cap refill 3 sec, sensation intact (light touch), able to dorsiflex/plantarflex toes. Left leg: WNL.",
      "assessment": "1. Closed right tibial shaft fracture — mid-diaphyseal, transverse pattern on XR\n2. Mild fibular fracture at same level\n3. Neurovascular status intact but must monitor for compartment syndrome",
      "plan": "1. Closed reduction performed under procedural sedation\n2. Long leg cast applied — BIVALVED for swelling\n3. Post-reduction XR: acceptable alignment\n4. Admitted for overnight neurovascular checks Q2H\n5. COMPARTMENT SYNDROME PRECAUTIONS: elevate, ice, strict NV checks, if pain out of proportion or with passive stretch → STAT compartment pressures\n6. Pain: oxycodone 5mg Q6H PRN, ibuprofen 600mg Q8H\n7. Ortho consulted — OR for IM nail if alignment lost\n8. RETURN IMMEDIATELY after discharge if: increasing pain not relieved by meds, numbness, inability to move toes, cast feels too tight"
    },
    {
      "id": "V002",
      "date": "08/14/2024",
      "type": "Primary Care",
      "provider": "Dr. Angela Torres, MD",
      "cc": "Annual wellness exam",
      "hpi": "26-year-old healthy male for annual exam. No complaints. Exercise-induced asthma well-controlled with PRN albuterol. Active lifestyle — CrossFit 5x/week, recreational motorcyclist. No medications other than albuterol.",
      "exam": "General: Fit, athletic male, NAD. CV: RRR. Lungs: CTAB. MSK: Full ROM. Neuro: Intact.",
      "assessment": "1. Wellness exam — healthy\n2. Exercise-induced asthma — well-controlled",
      "plan": "1. Continue albuterol PRN\n2. Motorcycle safety discussed — helmet use emphasized\n3. RTC 1 year"
    }
  ],
  "labs": [
    {
      "date": "01/18/2025",
      "time": "19:30",
      "orderedBy": "Dr. Anil Patel, MD (Emergency Medicine)",
      "collected": "01/18/2025 19:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-011815",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "12.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Hemoglobin", "value": "14.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "42.0", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "268", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "128", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "16", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.1", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "CK (Creatine Kinase)", "value": "420", "unit": "U/L", "range": "30-200", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/18/2025",
      "study": "X-RAY RIGHT TIBIA/FIBULA — AP AND LATERAL",
      "accession": "IMG-2025-01181",
      "status": "FINAL",
      "orderedBy": "Dr. Anil Patel, MD (Emergency Medicine)",
      "readBy": "Dr. Lisa Moreno, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "26M motorcycle accident, right leg deformity.",
      "technique": "AP and lateral views, right tibia/fibula.",
      "findings": "Right tibia: Transverse fracture of the mid-diaphysis with mild lateral displacement (~5mm) and no significant angulation. No comminution. No intra-articular extension.\\n\\nRight fibula: Oblique fracture at the junction of mid and distal third.\\n\\nSoft tissues: Moderate swelling surrounding the fracture site.\\n\\nKnee and ankle joints: No effusion or dislocation.",
      "impression": "1. Closed transverse mid-shaft tibial fracture with mild lateral displacement.\\n2. Associated fibular fracture at mid-distal junction.\\n3. Moderate soft tissue swelling — clinical correlation for compartment syndrome recommended.",
      "dictated": "01/18/2025 19:45",
      "verified": "01/18/2025 20:15"
    },
    {
      "date": "01/18/2025",
      "study": "X-RAY RIGHT TIBIA/FIBULA — POST-REDUCTION",
      "accession": "IMG-2025-01182",
      "status": "FINAL",
      "orderedBy": "Dr. Anil Patel, MD (Emergency Medicine)",
      "readBy": "Dr. Lisa Moreno, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "26M status post closed reduction right tibial fracture — assess alignment.",
      "technique": "AP and lateral views through cast.",
      "findings": "Right tibia: Post-reduction alignment improved. Near-anatomic alignment with <2mm displacement and <5° angulation. Cast in place.\\n\\nRight fibula: Fracture unchanged.",
      "impression": "1. Acceptable post-reduction alignment of right tibial shaft fracture.\\n2. Recommend close clinical follow-up and repeat imaging in 1 week.",
      "dictated": "01/18/2025 21:30",
      "verified": "01/18/2025 22:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/02/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-258",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/18/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-682",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "01/18/2025",
      "site": "Left deltoid IM",
      "lot": "TD25-018",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) — series complete",
      "date": "2014",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: Asthma, HTN, alive at 52",
    "Father: T2DM, CAD, alive at 56",
    "Brother: Healthy, age 23",
    "No family history of bleeding disorders or DVT"
  ],
  "socialHistory": [
    ["Occupation", "Electrician apprentice (IBEW Local 728)"],
    ["Marital", "Single, lives with roommate"],
    ["Tobacco", "Denies"],
    ["Alcohol", "Social, 3-4 beers on weekends"],
    ["Drugs", "Marijuana — occasional"],
    ["Exercise", "CrossFit 5x/week; recreational motorcyclist"],
    ["Housing", "Apartment with roommate"],
    ["Safety", "Motorcycle helmet always; no firearms"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "acute-compartment-syndrome",
    "diagnosis": "Acute Compartment Syndrome — Anterior Compartment, Right Leg (Post-Tibial Fracture)",
    "acuity": 1,
    "presentation": "Musculoskeletal Emergency",
    "category": "orthopedic"
  },
    "examManeuvers": [
        "General appearance and level of distress",
        "Vital signs review",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted system examination"
    ],
    "examFindings": {
        "General appearance and level of distress": "Clinical finding consistent with Acute Compartment Syndrome \u2014 Anterior Compartment, Right Leg. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Acute Compartment Syndrome \u2014 Anterior Compartment, Right Leg. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Acute Compartment Syndrome \u2014 Anterior Compartment, Right Leg. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Acute Compartment Syndrome \u2014 Anterior Compartment, Right Leg. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with Acute Compartment Syndrome \u2014 Anterior Compartment, Right Leg. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with Acute Compartment Syndrome \u2014 Anterior Compartment, Right Leg. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with Acute Compartment Syndrome \u2014 Anterior Compartment, Right Leg. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with Acute Compartment Syndrome \u2014 Anterior Compartment, Right Leg. Document specifically what you observe."
    },
    "ddxTargets": [
        "Acute Compartment Syndrome \u2014 Anterior Compartment, Right Leg (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Acute Compartment Syndrome \u2014 Anterior Compartment, Right Leg, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Acute Compartment Syndrome \u2014 Anterior Compartment, Right Leg, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Acute Compartment Syndrome \u2014 Anterior Compartment, Right Leg based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Marcus Rivera's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Acute Compartment Syndrome \u2014 Anterior Compartment, Right Leg (Post-Tibial Fracture). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
},
  "guided": {
    "supported": true,
    "patientPersona": "Marcus appears anxious and in severe distress, gripping his right leg and speaking in short, clipped sentences due to pain. He's cooperative but clearly frightened, repeatedly asking if he's going to lose his leg, and becomes increasingly agitated when discussing the intense pressure sensation in his lower leg.",
    "interviewQuestions": [
        "Can you describe exactly what happened during your bicycle accident?",
        "Tell me about the pain in your leg - what does it feel like?",
        "On a scale of 1-10, how would you rate your pain right now?",
        "You mentioned your leg feels like it's going to burst - can you describe that sensation more?",
        "Is the pain getting better, staying the same, or getting worse since the accident?",
        "Can you feel your toes? Can you wiggle them?",
        "Do you have any numbness or tingling in your foot or leg?",
        "What makes the pain worse or better?",
        "Have you taken any pain medication since the accident?",
        "Any nausea, vomiting, or dizziness?",
        "Have you ever had any problems with this leg before?",
        "What medications are you currently taking?",
        "Do you have any allergies to medications?"
    ],
    "patientResponses": {
        "default": "I'm sorry, I'm having trouble focusing because of this pain - can you repeat that?",
        "onset": "This happened about 3 hours ago when I crashed my bike. The pain started right away but it's gotten so much worse in the last hour.",
        "character": "It's like someone is inflating a balloon inside my leg - there's this horrible pressure that feels like my skin is going to split open. It's different from when I first broke it.",
        "location": "It's the front part of my lower right leg, below my knee. The pressure feeling goes from just below my knee down to my ankle.",
        "severity": "It started as maybe a 7 but now it's easily a 9 out of 10. I can barely think straight and I can't put any weight on it at all.",
        "aggravating": "Any movement makes it worse, even just flexing my foot. When I try to point my toes up toward my shin, I get shooting pain.",
        "relieving": "Nothing helps. The pain pills aren't touching it anymore, and elevating it doesn't help like it did before.",
        "associated": "My foot feels kind of numb and tingly, especially between my big toe and second toe. I'm also feeling nauseous from the pain.",
        "denies": "No chest pain, no shortness of breath unless it's from the pain, no problems with my other leg.",
        "history": "I broke this same leg about 6 weeks ago in a skateboarding accident. It was healing fine until today - this feels completely different though.",
        "medications": "Albuterol HFA 90mcg PRN; Oxycodone 5mg Q6H PRN (post-fracture); Ibuprofen 600mg Q8H PRN",
        "allergies": "NKDA",
        "family": "Nothing really relevant - my mom has asthma like me, my dad has diabetes and heart problems, but no one in my family has had leg problems like this.",
        "social": "I'm an electrician apprentice with IBEW Local 728. I live with my roommate, I'm single. I don't smoke cigarettes, have a few beers on weekends, and smoke weed occasionally. This injury is really messing with my work."
    },
    "examManeuvers": [
        "Inspection of right lower leg",
        "Palpation of anterior compartment",
        "Passive dorsiflexion of great toe",
        "Active dorsiflexion of foot",
        "Sensation testing - deep peroneal nerve distribution",
        "Dorsalis pedis pulse palpation",
        "Posterior tibial pulse palpation",
        "Capillary refill of toes",
        "Two-point discrimination on dorsal foot",
        "Compartment firmness assessment"
    ],
    "examFindings": {
        "Inspection of right lower leg": "Right lower leg appears swollen and tense over anterior compartment with shiny, stretched skin. Previous surgical scar from tibial fracture repair visible.",
        "Palpation of anterior compartment": "Anterior compartment is rock-hard and exquisitely tender to light palpation. Patient withdraws leg immediately upon touch.",
        "Passive dorsiflexion of great toe": "Severe pain with passive dorsiflexion of great toe, patient unable to tolerate full range of motion.",
        "Active dorsiflexion of foot": "Markedly weak active dorsiflexion of foot (2/5 strength), patient reports severe pain with attempt.",
        "Sensation testing - deep peroneal nerve distribution": "Decreased sensation to light touch in first web space between great toe and second toe.",
        "Dorsalis pedis pulse palpation": "Dorsalis pedis pulse present but diminished compared to left foot.",
        "Posterior tibial pulse palpation": "Posterior tibial pulse palpable and normal.",
        "Capillary refill of toes": "Capillary refill 4-5 seconds in great toe, normal (<2 seconds) in left foot.",
        "Two-point discrimination on dorsal foot": "Impaired two-point discrimination on dorsal aspect of right foot.",
        "Compartment firmness assessment": "Unable to indent anterior compartment with firm pressure - feels like palpating a wooden board."
    },
    "ddxTargets": [
        "Acute Compartment Syndrome — Anterior Compartment, Right Leg (Post-Tibial Fracture) (correct diagnosis)",
        "Deep Vein Thrombosis with Phlegmasia",
        "Cellulitis or Soft Tissue Infection",
        "Acute Arterial Occlusion",
        "Fat Embolism Syndrome",
        "Delayed Union/Nonunion with Hardware Failure",
        "Severe Contusion or Hematoma"
    ],
    "biasFlags": {
        "anchoring": "Risk of anchoring on recent trauma and assuming this is just expected post-fracture pain rather than recognizing the distinct compartment syndrome presentation with pressure symptoms and neurologic changes.",
        "prematureClosure": "Risk of stopping at 'post-fracture pain' without fully evaluating the compartment-specific findings, weak dorsiflexion, and sensory deficits that distinguish compartment syndrome from routine fracture pain.",
        "availabilityBias": "May focus on more common post-fracture complications like infection or delayed healing rather than recognizing the less common but limb-threatening compartment syndrome requiring immediate surgical intervention."
    },
    "coachPrompts": {
        "phase2": "You've identified some concerning features in this post-fracture patient. Before you interview him, think about what specific complications can occur after tibial fractures, particularly those that present with worsening pain despite initial healing. What time-sensitive conditions should be on your radar for a young patient with this presentation?",
        "phase5": "You've gathered comprehensive history and exam findings. Focus on the constellation of symptoms: pain out of proportion, the specific location and quality of symptoms, and your neurologic findings. How do these findings fit together, and what does the temporal progression tell you about the urgency of this presentation?",
        "finalDebrief": "This case illustrates classic acute compartment syndrome in a post-fracture patient. Notice how the diagnosis evolved from considering routine post-fracture pain to recognizing the specific pattern: pain out of proportion, passive stretch pain, sensory deficits in deep peroneal distribution, and the pathognomonic 'rock-hard' compartment. The key learning point is that compartment syndrome is a surgical emergency - compartment pressure monitoring and fasciotomy cannot be delayed when clinical suspicion is high."
    }
}
};
