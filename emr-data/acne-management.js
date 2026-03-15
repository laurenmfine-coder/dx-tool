/* emr-data/acne-management.js
   Acne Vulgaris — Stepped Management in Clinic
   Category: dermatology | Acuity: ESI-4
   Settings: Clinic
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Destiny Williams",
      "patientHPI": "I've had bad acne since I was 16 and I'm 22 now. I've tried a bunch of stuff over the counter but nothing works. My face has a lot of pimples and blackheads and now I'm getting scars. It really affects my confidence.",
      "dob": "07/14/2003", "age": "22", "sex": "Female", "pronouns": "she/her",
      "mrn": "MRN-442081", "language": "English", "race": "Black/African American",
      "phone": "(404) 555-2081", "email": "d.williams@email.com",
      "address": "1882 Peachtree Rd NW, Atlanta, GA 30309",
      "insurance": "Medicaid", "pcp": "Dr. Sharon Grant, MD",
      "pharmacy": "CVS — Peachtree Rd",
      "emergencyContact": { "name": "Linda Williams", "phone": "(404) 555-7744", "relationship": "Mother" }
    },
    "allergies": [{ "allergen": "NKDA", "reaction": "", "severity": "", "type": "" }],
    "immunizations": [{ "name": "Influenza", "date": "10/2025", "lot": "FL-25", "site": "Left Deltoid" }],
    "familyHistory": ["Mother: acne, required Accutane as teenager", "Father: acne"],
    "socialHistory": [
      ["Contraception", "Uses oral contraceptive pill (norgestimate/ethinyl estradiol) for 6 months — may have some benefit for acne"],
      ["Prior treatments", "OTC: benzoyl peroxide 2.5%, salicylic acid cleanser. Tried adapalene 0.1% gel x2 months — mild improvement only."],
      ["Skin concern", "Post-inflammatory hyperpigmentation (PIH) significant — darker skin tone increases PIH risk"],
      ["Stress", "College student — exams trigger flares"],
      ["Diet", "Reports high glycemic index diet — dairy/sugar. Limited evidence but patient asks about this."]
    ]
  },
  "encounters": {
    "clinic": {
      "patient": {
        "chiefComplaint": "22F moderate-severe papulopustular acne x6 years, OTC failure, PIH on skin of color — stepping up to oral antibiotics + topical retinoid + referral for isotretinoin discussion",
        "diagnosis": "Moderate-Severe Acne Vulgaris — Initiating Combination Oral + Topical Therapy"
      },
      "problems": [
        { "id": "prob-1", "description": "Moderate-severe acne vulgaris — grading: >20 comedones + 15-50 inflammatory lesions + early scarring = moderate-severe. OTC therapy failure. Step up to oral antibiotics + topical retinoid combination.", "status": "Active", "onset": "Chronic", "icd10": "L70.0" },
        { "id": "prob-2", "description": "Post-inflammatory hyperpigmentation (PIH) — significant concern in skin of color (Fitzpatrick types IV-VI). PIH worsened by inflammation — treating acne aggressively reduces PIH. Azelaic acid can treat PIH simultaneously.", "status": "Active", "onset": "Chronic", "icd10": "L81.4" },
        { "id": "prob-3", "description": "Scarring — early ice-pick scars bilateral cheeks. Risk of progression if acne not controlled. Dermatology referral for isotretinoin discussion given scarring + moderate-severe + 6-year history.", "status": "Active", "onset": "Chronic", "icd10": "L90.5" },
        { "id": "prob-4", "description": "Isotretinoin (Accutane) consideration — indicated for: nodular/cystic acne OR acne with scarring OR recalcitrant moderate acne. iPLEDGE enrollment required (teratogenicity). Dermatology referral placed.", "status": "Active", "onset": "Chronic", "icd10": "L70.0" }
      ],
      "medications": [
        { "id": "med-1", "name": "Doxycycline", "dose": "100mg", "route": "PO", "frequency": "BID x12 weeks — ORAL ANTIBIOTIC for moderate-severe acne. Limit to 3-4 months then reassess (antibiotic stewardship). Take with full glass of water — esophagitis risk.", "status": "NEW", "prescriber": "Dr. Sharon Grant, MD" },
        { "id": "med-2", "name": "Tretinoin 0.025% cream", "dose": "Pea-sized amount", "route": "Topical", "frequency": "Nightly — START 2-3x/week for 4 weeks to reduce retinoid dermatitis, then nightly. Apply to dry skin 20 min after washing.", "status": "NEW", "prescriber": "Dr. Sharon Grant, MD" },
        { "id": "med-3", "name": "Clindamycin 1% / Benzoyl Peroxide 5% gel (BenzaClin)", "dose": "Pea-sized amount", "route": "Topical", "frequency": "Every morning — BP prevents antibiotic resistance. Never use topical clindamycin without BP.", "status": "NEW", "prescriber": "Dr. Sharon Grant, MD" },
        { "id": "med-4", "name": "Azelaic Acid 20% cream", "dose": "Pea-sized amount", "route": "Topical", "frequency": "Every other night alternating with tretinoin — treats PIH + mild comedolytic. Gentler option for skin of color.", "status": "NEW", "prescriber": "Dr. Sharon Grant, MD" },
        { "id": "med-5", "name": "Norgestimate/Ethinyl Estradiol (Sprintec)", "dose": "1 tablet", "route": "PO", "frequency": "Daily — CONTINUE. OCPs reduce acne by lowering androgens. Has been taking x6 months.", "status": "Active — continue", "prescriber": "OB/GYN" }
      ],
      "vitals": [{ "date": "03/15/2026", "time": "10:00", "bp": "112/72", "hr": "72", "rr": "16", "temp": "37.0°C", "spo2": "99%", "pain": "0/10" }],
      "visits": [{
        "id": "visit-1", "type": "Primary Care — Dermatology Consult Visit", "date": "03/15/2026", "provider": "Dr. Sharon Grant, MD",
        "cc": "Acne management step-up — combination oral + topical therapy",
        "hpi": "22F with 6-year history of moderate-severe acne, failed OTC therapy including adapalene. On OCP x6 months. Significant PIH on skin of color — high stakes for her.\n\nACNE GRADING AND TREATMENT LADDER:\nMild (comedones, few papules): OTC topical (BP, adapalene, salicylic acid)\nModerate (multiple papules/pustules, some scarring risk): Topical retinoid + topical antibiotic/BP ± oral antibiotic\nSevere/Scarring (nodular/cystic, scarring): Oral antibiotics + retinoid + consider isotretinoin\n→ This patient: MODERATE-SEVERE + early scarring = Step 3 + isotretinoin referral\n\nTOPICAL RETINOID TEACHING:\n- Tretinoin is vitamin A derivative — unclogs pores, prevents new comedones, reduces PIH\n- Start low and slow: 2-3x/week for first month to minimize retinoid dermatitis (peeling, redness)\n- Must use SPF 30+ daily — tretinoin increases photosensitivity\n- Results take 8-12 weeks — common cause of non-adherence (patients quit too early)\n- Apply to DRY skin 20-30 min after washing — reduces irritation\n\nANTIBIOTIC STEWARDSHIP in ACNE:\n- Oral antibiotics: use for MAX 3-4 months then reassess\n- ALWAYS pair topical antibiotic with benzoyl peroxide (BP kills resistant P. acnes)\n- Never use topical clindamycin without BP — promotes antibiotic resistance\n- Doxycycline: take with full glass of water (esophageal ulceration), take with food, avoid sun (photosensitivity), avoid dairy 2h before/after (chelation)\n\nSKIN OF COLOR CONSIDERATIONS:\n- PIH is a major concern — aggressive acne treatment reduces inflammation = less PIH\n- Azelaic acid: anti-inflammatory + mild comedolytic + tyrosinase inhibitor (fades PIH)\n- Avoid overly harsh regimens that cause irritation — irritation triggers PIH\n- SPF critical — UV exposure darkens PIH",
        "assessment": "Moderate-severe acne with PIH and early scarring. Starting combination therapy. Dermatology referral for isotretinoin evaluation given 6-year history and scarring.",
        "plan": "Doxycycline 100mg BID x12 weeks. Tretinoin 0.025% cream nightly (start 2-3x/week). Clindamycin/BP gel every AM. Azelaic acid every other night. Sunscreen SPF 30+ DAILY (non-negotiable). Dermatology referral — isotretinoin evaluation. Return visit 8 weeks — assess response. If no improvement at 12 weeks → discuss isotretinoin. Patient education: takes 8-12 weeks to see full effect, do not stop early."
      }],
      "labs": [],
      "imaging": []
    },
    "ed": {
      "patient": { "chiefComplaint": "Not applicable", "diagnosis": "Clinic only" },
      "problems": [], "medications": [], "vitals": [], "visits": [], "labs": [], "imaging": []
    }
  },
  "references": [
    { "id": "AAD-Acne-2024", "title": "AAD Clinical Practice Guideline: Acne Vulgaris", "authors": "Zaenglein AL, Pathy AL, Schlosser BJ, et al.", "journal": "Journal of the American Academy of Dermatology", "year": 2016, "doi": "10.1016/j.jaad.2015.12.037", "url": "https://www.jaad.org/article/S0190-9622(15)02614-6/fulltext", "openAccess": false, "validates": ["Treatment ladder", "Oral antibiotic use with BP", "Retinoid recommendations", "Isotretinoin indications"] },
    { "id": "StatPearls-Acne", "title": "Acne Vulgaris", "authors": "Sutaria AH, Masood S, Schlessinger J", "journal": "StatPearls", "year": 2024, "doi": "", "url": "https://www.ncbi.nlm.nih.gov/books/NBK459173/", "openAccess": true, "validates": ["Pathogenesis", "Treatment algorithm", "PIH in skin of color", "Doxycycline counseling"] }
  ]
};
