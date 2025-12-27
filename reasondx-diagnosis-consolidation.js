// ============================================================
// REASONDX: DIAGNOSIS CONSOLIDATION & SYNONYM SYSTEM
// Version: 1.0.0
// Date: December 27, 2025
// 
// This module handles diagnosis synonyms, abbreviations, and
// consolidation to eliminate redundant diagnoses and provide
// partial credit for close answers.
// ============================================================

(function() {
    'use strict';

    // ============================================================
    // DIAGNOSIS SYNONYM DATABASE
    // ============================================================

    const DIAGNOSIS_SYNONYMS = {
        // ==================== URINARY/GU ====================
        'uncomplicated_cystitis': {
            preferred: 'Uncomplicated Cystitis',
            synonyms: [
                'simple cystitis',
                'acute cystitis',
                'bladder infection',
                'lower uti',
                'cystitis'  // Generic maps here with partial credit
            ],
            abbreviations: ['UTI'],  // Partial credit only - too vague
            category: 'genitourinary',
            mustNotMiss: false
        },
        'complicated_cystitis': {
            preferred: 'Complicated Cystitis',
            synonyms: [
                'complicated uti',
                'uti in pregnancy',
                'cystitis in diabetic'
            ],
            abbreviations: [],
            category: 'genitourinary',
            mustNotMiss: false
        },
        'pyelonephritis': {
            preferred: 'Pyelonephritis',
            synonyms: [
                'acute pyelonephritis',
                'upper uti',
                'kidney infection',
                'pyelo'
            ],
            abbreviations: ['APN'],
            category: 'genitourinary',
            mustNotMiss: true
        },

        // ==================== STIs ====================
        'gonorrhea': {
            preferred: 'Gonorrhea',
            synonyms: [
                'gonococcal infection',
                'neisseria gonorrhoeae',
                'gc infection'
            ],
            abbreviations: ['GC'],
            category: 'infectious',
            mustNotMiss: true
        },
        'chlamydia': {
            preferred: 'Chlamydia',
            synonyms: [
                'chlamydia trachomatis',
                'chlamydial infection',
                'ct infection'
            ],
            abbreviations: ['CT'],
            category: 'infectious',
            mustNotMiss: true
        },
        'trichomoniasis': {
            preferred: 'Trichomoniasis',
            synonyms: [
                'trichomonas',
                'trich',
                'trichomonas vaginalis'
            ],
            abbreviations: [],
            category: 'infectious',
            mustNotMiss: false
        },
        'genital_herpes': {
            preferred: 'Genital Herpes',
            synonyms: [
                'hsv-2',
                'herpes simplex genital',
                'herpes genitalis'
            ],
            abbreviations: ['HSV'],
            category: 'infectious',
            mustNotMiss: false
        },
        'syphilis': {
            preferred: 'Syphilis',
            synonyms: [
                'treponema pallidum',
                'lues'
            ],
            abbreviations: [],
            category: 'infectious',
            mustNotMiss: true
        },
        'pid': {
            preferred: 'Pelvic Inflammatory Disease',
            synonyms: [
                'pid',
                'salpingitis',
                'tubo-ovarian abscess'
            ],
            abbreviations: ['PID', 'TOA'],
            category: 'infectious',
            mustNotMiss: true
        },

        // ==================== VAGINAL ====================
        'bacterial_vaginosis': {
            preferred: 'Bacterial Vaginosis',
            synonyms: [
                'bv',
                'gardnerella',
                'gardnerella vaginitis'
            ],
            abbreviations: ['BV'],
            category: 'genitourinary',
            mustNotMiss: false
        },
        'vulvovaginal_candidiasis': {
            preferred: 'Vulvovaginal Candidiasis',
            synonyms: [
                'yeast infection',
                'vaginal candidiasis',
                'candida vaginitis',
                'thrush vaginal',
                'monilial vaginitis'
            ],
            abbreviations: ['VVC'],
            category: 'genitourinary',
            mustNotMiss: false
        },
        'atrophic_vaginitis': {
            preferred: 'Atrophic Vaginitis',
            synonyms: [
                'genitourinary syndrome of menopause',
                'gsm',
                'vaginal atrophy',
                'urogenital atrophy'
            ],
            abbreviations: ['GSM'],
            category: 'genitourinary',
            mustNotMiss: false
        },

        // ==================== CARDIAC ====================
        'stemi': {
            preferred: 'STEMI',
            synonyms: [
                'st elevation myocardial infarction',
                'st-elevation mi',
                'transmural mi'
            ],
            abbreviations: ['STEMI'],
            category: 'cardiovascular',
            mustNotMiss: true
        },
        'nstemi': {
            preferred: 'NSTEMI',
            synonyms: [
                'non-st elevation myocardial infarction',
                'nste-acs',
                'subendocardial mi'
            ],
            abbreviations: ['NSTEMI'],
            category: 'cardiovascular',
            mustNotMiss: true
        },
        'unstable_angina': {
            preferred: 'Unstable Angina',
            synonyms: [
                'ua',
                'crescendo angina',
                'preinfarction angina'
            ],
            abbreviations: ['UA'],
            category: 'cardiovascular',
            mustNotMiss: true
        },
        'stable_angina': {
            preferred: 'Stable Angina',
            synonyms: [
                'chronic stable angina',
                'exertional angina',
                'angina pectoris'
            ],
            abbreviations: [],
            category: 'cardiovascular',
            mustNotMiss: false
        },
        'hfref': {
            preferred: 'Heart Failure with Reduced Ejection Fraction',
            synonyms: [
                'systolic heart failure',
                'systolic dysfunction',
                'hf with reduced ef'
            ],
            abbreviations: ['HFrEF'],
            category: 'cardiovascular',
            mustNotMiss: false
        },
        'hfpef': {
            preferred: 'Heart Failure with Preserved Ejection Fraction',
            synonyms: [
                'diastolic heart failure',
                'diastolic dysfunction',
                'hf with preserved ef'
            ],
            abbreviations: ['HFpEF'],
            category: 'cardiovascular',
            mustNotMiss: false
        },
        'acute_chf': {
            preferred: 'Acute Decompensated Heart Failure',
            synonyms: [
                'adhf',
                'acute heart failure',
                'chf exacerbation',
                'flash pulmonary edema'
            ],
            abbreviations: ['ADHF', 'CHF'],
            category: 'cardiovascular',
            mustNotMiss: true
        },
        'afib': {
            preferred: 'Atrial Fibrillation',
            synonyms: [
                'a-fib',
                'af',
                'auricular fibrillation'
            ],
            abbreviations: ['AFib', 'AF'],
            category: 'cardiovascular',
            mustNotMiss: false
        },
        'afib_rvr': {
            preferred: 'Atrial Fibrillation with RVR',
            synonyms: [
                'afib with rapid ventricular response',
                'fast afib',
                'uncontrolled afib'
            ],
            abbreviations: ['AFib w/ RVR'],
            category: 'cardiovascular',
            mustNotMiss: true
        },

        // ==================== RESPIRATORY ====================
        'cap': {
            preferred: 'Community-Acquired Pneumonia',
            synonyms: [
                'cap',
                'typical pneumonia',
                'bacterial pneumonia community'
            ],
            abbreviations: ['CAP'],
            category: 'respiratory',
            mustNotMiss: true
        },
        'hap': {
            preferred: 'Hospital-Acquired Pneumonia',
            synonyms: [
                'hap',
                'nosocomial pneumonia',
                'healthcare-associated pneumonia'
            ],
            abbreviations: ['HAP', 'HCAP'],
            category: 'respiratory',
            mustNotMiss: true
        },
        'vap': {
            preferred: 'Ventilator-Associated Pneumonia',
            synonyms: [
                'vap',
                'ventilator pneumonia'
            ],
            abbreviations: ['VAP'],
            category: 'respiratory',
            mustNotMiss: true
        },
        'aspiration_pneumonia': {
            preferred: 'Aspiration Pneumonia',
            synonyms: [
                'aspiration pneumonitis',
                'chemical pneumonitis'
            ],
            abbreviations: [],
            category: 'respiratory',
            mustNotMiss: true
        },
        'pulmonary_embolism': {
            preferred: 'Pulmonary Embolism',
            synonyms: [
                'pe',
                'pulmonary thromboembolism',
                'pte'
            ],
            abbreviations: ['PE', 'PTE'],
            category: 'respiratory',
            mustNotMiss: true
        },
        'copd_exacerbation': {
            preferred: 'COPD Exacerbation',
            synonyms: [
                'aecopd',
                'acute copd',
                'copd flare'
            ],
            abbreviations: ['AECOPD'],
            category: 'respiratory',
            mustNotMiss: false
        },
        'asthma_exacerbation': {
            preferred: 'Asthma Exacerbation',
            synonyms: [
                'acute asthma',
                'asthma attack',
                'asthma flare',
                'status asthmaticus'
            ],
            abbreviations: [],
            category: 'respiratory',
            mustNotMiss: true
        },

        // ==================== GI/ABDOMINAL ====================
        'acute_appendicitis': {
            preferred: 'Acute Appendicitis',
            synonyms: [
                'appendicitis'
            ],
            abbreviations: [],
            category: 'gastrointestinal',
            mustNotMiss: true
        },
        'acute_cholecystitis': {
            preferred: 'Acute Cholecystitis',
            synonyms: [
                'cholecystitis',
                'gallbladder infection',
                'gallbladder inflammation'
            ],
            abbreviations: [],
            category: 'gastrointestinal',
            mustNotMiss: true
        },
        'biliary_colic': {
            preferred: 'Biliary Colic',
            synonyms: [
                'gallstone pain',
                'symptomatic cholelithiasis',
                'gallbladder attack'
            ],
            abbreviations: [],
            category: 'gastrointestinal',
            mustNotMiss: false
        },
        'acute_pancreatitis': {
            preferred: 'Acute Pancreatitis',
            synonyms: [
                'pancreatitis'
            ],
            abbreviations: [],
            category: 'gastrointestinal',
            mustNotMiss: true
        },
        'sbo': {
            preferred: 'Small Bowel Obstruction',
            synonyms: [
                'sbo',
                'small intestine obstruction',
                'intestinal obstruction'
            ],
            abbreviations: ['SBO'],
            category: 'gastrointestinal',
            mustNotMiss: true
        },
        'lbo': {
            preferred: 'Large Bowel Obstruction',
            synonyms: [
                'lbo',
                'colonic obstruction'
            ],
            abbreviations: ['LBO'],
            category: 'gastrointestinal',
            mustNotMiss: true
        },
        'acute_diverticulitis': {
            preferred: 'Acute Diverticulitis',
            synonyms: [
                'diverticulitis'
            ],
            abbreviations: [],
            category: 'gastrointestinal',
            mustNotMiss: false
        },
        'gerd': {
            preferred: 'GERD',
            synonyms: [
                'gastroesophageal reflux disease',
                'acid reflux',
                'reflux esophagitis'
            ],
            abbreviations: ['GERD'],
            category: 'gastrointestinal',
            mustNotMiss: false
        },
        'peptic_ulcer': {
            preferred: 'Peptic Ulcer Disease',
            synonyms: [
                'pud',
                'gastric ulcer',
                'duodenal ulcer',
                'stomach ulcer'
            ],
            abbreviations: ['PUD'],
            category: 'gastrointestinal',
            mustNotMiss: false
        },
        'upper_gi_bleed': {
            preferred: 'Upper GI Bleeding',
            synonyms: [
                'ugib',
                'upper gastrointestinal hemorrhage',
                'hematemesis'
            ],
            abbreviations: ['UGIB'],
            category: 'gastrointestinal',
            mustNotMiss: true
        },
        'lower_gi_bleed': {
            preferred: 'Lower GI Bleeding',
            synonyms: [
                'lgib',
                'lower gastrointestinal hemorrhage',
                'hematochezia'
            ],
            abbreviations: ['LGIB'],
            category: 'gastrointestinal',
            mustNotMiss: true
        },

        // ==================== NEUROLOGIC ====================
        'ischemic_stroke': {
            preferred: 'Ischemic Stroke',
            synonyms: [
                'acute ischemic stroke',
                'cva',
                'cerebrovascular accident',
                'brain attack'
            ],
            abbreviations: ['CVA', 'AIS'],
            category: 'neurologic',
            mustNotMiss: true
        },
        'hemorrhagic_stroke': {
            preferred: 'Hemorrhagic Stroke',
            synonyms: [
                'intracerebral hemorrhage',
                'ich',
                'brain bleed'
            ],
            abbreviations: ['ICH'],
            category: 'neurologic',
            mustNotMiss: true
        },
        'sah': {
            preferred: 'Subarachnoid Hemorrhage',
            synonyms: [
                'sah',
                'ruptured aneurysm',
                'aneurysmal sah'
            ],
            abbreviations: ['SAH'],
            category: 'neurologic',
            mustNotMiss: true
        },
        'tia': {
            preferred: 'Transient Ischemic Attack',
            synonyms: [
                'tia',
                'mini stroke'
            ],
            abbreviations: ['TIA'],
            category: 'neurologic',
            mustNotMiss: true
        },
        'bacterial_meningitis': {
            preferred: 'Bacterial Meningitis',
            synonyms: [
                'acute bacterial meningitis',
                'pyogenic meningitis'
            ],
            abbreviations: [],
            category: 'neurologic',
            mustNotMiss: true
        },
        'viral_meningitis': {
            preferred: 'Viral Meningitis',
            synonyms: [
                'aseptic meningitis'
            ],
            abbreviations: [],
            category: 'neurologic',
            mustNotMiss: false
        },

        // ==================== ENDOCRINE ====================
        'dka': {
            preferred: 'Diabetic Ketoacidosis',
            synonyms: [
                'dka'
            ],
            abbreviations: ['DKA'],
            category: 'endocrine',
            mustNotMiss: true
        },
        'hhs': {
            preferred: 'Hyperosmolar Hyperglycemic State',
            synonyms: [
                'hhs',
                'hhns',
                'hyperosmolar nonketotic syndrome',
                'diabetic hyperosmolar syndrome'
            ],
            abbreviations: ['HHS', 'HHNS'],
            category: 'endocrine',
            mustNotMiss: true
        },
        'hypoglycemia': {
            preferred: 'Hypoglycemia',
            synonyms: [
                'low blood sugar',
                'insulin reaction'
            ],
            abbreviations: [],
            category: 'endocrine',
            mustNotMiss: true
        },
        'thyroid_storm': {
            preferred: 'Thyroid Storm',
            synonyms: [
                'thyrotoxic crisis',
                'severe thyrotoxicosis'
            ],
            abbreviations: [],
            category: 'endocrine',
            mustNotMiss: true
        },
        'myxedema_coma': {
            preferred: 'Myxedema Coma',
            synonyms: [
                'severe hypothyroidism',
                'myxedema crisis'
            ],
            abbreviations: [],
            category: 'endocrine',
            mustNotMiss: true
        },
        'adrenal_crisis': {
            preferred: 'Adrenal Crisis',
            synonyms: [
                'addisonian crisis',
                'acute adrenal insufficiency'
            ],
            abbreviations: [],
            category: 'endocrine',
            mustNotMiss: true
        },

        // ==================== INFECTIOUS ====================
        'sepsis': {
            preferred: 'Sepsis',
            synonyms: [
                'systemic infection',
                'septicemia'
            ],
            abbreviations: [],
            category: 'infectious',
            mustNotMiss: true
        },
        'septic_shock': {
            preferred: 'Septic Shock',
            synonyms: [
                'severe sepsis with shock'
            ],
            abbreviations: [],
            category: 'infectious',
            mustNotMiss: true
        },
        'cellulitis': {
            preferred: 'Cellulitis',
            synonyms: [
                'skin infection',
                'soft tissue infection'
            ],
            abbreviations: [],
            category: 'infectious',
            mustNotMiss: false
        },
        'necrotizing_fasciitis': {
            preferred: 'Necrotizing Fasciitis',
            synonyms: [
                'nec fasc',
                'flesh eating bacteria',
                'necrotizing soft tissue infection'
            ],
            abbreviations: ['NSTI'],
            category: 'infectious',
            mustNotMiss: true
        }
    };

    // ============================================================
    // VAGUE DIAGNOSES THAT SHOULD NOT BE USED
    // ============================================================

    const VAGUE_DIAGNOSES = {
        'cystitis': {
            redirectTo: ['uncomplicated_cystitis', 'complicated_cystitis'],
            message: 'Be more specific - is this uncomplicated or complicated cystitis?',
            partialCreditFor: 'uncomplicated_cystitis'
        },
        'uti': {
            redirectTo: ['uncomplicated_cystitis', 'pyelonephritis'],
            message: 'Specify the location - is this a lower UTI (cystitis) or upper UTI (pyelonephritis)?',
            partialCreditFor: null  // Too vague
        },
        'urinary tract infection': {
            redirectTo: ['uncomplicated_cystitis', 'pyelonephritis'],
            message: 'Specify the location - is this a lower UTI (cystitis) or upper UTI (pyelonephritis)?',
            partialCreditFor: null
        },
        'vaginitis': {
            redirectTo: ['bacterial_vaginosis', 'vulvovaginal_candidiasis', 'trichomoniasis', 'atrophic_vaginitis'],
            message: 'Specify the type of vaginitis - BV, yeast, trichomoniasis, or atrophic?',
            partialCreditFor: null
        },
        'pneumonia': {
            redirectTo: ['cap', 'hap', 'aspiration_pneumonia'],
            message: 'Specify the type of pneumonia based on clinical setting (CAP, HAP, aspiration)',
            partialCreditFor: 'cap'  // Default assumption for outpatient
        },
        'heart attack': {
            redirectTo: ['stemi', 'nstemi'],
            message: 'Use the proper terminology - STEMI or NSTEMI based on EKG findings',
            partialCreditFor: 'nstemi'
        },
        'mi': {
            redirectTo: ['stemi', 'nstemi'],
            message: 'Specify STEMI or NSTEMI',
            partialCreditFor: 'nstemi'
        },
        'myocardial infarction': {
            redirectTo: ['stemi', 'nstemi'],
            message: 'Specify STEMI or NSTEMI',
            partialCreditFor: 'nstemi'
        },
        'heart failure': {
            redirectTo: ['hfref', 'hfpef', 'acute_chf'],
            message: 'Specify the type - HFrEF, HFpEF, or acute decompensated?',
            partialCreditFor: 'acute_chf'
        },
        'chf': {
            redirectTo: ['hfref', 'hfpef', 'acute_chf'],
            message: 'CHF is outdated terminology - specify HFrEF, HFpEF, or acute decompensated HF',
            partialCreditFor: 'acute_chf'
        },
        'sti': {
            redirectTo: ['gonorrhea', 'chlamydia', 'syphilis', 'genital_herpes', 'trichomoniasis'],
            message: 'Specify which STI you suspect',
            partialCreditFor: null
        },
        'std': {
            redirectTo: ['gonorrhea', 'chlamydia', 'syphilis', 'genital_herpes', 'trichomoniasis'],
            message: 'STD is outdated - use STI and specify which infection',
            partialCreditFor: null
        },
        'stroke': {
            redirectTo: ['ischemic_stroke', 'hemorrhagic_stroke'],
            message: 'Specify ischemic or hemorrhagic stroke',
            partialCreditFor: 'ischemic_stroke'  // More common
        },
        'cva': {
            redirectTo: ['ischemic_stroke', 'hemorrhagic_stroke'],
            message: 'CVA is vague - specify ischemic or hemorrhagic stroke',
            partialCreditFor: 'ischemic_stroke'
        }
    };

    // ============================================================
    // CORE FUNCTIONS
    // ============================================================

    /**
     * Find matching diagnosis from user input
     * Returns: { id, preferred, matchType, partialCredit }
     */
    window.findMatchingDiagnosis = function(input) {
        if (!input) return null;
        
        const normalizedInput = input.toLowerCase().trim();
        
        // First check if it's a vague diagnosis
        const vague = checkVagueDiagnosis(normalizedInput);
        if (vague) return vague;
        
        // Check exact matches and synonyms
        for (const [id, data] of Object.entries(DIAGNOSIS_SYNONYMS)) {
            // Check preferred name
            if (data.preferred.toLowerCase() === normalizedInput) {
                return {
                    id: id,
                    preferred: data.preferred,
                    matchType: 'exact',
                    partialCredit: false,
                    category: data.category,
                    mustNotMiss: data.mustNotMiss
                };
            }
            
            // Check synonyms
            if (data.synonyms.some(s => s.toLowerCase() === normalizedInput)) {
                return {
                    id: id,
                    preferred: data.preferred,
                    matchType: 'synonym',
                    partialCredit: false,
                    category: data.category,
                    mustNotMiss: data.mustNotMiss
                };
            }
            
            // Check abbreviations (full credit for these)
            if (data.abbreviations.some(a => a.toLowerCase() === normalizedInput)) {
                return {
                    id: id,
                    preferred: data.preferred,
                    matchType: 'abbreviation',
                    partialCredit: false,
                    category: data.category,
                    mustNotMiss: data.mustNotMiss,
                    displayAs: `${data.preferred} (${normalizedInput.toUpperCase()})`
                };
            }
        }
        
        // Fuzzy matching for partial matches
        return fuzzyMatchDiagnosis(normalizedInput);
    };

    /**
     * Check if input is a vague diagnosis that should be more specific
     */
    function checkVagueDiagnosis(input) {
        const vague = VAGUE_DIAGNOSES[input];
        if (!vague) return null;
        
        return {
            id: null,
            isVague: true,
            message: vague.message,
            suggestions: vague.redirectTo.map(id => DIAGNOSIS_SYNONYMS[id]?.preferred).filter(Boolean),
            partialCreditFor: vague.partialCreditFor,
            partialCredit: vague.partialCreditFor ? true : false
        };
    }

    /**
     * Fuzzy matching for partial matches
     */
    function fuzzyMatchDiagnosis(input) {
        const words = input.split(/\s+/);
        let bestMatch = null;
        let bestScore = 0;
        
        for (const [id, data] of Object.entries(DIAGNOSIS_SYNONYMS)) {
            // Check if input contains key words from preferred name
            const preferredWords = data.preferred.toLowerCase().split(/\s+/);
            let matchScore = 0;
            
            words.forEach(word => {
                if (preferredWords.some(pw => pw.includes(word) || word.includes(pw))) {
                    matchScore++;
                }
            });
            
            // Also check synonyms
            data.synonyms.forEach(syn => {
                const synWords = syn.toLowerCase().split(/\s+/);
                words.forEach(word => {
                    if (synWords.some(sw => sw.includes(word) || word.includes(sw))) {
                        matchScore += 0.5;
                    }
                });
            });
            
            if (matchScore > bestScore && matchScore >= 1) {
                bestScore = matchScore;
                bestMatch = {
                    id: id,
                    preferred: data.preferred,
                    matchType: 'fuzzy',
                    partialCredit: true,
                    confidence: Math.min(matchScore / words.length, 1),
                    category: data.category,
                    mustNotMiss: data.mustNotMiss
                };
            }
        }
        
        return bestMatch;
    }

    /**
     * Get diagnosis display name with abbreviation
     */
    window.getDiagnosisDisplay = function(input) {
        const match = window.findMatchingDiagnosis(input);
        if (!match) return input;
        if (match.isVague) return input;
        return match.displayAs || match.preferred;
    };

    /**
     * Search diagnoses for autocomplete
     */
    window.searchDiagnoses = function(query, limit = 10) {
        if (!query || query.length < 2) return [];
        
        const normalizedQuery = query.toLowerCase().trim();
        const results = [];
        
        for (const [id, data] of Object.entries(DIAGNOSIS_SYNONYMS)) {
            let matchScore = 0;
            let matchedOn = null;
            
            // Check preferred name
            if (data.preferred.toLowerCase().includes(normalizedQuery)) {
                matchScore = 10;
                matchedOn = 'name';
            }
            
            // Check abbreviations
            data.abbreviations.forEach(abbr => {
                if (abbr.toLowerCase().startsWith(normalizedQuery)) {
                    matchScore = Math.max(matchScore, 8);
                    matchedOn = matchedOn || 'abbreviation';
                }
            });
            
            // Check synonyms
            data.synonyms.forEach(syn => {
                if (syn.toLowerCase().includes(normalizedQuery)) {
                    matchScore = Math.max(matchScore, 5);
                    matchedOn = matchedOn || 'synonym';
                }
            });
            
            if (matchScore > 0) {
                results.push({
                    id: id,
                    name: data.preferred,
                    abbreviations: data.abbreviations,
                    category: data.category,
                    mustNotMiss: data.mustNotMiss,
                    matchScore: matchScore,
                    matchedOn: matchedOn
                });
            }
        }
        
        // Sort by score and limit
        return results
            .sort((a, b) => b.matchScore - a.matchScore)
            .slice(0, limit);
    };

    /**
     * Validate a differential diagnosis list
     * Returns feedback for vague terms and suggestions
     */
    window.validateDifferential = function(differential) {
        const feedback = [];
        
        differential.forEach((dx, index) => {
            const match = window.findMatchingDiagnosis(dx.name);
            
            if (match?.isVague) {
                feedback.push({
                    index: index,
                    original: dx.name,
                    type: 'vague',
                    message: match.message,
                    suggestions: match.suggestions
                });
            } else if (match?.matchType === 'fuzzy') {
                feedback.push({
                    index: index,
                    original: dx.name,
                    type: 'fuzzy',
                    message: `Did you mean "${match.preferred}"?`,
                    suggested: match.preferred
                });
            }
        });
        
        return feedback;
    };

    /**
     * Calculate score with partial credit for synonyms
     */
    window.scoreDiagnosisMatch = function(studentDx, correctDx, maxPoints = 10) {
        const studentMatch = window.findMatchingDiagnosis(studentDx);
        const correctMatch = window.findMatchingDiagnosis(correctDx);
        
        // No valid diagnosis
        if (!studentMatch || studentMatch.isVague) {
            // Check for partial credit on vague diagnosis
            if (studentMatch?.isVague && studentMatch.partialCreditFor) {
                const partialMatch = DIAGNOSIS_SYNONYMS[studentMatch.partialCreditFor];
                if (partialMatch && correctMatch?.id === studentMatch.partialCreditFor) {
                    return {
                        points: Math.round(maxPoints * 0.5),
                        feedback: studentMatch.message,
                        partialCredit: true
                    };
                }
            }
            return { points: 0, feedback: studentMatch?.message || 'Diagnosis not recognized' };
        }
        
        // Exact or synonym match
        if (studentMatch.id === correctMatch?.id) {
            if (studentMatch.partialCredit) {
                return {
                    points: Math.round(maxPoints * 0.8),
                    feedback: `Close! The preferred term is "${correctMatch.preferred}"`,
                    partialCredit: true
                };
            }
            return { points: maxPoints, feedback: 'Correct!', partialCredit: false };
        }
        
        // No match
        return { points: 0, feedback: null };
    };

    // ============================================================
    // UI HELPERS
    // ============================================================

    /**
     * Render vague diagnosis warning
     */
    window.renderVagueDiagnosisWarning = function(feedback) {
        if (!feedback || feedback.length === 0) return '';
        
        return `
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                <div class="flex items-start">
                    <span class="text-yellow-400 text-xl mr-3">⚠️</span>
                    <div>
                        <h4 class="font-bold text-yellow-800">Be More Specific</h4>
                        ${feedback.map(f => `
                            <div class="mt-2 text-sm text-yellow-700">
                                <strong>"${f.original}"</strong>: ${f.message}
                                ${f.suggestions ? `
                                    <div class="mt-1 flex flex-wrap gap-2">
                                        ${f.suggestions.map(s => `
                                            <button onclick="window.replaceDiagnosis(${f.index}, '${s}')"
                                                    class="px-2 py-1 bg-yellow-100 hover:bg-yellow-200 
                                                           rounded text-yellow-800 text-xs">
                                                → ${s}
                                            </button>
                                        `).join('')}
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    };

    /**
     * Replace a diagnosis with a suggested one
     */
    window.replaceDiagnosis = function(index, newDiagnosis) {
        if (window.state?.rankedDifferential && window.state.rankedDifferential[index]) {
            window.state.rankedDifferential[index].name = newDiagnosis;
            if (typeof window.render === 'function') {
                window.render();
            }
        }
    };

    // ============================================================
    // EXPORTS
    // ============================================================

    // Expose the databases for reference
    window.ReasonDxDiagnoses = {
        synonyms: DIAGNOSIS_SYNONYMS,
        vague: VAGUE_DIAGNOSES,
        findMatch: window.findMatchingDiagnosis,
        search: window.searchDiagnoses,
        validate: window.validateDifferential,
        score: window.scoreDiagnosisMatch
    };

    // ============================================================
    // INITIALIZATION
    // ============================================================

    console.log('✅ ReasonDx Diagnosis Consolidation module loaded');
    console.log(`   - ${Object.keys(DIAGNOSIS_SYNONYMS).length} diagnoses with synonyms`);
    console.log(`   - ${Object.keys(VAGUE_DIAGNOSES).length} vague terms with redirects`);
    console.log('   - Use window.searchDiagnoses(query) to search');
    console.log('   - Use window.findMatchingDiagnosis(input) to match');

})();
