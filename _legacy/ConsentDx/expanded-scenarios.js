/**
 * ConsentDx Expanded Scenarios
 * Additional informed consent training scenarios for comprehensive EPA 11 coverage
 */

const EXPANDED_CONSENT_SCENARIOS = [
    // ADDITIONAL PROCEDURE SCENARIOS
    {
        id: 'thoracentesis-copd',
        title: 'Thoracentesis',
        desc: 'Patient with COPD, worried about breathing during procedure',
        procedure: 'Diagnostic/Therapeutic Thoracentesis',
        patient: {
            name: 'Harold Stevens',
            age: 71,
            avatar: '👴',
            mood: 'anxious',
            moodLabel: 'Short of Breath',
            context: 'Large pleural effusion causing dyspnea. COPD at baseline. Worried about lying flat or holding still.',
            personality: 'Stoic but clearly uncomfortable, minimal words due to dyspnea'
        },
        requiredElements: [
            'Explanation of effusion and why it causes breathing problems',
            'How drainage will help breathing',
            'Position during procedure (sitting up, not flat)',
            'Risks: pneumothorax, bleeding, re-accumulation',
            'What to expect during needle insertion',
            'Monitoring after procedure'
        ],
        patientQuestions: [
            "Will I... have to... lie down? I can't... breathe flat.",
            "How much... will you take out?",
            "What if... my lung... collapses?",
            "How long... until I feel... better?",
            "Will it... fill back up... again?"
        ],
        ethicalNote: null
    },
    {
        id: 'bone-marrow-cancer',
        title: 'Bone Marrow Biopsy',
        desc: 'New cancer diagnosis, highly anxious patient',
        procedure: 'Bone Marrow Aspiration and Biopsy',
        patient: {
            name: 'Sarah Kim',
            age: 45,
            avatar: '👩',
            mood: 'anxious',
            moodLabel: 'Fearful',
            context: 'Abnormal CBC with suspected leukemia. First time hearing she might have cancer. Overwhelmed.',
            personality: 'Tearful, may need emotional support before information'
        },
        requiredElements: [
            'Acknowledge emotional impact first',
            'Why biopsy is necessary for diagnosis',
            'What the procedure involves (hip bone)',
            'Pain management (local anesthesia, possible sedation)',
            'Risks: pain, bleeding, infection (rare)',
            'Timeline for results',
            'Support resources available'
        ],
        patientQuestions: [
            "Does this mean I have cancer?",
            "I've heard this is extremely painful. Is that true?",
            "What happens if you find something bad?",
            "Can I have someone with me?",
            "How long until I know?"
        ],
        ethicalNote: 'Consider if patient is too distressed to provide valid consent - may need time to process diagnosis first'
    },
    {
        id: 'cardioversion-afib',
        title: 'Electrical Cardioversion',
        desc: 'Elective cardioversion, patient researched risks online',
        procedure: 'Synchronized Electrical Cardioversion',
        patient: {
            name: 'Thomas Wright',
            age: 62,
            avatar: '👨',
            mood: 'skeptical',
            moodLabel: 'Well-Researched',
            context: 'Persistent atrial fibrillation despite medication. Scheduled for elective cardioversion. Read about stroke risk.',
            personality: 'Educated, wants to discuss evidence, may challenge recommendations'
        },
        requiredElements: [
            'Current situation (afib despite meds)',
            'Goal of cardioversion (restore normal rhythm)',
            'Anticoagulation status and why it matters',
            'Procedure: sedation, brief shock, recovery',
            'Risks: stroke (minimized by anticoagulation), skin burns, arrhythmia',
            'Success rates and possibility of recurrence',
            'Alternative: rate control strategy'
        ],
        patientQuestions: [
            "What's my actual stroke risk with this procedure?",
            "What's the success rate for someone like me?",
            "What if it doesn't work or comes back?",
            "I read that TEE can rule out clot - do I need that?",
            "What are my options if I don't do this?"
        ],
        ethicalNote: null
    },
    
    // ETHICAL/COMPLEX SCENARIOS
    {
        id: 'transfusion-jehovah',
        title: 'Blood Transfusion Refusal',
        desc: 'Ethical: Jehovah\'s Witness refusing transfusion',
        procedure: 'Blood Transfusion (Refused)',
        patient: {
            name: 'Mary Patterson',
            age: 54,
            avatar: '👩',
            mood: 'cooperative',
            moodLabel: 'Firm but Respectful',
            context: 'GI bleed with Hgb 6.2, hemodynamically stable but symptomatic. Jehovah\'s Witness with advance directive refusing blood products.',
            personality: 'Clear about wishes, calm, has thought this through'
        },
        requiredElements: [
            'Verify patient understands current situation',
            'Confirm understanding of risks without transfusion',
            'Explore which products are acceptable (albumin? EPO?)',
            'Document capacity assessment',
            'Discuss alternative management strategies',
            'Respect autonomy while ensuring informed refusal'
        ],
        patientQuestions: [
            "I know this is hard for you, but my faith is clear on this.",
            "Are there any alternatives that don't use blood?",
            "Will you still take care of me even if I refuse?",
            "Can you explain exactly what might happen?",
            "I have my advance directive - did you see it?"
        ],
        ethicalNote: 'Competent adults have the right to refuse treatment, even life-saving treatment. Focus on ensuring informed refusal and exploring acceptable alternatives.'
    },
    {
        id: 'adolescent-contraception',
        title: 'Adolescent Contraception',
        desc: 'Ethical: Minor requesting confidential care',
        procedure: 'IUD Placement (Minor)',
        patient: {
            name: 'Jessica (17 years old)',
            age: 17,
            avatar: '👧',
            mood: 'anxious',
            moodLabel: 'Nervous',
            context: 'Sexually active 17-year-old requesting IUD. Does not want parents involved. State law allows minors to consent to contraceptive services.',
            personality: 'Mature but nervous about procedure and confidentiality'
        },
        requiredElements: [
            'Assess maturity and understanding',
            'Explain state law regarding minor consent for contraception',
            'Full informed consent for IUD (as with any patient)',
            'Discuss confidentiality and its limits',
            'Screen for coercion or abuse',
            'Offer to involve trusted adult (but respect choice)'
        ],
        patientQuestions: [
            "You're not going to tell my parents, right?",
            "Is this going to show up on their insurance?",
            "What if something goes wrong - will they find out then?",
            "I'm not being forced into this. This is my choice.",
            "How long until I can... you know... be active again?"
        ],
        ethicalNote: 'Many states allow minors to consent to reproductive health services. Balance confidentiality with safety screening. Document mature minor assessment if applicable.'
    },
    {
        id: 'surrogate-trach',
        title: 'Tracheostomy (Surrogate Decision)',
        desc: 'Ethical: Long-term vent patient, family decision',
        procedure: 'Tracheostomy',
        patient: {
            name: 'Family of Robert Chen',
            age: 'Wife and adult children',
            avatar: '👨‍👩‍👧‍👦',
            mood: 'conflicted',
            moodLabel: 'Divided Family',
            context: 'Patient intubated x 14 days for stroke, not expected to wean soon. Patient cannot participate. Family disagrees - wife wants "everything," son thinks father "wouldn\'t want this."',
            personality: 'Family members may speak over each other, emotional'
        },
        requiredElements: [
            'Explain current medical situation clearly',
            'What tracheostomy is and why recommended',
            'Goals: comfort, possible rehab vs prolonged ICU',
            'Facilitate discussion about patient\'s values',
            'Identify legal surrogate (usually spouse)',
            'Support family in making decision patient would want'
        ],
        patientQuestions: [
            "Will he ever wake up and be himself again?",
            "He always said he didn't want to be kept alive on machines.",
            "But he's a fighter - we can't just give up on him!",
            "If we do this, can we still change our minds later?",
            "What would you do if this were your father?"
        ],
        ethicalNote: 'Focus on substituted judgment (what would patient want?) over best interest. Surrogate hierarchy matters. Family conflict may require ethics consult.'
    },
    {
        id: 'psychiatric-hold',
        title: 'Involuntary Psychiatric Hold',
        desc: 'Ethical: Capacity and involuntary treatment',
        procedure: 'Involuntary Psychiatric Evaluation (72-hour hold)',
        patient: {
            name: 'David Martinez',
            age: 28,
            avatar: '👨',
            mood: 'agitated',
            moodLabel: 'Angry',
            context: 'Brought in by police after threatening self-harm. Denies suicidal ideation now, wants to leave. Psychiatry recommends 72-hour hold.',
            personality: 'Alternates between hostile and pleading, tests boundaries'
        },
        requiredElements: [
            'Explain reason for hold (safety concern)',
            'This is not punishment',
            'What the evaluation involves',
            'Patient rights during hold',
            'Duration and what happens next',
            'Conditions for release'
        ],
        patientQuestions: [
            "You can't keep me here - I have rights!",
            "I was just upset. I'm fine now. Let me go.",
            "What happens if I try to leave?",
            "How long are you going to keep me prisoner?",
            "I want to call my lawyer."
        ],
        ethicalNote: 'Involuntary holds are legal exceptions to autonomy when patient is danger to self/others. Explain process with compassion. Document criteria met.'
    },
    
    // PEDIATRIC SCENARIOS
    {
        id: 'infant-sepsis-workup',
        title: 'Sepsis Workup (Infant)',
        desc: 'LP and cultures for febrile neonate, anxious parents',
        procedure: 'Lumbar Puncture, Blood/Urine Cultures',
        patient: {
            name: 'Parents of 3-week-old Emma',
            age: 'Both parents present',
            avatar: '👶',
            mood: 'anxious',
            moodLabel: 'Terrified Parents',
            context: 'Febrile 21-day-old with no clear source. Need full sepsis workup including LP. Parents are first-time parents, very scared.',
            personality: 'Overwhelmed, may cry, need reassurance'
        },
        requiredElements: [
            'Explain why fever in newborns is serious',
            'What we need to rule out (meningitis, bacteremia, UTI)',
            'LP procedure and why it\'s necessary',
            'Pain management for baby',
            'IV antibiotics while awaiting results',
            'Expected timeline and disposition'
        ],
        patientQuestions: [
            "Is our baby going to die?",
            "Why does she need a spinal tap? Can't you just do blood tests?",
            "Will the needle hurt her? Can we be there?",
            "She was fine yesterday - how did this happen?",
            "How long do we have to stay?"
        ],
        ethicalNote: null
    },
    {
        id: 'adolescent-assent',
        title: 'Surgery (Adolescent Assent)',
        desc: 'Appendectomy in 14-year-old, including child in discussion',
        procedure: 'Laparoscopic Appendectomy',
        patient: {
            name: 'Tyler and his mother',
            age: 14,
            avatar: '👦',
            mood: 'scared',
            moodLabel: 'Scared Teen',
            context: 'Acute appendicitis, needs surgery. Mother will consent, but Tyler should be included in discussion and provide assent.',
            personality: 'Trying to be brave, has questions but afraid to ask'
        },
        requiredElements: [
            'Explain to both Tyler and mom together',
            'Age-appropriate explanation for Tyler',
            'What happens in surgery (small cuts, camera)',
            'Anesthesia - "like a deep sleep"',
            'Recovery expectations',
            'Ask Tyler if he understands and agrees (assent)'
        ],
        patientQuestions: [
            "(Mom) How safe is this surgery?",
            "(Tyler) Will I be asleep the whole time?",
            "(Tyler) Can I still play soccer this season?",
            "(Mom) What if you find something else in there?",
            "(Tyler) Will I have a scar?"
        ],
        ethicalNote: 'While parents consent for minors, older children should be included in discussions and asked for assent when developmentally appropriate.'
    }
];

// Additional patient personality types for variety
const PATIENT_PERSONALITIES = {
    anxious: {
        traits: ['Asks many questions', 'Needs reassurance', 'May interrupt', 'Focuses on worst-case'],
        communication: ['Speak slowly and calmly', 'Acknowledge fears before information', 'Offer to repeat information']
    },
    skeptical: {
        traits: ['Challenges recommendations', 'Asks for evidence', 'May have researched online', 'Tests your knowledge'],
        communication: ['Provide data when possible', 'Acknowledge their research', 'Respect their autonomy']
    },
    stoic: {
        traits: ['Minimal verbal response', 'May hide concerns', 'Says "okay" but may not understand'],
        communication: ['Use teach-back method', 'Ask open-ended questions', 'Allow silence for processing']
    },
    overwhelmed: {
        traits: ['Difficulty processing information', 'May cry', 'Asks same questions repeatedly'],
        communication: ['Provide written materials', 'Offer to return later', 'Involve support person']
    },
    angry: {
        traits: ['Hostile tone', 'Blames healthcare system', 'May refuse to engage'],
        communication: ['Stay calm', 'Validate frustration', 'Set boundaries respectfully']
    },
    confused: {
        traits: ['Inconsistent responses', 'Forgetful', 'May agree to things not understood'],
        communication: ['Assess capacity', 'Simplify language', 'Involve surrogate if needed']
    }
};

// Required elements framework for different procedure types
const CONSENT_FRAMEWORKS = {
    invasive: [
        'Nature of procedure (plain language)',
        'Why it is being recommended',
        'Risks (common and serious)',
        'Benefits (expected outcomes)',
        'Alternatives (including doing nothing)',
        'Right to refuse or withdraw consent',
        'Opportunity for questions'
    ],
    emergent: [
        'Brief explanation of emergency',
        'Why immediate action is needed',
        'Life-saving nature of intervention',
        'Document emergency exception if no time',
        'Verbal consent if possible'
    ],
    pediatric: [
        'All standard elements',
        'Explanation appropriate to child\'s age',
        'Parental consent required',
        'Assent from child when appropriate',
        'Child\'s comfort/concerns addressed'
    ],
    capacityLimited: [
        'Assess current capacity',
        'Identify legal surrogate',
        'Substituted judgment standard',
        'Document capacity assessment',
        'Consider ethics consult if conflict'
    ],
    refusal: [
        'Ensure understanding of diagnosis',
        'Explain consequences of refusal',
        'Explore reasons for refusal',
        'Offer alternatives if any',
        'Document informed refusal',
        'Leave door open for future'
    ]
};

// Export for use in ConsentDx
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        EXPANDED_CONSENT_SCENARIOS,
        PATIENT_PERSONALITIES,
        CONSENT_FRAMEWORKS
    };
}
