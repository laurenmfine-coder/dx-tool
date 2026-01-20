/**
 * COACHDX PHYSICAL THERAPY CASES
 * Mentor-style coaching conversations for PT students/clinicians
 * 
 * Lauren Fine, MD, FAAAAI | January 2026
 * For PRG Grant - Multi-Institutional Validation Study
 */

const COACHDX_PT_CASES = {

// ============================================================================
// PT-COACH-001: LOW BACK PAIN - Red Flag Screening
// ============================================================================
'pt-lowback-redflags': {
    id: 'pt-lowback-redflags',
    title: 'Low Back Pain - Red Flag Screening',
    category: 'Musculoskeletal',
    profession: 'pt',
    patient: {
        name: 'Thomas Greene',
        age: 58,
        sex: 'Male',
        setting: 'Outpatient PT - Direct Access',
        acuity: 'Medium',
        chiefComplaint: 'Low back pain for 3 weeks'
    },
    description: 'A 58-year-old man presents via direct access with 3 weeks of progressive low back pain. He reports unintentional weight loss of 15 lbs over 2 months. History of prostate cancer 5 years ago, "in remission." Night pain present.',
    openingStatement: 'Mr. Greene came in without a physician referral for back pain. As you review his intake form, what catches your attention and how do you proceed?',
    
    conceptDomains: {
        'Red Flag Screening': ['cancer_history', 'weight_loss', 'night_pain', 'age_over_50', 'progressive_symptoms'],
        'History': ['onset', 'location', 'behavior', 'prior_treatment'],
        'Physical Exam': ['neuro_screening', 'ROM', 'special_tests'],
        'Clinical Decision': ['treat_vs_refer', 'urgency', 'communication']
    },
    
    defined_responses: {
        'red flags': 'Excellent catch. He has MULTIPLE red flags: age >50, history of cancer (prostate mets to spine are common), unexplained weight loss, night pain, and progressive symptoms. This constellation is very concerning for metastatic disease.',
        'can i treat': 'This is a critical decision point. With this red flag profile, you should NOT initiate PT treatment. He needs urgent medical evaluation - imaging and likely oncology referral. Direct access comes with responsibility to recognize when PT is not appropriate.',
        'what imaging': 'For suspected spinal metastases, MRI is the gold standard. Plain films may show lytic lesions but can miss early disease. Given his history and symptoms, he needs MRI of the entire spine and medical workup.',
        'how to refer': 'Contact his PCP or oncologist directly - dont just send him home with a note. Explain your concerns clearly. If he doesnt have a physician, urgent care or ED referral is appropriate given the red flag burden.',
        'neuro exam': 'Yes, perform a screening neuro exam, but dont let normal findings falsely reassure you. Cord compression can present with subtle findings initially. Check reflexes, sensation, strength, and gait.',
        'night pain significant': 'Night pain that wakes someone from sleep is a classic red flag. Mechanical back pain typically improves with rest. Pain that persists or worsens at night suggests tumor, infection, or inflammatory cause.'
    },
    
    quickActions: [
        'What red flags do you see?',
        'Can I treat him with PT?',
        'What does his cancer history mean?',
        'How should I refer him?'
    ],
    
    keyTeachingPoints: [
        'Direct access privilege requires excellent red flag screening skills',
        'Prostate, breast, lung, kidney, thyroid = cancers that commonly metastasize to spine',
        'Multiple red flags have multiplicative (not additive) significance',
        'Night pain + weight loss + cancer history = urgent referral, not PT',
        'Know your scope - recognizing when NOT to treat is a core competency'
    ],
    
    evidenceBase: {
        guidelines: ['APTA Low Back Pain CPG 2021', 'NICE Low Back Pain Guidelines 2020'],
        keyEvidence: [
            'Red flags present in <5% of LBP patients but identify serious pathology',
            'Prior cancer history increases spinal mets risk 15-fold',
            'Delay in diagnosis of spinal mets worsens outcomes'
        ],
        openAccessLinks: ['https://www.jospt.org/doi/10.2519/jospt.2021.0302']
    },
    
    relatedContent: [
        { type: 'reasondx', title: 'PT-001: Lumbar Radiculopathy', link: 'reasondx-pt-cases.html', reason: 'Compare mechanical vs red flag presentations' },
        { type: 'mechanism', title: 'Spinal Pathology', link: 'mechanismdx-spine.html', reason: 'Understand metastatic patterns' }
    ]
},

// ============================================================================
// PT-COACH-002: SHOULDER - Rotator Cuff vs Adhesive Capsulitis
// ============================================================================
'pt-shoulder-differential': {
    id: 'pt-shoulder-differential',
    title: 'Shoulder Pain - RTC vs Adhesive Capsulitis',
    category: 'Musculoskeletal',
    profession: 'pt',
    patient: {
        name: 'Margaret Sullivan',
        age: 54,
        sex: 'Female',
        setting: 'Outpatient PT',
        acuity: 'Low',
        chiefComplaint: 'Right shoulder pain and stiffness for 4 months'
    },
    description: 'A 54-year-old woman with type 2 diabetes presents with 4 months of progressive right shoulder pain and stiffness. No trauma. Difficulty reaching behind back and overhead. Sleep disturbed by pain when lying on that side.',
    openingStatement: 'Mrs. Sullivan has shoulder pain and stiffness. Her referring diagnosis says "rotator cuff tendinopathy" but something about her presentation makes you want to dig deeper. Walk me through your clinical reasoning.',
    
    conceptDomains: {
        'History': ['onset_pattern', 'diabetes_association', 'functional_limitations', 'sleep'],
        'Physical Exam': ['AROM_vs_PROM', 'capsular_pattern', 'strength_testing', 'special_tests'],
        'Differential': ['adhesive_capsulitis', 'RTC_pathology', 'OA', 'referred_pain'],
        'Treatment Planning': ['stage_appropriate_treatment', 'prognosis', 'timeline']
    },
    
    defined_responses: {
        'check rom': 'Great start. You find: Active flexion 95°, passive flexion 100°. Active ER at side 10°, passive ER 15°. Active IR (hand behind back) reaches L5, passive not much better. What pattern is this?',
        'capsular pattern': 'Exactly! The capsular pattern of the GH joint is ER > abduction > IR limitation. Her passive ROM is restricted in a capsular pattern - this is the hallmark of adhesive capsulitis, not RTC tendinopathy.',
        'rtc tests': 'Good thinking to check, but heres the key: with true frozen shoulder, RTC tests are often limited by stiffness rather than weakness or pain. If she cant get to the test position, you cant assess the cuff properly.',
        'diabetes connection': 'Critical point! Diabetes increases adhesive capsulitis risk 2-4x. The proposed mechanism involves glycosylation of collagen in the capsule. Her diabetes is a major diagnostic clue.',
        'stages': 'Adhesive capsulitis has 3 stages: (1) Freezing/painful - 2-9 months, (2) Frozen/stiff - 4-12 months, (3) Thawing - 12-24 months. Treatment approach differs by stage. Where is she?',
        'treatment approach': 'Shes likely in Stage 2 (frozen) based on timeline and presentation. Aggressive stretching in Stage 1 can worsen inflammation. In Stage 2, gentle ROM, joint mobs, and pain management. Prepare her for a 12-24 month recovery.',
        'refer back': 'Consider discussing with the physician if she wants corticosteroid injection (can help in Stage 1-2) or if progress stalls. Some patients benefit from hydrodilatation or manipulation under anesthesia.'
    },
    
    quickActions: [
        'What does her ROM show?',
        'How do I differentiate from RTC?',
        'Why does diabetes matter?',
        'What stage is she in?'
    ],
    
    keyTeachingPoints: [
        'Capsular pattern (ER>Abd>IR) distinguishes frozen shoulder from RTC pathology',
        'PROM restriction = joint problem; AROM restriction with full PROM = muscle/tendon problem',
        'Diabetes is a major risk factor - always screen for adhesive capsulitis in diabetics with shoulder pain',
        'Treatment must match the stage - aggressive stretching early can worsen outcomes',
        'Set realistic expectations: full recovery often takes 18-24 months'
    ],
    
    evidenceBase: {
        guidelines: ['APTA Shoulder Pain CPG', 'AAOS Shoulder Guidelines'],
        keyEvidence: [
            'Diabetes increases adhesive capsulitis risk 2-4 fold',
            'Capsular pattern restriction is 90% specific for adhesive capsulitis',
            'Supervised PT + home exercise superior to home exercise alone'
        ]
    },
    
    relatedContent: [
        { type: 'mechanism', title: 'Shoulder Biomechanics', link: 'mechanismdx-shoulder.html', reason: 'Understand capsular anatomy' }
    ]
},

// ============================================================================
// PT-COACH-003: VESTIBULAR - Central vs Peripheral
// ============================================================================
'pt-vestibular-differential': {
    id: 'pt-vestibular-differential',
    title: 'Dizziness - Central vs Peripheral Vestibular',
    category: 'Vestibular',
    profession: 'pt',
    patient: {
        name: 'Robert Kim',
        age: 67,
        sex: 'Male',
        setting: 'Outpatient PT',
        acuity: 'Medium',
        chiefComplaint: 'Dizziness and imbalance for 1 week'
    },
    description: 'A 67-year-old man with HTN and diabetes is referred for vestibular rehab after 1 week of dizziness. He describes constant imbalance, mild vertigo, and feeling "off." He also mentions new difficulty swallowing and his voice sounds hoarse. No hearing changes.',
    openingStatement: 'Mr. Kim is referred for vestibular rehab, but as you listen to his history, you notice some things that dont fit a typical peripheral vestibular pattern. What concerns you?',
    
    conceptDomains: {
        'Red Flags': ['central_signs', 'brainstem_symptoms', 'stroke_risk_factors'],
        'History': ['onset', 'symptom_pattern', 'associated_symptoms'],
        'Physical Exam': ['HINTS_exam', 'cerebellar_signs', 'cranial_nerves'],
        'Clinical Decision': ['peripheral_vs_central', 'urgency', 'referral']
    },
    
    defined_responses: {
        'what concerns': 'Great clinical instinct! Several things dont fit peripheral vestibular: (1) dysphagia and hoarseness suggest brainstem/CN involvement, (2) constant symptoms rather than episodic, (3) multiple vascular risk factors. This could be a posterior circulation stroke.',
        'hints exam': 'The HINTS exam (Head Impulse, Nystagmus, Test of Skew) can differentiate central from peripheral causes in acute vestibular syndrome. But given his brainstem symptoms (dysphagia, hoarseness), you already have central signs - dont delay referral to complete HINTS.',
        'do hints anyway': 'If you did HINTS: Central pattern would show (1) NEGATIVE head impulse test (no corrective saccade), (2) direction-changing nystagmus, (3) positive skew deviation. Peripheral shows POSITIVE HIT, unidirectional nystagmus, no skew.',
        'can i treat': 'No - this patient needs URGENT medical evaluation. Posterior circulation strokes can present with vestibular symptoms and are frequently missed. With brainstem signs (CN IX/X involvement causing dysphagia/hoarseness), he needs emergent imaging.',
        'how urgent': 'Very urgent. Posterior circulation strokes can progress rapidly. Dont send him home to call his doctor - he needs same-day evaluation. Call the referring physician or send to ED.',
        'risk factors': 'He has HTN and diabetes - major stroke risk factors. Age 67 also increases risk. The combination of vestibular symptoms + brainstem signs + vascular risk factors = high suspicion for vertebrobasilar stroke or TIA.',
        'wallenberg': 'Youre thinking of Wallenberg syndrome (lateral medullary stroke)! Classic presentation includes vertigo, dysphagia, hoarseness, ipsilateral facial numbness, contralateral body numbness. This is a clinical emergency.'
    },
    
    quickActions: [
        'What symptoms concern you?',
        'Should I do the HINTS exam?',
        'Can I treat this patient?',
        'How urgent is referral?'
    ],
    
    keyTeachingPoints: [
        'Dizziness + brainstem symptoms (dysphagia, diplopia, dysarthria, numbness) = central until proven otherwise',
        'HINTS exam is useful but dont delay referral when brainstem signs are present',
        'Posterior circulation strokes are frequently missed - have high index of suspicion',
        'Vascular risk factors + acute vestibular syndrome = consider stroke',
        'Know when vestibular rehab is NOT appropriate - red flag recognition saves lives'
    ],
    
    evidenceBase: {
        guidelines: ['APTA Vestibular Rehabilitation CPG', 'AHA Stroke Guidelines'],
        keyEvidence: [
            'HINTS exam more sensitive than MRI in first 24 hours for stroke',
            'Posterior circulation strokes missed in up to 35% of ED visits',
            'Dysphagia/dysarthria with vertigo increases stroke probability 10-fold'
        ]
    },
    
    relatedContent: [
        { type: 'reasondx', title: 'PT-008: BPPV', link: 'reasondx-pt-cases.html', reason: 'Compare peripheral vestibular presentation' }
    ]
},

// ============================================================================
// PT-COACH-004: POST-OP TKA - Stiff Knee Management
// ============================================================================
'pt-tka-stiffness': {
    id: 'pt-tka-stiffness',
    title: 'Post-TKA - Stiff Knee Decision Making',
    category: 'Post-Surgical',
    profession: 'pt',
    patient: {
        name: 'Edem Koffi',
        age: 71,
        sex: 'Male',
        setting: 'Outpatient PT',
        acuity: 'Medium',
        chiefComplaint: 'Knee stiffness 6 weeks after total knee replacement'
    },
    description: 'A 71-year-old man is 6 weeks post right TKA. Despite attending PT 3x/week, his flexion is only 75° (goal >110°). Extension is -8° (goal 0°). He reports significant pain with stretching (7/10) and the knee is warm and moderately swollen.',
    openingStatement: 'Mr. Foster is struggling after his knee replacement. Hes frustrated, and honestly, so is his surgeon who called asking why ROM isnt progressing. How do you approach this situation?',
    
    conceptDomains: {
        'Assessment': ['ROM_expectations', 'pain_swelling', 'infection_screening', 'adherence'],
        'Differential': ['arthrofibrosis', 'infection', 'component_issues', 'CRPS'],
        'Treatment Modification': ['intensity', 'modalities', 'communication'],
        'Surgeon Communication': ['when_to_call', 'what_to_report', 'MUA_discussion']
    },
    
    defined_responses: {
        'normal expectations': 'By 6 weeks post-TKA, we expect 90-100° flexion and 0° extension. Hes significantly behind at 75° flexion and -8° extension. This is concerning for developing arthrofibrosis if we dont intervene.',
        'infection signs': 'Always consider infection with persistent warmth, swelling, and pain. Ask about fevers, wound drainage, increasing redness. Check his incision. Labs (ESR, CRP) and aspiration may be needed. Dont assume its just stiffness.',
        'too aggressive': 'This is a key question. Pain at 7/10 during stretching is counterproductive - it creates guarding, inflammation, and potentially worsens fibrosis. We need to find the therapeutic window: enough stress to gain ROM, not so much that we cause harm.',
        'treatment adjust': 'Consider: (1) pre-treatment modalities (heat, TENS), (2) lower intensity sustained stretching vs aggressive PROM, (3) aquatic therapy if available, (4) pain medication timing before PT. Quality of stretch matters more than quantity.',
        'call surgeon': 'Yes, communicate with the surgeon. Report: current ROM, trajectory (improving/plateau/declining), pain levels, swelling, any infection concerns. Ask about MUA timing - typically considered at 6-12 weeks if progress stalls.',
        'mua': 'Manipulation under anesthesia (MUA) breaks up adhesions while patient is relaxed. Best outcomes if done before 12 weeks. After MUA, intensive PT is critical - often daily for first 1-2 weeks to maintain gains.',
        'patient factors': 'Ask about home exercise compliance, pain medication use, sleep, psychological state. Depression and catastrophizing predict poor TKA outcomes. Some patients need more support than just PT.'
    },
    
    quickActions: [
        'What ROM should he have by now?',
        'Could this be infected?',
        'Am I being too aggressive?',
        'Should I call the surgeon?'
    ],
    
    keyTeachingPoints: [
        'Week 2 ROM strongly predicts ultimate outcome - early intervention is critical',
        'Pain > 5/10 during stretching is often counterproductive',
        'Persistent warmth and swelling may indicate infection - maintain vigilance',
        'Surgeon communication is collaborative, not failure - theyre your partner',
        'MUA window is typically 6-12 weeks - dont wait too long to escalate',
        'Patient factors (adherence, psychology) significantly impact outcomes'
    ],
    
    evidenceBase: {
        guidelines: ['APTA Post-TKA Guidelines', 'AAOS TKA Rehabilitation'],
        keyEvidence: [
            'ROM at 2 weeks predicts ROM at 1 year',
            'MUA most effective when performed before 12 weeks',
            'Aggressive stretching can worsen arthrofibrosis'
        ]
    },
    
    relatedContent: [
        { type: 'reasondx', title: 'PT-007: TKA Rehabilitation', link: 'reasondx-pt-cases.html', reason: 'Review standard TKA rehab protocol' }
    ]
},

// ============================================================================
// PT-COACH-005: PEDIATRIC - Developmental Assessment
// ============================================================================
'pt-peds-development': {
    id: 'pt-peds-development',
    title: 'Pediatric Motor Delay - When to Worry',
    category: 'Pediatrics',
    profession: 'pt',
    patient: {
        name: 'Baby Sophia Martinez',
        age: '9 months',
        sex: 'Female',
        setting: 'Outpatient Pediatric PT',
        acuity: 'Medium',
        chiefComplaint: 'Not crawling yet, parents concerned'
    },
    description: 'A 9-month-old girl is referred because she is not yet crawling. Parents are anxious first-time parents who have been comparing her to other babies. She was born full-term with no complications. She sits independently but prefers to stay in one spot.',
    openingStatement: 'Sophia is 9 months and not crawling. Her parents are worried. Before you reassure or refer, what do you need to know and assess?',
    
    conceptDomains: {
        'Developmental Milestones': ['gross_motor_sequence', 'normal_variation', 'red_flags'],
        'Assessment': ['motor_quality', 'tone', 'reflexes', 'asymmetry'],
        'History': ['birth_history', 'medical_history', 'family_concerns'],
        'Clinical Decision': ['reassurance_vs_referral', 'early_intervention']
    },
    
    defined_responses: {
        'normal milestones': 'Crawling typically emerges 7-10 months, but theres wide variation. Some babies skip crawling entirely and go to cruising/walking. The KEY is not whether she crawls, but whether shes progressing and motor quality is normal.',
        'what to assess': 'Look at: (1) What CAN she do? Sits independently = good. (2) Motor quality - are movements smooth and symmetric? (3) Tone - hypotonia is a red flag. (4) Does she bear weight on legs? (5) Any asymmetry suggesting hemiplegia?',
        'your findings': 'On exam: She sits well with good trunk control. Reaches and grasps symmetrically. Normal tone. When placed in quadruped, she weight shifts but doesnt move forward. She pulls to stand at furniture with support. Reflexes normal.',
        'reassure or worry': 'Based on these findings, this is likely normal variation. She has all the building blocks - sitting, reaching, pulling to stand. She may be a "bum scooter" or skip crawling. The quality of movement and symmetry are reassuring.',
        'red flags': 'Worry if: (1) Hypotonia - floppy baby, (2) Asymmetry - always using one side, (3) Persistent primitive reflexes, (4) Regression - losing skills, (5) No progress over time, (6) Associated findings (seizures, dysmorphism).',
        'what to tell parents': 'Validate their concerns - good parents pay attention. Explain normal variation in crawling. Give them activities to encourage floor mobility (tummy time, toys placed out of reach). Schedule follow-up in 4-6 weeks to ensure progression.',
        'early intervention': 'If truly delayed, Early Intervention (EI) services are available 0-3 years in all states. Low threshold to refer - EI evaluation is free and services help even mild delays. "Wait and see" can miss the critical window.'
    },
    
    quickActions: [
        'What are normal milestones?',
        'What should I assess?',
        'Should I reassure or worry?',
        'When do I refer to Early Intervention?'
    ],
    
    keyTeachingPoints: [
        'Crawling is NOT a required milestone - motor quality matters more than specific skills',
        'Asymmetry is more concerning than global delay',
        'Hypotonia is a red flag requiring further workup',
        'Early Intervention has no downside - low threshold to refer',
        'Parent concerns should be taken seriously - they know their child'
    ],
    
    evidenceBase: {
        guidelines: ['APTA Pediatric PT Guidelines', 'CDC Developmental Milestones', 'AAP Developmental Surveillance'],
        keyEvidence: [
            'Motor milestone ranges are wide - crawling 6-10 months',
            '10-15% of typically developing children skip crawling',
            'Early intervention before age 3 has best outcomes'
        ]
    },
    
    relatedContent: [
        { type: 'reasondx', title: 'PT-009: Pediatric Torticollis', link: 'reasondx-pt-cases.html', reason: 'Compare abnormal infant presentation' }
    ]
},

// ============================================================================
// PT-COACH-006: NEUROLOGICAL - CVA Gait Training
// ============================================================================
'pt-neuro-cva-gait': {
    id: 'pt-neuro-cva-gait',
    title: 'Stroke Rehabilitation - Gait Training Progression',
    category: 'Neurological',
    profession: 'pt',
    patient: {
        name: 'Harold Washington',
        age: 64,
        sex: 'Male',
        setting: 'Inpatient Rehab',
        acuity: 'Medium',
        chiefComplaint: 'Left hemiparesis after right MCA stroke, 2 weeks ago'
    },
    description: 'A 64-year-old man is 2 weeks post right MCA stroke with left hemiparesis. He has emerging motor recovery (trace hip flexion, 2/5 knee extension, 1/5 ankle dorsiflexion). He is highly motivated but becomes frustrated when he cant walk normally.',
    openingStatement: 'Mr. Washington wants to walk. He has some motor return but significant weakness. His wife asks "when will he walk again?" How do you approach gait training and set expectations?',
    
    conceptDomains: {
        'Motor Recovery': ['brunnstrom_stages', 'motor_return_patterns', 'prognostic_factors'],
        'Gait Training': ['body_weight_support', 'assistive_devices', 'task_specific_training'],
        'Compensation vs Recovery': ['neuroplasticity', 'learned_nonuse', 'quality_vs_function'],
        'Patient/Family Education': ['realistic_expectations', 'timeline', 'home_program']
    },
    
    defined_responses: {
        'recovery prognosis': 'Prognostic factors: (1) Initial severity - he has trace movement = positive, (2) Timing - motor return by 2 weeks is favorable, (3) MCA stroke location affects arm more than leg typically, (4) Motivation is strong. Most recovery occurs in first 3 months.',
        'when will he walk': 'Honest answer: I dont know exactly, but I can tell you what predicts good outcomes. Early motor return (which he has), intensive therapy, and his motivation are all positive signs. Many stroke patients achieve household or community ambulation.',
        'gait training approach': 'Start with: (1) Pre-gait activities - weight shifting, standing balance, (2) Supported gait - parallel bars or body weight support treadmill, (3) Progress assistive device as tolerated (platform walker → quad cane → single point cane), (4) Task-specific practice - high repetition.',
        'body weight support': 'Body weight supported treadmill training allows high-repetition stepping practice before he can support his full weight. Evidence supports early intensive gait training. Start at 30-40% BWS and progress.',
        'afo question': 'He likely needs an AFO given 1/5 dorsiflexion. Start with a prefabricated AFO, but watch for motor return. We dont want to create learned nonuse, but we also need foot clearance for safe gait. Reassess as motor return progresses.',
        'compensation concern': 'Great question! We want to encourage normal movement patterns and neuroplasticity, not just compensatory strategies. Focus on quality AND quantity. However, some compensation may be necessary for function - its a balance.',
        'frustration': 'Acknowledge his frustration - this is a massive life change. Set short-term achievable goals. Celebrate small wins. Consider involving psychology/counseling. Depression is common post-stroke and affects recovery.'
    },
    
    quickActions: [
        'What is his prognosis for walking?',
        'How do I start gait training?',
        'Does he need a brace?',
        'Hes getting frustrated - what do I do?'
    ],
    
    keyTeachingPoints: [
        'Motor return in first 2 weeks is positive prognostic sign',
        'Most stroke recovery occurs in first 3 months - intensity matters',
        'Balance recovery vs compensation - aim for quality movement when possible',
        'Body weight supported training enables early high-repetition practice',
        'AFO decision requires ongoing reassessment as motor function evolves',
        'Address psychological aspects - depression impacts recovery'
    ],
    
    evidenceBase: {
        guidelines: ['APTA Stroke Rehabilitation CPG', 'AHA/ASA Stroke Rehabilitation Guidelines'],
        keyEvidence: [
            'Higher intensity therapy improves outcomes (LEAPS trial)',
            'Early motor return predicts better functional outcomes',
            'Task-specific training superior to impairment-based approaches'
        ],
        openAccessLinks: ['https://www.ahajournals.org/doi/10.1161/STR.0000000000000098']
    },
    
    relatedContent: [
        { type: 'mechanism', title: 'Stroke Pathophysiology', link: 'mechanismdx-stroke.html', reason: 'Understand neuroplasticity' }
    ]
},

// ============================================================================
// PT-COACH-007: CARDIAC - Exercise Response Monitoring
// ============================================================================
'pt-cardiac-response': {
    id: 'pt-cardiac-response',
    title: 'Cardiac Rehab - Abnormal Exercise Response',
    category: 'Cardiopulmonary',
    profession: 'pt',
    patient: {
        name: 'Frank DeLuca',
        age: 59,
        sex: 'Male',
        setting: 'Outpatient Cardiac Rehab',
        acuity: 'Medium',
        chiefComplaint: 'Phase II cardiac rehab, 4 weeks post-CABG'
    },
    description: 'A 59-year-old man is in Phase II cardiac rehab after 3-vessel CABG. Today during his treadmill session, he reports mild chest "tightness" and you notice his BP dropped from 138/82 at rest to 118/78 at moderate intensity. He wants to continue exercising.',
    openingStatement: 'Mr. DeLuca has been doing well in cardiac rehab, but todays session is different. He mentions chest tightness and his BP is doing something unexpected. Walk me through your thinking.',
    
    conceptDomains: {
        'Exercise Physiology': ['normal_BP_response', 'abnormal_responses', 'rate_pressure_product'],
        'Warning Signs': ['anginal_symptoms', 'hypotensive_response', 'arrhythmia'],
        'Clinical Decision': ['stop_vs_continue', 'emergency_response', 'physician_notification'],
        'Documentation': ['incident_reporting', 'parameter_modification']
    },
    
    defined_responses: {
        'bp response': 'This is an ABNORMAL response. Normal: SBP rises with exercise intensity. His SBP DROPPED 20 points at moderate intensity - this is an exertional hypotensive response and indicates the heart isnt keeping up with demand.',
        'stop exercise': 'Yes - STOP exercise immediately. Exertional hypotension + chest symptoms is a medical concern. Have him sit or lie down. Continue monitoring vitals. This could indicate significant ischemia, graft dysfunction, or pump failure.',
        'what could cause': 'Exertional hypotension causes: (1) Ischemia (graft stenosis, new disease), (2) LV dysfunction, (3) Arrhythmia, (4) Medications (too much beta-blocker), (5) Dehydration. Given hes post-CABG with chest symptoms, ischemia is top concern.',
        'chest tightness': 'Any chest symptom during exercise in a cardiac patient is angina until proven otherwise. "Tightness" is a classic anginal descriptor. Dont dismiss because he says "mild" - he may be minimizing.',
        'what to do': 'Protocol: (1) Stop exercise, (2) Sit/supine positioning, (3) Vitals q2-3 min, (4) 12-lead ECG if available, (5) Notify supervising physician IMMEDIATELY, (6) Have emergency equipment ready, (7) Document everything.',
        'he wants continue': 'No. Part of our job is protecting patients from themselves. Explain clearly: these symptoms require medical evaluation before continuing exercise. This isnt being overly cautious - this is potentially life-saving.',
        'document': 'Document: (1) Resting vitals, (2) Symptoms verbatim, (3) BP at each stage, (4) Time of symptom onset, (5) Actions taken, (6) Physician notification and response, (7) Patient response to rest. This may be reviewed if theres an adverse event.'
    },
    
    quickActions: [
        'Is this BP response normal?',
        'Should I stop exercise?',
        'What could cause this?',
        'How do I document this?'
    ],
    
    keyTeachingPoints: [
        'SBP should RISE with exercise - drop of >10 mmHg is abnormal',
        'Exertional hypotension + symptoms = stop exercise and evaluate',
        'Any chest symptom in a cardiac patient is angina until proven otherwise',
        'Know your emergency protocols - cardiac rehab requires vigilance',
        'Detailed documentation protects the patient and you',
        'Dont let patient motivation override clinical judgment'
    ],
    
    evidenceBase: {
        guidelines: ['AACVPR Cardiac Rehabilitation Guidelines 2021', 'AHA Exercise Standards'],
        keyEvidence: [
            'Exertional hypotension associated with 3-vessel disease and LV dysfunction',
            'Symptom-limited exercise testing post-CABG identifies residual ischemia',
            'Supervised cardiac rehab reduces mortality 20-30%'
        ]
    },
    
    relatedContent: [
        { type: 'reasondx', title: 'PT-010: Cardiac Rehabilitation', link: 'reasondx-pt-cases.html', reason: 'Review standard cardiac rehab protocols' },
        { type: 'mechanism', title: 'ACS Pathophysiology', link: 'mechanismdx-acs.html', reason: 'Understand ischemic mechanisms' }
    ]
}

};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_PT_CASES;
}
if (typeof window !== 'undefined') {
    window.COACHDX_PT_CASES = COACHDX_PT_CASES;
}

console.log('[CoachDx-PT] Loaded ' + Object.keys(COACHDX_PT_CASES).length + ' PT coaching cases');
