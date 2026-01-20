/**
 * COACHDX COMMUNICATION SKILLS SCENARIOS
 * Difficult Conversations and Patient Communication Training
 * 
 * Lauren Fine, MD, FAAAAI | January 2026
 * 
 * 9 Scenarios with Diverse Patient Names:
 * 1. Breaking Bad News: Cancer Diagnosis (SPIKES) - Margaret Okonkwo
 * 2. Goals of Care: Code Status Discussion (REMAP) - William Reyes family
 * 3. Medical Error Disclosure - Thomas Lindqvist
 * 4. Vaccine Hesitancy (Motivational Interviewing) - Priya Sharma & daughter Anika
 * 5. Informed Consent for High-Risk Procedure - Darnell Washington
 * 6. Non-Adherence Discussion - Fatima Al-Hassan
 * 7. Substance Use Conversation (SBIRT) - Sean O'Malley
 * 8. De-escalating Angry Patient - Marcus Freeman
 * 9. Patient Handoff (I-PASS) - Elena Volkov
 */

const COACHDX_COMMUNICATION_CASES = {

// ============================================================================
// 1. BREAKING BAD NEWS - CANCER DIAGNOSIS (SPIKES Protocol)
// ============================================================================

'comm-breaking-bad-news-cancer': {
    id: 'comm-breaking-bad-news-cancer',
    title: 'Breaking Bad News: New Cancer Diagnosis',
    category: 'Communication Skills',
    subcategory: 'Breaking Bad News',
    specialty: 'communication',
    discipline: 'medical',
    difficulty: 'advanced',
    duration: '20-30 minutes',
    isCritical: false,
    
    patient: {
        name: 'Margaret Okonkwo',
        age: 62,
        sex: 'Female',
        pronouns: 'she/her',
        setting: 'Outpatient Oncology Clinic',
        chiefComplaint: 'Follow-up for biopsy results',
        acuity: 'Stable',
        background: 'Retired teacher, lives with husband Samuel of 38 years, two adult children. Active in her church choir and community garden. No significant PMH until abnormal mammogram 2 weeks ago.',
        relevantHistory: 'Sister had breast cancer 10 years ago - survived but had difficult chemo course'
    },
    
    description: 'Mrs. Okonkwo is here to receive results of her breast biopsy performed 5 days ago. Pathology: invasive ductal carcinoma, Grade 2, ER/PR positive, HER2 negative. Staging workup pending. She came alone - husband Samuel had a work conflict.',
    
    openingStatement: 'Mrs. Okonkwo sits anxiously, clutching her purse. "I haven\'t been able to sleep waiting for these results. Please just tell me - is it cancer?"',
    
    skillFramework: {
        name: 'SPIKES Protocol',
        description: 'Six-step protocol for delivering bad news',
        steps: [
            { letter: 'S', name: 'Setting', description: 'Prepare the physical setting, ensure privacy, sit down, involve significant others' },
            { letter: 'P', name: 'Perception', description: 'Assess patient\'s perception - what do they already know or suspect?' },
            { letter: 'I', name: 'Invitation', description: 'Obtain patient\'s invitation - how much information do they want?' },
            { letter: 'K', name: 'Knowledge', description: 'Give knowledge - use clear language, warning shot, avoid jargon' },
            { letter: 'E', name: 'Emotions', description: 'Address emotions with empathic responses, use silence appropriately' },
            { letter: 'S', name: 'Strategy/Summary', description: 'Summarize and strategize - outline next steps, offer realistic hope' }
        ]
    },
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Understanding SPIKES framework, observing empathic communication',
            initialPrompt: 'Before we go in, what framework helps structure breaking bad news? What should we do first?',
            keyObjectives: ['Understand SPIKES components', 'Recognize importance of empathy', 'Observe non-verbal cues']
        },
        'resident': {
            focus: 'Delivering the news, managing emotional responses',
            initialPrompt: 'You\'ll lead this conversation. How will you deliver the diagnosis and handle her emotional response?',
            keyObjectives: ['Apply SPIKES independently', 'Respond to emotions in real-time', 'Balance information with support']
        },
        'fellow': {
            focus: 'Nuanced prognostic discussions, managing uncertainty',
            initialPrompt: 'She came alone but wanted her husband here. How does this affect your approach?',
            keyObjectives: ['Navigate prognostic uncertainty', 'Plan for family involvement', 'Address "what if" questions']
        },
        'arnp': {
            focus: 'Supporting role, follow-up care coordination',
            initialPrompt: 'What resources should you have ready? How will you follow up this week?',
            keyObjectives: ['Provide emotional support', 'Coordinate follow-up', 'Connect with resources']
        }
    },
    
    conceptDomains: {
        'Setting Up': ['privacy', 'seating', 'time', 'support_person', 'tissues'],
        'Assessing Understanding': ['prior_knowledge', 'suspicions', 'info_preferences'],
        'Delivering News': ['warning_shot', 'clear_language', 'pacing', 'checking_understanding'],
        'Emotional Response': ['silence', 'empathic_statements', 'normalizing', 'validating'],
        'Next Steps': ['treatment_overview', 'timeline', 'resources', 'follow_up', 'hope']
    },
    
    defined_responses: {
        'check setting': 'Good instinct. The room is private with the door closed. There\'s a chair next to her. Consider asking if she\'d like you to call her husband Samuel before proceeding.',
        'offer to call husband': 'She hesitates: "Maybe... but I need to know now. Can we call him after, once I know what we\'re dealing with?"',
        'sit down': 'You sit at her level. She relaxes slightly. "Thank you for sitting. It feels less clinical."',
        'what do you understand': '"They found something suspicious. The radiologist looked worried. I keep thinking about my sister who had breast cancer..."',
        'what are you expecting': '"Part of me knows it\'s probably cancer. The way everyone acted during the biopsy... But I keep hoping it\'s just a cyst."',
        'give warning shot': 'You say, "Mrs. Okonkwo, I\'m afraid I have some difficult news about your biopsy results." She grips the armrest. "Okay. I\'m ready."',
        'tell her diagnosis': '"The biopsy showed breast cancer - invasive ductal carcinoma." Tears well up. "Cancer. I knew it."',
        'explain type': '"There are things about your cancer that are actually in your favor. It has receptors that respond to hormone therapy, which gives us more treatment options."',
        'she is crying': 'She cries quietly. You sit in silence, then say, "This is incredibly hard news. It\'s okay to feel whatever you\'re feeling." She reaches for tissues.',
        'acknowledge fear': '"I can see how frightening this is." She looks up: "I keep thinking about my sister\'s chemo. She was so sick..."',
        'address sister': '"Watching your sister go through treatment sounds traumatic. Treatment has improved significantly in 10 years, and your cancer type may have different options."',
        'validate': '"The shock and fear you\'re feeling - that\'s completely normal. This is life-changing news."',
        'silence': 'You sit quietly, maintaining gentle eye contact. After 30 seconds, she takes a deep breath. "Okay. What happens next?"',
        'explain next steps': '"First, staging tests to see exactly what we\'re dealing with. Then you\'ll meet with our tumor board - surgeon, medical oncologist, radiation oncologist - for a personalized treatment plan."',
        'offer hope': '"Breast cancer treatment has come a long way. Many women with your type of cancer do very well. We\'re going to take excellent care of you."',
        'call husband now': 'You help her call Samuel. "Honey, it\'s cancer. Can you come?" You offer to speak with him about next steps.',
        'write it down': '"Here\'s a summary of what we discussed. It\'s normal not to remember everything from today."'
    },
    
    quickActions: ['How do I set up the conversation?', 'What does she know?', 'How do I deliver the news?', 'She\'s crying - what do I do?', 'What are next steps?', 'How do I offer hope?'],
    
    keyTeachingPoints: [
        'Use a "warning shot" before delivering bad news',
        'Sit at the patient\'s level - positioning affects perceived empathy',
        'Silence is therapeutic - don\'t rush to fill emotional moments',
        'Acknowledge family experiences that color the patient\'s fears',
        'Offer realistic hope: "Your cancer is treatable" not "You\'ll be fine"',
        'Provide written information - patients retain little from bad news conversations'
    ],
    
    commonMistakes: ['Delivering news while standing', 'Using jargon without explanation', 'Rushing to reassure before acknowledging emotions', 'Providing too much information at once', 'Offering false hope'],
    
    evidenceBase: {
        guidelines: [{ name: 'SPIKES Protocol', source: 'Baile WF et al., The Oncologist 2000', openAccess: true }],
        keyEvidence: ['Patients remember only 20-30% of information during bad news conversations', 'Empathic responses are associated with better patient outcomes']
    }
},

// ============================================================================
// 2. GOALS OF CARE - CODE STATUS DISCUSSION (REMAP Framework)
// ============================================================================

'comm-goals-of-care': {
    id: 'comm-goals-of-care',
    title: 'Goals of Care: Code Status Discussion',
    category: 'Communication Skills',
    subcategory: 'Goals of Care',
    specialty: 'communication',
    discipline: 'medical',
    difficulty: 'advanced',
    duration: '25-35 minutes',
    isCritical: false,
    
    patient: {
        name: 'William Reyes',
        age: 78,
        sex: 'Male',
        pronouns: 'he/him',
        setting: 'ICU Family Conference Room',
        chiefComplaint: 'Family meeting for intubated patient',
        acuity: 'Critical',
        background: 'Retired firefighter, Vietnam veteran. Metastatic NSCLC diagnosed 6 months ago, progressed through two lines of chemo. Now intubated for respiratory failure, on vasopressors.',
        relevantHistory: 'Wife Rosa passed 2 years ago from ovarian cancer. Two adult children: son Miguel (healthcare proxy) and daughter Isabel.'
    },
    
    description: 'Mr. Reyes was admitted 5 days ago with pneumonia and worsening respiratory failure requiring intubation. Despite treatment, he has not improved. Oncology confirms no further cancer-directed therapy. Prognosis is days to weeks. Son Miguel holds healthcare proxy. Both children are present.',
    
    openingStatement: 'You enter the conference room. Miguel sits stiffly, arms crossed. Isabel is tearful. Miguel says, "We need to know what\'s happening. Every day someone different tells us something different. Is our father going to make it or not?"',
    
    skillFramework: {
        name: 'REMAP Framework',
        description: 'Framework for goals of care conversations',
        steps: [
            { letter: 'R', name: 'Reframe', description: 'Reframe why the current situation calls for a conversation about goals' },
            { letter: 'E', name: 'Expect emotion', description: 'Expect and respond to emotion with empathy' },
            { letter: 'M', name: 'Map values', description: 'Map out what\'s most important to the patient' },
            { letter: 'A', name: 'Align', description: 'Align treatment options with patient values' },
            { letter: 'P', name: 'Plan', description: 'Propose a plan that matches values and medical realities' }
        ]
    },
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Understanding goals of care framework, observing family dynamics',
            initialPrompt: 'This is a family meeting about a critically ill patient. What should you observe about family dynamics and communication?',
            keyObjectives: ['Understand REMAP framework', 'Observe family roles', 'Recognize emotional cues']
        },
        'resident': {
            focus: 'Leading the conversation, managing family conflict',
            initialPrompt: 'Miguel and Isabel seem to have different expectations. How will you manage this while keeping focus on their father\'s values?',
            keyObjectives: ['Apply REMAP framework', 'Navigate family dynamics', 'Elicit patient values', 'Make clear recommendation']
        },
        'fellow': {
            focus: 'Complex prognostication, managing unrealistic expectations',
            initialPrompt: 'How do you discuss prognosis honestly while maintaining hope? How do you handle requests for "everything"?',
            keyObjectives: ['Nuanced prognostic disclosure', 'Values-based recommendations', 'Manage surrogate distress']
        }
    },
    
    conceptDomains: {
        'Reframing': ['explaining_situation', 'prognosis_disclosure', 'setting_agenda'],
        'Emotion': ['empathic_response', 'silence', 'validating_grief', 'managing_conflict'],
        'Values Mapping': ['eliciting_values', 'what_would_patient_want', 'quality_vs_quantity'],
        'Aligning': ['matching_treatments_to_values', 'burden_benefit', 'time_limited_trials'],
        'Planning': ['making_recommendation', 'comfort_focused_care', 'follow_up']
    },
    
    defined_responses: {
        'acknowledge frustration': '"I hear your frustration with getting different information. That\'s not acceptable, and I apologize. Let me give you a clear picture of where things stand."',
        'explain situation': '"Your father is very sick. Despite our best treatments, his lungs are failing because of the cancer. The breathing tube and medications are keeping him alive right now, but they\'re not making him better."',
        'prognosis': '"I wish I had better news. Even with everything we\'re doing, the cancer is progressing. We expect he has days to possibly a few weeks."',
        'miguel wants everything': 'Miguel says, "Then do everything. He\'s a fighter. He survived Vietnam." You respond: "I can see how much you love your father and want to fight for him. Can you tell me what \'everything\' means to you?"',
        'isabel accepts': 'Isabel, crying: "I think Dad would hate this. He always said he didn\'t want to die like Mom did - hooked up to machines." Miguel looks pained.',
        'explore values': '"What do you know about what your father would want in a situation like this? What mattered most to him?"',
        'miguel shares': 'Miguel\'s voice breaks: "He said he never wanted to be a burden. After Mom died, he said he was ready when his time came. He just... he wanted to see Isabel\'s wedding first. That\'s next month."',
        'wedding': 'Isabel: "Oh God, the wedding. Dad was so excited to walk me down the aisle." Both siblings are crying now.',
        'align values': '"It sounds like your father valued independence and not being a burden, but also wanted to be there for Isabel\'s wedding. Let\'s talk about what we can realistically achieve."',
        'make recommendation': '"Based on what you\'ve told me about your father\'s values, I\'m concerned that continued aggressive treatment would mean more suffering without meaningful recovery. I recommend we focus on keeping him comfortable and allowing natural death."',
        'time limited trial': '"If you\'re not ready to stop treatment, we could try a time-limited trial - continue for 48-72 hours, then reassess. But I want to be honest that I don\'t expect improvement."',
        'comfort focus': '"Comfort-focused care doesn\'t mean giving up. It means shifting our goal from fighting the disease to fighting suffering. We\'ll treat pain, shortness of breath, anxiety."',
        'can we bring wedding': 'Isabel asks, "Could we... could we do something? Bring the wedding here?" You respond: "That\'s a beautiful idea. Let\'s talk to our chaplain and social worker about how we can help make that happen."'
    },
    
    quickActions: ['How do I start this conversation?', 'They want "everything" - now what?', 'How do I share prognosis?', 'How do I elicit values?', 'How do I make a recommendation?', 'Family disagrees - help'],
    
    keyTeachingPoints: [
        'Reframe the conversation around the patient\'s condition, not treatments',
        'Expect and respond to emotion before returning to information',
        'Elicit the patient\'s values through the surrogate: "What would he say if he could speak for himself?"',
        'Make a clear recommendation aligned with values - surrogates need guidance',
        'Comfort care is active care, not "doing nothing"',
        'Time-limited trials can be a bridge when families aren\'t ready'
    ],
    
    evidenceBase: {
        guidelines: [{ name: 'REMAP Framework', source: 'VitalTalk', openAccess: true }],
        keyEvidence: ['Surrogate decision-makers experience less anxiety when physicians make recommendations', 'Values-based discussions lead to care more consistent with patient wishes']
    }
},

// ============================================================================
// 3. MEDICAL ERROR DISCLOSURE
// ============================================================================

'comm-error-disclosure': {
    id: 'comm-error-disclosure',
    title: 'Medical Error Disclosure',
    category: 'Communication Skills',
    subcategory: 'Error Disclosure',
    specialty: 'communication',
    discipline: 'medical',
    difficulty: 'advanced',
    duration: '15-25 minutes',
    
    patient: {
        name: 'Thomas Lindqvist',
        age: 45,
        sex: 'Male',
        pronouns: 'he/him',
        setting: 'Inpatient Medicine',
        chiefComplaint: 'Admitted for pneumonia, now with AKI',
        acuity: 'Moderate',
        background: 'Software engineer, married with two children. Generally healthy except for documented penicillin allergy (anaphylaxis age 12).'
    },
    
    description: 'Mr. Lindqvist was admitted 3 days ago for community-acquired pneumonia. He has a documented penicillin allergy (anaphylaxis). Despite this, he received one dose of ampicillin-sulbactam last night during a nursing shift change due to a medication reconciliation error. He developed hives treated with diphenhydramine but no anaphylaxis. His creatinine rose this morning (possibly related). The error has been reported to risk management.',
    
    openingStatement: 'Mr. Lindqvist is in his hospital bed, looking uncomfortable. He asks, "Doctor, I broke out in hives last night and they gave me Benadryl. The nurse seemed really worried. What happened?"',
    
    skillFramework: {
        name: 'Error Disclosure Best Practices',
        description: 'Ethical and effective approach to disclosing medical errors',
        steps: [
            { name: 'Disclose promptly', description: 'Patients have a right to know what happened to them' },
            { name: 'State clearly', description: 'Explain what happened in plain language' },
            { name: 'Apologize sincerely', description: 'Say "I\'m sorry this happened" without minimizing' },
            { name: 'Explain consequences', description: 'Describe what it means for their care' },
            { name: 'Describe prevention', description: 'Explain what\'s being done to prevent recurrence' },
            { name: 'Follow up', description: 'Address ongoing concerns and document the conversation' }
        ]
    },
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Understanding error disclosure principles',
            initialPrompt: 'A medication error occurred. What are the ethical obligations around disclosure?',
            keyObjectives: ['Understand duty to disclose', 'Recognize patient rights', 'Observe attending\'s approach']
        },
        'resident': {
            focus: 'Conducting the disclosure conversation',
            initialPrompt: 'You need to tell Mr. Lindqvist about the error. How will you approach this?',
            keyObjectives: ['Disclose clearly and honestly', 'Apologize appropriately', 'Manage patient anger', 'Document properly']
        }
    },
    
    conceptDomains: {
        'Disclosure': ['timing', 'honesty', 'clarity', 'avoiding_blame'],
        'Apology': ['sincere_apology', 'taking_responsibility', 'not_minimizing'],
        'Consequences': ['explaining_impact', 'ongoing_monitoring', 'treatment_adjustments'],
        'Prevention': ['system_changes', 'investigation', 'quality_improvement'],
        'Managing Reactions': ['patient_anger', 'legal_concerns', 'maintaining_trust']
    },
    
    defined_responses: {
        'acknowledge error': '"Mr. Lindqvist, I need to talk to you about something important. Last night, there was an error - you were given an antibiotic called ampicillin, which is related to penicillin, which you\'re allergic to. This should not have happened, and I\'m truly sorry."',
        'patient reaction': 'He looks alarmed. "Wait - I could have died! I had anaphylaxis as a kid. Why did this happen?"',
        'explain what happened': '"We\'re still investigating, but it appears there was a breakdown in our medication safety checks during the shift change. Your allergy is clearly documented and our system should have caught this. It failed, and we failed you."',
        'apologize': '"I am deeply sorry this happened. You trusted us with your care, and we let you down."',
        'explain consequences': '"Fortunately, you didn\'t have a severe reaction - just hives. Your kidneys are showing some stress this morning, which might be partly related. We\'re monitoring closely and it should improve."',
        'prevention': '"We\'re taking this very seriously. We\'re reviewing our medication safety processes and making changes to prevent this from happening to you or anyone else."',
        'patient angry': 'He says, "I could sue you for this!" You respond calmly: "I understand your anger, and you have every right to feel that way. If you want to speak with our patient advocate or risk management, I can arrange that. My priority right now is making sure you get the best care going forward."',
        'patient asks about legal': '"You have every right to pursue whatever course of action you feel is appropriate. I can connect you with our patient advocate who can explain your options."',
        'rebuild trust': '"I know this shakes your trust in us. I want you to know that your safety is our top priority, and we will be extra vigilant for the rest of your stay."',
        'document': 'Document the disclosure conversation thoroughly: what was disclosed, patient\'s questions, emotional response, and plan for follow-up.'
    },
    
    quickActions: ['How do I start disclosure?', 'How do I apologize?', 'He\'s angry - what now?', 'He mentions suing', 'How do I rebuild trust?'],
    
    keyTeachingPoints: [
        'Disclosure is an ethical obligation - patients have a right to know',
        'Apologize sincerely without minimizing: "I\'m sorry" not "I\'m sorry you feel that way"',
        'Focus on what happened, not who is to blame',
        'Explain concrete steps being taken to prevent recurrence',
        'Patient anger is understandable - validate it without becoming defensive',
        'Involve risk management but don\'t let that delay disclosure',
        'Document the conversation thoroughly'
    ],
    
    evidenceBase: {
        guidelines: [{ name: 'Disclosure Guidelines', source: 'AHRQ Communication and Optimal Resolution (CANDOR)', openAccess: true }],
        keyEvidence: ['Disclosure with apology reduces litigation', 'Patients value honesty over defensiveness']
    }
},

// ============================================================================
// 4. VACCINE HESITANCY (Motivational Interviewing)
// ============================================================================

'comm-vaccine-hesitancy': {
    id: 'comm-vaccine-hesitancy',
    title: 'Addressing Vaccine Hesitancy',
    category: 'Communication Skills',
    subcategory: 'Shared Decision Making',
    specialty: 'communication',
    discipline: 'medical',
    difficulty: 'intermediate',
    duration: '15-20 minutes',
    
    patient: {
        name: 'Priya Sharma',
        age: 32,
        sex: 'Female',
        pronouns: 'she/her',
        setting: 'Pediatric Primary Care',
        chiefComplaint: '4-year well child visit',
        background: 'Marketing manager, married. Daughter Anika is healthy, meeting milestones. Priya is well-educated and researches everything thoroughly.',
        child: { name: 'Anika Sharma', age: 4, sex: 'Female' }
    },
    
    description: 'Anika is here for her 4-year well-child visit and is due for DTaP, IPV, MMR, and varicella boosters. Her mother Priya mentions she\'s "not sure about vaccines anymore" after reading concerning things online and talking to other moms in her playgroup who didn\'t vaccinate.',
    
    openingStatement: 'Priya says, "I\'ve been reading a lot about vaccines, and I\'m just not sure they\'re safe. My friend\'s kid developed autism right after his MMR shot. I don\'t want to take that risk with Anika. Can we skip them?"',
    
    skillFramework: {
        name: 'Motivational Interviewing + Presumptive Approach',
        description: 'Patient-centered approach to address vaccine concerns while maintaining relationship',
        steps: [
            { name: 'Listen first', description: 'Understand specific concerns before addressing' },
            { name: 'Acknowledge', description: 'Validate the desire to protect - it comes from love' },
            { name: 'Ask permission', description: 'May I share what I know about this?' },
            { name: 'Share information', description: 'Address specific concerns with facts, don\'t overwhelm' },
            { name: 'Recommend clearly', description: 'Use presumptive language: "She\'s due for vaccines today"' },
            { name: 'Respect autonomy', description: 'If refusal, document, maintain relationship, leave door open' }
        ]
    },
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Understanding vaccine hesitancy, observing motivational interviewing',
            initialPrompt: 'The parent has vaccine concerns. What\'s the difference between hesitancy and refusal? How should we approach this?',
            keyObjectives: ['Understand vaccine hesitancy spectrum', 'Observe MI techniques', 'Learn evidence addressing concerns']
        },
        'resident': {
            focus: 'Conducting the conversation, managing misinformation',
            initialPrompt: 'How will you address her autism concern without being dismissive? What\'s your approach if she still refuses?',
            keyObjectives: ['Apply MI techniques', 'Address misinformation effectively', 'Make clear recommendation', 'Preserve relationship']
        }
    },
    
    conceptDomains: {
        'Listening': ['eliciting_concerns', 'understanding_sources', 'avoiding_judgment'],
        'Addressing Concerns': ['autism_myth', 'ingredients', 'immune_overload', 'natural_immunity'],
        'Recommending': ['presumptive_language', 'personal_recommendation', 'benefits_over_risks'],
        'Respecting Autonomy': ['documenting_refusal', 'leaving_door_open', 'maintaining_relationship']
    },
    
    defined_responses: {
        'acknowledge concern': '"I can see you\'ve been thinking about this a lot, and I appreciate that you\'re trying to do what\'s best for Anika. It\'s natural to have questions. Can you tell me more about what concerns you?"',
        'autism concern': '"I understand that concern - it\'s one I hear from many parents. The good news is this has been studied extensively. Multiple studies with millions of children found no connection between vaccines and autism. The original study suggesting a link was retracted because the researcher falsified data."',
        'friends child': '"I can understand why that story affected you. When we see things happen close together in time, it\'s natural to think one caused the other. But autism symptoms typically become noticeable around the same age vaccines are given - it\'s coincidence in timing, not causation."',
        'natural immunity': '"Natural immunity can be strong, but the diseases themselves are dangerous. Measles can cause brain damage and death. Whooping cough kills infants. With vaccines, we get immunity without the risks of actual disease."',
        'too many': '"Kids\' immune systems are actually incredible - they encounter thousands of antigens daily. The antigens in all childhood vaccines combined are a tiny fraction of what their immune system handles naturally."',
        'ingredients': '"I\'d be happy to go through the ingredients with you. The amounts are tiny - less than you\'d find in a pear or a serving of fish. Nothing in vaccines has been shown to cause harm at these doses."',
        'personal recommendation': '"As Anika\'s doctor, I strongly recommend these vaccines. I vaccinated my own children on this exact schedule because I believe it\'s the best protection we can give them."',
        'still unsure': 'She says, "I don\'t know... I need to think about it more." You respond: "I respect that this is an important decision. Can we agree to give at least some vaccines today - perhaps the ones with the most urgent risk? We can discuss the others at your next visit."',
        'refuses all': '"I respect that this is your decision, and I want to continue caring for Anika. I\'d ask that we talk about this again at her next visit. In the meantime, please call immediately if she develops high fever, rash, or cough."',
        'document': 'Document the discussion, refusal, risks explained, and plan for revisiting at next visit.'
    },
    
    quickActions: ['How do I start?', 'She mentions autism', 'She says "too many vaccines"', 'She wants "natural immunity"', 'She still refuses', 'What do I document?'],
    
    keyTeachingPoints: [
        'Use presumptive language: "Anika is due for vaccines today" vs "Would you like to vaccinate?"',
        'Listen first - understand specific concerns before addressing',
        'Acknowledge the concern comes from love and desire to protect',
        'Don\'t be dismissive or condescending - this destroys trust',
        'Share your personal recommendation clearly',
        'If refusal: document, continue relationship, leave door open'
    ],
    
    evidenceBase: {
        guidelines: [{ name: 'AAP Vaccine Hesitancy Guidance', source: 'American Academy of Pediatrics', openAccess: true }],
        keyEvidence: ['Presumptive language increases vaccine acceptance', 'MI techniques preserve therapeutic relationship']
    }
},

// ============================================================================
// 5. INFORMED CONSENT FOR HIGH-RISK PROCEDURE
// ============================================================================

'comm-informed-consent': {
    id: 'comm-informed-consent',
    title: 'Informed Consent for High-Risk Procedure',
    category: 'Communication Skills',
    subcategory: 'Informed Consent',
    specialty: 'communication',
    discipline: 'medical',
    difficulty: 'intermediate',
    duration: '20-25 minutes',
    
    patient: {
        name: 'Darnell Washington',
        age: 67,
        sex: 'Male',
        pronouns: 'he/him',
        setting: 'Pre-operative Area',
        chiefComplaint: 'Scheduled for carotid endarterectomy',
        acuity: 'Urgent',
        background: 'Retired postal worker, widower, lives alone. DM2, HTN, 40-pack-year smoking history (quit 5 years ago). Symptomatic left carotid stenosis (90%) with recent TIA (left arm weakness, resolved).'
    },
    
    description: 'Mr. Washington is scheduled for left carotid endarterectomy tomorrow morning. He had a TIA 2 weeks ago with transient left arm weakness. Carotid ultrasound showed 90% left ICA stenosis. Without surgery, his stroke risk is 20-25% per year. The procedure carries 3-5% risk of stroke or death.',
    
    openingStatement: 'Mr. Washington is sitting on the stretcher in the pre-op area. He looks anxious. "Doc, I\'m nervous about tomorrow. My friend had this surgery and had a stroke on the table. Is that going to happen to me?"',
    
    skillFramework: {
        name: 'Elements of Informed Consent',
        description: 'Legal and ethical requirements for valid consent',
        steps: [
            { name: 'Diagnosis', description: 'Explain the condition being treated' },
            { name: 'Nature of procedure', description: 'Describe what the surgery involves' },
            { name: 'Risks', description: 'Disclose material risks (those that would affect decision)' },
            { name: 'Benefits', description: 'Explain expected benefits' },
            { name: 'Alternatives', description: 'Discuss other options including no treatment' },
            { name: 'Opportunity for questions', description: 'Ensure understanding and voluntary consent' }
        ]
    },
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Understanding elements of informed consent',
            initialPrompt: 'What are the required elements of informed consent? How do we ensure the patient truly understands?',
            keyObjectives: ['Know consent elements', 'Understand capacity assessment', 'Recognize coercion']
        },
        'resident': {
            focus: 'Conducting the consent conversation',
            initialPrompt: 'He\'s anxious about a friend\'s bad outcome. How do you address this while still obtaining informed consent?',
            keyObjectives: ['Conduct thorough consent', 'Address specific fears', 'Balance honesty with reassurance', 'Verify understanding']
        }
    },
    
    conceptDomains: {
        'Explanation': ['diagnosis', 'procedure_description', 'what_to_expect'],
        'Risks': ['major_risks', 'frequency', 'individual_risk_factors'],
        'Benefits': ['expected_outcomes', 'stroke_prevention', 'prognosis_without'],
        'Alternatives': ['medical_management', 'stenting', 'watchful_waiting'],
        'Understanding': ['teach_back', 'questions', 'voluntary_decision']
    },
    
    defined_responses: {
        'acknowledge fear': '"I understand your worry, especially after what happened to your friend. That must have been frightening to witness. Let\'s talk through what this surgery involves and what the risks really are."',
        'explain condition': '"You have a severely narrowed artery in your neck - 90% blocked. The TIA you had - the arm weakness - was a warning sign. Without treatment, there\'s about a 20-25% chance of having a major stroke in the next year."',
        'explain procedure': '"We\'ll make an incision in your neck, open the artery, remove the plaque buildup, and repair the artery. The surgery takes about 2-3 hours. You\'ll be under general anesthesia."',
        'explain risks': '"I have to be honest with you about the risks. The main risks are stroke or death during or right after surgery - about 3-5%. There\'s also risk of bleeding, infection, nerve injury causing hoarseness or facial droop, and heart complications."',
        'friends stroke': '"I don\'t know the details of your friend\'s case, but strokes during surgery do happen. However, it\'s important to know that without surgery, your risk of stroke is much higher - 20-25% per year versus 3-5% from the surgery."',
        'explain benefits': '"The goal is to prevent a major stroke. After successful surgery, your annual stroke risk drops to about 2-3%. Most people recover well and go home in 1-2 days."',
        'explain alternatives': '"There are alternatives. Medical management - aspirin, statin, blood pressure control - reduces risk somewhat but not as much as surgery. Carotid stenting is another option but has similar risks and may not be as durable. Or you could choose to do nothing, but your stroke risk remains very high."',
        'why surgery best': '"Given the severity of your blockage and that you\'ve already had a warning TIA, surgery gives you the best chance of preventing a disabling stroke."',
        'individual risk': '"Your personal risks are affected by your diabetes and history of smoking, which may make the surgery slightly higher risk. But those same factors also make your stroke risk without surgery even higher."',
        'check understanding': '"I want to make sure I\'ve explained this clearly. Can you tell me, in your own words, what we\'re trying to prevent and what the main risks are?"',
        'patient repeats': 'He says, "So the surgery has a small chance of stroke, but without it I\'m very likely to have a big stroke. And you think surgery is my best option." You respond: "That\'s exactly right. Do you have any other questions?"',
        'decision': '"This is your decision. I recommend the surgery because I believe it\'s your best chance at avoiding a disabling stroke, but you have the right to choose differently."',
        'patient agrees': '"I don\'t want to have a stroke. Let\'s do it." You proceed with documenting consent.'
    },
    
    quickActions: ['How do I address his fear?', 'What risks do I disclose?', 'How do I explain benefits?', 'What are the alternatives?', 'How do I check understanding?'],
    
    keyTeachingPoints: [
        'Acknowledge anxiety before diving into consent elements',
        'Disclose material risks - those that would affect a reasonable person\'s decision',
        'Use absolute numbers when possible: "3-5 out of 100" rather than percentages',
        'Explain risk of NOT having the procedure',
        'Use teach-back to verify understanding',
        'Consent is a conversation, not just a form to sign'
    ],
    
    evidenceBase: {
        guidelines: [{ name: 'AMA Informed Consent Guidelines', source: 'AMA Code of Medical Ethics', openAccess: true }],
        keyEvidence: ['Patients retain information better when given time and written materials', 'Teach-back improves comprehension']
    }
},

// ============================================================================
// 6. NON-ADHERENCE DISCUSSION
// ============================================================================

'comm-non-adherence': {
    id: 'comm-non-adherence',
    title: 'Non-Adherence Discussion',
    category: 'Communication Skills',
    subcategory: 'Behavior Change',
    specialty: 'communication',
    discipline: 'medical',
    difficulty: 'intermediate',
    duration: '15-20 minutes',
    
    patient: {
        name: 'Fatima Al-Hassan',
        age: 58,
        sex: 'Female',
        pronouns: 'she/her',
        setting: 'Primary Care Office',
        chiefComplaint: 'Follow-up for hypertension and diabetes',
        acuity: 'Routine',
        background: 'Works two jobs (hospital housekeeper, hotel cleaning). DM2 and HTN for 10 years. A1c was 7.2% last year, now 9.8%. BP today 162/98. Lives with adult daughter and grandchildren. Husband passed 3 years ago.'
    },
    
    description: 'Mrs. Al-Hassan\'s diabetes and blood pressure have worsened significantly. A1c rose from 7.2% to 9.8%, and BP is uncontrolled. Pharmacy records show she hasn\'t filled her metformin or lisinopril in 3 months. She looks tired and seems uncomfortable discussing her medications.',
    
    openingStatement: 'Mrs. Al-Hassan avoids eye contact. "I know, I know... my numbers are bad. I\'ve just been so busy with work. I\'m trying, doctor."',
    
    skillFramework: {
        name: 'Non-judgmental Adherence Assessment',
        description: 'Understanding barriers without blame',
        steps: [
            { name: 'Normalize', description: 'Acknowledge that many people struggle with medications' },
            { name: 'Assess barriers', description: 'Explore practical, financial, belief, and knowledge barriers' },
            { name: 'Collaborate', description: 'Problem-solve together based on their priorities' },
            { name: 'Simplify', description: 'Reduce pill burden, align with routines' },
            { name: 'Follow up', description: 'Plan for monitoring and support' }
        ]
    },
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Understanding barriers to adherence',
            initialPrompt: 'Her numbers worsened and she hasn\'t filled prescriptions. What factors might contribute to non-adherence?',
            keyObjectives: ['Understand adherence barriers', 'Avoid judgmental language', 'Recognize social determinants']
        },
        'resident': {
            focus: 'Conducting non-judgmental assessment and problem-solving',
            initialPrompt: 'How will you explore why she stopped her medications without making her feel judged?',
            keyObjectives: ['Use open-ended questions', 'Identify modifiable barriers', 'Collaborate on solutions', 'Connect with resources']
        }
    },
    
    conceptDomains: {
        'Normalizing': ['destigmatizing', 'everyone_struggles', 'partnership'],
        'Barriers': ['cost', 'side_effects', 'beliefs', 'complexity', 'health_literacy', 'social_factors'],
        'Problem_Solving': ['simplifying_regimen', 'aligning_with_routine', 'addressing_cost', 'social_support'],
        'Resources': ['patient_assistance', 'generic_alternatives', 'community_resources']
    },
    
    defined_responses: {
        'normalize': '"Mrs. Al-Hassan, a lot of my patients struggle with taking medications regularly, especially when they\'re working hard like you are. Can we talk about what\'s been going on? I\'m not here to lecture - I want to help."',
        'ask openly': '"Help me understand - what\'s made it hard to take the medications?"',
        'she reveals cost': 'She looks down. "The truth is... I lost my insurance when I went part-time. The medications cost too much. I had to choose between pills and groceries for my grandkids."',
        'acknowledge cost': '"That\'s an impossible choice, and I\'m sorry you\'ve had to make it. Thank you for telling me - there\'s a lot we can do to help."',
        'explore more': '"Are there other barriers too? Side effects, forgetting, anything else?"',
        'she mentions side effects': '"The metformin gives me terrible stomach problems. And the water pill makes me run to the bathroom all day at work. It\'s embarrassing."',
        'address side effects': '"Those are common problems and there are solutions. We can try extended-release metformin which is easier on the stomach, and adjust the timing of the water pill so it\'s not during your shifts."',
        'cost solutions': '"Let me tell you about some options. There are $4 generic programs at many pharmacies. The drug companies have patient assistance programs. And we have a social worker who can help you apply for insurance or Medicaid."',
        'simplify regimen': '"Let\'s also see if we can simplify. You\'re on 4 different pills. We might be able to combine some or reduce doses if we can improve your diet and exercise."',
        'align with routine': '"When do you have time that\'s consistent every day? We can try to time your medications with something you already do - like with your morning coffee."',
        'prioritize': '"If you could only take one medication, which would you choose?" She says her blood pressure. "Okay, let\'s start there and add back the diabetes medication once we solve the cost issue."',
        'social work referral': '"I\'m going to have our social worker call you. She can help with insurance, medication assistance programs, and even food resources if needed."',
        'close loop': '"I want to see you back in 4 weeks. Call me if you have any problems getting the medications or if the side effects are too much. We\'re going to figure this out together."'
    },
    
    quickActions: ['How do I open this conversation?', 'She can\'t afford medications', 'She has side effects', 'How do I simplify her regimen?', 'What resources are available?'],
    
    keyTeachingPoints: [
        'Non-adherence is rarely intentional defiance - explore barriers',
        'Cost is a major barrier - always ask about insurance/affordability',
        'Side effects matter - if you don\'t ask, patients won\'t tell',
        'Simplify regimens when possible - pill burden affects adherence',
        'Connect with social work/pharmacy for assistance programs',
        'Follow up frequently when restarting medications'
    ],
    
    evidenceBase: {
        guidelines: [{ name: 'ADA Standards of Care - Adherence', source: 'American Diabetes Association 2024', openAccess: true }],
        keyEvidence: ['Cost-related non-adherence affects 25% of patients', 'Non-judgmental approach improves disclosure of barriers']
    }
},

// ============================================================================
// 7. SUBSTANCE USE CONVERSATION (SBIRT)
// ============================================================================

'comm-substance-use': {
    id: 'comm-substance-use',
    title: 'Substance Use Conversation',
    category: 'Communication Skills',
    subcategory: 'SBIRT',
    specialty: 'communication',
    discipline: 'medical',
    difficulty: 'intermediate',
    duration: '15-25 minutes',
    
    patient: {
        name: 'Sean O\'Malley',
        age: 42,
        sex: 'Male',
        pronouns: 'he/him',
        setting: 'Primary Care Office',
        chiefComplaint: 'Annual physical',
        acuity: 'Routine',
        background: 'Construction foreman, married 15 years to wife Colleen, two teenagers. History of back injury 5 years ago. Reports "a few beers after work to relax."'
    },
    
    description: 'Mr. O\'Malley is here for his annual physical. His screening questionnaire shows an AUDIT-C score of 8 (indicative of heavy alcohol use). His LFTs are mildly elevated. His wife called the office last week (without his knowledge) expressing concern about his drinking.',
    
    openingStatement: 'Mr. O\'Malley seems relaxed. "Everything\'s fine, doc. Just need my physical for work. Maybe check my cholesterol." When you ask about alcohol, he says, "I have a few beers after work. Nothing crazy. It\'s how I unwind."',
    
    skillFramework: {
        name: 'SBIRT Framework',
        description: 'Screening, Brief Intervention, and Referral to Treatment',
        steps: [
            { letter: 'S', name: 'Screening', description: 'Use validated tools (AUDIT-C) to identify risky use' },
            { letter: 'B', name: 'Brief Intervention', description: 'Provide feedback, assess readiness to change' },
            { letter: 'R', name: 'Referral to Treatment', description: 'Connect with appropriate level of care if needed' }
        ]
    },
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Understanding SBIRT, recognizing substance use disorder',
            initialPrompt: 'His AUDIT-C score is 8. What does that mean? How do we approach this conversation?',
            keyObjectives: ['Interpret screening tools', 'Understand stages of change', 'Observe MI techniques']
        },
        'resident': {
            focus: 'Conducting brief intervention, assessing readiness',
            initialPrompt: 'He minimizes his drinking but screening shows heavy use. How do you raise the topic without being confrontational?',
            keyObjectives: ['Conduct non-judgmental assessment', 'Apply brief intervention', 'Assess readiness to change', 'Offer resources']
        }
    },
    
    conceptDomains: {
        'Screening': ['AUDIT_interpretation', 'lab_findings', 'collateral_info'],
        'Assessment': ['quantity_frequency', 'consequences', 'dependence_symptoms'],
        'Brief Intervention': ['feedback', 'advice', 'menu_of_options', 'empathy', 'self_efficacy'],
        'Readiness': ['stages_of_change', 'rolling_with_resistance', 'developing_discrepancy'],
        'Referral': ['treatment_options', 'AA', 'outpatient', 'detox']
    },
    
    defined_responses: {
        'gentle inquiry': '"Can you tell me more about your typical drinking? What does \'a few beers\' look like on a regular day?"',
        'he minimizes': '"Oh, maybe 4-5 beers after work. A bit more on weekends when we\'re watching the game with the guys. But I work hard, I deserve to relax."',
        'calculate drinks': '4-5 beers daily = 28-35 drinks/week. This is well above the recommended limit of 14/week for men.',
        'give feedback': '"Thanks for being honest with me. I want to share something. Based on what you\'ve told me, you\'re drinking about 30 drinks a week. The level that\'s considered safe for men is 14 or less. That puts you at higher risk for health problems."',
        'explain health': '"Your liver tests are already showing some stress - they\'re mildly elevated. This is often an early sign of alcohol affecting your liver."',
        'he defensive': '"Come on, doc. I\'m not an alcoholic. I work every day. I don\'t drink at work. My dad was an alcoholic - I\'m nothing like him."',
        'avoid label': '"I hear you, and I\'m not trying to put a label on you. But you don\'t have to be like your dad to be concerned about your drinking. There\'s a spectrum, and where you are now is affecting your health."',
        'develop discrepancy': '"You mentioned your dad was an alcoholic. What concerns you about that?"',
        'he reflects': '"I don\'t want to be like him. He was never there for us. I promised myself I\'d be different."',
        'explore impact': '"How do you think your drinking is affecting your family now?"',
        'he admits concern': 'He\'s quiet. "Colleen\'s been on my case. She says I pass out on the couch every night. The kids don\'t talk to me much anymore."',
        'raise readiness': '"It sounds like the drinking might be creating some distance from your family - the very thing you wanted to avoid."',
        'assess readiness': '"On a scale of 1-10, how important is it to you to make a change? And how confident are you that you could if you wanted to?"',
        'menu of options': '"There are different ways to approach this. Some people cut back on their own. Some find support groups like AA helpful. Some benefit from counseling or medication that reduces cravings. What sounds like it might fit for you?"',
        'he not ready': '"I don\'t know. I need to think about it." You respond: "That\'s okay. I\'m planting a seed. I want you to think about what we talked about. Can we check in on this at your next visit?"',
        'provide resources': '"Here\'s some information about drinking levels and health. If you ever want to talk more or want help cutting back, I\'m here. You don\'t have to figure this out alone."'
    },
    
    quickActions: ['How do I bring this up?', 'He says he\'s not an alcoholic', 'How do I give feedback?', 'He\'s defensive', 'How do I assess readiness?', 'What resources can I offer?'],
    
    keyTeachingPoints: [
        'Use validated screening tools - don\'t rely on clinical impression alone',
        'Give objective feedback without judgment or labels',
        'Avoid power struggles - roll with resistance',
        'Develop discrepancy between behavior and values',
        'Assess readiness to change before pushing action',
        'Offer a menu of options rather than prescribing one path',
        'Plant seeds - change may take multiple conversations'
    ],
    
    evidenceBase: {
        guidelines: [{ name: 'SBIRT Implementation', source: 'SAMHSA', openAccess: true }],
        keyEvidence: ['Brief interventions reduce drinking by 20-30% in at-risk drinkers', 'Motivational interviewing more effective than confrontation']
    }
},

// ============================================================================
// 8. DE-ESCALATING ANGRY PATIENT
// ============================================================================

'comm-deescalation': {
    id: 'comm-deescalation',
    title: 'De-escalating an Angry Patient',
    category: 'Communication Skills',
    subcategory: 'Difficult Encounters',
    specialty: 'communication',
    discipline: 'medical',
    difficulty: 'advanced',
    duration: '15-20 minutes',
    
    patient: {
        name: 'Marcus Freeman',
        age: 48,
        sex: 'Male',
        pronouns: 'he/him',
        setting: 'Emergency Department',
        chiefComplaint: 'Knee pain after fall, 6-hour wait',
        acuity: 'Low (ESI 4)',
        background: 'Warehouse supervisor, no regular PCP. Fell at work 2 days ago. Waited 6 hours in the ED. Increasingly frustrated, raising his voice at staff.'
    },
    
    description: 'Mr. Freeman has been waiting 6 hours for knee pain after a fall at work. He was triaged as ESI 4 (low acuity). The waiting room is packed with higher acuity patients. He\'s now shouting at the triage nurse, demanding to be seen immediately. Security has been called but hasn\'t arrived yet.',
    
    openingStatement: 'You approach Mr. Freeman, who is standing and visibly agitated. He\'s loud but not physically threatening. "This is RIDICULOUS! I\'ve been here SIX HOURS! I could have DIED waiting! You people don\'t care about anyone!"',
    
    skillFramework: {
        name: 'De-escalation Framework',
        description: 'Techniques to reduce emotional intensity and restore productive communication',
        steps: [
            { name: 'Ensure safety', description: 'Position yourself, have exit, don\'t corner patient' },
            { name: 'Stay calm', description: 'Lower your voice, slow your movements' },
            { name: 'Active listening', description: 'Let them vent, acknowledge the emotion' },
            { name: 'Validate', description: 'Show you understand why they\'re upset' },
            { name: 'Partner', description: 'Work together toward a solution' },
            { name: 'Offer options', description: 'Give choices to restore sense of control' }
        ]
    },
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Understanding de-escalation principles, recognizing escalation warning signs',
            initialPrompt: 'This patient is angry and shouting. What do you notice? What are the warning signs for escalation vs. de-escalation?',
            keyObjectives: ['Recognize warning signs', 'Understand de-escalation principles', 'Know when to step back']
        },
        'resident': {
            focus: 'Applying de-escalation techniques',
            initialPrompt: 'He\'s shouting but not physically threatening. How do you approach? What do you say first?',
            keyObjectives: ['Apply de-escalation techniques', 'Manage own emotional response', 'Set limits while maintaining rapport', 'Know when to involve security']
        }
    },
    
    conceptDomains: {
        'Safety': ['positioning', 'exit_access', 'personal_space', 'security_awareness'],
        'Self_Regulation': ['calm_voice', 'slow_movements', 'managing_own_emotions'],
        'Active_Listening': ['letting_vent', 'reflecting', 'not_interrupting'],
        'Validation': ['acknowledging_feelings', 'expressing_understanding', 'not_dismissing'],
        'Problem_Solving': ['finding_options', 'offering_choices', 'setting_limits']
    },
    
    defined_responses: {
        'position safely': 'You position yourself at an angle (not directly facing), maintain about 6 feet distance, and ensure you have a clear path to the exit. You keep your hands visible and relaxed.',
        'calm voice': 'You lower your voice - speaking calmly often prompts the other person to match your volume. "Mr. Freeman, I can see you\'re very upset. I want to help."',
        'let him vent': 'He continues: "Six hours! My knee is killing me! I have to work tomorrow! No one has even LOOKED at me!" You listen without interrupting, nodding to show you hear him.',
        'acknowledge emotion': '"You\'re frustrated, and I understand why. Six hours is a long time to wait when you\'re in pain."',
        'validate concern': '"Your knee is hurting, you\'re worried about work, and it feels like no one cares. That\'s a terrible feeling."',
        'he calms slightly': 'His voice drops a bit. "I just... I don\'t understand why it takes so long. I\'ve seen people come in after me and get seen first."',
        'explain triage': '"You\'re right, that happened. In the emergency department, we have to see the sickest patients first - people having heart attacks, strokes, trauma. Your knee injury, while painful, isn\'t immediately dangerous. That\'s actually good news about your injury."',
        'he still upset': '"Good news? It doesn\'t feel like good news sitting out here for 6 hours!"',
        'offer options': '"Here\'s what I can do. I can get you some ice for your knee and some ibuprofen for the pain right now. I can also give you a better estimate of when you\'ll be seen. Would that help?"',
        'partner': '"I want to help you get through this. What would be most helpful right now - pain relief, an update on timing, or both?"',
        'set limit gently': '"I need you to lower your voice so we can work together on this. I\'m on your side, but I can\'t help you if you\'re shouting."',
        'he escalates': 'If he escalates further or makes threats, say: "I want to help you, but I can\'t do that if I don\'t feel safe. If you can\'t lower your voice, I\'ll need to step away and involve security."',
        'he calms': 'He takes a breath. "I\'m sorry. I\'m just frustrated. The ice would help. And knowing when I might be seen."',
        'resolution': '"Thank you for working with me. I\'m going to get you that ice and pain medicine, and I\'ll check on your estimated wait time. We\'ll get you taken care of."'
    },
    
    quickActions: ['How do I position myself?', 'What do I say first?', 'He keeps shouting', 'How do I validate without agreeing?', 'He\'s escalating - what now?', 'How do I set limits?'],
    
    keyTeachingPoints: [
        'Safety first - position yourself with an exit, maintain distance',
        'Lower your voice to encourage them to match your tone',
        'Let them vent - trying to interrupt escalates anger',
        'Validate the emotion even if you can\'t fix the situation',
        'Offer choices to restore sense of control',
        'Set clear limits without threats or ultimatums',
        'Know when to disengage and involve security',
        'Debrief afterward - these encounters are stressful'
    ],
    
    evidenceBase: {
        guidelines: [{ name: 'AACN De-escalation Guidelines', source: 'American Association of Critical Care Nurses', openAccess: true }],
        keyEvidence: ['Verbal de-escalation prevents 80% of potential violence', 'Validation reduces agitation faster than logic or explanation']
    }
},

// ============================================================================
// 9. PATIENT HANDOFF (I-PASS)
// ============================================================================

'comm-handoff': {
    id: 'comm-handoff',
    title: 'Patient Handoff (I-PASS)',
    category: 'Communication Skills',
    subcategory: 'Handoffs',
    specialty: 'communication',
    discipline: 'medical',
    difficulty: 'intermediate',
    duration: '10-15 minutes',
    
    patient: {
        name: 'Elena Volkov',
        age: 72,
        sex: 'Female',
        pronouns: 'she/her',
        setting: 'Medicine Floor',
        chiefComplaint: 'COPD exacerbation',
        acuity: 'Medium',
        background: 'Retired librarian, former smoker (quit 10 years ago), lives with daughter. Admitted 2 days ago for COPD exacerbation. Improving but had a concerning episode of confusion earlier today.'
    },
    
    description: 'You\'re signing out Mrs. Volkov to the night team. She was admitted for COPD exacerbation, is improving on steroids and antibiotics, but had an episode of confusion at 2 PM that resolved. Family is concerned. She\'s on 2L NC, last ABG was acceptable, and is on a steroid taper.',
    
    openingStatement: 'The night resident, Dr. Adeyemi, is ready to receive signout. "Okay, tell me about Mrs. Volkov in 448."',
    
    skillFramework: {
        name: 'I-PASS Framework',
        description: 'Standardized handoff communication structure',
        steps: [
            { letter: 'I', name: 'Illness severity', description: 'Stable, watcher, or unstable' },
            { letter: 'P', name: 'Patient summary', description: 'Brief summary of why they\'re here' },
            { letter: 'A', name: 'Action list', description: 'To-do items for the covering team' },
            { letter: 'S', name: 'Situation awareness', description: 'What to watch for, contingency plans' },
            { letter: 'S', name: 'Synthesis by receiver', description: 'Receiver summarizes back key points' }
        ]
    },
    
    levelAdaptations: {
        'medical-student': {
            focus: 'Understanding I-PASS structure, recognizing critical information',
            initialPrompt: 'You\'re going to observe a handoff. What information is essential to communicate? What makes a handoff safe vs. dangerous?',
            keyObjectives: ['Understand I-PASS components', 'Recognize essential vs. extraneous information', 'Identify anticipatory guidance']
        },
        'resident': {
            focus: 'Giving a concise, complete handoff',
            initialPrompt: 'Sign out Mrs. Volkov using I-PASS. What\'s her illness severity? What does the night team need to know and do?',
            keyObjectives: ['Give organized I-PASS handoff', 'Prioritize key information', 'Provide clear contingencies', 'Verify receiver understanding']
        }
    },
    
    conceptDomains: {
        'Illness_Severity': ['stable', 'watcher', 'unstable', 'rationale'],
        'Summary': ['one_liner', 'key_history', 'hospital_course'],
        'Action_List': ['pending_tasks', 'time_sensitive_items', 'follow_up_needed'],
        'Situation_Awareness': ['if_then_contingencies', 'warning_signs', 'who_to_call'],
        'Synthesis': ['readback', 'clarifying_questions', 'shared_mental_model']
    },
    
    defined_responses: {
        'illness severity': '"Mrs. Volkov is a WATCHER. She\'s improving from her COPD exacerbation but had an episode of confusion today that\'s concerning."',
        'patient summary': '"She\'s a 72-year-old woman with COPD, former smoker, admitted 2 days ago with COPD exacerbation. She\'s been on steroids and azithromycin, and her breathing has improved significantly."',
        'what happened today': '"At 2 PM today, the nurse found her confused - didn\'t know where she was, couldn\'t name the president. It resolved after about 20 minutes. We got a CT head which was negative. Her daughter is very worried."',
        'current status': '"Right now she\'s on 2L nasal cannula, satting 93%. Last ABG at 4 PM showed pH 7.38, pCO2 48, pO2 68. She\'s oriented and conversant. No fever."',
        'action list': '"There are a few things to follow up on. Labs at 6 AM - particularly looking at her CO2. We\'re also waiting on urinalysis and culture to rule out UTI as a cause of the confusion."',
        'situation awareness': '"What to watch for: if she becomes confused again, check a repeat ABG - I\'m worried about CO2 narcosis from steroids and oxygen. If her CO2 rises above 55 or she becomes somnolent, consider BiPAP. If she desaturates below 88%, she may need higher oxygen but be careful not to over-oxygenate given her COPD."',
        'contingency plan': '"IF she becomes confused again, THEN check ABG, blood glucose, and reassess her mental status. IF CO2 >55, THEN consider BiPAP and call pulmonary fellow. IF family has questions about the confusion, THEN reassure them we\'re monitoring closely and CT was negative."',
        'who to contact': '"Pulmonary is following - Dr. Okafor is on call. Family contact is daughter Maya - her number is in the chart, and she wants to be called if anything changes."',
        'invite questions': '"What questions do you have?"',
        'receiver synthesis': 'Dr. Adeyemi synthesizes: "So Mrs. Volkov is a watcher - 72-year-old COPD, improving but had confusion today, CT negative. I need to follow morning labs especially CO2, watch for more confusion, and if she gets confused again, check ABG and think about CO2 narcosis and BiPAP. Call pulmonary if CO2 >55. Family is anxious."',
        'confirm correct': '"That\'s exactly right. Any other questions?"',
        'complete handoff': 'Dr. Adeyemi: "Got it. Thanks for the thorough signout."'
    },
    
    quickActions: ['What\'s her illness severity?', 'What\'s the patient summary?', 'What actions are needed?', 'What should they watch for?', 'What are the contingency plans?', 'Did they synthesize correctly?'],
    
    keyTeachingPoints: [
        'Lead with illness severity - it frames the entire conversation',
        'Keep the summary brief - one sentence for why they\'re here',
        'Action list should be specific and time-bound',
        'Situation awareness = anticipatory guidance (if X happens, do Y)',
        'Receiver synthesis is essential - ensures shared understanding',
        'Include who to contact for escalation',
        'Mention family concerns and communication preferences'
    ],
    
    evidenceBase: {
        guidelines: [{ name: 'I-PASS Study', source: 'Starmer et al., NEJM 2014', openAccess: false }],
        keyEvidence: ['I-PASS reduced medical errors by 23%', 'Structured handoffs reduce adverse events', 'Receiver synthesis catches miscommunication']
    }
}

};

// ============================================================================
// EXPORTS
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_COMMUNICATION_CASES;
}
if (typeof window !== 'undefined') {
    window.COACHDX_COMMUNICATION_CASES = COACHDX_COMMUNICATION_CASES;
}
console.log('[CoachDx-Communication] Loaded ' + Object.keys(COACHDX_COMMUNICATION_CASES).length + ' communication skills cases');
