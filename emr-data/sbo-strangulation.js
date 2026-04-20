
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
    "pharmacy": "Walgreens \u2014 University Blvd",
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
      "problem": "SBO with strangulation \u2014 closed-loop obstruction",
      "icd": "K56.69",
      "onset": "2024",
      "status": "Active",
      "notes": "Henry Walsh, 68M \u2014 prior appendectomy. Sudden severe colicky pain, vomiting, distension. CT: closed-loop SBO, free fluid, wall thickening."
    },
    {
      "problem": "Signs of strangulation \u2014 ischemic bowel, emergency surgery required",
      "icd": "K56.69",
      "onset": "2024",
      "status": "Active",
      "notes": "CT: free peritoneal fluid, closed-loop configuration, bowel wall thickening, pneumatosis intestinalis. Time-sensitive \u2014 ischemic bowel within hours."
    },
    {
      "problem": "Adhesion \u2014 from prior appendectomy, most common SBO cause",
      "icd": "K56.50",
      "onset": "2024",
      "status": "Active",
      "notes": "Adhesions from prior abdominal surgery are the most common cause of SBO in adults. Closed-loop = more dangerous than simple partial obstruction."
    }
  ],
  "medications": [
    {
      "name": "NGT decompression \u2014 immediate",
      "sig": "NG tube to suction \u2014 decompresses proximal bowel, reduces vomiting and aspiration risk. Mandatory in SBO.",
      "prescriber": "Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "IV fluid resuscitation \u2014 NS 1L bolus, then maintenance",
      "sig": "SBO causes significant third-spacing and dehydration from vomiting. Resuscitate before and during surgical prep.",
      "prescriber": "Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Broad-spectrum antibiotics \u2014 cefazolin + metronidazole",
      "sig": "Perioperative antibiotics \u2014 covers gram-positive (skin) and anaerobes. Bacterial translocation from ischemic bowel.",
      "prescriber": "Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Emergency laparotomy \u2014 immediate OR activation",
      "sig": "Strangulation = surgical emergency. Every hour of delay \u2192 more ischemic bowel \u2192 greater resection and morbidity.",
      "prescriber": "Surgery",
      "start": "2024",
      "refills": 0,
      "status": "EMERGENT \u2014 OR activated"
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
      "temp": "38.4\u00b0C",
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
      "assessment": "SBO with Strangulation \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "SBO Strangulation Panel",
      "results": [
        {
          "test": "WBC",
          "value": "18.6",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Lactate",
          "value": "3.8",
          "unit": "mmol/L",
          "ref": "<2.0",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.6",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "Sodium",
          "value": "133",
          "unit": "mEq/L",
          "ref": "136-145",
          "flag": "L"
        },
        {
          "test": "ABG \u2014 pH",
          "value": "7.28",
          "unit": "",
          "ref": "7.35-7.45",
          "flag": "L"
        },
        {
          "test": "Lipase",
          "value": "Normal",
          "unit": "",
          "ref": "Normal",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CT Abdomen/Pelvis With IV Contrast",
      "indication": "Acute abdomen, prior appendectomy",
      "findings": "Closed-loop small bowel obstruction \u2014 two transition points. Dilated small bowel loops, pneumatosis intestinalis. Free peritoneal fluid. Mesenteric fat stranding. Bowel wall thickening and reduced enhancement.",
      "impression": "SBO with strangulation signs \u2014 pneumatosis, free fluid, reduced bowel wall enhancement. Emergency surgical consultation. Time-critical."
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
      "SBO with strangulation \u2014 closed-loop, pneumatosis, free fluid (correct)",
      "Simple adhesive SBO without strangulation \u2014 no strangulation signs; NG decompression + observation possible",
      "Large bowel obstruction \u2014 colon dilated, not small bowel; different CT pattern",
      "Volvulus \u2014 sigmoid or cecal twisting; may be closed-loop; depends on CT findings",
      "Incarcerated hernia \u2014 examine for inguinal/umbilical/incisional hernia; CT confirms",
      "Mesenteric ischemia \u2014 similar CT findings possible; SBO creates secondary ischemia here"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the visible incisional hernia and assuming it's the cause of obstruction, when adhesions from prior surgeries are more likely culprit.",
      "prematureClosure": "May stop thinking after identifying hernia without considering that reducible hernias rarely cause obstruction, missing adhesive etiology.",
      "availabilityBias": "Recent cases of incarcerated hernias may overshadow the more common cause of adhesive obstruction in patients with multiple prior surgeries."
    },
    "coachPrompts": {
      "phase2": "Good start on your differential diagnosis. I notice you're considering mechanical causes of bowel obstruction. Given this patient's surgical history of appendectomy and cholecystectomy, what's the most common cause of small bowel obstruction in patients with prior abdominal surgery? Also, when you examine him, pay special attention to the characteristics of his hernia - what findings would suggest it's causing his obstruction versus being an incidental finding?",
      "phase5": "Excellent history and physical exam. Your findings of high-pitched bowel sounds, abdominal distension, and the clinical picture strongly suggest mechanical small bowel obstruction. I noticed the incisional hernia was easily reducible and non-tender - what does this tell you about its role in his current presentation? Given his extensive surgical history, what's the most likely anatomical cause of his obstruction?",
      "finalDebrief": "This case highlights the importance of not being misled by obvious findings like hernias when they don't fit the clinical picture. The key was recognizing that a reducible, non-tender hernia is unlikely to cause obstruction, while adhesions from prior surgeries (appendectomy and cholecystectomy) are the most common cause of small bowel obstruction in patients with surgical history. The high-pitched bowel sounds and classic cramping pain pattern were your diagnostic clues for mechanical obstruction. How might imaging help confirm the diagnosis and guide management decisions?",
      "final": "Diagnosis: SBO with strangulation \u2014 emergency surgery. Key learning: (1) SBO management algorithm: partial SBO without strangulation signs \u2192 NG decompression + IV fluids + observation 24-48h (Gastrografin study if non-operative management considered). Complete SBO or strangulation signs \u2192 emergency surgery. Strangulation signs mandate OR \u2014 no trial of non-operative management. (2) CT signs of strangulation: closed-loop configuration (two transition points), pneumatosis intestinalis (gas in bowel wall = mucosal necrosis), free peritoneal fluid (bowel leak or ischemia), reduced or absent bowel wall enhancement, mesenteric fat stranding. ANY of these = presumed strangulation = surgery. (3) Closed-loop obstruction: two points of obstruction with a loop of bowel trapped between \u2192 most dangerous configuration. Vascular supply to the trapped loop can twist with the bowel \u2192 strangulation develops rapidly. (4) Adhesions are the most common cause of SBO in adults (60-75%) \u2014 typically from prior abdominal surgery. Other causes: hernias, malignancy, Crohn's stricture, intussusception, volvulus. (5) Surgical approach: laparoscopic adhesiolysis if feasible for simple adhesion without strangulation. Open laparotomy for strangulation, extensive adhesions, or bowel resection needed. Damage control surgery if hemodynamically unstable \u2014 resect ischemic segment, leave bowel in discontinuity, return to OR in 24-48h when stable (Hartmann procedure concept)."
    }
  },
  "meta": {
    "diagnosis": "Small Bowel Obstruction \u2014 Strangulation, Free Fluid, Emergency Laparotomy",
    "caseId": "sbo-strangulation"
  }
};
