
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
    "pharmacy": "CVS Pharmacy \u2014 2600 Broward Blvd, Fort Lauderdale, FL",
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
      "problem": "Acute compartment syndrome \u2014 anterior compartment R leg",
      "icd": "M79.A21",
      "onset": "2024",
      "status": "Active",
      "notes": "Mike Johnson, 28M \u2014 tibial fracture MVA 6 hours ago. Worsening pain out of proportion, pain with passive toe extension, tense compartment. Compartment pressure 42 mmHg."
    },
    {
      "problem": "Tibial shaft fracture \u2014 R leg, awaiting repair",
      "icd": "S82.201A",
      "onset": "2024",
      "status": "Active",
      "notes": "Definitive fracture repair deferred pending fasciotomy. Fracture fixation after compartment pressure normalizes."
    },
    {
      "problem": "Vascular status \u2014 dorsalis pedis present but weak",
      "icd": "M79.A21",
      "onset": "2024",
      "status": "Active",
      "notes": "Preserved Doppler signal does not rule out compartment syndrome \u2014 compartment pressure can be elevated with intact pulses early."
    }
  ],
  "medications": [
    {
      "name": "Emergency four-compartment fasciotomy \u2014 NOW",
      "sig": "Indicated: compartment pressure >30 mmHg OR within 30 mmHg of diastolic BP (\u0394P <30). This patient \u0394P = 62-42 = 20 mmHg \u2192 IMMEDIATE fasciotomy. Every hour of delay risks permanent muscle necrosis.",
      "prescriber": "Orthopedic Surgery",
      "start": "2024",
      "refills": 0,
      "status": "EMERGENT"
    },
    {
      "name": "IV morphine 4mg q4h \u2014 analgesia",
      "sig": "Pain out of proportion to injury is the cardinal symptom. Adequate analgesia while arranging fasciotomy.",
      "prescriber": "Emergency Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Remove constrictive dressings/splints \u2014 IMMEDIATELY",
      "sig": "First intervention: remove all circumferential dressings. Temporary pressure reduction while preparing for fasciotomy.",
      "prescriber": "Emergency Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Done"
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
      "temp": "98.6\u00b0F",
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
      "temp": "98.4\u00b0F",
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
      "assessment": "1. Closed right tibial shaft fracture \u2014 mid-diaphyseal, transverse pattern on XR\n2. Mild fibular fracture at same level\n3. Neurovascular status intact but must monitor for compartment syndrome",
      "plan": "1. Closed reduction performed under procedural sedation\n2. Long leg cast applied \u2014 BIVALVED for swelling\n3. Post-reduction XR: acceptable alignment\n4. Admitted for overnight neurovascular checks Q2H\n5. COMPARTMENT SYNDROME PRECAUTIONS: elevate, ice, strict NV checks, if pain out of proportion or with passive stretch \u2192 STAT compartment pressures\n6. Pain: oxycodone 5mg Q6H PRN, ibuprofen 600mg Q8H\n7. Ortho consulted \u2014 OR for IM nail if alignment lost\n8. RETURN IMMEDIATELY after discharge if: increasing pain not relieved by meds, numbness, inability to move toes, cast feels too tight"
    },
    {
      "id": "V002",
      "date": "08/14/2024",
      "type": "Primary Care",
      "provider": "Dr. Angela Torres, MD",
      "cc": "Annual wellness exam",
      "hpi": "26-year-old healthy male for annual exam. No complaints. Exercise-induced asthma well-controlled with PRN albuterol. Active lifestyle \u2014 CrossFit 5x/week, recreational motorcyclist. No medications other than albuterol.",
      "exam": "General: Fit, athletic male, NAD. CV: RRR. Lungs: CTAB. MSK: Full ROM. Neuro: Intact.",
      "assessment": "1. Wellness exam \u2014 healthy\n2. Exercise-induced asthma \u2014 well-controlled",
      "plan": "1. Continue albuterol PRN\n2. Motorcycle safety discussed \u2014 helmet use emphasized\n3. RTC 1 year"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Compartment Syndrome Assessment",
      "results": [
        {
          "test": "Compartment pressure \u2014 anterior compartment",
          "value": "42",
          "unit": "mmHg",
          "ref": "<30 mmHg (fasciotomy threshold)",
          "flag": "H"
        },
        {
          "test": "\u0394P (diastolic minus compartment pressure)",
          "value": "20",
          "unit": "mmHg",
          "ref": ">30 mmHg (safe)",
          "flag": "H"
        },
        {
          "test": "CK",
          "value": "4800",
          "unit": "U/L",
          "ref": "<200",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.2",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": ""
        },
        {
          "test": "Urine myoglobin",
          "value": "Positive \u2014 dark urine",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "X-Ray Right Tibia/Fibula AP and Lateral",
      "findings": "Mid-shaft tibial fracture, non-comminuted, mild angulation. No vascular calcification. Soft tissue swelling.",
      "impression": "Tibial shaft fracture. Clinical diagnosis of compartment syndrome \u2014 compartment pressure measurement is the gold standard."
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
      "vaccine": "HPV (Gardasil 9) \u2014 series complete",
      "date": "2014",
      "site": "Left deltoid IM",
      "lot": "\u2014",
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
      "Marijuana \u2014 occasional"
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
    "diagnosis": "Acute Compartment Syndrome \u2014 Anterior Compartment, Right Leg (Post-Tibial Fracture)",
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
      "Acute compartment syndrome \u2014 anterior compartment (correct)",
      "Deep vein thrombosis \u2014 calf pain, but no tense compartment, pain with passive stretch",
      "Arterial insufficiency \u2014 absent pulses distinguish; compartment syndrome can coexist",
      "Rhabdomyolysis alone \u2014 rhabdo IS occurring but compartment syndrome is the driver",
      "Normal post-fracture pain \u2014 pain out of proportion + tense compartment + \u0394P <30 mmHg = not normal",
      "Infection/cellulitis \u2014 too early post-injury; infection risk increases with fasciotomy delay"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on recent tibial fracture and assuming pain is simply fracture-related, missing the acute compartment syndrome development",
      "prematureClosure": "Risk of stopping at 'post-fracture pain' without recognizing the acute change in pain character and associated neurological symptoms",
      "availabilityBias": "May focus on more common post-trauma diagnoses like DVT or infection rather than recognizing the classic constellation of compartment syndrome findings"
    },
    "coachPrompts": {
      "phase2": "You've identified some solid differentials for acute leg pain post-trauma. As you interview this patient, pay particular attention to the timeline and character of his pain - how has it changed since the initial injury? Also consider what specific physical findings would help you distinguish between vascular, infectious, and pressure-related causes.",
      "phase5": "Excellent work gathering the history and physical findings. You've noted the patient's severe pain, the firm compartment, weakness with dorsiflexion, and sensory changes. What do these findings tell you about the pathophysiology occurring in his leg? How do the physical exam findings help narrow your differential diagnosis?",
      "finalDebrief": "This case highlights the critical importance of recognizing compartment syndrome early. Notice how the diagnosis became clear when you combined the timeline (pain worsening rather than improving), the character (pressure-like rather than typical fracture pain), and the classic pentad of findings. The key teaching point is that compartment syndrome is a surgical emergency - the 5 P's (Pain, Pressure, Paresthesias, Pallor, Pulselessness) progress in order, and waiting for late findings like absent pulses means irreversible damage has occurred.",
      "final": "Diagnosis: acute compartment syndrome. Key learning: (1) Six P's: Pain (out of proportion), Pressure (tense compartment), Paresthesias (nerve ischemia), Paralysis (late), Pallor, Pulselessness (very late \u2014 do not wait for this). Pain with passive stretch of muscles in the affected compartment is the most sensitive early sign. (2) Compartment pressure thresholds: absolute >30 mmHg OR \u0394P (diastolic BP minus compartment pressure) <30 mmHg \u2192 fasciotomy indicated. This patient \u0394P = 20 mmHg \u2192 immediate fasciotomy. (3) Normal pulses do NOT rule out compartment syndrome. Compartment pressure can cause muscle/nerve ischemia before arterial occlusion. Pulses present in >50% of confirmed compartment syndrome cases at presentation. (4) Fasciotomy: four-compartment fasciotomy of the leg (anterior, lateral, deep posterior, superficial posterior). Wounds left open 48-72 hours then closed. (5) Reperfusion injury and rhabdomyolysis: elevated CK (>5000) from muscle necrosis. Monitor urine output (target 1-2 mL/kg/hr), urine myoglobin, creatinine for myoglobinuric AKI."
    }
  }
};
