// Virtual EMR Case: Gastroenteritis
// Variant: gastroenteritis | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Sophia Petit-Frère",
    "patientHPI": "My mom brought me in for my regular checkup - I've been doing really well lately, walking around everywhere and saying mama, dada, and a few other words that make everyone so excited, and I love eating the same food as everyone else at the table.",
    "dob": "09/03/2023",
    "age": 1,
    "sex": "Female",
    "mrn": "RDX-2025-52741",
    "pronouns": "She/Her",
    "insurance": "Medicaid (Florida KidCare)",
    "pcp": "Dr. Rachel Kim, MD (Pediatrics)",
    "pharmacy": "Walgreens — 3001 Broward Blvd, Fort Lauderdale, FL",
    "language": "English, Haitian Creole",
    "race": "Black/Haitian",
    "address": "5639 Magnolia Blvd, Memphis, TN 38107",
    "phone": "(954) 555-6738",
    "email": "m.petitfrere@email.com",
    "emergencyContact": {
      "name": "Marie Petit-Frère (Mother)",
      "phone": "(954) 555-6740"
    }
  },
  "problems": [
    {
      "problem": "Acute Gastroenteritis with Dehydration",
      "icd": "A09",
      "onset": "2025",
      "status": "Active",
      "notes": "Current presentation — 3 days of vomiting and diarrhea"
    },
    {
      "problem": "History of Prematurity (35 weeks)",
      "icd": "P07.38",
      "onset": "2023",
      "status": "Resolved",
      "notes": "Born at 35 weeks; 3-day NICU stay for feeding; no complications since discharge"
    },
    {
      "problem": "Eczema",
      "icd": "L30.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Mild; managed with moisturizers and occasional hydrocortisone 1%"
    }
  ],
  "medications": [
    {
      "name": "Hydrocortisone 1% cream — apply BID PRN",
      "sig": "Apply thin layer to affected areas twice daily as needed for eczema flares",
      "prescriber": "Dr. Kim",
      "start": "06/2024",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Infant Acetaminophen 160mg/5mL — 3.75mL Q4-6h PRN",
      "sig": "Give 3.75 mL by mouth every 4-6 hours as needed for fever or pain",
      "prescriber": "Dr. Kim",
      "start": "09/2024",
      "refills": 0,
      "status": "PRN"
    },
    {
      "name": "Vitamin D 400 IU drops daily",
      "sig": "Give 1 mL by mouth daily",
      "prescriber": "Dr. Kim",
      "start": "10/2023",
      "refills": 3,
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
      "date": "02/20/2025",
      "bp": "78/48",
      "hr": 178,
      "rr": 38,
      "temp": "100.9°F",
      "spo2": "98%",
      "wt": "19.6 lbs",
      "ht": "29\"",
      "bmi": 16.5,
      "setting": "ED"
    },
    {
      "date": "12/10/2024",
      "bp": "82/52",
      "hr": 128,
      "rr": 28,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "21.2 lbs",
      "ht": "29\"",
      "bmi": 17.8,
      "setting": "PCP Office"
    },
    {
      "date": "09/03/2024",
      "bp": "80/50",
      "hr": 124,
      "rr": 30,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "19.8 lbs",
      "ht": "28\"",
      "bmi": 17.9,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/10/2024",
      "type": "Primary Care",
      "provider": "Dr. Rachel Kim, MD",
      "cc": "Well-child visit — 15-month checkup",
      "hpi": "15-month-old female presenting for well-child visit. Mother reports she is walking independently, saying 3-4 words, and eating table foods well. No current illness. Stooling normally. Good appetite. Sleeping through the night.",
      "exam": "General: Well-appearing, active toddler. HEENT: Anterior fontanelle closed, TMs clear, oropharynx clear with 8 teeth. CV: RRR. Lungs: CTA. Abdomen: Soft, NT, no hepatosplenomegaly. Skin: Mild dry patches on bilateral antecubital fossae. Neuro: Walking independently, transfers objects, age-appropriate.",
      "assessment": "1. Well-child 15-month visit\n2. Eczema — mild, well-controlled\n3. Growth and development — appropriate",
      "plan": "1. Immunizations per schedule (DTaP, Hep A)\n2. Continue Vitamin D supplementation\n3. Continue moisturizers for eczema\n4. Anticipatory guidance: safety, nutrition, language development\n5. RTC 3 months for 18-month visit"
    },
    {
      "id": "V002",
      "date": "02/18/2025",
      "type": "Primary Care",
      "provider": "Dr. Rachel Kim, MD",
      "cc": "Vomiting and diarrhea x 1 day",
      "hpi": "17-month-old female brought in by mother for 1 day of non-bloody, non-bilious vomiting (6 episodes) and watery diarrhea (4 episodes). Low-grade fever of 100.2°F at home. Taking small sips of Pedialyte but vomited twice after. One wet diaper in the past 8 hours. No sick contacts known but attends daycare. No recent travel.",
      "exam": "General: Fussy, mild lethargy, no tears when crying. HEENT: Anterior fontanelle flat, mucous membranes tacky, lips slightly dry. CV: Tachycardic, regular. Lungs: CTA. Abdomen: Soft, mildly distended, hyperactive bowel sounds, no tenderness. Skin: Slightly decreased turgor. Cap refill 2-3 sec.",
      "assessment": "1. Acute gastroenteritis — likely viral (rotavirus vs norovirus)\n2. Mild-moderate dehydration — decreased urine output, tacky mucous membranes, no tears",
      "plan": "1. Trial oral rehydration with Pedialyte — 5 mL q5min\n2. If unable to tolerate PO → consider ED for IV fluids\n3. Strict output monitoring — wet diapers, stool frequency\n4. Return precautions: persistent vomiting, bloody stools, lethargy, no wet diaper x 8 hrs, sunken fontanelle\n5. Mother given detailed dehydration warning handout"
    }
  ],
  "labs": [
    {
      "date": "02/20/2025",
      "time": "14:22",
      "orderedBy": "Dr. Amanda Liu, MD (ED)",
      "collected": "02/20/2025 14:10",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-094182",
      "status": "Final",
      "specimenType": "Whole Blood (EDTA), Serum",
      "fasting": "No",
      "groups": [
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "68",
              "unit": "mg/dL",
              "range": "60-110",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "28",
              "unit": "mg/dL",
              "range": "5-18",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "0.4",
              "unit": "mg/dL",
              "range": "0.1-0.4",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "134",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "3.2",
              "unit": "mEq/L",
              "range": "3.5-5.5",
              "flag": "L"
            },
            {
              "test": "Chloride",
              "value": "98",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "16",
              "unit": "mEq/L",
              "range": "20-28",
              "flag": "L"
            }
          ]
        },
        {
          "name": "COMPLETE BLOOD COUNT (CBC)",
          "results": [
            {
              "test": "WBC",
              "value": "12.8",
              "unit": "x10³/µL",
              "range": "6.0-14.5",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.2",
              "unit": "g/dL",
              "range": "10.5-13.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "40.1",
              "unit": "%",
              "range": "33-39",
              "flag": "H"
            },
            {
              "test": "Platelets",
              "value": "284",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "URINALYSIS",
          "results": [
            {
              "test": "Specific Gravity",
              "value": "1.032",
              "unit": "",
              "range": "1.005-1.030",
              "flag": "H"
            },
            {
              "test": "Ketones",
              "value": "Moderate",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            },
            {
              "test": "Glucose",
              "value": "Negative",
              "unit": "",
              "range": "Negative",
              "flag": ""
            },
            {
              "test": "WBC",
              "value": "0-2",
              "unit": "/HPF",
              "range": "0-5",
              "flag": ""
            },
            {
              "test": "Bacteria",
              "value": "None",
              "unit": "",
              "range": "None",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/20/2025",
      "study": "ABDOMINAL X-RAY — SUPINE",
      "accession": "IMG-2025-09271",
      "status": "FINAL",
      "orderedBy": "Dr. Amanda Liu, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "17-month-old with vomiting, diarrhea, abdominal distension — rule out obstruction",
      "technique": "Single supine AP radiograph of the abdomen obtained.",
      "findings": "BOWEL GAS PATTERN: Mildly dilated loops of small and large bowel with diffusely increased gas throughout. No focal dilated loop or transition point. No air-fluid levels on this supine view.\n\nNO FREE AIR: No pneumoperitoneum.\n\nSOFT TISSUES: Unremarkable.\n\nBONY STRUCTURES: Normal for age.",
      "impression": "1. Non-specific gaseous distension of bowel — consistent with gastroenteritis/ileus\n2. No evidence of bowel obstruction or perforation",
      "dictated": "02/20/2025 14:50",
      "verified": "02/20/2025 15:05"
    }
  ],
  "immunizations": [
    {
      "vaccine": "DTaP (Daptacel)",
      "date": "12/10/2024",
      "site": "Right thigh IM",
      "lot": "DA411R",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "Hepatitis A (Havrix)",
      "date": "12/10/2024",
      "site": "Left thigh IM",
      "lot": "HA329T",
      "mfr": "GSK"
    },
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/08/2024",
      "site": "Left thigh IM",
      "lot": "FL812K",
      "mfr": "GSK"
    },
    {
      "vaccine": "PCV15 (Vaxneuvance)",
      "date": "09/03/2024",
      "site": "Right thigh IM",
      "lot": "PV241M",
      "mfr": "Merck"
    },
    {
      "vaccine": "Hepatitis B (Engerix-B)",
      "date": "09/03/2023",
      "site": "Right thigh IM",
      "lot": "HB518R",
      "mfr": "GSK"
    },
    {
      "vaccine": "Rotavirus (RotaTeq)",
      "date": "03/03/2024",
      "site": "Oral",
      "lot": "RV722P",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother (age 26): Sickle cell trait — asymptomatic carrier",
    "Father (age 29): Hypertension, pre-diabetes",
    "Maternal grandmother (age 54): Type 2 Diabetes, hypertension, obesity",
    "Paternal grandfather (age 61): Deceased — stroke at age 58",
    "No known family history of IBD, celiac disease, or GI malignancy"
  ],
  "socialHistory": [
    [
      "Guardian",
      "Lives with mother and maternal grandmother; father involved but lives separately"
    ],
    [
      "Childcare/School",
      "Attends home daycare with 6 other children"
    ],
    [
      "Tobacco Exposure",
      "None — no smokers in household"
    ],
    [
      "Pets",
      "None"
    ],
    [
      "Home Environment",
      "Apartment, city water supply, no well water"
    ],
    [
      "Diet",
      "Whole milk, table foods; picky with vegetables; still uses bottle at bedtime (mother counseled to wean)"
    ],
    [
      "Development",
      "Walking independently since 13 months, says 'mama,' 'dada,' 3 other words; points to wants"
    ],
    [
      "Safety",
      "Rear-facing car seat; cabinet locks; no pool access"
    ]
  ],
  "meta": {
    "caseId": "gastroenteritis",
    "diagnosis": "Acute Viral Gastroenteritis with Moderate Dehydration and Non-Anion Gap Metabolic Acidosis",
    "acuity": 3,
    "presentation": "Pediatric Emergency",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Mother appears anxious and tired, speaking for her 1-year-old daughter who is listless and clinging to mom. Mother is very forthcoming with details but clearly worried about her baby's condition. The child appears uncomfortable, fussy, and less interactive than usual.",
    "interviewQuestions": [
      "When did Sophia first start having diarrhea and vomiting?",
      "How many episodes of diarrhea and vomiting has she had in the last 24 hours?",
      "What does the diarrhea look like - color, consistency, any blood or mucus?",
      "Has she been able to keep any fluids or food down?",
      "When was her last wet diaper and how does it compare to normal?",
      "Has she had a fever and when did you first notice it?",
      "How is her energy level compared to normal?",
      "Has anyone else at daycare or at home been sick recently?",
      "What have you been giving her to drink or eat since this started?",
      "Has she had any breathing problems or unusual sleepiness?",
      "Any recent changes in her normal routine or new foods?",
      "When did she last have a normal bowel movement?",
      "Is she still taking her regular medications and vitamins?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean - can you ask that differently? I'm just worried about my baby.",
      "onset": "It started yesterday morning around 6 AM with vomiting, then the diarrhea started a few hours later. She seemed fine the night before.",
      "character": "The vomiting is just her formula and food coming back up, and the diarrhea is very watery, yellowish-green, and much more frequent than normal.",
      "location": "She's having stomach cramping - she keeps pulling her knees up to her chest and crying, especially before she has diarrhea.",
      "severity": "I'd say this is really bad for her - maybe an 8 out of 10. She's not herself at all and won't play or even smile much.",
      "aggravating": "Trying to give her anything to drink seems to make the vomiting worse, and she gets more crampy when I try to feed her.",
      "relieving": "The only thing that helps a little is holding her, but even then she's still fussy. I tried giving her small sips of water but she threw that up too.",
      "associated": "She's been really tired and sleepy, her fever started this morning, and she feels warm. She's been very clingy and crying more than usual.",
      "denies": "No blood in the stool or vomit, no trouble breathing, no rash, and she hasn't hit her head or fallen recently.",
      "history": "She had something similar when she was about 8 months old but not this bad. That time it only lasted a day and she didn't get dehydrated.",
      "medications": "Hydrocortisone 1% cream — apply BID PRN; Infant Acetaminophen 160mg/5mL — 3.75mL Q4-6h PRN; Vitamin D 400 IU drops daily",
      "allergies": "NKDA",
      "family": "Her dad has high blood pressure and pre-diabetes, I have sickle cell trait but no problems, and my mom has diabetes. No one in the family has had stomach problems like this.",
      "social": "She goes to a small home daycare with 6 other kids. No one smokes around her, and we live in an apartment with my mother. Her dad visits regularly but lives separately."
    },
    "examManeuvers": [
      "General appearance and level of alertness",
      "Assessment of mucous membranes and capillary refill",
      "Skin turgor and skin tent test",
      "Anterior fontanelle assessment",
      "Abdominal examination for tenderness and bowel sounds",
      "Assessment for signs of peritoneal irritation",
      "Heart rate and rhythm assessment",
      "Respiratory effort and pattern",
      "Extremity perfusion and warmth",
      "Weight comparison to previous visits if available"
    ],
    "examFindings": {
      "General appearance and level of alertness": "Listless, less interactive than expected for age, appears ill but arousable and recognizes mother",
      "Assessment of mucous membranes and capillary refill": "Mucous membranes are tacky and slightly dry, capillary refill is 3 seconds",
      "Skin turgor and skin tent test": "Mild skin tenting present, skin turgor slightly decreased indicating moderate dehydration",
      "Anterior fontanelle assessment": "Soft and slightly depressed, consistent with mild to moderate dehydration",
      "Abdominal examination for tenderness and bowel sounds": "Abdomen soft, mild diffuse tenderness, hyperactive bowel sounds present, no masses or organomegaly",
      "Assessment for signs of peritoneal irritation": "No rebound tenderness, no guarding, no rigidity - no signs of peritoneal irritation",
      "Heart rate and rhythm assessment": "Tachycardic at 178 bpm, regular rhythm, no murmurs audible",
      "Respiratory effort and pattern": "Mild tachypnea with slightly increased work of breathing, suggesting compensation for metabolic acidosis",
      "Extremity perfusion and warmth": "Hands and feet are cool to touch, pulses present but weaker than normal",
      "Weight comparison to previous visits if available": "Weight is down approximately 8% from last well-child visit 2 months ago"
    },
    "ddxTargets": [
      "Acute Viral Gastroenteritis with Moderate Dehydration and Non-Anion Gap Metabolic Acidosis (correct diagnosis)",
      "Bacterial gastroenteritis (Salmonella, Shigella, Campylobacter)",
      "Rotavirus gastroenteritis with dehydration",
      "Intussusception",
      "Appendicitis (atypical presentation in toddler)",
      "Food poisoning or dietary indiscretion",
      "Urinary tract infection with associated GI symptoms"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'routine checkup' mentioned in HPI and missing acute illness, or anchoring on fever alone without recognizing dehydration severity",
      "prematureClosure": "Risk of stopping at 'simple viral gastroenteritis' without fully assessing hydration status and acid-base balance, especially given tachycardia and respiratory findings",
      "availabilityBias": "May focus on common viral illness and miss more serious causes like intussusception or bacterial causes that require different management in this age group"
    },
    "coachPrompts": {
      "phase2": "Good start on your differential. Before you interview the patient, think about what key historical features would help you distinguish between viral and bacterial causes, and what questions would help you assess the severity of dehydration. Also consider what 'must-not-miss' diagnoses you need to rule out in a 1-year-old with vomiting and apparent abdominal pain.",
      "phase5": "Nice work gathering the history and exam findings. You've identified signs of dehydration, but let's think deeper about the physiology here. What do the vital signs tell you about her compensatory mechanisms? The tachycardia and tachypnea pattern, combined with her hydration status - what might her acid-base status be, and why?",
      "finalDebrief": "This case illustrates how gastroenteritis in young children can quickly lead to dehydration and metabolic consequences. The key was recognizing that her tachycardia and mild tachypnea weren't just from fever, but represented compensation for non-anion gap metabolic acidosis from bicarbonate losses. Her history of prematurity may have made her more susceptible to rapid dehydration. How did your differential evolve as you gathered more data about her hydration status?"
    }
  }
};
