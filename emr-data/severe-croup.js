// Virtual EMR Case: Severe Croup
// Variant: severe-croup | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Olivia Desmond",
    "patientHPI": "She's been making this weird barking sound when she coughs since yesterday, and her voice sounds hoarse and scratchy. She seems to be having trouble breathing, especially when she gets upset, and the sound gets louder when she cries.",
    "dob": "03/30/2022",
    "age": 2,
    "sex": "Female",
    "mrn": "RDX-2025-44618",
    "pronouns": "She/Her",
    "insurance": "Aetna — PPO (parent plan)",
    "pcp": "Dr. Thomas Grant, MD (Pediatrics)",
    "pharmacy": "CVS Pharmacy — 4001 SW 64th Ave, Riverside, FL",
    "language": "English",
    "race": "White/Caucasian",
    "address": "287 Foxglove Dr, Kansas City, MO 64101",
    "phone": "(954) 555-5381",
    "email": "m.desmond.parent@email.com",
    "emergencyContact": {
      "name": "Megan Desmond (Mother)",
      "phone": "(954) 555-5383"
    }
  },
  "problems": [
    {
      "problem": "Severe Croup (Laryngotracheobronchitis)",
      "icd": "J05.0",
      "onset": "2025",
      "status": "Active",
      "notes": "Current presentation — stridor at rest, significant respiratory distress, Westley score 8"
    },
    {
      "problem": "History of Croup — 1 prior episode",
      "icd": "J05.0",
      "onset": "2024",
      "status": "Resolved",
      "notes": "Mild episode at age 18 months; treated with single dose dexamethasone; resolved in 48 hours"
    },
    {
      "problem": "Cow's Milk Protein Intolerance — Outgrown",
      "icd": "K52.29",
      "onset": "2022",
      "status": "Resolved",
      "notes": "Presented with bloody stools at 3 months; confirmed on elimination diet; challenged at 14 months and tolerated dairy without issue"
    }
  ],
  "medications": [
    {
      "name": "Children's Acetaminophen 160mg/5mL — 5mL Q4-6h PRN",
      "sig": "Give 5 mL by mouth every 4-6 hours as needed for fever or pain",
      "prescriber": "Dr. Grant",
      "start": "10/2024",
      "refills": 0,
      "status": "PRN"
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
      "date": "02/25/2025",
      "bp": "94/58",
      "hr": 162,
      "rr": 44,
      "temp": "101.6°F",
      "spo2": "90%",
      "wt": "26 lbs",
      "ht": "2'11\"",
      "bmi": 15.6,
      "setting": "ED"
    },
    {
      "date": "02/25/2025",
      "bp": "90/56",
      "hr": 148,
      "rr": 34,
      "temp": "100.2°F",
      "spo2": "94%",
      "wt": "26 lbs",
      "ht": "2'11\"",
      "bmi": 15.6,
      "setting": "ED — post nebulized epinephrine"
    },
    {
      "date": "10/15/2024",
      "bp": "86/54",
      "hr": 108,
      "rr": 24,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "25 lbs",
      "ht": "2'10\"",
      "bmi": 15.1,
      "setting": "PCP Office"
    },
    {
      "date": "03/30/2024",
      "bp": "84/52",
      "hr": 110,
      "rr": 26,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "23 lbs",
      "ht": "2'9\"",
      "bmi": 15,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Thomas Grant, MD",
      "cc": "Well-child visit — 2.5-year checkup",
      "hpi": "2.5-year-old female for well-child visit. Parents report she is doing well. Speaking in 3-4 word sentences. Toilet training initiated. Good appetite. No illness. Previous milk protein intolerance fully resolved — tolerates dairy without issues. One prior episode of mild croup at 18 months.",
      "exam": "General: Well-appearing, active, cooperative toddler. HEENT: TMs clear, oropharynx normal. CV: RRR. Lungs: CTA. Abdomen: Soft, NT. Skin: Clear. Neuro: Age-appropriate — running, climbing, speaking in short sentences.",
      "assessment": "1. Well-child — growth and development appropriate\n2. Cow's milk protein intolerance — outgrown\n3. History of croup — single prior episode, mild",
      "plan": "1. Influenza vaccine given\n2. All other immunizations up to date\n3. Anticipatory guidance: toilet training, safety, nutrition\n4. RTC at age 3 for well-child visit"
    },
    {
      "id": "V002",
      "date": "09/18/2024",
      "type": "ED",
      "provider": "Dr. Amanda Liu, MD",
      "cc": "Barky cough and noisy breathing x 1 day",
      "hpi": "18-month-old female (at time of visit) brought to ED by parents for 1-day barky cough and 'squeaky' breathing at night. Mild rhinorrhea for 2 days prior. Low-grade fever (100.4°F). No stridor at rest currently. Still drinking. No drooling. Older cousin at daycare had similar cough last week.",
      "exam": "General: Mild distress with intermittent barky cough but comfortable between episodes. HEENT: Mild nasal congestion, oropharynx mildly erythematous. Neck: Supple. Lungs: Intermittent inspiratory stridor with crying only, no stridor at rest, no wheezing. CV: RRR. SpO2 97% on RA.",
      "assessment": "1. Mild croup — Westley croup score 2 (occasional barky cough, stridor with agitation only)\n2. URI — viral",
      "plan": "1. Dexamethasone 0.6 mg/kg PO x 1 dose given\n2. Observed 2 hours post-dexamethasone — no stridor at rest\n3. Discharge with anticipatory guidance: cool mist humidifier, acetaminophen PRN, return for stridor at rest, difficulty breathing, or drooling\n4. Follow up with PCP in 48 hours if not improving"
    }
  ],
  "labs": [
    {
      "date": "02/25/2025",
      "time": "02:30",
      "orderedBy": "Dr. Emily Torres, MD (ED)",
      "collected": "02/25/2025 02:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-104291",
      "status": "Final",
      "specimenType": "Whole Blood (EDTA), Serum",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            {
              "test": "WBC",
              "value": "12.4",
              "unit": "x10³/µL",
              "range": "5.5-15.5",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "12.0",
              "unit": "g/dL",
              "range": "11.0-14.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "36.1",
              "unit": "%",
              "range": "33-39",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "268",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            },
            {
              "test": "Lymphocytes",
              "value": "52",
              "unit": "%",
              "range": "25-50",
              "flag": "H"
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "98",
              "unit": "mg/dL",
              "range": "60-110",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "12",
              "unit": "mg/dL",
              "range": "5-18",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.3",
              "unit": "mg/dL",
              "range": "0.2-0.4",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "138",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.2",
              "unit": "mEq/L",
              "range": "3.5-5.5",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "103",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "21",
              "unit": "mEq/L",
              "range": "20-28",
              "flag": ""
            }
          ]
        },
        {
          "name": "BLOOD GAS (VENOUS)",
          "results": [
            {
              "test": "pH",
              "value": "7.34",
              "unit": "",
              "range": "7.32-7.42",
              "flag": ""
            },
            {
              "test": "pCO2",
              "value": "48",
              "unit": "mmHg",
              "range": "35-45",
              "flag": "H"
            },
            {
              "test": "pO2",
              "value": "42",
              "unit": "mmHg",
              "range": "30-50",
              "flag": ""
            },
            {
              "test": "Base Excess",
              "value": "-2",
              "unit": "mEq/L",
              "range": "-2 to +2",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/25/2025",
      "study": "SOFT TISSUE NECK X-RAY — AP AND LATERAL",
      "accession": "IMG-2025-10382",
      "status": "FINAL",
      "orderedBy": "Dr. Emily Torres, MD",
      "readBy": "Dr. Sarah Mitchell, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "2-year-old with severe stridor at rest, respiratory distress, barky cough — concern for severe croup vs bacterial tracheitis vs epiglottitis",
      "technique": "AP and lateral soft tissue neck radiographs obtained with the patient in upright position.",
      "findings": "SUBGLOTTIC AIRWAY: Classic 'steeple sign' present on AP view — symmetric subglottic narrowing creating an inverted-V configuration of the tracheal air column. The narrowing extends approximately 1.5 cm below the vocal cords.\n\nEPIGLOTTIS: Normal in size and morphology on lateral view. No 'thumb sign.' Aryepiglottic folds are not thickened.\n\nTRACHEA: The tracheal mucosa appears smooth without irregularity or pseudomembranes. No intraluminal debris.\n\nPREVERTEBRAL SOFT TISSUES: Normal prevertebral soft tissue width. No retropharyngeal widening.\n\nCHEST: Limited view of the lung apices shows no focal consolidation.",
      "impression": "1. Classic 'steeple sign' — consistent with viral croup (laryngotracheobronchitis) with significant subglottic narrowing\n2. No evidence of epiglottitis (normal epiglottis)\n3. No findings suggestive of bacterial tracheitis (smooth tracheal mucosa)\n4. No retropharyngeal abnormality",
      "dictated": "02/25/2025 02:50",
      "verified": "02/25/2025 02:58"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/15/2024",
      "site": "Right deltoid IM",
      "lot": "FL892T",
      "mfr": "GSK"
    },
    {
      "vaccine": "DTaP (Daptacel) — 4th dose",
      "date": "03/30/2023",
      "site": "Right thigh IM",
      "lot": "DA418K",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "Hepatitis A (Havrix) — 1st dose",
      "date": "06/14/2023",
      "site": "Left thigh IM",
      "lot": "HA302R",
      "mfr": "GSK"
    },
    {
      "vaccine": "Hepatitis A (Havrix) — 2nd dose",
      "date": "12/14/2023",
      "site": "Left thigh IM",
      "lot": "HA318P",
      "mfr": "GSK"
    },
    {
      "vaccine": "MMR (M-M-R II)",
      "date": "03/30/2023",
      "site": "Left thigh SC",
      "lot": "MM592L",
      "mfr": "Merck"
    },
    {
      "vaccine": "Varicella (Varivax)",
      "date": "03/30/2023",
      "site": "Right thigh SC",
      "lot": "VV281M",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother (age 32): Seasonal allergies, mild asthma in childhood (outgrown)",
    "Father (age 34): No significant medical history",
    "Maternal grandfather (age 64): COPD, former smoker",
    "Paternal grandmother (age 60): Hypothyroidism",
    "Sibling (brother, age 5): Had croup x 2 episodes at ages 2 and 3; no current respiratory issues"
  ],
  "socialHistory": [
    [
      "Guardian",
      "Lives with both parents and older brother"
    ],
    [
      "Childcare/School",
      "Attends daycare center 4 days/week"
    ],
    [
      "Tobacco Exposure",
      "None — no smokers in household; grandfather smokes but does not smoke around children"
    ],
    [
      "Pets",
      "One cat (indoor)"
    ],
    [
      "Home Environment",
      "Single-family home, central air/heat, no mold"
    ],
    [
      "Diet",
      "Table foods; good variety; tolerates all foods including dairy (CMPI outgrown)"
    ],
    [
      "Development",
      "Speaking in 3-4 word sentences, toilet training in progress, running, jumping — age-appropriate"
    ],
    [
      "Safety",
      "Rear-facing car seat; fence around backyard pool; smoke detectors"
    ]
  ],
  "meta": {
    "caseId": "severe-croup",
    "diagnosis": "Severe Viral Croup (Westley Score 8)",
    "acuity": 2,
    "presentation": "Pediatric Emergency",
    "category": "respiratory"
  },
  "guided": {
    "supported": true,
    "patientPersonsa": "Olivia is moderately distressed and clingy to her parent, becoming more agitated when examined which worsens her stridor. She appears tired from increased work of breathing but is still interactive and alert.",
    "interviewQuestions": [
      "When did the cough and breathing difficulty first start?",
      "Can you describe the sound she makes when coughing?",
      "Has her voice changed or does she sound hoarse?",
      "Does the breathing difficulty get worse when she's upset or lying down?",
      "Has she had a fever, and if so, how high?",
      "Is she eating and drinking normally?",
      "Has she had any cold symptoms like runny nose or congestion?",
      "Has she ever had breathing problems or croup before?",
      "Has she been around other sick children recently?",
      "Is she drooling more than usual or having trouble swallowing?",
      "Has she been pulling at her neck or throat?",
      "What medications have you given her at home?",
      "Does she have any known allergies to medications?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean - can you ask that differently?",
      "onset": "The cough started yesterday morning, but the breathing trouble got much worse overnight. She woke us up around 2 AM making these scary breathing sounds.",
      "character": "It's like a seal barking when she coughs, and when she breathes in it makes this harsh, loud sound - especially when she gets upset or cries.",
      "location": "The sound seems to come from her throat and chest area, and you can hear it across the room.",
      "severity": "I'd say it's an 8 out of 10 - she's really struggling to breathe and the sounds are getting scarier. She can't sleep well and gets exhausted easily.",
      "aggravating": "The breathing gets much worse when she cries or gets agitated, and it seems worse when she's lying flat.",
      "relieving": "Steam from the shower seemed to help a little bit last night, and sitting her upright helps some, but nothing really makes it go away.",
      "associated": "She's had a fever up to 101.6, her voice is very hoarse and raspy, and she's been more tired than usual. She had some runny nose for a day or two before this started.",
      "denies": "She's not drooling more than usual, she can still swallow okay, and she's not pulling at her throat. No rash or difficulty with feeding completely.",
      "history": "She had croup once before when she was about 18 months old, but it wasn't this bad. She also had a milk protein intolerance as a baby but outgrew that.",
      "medications": "Children's Acetaminophen 160mg/5mL — 5mL Q4-6h PRN",
      "allergies": "NKDA",
      "family": "Her mom had mild asthma as a child but outgrew it, and has seasonal allergies. Her maternal grandfather has COPD from smoking, but he doesn't smoke around the kids.",
      "social": "She goes to daycare 4 days a week where several kids have been sick lately with colds. No one in our house smokes, and we have one indoor cat."
    },
    "examManeuvers": [
      "Assess for inspiratory stridor at rest",
      "Evaluate level of consciousness and alertness",
      "Observe work of breathing and use of accessory muscles",
      "Auscultate lung fields for air entry and adventitious sounds",
      "Examine throat without instrumentation",
      "Assess for suprasternal and subcostal retractions",
      "Evaluate hydration status and general appearance",
      "Check for cervical lymphadenopathy",
      "Assess oxygen saturation",
      "Observe patient's positioning preference"
    ],
    "examFindings": {
      "Assess for inspiratory stridor at rest": "Loud inspiratory stridor audible at rest, worsening with agitation",
      "Evaluate level of consciousness and alertness": "Alert and responsive but appears tired, becomes more distressed with examination",
      "Observe work of breathing and use of accessory muscles": "Moderate increase in work of breathing with visible use of accessory muscles",
      "Auscultate lung fields for air entry and adventitious sounds": "Decreased air entry bilaterally with transmitted upper airway sounds, no wheeze or crackles",
      "Examine throat without instrumentation": "Visible without instrumentation - no tonsillar exudate, no drooling",
      "Assess for suprasternal and subcostal retractions": "Moderate suprasternal, intercostal, and subcostal retractions present",
      "Evaluate hydration status and general appearance": "Appears well-hydrated but fatigued, sitting upright preferentially",
      "Check for cervical lymphadenopathy": "Mild bilateral anterior cervical lymphadenopathy",
      "Assess oxygen saturation": "SpO2 90% on room air, improving to 94% with supplemental oxygen",
      "Observe patient's positioning preference": "Prefers upright positioning, becomes more distressed when supine"
    },
    "ddxTargets": [
      "Severe Viral Croup (Laryngotracheobronchitis) — Westley Score 8, Requiring Nebulized Epinephrine and Observation",
      "Bacterial Tracheitis",
      "Viral Bronchiolitis",
      "Acute Epiglottitis",
      "Foreign Body Aspiration",
      "Spasmodic Croup",
      "Asthma Exacerbation"
    ],
    "biasFlags": {
      "anchoring": "May anchor on 'just another croup case' given history and classic barky cough, missing the severity indicated by stridor at rest and low oxygen saturation",
      "prematureClosure": "Risk of discharging with steroids alone without recognizing this meets criteria for nebulized epinephrine and observation",
      "availabilityBias": "Recent experience with milder croup cases may lead to underestimating severity of this presentation"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. I notice you're considering croup - what specific historical features would help you distinguish between mild and severe croup? Also, what life-threatening conditions present similarly in this age group that you absolutely cannot miss?",
      "phase5": "You've identified classic croup features, but let's discuss severity assessment. What elements of this presentation suggest this isn't a typical mild case? How would you quantify the severity, and what would that mean for your management approach?",
      "finalDebrief": "This case highlights the importance of severity assessment in croup. While the barky cough and stridor pointed toward croup early, the key was recognizing that stridor at rest, retractions, and hypoxemia indicated severe disease requiring epinephrine and observation rather than simple steroid treatment and discharge.",
      "final": "Diagnosis: severe viral croup (laryngotracheobronchitis) with Westley score of 8, requiring nebulized epinephrine and prolonged observation. Key learning: (1) Croup is a viral upper airway illness most common in children 6 months to 6 years old, with peak incidence at 1-2 years. Parainfluenza viruses account for ~75% of cases; others include RSV, influenza, adenovirus, and rhinovirus. The virus causes inflammation and edema of the subglottic airway (cricoid cartilage is the narrowest fixed ring in pediatric airway), producing inspiratory stridor, barking cough, and respiratory distress. (2) Clinical severity — Westley Croup Score: (a) Stridor (0 no, 1 when agitated, 2 at rest). (b) Retractions (0 none, 1 mild, 2 moderate, 3 severe). (c) Air entry (0 normal, 1 decreased, 2 markedly decreased). (d) Cyanosis (0 none, 4 with agitation, 5 at rest). (e) Level of consciousness (0 normal, 5 altered). Categories: mild <=2, moderate 3-5, severe >=6. Score 8 is severe and requires aggressive treatment with nebulized epinephrine and prolonged observation. (3) Differential is critical — must distinguish from epiglottitis, bacterial tracheitis, foreign body aspiration, retropharyngeal abscess, peritonsillar abscess, and angioedema. Features favoring viral croup: gradual onset over hours to days, preceding URI, barky 'seal-like' cough, low-grade fever, child generally interactive and not toxic, stridor improves with calm. Features suggesting epiglottitis: acute onset (hours), high fever, toxic appearance, drooling, dysphagia, tripod position, muffled voice (not barky cough), and absence of cough. Immediately life-threatening — do not agitate the child, keep with parent, involve anesthesia and ENT emergently. Bacterial tracheitis: toxic appearance, high fever, rapid deterioration, failure to respond to croup treatment — requires IV antibiotics and often intubation. Foreign body: sudden onset in previously well child, focal findings, unilateral wheeze. (4) Treatment of severe croup. (a) DEXAMETHASONE 0.6 mg/kg PO/IM/IV (max 10-16 mg) — single dose, works within 2-6 hours, reduces severity, hospitalization, and return visits. The single most important intervention for croup. Budesonide nebulized is an alternative when PO not tolerated. (b) NEBULIZED EPINEPHRINE — racemic epinephrine 0.5 mL of 2.25% solution, or L-epinephrine 5 mL of 1:1,000, for moderate-severe croup. Works within 10-30 minutes; effect lasts 2-3 hours with rebound possible. All patients receiving nebulized epinephrine require OBSERVATION for at least 2-4 hours (some guidelines 3-4 hours) to detect rebound stridor. (c) Supplemental oxygen to target SpO2 >=92%. (d) Keep child calm — agitation worsens stridor; allow parent to hold child, minimize painful interventions. (e) Heliox (helium-oxygen mixture) in severe cases may reduce work of breathing but evidence is mixed. (f) IV fluids if inadequate oral intake. (5) Indications for admission, PICU, or intubation. Admission: persistent stridor at rest despite epinephrine and steroids, need for repeat epinephrine, poor oral intake, dehydration, return visit for same illness, or concerning social situation. PICU: severe persistent respiratory distress, hypoxemia despite treatment, altered mental status, or need for close airway monitoring. Intubation: rare for viral croup, but necessary for impending respiratory failure — preparation with smaller ETT size than predicted (due to subglottic narrowing) and anesthesia involvement. Classic pitfalls: (a) missing epiglottitis and agitating a child with severe respiratory distress — if in doubt, DO NOT visualize the pharynx with a tongue depressor in a distressed child; keep calm and get ENT/anesthesia. (b) Discharging after epinephrine without observation — rebound stridor occurs in 2-3 hours. (c) Using antibiotics for viral croup — not indicated unless bacterial tracheitis. (d) Forgetting steroids — single dose dexamethasone is standard of care for ALL croup, even mild. (e) Missing foreign body in a child with persistent 'croup-like' symptoms — especially unilateral wheeze or no response to croup treatment."
    }
  }
};
