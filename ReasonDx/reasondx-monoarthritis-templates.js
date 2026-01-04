/**
 * ReasonDx Monoarthritis & Joint Pain Evaluation Templates
 * Based on UpToDate clinical evidence
 * 
 * Sources:
 * - Monoarthritis in adults: Etiology and evaluation
 * - Septic arthritis of native joints in adults  
 * - Gout: Clinical manifestations and diagnosis
 * 
 * TEACHING FOCUS:
 * - "Any acute monoarthritis is SEPTIC until proven otherwise"
 * - Crystal vs infection differentiation
 * - Arthrocentesis and synovial fluid interpretation
 * - Time-critical decision making for septic joint
 */

const MONOARTHRITIS_TEMPLATES = {

  // ===========================================
  // SYNOVIAL FLUID INTERPRETATION
  // ===========================================
  
  synovialFluidAnalysis: {
    categories: {
      noninflammatory: {
        wbc: "<2000 cells/mm³",
        pmn: "<25%",
        appearance: "Clear, yellow, high viscosity",
        examples: ["Osteoarthritis", "Avascular necrosis", "Meniscal tear", "Trauma"]
      },
      inflammatory: {
        wbc: "2000-50,000 cells/mm³",
        pmn: "25-75%", 
        appearance: "Cloudy, yellow, decreased viscosity",
        examples: ["Gout", "Pseudogout (CPPD)", "Rheumatoid arthritis", "Reactive arthritis", "Spondyloarthropathies"]
      },
      septic: {
        wbc: "50,000-150,000+ cells/mm³",
        pmn: ">75% (often >90%)",
        appearance: "Turbid/purulent, poor viscosity",
        examples: ["Bacterial septic arthritis"],
        caveat: "15-25% of septic arthritis may have WBC <50,000"
      },
      hemorrhagic: {
        appearance: "Bloody",
        examples: ["Trauma", "Coagulopathy", "Hemarthrosis", "Tumor"]
      }
    },
    
    criticalPearls: [
      "WBC counts OVERLAP - cannot definitively distinguish gout from septic arthritis by cell count alone",
      "Gout can have WBC 10,000-100,000 with neutrophilic predominance",
      "15-25% of septic arthritis has WBC <50,000 cells/mm³",
      "The higher the WBC (>50,000) and PMN% (>90%), the higher likelihood of infection",
      "ALWAYS send Gram stain AND culture - crystals do NOT exclude coexistent infection",
      "Gout and septic arthritis can coexist in the same joint"
    ],
    
    crystalAnalysis: {
      msu: {
        name: "Monosodium Urate (Gout)",
        shape: "Needle-shaped",
        birefringence: "Negatively birefringent",
        description: "Yellow when parallel to compensator axis",
        mnemonic: "Negative Needles (gout is Negative and Needle-shaped)"
      },
      cppd: {
        name: "Calcium Pyrophosphate Dihydrate (Pseudogout/CPPD)",
        shape: "Rhomboid (rectangular)",
        birefringence: "Weakly positively birefringent",
        description: "Blue when parallel to compensator axis",
        mnemonic: "Positive Plates (CPPD is Positive and Plate/rhomboid-shaped)"
      }
    }
  },

  // ===========================================
  // MONOARTHRITIS DIFFERENTIAL DIAGNOSIS
  // ===========================================
  
  differentialDiagnosis: {
    mustNotMiss: [
      {
        name: "Septic Arthritis (Non-gonococcal)",
        urgency: "EMERGENT - joint destruction within 24-48 hours",
        mortality: "5-18% at one year",
        keyFeatures: [
          "Hot, swollen, painful joint",
          "Fever (but elderly may be afebrile)",
          "Unable to bear weight or move joint",
          "Risk factors: DM, RA, IVDU, immunosuppression, prosthetic joint, recent injection"
        ],
        organism: "S. aureus most common (including MRSA)",
        jointDistribution: "Knee > hip > ankle > shoulder > wrist"
      },
      {
        name: "Gonococcal Arthritis",
        population: "Sexually active young adults",
        presentations: [
          "Triad: tenosynovitis + vesiculopustular skin lesions + migratory polyarthralgias",
          "Purulent monoarthritis without skin lesions"
        ],
        keyFeatures: [
          "Migratory polyarthralgias preceding monoarthritis",
          "Dermatitis-arthritis syndrome",
          "Tenosynovitis (especially hands/wrists)"
        ]
      }
    ],
    
    likelyDiagnoses: [
      {
        name: "Gout (Acute Gouty Arthritis)",
        presentation: "Sudden nocturnal onset, exquisitely painful",
        classicLocation: "First MTP joint (podagra) - 80% of first attacks",
        otherSites: ["Knee", "Ankle", "Midfoot", "Wrist", "Elbow"],
        triggers: ["Alcohol (especially beer)", "Red meat/shellfish", "Dehydration", "Thiazide diuretics", "Surgery", "Trauma", "Initiating ULT"],
        examFindings: [
          "Swelling, erythema, warmth extending beyond joint",
          "May mimic cellulitis",
          "Exquisite tenderness - cannot tolerate bedsheet"
        ],
        labPearls: [
          "Serum uric acid NORMAL in 12-43% during acute flare - do NOT use to diagnose",
          "Best time to check uric acid: 2+ weeks after flare resolves",
          "Synovial fluid: negatively birefringent needle-shaped crystals"
        ]
      },
      {
        name: "Pseudogout (CPPD Disease)",
        population: "Elderly, typically >65 years",
        classicLocation: "Knee (most common), wrist, shoulder",
        distinguishingFeatures: [
          "Rhomboid, weakly positively birefringent crystals",
          "Chondrocalcinosis on X-ray (but not always present)",
          "Associated conditions: hyperparathyroidism, hemochromatosis, hypomagnesemia"
        ]
      }
    ],
    
    lessLikelyButConsider: [
      {
        name: "Trauma/Fracture",
        clue: "History of injury (though may be forgotten with LOC)"
      },
      {
        name: "Lyme Arthritis",
        clue: "Endemic area, monoarticular (usually knee), may lack rash history"
      },
      {
        name: "Reactive Arthritis",
        clue: "Follows GI or GU infection, typically lower extremity, sausage digits"
      },
      {
        name: "Psoriatic Arthritis",
        clue: "Psoriasis history, dactylitis, nail changes"
      },
      {
        name: "Rheumatoid Arthritis",
        clue: "Usually polyarticular and symmetric, but can start as monoarthritis"
      },
      {
        name: "Mycobacterial/Fungal Arthritis",
        clue: "Indolent course, immunocompromised, travel to endemic areas, fails antibiotics"
      }
    ]
  },

  // ===========================================
  // SEPTIC ARTHRITIS CASE TEMPLATE
  // ===========================================
  
  septicArthritisCase: {
    id: "septic-arthritis",
    title: "Hot Swollen Knee",
    category: "Rheumatology/Emergency",
    difficulty: "intermediate",
    urgency: "emergent",
    
    variants: {
      "diabetic-post-injection": {
        name: "M.T.",
        age: 64,
        gender: "female",
        chiefComplaint: "My right knee has been getting more painful and swollen over 2 days. I can't walk on it now.",
        
        patientProfile: {
          smokingStatus: "former",
          alcoholUse: "rare",
          drugUse: "none",
          occupation: "retired",
          livingStatus: "withFamily",
          pmhCategory: "diabetes-osteoarthritis",
          allergyType: "penicillin"
        },
        
        variantDescription: "Post-injection septic arthritis in diabetic patient",
        
        vitalSigns: {
          BP: "138/82",
          HR: 96,
          RR: 18,
          Temp: "101.8°F",
          SpO2: "97%"
        },
        
        missedConsequences: {
          "Septic Arthritis": "CRITICAL - joint destruction within 24-48 hours without treatment. Permanent disability, need for joint replacement, 5-18% mortality.",
          "Osteomyelitis": "Infection can extend to bone, requiring prolonged IV antibiotics (6+ weeks) and possible surgical debridement.",
          "Bacteremia/Sepsis": "Untreated joint infection can seed bloodstream causing septic shock and multiorgan failure."
        },
        
        commonPitfalls: [
          "Attributing joint pain to OA flare without considering infection",
          "Delaying arthrocentesis in a patient with known arthritis",
          "Assuming sterile joint because patient 'only' had a steroid injection",
          "Waiting for synovial fluid culture before starting antibiotics",
          "Not covering MRSA empirically in high-risk populations",
          "Assuming crystals rule out infection - they can coexist",
          "Elderly patients may be afebrile with septic arthritis"
        ],
        
        mcqs: [
          {
            id: "mcq1",
            timing: "after-history",
            question: "This 64-year-old diabetic had a corticosteroid injection 2 weeks ago and now has fever with a swollen, painful knee. What is the MOST important next step?",
            options: [
              { text: "Start empiric IV antibiotics immediately", correct: false, explanation: "Antibiotics are critical but should be given AFTER obtaining joint fluid. A few minutes delay for aspiration won't harm, but losing diagnostic yield will." },
              { text: "Obtain X-ray of the knee", correct: false, explanation: "X-ray may show effusion or chronic OA changes but cannot diagnose or exclude septic arthritis. Don't delay definitive testing." },
              { text: "Arthrocentesis for synovial fluid analysis and culture", correct: true, explanation: "GOLD STANDARD. Must aspirate before antibiotics. Synovial fluid Gram stain, culture, cell count, and crystals establish diagnosis and guide therapy." },
              { text: "Check inflammatory markers (CRP, ESR) and blood cultures", correct: false, explanation: "These support the diagnosis but don't replace arthrocentesis. Inflammatory markers are elevated in both crystal disease and infection." }
            ]
          },
          {
            id: "mcq2",
            timing: "after-workup",
            question: "Synovial fluid shows WBC 85,000 with 92% PMNs, Gram stain shows gram-positive cocci in clusters. What is the appropriate initial antibiotic regimen?",
            options: [
              { text: "Nafcillin/Oxacillin", correct: false, explanation: "Does not cover MRSA. In 2024, empiric coverage for MRSA is essential given high prevalence, especially in diabetics and post-procedure infections." },
              { text: "Vancomycin", correct: true, explanation: "Correct. Gram-positive cocci in clusters = Staphylococcus. Must cover MRSA empirically until sensitivities return. Vancomycin is first-line." },
              { text: "Ceftriaxone", correct: false, explanation: "Third-generation cephalosporin covers gram-negatives well but has poor MRSA coverage. Not appropriate as monotherapy here." },
              { text: "Ciprofloxacin", correct: false, explanation: "Fluoroquinolones have limited gram-positive coverage and variable MRSA activity. Not appropriate for this presentation." }
            ]
          },
          {
            id: "mcq3",
            timing: "after-workup",
            question: "In addition to antibiotics, what is the other essential component of septic arthritis management?",
            options: [
              { text: "Serial monitoring of inflammatory markers", correct: false, explanation: "Helpful for tracking response but not the key intervention." },
              { text: "Immobilization and rest", correct: false, explanation: "Actually, early mobilization is beneficial once infection is controlled." },
              { text: "Joint drainage (needle aspiration or surgical)", correct: true, explanation: "ESSENTIAL. Septic arthritis = closed abscess. Must drain to clear infection. Options: serial needle aspiration, arthroscopy, or open arthrotomy." },
              { text: "High-dose corticosteroids", correct: false, explanation: "Steroids may mask infection and worsen outcomes. Contraindicated in septic arthritis." }
            ]
          }
        ],
        
        allDiagnoses: [
          { name: "Septic Arthritis", correctCategory: "likely", rationale: "Fever, hot swollen joint, recent intra-articular injection (major risk factor), diabetes (immunocompromised). Clinical triad present." },
          
          { name: "Osteomyelitis", correctCategory: "must-not-miss", rationale: "Contiguous spread from joint infection can involve bone. Look for bone tenderness, evaluate with MRI if concerned." },
          { name: "Bacteremia/Endocarditis", correctCategory: "must-not-miss", rationale: "S. aureus bacteremia has 25-30% risk of endocarditis. Need blood cultures and echocardiogram." },
          { name: "Necrotizing Fasciitis", correctCategory: "must-not-miss", rationale: "Rapidly progressive infection in diabetics. Pain out of proportion, crepitus, skin changes." },
          
          { name: "Gout/Pseudogout Flare", correctCategory: "less-likely", rationale: "Can present identically. Crystal arthropathy possible but fever and recent injection favor infection. Must rule out septic first." },
          { name: "OA Flare", correctCategory: "less-likely", rationale: "Known OA patient, but fever and severity suggest infection rather than simple flare." },
          { name: "Reactive Arthritis", correctCategory: "less-likely", rationale: "Usually follows GI/GU infection, typically in younger patients." }
        ],
        
        oldcartsNarrative: `"My right knee started hurting about 2 days ago, and it's been getting progressively worse. Now I can barely put any weight on it. The pain is severe - I'd say 8 out of 10. It's constant and throbbing. The knee is hot and really swollen. I had a cortisone shot in that knee about 2 weeks ago for my arthritis - it helped for maybe a week, then this started. I've had chills and felt feverish since yesterday. My blood sugar has been running high too. I'm diabetic - been on insulin for 10 years. I have arthritis in both knees but this is completely different - much worse than my usual knee pain."`,
        
        historyQuestions: [
          { 
            id: "onset", 
            text: "When exactly did the pain start?",
            answer: "About 2 days ago. It started gradually but has gotten much worse. Today I can't walk at all.",
            tier: "essential",
            linkedDx: ["Septic Arthritis"],
            reasoning: "Subacute onset over days is typical for bacterial septic arthritis"
          },
          { 
            id: "injection_history", 
            text: "Tell me about the injection you had",
            answer: "My orthopedist gave me a cortisone shot about 2 weeks ago. It helped my arthritis pain for about a week, then this new pain started.",
            tier: "essential",
            linkedDx: ["Septic Arthritis"],
            reasoning: "Intra-articular injection is a major risk factor for septic arthritis. Onset 1-3 weeks post-injection is classic timeline."
          },
          { 
            id: "fever", 
            text: "Have you had any fevers or chills?",
            answer: "Yes, I've felt feverish since yesterday. I had the chills last night and was sweating through my clothes.",
            tier: "essential",
            linkedDx: ["Septic Arthritis", "Bacteremia"],
            reasoning: "Fever with acute monoarthritis strongly suggests septic arthritis. Chills/rigors suggest bacteremia."
          },
          { 
            id: "weight_bearing", 
            text: "Can you walk on that leg?",
            answer: "No, I can't put any weight on it at all. Even moving it is excruciating.",
            tier: "essential",
            linkedDx: ["Septic Arthritis"],
            reasoning: "Inability to bear weight is highly concerning for septic joint. Crystal arthropathy is painful but patients can usually hobble."
          },
          { 
            id: "diabetes", 
            text: "Tell me about your diabetes",
            answer: "I've been diabetic for about 10 years. I'm on insulin - Lantus at night and Humalog with meals. My sugars have been running high lately, over 200 most of the time.",
            tier: "essential",
            linkedDx: ["Septic Arthritis"],
            reasoning: "Diabetes is a major risk factor for septic arthritis - impaired immune function, poor wound healing, increased S. aureus colonization"
          },
          { 
            id: "prior_knee", 
            text: "Tell me about your usual knee problems",
            answer: "I've had osteoarthritis in both knees for years. Usually it's a dull ache, worse when I've been on my feet too long. Nothing like this.",
            tier: "helpful",
            linkedDx: ["Osteoarthritis"],
            reasoning: "Pre-existing joint disease (OA, RA) increases risk of septic arthritis - damaged joints are susceptible to infection"
          },
          { 
            id: "skin_infection", 
            text: "Any cuts, wounds, or skin infections recently?",
            answer: "Actually, I did have a small sore on my lower leg a couple weeks ago. It seemed to heal up though.",
            tier: "essential",
            linkedDx: ["Septic Arthritis", "Cellulitis"],
            reasoning: "Skin breaks provide entry for bacteria. Diabetic patients often have minor wounds that can seed joints"
          },
          { 
            id: "other_joints", 
            text: "Any other joints involved?",
            answer: "No, just the right knee. My other joints feel normal.",
            tier: "helpful",
            linkedDx: ["Septic Arthritis"],
            reasoning: "Monoarticular presentation typical for non-gonococcal septic arthritis"
          },
          { 
            id: "gi_gu_symptoms", 
            text: "Any urinary symptoms, diarrhea, or sexual contacts?",
            answer: "No, nothing like that. I'm widowed and haven't been sexually active.",
            tier: "helpful",
            linkedDx: ["Gonococcal Arthritis", "Reactive Arthritis"],
            reasoning: "GI/GU symptoms might suggest reactive arthritis or gonococcal source"
          }
        ],
        
        physicalExamFindings: [
          { 
            id: "knee_inspection", 
            name: "Knee inspection", 
            finding: "Right knee markedly swollen with visible effusion. Overlying erythema extending 5cm around joint. Left knee with chronic swelling but no erythema.",
            tier: "essential",
            reasoning: "Visible effusion with erythema highly concerning for septic joint"
          },
          { 
            id: "knee_palpation", 
            name: "Knee palpation", 
            finding: "Diffusely warm to touch. Ballottable effusion. Exquisitely tender - patient withdraws with light touch. No crepitus.",
            tier: "essential",
            reasoning: "Warmth, large effusion, severe tenderness = classic septic joint findings"
          },
          { 
            id: "rom", 
            name: "Range of motion", 
            finding: "Unable to assess - patient cannot tolerate any passive or active movement due to severe pain.",
            tier: "essential",
            reasoning: "Limited ROM due to pain is typical for septic arthritis"
          },
          { 
            id: "leg_exam", 
            name: "Lower leg examination", 
            finding: "Healed superficial ulcer on right anterior shin, approximately 2cm, no surrounding cellulitis. Dorsalis pedis pulse palpable.",
            tier: "helpful",
            reasoning: "Portal of entry identified - skin break allowing bacterial inoculation"
          },
          { 
            id: "lymph_nodes", 
            name: "Inguinal lymph nodes", 
            finding: "Right inguinal lymphadenopathy - 2cm tender node palpable.",
            tier: "helpful",
            reasoning: "Regional lymphadenopathy suggests infectious/inflammatory process"
          },
          { 
            id: "cardiac_exam", 
            name: "Cardiac examination", 
            finding: "Regular rate and rhythm. No murmur appreciated.",
            tier: "helpful",
            reasoning: "Important baseline - S. aureus bacteremia can cause endocarditis"
          }
        ],
        
        workup: {
          labs: [
            { 
              id: "arthrocentesis", 
              name: "Arthrocentesis - Synovial Fluid Analysis",
              result: "Appearance: Turbid/cloudy yellow. Volume: 45mL. WBC: 85,000/mm³ (92% PMNs). No crystals seen. Gram stain: Gram-positive cocci in clusters. Culture: Pending.",
              tier: "essential",
              reasoning: "GOLD STANDARD. High WBC with PMN predominance + GPC in clusters = S. aureus septic arthritis. Start antibiotics immediately."
            },
            { 
              id: "cbc", 
              name: "Complete Blood Count",
              result: "WBC 15,200 (82% neutrophils), Hgb 11.8, Platelets 285,000",
              tier: "essential",
              reasoning: "Leukocytosis with left shift supports infectious process"
            },
            { 
              id: "bmp", 
              name: "Basic Metabolic Panel",
              result: "Na 138, K 4.2, Cl 102, CO2 22, BUN 28, Cr 1.4, Glucose 245",
              tier: "essential",
              reasoning: "Mild renal impairment and hyperglycemia - affects antibiotic dosing and indicates poor glycemic control"
            },
            { 
              id: "crp_esr", 
              name: "Inflammatory Markers",
              result: "CRP 184 mg/L (markedly elevated), ESR 68 mm/hr",
              tier: "helpful",
              reasoning: "Markedly elevated inflammatory markers support infection over crystal disease (though not diagnostic)"
            },
            { 
              id: "blood_cultures", 
              name: "Blood Cultures (x2 sets)",
              result: "Obtained prior to antibiotics. Pending.",
              tier: "essential",
              reasoning: "Essential to evaluate for bacteremia. S. aureus bacteremia requires prolonged treatment and endocarditis workup."
            },
            { 
              id: "procalcitonin", 
              name: "Procalcitonin",
              result: "2.8 ng/mL (elevated)",
              tier: "helpful",
              reasoning: "Elevated procalcitonin supports bacterial infection but not specific for septic arthritis"
            },
            { 
              id: "hba1c", 
              name: "HbA1c",
              result: "9.2%",
              tier: "helpful",
              reasoning: "Confirms poor glycemic control - risk factor for infection and poor wound healing"
            },
            { 
              id: "lactate", 
              name: "Lactate",
              result: "2.4 mmol/L (mildly elevated)",
              tier: "helpful",
              reasoning: "Mild elevation suggests stress response; would be more concerned if >4 for septic shock"
            }
          ],
          
          imaging: [
            { 
              id: "xray_knee", 
              name: "X-ray Right Knee (AP/Lateral)",
              result: "Large joint effusion. Moderate tricompartmental osteoarthritis. No fracture. No gas in soft tissues. No periosteal reaction.",
              tier: "essential",
              reasoning: "Confirms effusion, rules out fracture and gas gangrene. Cannot diagnose or exclude septic arthritis."
            },
            { 
              id: "mri", 
              name: "MRI Right Knee (if osteomyelitis concern)",
              result: "Consider if prolonged symptoms or bone tenderness - evaluates for contiguous osteomyelitis",
              tier: "helpful",
              reasoning: "MRI most sensitive for osteomyelitis if concerned about bone involvement"
            },
            { 
              id: "echo", 
              name: "Echocardiogram",
              result: "Should be obtained if blood cultures positive for S. aureus - evaluate for endocarditis",
              tier: "essential",
              reasoning: "S. aureus bacteremia has 25-30% risk of endocarditis. TEE preferred if high suspicion."
            }
          ],
          
          treatments: [
            { 
              id: "vancomycin", 
              name: "Vancomycin IV",
              result: "Loading dose 25-30 mg/kg, then maintenance per pharmacy dosing for renal function. Target trough 15-20 mcg/mL.",
              tier: "essential",
              reasoning: "First-line for suspected S. aureus septic arthritis. Must cover MRSA empirically. Adjust for renal function."
            },
            { 
              id: "joint_drainage", 
              name: "Joint Drainage",
              result: "Options: Serial needle aspiration (may need daily), arthroscopic lavage, or open arthrotomy. Orthopedics consulted.",
              tier: "essential",
              reasoning: "CRITICAL - septic joint is a closed abscess. Must drain to clear infection. Surgical drainage may be superior for hip/shoulder."
            },
            { 
              id: "pain_management", 
              name: "Pain Management",
              result: "IV opioids for acute severe pain. Avoid NSAIDs if renal impairment.",
              tier: "helpful",
              reasoning: "Adequate pain control allows mobilization and participation in care"
            },
            { 
              id: "insulin", 
              name: "Insulin Infusion",
              result: "Continuous insulin drip for glucose control, target 140-180 mg/dL",
              tier: "helpful",
              reasoning: "Glycemic control improves infection outcomes and wound healing"
            },
            { 
              id: "do_not_steroids", 
              name: "DO NOT GIVE: Intra-articular steroids",
              result: "Contraindicated in suspected infection",
              tier: "essential",
              reasoning: "Steroids suppress immune response and worsen infection. Never inject steroids into a potentially septic joint."
            }
          ],
          
          disposition: [
            { 
              id: "admit", 
              name: "Admit to Hospital",
              result: "Inpatient admission for IV antibiotics, joint drainage, and monitoring",
              tier: "essential",
              reasoning: "Septic arthritis requires hospitalization for IV antibiotics and surgical management"
            },
            { 
              id: "ortho_consult", 
              name: "Orthopedic Surgery Consult",
              result: "Urgent consult for joint drainage - arthroscopy vs open vs serial aspiration",
              tier: "essential",
              reasoning: "Surgical drainage within 24 hours is associated with better outcomes"
            },
            { 
              id: "id_consult", 
              name: "Infectious Disease Consult",
              result: "For antibiotic optimization, duration planning, and outpatient IV therapy coordination",
              tier: "helpful",
              reasoning: "ID involvement improves outcomes for S. aureus bacteremia and osteomyelitis"
            }
          ]
        },
        
        actualDiagnosis: {
          name: "Septic Arthritis - Right Knee (S. aureus)",
          keyFindings: [
            "64-year-old diabetic female with recent intra-articular injection (2 weeks ago)",
            "Fever (101.8°F), inability to bear weight, severe joint pain",
            "Right knee: swollen, erythematous, warm, large effusion, exquisitely tender",
            "Synovial fluid: WBC 85,000/mm³ (92% PMNs) - highly inflammatory",
            "Gram stain: Gram-positive cocci in clusters (S. aureus)",
            "No crystals seen - rules out gout/pseudogout as primary diagnosis",
            "Leukocytosis (WBC 15.2k), elevated CRP (184), procalcitonin elevated",
            "Risk factors: Diabetes, recent joint injection, prior skin break"
          ],
          teachingPoints: [
            "ANY acute monoarthritis is SEPTIC ARTHRITIS until proven otherwise - this is the mantra",
            "S. aureus is the most common cause of non-gonococcal septic arthritis (58% of cases)",
            "Recent intra-articular injection is a major risk factor - onset 1-3 weeks later is classic",
            "Diabetes increases septic arthritis risk through multiple mechanisms",
            "Elderly patients may be AFEBRILE with septic arthritis - don't rely on fever",
            "Synovial WBC >50,000 with >90% PMNs strongly suggests infection (but not diagnostic)",
            "15-25% of septic arthritis has WBC <50,000 - cannot exclude infection by cell count alone",
            "Gram stain is positive in only 30-50% of cases - negative stain doesn't rule out infection",
            "ALWAYS send culture even if crystals are found - gout and infection can coexist",
            "Joint drainage is ESSENTIAL - septic joint is a closed abscess that must be drained",
            "Cover MRSA empirically (vancomycin) until sensitivities return",
            "Duration of therapy: 4 weeks minimum for S. aureus; longer if bacteremia or slow response",
            "S. aureus bacteremia requires blood cultures and echocardiogram (25-30% have endocarditis)",
            "Delay in treatment (>24-48 hours) leads to permanent joint damage and worse outcomes"
          ]
        }
      },
      
      "young-adult-gonococcal": {
        name: "A.K.",
        age: 24,
        gender: "female",
        chiefComplaint: "My wrists and knees have been hurting for a few days, and now my right knee is really swollen. I also have this weird rash.",
        
        variantDescription: "Disseminated gonococcal infection with arthritis-dermatitis syndrome",
        
        vitalSigns: {
          BP: "118/72",
          HR: 88,
          RR: 16,
          Temp: "100.4°F",
          SpO2: "99%"
        },
        
        missedConsequences: {
          "Gonococcal Arthritis": "Untreated leads to permanent joint damage. Disseminated infection can cause endocarditis, meningitis.",
          "Non-gonococcal Septic Arthritis": "If misdiagnosed as gonococcal, wrong antibiotic coverage leads to joint destruction."
        },
        
        allDiagnoses: [
          { name: "Disseminated Gonococcal Infection (DGI)", correctCategory: "likely", rationale: "Young sexually active female with migratory polyarthralgias, tenosynovitis, and vesiculopustular rash - classic triad." },
          { name: "Non-gonococcal Septic Arthritis", correctCategory: "must-not-miss", rationale: "Must rule out with cultures. Gonococcal vs non-gonococcal changes treatment approach." },
          { name: "Reactive Arthritis", correctCategory: "less-likely", rationale: "Similar presentation but usually follows enteric or urogenital infection by 1-4 weeks, different rash pattern." },
          { name: "Viral Arthritis", correctCategory: "less-likely", rationale: "Can cause polyarthralgias but typically symmetric without pustular rash." }
        ],
        
        keyFeatures: [
          "Migratory polyarthralgias (wrists, knees, ankles)",
          "Tenosynovitis of hands/wrists",
          "Vesiculopustular skin lesions on extremities",
          "May progress to purulent monoarthritis",
          "Sexually active, may have recent new partner",
          "Synovial fluid culture often negative - need NAAT testing",
          "Screen all mucosal sites: pharynx, cervix/urethra, rectum"
        ]
      }
    }
  },

  // ===========================================
  // GOUT ENHANCEMENTS (FROM UPTODATE)
  // ===========================================
  
  goutEnhancements: {
    provokingFactors: {
      dietary: ["Alcohol (especially beer - contains purines)", "Red meat", "Shellfish", "High-fructose corn syrup"],
      medications: ["Thiazide diuretics", "Loop diuretics", "Low-dose aspirin", "Cyclosporine", "Initiating urate-lowering therapy"],
      physiologic: ["Surgery", "Trauma", "Dehydration", "Starvation", "Rapid weight loss"],
      temporal: ["Nocturnal onset - temperature drop increases urate crystallization", "Peak onset: midnight to 8 AM"]
    },
    
    clinicalPearls: [
      "80% of first attacks involve a SINGLE joint, most commonly first MTP (podagra)",
      "Gout flares often occur OVERNIGHT - urate crystallizes as temperature drops",
      "Serum uric acid is NORMAL in 12-43% of acute gout flares - do NOT use for diagnosis",
      "Best time to check uric acid: 2+ weeks after flare completely resolves",
      "The presence of crystals does NOT exclude coexistent septic arthritis",
      "Polyarticular gout is more common with recurrent attacks and may include fever",
      "Tophi suggest chronic undertreated gout - takes 10-20 years to develop without treatment"
    ],
    
    treatmentPearls: [
      "Low-dose colchicine (1.2mg + 0.6mg one hour later) is as effective as high-dose with fewer side effects",
      "Colchicine most effective if started within 24-36 hours of symptom onset",
      "Do NOT start allopurinol during acute flare - wait 2+ weeks after resolution",
      "If patient is already ON allopurinol when flare occurs, CONTINUE it",
      "Intra-articular corticosteroid injection is very effective for monoarticular gout",
      "NSAIDs and colchicine should be avoided in renal impairment"
    ],
    
    imagingPearls: {
      xray: "Usually normal in acute gout. Chronic changes: erosions with overhanging edges, tophi.",
      ultrasound: "Double contour sign = urate crystals on cartilage surface. Can detect tophi.",
      dect: "Dual-energy CT can identify urate deposits (green on color map). Highly specific."
    }
  },

  // ===========================================
  // MONOARTHRITIS APPROACH ALGORITHM
  // ===========================================
  
  approachAlgorithm: {
    step1: {
      title: "Is this joint-mediated pain?",
      actions: [
        "Confirm pain worsens with joint movement",
        "Look for swelling, effusion, warmth",
        "Rule out periarticular causes (bursitis, tendinitis)"
      ]
    },
    step2: {
      title: "Rule out emergencies",
      emergencies: [
        "Septic arthritis - hot, swollen, febrile patient",
        "Fracture/dislocation - trauma history",
        "Compartment syndrome - severe pain out of proportion"
      ]
    },
    step3: {
      title: "Arthrocentesis is the GOLD STANDARD",
      indications: [
        "Any acute monoarthritis without clear cause",
        "First-time presentation (cannot assume gout)",
        "Suspected infection",
        "Failed empiric treatment"
      ],
      contraindications: [
        "Overlying cellulitis (relative - may need to go through infected tissue)",
        "Severe coagulopathy (relative)"
      ]
    },
    step4: {
      title: "Interpret synovial fluid",
      interpretation: {
        step1: "Hemorrhagic? → Consider trauma, coagulopathy",
        step2: "Non-hemorrhagic → Classify as inflammatory or non-inflammatory",
        step3: "If inflammatory → Look for crystals AND send culture",
        step4: "Crystal negative + culture pending → Treat as presumed septic until proven otherwise"
      }
    }
  }
};

// Export for use in ReasonDx
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MONOARTHRITIS_TEMPLATES };
} else if (typeof window !== 'undefined') {
  window.MONOARTHRITIS_TEMPLATES = MONOARTHRITIS_TEMPLATES;
}
