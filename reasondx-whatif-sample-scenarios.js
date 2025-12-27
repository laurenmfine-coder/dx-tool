// ============================================================
// REASONDX: SAMPLE WHAT IF SCENARIOS - UTI/DYSURIA CASE
// Version: 1.0.0
// Date: December 27, 2025
//
// This file demonstrates how to add What If scenarios to cases.
// These scenarios help students understand how clinical reasoning
// changes when patient presentation variables are modified.
//
// INTEGRATION: Add this script tag to index.html after the
// What If Pathways module:
// <script src="reasondx-whatif-uti-scenarios.js"></script>
// ============================================================

(function() {
    'use strict';

    // Wait for cases to be available
    function initScenarios() {
        if (typeof window.cases === 'undefined' && typeof cases === 'undefined') {
            setTimeout(initScenarios, 200);
            return;
        }

        const casesArray = window.cases || cases;
        
        // Find UTI-related cases and add What If scenarios
        casesArray.forEach(caseItem => {
            // Look for UTI/dysuria cases
            if (caseItem.id === 'uti-dysuria' || 
                caseItem.title?.toLowerCase().includes('dysuria') ||
                caseItem.title?.toLowerCase().includes('urinary')) {
                
                addUtiWhatIfScenarios(caseItem);
            }
            
            // Look for chest pain cases
            if (caseItem.id === 'chest-pain' ||
                caseItem.title?.toLowerCase().includes('chest pain')) {
                
                addChestPainWhatIfScenarios(caseItem);
            }
            
            // Look for pneumonia cases
            if (caseItem.id === 'cap-pneumonia' ||
                caseItem.title?.toLowerCase().includes('pneumonia') ||
                caseItem.title?.toLowerCase().includes('cough and fever')) {
                
                addPneumoniaWhatIfScenarios(caseItem);
            }
        });

        console.log('✅ What If scenarios added to applicable cases');
    }

    // ============================================================
    // UTI/DYSURIA WHAT IF SCENARIOS
    // ============================================================

    function addUtiWhatIfScenarios(caseItem) {
        // Add whatIfScenarios to each variant
        Object.keys(caseItem.variants || {}).forEach(variantKey => {
            const variant = caseItem.variants[variantKey];
            
            if (!variant.whatIfScenarios) {
                variant.whatIfScenarios = [];
            }

            // Scenario 1: What if she had fever and flank pain?
            variant.whatIfScenarios.push({
                id: 'whatif_fever_flank',
                title: 'What if she had fever and flank pain?',
                description: 'Explore how systemic symptoms change your differential and management',
                icon: '🌡️',
                estimatedMinutes: 10,
                required: false,
                depth: 'full',
                
                modifications: {
                    setting: {
                        original: 'urgent_care',
                        modified: 'emergency_department'
                    },
                    chiefComplaint: {
                        original: variant.chiefComplaint,
                        modified: variant.chiefComplaint + ' My back is killing me on the right side and I\'ve been having chills.',
                        additions: ['back pain', 'chills', 'flank pain']
                    },
                    vitals: {
                        Temp: { original: variant.vitalSigns?.Temp || '98.8°F', modified: '101.8°F' },
                        HR: { original: variant.vitalSigns?.HR || 76, modified: 102 }
                    }
                },
                
                expectedReasoning: {
                    topDiagnosis: 'pyelonephritis',
                    mustNotMiss: ['sepsis', 'renal_abscess', 'pyelonephritis'],
                    keyDiscriminators: ['fever', 'flank_pain', 'tachycardia', 'chills'],
                    shouldRise: ['Pyelonephritis', 'Sepsis', 'Renal Abscess'],
                    shouldDrop: ['Uncomplicated Cystitis', 'Vulvovaginitis']
                },
                
                feedback: {
                    correct: 'Excellent! You correctly recognized that fever, flank pain, and tachycardia transform this from a simple UTI to pyelonephritis. This requires different antibiotics, possible admission, and blood cultures.',
                    partial: 'Good recognition of the severity change, but remember: the triad of fever + flank pain + urinary symptoms = upper UTI until proven otherwise.',
                    incorrect: 'The addition of fever (101.8°F), flank pain, and tachycardia are red flags that this is no longer uncomplicated cystitis. Pyelonephritis should now be your leading diagnosis.'
                },
                
                comparisonNotes: 'In the main case without fever or flank pain, uncomplicated cystitis can be treated with oral antibiotics as outpatient. With these findings, consider pyelonephritis requiring broader antibiotics, blood cultures, and possible admission.'
            });

            // Scenario 2: What if she was pregnant?
            variant.whatIfScenarios.push({
                id: 'whatif_pregnant',
                title: 'What if she was 26 weeks pregnant?',
                description: 'UTI in pregnancy requires different management - explore the changes',
                icon: '🤰',
                estimatedMinutes: 10,
                required: false,
                depth: 'full',
                
                modifications: {
                    setting: {
                        original: 'urgent_care',
                        modified: 'ob_clinic'
                    },
                    chiefComplaint: {
                        original: variant.chiefComplaint,
                        modified: variant.chiefComplaint,
                        additions: []
                    },
                    demographics: {
                        additions: ['G2P1 at 26 weeks gestation']
                    }
                },
                
                expectedReasoning: {
                    topDiagnosis: 'complicated_cystitis',
                    mustNotMiss: ['pyelonephritis', 'preterm_labor', 'chorioamnionitis'],
                    keyDiscriminators: ['pregnancy', 'gestational_age'],
                    shouldRise: ['Complicated Cystitis', 'Pyelonephritis'],
                    shouldDrop: ['Uncomplicated Cystitis']
                },
                
                feedback: {
                    correct: 'Excellent! You recognized that UTI in pregnancy is never "uncomplicated." Pregnancy increases pyelonephritis risk 20-30x and untreated UTI can trigger preterm labor.',
                    partial: 'Good start - remember that ANY UTI in pregnancy requires treatment and close follow-up due to risk of ascending infection and pregnancy complications.',
                    incorrect: 'UTI in pregnancy is always considered complicated. The physiologic changes of pregnancy (ureteral dilation, glycosuria) increase infection risk, and untreated UTI can cause serious complications including preterm labor.'
                },
                
                comparisonNotes: 'Non-pregnant patients with similar symptoms can be treated with short-course oral antibiotics. In pregnancy: longer antibiotic course, test of cure required, and closer follow-up. Avoid fluoroquinolones and tetracyclines.'
            });

            // Scenario 3: What if she had vaginal discharge and a new partner?
            variant.whatIfScenarios.push({
                id: 'whatif_discharge_partner',
                title: 'What if she had vaginal discharge and a new sexual partner?',
                description: 'Consider how STI risk factors change your differential',
                icon: '🔬',
                estimatedMinutes: 10,
                required: false,
                depth: 'full',
                
                modifications: {
                    chiefComplaint: {
                        original: variant.chiefComplaint,
                        modified: variant.chiefComplaint + ' I\'ve also noticed some discharge down there.',
                        additions: ['vaginal discharge', 'new partner']
                    },
                    socialHistory: {
                        additions: ['new sexual partner 3 weeks ago', 'inconsistent condom use']
                    }
                },
                
                expectedReasoning: {
                    topDiagnosis: 'chlamydia',
                    mustNotMiss: ['gonorrhea', 'chlamydia', 'pid'],
                    keyDiscriminators: ['vaginal_discharge', 'new_partner', 'dysuria'],
                    shouldRise: ['Chlamydia', 'Gonorrhea', 'Trichomoniasis', 'PID'],
                    shouldDrop: ['Uncomplicated Cystitis']
                },
                
                feedback: {
                    correct: 'Excellent! New sexual partner + discharge + dysuria should trigger STI testing. Chlamydia and gonorrhea can cause urethritis that mimics UTI. Always test for both.',
                    partial: 'Good recognition of STI risk - remember to test for BOTH gonorrhea AND chlamydia (they co-occur in 20-40% of cases), and consider trichomoniasis.',
                    incorrect: 'Vaginal discharge and new sexual partner are red flags for STI. While she may also have a UTI, you must rule out gonorrhea, chlamydia, and trichomoniasis. These require different treatment.'
                },
                
                comparisonNotes: 'The main case without discharge or STI risk factors can be managed as presumptive UTI. With these findings, obtain UA plus GC/CT NAAT testing. Treatment may need to cover both UTI and STI pending results.'
            });
        });
    }

    // ============================================================
    // CHEST PAIN WHAT IF SCENARIOS
    // ============================================================

    function addChestPainWhatIfScenarios(caseItem) {
        Object.keys(caseItem.variants || {}).forEach(variantKey => {
            const variant = caseItem.variants[variantKey];
            
            if (!variant.whatIfScenarios) {
                variant.whatIfScenarios = [];
            }

            // Scenario 1: What if the EKG showed ST elevations?
            variant.whatIfScenarios.push({
                id: 'whatif_stemi',
                title: 'What if the EKG showed ST elevations in V2-V4?',
                description: 'Anterior ST elevations change everything - explore the STEMI pathway',
                icon: '💓',
                estimatedMinutes: 8,
                required: false,
                depth: 'diagnostic',
                
                modifications: {
                    setting: {
                        original: variant.setting || 'emergency_department',
                        modified: 'emergency_department'
                    },
                    diagnostics: {
                        ekg: {
                            original: 'Normal sinus rhythm',
                            modified: 'Sinus tachycardia with 3mm ST elevations in V2-V4, reciprocal depressions in II, III, aVF'
                        }
                    }
                },
                
                expectedReasoning: {
                    topDiagnosis: 'stemi',
                    mustNotMiss: ['stemi', 'aortic_dissection'],
                    keyDiscriminators: ['st_elevation', 'reciprocal_changes', 'contiguous_leads'],
                    shouldRise: ['STEMI', 'Anterior MI'],
                    shouldDrop: ['Stable Angina', 'GERD', 'Costochondritis']
                },
                
                feedback: {
                    correct: 'Excellent! ST elevations in contiguous leads with reciprocal changes = STEMI until proven otherwise. This is a time-critical emergency requiring immediate cath lab activation.',
                    partial: 'You identified ACS but be more specific - this pattern is diagnostic of STEMI. Door-to-balloon time matters. Activate the cath lab.',
                    incorrect: 'This EKG shows a classic anterior STEMI pattern. ST elevations in V2-V4 with reciprocal inferior depressions indicate LAD occlusion. This patient needs emergent PCI.'
                },
                
                comparisonNotes: 'With a normal EKG, chest pain workup can proceed more methodically. STEMI changes the algorithm completely - this is a cardiac emergency requiring immediate intervention.'
            });

            // Scenario 2: What if the pain was sudden, tearing, and radiated to the back?
            variant.whatIfScenarios.push({
                id: 'whatif_dissection',
                title: 'What if the pain was sudden, tearing, and radiated to the back?',
                description: 'Classic dissection features - how does this change your approach?',
                icon: '⚡',
                estimatedMinutes: 10,
                required: false,
                depth: 'full',
                
                modifications: {
                    chiefComplaint: {
                        modified: 'I felt a sudden tearing pain in my chest that goes straight through to my back. It started all at once and has been constant.',
                        additions: ['sudden onset', 'tearing quality', 'radiates to back', 'maximal at onset']
                    },
                    vitals: {
                        BP: { modified: '178/95 (right arm), 142/88 (left arm)' }
                    }
                },
                
                expectedReasoning: {
                    topDiagnosis: 'aortic_dissection',
                    mustNotMiss: ['aortic_dissection', 'stemi'],
                    keyDiscriminators: ['sudden_onset', 'tearing_quality', 'maximal_at_onset', 'bp_differential'],
                    shouldRise: ['Aortic Dissection'],
                    shouldDrop: ['GERD', 'Costochondritis', 'Stable Angina']
                },
                
                feedback: {
                    correct: 'Excellent! Sudden onset, tearing quality, radiation to back, and BP differential between arms are classic for aortic dissection. This needs emergent CT angiography.',
                    partial: 'Good recognition of concerning features. Remember: "worst at onset" + tearing + back radiation = dissection until proven otherwise. BP in both arms is essential.',
                    incorrect: 'These features (sudden maximal onset, tearing quality, back radiation, BP differential) form the classic dissection presentation. Do not give anticoagulation until dissection is ruled out.'
                },
                
                comparisonNotes: 'Typical ACS has crescendo pain building over minutes. Dissection is classically sudden and maximal at onset. This distinction affects immediate management - dissection patients should NOT receive anticoagulation.'
            });
        });
    }

    // ============================================================
    // PNEUMONIA WHAT IF SCENARIOS
    // ============================================================

    function addPneumoniaWhatIfScenarios(caseItem) {
        Object.keys(caseItem.variants || {}).forEach(variantKey => {
            const variant = caseItem.variants[variantKey];
            
            if (!variant.whatIfScenarios) {
                variant.whatIfScenarios = [];
            }

            // Scenario 1: What if they were immunocompromised?
            variant.whatIfScenarios.push({
                id: 'whatif_immunocompromised',
                title: 'What if the patient was on chemotherapy?',
                description: 'Immunocompromise changes your pathogen considerations dramatically',
                icon: '💉',
                estimatedMinutes: 10,
                required: false,
                depth: 'full',
                
                modifications: {
                    pmh: {
                        additions: ['Non-Hodgkin lymphoma on R-CHOP chemotherapy', 'Last cycle 10 days ago']
                    }
                },
                
                expectedReasoning: {
                    topDiagnosis: 'opportunistic_pneumonia',
                    mustNotMiss: ['pcp_pneumonia', 'fungal_pneumonia', 'neutropenic_fever'],
                    keyDiscriminators: ['immunocompromise', 'chemotherapy', 'timing_post_chemo'],
                    shouldRise: ['PCP Pneumonia', 'Aspergillus', 'Neutropenic Fever'],
                    shouldDrop: ['Typical CAP']
                },
                
                feedback: {
                    correct: 'Excellent! Post-chemotherapy pneumonia requires consideration of opportunistic pathogens (PCP, fungi, CMV) and may represent neutropenic fever - a medical emergency.',
                    partial: 'Good recognition of increased risk. Check the ANC - if <500, this is neutropenic fever requiring broad-spectrum coverage and possible antifungals.',
                    incorrect: 'Chemotherapy causes immunosuppression, particularly neutropenia 7-14 days post-cycle. Standard CAP treatment is insufficient. Consider opportunistic pathogens and check ANC immediately.'
                },
                
                comparisonNotes: 'Immunocompetent patients with CAP get standard antibiotic coverage. Immunocompromised patients need broader coverage, consideration of opportunistic infections, and often infectious disease consultation.'
            });

            // Scenario 2: What if this was Hospital Day 5?
            variant.whatIfScenarios.push({
                id: 'whatif_nosocomial',
                title: 'What if this patient developed symptoms on Hospital Day 5?',
                description: 'Hospital-acquired pneumonia has different pathogens and treatment',
                icon: '🏥',
                estimatedMinutes: 8,
                required: false,
                depth: 'diagnostic',
                
                modifications: {
                    setting: {
                        original: 'emergency_department',
                        modified: 'hospital_inpatient'
                    },
                    context: {
                        additions: ['Admitted 5 days ago for CHF exacerbation', 'New fever and infiltrate on routine CXR']
                    }
                },
                
                expectedReasoning: {
                    topDiagnosis: 'hap',
                    mustNotMiss: ['hap', 'vap', 'aspiration_pneumonia'],
                    keyDiscriminators: ['hospital_onset', 'timing_>48h'],
                    shouldRise: ['Hospital-Acquired Pneumonia', 'MDR Pathogens'],
                    shouldDrop: ['Community-Acquired Pneumonia']
                },
                
                feedback: {
                    correct: 'Excellent! Pneumonia developing >48 hours after admission is HAP, not CAP. This requires broader coverage for MDR organisms including MRSA and Pseudomonas.',
                    partial: 'Good recognition of nosocomial infection. Remember: HAP pathogens are different - need anti-pseudomonal coverage and often MRSA coverage.',
                    incorrect: 'Pneumonia onset >48h after admission = Hospital-Acquired Pneumonia (HAP). CAP antibiotics are insufficient. Need coverage for Pseudomonas, MRSA, and other MDR organisms.'
                },
                
                comparisonNotes: 'CAP is treated with respiratory fluoroquinolone or beta-lactam + macrolide. HAP requires broader coverage: anti-pseudomonal beta-lactam + vancomycin (for MRSA). Culture data guides de-escalation.'
            });
        });
    }

    // ============================================================
    // INITIALIZATION
    // ============================================================

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScenarios);
    } else {
        // Small delay to ensure cases are loaded
        setTimeout(initScenarios, 500);
    }

    console.log('✅ What If Scenarios module loaded - will attach to cases when ready');

})();
