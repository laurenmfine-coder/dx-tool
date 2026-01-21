/**
 * COACHDX CASE GUIDELINES UPDATE
 * Evidence-based guideline citations for existing cases
 * 
 * Apply to existing cases by merging evidenceBase field
 * 
 * Lauren Fine, MD, FAAAAI | January 2026
 */

const COACHDX_GUIDELINES = {

// ============================================================================
// CARDIOVASCULAR CASES
// ============================================================================
"chest-pain-acs": {
    evidenceBase: {
        guidelines: [
            "AHA/ACC Chest Pain Guideline 2021 (Circulation 2021;144:e364-e454)",
            "ESC Guidelines for NSTE-ACS 2020"
        ],
        keyEvidence: [
            "High-sensitivity troponin enables rapid rule-out protocols (0/1h or 0/2h)",
            "HEART score validated for risk stratification",
            "Dual antiplatelet therapy reduces recurrent events (CURE, PLATO trials)"
        ],
        openAccessLinks: [
            "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001029"
        ]
    }
},

"chest-pain-acs-b": {
    evidenceBase: {
        guidelines: ["AHA/ACC Chest Pain Guideline 2021", "ACC/AHA STEMI Guideline 2013"],
        keyEvidence: [
            "Diabetic patients often have atypical presentations",
            "Silent ischemia more common with autonomic neuropathy",
            "Same treatment algorithms apply regardless of symptom typicality"
        ]
    }
},

"atrial-fibrillation": {
    evidenceBase: {
        guidelines: [
            "AHA/ACC/ACCP/HRS AFib Guideline 2023",
            "ESC Guidelines for AF 2020"
        ],
        keyEvidence: [
            "CHA2DS2-VASc for stroke risk stratification",
            "Rate control target <110 bpm at rest for most patients",
            "DOACs preferred over warfarin for stroke prevention"
        ],
        openAccessLinks: [
            "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193"
        ]
    }
},

"syncope": {
    evidenceBase: {
        guidelines: ["ACC/AHA/HRS Syncope Guideline 2017", "ESC Syncope Guidelines 2018"],
        keyEvidence: [
            "History and physical exam diagnose cause in ~50%",
            "San Francisco Syncope Rule and Canadian Syncope Risk Score for risk stratification",
            "Cardiac syncope has 1-year mortality ~30% vs 5% for vasovagal"
        ]
    }
},

"acute-dyspnea-chf": {
    evidenceBase: {
        guidelines: [
            "AHA/ACC/HFSA Heart Failure Guideline 2022",
            "ESC Guidelines for Heart Failure 2021"
        ],
        keyEvidence: [
            "BNP/NT-proBNP useful for diagnosis (BNP >100, NT-proBNP >300)",
            "IV diuretics first-line for acute decompensation",
            "GDMT (ACEi/ARB/ARNI, BB, MRA, SGLT2i) reduces mortality"
        ],
        openAccessLinks: [
            "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063"
        ]
    }
},

"acute-dyspnea-pe": {
    evidenceBase: {
        guidelines: ["ESC Guidelines for Pulmonary Embolism 2019", "ACEP PE Clinical Policy 2018"],
        keyEvidence: [
            "Wells score + D-dimer can safely rule out PE (PERC if very low risk)",
            "CTPA is diagnostic test of choice",
            "Anticoagulation should not be delayed for imaging in high probability"
        ],
        openAccessLinks: [
            "https://academic.oup.com/eurheartj/article/41/4/543/5556136"
        ]
    }
},

"stemi": {
    evidenceBase: {
        guidelines: ["ACC/AHA STEMI Guideline 2013 (focused update 2017)", "ESC STEMI Guidelines 2017"],
        keyEvidence: [
            "Door-to-balloon time <90 minutes for primary PCI",
            "Fibrinolysis if PCI not available within 120 minutes",
            "P2Y12 inhibitor loading before cath lab"
        ]
    }
},

"dvt": {
    evidenceBase: {
        guidelines: ["ASH VTE Guidelines 2020", "ACCP VTE Guidelines (CHEST) 2016"],
        keyEvidence: [
            "Wells score + D-dimer for risk stratification",
            "DOACs preferred for most VTE",
            "Minimum 3 months anticoagulation for provoked VTE"
        ]
    }
},

// ============================================================================
// PULMONARY CASES
// ============================================================================
"copd-exacerbation": {
    evidenceBase: {
        guidelines: ["GOLD COPD Guidelines 2024", "ATS/ERS COPD Exacerbation Statement"],
        keyEvidence: [
            "Short-course steroids (5 days) equivalent to longer courses",
            "Antibiotics for purulent sputum or severe exacerbation",
            "NIV reduces intubation in hypercapnic respiratory failure"
        ],
        openAccessLinks: [
            "https://goldcopd.org/2024-gold-report/"
        ]
    }
},

"asthma-exacerbation": {
    evidenceBase: {
        guidelines: ["GINA Global Strategy for Asthma 2024", "Expert Panel Report 3 (NIH)"],
        keyEvidence: [
            "Systemic corticosteroids within first hour reduce hospitalizations",
            "Continuous albuterol for severe exacerbations",
            "Magnesium sulfate IV for severe/life-threatening"
        ],
        openAccessLinks: [
            "https://ginasthma.org/2024-gina-main-report/"
        ]
    }
},

// ============================================================================
// INFECTIOUS DISEASE / SEPSIS
// ============================================================================
"sepsis-uti": {
    evidenceBase: {
        guidelines: ["Surviving Sepsis Campaign 2021", "IDSA UTI Guidelines 2010"],
        keyEvidence: [
            "Hour-1 bundle: lactate, blood cultures, antibiotics, fluids",
            "30 mL/kg crystalloid for hypotension or lactate ≥4",
            "Norepinephrine first-line vasopressor"
        ],
        openAccessLinks: [
            "https://www.ccmjournal.org/article/S0090-3493(21)00003-1/fulltext"
        ]
    }
},

"sepsis-pneumonia": {
    evidenceBase: {
        guidelines: ["IDSA/ATS CAP Guidelines 2019", "Surviving Sepsis Campaign 2021"],
        keyEvidence: [
            "Empiric coverage: β-lactam + macrolide or respiratory fluoroquinolone",
            "Procalcitonin can guide antibiotic duration",
            "ATS/IDSA severe CAP criteria identify ICU need"
        ],
        openAccessLinks: [
            "https://www.atsjournals.org/doi/10.1164/rccm.201908-1581ST"
        ]
    }
},

"meningitis": {
    evidenceBase: {
        guidelines: ["IDSA Bacterial Meningitis Guidelines 2017", "Surviving Sepsis Campaign 2021"],
        keyEvidence: [
            "Empiric: Ceftriaxone + Vancomycin + Dexamethasone (before or with first antibiotic dose)",
            "Dexamethasone reduces mortality in pneumococcal meningitis",
            "LP can be delayed for CT only if specific indications"
        ]
    }
},

// ============================================================================
// GASTROINTESTINAL
// ============================================================================
"upper-gi-bleed": {
    evidenceBase: {
        guidelines: ["ACG Upper GI Bleeding Guidelines 2021", "International Consensus Group 2019"],
        keyEvidence: [
            "Glasgow-Blatchford score for risk stratification",
            "PPI infusion post-endoscopy reduces rebleeding",
            "Restrictive transfusion (Hgb <7) improves outcomes"
        ],
        openAccessLinks: [
            "https://journals.lww.com/ajg/fulltext/2021/01000/acg_clinical_guideline__upper_gastrointestinal_and.13.aspx"
        ]
    }
},

"lower-gi-bleed": {
    evidenceBase: {
        guidelines: ["ACG Lower GI Bleeding Guidelines 2023", "BSG Guidelines 2019"],
        keyEvidence: [
            "CT angiography for localization if hemodynamically unstable",
            "Colonoscopy within 24 hours for most patients",
            "Most diverticular bleeds stop spontaneously"
        ]
    }
},

"appendicitis": {
    evidenceBase: {
        guidelines: ["SAGES Appendicitis Guidelines 2021", "WSES Jerusalem Guidelines 2020"],
        keyEvidence: [
            "CT has >95% sensitivity/specificity",
            "Laparoscopic appendectomy preferred",
            "Antibiotics alone option for uncomplicated (shared decision-making)"
        ]
    }
},

"cholangitis": {
    evidenceBase: {
        guidelines: ["Tokyo Guidelines 2018 (TG18)", "ASGE Bile Duct Stones Guidelines"],
        keyEvidence: [
            "Charcot's triad: fever, jaundice, RUQ pain",
            "ERCP within 24-48 hours for moderate-severe",
            "Broad-spectrum antibiotics covering gram-negatives and anaerobes"
        ],
        openAccessLinks: [
            "https://www.jstage.jst.go.jp/article/jhbps/25/1/25_11/_article"
        ]
    }
},

// ============================================================================
// ENDOCRINE / METABOLIC
// ============================================================================
"dka": {
    evidenceBase: {
        guidelines: ["ADA Standards of Care 2024", "JBDS DKA Guidelines (UK)"],
        keyEvidence: [
            "Fluid resuscitation: NS initially, then 0.45% if Na normal/high",
            "Insulin infusion 0.1 units/kg/hr after initial fluids",
            "Add dextrose when glucose <200-250, continue insulin until gap closes"
        ],
        openAccessLinks: [
            "https://diabetesjournals.org/care/issue/47/Supplement_1"
        ]
    }
},

"hhs": {
    evidenceBase: {
        guidelines: ["ADA Standards of Care 2024", "AACE/ACE Consensus Statement"],
        keyEvidence: [
            "More profound dehydration than DKA (up to 9L deficit)",
            "Slower glucose correction to prevent cerebral edema",
            "Lower insulin requirements than DKA typically"
        ]
    }
},

"thyroid-storm": {
    evidenceBase: {
        guidelines: ["ATA Thyrotoxicosis Guidelines 2016", "Burch-Wartofsky Score"],
        keyEvidence: [
            "PTU preferred over methimazole (blocks T4→T3 conversion)",
            "Beta-blocker for rate control (propranolol preferred)",
            "Iodine given 1 hour AFTER thionamide",
            "Stress-dose steroids recommended"
        ],
        openAccessLinks: [
            "https://www.liebertpub.com/doi/10.1089/thy.2016.0229"
        ]
    }
},

"hyperkalemia": {
    evidenceBase: {
        guidelines: ["AHA Hyperkalemia Statement 2018", "KDIGO CKD Guidelines"],
        keyEvidence: [
            "Calcium gluconate stabilizes myocardium (does not lower K)",
            "Insulin + glucose shifts K intracellularly",
            "Dialysis for severe hyperkalemia unresponsive to medical therapy"
        ]
    }
},

// ============================================================================
// RENAL
// ============================================================================
"aki-prerenal": {
    evidenceBase: {
        guidelines: ["KDIGO AKI Guidelines 2012", "NICE AKI Guidelines 2019"],
        keyEvidence: [
            "FeNa <1% suggests prerenal (off diuretics)",
            "Fluid challenge diagnostic and therapeutic",
            "Avoid nephrotoxins, adjust renally-cleared medications"
        ],
        openAccessLinks: [
            "https://kdigo.org/guidelines/acute-kidney-injury/"
        ]
    }
},

"hyponatremia-siadh": {
    evidenceBase: {
        guidelines: ["European Hyponatremia Guidelines 2014", "JASN Expert Panel 2015"],
        keyEvidence: [
            "Correction rate <8-10 mEq/L per 24 hours to prevent ODS",
            "Hypertonic saline for severe symptomatic hyponatremia",
            "Fluid restriction first-line for chronic SIADH"
        ],
        openAccessLinks: [
            "https://academic.oup.com/ndt/article/29/suppl_2/i1/1904943"
        ]
    }
},

// ============================================================================
// NEUROLOGY
// ============================================================================
"altered-mental-status": {
    evidenceBase: {
        guidelines: ["AAN Delirium Quality Measures", "AGS Delirium Guidelines"],
        keyEvidence: [
            "Mnemonic: I WATCH DEATH (causes of delirium)",
            "Nonpharmacologic interventions first-line",
            "Avoid deliriogenic medications (anticholinergics, benzos)"
        ]
    }
},

"headache-sah": {
    evidenceBase: {
        guidelines: ["AHA/ASA SAH Guidelines 2023", "ACEP Clinical Policy Headache"],
        keyEvidence: [
            "'Worst headache of life' sensitivity ~80% for SAH",
            "CT sensitivity ~98% within 6 hours, decreases after",
            "LP if CT negative and clinical suspicion remains"
        ]
    }
},

"seizure-firsttime": {
    evidenceBase: {
        guidelines: ["AAN First Seizure Guidelines 2015", "ILAE Guidelines"],
        keyEvidence: [
            "Recurrence risk ~40% after first unprovoked seizure",
            "Antiepileptic drugs reduce recurrence but not long-term remission",
            "Driving restrictions vary by state"
        ],
        openAccessLinks: [
            "https://www.aan.com/Guidelines/home/GuidelineDetail/717"
        ]
    }
},

"status-epilepticus": {
    evidenceBase: {
        guidelines: ["AAN Status Epilepticus Guidelines 2016", "Neurocritical Care Society Guidelines"],
        keyEvidence: [
            "Benzodiazepines first-line (lorazepam or midazolam)",
            "Second-line: fosphenytoin, levetiracetam, or valproate",
            "Intubation and continuous EEG for refractory SE"
        ]
    }
},

// ============================================================================
// OTHER
// ============================================================================
"anaphylaxis": {
    evidenceBase: {
        guidelines: ["WAO Anaphylaxis Guidelines 2020", "EAACI Anaphylaxis Guidelines"],
        keyEvidence: [
            "Epinephrine IM (0.3-0.5mg) is FIRST-LINE - no contraindications",
            "Biphasic reactions occur in 5-20% - observe 4-6 hours minimum",
            "Prescribe epinephrine auto-injector and refer to allergist"
        ]
    }
},

"anemia-workup": {
    evidenceBase: {
        guidelines: ["ASH Anemia Guidelines 2021", "KDIGO Anemia Guidelines (CKD)"],
        keyEvidence: [
            "MCV classifies as microcytic, normocytic, macrocytic",
            "Reticulocyte count differentiates production vs destruction",
            "Iron studies: ferritin + TIBC most useful"
        ]
    }
},

"acetaminophen-overdose": {
    evidenceBase: {
        guidelines: ["AACT/ACMT Acetaminophen Guideline 2023", "Rumack-Matthew Nomogram"],
        keyEvidence: [
            "NAC most effective within 8 hours, still beneficial up to 24h+",
            "Rumack-Matthew nomogram guides treatment at 4+ hours post-ingestion",
            "IV NAC preferred for severe hepatotoxicity"
        ]
    }
}

};

// Function to apply guidelines to existing cases
function applyGuidelinesToCases(existingCases) {
    Object.keys(COACHDX_GUIDELINES).forEach(caseId => {
        if (existingCases[caseId]) {
            existingCases[caseId].evidenceBase = COACHDX_GUIDELINES[caseId].evidenceBase;
        }
    });
    console.log('[Guidelines] Applied evidence base to ' + Object.keys(COACHDX_GUIDELINES).length + ' cases');
    return existingCases;
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { COACHDX_GUIDELINES, applyGuidelinesToCases };
}
if (typeof window !== 'undefined') {
    window.COACHDX_GUIDELINES = COACHDX_GUIDELINES;
    window.applyGuidelinesToCases = applyGuidelinesToCases;
}

console.log('[CoachDx-Guidelines] Loaded guidelines for ' + Object.keys(COACHDX_GUIDELINES).length + ' cases');
