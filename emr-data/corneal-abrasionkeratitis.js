
window.EMR_DATA = {
  "patient": {
    "name": "Priya Mehta",
    "patientHPI": "I'm here for my yearly visit and everything's been going well. I wear contacts every day and sometimes fall asleep in them even though I know I shouldn't - my eye doctor always tells me not to do that. My seasonal allergies bother my eyes sometimes but the drops I buy at the pharmacy help with that.",
    "dob": "09/02/1996",
    "age": 28,
    "sex": "Female",
    "mrn": "RDX-2025-57418",
    "pronouns": "She/Her",
    "insurance": "Aetna PPO",
    "pcp": "Dr. Lauren Fischer, MD",
    "pharmacy": "Walgreens \u2014 2600 Weston Rd, Weston, FL",
    "language": "English, Hindi",
    "race": "Asian (South Asian)",
    "address": "331 Peachtree Rd, Memphis, TN 38107",
    "phone": "(954) 555-4519",
    "email": "p.mehta96@email.com",
    "emergencyContact": {
      "name": "Vikram Mehta (Father)",
      "phone": "(954) 555-4535"
    }
  },
  "problems": [
    {
      "problem": "Bacterial keratitis \u2014 contact lens-related, Pseudomonas suspected",
      "icd": "H16.009",
      "onset": "2024",
      "status": "Active",
      "notes": "Jason Park, 24M \u2014 contact lens wearer (extended wear). 2-day severe right eye pain, photophobia, decreased vision, purulent discharge. Slit lamp: central corneal ulcer 3mm, hypopyon (layering white cells in anterior chamber). Emergency ophthalmology."
    },
    {
      "problem": "Hypopyon \u2014 severe anterior chamber inflammation",
      "icd": "H16.009",
      "onset": "2024",
      "status": "Active",
      "notes": "Hypopyon (white layering of inflammatory cells in anterior chamber) indicates severe infection with significant anterior chamber reaction. Poor prognostic sign for corneal scar."
    },
    {
      "problem": "Contact lens complication \u2014 extended wear highest risk",
      "icd": "H16.009",
      "onset": "2024",
      "status": "Active",
      "notes": "Extended wear contact lenses (overnight wear) increase risk 10-15x vs daily wear. Pseudomonas aeruginosa is the most common pathogen in contact lens keratitis \u2014 can cause rapidly progressive corneal destruction."
    }
  ],
  "medications": [
    {
      "name": "Ciprofloxacin 0.3% ophthalmic drops \u2014 q1h initially",
      "sig": "Fluoroquinolone first-line for bacterial keratitis. Load: q15min x 6 doses first hour, then q30min x 6h, then q1h. Adjust to q4h as clinical improvement.",
      "prescriber": "Ophthalmology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 q1h"
    },
    {
      "name": "Discontinue contact lenses immediately \u2014 forever this eye",
      "sig": "Remove all contact lenses immediately. Do not reinsert until fully healed and ophthalmology clears. Extended wear should be permanently discontinued.",
      "prescriber": "Ophthalmology",
      "start": "2024",
      "refills": 0,
      "status": "Discontinued"
    },
    {
      "name": "Corneal scraping for culture \u2014 before starting antibiotics",
      "sig": "Corneal scraping of ulcer edge for Gram stain and culture. Guides antibiotic therapy. Must be done before antibiotics \u2014 sensitivity drops rapidly after treatment started.",
      "prescriber": "Ophthalmology",
      "start": "2024",
      "refills": 0,
      "status": "Done \u2014 before antibiotics"
    }
  ],
  "allergies": [
    {
      "allergen": "Erythromycin",
      "type": "Drug",
      "reaction": "GI upset \u2014 severe nausea and cramping",
      "severity": "Moderate",
      "verified": "Patient-reported"
    },
    {
      "allergen": "Dust mites",
      "type": "Environmental",
      "reaction": "Rhinitis, eye itching",
      "severity": "Mild",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "10/22/2024",
      "bp": "110/68",
      "hr": 72,
      "rr": 14,
      "temp": "98.4\u00b0F",
      "spo2": "99%",
      "wt": "125 lbs",
      "ht": "5'3\"",
      "bmi": 22.1,
      "setting": "PCP Office"
    },
    {
      "date": "04/10/2024",
      "bp": "108/66",
      "hr": 70,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "99%",
      "wt": "123 lbs",
      "ht": "5'3\"",
      "bmi": 21.8,
      "setting": "PCP Office"
    },
    {
      "date": "10/18/2023",
      "bp": "112/70",
      "hr": 68,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "122 lbs",
      "ht": "5'3\"",
      "bmi": 21.6,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "10/22/2024",
      "type": "Primary Care",
      "provider": "Dr. Lauren Fischer, MD",
      "cc": "Annual wellness exam",
      "hpi": "28-year-old female for annual wellness visit. No acute complaints. Wears monthly soft contact lenses daily, sometimes sleeps in them despite counseling. Allergic conjunctivitis well-managed with OTC ketotifen. OCP tolerated well. Exercises regularly. Denies headaches, vision changes, or eye pain.",
      "exam": "General: NAD, well-appearing. HEENT: PERRL, EOMI, conjunctivae clear bilaterally, contact lenses in place. Neck: Supple. CV: RRR. Lungs: CTAB. Abdomen: Soft, NT.",
      "assessment": "1. Annual wellness \u2014 healthy young female\n2. High myopia with contact lens use \u2014 counseled again on proper wear hygiene, no sleeping in lenses\n3. Allergic conjunctivitis \u2014 controlled",
      "plan": "1. Continue current medications\n2. Reinforced: remove contact lenses nightly, hand hygiene before handling, replace per schedule\n3. Optometry follow-up for annual contact lens evaluation\n4. RTC 1 year or PRN"
    },
    {
      "id": "V002",
      "date": "04/10/2024",
      "type": "Primary Care",
      "provider": "Dr. Lauren Fischer, MD",
      "cc": "Eye redness and itching \u2014 seasonal allergies",
      "hpi": "28-year-old female presents with bilateral eye itching, tearing, and mild redness x 5 days. Consistent with prior spring allergy episodes. No pain, discharge, photophobia, or vision changes. Using ketotifen drops with partial relief.",
      "exam": "General: NAD. Eyes: Bilateral mild conjunctival injection, chemosis, no discharge, corneas clear by penlight exam, pupils reactive.",
      "assessment": "1. Seasonal allergic conjunctivitis \u2014 bilateral, mild\n2. No concerning features for infectious etiology",
      "plan": "1. Continue ketotifen drops BID\n2. Add olopatadine 0.1% if inadequate response\n3. Cool compresses\n4. Avoid rubbing eyes especially with contacts in\n5. Return if purulent discharge, pain, vision change"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Bacterial Keratitis",
      "results": [
        {
          "test": "Slit lamp \u2014 ulcer size",
          "value": "3mm central corneal ulcer with dense stromal infiltrate",
          "unit": "",
          "ref": "No ulcer",
          "flag": "H"
        },
        {
          "test": "Hypopyon",
          "value": "Present \u2014 2mm layering",
          "unit": "",
          "ref": "Absent",
          "flag": "H"
        },
        {
          "test": "Visual acuity right",
          "value": "20/400",
          "unit": "",
          "ref": "20/20",
          "flag": "H"
        },
        {
          "test": "Corneal scraping \u2014 Gram stain",
          "value": "Gram-negative rods \u2014 Pseudomonas suspected",
          "unit": "",
          "ref": "No organisms",
          "flag": "H"
        },
        {
          "test": "IOP right",
          "value": "14",
          "unit": "mmHg",
          "ref": "10-21",
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
      "lot": "FL2024-258",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/20/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-688",
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
      "date": "2014",
      "site": "Left deltoid IM",
      "lot": "\u2014",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: Myopia, T2DM, alive at 56",
    "Father: HTN, glaucoma (open-angle), alive at 58",
    "Sister: Myopia, asthma, age 24",
    "Maternal grandmother: Cataracts, T2DM, deceased at 78"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Accountant \u2014 office work; extensive screen time"
    ],
    [
      "Marital",
      "Single, lives with roommate"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Social, 1-2 drinks on weekends"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Running 3x/week; Pilates 2x/week"
    ],
    [
      "Housing",
      "Apartment with roommate"
    ],
    [
      "Safety",
      "Denies IPV; seatbelt"
    ],
    [
      "Advance Directive",
      "None on file"
    ]
  ],
  "meta": {
    "caseId": "corneal-abrasionkeratitis",
    "diagnosis": "Contact Lens-Related Bacterial Keratitis \u2014 Pseudomonas",
    "acuity": 3,
    "presentation": "Eye Emergency",
    "category": "ophthalmologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Priya appears anxious and concerned, holding her hand partially over her right eye. She's cooperative but clearly in discomfort, speaking softly and wincing occasionally when looking toward light sources.",
    "interviewQuestions": [
      "Can you tell me exactly when your eye symptoms started?",
      "Describe what your eye feels like right now",
      "Which eye is bothering you, or is it both eyes?",
      "On a scale of 1-10, how would you rate your eye pain?",
      "Have you noticed any changes in your vision?",
      "Are you having any discharge from your eye?",
      "When did you last wear your contact lenses?",
      "How long do you typically wear your contacts each day?",
      "Have you been sleeping in your contact lenses recently?",
      "Are you experiencing any light sensitivity?",
      "Have you had any recent eye infections or injuries?",
      "What medications are you currently taking?",
      "Do you have any allergies I should know about?"
    ],
    "patientResponses": {
      "default": "I'm not sure what you mean. Could you ask that differently? My eye is really hurting right now.",
      "onset": "It started yesterday morning when I woke up. My right eye felt scratchy at first, but by afternoon it was really painful and red.",
      "character": "It feels like there's something sharp stuck in my eye, like sand or glass. It's a constant burning and stabbing pain.",
      "location": "It's my right eye only. The pain is mostly in the center and spreads across the whole eye when I blink.",
      "severity": "The pain is about an 8 out of 10 right now. I can barely keep my eye open and it's hard to focus on work.",
      "aggravating": "Any light makes it much worse - even dim lighting hurts. Blinking is terrible, and trying to look around makes the pain shoot through my eye.",
      "relieving": "I've tried keeping my eye closed and using some old eye drops I had, but nothing really helps. Ice seemed to help a tiny bit.",
      "associated": "My eye is very red and watery, and there's some thick yellowish discharge, especially when I wake up. My vision in that eye is definitely blurry.",
      "denies": "No fever, no headache, the other eye is fine. No nausea or vomiting. No recent trauma to my eye.",
      "history": "I've never had anything like this before. I get seasonal allergy symptoms but this is completely different - much more painful.",
      "medications": "Ketotifen 0.025% ophthalmic drops BID PRN; Oral Contraceptive (Levonorgestrel-Ethinyl Estradiol)",
      "allergies": "Erythromycin, Dust mites",
      "family": "My father has glaucoma and both my parents and sister are nearsighted like me, but no one's had serious eye infections.",
      "social": "I'm an accountant so I'm on the computer all day. I wear contacts daily, usually 12-14 hours. I know I shouldn't, but I fall asleep in them probably 2-3 times a week. I don't smoke, just drink socially on weekends."
    },
    "examManeuvers": [
      "Visual acuity testing both eyes",
      "Pupillary light reflex and accommodation",
      "Extraocular movement assessment",
      "Conjunctival and scleral inspection",
      "Corneal examination with penlight",
      "Fluorescein staining of cornea",
      "Eyelid eversion and inspection",
      "Preauricular lymph node palpation",
      "Intraocular pressure assessment",
      "Fundoscopic examination"
    ],
    "examFindings": {
      "Visual acuity testing both eyes": "Right eye: 20/80, Left eye: 20/25 (baseline with correction)",
      "Pupillary light reflex and accommodation": "Right pupil sluggishly reactive, left normal. Significant photophobia in right eye.",
      "Extraocular movement assessment": "Full range of motion both eyes, but patient reports increased pain with right eye movement",
      "Conjunctival and scleral inspection": "Right eye: marked conjunctival injection, ciliary flush present. Left eye: normal",
      "Corneal examination with penlight": "Right cornea appears hazy with central opacity and surrounding edema. Left cornea clear.",
      "Fluorescein staining of cornea": "Right eye shows central epithelial defect with irregular borders and underlying stromal involvement",
      "Eyelid eversion and inspection": "No foreign body seen, moderate mucopurulent discharge in right eye",
      "Preauricular lymph node palpation": "Right preauricular node slightly enlarged and tender",
      "Intraocular pressure assessment": "Unable to obtain reliable measurement due to patient discomfort and corneal involvement",
      "Fundoscopic examination": "Left eye normal, right eye view obscured by corneal opacity"
    },
    "ddxTargets": [
      "Bacterial keratitis \u2014 Pseudomonas (contact lens) (correct)",
      "Acanthamoeba keratitis \u2014 contact lens wearer + fresh water exposure; ring infiltrate; severe pain out of proportion; propamidine treatment",
      "Herpes simplex keratitis \u2014 dendritic ulcer on fluorescein; no hypopyon initially; acyclovir ophthalmic",
      "Fungal keratitis \u2014 trauma with vegetable matter; feathery infiltrate; voriconazole",
      "Corneal abrasion \u2014 no infiltrate; no hypopyon; superficial; heals quickly with antibiotic drops"
    ],
    "biasFlags": {
      "anchoring": "Student may anchor on the patient's history of allergic conjunctivitis and initially dismiss this as a more severe allergic reaction, missing the infectious component",
      "prematureClosure": "The clear contact lens overwear history might lead to quick assumption of simple contact lens irritation without fully exploring the infectious keratitis possibility",
      "availabilityBias": "Students may focus on more commonly seen conditions like conjunctivitis rather than considering the serious sight-threatening bacterial keratitis that requires urgent treatment"
    },
    "coachPrompts": {
      "phase2": "You've identified this as an eye emergency in a contact lens wearer. What specific historical details will help you distinguish between mechanical irritation, infectious keratitis, and other contact lens complications? Consider what questions might reveal high-risk behaviors.",
      "phase5": "Your exam findings show corneal involvement with epithelial defect and stromal changes in a contact lens overwear patient. How does this constellation of findings help narrow your differential? What makes this particularly concerning for Pseudomonas infection?",
      "finalDebrief": "This case highlights how contact lens overwear, especially sleeping in lenses, creates an ideal environment for Pseudomonas keratitis. The rapid onset, severe pain, and central corneal involvement were key distinguishing features from simple irritation or viral causes. How did the patient's risk factors and clinical presentation guide your diagnostic reasoning?",
      "final": "Diagnosis: contact lens-related bacterial keratitis, Pseudomonas. Key learning: (1) Bacterial keratitis vs corneal abrasion: corneal abrasion = superficial defect, no stromal infiltrate, heals quickly. Bacterial keratitis = stromal infiltrate (white opacity), hypopyon, severe pain, progressive. The presence of a stromal infiltrate is the key finding. (2) Pseudomonas keratitis in contact lens wearers: Pseudomonas aeruginosa produces proteases that cause rapid corneal melting (keratolysis). Can progress from small ulcer to corneal perforation in 24-48 hours if untreated. Extended wear lenses have the highest risk. (3) Fluoroquinolone loading dose: ciprofloxacin 0.3% or moxifloxacin 0.5% ophthalmic \u2014 intensive loading (q15min initially) to achieve therapeutic concentrations in corneal stroma. Concentration-dependent killing. (4) Culture before antibiotics: corneal scraping for Gram stain and culture must be performed before antibiotics \u2014 sensitivity drops rapidly. Ophthalmology performs this under slit lamp with blade or spatula. (5) Hypopyon: sterile layering of inflammatory cells, not pus. Indicates severe anterior chamber reaction. In bacterial keratitis, hypopyon is reactive (bacteria usually NOT in anterior chamber). Resolves with treatment. If bacteria are IN the anterior chamber \u2192 endophthalmitis (worse prognosis, requires vitrectomy)."
    }
  }
};
