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
            { "test": "Stool Culture", "value": "Campylobacter jejuni isolated", "unit": "—", "range": "No pathogen isolated", "flag": "H" },
            { "test": "Stool WBC", "value": "Many", "unit": "/hpf", "range": "None", "flag": "H" },
            { "test": "Stool Occult Blood", "value": "Positive", "unit": "—", "range": "Negative", "flag": "H" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "BUN", "value": "22", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.2", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "136", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "3.6", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" }
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
    ["Occupation", "Software developer — desk job; works from home 3 days/week"],
    ["Marital", "Single; sexually active with male and female partners"],
    ["Tobacco", "Denies"],
    ["Alcohol", "Social, 3-4 drinks on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Weight lifting 4x/week; running 2x/week"],
    ["Housing", "Studio apartment"],
    ["Safety", "No firearms; seatbelt"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "reactive-arthritis",
    "diagnosis": "Reactive Arthritis (Post-Campylobacter, HLA-B27-Associated) — Classic Triad: Arthritis, Conjunctivitis, Urethritis",
    "acuity": 3,
    "presentation": "Musculoskeletal Emergency",
    "category": "rheumatologic"
  }
};

/* ── CASES format extension ─────────── */
window.CASES = window.CASES || {};
window.CASES['reactive-arthritis'] = {
  id: 'reactive-arthritis', name: 'Derek Campbell',
  chiefComplaint: 'Reactive Arthritis — Chlamydia Trigger and NSAIDs',
  diagnosis: 'Reactive Arthritis — Chlamydia Trigger and NSAIDs',
  orders: {
    correct: [{ id: 'nsaids-rea', name: 'NSAIDs — first-line for joint inflammation', rationale: 'NSAIDs (naproxen, indomethacin) are first-line for reactive arthritis joint symptoms. Treat for weeks to months. For severe or refractory cases: intra-articular corticosteroids, systemic steroids, or DMARDs (sulfasalazine for persistent disease). Do not use steroids as first-line.' },{ id: 'sti-testing', name: 'STI testing and treatment — treat Chlamydia if positive', rationale: 'Chlamydia trachomatis is the most common trigger in developed countries. Test and treat active infection (even if reactive arthritis has started — treating the trigger may reduce disease duration). Doxycycline 100mg BID × 7-10 days for uncomplicated Chlamydia. Treat partner simultaneously.' }],
    incorrect: [{ id: 'antibiotics-joint', name: 'Antibiotics for joint infection — septic arthritis', rationale: 'Reactive arthritis is a sterile joint inflammation — the pathogen is NOT in the joint (unlike septic arthritis). Antibiotics do not treat the joint inflammation. Arthrocentesis of a reactive arthritis joint: inflammatory fluid (WBC 5,000-50,000) with NEGATIVE gram stain and culture. Treat underlying STI if active, not the joint itself.' },{ id: 'anti-tnf', name: 'Infliximab — start biologic immediately for reactive arthritis', rationale: 'Anti-TNF therapy is reserved for CHRONIC reactive arthritis (>6 months) refractory to conventional therapy. Most reactive arthritis resolves within 3-12 months without biologic therapy. First-line: NSAIDs → DMARDs (sulfasalazine) → biologic only if truly refractory.' }]
  },
  teachingPoints: {
    keyLearning: ['Reactive arthritis (formerly Reiter syndrome): asymmetric oligoarthritis + urethritis + conjunctivitis/uveitis + mucocutaneous lesions (keratoderma blennorrhagica on palms/soles, circinate balanitis). Triggered by STI (Chlamydia most common) or enteric infection (Salmonella, Shigella, Campylobacter, Yersinia).','HLA-B27 association: 60-80% of patients with reactive arthritis are HLA-B27 positive. HLA-B27 is also associated with other seronegative spondyloarthropathies (ankylosing spondylitis, psoriatic arthritis, IBD-associated arthritis).','Prognosis: most resolve within 12 months. 15-20% develop chronic disease. 15-20% develop sacroiliitis. Screen for HLA-B27 in chronic cases (predicts ankylosing spondylitis risk).'],
    boardPearls: ['Classic triggers: Chlamydia (sexually active adults, urogenital reactive arthritis), Salmonella/Shigella/Campylobacter/Yersinia (post-enteric reactive arthritis). Reactive arthritis typically follows infection by 1-4 weeks.','Uveitis in reactive arthritis: anterior uveitis — eye pain, photophobia, redness, blurred vision. Refer to ophthalmology for slit-lamp evaluation and topical steroids. Untreated uveitis causes blindness.','Psoriatic arthritis vs reactive arthritis: both are seronegative spondyloarthropathies with oligoarthritis. Psoriatic: nail changes (pitting, onycholysis), dactylitis (sausage finger), skin psoriasis. Reactive: urethritis/conjunctivitis, triggered by infection, mucocutaneous lesions without psoriasis plaques.']
  }
};
