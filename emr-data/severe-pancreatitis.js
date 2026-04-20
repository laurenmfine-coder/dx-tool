
window.EMR_DATA = {
  "patient": {
    "name": "Sergio Moreno",
    "patientHPI": "This pain in my stomach is the worst thing I've ever felt - it's like someone is stabbing me right through to my back and I can't find any position that makes it better. I've been throwing up and I'm scared something is really wrong.",
    "dob": "06/20/1966",
    "age": "60",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-822543",
    "language": "English",
    "race": "Black/African American",
    "phone": "(415) 555-6023",
    "email": "sergio.moreno@email.com",
    "address": "2077 Larkspur Ln, Baltimore, MD 21216",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Michael Torres, DO",
    "pharmacy": "Walgreens \u2014 Pines Blvd",
    "emergencyContact": {
      "name": "Brenda Stewart",
      "phone": "(415) 555-4777",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Worst stomach pain of my life Epigastric \u2014 boring through to the back",
    "diagnosis": "Acute Necrotizing Pancreatitis (Gallstone-Induced)"
  },
  "problems": [
    {
      "problem": "Severe acute pancreatitis \u2014 BISAP score 4, organ failure",
      "icd": "K85.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Carmen Lopez, 48F \u2014 epigastric pain radiating to back, nausea x2 days. Lipase 4800. SIRS x2 criteria. Creatinine rising."
    },
    {
      "problem": "Gallstone pancreatitis \u2014 cholelithiasis on ultrasound",
      "icd": "K85.12",
      "onset": "2024",
      "status": "Active",
      "notes": "Gallstones on US + elevated bilirubin + elevated AST \u2014 gallstone migration through common bile duct is the trigger."
    },
    {
      "problem": "Acute kidney injury \u2014 prerenal from third-spacing and SIRS",
      "icd": "N17.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Creatinine 2.4 from baseline 0.9. Aggressive IVF resuscitation. Monitor urine output hourly."
    }
  ],
  "medications": [
    {
      "name": "Lactated Ringer's 250-500mL/h \u2014 aggressive IVF",
      "sig": "LR preferred over NS in pancreatitis \u2014 reduces acidosis and may reduce SIRS severity. Target urine output >0.5 mL/kg/h.",
      "prescriber": "GI/Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Morphine 2-4mg IV q4h PRN \u2014 pain control",
      "sig": "IV opioid for pain. Myth: morphine worsens pancreatitis via Sphincter of Oddi \u2014 not supported by evidence. Use appropriate analgesia.",
      "prescriber": "Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Early enteral nutrition \u2014 start NG feeds within 24-48h if unable to eat",
      "sig": "Enteral nutrition maintains gut barrier, reduces bacterial translocation, improves outcomes over TPN in severe pancreatitis. Do NOT make patient NPO for days.",
      "prescriber": "GI/Nutrition",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 NG feeds"
    },
    {
      "name": "ERCP \u2014 if choledocholithiasis confirmed or cholangitis develops",
      "sig": "Urgent ERCP within 24-48h if concurrent cholangitis (Charcot's triad) or biliary obstruction. Not indicated for predicted severe pancreatitis alone.",
      "prescriber": "GI",
      "start": "2024",
      "refills": 0,
      "status": "Hold \u2014 pending MRCP/clinical assessment"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "No Known Drug Allergies",
      "severity": "",
      "type": ""
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "06:40",
      "bp": "142/88",
      "hr": "112",
      "rr": "22",
      "temp": "38.0\u00b0C",
      "spo2": "94%",
      "pain": "10/10",
      "bmi": "25",
      "weight": "95 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Worst stomach pain of my life Epigastric \u2014 boring through to the back",
      "hpi": "Sergio Moreno is a 60-year-old male presenting with worst stomach pain of my life epigastric \u2014 boring through to the back. Past medical history includes Gallstones, Obesity, Hypertension, Type 2 Diabetes. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute Necrotizing Pancreatitis (Gallstone-Induced) \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Severe Pancreatitis Panel",
      "results": [
        {
          "test": "Lipase",
          "value": "4800",
          "unit": "U/L",
          "ref": "<60",
          "flag": "H"
        },
        {
          "test": "ALT",
          "value": "280",
          "unit": "U/L",
          "ref": "7-56",
          "flag": "H"
        },
        {
          "test": "Total bilirubin",
          "value": "3.4",
          "unit": "mg/dL",
          "ref": "0.1-1.2",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "2.4",
          "unit": "mg/dL",
          "ref": "0.7-1.3",
          "flag": "H"
        },
        {
          "test": "Hematocrit",
          "value": "48",
          "unit": "%",
          "ref": "36-48",
          "flag": ""
        },
        {
          "test": "WBC",
          "value": "18.2",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": "H"
        },
        {
          "test": "Calcium",
          "value": "7.4",
          "unit": "mg/dL",
          "ref": "8.5-10.5",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CT Abdomen/Pelvis With Contrast \u2014 CECT",
      "indication": "Severe pancreatitis \u2014 necrosis assessment",
      "findings": "Pancreatic edema and peripancreatic fat stranding. 30% pancreatic necrosis. No abscess. Gallstones in gallbladder. Common bile duct 7mm \u2014 mild dilation.",
      "impression": "Moderate-severe necrotizing pancreatitis from gallstones. CTSI (CT Severity Index) 6/10. CBD dilation \u2014 MRCP to assess for choledocholithiasis."
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
    "Mother: gallstones and cholecystectomy",
    "Father: pancreatitis (alcohol-related)"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Social \u2014 1-2 drinks per week (not a heavy drinker)"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Bank teller"
    ],
    [
      "Living",
      "Lives with family"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Sergio appears visibly distressed and diaphoretic, holding his abdomen and frequently shifting positions despite stating nothing helps. He is cooperative but anxious, speaking in short sentences interrupted by grimaces of pain. His obvious discomfort and fear that 'something is really wrong' makes him forthcoming about his symptoms as he desperately wants relief.",
    "interviewQuestions": [
      "When did this pain start and how did it begin?",
      "Can you describe the quality or character of the pain?",
      "Where exactly is the pain located and does it go anywhere else?",
      "On a scale of 1-10, how severe is this pain?",
      "What makes the pain worse?",
      "Have you found anything that helps the pain?",
      "Are you experiencing any nausea, vomiting, or other symptoms?",
      "Have you had any similar episodes of pain before?",
      "What medications are you currently taking?",
      "Do you have any known allergies?",
      "Have you eaten anything unusual or had any alcohol recently?",
      "Does anyone in your family have similar stomach problems?",
      "Do you smoke or drink alcohol regularly?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing because of this pain. Can you repeat that?",
      "onset": "It started about 6 hours ago, right after I finished dinner. It came on suddenly and has just gotten worse and worse.",
      "character": "It's a deep, boring pain - like someone is drilling right through me from my stomach to my back. It's constant and severe.",
      "location": "It's right here in my upper stomach area, but it goes straight through to my back. The back pain is almost as bad as the front.",
      "severity": "This is definitely a 10 out of 10. I've never felt pain like this in my life. I can't even think straight.",
      "aggravating": "Lying flat makes it worse, and eating or even thinking about food makes me feel sick. Moving around doesn't really change it much.",
      "relieving": "I've tried everything - sitting, lying down, walking around, antacids - absolutely nothing helps. Nothing.",
      "associated": "I've been throwing up several times, and I feel nauseous and sweaty. I also feel like I have a fever.",
      "denies": "I haven't had any chest pain, shortness of breath, or diarrhea. No blood in my vomit.",
      "history": "I've had some stomach discomfort before related to my gallstones, but nothing even close to this severe.",
      "medications": "Metformin; Amlodipine",
      "allergies": "NKDA",
      "family": "My mother had gallstones and needed her gallbladder removed, and my father actually had pancreatitis from drinking, but I'm not a heavy drinker like he was.",
      "social": "I work as a bank teller, live with my family. I don't smoke and only have 1-2 drinks per week socially. No drugs."
    },
    "examManeuvers": [
      "General appearance and vital signs",
      "Abdominal inspection",
      "Epigastric palpation",
      "Murphy's sign",
      "Cullen's sign",
      "Grey Turner's sign",
      "Bowel sounds auscultation",
      "Costovertebral angle tenderness",
      "Cardiovascular examination",
      "Pulmonary examination"
    ],
    "examFindings": {
      "General appearance and vital signs": "Patient appears acutely ill, diaphoretic, and in significant distress. Positioned leaning forward. BP 142/88, HR 112, Temp 38.0\u00b0C, SpO2 94%",
      "Abdominal inspection": "Abdomen appears mildly distended, no obvious masses or discoloration visible",
      "Epigastric palpation": "Severe epigastric tenderness with guarding, patient winces and pulls away with gentle palpation",
      "Murphy's sign": "Negative - no arrest of inspiration with palpation under right costal margin",
      "Cullen's sign": "Negative - no periumbilical discoloration",
      "Grey Turner's sign": "Negative - no flank discoloration",
      "Bowel sounds auscultation": "Hypoactive bowel sounds throughout all quadrants",
      "Costovertebral angle tenderness": "No costovertebral angle tenderness bilaterally",
      "Cardiovascular examination": "Tachycardic regular rhythm, no murmurs, rubs, or gallops",
      "Pulmonary examination": "Clear to auscultation bilaterally, no respiratory distress"
    },
    "ddxTargets": [
      "Gallstone pancreatitis \u2014 lipase 4800, elevated AST/bilirubin, gallstones on US (correct)",
      "Alcoholic pancreatitis \u2014 no alcohol history; AST/bilirubin pattern more consistent with biliary",
      "Hypertriglyceridemia pancreatitis \u2014 triglycerides normal",
      "Peptic ulcer perforation \u2014 lipase can rise, but free air; this is pancreatitis pattern",
      "Mesenteric ischemia \u2014 lactate normal; different pain pattern; lipase distinguishes",
      "ERCP-induced pancreatitis \u2014 no prior ERCP"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on gallstone history and assuming cholecystitis despite negative Murphy's sign and atypical pain radiation pattern",
      "prematureClosure": "May stop thinking after identifying epigastric pain and nausea without considering the specific boring quality and back radiation that suggests pancreatic involvement",
      "availabilityBias": "Recent cases of GERD or peptic ulcer disease might overshadow consideration of less common but more serious pancreatic pathology"
    },
    "coachPrompts": {
      "phase2": "Looking at your differential diagnosis, I see you're thinking about several abdominal conditions. What specific historical questions would help you differentiate between cholecystitis, pancreatitis, and peptic ulcer disease? Think about the classic presentations and what makes each condition unique.",
      "phase5": "Now that you've completed your history and physical, let's think through your findings systematically. You noted severe epigastric pain radiating to the back, negative Murphy's sign, and a family history of both gallstones and pancreatitis. How do these findings help refine your differential diagnosis?",
      "finalDebrief": "This case illustrates how acute pancreatitis can present with classic boring epigastric pain radiating to the back. Notice how the family history of both gallstones and pancreatitis provided important clues, but the specific pain character and radiation pattern, along with the negative Murphy's sign, helped differentiate this from cholecystitis. What key diagnostic tests would you want to confirm this diagnosis?",
      "final": "Diagnosis: severe gallstone pancreatitis. Key learning: (1) BISAP score (Bedside Index of Severity in Acute Pancreatitis): BUN >25 (+1), Impaired mental status (+1), SIRS criteria \u22652 (+1), Age >60 (+1), Pleural effusion (+1). Score 3-5 = high mortality risk (>15%). This patient: BISAP 4 = severe. (2) Etiology distinction: gallstone = elevated liver enzymes (ALT >3x normal is 95% PPV for gallstones), elevated bilirubin, gallstones on imaging, no alcohol history. ALT >150 IU/L in pancreatitis \u2192 gallstones until proven otherwise. (3) Aggressive fluid resuscitation: 250-500mL/h of LR for first 24h \u2014 reduces pancreatic microcirculation ischemia and systemic SIRS. LR preferred over NS (reduces acidosis). Reassess q4-6h for response. Stop if signs of fluid overload. (4) Enteral nutrition myth: patients with pancreatitis should NOT be kept strictly NPO for days. Early enteral feeding (within 24-48h via NG if unable to eat) reduces complications, maintains gut barrier, reduces infectious complications, and improves outcomes compared to TPN. (5) Antibiotics: NOT indicated for sterile pancreatic necrosis prophylactically. Reserve antibiotics for infected necrosis (fever + CT findings + FNA-positive culture) or concurrent cholangitis. Prophylactic antibiotics do not reduce mortality in pancreatitis."
    }
  },
  "meta": {
    "diagnosis": "Severe Acute Pancreatitis \u2014 Gallstone Etiology, BISAP Score 4, ICU-Level Management",
    "caseId": "severe-pancreatitis"
  }
};
