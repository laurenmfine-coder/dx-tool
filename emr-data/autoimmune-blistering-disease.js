
window.EMR_DATA = {
  "patient": {
    "name": "Eloise Beaumont",
    "patientHPI": "For the past three months, I've had this unbearable itching all over my body that keeps me awake at night, especially on my chest, arms, and thighs. Recently I've noticed red patches and a few small blisters on my forearms and stomach that seem to be getting worse.",
    "dob": "12/08/1943",
    "age": 82,
    "sex": "Female",
    "mrn": "RDX-2025-41012",
    "pronouns": "She/Her",
    "insurance": "Medicare Part B with Medigap Plan G",
    "pcp": "Dr. Amanda Liu, MD",
    "pharmacy": "Publix Pharmacy \u2014 2200 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White (French Canadian descent)",
    "address": "6870 Foxglove Dr, Albuquerque, NM 87108",
    "phone": "(954) 555-1248",
    "email": "e.beaumont43@email.com",
    "emergencyContact": {
      "name": "Claire Beaumont-Harris (Daughter)",
      "phone": "(954) 555-1260"
    }
  },
  "problems": [
    {
      "problem": "Bullous pemphigoid \u2014 generalized, severe",
      "icd": "L12.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Ruth Anderson, 78F \u2014 3-week history of intensely pruritic urticarial plaques progressing to tense bullae on trunk, extremities, and thighs. Nikolsky sign negative. Biopsy: subepidermal blister with eosinophils. BP180/BP230 antibodies positive."
    },
    {
      "problem": "Medication trigger \u2014 review drug list",
      "icd": "L12.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Drug-induced BP: dipeptidyl peptidase-4 inhibitors (gliptins), furosemide, penicillins, beta-blockers. Review medication list and stop potential triggers."
    },
    {
      "problem": "Secondary infection risk \u2014 open bullae",
      "icd": "L12.0",
      "onset": "2024",
      "status": "Active",
      "notes": "Ruptured bullae are portals of entry. Monitor for wound infection, sepsis. Careful wound care."
    }
  ],
  "medications": [
    {
      "name": "High-potency topical corticosteroids \u2014 clobetasol 0.05% ointment",
      "sig": "Topical steroids are first-line for localized BP. For generalized disease: clobetasol applied to lesions BID. Non-inferior to systemic steroids in the TORCH trial with fewer systemic side effects.",
      "prescriber": "Dermatology",
      "start": "2024",
      "refills": 1,
      "status": "Active \u2014 BID"
    },
    {
      "name": "Prednisone 0.5mg/kg/day \u2014 for extensive disease",
      "sig": "Systemic steroids for severe/generalized BP. Taper over months based on clinical response and antibody levels.",
      "prescriber": "Dermatology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Doxycycline 100mg BID + niacinamide \u2014 steroid-sparing",
      "sig": "Anti-inflammatory mechanism. Steroid-sparing alternative especially in elderly who cannot tolerate systemic steroids. Useful for mild-moderate disease.",
      "prescriber": "Dermatology",
      "start": "2024",
      "refills": 1,
      "status": "Alternative/adjunct"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfonamides",
      "type": "Drug",
      "reaction": "Diffuse maculopapular rash",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "Codeine",
      "type": "Drug",
      "reaction": "Severe constipation and confusion",
      "severity": "Moderate",
      "verified": "Patient-reported"
    }
  ],
  "vitals": [
    {
      "date": "02/22/2026",
      "bp": "148/82",
      "hr": 88,
      "rr": 18,
      "temp": "99.4\u00b0F",
      "spo2": "96%",
      "wt": "142 lbs",
      "ht": "5'3\"",
      "bmi": 25.2,
      "setting": "ED"
    },
    {
      "date": "11/18/2025",
      "bp": "138/78",
      "hr": 72,
      "rr": 16,
      "temp": "98.2\u00b0F",
      "spo2": "97%",
      "wt": "144 lbs",
      "ht": "5'3\"",
      "bmi": 25.5,
      "setting": "PCP Office"
    },
    {
      "date": "08/04/2025",
      "bp": "134/76",
      "hr": 68,
      "rr": 16,
      "temp": "98.4\u00b0F",
      "spo2": "97%",
      "wt": "146 lbs",
      "ht": "5'3\"",
      "bmi": 25.9,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/18/2025",
      "type": "Primary Care",
      "provider": "Dr. Amanda Liu, MD",
      "cc": "Generalized itching, new rash",
      "hpi": "82F with HTN, hypothyroidism, paroxysmal AFib presents with 3-month history of worsening generalized pruritus. Reports intense itching on trunk, arms, and thighs that keeps her awake at night. Over past 2 weeks, has developed erythematous patches and a few small blisters on forearms and abdomen. No new medications, detergents, or exposures. Topical triamcinolone provides partial relief. No oral mucosal involvement. No fevers.",
      "exam": "NAD but uncomfortable from itching. Skin: Erythematous urticarial plaques on trunk, bilateral forearms, anterior thighs. Scattered intact tense blisters (0.5-2 cm) on left forearm and lower abdomen \u2014 clear fluid, no hemorrhage. Nikolsky sign negative. Oral mucosa: Clear, no erosions. No lymphadenopathy.",
      "assessment": "1. Pruritic eruption with tense bullae \u2014 differential includes bullous pemphigoid, linear IgA, drug reaction; pemphigoid most likely given age and presentation\n2. Chronic pruritus \u2014 likely prodromal BP",
      "plan": "1. Urgent dermatology referral for punch biopsy + DIF\n2. Continue triamcinolone cream\n3. Add hydroxyzine 25mg QHS for itch/sleep\n4. CBC with diff, CMP, ESR\n5. Hold on systemic steroids pending dermatology evaluation\n6. Return 2 weeks or sooner if rapid blister spread"
    },
    {
      "id": "V002",
      "date": "08/04/2025",
      "type": "Primary Care",
      "provider": "Dr. Amanda Liu, MD",
      "cc": "Routine follow-up, HTN, hypothyroidism",
      "hpi": "81F presents for routine 6-month follow-up. Reports mild generalized itching x 1 month \u2014 attributes to dry skin. No rash. HTN well-controlled. TSH at goal. AFib \u2014 no palpitations, rate-controlled. Using walker for ambulation \u2014 stable.",
      "exam": "NAD. CV: Irregularly irregular, rate 72. Lungs: CTAB. Skin: Dry skin diffusely; no rashes, lesions, or blisters. Ext: Trace edema bilat.",
      "assessment": "1. HTN \u2014 controlled\n2. Hypothyroidism \u2014 stable\n3. Paroxysmal AFib \u2014 rate controlled\n4. Pruritus \u2014 dry skin; recommend emollients",
      "plan": "1. Continue current medications\n2. Emollient cream BID for dry skin\n3. Labs: TSH, CMP\n4. Return 6 months"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Bullous Pemphigoid Workup",
      "results": [
        {
          "test": "BP180 (anti-NC16A) IgG",
          "value": "Positive \u2014 240 U/mL",
          "unit": "",
          "ref": "<9 U/mL",
          "flag": "H"
        },
        {
          "test": "BP230 IgG",
          "value": "Positive \u2014 180 U/mL",
          "unit": "",
          "ref": "<9 U/mL",
          "flag": "H"
        },
        {
          "test": "Skin biopsy \u2014 H&E",
          "value": "Subepidermal blister with eosinophils",
          "unit": "",
          "ref": "Normal epidermis",
          "flag": "H"
        },
        {
          "test": "DIF (direct immunofluorescence)",
          "value": "Linear IgG and C3 at BMZ (dermal-epidermal junction)",
          "unit": "",
          "ref": "Negative",
          "flag": "H"
        },
        {
          "test": "Eosinophils (peripheral)",
          "value": "1.8",
          "unit": "K/\u03bcL (18%)",
          "ref": "<0.5",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-9210",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Moderna)",
      "date": "10/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2310",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Prevnar 20",
      "date": "05/2023",
      "site": "Left deltoid IM",
      "lot": "PV20-540",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "01/2022",
      "site": "Right deltoid IM",
      "lot": "SX22-044",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "03/2022",
      "site": "Right deltoid IM",
      "lot": "SX22-198",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap",
      "date": "07/2020",
      "site": "Left deltoid IM",
      "lot": "TD20-402",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Rheumatoid arthritis, deceased at 90 (natural causes)",
    "Father: Hypertension, stroke at 78, deceased at 80",
    "Sister: Hypothyroidism, psoriasis, alive at 79",
    "Brother: Deceased at 74 (pancreatic cancer)"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired elementary school librarian; retired 2008"
    ],
    [
      "Marital",
      "Widowed (husband deceased 2019 \u2014 cardiac arrest); lives alone"
    ],
    [
      "Tobacco",
      "Never smoker"
    ],
    [
      "Alcohol",
      "Rare \u2014 occasional sherry at holidays"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Chair exercises 3x/week at senior center; uses walker for mobility"
    ],
    [
      "Housing",
      "Second-floor condo with elevator; daughter visits daily; considering assisted living"
    ],
    [
      "Safety",
      "Fall risk \u2014 uses walker; grab bars installed; wears medical alert pendant; no firearms"
    ],
    [
      "Advance Directive",
      "Living will signed; DNR; DPOA designated (daughter Claire)"
    ]
  ],
  "meta": {
    "caseId": "autoimmune-blistering-disease",
    "diagnosis": "Bullous Pemphigoid \u2014 Generalized Tense Bullae",
    "acuity": 3,
    "presentation": "Skin / Soft Tissue Emergency",
    "category": "dermatologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Eloise Beaumont appears uncomfortable but is alert and cooperative. They provide a clear history and seem appropriately concerned about their symptoms without being panicked.",
    "interviewQuestions": [
      "Tell me what brought you in today. When did skin / soft tissue emergency start?",
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
      "default": "She pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
      "onset": "'The symptoms started For the past three months, I've had this unbearable itching all over my body tha.'",
      "character": "'It's skin / soft tissue emergency \u2014 it's been bothering me quite a bit.'",
      "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
      "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
      "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
      "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
      "associated": "'Yes, I've had some associated symptoms consistent with Bullous Pemphigoid.'",
      "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
      "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
      "medications": "'I take Amlodipine 5mg daily; Lisinopril 20mg daily; Metoprolol Succinate 50mg daily; Apixaban 5mg BID; Levothyroxine 75mcg daily; Acetaminophen 500mg PRN; Triamcinolone 0.1% cream \u2014 topical BID.'",
      "allergies": "'My allergies are Sulfonamides, Codeine.'",
      "family": "Mother: Rheumatoid arthritis, deceased at 90 (natural causes)  Father: Hypertension, stroke at 78, deceased at 80  Sister: Hypothyroidism, psoriasis, alive at 79",
      "social": "Occupation: Retired elementary school librarian; retired 2008  Marital: Widowed (husband deceased 2019 \u2014 cardiac arrest); lives alone  Tobacco: Never smoker  Alcohol: Rare \u2014 occasional sherry at holidays  Drugs: Denies"
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
      "General appearance and level of distress": "Clinical finding consistent with Bullous Pemphigoid. Document specifically what you observe.",
      "Vital signs review": "Clinical finding consistent with Bullous Pemphigoid. Document specifically what you observe.",
      "Cardiovascular auscultation": "Clinical finding consistent with Bullous Pemphigoid. Document specifically what you observe.",
      "Pulmonary auscultation": "Clinical finding consistent with Bullous Pemphigoid. Document specifically what you observe.",
      "Abdominal examination": "Clinical finding consistent with Bullous Pemphigoid. Document specifically what you observe.",
      "Extremity assessment": "Clinical finding consistent with Bullous Pemphigoid. Document specifically what you observe.",
      "Skin examination": "Clinical finding consistent with Bullous Pemphigoid. Document specifically what you observe.",
      "Targeted system examination": "Clinical finding consistent with Bullous Pemphigoid. Document specifically what you observe."
    },
    "ddxTargets": [
      "Bullous pemphigoid (correct)",
      "Pemphigus vulgaris \u2014 flaccid bullae; Nikolsky positive; supraepidermal blister; desmoglein 1/3 antibodies",
      "Dermatitis herpetiformis \u2014 small grouped vesicles on extensor surfaces; gluten-sensitive enteropathy; IgA at tips of dermal papillae",
      "Stevens-Johnson syndrome/TEN \u2014 drug-triggered; mucous membrane involvement; full-thickness epidermal necrosis; different DIF",
      "Contact dermatitis bullous \u2014 localized; known allergen; negative DIF",
      "Drug-induced linear IgA bullous dermatosis \u2014 vancomycin, lithium; linear IgA at BMZ; negative BP180/230"
    ],
    "biasFlags": {
      "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Bullous Pemphigoid, carefully consider the full differential including must-not-miss conditions.",
      "prematureClosure": "After identifying Bullous Pemphigoid, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
      "availabilityBias": "Students may overweight or underweight Bullous Pemphigoid based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
      "phase2": "You've reviewed Eloise Beaumont's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
      "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
      "finalDebrief": "The diagnosis is Bullous Pemphigoid (Generalized Tense Bullae with Prodromal Pruritus and Peripheral Eosinophilia in Elderly Female on Anticoagulation). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?",
      "final": "Diagnosis: bullous pemphigoid. Key learning: (1) BP vs pemphigus vulgaris distinction: BP = TENSE bullae, Nikolsky NEGATIVE, SUBEPIDERMAL split, older patients, pruritus dominant. Pemphigus vulgaris = FLACCID bullae, Nikolsky POSITIVE, SUPRAEPIDERMAL (intraepidermal) split, mucosal involvement common, desmoglein antibodies. The Nikolsky sign (lateral pressure on intact skin causes separation) is the key clinical distinction. (2) BP pathophysiology: IgG antibodies against hemidesmosomal proteins BP180 (NC16A domain) and BP230 \u2192 complement activation \u2192 eosinophil recruitment \u2192 subepidermal split. BP180 antibodies correlate with disease severity. (3) DIF is diagnostic: linear IgG and C3 at the dermal-epidermal junction (basement membrane zone) = BP. IgA at dermal papillae tips = dermatitis herpetiformis. Intraepidermal IgG = pemphigus. (4) Drug-induced BP: DPP-4 inhibitors (gliptins \u2014 sitagliptin, saxagliptin) are the most common cause of drug-induced BP. Check medication list in every new BP diagnosis. (5) Treatment trend: topical steroids (clobetasol) \u00b1 doxycycline/niacinamide is increasingly used instead of systemic steroids to minimize side effects in elderly patients \u2014 TORCH trial showed non-inferiority."
    }
  }
};
