// ReasonDx A/I Cases Expansion
// This file contains new Allergy/Immunology cases and expanded patient narratives
// To integrate: Add these cases to the `cases` array in training.html

// ============================================
// PART 1: NEW ALLERGY/IMMUNOLOGY CASES
// ============================================

const newAICases = [

// ====== CASE 1: VENOM ALLERGY ======
{
    id: "venom-allergy",
    title: "Bee Sting Reaction",
    category: "Allergy & Immunology",
    icon: "🐝",
    difficulty: "intermediate",
    urgency: "urgent",
    guidelineReferences: [
        {
            name: "AAAAI Insect Sting Allergy Practice Parameter 2016",
            citation: "Golden DBK, et al. J Allergy Clin Immunol. 2017;139(4):1024-1044",
            keyPoints: [
                "Skin testing is gold standard for diagnosis (wait 4-6 weeks after reaction)",
                "Venom immunotherapy (VIT) is 97% effective in preventing future reactions",
                "VIT indicated for systemic reactions + positive venom testing",
                "Large local reactions do NOT require VIT",
                "Prescribe epinephrine auto-injector for all patients with systemic reactions"
            ],
            url: "https://www.jacionline.org/"
        }
    ],
    
    variants: {
        "male-42-beesting": {
            name: "Robert Martinez",
            firstName: "Robert",
            lastName: "Martinez",
            age: 42,
            gender: "male",
            setting: "allergy_clinic",
            chiefComplaint: "I was stung by a bee 3 weeks ago and had a severe reaction. My doctor said I should see an allergist.",
            patientProfile: {
                smokingStatus: 'former',
                alcoholUse: 'social',
                drugUse: 'none',
                occupation: 'landscaper',
                livingStatus: 'withFamily',
                pmhCategory: 'healthy',
                allergyType: 'environmental',
                surgicalHistory: 'none',
                familyHistoryType: 'atopy'
            },
            variantDescription: "Systemic reaction to hymenoptera sting - evaluation for venom immunotherapy",
            
            vitalSigns: {
                BP: "128/82",
                HR: 72,
                RR: 14,
                Temp: "98.4°F",
                SpO2: "99%"
            },
            
            missedConsequences: {
                "Venom Anaphylaxis": "Without VIT, 50-60% risk of systemic reaction with future stings. Can be fatal.",
                "Mastocytosis": "Elevated baseline tryptase increases anaphylaxis risk. Need workup.",
                "ACE Inhibitor Risk": "ACE inhibitors increase severity of hymenoptera anaphylaxis."
            },
            
            commonPitfalls: [
                "Testing too soon after reaction (wait 4-6 weeks for IgE replenishment)",
                "Missing mastocytosis screening with baseline tryptase",
                "Not assessing medication risk factors (ACE inhibitors, beta-blockers)",
                "Treating large local reactions with VIT (not indicated)",
                "Not providing epinephrine auto-injector prescription"
            ],
            
            mcqs: [
                {
                    id: "mcq1",
                    timing: "after-history",
                    question: "When is the optimal time to perform venom skin testing after a systemic reaction?",
                    options: [
                        { text: "Within 1 week of the reaction", correct: false, explanation: "Too soon - IgE may be depleted, leading to false negatives." },
                        { text: "4-6 weeks after the reaction", correct: true, explanation: "Correct. This allows time for IgE antibodies to replenish after the anaphylactic event." },
                        { text: "6 months after the reaction", correct: false, explanation: "Unnecessarily delayed. Testing at 4-6 weeks is sufficient." },
                        { text: "Testing is not needed if the clinical history is clear", correct: false, explanation: "Testing is important to confirm the specific venom(s) and guide immunotherapy." }
                    ]
                },
                {
                    id: "mcq2",
                    timing: "after-workup",
                    question: "Which finding would make you concerned for underlying mastocytosis?",
                    options: [
                        { text: "Positive skin test to honeybee venom", correct: false, explanation: "This just confirms venom allergy." },
                        { text: "Baseline tryptase >20 ng/mL", correct: true, explanation: "Elevated baseline tryptase suggests possible mastocytosis. These patients have higher anaphylaxis risk." },
                        { text: "History of large local reaction", correct: false, explanation: "Large local reactions are common and not associated with mastocytosis." },
                        { text: "Patient is a landscaper", correct: false, explanation: "Occupation increases exposure risk but not mastocytosis risk." }
                    ]
                }
            ],
            
            allDiagnoses: [
                { name: "Hymenoptera Venom Allergy with Systemic Reaction", correctCategory: "most-likely", rationale: "Clear history of systemic symptoms (hives, throat swelling, dizziness) after sting." },
                { name: "Mastocytosis", correctCategory: "must-not-miss", rationale: "Must screen with baseline tryptase - significantly increases anaphylaxis risk." },
                { name: "Large Local Reaction", correctCategory: "less-likely", rationale: "Would not have systemic symptoms - only local swelling >10cm." },
                { name: "Toxic Reaction (Multiple Stings)", correctCategory: "less-likely", rationale: "Only one sting - toxic reactions require many stings." }
            ],
            
            oldcartsNarrative: `"I was trimming hedges at a client's house 3 weeks ago when I got stung on my hand by a honeybee. I could see the stinger so I scraped it out. Within about 10 minutes, I broke out in hives all over my body - not just near the sting. My lips started tingling and my throat felt tight. I got really dizzy and lightheaded. My coworker said I looked pale and sweaty. He called 911 and the paramedics gave me a shot - I think epinephrine - and Benadryl. They took me to the ER where they watched me for a few hours and sent me home with an EpiPen.

I've been stung before - maybe 5-6 times over the years working outside. Usually I just get a big red swelling at the sting site that lasts a few days. But nothing like this ever happened before. My doctor said this was anaphylaxis and I need to see an allergist about allergy shots.

I'm nervous because I work outside every day. I can't really avoid bees. My wife is scared that the next sting might kill me. I always carry my EpiPen now but I want to know if there's anything else I can do."`,
            
            historyQuestions: [
                // Reaction Details
                { id: "reaction_onset", text: "How quickly after the sting did symptoms start?",
                  answer: "Within 10 minutes I was covered in hives. The throat tightness started maybe 15 minutes after.",
                  tier: "essential", linkedDx: ["Hymenoptera Venom Allergy with Systemic Reaction"],
                  reasoning: "Rapid onset (minutes) indicates IgE-mediated anaphylaxis vs. delayed reactions." },
                
                { id: "systemic_symptoms", text: "What symptoms did you experience?",
                  answer: "Hives everywhere - arms, legs, chest, back. My lips tingled and throat felt tight like it was swelling. I got really dizzy and lightheaded. I was sweating a lot.",
                  tier: "essential", linkedDx: ["Hymenoptera Venom Allergy with Systemic Reaction"],
                  reasoning: "Multi-system involvement (skin + respiratory + cardiovascular) confirms systemic reaction." },
                
                { id: "epinephrine_response", text: "How did you respond to the epinephrine?",
                  answer: "It worked fast - within a few minutes the throat tightness got better and I stopped feeling so dizzy. The hives took longer to go away.",
                  tier: "essential", linkedDx: ["Hymenoptera Venom Allergy with Systemic Reaction"],
                  reasoning: "Rapid response to epinephrine supports anaphylaxis diagnosis." },
                
                { id: "insect_identification", text: "Do you know what type of insect stung you?",
                  answer: "Honeybee for sure - I saw the stinger stuck in my skin. You know how they leave it behind. I work outside so I know the difference between honeybees, wasps, and yellowjackets.",
                  tier: "essential", linkedDx: ["Hymenoptera Venom Allergy with Systemic Reaction"],
                  reasoning: "Insect identification guides which venoms to test. Honeybee is only hymenoptera that leaves stinger." },
                
                // Prior Reaction History
                { id: "prior_stings", text: "Have you been stung before? What happened?",
                  answer: "Yeah, probably 5 or 6 times over the years. I always got a big red swelling around the sting - like 4-5 inches across, itchy, lasted 3-4 days. But never anything like what happened this time.",
                  tier: "essential", linkedDx: ["Hymenoptera Venom Allergy with Systemic Reaction"],
                  reasoning: "History of large local reactions. Progression to systemic reaction is well-documented phenomenon." },
                
                { id: "prior_systemic", text: "Ever had hives, throat swelling, or dizziness from a sting before?",
                  answer: "No, never. This was completely new. That's what scared me so much.",
                  tier: "essential", linkedDx: ["Hymenoptera Venom Allergy with Systemic Reaction"],
                  reasoning: "First systemic reaction - sensitization can occur after multiple prior stings." },
                
                // Risk Factors
                { id: "occupation", text: "What do you do for work?",
                  answer: "I'm a landscaper. Work outside every day, all year. Lots of exposure to bees, wasps, hornets - especially spring through fall.",
                  tier: "essential", linkedDx: ["Hymenoptera Venom Allergy with Systemic Reaction"],
                  reasoning: "High occupational exposure - strong indication for venom immunotherapy." },
                
                { id: "hobbies", text: "Any hobbies that involve outdoor exposure?",
                  answer: "I coach my kids' soccer team, do some fishing on weekends. We have a garden at home too.",
                  tier: "helpful", linkedDx: [],
                  reasoning: "Additional exposure risk factors." },
                
                // Medical History - Critical for VIT
                { id: "cardiac_history", text: "Do you have any heart problems?",
                  answer: "No heart problems. My heart is healthy as far as I know.",
                  tier: "essential", linkedDx: ["Mastocytosis"],
                  reasoning: "Cardiac disease increases anaphylaxis mortality risk." },
                
                { id: "medications", text: "What medications do you take?",
                  answer: "Just lisinopril for blood pressure. My doctor started it about 2 years ago.",
                  tier: "essential", linkedDx: ["Hymenoptera Venom Allergy with Systemic Reaction"],
                  reasoning: "CRITICAL: ACE inhibitors increase severity of hymenoptera anaphylaxis. May need to switch." },
                
                { id: "beta_blockers", text: "Do you take any heart or blood pressure medications?",
                  answer: "Just the lisinopril. No beta blockers or anything like that.",
                  tier: "essential", linkedDx: ["Hymenoptera Venom Allergy with Systemic Reaction"],
                  reasoning: "Beta-blockers make anaphylaxis harder to treat and increase mortality." },
                
                { id: "other_allergies", text: "Any other allergies?",
                  answer: "Seasonal allergies - I take Zyrtec in the spring for pollen. No food allergies. No drug allergies that I know of.",
                  tier: "helpful", linkedDx: [],
                  reasoning: "Atopic background is common in venom-allergic patients." },
                
                // Mastocytosis Screening
                { id: "skin_flushing", text: "Do you ever get unexplained flushing, itching, or hives?",
                  answer: "No, nothing like that. My skin is pretty normal usually.",
                  tier: "essential", linkedDx: ["Mastocytosis"],
                  reasoning: "Spontaneous symptoms suggest possible mastocytosis." },
                
                { id: "gi_symptoms", text: "Any stomach problems - nausea, cramping, diarrhea?",
                  answer: "No, my stomach is fine. No issues there.",
                  tier: "helpful", linkedDx: ["Mastocytosis"],
                  reasoning: "GI symptoms can occur with mastocytosis." },
                
                { id: "bone_pain", text: "Any bone pain or fractures?",
                  answer: "No bone problems. I'm pretty healthy actually.",
                  tier: "helpful", linkedDx: ["Mastocytosis"],
                  reasoning: "Mastocytosis can cause bone involvement." },
                
                // Family History
                { id: "family_allergies", text: "Any family history of severe allergic reactions?",
                  answer: "My brother has a peanut allergy - carries an EpiPen. My mom has hay fever. No one else has had a bee sting reaction though.",
                  tier: "helpful", linkedDx: [],
                  reasoning: "Family atopic history. Venom allergy itself is not strongly hereditary." },
                
                // Standard PMH
                { id: "pmh", text: "Any other medical conditions?",
                  answer: "Just the high blood pressure. Otherwise healthy. No diabetes, no asthma, nothing else.",
                  tier: "essential", linkedDx: [],
                  reasoning: "Baseline health status affects VIT safety." },
                
                { id: "surgical_history", text: "Any surgeries?",
                  answer: "Had my appendix out when I was 22. That's it.",
                  tier: "helpful", linkedDx: [],
                  reasoning: "Surgical history for completeness." },
                
                { id: "social_smoking", text: "Do you smoke?",
                  answer: "I quit 5 years ago. Smoked for about 15 years before that.",
                  tier: "helpful", linkedDx: [],
                  reasoning: "Smoking history for general health assessment." },
                
                { id: "social_alcohol", text: "How much alcohol do you drink?",
                  answer: "A few beers on the weekend. Nothing heavy.",
                  tier: "helpful", linkedDx: [],
                  reasoning: "Social history completeness." }
            ],
            
            physicalExam: [
                { id: "vitals_review", text: "Review vital signs", category: "Vitals",
                  finding: "BP 128/82, HR 72, RR 14, Temp 98.4°F, SpO2 99%. Vitals stable - patient asymptomatic today.",
                  tier: "essential", linkedDx: [],
                  reasoning: "Normal vitals expected in clinic setting weeks after reaction." },
                
                { id: "general_appearance", text: "General appearance", category: "General",
                  finding: "Well-appearing middle-aged man in no distress. Tanned skin consistent with outdoor occupation. No acute distress.",
                  tier: "essential", linkedDx: [],
                  reasoning: "Baseline assessment - patient well today." },
                
                { id: "skin_inspection", text: "Full skin examination", category: "Skin",
                  finding: "No urticaria. No flushing. No mastocytoma lesions (urticaria pigmentosa). No Darier sign. Healed sting site on right hand - small pink macule, no induration.",
                  tier: "essential", linkedDx: ["Mastocytosis"],
                  reasoning: "Looking for signs of mastocytosis (urticaria pigmentosa, Darier sign). None present." },
                
                { id: "lymph_exam", text: "Lymph node examination", category: "HEENT/Neck",
                  finding: "No lymphadenopathy. No hepatosplenomegaly.",
                  tier: "helpful", linkedDx: ["Mastocytosis"],
                  reasoning: "Organomegaly can occur with systemic mastocytosis." },
                
                { id: "cardiac_exam", text: "Cardiac examination", category: "Cardiovascular",
                  finding: "Regular rate and rhythm. No murmurs. Normal S1, S2.",
                  tier: "helpful", linkedDx: [],
                  reasoning: "Baseline cardiac assessment for VIT safety." },
                
                { id: "lung_exam", text: "Pulmonary examination", category: "Pulmonary",
                  finding: "Lungs clear to auscultation bilaterally. No wheezes.",
                  tier: "helpful", linkedDx: [],
                  reasoning: "Baseline pulmonary status." },
                
                { id: "abdominal_exam", text: "Abdominal examination", category: "Abdominal",
                  finding: "Soft, non-tender. No hepatosplenomegaly. Normal bowel sounds.",
                  tier: "helpful", linkedDx: ["Mastocytosis"],
                  reasoning: "Hepatosplenomegaly can occur with mastocytosis." }
            ],
            
            workupOptions: {
                labs: [
                    { id: "baseline_tryptase", name: "Baseline Serum Tryptase",
                      result: "8.2 ng/mL (normal <11.4 ng/mL). Normal baseline tryptase - mastocytosis less likely.",
                      tier: "essential", reasoning: "MUST CHECK in all patients with hymenoptera anaphylaxis. Elevated baseline (>11.4 or >20% of reaction level) suggests mastocytosis." },
                    
                    { id: "cbc", name: "CBC with Differential",
                      result: "WBC 7.2, Hgb 15.1, Plt 245. Normal differential. No eosinophilia. No basophilia.",
                      tier: "helpful", reasoning: "Baseline blood counts. Eosinophilia or basophilia could suggest other allergic or mast cell conditions." },
                    
                    { id: "bmp", name: "Basic Metabolic Panel",
                      result: "All values normal. Cr 1.0, K 4.2.",
                      tier: "helpful", reasoning: "Baseline renal function - relevant if considering ACE inhibitor switch." }
                ],
                
                procedures: [
                    { id: "skin_testing", name: "Venom Skin Testing (Honeybee, Wasp, Yellow Jacket, White-Faced Hornet, Yellow Hornet)",
                      result: "POSITIVE: Honeybee venom - 10mm wheal at 0.1 mcg/mL concentration. NEGATIVE: Wasp, Yellow Jacket, White-Faced Hornet, Yellow Hornet all negative at testing concentrations up to 1.0 mcg/mL. Histamine control positive, saline control negative.",
                      tier: "essential", reasoning: "Confirms IgE-mediated honeybee venom allergy. Testing panel includes all clinically important North American Hymenoptera." },
                    
                    { id: "serum_ige", name: "Venom-Specific IgE Panel (if skin testing inconclusive)",
                      result: "Not performed - skin testing was diagnostic.",
                      tier: "helpful", reasoning: "Alternative if skin testing contraindicated or equivocal. Less sensitive than skin testing." }
                ],
                
                treatments: [
                    { id: "vit_recommendation", name: "Recommend Venom Immunotherapy (VIT)",
                      result: "Patient counseled on VIT for honeybee venom. Explained 97% efficacy in preventing future systemic reactions. Discussed build-up phase (weekly injections for 4-6 months) then monthly maintenance for 3-5 years.",
                      tier: "essential", reasoning: "VIT indicated for: systemic reaction + positive venom test + ongoing exposure risk. This patient meets all criteria." },
                    
                    { id: "ace_inhibitor_discussion", name: "ACE Inhibitor Counseling",
                      result: "Discussed risk of ACE inhibitors in venom-allergic patients. Recommended switching lisinopril to alternative antihypertensive class. Letter sent to PCP recommending ARB or calcium channel blocker instead.",
                      tier: "essential", reasoning: "ACE inhibitors increase severity of hymenoptera anaphylaxis. Should be discontinued if possible." },
                    
                    { id: "epipen_review", name: "Epinephrine Auto-Injector Review",
                      result: "Reviewed proper EpiPen technique. Patient demonstrates correct use. Confirmed prescription for 2 auto-injectors. Counseled to carry at ALL times, especially during outdoor work.",
                      tier: "essential", reasoning: "All patients with venom anaphylaxis need epinephrine. Continue during VIT - protection not immediate." }
                ],
                
                consults: [
                    { id: "pcp_coordination", name: "Coordinate with PCP",
                      result: "Letter sent to PCP regarding diagnosis, VIT recommendation, and need to change ACE inhibitor to alternative antihypertensive.",
                      tier: "essential", reasoning: "Coordination for medication changes and overall care." }
                ],
                
                disposition: [
                    { id: "vit_initiation", name: "Schedule VIT Initiation",
                      result: "Scheduled for cluster VIT build-up protocol. Will achieve maintenance dose in approximately 8 weeks with 2-3 injections per visit.",
                      tier: "essential", reasoning: "Begin immunotherapy promptly given high-risk occupation." },
                    
                    { id: "followup", name: "Follow-up Plan",
                      result: "Monthly during build-up, then every 4 weeks for maintenance injections. Annual reassessment of VIT continuation.",
                      tier: "essential", reasoning: "Ongoing monitoring during immunotherapy." },
                    
                    { id: "medic_alert", name: "Medical Alert Recommendation",
                      result: "Counseled to obtain medical alert bracelet identifying honeybee venom allergy.",
                      tier: "essential", reasoning: "Important for emergency responders if patient unable to communicate." },
                    
                    { id: "avoidance_counseling", name: "Sting Prevention Counseling",
                      result: "Reviewed sting avoidance strategies: wear long sleeves/pants, avoid bright colors and floral patterns, no perfumes/scented products outdoors, be cautious around food outdoors, wear shoes. Can continue outdoor work with precautions.",
                      tier: "essential", reasoning: "Practical measures to reduce sting risk while continuing occupation." }
                ]
            },
            
            actualDiagnosis: {
                name: "IgE-Mediated Honeybee Venom Allergy with Grade III Systemic Reaction",
                keyFindings: ["Systemic reaction within 30 minutes of sting", "Multi-system involvement (cutaneous + respiratory + cardiovascular)", "Response to epinephrine", "Positive skin test to honeybee venom", "Normal baseline tryptase (mastocytosis unlikely)"],
                teachingPoints: [
                    "Grade systemic reactions: I (cutaneous only), II (mild systemic), III (severe systemic), IV (anaphylaxis with hypotension/cardiac arrest)",
                    "Wait 4-6 weeks after reaction for skin testing (IgE replenishment)",
                    "ALWAYS check baseline tryptase - elevated levels indicate mastocytosis risk",
                    "VIT is 97% effective at preventing future systemic reactions",
                    "ACE inhibitors increase anaphylaxis severity - discontinue if possible",
                    "Continue epinephrine auto-injector during VIT - protection takes months to develop",
                    "VIT duration: typically 3-5 years for adequate protection"
                ]
            },
            
            revisedDifferential: [
                { name: "IgE-Mediated Honeybee Venom Allergy", probability: "confirmed", keyFeatures: ["Clinical history", "Positive skin test"] },
                { name: "Mastocytosis", probability: "unlikely", keyFeatures: ["Normal baseline tryptase", "No skin findings"] }
            ],
            
            correctDiagnosis: "Honeybee Venom Allergy - VIT Indicated",
            
            teachingPoint: "This case illustrates the evaluation of a patient with hymenoptera venom anaphylaxis. Key points: (1) Document the reaction grade and identify the insect, (2) Wait 4-6 weeks before skin testing, (3) ALWAYS check baseline tryptase to screen for mastocytosis, (4) Review medications - ACE inhibitors and beta-blockers increase risk, (5) VIT is highly effective and indicated for systemic reactions with positive testing and ongoing exposure risk.",
            
            clinicalPearl: "The 'field sting challenge' - Patients on VIT who are stung while on maintenance therapy and tolerate the sting well have demonstrated real-world protection. This is actually the best evidence that VIT is working. Conversely, if a patient on VIT has a systemic reaction to a sting, consider: dose adequacy, missed doses, or possible allergy to a different venom species."
        }
    }
},

// Additional A/I cases would continue here...
// I'm creating a framework that can be expanded

];

// ============================================
// PART 2: EXPANDED PATIENT NARRATIVES
// ============================================

// These are enhanced oldcartsNarrative and historyQuestions 
// to make existing cases more conversational for AI chat

const expandedPatientStories = {
    
    // Expanded chest pain case narrative
    "chest-pain": {
        enhancedNarrative: `"I woke up this morning around 6 AM with this pressure in my chest. It's been there for about 2 hours now. It feels like someone is sitting on my chest - a heavy, squeezing feeling right in the center. 

The pain goes up into my jaw and down my left arm. My arm feels kind of tingly and heavy. I've never had anything like this before. I broke out in a cold sweat and felt nauseous - I actually threw up once.

I tried taking some Tums thinking it was heartburn, but it didn't help at all. I also took two aspirin because my wife said that's what you're supposed to do for a heart attack.

I'm scared, doc. My father had a heart attack at 58, and I'm 55. I've been meaning to see a doctor about my cholesterol but never got around to it. I smoke about a pack a day - I know I should quit. I don't exercise much - desk job, you know. I've put on about 30 pounds over the last few years.

I do take medicine for my blood pressure - lisinopril I think - but I'll be honest, I don't always remember to take it. My wife keeps telling me I need to take better care of myself."`,
        
        additionalHistoryQuestions: [
            { id: "cp_character", text: "Can you describe the pain - is it sharp, dull, pressure, burning?",
              answer: "It's a pressure, like a heavy weight on my chest. Not sharp at all - more like a squeezing feeling.",
              tier: "essential", linkedDx: ["Acute Coronary Syndrome"],
              reasoning: "Pressure/squeezing quality is classic for cardiac ischemia." },
            
            { id: "cp_radiation_detailed", text: "Does the pain go anywhere else?",
              answer: "Yes, it goes up into my jaw - feels like a toothache almost. And down my left arm. The arm feels heavy and tingly.",
              tier: "essential", linkedDx: ["Acute Coronary Syndrome"],
              reasoning: "Radiation to jaw and left arm is classic ACS pattern." },
            
            { id: "cp_exertion", text: "What were you doing when it started?",
              answer: "I was just sleeping. Woke up with it. Didn't do anything strenuous.",
              tier: "essential", linkedDx: ["Acute Coronary Syndrome"],
              reasoning: "Rest pain is concerning - indicates unstable plaque or severe stenosis." },
            
            { id: "prior_episodes", text: "Have you ever had similar chest discomfort before?",
              answer: "Now that you mention it, I've had some tightness when I climb stairs lately, but it usually goes away when I rest. I just thought I was out of shape.",
              tier: "essential", linkedDx: ["Acute Coronary Syndrome"],
              reasoning: "Exertional symptoms suggest pre-existing stable angina, now presenting with ACS." },
            
            { id: "aspirin_taken", text: "Did you take anything for the pain?",
              answer: "I took two aspirin - my wife told me to. And some Tums but they didn't help.",
              tier: "essential", linkedDx: ["Acute Coronary Syndrome"],
              reasoning: "Aspirin is appropriate first aid for suspected MI. Lack of response to antacids argues against GERD." },
            
            { id: "sob", text: "Any trouble breathing?",
              answer: "A little bit. I feel like I can't take a deep breath. It's hard to say if it's the chest pressure or if I'm just anxious.",
              tier: "essential", linkedDx: ["Acute Coronary Syndrome"],
              reasoning: "Dyspnea with chest pain suggests significant ischemia." },
            
            { id: "diaphoresis", text: "Have you been sweating?",
              answer: "Yes, I broke out in a cold sweat. My shirt was soaked. That's what really scared my wife.",
              tier: "essential", linkedDx: ["Acute Coronary Syndrome"],
              reasoning: "Diaphoresis with chest pain is classic sympathetic activation from ischemia." },
            
            { id: "nausea", text: "Any nausea or vomiting?",
              answer: "I felt really nauseous and threw up once. Couldn't even drink water without feeling sick.",
              tier: "essential", linkedDx: ["Acute Coronary Syndrome"],
              reasoning: "Nausea/vomiting with chest pain suggests inferior MI (vagal activation)." },
            
            { id: "cad_risk_factors", text: "Tell me about your health habits.",
              answer: "I smoke a pack a day, have for 30 years. I don't exercise. My diet isn't great - lots of fast food. I've gained weight. I have high blood pressure but I don't always take my medicine. I know my cholesterol is high but I never took the statin they prescribed.",
              tier: "essential", linkedDx: ["Acute Coronary Syndrome"],
              reasoning: "Multiple cardiac risk factors: smoking, sedentary, obesity, HTN, hyperlipidemia." },
            
            { id: "family_history_cardiac", text: "Any family history of heart disease?",
              answer: "My dad had a heart attack at 58 - he survived but had to have bypass surgery. His brother died of a heart attack at 62. My mom has diabetes and high blood pressure.",
              tier: "essential", linkedDx: ["Acute Coronary Syndrome"],
              reasoning: "Strong family history of premature CAD - father MI at 58." },
            
            { id: "diabetes", text: "Do you have diabetes?",
              answer: "I was told I'm pre-diabetic but I don't take anything for it. I'm supposed to watch my diet but I haven't really changed much.",
              tier: "essential", linkedDx: ["Acute Coronary Syndrome"],
              reasoning: "Pre-diabetes/metabolic syndrome adds to cardiac risk." },
            
            { id: "erectile_dysfunction", text: "Any problems with sexual function?",
              answer: "Actually yeah, I've had trouble with that for the past couple years. I was too embarrassed to bring it up.",
              tier: "helpful", linkedDx: ["Acute Coronary Syndrome"],
              reasoning: "ED is a marker of endothelial dysfunction and often precedes CAD by 2-3 years." },
            
            { id: "leg_pain_walking", text: "Any pain in your legs when you walk?",
              answer: "My calves cramp up if I walk too far. Goes away when I stop.",
              tier: "helpful", linkedDx: ["Acute Coronary Syndrome"],
              reasoning: "Claudication suggests peripheral arterial disease - indicates systemic atherosclerosis." }
        ]
    },
    
    // More expanded narratives would follow for other cases...
};

// Export for use
module.exports = { newAICases, expandedPatientStories };
