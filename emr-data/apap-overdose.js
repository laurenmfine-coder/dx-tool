
window.EMR_DATA = {
  "patient": {
    "name": "Megan Fisher",
    "patientHPI": "I took a whole bottle of Tylenol about eight hours ago because I was feeling really overwhelmed after my boyfriend and I broke up last week. I know it was a stupid thing to do, and now I'm worried about what it might do to me, so I decided to come in to get checked out.",
    "dob": "01/04/1999",
    "age": "27",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-786949",
    "language": "English",
    "race": "Asian",
    "phone": "(414) 555-5934",
    "email": "megan.fisher@email.com",
    "address": "4006 N Kedzie Blvd, Memphis, TN 38104",
    "insurance": "Oscar Health",
    "pcp": "Dr. Michelle Foster, MD",
    "pharmacy": "CVS Pharmacy \u2014 Main St",
    "emergencyContact": {
      "name": "Reginald Fisher",
      "phone": "(314) 555-1782",
      "relationship": "Partner"
    },
    "chiefComplaint": "Intentional ingestion of approximately 30g of acetaminophen 8 hours ago",
    "diagnosis": "Acetaminophen Overdose"
  },
  "problems": [
    {
      "problem": "Acetaminophen overdose \u2014 intentional",
      "icd": "T39.1X1A",
      "onset": "2024",
      "status": "Active",
      "notes": "Level 210 mcg/mL at 6h \u2014 high-risk zone on nomogram"
    },
    {
      "problem": "Major depressive disorder \u2014 precipitant",
      "icd": "F32.1",
      "onset": "2022",
      "status": "Active",
      "notes": "Psychiatry consult ordered"
    },
    {
      "problem": "Early hepatotoxicity \u2014 transaminases rising",
      "icd": "K72.00",
      "onset": "2024",
      "status": "Active",
      "notes": "AST/ALT trending up at hour 6"
    }
  ],
  "medications": [
    {
      "name": "N-Acetylcysteine 150mg/kg IV over 1h THEN 50mg/kg/4h THEN 100mg/kg/16h",
      "sig": "3-bag IV Ramsay protocol \u2014 start immediately",
      "prescriber": "Toxicology",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Ondansetron 4mg IV PRN",
      "sig": "IV push q6h PRN nausea",
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
      "bp": "112/68",
      "hr": "88",
      "rr": "16",
      "temp": "36.8\u00b0C",
      "spo2": "99%",
      "pain": "3/10",
      "bmi": "24",
      "weight": "72 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Intentional ingestion of approximately 30g of acetaminophen 8 hours ago",
      "hpi": "Megan Fisher is a 27-year-old female presenting with intentional ingestion of approximately 30g of acetaminophen 8 hours ago. Past medical history includes Depression, Anxiety, Recent breakup. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acetaminophen Overdose \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Acetaminophen Toxicity",
      "results": [
        {
          "test": "APAP level (6h post-ingestion)",
          "value": "210",
          "unit": "mcg/mL",
          "ref": "<10 therapeutic",
          "flag": "H"
        },
        {
          "test": "AST",
          "value": "88",
          "unit": "U/L",
          "ref": "10-40",
          "flag": "H"
        },
        {
          "test": "ALT",
          "value": "104",
          "unit": "U/L",
          "ref": "7-56",
          "flag": "H"
        },
        {
          "test": "INR",
          "value": "1.2",
          "unit": "",
          "ref": "0.9-1.1",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.1",
          "unit": "mg/dL",
          "ref": "0.6-1.2",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [],
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
    "Family hx depression"
  ],
  "socialHistory": [
    [
      "Suicide attempt",
      "Intentional overdose after argument with boyfriend"
    ],
    [
      "Alcohol",
      "Had 3 glasses of wine"
    ],
    [
      "Safety",
      "Denies other co-ingestants, no SI currently"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Megan appears tearful but cooperative, expressing genuine remorse about the overdose and concern about potential health consequences. She is forthcoming about the circumstances leading to her ingestion and demonstrates insight into her impulsive behavior, though she remains emotionally fragile.",
    "interviewQuestions": [
      "Can you tell me exactly what you took and how much?",
      "What time did you take the acetaminophen?",
      "Did you take anything else - other medications, alcohol, or substances?",
      "Have you vomited since taking the pills?",
      "Are you having any nausea, stomach pain, or other symptoms right now?",
      "What made you decide to take the acetaminophen?",
      "Are you having thoughts of hurting yourself now?",
      "Do you have a plan to harm yourself?",
      "What medications do you normally take?",
      "Have you ever taken an overdose before?",
      "Do you have any medical problems or liver disease?",
      "How much do you typically drink alcohol?",
      "Is there anyone we can call to support you?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you're asking. I'm just worried about what the Tylenol might do to me.",
      "onset": "I took the whole bottle around 8 hours ago, maybe around 2 PM. I had been crying for hours after another fight about our relationship.",
      "character": "I don't really have any pain or symptoms right now, which is why I'm worried something bad might happen later.",
      "location": "I don't have any specific pain anywhere right now.",
      "severity": "I'm not having physical pain, but emotionally I'd say my distress was a 10 when I took the pills. Now I'm scared, maybe a 7.",
      "aggravating": "Thinking about what I did and what might happen to my liver makes me more anxious.",
      "relieving": "Coming here to get checked out makes me feel a little better, like I'm doing something responsible.",
      "associated": "I threw up once about an hour after I took the pills, but I think that was just from crying and being upset. I feel a little nauseous now.",
      "denies": "No stomach pain, no yellow color to my eyes or skin, no confusion or weird symptoms. I haven't taken anything else today.",
      "history": "No, I've never done anything like this before. I've thought about it when I get really depressed, but this is the first time I actually did something.",
      "medications": "Sertraline; Alprazolam",
      "allergies": "NKDA",
      "family": "My mom has depression too, and my grandmother was hospitalized for it a few times when I was younger.",
      "social": "I work as a graphic designer. I don't smoke. I had about 3 glasses of wine before I took the pills. I don't use drugs. This whole thing started because my boyfriend and I have been having problems."
    },
    "examManeuvers": [
      "General appearance and mental status",
      "Abdominal examination",
      "Scleral icterus assessment",
      "Skin examination for jaundice",
      "Right upper quadrant palpation",
      "Neurological assessment",
      "Cardiovascular examination",
      "Psychiatric risk assessment",
      "Hepatomegaly assessment",
      "Overall toxicity assessment"
    ],
    "examFindings": {
      "General appearance and mental status": "Alert, oriented, tearful but cooperative, no altered mental status or signs of hepatic encephalopathy",
      "Abdominal examination": "Soft, non-tender, no distension, normal bowel sounds",
      "Scleral icterus assessment": "No scleral icterus present",
      "Skin examination for jaundice": "No jaundice, normal skin color and perfusion",
      "Right upper quadrant palpation": "No tenderness, no masses palpable",
      "Neurological assessment": "Cranial nerves intact, normal reflexes, no focal deficits",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs",
      "Psychiatric risk assessment": "Expresses remorse, denies current suicidal ideation, cooperative with safety planning",
      "Hepatomegaly assessment": "Liver not palpable, no hepatomegaly appreciated",
      "Overall toxicity assessment": "Appears well, no signs of acute toxicity at this time"
    },
    "ddxTargets": [
      "Acetaminophen overdose \u2014 high-risk, NAC indicated (correct)",
      "Non-toxic ingestion \u2014 level below treatment line",
      "Hepatitis A/B \u2014 no exposure history",
      "Alcohol hepatitis \u2014 coingestion possible but APAP is primary",
      "Salicylate overdose \u2014 different acid-base pattern",
      "Serotonin syndrome \u2014 no serotonergic agents involved"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on psychiatric presentation and missing the serious toxicological emergency requiring immediate NAC treatment",
      "prematureClosure": "Risk of assuming patient is 'fine' because she looks well at 8 hours, missing that hepatotoxicity develops 24-72 hours after ingestion",
      "availabilityBias": "Risk of focusing on more dramatic overdose presentations while missing that acetaminophen toxicity can appear deceptively benign initially"
    },
    "coachPrompts": {
      "phase2": "Before you interview the patient, think about acetaminophen overdose specifically. What's unique about the timeline of acetaminophen toxicity? When do patients typically develop symptoms, and what does this mean for your assessment at 8 hours post-ingestion?",
      "phase5": "The patient appears well now, but you've confirmed a significant acetaminophen ingestion 8 hours ago. What's the most critical next step in management, and why is timing essential? What specific lab value will guide your treatment decision?",
      "finalDebrief": "This case highlights the deceptive nature of acetaminophen poisoning - patients often appear well initially but develop fulminant hepatic failure 2-3 days later without treatment. The key is recognizing that NAC effectiveness decreases significantly after 8 hours, making this a true emergency despite the benign appearance. How did your differential evolve as you gathered more history about the timing and quantity of ingestion?",
      "final": "Diagnosis: APAP overdose, Rumack-Matthew high-risk zone. Key pharmacy learning: (1) Nomogram: level 210 at 6h is well above the treatment line (150 at 4h). NAC is definitively indicated. (2) NAC mechanism: replenishes glutathione to conjugate NAPQI (toxic CYP2E1 metabolite). Effective even 10-24h post-ingestion. (3) Hepatotoxicity window: 24-72h. AST rising at 6h = early marker \u2014 NAC now prevents fulminant failure. (4) INR elevation follows transaminases and predicts severity \u2014 King's College criteria for transplant listing. (5) Late NAC: give even after 24h in massive ingestion \u2014 antioxidant and anti-inflammatory benefit persists."
    }
  },
  "meta": {
    "diagnosis": "Acetaminophen Overdose \u2014 Rumack-Matthew High-Risk Zone, NAC Initiated",
    "caseId": "apap-overdose"
  }
};
