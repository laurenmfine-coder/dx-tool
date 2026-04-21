
window.EMR_DATA = {
  "patient": {
    "name": "Roberto Delgado",
    "patientHPI": "I've been managing pretty well with my breathing problems and heart condition since I quit smoking a few years ago. I can walk about two blocks before I get short of breath, which is about the same as usual. I use my daily inhaler and the rescue one a few times a week when I need it.",
    "dob": "02/19/1962",
    "age": 62,
    "sex": "Male",
    "mrn": "RDX-2025-39847",
    "pronouns": "He/Him",
    "insurance": "Medicare Part A/B + Humana Medicare Advantage",
    "pcp": "Dr. Silvia Herrera, MD",
    "pharmacy": "CVS Pharmacy \u2014 6350 Stirling Rd, Hollywood, FL",
    "language": "English, Spanish",
    "race": "Hispanic",
    "address": "4151 Mulberry St, Phoenix, AZ 85012",
    "phone": "(954) 555-7741",
    "email": "r.delgado62@email.com",
    "emergencyContact": {
      "name": "Maria Delgado (Wife)",
      "phone": "(954) 555-7756"
    }
  },
  "problems": [
    {
      "problem": "Flail chest \u2014 right-sided, \u22653 rib fractures x 2 levels",
      "icd": "S22.5XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "David Park, 45M \u2014 restrained driver, high-speed MVA. Paradoxical chest wall movement right hemithorax, severe pain, SpO2 88%. CXR: multiple right rib fractures 4-8 in two places. CT: right pulmonary contusion."
    },
    {
      "problem": "Pulmonary contusion \u2014 underlying lung injury",
      "icd": "S27.321A",
      "onset": "2024",
      "status": "Active",
      "notes": "Pulmonary contusion underlies flail chest and is the primary driver of hypoxemia \u2014 not the paradoxical motion. Contusion worsens over 24-48 hours (edema maximal at 48h). Anticipate worsening."
    },
    {
      "problem": "Pain management \u2014 critical for respiratory mechanics",
      "icd": "S22.5XXA",
      "onset": "2024",
      "status": "Active",
      "notes": "Pain \u2192 splinting \u2192 reduced tidal volumes \u2192 atelectasis \u2192 pneumonia. Epidural analgesia or multimodal pain control is critical to allow deep breathing and prevent respiratory failure."
    }
  ],
  "medications": [
    {
      "name": "High-flow O2 via NRB mask \u2192 HFNC \u2192 BiPAP escalation",
      "sig": "Target SpO2 >94%. Start high-flow O2. If SpO2 not maintained or work of breathing increasing \u2192 HFNC (40-60L/min, FiO2 0.6). BiPAP for respiratory fatigue. Intubate if failing NIV.",
      "prescriber": "Trauma Surgery/Critical Care",
      "start": "2024",
      "refills": 0,
      "status": "HFNC initiated"
    },
    {
      "name": "Thoracic epidural analgesia \u2014 pain control",
      "sig": "Epidural analgesia is gold standard for flail chest pain management. Reduces need for intubation, reduces pneumonia rates, shortens ICU stay. T4-T6 epidural placement.",
      "prescriber": "Anesthesia/Trauma Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Placed \u2014 T5 epidural"
    },
    {
      "name": "Rib fixation (surgical stabilization) \u2014 consider for severe flail",
      "sig": "ORIF of rib fractures for large flail segments reduces ventilator days, ICU stay, and pneumonia. Best evidence in patients already requiring mechanical ventilation. Thoracic surgery consultation.",
      "prescriber": "Thoracic Surgery",
      "start": "2024",
      "refills": 0,
      "status": "Considering \u2014 thoracic surgery consulted"
    }
  ],
  "allergies": [
    {
      "allergen": "Codeine",
      "type": "Drug",
      "reaction": "Nausea, vomiting",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "Iodinated contrast dye",
      "type": "Drug",
      "reaction": "Urticaria",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/08/2025",
      "bp": "132/78",
      "hr": 68,
      "rr": 18,
      "temp": "98.4\u00b0F",
      "spo2": "94%",
      "wt": "168 lbs",
      "ht": "5'8\"",
      "bmi": 25.5,
      "setting": "PCP Office"
    },
    {
      "date": "07/15/2024",
      "bp": "136/82",
      "hr": 72,
      "rr": 18,
      "temp": "98.6\u00b0F",
      "spo2": "93%",
      "wt": "170 lbs",
      "ht": "5'8\"",
      "bmi": 25.8,
      "setting": "PCP Office"
    },
    {
      "date": "01/10/2024",
      "bp": "128/76",
      "hr": 70,
      "rr": 16,
      "temp": "98.2\u00b0F",
      "spo2": "95%",
      "wt": "172 lbs",
      "ht": "5'8\"",
      "bmi": 26.1,
      "setting": "PCP Office"
    },
    {
      "date": "07/20/2023",
      "bp": "138/84",
      "hr": 74,
      "rr": 18,
      "temp": "98.8\u00b0F",
      "spo2": "93%",
      "wt": "174 lbs",
      "ht": "5'8\"",
      "bmi": 26.5,
      "setting": "Urgent Care"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/08/2025",
      "type": "Primary Care",
      "provider": "Dr. Silvia Herrera, MD",
      "cc": "Chronic disease follow-up: COPD, CAD, osteoporosis",
      "hpi": "62-year-old male with COPD (GOLD II), CAD s/p LAD stent (2019), and osteoporosis presenting for routine follow-up. Reports stable exertional dyspnea \u2014 can walk 2 blocks before SOB. Using tiotropium daily and albuterol PRN (2-3x/week). Denies chest pain. Continues to abstain from smoking since 2019. Taking all medications as prescribed including alendronate. No falls. Mild bilateral knee pain with prolonged walking.",
      "exam": "General: Thin male, appears stated age, NAD. HEENT: PERRL, EOMI. CV: RRR, no murmurs or gallops. Lungs: Diminished breath sounds at bases bilaterally, scattered expiratory wheezes, no crackles. Abdomen: Soft, NT/ND. Extremities: No edema. MSK: Mild kyphosis. Neuro: A&O x3.",
      "assessment": "1. COPD (moderate) \u2014 stable, 2 exacerbations in past year\n2. CAD s/p PCI \u2014 stable on DAPT and statin\n3. Osteoporosis \u2014 on bisphosphonate therapy; no new fractures\n4. Tobacco cessation \u2014 maintained",
      "plan": "1. Continue tiotropium and albuterol PRN; pulmonary rehab referral\n2. Continue DAPT, metoprolol, atorvastatin; cardiology follow-up due\n3. Continue alendronate; repeat DEXA in 2 years\n4. Influenza and pneumococcal vaccines current\n5. RTC 4 months"
    },
    {
      "id": "V002",
      "date": "07/20/2023",
      "type": "Urgent Care",
      "provider": "Dr. James Patel, MD",
      "cc": "Worsening cough, SOB x 5 days",
      "hpi": "62-year-old male with COPD presenting with 5-day history of increased productive cough with yellow-green sputum and worsening dyspnea. Using albuterol every 3-4 hours with partial relief. Low-grade fever 99.8\u00b0F at home. Denies hemoptysis or chest pain.",
      "exam": "General: Mild respiratory distress, speaking in full sentences. Lungs: Diffuse expiratory wheezes bilaterally, prolonged expiratory phase. CV: Tachycardic, regular. SpO2 93% on RA.",
      "assessment": "1. Acute COPD exacerbation, likely infectious trigger",
      "plan": "1. Prednisone 40mg x 5 days\n2. Azithromycin 250mg x 5 days (Z-pack)\n3. Increase albuterol frequency\n4. Follow-up with PCP in 5-7 days\n5. Return precautions: worsening dyspnea, fever >101\u00b0F, chest pain"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Flail Chest Assessment",
      "results": [
        {
          "test": "SpO2",
          "value": "88",
          "unit": "% on 15L NRB",
          "ref": "\u226595%",
          "flag": "L"
        },
        {
          "test": "ABG \u2014 pH",
          "value": "7.32",
          "unit": "",
          "ref": "7.35-7.45",
          "flag": "L"
        },
        {
          "test": "ABG \u2014 pO2",
          "value": "58",
          "unit": "mmHg",
          "ref": "\u226580",
          "flag": "L"
        },
        {
          "test": "ABG \u2014 pCO2",
          "value": "52",
          "unit": "mmHg",
          "ref": "35-45 (rising \u2014 fatigue)",
          "flag": "H"
        },
        {
          "test": "Hemoglobin",
          "value": "10.8",
          "unit": "g/dL",
          "ref": "13.5-17.5",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "CT Chest",
      "findings": "Fractures ribs 4-8 right, two levels each (flail segment). Right pulmonary contusion involving lower lobe. Small right pneumothorax (15%). No hemothorax. No aortic injury. Mediastinum normal.",
      "impression": "Flail chest with pulmonary contusion. Small right pneumothorax may require observation vs chest tube. Thoracic surgery."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "09/28/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD198",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/15/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-912",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumovax 23 (PPSV23)",
      "date": "03/2023",
      "site": "Left deltoid IM",
      "lot": "PN23-445",
      "mfr": "Merck"
    },
    {
      "vaccine": "Prevnar 20 (PCV20)",
      "date": "01/2023",
      "site": "Left deltoid IM",
      "lot": "PV20-112",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "06/2022",
      "site": "Left deltoid IM",
      "lot": "SX22-334",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "08/2022",
      "site": "Left deltoid IM",
      "lot": "SX22-501",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Father: COPD, lung cancer \u2014 deceased at 68",
    "Mother: HTN, T2DM, alive at 84",
    "Brother: MI at age 58, alive",
    "Sister: No significant medical history, age 56"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired auto mechanic (retired 2023)"
    ],
    [
      "Marital",
      "Married"
    ],
    [
      "Tobacco",
      "Former: 40 pack-years (1 PPD x 40 yrs); quit 06/2019"
    ],
    [
      "Alcohol",
      "Occasional \u2014 1-2 beers/week"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walking 20 min daily; limited by dyspnea"
    ],
    [
      "Housing",
      "Lives with wife in single-family home"
    ],
    [
      "Safety",
      "Denies IPV; wears seatbelt"
    ],
    [
      "Advance Directive",
      "POLST on file \u2014 Full code"
    ]
  ],
  "meta": {
    "caseId": "flail-chest",
    "diagnosis": "Flail Chest \u2014 Paradoxical Chest Wall Movement, Pulmonary Contusion",
    "acuity": 1,
    "presentation": "Trauma",
    "category": "trauma"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Roberto Delgado appears critically ill and in severe distress. They are cooperative but answers are brief due to pain or respiratory compromise. Family members may be at bedside providing additional history.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did trauma start?",
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
      "onset": "'The symptoms started I've been managing pretty well with my breathing problems and heart condition si.'",
      "character": "'It's trauma \u2014 it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Flail Chest.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Tiotropium 18mcg inhaler daily; Albuterol MDI 90mcg 2 puffs PRN; Aspirin 81mg daily; Clopidogrel 75mg daily; Metoprolol Succinate 50mg daily; Atorvastatin 80mg QHS; Alendronate 70mg weekly; Omeprazole 20mg daily.'",
      "allergies": "'My allergies are Codeine, Iodinated contrast dye.'",
      "family": "Father: COPD, lung cancer \u2014 deceased at 68  Mother: HTN, T2DM, alive at 84  Brother: MI at age 58, alive",
      "social": "Occupation: Retired auto mechanic (retired 2023)  Marital: Married  Tobacco: Former: 40 pack-years (1 PPD x 40 yrs); quit 06/2019  Alcohol: Occasional \u2014 1-2 beers/week  Drugs: Denies"
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
      "General appearance and level of distress": "Clinical finding consistent with Flail Chest. Document specifically what you observe.",
      "Vital signs review": "Clinical finding consistent with Flail Chest. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Flail Chest. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Flail Chest. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Flail Chest. Document specifically what you observe.",
      "Extremity assessment": "Clinical finding consistent with Flail Chest. Document specifically what you observe.",
      "Skin examination": "Clinical finding consistent with Flail Chest. Document specifically what you observe.",
      "Targeted system examination": "Clinical finding consistent with Flail Chest. Document specifically what you observe."
    },
    "ddxTargets": [
      "Flail chest with pulmonary contusion (correct)",
      "Simple multiple rib fractures \u2014 no paradoxical movement; no flail segment; pain management predominant",
      "Pneumothorax causing respiratory distress \u2014 absent breath sounds; tracheal deviation; needle decompression",
      "Hemothorax \u2014 dull to percussion; CXR opacification; chest tube",
      "Diaphragmatic injury \u2014 unusual chest movement; bowel sounds in chest; CXR"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Flail Chest, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Flail Chest, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Flail Chest based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Roberto Delgado's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Flail Chest. How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?",
      "final": "Diagnosis: flail chest with pulmonary contusion. Key learning: (1) Flail chest definition: \u22653 consecutive ribs fractured in \u22652 places creating a free-floating segment that moves paradoxically (IN on inspiration, OUT on expiration \u2014 opposite of normal chest wall). The diagnosis is clinical. (2) Hypoxemia in flail chest is primarily from pulmonary contusion, not paradoxical motion: the underlying lung injury is what drives respiratory failure. Pulmonary contusion worsens over 24-48 hours as edema peaks \u2014 anticipate respiratory deterioration in the first 48 hours. (3) Pain control is critical: pain \u2192 respiratory splinting \u2192 reduced tidal volumes \u2192 atelectasis \u2192 pneumonia. Thoracic epidural provides superior analgesia, reduces pneumonia, and reduces need for intubation. Avoid opioids alone (respiratory depression). (4) Avoid excessive IV fluids: pulmonary contusion + over-hydration = worsening hypoxemia (damaged lung takes up fluid preferentially). Restrictive fluid strategy. (5) Indications for intubation: SpO2 <90% despite HFNC/NIV, rising pCO2 with fatigue, GCS <9, severe associated injuries. Rib fixation (ORIF): evidence supports in mechanically ventilated patients with large flail segments \u2014 reduces ventilator days and ICU stay."
    }
  }
};
