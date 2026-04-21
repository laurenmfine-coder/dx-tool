
window.EMR_DATA = {
  "patient": {
    "name": "Isabella Reyes",
    "patientHPI": "I've been having really bad stomach cramps for the past few weeks, especially around my belly button and on my right side, and it's been getting worse. I'm going to the bathroom way more often than usual, maybe 5 or 6 times a day, and sometimes I see blood which really scares me. I've been waking up at night drenched in sweat, and I think I've lost some weight because my clothes feel looser.",
    "dob": "06/15/1997",
    "age": 28,
    "sex": "Female",
    "mrn": "RDX-2025-41738",
    "pronouns": "She/Her",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Amanda Vega, MD",
    "pharmacy": "CVS Pharmacy \u2014 2501 S University Dr, Riverside, FL",
    "language": "English",
    "race": "Hispanic",
    "address": "1853 Willow Way, Louisville, KY 40206",
    "phone": "(954) 555-3182",
    "email": "isabella.reyes97@email.com",
    "emergencyContact": {
      "name": "Carmen Reyes (Mother)",
      "phone": "(954) 555-3197"
    },
    "chiefComplaint": "Worsening belly pain and diarrhea for 2 weeks"
  },
  "problems": [
    {
      "problem": "Crohn's disease flare \u2014 moderate-severe (HBI 12)",
      "icd": "K50.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Sophia Martinez, 32F \u2014 known Crohn's ileocolitis, on azathioprine. 3-week worsening abdominal pain, 8+ loose stools daily, 10 lb weight loss, CRP 84. HBI 12 = moderate-severe. Failed outpatient prednisone taper."
    },
    {
      "problem": "Steroid-dependent \u2014 escalation to biologic indicated",
      "icd": "K50.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Third prednisone course in 12 months. Steroid-dependent disease = indication for biologic therapy. Continuing steroids \u2192 steroid toxicity without disease modification."
    },
    {
      "problem": "Abscess/fistula exclusion \u2014 complication screening",
      "icd": "K50.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Crohn's complications: abscess (CT-guided drainage before steroids if present), fistula (perianal exam), stricture. CT enterography to exclude before immunosuppression intensification."
    }
  ],
  "medications": [
    {
      "name": "IV methylprednisolone 40-60mg daily \u2014 induction",
      "sig": "For hospitalized moderate-severe Crohn's flare failing oral steroids. IV steroids for induction of remission only \u2014 not maintenance.",
      "prescriber": "GI/Gastroenterology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Infliximab (Remicade) or vedolizumab \u2014 biologic initiation",
      "sig": "Anti-TNF (infliximab) or gut-selective (vedolizumab) for steroid-dependent/refractory Crohn's. Initiate during hospitalization after excluding infection (TB screen, HBV, HIV). Accelerated induction (0, 2, 6 weeks).",
      "prescriber": "Gastroenterology",
      "start": "2024",
      "refills": 0,
      "status": "Initiating"
    },
    {
      "name": "Hold azathioprine during acute infection/flare assessment",
      "sig": "Thiopurines are slow (3-6 months) and inadequate as monotherapy for moderate-severe disease. Combination with anti-TNF reduces immunogenicity.",
      "prescriber": "Gastroenterology",
      "start": "2024",
      "refills": 0,
      "status": "Review \u2014 hold if infection"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfasalazine",
      "type": "Drug",
      "reaction": "Severe nausea and hepatotoxicity",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Latex",
      "type": "Environmental",
      "reaction": "Contact dermatitis",
      "severity": "Moderate",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "01/22/2026",
      "bp": "108/68",
      "hr": 98,
      "rr": 18,
      "temp": "100.4\u00b0F",
      "spo2": "98%",
      "wt": "118 lbs",
      "ht": "5'4\"",
      "bmi": 20.3,
      "setting": "Urgent Care"
    },
    {
      "date": "11/14/2025",
      "bp": "112/72",
      "hr": 88,
      "rr": 16,
      "temp": "99.1\u00b0F",
      "spo2": "99%",
      "wt": "122 lbs",
      "ht": "5'4\"",
      "bmi": 20.9,
      "setting": "PCP Office"
    },
    {
      "date": "08/07/2025",
      "bp": "116/74",
      "hr": 78,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "128 lbs",
      "ht": "5'4\"",
      "bmi": 22,
      "setting": "PCP Office"
    },
    {
      "date": "05/20/2025",
      "bp": "118/76",
      "hr": 74,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "130 lbs",
      "ht": "5'4\"",
      "bmi": 22.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/14/2025",
      "type": "Primary Care",
      "provider": "Dr. Amanda Vega, MD",
      "cc": "Follow-up: Crohn's disease, increasing abdominal discomfort",
      "hpi": "28-year-old female presenting for follow-up of Crohn's disease. Reports 2-3 weeks of worsening crampy periumbilical and RLQ abdominal pain with increased stool frequency to 5-6 times daily, occasionally with visible blood. Denies fevers at home but reports intermittent night sweats. Has lost approximately 6 lbs over the past 3 months. Last adalimumab injection was 10 days ago.",
      "exam": "General: Thin-appearing female, mild discomfort. HEENT: Pale conjunctivae. CV: RRR, tachycardic. Lungs: CTAB. Abdomen: Soft, tender RLQ and periumbilical, no rebound or guarding, normoactive BS. Rectal: Deferred. Extremities: No edema, no erythema nodosum.",
      "assessment": "1. Crohn's disease \u2014 likely flare, loss of response to adalimumab suspected\n2. Iron deficiency anemia \u2014 worsening with active disease\n3. Unintentional weight loss \u2014 likely disease-related",
      "plan": "1. Urgent GI referral for Dr. Patel; consider colonoscopy and biologic switch\n2. Stat labs: CBC, CMP, CRP, ESR, fecal calprotectin\n3. Continue adalimumab pending GI evaluation\n4. RTC 2 weeks or sooner if worsening"
    },
    {
      "id": "V002",
      "date": "08/07/2025",
      "type": "Specialist",
      "provider": "Dr. Raj Patel, MD (Gastroenterology)",
      "cc": "Routine Crohn's disease follow-up",
      "hpi": "28-year-old female with ileocolonic Crohn's disease on adalimumab presenting for routine surveillance. Reports 2-3 soft stools daily, no blood, no abdominal pain. Tolerating diet well. Weight stable. Adalimumab injections every 2 weeks without issues. Mood stable on sertraline.",
      "exam": "General: Well-appearing, NAD. Abdomen: Soft, NT/ND, no masses. No perianal disease on external exam. Skin: No erythema nodosum or pyoderma.",
      "assessment": "1. Crohn's disease \u2014 clinical remission on adalimumab\n2. Iron deficiency anemia \u2014 improving",
      "plan": "1. Continue adalimumab 40mg SubQ q2wk\n2. Check CRP, CBC, fecal calprotectin\n3. Surveillance colonoscopy in 6 months\n4. RTC 6 months or PRN"
    },
    {
      "id": "V003",
      "date": "05/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Amanda Vega, MD",
      "cc": "Annual wellness visit",
      "hpi": "28-year-old female for annual exam. Crohn's disease well-controlled on biologic. No active GI symptoms. Anxiety managed with sertraline. Reports exercising 3x/week, eating well. Denies tobacco, drugs; occasional alcohol.",
      "exam": "General: NAD, well-nourished. HEENT: WNL, conjunctivae pink. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT/ND. Skin: No rashes.",
      "assessment": "1. Annual wellness exam\n2. Crohn's disease \u2014 remission\n3. GAD \u2014 stable on sertraline",
      "plan": "1. Continue current medications\n2. Age-appropriate screening current\n3. RTC 6 months or PRN"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Crohn's Flare Assessment",
      "results": [
        {
          "test": "CRP",
          "value": "84",
          "unit": "mg/L",
          "ref": "<10",
          "flag": "H"
        },
        {
          "test": "ESR",
          "value": "68",
          "unit": "mm/hr",
          "ref": "<20",
          "flag": "H"
        },
        {
          "test": "Fecal calprotectin",
          "value": "1840",
          "unit": "\u03bcg/g",
          "ref": "<50 (active IBD >250)",
          "flag": "H"
        },
        {
          "test": "Stool C. diff",
          "value": "Negative",
          "unit": "",
          "ref": "Negative (always check before immunosuppression)",
          "flag": ""
        },
        {
          "test": "Albumin",
          "value": "2.9",
          "unit": "g/dL",
          "ref": "3.5-5.0",
          "flag": "L"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "04/2024",
      "study": "CT Enterography",
      "findings": "Wall thickening terminal ileum and ascending colon. Increased mural enhancement. Mesenteric fat stranding (creeping fat). No abscess. No free air. No stricture causing obstruction.",
      "impression": "Active Crohn's ileocolitis. No complications. Biologic initiation appropriate."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/01/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-311",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2025-26)",
      "date": "10/15/2025",
      "site": "Right deltoid IM",
      "lot": "CV2025-882",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "05/2020",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "GSK"
    },
    {
      "vaccine": "Hepatitis B (Heplisav-B) (1/2)",
      "date": "03/2022",
      "site": "Left deltoid IM",
      "lot": "HB22-107",
      "mfr": "Dynavax"
    },
    {
      "vaccine": "Hepatitis B (Heplisav-B) (2/2)",
      "date": "04/2022",
      "site": "Left deltoid IM",
      "lot": "HB22-215",
      "mfr": "Dynavax"
    }
  ],
  "familyHistory": [
    "Mother: Ulcerative colitis, alive at 54",
    "Father: Type 2 Diabetes Mellitus, Hypertension, alive at 58",
    "Maternal grandmother: Colon cancer at age 68 (deceased)",
    "Brother: Healthy, age 25"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Elementary school teacher"
    ],
    [
      "Marital",
      "Single, in a relationship"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Occasional, 1-2 drinks/month; avoids during flares"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Yoga 3x/week; running when in remission"
    ],
    [
      "Housing",
      "Apartment with roommate"
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
    "caseId": "crohn-flare",
    "diagnosis": "Crohn's Disease Flare \u2014 Moderate-Severe, Steroid-Dependent",
    "acuity": 3,
    "presentation": "Abdominal Pain",
    "category": "gastrointestinal"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Isabella appears anxious and visibly uncomfortable, frequently shifting position and grimacing during episodes of cramping. She is very forthcoming about her symptoms and medication history, speaking quickly due to her distress and concern about the blood in her stool, which particularly frightens her given her family history of colon cancer.",
    "interviewQuestions": [
      "Can you describe when your current symptoms started and how they've progressed?",
      "What does the abdominal pain feel like - is it cramping, sharp, or burning?",
      "Where exactly is the pain located and does it move anywhere else?",
      "On a scale of 1-10, how severe is your pain right now?",
      "What makes your pain and symptoms worse?",
      "Is there anything that helps relieve your symptoms?",
      "Besides the pain and frequent bowel movements, what other symptoms have you noticed?",
      "Have you had any fever, chills, or night sweats?",
      "When was your last Crohn's flare and how does this compare?",
      "Have you been taking all your medications as prescribed?",
      "Have you had any recent changes in diet, stress, or missed medications?",
      "Any recent travel, new foods, or sick contacts?",
      "How has this affected your work and daily activities?"
    ],
    "patientResponses": {
      "default": "I'm sorry, could you rephrase that? I'm having trouble concentrating because of the pain.",
      "onset": "It started about three weeks ago with mild cramping, but it's gotten much worse over the past week. The blood in my stool started about five days ago and that's when I knew I needed to come in.",
      "character": "It's really intense cramping, like someone is squeezing my intestines. Sometimes it's so sharp it takes my breath away, especially right before I have to run to the bathroom.",
      "location": "Most of the pain is around my belly button and then moves to my lower right side. Sometimes it feels like it goes all the way through to my back.",
      "severity": "Right now it's about a 7 out of 10. When the cramping hits, it can be a 9. I've had to call in sick to work twice this week because I couldn't function.",
      "aggravating": "Eating makes it much worse, especially anything with fiber or dairy. Stress definitely makes it worse too, and I've been really anxious about the bleeding.",
      "relieving": "Heat helps a little bit, and I've been taking the ondansetron for nausea. Lying in a fetal position seems to help during the worst cramps, but nothing really makes it go away.",
      "associated": "I've been having a lot of nausea, some vomiting yesterday, and I feel really tired and weak. I've also been having some night sweats and I think I've lost a few pounds because I'm afraid to eat.",
      "denies": "I haven't had any chest pain, shortness of breath, or urinary symptoms. No recent rashes or joint pain either.",
      "history": "My last big flare was about eight months ago, but this feels worse. I usually have minor symptoms that come and go, but nothing like this amount of bleeding or this severe pain.",
      "medications": "Adalimumab 40mg SubQ every 2 weeks; Ferrous Sulfate 325mg BID; Cholecalciferol 2000 IU daily; Sertraline 50mg daily; Ondansetron 4mg PRN",
      "allergies": "Sulfasalazine, Latex",
      "family": "My mom has ulcerative colitis, so IBD runs in my family. My grandmother died of colon cancer, which is why the bleeding scares me so much. My dad has diabetes and high blood pressure.",
      "social": "I'm an elementary school teacher, which has been stressful lately with end-of-year activities. I'm single but in a relationship. I don't smoke, and I usually have a glass of wine maybe once or twice a month, but I've been avoiding alcohol completely during this flare."
    },
    "examManeuvers": [
      "General appearance and vital signs assessment",
      "Abdominal inspection",
      "Auscultation of bowel sounds",
      "Light palpation of abdomen",
      "Deep palpation of abdomen",
      "Assessment for rebound tenderness and guarding",
      "Palpation of right lower quadrant and McBurney's point",
      "Assessment for masses or organomegaly",
      "Perianal examination",
      "Assessment for extraintestinal manifestations"
    ],
    "examFindings": {
      "General appearance and vital signs assessment": "Appears uncomfortable and anxious, low-grade fever at 100.4\u00b0F, mild tachycardia at 98 bpm, blood pressure stable at 108/68",
      "Abdominal inspection": "Abdomen appears slightly distended, no visible masses, scars, or skin changes noted",
      "Auscultation of bowel sounds": "Hyperactive bowel sounds present in all four quadrants",
      "Light palpation of abdomen": "Diffuse tenderness most pronounced in periumbilical and right lower quadrant regions",
      "Deep palpation of abdomen": "Significant tenderness in right iliac fossa with possible fullness or thickening of bowel wall, patient grimaces with deep palpation",
      "Assessment for rebound tenderness and guarding": "Mild voluntary guarding present, no frank rebound tenderness",
      "Palpation of right lower quadrant and McBurney's point": "Tenderness at McBurney's point but more diffuse than typical appendicitis, consistent with ileocecal involvement",
      "Assessment for masses or organomegaly": "No discrete masses palpated, liver and spleen not enlarged",
      "Perianal examination": "Evidence of prior perianal fistula with some induration, no active drainage or new fistulous openings",
      "Assessment for extraintestinal manifestations": "No current arthritis, skin lesions, or ocular findings; appears mildly pale consistent with known iron deficiency"
    },
    "ddxTargets": [
      "Crohn's disease flare \u2014 moderate-severe (correct)",
      "Infectious colitis \u2014 C. diff negative; no recent antibiotics; but always test before immunosuppression",
      "Intestinal lymphoma \u2014 risk in Crohn's especially with thiopurines; CT enterography helps",
      "UC flare \u2014 Crohn's typically ileal/ileocolonic; skip lesions; transmural; rectal sparing",
      "Bowel obstruction from stricture \u2014 CT shows no stricture here; obstructive symptoms absent"
    ],
    "biasFlags": {
      "anchoring": "Don't anchor solely on the known Crohn's diagnosis - consider that new symptoms could represent complications like perforation, abscess, or even unrelated conditions like appendicitis",
      "prematureClosure": "The combination of known IBD and typical symptoms may lead to premature closure without considering serious complications or alternative diagnoses that require different management",
      "availabilityBias": "Recent cases of appendicitis or gastroenteritis might overshadow the likelihood of IBD flare, or conversely, the known Crohn's history might make you dismiss other acute conditions"
    },
    "coachPrompts": {
      "phase2": "You've identified several reasonable possibilities for abdominal pain in a young woman. As you interview Isabella, pay particular attention to the timeline, character of symptoms, and any historical clues. What specific historical elements would help you differentiate between inflammatory conditions, infectious causes, and surgical emergencies?",
      "phase5": "Now that you've gathered your history and physical findings, consider how Isabella's known medical history fits with her current presentation. What findings support inflammatory bowel disease versus other causes? Are there any red flags that might suggest complications or require urgent intervention?",
      "finalDebrief": "This case illustrates how chronic conditions can present with acute exacerbations that mimic other diseases. Isabella's presentation was classic for a Crohn's flare with ileocecal involvement, but notice how the differential included both related complications and unrelated conditions like appendicitis. The key distinguishing features were the gradual onset, bloody diarrhea, known IBD history, and examination findings consistent with terminal ileal inflammation rather than isolated appendiceal involvement.",
      "final": "Diagnosis: Crohn's disease flare, moderate-severe, steroid-dependent. Key learning: (1) Crohn's vs UC: Crohn's = transmural, any GI tract from mouth to anus, skip lesions, ileal/ileocolonic most common, perianal disease, fistulas/abscesses, smoking worsens. UC = mucosal, continuous from rectum proximally, no skip lesions, rectal involvement almost always. (2) Disease activity scoring: Harvey-Bradshaw Index (HBI) \u2014 stool frequency, abdominal pain, general wellbeing, complications. HBI >8 = moderate-severe. CRP + fecal calprotectin correlate with endoscopic activity. (3) Steroid-dependent definition: \u22652 steroid courses in 12 months or inability to taper below prednisolone 10mg = steroid-dependent = indication for biologic therapy. Steroids should never be maintenance therapy in IBD. (4) Before biologic initiation: TB screening (IGRA), HBV (reactivation risk), HIV, varicella immunity, pneumococcal vaccine. Exclude active infection \u2014 giving anti-TNF during active TB = fatal reactivation. (5) Anti-TNF vs vedolizumab: infliximab (anti-TNF) = faster onset, systemic immunosuppression, effective for extraintestinal manifestations. Vedolizumab (anti-\u03b14\u03b27 integrin) = gut-selective, slower onset, safer in elderly/vulnerable patients."
    }
  }
};
