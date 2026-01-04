/**
 * ============================================================================
 * REASONDX RESPIRATORY / COUGH CLINICAL TEMPLATES
 * ============================================================================
 * Version: 1.0 | December 2024
 * 
 * BASED ON UpToDate Evidence:
 * - Evaluation and treatment of subacute and chronic cough in adults
 * - Acute bronchitis in adults
 * - Treatment of community-acquired pneumonia in adults (outpatient)
 * 
 * Chief Complaints Covered:
 * - Cough (acute, subacute, chronic)
 * - Bronchitis
 * - Suspected Pneumonia
 * - Upper Respiratory Infection
 * ============================================================================
 */

const RespiratoryTemplates = {
    chiefComplaint: "Cough / Respiratory Symptoms",
    version: "1.0",
    lastUpdated: "December 2024",
    
    // ========================================================================
    // COUGH CLASSIFICATION (UpToDate)
    // ========================================================================
    coughClassification: {
        acute: {
            duration: "<3 weeks",
            commonCauses: ["Viral URI (most common)", "Acute bronchitis", "Pneumonia", "COVID-19", "Influenza", "Pertussis", "Asthma exacerbation"],
            approach: "Focus on excluding serious causes (pneumonia, PE, HF)"
        },
        subacute: {
            duration: "3-8 weeks",
            commonCauses: ["Postinfectious cough (most common)", "Exacerbation of underlying disease (asthma, COPD)", "Pertussis", "Developing chronic cough etiology"],
            approach: "Often postinfectious; consider pertussis if paroxysmal cough"
        },
        chronic: {
            duration: ">8 weeks",
            commonCauses: ["Asthma", "GERD", "Upper airway cough syndrome (UACS/postnasal drip)", "Non-asthmatic eosinophilic bronchitis (NAEB)", "Combinations of above"],
            approach: "Algorithmic evaluation for common causes; empiric therapy trials"
        }
    },

    // ========================================================================
    // ACUTE BRONCHITIS (UpToDate)
    // ========================================================================
    acuteBronchitis: {
        definition: "Lower respiratory tract infection involving large airways (bronchi), without pneumonia, in absence of COPD",
        
        epidemiology: {
            prevalence: "~10% of ambulatory care visits in US",
            seasonality: "Highest in late fall/winter (when respiratory viruses peak)"
        },
        
        microbiology: {
            viruses: {
                proportion: "~60% of cases with identified pathogen",
                common: [
                    "Influenza A and B",
                    "Parainfluenza",
                    "Common cold coronaviruses",
                    "Rhinoviruses",
                    "RSV",
                    "Human metapneumovirus",
                    "SARS-CoV-2"
                ]
            },
            bacteria: {
                proportion: "Only ~6% of hospitalized cases",
                pathogens: [
                    { name: "Bordetella pertussis", note: "Most likely to cause prolonged cough; 1-12% of prolonged cough" },
                    { name: "Mycoplasma pneumoniae", note: "0-6% varies by series" },
                    { name: "Chlamydia pneumoniae", note: "0-6% varies by series" }
                ],
                misconception: "NO evidence for 'acute bacterial bronchitis' from S. pneumoniae, S. aureus, H. influenzae, M. catarrhalis in patients without COPD or airway instrumentation"
            }
        },
        
        clinicalFeatures: {
            cardinal: "COUGH is the cardinal symptom",
            duration: {
                typical: "1-3 weeks",
                median: "18 days"
            },
            sputum: {
                character: "May be purulent OR non-purulent",
                important: "Purulent sputum does NOT predict bacterial infection or antibiotic response"
            },
            associatedSymptoms: [
                "Prior URI symptoms (headache, congestion, sore throat) - may resolve as bronchitis develops",
                "Wheezing and mild dyspnea",
                "Rhonchi (usually clear with coughing)",
                "Chest wall/substernal pain from prolonged coughing"
            ],
            pulmonaryFunction: {
                bronchospasm: "Reduced FEV1 in ~40%",
                hyperreactivity: "Bronchial hyperreactivity on testing, typically transient (resolves in 6 weeks)",
                mechanism: "Explains persistent cough"
            }
        },
        
        diagnosis: {
            clinical: "Based on history and physical exam in most cases",
            suspect: "Acute onset but PERSISTENT cough (1-3 weeks), without findings of pneumonia, without COPD",
            testing: "Generally NOT needed unless pneumonia suspected or pathogen ID would change management"
        },
        
        differentiatingFromPneumonia: {
            pneumoniaSuggested: [
                "Abnormal vital signs: HR >100, RR >22, Temp >38°C (100.4°F), O2 sat <95%",
                "Consolidation signs: rales, egophony, tactile fremitus",
                "Mental status changes in patients >75 years"
            ],
            obtainCXR: "If any pneumonia signs present",
            bronchitisExpected: "Normal vitals, no consolidation findings, clear lung exam except rhonchi"
        },
        
        microbiologicTesting: {
            notNeeded: "For most patients - results won't change management",
            sputumCulture: "Specifically NOT recommended - bacterial pathogens are rare",
            considerTesting: {
                covid19: "If candidate for treatment or for surveillance/infection control",
                influenza: "If high-risk patient who may benefit from treatment, or for surveillance",
                pertussis: {
                    indication: "Unexplained cough with compatible features (paroxysmal, inspiratory whoop, posttussive emesis) OR known exposure",
                    broaderIndication: "Some experts: all patients with unexplained cough ≥2 weeks"
                }
            }
        },
        
        procalcitonin: {
            role: "NOT routinely used",
            indication: "Diagnostic uncertainty and unclear need for antibiotics",
            requirement: "Only if results available in timely manner"
        },
        
        treatment: {
            cornerstone: "Patient education and supportive care - self-limited illness",
            antibiotics: "NOT recommended for routine use",
            
            patientEducation: {
                message: "Acute bronchitis typically resolves in 1-3 weeks without specific therapy",
                benefit: "Improves satisfaction, reduces inappropriate antibiotic requests"
            },
            
            coughRelief: {
                nonpharmacologic: {
                    options: ["Throat lozenges", "Hot tea", "Honey", "Smoking cessation"],
                    evidence: "Not directly studied but expected harms are small"
                },
                pharmacologic: {
                    preferred: ["Dextromethorphan", "Guaifenesin"],
                    note: "Benefits uncertain but may help; consider patient comorbidities and interactions",
                    avoid: "Opioid cough suppressants (codeine) - addictive potential and side effects"
                },
                inhaledBetaAgonist: {
                    indication: "Reserve for patients with wheezing AND underlying pulmonary disease",
                    evidence: "One small trial showed benefit, but meta-analysis with other trials did not confirm"
                },
                notRecommended: ["Ibuprofen (no efficacy)", "Oral corticosteroids (no efficacy)", "Herbal remedies (safety concerns)"]
            },
            
            concurrentColdSymptoms: {
                options: ["Analgesics (acetaminophen, NSAIDs)", "Antihistamine/decongestant combinations", "Intranasal ipratropium"],
                note: "See common cold treatment"
            }
        },
        
        antibioticsNotRecommended: {
            evidence: {
                summary: "Multiple trials and meta-analyses show no substantial benefit",
                keyTrial: "Randomized trial of >2000 patients: no difference with amoxicillin vs placebo",
                elderlySubgroup: "Also no benefit in >500 patients aged >60 years",
                adverseEffects: "NNH = 24 (nausea, vomiting, diarrhea, rash, headache, vaginitis, anaphylaxis)"
            },
            complications: {
                withoutAntibiotics: "<1% major complications",
                comparison: "No significant difference between immediate, delayed, or no antibiotics"
            },
            overuse: {
                problem: "50-90% of patients with acute bronchitis receive antibiotics inappropriately",
                priority: "Reducing antibiotic use is national and international health care priority"
            },
            strategies: [
                "Explicit discussion of risks vs benefits",
                "Patient handouts",
                "Offer non-antibiotic medications",
                "Shared decision-making",
                "Delayed prescriptions (fill only if symptoms persist)"
            ]
        },
        
        rareAntibioticIndications: {
            influenza: {
                indication: "Hospitalized or high-risk patients",
                agents: "Oseltamivir or zanamivir (consider local resistance patterns)",
                timing: "Most effective when given early; don't wait for test results"
            },
            pertussis: {
                indication: "Cough ≤3 weeks; pregnant women with cough <6 weeks; limit spread",
                agents: "Macrolides (azithromycin, clarithromycin)"
            },
            covid19: "See specific COVID-19 guidelines",
            notIndicated: {
                mycoplasma: "Treatment for acute bronchitis (without pneumonia) from M. pneumoniae generally NOT recommended",
                chlamydia: "Same as above"
            }
        },
        
        followUp: {
            expected: "Recovery within 1-3 weeks without complications",
            concerningFeatures: ["New fever", "Difficulty breathing", "Symptoms >3-4 weeks", "Bloody sputum"],
            prolongedCough: "If >3 weeks, evaluate for subacute/chronic cough causes"
        }
    },

    // ========================================================================
    // CHRONIC COUGH EVALUATION (UpToDate)
    // ========================================================================
    chronicCough: {
        definition: "Cough lasting >8 weeks",
        
        commonCauses: {
            mostFrequent: ["Asthma", "GERD", "Upper airway cough syndrome (UACS)", "Non-asthmatic eosinophilic bronchitis (NAEB)"],
            often: "Multiple causes coexist - cough resolves only when ALL causes treated"
        },
        
        initialEvaluation: {
            dangerSigns: {
                requiresUrgentWorkup: [
                    "Fever, night sweats, weight loss → chronic infection, malignancy, rheumatic disease",
                    "Purulent sputum → pulmonary/sinus infection",
                    "Hemoptysis → infection, cancer, rheumatic disease, HF, foreign body",
                    "Dyspnea → airway obstruction, parenchymal disease",
                    "Immunosuppression → TB, opportunistic infections"
                ]
            },
            
            initialSteps: {
                coughCharacteristics: "Duration, productive/nonproductive, associated symptoms, prior episodes",
                tobaccoUse: "Irritant contributing to cough; risk factor for chronic bronchitis and lung cancer",
                chestXray: "Most adults with cough >8 weeks should have CXR (exceptions: UACS or asthma seems likely)",
                spirometry: "Evaluate possible asthma or COPD",
                medicationReview: {
                    aceInhibitors: "If on ACE-I, trial discontinuation for ≥4 weeks before extensive workup",
                    other: "CCBs, bisphosphonates can worsen GERD"
                }
            }
        },
        
        algorithmicApproach: {
            principle: "Sequential empiric therapy has diagnostic AND therapeutic utility",
            method: "Follow one treatment avenue at a time rather than several simultaneously",
            partialResponse: "Add therapy for next most likely diagnosis",
            multipleCauses: "If suspected, may need simultaneous treatment of all causes"
        },
        
        asthma: {
            prevalence: "25-30% of adult nonsmokers with chronic cough",
            presentation: "May have associated dyspnea/wheeze, OR cough may be isolated (cough-variant asthma)",
            evaluation: {
                spirometry: "Pre- and post-bronchodilator",
                ifNormal: "Bronchoprovocation challenge (methacholine) if cough-variant asthma suspected",
                confirmation: "Requires response to asthma therapy"
            },
            treatment: {
                firstLine: "Inhaled glucocorticoid (low-medium dose)",
                ifNoResponse: "Increase ICS dose OR add LTRA",
                alternative: "LTRA if patient prefers to avoid GCs or non-responder to GCs",
                severeDisabling: "Short course oral prednisone (1-2 weeks) usually excellent results"
            }
        },
        
        naeb: {
            name: "Non-asthmatic Eosinophilic Bronchitis",
            prevalence: "10-30% of chronic cough referrals",
            suspect: "Atopy, eosinophilic airway inflammation, improves with ICS, BUT no airway obstruction or hyperresponsiveness",
            clues: "Occupational allergen exposure (isocyanates, flour)",
            treatment: {
                firstLine: "Low-medium dose inhaled GC",
                duration: "Continue ≥2 months after improvement to reduce relapse",
                ifInsufficient: "Add LTRA or increase ICS dose"
            }
        },
        
        uacs: {
            name: "Upper Airway Cough Syndrome (previously postnasal drip syndrome)",
            etiologies: ["Allergic rhinitis", "Non-allergic/vasomotor rhinitis", "Chronic rhinosinusitis", "Acute nasopharyngitis"],
            
            allergicRhinitis: {
                treatment: "Intranasal glucocorticoid (most effective)",
                alternative: "Add oral antihistamine for severe symptoms",
                effect: "Usually effective within days, maximal effect up to 2 weeks"
            },
            nonAllergicUACS: {
                treatment: "Trial of intranasal azelastine, GC, or ipratropium",
                note: "Azelastine may cause somnolence"
            },
            chronicRhinosinusitis: {
                cardinalSymptoms: "Mucopurulent drainage, nasal obstruction, facial pain/fullness, reduced smell",
                confirmation: "Sinus CT or nasal endoscopy"
            },
            noResponse: "Lack of improvement after 1-2 weeks suggests UACS is NOT the cause"
        },
        
        gerd: {
            treatment: {
                lifestyleModifications: [
                    "Weight loss if overweight",
                    "Elevate head of bed (6-8 inch blocks)",
                    "Smoking cessation",
                    "Avoid reflux-inducing foods (fatty, chocolate, alcohol, caffeine)",
                    "Avoid acidic beverages (carbonated, wine, orange juice)",
                    "Avoid meals 2-3 hours before lying down"
                ],
                acidSuppression: {
                    firstLine: "PPI (e.g., omeprazole 40mg daily)",
                    rationale: "More effective than H2 blockers",
                    duration: "May take up to 8 weeks or several months for optimal improvement"
                },
                noResponse: {
                    evaluation: "24-hour esophageal pH monitoring",
                    consider: "Nonacidic reflux (multichannel intraluminal impedance testing)"
                },
                surgery: {
                    indication: "Documented reflux refractory to medical therapy (rare)",
                    procedure: "Laparoscopic Nissen fundoplication"
                }
            }
        },
        
        postinfectiousCough: {
            etiology: "Postnasal drip or direct viral effect increasing bronchial reactivity",
            pertussis: {
                prevalence: "~20% of prolonged cough in adolescents/adults",
                features: "Paroxysmal cough, inspiratory whoop, posttussive vomiting",
                treatment: "Macrolides (mostly to reduce transmission at this point)"
            },
            treatment: {
                forUACS: "First-gen antihistamines (stronger anticholinergic) or intranasal agents",
                forHyperreactivity: "Albuterol or inhaled ipratropium"
            }
        },
        
        aceInhibitorCough: {
            prevalence: "Up to 15% of patients on ACE-I",
            onset: "Usually within 1 week of starting",
            character: "Tickling or scratchy sensation in throat, nonproductive",
            resolution: "Usually 1-4 days after stopping, occasionally up to 4 weeks",
            recurrence: "Restarting same or different ACE-I usually causes recurrence",
            alternative: "ARBs - not associated with cough even in those with prior ACE-I cough"
        }
    },

    // ========================================================================
    // UNEXPLAINED/REFRACTORY CHRONIC COUGH (UpToDate)
    // ========================================================================
    refractoryCough: {
        definition: "Cough persisting >8 weeks despite systematic evaluation and empiric therapies",
        terminology: ["Unexplained chronic cough", "Chronic idiopathic cough", "Neurogenic cough", "Cough hypersensitivity syndrome"],
        
        mechanism: "May be due to abnormally sensitive cough reflex (heightened sensory nerve receptor sensitivity)",
        
        nonpharmacologicTherapy: {
            options: ["Speech therapy", "Breathing exercises", "Cough suppression techniques", "Patient counseling"],
            evidence: "Limited quality studies but suggest improvement; reasonable trial in motivated patients"
        },
        
        pharmacologicTherapy: {
            dextromethorphan: {
                role: "First-line nonspecific antitussive",
                dose: "Extended release 60mg twice daily",
                mechanism: "Decreases cough receptor sensitivity, NMDA receptor antagonist"
            },
            benzonatate: {
                role: "Add to or after dextromethorphan",
                dose: "100-200mg three times daily",
                mechanism: "Anesthetizes stretch receptors in lungs/pleura",
                warning: "Fatal overdoses reported in children <10; signs within 15-20 min"
            },
            guaifenesin: {
                role: "May help by decreasing mucus viscosity",
                dose: "600-1200mg every 12 hours extended-release",
                evidence: "Formal study lacking"
            },
            gabapentin: {
                indication: "Refractory to nonspecific antitussives, especially if avoiding opioids",
                dose: "Start 300mg daily, increase to 1800mg/day in divided doses",
                sideEffects: "Somnolence, dizziness, nausea, fatigue",
                duration: "Reassess at 6 months",
                evidence: "RCT showed improved quality of life; NNT = 4"
            },
            pregabalin: {
                indication: "Alternative to gabapentin",
                dose: "Start low, increase to 300mg/day",
                evidence: "RCT with speech pathology showed benefit vs placebo + SPT"
            },
            opiates: {
                indication: "Refractory to other treatments; palliative care for advanced disease",
                preferredAgent: "Morphine (less variable response than codeine)",
                dose: "Extended-release 10-15mg once/twice daily, max 15mg twice daily",
                duration: "Limited course (4-6 weeks) to allow mucosal healing",
                warning: "Risk of dependence - longer use for palliation only"
            }
        },
        
        investigationalApproaches: {
            p2x3Antagonists: {
                gefapixant: "Meta-analysis showed 16% additional reduction in cough; approved in Japan, Switzerland, EU; rejected by FDA",
                sideEffect: "~30% taste disturbance (serious enough to cause discontinuation in 30%)",
                newerAgents: "Camlipixant, sivopixant - more selective, fewer taste effects"
            },
            superiorLaryngealNerveBlock: "Used by some otolaryngologists; low quality evidence"
        },
        
        withoutBenefit: {
            macrolideAntibiotics: "Studies with azithromycin and erythromycin showed no benefit"
        }
    },

    // ========================================================================
    // COMMUNITY-ACQUIRED PNEUMONIA - OUTPATIENT (UpToDate)
    // ========================================================================
    communityAcquiredPneumonia: {
        definition: "Acute infection of pulmonary parenchyma acquired in community (not hospital-acquired)",
        
        diagnosis: {
            requires: "Infiltrate on chest imaging + clinically compatible syndrome",
            syndrome: "Fever, dyspnea, cough, sputum production",
            imaging: "CXR improves diagnostic accuracy - considered required by ATS/IDSA"
        },
        
        siteOfCare: {
            determination: "Essential first step - informs testing and treatment",
            keyFactor: "Severity of illness",
            otherFactors: ["Ability to maintain oral intake", "Medication adherence likelihood", "Substance use history", "Mental illness/cognitive impairment", "Living situation (homelessness, distance from care)"]
        },
        
        microbiologicTesting: {
            outpatient: "NOT needed for most mild CAP",
            rationale: "Empiric therapy generally successful; pathogen ID doesn't usually improve outcomes",
            exceptions: [
                "High clinical suspicion for specific pathogen (epidemiologic features, outbreaks)",
                "Pathogen-directed therapy differs from empiric therapy",
                "Public health implications"
            ],
            pathogensToConsider: ["Legionella", "M. tuberculosis", "Influenza", "CA-MRSA", "Bioterrorism agents"]
        },
        
        timingOfTreatment: {
            outpatient: "Counsel patient to fill prescription without delay",
            key: "Starting antibiotics promptly improves outcomes"
        },
        
        empiricTherapy: {
            targets: {
                allPatients: ["S. pneumoniae", "H. influenzae", "Atypical pathogens (M. pneumoniae, L. pneumophila, C. pneumoniae)"],
                withComorbidities: "Also: beta-lactamase producing H. influenzae, M. catarrhalis, MSSA",
                structuralLungDisease: "Also: Enterobacteriaceae (E. coli, Klebsiella)"
            },
            
            backbone: {
                agent: "Beta-lactam (primarily targets S. pneumoniae)",
                preferred: "High-dose amoxicillin or amoxicillin-clavulanate",
                rationale: "Remain active against most S. pneumoniae despite rising resistance in other classes"
            },
            
            healthyUnder65NoRecentAbx: {
                preferred: "High-dose amoxicillin (1g TID) + macrolide (azithromycin, clarithromycin) OR doxycycline",
                macrolidePreferred: "Over doxycycline unless contraindicated",
                alternative: {
                    penicillinAllergyMild: "Third-gen cephalosporin (cefpodoxime) + macrolide or doxycycline",
                    severeAllergy: "Respiratory fluoroquinolone (levofloxacin, moxifloxacin) OR lefamulin"
                },
                atsIdsaDifference: "ATS/IDSA recommends amoxicillin monotherapy or macrolide/doxycycline monotherapy for this group; author prefers covering atypicals"
            },
            
            comorbiditiesOrOver65OrRecentAbx: {
                comorbidities: "Chronic pulmonary/liver/heart/renal disease, cancer, DM, CHF, alcohol dependence, immunosuppression, smokers",
                preferred: "Amoxicillin-clavulanate (875mg BID or extended-release 2g BID) + macrolide or doxycycline",
                macrolidePreferred: "Associated with improved outcomes in severe CAP (possible immunomodulatory effect)",
                alternative: {
                    penicillinAllergyMild: "Third-gen cephalosporin (cefpodoxime) + macrolide or doxycycline",
                    severeAllergy: "Respiratory fluoroquinolone (levofloxacin, moxifloxacin)"
                },
                newerOptions: {
                    lefamulin: {
                        indication: "Cannot tolerate beta-lactams, want to avoid FQ side effects, no structural lung disease",
                        limitations: "Limited clinical experience, cost/availability, doesn't cover Enterobacteriaceae",
                        contraindications: "Hepatic dysfunction, long QT, pregnancy/breastfeeding, CYP3A4 interactions"
                    },
                    omadacycline: {
                        indication: "Cannot tolerate other agents, covers Enterobacteriaceae"
                    }
                }
            },
            
            fluoroquinoloneCaveats: {
                concerns: [
                    "Adverse effect profile (tendon rupture, QT prolongation, CNS effects)",
                    "Promotes fluoroquinolone resistance",
                    "Increased C. diff risk",
                    "May delay TB diagnosis if used empirically in at-risk patients"
                ],
                recommendation: "Reserve for patients who cannot tolerate beta-lactam regimens"
            },
            
            macrolideCaveats: {
                qtProlongation: "Both macrolides and FQs can prolong QT → torsades",
                riskFactors: ["Advanced age", "Hypokalemia", "Hypomagnesemia", "Bradycardia", "Other QT-prolonging drugs"],
                ifHighRisk: "Use doxycycline instead (no QT effect)"
            }
        },
        
        pathogenDirectedTherapy: {
            indication: "When reliable microbiologic diagnosis made",
            note: "Less common in outpatient setting (testing usually not performed)",
            viralCAP: {
                challenge: "Deciding whether to stop empiric antibiotics when virus detected",
                criteria: "Known viral cause, no CXR findings of bacterial superinfection, + supportive evidence (low procalcitonin, negative bacterial cultures, negative multiplex PCR)",
                covid19: "Bacterial coinfection less common than with other viruses → lower threshold to stop/withhold antibiotics"
            }
        },
        
        glucocorticoids: {
            outpatient: "NOT recommended - harms likely outweigh any benefit",
            exception: "COPD exacerbation co-occurring with CAP → treat COPD with GCs"
        },
        
        duration: {
            mostPatients: "5 days",
            azithromycin: "3 days (due to long half-life) at 500mg daily",
            criteria: "Afebrile ≥48 hours and clinically stable before stopping",
            persistentSymptoms: "Persistence of cough/dyspnea NOT indication to extend if afebrile and improving"
        },
        
        followUp: {
            communication: "Within 24-48 hours of diagnosis",
            purpose: "Assess improvement, check for complications",
            clinicalResponse: {
                timeline: "Most improve soon after starting appropriate antibiotics",
                symptoms: "Some persist during convalescence",
                medianResolution: {
                    fever: "3 days",
                    cough: "14 days",
                    fatigue: "14 days"
                },
                oneSymptomAt28Days: "~33% of patients still have ≥1 symptom at 28 days",
                returnToWork: "Median 6 days even with persistent symptoms"
            },
            cxr: "NOT routinely repeated if symptoms resolved within 5-7 days (radiographic lag)"
        },
        
        nonresolvingPneumonia: {
            definition: "Neither progressing nor improving after empiric therapy",
            causes: [
                "Delayed clinical response (comorbidities, severe disease, certain pathogens)",
                "Loculated infection (abscess, empyema)",
                "Bronchial obstruction (tumor → postobstructive pneumonia)",
                "Subacute/chronic pathogens (TB, NTM, fungi, Nocardia, Actinomyces)",
                "Incorrect diagnosis (malignancy, inflammatory lung disease)"
            ],
            approach: "Complete new evaluation (exam, labs, imaging, microbiology) - don't automatically change antibiotics"
        },
        
        prevention: {
            vaccination: {
                influenza: "Annual for all patients without contraindications",
                pneumococcal: "All patients ≥50 years and those with risk factors"
            },
            smokingCessation: "Discuss at diagnosis and follow-up"
        }
    },

    // ========================================================================
    // DISTINGUISHING BRONCHITIS FROM PNEUMONIA
    // ========================================================================
    bronchitisVsPneumonia: {
        clinicalDistinction: {
            pneumoniaSigns: [
                "Abnormal vital signs: HR >100, RR >22, Temp >38°C (100.4°F), O2 sat <95%",
                "Consolidation: rales, egophony, tactile fremitus",
                "Dullness to percussion",
                "Mental status changes (>75 years)"
            ],
            bronchitisExpected: [
                "Normal vital signs",
                "May have rhonchi (clear with cough) or wheezing",
                "No consolidation findings"
            ]
        },
        recommendation: "Obtain CXR if ANY pneumonia signs present",
        keyDifference: {
            bronchitis: "Antibiotics NOT indicated",
            pneumonia: "Antibiotics INDICATED"
        }
    },

    // ========================================================================
    // RED FLAGS
    // ========================================================================
    redFlags: {
        pneumonia: {
            name: "Signs Suggesting Pneumonia",
            flags: [
                { flag: "Fever >38°C (100.4°F)", significance: "Suggests infection beyond simple URI" },
                { flag: "Tachypnea (RR >22)", significance: "Concerning for lower respiratory involvement" },
                { flag: "Tachycardia (HR >100)", significance: "Systemic response" },
                { flag: "Hypoxia (O2 sat <95%)", significance: "Gas exchange impairment" },
                { flag: "Rales/crackles", significance: "Suggests alveolar involvement" },
                { flag: "Egophony/tactile fremitus", significance: "Consolidation" },
                { flag: "Mental status changes in elderly", significance: "May be only sign of infection" }
            ],
            action: "Obtain CXR, consider empiric antibiotic therapy"
        },
        severeCAP: {
            name: "Severe CAP Requiring Hospitalization",
            majorCriteria: [
                { flag: "Vasopressor requirement", significance: "Septic shock - ICU" },
                { flag: "Mechanical ventilation", significance: "Respiratory failure - ICU" }
            ],
            minorCriteria: [
                { flag: "RR ≥30", significance: "Minor criterion" },
                { flag: "PaO2/FiO2 ≤250", significance: "Minor criterion" },
                { flag: "Multilobar infiltrates", significance: "Minor criterion" },
                { flag: "Confusion", significance: "Minor criterion" },
                { flag: "BUN ≥20", significance: "Minor criterion" },
                { flag: "WBC <4000", significance: "Minor criterion" },
                { flag: "Platelets <100k", significance: "Minor criterion" },
                { flag: "Temp <36°C", significance: "Minor criterion" },
                { flag: "Hypotension requiring fluids", significance: "Minor criterion" }
            ],
            interpretation: "≥3 minor criteria = consider ICU; ≥1 major = ICU"
        },
        pertussis: {
            name: "Pertussis ('Whooping Cough')",
            flags: [
                { flag: "Paroxysmal cough", significance: "Characteristic" },
                { flag: "Inspiratory whoop", significance: "Classic but may be absent in adults" },
                { flag: "Posttussive vomiting", significance: "Suggestive" },
                { flag: "Cough ≥2 weeks", significance: "Duration criterion" }
            ],
            note: "20% of prolonged cough in adolescents/adults; rising incidence worldwide"
        },
        chronicCoughDangerSigns: {
            name: "Danger Signs in Chronic Cough",
            flags: [
                { flag: "Hemoptysis", significance: "Cancer, TB, bronchiectasis, vasculitis" },
                { flag: "Weight loss", significance: "Malignancy, chronic infection" },
                { flag: "Night sweats", significance: "TB, malignancy, lymphoma" },
                { flag: "Fever", significance: "Infection" },
                { flag: "Progressive dyspnea", significance: "Parenchymal or airway disease" }
            ],
            action: "CXR and further workup required"
        }
    },

    // ========================================================================
    // WORKUP BY PRESENTATION
    // ========================================================================
    workupByPresentation: {
        acuteCoughNoPneumoniaSigns: {
            diagnosis: "Likely acute bronchitis",
            testing: "Usually none needed",
            exceptions: ["COVID-19 testing if indicated", "Influenza testing if high-risk", "Pertussis testing if compatible features"],
            treatment: "Supportive care, NO antibiotics"
        },
        acuteCoughWithPneumoniaSigns: {
            diagnosis: "Possible pneumonia",
            testing: "CXR required",
            ifPneumonia: "Empiric antibiotics based on risk stratification",
            ifClear: "Likely bronchitis - supportive care"
        },
        subacuteCough: {
            likelyCause: "Postinfectious",
            consider: "Pertussis, asthma exacerbation",
            testing: "Consider pertussis testing if compatible",
            treatment: "Empiric therapy for suspected cause (UACS, postinfectious bronchial hyperreactivity)"
        },
        chronicCough: {
            approach: "Algorithmic sequential evaluation",
            step1: "Exclude danger signs, check medications (ACE-I)",
            step2: "CXR, spirometry",
            step3: "Empiric therapy trials: asthma → UACS → GERD → NAEB",
            step4: "If refractory: further workup, consider specialist referral"
        }
    },

    // ========================================================================
    // PATIENT RESPONSE TEMPLATES
    // ========================================================================
    patientResponses: {
        coughDuration: {
            acute: [
                "It started about a week ago",
                "Just a few days",
                "Less than 3 weeks"
            ],
            subacute: [
                "It's been going on for about a month",
                "4-5 weeks now",
                "Longer than I expected from a cold"
            ],
            chronic: [
                "I've had this cough for months",
                "More than 2 months",
                "It just won't go away"
            ]
        },
        
        sputumCharacter: {
            dry: [
                "No, it's dry",
                "I don't bring anything up",
                "Nonproductive"
            ],
            clear: [
                "Just clear mucus",
                "White/clear phlegm",
                "Nothing colored"
            ],
            purulent: [
                "It's green/yellow",
                "Thick colored sputum",
                "Yes, there's phlegm"
            ]
        },
        
        associatedSymptoms: {
            fever: {
                positive: ["I've had a fever", "Temperature has been elevated", "I feel feverish"],
                negative: ["No fever", "Temperature has been normal", "No chills"]
            },
            dyspnea: {
                positive: ["I'm short of breath", "Trouble breathing", "Can't catch my breath"],
                negative: ["Breathing is fine", "No trouble breathing", "Just the cough"]
            },
            chestPain: {
                positive: ["My chest hurts when I cough", "Chest is sore", "Pain with breathing/coughing"],
                negative: ["No chest pain", "Chest feels fine"]
            },
            postnasalDrip: {
                positive: ["I feel drainage in my throat", "Keep clearing my throat", "Runny nose dripping back"],
                negative: ["No drainage", "Nose is fine"]
            },
            heartburn: {
                positive: ["I have heartburn", "Get reflux at night", "Acid taste in my mouth"],
                negative: ["No heartburn", "No reflux symptoms"]
            }
        },
        
        triggers: {
            nighttime: "The cough is worse at night",
            exercise: "It gets worse with exercise",
            cold: "Cold air triggers it",
            eating: "It's worse after meals",
            lyingDown: "Worse when I lie down"
        },
        
        pertussisSuggestive: {
            whoop: "I make a whooping sound when I breathe in",
            paroxysms: "It comes in fits - can't stop once it starts",
            vomiting: "I've thrown up from coughing so hard"
        },
        
        medicationHistory: {
            aceInhibitor: [
                "I take lisinopril/enalapril for blood pressure",
                "I'm on an ACE inhibitor",
                "Started a new blood pressure medicine recently"
            ],
            recentAntibiotics: [
                "I was on antibiotics {duration} ago",
                "Recently finished a course of {antibiotic}",
                "No recent antibiotics"
            ]
        },

        smokingHistory: {
            current: [
                "Yes, I smoke",
                "About {pack-years}",
                "Still smoking"
            ],
            former: [
                "I quit {duration} ago",
                "Former smoker",
                "Haven't smoked in years"
            ],
            never: [
                "Never smoked",
                "Non-smoker",
                "No tobacco use"
            ]
        }
    },

    // ========================================================================
    // TEACHING PEARLS
    // ========================================================================
    teachingPearls: [
        "PURULENT SPUTUM does NOT mean bacterial infection or need for antibiotics",
        "50-90% of patients with acute bronchitis receive unnecessary antibiotics - a national priority to reduce",
        "Median cough duration is 18 days - set realistic expectations",
        "D-dimer NOT indicated for cough evaluation (common error)",
        "ACE inhibitor cough: can occur anytime, resolves 1-4 days (up to 4 weeks) after stopping",
        "More than 75% of suspected pneumonias in outpatients are NOT pneumonia",
        "CXR if: fever >38°C, RR >22, HR >100, O2 sat <95%, rales, or mental status changes in elderly",
        "S. pneumoniae remains the primary target - beta-lactam is backbone of CAP therapy",
        "Fluoroquinolones: effective but reserve due to side effects and resistance concerns",
        "CAP duration: 5 days is sufficient for most outpatients (3 days for azithromycin)",
        "Persistent cough/dyspnea NOT indication to extend antibiotics if afebrile and improving",
        "Pertussis: 20% of prolonged cough in adults - think of it!",
        "Chronic cough: often multiple causes - treat ALL of them for resolution",
        "GERD cough: may take months to improve with PPI - don't give up too soon"
    ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RespiratoryTemplates;
}

if (typeof window !== 'undefined') {
    window.RespiratoryTemplates = RespiratoryTemplates;
}

console.log("✓ ReasonDx Respiratory/Cough Templates with UpToDate Evidence: Loaded");
