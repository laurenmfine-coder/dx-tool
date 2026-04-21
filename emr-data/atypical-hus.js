
window.EMR_DATA = {
  "patient": {
    "name": "Camila Restrepo",
    "patientHPI": "I've been feeling completely exhausted for the past few days, and my urine looks like dark cola, which really scared me. I'm not peeing as much as usual, and I have this dull headache with some nausea. I also noticed these weird bruises on my arms and legs that just appeared out of nowhere.",
    "dob": "03/14/1990",
    "age": 34,
    "sex": "Female",
    "mrn": "RDX-2025-56219",
    "pronouns": "She/Her",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Jennifer Morales, MD",
    "pharmacy": "Walgreens \u2014 4700 Coconut Creek Pkwy, Coconut Creek, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino",
    "address": "5395 Larkspur Ln, Milwaukee, WI 53209",
    "phone": "(954) 555-9173",
    "email": "c.restrepo90@email.com",
    "emergencyContact": {
      "name": "Andres Restrepo (Husband)",
      "phone": "(954) 555-9190"
    }
  },
  "problems": [
    {
      "problem": "Atypical HUS \u2014 complement-mediated thrombotic microangiopathy",
      "icd": "D59.3",
      "onset": "2024",
      "status": "Active",
      "notes": "Emma Larson, 28F \u2014 microangiopathic hemolytic anemia (Hgb 7.2, schistocytes on smear), thrombocytopenia (platelets 42), AKI (Cr 4.8), no Shiga toxin. Complement activation pathway dysregulation."
    },
    {
      "problem": "AKI \u2014 severe, may require dialysis",
      "icd": "N17.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Creatinine 4.8, oliguria <0.3mL/kg/hr. Renal involvement from complement-mediated thrombotic microangiopathy of renal microvasculature."
    },
    {
      "problem": "Microangiopathic hemolytic anemia \u2014 active hemolysis",
      "icd": "D59.3",
      "onset": "2024",
      "status": "Active",
      "notes": "Hgb 7.2, LDH 2800, haptoglobin undetectable, schistocytes 4% on peripheral smear. Mechanical hemolysis from fibrin strand cutting RBCs in thrombosed microvasculature."
    }
  ],
  "medications": [
    {
      "name": "Eculizumab (Soliris) \u2014 anti-C5 complement inhibitor",
      "sig": "First-line for aHUS. Blocks terminal complement activation (C5a + C5b-9 MAC). Start as soon as diagnosis suspected \u2014 do not wait for genetic confirmation. Life-changing treatment.",
      "prescriber": "Hematology/Nephrology",
      "start": "2024",
      "refills": 0,
      "status": "Urgent \u2014 initiate"
    },
    {
      "name": "Meningococcal vaccine + prophylactic penicillin",
      "sig": "Eculizumab blocks C5 \u2192 impairs killing of Neisseria meningitidis. Vaccinate against meningococcal disease (MenACWY + MenB) before or at start of eculizumab. Prophylactic penicillin V 250mg BID.",
      "prescriber": "Hematology",
      "start": "2024",
      "refills": 0,
      "status": "Initiated \u2014 pre-eculizumab"
    },
    {
      "name": "Dialysis \u2014 for refractory AKI",
      "sig": "Indications: uremia, hyperkalemia, acidosis, volume overload. Dialysis supports but does not treat aHUS \u2014 eculizumab is the disease treatment.",
      "prescriber": "Nephrology",
      "start": "2024",
      "refills": 0,
      "status": "Likely needed"
    }
  ],
  "allergies": [
    {
      "allergen": "Trimethoprim-Sulfamethoxazole",
      "type": "Drug",
      "reaction": "Drug-induced lupus flare, rash",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/10/2025",
      "bp": "148/92",
      "hr": 98,
      "rr": 18,
      "temp": "99.2\u00b0F",
      "spo2": "97%",
      "wt": "142 lbs",
      "ht": "5'5\"",
      "bmi": 23.6,
      "setting": "Urgent Care"
    },
    {
      "date": "10/15/2024",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "140 lbs",
      "ht": "5'5\"",
      "bmi": 23.3,
      "setting": "PCP Office"
    },
    {
      "date": "06/20/2024",
      "bp": "128/78",
      "hr": 72,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "99%",
      "wt": "138 lbs",
      "ht": "5'5\"",
      "bmi": 23,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/10/2025",
      "type": "Urgent Care",
      "provider": "Dr. David Lam, MD",
      "cc": "Fatigue, dark urine, decreased urine output x 3 days",
      "hpi": "34-year-old female with SLE and lupus nephritis presents with 3 days of worsening fatigue, cola-colored urine, and decreased urine output. Reports mild headache and nausea without vomiting. Noted new bruising on arms and legs without trauma. Had URI symptoms 1 week ago that self-resolved. Currently on mycophenolate, hydroxychloroquine, and prednisone. No recent medication changes or non-compliance. Denies fever, joint pain, or rash flare. BP elevated at 148/92.",
      "exam": "General: Fatigued-appearing, pale. HEENT: Pale conjunctivae, scleral icterus noted. Neck: No LAD. CV: Tachycardic, RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, mild diffuse tenderness, no rebound/guarding. Extremities: Scattered ecchymoses bilateral upper and lower extremities; trace pedal edema. Skin: No malar rash, no discoid lesions. Neuro: A&O x3.",
      "assessment": "1. Acute anemia with jaundice and thrombocytopenia \u2014 concern for thrombotic microangiopathy (TTP/HUS) vs lupus flare with MAHA\n2. AKI on CKD \u2014 elevated creatinine, dark urine\n3. Hypertension \u2014 acutely worsened\n4. Requires emergent lab workup and likely transfer to ED",
      "plan": "1. STAT CBC, BMP, LDH, haptoglobin, peripheral smear, reticulocyte count, coagulation studies, urinalysis\n2. Transfer to ED for admission if TMA confirmed\n3. Hold mycophenolate pending workup\n4. IV fluids cautiously (concern for fluid overload with AKI)\n5. Notify rheumatology and nephrology"
    },
    {
      "id": "V002",
      "date": "10/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Jennifer Morales, MD",
      "cc": "Follow-up: SLE, lupus nephritis, HTN",
      "hpi": "34-year-old female for chronic disease follow-up. SLE clinically quiescent \u2014 no arthritis, rash, or oral ulcers. Nephritis stable per most recent labs (Cr 1.1, protein/creatinine ratio 0.6). Compliant with all medications. Tolerating mycophenolate without GI side effects. BP improved. Annual ophthalmology screening for hydroxychloroquine current.",
      "exam": "General: NAD, well-appearing. HEENT: No malar rash, no oral ulcers. Neck: No LAD. CV: RRR. Lungs: CTAB. Abdomen: Soft, NT. MSK: No joint swelling or tenderness. Extremities: No edema. Skin: No active rash.",
      "assessment": "1. SLE \u2014 clinically stable, low disease activity\n2. Lupus nephritis \u2014 stable on mycophenolate\n3. HTN \u2014 improved on losartan\n4. APL antibodies \u2014 on ASA, no thrombotic events",
      "plan": "1. Continue current regimen\n2. Labs: CBC, BMP, C3/C4, anti-dsDNA, urine protein/creatinine\n3. Rheumatology follow-up in 3 months\n4. Nephrology annual visit\n5. RTC 3-4 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "TMA/aHUS Workup",
      "results": [
        {
          "test": "Hemoglobin",
          "value": "7.2",
          "unit": "g/dL",
          "ref": "12-16",
          "flag": "L"
        },
        {
          "test": "Platelets",
          "value": "42",
          "unit": "K/\u03bcL",
          "ref": "150-400",
          "flag": "L"
        },
        {
          "test": "Creatinine",
          "value": "4.8",
          "unit": "mg/dL",
          "ref": "0.5-1.1",
          "flag": "H"
        },
        {
          "test": "Shiga toxin (stool)",
          "value": "Negative",
          "unit": "",
          "ref": "Negative (rules out typical HUS)",
          "flag": ""
        },
        {
          "test": "ADAMTS13 activity",
          "value": "62%",
          "unit": "",
          "ref": ">10% (rules out TTP)",
          "flag": ""
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/01/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-288",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/20/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-690",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 \u2014 Prevnar 20)",
      "date": "06/2022",
      "site": "Left deltoid IM",
      "lot": "PV22-215",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) \u2014 series complete",
      "date": "2010",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: SLE, Sj\u00f6gren syndrome, alive at 60",
    "Father: HTN, T2DM, alive at 64",
    "Sister: Hypothyroidism (autoimmune), age 30",
    "Maternal aunt: SLE with ESRD, deceased at 55"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Marketing manager \u2014 office work"
    ],
    [
      "Marital",
      "Married, no children"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Rare \u2014 avoids due to medications"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walking 3x/week; avoids sun exposure per lupus precautions"
    ],
    [
      "Housing",
      "Lives with husband in apartment"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt; uses sunscreen daily"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "atypical-hus",
    "diagnosis": "Atypical Hemolytic Uremic Syndrome (Complement-Mediated TMA)",
    "acuity": 2,
    "presentation": "Hematologic Emergency",
    "category": "hematologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Camila appears anxious and frightened by her symptoms, particularly the dark urine and spontaneous bruising. She is cooperative and detailed in her responses, clearly motivated to find answers given her established lupus diagnosis and fear that something serious is happening.",
    "interviewQuestions": [
      "When did you first notice the dark urine and how has it changed?",
      "Can you describe the bruising - where is it located and when did it appear?",
      "Tell me more about your fatigue - how does it compare to your usual lupus fatigue?",
      "Have you noticed any changes in your urination frequency or amount?",
      "Are you experiencing any visual changes or confusion?",
      "Have you had any recent infections, illnesses, or medication changes?",
      "Any abdominal pain, particularly in your belly or back?",
      "Have you noticed any swelling in your face, hands, or feet?",
      "Any recent fevers, chills, or night sweats?",
      "How has your lupus been controlled lately - any flares?",
      "Have you had any recent blood work or kidney function tests?",
      "Any shortness of breath or chest pain?",
      "Have you experienced any bleeding from your gums or nose?"
    ],
    "patientResponses": {
      "default": "I'm not sure I understand what you're asking - could you explain that differently? I'm really worried about what's happening to me.",
      "onset": "The dark urine started about 3 days ago - it was shocking, like dark cola or tea. The fatigue has been building for about a week, and the bruises just appeared yesterday on my arms and legs.",
      "character": "The urine is definitely darker than I've ever seen - almost brown. The fatigue feels different from my usual lupus tiredness - it's more profound, like I can barely get out of bed.",
      "location": "The bruises are mainly on my arms, especially my forearms, and on my shins. The headache is across my forehead and temples.",
      "severity": "The fatigue is probably an 8 out of 10 - I can barely function at work. The headache is about a 6, and the nausea makes it hard to eat anything.",
      "aggravating": "Moving around makes me feel more tired and dizzy. Bright lights seem to make my headache worse.",
      "relieving": "Rest helps a little with the fatigue, but nothing seems to help the headache. I tried Tylenol but it didn't do much.",
      "associated": "I've been nauseous, especially in the mornings. I feel dizzy when I stand up sometimes. My appetite has been poor, and I think I might have had a low fever yesterday.",
      "denies": "No chest pain, no shortness of breath, no abdominal pain, no diarrhea, no rash beyond the bruising, no joint pain beyond my usual lupus aches.",
      "history": "I've never had symptoms exactly like this before. My lupus has been pretty well controlled on my current medications, though I did have some kidney involvement a couple years ago.",
      "medications": "Hydroxychloroquine 200mg BID; Mycophenolate Mofetil 1000mg BID; Prednisone 5mg daily; Losartan 50mg daily; Aspirin 81mg daily; Cholecalciferol 2000 IU daily; Calcium Carbonate 600mg BID",
      "allergies": "Trimethoprim-Sulfamethoxazole",
      "family": "My mother has lupus and Sj\u00f6gren's syndrome, so autoimmune diseases run in our family. My father has high blood pressure and diabetes.",
      "social": "I work as a marketing manager, mostly office work. I'm married with no children. I don't smoke, rarely drink alcohol because of my medications, and I don't use any recreational drugs."
    },
    "examManeuvers": [
      "Blood pressure measurement",
      "Fundoscopic examination",
      "Cardiovascular examination",
      "Pulmonary examination",
      "Abdominal examination",
      "Neurologic examination including mental status",
      "Skin examination for petechiae and purpura",
      "Assessment for peripheral edema",
      "Lymph node examination",
      "Assessment for pallor and jaundice"
    ],
    "examFindings": {
      "Blood pressure measurement": "148/92 mmHg - elevated, consistent with hypertensive component of microangiopathic process",
      "Fundoscopic examination": "Mild arteriovenous nicking, few cotton wool spots, no hemorrhages or papilledema",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs, gallops, or rubs. Capillary refill 3 seconds.",
      "Pulmonary examination": "Clear to auscultation bilaterally, no crackles or wheezes",
      "Abdominal examination": "Soft, non-tender, no hepatosplenomegaly, normal bowel sounds",
      "Neurologic examination including mental status": "Alert and oriented, mild difficulty with concentration, no focal deficits, reflexes normal",
      "Skin examination for petechiae and purpura": "Multiple ecchymoses on bilateral forearms and shins, few scattered petechiae on lower extremities",
      "Assessment for peripheral edema": "Mild bilateral lower extremity edema, 1+ pitting",
      "Lymph node examination": "No lymphadenopathy",
      "Assessment for pallor and jaundice": "Notable pallor of conjunctiva and nail beds, mild scleral icterus"
    },
    "ddxTargets": [
      "Atypical HUS \u2014 complement-mediated (correct)",
      "TTP \u2014 ADAMTS13 <10%; microangiopathy + thrombocytopenia but different mechanism; treat with plasma exchange",
      "Typical (STEC) HUS \u2014 Shiga toxin positive; E. coli O157:H7; bloody diarrhea; supportive care",
      "DIC \u2014 underlying trigger; low fibrinogen; prolonged PT/PTT; coagulation panel distinguishes",
      "Malignant hypertension with TMA \u2014 BP severely elevated; different mechanism; BP treatment"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on lupus nephritis flare given her established SLE history, potentially missing the thrombotic microangiopathy component that requires urgent plasma exchange",
      "prematureClosure": "May stop investigating after identifying hemolysis and assume simple autoimmune hemolytic anemia without recognizing the triad of microangiopathic hemolytic anemia, thrombocytopenia, and acute kidney injury",
      "availabilityBias": "TTP may come to mind more readily than atypical HUS, but complement-mediated TMA in lupus patients is an important distinct entity requiring different treatment approaches"
    },
    "coachPrompts": {
      "phase2": "This patient with established SLE presents with a concerning triad of symptoms. What specific laboratory studies would help you differentiate between the various causes of hemolysis and thrombocytopenia in lupus patients? Consider both lupus-related complications and thrombotic microangiopathies.",
      "phase5": "You've identified signs consistent with hemolysis, thrombocytopenia, and kidney injury in a lupus patient. How do you differentiate between a lupus nephritis flare, TTP, and complement-mediated atypical HUS? What urgent interventions might be needed while awaiting confirmatory studies?",
      "finalDebrief": "This case illustrates how complement-mediated thrombotic microangiopathy can present in SLE patients, requiring recognition of the classic triad plus understanding of complement pathway involvement. How did your differential evolve from considering simple lupus flare to recognizing this hematologic emergency requiring plasma exchange?",
      "final": "Diagnosis: atypical HUS (complement-mediated TMA). Key learning: (1) TMA triad: microangiopathic hemolytic anemia (MAHA) + thrombocytopenia + organ dysfunction (often renal). The diagnosis is TMA first, then differentiate the cause. (2) TMA differential: TTP = ADAMTS13 <10% \u2192 plasma exchange. Typical HUS = STEC infection (Shiga toxin) \u2192 supportive care (no antibiotics \u2014 lyse bacteria and release more toxin). aHUS = complement dysregulation + negative ADAMTS13/Shiga toxin \u2192 eculizumab. (3) ADAMTS13 rules: <10% = TTP (treat with plasma exchange). >10% = TTP excluded. This patient's ADAMTS13 62% = not TTP. (4) Eculizumab (anti-C5): revolutionized aHUS treatment. Before eculizumab, most patients progressed to ESRD. Now 70-80% achieve complete TMA response. Must vaccinate against N. meningitidis before starting \u2014 terminal complement blockade dramatically increases meningococcal risk. (5) aHUS genetics: 50-60% have identifiable complement gene mutations (CFH, CFI, MCP, C3, CFB). Genetic testing guides prognosis and treatment duration."
    }
  }
};
