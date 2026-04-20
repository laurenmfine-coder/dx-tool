
window.EMR_DATA = {
  "patient": {
    "name": "Tyler Nguyen",
    "patientHPI": "This pain started around my belly button yesterday and was just annoying at first, but now it's moved down to my lower right side and it's getting really sharp and intense. I also feel nauseous and threw up once this morning, and now I'm worried something serious is going on.",
    "dob": "06/12/2007",
    "age": "19",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-638121",
    "language": "English",
    "race": "Hispanic/Latino",
    "phone": "(414) 555-3616",
    "email": "tyler.nguyen@email.com",
    "address": "3211 E Roosevelt Rd, Phoenix, AZ 85012",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Robert Hughes, DO",
    "pharmacy": "Walgreens \u2014 University Blvd",
    "emergencyContact": {
      "name": "Maria Nguyen",
      "phone": "(503) 555-6123",
      "relationship": "Spouse"
    },
    "chiefComplaint": "RLQ pain migrated from periumbilical area, nausea",
    "diagnosis": "Acute Appendicitis"
  },
  "problems": [
    {
      "problem": "Acute appendicitis \u2014 uncomplicated",
      "icd": "K37",
      "onset": "2024",
      "status": "Active",
      "notes": "Alvarado score 8 (likely appendicitis), CT confirms, no perforation or abscess"
    },
    {
      "problem": "Periumbilical pain migrating to RLQ \u2014 McBurney's point",
      "icd": "R10.31",
      "onset": "2024",
      "status": "Active",
      "notes": "Classic migration from periumbilical (visceral, from appendix) to RLQ (somatic, from peritoneal irritation)"
    },
    {
      "problem": "Anorexia \u2014 appendicitis associated symptom",
      "icd": "R63.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Refused breakfast this morning \u2014 anorexia in appendicitis is visceral pain-mediated"
    }
  ],
  "medications": [
    {
      "name": "Cefoxitin 2g IV pre-op (surgical prophylaxis)",
      "sig": "IV 30-60 min before incision \u2014 anaerobic + gram-negative coverage",
      "prescriber": "Surgery",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Ketorolac 30mg IV PRN \u2014 pain management",
      "sig": "IV PRN \u2014 NSAID for pain",
      "prescriber": "ED/Surgery",
      "start": "11/2024",
      "refills": 0,
      "status": "PRN"
    },
    {
      "name": "Ondansetron 4mg IV PRN \u2014 nausea",
      "sig": "IV PRN",
      "prescriber": "ED",
      "start": "11/2024",
      "refills": 0,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "128/78",
      "hr": "96",
      "rr": "18",
      "temp": "38.4\u00b0C",
      "spo2": "99%",
      "pain": "8/10",
      "bmi": "37",
      "weight": "72 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "RLQ pain migrated from periumbilical area, nausea",
      "hpi": "Tyler Nguyen is a 19-year-old male presenting with rlq pain migrated from periumbilical area, nausea. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute Appendicitis \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Appendicitis Workup",
      "results": [
        {
          "test": "WBC",
          "value": "14.8",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Neutrophils",
          "value": "88",
          "unit": "%",
          "ref": "50-70",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "4.2",
          "unit": "mg/dL",
          "ref": "<1.0",
          "flag": "H"
        },
        {
          "test": "Urinalysis",
          "value": "Trace WBC \u2014 negative culture predicted",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "Beta-hCG",
          "value": "Negative",
          "unit": "",
          "ref": "Negative (female patient)",
          "flag": ""
        },
        {
          "test": "Bilirubin",
          "value": "1.1",
          "unit": "mg/dL",
          "ref": "0.1-1.0",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "CT Abdomen/Pelvis with IV Contrast",
      "indication": "RLQ pain, fever, leukocytosis \u2014 rule out appendicitis vs gynecologic pathology",
      "findings": "Appendix: dilated to 11mm with periappendiceal fat stranding. Appendicolith visible at base. No evidence of perforation or abscess. No free air. Cecum and terminal ileum unremarkable.",
      "impression": "Acute appendicitis. No perforation. Appendicolith present \u2014 surgery recommended. Alvarado score 8 corroborated by imaging."
    }
  ],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/15/2025",
      "lot": "FL-2025",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19 (Updated)",
      "date": "09/01/2025",
      "lot": "CV-2025",
      "site": "Right Deltoid"
    },
    {
      "name": "Tdap",
      "date": "03/2020",
      "lot": "TD-2020",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Non-contributory"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Occupation",
      "College student"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Tyler appears uncomfortable and anxious, frequently shifting position and holding his right lower abdomen. He is cooperative and eager to provide information, clearly concerned that something serious is happening. His distress is evident through grimacing when the pain intensifies.",
    "interviewQuestions": [
      "Can you tell me exactly when this pain started and how it has changed?",
      "Can you describe what the pain feels like now?",
      "Where exactly is the pain located now, and can you point to it?",
      "On a scale of 1-10, how would you rate your current pain?",
      "What makes the pain worse or better?",
      "Have you had any fever, chills, or felt hot?",
      "Besides nausea and vomiting, have you had any other symptoms?",
      "Have you had any changes in your bowel movements or urination?",
      "Have you eaten anything unusual or had any recent travel?",
      "Have you ever had pain like this before?",
      "Are you taking any medications or have any allergies?",
      "Does anyone in your family have a history of abdominal problems?",
      "Do you use tobacco, alcohol, or any recreational substances?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean by that - could you ask that differently? I'm just really focused on this pain right now.",
      "onset": "It started yesterday afternoon around my belly button, just kind of a dull ache. But overnight it got worse and this morning it moved down to my right side and became much sharper.",
      "character": "It's a sharp, stabbing pain now. When it first started it was just a dull ache, but now it feels like someone is poking me with a knife.",
      "location": "Right now it's right here in my lower right side. I can point to exactly where it hurts most - it's not spread out anymore like it was yesterday.",
      "severity": "Right now it's about an 8 out of 10. Yesterday it was maybe a 3 or 4, but it's gotten so much worse. I can barely move without it hurting more.",
      "aggravating": "Any movement makes it worse - walking, coughing, even laughing. I've been trying to stay as still as possible.",
      "relieving": "Nothing really helps. I tried some ibuprofen last night but it didn't do much. Lying still helps a little bit.",
      "associated": "I feel nauseous and threw up once this morning. I also feel like I might have a fever - I've been feeling hot and kind of shaky.",
      "denies": "No diarrhea, no blood in stool or urine, no burning when I pee. I haven't had any chest pain or trouble breathing.",
      "history": "Never had anything like this before. I'm usually pretty healthy and rarely get sick.",
      "medications": "no medications",
      "allergies": "NKDA",
      "family": "Not really anything that I know of. My parents are pretty healthy. Maybe my dad had his gallbladder out a few years ago but that's about it.",
      "social": "I'm a college student, sophomore year. I don't smoke and I drink occasionally at parties but nothing crazy. No drugs."
    },
    "examManeuvers": [
      "Inspection of abdomen",
      "Auscultation of bowel sounds",
      "Light palpation of all quadrants",
      "Deep palpation of RLQ",
      "McBurney's point tenderness",
      "Rovsing's sign",
      "Psoas sign",
      "Obturator sign",
      "Rebound tenderness",
      "Percussion tenderness"
    ],
    "examFindings": {
      "Inspection of abdomen": "Abdomen appears flat, no visible distension, no obvious masses or hernias, patient guarding RLQ",
      "Auscultation of bowel sounds": "Bowel sounds present but hypoactive in all quadrants",
      "Light palpation of all quadrants": "Soft in LUQ, LLQ, and RUQ with no tenderness, marked tenderness and guarding in RLQ",
      "Deep palpation of RLQ": "Exquisite tenderness with voluntary guarding, patient winces and pulls away",
      "McBurney's point tenderness": "Positive - maximal tenderness at McBurney's point with deep palpation",
      "Rovsing's sign": "Positive - palpation of LLQ elicits pain in RLQ",
      "Psoas sign": "Positive - passive extension of right hip while patient lies on left side elicits RLQ pain",
      "Obturator sign": "Positive - passive internal rotation of flexed right hip elicits RLQ pain",
      "Rebound tenderness": "Positive - sudden release of deep palpation in RLQ causes sharp increase in pain",
      "Percussion tenderness": "Positive over RLQ, patient reports increased pain with gentle percussion"
    },
    "ddxTargets": [
      "Acute appendicitis \u2014 uncomplicated, appendectomy (correct)",
      "Perforated appendicitis \u2014 no free air, no abscess on CT",
      "Ovarian torsion \u2014 beta-hCG negative, CT shows appendix",
      "Mesenteric adenitis \u2014 lymph node enlargement without appendix dilation",
      "Crohn's disease terminal ileitis \u2014 TI unremarkable on CT",
      "Ectopic pregnancy \u2014 beta-hCG negative"
    ],
    "biasFlags": {
      "anchoring": "The classic presentation may cause immediate anchoring on appendicitis without adequately considering other causes of RLQ pain in young males",
      "prematureClosure": "The textbook history and exam findings may lead to premature closure without considering atypical presentations or alternative diagnoses",
      "availabilityBias": "Recent cases of appendicitis or common teaching about 'classic appendicitis' may overshadow consideration of less common but serious conditions"
    },
    "coachPrompts": {
      "phase2": "You've identified appendicitis in your differential - that's good pattern recognition for RLQ pain. What other conditions can present with similar pain migration patterns? Think about what else could cause periumbilical pain that moves to the RLQ, and don't forget to consider must-not-miss diagnoses in a young male.",
      "phase5": "Your history and physical exam show classic findings. Walk me through how each positive finding supports or refutes your differential diagnoses. What's the significance of the pain migration pattern, and how do the positive inflammatory signs help narrow your diagnosis?",
      "finalDebrief": "This case demonstrates the evolution from visceral to somatic pain in appendicitis - the periumbilical pain represents visceral innervation, while RLQ localization indicates parietal peritoneal irritation. Notice how your differential appropriately narrowed as you gathered classic findings like McBurney's point tenderness and positive inflammatory signs. The key was systematically evaluating each possibility rather than anchoring on the obvious diagnosis immediately.",
      "final": "Diagnosis: acute uncomplicated appendicitis. Key learning: (1) Alvarado score (MANTRELS): Migration to RLQ(1) + Anorexia(1) + Nausea/vomiting(1) + Tenderness RLQ(2) + Rebound tenderness(1) + Elevated temp(1) + Leukocytosis(2) + Left shift(1) = max 10. Score 7-10 = likely appendicitis, operate. Score 5-6 = possible, image. Score <5 = unlikely. This patient scores 8. (2) Classic pain migration: periumbilical (visceral pain from distended appendix, T10 dermatome) \u2192 RLQ (somatic pain when inflammation reaches parietal peritoneum). This migration is 80% sensitive. (3) Non-operative management (antibiotics alone): now evidence-based for uncomplicated appendicitis (CODA trial). 5-day antibiotics vs appendectomy: at 90 days, no mortality difference; 70% of antibiotic patients remained well without surgery. Discuss as option for uncomplicated cases. (4) Appendicolith: fecalith at base of appendix increases perforation risk \u2014 tends to favor surgery over antibiotics. (5) Surgical timing: uncomplicated appendicitis can wait for next available OR slot (not middle-of-night emergent). Complicated (perforation, abscess) = urgent."
    }
  },
  "meta": {
    "diagnosis": "Acute Appendicitis \u2014 Uncomplicated, Alvarado Score 8, Laparoscopic Appendectomy",
    "caseId": "appendicitis-v1"
  }
};
