// Virtual EMR Case: Reactive Arthritis
// Variant: reactive-arthritis | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Derek Campbell",
    "patientHPI": "I've been having terrible diarrhea for three days now, started watery but now there's blood in it, and my stomach is cramping so bad I can barely stand up. I think it might be from that chicken sandwich I got from a food truck last week - it didn't taste quite right and my coworker got sick too.",
    "dob": "08/25/1995",
    "age": 29,
    "sex": "Male",
    "mrn": "RDX-2025-73192",
    "pronouns": "He/Him",
    "insurance": "Aetna PPO",
    "pcp": "Dr. Jennifer Hayes, MD",
    "pharmacy": "Walgreens — 2500 N Federal Hwy, Fort Lauderdale, FL",
    "language": "English",
    "race": "White",
    "address": "9468 Jasmine Way, Detroit, MI 48210",
    "phone": "(954) 555-6712",
    "email": "d.campbell95@email.com",
    "emergencyContact": {
      "name": "Michael Campbell (Father)",
      "phone": "(954) 555-6730"
    }
  },
  "problems": [
    {
      "problem": "Gastroenteritis — Campylobacter, Recent",
      "icd": "A04.5",
      "onset": "12/2024",
      "status": "Resolved",
      "notes": "Confirmed Campylobacter jejuni on stool culture 12/08/2024; 5 days of bloody diarrhea, fever, cramping; resolved without antibiotics (mild case); returned to work 12/16/2024"
    },
    {
      "problem": "Low Back Pain — Intermittent",
      "icd": "M54.5",
      "onset": "2022",
      "status": "Active",
      "notes": "Intermittent low back stiffness; attributed to desk job and gym; no imaging pursued; responds to stretching"
    }
  ],
  "medications": [
    {
      "name": "Ibuprofen 400mg PRN",
      "sig": "Take 1 tablet by mouth every 6-8 hours as needed for pain with food",
      "prescriber": "Dr. Hayes",
      "start": "01/2023",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Amoxicillin",
      "type": "Drug",
      "reaction": "Maculopapular rash — diffuse",
      "severity": "Mild",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "12/08/2024",
      "bp": "118/74",
      "hr": 92,
      "rr": 16,
      "temp": "101.2°F",
      "spo2": "99%",
      "wt": "178 lbs",
      "ht": "6'0\"",
      "bmi": 24.1,
      "setting": "Urgent Care"
    },
    {
      "date": "06/12/2024",
      "bp": "116/72",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "180 lbs",
      "ht": "6'0\"",
      "bmi": 24.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/08/2024",
      "type": "Urgent Care",
      "provider": "Dr. Kevin Li, MD",
      "cc": "Bloody diarrhea, cramping, fever x 3 days",
      "hpi": "29-year-old male presents with 3 days of watery then bloody diarrhea (6-8 episodes/day), severe abdominal cramping, and fever to 101°F. Ate at a food truck 5 days ago — undercooked chicken suspected. No travel. No sick contacts other than a coworker who also felt ill after the same meal. No vomiting. Able to tolerate fluids.",
      "exam": "General: Mildly dehydrated, uncomfortable. Abdomen: Diffuse tenderness, hyperactive bowel sounds, no rebound or guarding. Rectal: Guaiac positive. MSK: WNL. Skin: No rash.",
      "assessment": "1. Acute infectious gastroenteritis — suspected bacterial (Campylobacter vs Salmonella)",
      "plan": "1. Stool culture and O&P sent\n2. Supportive care: oral rehydration, bland diet\n3. Avoid antidiarrheals (bloody diarrhea)\n4. If worsening or unable to hydrate: return for IV fluids\n5. Follow-up with PCP for culture results\n6. Results: Campylobacter jejuni confirmed 12/11/2024 — mild course, did not require antibiotics"
    },
    {
      "id": "V002",
      "date": "06/12/2024",
      "type": "Primary Care",
      "provider": "Dr. Jennifer Hayes, MD",
      "cc": "Annual wellness",
      "hpi": "29-year-old healthy male for annual exam. No complaints. Exercises regularly — weight lifting and running. Intermittent low back stiffness, worse after prolonged sitting at desk. Improves with movement and stretching. No radiculopathy.",
      "exam": "General: Fit, NAD. CV: RRR. Lungs: CTAB. MSK: Full spinal ROM; mild paraspinal muscle tenderness lower lumbar; SLR negative bilateral. Skin: Clear.",
      "assessment": "1. Annual wellness — healthy\n2. Mechanical low back pain — mild",
      "plan": "1. Core strengthening, ergonomic workstation assessment\n2. Ibuprofen PRN\n3. RTC 1 year"
    }
  ],
  "labs": [
    {
      "date": "12/08/2024",
      "time": "14:00",
      "orderedBy": "Dr. Kevin Li, MD",
      "collected": "12/08/2024 13:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-120815",
      "status": "Final",
      "specimenType": "Stool, Serum",
      "fasting": "No",
      "groups": [
        {
          "name": "STOOL STUDIES",
          "results": [
            {
              "test": "Stool Culture",
              "value": "Campylobacter jejuni isolated",
              "unit": "—",
              "range": "No pathogen isolated",
              "flag": "H"
            },
            {
              "test": "Stool WBC",
              "value": "Many",
              "unit": "/hpf",
              "range": "None",
              "flag": "H"
            },
            {
              "test": "Stool Occult Blood",
              "value": "Positive",
              "unit": "—",
              "range": "Negative",
              "flag": "H"
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            {
              "test": "BUN",
              "value": "22",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.2",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "136",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "3.6",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-270",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/22/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-696",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) — series complete",
      "date": "2013",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: Psoriasis, alive at 56",
    "Father: Ankylosing spondylitis (HLA-B27 positive), alive at 60",
    "Sister: Healthy, age 26",
    "Family history significant for HLA-B27-associated disease"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Software developer — desk job; works from home 3 days/week"
    ],
    [
      "Marital",
      "Single; sexually active with male and female partners"
    ],
    [
      "Tobacco",
      "Denies"
    ],
    [
      "Alcohol",
      "Social, 3-4 drinks on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Weight lifting 4x/week; running 2x/week"
    ],
    [
      "Housing",
      "Studio apartment"
    ],
    [
      "Safety",
      "No firearms; seatbelt"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "reactive-arthritis",
    "diagnosis": "Reactive Arthritis (Post-Campylobacter, HLA-B27-Associated) — Classic Triad: Arthritis, Conjunctivitis, Urethritis",
    "acuity": 3,
    "presentation": "Musculoskeletal Emergency",
    "category": "rheumatologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Derek appears anxious and visibly uncomfortable, frequently shifting in his chair due to joint pain. He's forthcoming about his symptoms but somewhat embarrassed discussing his sexual history and urinary symptoms, requiring gentle encouragement to provide complete information.",
    "interviewQuestions": [
      "Can you tell me more about when your joint pain started and which joints are affected?",
      "Have you noticed any eye irritation, redness, or discharge recently?",
      "Are you experiencing any burning with urination or urethral discharge?",
      "How long ago did you have the diarrheal illness, and was it diagnosed?",
      "Have you had any skin changes or rashes, particularly on your palms or soles?",
      "Do you have any back pain or morning stiffness?",
      "Can you describe your recent sexual activity and any new partners?",
      "Have you traveled recently or eaten anything unusual?",
      "Do you have any family history of arthritis or autoimmune conditions?",
      "What medications are you currently taking for your symptoms?",
      "Have you ever been tested for sexually transmitted infections?",
      "Are you experiencing any fever, chills, or night sweats?",
      "Have you had any mouth sores or genital ulcers?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you explain that differently?",
      "onset": "The joint pain started about a week ago, maybe 5-6 days after my stomach problems began. It came on gradually but has gotten much worse over the past few days.",
      "character": "My knees and ankles feel hot, swollen, and really stiff. It's like a deep aching pain that's constant, and my lower back is killing me too.",
      "location": "Mainly my knees and ankles - both sides but the right knee is definitely worse. My lower back pain goes down into my buttocks sometimes.",
      "severity": "The joint pain is easily an 8 out of 10 right now. I can barely walk normally, and getting up from sitting is terrible.",
      "aggravating": "Any movement makes it worse, especially first thing in the morning. Sitting at my computer all day doesn't help either.",
      "relieving": "The ibuprofen helps a little bit, but not much. Heat seems to help my back somewhat.",
      "associated": "My eyes have been really red and irritated the past few days, and I've been having some burning when I pee. I feel feverish and just generally awful.",
      "denies": "No chest pain, no shortness of breath, no rash that I've noticed, no mouth sores.",
      "history": "I've had some back pain on and off for a couple years, but nothing like this joint pain. This is completely new for me.",
      "medications": "Ibuprofen 400mg PRN",
      "allergies": "Amoxicillin",
      "family": "My dad has ankylosing spondylitis and tested positive for something called HLA-B27. My mom has psoriasis.",
      "social": "I'm a software developer, work from home mostly. I'm single and sexually active. I don't smoke, drink socially on weekends, no drugs."
    },
    "examManeuvers": [
      "Joint examination of knees and ankles",
      "Sacroiliac joint compression and distraction tests",
      "Schober test for spinal mobility",
      "Conjunctival examination",
      "Urethral examination for discharge",
      "Skin examination for keratoderma blennorrhagicum",
      "Achilles tendon and plantar fascia palpation",
      "Hip flexor and range of motion testing",
      "Lymph node examination",
      "Abdominal examination"
    ],
    "examFindings": {
      "Joint examination of knees and ankles": "Bilateral knee effusions with warmth and erythema, right worse than left. Both ankles swollen with limited dorsiflexion due to pain and stiffness.",
      "Sacroiliac joint compression and distraction tests": "Positive bilateral SI joint compression test with significant tenderness. Patient reports deep aching pain with distraction maneuvers.",
      "Schober test for spinal mobility": "Limited lumbar spine flexion, Schober test 3cm (normal >5cm), indicating reduced spinal mobility.",
      "Conjunctival examination": "Bilateral conjunctival injection and mild purulent discharge, more prominent in the right eye.",
      "Urethral examination for discharge": "Minimal clear urethral discharge noted, patient reports dysuria and urinary frequency.",
      "Skin examination for keratoderma blennorrhagicum": "No obvious keratoderma on palms or soles, but mild scaling noted on plantar surfaces.",
      "Achilles tendon and plantar fascia palpation": "Bilateral Achilles tendon tenderness and thickening, positive heel squeeze test.",
      "Hip flexor and range of motion testing": "Limited hip internal rotation bilaterally, positive FABER test on the right.",
      "Lymph node examination": "No significant lymphadenopathy in cervical, axillary, or inguinal regions.",
      "Abdominal examination": "Soft, non-tender abdomen, normal bowel sounds, no organomegaly or masses."
    },
    "ddxTargets": [
      "Reactive Arthritis (Post-Campylobacter, HLA-B27-Associated) — Classic Triad: Arthritis, Conjunctivitis, Urethritis",
      "Gonococcal Arthritis",
      "Inflammatory Bowel Disease with Arthritis",
      "Septic Arthritis",
      "Acute Rheumatic Fever",
      "Psoriatic Arthritis",
      "Early Ankylosing Spondylitis"
    ],
    "biasFlags": {
      "anchoring": "May anchor on the recent GI illness and miss the classic triad of reactive arthritis, or focus solely on infectious causes given the fever and recent illness.",
      "prematureClosure": "Risk of diagnosing simple post-infectious arthritis without considering the full constellation of symptoms including conjunctivitis and urethritis.",
      "availabilityBias": "May overweight sexually transmitted infections given patient's sexual activity, or underweight reactive arthritis if not recently encountered."
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. I notice you're thinking about post-infectious processes. Given this patient's age, recent illness, and family history, what specific syndromic diagnoses should you be considering? What key historical elements will help you differentiate between infectious and post-infectious causes?",
      "phase5": "Excellent history and physical. You've identified the classic triad - let's walk through how this fits together. How does the timeline of symptoms, family history, and physical findings support your leading diagnosis? What's the pathophysiology connecting the recent Campylobacter infection to his current presentation?",
      "finalDebrief": "This case beautifully illustrates reactive arthritis with the classic Reiter's triad. Notice how the family history of HLA-B27 positive ankylosing spondylitis was a key clue, and the temporal relationship between the GI infection and symptom onset. How did your differential diagnosis evolve as you gathered more information, and what clinical pearls will you remember for future cases?"
    }
  }
};
