/**
 * GOUT CASE ENHANCEMENTS
 * Based on: UpToDate - Gout: Clinical manifestations and diagnosis
 * 
 * These updates should be merged into the existing gout case in index.html
 * 
 * KEY ADDITIONS:
 * 1. Expanded clinical pearls from UpToDate
 * 2. Provoking factors detail
 * 3. Imaging pearls (ultrasound, DECT)
 * 4. Enhanced teaching points
 * 5. Clinical decision rules
 */

// ==================== GOUT CASE ENHANCEMENTS ====================

// Add to guidelineReferences array:
const additionalGoutReferences = [
    {
        name: "ACR/EULAR Gout Classification Criteria 2015",
        citation: "Neogi T, et al. Arthritis Rheumatol. 2015;67:2557-2568",
        keyPoints: [
            "Gold standard: MSU crystals in synovial fluid or tophus",
            "Clinical classification possible without crystals if sufficient features",
            "First MTP involvement highly weighted in scoring",
            "Hyperuricemia increases probability but is not diagnostic"
        ],
        url: "https://www.rheumatology.org/Practice-Quality/Clinical-Support/Criteria"
    }
];

// Enhanced commonPitfalls - ADD these to existing array:
const additionalGoutPitfalls = [
    "Diagnosing gout based on elevated serum uric acid alone - hyperuricemia is neither sensitive nor specific during acute flares",
    "Not recognizing that 12-43% of patients have NORMAL uric acid during acute gout flare",
    "Starting urate-lowering therapy during acute flare - can prolong or worsen the attack",
    "Stopping allopurinol during a flare if patient was already on it - should CONTINUE",
    "Using high-dose colchicine - low-dose regimen (1.2mg + 0.6mg) is equally effective with far fewer GI side effects",
    "Assuming gout only affects the big toe - can affect any joint, including wrists, elbows, fingers, and even axial skeleton",
    "Missing that gout flares typically occur at NIGHT - temperature drop promotes crystallization",
    "Not recognizing that polyarticular gout can occur with fever, mimicking septic arthritis",
    "Ignoring medication triggers - thiazide diuretics, loop diuretics, low-dose aspirin all increase gout risk"
];

// Enhanced MCQ - Add this MCQ to existing case:
const additionalGoutMCQ = {
    id: "mcq3",
    timing: "after-workup",
    question: "The patient's serum uric acid returns at 5.8 mg/dL (normal). Does this rule out gout?",
    options: [
        { text: "Yes - gout requires hyperuricemia", correct: false, explanation: "WRONG. Serum uric acid is NORMAL in 12-43% of patients during acute gout flares. The acute inflammation can actually lower serum urate levels." },
        { text: "No - uric acid is often normal during acute flares", correct: true, explanation: "CORRECT. This is a classic pitfall. Serum uric acid can be normal or even LOW during acute flares. The most accurate time to check is 2+ weeks after the flare completely resolves." },
        { text: "Borderline - need to repeat the test", correct: false, explanation: "Repeating during the flare won't help. The level may be falsely low during inflammation. Wait for intercritical period." },
        { text: "Need to check 24-hour urine uric acid instead", correct: false, explanation: "24-hour urine is used to determine if patient is an overproducer vs underexcretor of uric acid - useful for chronic management, not acute diagnosis." }
    ]
};

// Add to workup - Enhanced imaging options:
const additionalGoutImaging = [
    { id: "ultrasound_msk", name: "Musculoskeletal Ultrasound",
      result: "Double contour sign (DCS) present: hyperechoic linear density overlying the articular cartilage surface consistent with urate crystal deposition.",
      tier: "helpful", 
      reasoning: "Double contour sign is highly specific for gout (76-91%). Can also detect tophi. Sensitivity is 60-83% for DCS, better in established disease." },
    
    { id: "dect", name: "Dual-Energy CT (DECT)",
      result: "Color-coded urate deposits identified on first MTP articular surfaces bilaterally (green on color map). Consistent with gouty arthropathy.",
      tier: "helpful", 
      reasoning: "DECT can identify urate deposits with high sensitivity (89%) and specificity (91%). Most useful when arthrocentesis not feasible. May miss early/acute gout (<6 weeks symptoms)." }
];

// Add these to historyQuestions array:
const additionalGoutHistoryQuestions = [
    { id: "time_of_onset", text: "What time of day did this start?",
      answer: "It woke me up around 3 in the morning. I went to bed feeling fine.",
      tier: "essential", linkedDx: ["Acute Gouty Arthritis"],
      reasoning: "NOCTURNAL onset is classic for gout - temperature drops at night, decreasing urate solubility and promoting crystallization" },
    
    { id: "maximal_severity", text: "How quickly did it reach maximum intensity?",
      answer: "Within a few hours of waking up, it was at its absolute worst. It peaked pretty fast.",
      tier: "helpful", linkedDx: ["Acute Gouty Arthritis"],
      reasoning: "Gout typically reaches maximum severity within 12-24 hours. Very rapid (<1 hour) might suggest different etiology." },
    
    { id: "prior_minor_attacks", text: "Have you ever had shorter, milder episodes of joint pain before?",
      answer: "Now that you mention it, I've had a few times where my toe was a little sore for a day or two, but nothing like this.",
      tier: "helpful", linkedDx: ["Acute Gouty Arthritis"],
      reasoning: "Patients often have milder prodromal episodes before first major gout flare" },
    
    { id: "medication_changes", text: "Any recent changes to your medications?",
      answer: "My doctor increased my water pill dose about a month ago because my blood pressure wasn't controlled.",
      tier: "essential", linkedDx: ["Acute Gouty Arthritis"],
      reasoning: "Thiazide dose increase is a classic trigger - diuretics raise serum uric acid by decreasing renal urate excretion" },
    
    { id: "recent_surgery", text: "Any recent surgeries or hospitalizations?",
      answer: "No, nothing like that.",
      tier: "helpful", linkedDx: ["Acute Gouty Arthritis"],
      reasoning: "Surgery is a known gout trigger - stress, dehydration, and fasting all affect urate metabolism" },
    
    { id: "shellfish", text: "What about seafood - do you eat much shellfish?",
      answer: "I love shrimp and lobster. We had shellfish at the birthday dinner actually.",
      tier: "helpful", linkedDx: ["Acute Gouty Arthritis"],
      reasoning: "Shellfish are high in purines - another dietary trigger for gout flares" }
];

// Enhanced Teaching Points - REPLACE existing array with this more comprehensive version:
const enhancedGoutTeachingPoints = [
    // Diagnosis
    "🔬 GOLD STANDARD: Visualization of negatively birefringent, needle-shaped MSU crystals in synovial fluid",
    "📊 Serum uric acid is NORMAL in 12-43% of patients during acute gout flares - do NOT use for diagnosis",
    "⏰ Best time to check serum uric acid: 2+ weeks after the flare completely resolves",
    "🦠 The presence of crystals does NOT exclude coexistent septic arthritis - ALWAYS send culture",
    
    // Clinical Presentation
    "🌙 Gout flares typically occur at NIGHT (midnight to 8 AM) - temperature drop promotes crystallization",
    "🦶 Podagra (first MTP gout) is the initial presentation in 80% of first gout attacks",
    "⚡ Maximum pain intensity typically reached within 12-24 hours of onset",
    "🔥 Polyarticular gout with fever can occur and may mimic septic arthritis",
    
    // Crystal Identification
    "💎 Gout crystals: Negative birefringence, needle-shaped, YELLOW when parallel to compensator (mnemonic: 'Negative Needles')",
    "💎 CPPD crystals: Positive birefringence, rhomboid-shaped, BLUE when parallel to compensator (mnemonic: 'Positive Plates')",
    
    // Risk Factors & Triggers
    "🍺 Alcohol triggers: Beer worst (has purines + reduces excretion), spirits moderate, wine lowest risk",
    "🥩 Dietary triggers: Red meat, organ meats, shellfish - all high in purines",
    "💊 Medication triggers: Thiazide diuretics, loop diuretics, low-dose aspirin, cyclosporine",
    "🏥 Other triggers: Surgery, dehydration, starvation, rapid weight loss, initiating ULT",
    
    // Treatment - Acute
    "💊 Low-dose colchicine (1.2mg + 0.6mg one hour later) is EQUALLY effective as high-dose with FAR fewer GI side effects",
    "⏰ Colchicine works best if started within 24-36 hours of symptom onset",
    "💉 Intra-articular corticosteroid injection is very effective for monoarticular gout",
    "⚠️ Avoid NSAIDs if renal impairment, GI bleeding history, or heart failure",
    
    // Treatment - Long-term
    "🚫 Do NOT start allopurinol during acute flare - wait 2+ weeks after resolution",
    "✅ If ALREADY on allopurinol when flare occurs, CONTINUE it - stopping worsens flares",
    "🎯 Urate-lowering therapy goal: serum urate <6 mg/dL (or <5 if tophi present)",
    "📈 Allopurinol: start LOW (100mg) and titrate slowly to reduce flare risk during initiation"
];

// Clinical Decision Rule (for suspected gout without arthrocentesis)
const goutClinicalDecisionRule = {
    name: "Janssens Gout Clinical Diagnostic Rule",
    description: "For primary care settings when arthrocentesis not readily available",
    citation: "Janssens HJ, et al. Arch Intern Med. 2010;170:1120-1126",
    criteria: [
        { finding: "Male sex", points: 2 },
        { finding: "Previous patient-reported arthritis attack", points: 2 },
        { finding: "Onset within 1 day", points: 0.5 },
        { finding: "Joint redness", points: 1 },
        { finding: "First MTP involvement", points: 2.5 },
        { finding: "Hypertension or cardiovascular disease", points: 1.5 },
        { finding: "Serum uric acid >5.88 mg/dL", points: 3.5 }
    ],
    interpretation: {
        low: { score: "≤4 points", probability: "2.2% gout probability" },
        intermediate: { score: ">4 to <8 points", probability: "31.2% - arthrocentesis recommended" },
        high: { score: "≥8 points", probability: "82.5% gout probability" }
    },
    caveat: "This rule cannot rule in or rule out septic arthritis - arthrocentesis still indicated if infection is a consideration"
};

// Provoking factors - detailed list for case enhancement
const goutProvokingFactors = {
    dietary: [
        { factor: "Alcohol (especially beer)", mechanism: "Increases urate production and decreases renal excretion" },
        { factor: "Red meat", mechanism: "High purine content" },
        { factor: "Organ meats (liver, kidney)", mechanism: "Very high purine content" },
        { factor: "Shellfish", mechanism: "High purine content" },
        { factor: "High-fructose corn syrup", mechanism: "Increases urate production" }
    ],
    medications: [
        { factor: "Thiazide diuretics", mechanism: "Decrease renal uric acid excretion" },
        { factor: "Loop diuretics", mechanism: "Decrease renal uric acid excretion" },
        { factor: "Low-dose aspirin (<2g/day)", mechanism: "Decreases renal uric acid excretion" },
        { factor: "Cyclosporine/tacrolimus", mechanism: "Decrease renal function and uric acid excretion" },
        { factor: "Initiating urate-lowering therapy", mechanism: "Rapid urate changes destabilize crystal deposits" }
    ],
    physiologic: [
        { factor: "Surgery", mechanism: "Stress response, dehydration, fasting" },
        { factor: "Trauma to joint", mechanism: "Crystal shedding into joint space" },
        { factor: "Dehydration", mechanism: "Concentrates uric acid" },
        { factor: "Starvation/fasting", mechanism: "Ketoacidosis impairs uric acid excretion" },
        { factor: "Rapid weight loss", mechanism: "Tissue breakdown releases purines" }
    ],
    temporal: [
        { factor: "Nocturnal/early morning onset", mechanism: "Lower body temperature decreases urate solubility" },
        { factor: "Hospitalization", mechanism: "Combination of stress, medication changes, dehydration" }
    ]
};

// Export for integration
const GOUT_ENHANCEMENTS = {
    additionalReferences: additionalGoutReferences,
    additionalPitfalls: additionalGoutPitfalls,
    additionalMCQ: additionalGoutMCQ,
    additionalImaging: additionalGoutImaging,
    additionalHistoryQuestions: additionalGoutHistoryQuestions,
    enhancedTeachingPoints: enhancedGoutTeachingPoints,
    clinicalDecisionRule: goutClinicalDecisionRule,
    provokingFactors: goutProvokingFactors
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GOUT_ENHANCEMENTS };
}
