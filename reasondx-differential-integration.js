// ============================================================
// REASONDX DIFFERENTIAL SCORING INTEGRATION
// ============================================================
// Bridges the new 784-diagnosis searchable system with existing
// case-based scoring that uses allDiagnoses arrays
// ============================================================

(function() {
    'use strict';

    /**
     * Fuzzy match a student's diagnosis selection against case diagnoses
     * Returns the matched case diagnosis or null
     */
    window.matchDiagnosisToCase = function(studentDxName, caseDiagnoses) {
        if (!studentDxName || !caseDiagnoses || caseDiagnoses.length === 0) {
            return null;
        }
        
        const normalizedStudent = studentDxName.toLowerCase().trim();
        
        // Try exact match first
        let match = caseDiagnoses.find(d => d.name.toLowerCase() === normalizedStudent);
        if (match) return match;
        
        // Try partial match (case diagnosis contains student input or vice versa)
        match = caseDiagnoses.find(d => {
            const caseName = d.name.toLowerCase();
            return caseName.includes(normalizedStudent) || normalizedStudent.includes(caseName);
        });
        if (match) return match;
        
        // Try matching key terms
        const studentTerms = normalizedStudent.split(/[\s\-\/\(\)]+/).filter(t => t.length > 2);
        match = caseDiagnoses.find(d => {
            const caseName = d.name.toLowerCase();
            // If majority of student terms are in case name
            const matchCount = studentTerms.filter(term => caseName.includes(term)).length;
            return matchCount >= Math.ceil(studentTerms.length * 0.6);
        });
        if (match) return match;
        
        // Try matching abbreviations and common synonyms
        const synonymMatches = {
            'pud': ['peptic ulcer', 'ulcer disease'],
            'gerd': ['gastroesophageal reflux', 'reflux disease', 'acid reflux'],
            'mi': ['myocardial infarction', 'stemi', 'nstemi', 'heart attack'],
            'acs': ['acute coronary syndrome', 'unstable angina'],
            'pe': ['pulmonary embolism', 'embolism'],
            'dvt': ['deep vein thrombosis', 'venous thrombosis'],
            'copd': ['chronic obstructive', 'pulmonary disease'],
            'chf': ['heart failure', 'congestive heart'],
            'uti': ['urinary tract infection', 'cystitis'],
            'cva': ['stroke', 'cerebrovascular'],
            'tia': ['transient ischemic'],
            'gi bleed': ['gastrointestinal bleeding', 'upper gi', 'lower gi'],
            'pancreatitis': ['acute pancreatitis', 'chronic pancreatitis'],
            'cholecystitis': ['gallbladder', 'cholecystitis'],
            'appendicitis': ['appendicitis', 'appy'],
            'pneumonia': ['pneumonia', 'pna'],
            'sepsis': ['sepsis', 'septic'],
        };
        
        for (const [abbrev, expansions] of Object.entries(synonymMatches)) {
            if (normalizedStudent.includes(abbrev) || expansions.some(e => normalizedStudent.includes(e))) {
                match = caseDiagnoses.find(d => {
                    const caseName = d.name.toLowerCase();
                    return caseName.includes(abbrev) || expansions.some(e => caseName.includes(e));
                });
                if (match) return match;
            }
        }
        
        return null;
    };

    /**
     * Enhanced scoring that integrates the new differential system
     * with existing case-based allDiagnoses scoring
     */
    window.scoreStudentDifferentialEnhanced = function(studentDifferential, variant) {
        if (!variant || !variant.allDiagnoses) {
            console.warn('No variant or allDiagnoses for scoring');
            return null;
        }
        
        const caseDiagnoses = variant.allDiagnoses;
        const results = {
            correctDiagnosis: null,
            correctInDifferential: false,
            correctRank: -1,
            likelyMatches: [],
            mustNotMissMatches: [],
            lessLikelyMatches: [],
            unmatched: [],
            missedMustNotMiss: [],
            score: 0,
            feedback: []
        };
        
        // Find the "correct" diagnosis (first likely)
        const correctCaseDx = caseDiagnoses.find(d => 
            d.correctCategory === 'most-likely' || d.correctCategory === 'likely'
        );
        if (correctCaseDx) {
            results.correctDiagnosis = correctCaseDx.name;
        }
        
        // Get expected categories
        const expectedLikely = caseDiagnoses
            .filter(d => d.correctCategory === 'likely' || d.correctCategory === 'most-likely')
            .map(d => d.name);
        const expectedMustNotMiss = caseDiagnoses
            .filter(d => d.correctCategory === 'must-not-miss')
            .map(d => d.name);
        const expectedLessLikely = caseDiagnoses
            .filter(d => d.correctCategory === 'less-likely')
            .map(d => d.name);
        
        // Score each student diagnosis
        studentDifferential.forEach((studentDx, rank) => {
            const match = window.matchDiagnosisToCase(studentDx.name, caseDiagnoses);
            
            if (match) {
                const category = match.correctCategory;
                
                // Track if correct diagnosis is in differential
                if (match.name === results.correctDiagnosis) {
                    results.correctInDifferential = true;
                    results.correctRank = rank;
                }
                
                // Categorize the match
                if (category === 'likely' || category === 'most-likely') {
                    results.likelyMatches.push({ 
                        studentName: studentDx.name, 
                        matchedName: match.name, 
                        rank,
                        tagged: studentDx.likely 
                    });
                    results.score += (rank < 3) ? 20 : 15;
                } else if (category === 'must-not-miss') {
                    results.mustNotMissMatches.push({ 
                        studentName: studentDx.name, 
                        matchedName: match.name, 
                        rank,
                        tagged: studentDx.cannotMiss 
                    });
                    results.score += studentDx.cannotMiss ? 15 : 10;
                } else if (category === 'less-likely') {
                    results.lessLikelyMatches.push({ 
                        studentName: studentDx.name, 
                        matchedName: match.name, 
                        rank 
                    });
                    results.score += 5;
                }
                
                results.feedback.push({
                    diagnosis: studentDx.name,
                    matchedTo: match.name,
                    category: category,
                    rank: rank + 1,
                    rationale: match.rationale
                });
            } else {
                // No match in case diagnoses - use master library scoring
                results.unmatched.push({ 
                    studentName: studentDx.name, 
                    rank 
                });
                
                // Give partial credit if it's a valid diagnosis from master library
                if (window.ReasonDxDifferentialSystem) {
                    const masterMatch = window.ReasonDxDifferentialSystem.findMatchingDiagnosis(studentDx.name);
                    if (masterMatch) {
                        // Valid diagnosis, just not case-specific
                        results.score += 3;
                        results.feedback.push({
                            diagnosis: studentDx.name,
                            matchedTo: null,
                            category: 'valid-but-not-case-specific',
                            rank: rank + 1,
                            rationale: 'Valid diagnosis but not specifically relevant to this presentation'
                        });
                    } else {
                        // Custom entry
                        results.score += 1;
                        results.feedback.push({
                            diagnosis: studentDx.name,
                            matchedTo: null,
                            category: 'custom',
                            rank: rank + 1,
                            rationale: 'Custom entry - reviewed for reasonableness'
                        });
                    }
                }
            }
        });
        
        // Check for missed must-not-miss diagnoses
        expectedMustNotMiss.forEach(mnmName => {
            const wasIncluded = studentDifferential.some(sd => {
                const match = window.matchDiagnosisToCase(sd.name, caseDiagnoses);
                return match && match.name === mnmName;
            });
            
            if (!wasIncluded) {
                results.missedMustNotMiss.push(mnmName);
                results.score -= 10;
            }
        });
        
        // Bonus for correct in top 3
        if (results.correctInDifferential && results.correctRank < 3) {
            results.score += 15;
        }
        
        return results;
    };

    /**
     * Override the diagnosis matching in feedback to use fuzzy matching
     * This patches into the existing renderRankedDifferentialFeedback function
     */
    window.findMatchingCaseDiagnosis = function(studentDxName, allDiagnoses) {
        return window.matchDiagnosisToCase(studentDxName, allDiagnoses);
    };

    console.log('ReasonDx Differential Scoring Integration loaded');

})();
