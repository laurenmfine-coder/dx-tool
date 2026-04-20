
window.EMR_DATA = {
  "patient": {
    "name": "Robert Chen",
    "patientHPI": "I was just sitting at breakfast when suddenly the left side of my body went weak and my words started coming out all slurred. My wife called 911 right away because she remembered when I had that mini-stroke before - I'm really scared this is something serious.",
    "dob": "02/20/1948",
    "age": "78",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-388204",
    "language": "English",
    "race": "Multiracial",
    "phone": "(313) 555-1742",
    "email": "robert.chen@email.com",
    "address": "1145 Elm St, Memphis, TN 38114",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Robert Hughes, DO",
    "pharmacy": "Walmart Pharmacy \u2014 Sunrise Blvd",
    "emergencyContact": {
      "name": "Karen Chen",
      "phone": "(513) 555-6644",
      "relationship": "Sibling"
    },
    "chiefComplaint": "Sudden left-sided weakness and slurred speech",
    "diagnosis": "Acute Ischemic Stroke"
  },
  "problems": [
    {
      "problem": "Large vessel occlusion stroke \u2014 right MCA, NIHSS 20",
      "icd": "I63.512",
      "onset": "2024",
      "status": "Active",
      "notes": "James Wilson, 74M \u2014 sudden left hemiplegia + gaze deviation + aphasia. NIHSS 20. CT perfusion: large mismatch. LVO on CTA."
    },
    {
      "problem": "Thrombectomy candidate \u2014 NIHSS 20, ASPECTS 8, LKW 8 hours ago",
      "icd": "I63.512",
      "onset": "2024",
      "status": "Active",
      "notes": "Extended window (up to 24h) if CT perfusion shows penumbra > core mismatch. DAWN/DEFUSE-3 trial criteria."
    },
    {
      "problem": "tPA not given \u2014 anticoagulated on apixaban (last dose 14h ago)",
      "icd": "I63.512",
      "onset": "2024",
      "status": "Active",
      "notes": "On apixaban \u2014 tPA contraindicated within 48h of DOAC. Proceed directly to thrombectomy."
    }
  ],
  "medications": [
    {
      "name": "Mechanical thrombectomy \u2014 activate neurointerventional radiology immediately",
      "sig": "LVO + salvageable penumbra on CT perfusion = thrombectomy. No tPA required or indicated here. Time to groin puncture is the key metric.",
      "prescriber": "Neurology/Neuroradiology",
      "start": "2024",
      "refills": 0,
      "status": "EMERGENT \u2014 IR activated"
    },
    {
      "name": "Aspirin 325mg via NG tube \u2014 after thrombectomy (not before)",
      "sig": "Antiplatelet started after procedure \u2014 not before thrombectomy (bleeding risk during procedure).",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 0,
      "status": "After thrombectomy"
    },
    {
      "name": "Atorvastatin 80mg via NG tube QHS \u2014 start immediately",
      "sig": "High-intensity statin regardless of baseline LDL \u2014 reduces recurrent stroke.",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "BP management \u2014 permissive hypertension after thrombectomy",
      "sig": "Allow BP up to 180/105 before thrombectomy (maintains penumbral perfusion). After thrombectomy with reperfusion: target <180/105 to prevent hyperperfusion hemorrhage.",
      "prescriber": "Neurology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 post-procedure protocol"
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
      "bp": "188/102",
      "hr": "92",
      "rr": "16",
      "temp": "36.8\u00b0C",
      "spo2": "97%",
      "pain": "0/10",
      "bmi": "32",
      "weight": "66 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Sudden left-sided weakness and slurred speech",
      "hpi": "Robert Chen is a 78-year-old male presenting with sudden left-sided weakness and slurred speech. Past medical history includes Atrial Fibrillation (not on anticoagulation), Hypertension, Hyperlipidemia, Prior TIA. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Acute Ischemic Stroke \u2014 clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "Acute Stroke Panel",
      "results": [
        {
          "test": "NIHSS",
          "value": "20",
          "unit": "points",
          "ref": "0 = normal",
          "flag": "H"
        },
        {
          "test": "Glucose",
          "value": "138",
          "unit": "mg/dL",
          "ref": "70-140",
          "flag": ""
        },
        {
          "test": "INR",
          "value": "1.0",
          "unit": "",
          "ref": "0.9-1.1",
          "flag": ""
        },
        {
          "test": "Platelet count",
          "value": "198",
          "unit": "K/\u03bcL",
          "ref": "150-400",
          "flag": ""
        },
        {
          "test": "LDL",
          "value": "112",
          "unit": "mg/dL",
          "ref": "<70 for stroke",
          "flag": "H"
        },
        {
          "test": "ASPECTS score (CT)",
          "value": "8",
          "unit": "/10",
          "ref": "\u22656 = good territory",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CT Head/CTA/CT Perfusion Multimodal",
      "indication": "Acute LVO stroke",
      "findings": "CTA: right MCA M1 occlusion. CT perfusion: core infarct 18mL, penumbra 118mL \u2014 mismatch ratio 6.5x. ASPECTS 8. No hemorrhage.",
      "impression": "Right MCA LVO with favorable penumbra-to-core mismatch. Thrombectomy candidate in extended window (LKW 8h). Activate IR immediately."
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
    "Father: Stroke at 65"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Former, quit 15 years ago"
    ],
    [
      "Alcohol",
      "1 glass wine with dinner"
    ],
    [
      "Occupation",
      "Retired engineer"
    ],
    [
      "Living",
      "Lives with wife"
    ]
  ],
  "guided": {
    "supported": true,
    "patientPersona": "Robert is visibly anxious and speaks with noticeable slurred speech, frequently touching his weakened left arm. He's cooperative but clearly frightened, repeatedly asking if this is 'the big one' since he's had a TIA before and knows the warning signs.",
    "interviewQuestions": [
      "When exactly did your weakness and speech problems start?",
      "Can you describe exactly what the weakness feels like?",
      "Is the weakness affecting your face, arm, or leg more?",
      "How would you rate the severity of your symptoms on a scale of 1-10?",
      "Have you had any headache with these symptoms?",
      "Any vision changes or double vision?",
      "Have you had any nausea or vomiting?",
      "Any chest pain or palpitations today?",
      "You mentioned a prior TIA - when was that and how did it compare?",
      "Are you taking any blood thinners for your atrial fibrillation?",
      "Have you been taking all your medications as prescribed?",
      "Any recent falls, head injuries, or changes in your routine?",
      "Any numbness or tingling sensations?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble understanding - my mind feels a bit foggy right now and I'm really worried about what's happening to me.",
      "onset": "It happened suddenly about 2 hours ago while I was eating breakfast - I was just reaching for my coffee when my left arm suddenly felt heavy and weak, and when I tried to tell my wife something was wrong, my words came out all garbled.",
      "character": "The weakness feels like my left side just won't obey me - my arm feels heavy like it's made of lead, and my leg is weak too. My speech feels thick and clumsy, like my tongue isn't working right.",
      "location": "It's my entire left side - my face feels droopy, my left arm is very weak, and my left leg is weak too, though not quite as bad as my arm.",
      "severity": "I'd say it's about an 8 out of 10 - I can barely lift my left arm and I'm having real trouble walking. It's much worse than my TIA was.",
      "aggravating": "Trying to use my left side makes me more aware of how weak it is, and getting anxious seems to make my speech even more slurred.",
      "relieving": "Nothing really helps - I've tried moving around but the weakness is just there. Sitting still doesn't make it better either.",
      "associated": "My face feels droopy on the left side, and I feel a bit dizzy when I try to stand. No headache though, which surprises me.",
      "denies": "No headache, no chest pain, no trouble breathing, no nausea or vomiting, and my vision seems okay - not double or blurry.",
      "history": "I had a TIA about 3 years ago with some mild weakness and speech problems, but it only lasted about 20 minutes and wasn't nearly this severe. That's why my wife knew to call 911 right away.",
      "medications": "Metoprolol Tartrate; Lisinopril; Atorvastatin; Aspirin",
      "allergies": "NKDA",
      "family": "My father had a major stroke when he was 65 - that's always been in the back of my mind, especially after my TIA.",
      "social": "I'm a retired engineer, quit smoking 15 years ago, and just have a glass of wine with dinner. I live with my wife who's been taking good care of me."
    },
    "examManeuvers": [
      "NIHSS/Neurological assessment",
      "Facial symmetry and smile",
      "Arm drift test (pronator drift)",
      "Grip strength bilateral",
      "Lower extremity strength testing",
      "Speech and language assessment",
      "Cerebellar testing (finger-to-nose, heel-to-shin)",
      "Deep tendon reflexes",
      "Plantar reflex (Babinski)",
      "Cardiac examination for irregular rhythm"
    ],
    "examFindings": {
      "NIHSS/Neurological assessment": "NIHSS score 8 - moderate stroke severity with clear focal deficits",
      "Facial symmetry and smile": "Left facial droop with asymmetric smile, left nasolabial fold flattening",
      "Arm drift test (pronator drift)": "Severe left arm drift with inability to maintain position against gravity for more than 5 seconds",
      "Grip strength bilateral": "Right grip 5/5, left grip 2/5 - markedly diminished left grip strength",
      "Lower extremity strength testing": "Right leg 5/5, left leg 3/5 - moderate weakness in left lower extremity",
      "Speech and language assessment": "Dysarthric speech with slurred articulation, comprehension intact, no aphasia",
      "Cerebellar testing (finger-to-nose, heel-to-shin)": "Unable to perform adequately on left side due to weakness, right side normal",
      "Deep tendon reflexes": "Hyperreflexic on left side (3+), normal on right (2+)",
      "Plantar reflex (Babinski)": "Upgoing plantar response (positive Babinski) on left, normal on right",
      "Cardiac examination for irregular rhythm": "Irregularly irregular rhythm consistent with atrial fibrillation, no murmurs"
    },
    "ddxTargets": [
      "LVO stroke \u2014 thrombectomy candidate, extended window (correct)",
      "Lacunar infarct \u2014 small vessel, no LVO on CTA; NIHSS 20 is too high for lacunar",
      "TIA \u2014 symptoms persisting; NIHSS 20 is not TIA",
      "Hypoglycemic hemiplegia \u2014 glucose 138, not hypoglycemic",
      "Hemiplegic migraine \u2014 no prior history, NIHSS 20 severity, LVO on CTA",
      "Brain mass with Todd's paralysis \u2014 no prior seizure, CT perfusion pattern"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on patient's history of TIA and assuming this is another transient event, potentially delaying urgent stroke intervention",
      "prematureClosure": "May diagnose TIA too quickly given prior history without considering the increased severity and persistence of current symptoms",
      "availabilityBias": "Recent cases of TIA or less severe presentations might influence assessment, missing the urgency of this acute stroke presentation"
    },
    "coachPrompts": {
      "phase2": "You've identified some concerning possibilities in your differential. Given this patient's atrial fibrillation history and current presentation, what key historical details and timeline information will help you distinguish between your top differentials? What would make you most concerned about stroke versus TIA?",
      "phase5": "Your examination reveals significant focal neurological deficits. How does the NIHSS scoring and persistence of symptoms over 2 hours change your assessment? What does the combination of atrial fibrillation, no anticoagulation, and these findings suggest about the underlying pathophysiology?",
      "finalDebrief": "This case highlights acute ischemic stroke in the setting of untreated atrial fibrillation. Notice how the patient's prior TIA history could have led to anchoring bias, but the severity and persistence of symptoms distinguished this from a transient event. What does this teach you about anticoagulation decisions in atrial fibrillation and stroke prevention?",
      "final": "Diagnosis: LVO stroke \u2014 thrombectomy. Key learning: (1) LVO definition: occlusion of a proximal intracranial artery (ICA, MCA M1, basilar) causing a large-territory stroke. Requires CTA or MRA for detection. NIHSS \u22656 in the right clinical context should prompt CTA. (2) Thrombectomy window extension: DAWN trial (2018) and DEFUSE-3 trial (2018) extended thrombectomy to 16-24h using CT perfusion to identify salvageable penumbra. Key criterion: mismatch (penumbra significantly larger than core infarct). This revolutionized stroke care \u2014 patients presenting late with LVO and favorable mismatch can still be treated. (3) tPA + thrombectomy: when tPA is NOT contraindicated, give tPA AND proceed to thrombectomy ('drip and ship' or 'mothership' approach). tPA while catheter is being prepared does not reduce thrombectomy efficacy and may improve partial reperfusion. (4) ASPECTS score: Alberta Stroke Program Early CT Score \u2014 10 points for right MCA territory. Subtract 1 point for each region with early ischemic change. ASPECTS \u22656 = favorable anatomy for thrombectomy. ASPECTS <6 = large core infarct, lower thrombectomy benefit. (5) Hyperperfusion hemorrhage: after successful recanalization, the ischemic territory suddenly receives high blood flow \u2014 BP management critical. Target SBP <180/105 after reperfusion. Headache + seizure post-thrombectomy = hyperperfusion \u2014 emergency head CT."
    }
  },
  "meta": {
    "diagnosis": "Acute Ischemic Stroke \u2014 Large Vessel Occlusion, Mechanical Thrombectomy Within 24 Hours",
    "caseId": "stroke-v1"
  }
};
