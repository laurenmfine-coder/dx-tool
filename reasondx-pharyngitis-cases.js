// ============================================================
// ReasonDx Pharyngitis & Throat Infection Case Templates
// Based on UpToDate Clinical Guidelines
// ============================================================

const pharyngitisCases = [
    // ==================== ACUTE PHARYNGITIS ====================
    {
        id: "acute-pharyngitis",
        title: "Sore Throat",
        category: "ENT/Infectious Disease",
        icon: "🗣️",
        difficulty: "foundational",
        urgency: "non-urgent",
        guidelineReferences: [
            {
                name: "IDSA Clinical Practice Guidelines for GAS Pharyngitis 2012",
                citation: "Shulman ST, et al. Clin Infect Dis. 2012;55:1279",
                keyPoints: [
                    "GAS causes 5-15% of adult pharyngitis cases",
                    "Clinical features cannot reliably distinguish GAS from viral",
                    "Testing recommended before antibiotic treatment",
                    "RADT has high specificity; negative result in adults doesn't require backup culture",
                    "Penicillin remains first-line treatment for GAS pharyngitis"
                ]
            },
            {
                name: "UpToDate: Evaluation of Acute Pharyngitis in Adults",
                citation: "Chow AW, Doron S. UpToDate 2025",
                keyPoints: [
                    "Centor criteria help identify patients who need GAS testing",
                    "Viral pharyngitis: cough, coryza, conjunctivitis, hoarseness, oral ulcers",
                    "GAS pharyngitis: sudden onset, fever, exudates, tender anterior cervical nodes",
                    "Consider HIV/STI testing in patients with risk factors",
                    "Mononucleosis: prolonged symptoms, splenomegaly, atypical lymphocytes"
                ]
            }
        ],
        
        variants: {
            "male-22-gas": {
                name: "J.M.",
                age: 22,
                gender: "male",
                chiefComplaint: "Terrible sore throat for 2 days with fever",
                patientProfile: {
                    smokingStatus: 'never',
                    alcoholUse: 'social',
                    drugUse: 'none',
                    occupation: 'college student',
                    livingStatus: 'dormitory',
                    pmhCategory: 'healthy',
                    allergyType: 'none',
                    surgicalHistory: 'none',
                    familyHistoryType: 'noSignificant'
                },
                variantDescription: "Classic Group A Streptococcal pharyngitis in a college student",
                
                vitalSigns: {
                    BP: "118/72",
                    HR: 96,
                    Temp: "102.8°F",
                    RR: 16,
                    SpO2: "99%"
                },
                
                missedConsequences: {
                    "GAS Pharyngitis": "Untreated GAS can lead to acute rheumatic fever, post-streptococcal glomerulonephritis, and peritonsillar abscess.",
                    "Peritonsillar Abscess": "Progression from pharyngitis - requires drainage. Can cause airway obstruction.",
                    "Acute HIV Infection": "Acute retroviral syndrome often presents with pharyngitis. Missing early HIV delays treatment.",
                    "Infectious Mononucleosis": "If amoxicillin given for presumed GAS, causes diffuse rash. Avoid contact sports due to splenic rupture risk."
                },
                
                commonPitfalls: [
                    "Empirically treating pharyngitis without testing for GAS",
                    "Prescribing antibiotics for viral pharyngitis (majority of cases)",
                    "Not considering mononucleosis in prolonged pharyngitis with fatigue",
                    "Missing acute HIV infection in patients with risk factors",
                    "Using amoxicillin empirically (causes rash if mononucleosis present)",
                    "Relying solely on clinical features to diagnose GAS",
                    "Not asking about sexual history in sexually active young adults"
                ],
                
                mcqs: [
                    {
                        id: "mcq1",
                        timing: "after-history",
                        question: "A 22-year-old college student presents with acute-onset sore throat, fever of 102.8°F, and tender anterior cervical lymph nodes. He has NO cough, coryza, or hoarseness. His Centor score is 4. What is the most appropriate next step?",
                        options: [
                            { text: "Prescribe penicillin empirically based on high Centor score", correct: false, explanation: "Even with Centor 4, positive predictive value is only ~25-50%. Testing is still recommended." },
                            { text: "Perform rapid strep test (RADT)", correct: true, explanation: "RADT should be performed even with high clinical suspicion. High specificity confirms diagnosis." },
                            { text: "Prescribe azithromycin for 5 days", correct: false, explanation: "GAS is not confirmed yet. Penicillin (not azithromycin) remains first-line for GAS." },
                            { text: "Order heterophile antibody test first", correct: false, explanation: "Monospot appropriate if mononucleosis suspected, but initial GAS testing is priority." }
                        ]
                    },
                    {
                        id: "mcq2",
                        timing: "after-exam",
                        question: "The rapid strep test returns POSITIVE. The patient reports a 'penicillin allergy' - he had stomach upset when taking amoxicillin as a child. What is the most appropriate antibiotic choice?",
                        options: [
                            { text: "Azithromycin 500mg day 1, then 250mg days 2-5", correct: false, explanation: "GI upset is NOT a true allergy. Reserve macrolides for true penicillin allergy." },
                            { text: "Penicillin V 500mg BID or TID x 10 days", correct: true, explanation: "GI upset is intolerance, not allergy. Penicillin remains first-line." },
                            { text: "Amoxicillin-clavulanate 875mg BID x 10 days", correct: false, explanation: "Broader spectrum than needed. More GI side effects." },
                            { text: "Cephalexin 500mg BID x 10 days", correct: false, explanation: "Cephalexin appropriate but use penicillin for simple intolerance." }
                        ]
                    },
                    {
                        id: "mcq3",
                        timing: "after-workup",
                        question: "A roommate of this patient is asymptomatic and wants to be tested 'to be safe.' What is the appropriate management?",
                        options: [
                            { text: "Test and treat if positive", correct: false, explanation: "Testing asymptomatic contacts is NOT recommended. Positive may reflect carrier state." },
                            { text: "Prescribe prophylactic antibiotics", correct: false, explanation: "Antibiotic prophylaxis not indicated for routine GAS exposure." },
                            { text: "No testing needed - observe for symptoms", correct: true, explanation: "Asymptomatic contacts should NOT be tested. GAS carriage is common and doesn't require treatment." },
                            { text: "Test throat culture only", correct: false, explanation: "Neither RADT nor culture should be performed on asymptomatic contacts." }
                        ]
                    }
                ],
                
                allDiagnoses: [
                    { name: "Group A Streptococcal Pharyngitis", correctCategory: "most-likely", rationale: "Acute onset, high fever, exudates, anterior cervical adenopathy, NO cough/coryza. Centor 4. Positive RADT." },
                    { name: "Viral Pharyngitis", correctCategory: "likely", rationale: "Most common cause overall, but absence of viral symptoms makes this less likely." },
                    { name: "Infectious Mononucleosis", correctCategory: "must-not-miss", rationale: "College student at risk. Would expect more fatigue, posterior cervical nodes." },
                    { name: "Acute HIV Infection", correctCategory: "must-not-miss", rationale: "Pharyngitis with mucocutaneous ulcers and risk factors should prompt HIV testing." },
                    { name: "Peritonsillar Abscess", correctCategory: "must-not-miss", rationale: "Would have trismus, 'hot potato' voice, uvular deviation." },
                    { name: "Gonococcal Pharyngitis", correctCategory: "less-likely", rationale: "Consider with receptive oral sex history." }
                ],
                
                oldcartsNarrative: "My throat started killing me about 2 days ago. It came on really fast - I felt fine in the morning and by that afternoon I could barely swallow. Fever hit that night - I checked and it was 102 something. The pain is on both sides but maybe worse on the left. I'd say 8 out of 10 for pain. I don't have a cough or stuffy nose. My lymph nodes in my neck are swollen and tender. My roommate had strep last week.",
                
                historyQuestions: [
                    { id: "onset_character", text: "How did your sore throat start?",
                      answer: "Very sudden. I was fine in the morning, and by 3pm I had a really bad sore throat.",
                      tier: "essential", linkedDx: ["Group A Streptococcal Pharyngitis"],
                      reasoning: "SUDDEN onset favors bacterial (GAS). Viral pharyngitis typically has gradual onset." },
                    
                    { id: "associated_symptoms", text: "Do you have any cough, runny nose, or hoarseness?",
                      answer: "No, none of those. Just the sore throat and fever.",
                      tier: "essential", linkedDx: ["Group A Streptococcal Pharyngitis", "Viral Pharyngitis"],
                      reasoning: "ABSENCE of cough/coryza/hoarseness suggests GAS. These symptoms favor viral etiology." },
                    
                    { id: "fever", text: "Have you measured your temperature?",
                      answer: "Yeah, it's been running around 102-103.",
                      tier: "essential", linkedDx: ["Group A Streptococcal Pharyngitis"],
                      reasoning: "High fever (>101°F) more common with GAS than typical viral pharyngitis." },
                    
                    { id: "sick_contacts", text: "Has anyone around you been sick?",
                      answer: "My roommate had strep throat last week.",
                      tier: "essential", linkedDx: ["Group A Streptococcal Pharyngitis"],
                      reasoning: "Exposure to confirmed GAS increases pretest probability significantly." },
                    
                    { id: "difficulty_swallowing", text: "Any difficulty opening your mouth or change in your voice?",
                      answer: "No, I can open my mouth fine. Voice is normal.",
                      tier: "essential", linkedDx: ["Peritonsillar Abscess"],
                      reasoning: "Trismus and 'hot potato voice' = red flags for peritonsillar abscess." },
                    
                    { id: "allergies", text: "Any medication allergies?",
                      answer: "I had some stomach upset when I took amoxicillin as a kid.",
                      tier: "essential", linkedDx: ["Group A Streptococcal Pharyngitis"],
                      reasoning: "GI upset is intolerance, NOT allergy. Patient can safely receive penicillin." }
                ],
                
                physicalExamFindings: [
                    { id: "vitals_review", text: "Review vital signs", category: "Vitals",
                      finding: "BP 118/72, HR 96, Temp 102.8°F, RR 16, SpO2 99%. Febrile with mild tachycardia.",
                      tier: "essential", linkedDx: ["Group A Streptococcal Pharyngitis"],
                      reasoning: "Fever >101°F is one of the Centor criteria." },
                    
                    { id: "oropharynx", text: "Examine the oropharynx", category: "HEENT",
                      finding: "Bilateral tonsillar erythema and enlargement (3+). White-yellow exudates on both tonsils. No peritonsillar bulging. Uvula midline. Palatal petechiae present.",
                      tier: "essential", linkedDx: ["Group A Streptococcal Pharyngitis"],
                      reasoning: "Tonsillar exudates + palatal petechiae classic for GAS. Midline uvula rules out PTA." },
                    
                    { id: "lymph_nodes", text: "Palpate cervical lymph nodes", category: "Lymph",
                      finding: "Bilateral ANTERIOR cervical lymphadenopathy - tender, mobile, 1.5cm. Posterior chain not prominent.",
                      tier: "essential", linkedDx: ["Group A Streptococcal Pharyngitis", "Infectious Mononucleosis"],
                      reasoning: "ANTERIOR cervical adenopathy = GAS. POSTERIOR = think mononucleosis." },
                    
                    { id: "trismus", text: "Assess jaw opening", category: "HEENT",
                      finding: "Full mouth opening without difficulty. No trismus.",
                      tier: "essential", linkedDx: ["Peritonsillar Abscess"],
                      reasoning: "Trismus = red flag for peritonsillar abscess." },
                    
                    { id: "abdominal", text: "Abdominal examination", category: "Abdomen",
                      finding: "Soft, non-tender. No hepatosplenomegaly.",
                      tier: "helpful", linkedDx: ["Infectious Mononucleosis"],
                      reasoning: "Splenomegaly warrants contact sports restriction." }
                ],
                
                workupOptions: {
                    labs: [
                        { id: "radt", name: "Rapid Antigen Detection Test (Rapid Strep)",
                          result: "POSITIVE for Group A Streptococcus",
                          tier: "essential", reasoning: "High specificity (95-99%). Positive result confirms GAS." },
                        { id: "throat_culture", name: "Throat culture",
                          result: "Not needed if RADT positive.",
                          tier: "helpful", reasoning: "In adults, negative RADT typically sufficient." },
                        { id: "monospot", name: "Heterophile antibody test (Monospot)",
                          result: "Not indicated - short duration, classic GAS features",
                          tier: "less-helpful", reasoning: "Order if symptoms >1 week with marked fatigue." }
                    ],
                    imaging: [
                        { id: "no_imaging", name: "No imaging needed",
                          result: "Pharyngitis is a clinical + microbiologic diagnosis.",
                          tier: "essential", reasoning: "Imaging only if abscess or deep neck infection suspected." }
                    ],
                    procedures: [
                        { id: "none_needed", name: "No procedures needed",
                          result: "Uncomplicated pharyngitis requires no procedures",
                          tier: "essential", reasoning: "Procedures only for peritonsillar abscess." }
                    ],
                    treatments: [
                        { id: "penicillin_v", name: "Penicillin V 500mg PO BID or TID x 10 days",
                          result: "First-line treatment for GAS pharyngitis.",
                          tier: "essential", reasoning: "Penicillin remains FIRST-LINE. No GAS resistance. Prevents rheumatic fever." },
                        { id: "amoxicillin", name: "Amoxicillin 500mg PO BID x 10 days",
                          result: "Alternative to penicillin. Caution if mononucleosis possible.",
                          tier: "essential", reasoning: "Often preferred due to palatability. AVOID if mono suspected." },
                        { id: "supportive", name: "Supportive care: NSAIDs, acetaminophen, salt water gargles",
                          result: "Symptom relief.",
                          tier: "essential", reasoning: "Antibiotics speed recovery by ~1 day. Supportive care important." }
                    ]
                },
                
                expertReasoning: {
                    keyObservations: [
                        "Centor score 4/4: Fever, tonsillar exudates, tender anterior adenopathy, absence of cough",
                        "Sudden onset (hours, not days) - classic for GAS",
                        "Known GAS exposure (roommate) increases pretest probability",
                        "College dormitory = higher GAS prevalence",
                        "No features of peritonsillar abscess"
                    ],
                    differentialNarrowing: [
                        "Viral pharyngitis - absence of cough/coryza argues against",
                        "Mononucleosis - short duration, anterior nodes, no splenomegaly make less likely",
                        "Peritonsillar abscess - no trismus, symmetric tonsils, midline uvula rule out"
                    ],
                    criticalDecisionPoints: [
                        "Centor 4 still requires testing - PPV only ~25-50%",
                        "GI upset from childhood amoxicillin is intolerance, not allergy",
                        "Positive RADT confirms diagnosis - backup culture not needed",
                        "10-day course essential for GAS - prevents rheumatic fever"
                    ],
                    teachingPoints: [
                        "GAS causes only 5-15% of adult pharyngitis - most is viral",
                        "Centor criteria: Fever, Exudates, Anterior adenopathy, No cough",
                        "Centor ≥3 = test for GAS. Centor <3 = can forego testing",
                        "SUDDEN onset + NO cough = think bacterial. GRADUAL onset + cough = think viral",
                        "ANTERIOR cervical nodes = GAS. POSTERIOR cervical nodes = mononucleosis",
                        "Penicillin remains first-line for GAS - no resistance, prevents rheumatic fever"
                    ]
                },
                
                closureScript: {
                    diagnosis: "You have strep throat - a bacterial infection caused by Group A Streptococcus. Your rapid strep test was positive.",
                    plan: "I'm prescribing penicillin for 10 days. Take the full course even when you feel better - this prevents complications like rheumatic fever. Take ibuprofen or Tylenol for pain. You should feel better within 2-3 days.",
                    warningsToDiscuss: "Return if you develop: inability to swallow or open your mouth, drooling, voice changes, difficulty breathing, or if symptoms worsen after 2-3 days on antibiotics.",
                    addressingConcerns: "The stomach upset with amoxicillin as a child is not a true allergy. Penicillin is safe and the best treatment. Taking it with food can help."
                },
                
                clinicalPearl: "The 'Modified Centor Score' (McIsaac) adds age adjustments: +1 for age 3-14, 0 for 15-44, -1 for ≥45. GAS is more common in children and less common in older adults."
            },
            "female-28-viral": {
                name: "S.L.",
                age: 28,
                gender: "female",
                chiefComplaint: "Sore throat with cold symptoms for 4 days",
                patientProfile: {
                    smokingStatus: 'never',
                    alcoholUse: 'occasional',
                    drugUse: 'none',
                    occupation: 'elementary teacher',
                    livingStatus: 'withPartner',
                    pmhCategory: 'healthy',
                    allergyType: 'none',
                    surgicalHistory: 'none',
                    familyHistoryType: 'noSignificant'
                },
                variantDescription: "Viral upper respiratory infection - no antibiotics needed",
                
                vitalSigns: {
                    BP: "112/68",
                    HR: 76,
                    Temp: "99.4°F",
                    RR: 14,
                    SpO2: "99%"
                },
                
                missedConsequences: {
                    "Viral Pharyngitis": "Self-limited. Inappropriate antibiotics cause C. diff, resistance, and allergic reactions.",
                    "GAS Pharyngitis": "If GAS is missed, risk of rheumatic fever - but clinical features here strongly suggest viral.",
                    "COVID-19": "If SARS-CoV-2, isolation prevents transmission.",
                    "Influenza": "Antivirals within 48 hours can shorten illness - but patient is day 4."
                },
                
                commonPitfalls: [
                    "Prescribing antibiotics for viral URI despite no indication",
                    "Testing for GAS when viral syndrome is obvious",
                    "Not counseling on expected duration of viral illness (7-10 days)",
                    "Ordering unnecessary blood work for uncomplicated viral URI"
                ],
                
                mcqs: [
                    {
                        id: "mcq1",
                        timing: "after-history",
                        question: "A 28-year-old teacher presents with 4 days of sore throat, nasal congestion, cough, and hoarseness. Temperature is 99.4°F. What is the most appropriate next step?",
                        options: [
                            { text: "Rapid strep test", correct: false, explanation: "Cough, coryza, and hoarseness strongly suggest viral. GAS testing is low yield." },
                            { text: "Clinical diagnosis of viral URI - supportive care only", correct: true, explanation: "Clinical features define a viral syndrome. No testing or antibiotics needed." },
                            { text: "Prescribe azithromycin empirically", correct: false, explanation: "Antibiotics provide no benefit for viral infection." },
                            { text: "Order monospot and CBC", correct: false, explanation: "Short duration and typical viral symptoms don't warrant mononucleosis workup." }
                        ]
                    },
                    {
                        id: "mcq2",
                        timing: "after-exam",
                        question: "The patient asks 'Can I please just have antibiotics? I have a big presentation next week.' What is the most appropriate response?",
                        options: [
                            { text: "Prescribe a short course of antibiotics", correct: false, explanation: "Antibiotics do NOT speed recovery from viral infections." },
                            { text: "Explain that antibiotics won't help and could cause harm", correct: true, explanation: "Educate about viral vs bacterial, discuss antibiotic risks. Offer symptom management." },
                            { text: "Order strep test to satisfy the patient", correct: false, explanation: "Testing not indicated when clinical picture clearly suggests viral." },
                            { text: "Prescribe antibiotics with delayed instructions", correct: false, explanation: "Not appropriate for clear viral syndromes." }
                        ]
                    },
                    {
                        id: "mcq3",
                        timing: "after-workup",
                        question: "Which symptom would prompt GAS testing?",
                        options: [
                            { text: "Sore throat worsening despite 5 days", correct: false, explanation: "Viral sore throat can persist. Duration alone doesn't indicate GAS." },
                            { text: "High fever (102°F) and tonsillar exudates without cough", correct: true, explanation: "High fever + exudates + resolution of cough would warrant GAS testing." },
                            { text: "Yellow-green nasal discharge", correct: false, explanation: "Colored discharge is NORMAL viral progression - NOT bacterial." },
                            { text: "Continued hoarseness", correct: false, explanation: "Hoarseness common with viral laryngitis. Does not suggest GAS." }
                        ]
                    }
                ],
                
                allDiagnoses: [
                    { name: "Viral Upper Respiratory Infection", correctCategory: "most-likely", rationale: "Gradual onset, cough, coryza, hoarseness, low-grade fever. Sick contacts." },
                    { name: "Group A Streptococcal Pharyngitis", correctCategory: "less-likely", rationale: "Cough and coryza strongly argue AGAINST GAS. Centor score 0-1." },
                    { name: "Influenza", correctCategory: "likely", rationale: "Would expect more myalgias, higher fever. Possible." },
                    { name: "COVID-19", correctCategory: "likely", rationale: "Overlapping symptoms. Test if high-risk." },
                    { name: "Infectious Mononucleosis", correctCategory: "less-likely", rationale: "Short duration, no marked fatigue." }
                ],
                
                oldcartsNarrative: "I've had this cold for about 4 days now. Started with a scratchy throat, then the next day I got all stuffed up and started coughing. My voice has been hoarse for the past 2 days. The sore throat is more annoying than severe - maybe 4 out of 10. I've had a slight fever but nothing major. My whole class has been sick.",
                
                historyQuestions: [
                    { id: "onset", text: "How did your symptoms start?",
                      answer: "Gradually over a day or two. Started with throat scratchiness, then stuffiness and cough came on.",
                      tier: "essential", linkedDx: ["Viral Upper Respiratory Infection"],
                      reasoning: "GRADUAL onset with prodrome = viral." },
                    
                    { id: "cough", text: "Tell me about your cough.",
                      answer: "It's mostly dry, sometimes a little productive. Worse at night.",
                      tier: "essential", linkedDx: ["Viral Upper Respiratory Infection"],
                      reasoning: "COUGH strongly argues against GAS." },
                    
                    { id: "nasal_symptoms", text: "Any nasal symptoms?",
                      answer: "I'm totally stuffed up. Started clear and now it's more yellow-ish.",
                      tier: "essential", linkedDx: ["Viral Upper Respiratory Infection"],
                      reasoning: "Rhinorrhea/congestion = viral. Yellow discharge is NORMAL viral progression." },
                    
                    { id: "voice_changes", text: "You mentioned hoarseness?",
                      answer: "Yes, my voice has been raspy for 2 days.",
                      tier: "essential", linkedDx: ["Viral Upper Respiratory Infection"],
                      reasoning: "HOARSENESS = laryngeal involvement = viral. GAS doesn't cause hoarseness." },
                    
                    { id: "fever", text: "What's your temperature been?",
                      answer: "Low-grade, like 99 something.",
                      tier: "essential", linkedDx: ["Viral Upper Respiratory Infection"],
                      reasoning: "Low-grade fever typical of viral URI." }
                ],
                
                physicalExamFindings: [
                    { id: "vitals", text: "Review vital signs", category: "Vitals",
                      finding: "BP 112/68, HR 76, Temp 99.4°F, RR 14, SpO2 99%.",
                      tier: "essential", linkedDx: ["Viral Upper Respiratory Infection"],
                      reasoning: "Normal vitals with low-grade fever consistent with viral URI." },
                    
                    { id: "nasal_exam", text: "Examine nose", category: "HEENT",
                      finding: "Nasal mucosa erythematous and edematous. Clear to slightly yellow discharge.",
                      tier: "essential", linkedDx: ["Viral Upper Respiratory Infection"],
                      reasoning: "Nasal inflammation confirms rhinitis component." },
                    
                    { id: "oropharynx", text: "Examine the oropharynx", category: "HEENT",
                      finding: "Mild pharyngeal erythema. Tonsils normal size without exudates. Posterior pharyngeal cobblestoning.",
                      tier: "essential", linkedDx: ["Viral Upper Respiratory Infection"],
                      reasoning: "Mild erythema WITHOUT exudates. Cobblestoning = post-nasal drip." },
                    
                    { id: "lymph_nodes", text: "Palpate cervical lymph nodes", category: "Lymph",
                      finding: "Small, non-tender cervical nodes bilaterally.",
                      tier: "essential", linkedDx: ["Viral Upper Respiratory Infection"],
                      reasoning: "Non-tender, non-prominent nodes = viral." },
                    
                    { id: "lungs", text: "Lung examination", category: "Respiratory",
                      finding: "Clear to auscultation bilaterally.",
                      tier: "essential", linkedDx: ["Viral Upper Respiratory Infection"],
                      reasoning: "Clear lungs = upper respiratory involvement only." }
                ],
                
                workupOptions: {
                    labs: [
                        { id: "no_testing", name: "No laboratory testing indicated",
                          result: "Viral URI is a clinical diagnosis.",
                          tier: "essential", reasoning: "Clinical features clearly indicate viral syndrome." },
                        { id: "radt", name: "Rapid strep test",
                          result: "NOT INDICATED - cough, coryza, hoarseness make GAS unlikely.",
                          tier: "less-helpful", reasoning: "Positive may represent carriage (10-15% of adults)." }
                    ],
                    imaging: [
                        { id: "no_imaging", name: "No imaging needed",
                          result: "Uncomplicated URI requires no imaging",
                          tier: "essential", reasoning: "Imaging not indicated for viral URI." }
                    ],
                    procedures: [
                        { id: "none", name: "No procedures needed",
                          result: "Supportive care only",
                          tier: "essential", reasoning: "No procedures indicated." }
                    ],
                    treatments: [
                        { id: "supportive", name: "Supportive care: rest, fluids, symptomatic treatment",
                          result: "NSAIDs/acetaminophen, honey for cough, saline nasal spray",
                          tier: "essential", reasoning: "Mainstay of viral URI treatment. Counsel on 7-10 day duration." },
                        { id: "no_antibiotics", name: "Antibiotics NOT indicated",
                          result: "Viral infection - antibiotics provide no benefit",
                          tier: "essential", reasoning: "Antibiotics don't shorten viral illness, cause side effects, promote resistance." }
                    ]
                },
                
                expertReasoning: {
                    keyObservations: [
                        "Viral syndrome triad: cough + coryza + hoarseness",
                        "Gradual onset over 1-2 days",
                        "Low-grade fever only (99.4°F)",
                        "Sore throat is MINOR component",
                        "Community outbreak among students and teachers"
                    ],
                    differentialNarrowing: [
                        "GAS pharyngitis - ruled out by cough, coryza, hoarseness (Centor 0-1)",
                        "Influenza - possible but gradual onset, no severe myalgias"
                    ],
                    criticalDecisionPoints: [
                        "Do NOT test for GAS when viral features present",
                        "Do NOT prescribe antibiotics despite patient request",
                        "Counsel on expected duration (7-10 days)"
                    ],
                    teachingPoints: [
                        "Cough + coryza + hoarseness = viral. GAS testing is low yield.",
                        "Yellow/green nasal discharge is NORMAL viral progression - NOT bacterial sinusitis",
                        "Antibiotics for viral URI: no benefit + C. diff risk + resistance",
                        "Most sore throats in adults are viral (85-95%)"
                    ]
                },
                
                closureScript: {
                    diagnosis: "You have a viral upper respiratory infection - a cold. This is caused by a virus, not bacteria.",
                    plan: "Antibiotics won't help and could cause harm. For symptoms: take ibuprofen or Tylenol, use saline nasal spray, honey in tea for cough. Most people feel worst around days 3-5, then improve over the next week.",
                    warningsToDiscuss: "Come back if: high fever over 101, severe throat pain with difficulty swallowing, difficulty breathing, or symptoms lasting more than 10 days.",
                    addressingConcerns: "I understand you want to feel better quickly. Unfortunately, antibiotics won't speed recovery from a viral infection. The symptom treatments I mentioned can help while your body fights off the virus."
                },
                
                clinicalPearl: "The presence of COUGH is the most powerful single predictor of viral pharyngitis. Cough has a negative likelihood ratio of 0.5 for GAS. When cough is present with nasal symptoms, probability of GAS drops below 5%."
            }
        }
    },
    // ==================== PERITONSILLAR ABSCESS ====================
    {
        id: "peritonsillar-abscess",
        title: "Severe Unilateral Sore Throat",
        category: "ENT/Emergency",
        icon: "😮",
        difficulty: "advanced",
        urgency: "emergent",
        guidelineReferences: [
            {
                name: "UpToDate: Peritonsillar Cellulitis and Abscess",
                citation: "Wald ER. UpToDate 2025",
                keyPoints: [
                    "Most common deep neck space infection",
                    "Cardinal features: severe sore throat, trismus, 'hot potato' voice, uvular deviation",
                    "Ultrasound can confirm abscess vs cellulitis",
                    "Treatment: antibiotics + drainage",
                    "Needle aspiration equally effective as I&D"
                ]
            }
        ],
        
        variants: {
            "male-19-pta": {
                name: "T.R.",
                age: 19,
                gender: "male",
                chiefComplaint: "Terrible sore throat - can barely open my mouth or swallow",
                patientProfile: {
                    smokingStatus: 'smoker',
                    alcoholUse: 'heavy',
                    drugUse: 'marijuana',
                    occupation: 'college student',
                    livingStatus: 'dormitory',
                    pmhCategory: 'healthy',
                    allergyType: 'none',
                    surgicalHistory: 'none',
                    familyHistoryType: 'noSignificant'
                },
                variantDescription: "Classic peritonsillar abscess requiring drainage",
                
                vitalSigns: {
                    BP: "128/78",
                    HR: 108,
                    Temp: "102.4°F",
                    RR: 18,
                    SpO2: "98%"
                },
                
                missedConsequences: {
                    "Peritonsillar Abscess": "Without drainage, can progress to airway obstruction or spread to parapharyngeal space.",
                    "Deep Neck Space Infection": "Parapharyngeal spread leads to Lemierre syndrome, mediastinitis, or carotid erosion.",
                    "Airway Compromise": "Severe swelling or rupture can obstruct airway.",
                    "Sepsis": "Untreated infection with systemic spread."
                },
                
                commonPitfalls: [
                    "Missing the diagnosis by not examining oropharynx carefully",
                    "Attributing symptoms to 'severe pharyngitis' without recognizing asymmetry",
                    "Delaying drainage - antibiotics alone insufficient for moderate-large abscess",
                    "Not recognizing trismus as key distinguishing feature",
                    "Missing signs of impending airway compromise"
                ],
                
                mcqs: [
                    {
                        id: "mcq1",
                        timing: "after-history",
                        question: "A 19-year-old presents with severe left-sided sore throat, fever, trismus, and muffled voice. Which finding is MOST concerning for impending airway compromise?",
                        options: [
                            { text: "Temperature of 102.4°F", correct: false, explanation: "High fever indicates systemic response but not specifically airway compromise." },
                            { text: "Drooling and inability to handle secretions", correct: true, explanation: "Drooling indicates inability to swallow - sign of severe obstruction requiring urgent intervention." },
                            { text: "Heart rate of 108", correct: false, explanation: "Tachycardia expected with fever and pain." },
                            { text: "Uvular deviation to the right", correct: false, explanation: "Confirms PTA location but doesn't indicate airway compromise." }
                        ]
                    },
                    {
                        id: "mcq2",
                        timing: "after-exam",
                        question: "Exam reveals uvular deviation, bulging soft palate, and fluctuance. Trismus limits mouth opening to 2cm. What is the most appropriate initial management?",
                        options: [
                            { text: "Oral antibiotics and outpatient follow-up", correct: false, explanation: "Oral antibiotics alone inadequate for moderate-large abscess. Needs drainage." },
                            { text: "IV antibiotics + ENT consultation for drainage", correct: true, explanation: "Standard of care: IV antibiotics + drainage for confirmed abscess." },
                            { text: "CT scan before any intervention", correct: false, explanation: "Clinical diagnosis is clear. Don't delay treatment." },
                            { text: "Trial of IV dexamethasone first", correct: false, explanation: "Steroids don't replace definitive treatment." }
                        ]
                    },
                    {
                        id: "mcq3",
                        timing: "after-workup",
                        question: "After successful needle aspiration yields 8mL of pus and IV antibiotics started, the patient reports significant relief. What is appropriate disposition?",
                        options: [
                            { text: "Discharge home with oral antibiotics if tolerating PO", correct: true, explanation: "If improved after drainage and tolerating oral intake, outpatient management with close follow-up is appropriate." },
                            { text: "Admission for IV antibiotics regardless of response", correct: false, explanation: "Routine admission not required if improved, tolerating PO, no airway concern." },
                            { text: "Immediate tonsillectomy", correct: false, explanation: "Reserved for airway compromise, failure of drainage, or recurrent PTA." },
                            { text: "Repeat needle aspiration before discharge", correct: false, explanation: "Successful aspiration with improvement doesn't require repeat procedure." }
                        ]
                    }
                ],
                
                allDiagnoses: [
                    { name: "Peritonsillar Abscess", correctCategory: "most-likely", rationale: "Trismus + uvular deviation + 'hot potato' voice + severe unilateral symptoms. Fluctuance confirms." },
                    { name: "Peritonsillar Cellulitis", correctCategory: "likely", rationale: "Same presentation without discrete abscess. Ultrasound differentiates." },
                    { name: "Severe Tonsillopharyngitis", correctCategory: "likely", rationale: "Would be bilateral, symmetric. No trismus or uvular deviation." },
                    { name: "Parapharyngeal Space Infection", correctCategory: "must-not-miss", rationale: "PTA can rupture into parapharyngeal space. Watch for sepsis, neck swelling." },
                    { name: "Lemierre Syndrome", correctCategory: "must-not-miss", rationale: "F. necrophorum causing internal jugular thrombophlebitis. Suspect if persistent fevers, pulmonary emboli." },
                    { name: "Infectious Mononucleosis", correctCategory: "likely", rationale: "Can cause severe tonsillar swelling but would be bilateral." }
                ],
                
                oldcartsNarrative: "My throat has been killing me for about 5 days. It started like a regular sore throat but got way worse on the left side. Now I can barely open my mouth. Swallowing is almost impossible. My voice sounds weird, kind of muffled. The pain is 9 or 10 out of 10 on the left side. I've been smoking and drinking at parties.",
                
                historyQuestions: [
                    { id: "onset_progression", text: "How did this start and progress?",
                      answer: "Started 5 days ago as a regular sore throat but got way worse on the left side over the last 2-3 days.",
                      tier: "essential", linkedDx: ["Peritonsillar Abscess"],
                      reasoning: "PTA often follows untreated pharyngitis. Unilateral progression is key." },
                    
                    { id: "trismus", text: "Can you open your mouth normally?",
                      answer: "No, it hurts so much to open my jaw. I can only open it a little bit.",
                      tier: "essential", linkedDx: ["Peritonsillar Abscess"],
                      reasoning: "TRISMUS is cardinal feature - irritation of pterygoid muscles. Present in 2/3 of cases." },
                    
                    { id: "swallowing", text: "How is your swallowing?",
                      answer: "I can barely swallow my own saliva. I've been spitting into a cup.",
                      tier: "essential", linkedDx: ["Peritonsillar Abscess", "Airway Compromise"],
                      reasoning: "Severe odynophagia and drooling indicate significant space-occupying process." },
                    
                    { id: "voice_change", text: "Has your voice changed?",
                      answer: "Yes, it sounds muffled. Like when you have a bad cold but worse.",
                      tier: "essential", linkedDx: ["Peritonsillar Abscess"],
                      reasoning: "'Hot potato voice' = classic PTA finding." },
                    
                    { id: "breathing", text: "Any difficulty breathing?",
                      answer: "Not really having trouble breathing, but my throat feels really swollen.",
                      tier: "essential", linkedDx: ["Airway Compromise"],
                      reasoning: "Assess for stridor, respiratory distress. Absence is reassuring." },
                    
                    { id: "ear_pain", text: "Any ear pain?",
                      answer: "Yeah, my left ear hurts.",
                      tier: "helpful", linkedDx: ["Peritonsillar Abscess"],
                      reasoning: "Referred otalgia common with PTA - shared innervation (CN IX/X)." }
                ],
                
                physicalExamFindings: [
                    { id: "general", text: "General appearance", category: "General",
                      finding: "Ill-appearing young man sitting forward, spitting saliva into a cup. Not in respiratory distress. No stridor.",
                      tier: "essential", linkedDx: ["Peritonsillar Abscess", "Airway Compromise"],
                      reasoning: "Drooling concerning. Absence of stridor reassuring." },
                    
                    { id: "vitals", text: "Review vital signs", category: "Vitals",
                      finding: "BP 128/78, HR 108, Temp 102.4°F, RR 18, SpO2 98%.",
                      tier: "essential", linkedDx: ["Peritonsillar Abscess", "Sepsis"],
                      reasoning: "Febrile with tachycardia. SpO2 normal - airway patent currently." },
                    
                    { id: "trismus_exam", text: "Assess mouth opening", category: "HEENT",
                      finding: "Significant trismus - can only open mouth approximately 2cm.",
                      tier: "essential", linkedDx: ["Peritonsillar Abscess"],
                      reasoning: "TRISMUS present - pathognomonic for peritonsillar process." },
                    
                    { id: "oropharynx", text: "Examine oropharynx (limited by trismus)", category: "HEENT",
                      finding: "Uvula deviated to the RIGHT. LEFT soft palate bulging. Left tonsil displaced medially. Fluctuance palpable on left peritonsillar area.",
                      tier: "essential", linkedDx: ["Peritonsillar Abscess"],
                      reasoning: "UVULAR DEVIATION + soft palate BULGING + FLUCTUANCE = PTA confirmed." },
                    
                    { id: "voice", text: "Assess voice quality", category: "HEENT",
                      finding: "'Hot potato' or muffled voice quality.",
                      tier: "essential", linkedDx: ["Peritonsillar Abscess"],
                      reasoning: "Muffled voice from pharyngeal/palatal swelling. Classic PTA finding." },
                    
                    { id: "neck", text: "Neck examination", category: "Neck",
                      finding: "Left-sided tender submandibular lymphadenopathy. No neck swelling or crepitus.",
                      tier: "essential", linkedDx: ["Peritonsillar Abscess", "Deep Neck Space Infection"],
                      reasoning: "Regional adenopathy expected. Absence of neck swelling reassuring against deep space extension." },
                    
                    { id: "respiratory", text: "Assess airway and breathing", category: "Respiratory",
                      finding: "No stridor. Speaking in full sentences. No accessory muscle use.",
                      tier: "essential", linkedDx: ["Airway Compromise"],
                      reasoning: "No current airway compromise. Can deteriorate - maintain vigilance." }
                ],
                
                workupOptions: {
                    labs: [
                        { id: "cbc", name: "CBC with differential",
                          result: "WBC 18,200 with left shift.",
                          tier: "helpful", reasoning: "Leukocytosis expected. Helps gauge severity." },
                        { id: "bmp", name: "Basic metabolic panel",
                          result: "BUN 28, Cr 1.2 (mild dehydration).",
                          tier: "helpful", reasoning: "Assess hydration. Patient hasn't been able to swallow." },
                        { id: "abscess_culture", name: "Culture of aspirated pus",
                          result: "Mixed flora including streptococci and anaerobes typical.",
                          tier: "helpful", reasoning: "Send if drainage performed. Helps if treatment failure." }
                    ],
                    imaging: [
                        { id: "clinical_diagnosis", name: "No imaging needed - clinical diagnosis",
                          result: "Classic presentation doesn't require imaging confirmation.",
                          tier: "essential", reasoning: "PTA is clinical diagnosis. Imaging delays treatment in clear-cut cases." },
                        { id: "ultrasound", name: "Intraoral or transcervical ultrasound",
                          result: "Confirms abscess vs cellulitis.",
                          tier: "helpful", reasoning: "Helpful if diagnosis uncertain. Can guide aspiration." },
                        { id: "ct_neck", name: "CT neck with contrast",
                          result: "Reserved for suspected deep space extension or failed drainage.",
                          tier: "helpful", reasoning: "Order if neck swelling, failed treatment, or atypical presentation." }
                    ],
                    procedures: [
                        { id: "needle_aspiration", name: "Needle aspiration of peritonsillar abscess",
                          result: "8mL of purulent material aspirated. Immediate symptomatic relief.",
                          tier: "essential", reasoning: "First-line drainage procedure. 94% success rate." },
                        { id: "incision_drainage", name: "Incision and drainage",
                          result: "Alternative to aspiration. More complete drainage but more painful.",
                          tier: "essential", reasoning: "Consider if aspiration fails or recurrent abscess." }
                    ],
                    treatments: [
                        { id: "ampicillin_sulbactam", name: "Ampicillin-sulbactam 3g IV q6h",
                          result: "Covers GAS, S. aureus (MSSA), and oral anaerobes.",
                          tier: "essential", reasoning: "First-line IV antibiotic. If MRSA concern, add vancomycin." },
                        { id: "iv_fluids", name: "IV fluid resuscitation",
                          result: "Patient dehydrated from inability to swallow.",
                          tier: "essential", reasoning: "Address dehydration." },
                        { id: "pain_control", name: "IV pain medication",
                          result: "Ketorolac 30mg IV and/or opioid for severe pain.",
                          tier: "essential", reasoning: "PTA is extremely painful. Adequate analgesia important." },
                        { id: "oral_antibiotics", name: "Amoxicillin-clavulanate 875/125 mg PO BID x 14 days",
                          result: "Transition to oral when able to swallow.",
                          tier: "essential", reasoning: "Step-down therapy after drainage. 14 days total." }
                    ]
                },
                
                expertReasoning: {
                    keyObservations: [
                        "Cardinal features present: severe unilateral sore throat, trismus, 'hot potato' voice, uvular deviation",
                        "Fluctuance confirms ABSCESS (not just cellulitis)",
                        "Unable to swallow - dehydrated, needs IV fluids",
                        "No signs of airway compromise currently",
                        "Smoking is risk factor"
                    ],
                    differentialNarrowing: [
                        "Peritonsillar cellulitis - fluctuance indicates abscess",
                        "Severe pharyngitis - would be bilateral, no trismus",
                        "Deep neck space infection - no neck swelling/crepitus"
                    ],
                    criticalDecisionPoints: [
                        "Trismus + uvular deviation + fluctuance = PTA requiring drainage",
                        "Drooling = close airway monitoring needed",
                        "Moderate-large abscess needs drainage - antibiotics alone insufficient",
                        "Can discharge if: improved after drainage, tolerating PO, no airway concern"
                    ],
                    teachingPoints: [
                        "TRISMUS is KEY distinguishing feature - present in 2/3 of PTA, rare in pharyngitis",
                        "'Hot potato voice' = muffled quality from pharyngeal swelling",
                        "Uvula deviates AWAY from abscess side",
                        "Needle aspiration is first-line drainage - 94% success rate",
                        "Cover GAS + S. aureus + anaerobes = ampicillin-sulbactam",
                        "Complications: airway obstruction, aspiration if ruptures, parapharyngeal spread",
                        "Lemierre syndrome: F. necrophorum + IJV thrombophlebitis → septic emboli"
                    ]
                },
                
                closureScript: {
                    diagnosis: "You have a peritonsillar abscess - a pocket of infection next to your tonsil on the left side. This is why you have severe pain, can't open your mouth, and your voice sounds muffled.",
                    plan: "We need to drain the abscess and give IV antibiotics. I'll numb the area and use a needle to drain the pus. This should give significant relief. After you're feeling better and can swallow, you can go home with oral antibiotics for 14 days.",
                    warningsToDiscuss: "Come back immediately if: difficulty breathing, drooling, worsening neck swelling, high fevers despite antibiotics, or pain returns as severe as before. Follow up with ENT in a few days.",
                    addressingConcerns: "The drainage procedure will be uncomfortable but we'll numb it well, and most people feel dramatic relief afterward. I'd recommend cutting back on smoking as it contributed to this."
                },
                
                clinicalPearl: "The triad of trismus, uvular deviation, and 'hot potato' voice is virtually pathognomonic for peritonsillar abscess. Trismus results from inflammation of the internal pterygoid muscle, which lies just lateral to the peritonsillar space."
            }
        }
    },
    // ==================== DEEP NECK SPACE INFECTION ====================
    {
        id: "deep-neck-infection",
        title: "Severe Sore Throat with Neck Swelling",
        category: "ENT/Emergency",
        icon: "🚨",
        difficulty: "advanced",
        urgency: "emergent",
        guidelineReferences: [
            {
                name: "UpToDate: Deep Neck Space Infections in Adults",
                citation: "Chow AW. UpToDate 2025",
                keyPoints: [
                    "Life-threatening infections requiring prompt diagnosis and treatment",
                    "Most common sources: dental infections, pharyngitis, peritonsillar abscess",
                    "CT with contrast is imaging modality of choice",
                    "Polymicrobial: streptococci, S. aureus, and oral anaerobes",
                    "Complications: airway obstruction, mediastinitis, carotid erosion, Lemierre syndrome"
                ]
            }
        ],
        
        variants: {
            "male-35-parapharyngeal": {
                name: "M.K.",
                age: 35,
                gender: "male",
                chiefComplaint: "Throat pain radiating to neck with swelling - can barely swallow",
                patientProfile: {
                    smokingStatus: 'smoker',
                    alcoholUse: 'heavy',
                    drugUse: 'none',
                    occupation: 'construction worker',
                    livingStatus: 'alone',
                    pmhCategory: 'diabetes',
                    allergyType: 'penicillin-severe',
                    surgicalHistory: 'none',
                    familyHistoryType: 'diabetes'
                },
                variantDescription: "Parapharyngeal space infection with impending complications",
                
                vitalSigns: {
                    BP: "138/88",
                    HR: 118,
                    Temp: "103.6°F",
                    RR: 22,
                    SpO2: "96%"
                },
                
                missedConsequences: {
                    "Parapharyngeal Space Infection": "Can spread to carotid sheath, mediastinum, or skull base. Significant mortality without treatment.",
                    "Airway Obstruction": "Deep neck infections can compress/obstruct airway - potentially fatal.",
                    "Mediastinitis": "Infection spreading to mediastinum has 25% mortality even with treatment.",
                    "Internal Jugular Thrombophlebitis": "Lemierre syndrome - septic thrombophlebitis with metastatic infections.",
                    "Carotid Artery Erosion": "Can cause fatal hemorrhage. 'Herald bleeds' may precede rupture.",
                    "Sepsis": "Systemic infection with multiorgan dysfunction."
                },
                
                commonPitfalls: [
                    "Underestimating severity due to obscured exam",
                    "Delaying imaging when deep space infection suspected",
                    "Inadequate antibiotic coverage (missing anaerobes or resistant organisms)",
                    "Not recognizing signs of airway compromise until too late",
                    "Missing odontogenic source - always examine teeth",
                    "Not considering MRSA in high-risk patients"
                ],
                
                mcqs: [
                    {
                        id: "mcq1",
                        timing: "after-history",
                        question: "A 35-year-old diabetic presents with severe sore throat, neck swelling, high fever, and difficulty swallowing for 3 days. He reports dental extraction 2 weeks ago. Which finding is MOST concerning for carotid sheath involvement?",
                        options: [
                            { text: "Trismus", correct: false, explanation: "Trismus indicates pterygoid muscle involvement but not specifically carotid sheath." },
                            { text: "Horner syndrome (ptosis, miosis, anhidrosis)", correct: true, explanation: "Horner syndrome indicates sympathetic trunk involvement in the carotid sheath. Also watch for CN 9-12 deficits." },
                            { text: "Uvular deviation", correct: false, explanation: "Indicates peritonsillar or parapharyngeal involvement but not specifically carotid sheath." },
                            { text: "Fever of 103.6°F", correct: false, explanation: "Indicates systemic response but doesn't localize to carotid sheath." }
                        ]
                    },
                    {
                        id: "mcq2",
                        timing: "after-exam",
                        question: "CT shows rim-enhancing collection in parapharyngeal space extending toward carotid sheath. The patient has severe penicillin allergy (anaphylaxis). What is the most appropriate empiric antibiotic regimen?",
                        options: [
                            { text: "Vancomycin + piperacillin-tazobactam", correct: false, explanation: "Piperacillin-tazobactam contains penicillin - contraindicated with severe allergy." },
                            { text: "Vancomycin + metronidazole + cefepime", correct: false, explanation: "Cefepime is a cephalosporin - generally avoided in severe penicillin allergy." },
                            { text: "Vancomycin + metronidazole + ciprofloxacin", correct: true, explanation: "Vancomycin covers MRSA. Metronidazole covers anaerobes. Ciprofloxacin covers gram-negatives. Safe in penicillin allergy." },
                            { text: "Clindamycin monotherapy", correct: false, explanation: "Inadequate - rising resistance, doesn't reliably cover MRSA or all gram-negatives." }
                        ]
                    },
                    {
                        id: "mcq3",
                        timing: "after-workup",
                        question: "Two days into treatment, the patient develops pleuritic chest pain and CT shows multiple pulmonary nodules with cavitation. What is the most likely complication?",
                        options: [
                            { text: "Hospital-acquired pneumonia", correct: false, explanation: "Possible, but multiple cavitary nodules after neck infection suggests septic emboli." },
                            { text: "Septic pulmonary emboli from Lemierre syndrome", correct: true, explanation: "Classic: pharyngitis → internal jugular thrombophlebitis → septic pulmonary emboli. Usually F. necrophorum." },
                            { text: "Aspiration pneumonia", correct: false, explanation: "Would show dependent consolidation, not multiple cavitary nodules." },
                            { text: "Pulmonary tuberculosis", correct: false, explanation: "TB wouldn't develop this acutely." }
                        ]
                    }
                ],
                
                allDiagnoses: [
                    { name: "Parapharyngeal Space Infection", correctCategory: "most-likely", rationale: "Severe pharyngitis with neck swelling, high fever in diabetic patient. Confirmed by CT." },
                    { name: "Peritonsillar Abscess", correctCategory: "likely", rationale: "May have been initial process that extended." },
                    { name: "Retropharyngeal Abscess", correctCategory: "must-not-miss", rationale: "CT differentiates. Higher risk of mediastinal extension." },
                    { name: "Ludwig Angina", correctCategory: "must-not-miss", rationale: "Submandibular space infection. Floor of mouth swelling, tongue elevation." },
                    { name: "Lemierre Syndrome", correctCategory: "must-not-miss", rationale: "Internal jugular thrombophlebitis + septic emboli." },
                    { name: "Odontogenic Infection", correctCategory: "likely", rationale: "Dental extraction 2 weeks ago - likely source." },
                    { name: "Sepsis", correctCategory: "must-not-miss", rationale: "Tachycardia, fever, tachypnea - sepsis criteria present." }
                ],
                
                oldcartsNarrative: "This started about 3 days ago with really bad throat pain. It's been getting worse and now the pain goes into my neck. The left side of my neck is swollen. I can barely swallow anything. I'm diabetic. I had a tooth pulled about 2 weeks ago - it was infected. I'm allergic to penicillin - I had hives and my throat started to swell. I smoke about a pack a day.",
                
                historyQuestions: [
                    { id: "onset_progression", text: "Tell me about how this started and progressed.",
                      answer: "Started 3 days ago as throat pain. Got worse each day. Yesterday the neck swelling started.",
                      tier: "essential", linkedDx: ["Parapharyngeal Space Infection"],
                      reasoning: "Progressive course with neck involvement suggests deep space extension." },
                    
                    { id: "neck_swelling", text: "Describe the neck swelling.",
                      answer: "Left side is swollen and tender. It feels firm. Hurts when I turn my head.",
                      tier: "essential", linkedDx: ["Parapharyngeal Space Infection"],
                      reasoning: "Unilateral neck swelling/induration = deep space involvement. Key red flag." },
                    
                    { id: "swallowing", text: "How is your swallowing?",
                      answer: "Really bad. Even water is hard to get down.",
                      tier: "essential", linkedDx: ["Parapharyngeal Space Infection", "Airway Compromise"],
                      reasoning: "Severe dysphagia indicates significant space-occupying process." },
                    
                    { id: "breathing", text: "Any trouble breathing?",
                      answer: "I feel like I have to work harder to breathe. My throat feels tight.",
                      tier: "essential", linkedDx: ["Airway Compromise"],
                      reasoning: "Sensation of throat tightness and labored breathing = concerning for impending airway compromise." },
                    
                    { id: "dental_history", text: "Any recent dental work?",
                      answer: "Yes, I had a tooth pulled about 2 weeks ago. Lower molar on the left. It was abscessed.",
                      tier: "essential", linkedDx: ["Odontogenic Infection"],
                      reasoning: "RECENT DENTAL EXTRACTION is likely source. Odontogenic infections are leading cause." },
                    
                    { id: "diabetes", text: "Tell me about your diabetes.",
                      answer: "I've had it for 10 years. My sugar runs high - last A1c was 9.8.",
                      tier: "essential", linkedDx: ["Parapharyngeal Space Infection"],
                      reasoning: "POORLY CONTROLLED DIABETES = major risk factor for severe infection." },
                    
                    { id: "allergy", text: "Tell me about your penicillin allergy.",
                      answer: "When I was 20 I took amoxicillin. Got hives all over and my throat started swelling. They gave me epinephrine.",
                      tier: "essential", linkedDx: ["Parapharyngeal Space Infection"],
                      reasoning: "SEVERE PENICILLIN ALLERGY (anaphylaxis) - cannot use penicillins or potentially cephalosporins." },
                    
                    { id: "neurologic", text: "Any numbness, weakness, or visual changes?",
                      answer: "No numbness or weakness. Vision seems okay.",
                      tier: "essential", linkedDx: ["Carotid Sheath Involvement"],
                      reasoning: "Assessing for CN 9-12 involvement or Horner syndrome." }
                ],
                
                physicalExamFindings: [
                    { id: "general", text: "General appearance", category: "General",
                      finding: "Ill-appearing male in moderate distress. Sitting upright, leaning forward. Toxic appearance.",
                      tier: "essential", linkedDx: ["Parapharyngeal Space Infection", "Sepsis"],
                      reasoning: "Toxic appearance indicates severe systemic infection." },
                    
                    { id: "vitals", text: "Review vital signs", category: "Vitals",
                      finding: "BP 138/88, HR 118, Temp 103.6°F, RR 22, SpO2 96% on room air.",
                      tier: "essential", linkedDx: ["Sepsis", "Airway Compromise"],
                      reasoning: "SEPSIS CRITERIA met: fever, tachycardia, tachypnea. SpO2 96% concerning." },
                    
                    { id: "neck", text: "Examine neck", category: "Neck",
                      finding: "LEFT-SIDED NECK SWELLING: firm induration below angle of mandible. Tender. Overlying erythema. No crepitus. Torticollis.",
                      tier: "essential", linkedDx: ["Parapharyngeal Space Infection"],
                      reasoning: "Unilateral neck swelling/induration + torticollis = classic deep space infection." },
                    
                    { id: "oropharynx", text: "Examine oropharynx (limited by trismus)", category: "HEENT",
                      finding: "Trismus limits examination. Medial bulging of left lateral pharyngeal wall. Left tonsil pushed medially. Uvular deviation to right.",
                      tier: "essential", linkedDx: ["Parapharyngeal Space Infection"],
                      reasoning: "Lateral pharyngeal wall bulging indicates PARAPHARYNGEAL involvement." },
                    
                    { id: "dental", text: "Examine dentition", category: "HEENT",
                      finding: "Recent extraction site lower left molar - healing. Remaining teeth with visible caries.",
                      tier: "essential", linkedDx: ["Odontogenic Infection"],
                      reasoning: "Extraction site is likely source." },
                    
                    { id: "airway", text: "Assess airway", category: "Respiratory",
                      finding: "Speaking in phrases, not full sentences. Mild stridor on inspiration. Handling secretions with difficulty.",
                      tier: "essential", linkedDx: ["Airway Compromise"],
                      reasoning: "STRIDOR + phrase speech = AIRWAY COMPROMISE. Emergency finding." },
                    
                    { id: "neurologic", text: "Brief neurologic assessment", category: "Neurologic",
                      finding: "Alert. Cranial nerves 9-12 intact. No Horner syndrome.",
                      tier: "essential", linkedDx: ["Carotid Sheath Involvement"],
                      reasoning: "CN deficits or Horner would indicate carotid sheath involvement." }
                ],
                
                workupOptions: {
                    labs: [
                        { id: "cbc", name: "CBC with differential",
                          result: "WBC 24,600 with 89% neutrophils and 12% bands.",
                          tier: "essential", reasoning: "Marked leukocytosis with bandemia indicates severe infection." },
                        { id: "bmp", name: "Basic metabolic panel",
                          result: "Glucose 286, BUN 32, Cr 1.4, CO2 18.",
                          tier: "essential", reasoning: "Diabetic, dehydrated, early metabolic acidosis." },
                        { id: "lactate", name: "Lactate",
                          result: "Lactate 3.2 mmol/L (elevated).",
                          tier: "essential", reasoning: "Elevated lactate indicates severity." },
                        { id: "blood_cultures", name: "Blood cultures x2 sets",
                          result: "DRAW BEFORE ANTIBIOTICS.",
                          tier: "essential", reasoning: "Essential in severe infection. May identify Lemierre syndrome pathogen." }
                    ],
                    imaging: [
                        { id: "ct_neck", name: "CT neck with IV contrast - URGENT",
                          result: "Rim-enhancing collection in LEFT PARAPHARYNGEAL SPACE, 4.2 x 3.1 cm. Approaches carotid sheath. Thrombosis of left internal jugular vein.",
                          tier: "essential", reasoning: "CT WITH CONTRAST is imaging of choice. Defines anatomy, extent, complications." },
                        { id: "cxr", name: "Chest X-ray",
                          result: "No mediastinal widening. No pulmonary infiltrates.",
                          tier: "essential", reasoning: "Evaluate for mediastinal extension and septic emboli." }
                    ],
                    procedures: [
                        { id: "surgical_drainage", name: "Surgical drainage of parapharyngeal abscess",
                          result: "ENT/surgery consultation for operative drainage.",
                          tier: "essential", reasoning: "Deep space abscesses require surgical drainage." },
                        { id: "airway_management", name: "Airway assessment and possible intubation",
                          result: "Anesthesia consultation. Awake fiberoptic intubation preferred. Tracheostomy kit at bedside.",
                          tier: "essential", reasoning: "Stridor present - airway at risk. Difficult airway anticipated." }
                    ],
                    treatments: [
                        { id: "vancomycin", name: "Vancomycin 25-30 mg/kg loading dose",
                          result: "MRSA coverage.",
                          tier: "essential", reasoning: "MRSA coverage indicated given severity and diabetic host." },
                        { id: "metronidazole", name: "Metronidazole 500mg IV q8h",
                          result: "Anaerobic coverage.",
                          tier: "essential", reasoning: "Excellent anaerobic coverage." },
                        { id: "ciprofloxacin", name: "Ciprofloxacin 400mg IV q12h",
                          result: "Gram-negative coverage. Safe in penicillin allergy.",
                          tier: "essential", reasoning: "Covers gram-negatives. Use since can't use penicillins." },
                        { id: "fluids", name: "Aggressive IV fluid resuscitation",
                          result: "NS 30 mL/kg bolus for sepsis. Insulin drip for hyperglycemia.",
                          tier: "essential", reasoning: "Sepsis resuscitation. Insulin for stress hyperglycemia." }
                    ]
                },
                
                expertReasoning: {
                    keyObservations: [
                        "Deep neck infection with PARAPHARYNGEAL SPACE involvement on CT",
                        "INTERNAL JUGULAR THROMBOSIS = Lemierre syndrome developing",
                        "STRIDOR present = active airway compromise requiring urgent intervention",
                        "Odontogenic source (recent extraction)",
                        "Severe penicillin allergy limits antibiotic options",
                        "Poorly controlled diabetes = immunocompromise"
                    ],
                    differentialNarrowing: [
                        "Peritonsillar abscess alone - CT shows deeper parapharyngeal extension",
                        "Retropharyngeal abscess - CT localizes to lateral space",
                        "Ludwig angina - would have submandibular/floor of mouth involvement",
                        "Lemierre syndrome - CONFIRMED by IJV thrombosis on CT"
                    ],
                    criticalDecisionPoints: [
                        "STRIDOR = secure airway before any other intervention",
                        "Vancomycin + metronidazole + fluoroquinolone for penicillin-allergic patient",
                        "Surgical drainage required - deep space cannot be managed medically alone",
                        "IJV thrombosis requires consideration of anticoagulation"
                    ],
                    teachingPoints: [
                        "Deep neck space infections are LIFE-THREATENING - 25% mortality for mediastinitis",
                        "Odontogenic source = #1 cause of deep neck infections in adults",
                        "CT WITH CONTRAST is imaging modality of choice",
                        "Parapharyngeal space contains carotid sheath - watch for CN 9-12 deficits, Horner syndrome",
                        "Lemierre syndrome: pharyngitis → IJV thrombophlebitis → septic pulmonary emboli",
                        "HERALD BLEEDS may precede carotid artery rupture",
                        "Difficult airway anticipated - awake fiberoptic preferred, tracheostomy backup",
                        "Cover streptococci + S. aureus (MRSA) + anaerobes + gram-negatives"
                    ]
                },
                
                closureScript: {
                    diagnosis: "You have a very serious infection in the deep spaces of your neck called a parapharyngeal space infection. This likely started from the tooth extraction. The infection has also caused a blood clot in a major vein in your neck.",
                    plan: "This is a medical emergency. We're going to: 1) Secure your airway first - you're having difficulty breathing. 2) Start three strong IV antibiotics. 3) Take you to surgery to drain the infection. 4) Admit you to the ICU for close monitoring.",
                    warningsToDiscuss: "This is a serious infection with life-threatening complications including airway blockage and spread to the chest. If you notice any bleeding from your mouth, nose, or ear, tell us immediately.",
                    addressingConcerns: "We're using alternative antibiotics that are safe for you given your penicillin allergy. We'll also need to get your diabetes under better control."
                },
                
                clinicalPearl: "The 'Danger Space' between the alar and prevertebral fascia extends from skull base to diaphragm with no barriers. Retropharyngeal infections can spread through this space directly to the posterior mediastinum, causing descending necrotizing mediastinitis with 25% mortality."
            }
        }
    }
];

// Export for use in ReasonDx platform
if (typeof window !== 'undefined') {
    window.pharyngitisCases = pharyngitisCases;
}

// For Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = pharyngitisCases;
}
