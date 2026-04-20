
window.EMR_DATA = {
  "patient": {
    "name": "Robert Chen",
    "dob": "12/16/1968",
    "age": 57,
    "sex": "Male",
    "mrn": "RDX-2025-15770",
    "pronouns": "He/Him",
    "insurance": "Medicaid",
    "pcp": "Dr. Priya Sharma, MD",
    "pharmacy": "CVS Pharmacy \u2014 1340 Oak St, Fort Lauderdale, FL",
    "language": "English",
    "chiefComplaint": "Known Bisphosphonate User",
    "race": "Black or African American",
    "address": "8800 SW 72nd Ave, Miami, FL 33173",
    "phone": "(954) 555-6126",
    "email": "robertch@email.com",
    "emergencyContact": {
      "name": "Miguel Santos (Family)",
      "phone": "(954) 555-4340"
    }
  },
  "problems": [
    {
      "problem": "MRONJ \u2014 Stage 2, exposed bone with infection",
      "icd": "M87.180",
      "onset": "2024",
      "status": "Active",
      "notes": "Dorothy Adams, 68F \u2014 alendronate x8 years for osteoporosis. Mandibular molar extracted 3 months ago. Exposed bone + purulence."
    },
    {
      "problem": "Bisphosphonate exposure \u2014 IV vs oral risk stratification",
      "icd": "M87.180",
      "onset": "2024",
      "status": "Active",
      "notes": "Oral bisphosphonate (alendronate) x8 years \u2014 lower MRONJ risk than IV bisphosphonates (zoledronate for cancer). Stage 2 requires antibiotic + specialist referral."
    },
    {
      "problem": "Jaw pain and trismus \u2014 progressive infection",
      "icd": "M87.180",
      "onset": "2024",
      "status": "Active",
      "notes": "Persistent jaw pain, difficulty opening mouth, purulent discharge \u2014 Stage 2 MRONJ criteria met."
    }
  ],
  "medications": [
    {
      "name": "Amoxicillin 500mg TID x2-4 weeks \u2014 active MRONJ infection",
      "sig": "Oral antibiotic \u2014 streptococcal and anaerobic coverage for jaw infection in MRONJ. Extend if inadequate response.",
      "prescriber": "Oral Surgery",
      "start": "2024",
      "refills": 1,
      "status": "Active"
    },
    {
      "name": "Chlorhexidine 0.12% oral rinse BID \u2014 antimicrobial",
      "sig": "Reduce oral bacterial load \u2014 irrigate around exposed bone site.",
      "prescriber": "Oral Surgery",
      "start": "2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Hold alendronate \u2014 discuss with prescribing physician",
      "sig": "Drug holiday (bisphosphonate hold) remains controversial \u2014 evidence limited. Discuss risk-benefit with prescribing physician. Osteoporosis fracture risk vs MRONJ management.",
      "prescriber": "Oral Surgery/PCP",
      "start": "2024",
      "refills": 0,
      "status": "Discuss with PCP"
    },
    {
      "name": "Oral surgery referral \u2014 Stage 2 MRONJ requires specialist management",
      "sig": "Oral maxillofacial surgery \u2014 debridement, possible sequestrectomy, HBO consideration.",
      "prescriber": "Dentistry",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 urgent referral"
    }
  ],
  "allergies": [
    {
      "allergen": "No known drug allergies",
      "type": "Drug",
      "reaction": "None",
      "severity": "N/A",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "11/18/2024",
      "bp": "148/92",
      "hr": 98,
      "rr": 18,
      "temp": "99.2\u00b0F",
      "spo2": "96%",
      "wt": "95 lbs",
      "ht": "5'7\"",
      "bmi": 14.9,
      "setting": "Ward"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "95 lbs",
      "ht": "5'7\"",
      "bmi": 14.9,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "95 lbs",
      "ht": "5'7\"",
      "bmi": 14.9,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. James Castillo, MD",
      "summary": "Patient seen for Known Bisphosphonate User",
      "assessment": "Working diagnosis: Known Bisphosphonate User",
      "plan": "Referral to dentistry. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "MRONJ Assessment",
      "results": [
        {
          "test": "Panoramic radiograph",
          "value": "Mandibular sequestrum formation, rarefaction around extraction site",
          "unit": "",
          "ref": "Normal healing",
          "flag": "H"
        },
        {
          "test": "CTX (C-terminal telopeptide)",
          "value": "148",
          "unit": "pg/mL",
          "ref": ">150 pg/mL = lower MRONJ risk for surgery",
          "flag": "L"
        },
        {
          "test": "CBC",
          "value": "WBC 13.2 \u2014 mild elevation",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "CRP",
          "value": "42",
          "unit": "mg/L",
          "ref": "<10",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V4775K",
      "site": "Left deltoid"
    }
  ],
  "familyHistory": [
    {
      "relation": "Father",
      "condition": "Hypertension",
      "age": "58"
    },
    {
      "relation": "Mother",
      "condition": "Type 2 diabetes",
      "age": "55"
    }
  ],
  "socialHistory": {
    "smoking": "Former smoker, quit 2020",
    "alcohol": "Social, 2-4 drinks/week",
    "drugs": "Denies",
    "occupation": "Healthcare professional / student",
    "exercise": "Regular, 3x/week",
    "diet": "Balanced",
    "livingArrangement": "Lives with family"
  },
  "meta": {
    "caseId": "layer2-dental-bisphosphonate-emergency",
    "diagnosis": "Medication-Related Osteonecrosis of the Jaw (MRONJ) \u2014 Bisphosphonate Patient, Exposed Bone, Stage 2",
    "acuity": 2,
    "presentation": "Known Bisphosphonate User",
    "category": "oncologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with known bisphosphonate user. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What brings you in today?",
      "When did the pain start?",
      "What makes it better or worse?",
      "Is it sensitive to cold? Hot? Sweet?",
      "How long does the pain last after a trigger?",
      "Does it wake you from sleep?",
      "Is there any swelling?",
      "Have you had any recent dental work?",
      "When was your last exam and cleaning?",
      "Have you had any trauma to this area?",
      "Do you grind your teeth?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this oncologic presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "Extraoral exam \u2014 lymph nodes, TMJ",
      "Intraoral soft tissue exam",
      "Dental charting \u2014 caries, existing restorations",
      "Periodontal probing",
      "Cold/heat testing",
      "Percussion testing",
      "Palpation \u2014 periapical area",
      "Radiographic review"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "MRONJ Stage 2 \u2014 oral bisphosphonate, exposed bone + infection (correct)",
      "Osteoradionecrosis \u2014 no radiation history; MRONJ from bisphosphonate is the diagnosis",
      "Osteomyelitis of jaw \u2014 overlapping entity; MRONJ has a specific medication history component",
      "Normal extraction socket \u2014 3 months post-extraction, exposed bone is NOT normal",
      "Periodontal abscess \u2014 bone exposure distinguishes MRONJ from soft tissue abscess",
      "Squamous cell carcinoma invading bone \u2014 biopsy if uncertain; MRONJ history is key"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a dentistry case with chief complaint: Known Bisphosphonate User. What are the most important questions for a dentistry to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a dentistry perspective, what is the most critical finding that narrows this differential? What is the dentistry-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the dentistry's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: MRONJ Stage 2. Key learning: (1) MRONJ definition (AAOMS): exposed bone OR bone that can be probed through fistula in maxillofacial region, persisting >8 weeks, in patients with current or prior antiresorptive/antiangiogenic drug exposure, and no history of radiation or metastatic disease to the jaw. Bisphosphonates, denosumab, and antiangiogenic agents (bevacizumab, sunitinib) are causative. (2) MRONJ staging: Stage 0 = no bone, non-specific symptoms. Stage 1 = exposed bone, no infection. Stage 2 = exposed bone + infection (pain + erythema \u00b1 purulence). Stage 3 = exposed bone + infection + pathologic fracture or extraoral fistula or osteolysis to inferior border. (3) Oral vs IV bisphosphonate risk: oral bisphosphonates (alendronate, risedronate \u2014 osteoporosis) = MRONJ risk ~0.001-0.01%. IV bisphosphonates (zoledronate \u2014 cancer) = 1-10% MRONJ risk. IV antiresorptives require more conservative dental management. (4) CTX as surgical guidance: serum CTX >150 pg/mL has been used to identify lower MRONJ risk for elective extractions in bisphosphonate patients \u2014 though evidence is limited, some practitioners use it for risk stratification. (5) Prevention: before starting IV bisphosphonates or denosumab \u2014 dental clearance (extract hopeless teeth, complete restorations). For oral bisphosphonates: individualized risk discussion before invasive procedures."
    }
  }
};
