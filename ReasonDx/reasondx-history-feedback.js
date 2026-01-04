/**
 * ============================================================================
 * REASONDX HISTORY FEEDBACK SYSTEM
 * ============================================================================
 * Version: 1.0 | December 2024
 * 
 * Features:
 * 1. Diagnosis-linked essential questions
 * 2. "Questions You Should Have Asked" feedback
 * 3. History quality scoring with specific feedback
 * 4. Question coverage tracking
 * ============================================================================
 */

const HistoryFeedbackSystem = (function() {
    'use strict';

    // ========================================================================
    // DIAGNOSIS-LINKED ESSENTIAL QUESTIONS
    // These are questions that SHOULD be asked when a diagnosis is on the differential
    // ========================================================================
    
    const diagnosisQuestions = {
        
        // ===== CARDIAC =====
        "ACS": {
            essential: [
                { id: "cardiac_rf", text: "Cardiac risk factors (HTN, DM, smoking, family hx, cholesterol)", why: "Establishes pretest probability for ACS" },
                { id: "exertional", text: "Exertional component", why: "Classic angina is provoked by exertion" },
                { id: "radiation", text: "Radiation to arm, jaw, or back", why: "Radiation pattern typical of cardiac ischemia" },
                { id: "diaphoresis", text: "Associated diaphoresis", why: "Diaphoresis with chest pain is high-risk feature" },
                { id: "prior_cardiac", text: "Prior MI, stents, or cardiac history", why: "Prior CAD dramatically increases likelihood" }
            ],
            helpful: [
                { id: "nitro_response", text: "Response to nitroglycerin", why: "Relief with nitro suggests angina (though not specific)" },
                { id: "cocaine", text: "Recent cocaine use", why: "Cocaine causes coronary vasospasm" }
            ]
        },
        "Acute Coronary Syndrome": { aliasOf: "ACS" },
        "STEMI": { aliasOf: "ACS" },
        "NSTEMI": { aliasOf: "ACS" },
        "Unstable Angina": { aliasOf: "ACS" },
        
        "Pulmonary Embolism": {
            essential: [
                { id: "dvt_sx", text: "Leg swelling, pain, or redness", why: "DVT is source of most PEs" },
                { id: "immobility", text: "Recent immobility or bed rest", why: "Major VTE risk factor" },
                { id: "surgery", text: "Recent surgery", why: "Surgery is major VTE risk factor" },
                { id: "cancer", text: "Cancer history", why: "Malignancy is hypercoagulable state" },
                { id: "prior_vte", text: "Prior DVT or PE", why: "History of VTE is strongest risk factor" },
                { id: "travel", text: "Recent long travel (>4 hours)", why: "Prolonged immobility risk" }
            ],
            helpful: [
                { id: "ocp", text: "Birth control or hormone therapy", why: "Estrogen increases clot risk" },
                { id: "pleuritic", text: "Pleuritic chest pain", why: "Common PE presentation" },
                { id: "hemoptysis", text: "Hemoptysis", why: "Suggests pulmonary infarction" }
            ]
        },
        "PE": { aliasOf: "Pulmonary Embolism" },
        
        "Heart Failure": {
            essential: [
                { id: "orthopnea", text: "Orthopnea (trouble breathing lying flat)", why: "Specific for heart failure" },
                { id: "pnd", text: "Paroxysmal nocturnal dyspnea", why: "Classic HF symptom" },
                { id: "edema", text: "Leg swelling", why: "Sign of fluid overload" },
                { id: "weight_gain", text: "Recent weight gain", why: "Fluid retention" },
                { id: "med_compliance", text: "Medication compliance", why: "Non-adherence common cause of exacerbation" },
                { id: "salt", text: "Dietary indiscretion (salt intake)", why: "Common precipitant" }
            ]
        },
        "CHF": { aliasOf: "Heart Failure" },
        "ADHF": { aliasOf: "Heart Failure" },
        "Congestive Heart Failure": { aliasOf: "Heart Failure" },
        
        "Aortic Dissection": {
            essential: [
                { id: "tearing", text: "Tearing or ripping quality", why: "Classic description of dissection" },
                { id: "sudden_max", text: "Sudden, maximal onset", why: "Dissection is instantaneously severe" },
                { id: "back_rad", text: "Radiation to back", why: "Suggests aortic involvement" },
                { id: "htn_hx", text: "History of hypertension", why: "Major risk factor" },
                { id: "connective", text: "Connective tissue disorder history", why: "Marfan, Ehlers-Danlos increase risk" }
            ]
        },
        
        "Pericarditis": {
            essential: [
                { id: "positional", text: "Positional component (worse lying, better sitting forward)", why: "Classic for pericarditis" },
                { id: "pleuritic", text: "Pleuritic quality (worse with breathing)", why: "Common in pericarditis" },
                { id: "recent_viral", text: "Recent viral illness", why: "Viral pericarditis most common" },
                { id: "friction_rub", text: "Chest friction or scratching sensation", why: "Correlates with pericardial rub" }
            ]
        },
        
        // ===== NEUROLOGICAL =====
        "Stroke": {
            essential: [
                { id: "onset_time", text: "Exact time of symptom onset", why: "Critical for thrombolytic eligibility (4.5hr window)" },
                { id: "focal", text: "Focal neurological symptoms", why: "Defines stroke syndrome" },
                { id: "afib", text: "History of atrial fibrillation", why: "Major cause of cardioembolic stroke" },
                { id: "prior_stroke", text: "Prior stroke or TIA", why: "Increases risk" },
                { id: "anticoag", text: "Anticoagulant use", why: "Affects treatment options" }
            ],
            helpful: [
                { id: "last_known_well", text: "Last known well time", why: "May extend treatment window" },
                { id: "bp_meds", text: "Blood pressure medication use", why: "Affects acute management" }
            ]
        },
        "CVA": { aliasOf: "Stroke" },
        "TIA": { aliasOf: "Stroke" },
        
        "Subarachnoid Hemorrhage": {
            essential: [
                { id: "worst_ha", text: "Worst headache of life", why: "Classic SAH description" },
                { id: "thunderclap", text: "Thunderclap onset (maximal immediately)", why: "Pathognomonic for SAH" },
                { id: "neck_stiff", text: "Neck stiffness", why: "Meningismus from blood" },
                { id: "loc", text: "Loss of consciousness", why: "Indicates severity" },
                { id: "fam_aneurysm", text: "Family history of aneurysm", why: "Genetic component" }
            ],
            helpful: [
                { id: "sentinel", text: "Prior sentinel headache", why: "Warning leak" },
                { id: "exertional_onset", text: "Onset during exertion", why: "Common trigger" }
            ]
        },
        "SAH": { aliasOf: "Subarachnoid Hemorrhage" },
        
        "Meningitis": {
            essential: [
                { id: "fever", text: "Fever", why: "Part of classic triad" },
                { id: "neck_stiff", text: "Neck stiffness", why: "Meningismus" },
                { id: "ams", text: "Mental status changes", why: "Part of classic triad" },
                { id: "photophobia", text: "Photophobia", why: "Common meningitis symptom" },
                { id: "recent_uri", text: "Recent URI or ear infection", why: "Can spread to meninges" },
                { id: "immunocomp", text: "Immunocompromised state", why: "Risk for atypical organisms" }
            ]
        },
        
        "Migraine": {
            essential: [
                { id: "prior_ha", text: "Prior similar headaches", why: "Migraine is recurrent" },
                { id: "aura", text: "Visual or sensory aura", why: "Classic migraine feature" },
                { id: "nausea", text: "Nausea/vomiting", why: "Common migraine feature" },
                { id: "photophobia", text: "Light sensitivity", why: "Common migraine feature" },
                { id: "triggers", text: "Known triggers", why: "Helps confirm diagnosis" }
            ]
        },
        
        // ===== RESPIRATORY =====
        "Pneumonia": {
            essential: [
                { id: "cough", text: "Cough characteristics", why: "Productive cough suggests bacterial" },
                { id: "fever", text: "Fever", why: "Infection marker" },
                { id: "sputum", text: "Sputum production and color", why: "Purulent sputum suggests bacterial" },
                { id: "sick_contacts", text: "Sick contacts", why: "Suggests viral or contagious etiology" },
                { id: "smoking", text: "Smoking history", why: "Major risk factor" }
            ],
            helpful: [
                { id: "vaccination", text: "Pneumonia/flu vaccination status", why: "Affects likelihood of certain pathogens" },
                { id: "hospitalization", text: "Recent hospitalization", why: "Changes pathogen coverage (HCAP)" }
            ]
        },
        "CAP": { aliasOf: "Pneumonia" },
        "Community-Acquired Pneumonia": { aliasOf: "Pneumonia" },
        
        "COPD Exacerbation": {
            essential: [
                { id: "baseline", text: "Baseline functional status", why: "Determines severity of exacerbation" },
                { id: "rescue_use", text: "Rescue inhaler use frequency", why: "Indicates disease control" },
                { id: "steroids", text: "Recent steroid use", why: "Affects treatment" },
                { id: "prior_intubation", text: "Prior intubations", why: "Risk for severe exacerbation" },
                { id: "current_smoking", text: "Current smoking status", why: "Ongoing damage" },
                { id: "o2_home", text: "Home oxygen use", why: "Indicates severity" }
            ]
        },
        "COPD": { aliasOf: "COPD Exacerbation" },
        "AECOPD": { aliasOf: "COPD Exacerbation" },
        
        "Asthma Exacerbation": {
            essential: [
                { id: "triggers", text: "Identified triggers", why: "Guides prevention" },
                { id: "rescue_use", text: "Rescue inhaler frequency", why: "Disease control indicator" },
                { id: "controller", text: "Controller medication adherence", why: "Non-adherence common cause" },
                { id: "prior_icu", text: "Prior ICU admissions for asthma", why: "High-risk patient" },
                { id: "recent_steroids", text: "Recent steroid courses", why: "Indicates severity" }
            ]
        },
        "Asthma": { aliasOf: "Asthma Exacerbation" },
        
        // ===== GI =====
        "Appendicitis": {
            essential: [
                { id: "migration", text: "Pain migration (periumbilical to RLQ)", why: "Classic appendicitis pattern" },
                { id: "anorexia", text: "Anorexia", why: "Almost always present" },
                { id: "nv", text: "Nausea/vomiting", why: "Common associated symptom" },
                { id: "fever", text: "Fever", why: "Suggests inflammation/infection" },
                { id: "last_meal", text: "Time of last meal", why: "NPO status for surgery" }
            ]
        },
        
        "Cholecystitis": {
            essential: [
                { id: "fatty_food", text: "Relation to fatty food", why: "Classic trigger" },
                { id: "prior_episodes", text: "Prior similar episodes", why: "Suggests biliary colic history" },
                { id: "fever", text: "Fever", why: "Distinguishes cholecystitis from colic" },
                { id: "ruq", text: "RUQ pain characteristics", why: "Location is diagnostic" },
                { id: "jaundice", text: "Jaundice or dark urine", why: "Suggests choledocholithiasis" }
            ]
        },
        "Biliary Colic": { aliasOf: "Cholecystitis" },
        
        "Pancreatitis": {
            essential: [
                { id: "alcohol", text: "Alcohol use (quantity)", why: "Major cause" },
                { id: "gallstones", text: "Gallstone history", why: "Most common cause" },
                { id: "back_rad", text: "Radiation to back", why: "Classic for pancreatitis" },
                { id: "position", text: "Relief leaning forward", why: "Characteristic of pancreatic pain" },
                { id: "ercp", text: "Recent ERCP", why: "Iatrogenic cause" }
            ]
        },
        
        "GI Bleed": {
            essential: [
                { id: "stool", text: "Stool appearance (black/tarry vs bright red)", why: "Localizes upper vs lower" },
                { id: "hematemesis", text: "Vomiting blood", why: "Indicates upper GI source" },
                { id: "nsaids", text: "NSAID use", why: "Major cause of ulcers/bleeding" },
                { id: "anticoag", text: "Anticoagulant use", why: "Increases bleeding risk" },
                { id: "prior_bleed", text: "Prior GI bleeds", why: "Risk for recurrence" },
                { id: "liver", text: "Liver disease/varices history", why: "Variceal bleeding source" }
            ]
        },
        "UGIB": { aliasOf: "GI Bleed" },
        "LGIB": { aliasOf: "GI Bleed" },
        
        "Small Bowel Obstruction": {
            essential: [
                { id: "prior_surgery", text: "Prior abdominal surgery", why: "Adhesions are #1 cause" },
                { id: "vomiting", text: "Vomiting character (bilious/feculent)", why: "Indicates level of obstruction" },
                { id: "flatus", text: "Passing gas", why: "Obstipation suggests complete obstruction" },
                { id: "last_bm", text: "Last bowel movement", why: "Obstipation timing" },
                { id: "hernia", text: "Hernia history", why: "Can cause obstruction" }
            ]
        },
        "SBO": { aliasOf: "Small Bowel Obstruction" },
        "Bowel Obstruction": { aliasOf: "Small Bowel Obstruction" },
        
        // ===== INFECTIOUS =====
        "Sepsis": {
            essential: [
                { id: "source", text: "Possible source of infection (urinary, respiratory, skin, abdominal)", why: "Guides treatment" },
                { id: "fever", text: "Fever pattern and height", why: "Severity indicator" },
                { id: "ams", text: "Mental status changes", why: "Organ dysfunction marker" },
                { id: "uti_sx", text: "Urinary symptoms", why: "Common source" },
                { id: "resp_sx", text: "Respiratory symptoms", why: "Common source" },
                { id: "immunocomp", text: "Immunocompromised state", why: "Affects pathogens and severity" }
            ]
        },
        
        "UTI": {
            essential: [
                { id: "dysuria", text: "Dysuria (pain with urination)", why: "Cardinal symptom" },
                { id: "frequency", text: "Urinary frequency", why: "Common symptom" },
                { id: "hematuria", text: "Blood in urine", why: "Suggests UTI" },
                { id: "fever", text: "Fever", why: "Suggests pyelonephritis if present" },
                { id: "flank", text: "Flank pain", why: "Suggests upper tract (pyelo)" }
            ]
        },
        "Pyelonephritis": { aliasOf: "UTI" },
        
        // ===== SYNCOPE =====
        "Vasovagal Syncope": {
            essential: [
                { id: "prodrome", text: "Prodrome (warmth, nausea, tunnel vision)", why: "Classic for vasovagal" },
                { id: "trigger", text: "Trigger (standing, pain, blood draw)", why: "Identifies vasovagal pattern" },
                { id: "position", text: "Position when occurred", why: "Standing suggests orthostatic/vasovagal" },
                { id: "recovery", text: "Recovery time and symptoms", why: "Rapid recovery suggests benign" }
            ]
        },
        
        "Cardiac Syncope": {
            essential: [
                { id: "exertional", text: "Occurred during exertion", why: "Suggests structural heart disease" },
                { id: "palpitations", text: "Palpitations before syncope", why: "Suggests arrhythmia" },
                { id: "cardiac_hx", text: "Prior heart disease", why: "Risk factor for arrhythmia" },
                { id: "family_scd", text: "Family history of sudden cardiac death", why: "Suggests inherited arrhythmia" },
                { id: "no_warning", text: "No warning/prodrome", why: "Suggests arrhythmia" }
            ]
        },
        "Arrhythmia": { aliasOf: "Cardiac Syncope" },
        
        // ===== ENDOCRINE =====
        "DKA": {
            essential: [
                { id: "insulin", text: "Insulin use and compliance", why: "Omission is common cause" },
                { id: "infection", text: "Infection symptoms", why: "Common precipitant" },
                { id: "polyuria", text: "Polyuria/polydipsia", why: "Hyperglycemia symptoms" },
                { id: "nv", text: "Nausea/vomiting", why: "DKA symptoms" },
                { id: "abd_pain", text: "Abdominal pain", why: "Common in DKA" }
            ]
        },
        "Diabetic Ketoacidosis": { aliasOf: "DKA" },
        
        "HHS": {
            essential: [
                { id: "dm_type", text: "Type of diabetes", why: "HHS more common in Type 2" },
                { id: "hydration", text: "Fluid intake", why: "Dehydration major component" },
                { id: "infection", text: "Infection symptoms", why: "Common precipitant" },
                { id: "neuro_sx", text: "Neurological symptoms", why: "Common in HHS" },
                { id: "duration", text: "Duration of symptoms", why: "HHS develops over days" }
            ]
        },
        "Hyperosmolar Hyperglycemic State": { aliasOf: "HHS" },
        
        "Hypoglycemia": {
            essential: [
                { id: "dm_meds", text: "Diabetes medications (insulin, sulfonylureas)", why: "Most common cause in diabetics" },
                { id: "last_meal", text: "Last meal and timing", why: "Missed meal common cause" },
                { id: "tremor", text: "Tremor, sweating, palpitations", why: "Adrenergic symptoms" },
                { id: "confusion", text: "Confusion or altered behavior", why: "Neuroglycopenic symptoms" },
                { id: "exercise", text: "Recent exercise", why: "Can precipitate hypoglycemia" }
            ]
        },
        
        // ===== MUSCULOSKELETAL =====
        "Cauda Equina Syndrome": {
            essential: [
                { id: "saddle", text: "Saddle anesthesia", why: "Red flag - pathognomonic" },
                { id: "bowel_bladder", text: "Bowel/bladder dysfunction", why: "Red flag - emergency" },
                { id: "bilateral", text: "Bilateral leg symptoms", why: "Suggests central compression" },
                { id: "progressive", text: "Progressive weakness", why: "Indicates progression" },
                { id: "back_pain", text: "Severe back pain", why: "Often present" }
            ]
        },
        "CES": { aliasOf: "Cauda Equina Syndrome" },
        
        "Epidural Abscess": {
            essential: [
                { id: "back_pain", text: "Severe back pain", why: "Cardinal symptom" },
                { id: "fever", text: "Fever", why: "Infection indicator" },
                { id: "ivdu", text: "IV drug use", why: "Major risk factor" },
                { id: "neuro_deficit", text: "Neurological deficits", why: "Indicates cord compression" },
                { id: "recent_procedure", text: "Recent spinal procedure", why: "Risk factor" }
            ]
        }
    };

    // ========================================================================
    // OLDCARTS QUESTION CATEGORIES
    // ========================================================================
    
    const oldcartsCategories = {
        onset: ["when did", "how long", "when start", "started when", "began"],
        location: ["where", "location", "which part", "point to"],
        duration: ["how long does", "last for", "episode last", "duration"],
        character: ["what does it feel like", "describe", "type of", "quality", "sharp", "dull", "pressure"],
        aggravating: ["what makes it worse", "aggravate", "worsen", "triggers"],
        relieving: ["what makes it better", "relieve", "help", "improve"],
        timing: ["constant", "intermittent", "come and go", "pattern", "time of day"],
        severity: ["how bad", "scale of", "rate the", "1 to 10", "intensity"],
        associated: ["other symptoms", "along with", "also notice", "associated"]
    };

    // ========================================================================
    // QUESTION COVERAGE TRACKING
    // ========================================================================
    
    const coverageCategories = {
        oldcarts: {
            name: "OLDCARTS Elements",
            elements: ["onset", "location", "duration", "character", "aggravating", "relieving", "timing", "severity", "associated"]
        },
        socialHistory: {
            name: "Social History",
            elements: ["smoking", "alcohol", "drugs", "occupation", "living_situation"]
        },
        pmh: {
            name: "Past Medical History",
            elements: ["medical_history", "surgical_history", "hospitalizations"]
        },
        medications: {
            name: "Medications & Allergies",
            elements: ["current_medications", "allergies", "compliance"]
        },
        familyHistory: {
            name: "Family History",
            elements: ["family_history"]
        }
    };

    // ========================================================================
    // FUNCTIONS
    // ========================================================================

    /**
     * Resolve alias diagnoses to their parent definition
     */
    function resolveDiagnosis(diagnosisName) {
        const entry = diagnosisQuestions[diagnosisName];
        if (!entry) return null;
        if (entry.aliasOf) {
            return diagnosisQuestions[entry.aliasOf];
        }
        return entry;
    }

    /**
     * Get essential questions for a list of differential diagnoses
     */
    function getEssentialQuestionsForDifferential(differentialList) {
        const allQuestions = new Map(); // Use Map to avoid duplicates
        
        differentialList.forEach(dx => {
            const dxData = resolveDiagnosis(dx.name || dx);
            if (dxData && dxData.essential) {
                dxData.essential.forEach(q => {
                    if (!allQuestions.has(q.id)) {
                        allQuestions.set(q.id, {
                            ...q,
                            linkedDiagnoses: [dx.name || dx]
                        });
                    } else {
                        // Add this diagnosis to the linked list
                        allQuestions.get(q.id).linkedDiagnoses.push(dx.name || dx);
                    }
                });
            }
        });
        
        return Array.from(allQuestions.values());
    }

    /**
     * Check which questions were asked based on history
     */
    function checkQuestionsAsked(askedQuestions, essentialQuestions) {
        const results = {
            asked: [],
            missed: []
        };
        
        essentialQuestions.forEach(eq => {
            // Check if any asked question matches this essential question
            const wasAsked = askedQuestions.some(aq => {
                const qText = (aq.text || aq.question || aq).toLowerCase();
                const eqKeywords = eq.text.toLowerCase().split(/[\s,()\/]+/);
                
                // Check if question contains key terms
                return eqKeywords.some(keyword => 
                    keyword.length > 3 && qText.includes(keyword)
                );
            });
            
            if (wasAsked) {
                results.asked.push(eq);
            } else {
                results.missed.push(eq);
            }
        });
        
        return results;
    }

    /**
     * Categorize a question into OLDCARTS
     */
    function categorizeQuestion(questionText) {
        const q = questionText.toLowerCase();
        
        for (const [category, keywords] of Object.entries(oldcartsCategories)) {
            if (keywords.some(kw => q.includes(kw))) {
                return category;
            }
        }
        
        // Check for other categories
        if (q.includes("smoke") || q.includes("tobacco") || q.includes("cigarette")) return "smoking";
        if (q.includes("alcohol") || q.includes("drink") || q.includes("beer") || q.includes("wine")) return "alcohol";
        if (q.includes("drug") || q.includes("marijuana") || q.includes("cocaine")) return "drugs";
        if (q.includes("work") || q.includes("job") || q.includes("occupation")) return "occupation";
        if (q.includes("live") || q.includes("home") || q.includes("family")) return "living_situation";
        if (q.includes("medical history") || q.includes("conditions") || q.includes("diagnos")) return "medical_history";
        if (q.includes("surgery") || q.includes("operation")) return "surgical_history";
        if (q.includes("hospital")) return "hospitalizations";
        if (q.includes("medication") || q.includes("medicine") || q.includes("taking")) return "current_medications";
        if (q.includes("allerg")) return "allergies";
        if (q.includes("family") && (q.includes("history") || q.includes("anyone"))) return "family_history";
        
        return "other";
    }

    /**
     * Calculate coverage score
     */
    function calculateCoverageScore(askedQuestions) {
        const coverage = {};
        const categorizedQuestions = new Set();
        
        askedQuestions.forEach(q => {
            const category = categorizeQuestion(q.text || q.question || q);
            categorizedQuestions.add(category);
        });
        
        // Calculate OLDCARTS coverage
        const oldcartsAsked = coverageCategories.oldcarts.elements.filter(e => categorizedQuestions.has(e));
        coverage.oldcarts = {
            asked: oldcartsAsked.length,
            total: coverageCategories.oldcarts.elements.length,
            percentage: Math.round((oldcartsAsked.length / coverageCategories.oldcarts.elements.length) * 100),
            missing: coverageCategories.oldcarts.elements.filter(e => !categorizedQuestions.has(e))
        };
        
        // Calculate social history coverage
        const socialAsked = coverageCategories.socialHistory.elements.filter(e => categorizedQuestions.has(e));
        coverage.socialHistory = {
            asked: socialAsked.length,
            total: coverageCategories.socialHistory.elements.length,
            percentage: Math.round((socialAsked.length / coverageCategories.socialHistory.elements.length) * 100),
            missing: coverageCategories.socialHistory.elements.filter(e => !categorizedQuestions.has(e))
        };
        
        // Calculate PMH coverage
        const pmhAsked = coverageCategories.pmh.elements.filter(e => categorizedQuestions.has(e));
        coverage.pmh = {
            asked: pmhAsked.length,
            total: coverageCategories.pmh.elements.length,
            percentage: Math.round((pmhAsked.length / coverageCategories.pmh.elements.length) * 100),
            missing: coverageCategories.pmh.elements.filter(e => !categorizedQuestions.has(e))
        };
        
        // Calculate medications coverage
        const medsAsked = coverageCategories.medications.elements.filter(e => categorizedQuestions.has(e));
        coverage.medications = {
            asked: medsAsked.length,
            total: coverageCategories.medications.elements.length,
            percentage: Math.round((medsAsked.length / coverageCategories.medications.elements.length) * 100),
            missing: coverageCategories.medications.elements.filter(e => !categorizedQuestions.has(e))
        };
        
        // Family history
        coverage.familyHistory = {
            asked: categorizedQuestions.has("family_history") ? 1 : 0,
            total: 1,
            percentage: categorizedQuestions.has("family_history") ? 100 : 0,
            missing: categorizedQuestions.has("family_history") ? [] : ["family_history"]
        };
        
        return coverage;
    }

    /**
     * Generate comprehensive history feedback
     */
    function generateHistoryFeedback(askedQuestions, differential, variant) {
        const feedback = {
            essentialQuestions: { asked: [], missed: [] },
            coverage: {},
            score: 0,
            maxScore: 100,
            grade: "",
            strengths: [],
            improvements: [],
            detailedFeedback: []
        };
        
        // Get essential questions based on differential
        const essentialQuestions = getEssentialQuestionsForDifferential(differential);
        feedback.essentialQuestions = checkQuestionsAsked(askedQuestions, essentialQuestions);
        
        // Calculate coverage
        feedback.coverage = calculateCoverageScore(askedQuestions);
        
        // Calculate overall score
        let score = 0;
        
        // Essential questions (40% of score)
        if (essentialQuestions.length > 0) {
            score += (feedback.essentialQuestions.asked.length / essentialQuestions.length) * 40;
        } else {
            score += 40; // Full credit if no specific essentials
        }
        
        // OLDCARTS coverage (30% of score)
        score += (feedback.coverage.oldcarts.percentage / 100) * 30;
        
        // Social/PMH coverage (20% of score)
        const backgroundCoverage = (feedback.coverage.socialHistory.percentage + 
                                   feedback.coverage.pmh.percentage + 
                                   feedback.coverage.medications.percentage) / 3;
        score += (backgroundCoverage / 100) * 20;
        
        // Family history (10% of score)
        score += feedback.coverage.familyHistory.percentage * 0.1;
        
        feedback.score = Math.round(score);
        
        // Determine grade
        if (feedback.score >= 90) feedback.grade = "A";
        else if (feedback.score >= 80) feedback.grade = "B";
        else if (feedback.score >= 70) feedback.grade = "C";
        else if (feedback.score >= 60) feedback.grade = "D";
        else feedback.grade = "F";
        
        // Generate strengths
        if (feedback.coverage.oldcarts.percentage >= 80) {
            feedback.strengths.push("Excellent OLDCARTS coverage - you gathered comprehensive symptom details");
        }
        if (feedback.essentialQuestions.asked.length >= essentialQuestions.length * 0.8) {
            feedback.strengths.push("Asked most diagnosis-specific questions based on your differential");
        }
        if (feedback.coverage.socialHistory.percentage >= 80) {
            feedback.strengths.push("Thorough social history");
        }
        
        // Generate improvements
        if (feedback.coverage.oldcarts.percentage < 60) {
            feedback.improvements.push(`Incomplete OLDCARTS assessment - missed: ${feedback.coverage.oldcarts.missing.join(", ")}`);
        }
        if (feedback.essentialQuestions.missed.length > 0) {
            feedback.improvements.push("Missed key diagnosis-specific questions (see below)");
        }
        if (feedback.coverage.socialHistory.percentage < 50) {
            feedback.improvements.push("Consider more thorough social history (smoking, alcohol, occupation)");
        }
        if (feedback.coverage.familyHistory.percentage === 0) {
            feedback.improvements.push("Don't forget to ask about family history");
        }
        
        // Detailed feedback for missed essential questions
        feedback.essentialQuestions.missed.forEach(missed => {
            feedback.detailedFeedback.push({
                question: missed.text,
                why: missed.why,
                diagnoses: missed.linkedDiagnoses,
                type: "missed_essential"
            });
        });
        
        return feedback;
    }

    /**
     * Render feedback HTML
     */
    function renderFeedbackHTML(feedback) {
        let html = `
            <div class="history-feedback-container">
                <div class="feedback-header">
                    <h3>📋 History Taking Feedback</h3>
                    <div class="score-display">
                        <span class="score">${feedback.score}/100</span>
                        <span class="grade grade-${feedback.grade.toLowerCase()}">${feedback.grade}</span>
                    </div>
                </div>
                
                <div class="coverage-bars">
                    <div class="coverage-item">
                        <label>OLDCARTS</label>
                        <div class="progress-bar">
                            <div class="progress" style="width: ${feedback.coverage.oldcarts.percentage}%"></div>
                        </div>
                        <span>${feedback.coverage.oldcarts.asked}/${feedback.coverage.oldcarts.total}</span>
                    </div>
                    <div class="coverage-item">
                        <label>Social History</label>
                        <div class="progress-bar">
                            <div class="progress" style="width: ${feedback.coverage.socialHistory.percentage}%"></div>
                        </div>
                        <span>${feedback.coverage.socialHistory.asked}/${feedback.coverage.socialHistory.total}</span>
                    </div>
                    <div class="coverage-item">
                        <label>PMH</label>
                        <div class="progress-bar">
                            <div class="progress" style="width: ${feedback.coverage.pmh.percentage}%"></div>
                        </div>
                        <span>${feedback.coverage.pmh.asked}/${feedback.coverage.pmh.total}</span>
                    </div>
                    <div class="coverage-item">
                        <label>Medications</label>
                        <div class="progress-bar">
                            <div class="progress" style="width: ${feedback.coverage.medications.percentage}%"></div>
                        </div>
                        <span>${feedback.coverage.medications.asked}/${feedback.coverage.medications.total}</span>
                    </div>
                    <div class="coverage-item">
                        <label>Family History</label>
                        <div class="progress-bar">
                            <div class="progress" style="width: ${feedback.coverage.familyHistory.percentage}%"></div>
                        </div>
                        <span>${feedback.coverage.familyHistory.asked}/${feedback.coverage.familyHistory.total}</span>
                    </div>
                </div>`;
        
        // Strengths
        if (feedback.strengths.length > 0) {
            html += `<div class="feedback-section strengths">
                <h4>✅ Strengths</h4>
                <ul>${feedback.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
            </div>`;
        }
        
        // Areas for improvement
        if (feedback.improvements.length > 0) {
            html += `<div class="feedback-section improvements">
                <h4>📈 Areas for Improvement</h4>
                <ul>${feedback.improvements.map(i => `<li>${i}</li>`).join('')}</ul>
            </div>`;
        }
        
        // Missed essential questions
        if (feedback.essentialQuestions.missed.length > 0) {
            html += `<div class="feedback-section missed-questions">
                <h4>❓ Questions You Should Have Asked</h4>
                <div class="missed-list">`;
            
            feedback.essentialQuestions.missed.forEach(m => {
                html += `
                    <div class="missed-question-item">
                        <div class="question-text">"${m.text}"</div>
                        <div class="question-why">
                            <strong>Why:</strong> ${m.why}
                        </div>
                        <div class="question-dx">
                            <strong>Important for:</strong> ${m.linkedDiagnoses.join(", ")}
                        </div>
                    </div>`;
            });
            
            html += `</div></div>`;
        }
        
        // Asked essential questions
        if (feedback.essentialQuestions.asked.length > 0) {
            html += `<div class="feedback-section asked-questions">
                <h4>✅ Key Questions Asked</h4>
                <ul>${feedback.essentialQuestions.asked.map(a => `<li>${a.text}</li>`).join('')}</ul>
            </div>`;
        }
        
        html += `</div>`;
        return html;
    }

    // ========================================================================
    // PUBLIC API
    // ========================================================================
    
    return {
        getDiagnosisQuestions: (dx) => resolveDiagnosis(dx),
        getEssentialQuestionsForDifferential,
        checkQuestionsAsked,
        calculateCoverageScore,
        generateHistoryFeedback,
        renderFeedbackHTML,
        diagnosisQuestions // Expose for reference
    };
    
})();

// Export for Node.js if applicable
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HistoryFeedbackSystem;
}

console.log("✓ ReasonDx History Feedback System: Initialized");
