// ============================================================
// ReasonDx Septic Arthritis Case
// Based on UpToDate: Septic arthritis of native joints in adults
// ============================================================

const septicArthritisCases = [
    {
        id: "septic-arthritis",
        title: "Hot Swollen Knee After Injection",
        category: "Rheumatology",
        icon: "🦵",
        difficulty: "intermediate",
        urgency: "emergent",
        guidelineReferences: [
            {
                name: "ACR/EULAR Septic Arthritis Guidelines 2023",
                citation: "Ravn C, et al. J Bone Jt Infect. 2023;8:29-47",
                keyPoints: [
                    "Arthrocentesis with synovial fluid analysis is GOLD STANDARD",
                    "Antibiotic therapy should be started immediately after obtaining cultures",
                    "Joint drainage is essential - needle aspiration, arthroscopy, or arthrotomy",
                    "S. aureus is most common organism - cover MRSA empirically",
                    "Duration: minimum 4 weeks for staphylococcal infections",
                    "Surgical drainage should not be delayed >24 hours"
                ],
                url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9983721/"
            }
        ],
        
        variants: {
            "diabetic-post-injection": {
                name: "M.T.",
                age: 64,
                gender: "female",
                chiefComplaint: "My right knee has been getting more painful and swollen over 2 days. I can't walk on it now.",
                patientProfile: {
                    smokingStatus: 'former',
                    alcoholUse: 'rare',
                    drugUse: 'none',
                    occupation: 'retired',
                    livingStatus: 'withFamily',
                    pmhCategory: 'diabetes-osteoarthritis',
                    allergyType: 'penicillin',
                    surgicalHistory: 'common',
                    familyHistoryType: 'noSignificant'
                },
                variantDescription: "Post-injection septic arthritis in diabetic patient - S. aureus",
                
                vitalSigns: {
                    BP: "138/82",
                    HR: 96,
                    RR: 18,
                    Temp: "101.8°F",
                    SpO2: "97%"
                },
                
                missedConsequences: {
                    "Septic Arthritis": "CRITICAL - joint destruction within 24-48 hours without treatment. Permanent disability, need for joint replacement. 5-18% mortality at one year.",
                    "Osteomyelitis": "Infection can extend to bone from contiguous joint infection. Requires 6+ weeks IV antibiotics and possible surgical debridement.",
                    "Bacteremia/Sepsis": "S. aureus bacteremia from joint infection has 25-30% risk of endocarditis. Untreated leads to septic shock and death."
                },
                
                commonPitfalls: [
                    "Attributing new joint pain to 'OA flare' without considering infection",
                    "Delaying arthrocentesis because patient has known arthritis",
                    "Assuming recent steroid injection was 'sterile' - post-injection septic arthritis occurs in ~1:15,000 injections",
                    "Waiting for synovial fluid culture results before starting antibiotics in a sick patient",
                    "Not covering MRSA empirically - prevalence is 13-30% of S. aureus septic arthritis",
                    "Assuming presence of crystals rules out infection - gout and septic arthritis can coexist",
                    "Relying on fever to rule in infection - elderly patients may be AFEBRILE",
                    "Not getting blood cultures - S. aureus bacteremia requires prolonged treatment and echo",
                    "Forgetting that joint drainage is as important as antibiotics"
                ],
                
                mcqs: [
                    {
                        id: "mcq1",
                        timing: "after-history",
                        question: "This 64-year-old diabetic had a corticosteroid injection 2 weeks ago and now has fever with a swollen, painful knee. What is the MOST important next step?",
                        options: [
                            { text: "Start empiric IV vancomycin immediately", correct: false, explanation: "Antibiotics are critical but should ideally be given AFTER obtaining joint fluid. A brief delay for aspiration preserves diagnostic yield without harming the patient." },
                            { text: "Obtain X-ray of the knee first", correct: false, explanation: "X-ray will show effusion but cannot diagnose or exclude septic arthritis. It delays the definitive diagnostic test." },
                            { text: "Arthrocentesis for synovial fluid analysis and culture", correct: true, explanation: "GOLD STANDARD. Must aspirate before antibiotics when possible. Synovial fluid Gram stain (positive in 30-50%), culture, cell count, and crystal analysis establish the diagnosis." },
                            { text: "Check CRP and ESR - if normal, infection is unlikely", correct: false, explanation: "Inflammatory markers are usually elevated but are non-specific. They don't replace arthrocentesis and normal values don't rule out infection." }
                        ]
                    },
                    {
                        id: "mcq2",
                        timing: "after-workup",
                        question: "Synovial fluid shows WBC 85,000/mm³ with 92% PMNs. Gram stain shows gram-positive cocci in clusters. No crystals seen. What is the appropriate initial antibiotic?",
                        options: [
                            { text: "Ceftriaxone 2g IV daily", correct: false, explanation: "Third-generation cephalosporin has excellent gram-negative coverage but poor MRSA activity. GPC in clusters = Staphylococcus, and MRSA must be covered." },
                            { text: "Vancomycin 15-20 mg/kg IV", correct: true, explanation: "Correct. Gram-positive cocci in clusters = Staphylococcus aureus. Must cover MRSA empirically (13-30% of S. aureus septic arthritis). Vancomycin is first-line." },
                            { text: "Nafcillin 2g IV q4h", correct: false, explanation: "Anti-staphylococcal penicillin is excellent for MSSA but does NOT cover MRSA. Cannot use as empiric therapy when MRSA prevalence is significant." },
                            { text: "Levofloxacin 750mg IV daily", correct: false, explanation: "Fluoroquinolones have variable gram-positive coverage and should not be used as first-line for staphylococcal septic arthritis." }
                        ]
                    },
                    {
                        id: "mcq3",
                        timing: "after-workup",
                        question: "In addition to IV antibiotics, what is the OTHER essential component of septic arthritis management?",
                        options: [
                            { text: "Strict bed rest and immobilization", correct: false, explanation: "Actually, early mobilization is encouraged once infection is controlled. Immobilization can lead to joint stiffness." },
                            { text: "Joint drainage via aspiration or surgery", correct: true, explanation: "ESSENTIAL. Septic arthritis = closed-space infection. Must drain the abscess. Options: serial needle aspiration (may need daily), arthroscopic lavage, or open arthrotomy." },
                            { text: "High-dose IV corticosteroids", correct: false, explanation: "Corticosteroids are CONTRAINDICATED in septic arthritis. They suppress immune response and worsen infection." },
                            { text: "Physical therapy for range of motion", correct: false, explanation: "PT is important for recovery but NOT during acute infection. Joint drainage and antibiotics come first." }
                        ]
                    }
                ],
                
                allDiagnoses: [
                    { name: "Septic Arthritis (S. aureus)", correctCategory: "likely", rationale: "Fever (101.8°F), acutely swollen/tender knee, recent intra-articular injection (major risk factor), diabetes (immunocompromised). Classic presentation." },
                    
                    { name: "Contiguous Osteomyelitis", correctCategory: "must-not-miss", rationale: "Joint infection can extend to adjacent bone. If prolonged symptoms or bone pain, MRI needed to evaluate." },
                    { name: "Bacteremia with Endocarditis", correctCategory: "must-not-miss", rationale: "S. aureus bacteremia has 25-30% risk of infective endocarditis. MUST get echo and blood cultures." },
                    { name: "Necrotizing Fasciitis", correctCategory: "must-not-miss", rationale: "Diabetics at risk. Look for pain out of proportion, crepitus, rapid spread, skin necrosis. Would need emergent surgical debridement." },
                    
                    { name: "Gout/Pseudogout Flare", correctCategory: "less-likely", rationale: "Can present identically with hot, swollen joint. But fever >101°F and recent injection favor infection. Crystals don't rule out coexistent infection." },
                    { name: "OA Flare", correctCategory: "less-likely", rationale: "Patient has known OA, but high fever and severity suggest infection rather than simple flare." },
                    { name: "Reactive Arthritis", correctCategory: "less-likely", rationale: "Usually follows GI/GU infection by weeks, typically in younger patients, different clinical picture." }
                ],
                
                oldcartsNarrative: `"My right knee started hurting about 2 days ago. At first I thought it was just my usual arthritis acting up, but it's been getting worse and worse. Now I can't put any weight on it at all. The pain is severe - I'd say 8 or 9 out of 10. It's constant, throbbing, and deep. The whole knee is swollen, red, and hot to touch. I had a cortisone shot in that same knee about 2 weeks ago for my arthritis - the doctor said it would help with the pain. It did help for maybe a week, then this started. I've been feeling feverish since yesterday - had the chills last night and was sweating through my clothes. I'm diabetic, been on insulin for about 10 years. My sugars have been running high, over 200 most mornings. I also had a small sore on my lower leg a few weeks ago that took forever to heal. Nothing is making the knee feel better - I tried ice, Tylenol, keeping it elevated, nothing works."`,
                
                historyQuestions: [
                    { id: "onset", text: "When exactly did the knee pain start?",
                      answer: "About 2 days ago. It started gradually but has gotten so much worse that now I can't walk at all. It's completely different from my usual arthritis pain.",
                      tier: "essential", linkedDx: ["Septic Arthritis"],
                      reasoning: "Subacute onset over 1-3 days is typical for bacterial septic arthritis. The progressive worsening pattern is concerning." },
                    
                    { id: "injection_history", text: "Tell me about the injection you had",
                      answer: "My orthopedist gave me a cortisone shot about 2 weeks ago. He said it would help with my arthritis. It did help for about a week, then this new pain started and kept getting worse.",
                      tier: "essential", linkedDx: ["Septic Arthritis"],
                      reasoning: "CRITICAL RISK FACTOR. Intra-articular injection is a well-documented cause of septic arthritis. Onset 1-3 weeks post-injection is the classic timeline." },
                    
                    { id: "fever", text: "Have you had any fevers or chills?",
                      answer: "Yes, I've felt feverish since yesterday. Last night I had bad chills - my teeth were chattering. I was sweating through my pajamas.",
                      tier: "essential", linkedDx: ["Septic Arthritis", "Bacteremia"],
                      reasoning: "Fever with acute monoarthritis = septic until proven otherwise. Rigors (shaking chills) suggest bacteremia." },
                    
                    { id: "weight_bearing", text: "Can you walk on that leg?",
                      answer: "No, I can't put any weight on it at all. Even trying to move it a little bit is excruciating. My husband had to help me into the car.",
                      tier: "essential", linkedDx: ["Septic Arthritis"],
                      reasoning: "Inability to bear weight is highly concerning. Patients with crystal disease usually can hobble; complete inability suggests septic joint." },
                    
                    { id: "diabetes", text: "Tell me about your diabetes",
                      answer: "I've been diabetic for about 10 years now. I take Lantus at bedtime and Humalog before meals. Honestly, my sugars haven't been great - usually running 180 to 220 in the mornings. My last A1c was 9-point-something.",
                      tier: "essential", linkedDx: ["Septic Arthritis"],
                      reasoning: "Diabetes is a MAJOR risk factor for septic arthritis. Poor glycemic control further impairs immune function and wound healing." },
                    
                    { id: "skin_wounds", text: "Any cuts, wounds, or skin problems recently?",
                      answer: "Actually, I did have a small sore on my lower leg a few weeks ago. It took a while to heal - that's how it always is with my diabetes. It finally closed up about a week ago.",
                      tier: "essential", linkedDx: ["Septic Arthritis", "Cellulitis"],
                      reasoning: "Skin breaks provide portal of entry for bacteria. Diabetic patients often have minor wounds that can seed joints via bacteremia." }
                ],
                
                physicalExamFindings: [
                    { id: "knee_inspection", name: "Right knee inspection",
                      finding: "Markedly swollen with large visible effusion. Overlying erythema extending approximately 5cm in all directions from the patella. Left knee has mild chronic swelling without erythema.",
                      tier: "essential", reasoning: "Classic findings for septic joint - effusion, erythema, asymmetric compared to other knee" },
                    
                    { id: "knee_palpation", name: "Right knee palpation",
                      finding: "Diffusely warm to touch compared to left knee. Large ballottable effusion present. Exquisitely tender to even light palpation - patient withdraws and guards. No patellar crepitus.",
                      tier: "essential", reasoning: "Warmth, effusion, and severe tenderness are the hallmarks of septic arthritis" },
                    
                    { id: "knee_rom", name: "Range of motion - right knee",
                      finding: "Unable to assess due to severe pain. Patient cannot tolerate any passive flexion or extension. Holds knee in approximately 30 degrees of flexion.",
                      tier: "essential", reasoning: "Joint held in flexion (position of comfort) with inability to move is classic for septic joint" }
                ],
                
                workup: {
                    labs: [
                        { id: "arthrocentesis", name: "Arthrocentesis - Synovial Fluid Analysis",
                          result: "Appearance: Turbid/cloudy yellow fluid. Volume: 45mL aspirated.\nWBC: 85,000/mm³ with 92% neutrophils.\nCrystals: None identified under polarized microscopy.\nGram stain: Gram-positive cocci in clusters.\nCulture: Sent to microbiology lab - pending.",
                          tier: "essential", reasoning: "GOLD STANDARD. High WBC (>50,000) with PMN predominance (>90%) strongly suggests infection. GPC in clusters = S. aureus. No crystals rules out gout/CPPD as primary diagnosis. ALWAYS send culture even if crystals seen." },
                        
                        { id: "cbc", name: "Complete Blood Count",
                          result: "WBC 15,200/mm³ (82% neutrophils, 3% bands), Hgb 11.8 g/dL, Platelets 285,000/mm³",
                          tier: "essential", reasoning: "Leukocytosis with left shift (bandemia) supports bacterial infection" },
                        
                        { id: "blood_cultures", name: "Blood Cultures (x2 sets)",
                          result: "Obtained prior to antibiotics. Pending.",
                          tier: "essential", reasoning: "CRITICAL. Must obtain before antibiotics. S. aureus bacteremia requires prolonged treatment (4 weeks minimum) and echocardiogram." },
                        
                        { id: "crp_esr", name: "Inflammatory Markers",
                          result: "CRP 184 mg/L (normal <10), ESR 68 mm/hr (normal <20)",
                          tier: "helpful", reasoning: "Markedly elevated inflammatory markers support infection but are non-specific. CRP >100 is concerning." }
                    ],
                    
                    imaging: [
                        { id: "xray_knee", name: "X-ray Right Knee (AP and Lateral)",
                          result: "Large joint effusion with distension of suprapatellar bursa. Moderate tricompartmental osteoarthritis with joint space narrowing. No fracture. No periosteal reaction. No gas in soft tissues.",
                          tier: "essential", reasoning: "Confirms effusion, rules out fracture and gas gangrene. X-ray CANNOT diagnose or exclude septic arthritis." }
                    ],
                    
                    treatments: [
                        { id: "vancomycin", name: "Vancomycin IV",
                          result: "Loading dose 25-30 mg/kg (actual body weight), then 15-20 mg/kg q8-12h (adjusted for renal function). Target trough 15-20 mcg/mL for serious infection.",
                          tier: "essential", reasoning: "First-line for suspected S. aureus septic arthritis. MUST cover MRSA empirically - prevalence is 13-30%." },
                        
                        { id: "joint_drainage", name: "Joint Drainage",
                          result: "Orthopedic surgery consulted for joint drainage. Options: serial daily needle aspiration, arthroscopic lavage, or open arthrotomy depending on response.",
                          tier: "essential", reasoning: "CRITICAL - septic joint is a closed-space infection. Must drain the pus. Antibiotics alone are insufficient." },
                        
                        { id: "do_not_steroids", name: "DO NOT GIVE: Corticosteroids",
                          result: "Contraindicated in septic arthritis",
                          tier: "essential", reasoning: "Steroids suppress immune response and WORSEN infection. Never inject steroids into a potentially septic joint." }
                    ],
                    
                    disposition: [
                        { id: "admit", name: "Admit to Hospital",
                          result: "Inpatient admission for IV antibiotics, joint drainage, and close monitoring",
                          tier: "essential", reasoning: "Septic arthritis always requires hospitalization. IV antibiotics, surgical management, monitoring for complications." },
                        
                        { id: "ortho_consult", name: "Orthopedic Surgery Consult",
                          result: "URGENT consult for joint drainage within 24 hours",
                          tier: "essential", reasoning: "Surgical drainage improves outcomes. Delay >24 hours associated with worse outcomes." }
                    ]
                },
                
                actualDiagnosis: {
                    name: "Septic Arthritis - Right Knee (Staphylococcus aureus)",
                    keyFindings: [
                        "64-year-old diabetic female with recent intra-articular steroid injection (2 weeks ago)",
                        "Fever 101.8°F with rigors",
                        "Right knee: swollen, erythematous, warm, large effusion, exquisitely tender",
                        "Complete inability to bear weight or move joint",
                        "Synovial fluid: WBC 85,000/mm³ (92% PMNs) - highly inflammatory",
                        "Gram stain: Gram-positive cocci in clusters = Staphylococcus",
                        "No crystals seen under polarized microscopy"
                    ],
                    teachingPoints: [
                        "🚨 'Any acute monoarthritis is SEPTIC ARTHRITIS until proven otherwise' - this is the clinical mantra",
                        "S. aureus is the most common cause of non-gonococcal septic arthritis (58% of cases in adults)",
                        "Recent intra-articular injection is a well-documented risk factor",
                        "Diabetes is a major risk factor for septic arthritis",
                        "Elderly patients may be AFEBRILE with septic arthritis",
                        "Synovial WBC >50,000 with >90% PMNs strongly suggests infection",
                        "Gram stain is positive in only 30-50% of cases",
                        "The presence of crystals does NOT exclude septic arthritis",
                        "Joint drainage is ESSENTIAL - treat like any closed-space infection",
                        "Cover MRSA empirically with vancomycin",
                        "S. aureus bacteremia requires blood cultures and echocardiogram (25-30% have endocarditis)",
                        "Mortality from septic arthritis is 5-18% at one year"
                    ]
                }
            }
        }
    }
];

// Export for integration with main ReasonDx system
if (typeof window !== 'undefined') {
    window.septicArthritisCases = septicArthritisCases;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = septicArthritisCases;
}
