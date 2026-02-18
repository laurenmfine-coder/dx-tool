#!/usr/bin/env python3
"""Generate remaining 4 RadDx body system modules."""

MODULES = {
    "msk": {
        "icon": "🦴",
        "title": "Musculoskeletal Imaging",
        "badge": "ORTHOPEDICS",
        "scenarios": [
            {
                "modality": "X-ray → CT → MRI",
                "title": "Hip Fracture in the Elderly",
                "vignette": "A <strong>78-year-old woman</strong> with osteoporosis on no treatment presents after a mechanical fall from standing height. She cannot bear weight on her left leg, which appears shortened and externally rotated. PMH: type 2 diabetes, CKD stage 3, chronic prednisone for polymyalgia rheumatica. Vitals stable.",
                "context": {
                    "question": "What epidemiological and exposure factors are critical to understanding this patient's fracture risk and surgical planning?",
                    "correct": "D",
                    "options": {
                        "A": "Age alone explains this fracture",
                        "B": "Osteoporosis is the only relevant risk factor",
                        "C": "Her diabetes is not related to fracture risk",
                        "D": "Multiple compounding risk factors: untreated osteoporosis + chronic glucocorticoid use (accelerates bone loss) + diabetes (increases fall risk via neuropathy and impairs bone quality) + CKD (secondary hyperparathyroidism → bone resorption) + age + female sex. This is a fragility fracture — it should trigger a comprehensive osteoporosis workup and fracture prevention strategy, not just surgical repair"
                    },
                    "explanation": "Fragility Fracture Epidemiology",
                    "text": "Hip fractures are a geriatric epidemic: <strong>300,000+/year in the US</strong>, with 1-year mortality of 20-30% in elderly patients. Risk factors are multiplicative: osteoporosis (untreated in >75% of at-risk patients), glucocorticoid use (the #1 cause of secondary osteoporosis), diabetes (both type 1 and 2 impair bone quality), CKD (renal osteodystrophy), vitamin D deficiency, polypharmacy causing falls, cognitive impairment, and environmental hazards (loose rugs, poor lighting). <strong>Every fragility fracture should trigger an osteoporosis treatment cascade</strong> — yet fewer than 20% of hip fracture patients receive osteoporosis treatment at discharge.",
                    "pearl": "Epidemiologic Pearl: The 'osteoporosis treatment gap' is one of the biggest failures in preventive medicine. Fracture liaison services (FLS) that systematically identify and treat fragility fracture patients reduce subsequent fracture rates by 30-40%. Also: chronic prednisone users should be on bisphosphonates prophylactically — this patient's fracture was predictable and potentially preventable."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "AP pelvis + lateral hip X-ray — first-line for suspected hip fracture",
                        "B": "CT pelvis immediately for surgical planning",
                        "C": "MRI hip to assess for occult fracture",
                        "D": "Bone scan to evaluate bone quality"
                    },
                    "explanation": "X-ray First, MRI If Negative",
                    "text": "AP pelvis and cross-table lateral X-ray detect ~95% of hip fractures. If X-ray is negative but clinical suspicion remains high (pain with weight-bearing, pain with axial loading, log-roll test positive), <strong>MRI is the next step</strong> — it detects occult fractures missed by X-ray with nearly 100% sensitivity. CT is used for surgical planning (comminution assessment) but is not first-line for diagnosis. Never dismiss a non-weight-bearing elderly patient with negative X-rays."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Normal X-ray — must be a soft tissue injury",
                        "B": "Intertrochanteric fracture with varus angulation",
                        "C": "Given the clinical presentation (shortened, externally rotated leg), expect either a displaced femoral neck fracture (Garden III-IV) or an intertrochanteric fracture — the X-ray will classify it and determine the surgical approach",
                        "D": "Pubic ramus fracture only"
                    },
                    "explanation": "Hip Fracture Classification Drives Surgery",
                    "text": "<strong>Femoral neck fractures</strong> (intracapsular): Garden classification I-IV. Displaced (Garden III-IV) in elderly → hemiarthroplasty or total hip arthroplasty (blood supply disrupted → high AVN risk with fixation). Non-displaced (Garden I-II) → internal fixation with screws. <strong>Intertrochanteric fractures</strong> (extracapsular): stable vs unstable pattern → cephalomedullary nail (e.g., gamma nail) or sliding hip screw. The X-ray classification directly determines the surgical approach."
                },
                "interpret": {
                    "correct": "B",
                    "options": {
                        "A": "All hip fractures are treated with internal fixation",
                        "B": "A displaced femoral neck fracture in a 78-year-old → arthroplasty (not fixation), because AVN risk with fixation exceeds 30% in elderly displaced fractures. The choice between hemiarthroplasty and total hip depends on activity level and acetabular integrity",
                        "C": "Conservative management with bed rest is preferred in the elderly",
                        "D": "Surgery can be delayed 1-2 weeks for medical optimization"
                    },
                    "explanation": "Imaging Classification → Surgical Decision",
                    "text": "For displaced femoral neck fractures in elderly patients, arthroplasty (replacing the femoral head) is superior to fixation (pinning). <strong>Surgery within 24-48 hours</strong> reduces mortality, delirium, pressure ulcers, and pneumonia. Delays beyond 48h increase 30-day mortality by 40%. Medical optimization (anticoagulation reversal, fluid resuscitation, cardiac clearance) should happen IN PARALLEL with surgical planning, not sequentially.",
                    "radiopaedia": "https://radiopaedia.org/articles/hip-fracture"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Surgery and discharge with outpatient follow-up",
                        "B": "Surgery + calcium and vitamin D only",
                        "C": "Surgery + physical therapy",
                        "D": "Surgery within 24-48h + DVT prophylaxis + delirium prevention protocol + DEXA scan if not done recently + start osteoporosis treatment (bisphosphonate or denosumab, accounting for CKD stage) + vitamin D repletion + fall risk assessment + medication review (reduce fall-risk medications) + steroid taper evaluation + geriatric co-management + rehab placement planning"
                    },
                    "explanation": "Fracture → Comprehensive Geriatric Intervention",
                    "text": "The imaging finding triggered surgery, but the comprehensive plan addresses the underlying fragility: osteoporosis treatment (accounting for her CKD — denosumab or teriparatide may be preferred over bisphosphonates in advanced CKD), glucocorticoid reduction (evaluate if PMR is still active), fall prevention (environmental modification, PT/OT, medication review), and geriatric co-management (reduces delirium, complications, and mortality). This fracture was a sentinel event signaling systemic bone fragility."
                }
            },
            {
                "modality": "X-ray → MRI",
                "title": "Osteomyelitis",
                "vignette": "A <strong>52-year-old male</strong> with poorly controlled type 2 diabetes (HbA1c 10.2%) and peripheral neuropathy presents with a non-healing plantar ulcer on his right foot for 6 weeks. The wound probes to bone on exam. Surrounding erythema and warmth extend 3 cm beyond the wound margins. WBC 14,800, ESR 92, CRP 8.4. He works as a delivery driver and reports he didn't feel the initial injury.",
                "context": {
                    "question": "What epidemiological and exposure factors make osteomyelitis the leading concern in this presentation?",
                    "correct": "C",
                    "options": {
                        "A": "Elevated inflammatory markers alone confirm osteomyelitis",
                        "B": "Diabetic foot ulcers rarely progress to bone infection",
                        "C": "Diabetic foot osteomyelitis is an epidemic: 15-25% of diabetics develop foot ulcers, and 20-60% of diabetic foot ulcers involve underlying osteomyelitis. The 'probe-to-bone' test (positive here) has 89% positive predictive value for osteomyelitis in diabetic ulcers. His neuropathy prevented pain sensation, allowing injury progression. Poorly controlled diabetes impairs immune function and wound healing simultaneously",
                        "D": "Soft tissue infection is more likely than bone involvement"
                    },
                    "explanation": "Diabetic Foot Osteomyelitis Epidemiology",
                    "text": "Diabetic foot disease is the leading cause of non-traumatic amputation worldwide. The pathway: <strong>neuropathy → undetected injury → ulceration → infection → osteomyelitis → amputation</strong>. Risk factors for progression: HbA1c >8%, peripheral neuropathy (present in >50% of diabetics over 10 years), peripheral arterial disease (impairs antibiotic delivery and healing), and immunosuppression from hyperglycemia. <strong>The probe-to-bone test</strong> is simple and highly predictive in diabetic ulcers — if a blunt sterile probe passes through the ulcer to bone, osteomyelitis is present until proven otherwise.",
                    "pearl": "Epidemiologic Pearl: In the US, diabetic foot complications account for more hospitalizations than any other diabetic complication. Minority populations (Black, Hispanic, Native American) have 2-3× higher amputation rates, driven by disparities in preventive care access, podiatry referral, and vascular surgery availability. Early detection through annual foot exams prevents 50-85% of amputations."
                },
                "order": {
                    "correct": "B",
                    "options": {
                        "A": "CT of the foot for bone detail",
                        "B": "Weight-bearing foot X-ray first (may show cortical erosion, periosteal reaction, or soft tissue gas) → MRI foot for definitive assessment of bone marrow involvement and surgical planning",
                        "C": "Bone scan (nuclear medicine)",
                        "D": "Ultrasound of the foot"
                    },
                    "explanation": "X-ray → MRI Sequence",
                    "text": "Foot X-ray is first-line: it may show cortical destruction, periosteal reaction, or soft tissue gas (concerning for gas gangrene). However, X-ray changes lag 10-14 days behind infection. <strong>MRI is the gold standard</strong> for osteomyelitis — sensitivity >90%, specificity >80%. It shows bone marrow edema (T1 low, T2/STIR high), cortical disruption, soft tissue abscess, and extent of involvement. This is critical for surgical planning: how much bone must be resected? Is there a viable soft tissue envelope for closure?"
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Normal X-ray and MRI — osteomyelitis ruled out",
                        "B": "X-ray: cortical irregularity of the metatarsal head beneath the ulcer. MRI: T1 low signal and T2/STIR high signal in the bone marrow of the metatarsal head with surrounding soft tissue enhancement and possible abscess — confirming osteomyelitis with delineation of extent",
                        "C": "Charcot neuroarthropathy without infection",
                        "D": "Stress fracture only"
                    },
                    "explanation": "Osteomyelitis MRI Pattern",
                    "text": "The MRI findings of osteomyelitis: <strong>T1-weighted</strong>: loss of normal bright fatty marrow signal (replaced by dark edema/infection). <strong>T2/STIR</strong>: high signal in marrow (edema). <strong>Post-contrast</strong>: enhancement of infected bone and surrounding soft tissues, rim-enhancing abscess. The major diagnostic challenge: <strong>Charcot neuroarthropathy</strong> (neuropathic joint destruction) can mimic osteomyelitis on MRI. Clinical correlation (ulcer location, probe-to-bone, inflammatory markers) helps distinguish them."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "IV antibiotics alone for 6 weeks",
                        "B": "Immediate below-knee amputation",
                        "C": "MRI extent guides the surgical vs medical decision: limited osteomyelitis confined to one metatarsal head → possible conservative approach (prolonged antibiotics ± limited resection). Extensive involvement or abscess → surgical debridement/partial amputation. Vascular assessment (ABI, arterial duplex) is essential to determine if healing is possible",
                        "D": "Oral antibiotics and wound care only"
                    },
                    "explanation": "MRI Extent Drives Limb Salvage Planning",
                    "text": "MRI answers the critical surgical question: <strong>can the limb be salvaged?</strong> Limited single-bone involvement with adequate blood supply → conservative treatment (6 weeks IV antibiotics, culture-directed) or limited ray amputation with primary closure. Extensive multi-bone involvement, large abscess, or compromised vasculature → more extensive debridement or amputation level planning. <strong>Vascular assessment is mandatory</strong> — if ABI <0.5 or absent pedal pulses, vascular intervention may be needed before wound healing can occur.",
                    "radiopaedia": "https://radiopaedia.org/articles/osteomyelitis"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Antibiotics and discharge",
                        "B": "Amputation and discharge",
                        "C": "Wound care only",
                        "D": "Bone biopsy for culture-directed antibiotic therapy + surgical debridement guided by MRI extent + vascular assessment (revascularization if needed) + aggressive glycemic control (insulin drip acutely, endocrinology consult) + offloading device + diabetic shoe/orthotic prescription + podiatry and wound care follow-up + diabetic education (daily foot inspection) + address occupational barriers (delivery driver: prolonged standing/walking)"
                    },
                    "explanation": "Comprehensive Limb Salvage Strategy",
                    "text": "The MRI finding drives both acute intervention and the prevention cascade. Bone biopsy with culture is the gold standard for directing antibiotic therapy (empiric coverage: vancomycin + piperacillin-tazobactam pending cultures). The patient's occupation (delivery driver) means prolonged weight-bearing — he needs occupational modification during healing, custom offloading orthotics, and may need to consider disability accommodation. Without addressing the root cause (uncontrolled diabetes + neuropathy + inadequate foot care), reinfection and contralateral involvement are nearly inevitable."
                }
            },
            {
                "modality": "X-ray ± CT",
                "title": "Ankle Fracture — Ottawa Rules",
                "vignette": "A <strong>32-year-old female</strong> recreational soccer player twisted her ankle during a game. She heard a 'pop,' has immediate swelling over the lateral malleolus, and cannot bear weight (unable to take 4 steps). Tender at the posterior edge of the lateral malleolus. No tenderness at the base of the 5th metatarsal or navicular. She is otherwise healthy, on oral contraceptives.",
                "context": {
                    "question": "Before ordering imaging, what clinical decision tool should guide whether this patient needs an X-ray at all?",
                    "correct": "B",
                    "options": {
                        "A": "All ankle injuries need X-rays — clinical assessment cannot rule out fractures",
                        "B": "The Ottawa Ankle Rules are one of the most validated clinical decision tools in medicine: ~100% sensitivity for significant fractures with 30-40% reduction in unnecessary X-rays. This patient meets criteria (inability to bear weight + bony tenderness at posterior lateral malleolus) → X-ray is indicated. If she could bear weight and had no bony tenderness, imaging would be unnecessary",
                        "C": "MRI should be ordered first for all ankle injuries",
                        "D": "Ultrasound is preferred for ankle injuries in athletes"
                    },
                    "explanation": "Ottawa Rules: Epidemiology-Based Imaging Stewardship",
                    "text": "The Ottawa Ankle Rules represent epidemiology-informed imaging stewardship. Before their implementation, nearly all ankle injury patients received X-rays despite <15% having fractures. <strong>Indications for ankle X-ray per Ottawa Rules</strong>: (1) bone tenderness along posterior edge of lateral or medial malleolus (distal 6 cm), OR (2) inability to bear weight immediately and in the ED (4 steps). <strong>Foot series indications</strong>: tenderness at base of 5th metatarsal or navicular bone, OR inability to bear weight. Negative Ottawa Rules have a sensitivity approaching 100% for clinically significant fractures.",
                    "pearl": "Epidemiologic Pearl: The Ottawa Rules reduce ankle X-ray utilization by 30-40% without missing fractures — one of the best examples of evidence-based resource stewardship. However, they are NOT validated in children <18, intoxicated patients, or patients with distracting injuries. Also: in athletes, consider high ankle sprain (syndesmotic injury) even with normal X-rays — this is commonly missed and requires different management."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "AP, lateral, and mortise view ankle X-rays — the standard ankle trauma series",
                        "B": "CT ankle for better fracture characterization",
                        "C": "MRI ankle to evaluate ligaments",
                        "D": "Weight-bearing X-rays only"
                    },
                    "explanation": "Standard Ankle Trauma Series",
                    "text": "The 3-view ankle series (AP, lateral, mortise) is standard for trauma. The <strong>mortise view</strong> (15-20° internal rotation) is critical — it shows the ankle joint space symmetrically and detects talar shift indicating instability. CT is reserved for complex fractures (pilon, trimalleolar) for surgical planning. MRI evaluates ligamentous injury (high ankle sprain, deltoid) when X-rays are negative but instability is suspected clinically."
                },
                "expect": {
                    "correct": "A",
                    "options": {
                        "A": "Transverse fracture of the distal fibula at or below the level of the ankle joint (Weber A or B) — consistent with inversion injury mechanism in a soccer player",
                        "B": "Talar dome fracture",
                        "C": "Maisonneuve fracture (proximal fibula)",
                        "D": "Normal X-rays"
                    },
                    "explanation": "Weber Classification",
                    "text": "Ankle fracture classification uses the <strong>Weber system</strong> based on fibula fracture level relative to the syndesmosis: <strong>Weber A</strong> (below syndesmosis): usually stable, non-operative. <strong>Weber B</strong> (at syndesmosis level): stability depends on deltoid ligament integrity — stress testing or MRI may be needed. <strong>Weber C</strong> (above syndesmosis): unstable, usually requires ORIF. The mechanism (inversion during soccer) typically produces Weber A or B patterns."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "All ankle fractures require surgery",
                        "B": "Cast immobilization for 8 weeks regardless of fracture pattern",
                        "C": "Weber classification + mortise view assessment of the medial clear space determines stability: if medial clear space >4mm (widened) on mortise view → unstable → surgical fixation (ORIF). If stable (non-displaced, normal medial clear space) → non-operative with functional bracing or short leg cast",
                        "D": "Walking boot and return to sport in 2 weeks"
                    },
                    "explanation": "Stability Assessment Drives Treatment",
                    "text": "The key imaging measurement: <strong>medial clear space</strong> on mortise view. Normal is ≤4mm — widening indicates deltoid ligament disruption and ankle instability, regardless of the fracture pattern. Stable fractures (Weber A, non-displaced Weber B with normal medial clear space) → non-operative management (CAM boot or short leg cast, 6 weeks). Unstable fractures → ORIF (plate and screws on the fibula ± syndesmotic screws).",
                    "radiopaedia": "https://radiopaedia.org/articles/ankle-fracture"
                },
                "integrate": {
                    "correct": "B",
                    "options": {
                        "A": "Cast and follow-up in 6 weeks only",
                        "B": "Treatment per stability assessment + VTE prophylaxis consideration (she's on OCPs, which increase DVT risk during immobilization) + structured rehabilitation protocol + return-to-sport criteria (functional testing before clearance) + ankle proprioception training to prevent re-injury",
                        "C": "Immediate surgical fixation regardless of stability",
                        "D": "Observation only"
                    },
                    "explanation": "Context Drives Post-Injury Planning",
                    "text": "Her OCP use creates a compounding VTE risk during immobilization — this is an easily missed interaction. The epidemiological context (young athlete, recreational soccer, desires return to sport) shapes the rehabilitation plan: structured PT, proprioception training (wobble board, single-leg balance), and objective return-to-sport testing before clearance. Recurrent ankle sprains/fractures are common without adequate proprioceptive rehabilitation — the imaging finding drives acute management, but the rehabilitation plan determines long-term outcomes."
                }
            },
            {
                "modality": "X-ray → MRI",
                "title": "Compartment Syndrome",
                "vignette": "A <strong>25-year-old male</strong> arrives 4 hours after a motorcycle accident with a <strong>closed tibial shaft fracture</strong> visible on X-ray. Despite IV morphine, his pain is worsening and now seems disproportionate to the injury. He reports burning pain with passive extension of his toes. The anterior compartment of his leg feels tense and firm on palpation. Peripheral pulses are present.",
                "context": {
                    "question": "What about this clinical scenario makes compartment syndrome an emergent diagnosis that CANNOT be made by imaging?",
                    "correct": "C",
                    "options": {
                        "A": "Compartment syndrome only occurs with open fractures",
                        "B": "Intact pulses rule out compartment syndrome",
                        "C": "This is a CLINICAL diagnosis — not an imaging diagnosis. Compartment syndrome occurs in 1-10% of tibial fractures (the most common location). The hallmark is pain out of proportion to injury + pain with passive stretch. Pulses are present until very late (tissue death occurs at pressures well below those that occlude arteries). Young, muscular males are at highest risk because their fascial compartments are less compliant. Motorcycle accidents cause high-energy fractures with significant soft tissue swelling",
                        "D": "MRI is needed to confirm the diagnosis before intervention"
                    },
                    "explanation": "When Imaging Doesn't Help",
                    "text": "Compartment syndrome is the most important diagnosis in orthopedics where <strong>imaging plays NO role in diagnosis</strong>. It is a clinical diagnosis based on the 6 P's (Pain — disproportionate and with passive stretch is earliest and most reliable, Pressure — tense compartments, Paresthesias, Paralysis, Pallor, Pulselessness — the last two are very late signs indicating irreversible damage). <strong>Risk factors</strong>: tibial fractures (#1), forearm fractures, crush injuries, burns, tight casts/splints, anticoagulation (hematoma), and vigorous exercise (exertional compartment syndrome in athletes/military recruits). <strong>High-energy mechanisms</strong> (motorcycle, MVC, falls from height) carry highest risk.",
                    "pearl": "Epidemiologic Pearl: Missed compartment syndrome is one of the most common causes of malpractice litigation in orthopedics. Obtunded patients (head injury, intoxication) cannot report pain — compartment pressure measurements are essential in any high-risk fracture patient who cannot reliably participate in serial exams. Also: exertional compartment syndrome in military recruits and endurance athletes is a chronic form with different management (elective fasciotomy)."
                },
                "order": {
                    "correct": "D",
                    "options": {
                        "A": "CT angiography to assess vascular compromise",
                        "B": "MRI to evaluate compartment swelling",
                        "C": "Repeat X-rays to assess fracture alignment",
                        "D": "NO IMAGING for compartment syndrome diagnosis — this is clinical. If clinical exam is equivocal, measure compartment pressures (Stryker needle). Absolute pressure >30 mmHg OR delta pressure (diastolic BP minus compartment pressure) <30 mmHg → emergent fasciotomy"
                    },
                    "explanation": "Clinical Diagnosis + Pressure Measurement",
                    "text": "The X-rays already obtained show the fracture. No additional imaging is needed for compartment syndrome — it would only delay definitive treatment. <strong>Compartment pressure measurement</strong> is the objective test when clinical findings are equivocal: a Stryker needle inserted into the compartment measures the pressure. <strong>Fasciotomy threshold</strong>: absolute pressure >30 mmHg or Δ pressure (diastolic BP - compartment pressure) <30 mmHg. In a patient with clear clinical findings (pain out of proportion, pain with passive stretch, tense compartment), you can proceed directly to fasciotomy without pressure measurement."
                },
                "expect": {
                    "correct": "A",
                    "options": {
                        "A": "Not applicable — there is no imaging finding to expect. The diagnosis is made clinically and confirmed by elevated compartment pressures if measured. Delay for imaging leads to irreversible muscle necrosis beginning at 6-8 hours",
                        "B": "MRI showing compartment edema",
                        "C": "CT showing muscle swelling",
                        "D": "Doppler ultrasound showing reduced flow"
                    },
                    "explanation": "Time Is Muscle",
                    "text": "Irreversible muscle necrosis begins after <strong>6-8 hours</strong> of elevated compartment pressure. The timeline from symptom onset to fasciotomy determines outcomes: <6 hours → good outcomes; 6-12 hours → variable muscle viability; >12 hours → extensive necrosis, Volkmann contracture (forearm), or potentially amputation-level damage. There is no imaging test that should be ordered before fasciotomy in a patient with clear clinical compartment syndrome."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "Emergent four-compartment fasciotomy of the leg — this is a surgical emergency with a narrow therapeutic window. All four compartments (anterior, lateral, superficial posterior, deep posterior) must be released even if only one compartment is clinically involved",
                        "B": "Elevate the leg and apply ice",
                        "C": "Increase pain medication and observe",
                        "D": "Apply a compressive dressing"
                    },
                    "explanation": "Fasciotomy Is the Only Treatment",
                    "text": "There is no medical treatment for compartment syndrome. <strong>Four-compartment fasciotomy</strong> through two incisions (anterolateral and posteromedial) is the standard of care. All four compartments must be released because compartments communicate and pressure can redistribute. The fasciotomy wounds are left open (negative pressure wound therapy) and closed or grafted at 48-72 hours when swelling resolves. <strong>Do NOT elevate the leg above the heart</strong> (reduces arterial perfusion pressure to the compartment). Do NOT apply ice or compressive dressings.",
                    "radiopaedia": "https://radiopaedia.org/articles/acute-compartment-syndrome"
                },
                "integrate": {
                    "correct": "C",
                    "options": {
                        "A": "Fasciotomy and fracture fixation simultaneously, discharge in 2 days",
                        "B": "Fasciotomy only, address fracture later",
                        "C": "Emergent four-compartment fasciotomy → staged fracture fixation (external fixator acutely if needed, definitive fixation once soft tissues allow) → wound closure/grafting at 48-72h → monitor for rhabdomyolysis (CK, renal function, aggressive IV hydration) → VTE prophylaxis → rehabilitation for ankle dorsiflexion recovery → document timing thoroughly for medicolegal purposes",
                        "D": "Conservative management with serial pressure measurements"
                    },
                    "explanation": "Fasciotomy + Staged Fracture Care + Rhabdomyolysis Management",
                    "text": "Compartment syndrome with tibial fracture requires staged management. Fasciotomy is immediate; definitive fracture fixation (IM nail) may be done simultaneously or staged depending on soft tissue condition. <strong>Rhabdomyolysis</strong> is an expected complication — crush release sends myoglobin into the bloodstream, risking acute kidney injury. Monitor CK and urine myoglobin; target urine output >200 mL/hour with IV crystalloid. Documentation of timing (when symptoms recognized, when fasciotomy performed) is critical for medicolegal protection."
                }
            },
            {
                "modality": "X-ray → MRI",
                "title": "Scaphoid Fracture — The Occult Fracture",
                "vignette": "A <strong>19-year-old male</strong> college football player fell on an outstretched hand (FOOSH) during practice 2 days ago. He has pain in the anatomical snuffbox, reduced grip strength, and pain with thumb opposition. Initial X-rays taken at the student health center were read as 'normal.' He was given a wrist splint and told to follow up. He is now here because the pain is worse.",
                "context": {
                    "question": "What makes this presentation high-risk for a missed scaphoid fracture despite normal initial X-rays?",
                    "correct": "D",
                    "options": {
                        "A": "Normal X-rays definitively rule out scaphoid fracture",
                        "B": "His age makes fractures unlikely",
                        "C": "FOOSH injuries only cause distal radius fractures",
                        "D": "Scaphoid fractures are the most commonly missed fracture in the hand/wrist. Initial X-rays are NEGATIVE in up to 20% of scaphoid fractures. Anatomical snuffbox tenderness has 90% sensitivity but low specificity — it must be taken seriously. Young male athletes with FOOSH mechanism are the classic demographic. Missing a scaphoid fracture leads to avascular necrosis (the scaphoid has retrograde blood supply) and permanent wrist disability"
                    },
                    "explanation": "Scaphoid Fracture: The Dangerous Negative X-ray",
                    "text": "<strong>Scaphoid fractures</strong> account for 60-70% of carpal fractures and are the #1 missed fracture leading to litigation in orthopedics. The challenge: initial X-rays miss up to 20% because the fracture line is often non-displaced and runs through cancellous bone. The scaphoid's <strong>retrograde blood supply</strong> (entering distally) means proximal pole fractures are at high risk for AVN — and delayed treatment dramatically increases AVN rates. Clinical signs (anatomical snuffbox tenderness, scaphoid tubercle tenderness, pain with axial loading of the thumb) should be treated as a fracture until proven otherwise.",
                    "pearl": "Epidemiologic Pearl: The classic patient is a young male athlete (football, soccer, skateboarding) who falls on an outstretched hand. But elderly women with osteoporosis who fall and present with 'wrist pain' may also have occult scaphoid fractures hidden behind the more obvious distal radius fracture — always examine the snuffbox in any wrist injury. The medicolegal risk is substantial: missed scaphoid → AVN → chronic disability → lawsuit."
                },
                "order": {
                    "correct": "C",
                    "options": {
                        "A": "Repeat standard X-rays — they'll show the fracture now",
                        "B": "CT wrist for bone detail",
                        "C": "MRI wrist — the gold standard for occult scaphoid fracture (sensitivity and specificity >95%). If MRI is unavailable, CT is an acceptable alternative. Some protocols use repeat X-rays at 10-14 days, but MRI provides immediate definitive diagnosis and avoids the 2-week diagnostic limbo",
                        "D": "Bone scan"
                    },
                    "explanation": "MRI for Occult Scaphoid Fracture",
                    "text": "MRI is the gold standard: it detects bone marrow edema from occult fractures that X-rays miss, identifies fracture line and displacement, assesses vascularity of the proximal pole (critical for AVN risk), and evaluates ligamentous injury (scapholunate ligament). <strong>Early MRI</strong> (within 1 week of injury) is more cost-effective than the traditional 'thumb spica cast for 2 weeks and repeat X-ray' approach because it avoids unnecessary immobilization in the ~80% of patients with snuffbox tenderness who DON'T have a fracture."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Normal MRI — this was just a sprain",
                        "B": "MRI shows bone marrow edema and a non-displaced fracture line through the scaphoid waist, with intact proximal pole vascularity — confirming the clinically suspected occult scaphoid fracture",
                        "C": "Scapholunate ligament tear only",
                        "D": "Distal radius bone bruise"
                    },
                    "explanation": "Scaphoid Fracture MRI Findings",
                    "text": "MRI findings: T1 low signal and T2/STIR high signal in the scaphoid (bone marrow edema) with a visible fracture line. Classification by location: <strong>waist</strong> (70% — most common), <strong>proximal pole</strong> (20% — highest AVN risk), <strong>distal pole</strong> (10% — best prognosis). Proximal pole vascularity assessment (gadolinium enhancement or T1 signal) determines AVN risk and influences treatment aggressiveness."
                },
                "interpret": {
                    "correct": "B",
                    "options": {
                        "A": "Short arm cast for 4 weeks",
                        "B": "Non-displaced waist fracture with intact vascularity → thumb spica cast for 8-12 weeks with serial imaging to confirm healing. If displaced (>1mm step-off or gap), proximal pole, or delayed presentation → surgical fixation with headless compression screw (Herbert screw) is preferred to reduce AVN risk and accelerate return to function",
                        "C": "Buddy taping and return to play",
                        "D": "Surgical fixation for all scaphoid fractures"
                    },
                    "explanation": "Fracture Location and Displacement Guide Treatment",
                    "text": "Treatment depends on MRI findings: <strong>Non-displaced waist fracture, good vascularity</strong>: thumb spica cast 8-12 weeks (union rate >90%). <strong>Displaced (>1mm), proximal pole, or non-union</strong>: percutaneous or open screw fixation. Athletes increasingly opt for surgical fixation even of non-displaced fractures to accelerate return to sport (cast immobilization of 8-12 weeks vs return to protected play at 6-8 weeks post-fixation). Serial X-rays or CT at 6-8 weeks confirm union.",
                    "radiopaedia": "https://radiopaedia.org/articles/scaphoid-fracture"
                },
                "integrate": {
                    "correct": "A",
                    "options": {
                        "A": "Treatment per fracture characteristics + discussion with patient about conservative vs surgical options (as a college athlete, early return to play may favor surgical fixation) + serial imaging to confirm union + rehabilitation for wrist ROM and grip strength + gradual return to sport with protective splinting + counsel about re-injury risk during healing period",
                        "B": "Cast and return in 3 months",
                        "C": "Surgical fixation and immediate return to play",
                        "D": "Repeat X-ray in 2 weeks only"
                    },
                    "explanation": "Patient-Centered Shared Decision Making",
                    "text": "The imaging confirmed what the clinical exam strongly suggested. The management plan should incorporate the patient's context: as a college athlete, the impact of 8-12 weeks in a thumb spica cast (missing the season) vs surgical fixation (earlier return, ~6-8 weeks to protected play) is a meaningful shared decision. Long-term follow-up to confirm union is critical — non-unions are frequently asymptomatic initially but progress to scaphoid non-union advanced collapse (SNAC) wrist arthritis over years."
                }
            },
            {
                "modality": "X-ray → MRI",
                "title": "Low Back Pain with Red Flags — Cauda Equina Syndrome",
                "vignette": "A <strong>45-year-old male</strong> warehouse worker presents with 3 days of worsening bilateral leg pain and numbness. This morning he noticed difficulty urinating and perineal numbness ('saddle anesthesia'). He has been lifting heavy objects daily for 20 years. On exam: bilateral L5-S1 dermatomal sensory loss, reduced ankle reflexes bilaterally, decreased rectal tone. Vitals normal.",
                "context": {
                    "question": "What red flags in this presentation demand emergent imaging rather than conservative low back pain management?",
                    "correct": "C",
                    "options": {
                        "A": "All low back pain requires MRI",
                        "B": "His occupation suggests chronic strain — conservative management is appropriate",
                        "C": "Cauda equina syndrome (CES) red flags are present: bilateral radiculopathy + saddle anesthesia + urinary retention + decreased rectal tone. This is a SURGICAL EMERGENCY — delay in decompression beyond 48 hours of symptom onset leads to permanent bowel/bladder dysfunction. His occupational history (heavy lifting × 20 years) is the chronic risk factor, but the acute presentation demands emergent MRI, not outpatient management",
                        "D": "Bladder symptoms are common with back pain and not concerning"
                    },
                    "explanation": "CES Red Flags Are Non-Negotiable",
                    "text": "Low back pain affects 80% of adults — the challenge is identifying the <1% with surgical emergencies. <strong>Cauda equina syndrome red flags</strong>: bilateral leg symptoms, saddle anesthesia, urinary retention or incontinence, fecal incontinence, progressive neurological deficit. <strong>Occupational risk</strong>: heavy manual labor (warehouse, construction, nursing, farming) creates cumulative disc degeneration, making large disc herniations more likely. CES most commonly results from massive L4-L5 or L5-S1 disc herniation compressing the cauda equina. <strong>The 48-hour rule</strong>: surgical decompression within 48 hours of onset of urinary symptoms gives the best chance of recovery.",
                    "pearl": "Epidemiologic Pearl: CES is rare (~1 in 33,000-100,000 per year) but devastating when missed. It is one of the most common causes of malpractice claims in spine care. Other causes beyond disc herniation: epidural abscess (IVDU, immunosuppressed, recent spinal procedure), spinal metastases (history of cancer), epidural hematoma (anticoagulation), and severe spinal stenosis. Always screen for cancer history, IV drug use, and immunosuppression in any patient with progressive neurological deficits."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Emergent MRI lumbar spine — the definitive imaging modality for cauda equina syndrome, disc herniation, epidural abscess, and spinal metastases",
                        "B": "X-rays of the lumbar spine first",
                        "C": "CT lumbar spine",
                        "D": "CT myelogram"
                    },
                    "explanation": "Emergent MRI — No Delay",
                    "text": "MRI is the gold standard for CES: it shows disc herniation compressing the cauda equina, epidural abscess, metastatic disease, or epidural hematoma — all of which present similarly but require different treatments. <strong>This is an after-hours MRI indication</strong> — CES warrants emergent imaging even at 3 AM. If MRI is contraindicated (pacemaker, metallic implant) or unavailable, CT myelogram is the alternative. X-rays are useless for CES. CT without myelogram misses most soft tissue causes."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Normal MRI — this is just chronic back pain",
                        "B": "Large central L4-L5 or L5-S1 disc herniation causing severe compression and displacement of the cauda equina nerve roots within the thecal sac, possibly with near-complete effacement of the CSF signal",
                        "C": "Spinal epidural abscess",
                        "D": "Metastatic vertebral disease with cord compression"
                    },
                    "explanation": "MRI Confirms CES Etiology",
                    "text": "In a previously healthy warehouse worker without cancer history, IVDU, or immunosuppression, massive disc herniation is the most likely cause. MRI will show: large disc extrusion (often sequestered fragment) filling the spinal canal, compression and displacement of cauda equina roots, and effacement of CSF signal on T2-weighted images. The MRI also rules out the surgical mimics: epidural abscess (rim-enhancing collection with restricted diffusion), metastases (vertebral body replacement with epidural extension), and hematoma."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "Emergent surgical consultation for decompressive laminectomy/discectomy — confirmed CES from disc herniation requires surgery within 24-48 hours of bladder symptom onset for best neurological outcomes",
                        "B": "Conservative management with epidural steroid injection",
                        "C": "Urgent outpatient neurosurgery referral within 2 weeks",
                        "D": "Physical therapy and NSAIDs"
                    },
                    "explanation": "Emergent Decompression",
                    "text": "CES from disc herniation is a surgical emergency. <strong>Decompressive surgery (laminectomy + discectomy)</strong> within 48 hours of urinary symptom onset is associated with significantly better bladder and bowel recovery. Beyond 48 hours, recovery is variable and often incomplete. <strong>Incomplete CES</strong> (some urinary function preserved) has better outcomes than <strong>complete CES</strong> (urinary retention with overflow incontinence). The MRI confirms the cause and surgical level — the surgeon operates at the level shown on MRI.",
                    "radiopaedia": "https://radiopaedia.org/articles/cauda-equina-syndrome"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Surgery and discharge to home",
                        "B": "Surgery and return to heavy lifting in 6 weeks",
                        "C": "Surgery and permanent disability",
                        "D": "Emergent decompressive surgery → post-op monitoring of bladder function (may need intermittent catheterization initially) → bowel regimen → rehabilitation → occupational assessment (may need permanent lifting restrictions — workers' compensation evaluation) → long-term follow-up for neurological recovery (bladder function may take 6-12 months to fully recover) → ergonomic workplace modifications → spine health education"
                    },
                    "explanation": "Surgical Decompression + Occupational Rehabilitation",
                    "text": "The imaging confirmed the surgical emergency. Post-operatively, bladder function recovery is the primary concern — it may take months. The patient's occupation (heavy warehouse lifting) likely contributed to cumulative disc degeneration, and he may need permanent lifting restrictions, which triggers workers' compensation evaluation and potential job retraining. The imaging finding (massive disc herniation causing CES) triggered emergent surgery AND a cascade of occupational, rehabilitation, and long-term follow-up needs."
                }
            }
        ],
        "cross_links": [
            ("🫁 Chest Imaging", "raddx-chest.html", "Pneumonia, PE, pneumothorax"),
            ("❤️ Cardiac Imaging", "raddx-cardiac.html", "ECG, echo, angiography"),
            ("🧠 Neuroimaging", "raddx-neuro.html", "CT/MRI brain, stroke"),
            ("← RadDx Hub", "raddx-hub.html", "All body systems"),
        ],
        "references": [
            ("Hip Fracture — StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK557514/"),
            ("AAOS Hip Fracture Clinical Practice Guideline 2021", "https://doi.org/10.5435/JAAOSGlobal-D-21-00023"),
            ("Ottawa Ankle Rules — StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK554510/"),
            ("Compartment Syndrome — StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK448124/"),
            ("NASS Cauda Equina Guidelines", "https://doi.org/10.1016/j.spinee.2020.02.013"),
            ("Radiopaedia.org", "https://radiopaedia.org"),
        ]
    },
    "renal-gu": {
        "icon": "🫘",
        "title": "Renal & Genitourinary Imaging",
        "badge": "UROLOGY / NEPHROLOGY",
        "scenarios": [
            {
                "modality": "CT KUB (Non-Contrast)",
                "title": "Nephrolithiasis — Acute Renal Colic",
                "vignette": "A <strong>38-year-old male</strong> presents with sudden-onset left flank pain radiating to his groin, rated 10/10. He is writhing on the stretcher, unable to find a comfortable position. Nausea and vomiting. He drinks minimal water, consumes high-protein meals, and recently started a creatine supplement for bodybuilding. Vitals: HR 104, BP 148/92, Temp 37.1°C. UA: 50+ RBCs, no WBCs, no bacteria.",
                "context": {
                    "question": "What dietary and lifestyle exposure factors create this patient's stone risk profile?",
                    "correct": "C",
                    "options": {
                        "A": "Kidney stones are random events with no modifiable risk factors",
                        "B": "Only calcium intake affects stone risk",
                        "C": "Multiple compounding risk factors: inadequate hydration + high-protein diet (increases uric acid and calcium excretion) + creatine supplementation (metabolized to creatinine, increases renal load) + male sex (3:1 M:F ratio). The 'stone belt' of the southeastern US has the highest nephrolithiasis rates, driven by hot climate + dehydration + dietary patterns. Recurrence rate is 50% within 5-10 years without lifestyle modification",
                        "D": "Creatine supplementation has no renal effects"
                    },
                    "explanation": "Kidney Stone Epidemiology",
                    "text": "Nephrolithiasis affects ~10% of the US population, with dramatic geographic variation. The <strong>'stone belt'</strong> (southeastern US) has the highest rates — driven by heat, dehydration, and dietary factors. <strong>Stone composition</strong> varies by demographic: calcium oxalate (80% — most common), uric acid (10% — associated with gout, metabolic syndrome, acidic urine), struvite (5-10% — associated with urinary infections, more common in women), cystine (1-2% — genetic, autosomal recessive). <strong>Modifiable risk factors</strong>: low fluid intake (#1), high sodium diet (increases calcium excretion), high animal protein (increases uric acid), obesity, diabetes, and supplements (vitamin C >1000mg/day, creatine).",
                    "pearl": "Epidemiologic Pearl: Climate change is predicted to increase kidney stone incidence by 30% by 2050 due to rising temperatures and dehydration. Also: patients on topiramate (for migraines or epilepsy) have dramatically increased stone risk due to carbonic anhydrase inhibition — always ask about medications. Bariatric surgery patients (gastric bypass) have 2× stone risk from hyperoxaluria."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Non-contrast CT abdomen/pelvis (CT KUB) — gold standard for nephrolithiasis (>95% sensitivity for stones of all compositions)",
                        "B": "Renal ultrasound",
                        "C": "KUB X-ray (flat plate abdomen)",
                        "D": "IVP (intravenous pyelogram)"
                    },
                    "explanation": "Non-Contrast CT Is Gold Standard",
                    "text": "Non-contrast CT KUB is the gold standard: detects stones of all compositions (including uric acid and cystine, which are radiolucent on X-ray), shows stone size and location, identifies hydronephrosis, and reveals alternative diagnoses (AAA, appendicitis). <strong>No contrast needed</strong> — stones are intrinsically hyperdense. Renal US is first-line in pregnancy and pediatrics (no radiation). KUB X-ray misses 20-30% of stones (radiolucent types). IVP is obsolete."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Normal CT — must be musculoskeletal pain",
                        "B": "Hyperdense calculus in the left ureterovesical junction (UVJ) — the most common site of obstruction — with proximal hydroureter and mild left hydronephrosis. Perinephric stranding indicates acute obstruction",
                        "C": "Bilateral renal masses",
                        "D": "Aortic aneurysm"
                    },
                    "explanation": "Stone Location Predicts Passage",
                    "text": "Stones lodge at three narrow points: <strong>UPJ</strong> (ureteropelvic junction), <strong>pelvic brim</strong> (where ureter crosses iliac vessels), and <strong>UVJ</strong> (ureterovesical junction — most common). CT shows: hyperdense stone, proximal ureteral dilation, hydronephrosis, perinephric stranding (fat inflammation indicating acute obstruction). <strong>Size predicts passage</strong>: <5mm → 90% spontaneous passage; 5-10mm → 50%; >10mm → unlikely to pass → intervention needed."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "All stones require surgical intervention",
                        "B": "Observe without pain management",
                        "C": "Stone size and location on CT drive the treatment algorithm: <5mm at UVJ → medical expulsive therapy (tamsulosin + NSAIDs + hydration) with high likelihood of passage. >10mm or proximal → urology consultation for intervention (ureteroscopy, ESWL, or PCNL depending on size and location). Check for infection (fever, WBC elevation) — infected obstructing stone is a urological emergency",
                        "D": "ESWL for all stones regardless of size or location"
                    },
                    "explanation": "CT Size Guides Management",
                    "text": "The CT finding directly determines management: <strong>Small stone (<5mm) at UVJ</strong>: medical expulsive therapy (alpha-blocker tamsulosin relaxes ureteral smooth muscle, increases passage rates). <strong>Large stone (>10mm)</strong>: ureteroscopy with laser lithotripsy (most common intervention), ESWL (for renal stones <2cm), or PCNL (for large renal stones >2cm). <strong>EMERGENCY</strong>: obstructing stone + fever/infection = sepsis risk → emergent ureteral stent or percutaneous nephrostomy to decompress, THEN treat the stone.",
                    "radiopaedia": "https://radiopaedia.org/articles/nephrolithiasis"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Pass the stone and no follow-up needed",
                        "B": "Surgery and discharge",
                        "C": "Fluid advice only",
                        "D": "Acute management per stone size + strain urine to capture stone for composition analysis + 24-hour urine metabolic workup (after acute episode resolves) to guide targeted prevention + dietary counseling (increase fluid to >2.5L/day, reduce sodium, moderate animal protein) + review supplements (consider stopping creatine) + metabolic evaluation (PTH, calcium, uric acid) + urology follow-up for recurrence prevention plan"
                    },
                    "explanation": "Stone Analysis + Metabolic Prevention",
                    "text": "Acute management is only half the job. Recurrence prevention requires: (1) stone composition analysis (captured stone or CT density estimation), (2) 24-hour urine metabolic panel (calcium, oxalate, citrate, uric acid, sodium, volume), (3) targeted dietary and medical therapy based on results. For this patient: increase fluid intake dramatically, reduce animal protein, stop creatine, and consider potassium citrate supplementation if urine citrate is low. The imaging finding triggered acute treatment, but the lifestyle modification prevents recurrence."
                }
            },
            {
                "modality": "Ultrasound → CT/MRI",
                "title": "Renal Mass — Incidental Finding",
                "vignette": "A <strong>62-year-old male</strong> smoker with hypertension undergoes abdominal ultrasound for abnormal liver enzymes. An <strong>incidental 3.5 cm solid mass</strong> is found in the right kidney. He is asymptomatic. No hematuria. His father died of kidney cancer at age 68. He has worked in a chemical manufacturing plant for 30 years.",
                "context": {
                    "question": "What epidemiological and occupational factors significantly increase this patient's risk for renal cell carcinoma?",
                    "correct": "D",
                    "options": {
                        "A": "Incidental renal masses are almost always benign",
                        "B": "Smoking only affects lung cancer risk",
                        "C": "Family history of kidney cancer is not clinically relevant",
                        "D": "Multiple risk factors converge: smoking (2× RCC risk), first-degree relative with RCC (2-4× risk, screen for VHL if family clustering), occupational chemical exposure (trichloroethylene, cadmium, asbestos — all associated with RCC and common in chemical manufacturing), hypertension (independently associated with RCC), obesity, and male sex (2:1 M:F). A solid enhancing renal mass >1cm in this patient is RCC until proven otherwise"
                    },
                    "explanation": "Renal Cell Carcinoma Epidemiology",
                    "text": "RCC is the most common renal malignancy (~90% of kidney cancers). Incidental detection has increased with widespread imaging — >50% of RCCs are now found incidentally, leading to earlier-stage diagnosis. <strong>Risk factors</strong>: smoking (most important modifiable, 2× risk), obesity, hypertension, family history (VHL syndrome — autosomal dominant with RCC, hemangioblastomas, pheochromocytomas), occupational exposures (trichloroethylene is IARC Group 1 carcinogen for RCC), and acquired cystic kidney disease in dialysis patients. <strong>The classic triad</strong> (flank pain, hematuria, palpable mass) occurs in only 10% — most are found incidentally.",
                    "pearl": "Epidemiologic Pearl: Occupational exposure to trichloroethylene (TCE) — used as a degreaser in chemical and manufacturing plants — is a proven cause of RCC. Workers with prolonged exposure have 2-4× increased risk. This is important for occupational health documentation and potential workers' compensation claims. Also: dialysis patients have 3-6× increased RCC risk from acquired cystic disease — screening with annual US is recommended."
                },
                "order": {
                    "correct": "B",
                    "options": {
                        "A": "CT-guided biopsy of the mass",
                        "B": "CT abdomen/pelvis with and without IV contrast (or MRI if contrast-contraindicated) — multiphasic renal protocol to characterize the mass and stage the disease",
                        "C": "Repeat ultrasound in 6 months",
                        "D": "PET scan"
                    },
                    "explanation": "Renal Mass Protocol CT/MRI",
                    "text": "A solid renal mass on US requires characterization with <strong>multiphasic CT</strong> (non-contrast, nephrographic, and excretory phases) or MRI. Enhancement >20 HU after contrast is the key finding that distinguishes solid malignant masses from benign cysts. <strong>Bosniak classification</strong> for cystic lesions: I-II (benign) → no follow-up; IIF → surveillance; III-IV → surgical consideration. Biopsy is NOT first-line for renal masses — imaging characteristics are usually sufficient for surgical planning. PET-CT has limited utility for primary RCC (FDG avidity is variable)."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Simple cyst with no enhancement (Bosniak I)",
                        "B": "Fat-containing mass suggesting angiomyolipoma",
                        "C": "3.5 cm solid, enhancing mass (>20 HU enhancement) in the right kidney without extension beyond Gerota's fascia, no renal vein or IVC thrombus, no lymphadenopathy — consistent with T1a RCC (confined to kidney, <4cm)",
                        "D": "Bilateral renal masses suggesting metastatic disease"
                    },
                    "explanation": "Enhancement = Likely Malignant",
                    "text": "Solid renal masses that enhance >20 HU are malignant in ~85-90% of cases. CT staging: <strong>T1a</strong> (≤4cm, confined to kidney) → nephron-sparing surgery (partial nephrectomy) is standard. <strong>T1b</strong> (4-7cm) → partial or radical nephrectomy. <strong>Renal vein/IVC thrombus</strong> → radical nephrectomy ± thrombectomy. CT also evaluates for pulmonary metastases (lungs are #1 metastatic site for RCC). The 3.5cm T1a stage has >90% 5-year survival with appropriate treatment."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "T1a enhancing solid mass in a high-risk patient → urology referral for partial nephrectomy (nephron-sparing surgery is standard for T1a). Active surveillance may be considered in elderly or comorbid patients but this 62-year-old with multiple risk factors warrants definitive surgical management",
                        "B": "Observation with annual CT",
                        "C": "Systemic chemotherapy",
                        "D": "Radiation therapy"
                    },
                    "explanation": "T1a → Partial Nephrectomy",
                    "text": "For T1a RCC, <strong>partial nephrectomy</strong> (robotic or open) is the standard of care — it removes the tumor while preserving maximal renal function. This is especially important in patients with risk factors for CKD (hypertension, diabetes). Radical nephrectomy (removing the entire kidney) is reserved for larger tumors or unfavorable anatomy. <strong>Active surveillance</strong> (serial imaging) is appropriate for small renal masses (<2cm) in elderly or comorbid patients where surgical risk is high. RCC is resistant to conventional chemotherapy; systemic treatment uses targeted therapy (TKIs) and immunotherapy for advanced disease.",
                    "radiopaedia": "https://radiopaedia.org/articles/renal-cell-carcinoma"
                },
                "integrate": {
                    "correct": "C",
                    "options": {
                        "A": "Surgery and no follow-up",
                        "B": "Surgery + CT every 5 years",
                        "C": "Partial nephrectomy → pathology review (clear cell vs papillary vs chromophobe — prognosis differs) → post-operative surveillance CT per AUA guidelines (abdomen ± chest at 3-12 month intervals for 5 years) → smoking cessation (reduces recurrence risk and improves surgical recovery) → occupational health evaluation for TCE exposure documentation → genetic counseling if family history suggestive of VHL → renal function monitoring (protect remaining nephrons)",
                        "D": "Radical nephrectomy + immunotherapy"
                    },
                    "explanation": "Surgery + Surveillance + Occupational Documentation",
                    "text": "The incidental imaging finding triggered a cancer diagnosis with excellent prognosis (T1a >90% 5-year survival). The comprehensive plan addresses: definitive treatment (partial nephrectomy), pathological subtyping (guides surveillance intensity and prognosis), risk factor modification (smoking cessation is the single most impactful intervention), occupational exposure documentation (TCE exposure may qualify for workers' compensation), genetic evaluation (father's RCC death at 68 raises VHL concern), and long-term renal function preservation."
                }
            },
            {
                "modality": "Ultrasound → Voiding Cystourethrogram",
                "title": "Pediatric UTI — When to Image",
                "vignette": "An <strong>8-month-old boy</strong> presents with fever (39.2°C) for 2 days and irritability. No URI symptoms, no diarrhea. Parents report foul-smelling urine. He is uncircumcised. Catheterized UA shows pyuria and bacteria; culture pending. This is his <strong>first febrile UTI</strong>.",
                "context": {
                    "question": "What epidemiological factors determine whether this infant needs imaging after his UTI?",
                    "correct": "D",
                    "options": {
                        "A": "All pediatric UTIs require imaging",
                        "B": "No imaging is needed for first UTI at any age",
                        "C": "Only girls need post-UTI imaging",
                        "D": "Age <2 years + febrile UTI = imaging is recommended by AAP guidelines. Uncircumcised males have 4-8× higher UTI risk in the first year of life. Febrile UTI in infants suggests upper tract involvement (pyelonephritis) and is the clinical scenario most associated with underlying vesicoureteral reflux (VUR) or renal anomalies. The goal of imaging is to identify structural abnormalities that increase renal scarring risk"
                    },
                    "explanation": "Pediatric UTI Imaging Guidelines",
                    "text": "AAP guidelines for febrile UTI in children 2-24 months: <strong>renal/bladder ultrasound</strong> is recommended for ALL first febrile UTIs in this age group. <strong>VCUG (voiding cystourethrogram)</strong> is recommended if US is abnormal OR if the UTI is atypical (poor response to antibiotics, unusual organism, abnormal voiding) OR if it is a recurrent febrile UTI. <strong>Epidemiology of pediatric UTI</strong>: uncircumcised males have the highest risk in the first year; after age 1, girls predominate (8:1 F:M). <strong>VUR</strong> is found in 25-40% of children with febrile UTI — grading determines management (observation vs surgical correction).",
                    "pearl": "Epidemiologic Pearl: The circumcision debate has clear epidemiological data regarding UTI: uncircumcised males have 4-8× higher UTI risk in the first year, translating to an NNT of ~100 circumcisions to prevent 1 UTI. This should be discussed factually with families, respecting cultural and personal preferences. Also: posterior urethral valves (PUV) are the most common cause of lower urinary tract obstruction in males and are often diagnosed during post-UTI imaging — early detection prevents progressive renal damage."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Renal and bladder ultrasound first (during or shortly after treatment) → VCUG only if US abnormal, UTI atypical, or recurrent febrile UTI",
                        "B": "CT abdomen/pelvis",
                        "C": "VCUG immediately for all first UTIs",
                        "D": "DMSA renal scan"
                    },
                    "explanation": "Stepwise Pediatric Imaging",
                    "text": "The AAP stepped approach minimizes radiation exposure while identifying the children who need further evaluation. <strong>Renal/bladder US</strong>: detects hydronephrosis (suggesting VUR or obstruction), renal size asymmetry, structural anomalies, bladder wall thickening, and post-void residual. <strong>VCUG</strong>: the gold standard for VUR diagnosis and grading — uses fluoroscopy with bladder catheterization (radiation exposure), so reserved for selected cases. <strong>DMSA scan</strong> (dimercaptosuccinic acid): detects renal cortical scarring — used to assess renal damage after recurrent UTIs or high-grade VUR."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Normal ultrasound — no further imaging needed",
                        "B": "Bilateral hydronephrosis with thickened bladder wall (posterior urethral valves)",
                        "C": "Possible findings: mild to moderate left hydronephrosis suggesting vesicoureteral reflux, or normal US (which does NOT rule out VUR — low-grade reflux is often not visible on US). The US also evaluates renal size, cortical thickness, and structural anomalies",
                        "D": "Renal mass"
                    },
                    "explanation": "US Findings Guide Next Steps",
                    "text": "Important caveat: <strong>normal US does NOT exclude VUR</strong> — US detects hydronephrosis but misses low-grade reflux. If US shows hydronephrosis → VCUG is indicated to grade the VUR (I-V). If US is normal AND the UTI responded typically → observation with monitoring for recurrence (VCUG at second febrile UTI). If US shows bilateral hydronephrosis with thickened, trabeculated bladder wall in a male infant → suspect posterior urethral valves → emergent VCUG and pediatric urology consultation."
                },
                "interpret": {
                    "correct": "B",
                    "options": {
                        "A": "VUR always requires surgical correction",
                        "B": "If VCUG shows VUR, grade determines management: Grade I-III → observation with antibiotic prophylaxis + monitoring (most resolve spontaneously by age 5). Grade IV-V → urology evaluation for endoscopic injection (Deflux) or ureteral reimplantation. The goal is preventing recurrent pyelonephritis and renal scarring",
                        "C": "All children with VUR need lifetime monitoring",
                        "D": "Imaging findings don't change UTI management"
                    },
                    "explanation": "VUR Grading → Management",
                    "text": "VUR management has shifted toward less aggressive intervention. <strong>Low-grade (I-III)</strong>: ~80% spontaneously resolve by age 5. Continuous antibiotic prophylaxis (trimethoprim-sulfamethoxazole or nitrofurantoin) reduces recurrence while awaiting resolution. <strong>High-grade (IV-V)</strong>: lower spontaneous resolution rates, higher renal scarring risk → surgical options (endoscopic injection of bulking agent or open ureteral reimplantation). The RIVUR trial showed prophylactic antibiotics reduce UTI recurrence by 50% in children with VUR.",
                    "radiopaedia": "https://radiopaedia.org/articles/vesicoureteral-reflux"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Treat UTI and no follow-up",
                        "B": "Prophylactic antibiotics indefinitely",
                        "C": "Surgery for all VUR",
                        "D": "Complete antibiotic course for acute UTI (7-14 days IV/oral based on severity) → renal US → VCUG if indicated → management per VUR grade → antibiotic prophylaxis if VUR present → parent education (signs of UTI, importance of completing antibiotics, proper hygiene) → follow-up US/VCUG to monitor VUR resolution → DMSA scan if recurrent UTIs to assess for renal scarring → circumcision discussion (if family interested, evidence supports reduced UTI recurrence in males with VUR)"
                    },
                    "explanation": "Stepwise Evaluation + Family Education",
                    "text": "The imaging cascade for pediatric febrile UTI is systematic: US for anatomy → VCUG for reflux if indicated → DMSA for scarring if recurrent. Each step determines whether the next is needed. Parent education is critical: recognizing UTI symptoms in pre-verbal children (unexplained fever, irritability, poor feeding, foul-smelling urine), understanding antibiotic prophylaxis adherence, and monitoring for recurrence. The imaging findings guide both the medical plan and the anticipatory guidance for the family."
                }
            },
            {
                "modality": "Ultrasound → Color Doppler",
                "title": "Testicular Torsion — Time-Critical Diagnosis",
                "vignette": "A <strong>14-year-old boy</strong> is brought in at 2 AM by his parents with sudden-onset severe left scrotal pain that started 3 hours ago. He was woken from sleep by the pain. Nausea and vomiting. The left testis is high-riding, horizontally oriented, with an absent cremasteric reflex. The scrotum is exquisitely tender. He denies trauma or sexual activity.",
                "context": {
                    "question": "What epidemiological features make testicular torsion the most likely and most dangerous diagnosis?",
                    "correct": "C",
                    "options": {
                        "A": "Testicular torsion is equally common at all ages",
                        "B": "The absent cremasteric reflex is nonspecific",
                        "C": "Testicular torsion has a bimodal age distribution: neonates and adolescents (peak 12-18 years). The classic presentation (sudden onset, often nocturnal/early morning, high-riding horizontal testis, absent cremasteric reflex) is nearly pathognomonic. Absent cremasteric reflex has 99% sensitivity for torsion in prepubertal boys. The 6-hour salvage window is critical — testicular salvage drops from >90% at <6 hours to <10% at >24 hours",
                        "D": "Epididymitis is more likely in adolescents"
                    },
                    "explanation": "Testicular Torsion Epidemiology and Time Sensitivity",
                    "text": "Testicular torsion is the most time-sensitive urological emergency in males. <strong>Peak incidence</strong>: 12-18 years (puberty growth increases testicular mass and mobility). <strong>Bell-clapper deformity</strong> (abnormal horizontal testicular lie allowing increased mobility) is present bilaterally in most torsion patients — this is why the contralateral testis is often fixed during surgery (orchidopexy). <strong>Salvage rates by time</strong>: <6h = >90%, 6-12h = ~50%, >12h = <10%. <strong>Differential</strong>: torsion of the appendix testis (younger boys, focal tenderness at upper pole, 'blue dot sign'), epididymitis (older adolescents, gradual onset, often with pyuria), hernia, trauma.",
                    "pearl": "Epidemiologic Pearl: In neonates, torsion is typically extravaginal (the entire tunica vaginalis twists) and often occurs prenatally — the testis is usually nonviable at presentation. In adolescents, it's intravaginal (within the tunica). Torsion is the most common cause of malpractice litigation in pediatric urology — missed torsion with testicular loss generates substantial legal liability. The key teaching point: if clinical suspicion is high, go to surgery — do not delay for imaging."
                },
                "order": {
                    "correct": "D",
                    "options": {
                        "A": "CT abdomen/pelvis to evaluate the scrotum",
                        "B": "MRI for better soft tissue evaluation",
                        "C": "Urinalysis and urine culture first",
                        "D": "If clinical presentation is classic for torsion (this patient), the correct answer is IMMEDIATE surgical exploration — do NOT delay for imaging. If the presentation is equivocal, color Doppler ultrasound can assess testicular blood flow (absent/reduced flow = torsion), but imaging should not delay surgery when clinical suspicion is high"
                    },
                    "explanation": "Clinical Diagnosis → OR (Imaging May Delay)",
                    "text": "This is one of the most important teaching points in urology: <strong>a classic torsion presentation should go to the OR, not to ultrasound</strong>. Ultrasound takes time (calling the tech, performing the scan, interpreting), and every minute of delay reduces salvage probability. <strong>When US is appropriate</strong>: equivocal presentation (gradual onset, normal cremasteric reflex, tenderness localized to epididymis). <strong>US findings in torsion</strong>: absent or reduced intratesticular blood flow on color Doppler, enlarged heterogeneous testis, twisted spermatic cord ('whirlpool sign')."
                },
                "expect": {
                    "correct": "A",
                    "options": {
                        "A": "In this classic presentation, you should expect to be in the operating room — not looking at imaging. If US were obtained, it would show absent intratesticular blood flow on color Doppler, an enlarged hypoechoic testis, and the whirlpool sign of the twisted cord",
                        "B": "Increased blood flow suggesting epididymitis",
                        "C": "Normal bilateral blood flow",
                        "D": "Hydrocele only"
                    },
                    "explanation": "Imaging Findings (If Obtained)",
                    "text": "If US is obtained in equivocal cases: <strong>torsion</strong> = absent/reduced intratesticular flow, enlarged heterogeneous testis, whirlpool sign, reactive hydrocele. <strong>Epididymitis</strong> = INCREASED flow to the epididymis and testis (hyperemia), enlarged epididymis, normal testicular echotexture. <strong>Torsion of appendix testis</strong> = normal testicular flow, small avascular mass at the upper pole. The key limitation: early torsion (<360° twist) may show reduced but not absent flow — clinical judgment must override imaging."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "Emergent bilateral scrotal exploration: manual detorsion can be attempted (lateral to medial — 'open the book') while preparing for surgery, but definitive treatment is surgical detorsion + orchidopexy (fixation) of BOTH testes (the bell-clapper deformity is bilateral)",
                        "B": "Antibiotics for presumed epididymitis",
                        "C": "Ice and elevation with urology follow-up in the morning",
                        "D": "Repeat ultrasound in 4 hours"
                    },
                    "explanation": "Surgical Emergency — Bilateral Orchidopexy",
                    "text": "Surgical exploration confirms torsion, allows detorsion, and assesses viability. If the testis is viable → detorsion + orchidopexy (suture fixation to prevent recurrence). If nonviable (black, no bleeding after detorsion) → orchiectomy. <strong>The contralateral testis must be fixed</strong> (bilateral orchidopexy) because the bell-clapper deformity is bilateral in most patients — contralateral torsion risk is real. Manual detorsion (rotating the testis laterally, 'opening a book') can be attempted in the ED as a temporizing measure but does NOT replace surgery.",
                    "radiopaedia": "https://radiopaedia.org/articles/testicular-torsion"
                },
                "integrate": {
                    "correct": "C",
                    "options": {
                        "A": "Surgical exploration of the affected side only",
                        "B": "Manual detorsion and discharge",
                        "C": "Emergent bilateral scrotal exploration + detorsion + bilateral orchidopexy (or orchiectomy if nonviable) + post-operative education for family (signs of re-torsion, though rare after orchidopexy) + fertility counseling if orchiectomy performed (single testis provides adequate hormonal function and fertility in most cases) + follow-up to assess testicular viability",
                        "D": "Observation and pain management"
                    },
                    "explanation": "Definitive Surgery + Bilateral Prevention",
                    "text": "The clinical presentation (not imaging) drove the emergent surgical decision. Bilateral orchidopexy prevents contralateral torsion. If the testis was lost, fertility counseling is important: a single testis typically provides adequate testosterone and spermatogenesis, though semen analysis at maturity may be recommended. The key systemic lesson: this is one of the clearest examples in medicine where clinical diagnosis supersedes imaging — and where imaging can actually harm the patient by delaying definitive treatment."
                }
            },
            {
                "modality": "Ultrasound → CT",
                "title": "Acute Urinary Retention — Bladder Outlet Obstruction",
                "vignette": "A <strong>72-year-old male</strong> presents with 12 hours of inability to urinate despite strong urge, suprapubic fullness, and increasing discomfort. He has a history of progressive urinary hesitancy and weak stream over the past 2 years that he attributed to 'getting older.' He started an OTC cold medication containing <strong>pseudoephedrine</strong> yesterday. On exam: palpable, tender suprapubic mass (distended bladder). Foley catheter placement drains 1,200 mL of urine.",
                "context": {
                    "question": "What epidemiological and medication exposure factors precipitated this acute retention?",
                    "correct": "C",
                    "options": {
                        "A": "Urinary retention in elderly men is always from prostate cancer",
                        "B": "OTC cold medications do not affect urinary function",
                        "C": "BPH affects >50% of men over 60 and >90% over 80 — this is the most common cause of bladder outlet obstruction. Pseudoephedrine (alpha-agonist) stimulates smooth muscle contraction in the prostatic urethra and bladder neck, precipitating acute retention in men with underlying BPH. Other triggers: anticholinergics (diphenhydramine, first-gen antihistamines), opioids, alcohol, and cold immobilization. This was a medication-precipitated event on top of chronic BPH",
                        "D": "His age makes structural evaluation unnecessary"
                    },
                    "explanation": "BPH Epidemiology and Medication Triggers",
                    "text": "<strong>BPH</strong> is nearly universal in aging men — histological evidence in 50% by age 60 and 90% by age 85. However, only ~25% develop clinically significant LUTS (lower urinary tract symptoms). <strong>Medication-precipitated retention</strong> is extremely common and preventable: alpha-agonists (pseudoephedrine, phenylephrine), anticholinergics (diphenhydramine, TCAs, first-gen antihistamines, bladder antimuscarinics), opioids (reduce detrusor contractility), and alcohol (overdistension from diuresis + sedation). <strong>Post-operative retention</strong> after anesthesia is common and related to anticholinergic effects + opioids + supine positioning.",
                    "pearl": "Epidemiologic Pearl: The 'cold and flu aisle' is a minefield for men with BPH — many combination products contain both pseudoephedrine AND diphenhydramine (double hit: alpha-agonist + anticholinergic). Pharmacists should screen for BPH before recommending these products. Also: acute retention can unmask previously undiagnosed prostate cancer — PSA and DRE should be performed after the acute episode resolves."
                },
                "order": {
                    "correct": "B",
                    "options": {
                        "A": "CT abdomen/pelvis immediately",
                        "B": "After catheter drainage: renal/bladder ultrasound to assess for hydronephrosis (chronic retention can cause bilateral hydroureter), bladder wall thickening, post-void residual (measured after catheter trial of void), and prostate size estimation. PSA after retention resolves (acute retention falsely elevates PSA)",
                        "C": "Cystoscopy immediately",
                        "D": "MRI prostate"
                    },
                    "explanation": "Post-Decompression Imaging",
                    "text": "After emergent catheterization, imaging evaluates for chronic damage: <strong>renal US</strong> checks for hydronephrosis (chronic back-pressure from obstruction), renal cortical thinning (chronic damage), and estimates prostate size. <strong>Bladder US</strong> assesses wall thickening (detrusor hypertrophy from chronic obstruction) and post-void residual volume after catheter trial. <strong>PSA</strong> should be checked 2-4 weeks after retention resolves (acute retention and catheterization falsely elevate PSA 2-3×). MRI prostate is reserved for cancer suspicion (elevated PSA, abnormal DRE)."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Normal kidneys and bladder",
                        "B": "Enlarged prostate (>30cc) on US, bladder wall thickening (trabeculation from chronic obstruction), mild bilateral hydronephrosis from chronic high-pressure voiding, elevated post-void residual (>200mL)",
                        "C": "Renal masses bilaterally",
                        "D": "Normal prostate with neurogenic bladder"
                    },
                    "explanation": "Chronic BPH Imaging Pattern",
                    "text": "The US findings tell the chronic story: enlarged prostate (normal ~20cc, BPH often 40-100cc+), bladder wall thickening from detrusor hypertrophy (the muscle working harder against obstruction), trabeculation (irregular inner bladder wall surface), possible bladder diverticula, and bilateral hydronephrosis indicating chronic back-pressure. These findings differentiate chronic BPH from acute-only causes (neurogenic bladder, urethral stricture)."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "Permanent catheterization",
                        "B": "Immediate TURP (transurethral resection of the prostate)",
                        "C": "Catheter drainage for 3-7 days + start alpha-blocker (tamsulosin — relaxes prostatic smooth muscle) → trial without catheter + STOP precipitating medication (pseudoephedrine) + if trial of void fails → urology referral for surgical evaluation (TURP, HoLEP, or Rezum based on prostate size and anatomy)",
                        "D": "Antibiotics only"
                    },
                    "explanation": "Medical Therapy First, Surgery If Needed",
                    "text": "Management follows a stepwise approach: (1) Acute decompression (catheter), (2) Start alpha-blocker (takes 2-3 days for effect — hence keeping catheter 3-7 days), (3) Trial without catheter (successful void with PVR <200mL = success), (4) If trial fails or symptoms are severe/recurrent → surgical options. <strong>Alpha-blockers</strong> (tamsulosin, silodosin) relax prostatic smooth muscle. <strong>5-alpha reductase inhibitors</strong> (finasteride, dutasteride) shrink the prostate over months — used for large prostates (>40cc).",
                    "radiopaedia": "https://radiopaedia.org/articles/benign-prostatic-hyperplasia"
                },
                "integrate": {
                    "correct": "A",
                    "options": {
                        "A": "Catheter management + alpha-blocker + STOP pseudoephedrine + patient education on BPH medication avoidance (comprehensive OTC medication review) + monitor for post-obstructive diuresis (can cause significant fluid/electrolyte shifts after draining >1L) + PSA in 2-4 weeks + urology referral for definitive management + monitor renal function (creatinine) given bilateral hydronephrosis + follow-up imaging to confirm hydronephrosis resolution",
                        "B": "Catheter removal tomorrow and discharge",
                        "C": "Surgery immediately",
                        "D": "Alpha-blocker only, no follow-up"
                    },
                    "explanation": "Comprehensive BPH Management + Medication Stewardship",
                    "text": "The imaging revealed both the acute precipitant (overdistended bladder) and chronic disease burden (bilateral hydronephrosis, detrusor changes). The comprehensive plan addresses: acute retention management, medication trigger identification and patient education (provide a list of OTC medications to avoid), BPH medical therapy, monitoring for post-obstructive diuresis (patients can lose liters of fluid after decompression of chronically obstructed kidneys — monitor I/Os and electrolytes), renal function recovery assessment, and long-term urological care. The 1,200mL retained volume and bilateral hydronephrosis indicate this was not just acute — it was chronic obstruction pushed into crisis by a medication."
                }
            }
        ],
        "cross_links": [
            ("🫁 Chest Imaging", "raddx-chest.html", "Pneumonia, PE, pneumothorax"),
            ("❤️ Cardiac Imaging", "raddx-cardiac.html", "ECG, echo, angiography"),
            ("🩻 Abdominal Imaging", "raddx-abdominal.html", "CT abdomen, US, HIDA"),
            ("← RadDx Hub", "raddx-hub.html", "All body systems"),
        ],
        "references": [
            ("Nephrolithiasis — StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK430774/"),
            ("AUA Kidney Stones Guidelines 2014 (Amended 2021)", "https://doi.org/10.1016/j.juro.2014.05.006"),
            ("AUA Renal Mass/RCC Guidelines 2021", "https://doi.org/10.1097/JU.0000000000001899"),
            ("AAP UTI/VUR Clinical Practice Guidelines", "https://doi.org/10.1542/peds.2011-1330"),
            ("AUA BPH Clinical Guidelines 2021", "https://doi.org/10.1097/JU.0000000000001846"),
            ("Radiopaedia.org", "https://radiopaedia.org"),
        ]
    },
    "peds": {
        "icon": "👶",
        "title": "Pediatric Imaging",
        "badge": "PEDIATRICS",
        "scenarios": [
            {
                "modality": "Ultrasound",
                "title": "Pyloric Stenosis",
                "vignette": "A <strong>4-week-old male</strong>, firstborn, presents with 5 days of progressively forceful, non-bilious vomiting. Mother describes it as 'projectile — hitting the wall.' He is hungry immediately after vomiting. On exam: mildly dehydrated, a firm 'olive-shaped' mass is palpated in the right upper quadrant. He was born at term via C-section and received erythromycin eye ointment at birth. Mother took erythromycin during pregnancy for a UTI.",
                "context": {
                    "question": "What epidemiological factors make pyloric stenosis the leading diagnosis?",
                    "correct": "D",
                    "options": {
                        "A": "Pyloric stenosis occurs equally in all demographics",
                        "B": "Vomiting in a neonate is always GER",
                        "C": "The palpable olive confirms the diagnosis — no imaging needed",
                        "D": "Classic demographic: firstborn male (4:1 M:F ratio), age 2-8 weeks. CRITICAL exposure: erythromycin (both maternal and neonatal) is a PROVEN risk factor — macrolide antibiotics stimulate motilin receptors, promoting pyloric hypertrophy. Other risk factors: family history (7× risk if mother had pyloric stenosis), Caucasian > Hispanic > Black > Asian, bottle-feeding, preterm birth. This is one of the clearest examples of a medication exposure causing a surgical condition in pediatrics"
                    },
                    "explanation": "Pyloric Stenosis Epidemiology and Drug Exposure",
                    "text": "Pyloric stenosis affects ~2-3 per 1,000 live births with dramatic demographic variation. The <strong>erythromycin connection</strong> is a landmark pharmacoepidemiological finding: neonates given erythromycin in the first 2 weeks of life have a 7-10× increased risk of pyloric stenosis. Maternal macrolide use (especially in late pregnancy and while breastfeeding) also increases risk. This led to changes in neonatal antibiotic prescribing practices. <strong>The palpable olive</strong> (hypertrophied pylorus) is pathognomonic when found, but is palpable in only ~70% of cases — ultrasound is needed for the rest.",
                    "pearl": "Epidemiologic Pearl: The erythromycin → pyloric stenosis link was discovered through pharmacovigilance after a pertussis outbreak where prophylactic erythromycin was given to neonates. This is now a classic teaching example in pharmacoepidemiology. Azithromycin has a lower but still elevated risk. Current AAP guidance: avoid macrolides in neonates <2 weeks of age when possible."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Abdominal ultrasound — the gold standard for pyloric stenosis diagnosis (sensitivity >95%)",
                        "B": "Upper GI series (barium swallow)",
                        "C": "CT abdomen",
                        "D": "Abdominal X-ray"
                    },
                    "explanation": "Ultrasound Is First-Line",
                    "text": "US is fast, non-invasive, no radiation, and highly accurate. Diagnostic criteria: <strong>pyloric muscle thickness >3mm</strong> (or 4mm in some protocols) AND <strong>pyloric channel length >15mm</strong>. The US also dynamically shows the failure of gastric contents to pass through the pylorus. UGI series is second-line if US is equivocal (shows 'string sign' or 'shoulder sign'). <strong>Pre-imaging priority</strong>: correct the metabolic derangement first — pyloric stenosis causes hypochloremic, hypokalemic metabolic alkalosis from persistent vomiting of gastric HCl. Surgery waits until electrolytes are corrected."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Normal pylorus — this is gastroesophageal reflux",
                        "B": "Hypertrophied pyloric muscle >3mm thick and >15mm long, with failure of gastric contents to pass through the pyloric channel ('target sign' on transverse view, 'cervix sign' on longitudinal)",
                        "C": "Intussusception",
                        "D": "Malrotation with midgut volvulus"
                    },
                    "explanation": "Pyloric Stenosis US Criteria",
                    "text": "The US diagnostic criteria are highly standardized: muscle thickness >3mm (measured as the single wall thickness of the hypertrophied muscle), channel length >15mm, pyloric diameter >14mm. On transverse view, the hypertrophied muscle creates a 'target' or 'donut' sign. On longitudinal view, the thickened muscle creates a 'cervix sign.' Dynamic assessment shows no passage of gastric contents through the channel during observation."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "Start medical therapy with atropine",
                        "B": "Emergency surgery tonight regardless of metabolic status",
                        "C": "US confirms pyloric stenosis → FIRST correct the metabolic alkalosis (IV D5 NS with KCl, target K >3.5 and bicarb <30) → THEN surgical consultation for Ramstedt pyloromyotomy. This is an urgent but not emergent surgery — the metabolic correction takes priority",
                        "D": "Thickened feeds and observe"
                    },
                    "explanation": "Correct Metabolics Before Surgery",
                    "text": "The cardinal rule: <strong>pyloric stenosis is a medical emergency (metabolic correction) before it is a surgical emergency</strong>. The hypochloremic, hypokalemic metabolic alkalosis must be corrected first — operating on a severely alkalotic neonate carries significant anesthetic risk. Once electrolytes normalize (typically 12-24 hours of IV fluid resuscitation), <strong>Ramstedt pyloromyotomy</strong> (open or laparoscopic — splitting the hypertrophied pyloric muscle) is curative with >99% success rate.",
                    "radiopaedia": "https://radiopaedia.org/articles/pyloric-stenosis"
                },
                "integrate": {
                    "correct": "A",
                    "options": {
                        "A": "IV fluid resuscitation to correct metabolic alkalosis → pyloromyotomy once electrolytes normalize → postoperative ad lib feeding (typically within hours of surgery) → counsel parents that erythromycin exposure was a contributing factor → document medication exposure for future pharmacovigilance → anticipate full recovery with normal feeding within days",
                        "B": "Pyloromyotomy immediately without metabolic correction",
                        "C": "Medical management with prokinetics",
                        "D": "Observation and repeat imaging in 2 weeks"
                    },
                    "explanation": "Metabolic Correction → Curative Surgery",
                    "text": "The US confirmed the diagnosis that the clinical exam strongly suggested. The treatment sequence is: metabolic correction → surgery → rapid recovery. The epidemiological context (erythromycin exposure) is important for counseling and for medical records — this contributes to pharmacovigilance data and helps inform prescribing practices for future neonates. Postoperative feeding protocols have evolved toward early ad lib feeding (starting 4-6 hours after surgery), which shortens hospital stay without increasing complications."
                }
            },
            {
                "modality": "Ultrasound → Air/Barium Enema",
                "title": "Intussusception",
                "vignette": "A <strong>9-month-old male</strong> presents with episodic severe colicky abdominal pain — he draws his legs up and screams every 15-20 minutes, then appears normal between episodes. Parents report 'currant jelly' stool in his diaper. He had a viral URI last week. On exam: a sausage-shaped mass is palpated in the right upper quadrant, and the right lower quadrant feels empty (Dance sign).",
                "context": {
                    "question": "What epidemiological factors make intussusception the leading diagnosis and what secondary causes should you consider?",
                    "correct": "C",
                    "options": {
                        "A": "Intussusception only occurs in neonates",
                        "B": "The viral URI is unrelated to the current presentation",
                        "C": "Peak age 6-36 months, M:F 2:1. The preceding viral URI is directly relevant — viral infections cause Peyer's patch lymphoid hyperplasia in the ileum, creating a 'lead point' for intussusception. In children <3 years, 90% are idiopathic (lymphoid hyperplasia as lead point). In children >3-5 years, suspect a PATHOLOGICAL lead point: Meckel's diverticulum, lymphoma, polyp, or Henoch-Schonlein purpura. Also: post-rotavirus vaccination intussusception (1-2 per 100,000 doses) — check vaccination timing",
                        "D": "Currant jelly stool is seen in many conditions"
                    },
                    "explanation": "Intussusception Age-Based Etiology",
                    "text": "Intussusception (most commonly ileocolic) has a strong age-based epidemiology. In the typical age group (6-36 months), lymphoid hyperplasia from viral infections (adenovirus, rotavirus, other enteric viruses) creates an intestinal lead point. <strong>The rotavirus vaccine connection</strong>: the original RotaShield vaccine was withdrawn in 1999 due to intussusception risk (~1 in 10,000). Current vaccines (RotaTeq, Rotarix) have a much lower but still measurable risk (~1-2 per 100,000 doses, typically within 7 days of first dose). In older children, pathological lead points (Meckel's, polyps, lymphoma, HSP) account for 10-20% of cases and change the management (reduction may not be sufficient).",
                    "pearl": "Epidemiologic Pearl: The RotaShield withdrawal and subsequent safer vaccine development is a landmark case in vaccine pharmacovigilance. Current practice: if an infant develops intussusception within 21 days of rotavirus vaccination, complete the series with a different rotavirus vaccine. Also: in cystic fibrosis patients, intussusception can occur at any age due to thick, inspissated intestinal contents — it's a known complication."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Abdominal ultrasound — the initial diagnostic study (sensitivity >97% for intussusception). If confirmed, proceed to therapeutic air or hydrostatic enema reduction",
                        "B": "Abdominal X-ray series",
                        "C": "CT abdomen/pelvis",
                        "D": "Barium enema as the first diagnostic study"
                    },
                    "explanation": "US First → Therapeutic Reduction",
                    "text": "US is the best initial test: 'target sign' (concentric rings on transverse view) and 'pseudokidney sign' (longitudinal view) are diagnostic. US also detects trapped lymph nodes and free fluid (which may indicate reduced viability). If US confirms intussusception without evidence of perforation or peritonitis → <strong>air enema reduction</strong> (or hydrostatic/barium reduction) is both diagnostic and therapeutic. Success rate: ~80-90% for first attempt. If peritonitis, free air, or hemodynamic instability is present → surgery without reduction attempt."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Normal US — the symptoms are from viral gastroenteritis",
                        "B": "Pyloric stenosis",
                        "C": "US shows 'target sign' (concentric rings of intussuscepted bowel within receiving bowel) in the right abdomen, with possible trapped mesenteric lymph nodes and small amount of free fluid — confirming ileocolic intussusception",
                        "D": "Appendicitis"
                    },
                    "explanation": "Intussusception US Pathognomonic Signs",
                    "text": "The US findings are nearly pathognomonic: <strong>target/donut sign</strong> (transverse) = concentric alternating hyper- and hypoechoic rings representing layers of bowel wall and mesentery. <strong>Pseudokidney sign</strong> (longitudinal) = the intussusceptum within the intussuscipiens resembles a kidney. Trapped lymph nodes and mesenteric fat appear as echogenic material within the intussusception. Free fluid in the abdomen raises concern for ischemia but does not preclude reduction attempt."
                },
                "interpret": {
                    "correct": "B",
                    "options": {
                        "A": "Observation — intussusception resolves spontaneously",
                        "B": "US confirms intussusception without signs of perforation → proceed to air enema reduction under fluoroscopic guidance. The radiologist inflates the colon with air (or contrast), which pushes the intussusception back (reduction). Success is confirmed when air/contrast flows freely into the terminal ileum. If reduction fails after 3 attempts or perforation occurs → emergent surgery",
                        "C": "Immediate surgery for all cases",
                        "D": "Antibiotics and repeat imaging"
                    },
                    "explanation": "Therapeutic Enema Reduction",
                    "text": "Air enema reduction is the standard of care for uncomplicated intussusception: <strong>success rate 80-90%</strong> on first attempt. Contraindications to enema: peritonitis, free air (perforation), hemodynamic instability, or prolonged symptoms (>48 hours with signs of bowel compromise). <strong>Recurrence after reduction</strong>: 5-10% within 48 hours — parents must be counseled about return for recurrent symptoms. If >3 recurrences, operative reduction with evaluation for pathological lead point is indicated.",
                    "radiopaedia": "https://radiopaedia.org/articles/intussusception"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Enema reduction and immediate discharge",
                        "B": "Surgery for all cases to prevent recurrence",
                        "C": "Enema reduction and outpatient follow-up in 1 month",
                        "D": "Successful air enema reduction → observation for 12-24 hours (monitor for recurrence, resume feeding gradually) → parent education on recurrence signs (return of episodic crying, vomiting, bloody stool) → verify rotavirus vaccination timing (document if temporally related) → if recurrent or child >3 years, evaluate for pathological lead point (Meckel's scan, surgical exploration)"
                    },
                    "explanation": "Post-Reduction Monitoring + Recurrence Prevention",
                    "text": "The US-guided diagnosis enabled non-surgical treatment (enema reduction) in ~85% of cases. Post-reduction monitoring is critical because recurrence within 48 hours occurs in 5-10% of patients. The epidemiological context guided the differential (age-appropriate = likely lymphoid hyperplasia, not pathological lead point) and the post-treatment plan (routine monitoring vs lead point evaluation based on age and recurrence pattern). Parent education about recurrence signs is essential for safe discharge."
                }
            },
            {
                "modality": "X-ray → CT → MRI",
                "title": "Non-Accidental Trauma (Child Abuse)",
                "vignette": "A <strong>6-month-old female</strong> is brought in by her mother's boyfriend who says she 'rolled off the couch.' She has a large parietal scalp hematoma, and on exam you notice <strong>bilateral retinal hemorrhages</strong> and <strong>bruising on the trunk and upper arms in varying stages of healing</strong>. The infant appears lethargic but has no focal neurological deficits. There is a healing fracture on a previous X-ray from another ED visit 3 weeks ago that was attributed to 'fell while being carried.'",
                "context": {
                    "question": "What epidemiological patterns identify this presentation as highly suspicious for non-accidental trauma rather than accidental injury?",
                    "correct": "D",
                    "options": {
                        "A": "Falls from couches commonly cause skull fractures and retinal hemorrhages",
                        "B": "The history is plausible for the injuries described",
                        "C": "Multiple injuries of different ages are normal in active infants",
                        "D": "Multiple red flags for NAT: (1) inconsistent mechanism — a short fall (<3 feet) rarely causes significant intracranial injury, (2) bilateral retinal hemorrhages are nearly pathognomonic for abusive head trauma (shaken baby), (3) bruising in a pre-mobile infant (TEN-4 rule: bruises on Torso, Ears, Neck in <4yo or ANY bruise in <4mo = abuse until proven otherwise), (4) multiple injuries in different healing stages, (5) prior ED visit with suspicious injury, (6) caregiver is non-parent"
                    },
                    "explanation": "Recognizing Non-Accidental Trauma",
                    "text": "Child abuse is a leading cause of death in children <5 years. <strong>Key epidemiological patterns</strong>: age <2 years (highest risk), male perpetrators (boyfriend, stepfather most common), history of prematurity or colic (increased crying triggers abuse), caregiver substance use, social isolation, poverty (though abuse occurs across all socioeconomic levels). <strong>Sentinel injuries</strong>: bruising in a pre-cruising infant (babies who can't move don't bruise), injuries to the torso/ears/neck, oral injuries, and any fracture in a non-mobile infant. <strong>Retinal hemorrhages</strong> in an infant with intracranial injury = abusive head trauma with >90% specificity (only extreme accidental mechanisms like car crashes produce similar findings).",
                    "pearl": "Epidemiologic Pearl: The TEN-4 FACES p bruising rule is a critical screening tool: bruising on the Torso, Ears, or Neck in a child <4 years, or on the Frenulum, Angle of jaw, Cheeks, Eyelids, or Subconjunctiva in any child, OR any bruise in a child <4 months → should trigger an abuse evaluation. 'Those who don't cruise rarely bruise.' Every physician is a mandated reporter — failure to report suspected abuse is both illegal and a profound ethical violation."
                },
                "order": {
                    "correct": "C",
                    "options": {
                        "A": "Skull X-ray only",
                        "B": "CT head only",
                        "C": "Full NAT imaging workup: CT head without contrast (emergent — assess for intracranial hemorrhage) + skeletal survey (AP and lateral of all long bones, chest, pelvis, spine, skull — looking for occult fractures of different ages) + ophthalmology consultation for dilated retinal exam",
                        "D": "MRI brain only"
                    },
                    "explanation": "Comprehensive NAT Imaging Protocol",
                    "text": "NAT requires a comprehensive imaging protocol mandated by ACR Appropriateness Criteria: <strong>CT head without contrast</strong> (emergent) — detects acute and subacute intracranial hemorrhage (subdural, subarachnoid, parenchymal), cerebral edema, and skull fractures. <strong>Skeletal survey</strong> (required in all children <2 years with suspected abuse) — standardized views of every bone, looking for: metaphyseal corner fractures ('bucket handle' — highly specific for abuse), posterior rib fractures (from squeezing), fractures in different healing stages, spiral fractures in non-ambulatory children. <strong>Follow-up skeletal survey</strong> at 2 weeks detects healing fractures that were occult initially."
                },
                "expect": {
                    "correct": "D",
                    "options": {
                        "A": "Normal CT and skeletal survey — this was an accident",
                        "B": "Single parietal skull fracture from the reported fall",
                        "C": "Epidural hematoma from the fall",
                        "D": "CT head likely shows bilateral subdural hematomas of mixed density (different ages — acute AND chronic blood = repeated injury) ± subarachnoid hemorrhage ± cerebral edema. Skeletal survey likely shows multiple fractures in varying stages of healing: classic metaphyseal lesions ('bucket handle' or 'corner' fractures), posterior rib fractures, and the previously identified healing fracture"
                    },
                    "explanation": "NAT Imaging Pattern",
                    "text": "The NAT imaging pattern is highly distinctive: <strong>Intracranial</strong>: bilateral or interhemispheric subdural hematomas of mixed density (indicating repeated episodes), diffuse cerebral edema (from hypoxic injury during shaking episodes), and retinal hemorrhages (confirmed by ophthalmology). <strong>Skeletal</strong>: <strong>Metaphyseal corner/bucket-handle fractures</strong> (highly specific for NAT — caused by gripping and shaking the limbs), <strong>posterior rib fractures</strong> (from anterior-posterior chest compression during shaking), <strong>fractures in varying stages of healing</strong> (indicating repeated episodes over weeks to months). <strong>Skull fractures</strong> in NAT are often complex, bilateral, or crossing suture lines."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "The imaging pattern is diagnostic of non-accidental trauma (abusive head trauma/shaken baby). Mandatory actions: (1) Stabilize the patient medically, (2) Activate child protective services and law enforcement IMMEDIATELY — this is a mandated report, (3) Do NOT discharge the child to the care of the suspected perpetrator, (4) Obtain follow-up MRI brain when stable for detailed injury assessment",
                        "B": "Discuss findings with the caregiver before reporting",
                        "C": "Repeat imaging in 2 weeks before making conclusions",
                        "D": "Refer to outpatient pediatrics for further evaluation"
                    },
                    "explanation": "Mandated Reporting + Medical Stabilization",
                    "text": "The imaging findings trigger BOTH medical and legal obligations. <strong>Medical</strong>: manage intracranial hemorrhage (neurosurgical consultation for SDH drainage if mass effect present), treat seizures, monitor ICP. <strong>Legal</strong>: mandated report to child protective services (CPS) and law enforcement — immediately, without waiting for additional evidence. The child must not be discharged to the suspected perpetrator. <strong>MRI brain</strong> (obtained when stable) provides better characterization of parenchymal injury, diffuse axonal injury, and dating of hemorrhages — critical for forensic documentation.",
                    "radiopaedia": "https://radiopaedia.org/articles/non-accidental-injury"
                },
                "integrate": {
                    "correct": "C",
                    "options": {
                        "A": "Report and discharge to the other parent",
                        "B": "Medical management only — reporting is optional",
                        "C": "Medical stabilization (neurosurgery, seizure management) + mandated CPS/law enforcement report + admit to safe environment (social work involvement, may need foster care placement) + ophthalmology retinal exam documentation + follow-up skeletal survey at 2 weeks + MRI brain when stable + forensic documentation (detailed injury description, dated photographs, chain of custody for evidence) + siblings evaluated for occult injuries + child advocacy center involvement + long-term neurodevelopmental follow-up",
                        "D": "Conservative management with close outpatient follow-up"
                    },
                    "explanation": "Medical + Legal + Child Protection Response",
                    "text": "NAT is unique in medicine — the imaging findings trigger a simultaneous medical, legal, and child protection response. The comprehensive plan includes: acute neurosurgical management, forensic documentation (the medical record becomes legal evidence), sibling evaluation (other children in the household are at risk), child advocacy center involvement (forensic interview, multidisciplinary team), follow-up imaging (2-week skeletal survey catches healing occult fractures; MRI brain assesses parenchymal injury for prognostic counseling), and long-term neurodevelopmental follow-up. Abusive head trauma carries 25-30% mortality and >80% long-term morbidity rate in survivors."
                }
            },
            {
                "modality": "X-ray → Ultrasound",
                "title": "Pediatric Elbow Injury — Supracondylar Fracture",
                "vignette": "A <strong>5-year-old girl</strong> fell from the monkey bars onto an outstretched hand. She is holding her arm flexed and won't let anyone touch her elbow. Significant swelling around the elbow. On exam: decreased radial pulse compared to the other arm, hand is cool and pale, she cannot extend her wrist or make an 'OK' sign (thumb-index finger pinch). Parents report no prior injuries.",
                "context": {
                    "question": "What makes this injury pattern an orthopedic emergency in children?",
                    "correct": "D",
                    "options": {
                        "A": "All elbow injuries in children are managed conservatively",
                        "B": "Diminished pulse is normal after pediatric falls",
                        "C": "The inability to make an OK sign is not clinically relevant",
                        "D": "Supracondylar humerus fractures are the most common elbow fracture in children (peak age 5-7 years, FOOSH mechanism). This case has TWO emergent complications: (1) vascular compromise (diminished radial pulse, cool/pale hand = brachial artery involvement), (2) anterior interosseous nerve (AIN) injury (unable to make 'OK' sign = loss of FPL and FDP to index finger). Extension-type supracondylar fractures (97%) displace posteriorly, endangering the brachial artery and median/AIN nerve"
                    },
                    "explanation": "Supracondylar Fracture Vascular Emergency",
                    "text": "Supracondylar humerus fractures represent 60% of pediatric elbow fractures. <strong>Neurovascular injury rate</strong>: 10-20% of displaced (Gartland III) fractures. <strong>Brachial artery</strong> injury (kinking, spasm, or laceration by the proximal fragment) threatens the hand — absent pulse with a pink, perfused hand ('pink pulseless hand') may represent spasm; absent pulse with pale, cold hand = arterial injury requiring emergent exploration. <strong>Nerve injuries</strong>: AIN (most common with extension-type) — test with 'OK sign'; radial nerve (with flexion-type); median nerve (with extension-type). Most nerve injuries are neurapraxias that resolve with fracture reduction.",
                    "pearl": "Epidemiologic Pearl: Playground falls (monkey bars, trampolines, climbing structures) are the #1 cause of supracondylar fractures. Trampolines account for disproportionate pediatric upper extremity fractures — AAP recommends against home trampolines. Volkmann ischemic contracture (irreversible forearm muscle necrosis from prolonged vascular compromise) is the most feared complication — the 'golden window' for restoring blood flow is 6-8 hours."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "AP and lateral elbow X-rays — the standard trauma series. The lateral view is most important: look for the posterior fat pad sign ('sail sign') and the anterior humeral line",
                        "B": "CT elbow for fracture characterization",
                        "C": "MRI elbow to evaluate ligaments",
                        "D": "No imaging needed — go directly to OR for vascular compromise"
                    },
                    "explanation": "X-ray First — But Don't Delay for Vascular Compromise",
                    "text": "X-rays confirm the fracture and classify severity using the <strong>Gartland classification</strong>: Type I (non-displaced — posterior fat pad sign only), Type II (partially displaced — cortical contact maintained), Type III (completely displaced — the fracture fragment is free-floating). The <strong>lateral view</strong> is key: posterior fat pad sign (always abnormal — indicates hemarthrosis from occult fracture), anterior humeral line (should intersect the middle third of the capitellum — displacement shifts this). <strong>IMPORTANT</strong>: if vascular compromise is clear, X-rays should be obtained but should NOT delay emergent surgical consultation."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Normal X-rays with posterior fat pad sign only (Gartland I)",
                        "B": "Lateral condyle fracture",
                        "C": "Gartland Type III supracondylar fracture: complete displacement of the distal fragment posteriorly and medially, with the anterior humeral line passing anterior to the capitellum. Posterior and anterior fat pad signs present. This pattern is consistent with the neurovascular compromise on exam",
                        "D": "Olecranon fracture"
                    },
                    "explanation": "Gartland III = Emergent Surgery",
                    "text": "The completely displaced fracture (Gartland III) explains the vascular and nerve compromise — the sharp proximal fragment is displaced anteriorly into the antecubital fossa, where it can injure or compress the brachial artery and median nerve/AIN. X-ray classification: <strong>Type I</strong>: non-displaced, positive fat pads → long arm cast. <strong>Type II</strong>: angulated with cortical contact → closed reduction and percutaneous pinning. <strong>Type III</strong>: complete displacement → emergent closed reduction and percutaneous pinning ± arterial exploration if vascular compromise doesn't resolve with reduction."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "Gartland III + vascular compromise = emergent surgical consultation. The fracture must be reduced urgently. If pulse returns after closed reduction → pinning + close neurovascular monitoring. If pulse does not return after reduction → surgical exploration of the brachial artery",
                        "B": "Cast immobilization and outpatient follow-up",
                        "C": "Splint and observe for pulse return",
                        "D": "CT angiography before any intervention"
                    },
                    "explanation": "Emergent Reduction ± Vascular Exploration",
                    "text": "This is a true orthopedic emergency. The management algorithm: (1) <strong>Emergent closed reduction</strong> under anesthesia — this alone restores blood flow in most cases (the artery is kinked or in spasm, not lacerated). (2) <strong>Assess pulse after reduction</strong>: pulse returns → percutaneous pinning + monitoring. (3) Pulse absent but hand pink and perfusing → 'pink pulseless hand' = likely arterial spasm, can observe closely with serial exams. (4) Pulse absent + pale/cold hand → brachial artery exploration. <strong>The AIN neurapraxia</strong> typically resolves after reduction and is monitored (recovery over 3-6 months).",
                    "radiopaedia": "https://radiopaedia.org/articles/supracondylar-fracture-of-the-humerus"
                },
                "integrate": {
                    "correct": "B",
                    "options": {
                        "A": "Pin the fracture and discharge",
                        "B": "Emergent closed reduction and pinning → assess vascular status (explore if not restored) → post-operative neurovascular checks every 1-2 hours for 24 hours (compartment syndrome risk) → long arm cast/splint with elbow at 60-70° flexion (not >90° to avoid vascular compression) → pin removal at 3-4 weeks → elbow ROM recovery (stiffness is expected but usually resolves in children) → document nerve exam serially → return to activity at 6-8 weeks → playground safety counseling for family",
                        "C": "Splint and outpatient orthopedics follow-up",
                        "D": "Long arm cast and monitoring"
                    },
                    "explanation": "Surgical Reduction + Neurovascular Monitoring",
                    "text": "The X-ray findings (Gartland III) combined with the neurovascular exam drove emergent surgical intervention. Post-operative monitoring is critical: hourly neurovascular checks for the first 24 hours to detect compartment syndrome or recurrent vascular compromise. Elbow positioning matters — excessive flexion (>90°) compresses the brachial artery and worsens ischemia. Children have remarkable elbow ROM recovery — formal PT is rarely needed. The 'OK sign' (AIN function) should be tested serially during follow-up — recovery is expected but may take months."
                }
            },
            {
                "modality": "Ultrasound → Upper GI Series",
                "title": "Malrotation with Midgut Volvulus",
                "vignette": "A <strong>3-week-old male</strong>, previously healthy, presents with sudden-onset <strong>bilious (green) vomiting</strong>. He was feeding well until this morning. On exam: abdomen is mildly distended, diffusely tender. He appears pale and lethargic. Vitals: HR 190, BP 55/30 (hypotensive for age), cap refill 4 seconds.",
                "context": {
                    "question": "Why does bilious vomiting in a neonate demand emergent evaluation, and what epidemiological factors are relevant?",
                    "correct": "C",
                    "options": {
                        "A": "Bilious vomiting is common in newborns from overfeeding",
                        "B": "Malrotation only presents in the first day of life",
                        "C": "BILIOUS VOMITING IN A NEONATE IS MALROTATION WITH MIDGUT VOLVULUS UNTIL PROVEN OTHERWISE — this is a surgical emergency with potential for total midgut necrosis and death within hours. Malrotation occurs in 1 in 500 live births; 75% present in the first month of life, 90% by age 1 year. The volvulus (twisting of mesentery around the SMA) cuts off blood supply to the entire midgut — from the ligament of Treitz to the mid-transverse colon. This baby is in shock",
                        "D": "The hypotension is likely from dehydration, not a surgical emergency"
                    },
                    "explanation": "Bilious Vomiting = Surgical Emergency in Neonates",
                    "text": "This is one of the most critical teaching points in pediatrics: <strong>bilious vomiting in a neonate is malrotation with midgut volvulus until proven otherwise</strong>. Malrotation results from incomplete rotation of the midgut during embryological development (weeks 4-12), leaving the cecum high and the duodenojejunal junction rightward. <strong>Ladd bands</strong> (peritoneal bands from the malpositioned cecum crossing the duodenum) cause extrinsic obstruction. <strong>Volvulus</strong> occurs when the narrow mesenteric pedicle (SMA) twists, causing total midgut ischemia. Without emergent surgery, the entire small bowel infarcts → short gut syndrome or death.",
                    "pearl": "Epidemiologic Pearl: Malrotation is the reason neonatologists and pediatric surgeons respond emergently to bilious vomiting — the consequences of delay are catastrophic (total bowel necrosis in as little as 3-6 hours). Other causes of bilious vomiting in neonates (NEC, duodenal atresia, jejunal atresia) are also surgical but less immediately life-threatening. Heterotaxy syndromes (situs inversus, polysplenia) are associated with intestinal malrotation — check cardiac anatomy if malrotation is found."
                },
                "order": {
                    "correct": "B",
                    "options": {
                        "A": "Abdominal X-ray first",
                        "B": "Upper GI series (UGI) is the gold standard for malrotation — it shows the position of the duodenojejunal junction (ligament of Treitz). If volvulus is suspected with hemodynamic instability, some centers proceed directly to surgery without imaging. If hemodynamically stable enough for imaging, UGI is diagnostic",
                        "C": "CT abdomen with contrast",
                        "D": "Abdominal ultrasound only"
                    },
                    "explanation": "UGI Series for Malrotation",
                    "text": "The UGI is the gold standard: it shows whether the duodenojejunal junction (DJ junction) is in the normal position (left of midline, at the level of the pylorus — the ligament of Treitz). In malrotation: the DJ junction is rightward and/or inferior to normal. In volvulus: 'corkscrew' or 'bird's beak' appearance of twisted proximal jejunum with failure of contrast to pass distally. <strong>US findings suggestive of malrotation</strong>: 'whirlpool sign' (twisted mesenteric vessels around the SMA), SMA-SMV reversal (SMV normally to the right of SMA). <strong>CRITICAL</strong>: in a hemodynamically unstable neonate with bilious vomiting, do NOT delay surgery for imaging — proceed to the OR."
                },
                "expect": {
                    "correct": "D",
                    "options": {
                        "A": "Normal DJ junction position — no malrotation",
                        "B": "Duodenal atresia with 'double bubble' sign",
                        "C": "NEC with pneumatosis intestinalis",
                        "D": "DJ junction displaced to the right of midline with 'corkscrew' or 'bird's beak' pattern of the proximal jejunum — confirming malrotation with midgut volvulus. Contrast may not pass beyond the point of obstruction"
                    },
                    "explanation": "UGI Confirms Volvulus",
                    "text": "The UGI findings in midgut volvulus: abnormal DJ junction position (right of midline, below the pylorus), corkscrew or spiral appearance of the proximal small bowel (the bowel is twisting), and obstruction to contrast passage. In partial volvulus, some contrast may pass but the abnormal position and spiral pattern are diagnostic. <strong>If the patient is deteriorating during the study — STOP and go to OR</strong>. The imaging study should never delay life-saving surgery."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "UGI confirms malrotation with volvulus = EMERGENT SURGERY (Ladd procedure). Resuscitate simultaneously with crystalloid bolus (20 mL/kg), correct coagulopathy, place NG tube, and get to the operating room as fast as possible. This is one of the most time-critical surgical emergencies in all of pediatrics",
                        "B": "Conservative management with NG decompression",
                        "C": "Repeat imaging in 4 hours",
                        "D": "NICU admission for observation"
                    },
                    "explanation": "Ladd Procedure — Emergent",
                    "text": "The <strong>Ladd procedure</strong>: (1) detorsion of the volvulus (counterclockwise rotation), (2) division of Ladd bands (crossing the duodenum), (3) broadening of the mesenteric base, (4) appendectomy (the cecum will be repositioned to the left, making future appendicitis present atypically). Assessment of bowel viability is critical — if extensive necrosis has already occurred, the surgeon may need to resect dead bowel and plan for a second-look laparotomy at 24-48 hours to reassess borderline viability before final resection.",
                    "radiopaedia": "https://radiopaedia.org/articles/midgut-malrotation"
                },
                "integrate": {
                    "correct": "B",
                    "options": {
                        "A": "Ladd procedure and discharge",
                        "B": "Emergent Ladd procedure + assess bowel viability (second-look laparotomy at 24-48h if viability uncertain) + post-operative NICU care + if significant bowel resection needed → parenteral nutrition support, gastroenterology involvement for short bowel syndrome management + echocardiography to evaluate for associated cardiac anomalies (heterotaxy) + genetic evaluation if dysmorphic features present + long-term GI follow-up for malabsorption surveillance",
                        "C": "NG decompression and TPN",
                        "D": "Surgery can wait until morning for optimal staffing"
                    },
                    "explanation": "Emergent Surgery + Long-Term GI Management",
                    "text": "The UGI confirmed the most feared diagnosis in neonatal surgery. The Ladd procedure is life-saving, but the extent of bowel viability determines the long-term trajectory. If minimal bowel loss → excellent prognosis. If extensive resection → short bowel syndrome requiring specialized nutritional management, intestinal adaptation support, and potentially intestinal transplantation evaluation in severe cases. The associated anomaly screening (cardiac, genetic) is important because malrotation occurs as part of several syndromic conditions."
                }
            }
        ],
        "cross_links": [
            ("❤️ Cardiac Imaging", "raddx-cardiac.html", "ECG, echo, angiography"),
            ("🩻 Abdominal Imaging", "raddx-abdominal.html", "CT abdomen, US, HIDA"),
            ("🫘 Renal/GU Imaging", "raddx-renal-gu.html", "CT KUB, US, VCUG"),
            ("← RadDx Hub", "raddx-hub.html", "All body systems"),
        ],
        "references": [
            ("Pyloric Stenosis — StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK534195/"),
            ("Intussusception — StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK431078/"),
            ("Non-Accidental Trauma Imaging — ACR Appropriateness Criteria", "https://doi.org/10.1016/j.jacr.2021.01.015"),
            ("Supracondylar Fracture — StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK441875/"),
            ("Malrotation/Volvulus — StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK441932/"),
            ("Radiopaedia.org", "https://radiopaedia.org"),
        ]
    },
    "ob": {
        "icon": "🤰",
        "title": "Obstetric & Gynecologic Imaging",
        "badge": "OB/GYN",
        "scenarios": [
            {
                "modality": "Transvaginal Ultrasound",
                "title": "Ectopic Pregnancy",
                "vignette": "A <strong>28-year-old woman</strong> presents with 6 weeks of amenorrhea, lower abdominal pain (left > right), and vaginal spotting for 2 days. She has a history of chlamydia-related PID at age 22 and a prior left tubal surgery. Vitals: HR 92, BP 110/70. Quantitative beta-hCG: 2,400 mIU/mL. She appears uncomfortable but hemodynamically stable.",
                "context": {
                    "question": "What epidemiological and exposure factors place this patient at high risk for ectopic pregnancy?",
                    "correct": "D",
                    "options": {
                        "A": "Ectopic pregnancy is rare and doesn't need to be on the differential",
                        "B": "Her PID history was 6 years ago and is no longer relevant",
                        "C": "Tubal surgery only affects fertility, not ectopic risk",
                        "D": "Multiple compounding risk factors: prior PID from chlamydia (the SINGLE biggest risk factor for ectopic — causes tubal damage and scarring), prior tubal surgery (further damages tubal architecture), left-sided pain localizing to the side of prior surgery. Ectopic pregnancy accounts for 1-2% of all pregnancies but causes 6% of maternal deaths in the first trimester. STI prevention/screening is the most effective upstream intervention"
                    },
                    "explanation": "Ectopic Pregnancy Risk Factors",
                    "text": "Ectopic pregnancy risk factors (by strength of association): <strong>prior ectopic</strong> (10× risk), <strong>prior tubal surgery</strong> (including tubal ligation — 'post-tubal ectopic'), <strong>PID/STI history</strong> (chlamydia is the most common cause of tubal damage globally), <strong>IUD use</strong> (IUDs prevent intrauterine pregnancy more effectively than ectopic — so if pregnancy occurs with IUD, it's more likely ectopic), <strong>infertility treatments</strong> (IVF paradoxically increases ectopic risk), <strong>smoking</strong> (impairs tubal motility). <strong>Chlamydia screening</strong> in sexually active women <25 is one of the most cost-effective preventive interventions — it reduces PID and subsequent ectopic risk.",
                    "pearl": "Epidemiologic Pearl: The incidence of ectopic pregnancy has increased over the past 30 years (paralleling STI rates and IVF utilization), but mortality has decreased due to earlier diagnosis with transvaginal ultrasound and beta-hCG monitoring. In resource-limited settings where ultrasound is unavailable, ruptured ectopics remain a leading cause of maternal death. Heterotopic pregnancy (simultaneous IUP and ectopic) is rare naturally (~1:30,000) but occurs in ~1:100 with IVF — always check the adnexa even if an IUP is seen in IVF patients."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Transvaginal ultrasound — the primary imaging modality for first-trimester bleeding/pain. At beta-hCG >2,000 (discriminatory zone), an IUP should be visible on TVUS. Absence of IUP at this level = ectopic until proven otherwise",
                        "B": "CT abdomen/pelvis with contrast",
                        "C": "Transabdominal ultrasound only",
                        "D": "MRI pelvis"
                    },
                    "explanation": "TVUS + beta-hCG: The Ectopic Workup",
                    "text": "The ectopic pregnancy algorithm relies on TVUS + quantitative beta-hCG: <strong>Discriminatory zone</strong>: at beta-hCG >1,500-2,000 mIU/mL, a normal IUP should be visible on TVUS. If the uterus is empty at this level → pregnancy of unknown location (PUL) = ectopic until proven otherwise. TVUS can visualize: empty uterus (most common finding), adnexal mass (tubal ring sign, 'blob sign'), live ectopic (with cardiac activity — rare), and free fluid in the cul-de-sac (hemoperitoneum if ruptured). <strong>CT has no role</strong> in stable first-trimester evaluation — radiation exposure + IV contrast in pregnancy without benefit over US."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Normal intrauterine pregnancy",
                        "B": "Complete miscarriage with empty uterus and no adnexal mass",
                        "C": "Empty uterus (no IUP) with a complex adnexal mass in the left adnexa — consistent with tubal ectopic pregnancy at the site of prior surgery. Small amount of free fluid in the cul-de-sac",
                        "D": "Heterotopic pregnancy"
                    },
                    "explanation": "Ectopic TVUS Findings",
                    "text": "TVUS findings in ectopic: (1) <strong>Empty uterus</strong> (pseudogestational sac — a fluid collection without the 'double decidual sign' — can be confused with early IUP), (2) <strong>Adnexal mass</strong> (most commonly a 'tubal ring' — hyperechoic ring surrounding a small gestational sac), (3) <strong>Free fluid</strong> (echogenic fluid in cul-de-sac suggests hemoperitoneum from rupture or tubal leakage). The finding of an empty uterus at beta-hCG above the discriminatory zone, combined with an adnexal mass, has >95% specificity for ectopic."
                },
                "interpret": {
                    "correct": "B",
                    "options": {
                        "A": "Expectant management — most ectopics resolve spontaneously",
                        "B": "US confirms ectopic pregnancy. Treatment options depend on clinical stability and beta-hCG level: (1) Methotrexate (medical management) if stable, unruptured, beta-hCG <5,000, no fetal cardiac activity, mass <4cm. (2) Surgical management (laparoscopic salpingostomy or salpingectomy) if unstable, ruptured, failed methotrexate criteria, or patient preference",
                        "C": "Repeat beta-hCG in 48 hours before making treatment decisions",
                        "D": "D&C to confirm non-viable IUP"
                    },
                    "explanation": "TVUS Findings Guide Medical vs Surgical Treatment",
                    "text": "The imaging finding directly determines the management pathway: <strong>Methotrexate criteria</strong> (all must be met): hemodynamically stable, unruptured, no fetal cardiac activity, beta-hCG <5,000 (some use <10,000), reliable follow-up. <strong>Surgical indications</strong>: hemodynamic instability, ruptured ectopic, fetal cardiac activity, beta-hCG >5,000, failed methotrexate, or patient unable to comply with methotrexate monitoring protocol. For this patient (beta-hCG 2,400, stable, left adnexal mass), either methotrexate OR surgery is appropriate — shared decision-making is key.",
                    "radiopaedia": "https://radiopaedia.org/articles/ectopic-pregnancy"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Methotrexate and no follow-up needed",
                        "B": "Surgery with bilateral salpingectomy",
                        "C": "Expectant management",
                        "D": "Treatment per clinical criteria (methotrexate if eligible with close beta-hCG monitoring — must decline by ≥15% between days 4-7 — OR surgical management) + Rh status check (RhoGAM if Rh-negative) + contraception counseling (wait ≥3 months to conceive after methotrexate) + STI screening and treatment for current infection + future fertility counseling (increased ectopic risk with subsequent pregnancies, especially with remaining damaged tube) + emotional support and pregnancy loss counseling"
                    },
                    "explanation": "Treatment + STI Prevention + Fertility Counseling",
                    "text": "The imaging confirmed the ectopic and enabled appropriate treatment selection. The comprehensive plan addresses: acute management (medical or surgical), Rh prophylaxis (RhoGAM prevents Rh sensitization), STI screening (her PID history suggests possible ongoing STI exposure — partner treatment is essential), future fertility counseling (after one ectopic, recurrence risk is ~15%; after two, ~30%), and emotional support (ectopic pregnancy is a pregnancy loss and should be treated with the same compassion and grief support as any pregnancy loss)."
                }
            },
            {
                "modality": "Ultrasound",
                "title": "Placenta Previa — Third Trimester Bleeding",
                "vignette": "A <strong>34-year-old woman</strong>, G3P2 (both prior cesarean deliveries), at <strong>32 weeks gestation</strong> presents with painless bright red vaginal bleeding that started spontaneously. She has no contractions, no abdominal pain, no history of trauma. Fetal heart rate tracing is reassuring. Vitals: HR 96, BP 118/72. She reports the 20-week anatomy scan showed 'something about the placenta being low.'",
                "context": {
                    "question": "What epidemiological and obstetric history factors make placenta previa the most likely diagnosis?",
                    "correct": "D",
                    "options": {
                        "A": "Painless bleeding in the third trimester is always placental abruption",
                        "B": "Prior cesarean sections don't affect placental location",
                        "C": "The 20-week finding was a 'low-lying placenta' that always resolves",
                        "D": "Prior cesarean deliveries are the STRONGEST risk factor for placenta previa (scar tissue alters implantation). She has TWO prior C-sections → significantly elevated risk. Additional risk factors: multiparity, advanced maternal age (>35), smoking, cocaine use, prior uterine surgery, IVF (altered endometrial receptivity). The 20-week 'low placenta' that didn't migrate = persistent previa. CRITICAL: also screen for placenta accreta spectrum (PAS), which occurs in >50% of previas with prior cesareans"
                    },
                    "explanation": "Placenta Previa Risk Factors",
                    "text": "Placenta previa (placenta covering the cervical os) occurs in ~0.5% of pregnancies but is dramatically more common with prior cesarean deliveries. Risk increases exponentially with number of prior C-sections: 1 prior CD → 1% previa risk; 2 prior CDs → 2%; 3 prior CDs → 3-4%; ≥4 prior CDs → up to 10%. <strong>The most dangerous complication is placenta accreta spectrum (PAS)</strong> — where the placenta invades through the myometrium due to deficient decidua at the uterine scar. PAS + previa with prior CDs has life-threatening hemorrhage potential. <strong>Smoking and cocaine</strong> cause relative placental insufficiency, leading to compensatory placental enlargement and higher previa rates.",
                    "pearl": "Epidemiologic Pearl: The rising cesarean delivery rate worldwide (~30% in the US) is directly driving increasing rates of placenta previa and accreta spectrum disorder. This is a major downstream consequence of primary cesarean deliveries — each additional CD exponentially increases risk of abnormal placentation in subsequent pregnancies. Reducing the primary cesarean rate is a public health priority for this reason."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Transabdominal AND transvaginal ultrasound — to confirm previa, classify its type, and evaluate for placenta accreta spectrum (PAS). TVUS is SAFE in previa (the probe does not enter the cervix) and is superior to transabdominal for placental edge-to-os distance",
                        "B": "MRI pelvis for placental evaluation",
                        "C": "CT abdomen/pelvis",
                        "D": "Digital cervical exam to assess dilation"
                    },
                    "explanation": "US for Previa + Accreta Screening",
                    "text": "TVUS is safe and is the gold standard for placenta previa classification: <strong>complete previa</strong> (placenta covers the internal os), <strong>marginal previa</strong> (placental edge reaches but doesn't cover the os), <strong>low-lying</strong> (placental edge within 2cm of os but not reaching it). <strong>CRITICAL</strong>: with two prior CDs + previa, ultrasound must evaluate for PAS: look for loss of the normal retroplacental clear zone, myometrial thinning, placental lacunae ('Swiss cheese' appearance), and increased vascularity at the uterine-bladder interface. <strong>MRI</strong> is second-line for PAS when US is equivocal. <strong>NEVER perform digital cervical exam</strong> in known or suspected previa — it can trigger massive hemorrhage."
                },
                "expect": {
                    "correct": "C",
                    "options": {
                        "A": "Normal placental position — the previa resolved",
                        "B": "Placental abruption (retroplacental hematoma)",
                        "C": "Complete placenta previa (placenta fully covering the internal cervical os) with possible signs of placenta accreta spectrum: loss of the retroplacental clear zone over the anterior lower uterine segment scar, placental lacunae, and increased Doppler vascularity at the bladder-uterine interface",
                        "D": "Cervical insufficiency with funneling"
                    },
                    "explanation": "Previa + Accreta Spectrum Screening",
                    "text": "The US findings tell the complete story: complete previa (delivery must be by cesarean) with possible PAS at the site of prior uterine scar. <strong>PAS signs on US</strong>: placental lacunae (irregular vascular spaces within the placenta — positive predictive value >90% when multiple lacunae seen), loss of retroplacental clear zone (placenta invading myometrium), myometrial thinning to <1mm, and hypervascularity at the uterine serosa-bladder interface. If PAS is suspected, delivery planning changes dramatically — multidisciplinary team, blood bank preparation, possible cesarean hysterectomy."
                },
                "interpret": {
                    "correct": "B",
                    "options": {
                        "A": "Attempt vaginal delivery with close monitoring",
                        "B": "US confirms complete previa with suspected PAS → this requires multidisciplinary delivery planning at a tertiary center: MFM, gynecologic oncology or experienced pelvic surgeon, anesthesiology, blood bank (type and screen, massive transfusion protocol), NICU, interventional radiology (for possible uterine artery embolization). Planned cesarean delivery at 34-36 weeks (previa) or 34 weeks (if PAS confirmed)",
                        "C": "Expectant management until term (39 weeks)",
                        "D": "Immediate delivery at 32 weeks"
                    },
                    "explanation": "Imaging Drives Delivery Planning",
                    "text": "Complete previa = mandatory cesarean delivery (vaginal delivery would cause life-threatening hemorrhage). Timing: 36-37 weeks for previa alone, 34-35 weeks for previa + suspected PAS (earlier delivery balances maternal hemorrhage risk against neonatal prematurity). <strong>If PAS is confirmed</strong>: the planned surgery may include cesarean hysterectomy (the placenta is left in situ and the uterus removed to control hemorrhage). Average blood loss with PAS is 3-5 liters — the massive transfusion protocol must be activated. Interventional radiology may place uterine artery balloon catheters preoperatively.",
                    "radiopaedia": "https://radiopaedia.org/articles/placenta-praevia"
                },
                "integrate": {
                    "correct": "A",
                    "options": {
                        "A": "Admit for observation (32 weeks + active bleeding) + betamethasone for fetal lung maturity + type and screen with crossmatched blood available + pelvic rest + MFM consultation + MRI if PAS unclear on US + multidisciplinary delivery plan (team, timing, surgical approach, blood products) + neonatology consultation for possible preterm delivery + counsel patient about potential hysterectomy if PAS confirmed + future fertility implications",
                        "B": "Discharge with pelvic rest and follow-up in 2 weeks",
                        "C": "Immediate cesarean delivery",
                        "D": "Tocolysis and discharge"
                    },
                    "explanation": "Multidisciplinary Team Delivery Planning",
                    "text": "The imaging finding (previa + possible PAS) triggered a complex multidisciplinary care plan. At 32 weeks with active bleeding: admit, steroids for fetal lung maturity, blood products available. The delivery plan must be coordinated: MFM for obstetric management, experienced pelvic surgeon if PAS confirmed (cesarean hysterectomy may be needed), anesthesia for massive transfusion readiness, NICU for potential preterm neonate, IR for uterine artery embolization if needed. The rising CD rate → more previas → more PAS → more life-threatening hemorrhage is a cascade that begins with the primary cesarean decision."
                }
            },
            {
                "modality": "Ultrasound",
                "title": "Ovarian Torsion",
                "vignette": "A <strong>22-year-old woman</strong> presents with sudden-onset severe right lower quadrant pain for 4 hours, nausea, and vomiting. She is on clomiphene for ovulation induction as part of fertility treatment. Beta-hCG: negative. On exam: exquisitely tender right adnexa, guarding. She has no fever. WBC 11,200.",
                "context": {
                    "question": "What factors in this patient's history create elevated risk for ovarian torsion?",
                    "correct": "C",
                    "options": {
                        "A": "Ovarian torsion only occurs with very large masses",
                        "B": "Fertility medications don't affect ovarian pathology",
                        "C": "Clomiphene (and other ovulation-stimulating medications) cause ovarian enlargement from multiple developing follicles and/or ovarian hyperstimulation — enlarged ovaries are the #1 risk factor for torsion. Ovarian torsion occurs most commonly in reproductive-age women (70% of cases), especially with ovarian cysts >5cm, dermoid cysts (the most common neoplasm causing torsion), or fertility treatment-related ovarian enlargement. Right side > left (the sigmoid colon may limit left ovarian mobility)",
                        "D": "At 22, she is too young for ovarian pathology"
                    },
                    "explanation": "Ovarian Torsion Risk Factors",
                    "text": "Ovarian torsion occurs when the ovary (with or without the fallopian tube) rotates on its vascular pedicle, compromising blood flow. <strong>Risk factors</strong>: ovarian enlargement >5cm (cysts, tumors, hyperstimulation), fertility treatment (clomiphene, gonadotropins — cause multiple large follicles), pregnancy (corpus luteum cysts, relaxin-mediated ligament laxity), prior tubal ligation (alters adnexal mobility), and long utero-ovarian ligament (congenital). <strong>In children and adolescents</strong>: normal ovaries can torse (more mobile due to underdeveloped utero-ovarian ligaments), and torsion is the #1 gynecologic surgical emergency in pediatric patients. Dermoid cysts (mature teratomas) are the most common ovarian neoplasm to cause torsion.",
                    "pearl": "Epidemiologic Pearl: Ovarian hyperstimulation syndrome (OHSS) from fertility treatment can massively enlarge the ovaries (>10cm), creating very high torsion risk. With the increase in IVF cycles worldwide, fertility treatment-related torsion is rising. Also: in pregnancy, ovarian torsion peaks in the first trimester (large corpus luteum) and is a diagnostic challenge because RLQ pain mimics appendicitis and ectopic pregnancy."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Pelvic ultrasound with Doppler flow assessment — the primary imaging modality for suspected torsion. Evaluates ovarian size, morphology, and blood flow",
                        "B": "CT abdomen/pelvis with IV contrast",
                        "C": "MRI pelvis",
                        "D": "Diagnostic laparoscopy without imaging"
                    },
                    "explanation": "US with Doppler for Torsion",
                    "text": "Pelvic US (transvaginal + transabdominal) with color Doppler is first-line. <strong>Findings suggestive of torsion</strong>: (1) enlarged ovary (>5cm), (2) peripherally displaced follicles ('string of pearls'), (3) free fluid in the cul-de-sac, (4) 'whirlpool sign' (twisted vascular pedicle), (5) absent or reduced arterial and/or venous Doppler flow. <strong>CRITICAL CAVEAT</strong>: normal Doppler flow does NOT rule out torsion — the ovary has dual blood supply (ovarian artery from aorta + tubal branch of uterine artery), so one may maintain flow even when torsed. If clinical suspicion is high, proceed to surgery regardless of Doppler findings."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Normal right ovary with normal Doppler flow",
                        "B": "Enlarged right ovary (>5cm) with multiple large follicles (from clomiphene), peripherally displaced follicles, free pelvic fluid, and absent or reduced arterial Doppler flow — highly suggestive of ovarian torsion",
                        "C": "Ruptured ovarian cyst only",
                        "D": "Appendicitis"
                    },
                    "explanation": "Torsion US Findings",
                    "text": "The classic US findings in torsion: enlarged, edematous ovary with peripherally displaced follicles (stromal edema pushes follicles to the periphery), free fluid (from venous congestion and transudation), and the whirlpool sign if the twisted pedicle is visualized. Absent Doppler flow is specific but not sensitive — Doppler can be normal in early or intermittent torsion. The enlarged ovary in the context of fertility treatment is the key predisposing finding."
                },
                "interpret": {
                    "correct": "A",
                    "options": {
                        "A": "US findings + clinical presentation = emergent surgical exploration (laparoscopy). Even if US Doppler is equivocal, the clinical picture (sudden onset, severe RLQ pain, nausea, fertility treatment with enlarged ovary) warrants surgical exploration. Ovarian viability decreases with delay — goal is detorsion and ovarian conservation",
                        "B": "Pain management and observation for 24 hours",
                        "C": "Antibiotics for PID",
                        "D": "CT to confirm before surgery"
                    },
                    "explanation": "Clinical Suspicion → Surgery",
                    "text": "Ovarian torsion is a clinical + imaging diagnosis, and <strong>clinical suspicion trumps Doppler findings</strong>. The surgical approach: <strong>laparoscopic detorsion</strong> with ovarian conservation (even if the ovary appears dusky/blue — most ovaries recover after detorsion). Oophorectomy is reserved for clearly nonviable ovaries (black, necrotic) or suspected malignancy. <strong>Ovarian conservation is especially important</strong> in this patient who is undergoing fertility treatment — preserving ovarian tissue preserves her reproductive potential.",
                    "radiopaedia": "https://radiopaedia.org/articles/ovarian-torsion"
                },
                "integrate": {
                    "correct": "C",
                    "options": {
                        "A": "Detorsion and discharge same day",
                        "B": "Oophorectomy to prevent recurrence",
                        "C": "Emergent laparoscopic detorsion with ovarian conservation → post-operative monitoring → discuss with fertility specialist about modifying ovulation induction protocol to reduce future torsion risk (lower stimulation doses, trigger timing) → oophoropexy (surgical fixation) may be considered if recurrent torsion → follow-up US to assess ovarian viability and function → continue fertility treatment plan with modified approach",
                        "D": "CT angiography before surgery"
                    },
                    "explanation": "Detorsion + Fertility Preservation + Protocol Modification",
                    "text": "The imaging and clinical findings drove emergent surgical intervention with a focus on ovarian conservation — critical for this fertility patient. Post-operatively, the fertility treatment protocol needs modification to reduce future torsion risk (lower gonadotropin doses, careful monitoring of follicle number and ovarian size). Oophoropexy (surgically shortening the utero-ovarian ligament to prevent re-torsion) can be considered during the same surgery if recurrence risk is high. The imaging triggered both the acute surgery and the long-term fertility management modification."
                }
            },
            {
                "modality": "Ultrasound → MRI",
                "title": "Molar Pregnancy (Gestational Trophoblastic Disease)",
                "vignette": "A <strong>19-year-old woman</strong> presents at 10 weeks gestation with heavy vaginal bleeding, passage of 'grape-like' tissue, severe nausea/hyperemesis, and bilateral lower abdominal cramping. She also reports anxiety, tremors, and heat intolerance. Vitals: HR 118, BP 156/92, Temp 37.2°C. Uterine size is 16 weeks (larger than dates). Beta-hCG: 285,000 mIU/mL (markedly elevated for 10 weeks). TSH: 0.1 (suppressed).",
                "context": {
                    "question": "What epidemiological factors and clinical features make molar pregnancy the most likely diagnosis?",
                    "correct": "D",
                    "options": {
                        "A": "The bleeding is likely a threatened miscarriage",
                        "B": "Hyperemesis is normal in early pregnancy",
                        "C": "The thyroid abnormality is unrelated",
                        "D": "Multiple red flags for molar pregnancy: (1) age <20 or >40 (extremes of reproductive age = highest risk), (2) markedly elevated beta-hCG (>100,000 = almost pathognomonic), (3) uterus larger than dates, (4) hyperemesis gravidarum (from extreme hCG), (5) early preeclampsia (HTN at 10 weeks is abnormal), (6) hyperthyroidism (hCG cross-reacts with TSH receptor). Geographic variation: molar pregnancy is 5-10× more common in Southeast Asia, Japan, and Mexico compared to the US"
                    },
                    "explanation": "Molar Pregnancy Epidemiology",
                    "text": "Gestational trophoblastic disease (GTD) incidence varies dramatically by geography: <strong>1:1,000</strong> pregnancies in the US/Europe vs <strong>1:100-200</strong> in Southeast Asia, Japan, and Mexico — driven by both genetic and nutritional factors (folate and beta-carotene deficiency). <strong>Age is bimodal</strong>: highest rates in adolescents (<20) and women >40. <strong>Complete moles</strong> (46,XX — all paternal chromosomes, no fetal tissue) present earlier and more dramatically than partial moles (69,XXY — triploid, some fetal tissue). The markedly elevated hCG causes secondary effects: hyperthyroidism (TSH receptor cross-stimulation), hyperemesis, and early preeclampsia — all of which are clinical clues.",
                    "pearl": "Epidemiologic Pearl: After molar pregnancy, 15-20% of complete moles develop gestational trophoblastic neoplasia (GTN) requiring chemotherapy — making serial beta-hCG monitoring mandatory for 6-12 months. Reliable contraception during monitoring is essential (pregnancy would confound hCG tracking). The cure rate for GTN with chemotherapy exceeds 95%, making it one of the most curable malignancies — but only if diagnosed through proper surveillance."
                },
                "order": {
                    "correct": "A",
                    "options": {
                        "A": "Pelvic ultrasound (transvaginal) — the diagnostic imaging modality for molar pregnancy. Will show the characteristic 'snowstorm' pattern (complete mole) or mixed cystic/solid placenta with possible fetal parts (partial mole)",
                        "B": "CT abdomen/pelvis",
                        "C": "MRI pelvis",
                        "D": "Chest X-ray only"
                    },
                    "explanation": "TVUS Confirms Molar Pregnancy",
                    "text": "TVUS findings in complete molar pregnancy: <strong>'snowstorm' pattern</strong> — diffuse echogenic intrauterine tissue with multiple small cystic spaces (hydropic villi), no fetal parts, no amniotic fluid. <strong>Partial mole</strong>: Swiss cheese pattern in a thickened placenta, possibly with fetal parts or amniotic fluid. TVUS also evaluates for bilateral theca lutein cysts (ovarian enlargement from hCG hyperstimulation — present in 25-50% of complete moles). <strong>Chest X-ray</strong> is also indicated — to evaluate for trophoblastic pulmonary metastases (lung mets occur in 4-5% at diagnosis)."
                },
                "expect": {
                    "correct": "B",
                    "options": {
                        "A": "Normal IUP with subchorionic hematoma",
                        "B": "Classic 'snowstorm' pattern: diffuse heterogeneous echogenic uterine contents with multiple small cystic spaces, no fetal pole, no gestational sac — consistent with complete hydatidiform mole. Bilateral enlarged ovaries with theca lutein cysts",
                        "C": "Ectopic pregnancy",
                        "D": "Twin pregnancy"
                    },
                    "explanation": "Complete Mole US Pattern",
                    "text": "The 'snowstorm' pattern is classic for complete moles. The cystic spaces represent hydropic (fluid-filled) chorionic villi — the hallmark of molar pregnancy. Modern high-resolution US can detect moles earlier (8-12 weeks) than the classic 'grape-like vesicle' stage. Theca lutein cysts result from extreme hCG stimulation — they can be massive (>10cm) and may cause ovarian torsion. These cysts resolve spontaneously after the mole is evacuated and hCG normalizes."
                },
                "interpret": {
                    "correct": "C",
                    "options": {
                        "A": "Medical management with methotrexate",
                        "B": "Observation and repeat ultrasound in 2 weeks",
                        "C": "US confirms molar pregnancy → urgent suction curettage (evacuation) with concurrent medical management of complications: IV magnesium if preeclamptic (early preeclampsia from molar), beta-blocker for thyroid storm symptoms, blood products available (risk of hemorrhage during evacuation). Pathology will confirm complete vs partial mole",
                        "D": "Hysterectomy"
                    },
                    "explanation": "Evacuation + Complication Management",
                    "text": "Suction curettage is the standard treatment for molar pregnancy (preserves fertility). <strong>Pre-evacuation checklist</strong>: stabilize hypertension (early preeclampsia — resolves after evacuation), manage hyperthyroidism (beta-blocker for symptoms, resolves after hCG drops), type and crossmatch blood (hemorrhage risk), and chest X-ray for staging. <strong>Pathology</strong> differentiates complete from partial mole, which determines surveillance intensity. <strong>Hysterectomy</strong> is an option for patients who have completed childbearing — it eliminates the risk of local invasion but does NOT eliminate metastatic risk (surveillance still required).",
                    "radiopaedia": "https://radiopaedia.org/articles/hydatidiform-mole"
                },
                "integrate": {
                    "correct": "D",
                    "options": {
                        "A": "Evacuation and discharge with no follow-up",
                        "B": "Evacuation + single follow-up hCG",
                        "C": "Medical management without surgery",
                        "D": "Suction evacuation + pathology (complete vs partial mole) + serial beta-hCG monitoring (weekly until undetectable for 3 consecutive weeks, then monthly for 6-12 months depending on mole type) + RELIABLE CONTRACEPTION during monitoring period (OCPs recommended — do not confound hCG tracking with pregnancy) + chest X-ray for staging + manage preeclampsia/hyperthyroidism + if hCG plateaus or rises during surveillance → evaluate for GTN (gestational trophoblastic neoplasia) → chemotherapy if diagnosed (>95% cure rate)"
                    },
                    "explanation": "Evacuation + Surveillance + Contraception",
                    "text": "The US-confirmed molar pregnancy triggers a multi-month management plan. Surveillance is non-negotiable: 15-20% of complete moles develop gestational trophoblastic neoplasia (GTN). Serial hCG monitoring catches this early, when cure rates exceed 95% with single-agent chemotherapy (methotrexate or actinomycin-D). Reliable contraception prevents pregnancy (which would confound hCG tracking). The epidemiological context (young patient, desire for future fertility) guides the choice of evacuation over hysterectomy. The imaging finding (snowstorm pattern) initiated a cascade from diagnosis through treatment to months of surveillance."
                }
            }
        ],
        "cross_links": [
            ("🫘 Renal/GU Imaging", "raddx-renal-gu.html", "CT KUB, US, VCUG"),
            ("🩻 Abdominal Imaging", "raddx-abdominal.html", "CT abdomen, US, HIDA"),
            ("👶 Pediatric Imaging", "raddx-peds.html", "Pyloric stenosis, intussusception, NAT"),
            ("← RadDx Hub", "raddx-hub.html", "All body systems"),
        ],
        "references": [
            ("Ectopic Pregnancy — StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK539860/"),
            ("ACOG Placenta Previa Practice Bulletin 2019", "https://doi.org/10.1097/AOG.0000000000003070"),
            ("Ovarian Torsion — StatPearls", "https://www.ncbi.nlm.nih.gov/books/NBK560602/"),
            ("ACOG Gestational Trophoblastic Disease Practice Bulletin 2020", "https://doi.org/10.1097/AOG.0000000000003868"),
            ("Radiopaedia.org", "https://radiopaedia.org"),
        ]
    }
}


# ============================================================
# REUSE GENERATOR FROM PREVIOUS BUILD
# ============================================================

def generate_module(key, data):
    scenarios_html = ""
    for i, s in enumerate(data["scenarios"], 1):
        def make_choices(step_data):
            opts = step_data.get("options", {})
            correct = step_data.get("correct", "A")
            html = f'<div class="choices" data-correct="{correct}">'
            for letter, text in opts.items():
                html += f'<div class="choice" onclick="selectChoice(this,\'{letter}\')"><span class="choice-letter">{letter}.</span><span>{text}</span></div>'
            html += '</div>'
            return html

        def make_explanation(step_data, include_pearl=True, include_radiopaedia=False):
            html = '<div class="explanation">'
            html += f'<h5>{step_data.get("explanation", "Explanation")}</h5>'
            html += f'<p>{step_data.get("text", "")}</p>'
            if include_pearl and "pearl" in step_data:
                parts = step_data["pearl"].split(":", 1)
                html += f'<div class="pearl"><strong>🌍 {parts[0]}:</strong>{parts[1] if len(parts)>1 else ""}</div>'
            if include_radiopaedia and "radiopaedia" in step_data:
                html += f'<a href="{step_data["radiopaedia"]}" target="_blank" rel="noopener" class="radiopaedia-link">📚 Explore on Radiopaedia →</a>'
            html += '</div>'
            return html

        scenario_html = f'''
<div class="scenario"><div class="scenario-header"><span class="scenario-modality">{s["modality"]}</span><span class="scenario-title">{s["title"]}</span></div>
<div class="scenario-body">
<div class="vignette"><div class="vignette-label">Clinical Vignette</div>{s["vignette"]}</div>
<div class="reasoning-steps">
<div class="reasoning-step step-0"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">🌍</span><span>Epidemiological Context</span><span class="step-arrow">▾</span></button>
<div class="step-content">{make_choices(s["context"])}{make_explanation(s["context"])}</div></div>
<div class="reasoning-step step-1"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">1</span><span>What imaging would you order?</span><span class="step-arrow">▾</span></button>
<div class="step-content">{make_choices(s["order"])}{make_explanation(s["order"])}</div></div>
<div class="reasoning-step step-2"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">2</span><span>What findings do you expect?</span><span class="step-arrow">▾</span></button>
<div class="step-content">{make_choices(s["expect"])}{make_explanation(s["expect"], include_pearl=False)}</div></div>
<div class="reasoning-step step-3"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">3</span><span>How do you interpret these findings?</span><span class="step-arrow">▾</span></button>
<div class="step-content">{make_choices(s["interpret"])}{make_explanation(s["interpret"], include_pearl="pearl" in s["interpret"], include_radiopaedia=True)}</div></div>
<div class="reasoning-step step-4"><button class="step-trigger" aria-expanded="false" onclick="toggleStep(this)"><span class="step-num-badge">4</span><span>How does this change your management?</span><span class="step-arrow">▾</span></button>
<div class="step-content">{make_choices(s["integrate"])}{make_explanation(s["integrate"], include_pearl=False, include_radiopaedia="radiopaedia" in s["integrate"])}</div></div>
</div></div></div>'''
        scenarios_html += scenario_html

    cross_html = '<div style="margin-top:32px"><h3 style="font-size:1rem;color:var(--rdx-teal);margin-bottom:12px">Related RadDx Modules</h3>\n<div class="cross-links">'
    for title, href, desc in data["cross_links"]:
        cross_html += f'<a href="{href}" class="cross-link"><div class="cross-link-title">{title}</div><div class="cross-link-desc">{desc}</div></a>'
    cross_html += '</div></div>'

    refs_html = '<div style="margin-top:32px;padding-top:20px;border-top:1px solid var(--rdx-border)"><h4 style="font-size:.85rem;color:var(--rdx-text-muted);margin-bottom:8px">References</h4>\n<ol style="font-size:.8rem;color:var(--rdx-text-muted);padding-left:18px;line-height:1.8">'
    for title, url in data["references"]:
        refs_html += f'<li><a href="{url}" target="_blank">{title}</a></li>'
    refs_html += '</ol></div>'

    return f'''<!DOCTYPE html>
<html data-theme="light" lang="en">
<head>
<script>(function(){{var K="reasondx-user";function g(){{var d=(location.pathname.match(/\\//g)||[]).length-1,p="";for(var i=0;i<d;i++)p+="../";return p+"auth/login.html"}}function a(){{try{{var u=localStorage.getItem(K);if(u){{var j=JSON.parse(u);return j&&j.email&&j.name}}}}catch(e){{}}return false}}if(!a()){{sessionStorage.setItem("reasondx-redirect",location.href);location.replace(g())}}}})();</script>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>RadDx: {data["title"]} | ReasonDx</title>
<link rel="stylesheet" href="../css/rdx-theme.css">
<style>
body{{font-family:'DM Sans',sans-serif;background:var(--rdx-bg);color:var(--rdx-text);line-height:1.7}}
.header{{background:linear-gradient(135deg,#0f766e,#0d9488);padding:12px 20px;position:sticky;top:56px;z-index:100}}
.header-row{{display:flex;justify-content:space-between;align-items:center;max-width:900px;margin:0 auto}}
.header-title{{font-size:1.1rem;font-weight:600;color:#fff}}
.badge{{background:rgba(255,255,255,.2);padding:3px 10px;border-radius:4px;font-size:.7rem;margin-left:10px;color:#fff}}
.main{{max-width:900px;margin:0 auto;padding:24px}}
.framework-intro{{background:linear-gradient(135deg,rgba(217,119,6,.08),rgba(245,158,11,.08));border:1px solid rgba(217,119,6,.2);border-radius:16px;padding:24px;margin-bottom:28px}}
.framework-intro h3{{font-size:1rem;color:#92400e;margin-bottom:8px}}
.framework-intro p{{font-size:.9rem;margin:0}}
.framework-steps{{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}}
.framework-step{{padding:6px 14px;border-radius:20px;font-size:.8rem;font-weight:600;color:#fff}}
.framework-step.ctx{{background:#d97706}}.framework-step.ord{{background:#0d9488}}.framework-step.exp{{background:#0891b2}}.framework-step.int{{background:#7c3aed}}.framework-step.mgmt{{background:#dc2626}}
.scenario{{background:var(--rdx-bg-card);border:1px solid var(--rdx-border);border-radius:16px;margin-bottom:28px;overflow:hidden}}
.scenario-header{{padding:20px 24px;border-bottom:1px solid var(--rdx-border);display:flex;align-items:center;gap:12px;flex-wrap:wrap}}
.scenario-modality{{background:var(--rdx-teal-50);color:var(--rdx-teal-dark);font-size:.75rem;font-weight:700;padding:4px 10px;border-radius:6px;text-transform:uppercase;letter-spacing:.5px}}
.scenario-title{{font-size:1.2rem;font-weight:700}}
.scenario-body{{padding:24px}}
.vignette{{background:var(--rdx-bg-hover);border-left:4px solid var(--rdx-teal);padding:16px 20px;border-radius:0 12px 12px 0;margin-bottom:20px;font-size:.95rem}}
.vignette-label{{font-size:.75rem;font-weight:700;color:var(--rdx-teal);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}}
.reasoning-steps{{display:flex;flex-direction:column;gap:16px}}
.reasoning-step{{border:1px solid var(--rdx-border);border-radius:12px;overflow:hidden}}
.step-trigger{{width:100%;display:flex;align-items:center;gap:12px;padding:14px 20px;background:var(--rdx-bg-card);border:none;cursor:pointer;font-family:inherit;font-size:.95rem;font-weight:600;color:var(--rdx-text);text-align:left;transition:background .15s}}
.step-trigger:hover{{background:var(--rdx-teal-50)}}
.step-num-badge{{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:700;color:#fff;flex-shrink:0}}
.step-0 .step-num-badge{{background:#d97706;font-size:1rem}}.step-1 .step-num-badge{{background:#0d9488}}.step-2 .step-num-badge{{background:#0891b2}}.step-3 .step-num-badge{{background:#7c3aed}}.step-4 .step-num-badge{{background:#dc2626}}
.step-arrow{{margin-left:auto;font-size:1.2rem;color:var(--rdx-text-muted);transition:transform .2s}}
.step-trigger[aria-expanded="true"] .step-arrow{{transform:rotate(180deg)}}
.step-content{{padding:0 20px 20px;display:none}}.step-content.open{{display:block}}
.choices{{display:grid;gap:10px;margin:12px 0}}
.choice{{background:var(--rdx-bg-card);border:2px solid var(--rdx-border);padding:12px 16px;border-radius:10px;cursor:pointer;display:flex;align-items:flex-start;gap:10px;transition:all .2s;font-size:.9rem}}
.choice:hover{{border-color:var(--rdx-teal);transform:translateX(3px)}}
.choice.correct{{border-color:var(--rdx-success);background:rgba(34,197,94,.08);pointer-events:none}}
.choice.wrong{{border-color:var(--rdx-danger);background:rgba(239,68,68,.08);pointer-events:none}}
.choice-letter{{font-weight:700;min-width:20px;color:var(--rdx-teal)}}
.explanation{{background:var(--rdx-teal-50);border:1px solid var(--rdx-teal);border-radius:10px;padding:16px;margin-top:12px;font-size:.9rem;display:none}}.explanation.show{{display:block}}
.explanation h5{{color:var(--rdx-teal-dark);margin-bottom:6px;font-size:.85rem;text-transform:uppercase;letter-spacing:.5px}}
.pearl{{background:linear-gradient(135deg,rgba(217,119,6,.1),rgba(245,158,11,.1));border-left:4px solid #d97706;padding:14px 16px;border-radius:0 10px 10px 0;margin:12px 0;font-size:.9rem}}
.pearl strong{{color:#92400e}}
.danger-box{{background:linear-gradient(135deg,rgba(220,38,38,.08),rgba(239,68,68,.08));border-left:4px solid var(--rdx-danger);padding:14px 16px;border-radius:0 10px 10px 0;margin:12px 0;font-size:.9rem}}
.danger-box strong{{color:var(--rdx-danger)}}
.radiopaedia-link{{display:inline-flex;align-items:center;gap:8px;background:var(--rdx-bg-hover);border:1px solid var(--rdx-border);border-radius:8px;padding:10px 16px;margin-top:16px;text-decoration:none;color:var(--rdx-teal);font-size:.85rem;font-weight:600;transition:all .15s}}
.radiopaedia-link:hover{{border-color:var(--rdx-teal);background:var(--rdx-teal-50)}}
.cross-links{{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:24px}}
.cross-link{{padding:14px;background:var(--rdx-teal-50);border:1px solid var(--rdx-border);border-radius:10px;text-decoration:none;color:var(--rdx-text);transition:all .15s}}
.cross-link:hover{{border-color:var(--rdx-teal)}}
.cross-link-title{{font-weight:600;font-size:.9rem}}.cross-link-desc{{font-size:.8rem;color:var(--rdx-text-muted);margin-top:2px}}
@media(max-width:640px){{.main{{padding:16px}}.scenario-body{{padding:16px}}.vignette{{padding:12px 14px}}}}
</style>
</head>
<body>
<div class="header"><div class="header-row"><div class="header-title">{data["icon"]} RadDx: {data["title"]}<span class="badge">{data["badge"]}</span></div></div></div>
<div class="main">
<div class="framework-intro">
<h3>5-Step Imaging Reasoning Framework</h3>
<p>Each scenario uses a structured approach that begins with epidemiological context before imaging decisions. Knowing <em>who</em> the patient is changes <em>what</em> you look for.</p>
<div class="framework-steps">
<span class="framework-step ctx">🌍 Context</span>
<span class="framework-step ord">1. Order</span>
<span class="framework-step exp">2. Expect</span>
<span class="framework-step int">3. Interpret</span>
<span class="framework-step mgmt">4. Integrate</span>
</div>
</div>
{scenarios_html}
{cross_html}
{refs_html}
</div>
<script>
function toggleStep(btn){{const e=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',!e);btn.nextElementSibling.classList.toggle('open')}}
function selectChoice(el,letter){{const c=el.closest('.choices'),correct=c.dataset.correct;c.querySelectorAll('.choice').forEach(ch=>{{ch.style.pointerEvents='none';const l=ch.querySelector('.choice-letter').textContent.trim().replace('.','');if(l===correct)ch.classList.add('correct');else if(ch===el&&l!==correct)ch.classList.add('wrong')}});const ex=c.nextElementSibling;if(ex&&ex.classList.contains('explanation'))ex.classList.add('show')}}
</script>
<script src="../js/rdx-nav.js" defer></script>
</body></html>'''


import os
for key, data in MODULES.items():
    html = generate_module(key, data)
    filepath = f"modules/raddx-{key}.html"
    with open(filepath, 'w') as f:
        f.write(html)
    print(f"Generated {filepath} ({len(html):,} bytes, {len(data['scenarios'])} scenarios)")

print("\nDone! 4 remaining RadDx modules generated.")
