// ============================================================
// ReasonDx Dermatology Case Templates
// Based on UpToDate Clinical Guidelines
// ============================================================

const dermatologyCases = [
    // ==================== CELLULITIS/ERYSIPELAS ====================
    {
        id: "cellulitis-erysipelas",
        title: "Red, Swollen Leg",
        category: "Dermatology",
        icon: "🦵",
        difficulty: "foundational",
        urgency: "urgent",
        guidelineReferences: [
            {
                name: "IDSA Skin and Soft Tissue Infection Guidelines 2014",
                citation: "Stevens DL, et al. Clin Infect Dis. 2014;59:147-159",
                keyPoints: [
                    "Beta-hemolytic streptococci and S. aureus are the most common pathogens",
                    "Purulent cellulitis requires MRSA coverage; non-purulent usually does not",
                    "Duration typically 5-6 days for uncomplicated cellulitis",
                    "Elevation of affected limb is critical adjunctive treatment",
                    "Red-flag findings warrant hospitalization (fever, rapid progression, sepsis)"
                ],
                url: "https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/"
            },
            {
                name: "UpToDate: Cellulitis and Erysipelas Treatment",
                citation: "Baddour LM. UpToDate 2025",
                keyPoints: [
                    "Erysipelas has raised, sharply demarcated borders vs. cellulitis",
                    "Consider necrotizing fasciitis if pain out of proportion or rapid spread",
                    "MRSA coverage if: purulent drainage, known colonization, IV drug use, sepsis",
                    "Compression therapy prevents recurrence in lymphedema patients"
                ]
            }
        ],
        
        variants: {
            "male-58-nonpurulent": {
                name: "R.T.",
                age: 58,
                gender: "male",
                chiefComplaint: "My leg is red, swollen, and hot for 3 days",
                patientProfile: {
                    smokingStatus: 'former',
                    alcoholUse: 'moderate',
                    drugUse: 'none',
                    occupation: 'construction',
                    livingStatus: 'withFamily',
                    pmhCategory: 'diabetes',
                    allergyType: 'penicillin-mild',
                    surgicalHistory: 'none',
                    familyHistoryType: 'diabetes'
                },
                variantDescription: "Non-purulent cellulitis requiring differentiation from DVT",
                
                vitalSigns: {
                    BP: "142/88",
                    HR: 92,
                    RR: 16,
                    Temp: "101.2°F",
                    SpO2: "98%"
                },
                
                missedConsequences: {
                    "Cellulitis": "Untreated cellulitis progresses to sepsis, abscess formation, or necrotizing infection.",
                    "Necrotizing Fasciitis": "Mortality 25-35% even with treatment. Delay in surgery dramatically increases death rate.",
                    "Deep Vein Thrombosis": "Unilateral leg swelling and warmth can be DVT presenting as 'cellulitis' - PE risk.",
                    "Sepsis": "Cellulitis with systemic signs progresses rapidly without IV antibiotics."
                },
                
                commonPitfalls: [
                    "Not recognizing 'red flags' that warrant hospitalization",
                    "Missing necrotizing fasciitis - pain out of proportion to exam",
                    "Assuming all leg redness is cellulitis without considering DVT",
                    "Prescribing MRSA coverage when not indicated (increases C. diff risk)",
                    "Too-short antibiotic course leading to recurrence",
                    "Not identifying and treating the entry point (tinea pedis, intertrigo)",
                    "Failing to elevate the leg as adjunctive treatment"
                ],
                
                mcqs: [
                    {
                        id: "mcq1",
                        timing: "after-history",
                        question: "A 58-year-old diabetic man presents with unilateral lower leg erythema, warmth, and swelling. Temperature is 101.2°F. Which feature would MOST increase your suspicion for necrotizing fasciitis?",
                        options: [
                            { text: "Fever above 100.5°F", correct: false, explanation: "Fever is common in simple cellulitis. Not specific for necrotizing infection." },
                            { text: "Pain out of proportion to physical findings", correct: true, explanation: "Pain DISPROPORTIONATE to exam findings is a hallmark of necrotizing fasciitis. The infection destroys nerves before visible skin changes occur." },
                            { text: "Unilateral involvement", correct: false, explanation: "Both cellulitis and necrotizing fasciitis are typically unilateral. Not a distinguishing feature." },
                            { text: "History of diabetes", correct: false, explanation: "Diabetes is a risk factor for both conditions, but doesn't distinguish between them." }
                        ]
                    },
                    {
                        id: "mcq2",
                        timing: "after-exam",
                        question: "The patient has non-purulent cellulitis without systemic toxicity. He has a history of 'mild' penicillin allergy (rash as a child). What is the most appropriate antibiotic choice?",
                        options: [
                            { text: "Trimethoprim-sulfamethoxazole alone", correct: false, explanation: "TMP-SMX has unreliable streptococcal coverage. Not appropriate for non-purulent cellulitis where streptococci are the primary pathogen." },
                            { text: "Cephalexin", correct: true, explanation: "Mild penicillin allergy (non-anaphylactic) does not preclude cephalosporin use. Cephalexin covers both strep and MSSA - first-line for non-purulent cellulitis." },
                            { text: "Vancomycin IV", correct: false, explanation: "Vancomycin is reserved for severe infection, MRSA risk factors, or true beta-lactam allergy. Overuse promotes resistance." },
                            { text: "Clindamycin alone", correct: false, explanation: "Clindamycin is an alternative, but rising resistance rates (26% of GAS, 47% of MRSA) limit its utility. Reserve for confirmed beta-lactam allergy." }
                        ]
                    },
                    {
                        id: "mcq3",
                        timing: "after-workup",
                        question: "After 48 hours of appropriate antibiotics, the patient's erythema has spread slightly beyond the initial borders. He is afebrile and feels better. What is the best next step?",
                        options: [
                            { text: "Switch to broader antibiotic coverage", correct: false, explanation: "Clinical improvement (afebrile, feels better) indicates response. Early erythema spread can occur as the infection resolves." },
                            { text: "Continue current antibiotics and reassess", correct: true, explanation: "Visible skin improvement takes 72+ hours. If systemic symptoms improved, continue therapy. Early 'spread' is often resolution of inflammation, not worsening infection." },
                            { text: "Urgent surgical consultation", correct: false, explanation: "Surgery indicated for necrotizing infection or abscess - neither present. Clinical improvement argues against surgical emergency." },
                            { text: "Obtain blood cultures", correct: false, explanation: "Blood cultures rarely change management in uncomplicated cellulitis and are low-yield. The patient is improving clinically." }
                        ]
                    }
                ],
                
                allDiagnoses: [
                    { name: "Cellulitis", correctCategory: "most-likely", rationale: "Unilateral erythema, warmth, swelling with fever. Entry point (tinea pedis) identified. Classic presentation." },
                    { name: "Erysipelas", correctCategory: "likely", rationale: "Overlaps with cellulitis. Would have sharply raised borders - examine closely." },
                    { name: "Deep Vein Thrombosis", correctCategory: "must-not-miss", rationale: "Unilateral leg swelling and warmth. Must exclude if no clear entry point or atypical features." },
                    { name: "Necrotizing Fasciitis", correctCategory: "must-not-miss", rationale: "Pain out of proportion, rapid spread, bullae, crepitus = surgical emergency." },
                    { name: "Septic Arthritis", correctCategory: "must-not-miss", rationale: "If erythema overlies a joint with restricted motion, rule out septic joint." },
                    { name: "Stasis Dermatitis", correctCategory: "less-likely", rationale: "Chronic bilateral discoloration with edema. Not acute, not usually febrile." },
                    { name: "Contact Dermatitis", correctCategory: "less-likely", rationale: "Would be pruritic, vesicular, with clear exposure history. Not usually febrile." }
                ],
                
                oldcartsNarrative: `"My left leg started getting red about 3 days ago. It's been spreading - started near my ankle and now it's up to mid-calf. It's hot to the touch and swollen. The pain is maybe 6 out of 10. I noticed it after I scratched at some cracked skin between my toes - I've had athlete's foot for years that I haven't really treated. I've had fevers at night, maybe around 101. I feel tired and a bit achy. I'm diabetic and take metformin. I had a 'reaction' to penicillin as a kid - got a rash - but haven't taken it since."`,
                
                historyQuestions: [
                    { id: "onset", text: "When exactly did you first notice the redness?",
                      answer: "About 3 days ago. It started as a small red patch near my ankle and has been spreading upward.",
                      tier: "essential", linkedDx: ["Cellulitis", "Erysipelas"],
                      reasoning: "Timeline of 2-5 days is typical for cellulitis. Rapid spread (<24 hours) would raise concern for necrotizing infection." },
                    
                    { id: "entry_point", text: "Was there any break in the skin before this started?",
                      answer: "I've had cracked, itchy skin between my toes for months. I scratched at it pretty hard a few days before the redness started.",
                      tier: "essential", linkedDx: ["Cellulitis"],
                      reasoning: "Tinea pedis is the most common entry point for lower extremity cellulitis. Treating it prevents recurrence." },
                    
                    { id: "pain_character", text: "Describe the pain - is it proportional to how it looks?",
                      answer: "It hurts where it's red, about 6 out of 10. Hurts more when I walk or touch it.",
                      tier: "essential", linkedDx: ["Cellulitis", "Necrotizing Fasciitis"],
                      reasoning: "Pain PROPORTIONATE to findings = cellulitis. Pain OUT OF PROPORTION = red flag for necrotizing fasciitis." },
                    
                    { id: "fever_chills", text: "Have you had fevers or chills?",
                      answer: "Yes, fevers at night around 101. Had some chills yesterday.",
                      tier: "essential", linkedDx: ["Cellulitis", "Sepsis"],
                      reasoning: "Fever >100.5°F indicates systemic response. With tachycardia, may warrant IV antibiotics." },
                    
                    { id: "spread_rate", text: "How quickly has the redness been spreading?",
                      answer: "Slowly over 3 days. Maybe an inch or two per day. It hasn't exploded or anything.",
                      tier: "essential", linkedDx: ["Cellulitis", "Necrotizing Fasciitis"],
                      reasoning: "Gradual spread = typical cellulitis. Doubling in 24 hours = consider necrotizing fasciitis." },
                    
                    { id: "diabetes_control", text: "How is your diabetes control?",
                      answer: "Not great. My last A1c was 9.2. I take metformin but I'm not very careful with diet.",
                      tier: "helpful", linkedDx: ["Cellulitis"],
                      reasoning: "Poor glycemic control impairs immune function and wound healing. May need tighter management during infection." },
                    
                    { id: "prior_episodes", text: "Have you had this before?",
                      answer: "I had something similar two years ago on the same leg. Took antibiotics and it cleared up.",
                      tier: "helpful", linkedDx: ["Cellulitis"],
                      reasoning: "Recurrent cellulitis suggests persistent risk factors (lymphedema, venous insufficiency, untreated tinea)." },
                    
                    { id: "recent_immobility", text: "Any recent prolonged sitting, travel, or immobility?",
                      answer: "No long trips. I'm on my feet at work most of the day.",
                      tier: "essential", linkedDx: ["Deep Vein Thrombosis"],
                      reasoning: "Immobility is DVT risk factor. Must consider DVT in unilateral leg swelling." },
                    
                    { id: "allergies", text: "Tell me more about your penicillin reaction.",
                      answer: "I was maybe 8 years old. Developed a rash while taking penicillin for strep throat. No trouble breathing or swelling.",
                      tier: "essential", linkedDx: ["Cellulitis"],
                      reasoning: "Remote childhood rash is LOW-RISK. 90% of 'penicillin allergic' patients can safely take cephalosporins." }
                ],
                
                physicalExamFindings: [
                    { id: "vitals_review", text: "Review vital signs", category: "Vitals",
                      finding: "BP 142/88, HR 92, RR 16, Temp 101.2°F, SpO2 98%. Mild tachycardia with fever.",
                      tier: "essential", linkedDx: ["Cellulitis", "Sepsis"],
                      reasoning: "Fever + tachycardia = systemic inflammatory response. Monitor for sepsis criteria." },
                    
                    { id: "leg_inspection", text: "Inspect the affected leg", category: "Extremities",
                      finding: "Left lower leg: diffuse erythema from ankle to mid-calf. Borders INDISTINCT, not raised. Moderate edema with pitting. Warmth significantly increased compared to right leg.",
                      tier: "essential", linkedDx: ["Cellulitis"],
                      reasoning: "INDISTINCT borders = cellulitis. RAISED, sharply demarcated borders = erysipelas." },
                    
                    { id: "skin_changes", text: "Look for bullae, crepitus, or skin necrosis", category: "Skin",
                      finding: "No bullae. No skin necrosis or purple/dusky discoloration. No crepitus on palpation.",
                      tier: "essential", linkedDx: ["Necrotizing Fasciitis"],
                      reasoning: "Absence of bullae, necrosis, and crepitus argues AGAINST necrotizing fasciitis." },
                    
                    { id: "pain_assessment", text: "Assess pain with palpation", category: "Extremities",
                      finding: "Tender to palpation throughout erythematous area. Pain PROPORTIONATE to visible inflammation. No exquisite tenderness beyond red area.",
                      tier: "essential", linkedDx: ["Cellulitis", "Necrotizing Fasciitis"],
                      reasoning: "Pain proportionate to exam = reassuring for simple cellulitis." },
                    
                    { id: "toe_webs", text: "Examine toe web spaces", category: "Skin",
                      finding: "Macerated, fissured skin in 3rd and 4th toe web spaces bilaterally. Scaling on plantar surface. Classic tinea pedis.",
                      tier: "essential", linkedDx: ["Cellulitis"],
                      reasoning: "TINEA PEDIS is the entry point! Must treat to prevent recurrence." },
                    
                    { id: "lymph_nodes", text: "Palpate inguinal lymph nodes", category: "Lymph",
                      finding: "Left inguinal lymph nodes mildly enlarged and tender. Right side normal.",
                      tier: "helpful", linkedDx: ["Cellulitis"],
                      reasoning: "Regional lymphadenopathy supports infectious etiology." },
                    
                    { id: "joint_exam", text: "Examine ankle and knee joints", category: "Musculoskeletal",
                      finding: "Ankle: full ROM, no joint effusion, pain from overlying cellulitis only. Knee: normal.",
                      tier: "essential", linkedDx: ["Septic Arthritis"],
                      reasoning: "No joint effusion or restricted ROM - septic arthritis unlikely." },
                    
                    { id: "peripheral_pulses", text: "Check peripheral pulses", category: "Vascular",
                      finding: "Dorsalis pedis and posterior tibial pulses 2+ bilaterally. No signs of arterial insufficiency.",
                      tier: "helpful", linkedDx: ["Cellulitis"],
                      reasoning: "Good perfusion. Arterial disease would impair antibiotic delivery and healing." },
                    
                    { id: "calf_tenderness", text: "Assess for DVT signs", category: "Vascular",
                      finding: "Calf tenderness diffuse throughout cellulitic area. No focal calf tenderness or cord. Homans sign negative (though unreliable).",
                      tier: "essential", linkedDx: ["Deep Vein Thrombosis"],
                      reasoning: "DVT presents with focal calf tenderness, often without overlying skin changes. Diffuse tenderness in cellulitis." }
                ],
                
                workupOptions: {
                    labs: [
                        { id: "no_labs_simple", name: "Clinical diagnosis - no labs needed for uncomplicated cellulitis",
                          result: "Uncomplicated cellulitis is a CLINICAL diagnosis. Labs rarely change management in mild-moderate cases.",
                          tier: "essential", reasoning: "For simple, non-purulent cellulitis in immunocompetent patient, blood tests are not routinely indicated." },
                        { id: "cbc_cmp", name: "CBC and BMP",
                          result: "WBC 14,200 (slight elevation), BMP normal including glucose 156, creatinine 1.0",
                          tier: "helpful", reasoning: "Mild leukocytosis common. Check glucose/renal function in diabetics (affects antibiotic choice and dosing)." },
                        { id: "blood_cultures", name: "Blood cultures",
                          result: "Low yield in uncomplicated cellulitis - positive in only 2-4% of cases",
                          tier: "less-helpful", reasoning: "Blood cultures indicated only for: sepsis, immunocompromise, or atypical presentations. Low yield otherwise." },
                        { id: "crp_esr", name: "CRP and ESR",
                          result: "CRP 8.4 (elevated), ESR 42 (elevated)",
                          tier: "less-helpful", reasoning: "Non-specific inflammatory markers. Don't distinguish cellulitis from other causes. Not routinely needed." }
                    ],
                    imaging: [
                        { id: "none_needed", name: "No imaging needed for typical cellulitis",
                          result: "Clinical examination sufficient for diagnosis. Imaging does not confirm or exclude cellulitis.",
                          tier: "essential", reasoning: "Cellulitis is a clinical diagnosis. Imaging indicated only if: abscess suspected, necrotizing infection suspected, or DVT in differential." },
                        { id: "ultrasound_dvt", name: "Venous duplex ultrasound (if DVT concern)",
                          result: "No deep vein thrombosis. Superficial edema consistent with cellulitis.",
                          tier: "helpful", reasoning: "Order if: unilateral swelling without clear entry point, no fever, atypical features, or DVT risk factors." },
                        { id: "ct_nec_fasc", name: "CT soft tissue (if necrotizing fasciitis suspected)",
                          result: "Would show: gas in soft tissue, fascial thickening, lack of enhancement = emergency surgery",
                          tier: "essential", reasoning: "CT can show gas (50% sensitive) but SHOULD NOT DELAY SURGERY if clinical suspicion is high." }
                    ],
                    procedures: [
                        { id: "mark_borders", name: "Mark erythema borders with skin marker",
                          result: "Borders outlined with indelible marker to monitor progression objectively",
                          tier: "essential", reasoning: "Marking borders allows objective monitoring of response. Essential for inpatient management." },
                        { id: "wound_culture", name: "Culture any drainage or wound",
                          result: "In this case: no purulent drainage to culture. For purulent cellulitis: Gram stain and culture guide therapy.",
                          tier: "helpful", reasoning: "Culture purulent material if present. Helps identify MRSA vs MSSA for targeted therapy." },
                        { id: "aspirate_culture", name: "Needle aspiration for culture",
                          result: "Not indicated for non-purulent cellulitis - yield is very low (<5%)",
                          tier: "less-helpful", reasoning: "Leading edge aspiration has poor yield. Not recommended for routine cellulitis." }
                    ],
                    treatments: [
                        { id: "cephalexin", name: "Cephalexin 500mg PO QID x 5-7 days",
                          result: "First-line for non-purulent cellulitis in penicillin-allergic patient (mild reaction). Covers strep and MSSA.",
                          tier: "essential", reasoning: "Remote mild penicillin allergy allows cephalosporin use. Cephalexin is first-line for non-purulent cellulitis." },
                        { id: "dicloxacillin", name: "Dicloxacillin 500mg PO QID x 5-7 days",
                          result: "Narrow-spectrum beta-lactam. Excellent for strep and MSSA coverage.",
                          tier: "essential", reasoning: "Alternative to cephalexin if no beta-lactam allergy. Four times daily dosing limits adherence." },
                        { id: "tmp_smx", name: "TMP-SMX DS 1-2 tabs PO BID",
                          result: "Good MRSA coverage but UNRELIABLE strep coverage. NOT appropriate for non-purulent cellulitis alone.",
                          tier: "less-helpful", reasoning: "TMP-SMX lacks reliable streptococcal coverage. Only use if MRSA suspected (purulent) or in combination." },
                        { id: "elevation", name: "Leg elevation above heart level",
                          result: "Essential adjunctive treatment. Reduces edema, improves antibiotic penetration.",
                          tier: "essential", reasoning: "Elevation CRITICAL for response. Instruct: heel above knee, knee above hip. Edema impairs antibiotic delivery." },
                        { id: "tinea_treatment", name: "Topical antifungal for tinea pedis",
                          result: "Terbinafine 1% cream BID to toe webs x 2-4 weeks. Prevents cellulitis recurrence.",
                          tier: "essential", reasoning: "MUST treat entry point to prevent recurrence. Tinea pedis is #1 risk factor for recurrent cellulitis." }
                    ]
                },
                
                expertReasoning: {
                    keyObservations: [
                        "Unilateral lower extremity with INDISTINCT borders = cellulitis (not erysipelas)",
                        "Clear entry point (tinea pedis) - essential to identify and treat",
                        "Pain PROPORTIONATE to exam - argues against necrotizing fasciitis",
                        "No bullae, necrosis, crepitus - low suspicion for necrotizing infection",
                        "Fever + tachycardia but no hypotension or altered mental status - not septic"
                    ],
                    differentialNarrowing: [
                        "Erysipelas - would have RAISED, sharply demarcated borders",
                        "DVT - no focal cord, clear skin changes present, entry point identified",
                        "Necrotizing fasciitis - pain proportionate, no gas, stable - can treat as cellulitis with close monitoring"
                    ],
                    criticalDecisionPoints: [
                        "Mild childhood penicillin rash is NOT a contraindication to cephalosporins",
                        "Non-purulent = strep-predominant → cephalexin adequate (no MRSA coverage needed)",
                        "Mark borders to objectively monitor progression",
                        "Treat tinea pedis to prevent recurrence"
                    ],
                    teachingPoints: [
                        "INDISTINCT borders = cellulitis; RAISED, sharp borders = erysipelas",
                        "Pain OUT OF PROPORTION to exam = necrotizing fasciitis until proven otherwise",
                        "Non-purulent cellulitis: strep + MSSA coverage (cephalexin). MRSA coverage NOT needed.",
                        "Purulent cellulitis/abscess: ADD MRSA coverage (TMP-SMX or doxycycline)",
                        "90% of 'penicillin-allergic' patients safely tolerate cephalosporins",
                        "ELEVATION is therapeutic - reduces edema, improves antibiotic penetration",
                        "Most common entry point: tinea pedis. ALWAYS examine toe webs.",
                        "Skin improvement takes 72+ hours. Early 'spread' with clinical improvement = continue therapy."
                    ]
                },
                
                closureScript: {
                    diagnosis: "You have cellulitis - a bacterial skin infection of your lower leg. The bacteria got in through the cracked skin from your athlete's foot. This is very common, especially in diabetics.",
                    plan: "I'm prescribing cephalexin antibiotic for 7 days - take it four times daily. Critically important: keep your leg elevated above your heart as much as possible. I'm also giving you antifungal cream for the athlete's foot between your toes - use it twice daily for 4 weeks even after this heals. The athlete's foot is how the bacteria got in, and treating it prevents this from happening again.",
                    warningsToDiscuss: "Come back or go to the ER if: the redness spreads rapidly (doubling in a day), you develop purple/black skin, blisters, increasing pain that seems worse than it looks, fever over 102, or you feel confused or very weak. These would suggest a more serious infection.",
                    addressingConcerns: "I know you said you're allergic to penicillin, but the rash you had as a child is a mild allergy that doesn't prevent you from taking cephalexin, which is related but different. Cephalexin is the best antibiotic for this type of infection."
                },
                
                clinicalPearl: "The mnemonic for necrotizing fasciitis red flags: 'STOMP' - Swelling extending beyond erythema, Tachycardia out of proportion, Out-of-proportion pain, Mottled/dusky skin, Palpable crepitus. If any present, get surgical evaluation STAT."
            },
            
            "female-72-erysipelas": {
                name: "M.S.",
                age: 72,
                gender: "female",
                chiefComplaint: "Bright red patch on my face spreading over 2 days",
                patientProfile: {
                    smokingStatus: 'never',
                    alcoholUse: 'none',
                    drugUse: 'none',
                    occupation: 'retired',
                    livingStatus: 'alone',
                    pmhCategory: 'hypertension',
                    allergyType: 'none',
                    surgicalHistory: 'mastectomy',
                    familyHistoryType: 'noSignificant'
                },
                variantDescription: "Classic facial erysipelas with raised borders",
                
                vitalSigns: {
                    BP: "148/86",
                    HR: 88,
                    RR: 14,
                    Temp: "102.4°F",
                    SpO2: "97%"
                },
                
                missedConsequences: {
                    "Erysipelas": "Untreated spreads to deeper tissues. Facial involvement can lead to cavernous sinus thrombosis.",
                    "Cellulitis": "Similar consequences - systemic spread.",
                    "Orbital Cellulitis": "Facial infection can extend to orbit causing vision loss, cavernous sinus thrombosis, brain abscess."
                },
                
                commonPitfalls: [
                    "Not recognizing erysipelas vs cellulitis distinction",
                    "Missing orbital involvement with facial infections",
                    "Not asking about post-mastectomy lymphedema (predisposes to arm cellulitis)",
                    "Underestimating severity of facial infections",
                    "Not considering cavernous sinus thrombosis with medial facial infections"
                ],
                
                allDiagnoses: [
                    { name: "Erysipelas", correctCategory: "most-likely", rationale: "Classic: RAISED, sharply demarcated border, bright red, facial location, high fever." },
                    { name: "Cellulitis", correctCategory: "likely", rationale: "Overlaps with erysipelas. Would have indistinct, non-raised borders." },
                    { name: "Orbital/Periorbital Cellulitis", correctCategory: "must-not-miss", rationale: "Must assess eye involvement - can cause vision loss." },
                    { name: "Herpes Zoster", correctCategory: "must-not-miss", rationale: "Facial vesicles in dermatomal pattern - different from erysipelas." },
                    { name: "Contact Dermatitis", correctCategory: "less-likely", rationale: "Would be pruritic, have vesicles, exposure history. Not febrile." }
                ],
                
                oldcartsNarrative: `"Two days ago I noticed a red area on my left cheek. It's been spreading and now covers most of that side of my face. It's bright red with a very distinct edge - almost looks like someone drew a line. It's hot and tight. I've had fever and chills since yesterday. I scratched a mosquito bite on my cheek about 4 days ago. I had breast cancer 10 years ago with mastectomy on the left side."`,
                
                historyQuestions: [
                    { id: "onset", text: "When did you first notice this?",
                      answer: "Two days ago. Started as a small red patch and has been spreading quickly.",
                      tier: "essential", linkedDx: ["Erysipelas"],
                      reasoning: "Erysipelas spreads rapidly - typically over hours to days." },
                    
                    { id: "appearance", text: "Describe exactly what it looks like.",
                      answer: "It's bright red - almost fiery. There's a very clear edge where normal skin meets the red area. The red part is slightly raised compared to normal skin.",
                      tier: "essential", linkedDx: ["Erysipelas"],
                      reasoning: "RAISED, sharply demarcated border = erysipelas (superficial infection involving lymphatics)." },
                    
                    { id: "entry_point", text: "Was there any break in the skin beforehand?",
                      answer: "I scratched a mosquito bite on my cheek about 4 days ago. It bled a little.",
                      tier: "essential", linkedDx: ["Erysipelas"],
                      reasoning: "Minor trauma is common entry point for streptococcal erysipelas." },
                    
                    { id: "eye_involvement", text: "Any changes in your vision or eye swelling?",
                      answer: "My left eye is a little puffy but I can see fine. No double vision or pain moving my eye.",
                      tier: "essential", linkedDx: ["Orbital Cellulitis", "Periorbital Cellulitis"],
                      reasoning: "Eye involvement with facial infection = urgent evaluation. Orbital cellulitis threatens vision." },
                    
                    { id: "systemic_symptoms", text: "Any other symptoms?",
                      answer: "High fever since yesterday, chills, I feel pretty awful. Tired and achy.",
                      tier: "essential", linkedDx: ["Erysipelas"],
                      reasoning: "Erysipelas typically causes more systemic toxicity than cellulitis." },
                    
                    { id: "mastectomy", text: "Tell me about your breast cancer history.",
                      answer: "Left mastectomy with lymph node dissection 10 years ago. My left arm swells sometimes.",
                      tier: "helpful", linkedDx: ["Cellulitis"],
                      reasoning: "Lymphedema from mastectomy predisposes to recurrent cellulitis of arm. Important for future counseling." }
                ],
                
                physicalExamFindings: [
                    { id: "facial_inspection", text: "Inspect the affected area", category: "Skin",
                      finding: "Left cheek: BRIGHT RED plaque with RAISED, SHARPLY DEMARCATED border. 'Cliff-drop' edge. Covers cheek from nose to preauricular area, extending to lower eyelid margin.",
                      tier: "essential", linkedDx: ["Erysipelas"],
                      reasoning: "RAISED border with sharp demarcation is PATHOGNOMONIC for erysipelas." },
                    
                    { id: "eye_exam", text: "Examine the eye and periorbital region", category: "Eyes",
                      finding: "Left eyelid: mild edema, erythema extending to lid margin. Eye: conjunctiva clear, pupils equal and reactive, extraocular movements full without pain, vision intact.",
                      tier: "essential", linkedDx: ["Periorbital Cellulitis", "Orbital Cellulitis"],
                      reasoning: "PRESEPTAL (periorbital) - lid edema but vision intact, EOM normal. ORBITAL - proptosis, painful EOM, vision changes." },
                    
                    { id: "entry_wound", text: "Look for entry point", category: "Skin",
                      finding: "Small healing excoriation on left cheek within the erythematous area - prior mosquito bite.",
                      tier: "essential", linkedDx: ["Erysipelas"],
                      reasoning: "Identifies source of bacterial entry." },
                    
                    { id: "lymph_nodes", text: "Check cervical lymph nodes", category: "Lymph",
                      finding: "Left submandibular and anterior cervical lymph nodes enlarged and tender.",
                      tier: "helpful", linkedDx: ["Erysipelas"],
                      reasoning: "Regional lymphadenopathy common with erysipelas." }
                ],
                
                workupOptions: {
                    labs: [
                        { id: "clinical_dx", name: "Clinical diagnosis - labs not required",
                          result: "Erysipelas is diagnosed clinically by appearance. No lab confirms or excludes it.",
                          tier: "essential", reasoning: "Classic appearance is diagnostic. Labs don't change management." }
                    ],
                    imaging: [
                        { id: "ct_orbit", name: "CT orbits if orbital cellulitis suspected",
                          result: "Not indicated here - exam consistent with preseptal involvement only (lid edema, intact vision and EOM).",
                          tier: "helpful", reasoning: "CT orbit indicated if: proptosis, painful EOM, vision changes, or unable to examine." }
                    ],
                    treatments: [
                        { id: "penicillin_v", name: "Penicillin V 500mg PO QID x 5-7 days",
                          result: "First-line for erysipelas. GAS is primary pathogen and uniformly penicillin-sensitive.",
                          tier: "essential", reasoning: "Erysipelas is streptococcal - penicillin is narrow-spectrum and effective." },
                        { id: "amoxicillin", name: "Amoxicillin 875mg PO BID x 5-7 days",
                          result: "Alternative with better bioavailability and twice-daily dosing.",
                          tier: "essential", reasoning: "More convenient than penicillin V QID. Equally effective." },
                        { id: "ceftriaxone", name: "Ceftriaxone 1-2g IV daily (if severe)",
                          result: "For patients requiring IV therapy - convenient once-daily dosing.",
                          tier: "helpful", reasoning: "This patient has high fever and facial involvement - consider IV initiation then oral step-down." }
                    ]
                },
                
                expertReasoning: {
                    keyObservations: [
                        "RAISED, sharply demarcated border = erysipelas (not cellulitis)",
                        "Facial location with high fever - needs close monitoring",
                        "Eye involvement limited to preseptal (lid edema only) - not orbital cellulitis"
                    ],
                    teachingPoints: [
                        "Erysipelas = SUPERFICIAL dermis + lymphatics. Classic 'fiery red' with raised, cliff-drop border.",
                        "Cellulitis = DEEPER dermis + subcutaneous fat. Indistinct borders, not raised.",
                        "Both primarily streptococcal - penicillin-class antibiotics are first-line.",
                        "Facial infections: ALWAYS assess for orbital involvement. CT orbit if any concern.",
                        "Medial facial infections can spread to cavernous sinus - life-threatening."
                    ]
                },
                
                closureScript: {
                    diagnosis: "You have erysipelas - a superficial bacterial skin infection caused by streptococcus bacteria. The bacteria got in through your mosquito bite scratch. The bright red color with that distinct raised edge is classic for this condition.",
                    plan: "Given your high fever and the facial location, I'm going to start you on IV antibiotics here in the emergency department, then you'll complete 7 days of oral antibiotics at home. We need to watch your eye carefully since the infection is close to it.",
                    warningsToDiscuss: "Return immediately if: your vision changes, your eye becomes painful or difficult to move, the redness spreads rapidly, or you develop confusion or severe headache. Facial infections near the eye can sometimes spread to the brain.",
                    addressingConcerns: "Because you had breast cancer with lymph node removal, you're at higher risk for infections in your left arm. Be careful with cuts or breaks in the skin on that arm in the future."
                }
            }
        }
    },

    // ==================== STEVENS-JOHNSON SYNDROME / TOXIC EPIDERMAL NECROLYSIS ====================
    {
        id: "sjs-ten",
        title: "Spreading Rash with Blisters",
        category: "Dermatology",
        icon: "🔥",
        difficulty: "advanced",
        urgency: "emergent",
        guidelineReferences: [
            {
                name: "UK Guidelines for SJS/TEN Management 2016",
                citation: "Creamer D, et al. Br J Dermatol. 2016;174:1194-1227",
                keyPoints: [
                    "Medical emergency - transfer to burn unit or ICU for severe cases",
                    "Immediately stop suspected causative drug",
                    "SCORTEN predicts mortality - calculate at admission and day 3",
                    "Supportive care is the mainstay of treatment",
                    "Eye involvement requires urgent ophthalmology evaluation"
                ],
                url: "https://www.bad.org.uk/healthcare-professionals/clinical-standards/clinical-guidelines"
            },
            {
                name: "UpToDate: Stevens-Johnson Syndrome and TEN",
                citation: "Lee HY. UpToDate 2025",
                keyPoints: [
                    "SJS: <10% BSA detached; TEN: >30% BSA detached; Overlap: 10-30%",
                    "High-risk drugs: allopurinol, sulfonamides, antiepileptics, NSAIDs",
                    "ALDEN algorithm for drug causality assessment",
                    "Mortality: 12% SJS, 49% TEN",
                    "HLA screening (HLA-B*5801, HLA-B*1502) for certain drugs and populations"
                ]
            }
        ],
        
        variants: {
            "male-34-lamotrigine": {
                name: "K.J.",
                age: 34,
                gender: "male",
                chiefComplaint: "Rash spreading all over with blisters and mouth sores",
                patientProfile: {
                    smokingStatus: 'current',
                    alcoholUse: 'moderate',
                    drugUse: 'none',
                    occupation: 'teacher',
                    livingStatus: 'withFamily',
                    pmhCategory: 'psychiatric',
                    allergyType: 'none',
                    surgicalHistory: 'none',
                    familyHistoryType: 'noSignificant'
                },
                variantDescription: "Stevens-Johnson syndrome from lamotrigine in bipolar patient",
                
                vitalSigns: {
                    BP: "108/68",
                    HR: 112,
                    RR: 20,
                    Temp: "102.8°F",
                    SpO2: "95%"
                },
                
                missedConsequences: {
                    "Stevens-Johnson Syndrome": "Mortality 5-15% if early; higher with delayed recognition. Permanent eye damage in 20-75%.",
                    "Toxic Epidermal Necrolysis": "Mortality 25-49%. Higher with continued drug exposure.",
                    "Sepsis": "Skin failure leads to fluid loss, infection, multi-organ dysfunction.",
                    "Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS)": "Different syndrome but similar urgency. Can cause liver failure."
                },
                
                commonPitfalls: [
                    "Attributing early symptoms to viral illness - delaying drug withdrawal",
                    "Not immediately stopping the causative medication",
                    "Underestimating severity - needs burn unit/ICU care",
                    "Missing mucosal involvement (oral, ocular, genital)",
                    "Not getting early ophthalmology consult - eye damage is common",
                    "Giving antibiotics instead of recognizing drug reaction",
                    "Missing the ALDEN algorithm drug causality assessment"
                ],
                
                mcqs: [
                    {
                        id: "mcq1",
                        timing: "after-history",
                        question: "A 34-year-old on lamotrigine for 3 weeks develops fever, malaise, and then painful oral erosions followed by a spreading rash with 'target-like' lesions and skin tenderness. What is the MOST important immediate intervention?",
                        options: [
                            { text: "Start broad-spectrum antibiotics", correct: false, explanation: "This is a drug reaction, not infection. Antibiotics may worsen the situation (sulfonamides are high-risk drugs for SJS)." },
                            { text: "Immediately discontinue lamotrigine", correct: true, explanation: "STOP THE DRUG. Lamotrigine is a high-risk medication for SJS/TEN. Every additional dose increases mortality." },
                            { text: "Obtain skin biopsy before treatment", correct: false, explanation: "Biopsy can be done but should NOT delay drug withdrawal or supportive care." },
                            { text: "Start high-dose corticosteroids", correct: false, explanation: "Corticosteroid use in SJS/TEN is controversial and unproven. Drug withdrawal is the priority." }
                        ]
                    },
                    {
                        id: "mcq2",
                        timing: "after-exam",
                        question: "Examination shows painful oral erosions, conjunctival hyperemia with pseudomembranes, and skin detachment affecting 15% BSA with positive Nikolsky sign. How is this classified?",
                        options: [
                            { text: "Stevens-Johnson syndrome (<10% BSA)", correct: false, explanation: "SJS is <10% BSA detachment. This patient has 15%." },
                            { text: "SJS/TEN overlap (10-30% BSA)", correct: true, explanation: "10-30% BSA detachment = SJS/TEN overlap. Requires same aggressive management as TEN." },
                            { text: "Toxic epidermal necrolysis (>30% BSA)", correct: false, explanation: "TEN is >30% BSA. This is overlap syndrome." },
                            { text: "Erythema multiforme major", correct: false, explanation: "EM has typical target lesions with THREE zones. SJS/TEN has atypical targets (flat, 2 zones) and involves mucosa + skin detachment." }
                        ]
                    },
                    {
                        id: "mcq3",
                        timing: "after-workup",
                        question: "Which scoring system predicts mortality in this condition?",
                        options: [
                            { text: "CURB-65", correct: false, explanation: "CURB-65 is for pneumonia severity." },
                            { text: "SCORTEN", correct: true, explanation: "SCORTEN predicts mortality in SJS/TEN. Calculated at admission and day 3. Factors: age >40, malignancy, BSA >10%, tachycardia, serum BUN >28, glucose >252, bicarb <20." },
                            { text: "Wells score", correct: false, explanation: "Wells score is for DVT/PE probability." },
                            { text: "MELD score", correct: false, explanation: "MELD is for liver disease severity." }
                        ]
                    }
                ],
                
                allDiagnoses: [
                    { name: "Stevens-Johnson Syndrome / TEN Overlap", correctCategory: "most-likely", rationale: "New drug (lamotrigine) 3 weeks ago + prodrome + mucosal erosions + atypical targets + skin detachment 15% = SJS/TEN overlap." },
                    { name: "Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS)", correctCategory: "must-not-miss", rationale: "Similar timeframe, rash, fever. DRESS has facial edema, lymphadenopathy, organ involvement (liver), eosinophilia. Check labs." },
                    { name: "Erythema Multiforme", correctCategory: "less-likely", rationale: "EM has TRUE target lesions (3 zones), acral distribution, usually post-infectious. Doesn't cause sheet-like skin detachment." },
                    { name: "Staphylococcal Scalded Skin Syndrome", correctCategory: "less-likely", rationale: "SSSS is primarily in children. No mucosal involvement. Superficial split (vs full-thickness in TEN)." },
                    { name: "Acute Generalized Exanthematous Pustulosis", correctCategory: "less-likely", rationale: "AGEP has pinpoint pustules on erythematous base. Quicker onset (1-2 days). Different histology." },
                    { name: "Viral Exanthem", correctCategory: "less-likely", rationale: "Doesn't cause skin detachment or mucosal erosions. No Nikolsky sign." }
                ],
                
                oldcartsNarrative: `"I started getting sick about 4 days ago - thought it was the flu. Fever, body aches, sore throat. Then 2 days ago I got these painful sores in my mouth - I can barely swallow. Yesterday this rash started on my chest and spread everywhere. It hurts to touch my skin. Now some areas are blistering and the skin is coming off. My eyes are red and gunky. I started lamotrigine about 3 weeks ago for bipolar disorder. The psychiatrist was increasing my dose slowly."`,
                
                historyQuestions: [
                    { id: "new_medications", text: "What medications have you started in the past 8 weeks?",
                      answer: "Lamotrigine for bipolar disorder, started about 3 weeks ago. My psychiatrist was increasing the dose gradually - I just went up to 50mg two weeks ago.",
                      tier: "essential", linkedDx: ["Stevens-Johnson Syndrome / TEN"],
                      reasoning: "Lamotrigine is HIGH-RISK for SJS/TEN. Risk highest in first 8 weeks, especially with rapid dose escalation." },
                    
                    { id: "prodrome", text: "What symptoms came first, before the rash?",
                      answer: "Fever, feeling like I had the flu, sore throat. That was about 4 days ago. I thought I was just getting sick.",
                      tier: "essential", linkedDx: ["Stevens-Johnson Syndrome / TEN"],
                      reasoning: "1-3 day PRODROME of fever, malaise, sore throat is classic for SJS/TEN. Often mistaken for viral illness." },
                    
                    { id: "mucosal_symptoms", text: "Do you have sores anywhere besides your skin?",
                      answer: "Horrible mouth sores - I can barely eat or drink. My eyes are red and crusty. It burns when I urinate.",
                      tier: "essential", linkedDx: ["Stevens-Johnson Syndrome / TEN"],
                      reasoning: "MUCOSAL involvement (oral, ocular, genital) is HALLMARK of SJS/TEN. Distinguishes from other drug eruptions." },
                    
                    { id: "skin_symptoms", text: "Describe how the rash feels and looks.",
                      answer: "It started as red spots with darker centers, then they spread together. The skin is extremely tender - even light touch hurts. Now areas are blistering and the top layer slides off.",
                      tier: "essential", linkedDx: ["Stevens-Johnson Syndrome / TEN"],
                      reasoning: "Tender skin with atypical targets → blisters → detachment = SJS/TEN progression." },
                    
                    { id: "spread_rate", text: "How fast is it spreading?",
                      answer: "It doubled overnight. Started on my chest yesterday morning, now it's on my back, arms, face.",
                      tier: "essential", linkedDx: ["Stevens-Johnson Syndrome / TEN"],
                      reasoning: "RAPID spread is typical. Progression over hours to days." },
                    
                    { id: "other_drugs", text: "Any other medications, supplements, or over-the-counter drugs?",
                      answer: "Just ibuprofen for the fever the past few days. And I've been taking lithium for years.",
                      tier: "helpful", linkedDx: ["Stevens-Johnson Syndrome / TEN"],
                      reasoning: "NSAIDs (especially oxicams) are high-risk. Ibuprofen is lower risk. Lithium is unlikely cause." }
                ],
                
                physicalExamFindings: [
                    { id: "general", text: "General appearance", category: "General",
                      finding: "Ill-appearing, in obvious distress from skin pain. Tachycardic. Low-grade hypotension.",
                      tier: "essential", linkedDx: ["Stevens-Johnson Syndrome / TEN"],
                      reasoning: "Systemic toxicity from skin failure and inflammation." },
                    
                    { id: "skin_morphology", text: "Describe the skin lesions", category: "Skin",
                      finding: "Dusky red macules coalescing into irregular patches. ATYPICAL TARGETS: flat, two-toned (dark center, red surround) - NOT classic three-zone targets. Flaccid bullae with serous fluid. Sheet-like erosions where epidermis has detached.",
                      tier: "essential", linkedDx: ["Stevens-Johnson Syndrome / TEN"],
                      reasoning: "ATYPICAL targets (2 zones, flat) distinguish SJS/TEN from erythema multiforme (3 zones, raised)." },
                    
                    { id: "nikolsky", text: "Test Nikolsky sign", category: "Skin",
                      finding: "POSITIVE Nikolsky sign - lateral pressure on erythematous skin causes epidermal separation and extension of erosion.",
                      tier: "essential", linkedDx: ["Stevens-Johnson Syndrome / TEN", "Staphylococcal Scalded Skin Syndrome"],
                      reasoning: "Nikolsky sign indicates epidermal fragility. Present in SJS/TEN, SSSS, and pemphigus." },
                    
                    { id: "bsa_calc", text: "Calculate body surface area of detachment", category: "Skin",
                      finding: "Approximately 15% BSA with frank epidermal detachment (chest, upper back, portions of arms). Additional 25% with erythema/blistering that could progress.",
                      tier: "essential", linkedDx: ["Stevens-Johnson Syndrome / TEN"],
                      reasoning: "<10% = SJS, 10-30% = overlap, >30% = TEN. Determines classification and prognosis." },
                    
                    { id: "oral_exam", text: "Examine oral cavity", category: "ENT",
                      finding: "Hemorrhagic crusting of lips. Extensive oral erosions covering buccal mucosa, tongue, and palate. Painful to manipulation.",
                      tier: "essential", linkedDx: ["Stevens-Johnson Syndrome / TEN"],
                      reasoning: "Oral involvement in >90% of SJS/TEN. Can impair nutrition/hydration." },
                    
                    { id: "eye_exam", text: "Examine eyes", category: "Eyes",
                      finding: "Bilateral conjunctival hyperemia. PSEUDOMEMBRANE formation on right palpebral conjunctiva. No corneal epithelial defect visible. Eyelids edematous.",
                      tier: "essential", linkedDx: ["Stevens-Johnson Syndrome / TEN"],
                      reasoning: "Eye involvement in 60-100%. PSEUDOMEMBRANES = severe. Needs urgent ophthalmology consult." },
                    
                    { id: "genital_exam", text: "Examine genital area", category: "GU",
                      finding: "Erosions on glans penis. Dysuria reported.",
                      tier: "essential", linkedDx: ["Stevens-Johnson Syndrome / TEN"],
                      reasoning: "Genital involvement in 60-70%. Can cause urinary retention, scarring." }
                ],
                
                workupOptions: {
                    labs: [
                        { id: "cbc_cmp", name: "CBC with differential, CMP, LFTs",
                          result: "WBC 12,400 (mild elevation), Hgb 13.2, Plts 280K. BUN 32, Cr 1.4 (elevated - dehydration). Glucose 145. Bicarb 22. AST/ALT mildly elevated.",
                          tier: "essential", reasoning: "Labs needed for SCORTEN calculation and to assess organ involvement." },
                        { id: "scorten", name: "Calculate SCORTEN",
                          result: "SCORTEN = 2 (BSA >10%, BUN >28). Predicted mortality approximately 12%.",
                          tier: "essential", reasoning: "SCORTEN: Age>40(+1), Malignancy(+1), HR>120(+1), BSA>10%(+1), BUN>28(+1), Glucose>252(+1), Bicarb<20(+1). Score 0-1: 3%, Score 2: 12%, Score 3: 35%, Score 4: 58%, Score 5+: 90%" },
                        { id: "coags", name: "Coagulation studies",
                          result: "PT, INR, PTT within normal limits. No DIC at this time.",
                          tier: "helpful", reasoning: "DIC occurs in >20% of SJS/TEN. Monitor for coagulopathy." }
                    ],
                    imaging: [
                        { id: "cxr", name: "Chest X-ray",
                          result: "Clear lung fields. No infiltrates or effusions.",
                          tier: "helpful", reasoning: "Pulmonary involvement in 25%. Bronchial epithelial sloughing, pneumonia, ARDS can occur." }
                    ],
                    procedures: [
                        { id: "skin_biopsy", name: "Skin biopsy for histopathology",
                          result: "Full-thickness epidermal necrosis with subepidermal split. Sparse dermal inflammatory infiltrate. Direct immunofluorescence negative.",
                          tier: "helpful", reasoning: "Biopsy confirms diagnosis but should NOT delay treatment. Shows full-thickness necrosis distinguishing from SSSS (superficial split)." },
                        { id: "ophthalmology", name: "Urgent ophthalmology consultation",
                          result: "Pseudomembrane formation - severe involvement. Daily debridement and aggressive lubrication initiated. Amniotic membrane transplant may be needed.",
                          tier: "essential", reasoning: "OPHTHALMOLOGY CONSULT IS MANDATORY. 20-75% have chronic eye sequelae including blindness." }
                    ],
                    treatments: [
                        { id: "stop_drug", name: "IMMEDIATELY STOP LAMOTRIGINE",
                          result: "Drug discontinued. Every additional dose increases mortality.",
                          tier: "essential", reasoning: "STOP THE DRUG IMMEDIATELY. This is the single most important intervention. Do not wait for confirmatory testing." },
                        { id: "icu_transfer", name: "Transfer to burn unit or ICU",
                          result: "Patient transferred to burn ICU for skin failure management.",
                          tier: "essential", reasoning: "SJS/TEN with >10% BSA requires burn unit or ICU care. Skin failure causes massive fluid/heat loss." },
                        { id: "supportive_care", name: "Aggressive supportive care",
                          result: "IV fluid resuscitation (like burn patient), wound care, nutritional support, pain management, temperature regulation.",
                          tier: "essential", reasoning: "SUPPORTIVE CARE is mainstay of treatment. Fluid resuscitation (may need burn formula), temperature control, wound care, nutrition (often NG tube)." },
                        { id: "ivig", name: "Consider IVIG (controversial)",
                          result: "IVIG use is controversial. Evidence is mixed. Some centers use it for severe cases.",
                          tier: "helpful", reasoning: "IVIG, cyclosporine, and TNF inhibitors are used but evidence is mixed. Supportive care is proven." }
                    ]
                },
                
                expertReasoning: {
                    keyObservations: [
                        "New drug (lamotrigine) started 3 weeks ago = within high-risk period",
                        "Prodrome → mucosal erosions → skin detachment = classic SJS/TEN progression",
                        "ATYPICAL targets (flat, 2 zones) - NOT erythema multiforme",
                        "15% BSA detachment = SJS/TEN overlap (10-30%)",
                        "Eye involvement with pseudomembranes = severe, needs immediate ophthalmology"
                    ],
                    drugCausality: [
                        "ALDEN algorithm for lamotrigine:",
                        "  - Drug notoriety: HIGH RISK (+3)",
                        "  - Time from drug start: 3 weeks - within window (+2)",
                        "  - Time from drug stop: N/A (still taking) (+0)",
                        "  - Dechallenge: N/A",
                        "  - Rechallenge: Not done (never rechallenge!)",
                        "  - Other causes: No infection identified (0)",
                        "  - ALDEN score: Very probable drug causality"
                    ],
                    teachingPoints: [
                        "HIGH-RISK DRUGS for SJS/TEN: Allopurinol, sulfonamides (TMP-SMX), aromatic antiepileptics (carbamazepine, phenytoin, lamotrigine), oxicam NSAIDs",
                        "PRODROME of fever/malaise 1-3 days BEFORE rash - often mistaken for viral illness",
                        "MUCOSAL involvement (oral, ocular, genital) is HALLMARK - distinguishes from other drug eruptions",
                        "ATYPICAL targets (flat, 2 zones) vs typical EM targets (raised, 3 zones)",
                        "NIKOLSKY SIGN: lateral pressure causes epidermal separation",
                        "Classification: SJS <10% BSA, Overlap 10-30%, TEN >30%",
                        "STOP THE DRUG IMMEDIATELY - most important intervention",
                        "SCORTEN predicts mortality - calculate at admission and day 3",
                        "Ophthalmology consult is MANDATORY - 20-75% have chronic eye damage"
                    ]
                },
                
                closureScript: {
                    diagnosis: "You have Stevens-Johnson syndrome, a severe allergic-type reaction to lamotrigine. This is a medical emergency that requires intensive care.",
                    plan: "We're stopping the lamotrigine immediately and transferring you to the burn intensive care unit. Your skin is acting like a burn wound and needs specialized care. You'll get IV fluids, wound care, and close monitoring. An eye specialist is coming to evaluate your eyes because this condition can damage them.",
                    warningsToDiscuss: "This is a serious condition. You will NEVER be able to take lamotrigine again, and there are related medications you'll need to avoid too. We'll make sure this is clearly documented in your medical records. You should wear a medical alert bracelet.",
                    addressingConcerns: "I know this is frightening. The good news is you got here before it progressed too far. With proper care, most people survive this, though it may take weeks to fully heal. We'll have your psychiatrist find an alternative mood stabilizer."
                },
                
                clinicalPearl: "The SCORTEN score calculates SJS/TEN mortality risk. Each point adds roughly 10% mortality: 0-1 points = 3%, 2 = 12%, 3 = 35%, 4 = 58%, 5+ = 90%. Factors: age >40, malignancy, tachycardia >120, BSA >10%, BUN >28, glucose >252, bicarb <20. Calculate at admission AND day 3 (disease may progress)."
            }
        }
    },

    // ==================== SKIN ABSCESS ====================
    {
        id: "skin-abscess",
        title: "Painful Lump with Redness",
        category: "Dermatology",
        icon: "🔴",
        difficulty: "foundational",
        urgency: "urgent",
        guidelineReferences: [
            {
                name: "IDSA SSTI Guidelines 2014",
                citation: "Stevens DL, et al. Clin Infect Dis. 2014;59:147-159",
                keyPoints: [
                    "Incision and drainage is primary treatment for skin abscess",
                    "Antibiotics recommended after I&D for: systemic signs, immunocompromise, multiple abscesses, surrounding cellulitis",
                    "MRSA coverage needed for purulent infections in most regions",
                    "TMP-SMX or doxycycline are first-line oral agents for MRSA"
                ]
            }
        ],
        
        variants: {
            "male-28-mrsa": {
                name: "D.M.",
                age: 28,
                gender: "male",
                chiefComplaint: "Painful red bump on my thigh that's getting bigger",
                patientProfile: {
                    smokingStatus: 'current',
                    alcoholUse: 'moderate',
                    drugUse: 'none',
                    occupation: 'gym-trainer',
                    livingStatus: 'roommates',
                    pmhCategory: 'none',
                    allergyType: 'sulfa',
                    surgicalHistory: 'none',
                    familyHistoryType: 'noSignificant'
                },
                variantDescription: "MRSA skin abscess requiring I&D and appropriate antibiotic selection",
                
                vitalSigns: {
                    BP: "124/78",
                    HR: 82,
                    RR: 14,
                    Temp: "99.8°F",
                    SpO2: "99%"
                },
                
                missedConsequences: {
                    "Skin Abscess": "Without drainage, abscess expands, may rupture unpredictably, seed bloodstream, or progress to deeper infection.",
                    "MRSA Infection": "Community-acquired MRSA can cause severe invasive disease including necrotizing pneumonia.",
                    "Necrotizing Fasciitis": "Abscess masking deeper necrotizing infection. Pain out of proportion = red flag."
                },
                
                commonPitfalls: [
                    "Treating abscess with antibiotics alone without incision and drainage",
                    "Not obtaining culture to guide targeted therapy",
                    "Using TMP-SMX in sulfa-allergic patient",
                    "Missing signs of deeper infection",
                    "Not counseling about decolonization to prevent recurrence"
                ],
                
                allDiagnoses: [
                    { name: "Skin Abscess (likely MRSA)", correctCategory: "most-likely", rationale: "Fluctuant, painful nodule with surrounding erythema in gym-goer. Classic CA-MRSA presentation." },
                    { name: "Furuncle/Carbuncle", correctCategory: "likely", rationale: "Abscess arising from hair follicle. Treated the same." },
                    { name: "Infected Sebaceous Cyst", correctCategory: "likely", rationale: "Pre-existing cyst that becomes infected. Still requires I&D." },
                    { name: "Cellulitis", correctCategory: "less-likely", rationale: "Diffuse erythema without central fluctuance. Would not have pus on I&D." },
                    { name: "Hidradenitis Suppurativa", correctCategory: "less-likely", rationale: "Recurrent abscesses in intertriginous areas (axilla, groin). Different management." }
                ],
                
                oldcartsNarrative: `"This bump on my thigh started about 5 days ago. At first it was just a small red pimple. Now it's the size of a golf ball, really painful, and has a white head. The skin around it is red and hot. I work at a gym and I'm in the weight room a lot. I had something similar last year that my doctor drained. I'm allergic to sulfa drugs - I get a rash from them."`,
                
                historyQuestions: [
                    { id: "onset", text: "When did this start?",
                      answer: "About 5 days ago. Started as a small bump, got bigger and more painful every day.",
                      tier: "essential", linkedDx: ["Skin Abscess"],
                      reasoning: "Typical abscess timeline - starts small, enlarges over days as pus accumulates." },
                    
                    { id: "prior_episodes", text: "Have you had this before?",
                      answer: "Yes, last year. Doctor drained it and gave me antibiotics. It was also on my leg.",
                      tier: "essential", linkedDx: ["Skin Abscess", "MRSA Infection"],
                      reasoning: "Recurrent SSTI suggests MRSA colonization. May benefit from decolonization protocol." },
                    
                    { id: "gym_exposure", text: "Tell me about your gym exposure.",
                      answer: "I work there and work out daily. Lots of skin-to-skin contact when I spot people. The gym gets pretty crowded.",
                      tier: "essential", linkedDx: ["MRSA Infection"],
                      reasoning: "Gym/athletic exposure is major risk for CA-MRSA. Shared equipment, skin contact, shaving microtrauma." },
                    
                    { id: "sulfa_allergy", text: "Describe your sulfa allergy.",
                      answer: "Took Bactrim once and broke out in a rash all over. Doctor said I'm allergic to sulfa.",
                      tier: "essential", linkedDx: ["Skin Abscess"],
                      reasoning: "Important for antibiotic selection - TMP-SMX (first-line for MRSA) is contraindicated." }
                ],
                
                physicalExamFindings: [
                    { id: "lesion", text: "Examine the lesion", category: "Skin",
                      finding: "Left anterior thigh: 4cm fluctuant, erythematous nodule with central yellow-white pointing. Surrounding erythema extends 2cm beyond abscess margin. Exquisitely tender.",
                      tier: "essential", linkedDx: ["Skin Abscess"],
                      reasoning: "FLUCTUANCE = pus collection requiring drainage. Central pointing indicates ready for I&D." },
                    
                    { id: "surrounding", text: "Assess surrounding tissue", category: "Skin",
                      finding: "Cellulitis extends approximately 2cm around abscess. No crepitus. No tracking lymphangitis.",
                      tier: "essential", linkedDx: ["Skin Abscess", "Cellulitis"],
                      reasoning: "Surrounding cellulitis indicates antibiotics in addition to I&D." }
                ],
                
                workupOptions: {
                    procedures: [
                        { id: "id", name: "Incision and drainage",
                          result: "15mL of thick purulent material expressed. Wound packed with iodoform gauze. Pus sent for culture.",
                          tier: "essential", reasoning: "I&D is DEFINITIVE treatment. Antibiotics alone will NOT resolve abscess." },
                        { id: "culture", name: "Wound culture",
                          result: "Gram stain: Gram-positive cocci in clusters. Culture pending.",
                          tier: "essential", reasoning: "Culture essential for: recurrent SSTI, systemic symptoms, antibiotic selection, MRSA surveillance." }
                    ],
                    treatments: [
                        { id: "doxycycline", name: "Doxycycline 100mg PO BID x 7 days",
                          result: "Alternative to TMP-SMX for MRSA coverage in sulfa-allergic patient.",
                          tier: "essential", reasoning: "With sulfa allergy, doxycycline is first-line for MRSA coverage. Good community MRSA susceptibility." },
                        { id: "tmp_smx", name: "TMP-SMX DS 1-2 tabs PO BID x 7 days",
                          result: "CONTRAINDICATED - patient is sulfa allergic.",
                          tier: "less-helpful", reasoning: "Would be first-line but patient has documented sulfa allergy." },
                        { id: "wound_care", name: "Wound care instructions",
                          result: "Keep wound clean and dry. Pack change daily. Return for recheck in 48-72 hours.",
                          tier: "essential", reasoning: "Proper wound care essential for healing. Recheck ensures resolution." }
                    ]
                },
                
                expertReasoning: {
                    teachingPoints: [
                        "INCISION AND DRAINAGE is primary treatment - antibiotics alone will NOT cure abscess",
                        "ALWAYS culture purulent material - guides therapy and tracks resistance patterns",
                        "Surrounding cellulitis = add antibiotics post-I&D",
                        "Sulfa allergy → use doxycycline or clindamycin instead of TMP-SMX",
                        "Recurrent MRSA SSTI → consider decolonization (chlorhexidine washes, mupirocin nasal)"
                    ]
                },
                
                closureScript: {
                    diagnosis: "You have a skin abscess - a collection of pus under the skin, likely caused by the MRSA bacteria that's common in gym environments.",
                    plan: "I've drained the abscess, which is the most important treatment. Because you have some surrounding redness and you've had this before, I'm also prescribing doxycycline for 7 days. I'm using doxycycline instead of Bactrim because of your sulfa allergy. Come back in 2-3 days for a wound check.",
                    warningsToDiscuss: "Return if: fever, spreading redness, increasing pain, or the lump refills. Also, to prevent spreading this to others and getting it again: don't share towels or razors, shower after workouts, wipe down gym equipment, and consider using antibacterial soap.",
                    addressingConcerns: "Since you've had this twice, you may be colonized with MRSA bacteria on your skin. If this keeps happening, we can do a decolonization protocol with special soap and nasal ointment to clear the bacteria."
                }
            }
        }
    }
];

// Export for integration with main ReasonDx system
if (typeof window !== 'undefined') {
    window.dermatologyCases = dermatologyCases;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = dermatologyCases;
}
