// Virtual EMR Case: Vocal Cord Dysfunction
// Variant: vocal-cord-dysfunction | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Alyssa Chen",
    "patientHPI": "I've been working with a speech therapist for the past few months learning breathing exercises after they found out what was causing my breathing problems when I kept going to the emergency room thinking I had asthma.",
    "dob": "10/22/2003",
    "age": 22,
    "sex": "Female",
    "mrn": "RDX-2025-82156",
    "pronouns": "She/Her",
    "insurance": "Aetna (parent plan)",
    "pcp": "Dr. Stephanie Wallace, MD",
    "pharmacy": "CVS Pharmacy — 1501 S Federal Hwy, Fort Lauderdale, FL",
    "language": "English",
    "race": "Asian",
    "address": "2975 Iris Blvd, Pittsburgh, PA 15210",
    "phone": "(954) 555-1394",
    "email": "alyssachen03@email.com",
    "emergencyContact": {
      "name": "Linda Chen (Mother)",
      "phone": "(954) 555-1408"
    }
  },
  "problems": [
    {
      "problem": "Paradoxical Vocal Fold Motion (Vocal Cord Dysfunction)",
      "icd": "J38.3",
      "onset": "2024",
      "status": "Active",
      "notes": "Diagnosed after multiple ED visits for dyspnea attributed to asthma; laryngoscopy confirmed paradoxical vocal fold adduction during episode"
    },
    {
      "problem": "Exercise-Induced Laryngeal Obstruction",
      "icd": "J38.3",
      "onset": "2024",
      "status": "Active",
      "notes": "Symptoms triggered by high-intensity exercise, anxiety, and strong scents"
    },
    {
      "problem": "Asthma, Mild Intermittent (Questionable)",
      "icd": "J45.20",
      "onset": "2020",
      "status": "Active",
      "notes": "Initially diagnosed but PFTs normal; methacholine challenge negative; likely misdiagnosis — VCD masquerading as asthma"
    },
    {
      "problem": "GERD",
      "icd": "K21.0",
      "onset": "2023",
      "status": "Active",
      "notes": "Contributing trigger for VCD episodes"
    },
    {
      "problem": "Generalized Anxiety Disorder",
      "icd": "F41.1",
      "onset": "2021",
      "status": "Active",
      "notes": "Performance anxiety; anxiety is a known VCD trigger"
    }
  ],
  "medications": [
    {
      "name": "Albuterol 90mcg INH PRN",
      "sig": "Inhale 2 puffs every 4-6 hours as needed for wheezing (limited benefit; primarily used pre-exercise)",
      "prescriber": "Dr. Wallace",
      "start": "03/2020",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth daily 30 minutes before breakfast",
      "prescriber": "Dr. Wallace",
      "start": "08/2023",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Escitalopram 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Wallace",
      "start": "06/2022",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Strong Perfumes/Fragrances",
      "type": "Environmental",
      "reaction": "Triggers VCD episodes — throat tightness, stridor",
      "severity": "Moderate",
      "verified": "Patient-reported"
    },
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
      "date": "02/08/2026",
      "bp": "118/72",
      "hr": 104,
      "rr": 24,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "125 lbs",
      "ht": "5'4\"",
      "bmi": 21.5,
      "setting": "ED"
    },
    {
      "date": "10/14/2025",
      "bp": "110/68",
      "hr": 72,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "124 lbs",
      "ht": "5'4\"",
      "bmi": 21.3,
      "setting": "Specialist"
    },
    {
      "date": "06/20/2025",
      "bp": "108/66",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "123 lbs",
      "ht": "5'4\"",
      "bmi": 21.1,
      "setting": "PCP Office"
    },
    {
      "date": "01/10/2025",
      "bp": "112/70",
      "hr": 98,
      "rr": 22,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "122 lbs",
      "ht": "5'4\"",
      "bmi": 20.9,
      "setting": "ED"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/14/2025",
      "type": "Specialist",
      "provider": "Dr. Sanjay Gupta, MD (Allergy/Immunology)",
      "cc": "VCD follow-up; speech therapy progress assessment",
      "hpi": "22-year-old female with confirmed VCD/PVFM diagnosed via laryngoscopy in 04/2025 after multiple ED visits for dyspnea with inspiratory stridor previously attributed to asthma. Has been working with speech-language pathologist (SLP) for 5 months learning laryngeal control therapy and rescue breathing techniques. Reports significant improvement — VCD episodes decreased from 3-4/month to approximately 1/month. Can now usually abort episodes with rescue breathing techniques within 2-3 minutes. Exercise triggers markedly improved; running again with warm-up protocol. Anxiety management with escitalopram and CBT ongoing. GERD controlled on omeprazole.",
      "exam": "General: NAD, well-appearing. HEENT: Oropharynx clear. No stridor at rest. Voice clear without dysphonia. Neck: Supple, no LAD. Lungs: CTAB, no wheezes; normal inspiratory and expiratory effort. No accessory muscle use.",
      "assessment": "1. VCD/PVFM — improving with laryngeal control therapy\n2. Exercise-induced laryngeal obstruction — improving with warm-up protocol\n3. Prior asthma diagnosis — likely misdiagnosis; methacholine challenge negative; consider removing from problem list\n4. GERD — controlled, contributing trigger\n5. GAD — managed with escitalopram and CBT",
      "plan": "1. Continue SLP sessions biweekly; plan to space to monthly in 2 months if continued improvement\n2. Continue rescue breathing techniques\n3. Albuterol PRN — counsel that benefit is limited for VCD; primarily useful if any component of bronchospasm\n4. Continue omeprazole, escitalopram\n5. Exercise: warm-up protocol before running; gradual intensity increase\n6. RTC 3 months"
    },
    {
      "id": "V002",
      "date": "06/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Stephanie Wallace, MD",
      "cc": "Annual wellness; VCD management update",
      "hpi": "22-year-old female for annual exam. VCD recently diagnosed after allergy/immunology referral and laryngoscopy. Starting speech therapy next week. Reports 2-3 episodes/month of acute throat tightness and inspiratory stridor, usually triggered by running or stressful situations. Albuterol provides minimal relief. Anxiety managed with escitalopram; seeing therapist for CBT. GERD improved on omeprazole. No other complaints. Good academic performance despite health challenges.",
      "exam": "General: NAD, healthy-appearing. HEENT: WNL. CV: RRR. Lungs: CTAB. Abdomen: Soft, NT/ND. Skin: Clear. Mental health: Affect appropriate, mildly anxious.",
      "assessment": "1. Annual wellness\n2. VCD — newly diagnosed, starting speech therapy\n3. GAD — stable on escitalopram/CBT\n4. GERD — controlled",
      "plan": "1. Support VCD management per allergy/immunology\n2. Continue escitalopram 10mg\n3. Continue omeprazole 20mg\n4. Immunizations up to date\n5. RTC 6 months or PRN"
    },
    {
      "id": "V003",
      "date": "01/10/2025",
      "type": "ED",
      "provider": "Dr. Karen Moy, MD (Emergency Medicine)",
      "cc": "Acute dyspnea, stridor, throat tightness after running",
      "hpi": "22-year-old female with 'asthma' presenting with acute-onset throat tightness, difficulty breathing, and audible stridor during cross-country practice. Episode started mid-run during cold weather. Unable to 'get air in.' Coach called 911. On arrival: visible distress, inspiratory stridor, but O2 saturation 99%. Prior episodes treated as asthma exacerbations with nebulizers — minimal improvement. Reports this is her 4th ED visit in 6 months for similar presentations. Not on controller inhaler; albuterol PRN provides minimal relief. No URI symptoms, no fever, no cough.",
      "exam": "General: Anxious, in visible respiratory distress with inspiratory stridor. Speaking in full sentences between episodes of stridor. Lungs: Paradoxically, lung fields clear bilaterally with no wheezing. Upper airway stridor heard without stethoscope during episodes. CV: Tachycardic but regular. O2 sat: 98-99% on RA (inconsistent with severity of apparent respiratory distress). Throat: No swelling, no erythema.",
      "assessment": "1. Acute dyspnea with stridor — presentation atypical for asthma: clear lungs, preserved O2 saturation, inspiratory stridor, minimal response to bronchodilators\n2. High suspicion for vocal cord dysfunction/paradoxical vocal fold motion\n3. Differential includes laryngospasm, anaphylaxis (no hives/swelling/hypotension)",
      "plan": "1. Heliox administered — rapid improvement in symptoms\n2. Albuterol nebulizer — minimal additional benefit\n3. Coached calm breathing with prolonged exhalation — symptoms resolved in 15 minutes\n4. Discussed likely VCD diagnosis with patient\n5. Referral to allergy/immunology for laryngoscopy and formal evaluation\n6. Discharge in good condition; PCP follow-up"
    }
  ],
  "labs": [
    {
      "date": "02/08/2026",
      "time": "17:30",
      "orderedBy": "Dr. Karen Moy, MD (ED)",
      "collected": "02/08/2026 17:10",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-020840",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "7.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Eosinophils",
              "value": "2",
              "unit": "%",
              "range": "1-4",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.6",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "40.8",
              "unit": "%",
              "range": "36.0-46.0",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "234",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "88",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "140",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.1",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "103",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "25",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "12",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.7",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/10/2025",
      "study": "CHEST XR PA AND LATERAL",
      "accession": "IMG-2025-01103",
      "status": "FINAL",
      "orderedBy": "Dr. Karen Moy, MD (ED)",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "22F with acute dyspnea and stridor. History of asthma. R/O pneumonia, pneumothorax, foreign body.",
      "technique": "PA and lateral views, upright.",
      "findings": "Heart: Normal size.\\n\\nLungs: Clear bilaterally. No consolidation, mass, or pleural effusion. No pneumothorax. No hyperinflation.\\n\\nAirway: Trachea midline. No subglottic narrowing. No radiopaque foreign body.\\n\\nBones: No acute fracture.",
      "impression": "1. Normal chest radiograph.\\n2. No acute cardiopulmonary process.\\n3. No evidence of airway foreign body or subglottic pathology.",
      "dictated": "01/10/2025 19:22",
      "verified": "01/10/2025 20:05"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/01/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-298",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2025-26)",
      "date": "10/18/2025",
      "site": "Right deltoid IM",
      "lot": "CV2025-770",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2021",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) (3/3)",
      "date": "2019",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    },
    {
      "vaccine": "Meningococcal ACWY (Menactra)",
      "date": "2021",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    }
  ],
  "familyHistory": [
    "Mother: Asthma, Anxiety disorder, alive at 50",
    "Father: GERD, Hypertension, alive at 53",
    "Brother: Healthy, age 19",
    "Maternal grandmother: COPD, alive at 74"
  ],
  "socialHistory": [
    [
      "Occupation",
      "College senior (exercise science major); part-time campus fitness center trainer"
    ],
    [
      "Marital",
      "Single"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Rare, 1-2 drinks at social events"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Competitive cross-country runner (limited by VCD); weight training 3x/week; using warm-up protocol"
    ],
    [
      "Housing",
      "University apartment with 1 roommate"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt always"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "vocal-cord-dysfunction",
    "diagnosis": "Vocal Cord Dysfunction (Paradoxical Vocal Fold Motion)",
    "acuity": 3,
    "presentation": "Allergic Reaction",
    "category": "pulmonary"
  },
  "teachingPoints": {
    "keyLearning": [
      "VCD/PVFM (paradoxical vocal fold motion) causes inspiratory stridor and dyspnea from paradoxical adduction of vocal folds during inspiration. It is frequently misdiagnosed as asthma — patients are often on unnecessary high-dose inhaled corticosteroids and bronchodilators.",
      "Key distinguishing features from asthma: stridor is predominantly INSPIRATORY (vs expiratory wheeze in asthma); truncated inspiratory loop on spirometry (vs scooped expiratory loop in asthma); bronchodilators have NO effect; attacks are often sudden-onset and terminate abruptly.",
      "Gold standard diagnosis: laryngoscopy during a symptomatic episode — shows paradoxical adduction of vocal folds with posterior glottic chinking. Flow-volume loops show flattened/truncated inspiratory loop (variable extrathoracic obstruction)."
    ],
    "boardPearls": [
      "VCD stridor: INSPIRATORY. Asthma wheeze: EXPIRATORY. Key clinical distinguisher.",
      "Spirometry in VCD: truncated inspiratory loop (variable extrathoracic obstruction). Asthma: scooped expiratory loop + reduced FEV₁/FVC.",
      "Triggers: exercise, strong odors, GERD, psychological stress, post-nasal drip, irritants.",
      "Diagnosis: laryngoscopy during episode (gold standard) OR provocation + laryngoscopy.",
      "Treatment: speech therapy (breathing techniques, laryngeal control exercises) = mainstay. Treat GERD/post-nasal drip triggers. Heliox for acute severe attacks.",
      "VCD + asthma: 30–50% of VCD patients also have asthma (comorbid, not alternative diagnosis). Treat both.",
      "Do NOT use epinephrine for VCD — it has no mechanism to work and delays correct treatment."
    ]
  },
  "guided": {
    "supported": true,
    "patientPersona": "Alyssa appears anxious but relieved to finally have an explanation for her symptoms after multiple ER visits. She's articulate and engaged, eager to discuss her recent speech therapy work, though still somewhat frustrated about the diagnostic journey and concerned about symptom management during her fitness training activities.",
    "interviewQuestions": [
      "Can you describe what your breathing difficulty feels like when it happens?",
      "What triggers these episodes of breathing trouble?",
      "Do the symptoms occur more with inspiration or expiration?",
      "How long do these episodes typically last?",
      "What makes the breathing difficulty better or worse?",
      "Have you noticed any relationship between stress and your symptoms?",
      "Do you experience any throat tightness or choking sensation?",
      "How often are you using your albuterol inhaler?",
      "Tell me about your work at the fitness center - do symptoms occur during exercise?",
      "Have you had any recent exposure to strong odors or irritants?",
      "What breathing exercises has your speech therapist taught you?",
      "Have you noticed any voice changes during episodes?",
      "Are you experiencing any heartburn or acid reflux symptoms lately?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking. Could you rephrase that?",
      "onset": "This started about 8 months ago. I'd suddenly feel like I couldn't breathe, especially when I was stressed or working out at the gym. I went to the ER three times thinking I was having severe asthma attacks.",
      "character": "It feels like my throat is closing up and I can't get air in. It's different from regular shortness of breath - it's like there's an obstruction right here in my throat. I make this weird wheezing sound when I try to breathe in.",
      "location": "The tightness is right here in my throat and upper chest area, not deep in my lungs like you'd expect with asthma.",
      "severity": "During an episode it's about an 8 out of 10 - really scary. I feel like I'm going to suffocate. Right now I'm fine, maybe a 2 just from talking about it and feeling a little anxious.",
      "aggravating": "Stress definitely makes it worse, intense exercise, and strong smells like cleaning products or perfumes. Sometimes it happens when I'm demonstrating exercises to clients at the gym.",
      "relieving": "The albuterol doesn't really help much, which confused everyone. The breathing exercises my speech therapist taught me work much better - focusing on breathing through my nose and relaxing my throat muscles.",
      "associated": "I get really anxious during episodes, my heart races, and sometimes I feel dizzy. My voice gets hoarse afterward, and I have this feeling like something is stuck in my throat.",
      "denies": "I don't have chest pain, no cough with blood, no fever, and no swelling in my legs or face. I don't wheeze on breathing out, just on breathing in.",
      "history": "Like I mentioned, this has been going on for 8 months. The ER visits were really frustrating because they kept treating me for asthma, but I never really felt like that's what it was.",
      "medications": "Albuterol 90mcg INH PRN; Omeprazole 20mg daily; Escitalopram 10mg daily",
      "allergies": "Strong Perfumes/Fragrances",
      "family": "My mom has asthma and anxiety, so initially everyone thought I inherited her asthma. My dad has GERD, and my brother is healthy.",
      "social": "I'm a college senior majoring in exercise science and work part-time at the campus fitness center as a trainer. I've never smoked, rarely drink - maybe 1-2 drinks at social events. No drugs."
    },
    "examManeuvers": [
      "Vital signs assessment",
      "Pulmonary auscultation",
      "Upper airway inspection and palpation",
      "Neck examination for masses or lymphadenopathy",
      "Cardiovascular examination",
      "Speech and voice assessment",
      "Inspiratory stridor assessment",
      "Forced inspiratory maneuver",
      "Assessment during speech therapy breathing exercises",
      "Peak flow measurement if available"
    ],
    "examFindings": {
      "Vital signs assessment": "BP 118/72, HR 104, RR 18, Temp 98.4°F, SpO2 98% on room air - tachycardia present but other vitals stable",
      "Pulmonary auscultation": "Clear bilateral breath sounds, no wheezes, rales, or rhonchi in lung fields. No prolonged expiratory phase.",
      "Upper airway inspection and palpation": "Throat appears normal, no visible obstruction, no stridor at rest, trachea midline, no palpable masses",
      "Neck examination for masses or lymphadenopathy": "No cervical lymphadenopathy, no thyromegaly, no masses palpated",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs, rubs, or gallops, no peripheral edema",
      "Speech and voice assessment": "Voice slightly hoarse, able to speak in full sentences without distress currently",
      "Inspiratory stridor assessment": "Mild inspiratory stridor audible when patient demonstrates forced inspiration",
      "Forced inspiratory maneuver": "Patient demonstrates inspiratory difficulty with audible stridor when asked to take deep breath in quickly",
      "Assessment during speech therapy breathing exercises": "Symptoms improve with controlled nasal breathing and throat relaxation techniques patient demonstrates",
      "Peak flow measurement if available": "Peak flow within normal range for age and height, suggesting lower airway function is intact"
    },
    "ddxTargets": [
      "Vocal Cord Dysfunction (Paradoxical Vocal Fold Motion) (correct diagnosis)",
      "Exercise-induced asthma",
      "Anxiety-induced dyspnea/panic attacks",
      "Anaphylaxis or severe allergic reaction",
      "Foreign body aspiration",
      "Laryngeal edema or angioedema",
      "Asthma exacerbation"
    ],
    "biasFlags": {
      "anchoring": "Chief complaint of 'allergic reaction' may anchor thinking toward anaphylaxis or acute allergic processes, missing the chronic vocal cord dysfunction",
      "prematureClosure": "History of asthma diagnosis and albuterol use may lead to premature closure on asthma exacerbation without considering vocal cord dysfunction",
      "availabilityBias": "Recent cases of anaphylaxis or common presentations of asthma may overshadow the less common diagnosis of vocal cord dysfunction"
    },
    "coachPrompts": {
      "phase2": "The patient presents with 'allergic reaction' but has a complex pulmonary history. Before interviewing her, consider: What questions will help you distinguish between upper and lower airway pathology? How might anxiety and exercise relate to her presentation?",
      "phase5": "You've gathered significant history and exam findings. Notice the pattern of inspiratory stridor, poor response to albuterol, but improvement with speech therapy techniques. How does this constellation of findings help narrow your differential? What's the significance of the timing with stress and exercise?",
      "finalDebrief": "This case illustrates how vocal cord dysfunction can masquerade as asthma or allergic reactions. Key distinguishing features included inspiratory stridor, throat-focused symptoms, poor albuterol response, and improvement with breathing techniques. The chief complaint of 'allergic reaction' was likely triggered by fragrance exposure causing VCD symptoms. How will you remember to consider VCD in future patients with 'difficult to treat asthma'?",
      "final": "Diagnosis: vocal cord dysfunction (VCD, paradoxical vocal fold motion) — a respiratory condition that frequently mimics asthma. Key learning: (1) VCD is paradoxical adduction of the vocal cords during inspiration (and sometimes expiration), causing upper airway obstruction, dyspnea, stridor, and apparent respiratory distress. The condition is functional (not structural) and the larynx is anatomically normal between episodes. It commonly coexists with asthma (and is often misdiagnosed as refractory or severe asthma), anxiety, GERD, and postnasal drip. Triggers: exercise, strong odors, emotional stress, cold air, exposure to irritants. (2) Clinical features that distinguish VCD from asthma. (a) INSPIRATORY stridor/wheezing (asthma typically causes expiratory wheezing; VCD is predominantly inspiratory but can be biphasic). (b) Localized sensation — patients often point to their throat or neck as the site of 'tightness' rather than chest. (c) RAPID onset and offset — episodes start and end abruptly (asthma is more gradual). (d) Minimal response or no response to bronchodilators (key distinguishing feature — asthma typically responds). (e) Normal oxygenation even during severe-looking episodes (asthma usually has some hypoxia in severe attacks). (f) Voice changes — hoarseness, strained voice during or after episodes. (g) Frequent ED visits with 'severe asthma' but no consistent peak flow drops or clear response to standard therapy. (h) Often unremarkable PFTs between episodes; flow-volume loop during an episode shows TRUNCATED INSPIRATORY limb (extrathoracic obstruction pattern — normal expiratory limb, flattened inspiratory). (3) Diagnosis. Gold standard: LARYNGOSCOPY during symptomatic episode — shows paradoxical vocal cord adduction during inspiration. Provoking testing (e.g., exercise challenge with scope, methacholine challenge) may be needed because between episodes the larynx appears normal. PFT flow-volume loop may show truncation. Rule out structural lesions, anaphylaxis (especially with exercise), and true asthma (bronchodilator response, spirometry reversibility, FeNO). (4) Management. SPEECH-LANGUAGE PATHOLOGY (SLP) laryngeal control therapy is the cornerstone of treatment — rescue breathing techniques (pursed-lip breathing, sniffing, panting through the nose), posture, relaxation, and trigger management. Highly effective — most patients have dramatic reduction in episodes. Concurrent management: (a) Treat coexisting asthma, GERD, allergic rhinitis — often partially responsible for triggers. (b) Anxiety management (CBT, relaxation). (c) Botulinum toxin injection to vocal cords for refractory disease (rare). (d) Education — distinguishing VCD from asthma prevents over-medication (inhaled corticosteroids, systemic steroids, hospitalizations). For acute episodes: reassurance and breathing techniques. Heliox (helium-oxygen) can temporarily reduce inspiratory work in severe episodes. Avoid intubation when possible — often not needed despite dramatic appearance, and intubation can traumatize the larynx. (5) Classic pitfalls: (a) misdiagnosing VCD as 'severe asthma' — leads to inappropriate steroid use, excessive ED visits, and inhaler overreliance. (b) Intubating for an episode without recognizing VCD — can be difficult and can perpetuate the condition. (c) Not coordinating with SLP — specific laryngeal therapy is the highest-yield intervention. (d) Missing coexisting asthma — can occur concurrently; treat both. (e) Missing concurrent anxiety or panic disorder — often contributes to triggers; psychiatric care improves VCD. (f) Failing to educate the patient about the functional nature of the condition — many patients (and providers) find the diagnosis confusing or dismissive; clear explanation and connection to treatable nature is key."
    }
  }
};
