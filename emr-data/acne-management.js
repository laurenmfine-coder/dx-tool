
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Destiny Williams",
      "patientHPI": "I've had bad acne since I was 16 and I'm 22 now. I've tried a bunch of stuff over the counter but nothing works. My face has a lot of pimples and blackheads and now I'm getting scars. It really affects my confidence.",
      "dob": "07/14/2003",
      "age": "22",
      "sex": "Female",
      "pronouns": "she/her",
      "mrn": "MRN-442081",
      "language": "English",
      "race": "Black/African American",
      "phone": "(404) 555-2081",
      "email": "d.williams@email.com",
      "address": "1882 Peachtree Rd NW, Atlanta, GA 30309",
      "insurance": "Medicaid",
      "pcp": "Dr. Sharon Grant, MD",
      "pharmacy": "CVS \u2014 Peachtree Rd",
      "emergencyContact": {
        "name": "Linda Williams",
        "phone": "(404) 555-7744",
        "relationship": "Mother"
      }
    },
    "allergies": [
      {
        "allergen": "NKDA",
        "reaction": "",
        "severity": "",
        "type": ""
      }
    ],
    "immunizations": [
      {
        "name": "Influenza",
        "date": "10/2025",
        "lot": "FL-25",
        "site": "Left Deltoid"
      }
    ],
    "familyHistory": [
      "Mother: acne, required Accutane as teenager",
      "Father: acne"
    ],
    "socialHistory": [
      [
        "Contraception",
        "Uses oral contraceptive pill (norgestimate/ethinyl estradiol) for 6 months \u2014 may have some benefit for acne"
      ],
      [
        "Prior treatments",
        "OTC: benzoyl peroxide 2.5%, salicylic acid cleanser. Tried adapalene 0.1% gel x2 months \u2014 mild improvement only."
      ],
      [
        "Skin concern",
        "Post-inflammatory hyperpigmentation (PIH) significant \u2014 darker skin tone increases PIH risk"
      ],
      [
        "Stress",
        "College student \u2014 exams trigger flares"
      ],
      [
        "Diet",
        "Reports high glycemic index diet \u2014 dairy/sugar. Limited evidence but patient asks about this."
      ]
    ]
  },
  "encounters": {
    "clinic": {
      "patient": {
        "chiefComplaint": "22F moderate-severe papulopustular acne x6 years, OTC failure, PIH on skin of color \u2014 stepping up to oral antibiotics + topical retinoid + referral for isotretinoin discussion",
        "diagnosis": "Moderate-Severe Acne Vulgaris \u2014 Initiating Combination Oral + Topical Therapy"
      },
      "problems": [
        {
          "id": "prob-1",
          "description": "Moderate-severe acne vulgaris \u2014 grading: >20 comedones + 15-50 inflammatory lesions + early scarring = moderate-severe. OTC therapy failure. Step up to oral antibiotics + topical retinoid combination.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "L70.0"
        },
        {
          "id": "prob-2",
          "description": "Post-inflammatory hyperpigmentation (PIH) \u2014 significant concern in skin of color (Fitzpatrick types IV-VI). PIH worsened by inflammation \u2014 treating acne aggressively reduces PIH. Azelaic acid can treat PIH simultaneously.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "L81.4"
        },
        {
          "id": "prob-3",
          "description": "Scarring \u2014 early ice-pick scars bilateral cheeks. Risk of progression if acne not controlled. Dermatology referral for isotretinoin discussion given scarring + moderate-severe + 6-year history.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "L90.5"
        },
        {
          "id": "prob-4",
          "description": "Isotretinoin (Accutane) consideration \u2014 indicated for: nodular/cystic acne OR acne with scarring OR recalcitrant moderate acne. iPLEDGE enrollment required (teratogenicity). Dermatology referral placed.",
          "status": "Active",
          "onset": "Chronic",
          "icd10": "L70.0"
        }
      ],
      "medications": [
        {
          "id": "med-1",
          "name": "Doxycycline",
          "dose": "100mg",
          "route": "PO",
          "frequency": "BID x12 weeks \u2014 ORAL ANTIBIOTIC for moderate-severe acne. Limit to 3-4 months then reassess (antibiotic stewardship). Take with full glass of water \u2014 esophagitis risk.",
          "status": "NEW",
          "prescriber": "Dr. Sharon Grant, MD"
        },
        {
          "id": "med-2",
          "name": "Tretinoin 0.025% cream",
          "dose": "Pea-sized amount",
          "route": "Topical",
          "frequency": "Nightly \u2014 START 2-3x/week for 4 weeks to reduce retinoid dermatitis, then nightly. Apply to dry skin 20 min after washing.",
          "status": "NEW",
          "prescriber": "Dr. Sharon Grant, MD"
        },
        {
          "id": "med-3",
          "name": "Clindamycin 1% / Benzoyl Peroxide 5% gel (BenzaClin)",
          "dose": "Pea-sized amount",
          "route": "Topical",
          "frequency": "Every morning \u2014 BP prevents antibiotic resistance. Never use topical clindamycin without BP.",
          "status": "NEW",
          "prescriber": "Dr. Sharon Grant, MD"
        },
        {
          "id": "med-4",
          "name": "Azelaic Acid 20% cream",
          "dose": "Pea-sized amount",
          "route": "Topical",
          "frequency": "Every other night alternating with tretinoin \u2014 treats PIH + mild comedolytic. Gentler option for skin of color.",
          "status": "NEW",
          "prescriber": "Dr. Sharon Grant, MD"
        },
        {
          "id": "med-5",
          "name": "Norgestimate/Ethinyl Estradiol (Sprintec)",
          "dose": "1 tablet",
          "route": "PO",
          "frequency": "Daily \u2014 CONTINUE. OCPs reduce acne by lowering androgens. Has been taking x6 months.",
          "status": "Active \u2014 continue",
          "prescriber": "OB/GYN"
        }
      ],
      "vitals": [
        {
          "date": "03/15/2026",
          "time": "10:00",
          "bp": "112/72",
          "hr": "72",
          "rr": "16",
          "temp": "37.0\u00b0C",
          "spo2": "99%",
          "pain": "0/10"
        }
      ],
      "visits": [
        {
          "id": "visit-1",
          "type": "Primary Care \u2014 Dermatology Consult Visit",
          "date": "03/15/2026",
          "provider": "Dr. Sharon Grant, MD",
          "cc": "Acne management step-up \u2014 combination oral + topical therapy",
          "hpi": "22F with 6-year history of moderate-severe acne, failed OTC therapy including adapalene. On OCP x6 months. Significant PIH on skin of color \u2014 high stakes for her.\n\nACNE GRADING AND TREATMENT LADDER:\nMild (comedones, few papules): OTC topical (BP, adapalene, salicylic acid)\nModerate (multiple papules/pustules, some scarring risk): Topical retinoid + topical antibiotic/BP \u00b1 oral antibiotic\nSevere/Scarring (nodular/cystic, scarring): Oral antibiotics + retinoid + consider isotretinoin\n\u2192 This patient: MODERATE-SEVERE + early scarring = Step 3 + isotretinoin referral\n\nTOPICAL RETINOID TEACHING:\n- Tretinoin is vitamin A derivative \u2014 unclogs pores, prevents new comedones, reduces PIH\n- Start low and slow: 2-3x/week for first month to minimize retinoid dermatitis (peeling, redness)\n- Must use SPF 30+ daily \u2014 tretinoin increases photosensitivity\n- Results take 8-12 weeks \u2014 common cause of non-adherence (patients quit too early)\n- Apply to DRY skin 20-30 min after washing \u2014 reduces irritation\n\nANTIBIOTIC STEWARDSHIP in ACNE:\n- Oral antibiotics: use for MAX 3-4 months then reassess\n- ALWAYS pair topical antibiotic with benzoyl peroxide (BP kills resistant P. acnes)\n- Never use topical clindamycin without BP \u2014 promotes antibiotic resistance\n- Doxycycline: take with full glass of water (esophageal ulceration), take with food, avoid sun (photosensitivity), avoid dairy 2h before/after (chelation)\n\nSKIN OF COLOR CONSIDERATIONS:\n- PIH is a major concern \u2014 aggressive acne treatment reduces inflammation = less PIH\n- Azelaic acid: anti-inflammatory + mild comedolytic + tyrosinase inhibitor (fades PIH)\n- Avoid overly harsh regimens that cause irritation \u2014 irritation triggers PIH\n- SPF critical \u2014 UV exposure darkens PIH",
          "assessment": "Moderate-severe acne with PIH and early scarring. Starting combination therapy. Dermatology referral for isotretinoin evaluation given 6-year history and scarring.",
          "plan": "Doxycycline 100mg BID x12 weeks. Tretinoin 0.025% cream nightly (start 2-3x/week). Clindamycin/BP gel every AM. Azelaic acid every other night. Sunscreen SPF 30+ DAILY (non-negotiable). Dermatology referral \u2014 isotretinoin evaluation. Return visit 8 weeks \u2014 assess response. If no improvement at 12 weeks \u2192 discuss isotretinoin. Patient education: takes 8-12 weeks to see full effect, do not stop early."
        }
      ],
      "labs": [],
      "imaging": []
    },
    "ed": {
      "patient": {
        "chiefComplaint": "Not applicable",
        "diagnosis": "Clinic only"
      },
      "problems": [],
      "medications": [],
      "vitals": [],
      "visits": [],
      "labs": [],
      "imaging": []
    }
  },
  "references": [
    {
      "id": "AAD-Acne-2024",
      "title": "AAD Clinical Practice Guideline: Acne Vulgaris",
      "authors": "Zaenglein AL, Pathy AL, Schlosser BJ, et al.",
      "journal": "Journal of the American Academy of Dermatology",
      "year": 2016,
      "doi": "10.1016/j.jaad.2015.12.037",
      "url": "https://www.jaad.org/article/S0190-9622(15)02614-6/fulltext",
      "openAccess": false,
      "validates": [
        "Treatment ladder",
        "Oral antibiotic use with BP",
        "Retinoid recommendations",
        "Isotretinoin indications"
      ]
    },
    {
      "id": "StatPearls-Acne",
      "title": "Acne Vulgaris",
      "authors": "Sutaria AH, Masood S, Schlessinger J",
      "journal": "StatPearls",
      "year": 2024,
      "doi": "",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK459173/",
      "openAccess": true,
      "validates": [
        "Pathogenesis",
        "Treatment algorithm",
        "PIH in skin of color",
        "Doxycycline counseling"
      ]
    }
  ],
  "meta": {
    "diagnosis": "Severe Nodular/Cystic Acne \u2014 Isotretinoin Candidate",
    "caseId": "acne-management"
  },
  "problems": [
    {
      "problem": "Severe inflammatory nodulocystic acne \u2014 IGA 4",
      "icd": "L70.0",
      "onset": "2021",
      "status": "Active",
      "notes": "Tyler Brooks, 19M \u2014 forehead, cheeks, chin, upper back. 12+ nodules/cysts. Deep scarring developing. Failed 3 months doxycycline + benzoyl peroxide + adapalene."
    },
    {
      "problem": "Scarring \u2014 early atrophic scars bilateral cheeks",
      "icd": "L90.5",
      "onset": "2023",
      "status": "Active",
      "notes": "Active scarring from cystic lesions. Isotretinoin is the only treatment that prevents further scar development."
    },
    {
      "problem": "Psychological impact \u2014 avoiding social situations",
      "icd": "F32.9",
      "onset": "2023",
      "status": "Active",
      "notes": "PHQ-9 6 (mild). Monitor mood on isotretinoin. Acne itself causes depression independent of isotretinoin."
    }
  ],
  "medications": [
    {
      "name": "Isotretinoin 0.5mg/kg/day \u2192 1mg/kg/day \u2014 5-6 month course",
      "sig": "Target cumulative dose 120-150mg/kg. iPLEDGE program mandatory. Monthly visits, labs, and pregnancy tests (females). Start 0.5mg/kg x1 month then escalate if tolerated.",
      "prescriber": "Dermatology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 iPLEDGE"
    },
    {
      "name": "Lip balm + gentle non-comedogenic moisturizer \u2014 daily",
      "sig": "Mucocutaneous dryness is universal. Prevents cheilitis (most common reason patients want to stop).",
      "prescriber": "Dermatology",
      "start": "2024",
      "refills": 0,
      "status": "Active \u2014 supportive"
    },
    {
      "name": "Sunscreen SPF 30+ \u2014 daily",
      "sig": "Photosensitivity from isotretinoin. Avoid prolonged sun exposure.",
      "prescriber": "Dermatology",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "labs": [
    {
      "date": "04/2024",
      "panel": "Isotretinoin Baseline (iPLEDGE)",
      "results": [
        {
          "test": "Fasting lipid panel \u2014 triglycerides",
          "value": "142",
          "unit": "mg/dL",
          "ref": "<150",
          "flag": ""
        },
        {
          "test": "LFTs \u2014 ALT",
          "value": "22",
          "unit": "U/L",
          "ref": "7-56",
          "flag": ""
        },
        {
          "test": "CBC \u2014 WBC",
          "value": "7.2",
          "unit": "K/\u03bcL",
          "ref": "4.5-11",
          "flag": ""
        },
        {
          "test": "Pregnancy test (urine hCG)",
          "value": "Negative",
          "unit": "",
          "ref": "Negative",
          "flag": ""
        },
        {
          "test": "IGA (Investigator Global Assessment)",
          "value": "4/5",
          "unit": "",
          "ref": "0 = clear",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [],
  "guided": {
    "ddxTargets": [
      "Severe nodulocystic acne \u2014 isotretinoin (correct)",
      "Continue topical therapy \u2014 failed; IGA 4 with scarring requires systemic isotretinoin",
      "Oral spironolactone first-line (males) \u2014 not indicated in males; works via anti-androgenic mechanism",
      "Intralesional triamcinolone only \u2014 adjunct for individual cysts, not definitive therapy",
      "Acne rosacea \u2014 different morphology, location, age pattern; no comedones",
      "Gram-negative folliculitis \u2014 complication of prolonged antibiotic use; culture would distinguish"
    ],
    "coachPrompts": {
      "final": "Diagnosis: severe nodulocystic acne \u2014 isotretinoin candidate. Key learning: (1) Isotretinoin is the only treatment that produces long-term remission in severe acne by targeting all four pathogenic factors: sebum production (\u219390%), C. acnes colonization, follicular keratinization, and inflammation. (2) iPLEDGE requirements: two forms of contraception (females), monthly pregnancy tests, liver function tests, lipid panel before starting and monthly. (3) Cumulative dose determines remission rate: 120-150mg/kg = ~70-80% chance of permanent clearance. Doses <100mg/kg have higher relapse rates. (4) Common side effects: cheilitis (universal), xerosis, epistaxis, myalgias, triglyceride elevation. Rare: pseudotumor cerebri (avoid tetracyclines simultaneously), IBD signal (controversial, not causally proven). (5) Mental health monitoring: acne itself causes significant depression and anxiety. Monitor PHQ-9 at each visit; the isotretinoin-depression link is debated and the net mental health effect after clearing severe acne is often positive."
    }
  }
};
