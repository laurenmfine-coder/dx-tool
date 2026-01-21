/**
 * COACHDX ORAL AND MAXILLOFACIAL SURGERY (OMFS) CASES
 * Mentor-style coaching conversations for OMFS residents
 * 
 * Lauren Fine, MD, FAAAAI | January 2026
 */

const COACHDX_OMFS_CASES = {

// ============================================================================
// OMFS-COACH-001: Facial Trauma - Systematic Assessment
// ============================================================================
'omfs-trauma-systematic': {
    id: 'omfs-trauma-systematic',
    title: 'Facial Trauma - Pan-Facial Assessment',
    category: 'Facial Trauma',
    profession: 'omfs',
    patient: {
        name: 'Brandon Williams',
        age: 23,
        sex: 'Male',
        setting: 'Trauma Bay',
        acuity: 'High',
        chiefComplaint: 'MVC - unrestrained driver, facial trauma'
    },
    description: 'A 23-year-old unrestrained driver presents after high-speed MVC. GCS 14 (E4V4M6). CT shows multiple facial fractures. He is hemodynamically stable after initial resuscitation. The trauma team has cleared his C-spine and he has no other major injuries.',
    openingStatement: 'Brandon has pan-facial trauma. The ED is asking when you want to operate. Before you book the OR, walk me through how you systematically assess and plan for complex facial reconstruction.',
    
    conceptDomains: {
        'Primary Survey': ['airway_assessment', 'hemorrhage_control', 'associated_injuries'],
        'Systematic Facial Exam': ['upper_third', 'middle_third', 'lower_third', 'occlusion'],
        'Imaging Interpretation': ['ct_findings', 'fracture_pattern', 'surgical_planning'],
        'Operative Planning': ['timing', 'sequencing', 'approaches']
    },
    
    defined_responses: {
        'primary concerns': 'Before facial fractures: (1) Airway - does he need intubation? Facial fractures can cause airway compromise. (2) Hemorrhage - epistaxis, oropharyngeal bleeding? (3) Associated injuries - cleared C-spine is good. Globe injury? Brain injury? These affect timing.',
        'airway decision': 'With pan-facial trauma, consider early intubation even if airway currently stable. Swelling will worsen over 24-48 hours. Once the airway is secured, we have more flexibility with timing. In his case, GCS 14 suggests we should intubate for protection.',
        'systematic exam': 'Top to bottom, outside to inside: (1) Upper third - frontal bone, supraorbital rims, (2) Middle third - NOE, ZMC, orbital floors/walls, maxilla, (3) Lower third - mandible. Check occlusion - this is your guide to anatomic reduction.',
        'ct findings': 'His CT shows: (1) Right ZMC fracture (tetrapod - all 4 articulations), (2) Bilateral orbital floor fractures, (3) Le Fort II pattern maxilla fracture, (4) Right parasymphysis mandible fracture, (5) Left angle mandible fracture. Classic pan-facial pattern.',
        'what is pan-facial': 'Pan-facial = fractures involving upper, middle, AND lower thirds. The challenge: you have no stable reference point. Everything has moved. You need to establish stable platforms to build from.',
        'sequencing': 'Classic teaching: "Bottom-up and outside-in." (1) Mandible first - establishes lower facial width, (2) Then maxilla to mandible (MMF establishes occlusion), (3) Then ZMC and orbits, (4) Finally NOE and frontal. Some surgeons prefer top-down if frontal/cranial base involved.',
        'timing': 'Not tonight. Pan-facial reconstruction takes 6-8+ hours. Wait for: (1) Swelling to stabilize (3-7 days ideal), (2) Complete workup, (3) OR time and team availability, (4) Patient optimization. Exception: active hemorrhage, threatened airway, or open globe need immediate surgery.',
        'approach planning': 'Hell need: coronal incision (access to upper/middle face), lower eyelid or transconjunctival (orbits), intraoral (mandible, maxilla), possibly external mandible incisions. Plan all incisions before starting - coordinated approach.'
    },
    
    quickActions: [
        'What are the immediate concerns?',
        'How do I examine systematically?',
        'What sequence do I repair in?',
        'When should I operate?'
    ],
    
    keyTeachingPoints: [
        'Airway first - pan-facial trauma can compromise airway as swelling progresses',
        'Systematic examination: upper, middle, lower third; outside to inside',
        'Occlusion is your guide to reduction - establish mandibular width and occlusion early',
        'Classic sequencing: bottom-up, outside-in (mandible → maxilla → ZMC → orbits → NOE)',
        'Timing: 3-7 days allows swelling to stabilize unless urgent indication',
        'Pan-facial cases require meticulous pre-operative planning'
    ],
    
    evidenceBase: {
        guidelines: ['AO CMF Trauma Guidelines', 'AOCMF Pan-facial Fracture Management'],
        keyEvidence: [
            'Delayed repair (5-10 days) has equivalent outcomes to immediate in stable patients',
            'Mandible-first sequencing provides reliable facial width reference',
            'Occlusion-based planning improves functional outcomes'
        ]
    },
    
    relatedContent: [
        { type: 'reasondx', title: 'OMFS-001: Mandible Fracture', link: 'reasondx-omfs-cases.html', reason: 'Component of pan-facial trauma' }
    ]
},

// ============================================================================
// OMFS-COACH-002: Odontogenic Infection - Airway Decision
// ============================================================================
'omfs-airway-emergency': {
    id: 'omfs-airway-emergency',
    title: 'Odontogenic Infection - Airway Emergency',
    category: 'Infections',
    profession: 'omfs',
    patient: {
        name: 'Patricia Moore',
        age: 52,
        sex: 'Female',
        setting: 'Emergency Department',
        acuity: 'Critical',
        chiefComplaint: 'Severe neck swelling, difficulty breathing'
    },
    description: 'A 52-year-old diabetic woman presents with 3 days of progressive neck swelling from a tooth infection. She is sitting forward, drooling, with stridor. SpO2 91% on room air. The ED attending asks if you want to take her to OR for drainage or if anesthesia should intubate her first in the ED.',
    openingStatement: 'Mrs. Moore has a compromised airway from odontogenic infection. The ED and anesthesia are looking to you. What is your airway strategy?',
    
    conceptDomains: {
        'Airway Assessment': ['signs_of_compromise', 'prediction_difficulty', 'progression_risk'],
        'Airway Options': ['awake_fiberoptic', 'surgical_airway', 'sedated_intubation'],
        'Decision Making': ['location', 'timing', 'backup_plans'],
        'Team Communication': ['anesthesia_coordination', 'or_preparation']
    },
    
    defined_responses: {
        'how bad is airway': 'Critical. Stridor, drooling, tripod positioning, SpO2 91% = impending respiratory failure. This airway will NOT tolerate sedation without a plan. She could obstruct completely with any loss of muscle tone.',
        'intubate in ed': 'Risky. If you sedate her in the ED and cannot intubate, you have limited options. The safer approach: take her to OR where you have full surgical airway capability, or do awake tracheostomy before any sedation.',
        'awake fiberoptic': 'This is the gold standard approach for predicted difficult airway with airway compromise. Patient breathes spontaneously, topical anesthesia to airway, fiberoptic scope passed through nose or mouth. IF IT FAILS - you still have a spontaneously breathing patient.',
        'surgical airway': 'Tracheostomy may be the safest option here. With severe Ludwig\'s angina, even fiberoptic can fail - you cant see through pus and edema. Awake tracheostomy under local anesthesia is a legitimate first choice, not just a backup.',
        'or vs ed': 'OR. Reasons: (1) Full surgical airway setup, (2) Better lighting and positioning, (3) Entire team present, (4) Can proceed directly to drainage after airway secured. Call ahead so OR is ready.',
        'what not to do': 'Do NOT: (1) Paralyze without a plan - shell obstruct, (2) Attempt blind intubation - can cause complete obstruction, (3) Delay - her airway will only get worse, (4) Assume you can bag-mask ventilate - you probably cant.',
        'team communication': 'Clear communication: "This is a critical airway. I need anesthesia, OR team, and surgical tracheostomy tray. Our plan is awake fiberoptic with immediate surgical backup. If fiberoptic fails after one attempt, we go directly to tracheostomy. No paralytics until airway is secured."',
        'after airway': 'Once airway secured: (1) CT neck if not already done (defines spaces), (2) OR for I&D of all involved spaces, (3) Source control (extract tooth), (4) IV antibiotics, (5) ICU admission. The airway is step one, not the end.'
    },
    
    quickActions: [
        'How compromised is she?',
        'Should I intubate in ED or OR?',
        'What is safest approach?',
        'When do I do surgical airway?'
    ],
    
    keyTeachingPoints: [
        'Stridor + drooling + tripod positioning = critical airway - do not delay',
        'Sedation/paralysis can convert partial obstruction to complete obstruction',
        'Awake fiberoptic with surgical backup is standard approach',
        'Awake tracheostomy is a reasonable FIRST choice in severe cases',
        'OR provides safer environment than ED for critical airway management',
        'Clear team communication and planning prevents chaos'
    ],
    
    evidenceBase: {
        guidelines: ['Difficult Airway Society Guidelines', 'ACOMS Airway Management'],
        keyEvidence: [
            'Awake intubation has highest success rate in predicted difficult airway',
            'Surgical airway should be part of every difficult airway plan',
            'Ludwig\'s angina mortality significantly reduced with early airway management'
        ]
    },
    
    relatedContent: [
        { type: 'reasondx', title: 'OMFS-002: Ludwig\'s Angina', link: 'reasondx-omfs-cases.html', reason: 'Full case details' }
    ]
},

// ============================================================================
// OMFS-COACH-003: Extraction Complication - Nerve Injury
// ============================================================================
'omfs-nerve-injury': {
    id: 'omfs-nerve-injury',
    title: 'IAN Injury - What To Tell The Patient',
    category: 'Complications',
    profession: 'omfs',
    patient: {
        name: 'Nicole Chang',
        age: 26,
        sex: 'Female',
        setting: 'OMFS Clinic - POD 1',
        acuity: 'Low',
        chiefComplaint: 'Numb lip after wisdom tooth extraction'
    },
    description: 'A 26-year-old woman returns the day after you extracted her impacted right mandibular third molar. She has complete numbness of her right lower lip and chin. You noted the root tips were curved around the IAN canal and had a difficult extraction. She is upset and asks "Will this be permanent?"',
    openingStatement: 'Nicole has an IAN injury after a difficult extraction. Shes scared and wants answers. How do you counsel her and what is your management plan?',
    
    conceptDomains: {
        'Patient Communication': ['honesty', 'prognosis', 'expectations'],
        'Documentation': ['preop_consent', 'intraop_findings', 'postop_exam'],
        'Management': ['monitoring_schedule', 'medications', 'referral_criteria'],
        'Prevention Discussion': ['what_could_prevent', 'alternative_procedures']
    },
    
    defined_responses: {
        'what to say': 'Be honest and compassionate: "The numbness youre feeling is from the nerve that runs close to where your tooth was. This happens sometimes, especially with teeth positioned like yours. Im sorry youre dealing with this. Let me tell you what to expect..."',
        'will it recover': '"Most people who have this recover. About 90% get meaningful improvement, and many recover completely. But I have to be honest - I cant guarantee when or if youll have 100% normal sensation. Well follow you closely and there are things we can do if it doesnt improve."',
        'timeline': '"Recovery usually takes weeks to months. The nerve heals slowly - about 1mm per day. Some people notice improvement starting in weeks, others take 6-12 months. We wont know for sure how much youll recover until we see how it progresses."',
        'what to do now': 'Practical advice: "Right now, be careful eating - you can bite your lip without feeling it. Be careful with hot drinks. When you brush, go gently on that side. These are temporary precautions."',
        'documentation': 'Critical: Document your pre-op consent discussion (did you warn about nerve injury?), the imaging findings (what did you see?), intraoperative events (was the nerve visualized?), and todays examination findings. This protects both of you.',
        'monitoring plan': '"Ill see you in 2 weeks, then monthly for the first 3 months. At each visit, Ill test your sensation to track improvement. If were not seeing any progress by 3 months, well discuss whether to see a nerve specialist."',
        'microsurgery referral': 'If no improvement by 3 months, refer for evaluation. Microsurgical repair works best in the 3-6 month window. After 12-18 months, outcomes are poor. Dont wait too long to refer, but dont refer too early either.',
        'her anger': 'Validate her feelings: "I understand youre upset. This is frustrating and scary. I wish I could make it go away. What I can promise is that Ill follow you closely, give you honest information, and do everything possible to help you recover."',
        'prevent next time': 'For future high-risk cases: (1) Always get CBCT when panorex suggests proximity, (2) Discuss coronectomy as alternative, (3) Extensive informed consent with documentation, (4) Consider referral if beyond your comfort level.'
    },
    
    quickActions: [
        'What do I tell her?',
        'Will she recover?',
        'How do I follow her?',
        'She seems angry - how do I handle this?'
    ],
    
    keyTeachingPoints: [
        'Honest, compassionate communication is essential for nerve injuries',
        'Most IAN injuries recover - give realistic hope',
        'Documentation of consent and intraoperative findings protects everyone',
        'Serial sensory exams track recovery and guide decisions',
        'Microsurgery referral at 3 months if no improvement - dont wait too long',
        'Prevention: CBCT for high-risk teeth, consider coronectomy'
    ],
    
    evidenceBase: {
        guidelines: ['AAOMS Practice Parameters', 'IAN Injury Management Guidelines'],
        keyEvidence: [
            '>90% of IAN injuries after third molar extraction show improvement',
            'Microsurgical repair success rates 70-90% if performed within 6 months',
            'Coronectomy reduces IAN injury risk by 90% for high-risk teeth'
        ]
    },
    
    relatedContent: [
        { type: 'reasondx', title: 'OMFS-004: Third Molar Complications', link: 'reasondx-omfs-cases.html', reason: 'Detailed case review' }
    ]
},

// ============================================================================
// OMFS-COACH-004: Orthognathic - Patient Selection
// ============================================================================
'omfs-orthognathic-planning': {
    id: 'omfs-orthognathic-planning',
    title: 'Orthognathic Surgery - Who Is A Candidate?',
    category: 'Orthognathic Surgery',
    profession: 'omfs',
    patient: {
        name: 'Kevin Barnes',
        age: 16,
        sex: 'Male',
        setting: 'OMFS Clinic - Consultation',
        acuity: 'Low',
        chiefComplaint: 'Want jaw surgery to fix my bite'
    },
    description: 'A 16-year-old boy and his parents present asking about jaw surgery. He has a Class III skeletal pattern and is self-conscious about his appearance. His orthodontist has referred him for surgical evaluation. Lateral ceph shows SNB 86°, ANB -4°. He is a growing male with Risser stage 3.',
    openingStatement: 'Kevin wants orthognathic surgery. Before you start planning procedures, what factors determine if he is a candidate, and what concerns do you have about his case specifically?',
    
    conceptDomains: {
        'Growth Assessment': ['skeletal_maturity', 'growth_prediction', 'timing'],
        'Surgical Indications': ['functional_vs_cosmetic', 'severity_threshold', 'orthodontic_options'],
        'Patient Factors': ['motivation', 'expectations', 'compliance', 'psychological'],
        'Presurgical Planning': ['orthodontic_preparation', 'team_approach']
    },
    
    defined_responses: {
        'biggest concern': 'Growth. At 16 with Risser 3, hes still growing. Male mandibular growth continues until 18-21. If we operate now and he continues to grow, his Class III will return. We need to wait for skeletal maturity.',
        'how assess maturity': 'Multiple methods: (1) Hand-wrist radiograph for bone age, (2) Serial cephalograms 6+ months apart - no growth = mature, (3) Risser sign (hell be 4-5 when mature), (4) Height growth cessation. Best practice: two cephs 6-12 months apart showing no growth.',
        'when can operate': 'Typically: Girls 14-16, boys 17-21. But chronological age is less important than documented skeletal maturity. I tell families "we operate when growth is complete, not at a specific age." For him, likely 2+ years away.',
        'what to do now': '"I understand youre eager to fix this, but operating while youre still growing risks the problem coming back. Lets start orthodontic preparation now - that takes 12-18 months. By the time your braces are ready for surgery, well likely have confirmed your growth is complete."',
        'ortho first': 'Pre-surgical orthodontics is essential: (1) Aligns and coordinates arches, (2) Decompensates dental position (teeth upright over bone), (3) Creates space for surgical movements, (4) Takes 12-24 months. Surgery is just one step in a longer process.',
        'surgery fix only': '"Your orthodontist will make your teeth straight, but because your jaws dont match, we cant achieve a perfect bite with braces alone. Surgery moves your jaws to match each other. Neither ortho nor surgery alone gives the best result - we need both."',
        'cosmetic concern': 'Validate it: Appearance matters, especially at his age. But also ensure he has realistic expectations. Surgery will improve his profile, but the primary goal is function. Show before/after photos of similar cases. Involve parents in expectation-setting.',
        'psychological assessment': 'For young patients, consider: Is he motivated or are parents pushing? Does he have realistic expectations? Any body dysmorphic concerns? Social pressure vs genuine functional complaints? Some surgeons require psychological clearance for elective cases in teens.'
    },
    
    quickActions: [
        'Why cant we operate now?',
        'When will he be ready?',
        'Why does he need braces first?',
        'How do I manage expectations?'
    ],
    
    keyTeachingPoints: [
        'Skeletal maturity is prerequisite for orthognathic surgery - especially in males',
        'Documented growth cessation (serial cephs) is more reliable than age',
        'Pre-surgical orthodontics takes 12-24 months - start this while waiting for maturity',
        'Orthognathic surgery is a team effort: orthodontist + surgeon + patient',
        'Expectation management is critical - especially for appearance-focused patients',
        'Consider psychological readiness in adolescent patients'
    ],
    
    evidenceBase: {
        guidelines: ['AAOMS Orthognathic Surgery Parameters', 'AO CMF Orthognathic Guidelines'],
        keyEvidence: [
            'Late mandibular growth in males can continue until age 21',
            'Surgery before growth completion increases relapse risk',
            'Serial cephalograms are most reliable method to confirm growth cessation'
        ]
    },
    
    relatedContent: [
        { type: 'reasondx', title: 'OMFS-003: Orthognathic Planning', link: 'reasondx-omfs-cases.html', reason: 'Complete surgical planning case' }
    ]
},

// ============================================================================
// OMFS-COACH-005: Implant Planning - Bone Considerations
// ============================================================================
'omfs-implant-planning': {
    id: 'omfs-implant-planning',
    title: 'Dental Implant - Complex Site Planning',
    category: 'Implant Surgery',
    profession: 'omfs',
    patient: {
        name: 'Sandra Wilson',
        age: 58,
        sex: 'Female',
        setting: 'OMFS Clinic',
        acuity: 'Low',
        chiefComplaint: 'Want implant to replace missing molar'
    },
    description: 'A 58-year-old woman wants an implant to replace #14 (upper left first molar), extracted 8 months ago due to fracture. CBCT shows 4mm of bone height below the sinus floor and 5mm width. She asks "Why cant you just put in the implant? The dentist made it sound simple."',
    openingStatement: 'Sandra needs an implant but her site is challenging. She expected a simple procedure. How do you explain the complexity and plan her treatment?',
    
    conceptDomains: {
        'Site Assessment': ['bone_height', 'bone_width', 'sinus_proximity', 'ridge_anatomy'],
        'Augmentation Options': ['sinus_lift', 'graft_types', 'staged_vs_simultaneous'],
        'Patient Communication': ['explaining_complexity', 'risk_discussion', 'alternatives'],
        'Treatment Planning': ['prosthetic_driven', 'collaboration', 'timeline']
    },
    
    defined_responses: {
        'why not simple': '"Your tooth has been out for 8 months, and the bone has shrunk - this is normal. Your sinus also extends down into this area. We only have 4mm of bone, but implants need about 10mm minimum to be stable. Before the implant, we need to build up the bone."',
        'sinus lift explained': '"Ill do a procedure called a sinus lift. I carefully lift the lining of your sinus and place bone graft material underneath. This creates space for the implant. Its very common and safe - I do these regularly."',
        'staged vs simultaneous': 'With only 4mm of bone, she needs staged approach: (1) Sinus lift with bone graft, (2) Wait 6-9 months for bone to mature, (3) Then place implant. Simultaneous approach works when you have 5-6mm of native bone. Less = staged.',
        'graft options': 'Graft materials: (1) Autograft - her own bone, gold standard but requires donor site, (2) Allograft - processed human cadaver bone, very common, (3) Xenograft - bovine bone, widely used, (4) Synthetics. For sinus lifts, allograft or xenograft work well.',
        'width issue': '5mm width is also borderline. Normal implant diameter is 4mm, and you need 1mm of bone on each side. She may need horizontal ridge augmentation too, or we use a narrower implant. CBCT planning is essential.',
        'timeline': '"Realistically, from today to final crown: 12-18 months. Sinus lift heals for 6-9 months, then implant placement, then 3-4 months for implant integration, then your dentist makes the crown. I know its long, but we want to do this right."',
        'alternatives': 'Always discuss: (1) Bridge - requires cutting adjacent teeth, (2) Removable partial denture - less invasive but less ideal, (3) No replacement - acceptable if occlusion stable. Implants arent the only option.',
        'cost discussion': 'Be transparent: "With the sinus lift, grafting, and implant surgery, the surgical fees are approximately [X]. Your dentist will have additional fees for the crown. I know this is more than you expected - lets make sure this is the right choice for you."'
    },
    
    quickActions: [
        'Why cant I just place the implant?',
        'What is a sinus lift?',
        'What graft should I use?',
        'What does she need to know?'
    ],
    
    keyTeachingPoints: [
        'Always assess bone height AND width before implant planning',
        'Posterior maxilla commonly requires sinus augmentation',
        '<5mm native bone = staged sinus lift; 5-6mm = possible simultaneous',
        'CBCT is essential for implant planning - panorex is insufficient',
        'Set realistic timeline expectations - implants are not fast',
        'Present alternatives - implants arent right for everyone'
    ],
    
    evidenceBase: {
        guidelines: ['ITI Treatment Guide for Sinus Augmentation', 'AAOMS Implant Parameters'],
        keyEvidence: [
            'Sinus lift success rates >95% with proper technique',
            'Simultaneous implant placement with >5mm native bone is predictable',
            'Staged approach required when native bone <5mm'
        ]
    },
    
    relatedContent: []
}

};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_OMFS_CASES;
}
if (typeof window !== 'undefined') {
    window.COACHDX_OMFS_CASES = COACHDX_OMFS_CASES;
}

console.log('[CoachDx-OMFS] Loaded ' + Object.keys(COACHDX_OMFS_CASES).length + ' OMFS coaching cases');
