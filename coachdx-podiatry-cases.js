/**
 * COACHDX PODIATRY (DPM) CASES
 * Mentor-style coaching conversations for Podiatry students/clinicians
 * 
 * Lauren Fine, MD, FAAAAI | January 2026
 * For PRG Grant - Multi-Institutional Validation Study
 */

const COACHDX_PODIATRY_CASES = {

// ============================================================================
// DPM-COACH-001: DIABETIC FOOT - Limb Salvage vs Amputation
// ============================================================================
'dpm-diabetic-limb-salvage': {
    id: 'dpm-diabetic-limb-salvage',
    title: 'Diabetic Foot - Limb Salvage Decision Making',
    category: 'Diabetic Foot',
    profession: 'dpm',
    patient: {
        name: 'Clarence Williams',
        age: 62,
        sex: 'Male',
        setting: 'Hospital Consult',
        acuity: 'High',
        chiefComplaint: 'Non-healing foot ulcer with infection'
    },
    description: 'A 62-year-old man with poorly controlled diabetes (A1c 10.2%) is admitted with a Wagner Grade 3 ulcer under the 1st metatarsal head with deep infection. He has palpable PT pulse but absent DP. X-ray shows possible osteomyelitis. The hospitalist asks your opinion: limb salvage or amputation?',
    openingStatement: 'Mr. Williams has a complicated diabetic foot. The medical team is asking "can we save this foot?" Walk me through how you approach this critical decision.',
    
    conceptDomains: {
        'Wound Assessment': ['wagner_classification', 'depth', 'infection_extent', 'tissue_viability'],
        'Vascular Status': ['pulses', 'ABI', 'toe_pressures', 'angiography_need'],
        'Infection': ['osteomyelitis_diagnosis', 'probe_to_bone', 'cultures', 'antibiotic_selection'],
        'Decision Making': ['limb_salvage_criteria', 'amputation_levels', 'patient_factors']
    },
    
    defined_responses: {
        'assess ulcer': 'Wagner 3 = deep ulcer with abscess, osteomyelitis, or septic joint. This is serious. Probe the ulcer - if you hit bone, positive predictive value for osteomyelitis is >85%. Document depth, undermining, exposed structures.',
        'probe to bone': 'Classic teaching: "Probe to bone is osteomyelitis." If your metal probe touches bone through the ulcer, treat as osteomyelitis. This simple test has PPV >85% in diabetic foot ulcers.',
        'vascular status': 'Critical question! Palpable PT with absent DP suggests patent tibial vessels. But palpation can be unreliable in diabetics. Get ABI (may be falsely elevated due to calcification) and toe pressures. Toe pressure >30-40 mmHg needed for healing.',
        'need angiogram': 'If toe pressures are inadequate or clinical concern for PAD, yes. Cant heal a wound without blood flow. Vascular surgery consultation for possible revascularization BEFORE deciding on amputation level.',
        'osteomyelitis workup': 'MRI is most sensitive/specific for osteomyelitis. X-ray changes lag by 2 weeks. ESR >70 highly suggestive. Bone biopsy is gold standard but not always needed. Empiric treatment often reasonable.',
        'antibiotics': 'Deep diabetic foot infection needs broad coverage: gram positives (including MRSA - common in diabetics), gram negatives, and anaerobes. Typical: Vancomycin + piperacillin-tazobactam or Vancomycin + cefepime + metronidazole.',
        'limb salvage possible': 'Factors favoring limb salvage: (1) Adequate perfusion or revascularizable, (2) Infection controllable with debridement + antibiotics, (3) Functional limb outcome expected, (4) Patient can participate in long treatment course.',
        'when to amputate': 'Consider amputation if: (1) Non-reconstructable vascular disease, (2) Overwhelming sepsis not controlled with debridement, (3) Non-ambulatory patient where complex salvage adds no function, (4) Patient preference after informed discussion.',
        'patient discussion': 'This is a shared decision. Explain: limb salvage may require multiple surgeries over months, revascularization, long antibiotics. Amputation with prosthesis may return him to function faster. What matters to HIM? Some patients fight for every toe; others want definitive solution.'
    },
    
    quickActions: [
        'How do I assess the ulcer?',
        'Does he have osteomyelitis?',
        'Can we save the foot?',
        'How do I discuss this with him?'
    ],
    
    keyTeachingPoints: [
        'Vascular status is THE critical factor - cant heal without blood flow',
        'Probe to bone = osteomyelitis (PPV >85% in diabetic foot)',
        'Limb salvage vs amputation is a multifactorial decision, not just wound grade',
        'Involve vascular surgery early for revascularization assessment',
        'Patient values and goals must drive the decision',
        'Functional outcome matters more than limb preservation at any cost'
    ],
    
    evidenceBase: {
        guidelines: ['IWGDF Guidelines 2023', 'IDSA Diabetic Foot Infection Guidelines 2012', 'SVS/APMA Diabetic Foot Guidelines'],
        keyEvidence: [
            'Toe pressure >30 mmHg predicts wound healing',
            'Probe to bone PPV 87% for osteomyelitis',
            'Revascularization before amputation reduces major amputation rates'
        ],
        openAccessLinks: ['https://iwgdfguidelines.org/guidelines-2023/']
    },
    
    relatedContent: [
        { type: 'reasondx', title: 'DPM-001: Diabetic Foot Ulcer', link: 'reasondx-podiatry-cases.html', reason: 'Review diabetic foot classification' },
        { type: 'mechanism', title: 'Diabetic Foot Cascade', link: 'mechanismdx-dfoot.html', reason: 'Understand pathophysiology' }
    ]
},

// ============================================================================
// DPM-COACH-002: CHARCOT FOOT - Acute vs Chronic Management
// ============================================================================
'dpm-charcot-management': {
    id: 'dpm-charcot-management',
    title: 'Charcot Neuroarthropathy - When to Offload vs Operate',
    category: 'Diabetic Foot',
    profession: 'dpm',
    patient: {
        name: 'Dorothy Jackson',
        age: 58,
        sex: 'Female',
        setting: 'Podiatry Clinic',
        acuity: 'Medium',
        chiefComplaint: 'Swollen red foot, no pain'
    },
    description: 'A 58-year-old woman with longstanding diabetes and peripheral neuropathy presents with a warm, swollen, erythematous left foot for 2 weeks. She denies trauma or pain. Temperature difference is 4°C warmer than right foot. She has been walking on it because "it doesnt hurt."',
    openingStatement: 'Mrs. Jacksons foot is warm, swollen, and red, but she has no pain. The classic diabetic dilemma: is this infection or Charcot? And if its Charcot, what do we do?',
    
    conceptDomains: {
        'Diagnosis': ['charcot_vs_infection', 'eichenholtz_staging', 'imaging', 'temperature_differential'],
        'Acute Management': ['offloading', 'TCC_vs_CROW', 'activity_modification'],
        'Monitoring': ['temperature_monitoring', 'imaging_progression', 'consolidation_criteria'],
        'Surgical Consideration': ['deformity', 'instability', 'ulceration_risk']
    },
    
    defined_responses: {
        'charcot vs infection': 'Classic dilemma! Both cause warmth, swelling, redness. Key differentiators: (1) Charcot: usually no open wound, minimal/no pain, neuropathy required; (2) Infection: usually portal of entry, may have pain even with neuropathy, systemic signs. Get labs (WBC, ESR, CRP) and imaging.',
        'imaging findings': 'X-ray shows: subtle fragmentation and subluxation at Lisfranc joint. No cortical destruction or periosteal reaction to suggest osteomyelitis. This pattern - midfoot collapse without infection signs - is classic Charcot.',
        'staging': 'Eichenholtz Stage 1 (Development/Acute): fragmentation, joint destruction, debris. Stage 2 (Coalescence): absorption of debris, sclerosis. Stage 3 (Reconstruction/Consolidation): bone healing, deformity stabilized. Shes in Stage 1 - most critical time.',
        'acute treatment': 'Immediate total contact cast (TCC) or CROW boot with STRICT non-weight-bearing or protected weight-bearing. This is NOT optional. Continued ambulation in Stage 1 leads to progressive collapse and deformity. Shes been walking on it - we need to stop that NOW.',
        'how long offload': 'Until consolidation - typically 3-6 months, sometimes longer. Monitor with skin temperature (within 2°C of contralateral) and serial X-rays. Dont rush return to regular footwear. Premature loading = more collapse.',
        'surgery when': 'Surgical indications: (1) Unstable deformity that cant be braced, (2) Recurrent ulceration over bony prominence, (3) Rocker-bottom deformity creating pressure points, (4) Non-reconstructable with bracing alone. Most Charcot is managed conservatively.',
        'patient education': 'Critical: explain why she MUST stay off the foot even though it doesnt hurt. Neuropathy is the reason she has Charcot AND the reason she doesnt perceive the damage. Pain is normally protective - she doesnt have that warning system.',
        'long term': 'Even after consolidation, shell need: (1) Custom accommodative orthotics, (2) Extra-depth diabetic shoes, (3) Lifetime surveillance for skin breakdown, (4) Regular follow-up. Charcot foot is never "cured" - its managed.'
    },
    
    quickActions: [
        'Is this Charcot or infection?',
        'What stage is she in?',
        'How do I treat acute Charcot?',
        'Will she need surgery?'
    ],
    
    keyTeachingPoints: [
        'Temperature difference >2°C is highly suggestive of active Charcot or infection',
        'Acute Charcot requires STRICT offloading - continued ambulation causes collapse',
        'Painlessness is the problem - neuropathy removes protective sensation',
        'Offloading duration is months, not weeks',
        'Most Charcot is managed conservatively; surgery for deformity complications'
    ],
    
    evidenceBase: {
        guidelines: ['IWGDF Charcot Guidelines 2023', 'ACFAS Charcot Consensus Statement'],
        keyEvidence: [
            'Temperature differential >2°C supports active Charcot diagnosis',
            'TCC is gold standard for acute Charcot offloading',
            'Premature weight-bearing leads to 30-50% deformity progression'
        ]
    },
    
    relatedContent: [
        { type: 'mechanism', title: 'Neuropathic Arthropathy', link: 'mechanismdx-charcot.html', reason: 'Understand pathophysiology of bone destruction' }
    ]
},

// ============================================================================
// DPM-COACH-003: FIRST RAY SURGERY - Bunion Decision Making
// ============================================================================
'dpm-bunion-surgery': {
    id: 'dpm-bunion-surgery',
    title: 'Hallux Valgus - Surgical Planning',
    category: 'Forefoot Surgery',
    profession: 'dpm',
    patient: {
        name: 'Patricia Chen',
        age: 45,
        sex: 'Female',
        setting: 'Podiatry Office',
        acuity: 'Low',
        chiefComplaint: 'Painful bunion, wants surgery'
    },
    description: 'A 45-year-old woman presents requesting bunion surgery. She has moderate hallux valgus with HVA 32°, IMA 16°. Pain over the medial eminence in shoes. First MTP ROM: 45° dorsiflexion. Hypermobile first ray. No arthritis on X-ray.',
    openingStatement: 'Mrs. Chen has done her research online and wants a "minimally invasive bunion procedure" she saw advertised. How do you approach surgical decision-making and manage expectations?',
    
    conceptDomains: {
        'Evaluation': ['HVA_IMA_measurements', 'joint_assessment', 'first_ray_mobility', 'sesamoid_position'],
        'Procedure Selection': ['distal_vs_proximal', 'lapidus_indications', 'minimally_invasive_reality'],
        'Patient Selection': ['conservative_trial', 'expectations', 'compliance_factors'],
        'Complications': ['recurrence', 'hallux_varus', 'transfer_metatarsalgia']
    },
    
    defined_responses: {
        'measurements': 'HVA 32° is moderate-severe. IMA 16° is elevated (normal <9°). These measurements guide procedure selection. Higher IMA = more proximal correction needed. You cant fix a proximal problem with a distal procedure.',
        'procedure options': 'For IMA 16° with hypermobility, options include: (1) Lapidus (first TMT arthrodesis) - addresses hypermobility directly, (2) Proximal metatarsal osteotomy (scarf, proximal chevron) - corrects IMA without fusion, (3) Distal osteotomy alone would likely fail for this degree of deformity.',
        'minimally invasive': 'Honest conversation needed. MIS bunion surgery has a role but isnt appropriate for everyone. For her IMA and hypermobility, MIS may not adequately address the deformity. Higher recurrence rates reported with MIS in moderate-severe HV. Dont do a procedure because its trendy.',
        'hypermobility issue': 'Hypermobile first ray is CRUCIAL. If you just correct the angular deformity but leave the hypermobility, recurrence is likely. This is why Lapidus is popular - it fuses the TMT joint, eliminating hypermobility as a recurrence factor.',
        'conservative first': 'Has she truly tried conservative care? Wider shoes, orthotics, padding, activity modification? Surgery isnt first-line. Also, she needs realistic expectations - were correcting deformity for pain, not to fit into narrow shoes.',
        'expectations': 'Discuss: (1) 6-8 weeks non/partial weight-bearing with Lapidus, (2) Swelling persists 6-12 months, (3) 85-90% good/excellent outcomes, (4) Possible need for hardware removal, (5) No guarantees on shoe choices afterward.',
        'recurrence risk': 'Recurrence rates: distal osteotomy 10-15%, proximal osteotomy 5-10%, Lapidus 3-5%. For her deformity with hypermobility, Lapidus gives lowest recurrence but longest recovery. Trade-off discussion with patient.',
        'when not to operate': 'Caution if: (1) Cosmetic concern only without functional pain, (2) Unrealistic expectations (stilettos after surgery), (3) Poorly controlled diabetes/poor healing, (4) Smoker (especially for Lapidus - fusion risk), (5) Cant comply with postop restrictions.'
    },
    
    quickActions: [
        'What do her measurements tell us?',
        'What procedure should I do?',
        'Is she a good surgical candidate?',
        'What about minimally invasive?'
    ],
    
    keyTeachingPoints: [
        'IMA determines procedure level - high IMA needs proximal correction',
        'Hypermobility is an independent recurrence risk factor - must be addressed',
        'MIS isnt appropriate for all bunions - match procedure to pathology',
        'Conservative care should be exhausted before surgery',
        'Set realistic expectations - surgery is for pain, not fashion'
    ],
    
    evidenceBase: {
        guidelines: ['ACFAS Hallux Valgus Clinical Consensus', 'AOFAS Guidelines'],
        keyEvidence: [
            'Lapidus has lowest recurrence rates in hypermobile first ray',
            'IMA >13° often requires proximal correction',
            'Patient satisfaction highest when expectations are appropriately set'
        ]
    },
    
    relatedContent: [
        { type: 'mechanism', title: 'First Ray Biomechanics', link: 'mechanismdx-bunion.html', reason: 'Understand deformity mechanics' }
    ]
},

// ============================================================================
// DPM-COACH-004: HEEL PAIN - Beyond Plantar Fasciitis
// ============================================================================
'dpm-heel-pain-differential': {
    id: 'dpm-heel-pain-differential',
    title: 'Heel Pain - When Its Not Plantar Fasciitis',
    category: 'Rearfoot',
    profession: 'dpm',
    patient: {
        name: 'Michael Torres',
        age: 38,
        sex: 'Male',
        setting: 'Podiatry Office',
        acuity: 'Low',
        chiefComplaint: 'Heel pain for 6 months, not getting better'
    },
    description: 'A 38-year-old athletic man has bilateral heel pain for 6 months. He has seen another podiatrist and received 3 steroid injections, custom orthotics, and physical therapy without improvement. Pain is worst in the morning AND at night. He mentions his low back has been stiff too.',
    openingStatement: 'Mr. Torres has "plantar fasciitis" that isnt responding to treatment. But is it really plantar fasciitis? What should make you question the diagnosis?',
    
    conceptDomains: {
        'Re-evaluation': ['atypical_features', 'treatment_failure', 'expanded_history'],
        'Differential': ['enthesitis', 'nerve_entrapment', 'stress_fracture', 'spondyloarthropathy'],
        'Systems Review': ['inflammatory_back_pain', 'extra_articular_features', 'HLA_B27'],
        'Workup': ['labs', 'imaging', 'referral_decision']
    },
    
    defined_responses: {
        'atypical features': 'Several red flags: (1) Bilateral - plantar fasciitis is usually unilateral at onset, (2) Persistent night pain - mechanical PF is worse with first steps, improves with rest, (3) Not responding to appropriate treatment, (4) Associated back stiffness in a young man.',
        'inflammatory clues': 'Ask about his back pain: Is it worse in morning with stiffness >30 minutes? Does it improve with activity (not rest)? Does he wake at night with back pain? These are features of inflammatory back pain - think spondyloarthropathy.',
        'enthesitis': 'Heel pain in spondyloarthropathy is ENTHESITIS - inflammation where tendon/ligament inserts into bone. Looks like plantar fasciitis clinically but its a systemic inflammatory process. Achilles insertion often involved too.',
        'other heel diff': 'Beyond SpA, consider: (1) Baxters nerve entrapment - lateral plantar nerve, burning quality, (2) Calcaneal stress fracture - squeeze test positive, (3) Fat pad atrophy - direct plantar heel pain, (4) Tarsal tunnel - radiating symptoms.',
        'workup': 'For suspected spondyloarthropathy: (1) HLA-B27 (present in 80-90% of AS), (2) ESR/CRP - may be elevated, (3) Sacroiliac joint imaging - X-ray or MRI. MRI shows early changes before X-ray.',
        'refer rheum': 'Yes, if spondyloarthropathy suspected, refer to rheumatology. Early diagnosis and treatment (NSAIDs, possibly biologics) can prevent progressive spinal disease. Youve done him a service by thinking beyond the foot.',
        'injections harmful': 'Possibly! Multiple steroid injections for enthesitis can weaken the plantar fascia without addressing underlying inflammation. If this is SpA, he needs systemic treatment. Steroids may have masked the diagnosis too.',
        'patient conversation': 'Explain: "I dont think this is simple plantar fasciitis. Your bilateral symptoms, night pain, and back stiffness suggest a condition that affects multiple joints. We should check some labs and possibly refer to a rheumatologist. This is actually good news - its treatable once we identify it."'
    },
    
    quickActions: [
        'What makes this atypical?',
        'What else causes heel pain?',
        'Could this be systemic?',
        'Should I refer him?'
    ],
    
    keyTeachingPoints: [
        'Treatment-resistant "plantar fasciitis" requires re-evaluation of diagnosis',
        'Bilateral heel pain in young adults - think enthesitis/spondyloarthropathy',
        'Inflammatory back pain + heel pain = high suspicion for SpA',
        'Podiatrists can be first to identify systemic inflammatory disease',
        'Know when to refer beyond the foot'
    ],
    
    evidenceBase: {
        guidelines: ['ASAS Spondyloarthropathy Classification Criteria', 'ACFAS Heel Pain Guidelines'],
        keyEvidence: [
            'Enthesitis present in 30-50% of SpA patients',
            'Heel pain may be presenting symptom of ankylosing spondylitis',
            'Early SpA treatment prevents structural progression'
        ]
    },
    
    relatedContent: [
        { type: 'reasondx', title: 'DPM-002: Plantar Fasciitis', link: 'reasondx-podiatry-cases.html', reason: 'Compare classic presentation' }
    ]
},

// ============================================================================
// DPM-COACH-005: PEDIATRIC - Flatfoot Assessment
// ============================================================================
'dpm-peds-flatfoot': {
    id: 'dpm-peds-flatfoot',
    title: 'Pediatric Flatfoot - When to Treat',
    category: 'Pediatrics',
    profession: 'dpm',
    patient: {
        name: 'Ethan Miller',
        age: 8,
        sex: 'Male',
        setting: 'Podiatry Office',
        acuity: 'Low',
        chiefComplaint: 'Flat feet - parents concerned'
    },
    description: 'An 8-year-old boy is brought by his parents who are concerned about his flat feet. Dad says "I had the same thing and needed surgery as an adult." The child has no pain and plays soccer without difficulty. On exam: bilateral flexible flatfoot, corrects with toe rise.',
    openingStatement: 'Ethans parents are worried because they read online that flat feet cause problems. Dad is projecting his own experience. How do you assess this child and counsel the family?',
    
    conceptDomains: {
        'Assessment': ['flexible_vs_rigid', 'arch_development', 'associated_conditions', 'functional_status'],
        'Natural History': ['normal_development', 'when_pathologic', 'adult_outcomes'],
        'Treatment Decision': ['observation_vs_intervention', 'orthotics_evidence', 'surgery_indications'],
        'Family Counseling': ['reassurance', 'activity_guidance', 'follow_up_plan']
    },
    
    defined_responses: {
        'flexible vs rigid': 'Critical distinction! Flexible flatfoot: arch appears with toe rise and non-weight-bearing. Rigid flatfoot: arch never appears. Flexible is almost always benign. Rigid requires workup for tarsal coalition, vertical talus, etc.',
        'his exam': 'Bilateral flexible flatfoot - arch reconstitutes with toe rise. No hindfoot contracture. Full subtalar motion. No pain with manipulation. Walks and runs normally. This is PHYSIOLOGIC flexible flatfoot - not pathologic.',
        'natural history': 'Most children have flat feet until age 6-8 as the arch develops. By age 10, arch should be established. His arch likely will continue to mature. Longitudinal studies show most flexible flatfoot children become asymptomatic adults.',
        'dad comparison': 'Dads experience doesnt predict Ethans outcome. Ask Dad: Was his flatfoot flexible or rigid? Did he have a tarsal coalition? Symptomatic adults with flatfoot often have other pathology. Dont let family anxiety drive unnecessary treatment.',
        'orthotics evidence': 'Honest answer: Evidence does NOT support orthotics for asymptomatic flexible flatfoot. Studies show no difference in arch development with vs without orthotics. Were not preventing adult problems by treating now.',
        'when to treat': 'Treat pediatric flatfoot if: (1) Painful, (2) Rigid (suggests structural pathology), (3) Rapidly progressive, (4) Functional limitation. Asymptomatic flexible flatfoot = observation.',
        'activity restriction': 'None! He should play soccer, run, be active. No evidence that activity harms flexible flatfoot or that restriction helps. Limiting activity in an asymptomatic child does harm.',
        'counsel family': 'Explain: "Ethans feet are a normal variant. Theyre flexible, painless, and hes active - all good signs. Research shows orthotics dont change the natural development of the arch. I recommend watching and following up in 1 year. If he develops pain, we reassess."',
        'when worry': 'Worry if: (1) Pain develops, (2) Rapid progression, (3) Rigid (tarsal coalition usually symptomatic by teens), (4) Other findings (hypermobility syndrome, neurologic concerns).'
    },
    
    quickActions: [
        'Is this flexible or rigid?',
        'Does he need orthotics?',
        'Should he stop sports?',
        'What do I tell the parents?'
    ],
    
    keyTeachingPoints: [
        'Flexible flatfoot in children is usually physiologic and benign',
        'Rigid flatfoot requires workup - different entity entirely',
        'No evidence that orthotics change natural history of flexible flatfoot',
        'Dont treat asymptomatic children to relieve parental anxiety',
        'Pain and functional limitation are treatment triggers, not appearance'
    ],
    
    evidenceBase: {
        guidelines: ['ACFAS Pediatric Flatfoot Position Statement', 'POSNA Pediatric Flatfoot Guidelines'],
        keyEvidence: [
            'Arch develops until age 6-10 in most children',
            'Orthotics do not alter natural history of flexible flatfoot',
            'Most asymptomatic flexible flatfoot children become asymptomatic adults'
        ]
    },
    
    relatedContent: [
        { type: 'reasondx', title: 'DPM-007: PTTD Adult Flatfoot', link: 'reasondx-podiatry-cases.html', reason: 'Compare adult acquired flatfoot' }
    ]
},

// ============================================================================
// DPM-COACH-006: SPORTS - Running Injury Pattern Recognition
// ============================================================================
'dpm-sports-running': {
    id: 'dpm-sports-running',
    title: 'Running Injuries - Training Error Recognition',
    category: 'Sports Medicine',
    profession: 'dpm',
    patient: {
        name: 'Amanda Foster',
        age: 32,
        sex: 'Female',
        setting: 'Sports Podiatry Clinic',
        acuity: 'Low',
        chiefComplaint: 'Foot pain while training for marathon'
    },
    description: 'A 32-year-old woman training for her first marathon presents with 3 weeks of dorsal midfoot pain. She increased her mileage from 15 to 35 miles/week over the past month. Pain is worse during runs and she has point tenderness over the 2nd metatarsal shaft.',
    openingStatement: 'Amanda is training hard and now shes hurt. Before we jump to imaging, lets think about the pattern here. What does her history tell you about the likely diagnosis and cause?',
    
    conceptDomains: {
        'Training Analysis': ['mileage_progression', 'intensity', 'surface', 'footwear'],
        'Diagnosis': ['stress_fracture_suspicion', 'tendinopathy', 'examination_findings'],
        'Workup': ['imaging_timing', 'MRI_vs_bone_scan', 'clinical_diagnosis'],
        'Return to Running': ['healing_timeline', 'progression_protocol', 'prevention']
    },
    
    defined_responses: {
        'training error': 'Classic training error! She more than doubled her mileage (15→35) in one month. The 10% rule suggests increasing by max 10% per week. She increased by ~130% in 4 weeks. Bone couldnt adapt fast enough = stress fracture.',
        'stress fracture likely': 'Point tenderness over metatarsal shaft + activity-related pain + rapid training increase = stress fracture until proven otherwise. 2nd and 3rd metatarsals are most common sites. Clinical diagnosis is often sufficient.',
        'need imaging': 'X-ray may be negative early (takes 2-3 weeks for periosteal reaction). MRI is most sensitive for early stress injury. But if clinical suspicion is high and youre going to treat regardless, imaging may not change management.',
        'treatment': 'Stress fracture treatment: (1) Relative rest - cross-train with non-impact activities (swimming, cycling), (2) Walking boot if severe pain or high-risk location, (3) Usually 4-6 weeks before return to running, (4) Gradual progression back.',
        'marathon question': 'Shes asking "can I still do the marathon?" Depends on timing. Metatarsal stress fractures typically need 6-8 weeks modified activity + 4-6 weeks gradual return. If marathon is <3 months away, unlikely. Have honest conversation.',
        'return protocol': 'Return to running progression: Walk 30 min pain-free → Walk/jog intervals → Jog 2-3 miles → Increase 10% per week. Any pain = step back. No races until running full training volume pain-free.',
        'prevent recurrence': 'Address root causes: (1) Training progression - follow 10% rule, (2) Recovery days - hard/easy pattern, (3) Shoes - replace every 300-500 miles, (4) Nutrition - calcium, vitamin D, relative energy deficiency (RED-S) screening, (5) Cross-training to reduce repetitive load.',
        'nutrition screen': 'Important in female runners! Ask about menstrual cycles, eating habits, stress fracture history. Female athlete triad (energy deficiency, menstrual dysfunction, low bone density) increases stress fracture risk. May need sports medicine/nutrition referral.'
    },
    
    quickActions: [
        'What training error did she make?',
        'Does she need imaging?',
        'Can she still do the marathon?',
        'How do I prevent this again?'
    ],
    
    keyTeachingPoints: [
        'Training errors cause most running injuries - take detailed training history',
        '10% rule: dont increase weekly mileage more than 10% per week',
        'Point tenderness over metatarsal shaft = stress fracture until proven otherwise',
        'Clinical diagnosis often sufficient - imaging doesnt always change management',
        'Screen female athletes for relative energy deficiency (RED-S)',
        'Return to running must be gradual and pain-free'
    ],
    
    evidenceBase: {
        guidelines: ['ACSM Running Injury Prevention', 'ACFAS Stress Fracture Guidelines'],
        keyEvidence: [
            'Training errors implicated in 60-70% of running injuries',
            '2nd metatarsal most common stress fracture site in runners',
            'MRI sensitivity >95% for stress injury, X-ray 15-35% early'
        ]
    },
    
    relatedContent: [
        { type: 'reasondx', title: 'DPM-009: Ankle Sprain', link: 'reasondx-podiatry-cases.html', reason: 'Compare acute vs overuse injury' }
    ]
},

// ============================================================================
// DPM-COACH-007: NAIL SURGERY - Permanent vs Temporary
// ============================================================================
'dpm-nail-surgery': {
    id: 'dpm-nail-surgery',
    title: 'Ingrown Toenail - Procedure Selection',
    category: 'Nail Pathology',
    profession: 'dpm',
    patient: {
        name: 'Justin Park',
        age: 17,
        sex: 'Male',
        setting: 'Podiatry Office',
        acuity: 'Low',
        chiefComplaint: 'Recurrent ingrown toenail'
    },
    description: 'A 17-year-old high school athlete presents with his 4th ingrown toenail on the same border of the right great toe in 2 years. Previous treatments: 2 partial nail avulsions (temporary), 1 round of antibiotics. Currently infected with granulation tissue. He plays football and "cant miss more than a week."',
    openingStatement: 'Justin has been here before - multiple times. His ingrown nail keeps coming back. How do you break the cycle, and how do you manage his (and probably his parents) expectations about recovery?',
    
    conceptDomains: {
        'Procedure Selection': ['temporary_vs_permanent', 'chemical_matrixectomy', 'technique'],
        'Patient Factors': ['recurrence_pattern', 'activity_level', 'compliance'],
        'Infection Management': ['antibiotics', 'drainage', 'timing_of_surgery'],
        'Recovery': ['timeline', 'wound_care', 'return_to_activity']
    },
    
    defined_responses: {
        'why recurrent': 'After 4 episodes on the same border, the nail matrix is the problem. Temporary avulsion just removes the nail plate - it grows back the same way. He needs permanent matrix ablation to stop the cycle.',
        'permanent procedure': 'Chemical matrixectomy (phenol or sodium hydroxide) after partial nail avulsion. Phenol 89% solution applied to matrix for 30-60 seconds x3. Destroys matrix cells so that nail border doesnt regrow. Success rate >95%.',
        'do now with infection': 'Controversial. Some drain infection and do matrixectomy same day. Others prefer antibiotics + avulsion first, matrixectomy later when not infected. My preference: if infection is mild/moderate, I do matrixectomy after draining - avoids two procedures.',
        'antibiotics needed': 'With active infection and granulation tissue, yes - antibiotics perioperatively. Cover Staph (most common): cephalexin or TMP-SMX if MRSA risk. 5-7 days usually sufficient since were removing the foreign body (nail spicule).',
        'football timeline': '"Cant miss more than a week" - lets be realistic. After chemical matrixectomy: (1) Drainage/healing takes 2-4 weeks, (2) Return to sports when wound is closed and pain allows, (3) Usually 2-3 weeks minimum, longer for contact sports with cleats. One week is not realistic.',
        'manage expectations': 'Have this conversation with Justin AND parents: "This procedure gives 95% chance of permanent cure, but it requires time to heal. Rushing back risks infection and complications. Missing 2-3 weeks now prevents missing more time from future episodes."',
        'wound care': 'Post-procedure: (1) Epsom salt soaks daily, (2) Topical antibiotic, (3) Bandage changes, (4) Keep clean and dry, (5) Watch for infection signs. Phenol wounds drain longer than non-phenol - prepare patient for this.',
        'recurrence counseling': 'Even with matrixectomy, 5% recurrence rate. Prevent by: (1) Proper nail trimming (straight across), (2) Avoid tight shoes, (3) Trauma prevention. If grows back, likely incomplete matrix destruction - may need revision.'
    },
    
    quickActions: [
        'Why does this keep happening?',
        'Should I do permanent procedure?',
        'Can I do it while infected?',
        'When can he play football?'
    ],
    
    keyTeachingPoints: [
        'Recurrent ingrown nails warrant permanent matrixectomy, not repeated avulsions',
        'Chemical matrixectomy has >95% success rate',
        'Infection is not absolute contraindication but requires judgment',
        'Set realistic recovery expectations - athletes often underestimate',
        'Prevention education is part of treatment - nail cutting technique matters'
    ],
    
    evidenceBase: {
        guidelines: ['ACFAS Nail Surgery Guidelines'],
        keyEvidence: [
            'Phenol matrixectomy recurrence rate 2-5%',
            'Temporary avulsion recurrence rate 30-70%',
            'No significant difference in outcomes with concurrent mild infection'
        ]
    },
    
    relatedContent: []
}

};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COACHDX_PODIATRY_CASES;
}
if (typeof window !== 'undefined') {
    window.COACHDX_PODIATRY_CASES = COACHDX_PODIATRY_CASES;
}

console.log('[CoachDx-Podiatry] Loaded ' + Object.keys(COACHDX_PODIATRY_CASES).length + ' Podiatry coaching cases');
