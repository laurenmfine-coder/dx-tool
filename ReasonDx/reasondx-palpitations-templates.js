/**
 * ============================================================================
 * REASONDX PALPITATIONS CLINICAL TEMPLATES
 * ============================================================================
 * Version: 2.0 | December 2024
 * Evidence Sources:
 *   - UpToDate: Evaluation of Palpitations in Adults
 *   - UpToDate: Atrial Fibrillation: Overview of Management
 *   - UpToDate: Overview of the Acute Management of Tachyarrhythmias
 * 
 * EPIDEMIOLOGY (from UpToDate):
 * - One of the most common symptoms in primary care and cardiology
 * - Cardiac etiology: 43%
 * - Psychiatric etiology: 31%
 * - Miscellaneous (medication, thyrotoxicosis, caffeine, cocaine, anemia): 10%
 * - Unknown: 16%
 * - Normal sinus rhythm correlates with palpitations in up to 30% of patients
 * ============================================================================
 */

const PalpitationsTemplates = {
    chiefComplaint: "Palpitations",
    
    // ========================================================================
    // DEFINITION AND EPIDEMIOLOGY
    // ========================================================================
    definition: {
        description: "Unpleasant awareness of forceful, rapid, or irregular heartbeat",
        patientDescriptions: [
            "Rapid fluttering in chest",
            "Flip-flopping sensation",
            "Pounding in chest or neck",
            "Heart racing or pounding",
            "Skipped beats followed by pause"
        ]
    },

    epidemiology: {
        etiologyBreakdown: {
            cardiac: { percent: 43, note: "Most common identifiable cause" },
            psychiatric: { percent: 31, note: "Panic, anxiety, somatic symptom disorder" },
            miscellaneous: { percent: 10, note: "Meds, thyroid, caffeine, cocaine, anemia" },
            unknown: { percent: 16 }
        },
        normalSinusRhythm: "Up to 30% have normal sinus rhythm during symptoms",
        ambulatoryMonitoringFindings: "Most show SVE/VE ectopy or normal sinus rhythm"
    },

    // ========================================================================
    // ETIOLOGIES BY CATEGORY
    // ========================================================================
    etiologies: {
        
        cardiac: {
            arrhythmias: {
                supraventricular: [
                    { name: "Premature atrial complexes (PACs)", characteristics: "Skipped beat, flip-flop sensation" },
                    { name: "Atrial fibrillation", characteristics: "Irregularly irregular, rapid" },
                    { name: "Atrial flutter", characteristics: "Regular ~150 bpm, sawtooth P waves" },
                    { name: "AVNRT", characteristics: "Sudden onset/offset, regular rapid, neck pounding" },
                    { name: "AVRT (WPW)", characteristics: "Young patients, delta wave on ECG" },
                    { name: "Sinus tachycardia", characteristics: "Gradual onset/offset, underlying cause" },
                    { name: "Atrial tachycardia", characteristics: "Abnormal P wave morphology" }
                ],
                ventricular: [
                    { name: "Premature ventricular complexes (PVCs)", characteristics: "Pause after beat, wide QRS" },
                    { name: "Nonsustained VT (NSVT)", characteristics: "≥3 beats, <30 seconds" },
                    { name: "Sustained VT", characteristics: "Wide complex, hemodynamic compromise" }
                ],
                bradyarrhythmias: [
                    { name: "Complete heart block", characteristics: "Slow rate, cannon A waves" },
                    { name: "Sick sinus syndrome", characteristics: "Tachy-brady syndrome" }
                ]
            },
            structural: [
                { name: "Mitral valve prolapse", characteristics: "Click-murmur, most are asymptomatic" },
                { name: "Hypertrophic cardiomyopathy", characteristics: "Family history SCD, murmur with Valsalva" },
                { name: "Dilated cardiomyopathy", characteristics: "HF symptoms, S3, displaced PMI" },
                { name: "Prior MI", characteristics: "Q waves, scar-related arrhythmias" },
                { name: "Valvular heart disease", characteristics: "Murmurs, especially mitral regurgitation" }
            ],
            other: [
                { name: "Pacemaker syndrome", characteristics: "AV dyssynchrony with single-chamber pacing" },
                { name: "Atrial myxoma", characteristics: "Rare, positional symptoms, tumor plop" }
            ]
        },

        psychiatric: {
            disorders: [
                { 
                    name: "Panic disorder/attacks",
                    features: ["Sudden onset", "Peak in minutes", "Associated fear", "Chest tightness", "Diaphoresis", "Trembling"],
                    note: "May coexist with true arrhythmia"
                },
                {
                    name: "Generalized anxiety disorder",
                    features: ["Chronic worry", "Muscle tension", "Difficulty concentrating", "Sleep disturbance"],
                    note: "Palpitations not necessarily during objective arrhythmia"
                },
                {
                    name: "Somatic symptom disorder",
                    features: ["Multiple physical complaints", "Excessive health-related thoughts", "Disproportionate concern"],
                    note: "Physical symptoms without identified medical cause"
                }
            ],
            keyPoint: "Psychiatric illness may coexist with cardiac cause - don't dismiss without workup"
        },

        metabolicEndocrine: [
            {
                name: "Hyperthyroidism",
                features: ["Weight loss", "Heat intolerance", "Tremor", "Diaphoresis", "Exophthalmos"],
                arrhythmias: ["Sinus tachycardia", "Atrial fibrillation"],
                workup: "TSH, free T4"
            },
            {
                name: "Hypoglycemia",
                features: ["Tremor", "Diaphoresis", "Confusion", "Weakness"],
                mechanism: "Catecholamine excess causing sinus tachycardia",
                workup: "Fingerstick glucose during symptoms"
            },
            {
                name: "Pheochromocytoma",
                features: ["Episodic", "Headache", "Sweating", "Tremor", "Hypertension"],
                mechanism: "Catecholamine excess",
                workup: "24-hour urine metanephrines/catecholamines"
            },
            {
                name: "Anemia",
                features: ["Fatigue", "Dyspnea on exertion", "Pallor"],
                mechanism: "Compensatory sinus tachycardia",
                workup: "CBC"
            }
        ],

        medications: {
            causative: [
                "Sympathomimetics (pseudoephedrine, albuterol)",
                "Vasodilators",
                "Anticholinergics",
                "Stimulants (methylphenidate, amphetamines)",
                "Thyroid hormone",
                "Theophylline"
            ],
            withdrawal: [
                "Beta blocker withdrawal",
                "Alcohol withdrawal"
            ]
        },

        substances: [
            {
                substance: "Caffeine",
                note: "Typical consumption doesn't increase risk; excessive use in sensitive individuals may"
            },
            {
                substance: "Alcohol",
                note: "AF risk with heavy use; withdrawal causes sinus tachycardia"
            },
            {
                substance: "Cocaine",
                note: "SVT and VT risk; coronary vasospasm"
            },
            {
                substance: "Amphetamines/methamphetamine",
                note: "SVT, cardiomyopathy"
            },
            {
                substance: "Nicotine",
                note: "Cigarettes and nicotine replacement products"
            }
        ],

        highOutputStates: [
            "Fever/infection",
            "Pregnancy",
            "Anemia",
            "Hyperthyroidism",
            "AV fistula",
            "Paget disease"
        ]
    },

    // ========================================================================
    // RISK STRATIFICATION - HIGH VS LOW RISK
    // ========================================================================
    riskStratification: {
        
        highRisk: {
            name: "High Risk for Concerning Arrhythmia",
            criteria: [
                "Palpitations that are sustained (minutes or longer)",
                "Poorly tolerated symptoms",
                "Associated syncope or presyncope",
                "Organic heart disease (prior MI, cardiomyopathy, significant valvular disease, HCM)",
                "Personal or family history of arrhythmia, syncope, or sudden death",
                "Family history of cardiomyopathy or long QT syndrome",
                "ECG abnormalities (WPW, prolonged QT, prior MI Q waves)"
            ],
            action: "Ambulatory cardiac rhythm monitoring required"
        },

        lowRisk: {
            name: "Low Risk for Concerning Arrhythmia",
            criteria: [
                "Unsustained palpitations (instant, skipped beat)",
                "Well tolerated",
                "No evidence of heart disease by history, exam, or ECG",
                "No syncope or presyncope",
                "No family history of sudden death or cardiomyopathy"
            ],
            action: "Generally do NOT need ambulatory monitoring; counsel on low risk"
        },

        predictorsOfCardiacEtiology: [
            "Male sex",
            "Description of irregular heartbeat",
            "Personal history of heart disease",
            "Event duration >5 minutes"
        ]
    },

    // ========================================================================
    // HISTORY CHARACTERISTICS - DIAGNOSTIC CLUES
    // ========================================================================
    historyCharacteristics: {

        ageOfOnset: {
            childhood: {
                likelyDiagnoses: ["AVRT with accessory pathway", "AVNRT"],
                note: "Supraventricular tachycardias most common"
            },
            olderOnset: {
                likelyDiagnoses: ["Atrial fibrillation", "Atrial flutter", "Atrial tachycardia", "VT with structural heart disease"],
                note: "Risk of life-threatening VA increases with age/structural disease"
            }
        },

        duration: {
            instant: {
                description: "Skipped beat",
                likelyDiagnoses: ["PACs", "PVCs"]
            },
            sustained: {
                description: "Minutes or longer",
                likelyDiagnoses: ["SVT", "VT", "Atrial fibrillation"]
            }
        },

        onsetOffset: {
            gradual: {
                likelyDiagnoses: ["Sinus tachycardia"],
                note: "Gradual resolution more useful than onset"
            },
            abrupt: {
                likelyDiagnoses: ["SVT (AVNRT, AVRT)", "VT"],
                note: "Sudden 'switching on and off'"
            }
        },

        rateAndRhythm: {
            rapidRegular: {
                likelyDiagnoses: ["AVNRT", "AVRT", "VT", "Atrial flutter"],
                note: "Rate >160 bpm unlikely to be sinus tachycardia"
            },
            rapidIrregular: {
                likelyDiagnoses: ["Atrial fibrillation", "Atrial flutter with variable block", "MAT"]
            },
            slowIrregular: {
                likelyDiagnoses: ["Sinus arrhythmia", "Frequent ectopy", "Second-degree AV block"]
            }
        },

        additionalSensations: {
            rapidFluttering: {
                description: "Sustained SVT or VT",
                note: "Regularity helps distinguish (AF irregular, sinus/AVNRT regular)"
            },
            flipFlopping: {
                description: "Premature beat followed by pause",
                note: "Forceful beat after compensatory pause"
            },
            neckPounding: {
                irregular: { likelyDiagnoses: ["PVCs", "Complete heart block", "VT"] },
                regularRapid: { 
                    likelyDiagnoses: ["AVNRT"],
                    mechanism: "Simultaneous atrial/ventricular contraction against closed AV valves",
                    note: "AVNRT 3x more common in women"
                }
            }
        },

        associatedSymptoms: {
            syncope: {
                significance: "RED FLAG - suggests hemodynamically significant arrhythmia",
                mostConcerningFor: ["Ventricular tachycardia", "Severe bradycardia"],
                note: "Syncope occasionally with SVT (vasodilation at onset)"
            },
            presyncope: {
                significance: "Concerning, requires evaluation",
                likelyDiagnoses: ["VT", "Rapid SVT", "AF with RVR"]
            },
            chestPain: {
                significance: "May indicate ischemia, especially if rate-related",
                action: "ECG, troponin if concerning"
            }
        },

        termination: {
            vagalManeuvers: {
                effective: ["AVNRT", "AVRT"],
                description: "Valsalva, carotid massage, cold water to face"
            },
            positionalChanges: {
                AVNRTtrigger: "Standing after bending over",
                prematureBeats: "More noticeable lying down, especially left lateral decubitus"
            }
        },

        exerciseAssociation: {
            duringExercise: {
                likelyDiagnoses: ["Exercise-induced VT (often RVOT)", "Catecholaminergic polymorphic VT", "SVT"],
                note: "RVOT VT presents in 2nd-3rd decade"
            },
            afterExercise: {
                likelyDiagnoses: ["AF (vagal surge at exercise termination)"],
                note: "Common in athletic men 30-60 years old"
            },
            emotionalStress: {
                likelyDiagnoses: ["Long QT syndrome (especially types 1 and 2)", "Catecholaminergic polymorphic VT"],
                note: "Torsades de pointes with startling experiences"
            }
        }
    },

    // ========================================================================
    // PHYSICAL EXAM FINDINGS
    // ========================================================================
    physicalExam: {
        vitalSigns: {
            elevatedBP_pulse: ["Pheochromocytoma", "Substance use", "Beta blocker withdrawal", "Catecholamine excess"],
            fever: ["Infection", "Thyrotoxicosis"]
        },
        cardiovascular: {
            midsystolicClick: { finding: "Mitral valve prolapse", note: "With or without late systolic murmur" },
            holosystolicMurmur: { 
                finding: "HCM if increases with Valsalva",
                note: "Harsh, left sternal border"
            },
            tumorPlop: { finding: "Atrial myxoma", note: "Rare, diastolic sound" },
            displacedPMI: { finding: "Dilated cardiomyopathy" },
            S3gallop: { finding: "Heart failure, volume overload" },
            irregularRhythm: { finding: "Atrial fibrillation, frequent ectopy" },
            cannonAWaves: { finding: "Complete heart block, VT (AV dissociation)" }
        },
        pulmonary: {
            prolongedExpiration: { finding: "COPD - associated with MAT, AF, ventricular arrhythmias" }
        },
        endocrine: {
            tremor: { finding: "Hyperthyroidism, pheochromocytoma, anxiety" },
            exophthalmos: { finding: "Graves disease" },
            thyromegaly: { finding: "Thyroid disease" },
            briskReflexes: { finding: "Hyperthyroidism" }
        }
    },

    // ========================================================================
    // ECG FINDINGS
    // ========================================================================
    ecgFindings: {
        
        duringArrhythmia: {
            note: "Most patients in sinus rhythm when ECG obtained",
            narrowRegular: ["Sinus tachycardia", "AVNRT", "AVRT", "Atrial flutter", "Atrial tachycardia"],
            narrowIrregular: ["Atrial fibrillation", "MAT", "Atrial flutter with variable block"],
            wideRegular: ["VT", "SVT with aberrancy", "SVT with bundle branch block"],
            wideIrregular: ["AF with BBB", "Preexcited AF (WPW)", "Polymorphic VT"]
        },

        sinusRhythmFindings: {
            deltaWave: {
                diagnosis: "Wolff-Parkinson-White syndrome",
                significance: "Risk of AVRT, preexcited AF → VF"
            },
            prolongedQT: {
                diagnosis: "Long QT syndrome",
                significance: "Risk of torsades de pointes",
                note: "Acquired causes: drugs, electrolytes"
            },
            shortPR: {
                diagnosis: "WPW (with delta wave) or Lown-Ganong-Levine",
                significance: "Preexcitation syndromes"
            },
            qWaves: {
                diagnosis: "Prior myocardial infarction",
                significance: "Substrate for VT"
            },
            LVH: {
                diagnosis: "Left ventricular hypertrophy",
                significance: "HCM if with deep septal Q waves; AF substrate if with LAE"
            },
            bradycardia: {
                significance: "Increased PVCs at slow heart rates; complete heart block with VE"
            }
        }
    },

    // ========================================================================
    // WORKUP AND TESTING
    // ========================================================================
    workup: {
        
        allPatients: {
            ecg: {
                indication: "All patients with palpitations",
                lookFor: ["WPW pattern", "Prolonged QT", "Prior MI Q waves", "LVH", "Ectopy", "Arrhythmia"]
            },
            labsTesting: {
                routine: ["CBC (anemia)", "TSH (hyperthyroidism)"],
                ifIndicated: ["Toxicology screen", "BMP (electrolytes)", "Glucose"]
            }
        },

        echocardiogram: {
            indications: [
                "Family history/symptoms/ECG concerning for HCM",
                "ECG with Q waves suggesting prior MI",
                "Left bundle branch block",
                "Changes consistent with LVH",
                "Murmur suggesting valvular disease"
            ]
        },

        ambulatoryMonitoring: {
            
            notNeeded: {
                criteria: "Low risk - unsustained, well-tolerated, no heart disease, no syncope",
                note: "Counsel on low risk; if patient remains very concerned, 2 weeks event monitoring"
            },
            
            needed: {
                criteria: "High risk features (see risk stratification)",
                note: "Required for sustained, poorly tolerated, syncope, structural heart disease, concerning family history"
            },

            types: {
                holterMonitor: {
                    duration: "24-48 hours",
                    indication: "Frequent daily symptoms",
                    diagnosticYield: "33-35%",
                    limitation: "Short duration; arrhythmia may be unrelated to symptoms"
                },
                eventRecorder: {
                    duration: "2-4 weeks (2 weeks usually sufficient)",
                    indication: "Intermittent symptoms",
                    diagnosticYield: "66-83%",
                    note: "87% have diagnostic transmission in first 2 weeks",
                    mechanism: "Patient activates during symptoms; saves preceding/following minutes"
                },
                implantableLoopRecorder: {
                    duration: "Up to 2 years",
                    indication: "Extremely infrequent but symptomatic palpitations, especially with syncope",
                    note: "Subcutaneous device, auto-detects or patient-activated"
                }
            },

            optimalDuration: {
                twoWeeks: "Sufficient for vast majority of patients",
                evidence: "87% have initial transmission in first 2 weeks; cost-effectiveness drops significantly after week 1"
            }
        },

        electrophysiologyStudy: {
            indications: [
                "Ambulatory monitoring unrevealing",
                "Sustained or poorly tolerated palpitations",
                "High pretest probability of serious arrhythmia",
                "Structural heart disease"
            ]
        }
    },

    // ========================================================================
    // ATRIAL FIBRILLATION MANAGEMENT
    // ========================================================================
    atrialFibrillation: {
        
        keyComponents: ["Risk factor modification", "Thromboembolism prevention", "Rate and/or rhythm control"],

        urgentManagement: {
            indications: [
                "Hemodynamic instability with hypotension",
                "End organ dysfunction (AMS, acute HF, SOB, lightheadedness)",
                "Severe tachycardia (>130-140 bpm)",
                "Suspected myocardial ischemia",
                "Acute severe illness (pneumonia, sepsis)",
                "Evidence of preexcitation (WPW)"
            ],
            approach: {
                unstable: "Immediate DC cardioversion with anticoagulation if possible",
                stable: "Rate control first, then consider rhythm control"
            }
        },

        rateControl: {
            goal: "<100-110 bpm at rest",
            firstLine: {
                betaBlockers: { 
                    examples: ["Metoprolol", "Esmolol IV"],
                    preferred: "LVEF <50%, HFrEF, HFpEF, prior MI, high adrenergic tone"
                },
                calciumChannelBlockers: {
                    examples: ["Diltiazem", "Verapamil"],
                    preferred: "Asthma, COPD without HF indication for BB",
                    contraindication: "Verapamil contraindicated if LVEF ≤40%"
                }
            },
            secondLine: ["IV magnesium (2-4g)", "Digoxin", "Amiodarone (if others fail)"]
        },

        rhythmControl: {
            cardioversion: {
                electrical: "Preferred for most, especially younger patients",
                pharmacologic: "When avoiding sedation risks is desired"
            },
            timing: {
                lessThan48Hours: "Can cardiovert with or without TEE; anticoag during/after",
                greaterThan48Hours: "Either 3 weeks anticoagulation OR TEE to exclude LA thrombus before cardioversion"
            },
            postCardioversion: "Anticoagulation for at least 4 weeks after"
        },

        anticoagulation: {
            riskAssessment: "CHA₂DS₂-VASc score",
            CHA2DS2VASc: {
                C: { points: 1, factor: "CHF or LVEF ≤40%" },
                H: { points: 1, factor: "Hypertension" },
                A2: { points: 2, factor: "Age ≥75 years" },
                D: { points: 1, factor: "Diabetes mellitus" },
                S2: { points: 2, factor: "Stroke/TIA/thromboembolism" },
                V: { points: 1, factor: "Vascular disease (MI, PAD, aortic plaque)" },
                A: { points: 1, factor: "Age 65-74 years" },
                Sc: { points: 1, factor: "Sex category (female)" }
            },
            recommendations: {
                score0_male_1_female: "No anticoagulation",
                score1_male: "Consider anticoagulation",
                score2plus: "Anticoagulation recommended"
            },
            agents: {
                preferred: "DOACs (apixaban, rivaroxaban, dabigatran, edoxaban)",
                alternative: "Warfarin (INR 2-3)",
                mechanical_valves: "Warfarin required (DOACs contraindicated)"
            }
        },

        riskFactorModification: [
            "Alcohol abstinence/reduction (reduces AF burden)",
            "Weight loss and exercise (reduces AF burden)",
            "Blood pressure control",
            "Treatment of sleep apnea",
            "Smoking cessation"
        ]
    },

    // ========================================================================
    // SVT ACUTE MANAGEMENT
    // ========================================================================
    svtManagement: {
        
        unstable: {
            action: "Immediate DC cardioversion",
            note: "May try vagal maneuvers if doesn't delay cardioversion"
        },

        stable: {
            sequence: [
                { step: 1, intervention: "Vagal maneuvers (Valsalva, carotid massage, cold water to face)" },
                { step: 2, intervention: "IV Adenosine 6mg rapid push → 12mg → 12mg" },
                { step: 3, intervention: "IV diltiazem or IV beta blocker" },
                { step: 4, intervention: "DC cardioversion if refractory" }
            ],
            adenosineDosing: {
                initial: "6 mg rapid IV push",
                repeat: "12 mg if no response (can repeat once)",
                note: "Push rapidly, follow with saline flush; warn patient about transient symptoms"
            }
        },

        contraindications: {
            wpw_afib: {
                avoid: ["Beta blockers", "Calcium channel blockers", "Digoxin", "Adenosine"],
                reason: "May cause VF by enhancing accessory pathway conduction",
                use: "Procainamide or DC cardioversion"
            }
        }
    },

    // ========================================================================
    // VT MANAGEMENT
    // ========================================================================
    vtManagement: {
        pulseless: "ACLS algorithm - defibrillation",
        unstableWithPulse: "Synchronized cardioversion with sedation",
        stable: {
            options: ["Electrical cardioversion", "IV amiodarone", "IV procainamide", "IV lidocaine"],
            note: "Some experts proceed directly to cardioversion; others try antiarrhythmic first"
        },
        polymorphicVT: {
            withLongQT: {
                name: "Torsades de pointes",
                treatment: ["IV Magnesium 1-2g", "Temporary pacing at 100 bpm", "Isoproterenol for pause-dependent"],
                note: "Stop offending drugs, correct K/Mg"
            },
            withNormalQT: {
                likelyCause: "Myocardial ischemia",
                treatment: ["Defibrillation", "Beta blockers", "IV amiodarone", "Urgent coronary angiography"],
                note: "Magnesium less effective if QT normal"
            }
        }
    },

    // ========================================================================
    // PATIENT RESPONSE TEMPLATES
    // ========================================================================
    patientResponses: {
        
        description: {
            racing: [
                "My heart feels like it's racing - like it's going 100 miles per hour",
                "It feels like my heart is pounding out of my chest",
                "My heart is beating so fast I can feel it in my throat"
            ],
            skipping: [
                "It feels like my heart skips a beat, then pounds extra hard",
                "Like a flutter, then nothing, then a big thump",
                "It's like my heart pauses then catches up"
            ],
            fluttering: [
                "It feels like a butterfly fluttering in my chest",
                "Like my heart is quivering instead of beating normally",
                "A rapid fluttering sensation"
            ],
            irregular: [
                "My heartbeat is all over the place - no pattern",
                "Sometimes fast, sometimes slow, never regular",
                "It's chaotic - I can't predict what it will do"
            ],
            pounding: [
                "I can feel my heart pounding in my neck",
                "Strong thumping sensation in my chest and throat",
                "Like someone is beating a drum inside me"
            ]
        },

        duration: {
            brief: [
                "Just a second or two - a quick flutter then it's gone",
                "Momentary - happens and stops right away",
                "Just a few beats then back to normal"
            ],
            sustained: [
                "It lasts for several minutes at a time",
                "Once it starts, it can go on for 20-30 minutes",
                "The longest episode lasted about an hour"
            ]
        },

        onsetOffset: {
            sudden: [
                "It starts suddenly - like someone flipped a switch",
                "One second I'm fine, the next my heart is racing",
                "It just comes out of nowhere and stops the same way"
            ],
            gradual: [
                "It builds up slowly over a few minutes",
                "I can feel it speeding up gradually",
                "It comes on slowly and takes a while to settle down"
            ]
        },

        associatedSymptoms: {
            syncope: [
                "I passed out during one of these episodes",
                "I blacked out for a few seconds",
                "I lost consciousness when it was really bad"
            ],
            presyncope: [
                "I feel lightheaded, like I might pass out",
                "The room starts spinning when it happens",
                "I get dizzy and have to sit down"
            ],
            chestPain: [
                "I get some chest discomfort when it's racing",
                "There's pressure in my chest during episodes",
                "My chest feels tight when the palpitations happen"
            ],
            anxiety: [
                "I feel panicked when it happens",
                "It makes me very anxious",
                "I get scared that something is wrong with my heart"
            ],
            none: [
                "No, I just notice my heart racing but feel fine otherwise",
                "It's bothersome but I don't have any other symptoms",
                "Just the palpitations, nothing else"
            ]
        },

        triggers: {
            caffeine: [
                "It seems worse after coffee",
                "Energy drinks definitely trigger it",
                "I notice it more on days I drink a lot of caffeine"
            ],
            alcohol: [
                "It happens after I've been drinking",
                "A few drinks and my heart starts racing",
                "Definitely related to alcohol for me"
            ],
            exercise: [
                "It happens when I'm working out",
                "During or right after exercise",
                "Strenuous activity seems to trigger it"
            ],
            stress: [
                "Stress definitely brings it on",
                "It happens when I'm anxious or worried",
                "Work stress triggers episodes"
            ],
            position: [
                "It happens when I bend over then stand up",
                "Lying on my left side makes it worse",
                "I notice it more when I'm lying down at night"
            ],
            none: [
                "I can't identify any specific trigger",
                "It seems random - no pattern I can find",
                "Nothing in particular seems to cause it"
            ]
        },

        termination: {
            vagalManeuvers: [
                "If I bear down like I'm having a bowel movement, it stops",
                "Coughing or holding my breath sometimes helps",
                "Splashing cold water on my face can stop it"
            ],
            spontaneous: [
                "It just stops on its own after a while",
                "Eventually it settles down by itself",
                "I don't do anything - it resolves spontaneously"
            ]
        },

        familyHistory: {
            positive: [
                "My father had a heart attack in his 50s",
                "My mother has atrial fibrillation",
                "My brother died suddenly - they said it was his heart",
                "There's a history of heart problems in my family"
            ],
            negative: [
                "No heart problems in my family that I know of",
                "No sudden deaths or heart disease",
                "My family is pretty healthy heart-wise"
            ]
        },

        substanceUse: {
            caffeine: [
                "I drink about 3-4 cups of coffee a day",
                "I have maybe 2-3 energy drinks per week",
                "I try to limit caffeine but probably have a cup or two daily"
            ],
            alcohol: [
                "I drink socially - maybe 2-3 drinks on weekends",
                "I have a glass of wine most nights",
                "I don't drink alcohol"
            ],
            cocaine: [
                "I've used cocaine recreationally",
                "I don't use any drugs",
                "I tried it a few times years ago but not anymore"
            ],
            nicotine: [
                "I smoke about half a pack a day",
                "I quit smoking 5 years ago",
                "I've never smoked"
            ]
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PalpitationsTemplates;
}

if (typeof window !== 'undefined') {
    window.PalpitationsTemplates = PalpitationsTemplates;
}

console.log("✓ ReasonDx Palpitations Templates v2.0: Loaded (with UpToDate evidence)");
