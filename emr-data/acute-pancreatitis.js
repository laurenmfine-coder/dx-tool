
window.EMR_DATA = {
  "patient": {
    "name": "Nikolai Petrov",
    "dob": "04/02/1967",
    "age": 57,
    "sex": "Male",
    "mrn": "RDX-2025-52489",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield FL PPO",
    "pcp": "Dr. Catherine Miller, MD",
    "pharmacy": "Walgreens \u2014 5701 Sheridan St, Hollywood, FL",
    "language": "English",
    "race": "White",
    "address": "3420 Sheridan St, Hollywood, FL 33021",
    "phone": "(954) 555-9321",
    "email": "n.petrov67@email.com",
    "emergencyContact": {
      "name": "Irina Petrov (Wife)",
      "phone": "(954) 555-9335"
    },
    "chiefComplaint": "Severe upper belly pain"
  },
  "problems": [
    {
      "problem": "Acute pancreatitis \u2014 recurrent, alcoholic",
      "icd": "K85.20",
      "onset": "2020",
      "status": "Active",
      "notes": "Carlos Rivera, 42M \u2014 alcohol-induced pancreatitis, 3rd episode. Now day 7: sudden severe worsening pain, new hematemesis, Hgb drop from 12 to 7.8."
    },
    {
      "problem": "Splenic artery pseudoaneurysm \u2014 vascular complication of pancreatitis",
      "icd": "I72.8",
      "onset": "2024",
      "status": "Active",
      "notes": "Pancreatic enzymes erode splenic artery wall \u2192 pseudoaneurysm. Risk of rupture \u2192 hemorrhagic pancreatitis. Most common vascular complication of AP."
    },
    {
      "problem": "Alcohol use disorder \u2014 ongoing, driving recurrent pancreatitis",
      "icd": "F10.20",
      "onset": "2019",
      "status": "Active",
      "notes": "Three episodes in 4 years. AUDIT-C 10. Requires addiction counseling and support."
    }
  ],
  "medications": [
    {
      "name": "Emergent angiography + embolization \u2014 splenic artery",
      "sig": "Endovascular embolization is the first-line treatment for splenic artery pseudoaneurysm (coil embolization proximal and distal to pseudoaneurysm). Surgical ligation if embolization fails.",
      "prescriber": "Interventional Radiology",
      "start": "2024",
      "refills": 0,
      "status": "EMERGENT"
    },
    {
      "name": "pRBC transfusion \u2014 2 units",
      "sig": "Hemoglobin dropped from 12 to 7.8 from bleeding into pseudoaneurysm/peritoneum.",
      "prescriber": "Surgery/IR",
      "start": "2024",
      "refills": 0,
      "status": "Transfusing"
    },
    {
      "name": "Alcohol cessation + naltrexone",
      "sig": "Naltrexone reduces alcohol craving. Addiction counseling referral. Further alcohol use will cause recurrent pancreatitis and progression to chronic pancreatitis/exocrine insufficiency.",
      "prescriber": "Medicine/Addiction",
      "start": "2024",
      "refills": 2,
      "status": "Planned \u2014 post-acute"
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
      "date": "12/16/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 16,
      "temp": "98.6\u00b0F",
      "spo2": "97%",
      "wt": "222 lbs",
      "ht": "5'11\"",
      "bmi": 31,
      "setting": "PCP Office"
    },
    {
      "date": "06/10/2024",
      "bp": "142/88",
      "hr": 80,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "226 lbs",
      "ht": "5'11\"",
      "bmi": 31.5,
      "setting": "PCP Office"
    },
    {
      "date": "12/12/2023",
      "bp": "136/84",
      "hr": 76,
      "rr": 16,
      "temp": "98.8\u00b0F",
      "spo2": "98%",
      "wt": "220 lbs",
      "ht": "5'11\"",
      "bmi": 30.7,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/16/2024",
      "type": "Primary Care",
      "provider": "Dr. Catherine Miller, MD",
      "cc": "Follow-up: cholelithiasis, hyperlipidemia, alcohol use",
      "hpi": "57-year-old male with cholelithiasis, severe hypertriglyceridemia, and heavy alcohol use presenting for routine follow-up. Triglycerides remain elevated at 480 despite fenofibrate \u2014 admits to dietary noncompliance and continued heavy alcohol use (4-6 drinks nightly). Had episode of acute pancreatitis in 2023 requiring 4-day hospitalization. Continues to decline cholecystectomy referral. Occasionally notes epigastric discomfort after heavy meals. Weight stable.",
      "exam": "General: Obese male, mild facial plethora, NAD. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, mild epigastric tenderness without rebound; positive Murphy's sign. Liver: Palpable 2 cm below costal margin. Extremities: No edema. Neuro: A&O x3; mild bilateral hand tremor.",
      "assessment": "1. Cholelithiasis \u2014 symptomatic; again counseled on cholecystectomy\n2. Hypertriglyceridemia \u2014 poorly controlled (TG 480); pancreatitis risk\n3. Alcohol use disorder \u2014 continued heavy use; elevated recurrent pancreatitis risk\n4. Prior acute pancreatitis \u2014 at high risk for recurrence\n5. HTN \u2014 controlled",
      "plan": "1. Strongly recommended cholecystectomy \u2014 patient declined again; documented risks\n2. Add omega-3 fatty acids (Lovaza 4g daily) for TG reduction\n3. Alcohol cessation counseling; offered referral to addiction medicine \u2014 declined\n4. Low-fat diet counseling\n5. Labs: lipid panel, LFTs, lipase, CBC\n6. RTC 3 months; ED precautions for abdominal pain reviewed"
    },
    {
      "id": "V002",
      "date": "08/05/2023",
      "type": "ED",
      "provider": "Dr. Sarah Mitchell, MD (Emergency Medicine)",
      "cc": "Severe epigastric pain, nausea, vomiting x 12 hours",
      "hpi": "57-year-old male presenting with sudden onset severe epigastric pain radiating to the back x 12 hours. Reports heavy alcohol intake night before (8+ drinks). Nausea with multiple episodes of vomiting. Unable to tolerate PO. Reports prior biliary colic episodes. No fever.",
      "exam": "General: Moderate distress, diaphoretic. Vitals: HR 112, BP 148/92, T 99.2\u00b0F. Abdomen: Severe epigastric tenderness with voluntary guarding; no rebound; diminished bowel sounds. No jaundice.",
      "assessment": "1. Acute pancreatitis \u2014 lipase >3x ULN; likely gallstone and/or alcohol-related",
      "plan": "1. Admitted to medicine service\n2. NPO, aggressive IV hydration, IV morphine for pain\n3. CT abdomen/pelvis: mild peripancreatic stranding, no necrosis\n4. Surgical consult for cholecystectomy \u2014 patient deferred\n5. Discharged day 4 with outpatient follow-up"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Pancreatitis Vascular Complication",
      "results": [
        {
          "test": "Hemoglobin",
          "value": "7.8",
          "unit": "g/dL",
          "ref": "13.5-17.5",
          "flag": "L"
        },
        {
          "test": "Lipase (baseline elevated)",
          "value": "620",
          "unit": "U/L",
          "ref": "10-140",
          "flag": "H"
        },
        {
          "test": "HR",
          "value": "118",
          "unit": "bpm",
          "ref": "60-100 (hemorrhagic shock)",
          "flag": "H"
        },
        {
          "test": "BP",
          "value": "96/62",
          "unit": "mmHg",
          "ref": "SBP >100",
          "flag": "L"
        },
        {
          "test": "Triglycerides",
          "value": "820",
          "unit": "mg/dL",
          "ref": "<150 (hypertriglyceridemia AP)",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "CT Angiography Abdomen",
      "findings": "Large pseudoaneurysm arising from splenic artery (3.2cm). Active extravasation into lesser sac on arterial phase. Extensive peripancreatic inflammatory changes. No free air.",
      "impression": "Splenic artery pseudoaneurysm with active bleeding. Emergent interventional radiology consultation."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-278",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/08/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-860",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "09/2024",
      "site": "Left deltoid IM",
      "lot": "SX24-612",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "11/2024",
      "site": "Left deltoid IM",
      "lot": "SX24-780",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: Alcoholic liver disease, deceased at 62",
    "Mother: Gallstones, cholecystectomy at age 55; alive at 84",
    "Brother: Hyperlipidemia, pancreatitis at age 50, alive",
    "Sister: T2DM, alive at 54"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Restaurant owner/chef"
    ],
    [
      "Marital",
      "Married"
    ],
    [
      "Tobacco",
      "Former \u2014 10 pack-years; quit 2010"
    ],
    [
      "Alcohol",
      "Heavy \u2014 4-6 drinks daily (beer and vodka); 30+ year history"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Minimal \u2014 on feet at work but no structured exercise"
    ],
    [
      "Housing",
      "Lives with wife"
    ],
    [
      "Safety",
      "Denies IPV; wears seatbelt"
    ],
    [
      "Advance Directive",
      "None \u2014 discussed"
    ]
  ],
  "meta": {
    "caseId": "acute-pancreatitis",
    "diagnosis": "Acute Pancreatitis with Vascular Complication (Splenic Artery Pseudoaneurysm)",
    "acuity": 2,
    "presentation": "Vascular Emergency",
    "category": "vascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Nikolai Petrov is visibly uncomfortable and in moderate distress. They are anxious about their symptoms and eager to provide a history, though they occasionally wince or pause due to discomfort.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did vascular emergency start?",
      "Can you describe exactly how it started \u2014 sudden or gradual?",
      "Where is the problem located? Does it spread anywhere?",
      "How would you rate the severity on a scale of 1 to 10?",
      "What makes it worse? What makes it better?",
      "Do you have any other symptoms along with this?",
      "Have you had anything like this before?",
      "Tell me about your medical history \u2014 any chronic conditions?",
      "What medications are you currently taking?",
      "Do you have any allergies to medications?",
      "Tell me about your family medical history.",
      "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
      "default": "He pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
      "onset": "'The symptoms started 57-year-old male with cholelithiasis, severe hypertriglyceridemia, and heavy alc.'",
      "character": "'It's vascular emergency \u2014 it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Acute Pancreatitis.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Fenofibrate 145mg daily; Atorvastatin 20mg QHS; Lisinopril 20mg daily; Omeprazole 20mg daily.'",
      "allergies": "'My allergies are NKDA.'",
      "family": "Father: Alcoholic liver disease, deceased at 62  Mother: Gallstones, cholecystectomy at age 55; alive at 84  Brother: Hyperlipidemia, pancreatitis at age 50, alive",
      "social": "Occupation: Restaurant owner/chef  Marital: Married  Tobacco: Former \u2014 10 pack-years; quit 2010  Alcohol: Heavy \u2014 4-6 drinks daily (beer and vodka); 30+ year history  Drugs: Denies"
    },
    "examManeuvers": [
      "General appearance and level of distress",
      "Vital signs review",
      "Cardiovascular auscultation",
      "Pulmonary auscultation",
      "Abdominal examination",
      "Extremity assessment",
      "Skin examination",
      "Targeted system examination"
    ],
    "examFindings": {
      "General appearance and level of distress": "Clinical finding consistent with Acute Pancreatitis. Document specifically what you observe.",
      "Vital signs review": "Clinical finding consistent with Acute Pancreatitis. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Acute Pancreatitis. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Acute Pancreatitis. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Acute Pancreatitis. Document specifically what you observe.",
      "Extremity assessment": "Clinical finding consistent with Acute Pancreatitis. Document specifically what you observe.",
      "Skin examination": "Clinical finding consistent with Acute Pancreatitis. Document specifically what you observe.",
      "Targeted system examination": "Clinical finding consistent with Acute Pancreatitis. Document specifically what you observe."
    },
    "ddxTargets": [
      "Splenic artery pseudoaneurysm from pancreatitis (correct)",
      "Recurrent acute pancreatitis flare without vascular complication \u2014 Hgb drop + hemodynamic instability indicate bleeding",
      "Peptic ulcer hemorrhage \u2014 hematemesis could suggest; but CT shows pancreatic/peripancreatic source",
      "Splenic rupture \u2014 different mechanism, no AP history; blunt trauma usually involved",
      "Gastric variceal bleeding \u2014 portal hypertension signs; no CT evidence here",
      "Pancreatic pseudocyst rupture \u2014 could bleed; but CT shows pseudoaneurysm as definitive finding"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Acute Pancreatitis, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Acute Pancreatitis, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Acute Pancreatitis based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Nikolai Petrov's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Acute Pancreatitis (Vascular Complication). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?",
      "final": "Diagnosis: acute pancreatitis complicated by splenic artery pseudoaneurysm. Key learning: (1) Vascular complications of pancreatitis: pancreatic enzymes (elastase) erode adjacent arterial walls. Splenic artery is most common (50%), followed by gastroduodenal, pancreaticoduodenal. They form pseudoaneurysms \u2192 rupture \u2192 hemorrhagic pancreatitis. (2) Pseudoaneurysm vs true aneurysm: true aneurysm involves all three vessel wall layers. Pseudoaneurysm = pulsatile hematoma contained by adventitia and perivascular tissue only \u2014 more prone to rupture. (3) Bleeding recognition in pancreatitis: sudden Hgb drop + hemodynamic instability in a patient with known pancreatitis = vascular complication until proven otherwise. CT angiography is the diagnostic and therapeutic gateway (can proceed directly to embolization). (4) Management: endovascular coil embolization first line \u2014 proximal and distal to the pseudoaneurysm (sandwich technique). Surgical ligation if embolization fails or patient unstable. (5) Recurrent alcoholic pancreatitis: three episodes = high risk for chronic pancreatitis (exocrine insufficiency \u2192 steatorrhea, malabsorption; endocrine insufficiency \u2192 brittle diabetes). Alcohol cessation is the only intervention that prevents progression."
    }
  }
};
