/**
 * COACHDX PHARMACY (PharmD) CASES
 * Mentor-style coaching conversations for Pharmacy students/clinicians
 * 
 * Lauren Fine, MD, FAAAAI | January 2026
 */

const COACHDX_PHARMD_CASES = {

'pharmd-interaction-critical': {
    id: 'pharmd-interaction-critical',
    title: 'Critical Drug Interaction - Warfarin + TMP-SMX',
    category: 'Drug Interactions',
    profession: 'pharmd',
    patient: { name: 'Ravi Krishnamurthy', age: 72, sex: 'Male', setting: 'Community Pharmacy', acuity: 'High', chiefComplaint: 'New prescription for TMP-SMX' },
    description: 'A 72-year-old man presents with a new prescription for TMP-SMX DS BID for UTI. His profile shows warfarin 5mg daily (INR 2.4 last week). The prescriber is urgent care.',
    openingStatement: 'Mr. Mitchell hands you a prescription for TMP-SMX. You pull up his profile and see warfarin. What do you do?',
    conceptDomains: { 'Interaction Recognition': ['mechanism', 'severity'], 'Intervention': ['communication', 'alternatives'] },
    defined_responses: {
        'what interaction': 'Major interaction. TMP-SMX inhibits CYP2C9, increasing warfarin effect. Can double or triple INR within 3-5 days.',
        'alternatives': 'For UTI: Nitrofurantoin or fosfomycin avoid this interaction. Recommend calling prescriber.',
        'if must use': 'If TMP-SMX necessary: reduce warfarin 25-50% and check INR in 3-5 days. Document everything.'
    },
    quickActions: ['What is the interaction?', 'What should I recommend?', 'How do I document?'],
    keyTeachingPoints: ['TMP-SMX + warfarin is potentially fatal', 'CYP2C9 inhibition increases S-warfarin', 'Alternatives exist for most UTIs'],
    evidenceBase: { guidelines: ['CHEST Antithrombotic Guidelines 2021'], keyEvidence: ['TMP-SMX increases INR 50-100%'] }
},

'pharmd-renal-dosing': {
    id: 'pharmd-renal-dosing',
    title: 'Renal Dosing - Antibiotic Adjustment',
    category: 'Pharmacokinetics',
    profession: 'pharmd',
    patient: { name: 'Chioma Nwosu', age: 78, sex: 'Female', setting: 'Hospital Consult', acuity: 'Medium', chiefComplaint: 'Antibiotic dosing consult' },
    description: 'A 78-year-old woman (52kg) with pneumonia. SCr 2.1 (baseline 0.9). On levofloxacin 750mg daily and vancomycin 1g q12h. Team asks you to optimize doses.',
    openingStatement: 'Her kidneys arent working well. Walk me through how you assess and adjust her regimen.',
    conceptDomains: { 'Renal Function': ['CrCl_calculation'], 'Dose Adjustment': ['recommendations'] },
    defined_responses: {
        'calculate crcl': 'CrCl = [(140-78) × 52 × 0.85] / (72 × 2.1) = ~18 mL/min. Severe renal impairment.',
        'levo adjustment': 'At CrCl <20: 750mg initial, then 500mg q48h. Current daily dosing is too frequent.',
        'vanco approach': 'Give loading dose based on weight, then check level before redosing. Standard q12h will accumulate.'
    },
    quickActions: ['Calculate her renal function', 'Adjust levofloxacin', 'Dose vancomycin'],
    keyTeachingPoints: ['Always calculate CrCl for drug dosing', 'Vancomycin in AKI: load then check levels', 'Under-dosing is also dangerous'],
    evidenceBase: { guidelines: ['Vancomycin Guidelines 2020'], keyEvidence: ['AUC-guided dosing reduces nephrotoxicity'] }
},

'pharmd-deprescribing': {
    id: 'pharmd-deprescribing',
    title: 'Polypharmacy - Deprescribing in Elderly',
    category: 'Geriatrics',
    profession: 'pharmd',
    patient: { name: 'Margaret Sullivan', age: 84, sex: 'Female', setting: 'Discharge', acuity: 'Medium', chiefComplaint: 'Medication reconciliation post-hip fracture' },
    description: 'An 84-year-old on 12 medications including zolpidem, diphenhydramine, triple BP therapy, aspirin for primary prevention. Just had hip fracture from fall.',
    openingStatement: 'Mrs. Sullivan fell and broke her hip. As you review her 12 medications, what jumps out?',
    conceptDomains: { 'Beers Criteria': ['fall_risk_meds'], 'Deprescribing': ['prioritization'] },
    defined_responses: {
        'red flags': 'Zolpidem and diphenhydramine are Beers Criteria - direct fall risk. Triple BP meds cause orthostasis.',
        'deprescribe priority': 'STOP zolpidem, STOP diphenhydramine, REDUCE BP meds, CONSIDER stopping aspirin (primary prevention not recommended >70).',
        'sleep alternatives': 'Non-pharmacologic first. If needed: melatonin or low-dose trazodone. NOT zolpidem or diphenhydramine.'
    },
    quickActions: ['What medications caused her fall?', 'What should I deprescribe?', 'Safer alternatives?'],
    keyTeachingPoints: ['Beers Criteria meds increase fall risk', 'Falls often have medication contributors', 'Deprescribing is as important as prescribing'],
    evidenceBase: { guidelines: ['AGS Beers Criteria 2023'], keyEvidence: ['Sedative-hypnotics increase hip fracture OR 1.95'] }
},

'pharmd-stewardship': {
    id: 'pharmd-stewardship',
    title: 'Antimicrobial Stewardship - De-escalation',
    category: 'Infectious Disease',
    profession: 'pharmd',
    patient: { name: 'Kwame Asante', age: 58, sex: 'Male', setting: 'Hospital', acuity: 'Medium', chiefComplaint: 'Day 3 antibiotic review' },
    description: 'Day 3 CAP patient on vancomycin + pip-tazo + azithromycin. Cultures: penicillin-susceptible Strep pneumo. Blood cultures negative. Improving clinically.',
    openingStatement: 'Hes on triple antibiotics. Cultures are back. What does stewardship look like here?',
    conceptDomains: { 'De-escalation': ['culture_directed'], 'Duration': ['evidence_based'] },
    defined_responses: {
        'whats wrong': 'Hes on MRSA + pseudomonal + atypical coverage but has susceptible Strep pneumo. Massive opportunity to narrow.',
        'what to use': 'Stop vancomycin, stop pip-tazo. Use ampicillin or amoxicillin. 5-day total course is evidence-based.',
        'iv to po': 'He meets criteria for oral: afebrile, stable, tolerating PO. Switch to oral amoxicillin and discharge.'
    },
    quickActions: ['What should I de-escalate?', 'What antibiotic to use?', 'How long to treat?'],
    keyTeachingPoints: ['De-escalation is cornerstone of stewardship', '5-day CAP is evidence-based', 'IV-to-PO conversion saves resources'],
    evidenceBase: { guidelines: ['IDSA/ATS CAP Guidelines 2019'], keyEvidence: ['5-day vs 7-10 day: equivalent outcomes'] }
},

'pharmd-counseling': {
    id: 'pharmd-counseling',
    title: 'Patient Counseling - New Diabetes Medications',
    category: 'Patient Education',
    profession: 'pharmd',
    patient: { name: 'Hassan Ibrahim', age: 55, sex: 'Male', setting: 'Community Pharmacy', acuity: 'Low', chiefComplaint: 'New metformin and empagliflozin' },
    description: 'First-time diabetes medications. He seems overwhelmed: "My doctor just said take these and come back in 3 months."',
    openingStatement: 'Mr. Wilson just got diagnosed with diabetes and has two new medications. How do you counsel him?',
    conceptDomains: { 'Medication Education': ['mechanism', 'administration'], 'Side Effects': ['management'] },
    defined_responses: {
        'start where': 'Start with empathy: "I know this is a lot. Lets go through this together." Ask what he already knows.',
        'metformin': 'Take with food to prevent stomach upset. Start morning dose only, add evening after a week if tolerated.',
        'empagliflozin': 'Take in morning (causes urination). Watch for genital yeast infections. Drink plenty of water. Know DKA warning signs.'
    },
    quickActions: ['Where do I start?', 'Explain metformin', 'Explain empagliflozin warnings'],
    keyTeachingPoints: ['Start with empathy', 'Use plain language', 'Practical tips improve adherence', 'Empower patients'],
    evidenceBase: { guidelines: ['ADA Standards 2024'], keyEvidence: ['Pharmacist counseling improves adherence 20-30%'] }
}

};

if (typeof module !== 'undefined' && module.exports) { module.exports = COACHDX_PHARMD_CASES; }
if (typeof window !== 'undefined') { window.COACHDX_PHARMD_CASES = COACHDX_PHARMD_CASES; }
console.log('[CoachDx-PharmD] Loaded ' + Object.keys(COACHDX_PHARMD_CASES).length + ' cases');
