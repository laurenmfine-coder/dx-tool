// ============================================================================
// COACHDX TOXICOLOGY CASE PACK
// SBAR scenarios for toxicology emergencies communication training
// Created: January 30, 2026
// Dr. Lauren Fine | NSU KPCOM
// ============================================================================

const COACHDX_TOXICOLOGY_CASES = {

// ============================================================================
// CASE 1: ACETAMINOPHEN OVERDOSE - LATE PRESENTATION
// ============================================================================

'apap-late-presentation': {
    id: 'apap-late-presentation',
    title: 'Acetaminophen Overdose - Late Presentation',
    category: 'Toxicology',
    isParallel: false,
    parallelCase: 'apap-early',
    parallelDescription: 'Early APAP overdose - standard NAC protocol',
    patient: { 
        name: 'Jennifer Martinez', 
        age: 28, 
        sex: 'Female', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Abdominal Pain and Vomiting' 
    },
    description: 'A 28-year-old woman presents with RUQ pain, nausea, and vomiting for 2 days. Reports taking "a lot of Tylenol" 3 days ago for headache. HR 108, BP 98/62. Jaundice, RUQ tenderness. AST 8,400, ALT 6,200, INR 4.2, creatinine 2.8, pH 7.28, lactate 6.4, APAP level 42 mcg/mL.',
    openingStatement: 'Jennifer has severe acetaminophen toxicity presenting late - she\'s already in hepatic failure with encephalopathy, coagulopathy, and renal failure. This is a liver transplant evaluation. What\'s your approach?',
    conceptDomains: {
        'Situation': ['hepatotoxicity_stage', 'kings_college_criteria', 'encephalopathy'],
        'Background': ['time_of_ingestion', 'total_dose', 'coingestions'],
        'Assessment': ['prognosis', 'transplant_candidacy', 'nac_benefit'],
        'Recommendation': ['nac_continuation', 'transplant_evaluation', 'supportive_care']
    },
    quickActions: [
        'Is NAC still helpful this late?',
        'What are King\'s College Criteria?',
        'Does she need a liver transplant?',
        'What about her kidneys?'
    ],
    keyTeachingPoints: [
        'APAP toxicity stages: I (0-24h) nausea, II (24-72h) hepatotoxicity begins, III (72-96h) max toxicity, IV (4-14d) recovery or death',
        'NAC is ALWAYS indicated regardless of time since ingestion - benefits even in established hepatotoxicity',
        'King\'s College Criteria predict need for transplant: pH <7.30 OR (INR >6.5 + Cr >3.4 + Grade III/IV encephalopathy)',
        'Renal failure occurs in 25% of severe APAP toxicity - usually ATN',
        'Do NOT give FFP for INR unless actively bleeding - it obscures transplant decision-making'
    ],
    sbarTemplate: {
        situation: 'I have a 28-year-old with severe late-presenting acetaminophen toxicity. She\'s in fulminant hepatic failure with AST 8,400, INR 4.2, pH 7.28, and renal failure. She took the Tylenol 3 days ago.',
        background: 'She reports taking a large amount of Tylenol for headache. She\'s now in Stage III toxicity with established hepatotoxicity. She has acidosis, coagulopathy, and renal failure.',
        assessment: 'She meets King\'s College Criteria for poor prognosis - her pH is 7.28. Without transplant, mortality in this scenario approaches 80%. NAC should still be given but she needs transplant evaluation.',
        recommendation: 'Starting IV NAC now - it still helps even this late. Calling hepatology and transplant surgery for urgent evaluation. She needs ICU admission with close monitoring for encephalopathy. Please avoid FFP unless she\'s bleeding - it will obscure the transplant decision.'
    },
    defined_responses: {
        'nac late': 'YES - NAC is ALWAYS indicated regardless of how late you are. Even after hepatotoxicity is established, NAC improves outcomes: Improves hemodynamics, reduces cerebral edema, improves oxygen delivery. Continue NAC until: INR <2, no encephalopathy, and patient is clearly recovering OR gets transplanted.',
        'kings college': 'King\'s College Criteria for APAP-induced ALF: pH <7.30 (after resuscitation) OR All 3 of: (1) INR >6.5, (2) Creatinine >3.4 mg/dL, (3) Grade III/IV encephalopathy. She has pH 7.28 - that alone predicts >80% mortality without transplant. Call transplant NOW.',
        'transplant': 'She likely needs emergent liver transplant evaluation. King\'s College Criteria help predict who will die without transplant. Key factors: Persistent acidosis, worsening INR despite NAC, encephalopathy. Timing is critical - transplant needs to be considered early before she becomes too sick for surgery.',
        'kidneys': 'AKI occurs in ~25% of severe APAP toxicity. Usually ATN from combination of direct toxicity and hypoperfusion. Often requires dialysis temporarily. Typically recovers if patient survives the hepatic failure. Her creatinine of 2.8 is part of King\'s criteria.',
        'ffp': 'Do NOT give FFP to correct INR unless actively bleeding. The INR is your best real-time marker of liver synthetic function. Giving FFP artificially "fixes" the INR and obscures the picture - makes it impossible to track if she\'s improving or needs transplant.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'APAP Overdose Module', link: '../mechanism/apap-overdose-module.html', reason: 'Rumack-Matthew nomogram and staging' },
        { type: 'reasondx', title: 'APAP Adventure', link: '../ReasonDx/adventure-cases/apap-overdose-expanded.html', reason: 'Practice APAP management' }
    ],
    evidenceBase: {
        guidelines: ["AASLD Acute Liver Failure Guidelines 2011", "Toxicology Guidelines - AACT/ACMT"],
        keyEvidence: [
            "NAC improves outcomes even in established hepatotoxicity",
            "King's College Criteria predict need for transplant",
            "pH <7.30 predicts >80% mortality without transplant"
        ],
        openAccessLinks: ["https://aasldpubs.onlinelibrary.wiley.com/doi/10.1002/hep.24199"]
    }
},

// ============================================================================
// CASE 2: SALICYLATE TOXICITY - SEVERE
// ============================================================================

'salicylate-severe': {
    id: 'salicylate-severe',
    title: 'Salicylate Toxicity - Severe',
    category: 'Toxicology',
    isParallel: false,
    parallelCase: 'salicylate-mild',
    parallelDescription: 'Mild salicylate toxicity - alkalinization',
    patient: { 
        name: 'Harold Peters', 
        age: 72, 
        sex: 'Male', 
        setting: 'Emergency → ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Confusion and Rapid Breathing' 
    },
    description: 'A 72-year-old man with chronic pain presents confused and tachypneic. Takes "lots of aspirin" for arthritis. RR 36, HR 112, BP 108/62. Diaphoretic, tinnitus, confused. pH 7.28, pCO2 18, HCO3 8, salicylate level 82 mg/dL, BUN 48, Cr 2.4.',
    openingStatement: 'Mr. Peters has severe salicylate toxicity with altered mental status and mixed acid-base disorder. At this level with CNS toxicity, he needs emergent hemodialysis. What\'s your management?',
    conceptDomains: {
        'Situation': ['salicylate_level', 'acid_base_status', 'cns_toxicity'],
        'Background': ['chronic_vs_acute', 'total_ingestion', 'comorbidities'],
        'Assessment': ['dialysis_indication', 'intubation_danger', 'prognosis'],
        'Recommendation': ['emergent_dialysis', 'alkalinization', 'avoid_intubation']
    },
    quickActions: [
        'When does he need dialysis?',
        'Why is intubation dangerous?',
        'What\'s his acid-base disorder?',
        'How does alkalinization help?'
    ],
    keyTeachingPoints: [
        'Salicylate toxicity causes: Respiratory alkalosis (early) → Mixed respiratory alkalosis/metabolic acidosis → Pure metabolic acidosis (late/severe)',
        'CNS toxicity (confusion, seizures, coma) indicates severe poisoning - consider dialysis',
        'AVOID INTUBATION if possible - loss of respiratory compensation causes rapid pH drop and death',
        'Dialysis indications: Level >100 mg/dL, AMS/seizures, renal failure, pulmonary edema, clinical deterioration',
        'Alkalinization traps salicylate in blood (ion trapping) and enhances renal excretion'
    ],
    sbarTemplate: {
        situation: 'I have a 72-year-old with severe salicylate toxicity. Level is 82, he\'s confused, and has mixed respiratory alkalosis and metabolic acidosis. This is critical.',
        background: 'He\'s been taking large amounts of aspirin chronically for arthritis - chronic toxicity is often more dangerous than acute at the same level. He has renal impairment limiting clearance.',
        assessment: 'He meets criteria for emergent hemodialysis: altered mental status and very high level with acidosis. His compensatory tachypnea is keeping him alive - we must NOT intubate him.',
        recommendation: 'Calling nephrology for emergent hemodialysis - this is the treatment. Starting alkalinization with bicarb drip while we wait. Avoiding intubation unless absolutely necessary. ICU admission. Poison control is involved.'
    },
    defined_responses: {
        'dialysis criteria': 'Indications for hemodialysis in salicylate toxicity: (1) Level >100 mg/dL, (2) Altered mental status, seizures, coma, (3) Renal failure limiting clearance, (4) Pulmonary edema (can\'t give bicarb), (5) Persistent acidosis despite treatment, (6) Clinical deterioration. He has AMS, high level, and renal failure - needs dialysis.',
        'intubation danger': 'AVOID INTUBATION if at all possible. Here\'s why: His rapid breathing (RR 36) is compensating for metabolic acidosis. If you intubate and can\'t match that respiratory rate, his pCO2 rises, pH drops precipitously, and salicylate enters the brain. Patients have died during/after intubation. If you must intubate, use very high minute ventilation.',
        'acid base': 'Classic salicylate acid-base pattern: Early = pure respiratory alkalosis (salicylates stimulate respiratory center). Moderate = mixed respiratory alkalosis + metabolic acidosis. Severe/late = pure metabolic acidosis (respiratory fatigue). His pH 7.28, pCO2 18, HCO3 8 = mixed picture, but metabolic acidosis is dominating.',
        'alkalinization': 'Alkalinization (bicarb drip targeting urine pH 7.5-8.0) works by ion trapping: Salicylic acid is a weak acid. In alkaline urine, it becomes ionized and can\'t be reabsorbed - enhances renal excretion. Also keeps blood pH up which keeps salicylate out of tissues. But don\'t delay dialysis for alkalinization if he meets criteria.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Toxidromes Module', link: '../mechanism/toxidromes-module.html', reason: 'Salicylate toxidrome' },
        { type: 'reasondx', title: 'Toxidromes Adventure', link: '../ReasonDx/adventure-cases/toxidromes-expanded.html', reason: 'Practice toxidrome recognition' }
    ],
    evidenceBase: {
        guidelines: ["AACT/ACMT Salicylate Poisoning Guidelines 2015"],
        keyEvidence: [
            "Intubation with inadequate ventilation causes rapid deterioration",
            "Chronic toxicity is more dangerous than acute at same level",
            "Hemodialysis is definitive treatment for severe toxicity"
        ],
        openAccessLinks: ["https://www.tandfonline.com/doi/full/10.3109/15563650.2014.939598"]
    }
},

// ============================================================================
// CASE 3: TRICYCLIC ANTIDEPRESSANT OVERDOSE
// ============================================================================

'tca-overdose': {
    id: 'tca-overdose',
    title: 'TCA Overdose - Sodium Channel Blockade',
    category: 'Toxicology',
    isParallel: false,
    parallelCase: 'ssri-overdose',
    parallelDescription: 'SSRI overdose - serotonin syndrome risk',
    patient: { 
        name: 'Lisa Anderson', 
        age: 34, 
        sex: 'Female', 
        setting: 'Emergency', 
        acuity: 'Critical', 
        chiefComplaint: 'Altered Mental Status after Overdose' 
    },
    description: 'A 34-year-old woman found with empty amitriptyline bottles. GCS 8, HR 132, BP 88/52, widened QRS 160ms on ECG, R wave in aVR 8mm. Pupils dilated, dry skin, decreased bowel sounds. Intermittent myoclonic jerks.',
    openingStatement: 'Lisa has severe TCA toxicity with classic findings - wide QRS, large R in aVR, anticholinergic syndrome, and she\'s seizing. This can deteriorate to arrest rapidly. What\'s your management?',
    conceptDomains: {
        'Situation': ['ecg_findings', 'anticholinergic_signs', 'seizure_activity'],
        'Background': ['pills_taken', 'time_of_ingestion', 'coingestants'],
        'Assessment': ['sodium_channel_blockade', 'cardiovascular_risk', 'cns_toxicity'],
        'Recommendation': ['sodium_bicarbonate', 'seizure_treatment', 'avoid_class_ia_ic']
    },
    quickActions: [
        'Why is the QRS wide?',
        'When do I give bicarb?',
        'What about the seizures?',
        'What drugs should I avoid?'
    ],
    keyTeachingPoints: [
        'TCA toxicity triad: Anticholinergic syndrome, sodium channel blockade (wide QRS), cardiac arrhythmias',
        'QRS >100ms predicts seizures, QRS >160ms predicts arrhythmias',
        'R wave in aVR >3mm is specific for sodium channel blockade',
        'Sodium bicarbonate is the antidote - overcomes sodium channel blockade',
        'AVOID class Ia/Ic antiarrhythmics, physostigmine, flumazenil'
    ],
    sbarTemplate: {
        situation: 'I have a 34-year-old with severe TCA overdose. QRS is 160ms with large R in aVR. She\'s obtunded, hypotensive, and having myoclonic activity. This is critical.',
        background: 'Found with empty amitriptyline bottles. Unknown amount or timing. She has classic anticholinergic toxidrome - dilated pupils, dry skin, decreased bowel sounds.',
        assessment: 'This is severe TCA toxicity with sodium channel blockade. QRS >160ms puts her at high risk for VT/VF. The myoclonic jerks may progress to seizures. She can arrest at any moment.',
        recommendation: 'Pushing sodium bicarbonate 1-2 mEq/kg IV now and starting bicarb drip. Treating seizures with benzos if they occur - avoiding phenytoin. No physostigmine. She needs ICU with continuous cardiac monitoring. Calling poison control.'
    },
    defined_responses: {
        'wide qrs': 'TCAs block cardiac sodium channels → slowed phase 0 depolarization → widened QRS complex. This is the same mechanism as class Ia/Ic antiarrhythmics. QRS >100ms predicts seizures, >160ms predicts ventricular arrhythmias. It\'s dose-dependent - wider QRS = more severe toxicity.',
        'bicarb when': 'Give sodium bicarbonate if: QRS >100ms, hypotension, arrhythmias. Mechanism: (1) Sodium load overcomes channel blockade, (2) Alkalosis decreases TCA binding to sodium channels, (3) Both mechanisms narrow the QRS. Give 1-2 mEq/kg bolus, then drip targeting pH 7.50-7.55. Watch for QRS narrowing.',
        'seizures': 'TCA seizures are treated with BENZODIAZEPINES (lorazepam, diazepam). AVOID phenytoin - it\'s also a sodium channel blocker and worsens cardiotoxicity. If benzos fail, can use barbiturates (phenobarbital) or propofol. Bicarb may also help prevent seizures by narrowing QRS.',
        'drugs to avoid': 'AVOID: (1) Class Ia/Ic antiarrhythmics (procainamide, flecainide) - worsen sodium channel blockade, (2) Physostigmine - can cause asystole in TCA overdose, (3) Flumazenil - lowers seizure threshold, (4) Phenytoin - sodium channel blocker. Treat arrhythmias with bicarb and lidocaine if needed.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Toxidromes Module', link: '../mechanism/toxidromes-module.html', reason: 'Anticholinergic and sodium channel toxidromes' },
        { type: 'reasondx', title: 'ECG Patterns', link: '../mechanism/ecg-patterns.html', reason: 'TCA ECG findings' }
    ],
    evidenceBase: {
        guidelines: ["AACT/ACMT Guidelines", "AHA Toxicology Treatment Guidelines"],
        keyEvidence: [
            "QRS >100ms predicts seizures, >160ms predicts arrhythmias",
            "R wave in aVR >3mm is specific for sodium channel blockade",
            "Sodium bicarbonate is first-line treatment"
        ],
        openAccessLinks: ["https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3088103/"]
    }
},

// ============================================================================
// CASE 4: CALCIUM CHANNEL BLOCKER OVERDOSE
// ============================================================================

'ccb-overdose': {
    id: 'ccb-overdose',
    title: 'Calcium Channel Blocker Overdose',
    category: 'Toxicology',
    isParallel: false,
    parallelCase: 'beta-blocker-overdose',
    parallelDescription: 'Beta-blocker overdose - glucagon first-line',
    patient: { 
        name: 'Richard Kim', 
        age: 58, 
        sex: 'Male', 
        setting: 'Emergency → ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Found Unresponsive' 
    },
    description: 'A 58-year-old man found unresponsive with empty verapamil bottles. HR 42, BP 68/40 on 2 pressors, GCS 6. ECG shows sinus bradycardia with first-degree AV block. Glucose 380, lactate 8.2. Not responding to atropine, calcium, or escalating vasopressors.',
    openingStatement: 'Richard has severe CCB toxicity that\'s refractory to standard treatment. He\'s maximized on pressors with persistent shock. This needs high-dose insulin therapy. What\'s your approach?',
    conceptDomains: {
        'Situation': ['refractory_shock', 'bradycardia', 'metabolic_derangements'],
        'Background': ['ccb_type', 'amount_ingested', 'time_course'],
        'Assessment': ['treatment_resistance', 'insulin_indication', 'lipid_emulsion'],
        'Recommendation': ['high_dose_insulin', 'calcium_optimization', 'ecmo_consideration']
    },
    quickActions: [
        'Why isn\'t calcium working?',
        'How does high-dose insulin help?',
        'What about lipid emulsion?',
        'When do I consider ECMO?'
    ],
    keyTeachingPoints: [
        'CCB toxicity causes: Bradycardia, hypotension, hyperglycemia (impaired insulin release), decreased inotropy',
        'High-dose insulin/euglycemic therapy (HIE) is first-line for refractory CCB toxicity',
        'Insulin works by providing alternative cardiac fuel (glucose) and has positive inotropic effects',
        'Calcium helps initially but effect may be overcome in severe toxicity',
        'Lipid emulsion therapy may help for lipophilic CCBs (verapamil, diltiazem)'
    ],
    sbarTemplate: {
        situation: 'I have a 58-year-old with severe verapamil overdose. He\'s in cardiogenic shock with HR 42, BP 68/40 despite 2 pressors. He\'s not responding to atropine or calcium.',
        background: 'Found with empty verapamil bottles. He\'s hyperglycemic at 380 which is typical of CCB toxicity - the calcium channels in the pancreas are blocked so insulin can\'t be released.',
        assessment: 'This is refractory CCB toxicity. Standard treatment has failed. He needs high-dose insulin therapy - this is first-line for CCB overdose that doesn\'t respond to calcium and pressors.',
        recommendation: 'Starting high-dose insulin: 1 unit/kg bolus then 1 unit/kg/hr infusion with dextrose to maintain euglycemia. Continuing calcium infusion. If no improvement, will consider lipid emulsion and ECMO. Calling poison control and cardiology for possible mechanical support.'
    },
    defined_responses: {
        'calcium failing': 'In severe CCB toxicity, the degree of calcium channel blockade may overwhelm the ability of supplemental calcium to compete for binding sites. More calcium can help but may not be sufficient. His hyperglycemia (380) tells us the pancreatic calcium channels are also blocked - he can\'t release insulin, contributing to cardiac dysfunction.',
        'high dose insulin': 'High-dose insulin/euglycemia (HIE) therapy: Mechanism: (1) Provides glucose as cardiac fuel (heart normally uses fatty acids, but shifts to glucose in shock), (2) Direct positive inotropic effect independent of calcium channels. Dose: 1 unit/kg bolus, then 1-10 unit/kg/hr. Must give dextrose to prevent hypoglycemia. Monitor K+ closely.',
        'lipid emulsion': 'Intralipid (20% lipid emulsion) may help in CCB toxicity - especially lipophilic agents like verapamil and diltiazem. Mechanism: Creates a "lipid sink" that sequesters the drug, may improve cardiac function. Dose: 1.5 mL/kg bolus, then 0.25 mL/kg/min infusion. Consider if HIE is inadequate.',
        'ecmo': 'ECMO (VA-ECMO) consideration if: Refractory shock despite maximal medical therapy (pressors, HIE, calcium, lipid). Think of ECMO as a bridge - it supports the patient while the drug is metabolized. CCB toxicity is reversible if you can support them long enough. Early cardiology/ECMO team involvement is key.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Toxidromes Module', link: '../mechanism/toxidromes-module.html', reason: 'Cardiovascular toxidromes' },
        { type: 'reasondx', title: 'Shock Module', link: '../mechanism/shock-module.html', reason: 'Cardiogenic shock management' }
    ],
    evidenceBase: {
        guidelines: ["AACT/ACMT CCB Guidelines", "Toxicology Consensus Statement"],
        keyEvidence: [
            "High-dose insulin is first-line for refractory CCB toxicity",
            "Hyperglycemia is characteristic of CCB overdose",
            "ECMO can be lifesaving as bridge therapy"
        ],
        openAccessLinks: ["https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3088103/"]
    }
},

// ============================================================================
// CASE 5: METHANOL POISONING
// ============================================================================

'methanol-poisoning': {
    id: 'methanol-poisoning',
    title: 'Methanol Poisoning',
    category: 'Toxicology',
    isParallel: false,
    parallelCase: 'ethylene-glycol',
    parallelDescription: 'Ethylene glycol poisoning - similar treatment',
    patient: { 
        name: 'Thomas Brown', 
        age: 45, 
        sex: 'Male', 
        setting: 'Emergency → ICU', 
        acuity: 'Critical', 
        chiefComplaint: 'Visual Changes and Confusion' 
    },
    description: 'A 45-year-old homeless man presents with headache, blurred vision, and confusion 18 hours after drinking "moonshine." HR 102, BP 108/68, RR 32 (Kussmaul). pH 7.12, pCO2 14, HCO3 5, anion gap 32, osmolar gap 28. Reports "snowfield" vision.',
    openingStatement: 'Thomas has methanol poisoning with severe acidosis and visual symptoms. The "snowfield" vision suggests optic nerve toxicity. He needs fomepizole and emergent dialysis. This is a race against permanent blindness.',
    conceptDomains: {
        'Situation': ['visual_symptoms', 'severe_acidosis', 'osmolar_gap'],
        'Background': ['exposure_history', 'time_since_ingestion', 'coingestions'],
        'Assessment': ['toxic_alcohol_type', 'end_organ_damage', 'dialysis_indication'],
        'Recommendation': ['fomepizole', 'emergent_dialysis', 'folate_supplementation']
    },
    quickActions: [
        'Why are his eyes affected?',
        'Fomepizole vs ethanol?',
        'When does he need dialysis?',
        'What\'s the osmolar gap?'
    ],
    keyTeachingPoints: [
        'Methanol → formaldehyde → formic acid (toxic metabolite causes acidosis and blindness)',
        'Visual symptoms (blurred vision, "snowfield," blindness) are characteristic of methanol',
        'Fomepizole blocks alcohol dehydrogenase, preventing toxic metabolite formation',
        'Dialysis removes both methanol and formic acid - indicated for acidosis, visual symptoms, renal failure, or methanol >50 mg/dL',
        'Osmolar gap = measured osmolality - calculated osmolality; >10 suggests toxic alcohol'
    ],
    sbarTemplate: {
        situation: 'I have a 45-year-old with methanol poisoning. He has severe metabolic acidosis - pH 7.12, bicarb 5, anion gap 32. He\'s reporting visual changes which means optic nerve toxicity has started.',
        background: 'He drank moonshine about 18 hours ago. His osmolar gap is 28 which confirms a toxic alcohol. The visual symptoms are specific for methanol - its metabolite formic acid damages the optic nerve.',
        assessment: 'This is severe methanol poisoning with end-organ toxicity. He meets multiple dialysis criteria: severe acidosis, visual symptoms, and large osmolar gap. Every hour of delay risks permanent blindness.',
        recommendation: 'Starting fomepizole 15 mg/kg IV now to block further metabolism. Calling nephrology for emergent hemodialysis. Starting folic acid 50mg IV to enhance formate metabolism. ICU admission. This is time-critical.'
    },
    defined_responses: {
        'visual symptoms': 'Methanol is metabolized to formaldehyde then formic acid. Formic acid has selective toxicity for the optic nerve and retina - causes "snowfield" vision, blurred vision, and ultimately permanent blindness. Visual symptoms indicate end-organ toxicity has begun. Treatment can prevent progression but may not reverse established damage.',
        'fomepizole vs ethanol': 'Fomepizole is preferred: Competitively inhibits alcohol dehydrogenase (blocks methanol → formaldehyde). Advantages over ethanol: No CNS depression, easier dosing, no need for serum monitoring. Dose: 15 mg/kg IV load, then 10 mg/kg q12h. Ethanol is alternative if fomepizole unavailable.',
        'dialysis criteria': 'Dialysis is indicated for: (1) Severe acidosis pH <7.25-7.30, (2) Visual symptoms, (3) Renal failure, (4) Methanol level >50 mg/dL, (5) Deterioration despite fomepizole. He meets criteria: pH 7.12, visual symptoms. Dialysis removes BOTH methanol AND formic acid. Continue fomepizole during dialysis (it\'s also dialyzed).',
        'osmolar gap': 'Osmolar gap = Measured serum osmolality - Calculated osmolality. Calculated = 2(Na) + glucose/18 + BUN/2.8. Gap >10 mOsm/kg suggests unmeasured osmoles - toxic alcohols (methanol, ethylene glycol), isopropanol, or propylene glycol. His gap of 28 confirms significant toxic alcohol. As it\'s metabolized, osmolar gap falls but anion gap rises.'
    },
    relatedContent: [
        { type: 'mechanism', title: 'Toxidromes Module', link: '../mechanism/toxidromes-module.html', reason: 'Toxic alcohol metabolism' },
        { type: 'reasondx', title: 'Acid-Base Module', link: '../mechanism/acid-base-module.html', reason: 'Anion gap acidosis workup' }
    ],
    evidenceBase: {
        guidelines: ["AACT/ACMT Toxic Alcohol Guidelines", "EXTRIP Workgroup Recommendations"],
        keyEvidence: [
            "Visual symptoms indicate optic nerve toxicity from formic acid",
            "Fomepizole is first-line antidote",
            "Dialysis removes both parent compound and toxic metabolites"
        ],
        openAccessLinks: ["https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4578040/"]
    }
}

};

// ============================================================================
// EXPORT FOR MODULE USE
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_TOXICOLOGY_CASES;
}

if (typeof COACHDX_CASES !== 'undefined') {
    Object.assign(COACHDX_CASES, COACHDX_TOXICOLOGY_CASES);
}
