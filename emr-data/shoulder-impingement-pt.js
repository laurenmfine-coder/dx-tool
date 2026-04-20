
window.EMR_DATA = {
  "patient": {
    "name": "Diego Reyes",
    "dob": "04/22/1996",
    "age": 28,
    "sex": "Male",
    "mrn": "RDX-2025-63194",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Sandra Kim, MD",
    "pharmacy": "CVS Pharmacy — 5100 Pines Blvd, Pembroke Pines, FL",
    "language": "English",
    "chiefComplaint": "Right shoulder pain with overhead activities, 3 months, worse with pitching",
    "race": "Hispanic or Latino",
    "address": "2244 SW 82nd Ave, Miramar, FL 33025",
    "phone": "(954) 555-7741",
    "email": "dreyes96@gmail.com",
    "emergencyContact": {"name": "Maria Reyes (Mother)", "phone": "(954) 555-8820"}
  },
  "problems": [
    {"problem": "Right shoulder impingement syndrome", "icd": "M75.1", "onset": "2024", "status": "Active", "notes": "Recreational softball pitcher, overhead athlete"},
    {"problem": "Mild hypertension — white coat, monitoring", "icd": "R03.0", "onset": "2023", "status": "Active", "notes": "Multiple readings borderline elevated in clinic"}
  ],
  "medications": [
    {"name": "Ibuprofen 600mg TID with food PRN", "sig": "Take 1 tablet three times daily with food as needed for pain, max 10 days", "prescriber": "Dr. Kim", "start": "09/2024", "refills": 0, "status": "Active"}
  ],
  "allergies": [
    {"allergen": "No known drug allergies", "type": "Drug", "reaction": "None", "severity": "N/A", "verified": "Yes"}
  ],
  "vitals": [
    {"date": "11/05/2024", "bp": "128/78", "hr": 68, "rr": 14, "temp": "98.2°F", "spo2": "100%", "wt": "185 lbs", "ht": "5'10\"", "bmi": 26.6, "setting": "PT Clinic"},
    {"date": "09/18/2024", "bp": "132/82", "hr": 72, "rr": 14, "temp": "98.4°F", "spo2": "99%", "wt": "185 lbs", "ht": "5'10\"", "bmi": 26.6, "setting": "PCP Office"},
    {"date": "03/10/2023", "bp": "126/76", "hr": 65, "rr": 14, "temp": "98.2°F", "spo2": "100%", "wt": "182 lbs", "ht": "5'10\"", "bmi": 26.1, "setting": "PCP Office"}
  ],
  "visits": [
    {"date": "09/18/2024", "type": "Office", "provider": "Dr. Sandra Kim, MD", "summary": "Right shoulder pain in overhead athlete, 8 weeks duration at that point. Neer and Hawkins tests positive. Imaging ordered.", "assessment": "Right shoulder impingement syndrome, likely subacromial. No clinical signs of rotator cuff tear. MRI without contrast ordered to evaluate rotator cuff integrity.", "plan": "PT referral placed. Ibuprofen PRN. Activity modification — reduce pitching. Return if worsening or no improvement in 6 weeks."},
    {"date": "10/02/2024", "type": "Office", "provider": "Dr. Kim / Radiology", "summary": "MRI results reviewed with patient.", "assessment": "MRI right shoulder: Grade 1 supraspinatus tendinopathy without full-thickness tear. Mild subacromial bursal thickening. No labral pathology. Consistent with impingement syndrome.", "plan": "Proceed with PT. Discussed prognosis — good for conservative management. Corticosteroid injection discussed, deferred pending PT trial."}
  ],
  "labs": [],
  "imaging": [
    {"date": "09/25/2024", "study": "MRI Right Shoulder Without Contrast", "indication": "Right shoulder pain, impingement, overhead athlete", "findings": "Supraspinatus tendon: Grade 1 tendinopathy with mild increased T2 signal at the critical zone. No full-thickness or partial-thickness tear identified. Subacromial bursa: mild effusion and thickening, 4mm. AC joint: mild degenerative changes, no downsloping acromion. Biceps tendon: intact, no tenosynovitis. Glenohumeral joint: normal. Labrum: intact, no tear or fraying.", "impression": "Grade 1 supraspinatus tendinopathy with mild subacromial bursitis. No rotator cuff tear. Findings consistent with impingement syndrome."}
  ],
  "immunizations": [
    {"vaccine": "Influenza", "date": "10/2024", "lot": "V8833A", "site": "Left deltoid"},
    {"vaccine": "COVID-19 booster", "date": "09/2023", "lot": "FA4291", "site": "Left deltoid"}
  ],
  "familyHistory": [
    {"relation": "Father", "condition": "Rotator cuff repair at age 52, hypertension", "age": "55"},
    {"relation": "Mother", "condition": "Osteoarthritis", "age": "52"}
  ],
  "socialHistory": {
    "smoking": "Never smoker",
    "alcohol": "Social — 4-5 drinks/week",
    "drugs": "Denies",
    "occupation": "High school science teacher, coaches youth baseball on weekends",
    "exercise": "Recreational softball 2x/week (pitcher), gym 3x/week — bench press and overhead pressing",
    "diet": "Balanced, protein-focused",
    "livingArrangement": "Single, lives alone in apartment"
  },
  "meta": {
    "caseId": "shoulder-impingement-pt",
    "diagnosis": "Right Shoulder Subacromial Impingement Syndrome with Supraspinatus Tendinopathy",
    "acuity": 3,
    "presentation": "Shoulder Pain",
    "category": "musculoskeletal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Diego is a motivated, athletic young man who is frustrated that shoulder pain has limited his softball game and gym workouts for 3 months. He's eager to understand what's wrong and what he can do to fix it. He tends to be impatient and asks 'how long will this take?' He has continued overhead pressing at the gym despite the pain because 'it doesn't seem to make it worse during'.",
    "interviewQuestions": [
      "Tell me about your shoulder pain — when did it start and what were you doing?",
      "What activities make the pain worse?",
      "Does the pain occur at night or at rest, or only with activity?",
      "On a scale of 1-10, what is your pain with pitching? With daily activities?",
      "Have you had any weakness in the shoulder — dropping things, difficulty lifting?",
      "Have you had any numbness or tingling down your arm?",
      "Are you still pitching and doing overhead gym work?",
      "What positions are most painful — reaching overhead, behind your back, across your body?",
      "Has anyone looked at your pitching mechanics recently?",
      "Have you had any prior shoulder injuries or surgery?",
      "What treatments have you tried — ice, ibuprofen, rest?",
      "What are your goals — return to softball, specific gym lifts, both?",
      "How does this affect your daily life — getting dressed, reaching for things?",
      "Any stiffness in the morning or after sitting still?"
    ],
    "patientResponses": {
      "default": "'It's the shoulder — mainly when I'm throwing or reaching up.'",
      "when it started": "'About 3 months ago, during a softball game. I was pitching and felt a sharp pain in my right shoulder mid-game. Played through it but it got worse over the next few weeks.'",
      "what makes it worse": "'Pitching is the worst. Anything overhead really — reaching for top shelves, overhead press at the gym, washing my hair. Also reaching across my body.'",
      "pain at rest": "'No, not really. At night sometimes if I roll onto my right side it wakes me up, but during the day it's fine unless I do something with it.'",
      "weakness": "'I don't think so... maybe a little? My pitching speed has dropped. But I'm not dropping things or anything like that.'",
      "numbness tingling": "'No, nothing like that.'",
      "still pitching": "'I skipped two weeks but then went back. Coach needed me. I also kept doing overhead press at the gym — it doesn't really hurt DURING, just after.'",
      "most painful position": "'Reaching straight up overhead is probably worst. Also that position where your arm is sort of out to the side and you try to reach back, like the late cocking phase of a throw.'",
      "mechanics": "'No one's checked. I've pitched the same way for years.'",
      "prior injury": "'No previous shoulder problems.'",
      "treatments tried": "'I've been taking ibuprofen, which helps some. Iced it a few times. Tried to rest it for two weeks but couldn't stay away from the gym.'",
      "goals": "'I want to pitch again — we have playoffs in 6 weeks. And I want to bench press and overhead press without pain.'",
      "pain rating": "'Pitching: 7/10 at worst. Daily stuff like getting dressed: 2-3/10.'"
    },
    "examManeuvers": [
      "Posture assessment — forward head, rounded shoulders, scapular winging",
      "Active ROM — shoulder flexion, abduction, IR, ER, horizontal adduction",
      "Passive ROM — assess end-feel, compare bilateral",
      "Neer impingement test — passive forward flexion with internal rotation",
      "Hawkins-Kennedy test — forward flexion 90°, internal rotation",
      "Empty can test (Jobe) — supraspinatus strength/integrity",
      "Full can test — supraspinatus strength, compare to empty can",
      "External rotation strength — L vs R comparison, 0° and 90° abduction",
      "Drop arm test — full thickness rotator cuff tear screening",
      "Scapular stabilizer strength — serratus anterior, lower trapezius",
      "Scapulohumeral rhythm assessment during arm elevation",
      "Posterior shoulder tightness — cross-body adduction, horizontal adduction ROM"
    ],
    "examFindings": {
      "Posture": "Bilateral forward head posture. Right shoulder sits 1cm anterior to left. Mild right scapular winging on arm elevation.",
      "Active ROM": "Flexion 170° (L 180°), abduction 160° with painful arc 80-120°, IR 55° (L 70°), ER 95° (L 90°), horizontal adduction 35° (L 50°).",
      "Passive ROM": "Flexion 175°, abduction 170°. Posterior capsule tightness — horizontal adduction limited to 35°. End-feel normal, no laxity.",
      "Neer test": "Positive — reproduction of anterolateral shoulder pain at 150-170° passive forward flexion.",
      "Hawkins-Kennedy": "Positive — reproduction of pain with internal rotation at 90° forward flexion.",
      "Empty can / Full can": "Empty can: 4/5 strength with pain. Full can: 4+/5 with mild discomfort. No giving way — no full-thickness tear pattern.",
      "Drop arm test": "Negative — able to maintain 90° abduction.",
      "ER Strength": "Right ER at 0°: 4/5. Right ER at 90° abduction: 3+/5 (weakness with pain). Left: 5/5 bilaterally.",
      "Scapular stabilizers": "Right lower trapezius: 3+/5. Serratus anterior: 4/5. Scapular upward rotation deficit noted."
    },
    "ddxTargets": [
      "Subacromial impingement syndrome with supraspinatus tendinopathy (correct diagnosis)",
      "Partial-thickness rotator cuff tear",
      "Acromioclavicular joint pathology",
      "Biceps tendinopathy / SLAP tear",
      "Posterior shoulder tightness / internal impingement",
      "Glenohumeral instability"
    ],
    "biasFlags": {
      "anchoring": "If PT proceeds directly to rotator cuff strengthening without first assessing and addressing posterior capsule tightness and scapular stabilizer weakness, flag anchoring on the diagnosis without identifying contributing impairments. Scapular dyskinesis and posterior tightness are modifiable contributors that must be prioritized before strengthening.",
      "premature_closure": "If PT clears patient for return to pitching at 6 weeks based only on pain resolution without assessing ER/IR strength ratio and scapulohumeral rhythm, flag premature closure. Pain resolution ≠ readiness for overhead throwing.",
      "availability": "If MRI finding of Grade 1 tendinopathy leads PT to be overly restrictive and avoid any overhead activity — Grade 1 tendinopathy is common in overhead athletes and does not require complete avoidance; progressive loading is the treatment."
    },
    "coachPrompts": {
      "phase2": "After reviewing the history, the student has identified impingement and possible rotator cuff pathology. Before recommending exercises, what objective assessment findings would distinguish subacromial impingement from internal impingement — and which impairment is most likely contributing to this overhead athlete's symptoms based on the history alone?",
      "phase5": "History and physical complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. The student has found posterior capsule tightness (horizontal adduction 35° vs 50° left), scapular stabilizer weakness, and ER weakness at 90° abduction. In what order should these impairments be addressed — and why is treating posterior tightness BEFORE strengthening the correct sequencing?",
      "phase7": "After reviewing imaging and all findings: {{ddx5}}. MRI shows Grade 1 tendinopathy, no tear. Positive Neer and Hawkins, weak ER at 90°, posterior capsular tightness, scapular dyskinesis. What is the evidence-based treatment progression for return to overhead throwing — and what is the minimum functional criterion before pitching resumes?",
      "final": "Diagnosis: right subacromial impingement with supraspinatus tendinopathy and posterior capsular tightness. Key PT learning points: (1) Posterior capsule tightness drives the GIRD (glenohumeral internal rotation deficit) that shifts the humeral head superiorly, narrowing the subacromial space — address this FIRST with posterior capsule stretching. (2) Scapular stabilizer weakness (lower trap, serratus) compromises upward rotation — this must be restored before rotator cuff strengthening. (3) ER:IR strength ratio at 90° abduction should approach 66-75% before overhead sport return. (4) A 6-week timeline for softball playoffs is tight but achievable if patient adheres — patient education about continued gym overhead pressing is essential."
    }
  }
};
