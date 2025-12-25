/**
 * SEPTIC ARTHRITIS CASE
 * To be added to ReasonDx index.html in the cases array
 * 
 * Based on: UpToDate - Septic arthritis of native joints in adults
 * 
 * CRITICAL LEARNING OBJECTIVES:
 * 1. "Any acute monoarthritis is SEPTIC until proven otherwise"
 * 2. Arthrocentesis is the GOLD STANDARD - must do before antibiotics if possible
 * 3. S. aureus is most common organism - must cover MRSA empirically
 * 4. Joint drainage is ESSENTIAL - septic joint is a closed abscess
 * 5. Delay in treatment leads to permanent joint destruction
 */

// ==================== SEPTIC ARTHRITIS ====================
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
                },
                {
                    id: "mcq4",
                    timing: "after-workup",
                    question: "Blood cultures return positive for S. aureus. What additional testing is NOW required?",
                    options: [
                        { text: "Repeat joint aspiration in 48 hours", correct: false, explanation: "Repeat aspiration is reasonable to assess treatment response but is not the most critical next step with positive blood cultures." },
                        { text: "MRI of the knee to assess for osteomyelitis", correct: false, explanation: "MRI may be needed eventually but is not the immediate priority with new information about bacteremia." },
                        { text: "Echocardiogram to evaluate for endocarditis", correct: true, explanation: "S. aureus bacteremia has 25-30% risk of endocarditis. Echocardiography (TEE preferred) is REQUIRED. Finding endocarditis changes treatment duration (6 weeks) and prognosis." },
                        { text: "CT chest to look for septic emboli", correct: false, explanation: "Pulmonary septic emboli are seen with right-sided endocarditis but echo should be done first to establish diagnosis." }
                    ]
                }
            ],
            
            allDiagnoses: [
                { name: "Septic Arthritis (S. aureus)", correctCategory: "likely", rationale: "Fever (101.8°F), acutely swollen/tender knee, inability to bear weight, recent intra-articular injection (major risk factor), diabetes (immunocompromised). Classic presentation." },
                
                { name: "Contiguous Osteomyelitis", correctCategory: "must-not-miss", rationale: "Joint infection can extend to adjacent bone. If prolonged symptoms or bone pain, MRI needed to evaluate." },
                { name: "Bacteremia with Endocarditis", correctCategory: "must-not-miss", rationale: "S. aureus bacteremia has 25-30% risk of infective endocarditis. MUST get echo and blood cultures." },
                { name: "Necrotizing Fasciitis", correctCategory: "must-not-miss", rationale: "Diabetics at risk. Look for pain out of proportion, crepitus, rapid spread, skin necrosis. Would need emergent surgical debridement." },
                
                { name: "Gout/Pseudogout Flare", correctCategory: "less-likely", rationale: "Can present identically with hot, swollen joint. But fever >101°F and recent injection favor infection. Crystals don't rule out coexistent infection." },
                { name: "Osteoarthritis Flare", correctCategory: "less-likely", rationale: "Patient has known OA, but high fever and severe presentation not consistent with simple flare." },
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
                
                { id: "prior_arthritis", text: "Tell me about your usual knee problems",
                  answer: "I've had arthritis in both knees for years. Usually it's a dull ache that's worse after I've been on my feet. Some days are worse than others. But this - this is completely different. Way more severe.",
                  tier: "helpful", linkedDx: ["Septic Arthritis", "Osteoarthritis"],
                  reasoning: "Pre-existing joint disease (OA, RA) increases risk of septic arthritis. Damaged joints are more susceptible to infection." },
                
                { id: "skin_wounds", text: "Any cuts, wounds, or skin problems recently?",
                  answer: "Actually, I did have a small sore on my lower leg a few weeks ago. It took a while to heal - that's how it always is with my diabetes. It finally closed up about a week ago.",
                  tier: "essential", linkedDx: ["Septic Arthritis", "Cellulitis"],
                  reasoning: "Skin breaks provide portal of entry for bacteria. Diabetic patients often have minor wounds that can seed joints via bacteremia." },
                
                { id: "other_joints", text: "Any other joints bothering you?",
                  answer: "No, just the right knee. My left knee has its usual aches but nothing like this.",
                  tier: "helpful", linkedDx: ["Septic Arthritis"],
                  reasoning: "Monoarticular involvement is typical for non-gonococcal septic arthritis (80% are monoarticular)." },
                
                { id: "prior_infections", text: "Any recent infections - UTI, pneumonia, skin infections?",
                  answer: "I had a UTI about a month ago and took antibiotics for it. That cleared up. No pneumonia or anything else.",
                  tier: "helpful", linkedDx: ["Septic Arthritis"],
                  reasoning: "Recent infections can seed joints via hematogenous spread. UTI is less likely to cause joint seeding than skin infections but worth noting." },
                
                { id: "immunosuppression", text: "Are you on any medications that affect your immune system?",
                  answer: "No, just my insulin, metformin, and blood pressure medicine. Oh, and a statin for cholesterol.",
                  tier: "helpful", linkedDx: ["Septic Arthritis"],
                  reasoning: "Immunosuppressive medications (steroids, biologics, chemotherapy) increase infection risk. Diabetes itself causes immunosuppression." },
                
                { id: "travel_contacts", text: "Any recent travel or sick contacts?",
                  answer: "No travel. My husband has been healthy. We haven't been around anyone sick.",
                  tier: "neutral", linkedDx: [],
                  reasoning: "Travel and exposure history less relevant for typical bacterial septic arthritis but important for atypical organisms." },
                
                { id: "medication_allergies", text: "Do you have any medication allergies?",
                  answer: "Yes, I'm allergic to penicillin. I got hives from it when I was younger.",
                  tier: "essential", linkedDx: [],
                  reasoning: "Critical for antibiotic selection. Penicillin allergy affects choice of beta-lactams (would use vancomycin anyway for empiric MRSA coverage)." }
            ],
            
            physicalExamFindings: [
                { id: "general", name: "General appearance",
                  finding: "Appears uncomfortable, lying still on stretcher. Grimaces with any movement of right leg. Mild diaphoresis. No acute distress at rest.",
                  tier: "essential", reasoning: "Toxic appearance concerning for systemic infection" },
                
                { id: "knee_inspection", name: "Right knee inspection",
                  finding: "Markedly swollen with large visible effusion. Overlying erythema extending approximately 5cm in all directions from the patella. Left knee has mild chronic swelling without erythema.",
                  tier: "essential", reasoning: "Classic findings for septic joint - effusion, erythema, asymmetric compared to other knee" },
                
                { id: "knee_palpation", name: "Right knee palpation",
                  finding: "Diffusely warm to touch compared to left knee. Large ballottable effusion present. Exquisitely tender to even light palpation - patient withdraws and guards. No patellar crepitus.",
                  tier: "essential", reasoning: "Warmth, effusion, and severe tenderness are the hallmarks of septic arthritis" },
                
                { id: "knee_rom", name: "Range of motion - right knee",
                  finding: "Unable to assess due to severe pain. Patient cannot tolerate any passive flexion or extension. Holds knee in approximately 30 degrees of flexion.",
                  tier: "essential", reasoning: "Joint held in flexion (position of comfort) with inability to move is classic for septic joint" },
                
                { id: "leg_inspection", name: "Right lower leg examination",
                  finding: "Well-healed superficial scar on anterior shin, approximately 2cm. No surrounding erythema or warmth. No calf tenderness. Pedal pulses present.",
                  tier: "helpful", reasoning: "Identifies prior skin break as possible portal of entry for infection" },
                
                { id: "inguinal_nodes", name: "Inguinal lymph nodes",
                  finding: "Right inguinal lymphadenopathy - 2cm firm, mildly tender node. Left side normal.",
                  tier: "helpful", reasoning: "Regional lymphadenopathy supports local inflammatory/infectious process" },
                
                { id: "skin_exam", name: "Skin examination",
                  finding: "No other areas of cellulitis. No pustules or vesicles. No track marks. Some dry skin on feet consistent with diabetes.",
                  tier: "helpful", reasoning: "Rules out other skin infections, IVDU stigmata. Dry skin = diabetic dermopathy" },
                
                { id: "cardiac", name: "Cardiac examination",
                  finding: "Regular rate and rhythm. No murmurs appreciated. JVP not elevated. No peripheral edema.",
                  tier: "helpful", reasoning: "Important baseline - S. aureus bacteremia can cause new murmur from endocarditis" },
                
                { id: "pulmonary", name: "Pulmonary examination",
                  finding: "Clear to auscultation bilaterally. No crackles or rhonchi. Normal respiratory effort.",
                  tier: "helpful", reasoning: "Septic emboli from endocarditis can cause pulmonary infiltrates" },
                
                { id: "abdominal", name: "Abdominal examination",
                  finding: "Soft, non-tender, non-distended. No hepatosplenomegaly.",
                  tier: "neutral", reasoning: "Rules out abdominal source of infection" }
            ],
            
            workup: {
                labs: [
                    { id: "arthrocentesis", name: "Arthrocentesis - Synovial Fluid Analysis",
                      result: "Appearance: Turbid/cloudy yellow fluid. Volume: 45mL aspirated.\nWBC: 85,000/mm³ with 92% neutrophils.\nCrystals: None identified under polarized microscopy.\nGram stain: Gram-positive cocci in clusters.\nCulture: Sent to microbiology lab - pending.",
                      tier: "essential", reasoning: "GOLD STANDARD. High WBC (>50,000) with PMN predominance (>90%) strongly suggests infection. GPC in clusters = S. aureus. No crystals rules out gout/CPPD. ALWAYS send culture even if crystals seen." },
                    
                    { id: "cbc", name: "Complete Blood Count",
                      result: "WBC 15,200/mm³ (82% neutrophils, 3% bands), Hgb 11.8 g/dL, Platelets 285,000/mm³",
                      tier: "essential", reasoning: "Leukocytosis with left shift (bandemia) supports bacterial infection" },
                    
                    { id: "bmp", name: "Basic Metabolic Panel",
                      result: "Na 138, K 4.2, Cl 102, CO2 22, BUN 28, Cr 1.4, Glucose 245 mg/dL",
                      tier: "essential", reasoning: "Mild renal impairment (baseline? AKI from sepsis?) and hyperglycemia. Affects antibiotic dosing." },
                    
                    { id: "crp_esr", name: "Inflammatory Markers",
                      result: "CRP 184 mg/L (normal <10), ESR 68 mm/hr (normal <20)",
                      tier: "helpful", reasoning: "Markedly elevated inflammatory markers support infection but are non-specific. CRP >100 is concerning." },
                    
                    { id: "blood_cultures", name: "Blood Cultures (x2 sets)",
                      result: "Collected from 2 separate sites prior to antibiotics. Results pending.",
                      tier: "essential", reasoning: "CRITICAL. Must obtain before antibiotics. S. aureus bacteremia requires prolonged treatment (4 weeks minimum) and echocardiogram." },
                    
                    { id: "procalcitonin", name: "Procalcitonin",
                      result: "2.8 ng/mL (normal <0.1)",
                      tier: "helpful", reasoning: "Elevated procalcitonin suggests bacterial infection. Can help distinguish from crystal disease but doesn't replace arthrocentesis." },
                    
                    { id: "lactate", name: "Lactate",
                      result: "2.4 mmol/L (normal <2.0)",
                      tier: "helpful", reasoning: "Mildly elevated - suggests tissue hypoperfusion/stress. If >4 with hypotension, would indicate septic shock." },
                    
                    { id: "hba1c", name: "Hemoglobin A1c",
                      result: "9.2%",
                      tier: "helpful", reasoning: "Confirms poor long-term glycemic control. Target is <7% for most diabetics. Poor control = higher infection risk." },
                    
                    { id: "pt_inr", name: "PT/INR",
                      result: "PT 12.8 seconds, INR 1.0",
                      tier: "neutral", reasoning: "Normal coagulation - no contraindication to arthrocentesis" },
                    
                    { id: "ua", name: "Urinalysis",
                      result: "Clear, pH 6.0, no blood, no WBCs, no bacteria",
                      tier: "neutral", reasoning: "Rules out UTI as concurrent source of infection" }
                ],
                
                imaging: [
                    { id: "xray_knee", name: "X-ray Right Knee (AP and Lateral)",
                      result: "Large joint effusion with distension of suprapatellar bursa. Moderate tricompartmental osteoarthritis with joint space narrowing. No fracture. No periosteal reaction. No gas in soft tissues.",
                      tier: "essential", reasoning: "Confirms effusion, rules out fracture and gas gangrene. X-ray CANNOT diagnose or exclude septic arthritis." },
                    
                    { id: "echo", name: "Echocardiogram (TTE initially, TEE if needed)",
                      result: "To be ordered when blood cultures result positive - assessing for endocarditis",
                      tier: "essential", reasoning: "S. aureus bacteremia has 25-30% risk of endocarditis. Echo REQUIRED if blood cultures positive for Staph." },
                    
                    { id: "mri", name: "MRI Right Knee (if osteomyelitis concern)",
                      result: "Consider if bone pain or prolonged symptoms - most sensitive for detecting contiguous osteomyelitis",
                      tier: "helpful", reasoning: "MRI is the gold standard for osteomyelitis if there's concern for bone involvement" }
                ],
                
                treatments: [
                    { id: "vancomycin", name: "Vancomycin IV",
                      result: "Loading dose 25-30 mg/kg (actual body weight), then 15-20 mg/kg q8-12h (adjusted for renal function). Target trough 15-20 mcg/mL for serious infection.",
                      tier: "essential", reasoning: "First-line for suspected S. aureus septic arthritis. MUST cover MRSA empirically - prevalence is 13-30%." },
                    
                    { id: "joint_drainage", name: "Joint Drainage",
                      result: "Orthopedic surgery consulted for joint drainage. Options: serial daily needle aspiration, arthroscopic lavage, or open arthrotomy depending on response.",
                      tier: "essential", reasoning: "CRITICAL - septic joint is a closed-space infection. Must drain the pus. Antibiotics alone are insufficient." },
                    
                    { id: "ivf", name: "IV Fluids",
                      result: "Normal saline bolus for renal protection, then maintenance fluids",
                      tier: "helpful", reasoning: "Hydration for sepsis physiology and renal protection with vancomycin" },
                    
                    { id: "pain_control", name: "Pain Management",
                      result: "IV opioids (morphine or hydromorphone) for acute severe pain. Acetaminophen scheduled.",
                      tier: "helpful", reasoning: "Adequate pain control allows cooperation with care and early mobilization" },
                    
                    { id: "insulin", name: "Insulin Infusion Protocol",
                      result: "Continuous insulin infusion to maintain glucose 140-180 mg/dL",
                      tier: "helpful", reasoning: "Tight glycemic control in sepsis improves outcomes and promotes healing" },
                    
                    { id: "do_not_steroids", name: "DO NOT GIVE: Corticosteroids (intra-articular or systemic)",
                      result: "Contraindicated in septic arthritis",
                      tier: "essential", reasoning: "Steroids suppress immune response and WORSEN infection. Never inject steroids into a potentially septic joint." },
                    
                    { id: "do_not_nsaids", name: "CAUTION: NSAIDs",
                      result: "Avoid given renal impairment",
                      tier: "helpful", reasoning: "NSAIDs can worsen renal function, especially with vancomycin. Use acetaminophen and opioids." }
                ],
                
                disposition: [
                    { id: "admit", name: "Admit to Hospital (Medicine or Ortho service)",
                      result: "Inpatient admission for IV antibiotics, joint drainage, and close monitoring",
                      tier: "essential", reasoning: "Septic arthritis always requires hospitalization. IV antibiotics, surgical management, monitoring for complications." },
                    
                    { id: "ortho_consult", name: "Orthopedic Surgery Consult",
                      result: "URGENT consult for joint drainage within 24 hours",
                      tier: "essential", reasoning: "Surgical drainage improves outcomes. Delay >24 hours associated with worse outcomes. Ortho determines needle vs arthroscopy vs open." },
                    
                    { id: "id_consult", name: "Infectious Disease Consult",
                      result: "Consult for antibiotic optimization, duration planning, and possible OPAT coordination",
                      tier: "helpful", reasoning: "ID involvement improves outcomes in S. aureus bacteremia. Will guide antibiotic duration (minimum 4 weeks) and transition to oral therapy." }
                ]
            },
            
            actualDiagnosis: {
                name: "Septic Arthritis - Right Knee (Staphylococcus aureus)",
                keyFindings: [
                    "64-year-old diabetic female with recent intra-articular steroid injection (2 weeks ago)",
                    "Fever 101.8°F with rigors",
                    "Right knee: swollen, erythematous, warm, large effusion, exquisitely tender",
                    "Complete inability to bear weight or move joint",
                    "Prior skin wound on same leg (portal of entry)",
                    "Synovial fluid: WBC 85,000/mm³ (92% PMNs) - highly inflammatory",
                    "Gram stain: Gram-positive cocci in clusters = Staphylococcus",
                    "No crystals seen under polarized microscopy",
                    "Serum WBC 15,200 with left shift",
                    "Markedly elevated inflammatory markers (CRP 184, ESR 68)"
                ],
                teachingPoints: [
                    "🚨 'Any acute monoarthritis is SEPTIC ARTHRITIS until proven otherwise' - this is the clinical mantra",
                    "S. aureus is the most common cause of non-gonococcal septic arthritis (58% of cases in adults)",
                    "Recent intra-articular injection is a well-documented risk factor - post-injection septic arthritis occurs ~1:15,000",
                    "Diabetes is a major risk factor for septic arthritis through impaired immunity and increased colonization",
                    "Elderly patients may be AFEBRILE with septic arthritis - never rely on fever to rule it out",
                    "Synovial WBC >50,000 with >90% PMNs strongly suggests infection (but 15-25% of septic arthritis has WBC <50,000)",
                    "Gram stain is positive in only 30-50% of cases - a negative stain does NOT rule out infection",
                    "The presence of crystals does NOT exclude septic arthritis - gout and infection can coexist in the same joint",
                    "Joint drainage is ESSENTIAL - treat septic arthritis like any closed-space infection (abscess)",
                    "Options for drainage: serial needle aspiration, arthroscopic lavage, or open arthrotomy",
                    "Cover MRSA empirically with vancomycin - MRSA comprises 13-30% of S. aureus septic arthritis",
                    "Duration of therapy: minimum 4 weeks for staphylococcal joint infection; longer if bacteremia or slow response",
                    "S. aureus bacteremia requires blood cultures and echocardiogram (25-30% have endocarditis)",
                    "Mortality from septic arthritis is 5-18% at one year - this is a serious, life-threatening infection",
                    "Delay in treatment beyond 24-48 hours leads to permanent cartilage destruction and worse outcomes"
                ]
            }
        }
    }
}
