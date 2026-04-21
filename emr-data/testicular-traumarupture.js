// Virtual EMR Case: Testicular Trauma with Rupture
// Variant: testicular-traumarupture | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Dylan Oconnor",
    "patientHPI": "I was playing lacrosse during practice yesterday when I took a really hard hit from another player's stick right between my legs, and now I'm having severe pain and swelling down there. The pain is getting worse instead of better, and I'm worried something might be seriously wrong because it doesn't feel like a normal sports injury.",
    "dob": "10/28/2001",
    "age": 23,
    "sex": "Male",
    "mrn": "RDX-2025-75491",
    "pronouns": "He/Him",
    "insurance": "Aetna (Parent Plan)",
    "pcp": "Dr. Steven Walsh, MD",
    "pharmacy": "CVS Pharmacy — 3100 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White",
    "address": "2596 S Halsted St, Baltimore, MD 21218",
    "phone": "(954) 555-4156",
    "email": "d.oconnor01@email.com",
    "emergencyContact": {
      "name": "Brian Oconnor (Father)",
      "phone": "(954) 555-4170"
    }
  },
  "problems": [
    {
      "problem": "Exercise-Induced Asthma",
      "icd": "J45.990",
      "onset": "2012",
      "status": "Active",
      "notes": "Uses albuterol pre-exercise; well controlled"
    },
    {
      "problem": "ACL Reconstruction, Left Knee",
      "icd": "Z87.39",
      "onset": "2020",
      "status": "Resolved",
      "notes": "Full recovery; returned to sport"
    }
  ],
  "medications": [
    {
      "name": "Albuterol MDI 90mcg 2 puffs PRN",
      "sig": "Inhale 2 puffs 15-30 minutes before exercise or as needed for wheezing",
      "prescriber": "Dr. Walsh",
      "start": "01/2016",
      "refills": 3,
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
      "date": "08/15/2024",
      "bp": "118/72",
      "hr": 62,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "180 lbs",
      "ht": "6'0\"",
      "bmi": 24.4,
      "setting": "PCP Office"
    },
    {
      "date": "02/10/2024",
      "bp": "116/70",
      "hr": 60,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "178 lbs",
      "ht": "6'0\"",
      "bmi": 24.1,
      "setting": "PCP Office"
    },
    {
      "date": "08/20/2023",
      "bp": "114/68",
      "hr": 58,
      "rr": 12,
      "temp": "98.2°F",
      "spo2": "99%",
      "wt": "176 lbs",
      "ht": "6'0\"",
      "bmi": 23.9,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "08/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Steven Walsh, MD",
      "cc": "Pre-season sports physical",
      "hpi": "23-year-old male college athlete (lacrosse) presenting for pre-season sports physical. No current complaints. Exercise-induced asthma well controlled with pre-exercise albuterol. Left knee — ACL reconstruction 2020 with full recovery; no instability or swelling. Reports regular training: weight room 5x/week and team practices daily. No chest pain, syncope, or family history of sudden cardiac death. No concussion history.",
      "exam": "General: Well-appearing, athletic male in NAD. HEENT: PERRL, EOMI. CV: RRR, no murmurs, normal S1/S2. Lungs: CTAB. Abdomen: Soft, NT/ND. MSK: Full ROM bilateral knees; left knee — healed surgical scars, stable to varus/valgus and Lachman, no effusion. Neuro: A&O x3, cranial nerves intact.",
      "assessment": "1. Pre-participation sports physical — cleared for full activity\n2. Exercise-induced asthma — well controlled\n3. S/P left ACL reconstruction — fully healed",
      "plan": "1. Cleared for lacrosse\n2. Continue pre-exercise albuterol\n3. RTC 1 year or PRN"
    },
    {
      "id": "V002",
      "date": "02/10/2024",
      "type": "Primary Care",
      "provider": "Dr. Steven Walsh, MD",
      "cc": "Annual wellness",
      "hpi": "23-year-old male for annual checkup. No complaints. Active and healthy. Denies tobacco, minimal alcohol use on weekends.",
      "exam": "General: NAD. Vitals: WNL. CV: RRR. Lungs: CTAB. GU: Deferred. Neuro: Intact.",
      "assessment": "1. Annual wellness — healthy young male",
      "plan": "1. Age-appropriate screening current\n2. RTC 1 year"
    }
  ],
  "labs": [
    {
      "date": "08/15/2024",
      "time": "10:00",
      "orderedBy": "Dr. Steven Walsh, MD",
      "collected": "08/15/2024 09:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-081540",
      "status": "Final",
      "specimenType": "Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "6.0",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "16.0",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "47.2",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "238",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "06/2020",
      "study": "MRI LEFT KNEE WITHOUT CONTRAST",
      "accession": "IMG-2020-06152",
      "status": "FINAL",
      "orderedBy": "Dr. Michael Torres, MD (Orthopedics)",
      "readBy": "Dr. Samuel Ortiz, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "19M left knee injury during lacrosse game. Suspected ACL tear.",
      "technique": "Multiplanar MRI left knee without contrast.",
      "findings": "ACL: Complete tear with retraction of the tibial stump.\\n\\nMenisci: Small peripheral tear medial meniscus posterior horn.\\n\\nMCL/LCL: Intact.\\n\\nBone: Bone bruising lateral femoral condyle and posterolateral tibial plateau (pivot shift pattern).\\n\\nCartilage: Intact articular cartilage surfaces.\\n\\nEffusion: Moderate joint effusion.",
      "impression": "1. Complete ACL rupture.\\n2. Small peripheral tear medial meniscus posterior horn.\\n3. Bone contusions consistent with pivot shift mechanism.\\n4. Moderate joint effusion.",
      "dictated": "06/15/2020 18:00",
      "verified": "06/16/2020 08:30"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "09/28/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-260",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "09/28/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-838",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "HPV (Gardasil 9) — series complete",
      "date": "2015",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    },
    {
      "vaccine": "Meningococcal ACWY (Menactra)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2017",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Hypertension, alive at 52",
    "Mother: Healthy, alive at 50",
    "Brother: Healthy, age 20",
    "No family history of sudden cardiac death or cardiomyopathy"
  ],
  "socialHistory": [
    [
      "Occupation",
      "College student (Senior) / NCAA lacrosse player"
    ],
    [
      "Marital",
      "Single"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social — weekends, 3-4 drinks"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "NCAA Division II lacrosse; weight training 5x/week"
    ],
    [
      "Housing",
      "Off-campus apartment with teammates"
    ],
    [
      "Safety",
      "Wears protective equipment (lacrosse); seatbelt; no helmet for cycling"
    ],
    [
      "Advance Directive",
      "None — not discussed"
    ]
  ],
  "meta": {
    "caseId": "testicular-traumarupture",
    "diagnosis": "Testicular Trauma with Rupture",
    "acuity": 2,
    "presentation": "Urologic Emergency",
    "category": "urologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Dylan appears anxious and in significant distress, frequently shifting position trying to find comfort. He is cooperative and forthcoming with information, clearly concerned about potential impact on his athletic career and fertility, speaking in a strained voice due to pain.",
    "interviewQuestions": [
      "Can you describe exactly what happened during the lacrosse practice?",
      "How would you rate your pain on a scale of 1 to 10?",
      "Can you describe the quality of the pain you're experiencing?",
      "Where exactly is the pain located and does it spread anywhere?",
      "What does the swelling look like - can you describe any color changes?",
      "Have you noticed any nausea or vomiting since the injury?",
      "Are you able to walk normally or does movement make it worse?",
      "Have you tried any pain medications or ice since yesterday?",
      "Have you noticed any changes in urination or blood in your urine?",
      "Have you ever had any previous injuries to this area?",
      "Are you currently taking any medications or have any allergies?",
      "Is there any family history of testicular problems or cancer?",
      "Do you use any performance enhancing substances or steroids?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that - could you ask it differently? The pain is really distracting me right now.",
      "onset": "It happened yesterday afternoon during lacrosse practice, around 3 PM. Another player's stick hit me directly in the groin during a collision. The pain was immediate and intense.",
      "character": "It's a deep, crushing, throbbing pain that feels like someone is squeezing my testicle in a vise. It's constant and really intense.",
      "location": "The pain is mainly in my left testicle, but it also radiates up into my lower abdomen and sometimes I feel it in my back.",
      "severity": "Right now it's easily a 9 out of 10. I can barely concentrate on anything else. It's worse than when I tore my ACL.",
      "aggravating": "Any movement makes it worse, especially walking or standing up. Even light touch or my underwear rubbing against it is excruciating.",
      "relieving": "Nothing really helps. I tried ice yesterday but couldn't tolerate it touching the area. Ibuprofen barely took the edge off.",
      "associated": "I've been nauseous since it happened and threw up twice last night. I'm also feeling lightheaded when I stand up.",
      "denies": "No fever, no burning with urination, no discharge. I haven't seen any blood in my urine, but I've been avoiding drinking much because urinating is painful.",
      "history": "Never had anything like this before. I've taken hits down there playing sports but nothing ever this bad or that lasted this long.",
      "medications": "Albuterol MDI 90mcg 2 puffs PRN",
      "allergies": "NKDA",
      "family": "No family history of testicular problems or cancer that I know of. My dad has high blood pressure but that's it.",
      "social": "I'm a senior in college and play NCAA Division I lacrosse. I don't smoke, drink socially on weekends maybe 3-4 drinks, and don't use any drugs or steroids."
    },
    "examManeuvers": [
      "Inspection of external genitalia",
      "Gentle palpation of affected testicle",
      "Assessment of cremasteric reflex",
      "Palpation of spermatic cord",
      "Assessment of testicular lie and position",
      "Examination of contralateral testicle",
      "Abdominal examination",
      "Assessment for inguinal lymphadenopathy",
      "Evaluation for scrotal hematoma",
      "Assessment of scrotal skin changes"
    ],
    "examFindings": {
      "Inspection of external genitalia": "Left hemiscrotum markedly swollen and ecchymotic with dark purple discoloration. Obvious asymmetry compared to right side.",
      "Gentle palpation of affected testicle": "Left testicle enlarged, firm, and exquisitely tender. Irregular contour suggests loss of normal smooth ovoid shape. Patient unable to tolerate thorough palpation due to severe pain.",
      "Assessment of cremasteric reflex": "Absent cremasteric reflex on the left side. Right cremasteric reflex intact.",
      "Palpation of spermatic cord": "Left spermatic cord thickened and tender. Difficult to assess due to swelling and patient's pain.",
      "Assessment of testicular lie and position": "Left testicle appears to lie in normal horizontal position, though assessment limited by swelling and pain.",
      "Examination of contralateral testicle": "Right testicle normal in size, consistency, and position. No tenderness or masses palpated.",
      "Abdominal examination": "Lower abdominal tenderness present, particularly in left lower quadrant. No rebound or guarding. Bowel sounds normal.",
      "Assessment for inguinal lymphadenopathy": "No palpable inguinal lymphadenopathy bilaterally.",
      "Evaluation for scrotal hematoma": "Large scrotal hematoma present with tense swelling of left hemiscrotum. Skin appears stretched and shiny.",
      "Assessment of scrotal skin changes": "Scrotal skin on left shows significant ecchymosis extending from base to dependent portion. No signs of infection or skin breakdown."
    },
    "ddxTargets": [
      "Testicular Trauma with Rupture (correct diagnosis)",
      "Testicular Hematoma without Rupture",
      "Epididymal Injury",
      "Testicular Torsion (must-not-miss)",
      "Torsion of Testicular Appendix (must-not-miss)",
      "Epididymitis (common mimic)",
      "Incarcerated Inguinal Hernia (common mimic)"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on 'sports injury' and assuming simple contusion, missing the severity of potential testicular rupture requiring emergent surgical intervention",
      "prematureClosure": "May stop at diagnosis of testicular contusion without considering rupture, especially if pain seems proportional to mechanism - testicular rupture can present similarly to less severe trauma",
      "availabilityBias": "Common experience with minor sports injuries may lead to underestimating severity - testicular rupture is urologic emergency but may be overlooked if recent cases involved minor trauma"
    },
    "coachPrompts": {
      "phase2": "Before you interview Dylan, let's think through testicular trauma systematically. What are the key historical features that would help you differentiate between simple contusion, hematoma, and testicular rupture? Also, what other acute scrotal conditions could present similarly, even with a clear trauma history?",
      "phase5": "Now that you've completed your history and physical, let's analyze your findings. Dylan has severe pain, marked swelling, and ecchymosis after blunt trauma. What specific physical exam findings are most concerning for testicular rupture versus simple hematoma? How does the severity and character of his symptoms guide your differential diagnosis?",
      "finalDebrief": "Testicular rupture is a urologic emergency requiring immediate surgical exploration and repair. The key differentiating features were the severe, persistent pain disproportionate to simple contusion, irregular testicular contour suggesting capsular disruption, and large hematoma formation. How did your differential diagnosis evolve from initial trauma assessment to recognizing this surgical emergency? What would have been the consequences of misdiagnosing this as simple contusion?",
      "final": "Diagnosis: blunt testicular trauma with testicular rupture — a urologic surgical emergency. Key learning: (1) Testicular rupture is a disruption of the tunica albuginea (the tough fibrous capsule of the testis), most commonly from blunt scrotal trauma (sports, assault, MVC — straddle injury, kick). Penetrating injuries are less common but also serious. Testicular rupture occurs in 10-15% of blunt scrotal injuries and in up to 50% of penetrating testicular injuries — high clinical suspicion in any significant scrotal trauma. (2) Presentation: severe scrotal pain, swelling, ecchymosis, and sometimes systemic symptoms (nausea, vomiting from autonomic stimulation). Physical exam: tender enlarged scrotum, hematoma, tense tenderness, possible palpable disruption of testicular contour (hard to assess with swelling). Reflex nausea and vomiting are common with any testicular injury. The differential for acute scrotum: testicular torsion (surgical emergency — 6-8 hour salvage window), epididymitis/orchitis, torsion of the appendix testis (self-limited), incarcerated hernia, Fournier gangrene, and traumatic injuries (rupture, hematocele, intratesticular hematoma, fracture). (3) Diagnosis. Scrotal ULTRASOUND with DOPPLER is the primary imaging modality: (a) Tunical disruption (direct visualization of the defect). (b) Heterogeneous testicular echogenicity (hematoma within parenchyma). (c) Hematocele (blood within the tunica vaginalis). (d) Absent or decreased Doppler blood flow in disrupted areas. Ultrasound sensitivity for rupture is 80-90%; surgical exploration may be needed when imaging is equivocal but clinical suspicion is high. (4) Management. TESTICULAR RUPTURE REQUIRES EMERGENT SURGICAL EXPLORATION — ideally within 72 hours, as delay reduces salvage rate. Goals: evacuate hematoma and necrotic tissue, debride nonviable parenchyma, close the tunica albuginea to restore pressure (primary closure if possible, tunica vaginalis flap for coverage of defects), and preserve testicular function. Salvage rates are 80-90% with early repair (vs 45-55% with delayed/conservative management). Large hematoceles (without rupture) may also warrant exploration for evacuation — reduces pressure, pain, and atrophy risk. Orchiectomy if non-salvageable. (5) Other urologic trauma considerations. Testicular torsion can be triggered by minor trauma — always assess testicular lie (high-riding, transverse), cremasteric reflex (absent in torsion), and Prehn sign (pain relief with elevation — negative in torsion). Doppler to confirm flow. Torsion has a 6-hour window for salvage. Penile trauma: penile fracture (hearing a 'pop' during intercourse, rapid detumescence, swelling, 'eggplant deformity') — emergent surgical repair. Renal trauma grading (AAST) guides management — most Grade I-II managed conservatively, higher grades often operative. Bladder injury: intraperitoneal (always surgical repair) vs extraperitoneal (catheter drainage for most). Urethral injury: avoid Foley insertion if suspected (bloody meatus, perineal hematoma, high-riding prostate); retrograde urethrogram to evaluate. Classic pitfalls: (a) delaying imaging and urology consultation for traumatic scrotum — time matters for salvage. (b) Dismissing minor-appearing injuries — significant intratesticular damage can occur with minimal external findings. (c) Forgetting to consider concurrent torsion — mechanism may trigger torsion, and ischemia may not be obvious on exam. (d) Not providing psychological support and counseling about fertility — bilateral injury or orchiectomy affects fertility/hormonal function; sperm banking may be appropriate. (e) Forgetting mandatory reporting for non-accidental trauma in pediatric testicular injury."
    }
  }
};
