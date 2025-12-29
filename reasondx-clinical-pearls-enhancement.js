// ============================================================
// ReasonDx Clinical Pearls Enhancement
// Adds additional teaching pearls to enhance case learning
// ============================================================

(function() {
    'use strict';
    
    // ============================================================
    // CLINICAL PEARLS BY CASE TYPE
    // These augment existing teachingPoints with stage-specific pearls
    // ============================================================
    
    const ENHANCED_CLINICAL_PEARLS = {
        'cap-pneumonia': {
            afterDifferential: [
                '💎 Pearl: In a smoker >50 with pneumonia, ALWAYS plan follow-up CXR in 6-8 weeks to rule out underlying malignancy.',
                '💎 Pearl: "Walking pneumonia" (Mycoplasma) classically affects young healthy adults with gradual onset, dry cough, and minimal findings on exam despite impressive CXR.'
            ],
            afterHistory: [
                '💎 Pearl: Confusion in an elderly patient with pneumonia = CURB-65 point, but also consider meningitis if neck stiffness present.',
                '💎 Pearl: Aspiration risk factors (dysphagia, alcoholism, recent sedation) should prompt anaerobic coverage.'
            ],
            afterExam: [
                '💎 Pearl: Dullness to percussion + bronchial breath sounds + increased tactile fremitus = consolidation. Decreased breath sounds alone may be atelectasis or effusion.',
                '💎 Pearl: A normal lung exam does NOT rule out pneumonia - 20% of CAP patients have no focal findings.'
            ],
            afterWorkup: [
                '💎 Pearl: Procalcitonin <0.25 makes bacterial pneumonia unlikely. Can help avoid unnecessary antibiotics.',
                '💎 Pearl: Bilateral interstitial infiltrates with negative blood cultures? Consider atypical organisms or viral pneumonia.'
            ]
        },
        
        'chest-pain': {
            afterDifferential: [
                '💎 Pearl: The "5 Deadly Causes" of chest pain: MI, PE, Aortic Dissection, Tension Pneumothorax, Esophageal Rupture.',
                '💎 Pearl: Chest pain that is sharp, pleuritic, AND positional is less likely ACS - but never say never.'
            ],
            afterHistory: [
                '💎 Pearl: "Heartburn" that doesn\'t respond to antacids, wakes patient from sleep, or occurs with exertion = consider cardiac.',
                '💎 Pearl: Cocaine/methamphetamine use can cause MI in young patients with no other risk factors.'
            ],
            afterExam: [
                '💎 Pearl: Reproducible chest wall tenderness does NOT rule out ACS - 7% of MIs have chest wall tenderness.',
                '💎 Pearl: Unequal blood pressures in arms (>20 mmHg difference) = think aortic dissection.'
            ],
            afterWorkup: [
                '💎 Pearl: A normal troponin at presentation doesn\'t rule out MI - need serial troponins at least 3-6 hours apart.',
                '💎 Pearl: HEART score 0-3 with negative troponin = <2% 30-day MACE. Safe for discharge with close follow-up.'
            ]
        },
        
        'acute-stroke': {
            afterDifferential: [
                '💎 Pearl: "Time is brain" - 1.9 million neurons die every minute during stroke. Door-to-needle <60 min is the goal.',
                '💎 Pearl: Stroke mimics: hypoglycemia, Todd\'s paralysis, complex migraine, conversion disorder - but don\'t let this delay workup.'
            ],
            afterHistory: [
                '💎 Pearl: "Wake-up stroke" or unknown time of onset? MRI DWI-FLAIR mismatch can identify salvageable tissue.',
                '💎 Pearl: Recent neck manipulation, trauma, or dissection symptoms (Horner + pain) = consider dissection-related stroke.'
            ],
            afterExam: [
                '💎 Pearl: NIHSS score drives decision-making: <5 = minor stroke, 5-15 = moderate, >15 = severe. Calculate it!',
                '💎 Pearl: Posterior circulation strokes (vertigo, dysarthria, ataxia) are frequently missed. Don\'t forget the cerebellum!'
            ],
            afterWorkup: [
                '💎 Pearl: Blood glucose must be checked before tPA - hypoglycemia is a mimic and hyperglycemia worsens outcomes.',
                '💎 Pearl: Only contraindication on CT for tPA is HEMORRHAGE. Chronic small vessel changes are NOT contraindications.'
            ]
        },
        
        'afib-rvr': {
            afterDifferential: [
                '💎 Pearl: New AFib = search for underlying cause: "PIRATES" (Pulmonary disease, Ischemia, Rheumatic/valvular, Alcohol, Thyroid, Electrolytes, Sepsis).',
                '💎 Pearl: Fast AFib with hypotension, chest pain, or AMS = unstable → synchronized cardioversion.'
            ],
            afterHistory: [
                '💎 Pearl: "Holiday heart" - AFib triggered by binge drinking. Typically converts spontaneously with alcohol cessation.',
                '💎 Pearl: Duration matters: AFib <48 hours can be cardioverted without TEE. >48 hours or unknown = anticoagulate 3 weeks first OR do TEE.'
            ],
            afterExam: [
                '💎 Pearl: Irregularly irregular pulse is the hallmark. New murmur? Think valvular cause or HF.',
                '💎 Pearl: Signs of HF (JVD, edema, rales) suggest rate control is inadequate or there\'s underlying cardiomyopathy.'
            ],
            afterWorkup: [
                '💎 Pearl: Check TSH in ALL new AFib - hyperthyroidism is a treatable cause.',
                '💎 Pearl: CHA₂DS₂-VASc ≥2 in men, ≥3 in women = anticoagulation indicated. HAS-BLED doesn\'t mean "don\'t anticoagulate" - it means "monitor closely."'
            ]
        },
        
        'uti-cystitis': {
            afterDifferential: [
                '💎 Pearl: UTI in males is ALWAYS complicated. Must consider prostatitis, structural abnormality.',
                '💎 Pearl: UTI symptoms + flank pain/fever = pyelonephritis until proven otherwise.'
            ],
            afterHistory: [
                '💎 Pearl: "Urinary tract infection" in elderly may present as confusion, falls, or weakness - not dysuria!',
                '💎 Pearl: Recurrent UTIs (≥3/year) warrant imaging to rule out structural abnormality.'
            ],
            afterExam: [
                '💎 Pearl: CVA tenderness = think pyelo. Suprapubic tenderness without CVA tenderness = likely cystitis.',
                '💎 Pearl: Always do pelvic exam if vaginal discharge - may be vaginitis mimicking UTI.'
            ],
            afterWorkup: [
                '💎 Pearl: Urine culture before antibiotics if complicated, pregnant, or treatment failure. Clean catch matters!',
                '💎 Pearl: Nitrofurantoin is first-line for uncomplicated cystitis - excellent efficacy, low resistance, narrow spectrum.'
            ]
        },
        
        'acute-pancreatitis': {
            afterDifferential: [
                '💎 Pearl: Two most common causes: Gallstones and Alcohol. Together account for >80% of cases.',
                '💎 Pearl: If no gallstones and no alcohol, think: drugs, hypertriglyceridemia, hypercalcemia, trauma, ERCP, autoimmune.'
            ],
            afterHistory: [
                '💎 Pearl: Epigastric pain radiating to back that improves with leaning forward = classic pancreatitis.',
                '💎 Pearl: Ask about alcohol QUANTITY - need significant intake (usually >50g/day for years) to cause pancreatitis.'
            ],
            afterExam: [
                '💎 Pearl: Grey Turner sign (flank ecchymosis) and Cullen sign (periumbilical ecchymosis) = hemorrhagic pancreatitis, poor prognosis.',
                '💎 Pearl: Absent bowel sounds + distension = ileus. Common in pancreatitis due to retroperitoneal inflammation.'
            ],
            afterWorkup: [
                '💎 Pearl: Lipase >3x normal is diagnostic. Amylase is less specific. Both don\'t correlate with severity.',
                '💎 Pearl: RUQ ultrasound in ALL pancreatitis to evaluate for gallstones as the cause. CT for severity assessment at 72-96 hours if not improving.'
            ]
        },
        
        'bowel-obstruction': {
            afterDifferential: [
                '💎 Pearl: SBO is most commonly caused by adhesions from prior surgery. Ask about surgical history!',
                '💎 Pearl: Large bowel obstruction = think cancer until proven otherwise, especially in older patients.'
            ],
            afterHistory: [
                '💎 Pearl: "Obstipation" (no gas AND no stool) suggests complete obstruction. Partial obstruction may still pass gas.',
                '💎 Pearl: Feculent vomiting = late sign indicating severe, possibly gangrenous obstruction.'
            ],
            afterExam: [
                '💎 Pearl: High-pitched "tinkling" bowel sounds = early obstruction. Absent bowel sounds = late/ileus.',
                '💎 Pearl: Fever + peritoneal signs (guarding, rebound) = strangulation. This is a surgical emergency.'
            ],
            afterWorkup: [
                '💎 Pearl: CT with contrast is imaging of choice. Look for: transition point, bowel wall thickening, mesenteric haziness (ischemia signs).',
                '💎 Pearl: Elevated lactate in SBO = concerning for bowel ischemia. Get the surgeon involved early.'
            ]
        },
        
        'testicular-torsion': {
            afterDifferential: [
                '💎 Pearl: "Testicular torsion is a clinical diagnosis." If you think torsion, call urology - don\'t wait for ultrasound.',
                '💎 Pearl: "Bell-clapper deformity" predisposes to torsion. Often bilateral - warn about contralateral risk.'
            ],
            afterHistory: [
                '💎 Pearl: Sudden onset of severe pain, often waking from sleep = classic torsion. Epididymitis is usually gradual onset.',
                '💎 Pearl: Prior episodes of similar pain that resolved = "intermittent torsion." Still needs orchiopexy.'
            ],
            afterExam: [
                '💎 Pearl: Absent cremasteric reflex is the most sensitive physical exam finding for torsion.',
                '💎 Pearl: "High-riding" testis with horizontal lie = torsion. "Blue dot" sign = torsion of testicular appendage (less urgent).'
            ],
            afterWorkup: [
                '💎 Pearl: If clinical suspicion high, take to OR. Ultrasound can be falsely normal early or with intermittent torsion.',
                '💎 Pearl: Golden window: <6 hours = 90% salvage rate. >12 hours = <20% salvage. Time is testis!'
            ]
        }
    };
    
    // ============================================================
    // "DID YOU KNOW?" FACTS BY CONDITION
    // ============================================================
    
    const DID_YOU_KNOW = {
        'cap-pneumonia': [
            'Streptococcus pneumoniae remains the most common cause of CAP, but we only identify a pathogen in ~40% of cases.',
            'The CURB-65 score was derived from >1,000 patients in the UK, New Zealand, and the Netherlands.',
            'Procalcitonin-guided therapy can reduce antibiotic duration by 2-3 days without adverse outcomes.'
        ],
        'acute-stroke': [
            'The brain receives 15% of cardiac output but consumes 20% of total body oxygen.',
            'tPA was approved for stroke in 1996. Before that, we had no acute treatment.',
            'Mechanical thrombectomy can now treat strokes up to 24 hours from onset in selected patients.'
        ],
        'afib-rvr': [
            'Atrial fibrillation affects >5 million Americans and is the most common sustained arrhythmia.',
            'Stroke risk in AFib increases 5-fold without anticoagulation.',
            'The left atrial appendage is the source of >90% of AFib-related strokes - hence the WATCHMAN device.'
        ],
        'testicular-torsion': [
            'Testicular torsion has a bimodal age distribution: neonates and adolescents (peak 12-18 years).',
            'The "bell-clapper deformity" occurs in about 12% of males and is the main anatomical predisposition.',
            'Manual detorsion ("open the book" - laterally) can be temporizing but still requires surgical fixation.'
        ]
    };
    
    // ============================================================
    // MNEMONICS HELPER
    // ============================================================
    
    const MNEMONICS = {
        'PIRATES': {
            topic: 'Causes of AFib',
            letters: ['P', 'I', 'R', 'A', 'T', 'E', 'S'],
            meanings: ['Pulmonary disease', 'Ischemia', 'Rheumatic/valvular', 'Alcohol', 'Thyroid', 'Electrolytes', 'Sepsis']
        },
        'CURB-65': {
            topic: 'Pneumonia Severity',
            letters: ['C', 'U', 'R', 'B', '65'],
            meanings: ['Confusion', 'Urea >19 (BUN)', 'Respiratory rate ≥30', 'BP <90/60', 'Age ≥65']
        },
        'VINDICATE': {
            topic: 'Differential Diagnosis Framework',
            letters: ['V', 'I', 'N', 'D', 'I', 'C', 'A', 'T', 'E'],
            meanings: ['Vascular', 'Infectious', 'Neoplastic', 'Degenerative', 'Iatrogenic/Intoxication', 'Congenital', 'Autoimmune', 'Traumatic', 'Endocrine/Metabolic']
        },
        'HEART': {
            topic: 'Chest Pain Risk Stratification',
            letters: ['H', 'E', 'A', 'R', 'T'],
            meanings: ['History', 'ECG', 'Age', 'Risk factors', 'Troponin']
        },
        'OLDCARTS': {
            topic: 'History Taking for Chief Complaint',
            letters: ['O', 'L', 'D', 'C', 'A', 'R', 'T', 'S'],
            meanings: ['Onset', 'Location', 'Duration', 'Character', 'Aggravating factors', 'Relieving factors', 'Timing', 'Severity']
        }
    };
    
    // ============================================================
    // FUNCTIONS TO ACCESS PEARLS
    // ============================================================
    
    function getPearlsForCase(caseId, stage) {
        const casePearls = ENHANCED_CLINICAL_PEARLS[caseId];
        if (!casePearls) return [];
        
        const stageMap = {
            'differential': 'afterDifferential',
            'history': 'afterHistory',
            'physical': 'afterExam',
            'revised-differential': 'afterExam',
            'workup': 'afterWorkup'
        };
        
        const stageKey = stageMap[stage];
        return casePearls[stageKey] || [];
    }
    
    function getRandomDidYouKnow(caseId) {
        const facts = DID_YOU_KNOW[caseId];
        if (!facts || facts.length === 0) return null;
        return facts[Math.floor(Math.random() * facts.length)];
    }
    
    function getMnemonic(key) {
        return MNEMONICS[key] || null;
    }
    
    // ============================================================
    // EXPOSE TO GLOBAL SCOPE
    // ============================================================
    
    window.ReasonDxPearls = {
        ENHANCED_CLINICAL_PEARLS,
        DID_YOU_KNOW,
        MNEMONICS,
        getPearlsForCase,
        getRandomDidYouKnow,
        getMnemonic,
        
        // Get a random pearl for display
        getRandomPearl: function(caseId, stage) {
            const pearls = getPearlsForCase(caseId, stage);
            if (pearls.length === 0) return null;
            return pearls[Math.floor(Math.random() * pearls.length)];
        },
        
        // Display a pearl as toast
        showPearl: function(caseId, stage) {
            const pearl = this.getRandomPearl(caseId, stage);
            if (pearl && typeof showToast === 'function') {
                showToast(pearl, 'info', 8000);
            }
            return pearl;
        }
    };
    
    console.log('✓ ReasonDx Clinical Pearls Enhancement loaded');
    
})();
