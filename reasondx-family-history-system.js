/**
 * ============================================================================
 * REASONDX FAMILY HISTORY SYSTEM
 * ============================================================================
 * Version: 1.0 | December 2024
 * 
 * Features:
 * 1. Complete family structure (parents, siblings, children, grandparents, cousins)
 * 2. Age at diagnosis tracking
 * 3. Alive/deceased status with cause of death differentiation
 * 4. Gated responses - doesn't divulge until specifically asked
 * 5. Generator creates realistic family histories based on case diagnosis
 * ============================================================================
 */

const FamilyHistorySystem = (function() {
    'use strict';

    // ========================================================================
    // FAMILY MEMBER TEMPLATES
    // ========================================================================
    
    const familyRelationships = {
        mother: { generation: 1, side: 'maternal', gender: 'F' },
        father: { generation: 1, side: 'paternal', gender: 'M' },
        maternalGrandmother: { generation: 2, side: 'maternal', gender: 'F' },
        maternalGrandfather: { generation: 2, side: 'maternal', gender: 'M' },
        paternalGrandmother: { generation: 2, side: 'paternal', gender: 'F' },
        paternalGrandfather: { generation: 2, side: 'paternal', gender: 'M' },
        siblings: { generation: 0, side: 'both', gender: 'mixed' },
        children: { generation: -1, side: 'patient', gender: 'mixed' },
        maternalAuntsUncles: { generation: 1, side: 'maternal', gender: 'mixed' },
        paternalAuntsUncles: { generation: 1, side: 'paternal', gender: 'mixed' },
        maternalCousins: { generation: 0, side: 'maternal', gender: 'mixed' },
        paternalCousins: { generation: 0, side: 'paternal', gender: 'mixed' }
    };

    // ========================================================================
    // CONDITION PREVALENCE AND INHERITANCE PATTERNS
    // ========================================================================
    
    const conditionData = {
        // Cardiovascular
        coronary_artery_disease: {
            prevalence: 0.15,
            inheritanceStrength: 'moderate',
            typicalOnsetAge: { min: 45, max: 75 },
            genderBias: 'M',
            canCauseDeath: true,
            aliases: ["heart disease", "heart attack", "cad", "coronary disease", "mi"]
        },
        hypertension: {
            prevalence: 0.30,
            inheritanceStrength: 'moderate',
            typicalOnsetAge: { min: 35, max: 65 },
            genderBias: null,
            canCauseDeath: false,
            aliases: ["high blood pressure", "htn"]
        },
        stroke: {
            prevalence: 0.05,
            inheritanceStrength: 'weak',
            typicalOnsetAge: { min: 55, max: 85 },
            genderBias: null,
            canCauseDeath: true,
            aliases: ["cva", "brain attack"]
        },
        atrial_fibrillation: {
            prevalence: 0.04,
            inheritanceStrength: 'weak',
            typicalOnsetAge: { min: 50, max: 80 },
            genderBias: null,
            canCauseDeath: false,
            aliases: ["afib", "a-fib", "irregular heartbeat"]
        },
        hyperlipidemia: {
            prevalence: 0.25,
            inheritanceStrength: 'strong',
            typicalOnsetAge: { min: 30, max: 60 },
            genderBias: null,
            canCauseDeath: false,
            aliases: ["high cholesterol", "cholesterol"]
        },
        sudden_cardiac_death: {
            prevalence: 0.01,
            inheritanceStrength: 'strong',
            typicalOnsetAge: { min: 20, max: 50 },
            genderBias: 'M',
            canCauseDeath: true,
            aliases: ["sudden death", "died suddenly", "heart stopped"]
        },
        aortic_aneurysm: {
            prevalence: 0.02,
            inheritanceStrength: 'moderate',
            typicalOnsetAge: { min: 50, max: 80 },
            genderBias: 'M',
            canCauseDeath: true,
            aliases: ["aneurysm"]
        },
        
        // Metabolic
        diabetes_type2: {
            prevalence: 0.12,
            inheritanceStrength: 'strong',
            typicalOnsetAge: { min: 35, max: 70 },
            genderBias: null,
            canCauseDeath: false,
            aliases: ["diabetes", "sugar diabetes", "type 2"]
        },
        diabetes_type1: {
            prevalence: 0.01,
            inheritanceStrength: 'moderate',
            typicalOnsetAge: { min: 5, max: 30 },
            genderBias: null,
            canCauseDeath: false,
            aliases: ["juvenile diabetes", "type 1"]
        },
        obesity: {
            prevalence: 0.35,
            inheritanceStrength: 'moderate',
            typicalOnsetAge: { min: 20, max: 50 },
            genderBias: null,
            canCauseDeath: false,
            aliases: ["overweight", "weight problems"]
        },
        
        // Cancers
        breast_cancer: {
            prevalence: 0.08,
            inheritanceStrength: 'strong',
            typicalOnsetAge: { min: 40, max: 70 },
            genderBias: 'F',
            canCauseDeath: true,
            aliases: ["breast cancer"]
        },
        colon_cancer: {
            prevalence: 0.04,
            inheritanceStrength: 'strong',
            typicalOnsetAge: { min: 50, max: 75 },
            genderBias: null,
            canCauseDeath: true,
            aliases: ["colon cancer", "colorectal cancer", "bowel cancer"]
        },
        lung_cancer: {
            prevalence: 0.05,
            inheritanceStrength: 'weak',
            typicalOnsetAge: { min: 55, max: 80 },
            genderBias: null,
            canCauseDeath: true,
            aliases: ["lung cancer"]
        },
        prostate_cancer: {
            prevalence: 0.10,
            inheritanceStrength: 'moderate',
            typicalOnsetAge: { min: 55, max: 80 },
            genderBias: 'M',
            canCauseDeath: true,
            aliases: ["prostate cancer"]
        },
        ovarian_cancer: {
            prevalence: 0.01,
            inheritanceStrength: 'strong',
            typicalOnsetAge: { min: 45, max: 70 },
            genderBias: 'F',
            canCauseDeath: true,
            aliases: ["ovarian cancer"]
        },
        melanoma: {
            prevalence: 0.02,
            inheritanceStrength: 'moderate',
            typicalOnsetAge: { min: 30, max: 70 },
            genderBias: null,
            canCauseDeath: true,
            aliases: ["melanoma", "skin cancer"]
        },
        pancreatic_cancer: {
            prevalence: 0.01,
            inheritanceStrength: 'weak',
            typicalOnsetAge: { min: 55, max: 80 },
            genderBias: null,
            canCauseDeath: true,
            aliases: ["pancreatic cancer"]
        },
        
        // Neurological
        alzheimers: {
            prevalence: 0.06,
            inheritanceStrength: 'moderate',
            typicalOnsetAge: { min: 65, max: 90 },
            genderBias: null,
            canCauseDeath: true,
            aliases: ["alzheimer's", "dementia", "memory problems"]
        },
        parkinsons: {
            prevalence: 0.02,
            inheritanceStrength: 'weak',
            typicalOnsetAge: { min: 55, max: 80 },
            genderBias: 'M',
            canCauseDeath: false,
            aliases: ["parkinson's"]
        },
        epilepsy: {
            prevalence: 0.01,
            inheritanceStrength: 'moderate',
            typicalOnsetAge: { min: 5, max: 40 },
            genderBias: null,
            canCauseDeath: false,
            aliases: ["epilepsy", "seizures"]
        },
        migraine: {
            prevalence: 0.12,
            inheritanceStrength: 'strong',
            typicalOnsetAge: { min: 15, max: 40 },
            genderBias: 'F',
            canCauseDeath: false,
            aliases: ["migraines"]
        },
        
        // Autoimmune
        rheumatoid_arthritis: {
            prevalence: 0.01,
            inheritanceStrength: 'moderate',
            typicalOnsetAge: { min: 30, max: 60 },
            genderBias: 'F',
            canCauseDeath: false,
            aliases: ["rheumatoid", "ra"]
        },
        lupus: {
            prevalence: 0.005,
            inheritanceStrength: 'moderate',
            typicalOnsetAge: { min: 20, max: 50 },
            genderBias: 'F',
            canCauseDeath: true,
            aliases: ["lupus", "sle"]
        },
        thyroid_disease: {
            prevalence: 0.08,
            inheritanceStrength: 'moderate',
            typicalOnsetAge: { min: 25, max: 60 },
            genderBias: 'F',
            canCauseDeath: false,
            aliases: ["thyroid", "hypothyroid", "hyperthyroid"]
        },
        celiac: {
            prevalence: 0.01,
            inheritanceStrength: 'strong',
            typicalOnsetAge: { min: 10, max: 40 },
            genderBias: null,
            canCauseDeath: false,
            aliases: ["celiac", "gluten intolerance"]
        },
        
        // Psychiatric
        depression: {
            prevalence: 0.15,
            inheritanceStrength: 'moderate',
            typicalOnsetAge: { min: 15, max: 50 },
            genderBias: 'F',
            canCauseDeath: false,
            aliases: ["depression"]
        },
        bipolar: {
            prevalence: 0.02,
            inheritanceStrength: 'strong',
            typicalOnsetAge: { min: 18, max: 35 },
            genderBias: null,
            canCauseDeath: false,
            aliases: ["bipolar", "manic depression"]
        },
        schizophrenia: {
            prevalence: 0.01,
            inheritanceStrength: 'strong',
            typicalOnsetAge: { min: 18, max: 35 },
            genderBias: null,
            canCauseDeath: false,
            aliases: ["schizophrenia"]
        },
        alcoholism: {
            prevalence: 0.08,
            inheritanceStrength: 'strong',
            typicalOnsetAge: { min: 20, max: 50 },
            genderBias: 'M',
            canCauseDeath: true,
            aliases: ["alcoholism", "alcohol problem", "drinking problem"]
        },
        suicide: {
            prevalence: 0.02,
            inheritanceStrength: 'moderate',
            typicalOnsetAge: { min: 20, max: 60 },
            genderBias: 'M',
            canCauseDeath: true,
            aliases: ["suicide", "took their own life"]
        },
        
        // Pulmonary
        asthma: {
            prevalence: 0.08,
            inheritanceStrength: 'strong',
            typicalOnsetAge: { min: 5, max: 30 },
            genderBias: null,
            canCauseDeath: false,
            aliases: ["asthma"]
        },
        copd: {
            prevalence: 0.05,
            inheritanceStrength: 'weak',
            typicalOnsetAge: { min: 50, max: 75 },
            genderBias: null,
            canCauseDeath: true,
            aliases: ["copd", "emphysema"]
        },
        
        // Hematologic
        dvt_pe: {
            prevalence: 0.02,
            inheritanceStrength: 'strong',
            typicalOnsetAge: { min: 30, max: 70 },
            genderBias: null,
            canCauseDeath: true,
            aliases: ["blood clot", "dvt", "pe", "pulmonary embolism"]
        },
        hemophilia: {
            prevalence: 0.001,
            inheritanceStrength: 'strong',
            typicalOnsetAge: { min: 0, max: 10 },
            genderBias: 'M',
            canCauseDeath: false,
            aliases: ["hemophilia", "bleeding disorder"]
        },
        sickle_cell: {
            prevalence: 0.003,
            inheritanceStrength: 'strong',
            typicalOnsetAge: { min: 0, max: 5 },
            genderBias: null,
            canCauseDeath: true,
            aliases: ["sickle cell"]
        },
        
        // GI
        crohns: {
            prevalence: 0.005,
            inheritanceStrength: 'moderate',
            typicalOnsetAge: { min: 15, max: 40 },
            genderBias: null,
            canCauseDeath: false,
            aliases: ["crohn's", "crohns"]
        },
        ulcerative_colitis: {
            prevalence: 0.005,
            inheritanceStrength: 'moderate',
            typicalOnsetAge: { min: 15, max: 40 },
            genderBias: null,
            canCauseDeath: false,
            aliases: ["ulcerative colitis", "uc"]
        },
        
        // Renal
        polycystic_kidney: {
            prevalence: 0.001,
            inheritanceStrength: 'strong',
            typicalOnsetAge: { min: 30, max: 50 },
            genderBias: null,
            canCauseDeath: true,
            aliases: ["polycystic kidney", "pkd"]
        },
        kidney_disease: {
            prevalence: 0.03,
            inheritanceStrength: 'weak',
            typicalOnsetAge: { min: 50, max: 80 },
            genderBias: null,
            canCauseDeath: true,
            aliases: ["kidney disease", "kidney failure"]
        }
    };

    // ========================================================================
    // DIAGNOSIS-LINKED RELEVANT FAMILY HISTORY
    // ========================================================================
    
    const diagnosisRelevantFamilyHistory = {
        "ACS": ["coronary_artery_disease", "sudden_cardiac_death", "hypertension", "diabetes_type2", "hyperlipidemia"],
        "Acute Coronary Syndrome": ["coronary_artery_disease", "sudden_cardiac_death", "hypertension", "diabetes_type2", "hyperlipidemia"],
        "Chest Pain": ["coronary_artery_disease", "sudden_cardiac_death", "aortic_aneurysm"],
        "Pulmonary Embolism": ["dvt_pe"],
        "PE": ["dvt_pe"],
        "Stroke": ["stroke", "atrial_fibrillation", "coronary_artery_disease", "hypertension"],
        "CVA": ["stroke", "atrial_fibrillation", "coronary_artery_disease", "hypertension"],
        "SAH": ["aortic_aneurysm", "polycystic_kidney"],
        "Subarachnoid Hemorrhage": ["aortic_aneurysm", "polycystic_kidney"],
        "Syncope": ["sudden_cardiac_death", "coronary_artery_disease", "epilepsy"],
        "Headache": ["migraine", "stroke", "aortic_aneurysm"],
        "Migraine": ["migraine"],
        "Colon Cancer": ["colon_cancer"],
        "Breast Cancer": ["breast_cancer", "ovarian_cancer"],
        "Abdominal Pain": ["crohns", "ulcerative_colitis", "colon_cancer"],
        "GI Bleed": ["colon_cancer", "crohns", "ulcerative_colitis"],
        "Diabetes": ["diabetes_type2", "diabetes_type1"],
        "DKA": ["diabetes_type2", "diabetes_type1"],
        "Thyroid": ["thyroid_disease"],
        "Atrial Fibrillation": ["atrial_fibrillation"],
        "Heart Failure": ["coronary_artery_disease", "sudden_cardiac_death"],
        "Aortic Dissection": ["aortic_aneurysm", "sudden_cardiac_death"],
        "Depression": ["depression", "bipolar", "suicide"],
        "Anxiety": ["depression", "bipolar"],
        "Psychosis": ["schizophrenia", "bipolar"]
    };

    // ========================================================================
    // GATED RESPONSE TRACKING
    // ========================================================================
    
    let familyHistoryState = {
        askedGeneral: false,
        specificConditionsAsked: [],
        familyMembersDiscussed: [],
        generatedFamily: null
    };

    /**
     * Reset family history state
     */
    function resetState() {
        familyHistoryState = {
            askedGeneral: false,
            specificConditionsAsked: [],
            familyMembersDiscussed: [],
            generatedFamily: null
        };
    }

    // ========================================================================
    // FAMILY GENERATION
    // ========================================================================

    /**
     * Generate realistic age based on relationship to patient
     */
    function generateRelativeAge(patientAge, relationship) {
        let baseAge;
        const variance = Math.floor(Math.random() * 6) - 3; // -3 to +3 years
        
        switch (relationship) {
            case 'mother':
                baseAge = patientAge + 25 + Math.floor(Math.random() * 10);
                break;
            case 'father':
                baseAge = patientAge + 27 + Math.floor(Math.random() * 10);
                break;
            case 'maternalGrandmother':
            case 'paternalGrandmother':
                baseAge = patientAge + 50 + Math.floor(Math.random() * 15);
                break;
            case 'maternalGrandfather':
            case 'paternalGrandfather':
                baseAge = patientAge + 52 + Math.floor(Math.random() * 15);
                break;
            case 'sibling':
                baseAge = patientAge + Math.floor(Math.random() * 10) - 5;
                break;
            case 'child':
                baseAge = patientAge - 25 - Math.floor(Math.random() * 10);
                if (baseAge < 0) baseAge = Math.floor(Math.random() * 20) + 5;
                break;
            case 'aunt':
            case 'uncle':
                baseAge = patientAge + 25 + Math.floor(Math.random() * 15) - 5;
                break;
            case 'cousin':
                baseAge = patientAge + Math.floor(Math.random() * 20) - 10;
                break;
            default:
                baseAge = patientAge;
        }
        
        return Math.max(0, baseAge + variance);
    }

    /**
     * Determine if family member is alive based on age
     */
    function isAlive(currentAge, hadFatalCondition) {
        if (hadFatalCondition) {
            return Math.random() > 0.6; // 40% died from condition
        }
        
        // Life expectancy based mortality
        if (currentAge > 90) return Math.random() > 0.7;
        if (currentAge > 80) return Math.random() > 0.5;
        if (currentAge > 70) return Math.random() > 0.3;
        if (currentAge > 60) return Math.random() > 0.15;
        return Math.random() > 0.05;
    }

    /**
     * Generate cause of death
     */
    function generateCauseOfDeath(conditions, age) {
        // Check if any condition could have caused death
        const fatalConditions = conditions.filter(c => {
            const data = conditionData[c.condition];
            return data && data.canCauseDeath;
        });
        
        if (fatalConditions.length > 0 && Math.random() > 0.4) {
            const condition = fatalConditions[Math.floor(Math.random() * fatalConditions.length)];
            return {
                cause: condition.condition,
                diedFromCondition: true
            };
        }
        
        // Other causes of death
        const otherCauses = [
            "natural causes",
            "heart attack",
            "stroke",
            "cancer",
            "pneumonia",
            "accident",
            "complications from surgery"
        ];
        
        if (age > 85) {
            return { cause: "natural causes", diedFromCondition: false };
        }
        
        return {
            cause: otherCauses[Math.floor(Math.random() * otherCauses.length)],
            diedFromCondition: false
        };
    }

    /**
     * Generate conditions for a family member based on diagnosis relevance
     */
    function generateConditions(gender, age, relevantConditions, inheritanceBoost) {
        const conditions = [];
        
        for (const [conditionName, data] of Object.entries(conditionData)) {
            let probability = data.prevalence;
            
            // Boost probability if condition is relevant to diagnosis
            if (relevantConditions.includes(conditionName)) {
                probability *= (inheritanceBoost || 3);
            }
            
            // Adjust for inheritance strength
            if (data.inheritanceStrength === 'strong') {
                probability *= 1.5;
            } else if (data.inheritanceStrength === 'weak') {
                probability *= 0.7;
            }
            
            // Adjust for gender bias
            if (data.genderBias) {
                if (data.genderBias === gender) {
                    probability *= 1.5;
                } else {
                    probability *= 0.3;
                }
            }
            
            // Only add if age is appropriate
            if (age >= data.typicalOnsetAge.min && Math.random() < probability) {
                const ageAtDiagnosis = Math.max(
                    data.typicalOnsetAge.min,
                    Math.min(age - 5, data.typicalOnsetAge.max)
                ) + Math.floor(Math.random() * 10) - 5;
                
                conditions.push({
                    condition: conditionName,
                    ageAtDiagnosis: Math.max(data.typicalOnsetAge.min, ageAtDiagnosis)
                });
            }
        }
        
        return conditions;
    }

    /**
     * Generate a family member
     */
    function generateFamilyMember(relationship, patientAge, patientGender, relevantConditions, inheritanceBoost) {
        const gender = relationship.includes('mother') || relationship.includes('Grandmother') || 
                      relationship.includes('sister') || relationship.includes('daughter') ||
                      relationship.includes('aunt') ? 'F' :
                      relationship.includes('father') || relationship.includes('Grandfather') ||
                      relationship.includes('brother') || relationship.includes('son') ||
                      relationship.includes('uncle') ? 'M' :
                      Math.random() > 0.5 ? 'M' : 'F';
        
        const currentAge = generateRelativeAge(patientAge, relationship.replace(/maternal|paternal/i, '').toLowerCase());
        const conditions = generateConditions(gender, currentAge, relevantConditions, inheritanceBoost);
        
        const hasFatalCondition = conditions.some(c => conditionData[c.condition]?.canCauseDeath);
        const alive = isAlive(currentAge, hasFatalCondition);
        
        let deathInfo = null;
        if (!alive) {
            const cod = generateCauseOfDeath(conditions, currentAge);
            deathInfo = {
                ageAtDeath: currentAge - Math.floor(Math.random() * 10),
                cause: cod.cause,
                diedFromCondition: cod.diedFromCondition
            };
        }
        
        return {
            relationship,
            gender,
            currentAge: alive ? currentAge : null,
            alive,
            conditions,
            deathInfo,
            name: generateName(gender)
        };
    }

    /**
     * Generate a random name
     */
    function generateName(gender) {
        const maleNames = ["John", "Robert", "Michael", "William", "David", "James", "Richard", "Thomas", "Charles", "Joseph"];
        const femaleNames = ["Mary", "Patricia", "Jennifer", "Linda", "Barbara", "Elizabeth", "Susan", "Jessica", "Sarah", "Karen"];
        
        const names = gender === 'M' ? maleNames : femaleNames;
        return names[Math.floor(Math.random() * names.length)];
    }

    /**
     * Generate complete family history based on diagnosis
     */
    function generateFamilyHistory(patientAge, patientGender, diagnosis, customRelevantConditions) {
        const relevantConditions = customRelevantConditions || 
                                  diagnosisRelevantFamilyHistory[diagnosis] || 
                                  [];
        
        // Higher inheritance boost for first-degree relatives
        const firstDegreeBoost = 4;
        const secondDegreeBoost = 2;
        
        const family = {
            // First degree relatives (parents)
            mother: generateFamilyMember('mother', patientAge, patientGender, relevantConditions, firstDegreeBoost),
            father: generateFamilyMember('father', patientAge, patientGender, relevantConditions, firstDegreeBoost),
            
            // Second degree (grandparents)
            maternalGrandmother: generateFamilyMember('maternalGrandmother', patientAge, patientGender, relevantConditions, secondDegreeBoost),
            maternalGrandfather: generateFamilyMember('maternalGrandfather', patientAge, patientGender, relevantConditions, secondDegreeBoost),
            paternalGrandmother: generateFamilyMember('paternalGrandmother', patientAge, patientGender, relevantConditions, secondDegreeBoost),
            paternalGrandfather: generateFamilyMember('paternalGrandfather', patientAge, patientGender, relevantConditions, secondDegreeBoost),
            
            // Siblings (0-4)
            siblings: [],
            
            // Children (0-4)
            children: [],
            
            // Aunts/Uncles
            maternalAuntsUncles: [],
            paternalAuntsUncles: [],
            
            // Cousins
            maternalCousins: [],
            paternalCousins: []
        };
        
        // Generate siblings
        const numSiblings = Math.floor(Math.random() * 4);
        for (let i = 0; i < numSiblings; i++) {
            const gender = Math.random() > 0.5 ? 'M' : 'F';
            const rel = gender === 'M' ? 'brother' : 'sister';
            family.siblings.push(generateFamilyMember(rel, patientAge, patientGender, relevantConditions, firstDegreeBoost));
        }
        
        // Generate children (if patient is old enough)
        if (patientAge > 25) {
            const numChildren = Math.floor(Math.random() * 4);
            for (let i = 0; i < numChildren; i++) {
                const gender = Math.random() > 0.5 ? 'M' : 'F';
                const rel = gender === 'M' ? 'son' : 'daughter';
                family.children.push(generateFamilyMember(rel, patientAge, patientGender, relevantConditions, firstDegreeBoost));
            }
        }
        
        // Generate aunts/uncles (1-3 per side)
        const numMaternalAU = 1 + Math.floor(Math.random() * 3);
        for (let i = 0; i < numMaternalAU; i++) {
            const gender = Math.random() > 0.5 ? 'M' : 'F';
            const rel = gender === 'M' ? 'maternal uncle' : 'maternal aunt';
            family.maternalAuntsUncles.push(generateFamilyMember(rel, patientAge, patientGender, relevantConditions, secondDegreeBoost));
        }
        
        const numPaternalAU = 1 + Math.floor(Math.random() * 3);
        for (let i = 0; i < numPaternalAU; i++) {
            const gender = Math.random() > 0.5 ? 'M' : 'F';
            const rel = gender === 'M' ? 'paternal uncle' : 'paternal aunt';
            family.paternalAuntsUncles.push(generateFamilyMember(rel, patientAge, patientGender, relevantConditions, secondDegreeBoost));
        }
        
        // Generate cousins (0-4 per side)
        const numMaternalCousins = Math.floor(Math.random() * 5);
        for (let i = 0; i < numMaternalCousins; i++) {
            family.maternalCousins.push(generateFamilyMember('maternal cousin', patientAge, patientGender, relevantConditions, secondDegreeBoost));
        }
        
        const numPaternalCousins = Math.floor(Math.random() * 5);
        for (let i = 0; i < numPaternalCousins; i++) {
            family.paternalCousins.push(generateFamilyMember('paternal cousin', patientAge, patientGender, relevantConditions, secondDegreeBoost));
        }
        
        familyHistoryState.generatedFamily = family;
        return family;
    }

    // ========================================================================
    // GATED RESPONSES
    // ========================================================================

    /**
     * Detect if question is general family history
     */
    function isGeneralFamilyHistoryQuestion(question) {
        const q = question.toLowerCase();
        const generalPatterns = [
            "family history",
            "family medical",
            "run in your family",
            "runs in the family",
            "anyone in your family",
            "family members",
            "hereditary",
            "genetic"
        ];
        return generalPatterns.some(p => q.includes(p));
    }

    /**
     * Detect if asking about specific condition in family
     */
    function detectFamilyConditionQuestion(question) {
        const q = question.toLowerCase();
        
        // Check for "does anyone in your family have X" pattern
        const hasPattern = q.includes("anyone") || q.includes("family") || 
                          q.includes("mother") || q.includes("father") ||
                          q.includes("parent") || q.includes("sibling") ||
                          q.includes("grandparent") || q.includes("relative");
        
        if (!hasPattern) return null;
        
        // Find which condition is being asked about
        for (const [conditionName, data] of Object.entries(conditionData)) {
            const allTerms = [conditionName.replace(/_/g, ' '), ...(data.aliases || [])];
            if (allTerms.some(term => q.includes(term.toLowerCase()))) {
                return conditionName;
            }
        }
        
        return null;
    }

    /**
     * Get vague general family history response
     */
    function getVagueGeneralResponse() {
        const responses = [
            "Well, there's some health issues in my family. Is there something specific you want to know about?",
            "My family has had its share of health problems. What specifically are you concerned about?",
            "There are a few things. What particular condition are you asking about?",
            "Yes, like most families, we have some health history. Anything in particular?"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    /**
     * Get specific family history response for a condition
     */
    function getSpecificConditionResponse(condition, family) {
        if (!family) return "I'm not sure about that.";
        
        familyHistoryState.specificConditionsAsked.push(condition);
        
        // Find family members with this condition
        const membersWithCondition = [];
        
        const checkMember = (member, relationship) => {
            if (!member) return;
            const hasCondition = member.conditions?.some(c => c.condition === condition);
            if (hasCondition) {
                const conditionInfo = member.conditions.find(c => c.condition === condition);
                membersWithCondition.push({
                    relationship,
                    member,
                    ageAtDiagnosis: conditionInfo.ageAtDiagnosis
                });
            }
        };
        
        // Check all family members
        checkMember(family.mother, 'mother');
        checkMember(family.father, 'father');
        checkMember(family.maternalGrandmother, 'maternal grandmother');
        checkMember(family.maternalGrandfather, 'maternal grandfather');
        checkMember(family.paternalGrandmother, 'paternal grandmother');
        checkMember(family.paternalGrandfather, 'paternal grandfather');
        
        family.siblings?.forEach((s, i) => checkMember(s, s.gender === 'M' ? 'brother' : 'sister'));
        family.children?.forEach((c, i) => checkMember(c, c.gender === 'M' ? 'son' : 'daughter'));
        family.maternalAuntsUncles?.forEach((a, i) => checkMember(a, a.gender === 'M' ? 'maternal uncle' : 'maternal aunt'));
        family.paternalAuntsUncles?.forEach((a, i) => checkMember(a, a.gender === 'M' ? 'paternal uncle' : 'paternal aunt'));
        family.maternalCousins?.forEach((c, i) => checkMember(c, 'maternal cousin'));
        family.paternalCousins?.forEach((c, i) => checkMember(c, 'paternal cousin'));
        
        if (membersWithCondition.length === 0) {
            return `No, not that I know of. No one in my family has had ${condition.replace(/_/g, ' ')}.`;
        }
        
        // Build response
        const conditionDisplay = condition.replace(/_/g, ' ');
        
        if (membersWithCondition.length === 1) {
            const m = membersWithCondition[0];
            let response = `Yes, my ${m.relationship} had ${conditionDisplay}. `;
            response += `${m.member.gender === 'F' ? 'She' : 'He'} was diagnosed at age ${m.ageAtDiagnosis}. `;
            
            if (!m.member.alive && m.member.deathInfo) {
                if (m.member.deathInfo.diedFromCondition && m.member.deathInfo.cause === condition) {
                    response += `${m.member.gender === 'F' ? 'She' : 'He'} passed away from it at ${m.member.deathInfo.ageAtDeath}.`;
                } else {
                    response += `${m.member.gender === 'F' ? 'She' : 'He'} passed away at ${m.member.deathInfo.ageAtDeath} from ${m.member.deathInfo.cause}.`;
                }
            } else if (m.member.alive) {
                response += `${m.member.gender === 'F' ? 'She\'s' : 'He\'s'} ${m.member.currentAge} now and still managing it.`;
            }
            
            return response;
        }
        
        // Multiple family members
        let response = `Yes, ${conditionDisplay} runs in my family. `;
        const descriptions = membersWithCondition.slice(0, 3).map(m => {
            return `my ${m.relationship} (diagnosed at ${m.ageAtDiagnosis})`;
        });
        response += descriptions.join(', ') + ' had it.';
        
        if (membersWithCondition.length > 3) {
            response += ` There might be others too.`;
        }
        
        return response;
    }

    /**
     * Process a family history question
     */
    function processFamilyHistoryQuestion(question, family) {
        // Check if general question
        if (isGeneralFamilyHistoryQuestion(question) && !detectFamilyConditionQuestion(question)) {
            familyHistoryState.askedGeneral = true;
            return {
                response: getVagueGeneralResponse(),
                isVague: true,
                promptSpecific: true
            };
        }
        
        // Check if specific condition question
        const condition = detectFamilyConditionQuestion(question);
        if (condition) {
            return {
                response: getSpecificConditionResponse(condition, family),
                condition,
                isVague: false
            };
        }
        
        return null;
    }

    /**
     * Get relevant conditions that haven't been asked about
     */
    function getMissingRelevantConditions(diagnosis) {
        const relevant = diagnosisRelevantFamilyHistory[diagnosis] || [];
        return relevant.filter(c => !familyHistoryState.specificConditionsAsked.includes(c));
    }

    // ========================================================================
    // PUBLIC API
    // ========================================================================
    
    return {
        resetState,
        generateFamilyHistory,
        isGeneralFamilyHistoryQuestion,
        detectFamilyConditionQuestion,
        processFamilyHistoryQuestion,
        getSpecificConditionResponse,
        getMissingRelevantConditions,
        conditionData,
        diagnosisRelevantFamilyHistory,
        getState: () => ({ ...familyHistoryState })
    };
    
})();

// Export for Node.js if applicable
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FamilyHistorySystem;
}

console.log("✓ ReasonDx Family History System: Initialized");
