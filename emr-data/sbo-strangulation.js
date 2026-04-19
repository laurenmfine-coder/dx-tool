/* emr-data/sbo-strangulation.js — Auto-generated EMR case data for SBO with Strangulation */
window.EMR_DATA = {
  "patient": {
    "name": "Richard Kowalski",
    "patientHPI": "I've been having terrible cramping belly pain that comes in waves, and I haven't been able to have a bowel movement for two days now. My stomach feels bloated and tight, and I keep throwing up everything I try to eat or drink.",
    "dob": "07/13/1948",
    "age": "78",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-478097",
    "language": "English",
    "race": "Multiracial",
    "phone": "(803) 555-4033",
    "email": "richard.kowalski@email.com",
    "address": "8033 Peachtree Rd, Baltimore, MD 21206",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Elena Rodriguez, MD",
    "pharmacy": "Walgreens — University Blvd",
    "emergencyContact": {
      "name": "Maria Kowalski",
      "phone": "(412) 555-4545",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Colicky abdominal pain, distension, vomiting, no BM for 2 days",
    "diagnosis": "SBO with Strangulation"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Prior abdominal surgery (appendectomy, cholecystectomy)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Incisional hernia (known)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Lisinopril",
      "dose": "10mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. David Kim, MD"
    },
    {
      "id": "med-2",
      "name": "Aspirin",
      "dose": "81mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
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
      "bp": "98/62",
      "hr": "118",
      "rr": "24",
      "temp": "38.4°C",
      "spo2": "96%",
      "pain": "10/10",
      "bmi": "35",
      "weight": "93 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Colicky abdominal pain, distension, vomiting, no BM for 2 days",
      "hpi": "Richard Kowalski is a 78-year-old male presenting with colicky abdominal pain, distension, vomiting, no bm for 2 days. Past medical history includes Prior abdominal surgery (appendectomy, cholecystectomy), Incisional hernia (known). See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "SBO with Strangulation — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-913306",
      "collected": "03/01/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "18.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": "H"
            },
            {
              "test": "Hemoglobin",
              "value": "13.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "41.2",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "245",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "18",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": "L"
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
              "value": "0.9",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "98",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "Lactate",
              "value": "4.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-1",
      "date": "03/01/2026",
      "study": "CT Abdomen/Pelvis with Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-853040",
      "clinical": "Colicky abdominal pain, distension, vomiting, no BM for 2 days",
      "technique": "Standard protocol",
      "findings": "Dilated small bowel loops up to 4.5cm with decompressed distal bowel (transition point in RLQ). Closed-loop configuration with mesenteric swirl sign. Decreased bowel wall enhancement concerning for ischemia. Moderate free fluid.",
      "impression": "Small bowel obstruction with closed-loop configuration and signs of strangulation. Emergent surgical consultation.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
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
      "Surgical history",
      "Appendectomy age 25, cholecystectomy age 52"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Richard appears uncomfortable and restless, frequently shifting position and grimacing during waves of pain. He is cooperative but clearly distressed, speaking in short sentences between episodes of cramping. His anxiety is evident as he worries about his worsening symptoms and inability to keep anything down.",
    "interviewQuestions": [
      "When did your abdominal pain first start?",
      "Can you describe the quality of the pain?",
      "Where exactly is the pain located?",
      "How severe is the pain on a scale of 1-10?",
      "Does anything make the pain better or worse?",
      "When was your last bowel movement?",
      "Have you been passing gas?",
      "Tell me about the vomiting - what does it look like?",
      "Have you had episodes like this before?",
      "Any fever or chills?",
      "What medications are you currently taking?",
      "Do you have any allergies?",
      "Tell me about your previous surgeries"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand... could you ask that differently? This pain is making it hard to focus.",
      "onset": "The pain started gradually yesterday morning but got much worse overnight. I woke up around 3 AM with terrible cramping.",
      "character": "It's a sharp, cramping pain that comes in waves. It builds up, gets really intense, then eases off for a minute before starting again.",
      "location": "It's mostly around my belly button and lower abdomen, but sometimes it feels like my whole stomach is involved.",
      "severity": "During the worst cramps it's easily a 9 out of 10. I can barely stand up straight. Between episodes it drops to maybe a 4 or 5.",
      "aggravating": "Trying to eat or drink anything makes me vomit immediately. Moving around seems to make the cramping worse.",
      "relieving": "Nothing really helps. I tried some antacids but threw them up. Sometimes curling up in a ball gives me a tiny bit of relief.",
      "associated": "I've been vomiting constantly since yesterday afternoon. My belly is really swollen and tight. I feel feverish and weak from not keeping anything down.",
      "denies": "No diarrhea - I haven't had any bowel movement at all. No blood in the vomit. No chest pain or shortness of breath.",
      "history": "I've had some minor episodes of cramping before, usually related to my hernia, but nothing this severe or lasting this long.",
      "medications": "Lisinopril; Aspirin",
      "allergies": "NKDA",
      "family": "Nothing runs in my family that would cause this. My parents lived into their 80s without major health problems.",
      "social": "I'm retired from construction work. I don't smoke and only have an occasional beer. I live with my wife who's been worried sick about me."
    },
    "examManeuvers": [
      "General appearance and vital signs assessment",
      "Abdominal inspection",
      "Auscultation of bowel sounds",
      "Abdominal palpation",
      "Assessment for rebound tenderness",
      "Examination of hernia sites",
      "Digital rectal examination",
      "Assessment for dehydration signs",
      "Percussion of abdomen",
      "Assessment for masses or organomegaly"
    ],
    "examFindings": {
      "General appearance and vital signs assessment": "Patient appears ill and dehydrated, restless with tachycardia and low-grade fever. Mild hypotension consistent with volume depletion.",
      "Abdominal inspection": "Visible abdominal distension with a known incisional hernia at the right lower quadrant. No obvious strangulation of the hernia.",
      "Auscultation of bowel sounds": "High-pitched, hyperactive bowel sounds with metallic tinkling quality characteristic of mechanical obstruction.",
      "Abdominal palpation": "Diffuse tenderness without rigidity. Palpable loops of distended bowel. The incisional hernia is reducible and non-tender.",
      "Assessment for rebound tenderness": "No significant rebound tenderness or guarding, suggesting absence of peritonitis.",
      "Examination of hernia sites": "Incisional hernia present but easily reducible, soft, and non-tender. No evidence of incarceration at hernia site.",
      "Digital rectal examination": "Empty rectal vault, no masses palpated, no blood on examining finger.",
      "Assessment for dehydration signs": "Dry mucous membranes, poor skin turgor, and sunken eyes consistent with moderate dehydration.",
      "Percussion of abdomen": "Tympanitic throughout, consistent with gaseous distension of bowel loops.",
      "Assessment for masses or organomegaly": "No palpable masses or organomegaly detected through the distended abdomen."
    },
    "ddxTargets": [
      "Adhesive small bowel obstruction (correct diagnosis)",
      "Incarcerated incisional hernia",
      "Large bowel obstruction",
      "Mesenteric ischemia",
      "Bowel perforation with peritonitis",
      "Severe gastroenteritis",
      "Inflammatory bowel disease flare"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the visible incisional hernia and assuming it's the cause of obstruction, when adhesions from prior surgeries are more likely culprit.",
      "prematureClosure": "May stop thinking after identifying hernia without considering that reducible hernias rarely cause obstruction, missing adhesive etiology.",
      "availabilityBias": "Recent cases of incarcerated hernias may overshadow the more common cause of adhesive obstruction in patients with multiple prior surgeries."
    },
    "coachPrompts": {
      "phase2": "Good start on your differential diagnosis. I notice you're considering mechanical causes of bowel obstruction. Given this patient's surgical history of appendectomy and cholecystectomy, what's the most common cause of small bowel obstruction in patients with prior abdominal surgery? Also, when you examine him, pay special attention to the characteristics of his hernia - what findings would suggest it's causing his obstruction versus being an incidental finding?",
      "phase5": "Excellent history and physical exam. Your findings of high-pitched bowel sounds, abdominal distension, and the clinical picture strongly suggest mechanical small bowel obstruction. I noticed the incisional hernia was easily reducible and non-tender - what does this tell you about its role in his current presentation? Given his extensive surgical history, what's the most likely anatomical cause of his obstruction?",
      "finalDebrief": "This case highlights the importance of not being misled by obvious findings like hernias when they don't fit the clinical picture. The key was recognizing that a reducible, non-tender hernia is unlikely to cause obstruction, while adhesions from prior surgeries (appendectomy and cholecystectomy) are the most common cause of small bowel obstruction in patients with surgical history. The high-pitched bowel sounds and classic cramping pain pattern were your diagnostic clues for mechanical obstruction. How might imaging help confirm the diagnosis and guide management decisions?"
    }
  }
};
