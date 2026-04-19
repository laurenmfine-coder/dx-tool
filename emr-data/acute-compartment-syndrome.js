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
            {
              "test": "WBC",
              "value": "12.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "14.2",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "42.0",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "268",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "128",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
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
              "value": "1.1",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": ""
            },
            {
              "test": "CK (Creatine Kinase)",
              "value": "420",
              "unit": "U/L",
              "range": "30-200",
              "flag": "H"
            }
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
    [
      "Occupation",
      "Electrician apprentice (IBEW Local 728)"
    ],
    [
      "Marital",
      "Single, lives with roommate"
    ],
    [
      "Tobacco",
      "Denies"
    ],
    [
      "Alcohol",
      "Social, 3-4 beers on weekends"
    ],
    [
      "Drugs",
      "Marijuana — occasional"
    ],
    [
      "Exercise",
      "CrossFit 5x/week; recreational motorcyclist"
    ],
    [
      "Housing",
      "Apartment with roommate"
    ],
    [
      "Safety",
      "Motorcycle helmet always; no firearms"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "acute-compartment-syndrome",
    "diagnosis": "Acute Compartment Syndrome — Anterior Compartment, Right Leg (Post-Tibial Fracture)",
    "acuity": 1,
    "presentation": "Musculoskeletal Emergency",
    "category": "orthopedic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Marcus is visibly distressed and anxious, grimacing with pain and frequently shifting position. He's cooperative but increasingly agitated as the pain worsens, describing his symptoms with urgency and fear that something is seriously wrong. He's forthcoming about his injury mechanism and pain but becomes more restless and distressed as the interview progresses.",
    "interviewQuestions": [
      "Can you describe exactly how the accident happened?",
      "When did you first notice the pain in your leg getting worse?",
      "What does the pain feel like - is it sharp, dull, throbbing?",
      "On a scale of 1-10, how would you rate your pain right now?",
      "Is the pain getting better, staying the same, or getting worse?",
      "What makes the pain worse?",
      "Have you tried anything to relieve the pain?",
      "Are you having any numbness or tingling in your foot or toes?",
      "Can you move your foot and toes normally?",
      "Have you noticed any changes in sensation in your leg or foot?",
      "What medications are you currently taking?",
      "Do you have any drug allergies?",
      "Have you ever had any serious injuries like this before?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing - this pain is really intense and getting worse. Can you repeat that?",
      "onset": "The pain started right after I crashed about 2 hours ago, but it's gotten so much worse in the last hour. It went from bad to absolutely unbearable.",
      "character": "It feels like my leg is going to explode - like there's this intense pressure building up inside. It's not just bone pain, it's like everything is being squeezed too tight.",
      "location": "The pain is mainly in the front part of my right leg, below the knee. It's not really shooting anywhere else, just this intense pressure right there.",
      "severity": "Right now it's easily a 9 out of 10 - I can barely think straight. When I first got hurt it was maybe a 6, but it just keeps getting worse no matter what I do.",
      "aggravating": "Any movement makes it worse, especially trying to flex my foot up. Even just touching the area lightly makes me want to scream.",
      "relieving": "Nothing helps. I tried the pain meds from my fracture, elevated it, ice - nothing touches this pain. It just keeps getting worse.",
      "associated": "My foot feels numb and tingly, like it's falling asleep. I'm having trouble moving my toes normally, and my foot feels weird - like it's not getting enough blood.",
      "denies": "No chest pain, no trouble breathing unless you count from the pain. No nausea or vomiting. No back pain or neck pain.",
      "history": "Just the tibial fracture I had a few weeks ago - that's healing fine. Never had anything like this burning, pressure feeling before.",
      "medications": "Albuterol HFA 90mcg PRN; Oxycodone 5mg Q6H PRN (post-fracture); Ibuprofen 600mg Q8H PRN",
      "allergies": "NKDA",
      "family": "Nothing really relevant - my mom has asthma like me, dad has diabetes and heart problems, but no one's had serious injuries like this.",
      "social": "I'm an electrician apprentice with IBEW Local 728. I live with a roommate, I'm single. I don't smoke, drink a few beers on weekends, and smoke weed occasionally to relax."
    },
    "examManeuvers": [
      "Inspection of right lower leg",
      "Palpation of anterior compartment",
      "Assessment of compartment tenseness",
      "Passive dorsiflexion of foot",
      "Active dorsiflexion strength testing",
      "Sensation testing - deep peroneal nerve distribution",
      "Dorsalis pedis pulse palpation",
      "Capillary refill of toes",
      "Two-point discrimination testing",
      "Pain with passive toe flexion"
    ],
    "examFindings": {
      "Inspection of right lower leg": "Right anterior leg appears swollen and tense compared to left. Skin is taut and shiny over the anterior compartment. No obvious deformity or open wounds.",
      "Palpation of anterior compartment": "Anterior compartment is firm and woody to palpation. Patient experiences severe pain with light palpation over the compartment.",
      "Assessment of compartment tenseness": "Compartment feels rock-hard and non-compressible. Marked increase in tension compared to contralateral leg.",
      "Passive dorsiflexion of foot": "Severe pain with passive dorsiflexion of the foot - patient unable to tolerate full range of motion due to pain.",
      "Active dorsiflexion strength testing": "Marked weakness in dorsiflexion - patient can barely lift foot against gravity, significant decrease from baseline.",
      "Sensation testing - deep peroneal nerve distribution": "Decreased sensation in the first web space between great toe and second toe. Patient reports numbness and tingling.",
      "Dorsalis pedis pulse palpation": "Dorsalis pedis pulse is diminished but present. Pulse weaker than contralateral foot.",
      "Capillary refill of toes": "Capillary refill slightly delayed at 3-4 seconds. Toes appear slightly pale compared to contralateral foot.",
      "Two-point discrimination testing": "Impaired two-point discrimination in deep peroneal nerve distribution - unable to distinguish points less than 8mm apart.",
      "Pain with passive toe flexion": "Severe pain with passive flexion of the great toe, consistent with stretching of muscles in the anterior compartment."
    },
    "ddxTargets": [
      "Acute Compartment Syndrome — Anterior Compartment, Right Leg (Post-Tibial Fracture) (correct diagnosis)",
      "Deep Vein Thrombosis with acute swelling",
      "Cellulitis or soft tissue infection",
      "Acute arterial occlusion/thrombosis",
      "Fat embolism syndrome",
      "Severe contusion with hematoma formation",
      "Delayed union fracture with acute displacement"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on recent tibial fracture and assuming pain is simply fracture-related, missing the acute compartment syndrome development",
      "prematureClosure": "Risk of stopping at 'post-fracture pain' without recognizing the acute change in pain character and associated neurological symptoms",
      "availabilityBias": "May focus on more common post-trauma diagnoses like DVT or infection rather than recognizing the classic constellation of compartment syndrome findings"
    },
    "coachPrompts": {
      "phase2": "You've identified some solid differentials for acute leg pain post-trauma. As you interview this patient, pay particular attention to the timeline and character of his pain - how has it changed since the initial injury? Also consider what specific physical findings would help you distinguish between vascular, infectious, and pressure-related causes.",
      "phase5": "Excellent work gathering the history and physical findings. You've noted the patient's severe pain, the firm compartment, weakness with dorsiflexion, and sensory changes. What do these findings tell you about the pathophysiology occurring in his leg? How do the physical exam findings help narrow your differential diagnosis?",
      "finalDebrief": "This case highlights the critical importance of recognizing compartment syndrome early. Notice how the diagnosis became clear when you combined the timeline (pain worsening rather than improving), the character (pressure-like rather than typical fracture pain), and the classic pentad of findings. The key teaching point is that compartment syndrome is a surgical emergency - the 5 P's (Pain, Pressure, Paresthesias, Pallor, Pulselessness) progress in order, and waiting for late findings like absent pulses means irreversible damage has occurred."
    }
  }
};
