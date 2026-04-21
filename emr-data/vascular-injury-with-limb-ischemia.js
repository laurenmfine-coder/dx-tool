// Virtual EMR Case: Vascular Injury with Limb Ischemia
// Variant: vascular-injury-with-limb-ischemia | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Andre Jackson",
    "patientHPI": "I'm here for my yearly checkup and feeling great overall. I stay active playing basketball with friends and my asthma is well controlled - I barely need my inhaler anymore. Work's been going really well too since I got promoted to project manager last month.",
    "dob": "12/03/1988",
    "age": 36,
    "sex": "Male",
    "mrn": "RDX-2025-63417",
    "pronouns": "He/Him",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Karen Mitchell, MD",
    "pharmacy": "Walgreens — 1200 W Sunrise Blvd, Fort Lauderdale, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "2417 Jasmine Way, Albuquerque, NM 87103",
    "phone": "(954) 555-5183",
    "email": "a.jackson88@email.com",
    "emergencyContact": {
      "name": "Tanya Jackson (Wife)",
      "phone": "(954) 555-5200"
    }
  },
  "problems": [
    {
      "problem": "Left Supracondylar Femur Fracture — Acute, Post-MVC",
      "icd": "S72.402A",
      "onset": "01/2025",
      "status": "Active",
      "notes": "Sustained in high-speed MVC 01/25/2025; comminuted distal femur fracture with posterior displacement and concern for popliteal artery injury; ED evaluation in progress"
    },
    {
      "problem": "Asthma — Mild Intermittent",
      "icd": "J45.20",
      "onset": "2006",
      "status": "Active",
      "notes": "Albuterol PRN; no controller; no hospitalizations"
    }
  ],
  "medications": [
    {
      "name": "Albuterol HFA 90mcg PRN",
      "sig": "Inhale 2 puffs every 4-6 hours as needed for shortness of breath or wheezing",
      "prescriber": "Dr. Mitchell",
      "start": "06/2010",
      "refills": 3,
      "status": "PRN"
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
      "date": "07/18/2024",
      "bp": "124/78",
      "hr": 72,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "210 lbs",
      "ht": "6'2\"",
      "bmi": 27,
      "setting": "PCP Office"
    },
    {
      "date": "01/10/2024",
      "bp": "120/76",
      "hr": 68,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "208 lbs",
      "ht": "6'2\"",
      "bmi": 26.7,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "07/18/2024",
      "type": "Primary Care",
      "provider": "Dr. Karen Mitchell, MD",
      "cc": "Annual wellness exam",
      "hpi": "36-year-old healthy male for annual wellness exam. No complaints. Asthma well-controlled — uses albuterol ~1x/month. Active — plays basketball recreationally. No chronic conditions. No medications other than PRN albuterol. Recently promoted at work (construction project manager). Wears seatbelt consistently.",
      "exam": "General: Athletic male, NAD. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT. MSK: Full ROM all joints. Neuro: A&O x3, intact. Skin: No lesions.",
      "assessment": "1. Annual wellness — healthy\n2. Asthma — mild intermittent, well-controlled",
      "plan": "1. Continue albuterol PRN\n2. Routine labs: CBC, CMP, lipid panel\n3. RTC 1 year or PRN"
    }
  ],
  "labs": [
    {
      "date": "07/18/2024",
      "time": "09:30",
      "orderedBy": "Dr. Karen Mitchell, MD",
      "collected": "07/18/2024 09:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2024-071815",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "6.8",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "15.2",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "45.0",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelet Count",
              "value": "260",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "88",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "14",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.0",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": ""
            }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            {
              "test": "Total Cholesterol",
              "value": "188",
              "unit": "mg/dL",
              "range": "<200",
              "flag": ""
            },
            {
              "test": "LDL Cholesterol",
              "value": "108",
              "unit": "mg/dL",
              "range": "<100 optimal",
              "flag": "H"
            },
            {
              "test": "HDL Cholesterol",
              "value": "52",
              "unit": "mg/dL",
              "range": ">40",
              "flag": ""
            },
            {
              "test": "Triglycerides",
              "value": "140",
              "unit": "mg/dL",
              "range": "<150",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/08/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-272",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/22/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-698",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "Hepatitis B (3/3)",
      "date": "2006",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: HTN, T2DM, alive at 62",
    "Father: CAD (stent at 58), HTN, alive at 65",
    "Brother: Healthy, age 33",
    "Sister: Sickle cell trait, alive at 30",
    "No family history of bleeding disorders or clotting disorders"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Construction project manager"
    ],
    [
      "Marital",
      "Married, 2 children (ages 5, 3)"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Social, 2-3 beers on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Basketball 2x/week; gym 3x/week"
    ],
    [
      "Housing",
      "Single-family home with wife and children"
    ],
    [
      "Safety",
      "Seatbelt always; hard hat at work; no firearms"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "vascular-injury-with-limb-ischemia",
    "diagnosis": "Popliteal Artery Injury with Acute Limb Ischemia (Post-Trauma)",
    "acuity": 1,
    "presentation": "Musculoskeletal Emergency",
    "category": "vascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Andre appears anxious and in significant distress, gripping his left leg and frequently shifting position to find comfort. He is cooperative and eager to provide information, clearly worried about his leg and asking repeatedly if he will be able to walk normally again.",
    "interviewQuestions": [
      "Can you tell me exactly what happened in the accident?",
      "When did you first notice the pain and numbness in your left leg?",
      "How would you describe the pain in your left leg?",
      "Where exactly is the pain located and does it go anywhere else?",
      "On a scale of 1-10, how severe is your leg pain right now?",
      "What makes the pain and numbness worse?",
      "Is there anything that helps relieve the pain?",
      "Besides the pain, what other symptoms are you experiencing in your left leg?",
      "Have you noticed any changes in the color or temperature of your left leg?",
      "Are you able to move your toes and ankle on the left side?",
      "Have you ever had any leg injuries or circulation problems before?",
      "What medications do you currently take?",
      "Do you have any known allergies to medications?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing on anything other than this terrible pain and numbness in my left leg. Can you repeat that?",
      "onset": "Right after the accident about 2 hours ago, I noticed my left leg felt different - numb and painful. It's gotten much worse since they put the splint on my broken thigh bone.",
      "character": "It's a severe, constant aching pain with this terrible cold, numb feeling. My leg feels like it's going to sleep but much worse.",
      "location": "The worst pain is in my left thigh where it's broken, but the numbness and coldness goes all the way down to my foot.",
      "severity": "The pain is easily a 9 out of 10, and the numbness is terrifying. I can barely feel my foot and I'm worried I won't be able to work construction anymore.",
      "aggravating": "Any movement makes the pain worse, and the numbness seems to be getting worse just lying here.",
      "relieving": "Nothing is helping. The pain medication they gave me isn't touching this pain or the numbness.",
      "associated": "My left foot feels ice cold compared to my right foot, and it looks paler too. I can barely move my toes and my foot feels completely numb.",
      "denies": "No chest pain, no shortness of breath beyond what's normal for my mild asthma, no other injuries that I'm aware of.",
      "history": "Never had anything like this before. I've never broken a bone or had any leg problems. Always been very active and healthy.",
      "medications": "Albuterol HFA 90mcg PRN",
      "allergies": "NKDA",
      "family": "My dad has heart problems and both my parents have high blood pressure, but no one in my family has had circulation problems in their legs that I know of.",
      "social": "I'm a construction project manager, so I need to be able to walk and be on my feet all day. I'm married with two young kids. I don't smoke and only drink socially on weekends."
    },
    "examManeuvers": [
      "Inspection of left lower extremity color and appearance",
      "Palpation of left lower extremity temperature",
      "Palpation of dorsalis pedis pulse - left foot",
      "Palpation of posterior tibial pulse - left foot",
      "Palpation of popliteal pulse - left leg",
      "Assessment of capillary refill - left toes",
      "Neurologic assessment - left foot sensation",
      "Motor assessment - left foot and ankle movement",
      "Ankle-brachial index measurement",
      "Examination of femur fracture site and splint"
    ],
    "examFindings": {
      "Inspection of left lower extremity color and appearance": "Left lower leg and foot appear markedly pale and mottled compared to right leg, with obvious deformity of left thigh consistent with femur fracture",
      "Palpation of left lower extremity temperature": "Left foot and lower leg are noticeably cool to touch compared to right leg",
      "Palpation of dorsalis pedis pulse - left foot": "Absent dorsalis pedis pulse on left foot",
      "Palpation of posterior tibial pulse - left foot": "Absent posterior tibial pulse on left foot",
      "Palpation of popliteal pulse - left leg": "Absent popliteal pulse on left leg, unable to palpate due to swelling and patient discomfort",
      "Assessment of capillary refill - left toes": "Capillary refill >4 seconds in left toes compared to <2 seconds in right toes",
      "Neurologic assessment - left foot sensation": "Severely diminished sensation to light touch and pinprick in left foot and lower leg",
      "Motor assessment - left foot and ankle movement": "Significantly weak dorsiflexion and plantarflexion of left foot, limited by pain and neurologic deficit",
      "Ankle-brachial index measurement": "Left ABI 0.4, indicating severe arterial compromise",
      "Examination of femur fracture site and splint": "Tense swelling around splinted left thigh, patient reports severe pain with any manipulation"
    },
    "ddxTargets": [
      "Popliteal Artery Injury with Acute Limb Ischemia — Left Leg (Post-Supracondylar Femur Fracture, High-Speed MVC) (correct diagnosis)",
      "Compartment Syndrome of Left Lower Leg",
      "Femoral Artery Injury with Acute Limb Ischemia",
      "Fat Embolism Syndrome",
      "Arterial Thromboembolism",
      "Severe Soft Tissue Injury with Swelling",
      "Nerve Injury Secondary to Femur Fracture"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on the obvious femur fracture and missing the vascular emergency - the pale, pulseless leg requires immediate attention beyond orthopedic management",
      "prematureClosure": "Risk of attributing all symptoms to the femur fracture without recognizing that absent pulses and severe ischemia represent a separate limb-threatening emergency",
      "availabilityBias": "Femur fractures are common trauma presentations, but the association with popliteal artery injury may not be immediately recalled, leading to delayed recognition of this surgical emergency"
    },
    "coachPrompts": {
      "phase2": "You've identified this as a trauma case with femur fracture. What are the potential vascular complications associated with supracondylar femur fractures, and what specific examination findings would you be most concerned about in assessing limb viability?",
      "phase5": "Your examination reveals absent pulses, pale/cool extremity, and delayed capillary refill in the left leg. How do these findings change your differential diagnosis and urgency level? What is the relationship between supracondylar femur fractures and popliteal artery injury?",
      "finalDebrief": "This case demonstrates how high-energy trauma can cause multiple injuries requiring different urgent interventions. The 'hard signs' of vascular injury - absent pulses, pallor, coolness, and sensory changes - indicated acute limb ischemia requiring emergent vascular surgery consultation. How did your thinking evolve from considering this primarily an orthopedic case to recognizing the vascular emergency?",
      "final": "Diagnosis: popliteal artery injury with acute limb ischemia following supracondylar femur fracture from high-speed MVC. Key learning: (1) Acute limb ischemia (ALI) is a surgical emergency defined by sudden decrease in limb perfusion threatening viability. Etiologies: embolic (cardiac — AF, LV thrombus, endocarditis; arterial proximal plaque), thrombotic (atherosclerotic plaque rupture, bypass graft thrombosis, hypercoagulable), traumatic (penetrating or blunt with vascular injury), iatrogenic (line, procedure), dissection, or compartment syndrome with secondary vascular compromise. (2) The popliteal artery is particularly vulnerable in supracondylar femur fractures and knee dislocations. Knee dislocation has up to 30% incidence of popliteal artery injury — may spontaneously reduce before evaluation. Any patient with knee dislocation (or reduced knee dislocation), supracondylar femur fracture, or penetrating knee trauma must have vascular assessment including pulse exam AND ankle-brachial index (ABI). ABI <0.9 or asymmetry mandates vascular imaging (CT angiography or formal angiography). (3) The six 'P's of acute limb ischemia — historical classic: Pain (initial, severe, out of proportion). Pallor (pale, waxy, mottled — later blue/cyanotic). Pulselessness (distal to occlusion). Paresthesias (progressive sensory loss). Paralysis (motor loss — LATE and ominous finding). Poikilothermia (cold). Rutherford classification stratifies severity: - Class I (viable) — not immediately threatened; mild sensory or motor deficit. - Class IIa (marginally threatened) — salvageable if promptly treated; sensory loss (toes) and muscle weakness absent or mild. - Class IIb (immediately threatened) — salvageable with urgent revascularization; sensory loss beyond toes, mild to moderate muscle weakness. - Class III (irreversible) — major tissue loss or permanent nerve damage inevitable; amputation. (4) Workup and management. (a) Immediate vascular surgery consultation. (b) Resuscitation, IV access, labs (CBC, CMP, lactate, CPK, coagulation, type and crossmatch), pain control. (c) Imaging: CT angiography is rapid and accurate for localization and planning; direct angiography in the OR/hybrid suite allows diagnosis and intervention simultaneously. (d) IV heparin (80 units/kg bolus then infusion) to prevent propagation of thrombus — unless contraindicated. (e) Revascularization within 6 hours (the classic 'golden window' — muscle begins to necrose after this; beyond 6 hours, risk of compartment syndrome, rhabdomyolysis, and irreversible damage increases). Options: surgical exploration with vascular repair (interposition graft, bypass, primary repair), endovascular therapy (thrombectomy, thrombolysis, stenting — selected for appropriate anatomy and patient), or amputation for Class III disease. (f) Orthopedic stabilization of the fracture — coordinate with vascular surgery; external fixation often used for damage control. (g) Fasciotomy prophylactically when ischemia >4-6 hours or obvious compartment syndrome to prevent reperfusion injury muscle death. (h) Post-revascularization monitoring: pulses, compartment pressures, CPK, renal function (rhabdomyolysis and AKI), cardiac monitoring (reperfusion hyperkalemia). (5) Long-term. Vascular repair patency monitoring; anticoagulation or antiplatelet therapy; physical therapy for limb function; address underlying CV risk factors. Patients with cardioembolic source require anticoagulation and source evaluation (echocardiography, rhythm monitoring). Classic pitfalls: (a) missing vascular injury in a reduced knee dislocation — always document pulses, ABI, and have low threshold for CTA even with 'normal' pulses. (b) Delaying revascularization for orthopedic stabilization — muscle viability window is hours; vascular repair should not wait. (c) Missing compartment syndrome (pain with passive stretch, firm compartments, sensory changes, pulses may still be present early) — compartment pressures or clinical exam mandate fasciotomy. (d) Not anticipating reperfusion syndrome — massive potassium/lactic acid/myoglobin release after restoring flow; monitor labs, prepare for hyperkalemia, CPK, renal failure. (e) Forgetting long-term CV workup in non-traumatic ALI — atherosclerosis, AF, and hypercoagulability evaluation essential."
    }
  }
};
