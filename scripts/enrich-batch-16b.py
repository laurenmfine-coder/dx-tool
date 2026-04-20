#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"arc-diabetes-pt": {
  "diagnosis": "Type 2 Diabetes — PT: Peripheral Neuropathy Balance Training, LOPS Management, Fall Prevention",
  "problems": [
    {"problem":"DPN — loss of protective sensation, bilateral feet","icd":"E11.40","onset":"2022","status":"Active","notes":"Eduardo Reyes, 56M — 10g monofilament: unable to feel bilateral feet. PT referral for balance training and fall prevention."},
    {"problem":"Fall risk — TUG 15s, Berg Balance Scale 42/56","icd":"Z91.81","onset":"2024","status":"Active","notes":"Romberg positive. Tandem gait impaired. Proprioceptive deficit from DPN drives fall risk."},
    {"problem":"Foot at risk — callus, absent ankle reflexes","icd":"E11.621","onset":"2024","status":"Active","notes":"Cannot feel plantar pressure. Any friction → ulceration without sensation warning."}
  ],
  "medications": [
    {"name":"Proprioceptive training — firm to foam progression","sig":"Single-leg balance: firm → foam → eyes closed. Sensory substitution — visual and vestibular compensation for lost proprioception. 3x/week.","prescriber":"PT","start":"2024","refills":0,"status":"Active"},
    {"name":"Therapeutic footwear — extra-depth shoes","sig":"Custom insoles redistribute plantar pressure. Medicare therapeutic footwear benefit for qualifying diabetic patients.","prescriber":"PT/Podiatry","start":"2024","refills":0,"status":"Active"},
    {"name":"Daily foot inspection protocol","sig":"Mirror inspection of plantar surface daily. Check for redness, blisters, abrasions. Cannot rely on pain signal.","prescriber":"PT/Podiatry","start":"2024","refills":0,"status":"Active — education"}
  ],
  "labs": [{"date":"11/2024","panel":"PT Functional Assessment","results":[
    {"test":"TUG","value":"15","unit":"seconds","ref":"<12 normal; >13.5 high fall risk","flag":"H"},
    {"test":"10g monofilament","value":"Unable to feel — bilateral","unit":"","ref":"Protective sensation present","flag":"H"},
    {"test":"Berg Balance Scale","value":"42/56","unit":"","ref":"<45 = increased fall risk","flag":"L"},
    {"test":"Ankle dorsiflexion ROM","value":"8°","unit":"","ref":"10-20°","flag":"L"},
    {"test":"Ankle reflex","value":"Absent bilaterally","unit":"","ref":"Present","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["DPN — balance impairment, proprioceptive deficit, PT fall prevention (correct)","Vestibular dysfunction — Dix-Hallpike negative; neuropathy pattern on exam","Cerebellar ataxia — no intention tremor or dysmetria; stocking-glove distribution","Spinal stenosis — neurogenic claudication; different distribution and provocation","B12 deficiency neuropathy — check B12 (metformin depletes); may coexist with DPN","Peripheral vascular disease — absent pulses would suggest; ABI normal here"],
  "coachFinal": "Diagnosis: DPN-related fall risk, PT management. Key learning: (1) Sensory substitution strategy: DPN eliminates joint position sense → PT trains patients to rely on visual and vestibular inputs. Exercises progress firm → foam → eyes closed → narrow base. (2) TUG test: >13.5 seconds = high fall risk. This patient at 15 seconds requires urgent PT. (3) Foot inspection: patients with LOPS cannot feel ulcers developing — daily mirror inspection is a core PT education intervention. Any finding triggers podiatry contact. (4) Therapeutic footwear: extra-depth shoes with custom insoles redistribute plantar pressure and prevent callus/ulceration. PT/podiatry collaboration for footwear prescription. (5) Ankle dorsiflexion: reduced ROM from DPN and equinus increases plantar pressure and fall risk. Heel cord stretching is a component of the PT program."
},
"arc-hf-pt": {
  "diagnosis": "HFrEF — PT Cardiac Rehabilitation, Exercise Prescription, Functional Capacity Improvement",
  "problems": [
    {"problem":"HFrEF EF 30% — cardiac rehab referral","icd":"I50.20","onset":"2020","status":"Active","notes":"Richard Chen, 62M — 6MWT 280m (severely reduced). NYHA Class III. Phase II cardiac rehab initiated."},
    {"problem":"Severely reduced exercise tolerance — deconditioning on top of HF","icd":"R53.81","onset":"2024","status":"Active","notes":"6MWT 280m vs predicted >500m. Combined HF physiology and deconditioning."},
    {"problem":"Depression — PHQ-9 12, bidirectional with HF","icd":"F32.9","onset":"2023","status":"Active","notes":"Moderate depression. Exercise in cardiac rehab is evidence-based treatment for HF-related depression."}
  ],
  "medications": [
    {"name":"Supervised aerobic exercise — 3x/week, 20-40 min","sig":"Target 40-70% VO2max, Borg RPE 12-14. Start 10-20 min, add 5 min/week. Monitor HR, BP, SpO2 during each session.","prescriber":"PT/Cardiologist","start":"2024","refills":0,"status":"Active — Phase II"},
    {"name":"Resistance training — 2x/week, 40-60% 1RM","sig":"Skeletal muscle myopathy is a core HF pathophysiology — resistance training improves peripheral muscle function independently of cardiac output.","prescriber":"PT","start":"2024","refills":0,"status":"Active"},
    {"name":"Stop session criteria — SpO2 <88%, angina, SBP >200 or <90","sig":"Safety monitoring thresholds. Terminate exercise and notify cardiologist if criteria met.","prescriber":"PT protocol","start":"2024","refills":0,"status":"Active — safety"}
  ],
  "labs": [{"date":"11/2024","panel":"Cardiac Rehab Baseline","results":[
    {"test":"6MWT","value":"280","unit":"meters","ref":"400-600m predicted","flag":"L"},
    {"test":"Resting HR","value":"68","unit":"bpm","ref":"60-100","flag":""},
    {"test":"Resting BP","value":"112/70","unit":"mmHg","ref":"<130/80","flag":""},
    {"test":"SpO2 peak exercise","value":"91","unit":"%","ref":"≥90%","flag":""},
    {"test":"PHQ-9","value":"12","unit":"/27","ref":"0-4 minimal","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["HFrEF — cardiac rehab PT, exercise prescription (correct)","Exercise contraindicated in HFrEF — INCORRECT; HF-ACTION trial shows mortality benefit","Decompensated HF — euvolemic on exam; rehab appropriate now","6MWT normal — 280m is severely reduced for age-matched peers","Cardiac rehab only for EF >40% — INCORRECT; HFrEF benefits from supervised exercise","Resistance training contraindicated in HF — INCORRECT; improves skeletal muscle myopathy"],
  "coachFinal": "Diagnosis: HFrEF cardiac rehabilitation. Key learning: (1) HF-ACTION trial: structured aerobic exercise in HFrEF reduced all-cause mortality/hospitalization 11% — exercise training is now Class I recommendation for stable HFrEF. (2) Exercise prescription: 40-70% VO2max, Borg RPE 12-14, 3-5x/week, 20-45 min. Start conservatively and progress. (3) 6MWT tracking: 280m = severe impairment. Target 50-100m improvement over 12-week program. (4) Skeletal muscle myopathy: atrophy and fiber-type shift is core HF pathophysiology — resistance training improves peripheral muscle function independently of cardiac output. (5) Exercise and depression: cardiac rehab participation reduces depressive symptoms comparably to antidepressants in cardiac disease. PHQ-9 reassessment at 6 and 12 weeks."
},
"pt-chronic-ankle-instability": {
  "diagnosis": "Chronic Lateral Ankle Instability — ATFL/CFL Laxity, Neuromuscular Rehabilitation, Peroneal Strengthening",
  "problems": [
    {"problem":"Chronic lateral ankle instability — 4th sprain in 3 years","icd":"M25.371","onset":"2021","status":"Active","notes":"Jasmine Williams, 24F — soccer player. ATFL and CFL laxity on stress testing. CAIT score 16. Single-leg balance 12 seconds."},
    {"problem":"Proprioceptive deficit — damaged mechanoreceptors in ATFL","icd":"M25.371","onset":"2021","status":"Active","notes":"Repeated sprains damage mechanoreceptors — functional instability overlaps with mechanical laxity."},
    {"problem":"Peroneal weakness — primary dynamic stabilizer deficiency","icd":"M62.151","onset":"2021","status":"Active","notes":"Peroneus longus/brevis strength 3+/5 — impaired active restraint against inversion."}
  ],
  "medications": [
    {"name":"Neuromuscular training — BESS protocol, 3x/week","sig":"Firm → foam → eyes closed → perturbation. Proprioceptive retraining compensates for mechanoreceptor damage. 6-week minimum program.","prescriber":"PT","start":"2024","refills":0,"status":"Active"},
    {"name":"Peroneal strengthening — eversion resistance progression","sig":"Theraband eversion → single-leg heel raises → lateral step-ups → unstable surface. Target 5/5 symmetric strength.","prescriber":"PT","start":"2024","refills":0,"status":"Active"},
    {"name":"Lace-up ankle brace — sport activity","sig":"Reduces re-sprain risk 50-60% during return to sport. Adjunct to rehab, not a substitute.","prescriber":"PT","start":"2024","refills":1,"status":"Active — sport"}
  ],
  "labs": [{"date":"11/2024","panel":"Ankle Instability Assessment","results":[
    {"test":"CAIT score","value":"16/30","unit":"","ref":"≥24 stable","flag":"L"},
    {"test":"Anterior drawer test","value":"Positive — 8mm translation","unit":"","ref":"<5mm","flag":"H"},
    {"test":"Single-leg balance (eyes open)","value":"12","unit":"seconds","ref":">30 seconds","flag":"L"},
    {"test":"Peroneal eversion strength","value":"3+/5 right","unit":"","ref":"5/5","flag":"L"},
    {"test":"Talar tilt test","value":"Positive — >5° side-to-side","unit":"","ref":"<5°","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Chronic lateral ankle instability — neuromuscular rehab (correct)","Peroneal tendon tear — US/MRI if suspected; mechanical instability is primary diagnosis","Osteochondral lesion of talus — persistent joint line pain, imaging; different presentation","Acute lateral ankle sprain — this is recurrent/chronic, not acute","Subtalar instability — CFL involvement; assess subtalar mobility","Sinus tarsi syndrome — lateral hindfoot pain; different anatomical location"],
  "coachFinal": "Diagnosis: chronic lateral ankle instability. Key learning: (1) CAI has two components: mechanical instability (ATFL/CFL laxity) and functional instability (proprioceptive deficit from damaged mechanoreceptors). Both must be addressed. (2) Peroneal muscles are the primary dynamic restraints to inversion — strengthening them is essential. Progress from bilateral to unilateral to unstable surface. (3) CAIT score: <24 = instability. Return to sport criteria: CAIT ≥24 + single-leg balance >30s + symmetric peroneal strength + sport-specific testing. (4) Neuromuscular training reduces re-sprain rate 40-50% — superior to bracing alone. (5) Surgery (Brostrom-Gould repair) reserved for true mechanical instability unresponsive to 6 months of rehab."
},
"pt-pediatric-cp": {
  "diagnosis": "Spastic Diplegia Cerebral Palsy — GMFCS Level II, Botulinum Toxin + PT, Hip Surveillance",
  "problems": [
    {"problem":"Spastic diplegia CP — GMFCS Level II, scissor gait","icd":"G80.1","onset":"Birth","status":"Active","notes":"Marcus Johnson, 7M — premature 28 weeks, IVH. Ambulates with forearm crutches. GMFCS II."},
    {"problem":"Hip subluxation risk — migration percentage 28%","icd":"M24.351","onset":"2024","status":"Active","notes":"6-month re-imaging and orthopaedics follow-up required. >25% = increased monitoring."},
    {"problem":"Ankle equinus — gastrocnemius spasticity, -5° dorsiflexion","icd":"M21.371","onset":"2022","status":"Active","notes":"Botox to gastrocnemius q6 months. PT must begin within 2 weeks of injection for maximum benefit."}
  ],
  "medications": [
    {"name":"Botulinum toxin A — gastrocnemius, q6 months","sig":"PT must begin WITHIN 2 WEEKS of injection — the therapeutic window where muscle is relaxed and ROM gains are possible.","prescriber":"Developmental Peds/PM&R","start":"2022","refills":0,"status":"Active — q6 months"},
    {"name":"Hinged AFO — 5° dorsiflexion stop","sig":"Allows dorsiflexion during stance, blocks plantarflexion. Provides push-off energy return. Worn during all ambulation.","prescriber":"PT/Orthotics","start":"2022","refills":1,"status":"Active — replace annually"},
    {"name":"PT gait training — 2x/week","sig":"Treadmill training, stair negotiation, obstacle courses. Repetitive stepping activates central pattern generators.","prescriber":"PT","start":"2021","refills":0,"status":"Active ongoing"}
  ],
  "labs": [{"date":"11/2024","panel":"CP Functional Assessment","results":[
    {"test":"GMFCS Level","value":"II","unit":"","ref":"I = walks without limitations","flag":""},
    {"test":"6MWT","value":"320","unit":"meters","ref":"450-600m age-matched","flag":"L"},
    {"test":"Hip migration percentage right","value":"28","unit":"%","ref":"<25%","flag":"H"},
    {"test":"Ankle dorsiflexion passive right","value":"-5","unit":"degrees","ref":"10-20°","flag":"L"},
    {"test":"PEDI-CAT mobility","value":"45th percentile for CP","unit":"","ref":"Age-matched","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Spastic diplegia CP — GMFCS II, Botox + PT protocol (correct)","Spastic quadriplegia — all 4 limbs; diplegia predominantly lower extremity","Hereditary spastic paraplegia — genetic, progressive; CP is static after insult","Dystonic CP — movement disorder component; primarily spastic here","Myelomeningocele — sensory loss, bowel/bladder; CP has normal sensation","Muscular dystrophy — progressive weakness, not spastic; different course"],
  "coachFinal": "Diagnosis: spastic diplegia CP, GMFCS Level II. Key learning: (1) Botox + PT timing: PT must begin within 2 weeks of Botox injection — the window of reduced spasticity enables ROM and motor control gains. Botox without PT wastes the injection. (2) GMFCS is relatively stable — predicts long-term ambulatory potential. Level II = walks with limitations on uneven surfaces and long distances. (3) Hip surveillance: spastic CP causes hip subluxation from muscle imbalance. Migration percentage >25% = increased monitoring; >40% = surgical consultation. Annual radiographs in children <8 years. (4) Treadmill training in CP: body-weight-supported treadmill training improves gait speed and endurance. Repetitive stepping activates spinal central pattern generators. (5) AFO selection: hinged AFOs preserve push-off energy return. Solid AFOs for more severe equinus. PT and orthotist collaborate."
},
"pt-rotator-cuff-rehab": {
  "diagnosis": "Rotator Cuff Repair Post-Op Week 6 — Phase II Passive ROM Only, Tissue Healing Protection",
  "problems": [
    {"problem":"Post-op rotator cuff repair — week 6, entering Phase II","icd":"M75.120","onset":"2024","status":"Active","notes":"Robert Kim, 55M — full-thickness supraspinatus repair. Phase II: passive ROM, scapular stabilization. Active motion restricted until week 12."},
    {"problem":"Repair tissue healing — insufficient strength for active loading","icd":"M75.120","onset":"2024","status":"Active","notes":"Repaired tendon has minimal tensile strength until 12 weeks — active contraction before this risks re-tear."},
    {"problem":"Posterior capsule tightness — adhesive capsulitis prevention","icd":"M75.0","onset":"2024","status":"Active","notes":"Daily passive stretching to prevent capsule contraction while protecting repair."}
  ],
  "medications": [
    {"name":"Passive ROM — PT-performed, Phase II (weeks 6-12)","sig":"Passive forward flexion to 150°, ER to 45°, IR to 45°. Patient performs pendulums 3x/day at home. NO active ROM against resistance.","prescriber":"PT/Surgeon","start":"2024","refills":0,"status":"Active — Phase II"},
    {"name":"Scapular stabilization — safe in Phase II","sig":"Middle trapezius and serratus anterior exercises — do not stress the supraspinatus repair. Essential for normal scapulohumeral rhythm before active shoulder exercises.","prescriber":"PT","start":"2024","refills":0,"status":"Active"},
    {"name":"Active-assisted ROM — begin at week 12","sig":"Pulley and wand exercises when tendon has sufficient strength. Physician approval required before advancing.","prescriber":"PT","start":"2024","refills":0,"status":"Planned — Phase III"}
  ],
  "labs": [{"date":"11/2024","panel":"Post-Op Assessment Week 6","results":[
    {"test":"Passive forward flexion","value":"145","unit":"degrees","ref":"180°","flag":"L"},
    {"test":"Active ROM","value":"Restricted — Phase II (passive only)","unit":"","ref":"Unrestricted at Phase III","flag":""},
    {"test":"External rotation passive","value":"40","unit":"degrees","ref":"60-70°","flag":"L"},
    {"test":"VAS pain at rest","value":"2/10","unit":"","ref":"0/10","flag":""},
    {"test":"VAS pain with PT","value":"4/10","unit":"","ref":"<5/10 acceptable","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Post-op rotator cuff Phase II — passive ROM only, scapular stabilization (correct)","Active strengthening at 6 weeks — protocol violation; repair has insufficient tensile strength","Re-tear — acute pain increase, sudden loss of motion; not present here","Adhesive capsulitis developing — posterior capsule tightness early; passive stretching prevents progression","Cervical radiculopathy — known rotator cuff diagnosis; radicular pattern absent","Full ROM expected at 6 weeks — unrealistic; Phase II passive ROM to 150° is appropriate target"],
  "coachFinal": "Diagnosis: post-op rotator cuff Phase II rehab. Key learning: (1) Tissue healing biology: inflammatory phase 0-2 weeks, proliferative 2-6 weeks, remodeling 6 weeks-2 years. Repaired tendon has minimal tensile strength until week 12 — active contraction before this risks re-tear. (2) Scapular stabilization in Phase II: trapezius and serratus exercises don't stress the supraspinatus — safe and important for restoring normal scapulohumeral rhythm. (3) Adhesive capsulitis is the biggest complication of rotator cuff repair. Daily passive posterior capsule stretching throughout rehabilitation prevents it — balance with repair protection. (4) Pain as guide: mild discomfort (4-5/10 VAS) acceptable during passive stretching. Pain >6/10 = excessive tissue stress — modify technique. (5) Phase milestones: Phase I (0-6w) pendulums only; Phase II (6-12w) passive ROM; Phase III (12-20w) active-assisted then active; Phase IV (20+w) progressive strengthening."
},
"pt-spinal-cord-injury-incomplete": {
  "diagnosis": "Incomplete SCI ASIA C T10 — Locomotor Training, FES, Spasticity Management",
  "problems": [
    {"problem":"Incomplete SCI — ASIA C, T10, 6 months post-injury","icd":"S34.109A","onset":"2024","status":"Active","notes":"James Carter, 32M — MVA. Ambulatory with bilateral forearm crutches and AFOs. LEMS 28/50. 10MWT 0.38 m/s."},
    {"problem":"Spasticity — modified Ashworth 2 bilateral LE","icd":"G82.20","onset":"2024","status":"Active","notes":"Baclofen titrating. Spasticity can paradoxically assist (extensor tone for standing) or impede (flexor spasms) gait."},
    {"problem":"Neurogenic bladder — autonomic dysreflexia risk","icd":"N31.9","onset":"2024","status":"Active","notes":"T10 SCI — below T6, AD risk is reduced but not absent. PT monitors for AD during therapy."}
  ],
  "medications": [
    {"name":"Body-weight-supported treadmill training — 40% BWS, 0.8 mph","sig":"Activates spinal central pattern generators. Step-down BWS weekly as function improves. 30 min sessions 3x/week.","prescriber":"PT","start":"2024","refills":0,"status":"Active — locomotor training"},
    {"name":"FES cycling — 30 min 3x/week","sig":"Functional electrical stimulation cycles lower extremity muscles. Maintains muscle mass, improves cardiovascular fitness, reduces spasticity.","prescriber":"PT","start":"2024","refills":0,"status":"Active"},
    {"name":"Baclofen 10mg TID — titrating","sig":"Dose to balance function — extensor tone helps standing, flexor spasms impede gait. Calibrate to functional outcome, not spasticity scale score alone.","prescriber":"PM&R","start":"2024","refills":3,"status":"Active — titrating"}
  ],
  "labs": [{"date":"11/2024","panel":"SCI Functional Assessment","results":[
    {"test":"ASIA Classification","value":"C — motor incomplete","unit":"","ref":"A = complete; E = normal","flag":""},
    {"test":"LEMS","value":"28/50","unit":"","ref":"50 = normal","flag":"L"},
    {"test":"10MWT","value":"0.38","unit":"m/s","ref":"<0.4 = limited community ambulator","flag":"L"},
    {"test":"Modified Ashworth — bilateral LE","value":"2","unit":"","ref":"0 = normal tone","flag":"H"},
    {"test":"6MWT","value":"180","unit":"meters","ref":"400+ community ambulator","flag":"L"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Incomplete SCI ASIA C — locomotor training, FES (correct)","Complete SCI — ASIA C has preserved motor function below injury","Cauda equina syndrome — lower motor neuron; T10 = upper motor neuron pattern","Guillain-Barré — ascending, resolving; SCI is static post-injury","Spinal cord tumor — progressive; traumatic SCI has acute onset history","Multiple sclerosis — relapsing-remitting; different history and MRI pattern"],
  "coachFinal": "Diagnosis: incomplete SCI ASIA C, locomotor training. Key learning: (1) BWSTT activates spinal central pattern generators — neural circuits that generate rhythmic stepping independently of supraspinal input. Repetitive stepping promotes neuroplasticity in incomplete SCI. (2) ASIA C → D transition with intensive locomotor training is achievable — early, intensive rehab in the first 6-12 months maximizes neuroplastic potential. (3) Spasticity management nuance: in SCI, extensor tone helps standing and transfers. Flexor spasms impede gait. Don't over-suppress — calibrate to function. (4) 10MWT velocity: <0.4 m/s = limited community ambulator; 0.4-0.8 = moderate community; >0.8 = full community. Target: improve walking speed to community ambulator threshold. (5) Autonomic dysreflexia: noxious stimulus below injury → sympathetic discharge → severe hypertension + bradycardia. PT recognizes warning signs (headache, flushing, sweating above injury) and responds: sit up, identify/remove stimulus, monitor BP."
},
"pt-total-shoulder-replacement": {
  "diagnosis": "Reverse Total Shoulder Arthroplasty — Week 8, Deltoid Strengthening, Dislocation Precautions",
  "problems": [
    {"problem":"Reverse TSA post-op — week 8, massive rotator cuff arthropathy","icd":"Z96.611","onset":"2024","status":"Active","notes":"Patricia Moore, 72F — reverse TSA for irreparable rotator cuff tear + glenohumeral arthritis. Deltoid is now the primary shoulder elevator."},
    {"problem":"Deltoid as primary motor — unique to reverse TSA","icd":"Z96.611","onset":"2024","status":"Active","notes":"Unlike anatomic TSA, reverse TSA mechanics depend entirely on deltoid function. Deltoid strengthening is the primary PT goal."},
    {"problem":"Posterior dislocation precautions — permanent","icd":"Z96.611","onset":"2024","status":"Active","notes":"Combined ER + extension dislocates reverse TSA posteriorly. Reaching behind back is the highest-risk position — permanent precaution."}
  ],
  "medications": [
    {"name":"Deltoid strengthening — isometric → isotonic progression","sig":"Isometric deltoid → resisted side raises → light overhead lifting. Deltoid is THE power source — must be trained aggressively in Phase III.","prescriber":"PT","start":"2024","refills":0,"status":"Active — Phase III"},
    {"name":"Active forward flexion — begin at week 6","sig":"Active shoulder elevation. Target 150-170° at 6 months. External rotation limited to 30° initially.","prescriber":"PT/Surgeon","start":"2024","refills":0,"status":"Active"},
    {"name":"Dislocation precautions — ongoing education","sig":"NO reaching behind back (combined ER + extension). NO reaching across body to opposite shoulder. Permanent precautions — not time-limited.","prescriber":"PT/Surgeon","start":"2024","refills":0,"status":"Active — permanent"}
  ],
  "labs": [{"date":"11/2024","panel":"Reverse TSA Week 8","results":[
    {"test":"Active forward flexion","value":"115","unit":"degrees","ref":"150-170° target","flag":"L"},
    {"test":"Active ER (arm at side)","value":"28","unit":"degrees","ref":"30-45° target","flag":""},
    {"test":"Deltoid MMT","value":"4/5","unit":"","ref":"5/5","flag":""},
    {"test":"QuickDASH","value":"42/100","unit":"","ref":"<20 functional goal","flag":"H"},
    {"test":"VAS pain","value":"2/10","unit":"","ref":"0-2 acceptable at 8 weeks","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Reverse TSA — deltoid strengthening, posterior dislocation precautions (correct)","Anatomic TSA protocol — reverse TSA has no intact rotator cuff; deltoid focus is fundamentally different","Standard rotator cuff post-op protocol — does not apply; no cuff to protect","Dislocation — precautions being observed; no acute dislocation","Surgical infection — no fever, erythema, or wound changes","Aggressive ROM at week 8 — posterior dislocation risk; precautions must be respected"],
  "coachFinal": "Diagnosis: reverse TSA post-op PT. Key learning: (1) Reverse TSA vs anatomic TSA: anatomic preserves the rotator cuff. Reverse TSA — used when cuff is irreparable — reverses ball-and-socket: metal ball on glenoid, cup on humerus. The deltoid replaces all rotator cuff function. PT protocol is completely different. (2) Deltoid rehabilitation: is THE power source after reverse TSA. Isometric → progressive resistance. Without deltoid strength, the reverse TSA fails functionally. (3) Posterior dislocation: combined ER + extension (reaching behind back) = most common dislocation mechanism. Permanent precaution: no reaching behind back, no tucking in shirt, no reaching to back seat. (4) Rehab phases: Phase I (0-6w) passive/pendulums; Phase II (6-12w) active-assisted; Phase III (12+w) strengthening, ADL training. (5) QuickDASH target: <20 (functional) by 6 months with rehab compliance."
},
"pt-vestibular-rehab": {
  "diagnosis": "BPPV Posterior Canal Right — Epley Maneuver, Home Program, Fall Risk Reduction",
  "problems": [
    {"problem":"BPPV — posterior canal, right side","icd":"H81.10","onset":"2024","status":"Active","notes":"Dorothy Nelson, 68F — brief vertigo with position change (rolling over, looking up). Dix-Hallpike right: upbeat torsional nystagmus, 5-10s latency, fatigues."},
    {"problem":"Fall risk — two near-falls from sudden vertigo","icd":"Z91.81","onset":"2024","status":"Active","notes":"TUG 14 seconds. Balance impaired from vestibular disruption."},
    {"problem":"Avoidance behavior — worsens vestibular deconditioning","icd":"F41.1","onset":"2024","status":"Active","notes":"Avoiding head movements prolongs BPPV and causes vestibular deconditioning. Habituation exercises required."}
  ],
  "medications": [
    {"name":"Epley maneuver — right posterior canal","sig":"4-position canalith repositioning. 85% success rate in one session. Teach patient to self-perform at home. Follow-up in 1 week if vertigo persists.","prescriber":"PT","start":"2024","refills":0,"status":"Active — treatment"},
    {"name":"Brandt-Daroff exercises — home program","sig":"3 sets of 5 reps, 3x/day until no vertigo for 2 consecutive days. Promotes habituation if particles don't fully resolve with Epley.","prescriber":"PT","start":"2024","refills":0,"status":"Active — home program"},
    {"name":"Balance training — concurrent with BPPV treatment","sig":"Progressive balance training addressing secondary vestibular compensation and fall risk.","prescriber":"PT","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Vestibular Assessment","results":[
    {"test":"Dix-Hallpike right","value":"Positive — upbeat torsional nystagmus, 5-10s latency, fatigues","unit":"","ref":"Negative","flag":"H"},
    {"test":"Dix-Hallpike left","value":"Negative","unit":"","ref":"Negative","flag":""},
    {"test":"Roll test (supine)","value":"Negative","unit":"","ref":"Negative — no horizontal nystagmus","flag":""},
    {"test":"TUG","value":"14","unit":"seconds","ref":"<12 normal","flag":"H"},
    {"test":"Dynamic Visual Acuity","value":"3 line loss","unit":"","ref":"<2 line loss","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["BPPV posterior canal right — Epley maneuver (correct)","Horizontal canal BPPV — roll test positive with horizontal nystagmus; negative here","Vestibular neuritis — constant vertigo, not positional; adaptation exercises not Epley","Ménière disease — vertigo + tinnitus + hearing loss + aural fullness","Central vertigo — no fatiguing, no latency, vertical nystagmus, other central signs","Orthostatic hypotension — BP drop on standing; not head-position dependent"],
  "coachFinal": "Diagnosis: right posterior canal BPPV. Key learning: (1) Dix-Hallpike: upbeat torsional nystagmus + 5-10s latency + duration <60s + fatigues with repeat = posterior canal BPPV. The nystagmus fast phase beats toward the affected (dependent) ear. (2) Epley mechanics: free-floating otoconia in posterior canal → shift with position change → false signal of rotation → vertigo. Epley guides particles back into utricle via 4-position gravity sequence. (3) 85% success in one session. If persistent after 3 attempts, reconsider diagnosis. Teach self-Epley for recurrences. (4) BPPV recurrence: ~50% at 1 year. Patient education on recognition and self-treatment is key. (5) BPPV vs vestibular neuritis: BPPV = positional, brief, fatigable. Vestibular neuritis = acute constant vertigo, spontaneous nystagmus, gait ataxia — treated with adaptation exercises (Cawthorne-Cooksey), NOT Epley."
},
"layer2-nursing-culture-safety": {
  "diagnosis": "Cultural Safety — Hmong Patient, Spirit Beliefs, Professional Interpreter Required Before Any Clinical Discussion",
  "problems": [
    {"problem":"Cultural safety — belief-based refusal without interpreter","icd":"Z71.89","onset":"2024","status":"Active","notes":"Pao Vang, 65F — Hmong elder, declining wound care citing spirit disturbance. No interpreter used. Nursing intervention needed."},
    {"problem":"Interpreter not used — informed refusal invalid","icd":"Z71.89","onset":"2024","status":"Active","notes":"No professional interpreter = informed refusal cannot be documented. Must use interpreter before ANY clinical discussion."},
    {"problem":"Cultural mediation — bridge traditional and biomedical beliefs","icd":"Z71.89","onset":"2024","status":"Active","notes":"Hmong patients may involve txiv neeb (shaman). Cultural liaison can bridge frameworks without invalidating either."}
  ],
  "medications": [
    {"name":"Professional medical interpreter — IMMEDIATE","sig":"In-person, phone, or video interpreter before any clinical discussion. Family members are NOT appropriate medical interpreters.","prescriber":"Nursing/Hospital policy","start":"2024","refills":0,"status":"IMMEDIATE"},
    {"name":"Cultural mediator / patient advocate referral","sig":"Cultural liaison bridges traditional Hmong healing (txiv neeb) and biomedical care. Explores what IS acceptable rather than simply enforcing protocol.","prescriber":"Nursing/Social Work","start":"2024","refills":0,"status":"Active — referral"},
    {"name":"Wound care adapted — explore patient-acceptable options","sig":"With interpreter: explain procedure, consequences of refusal, explore alternatives. Can ceremony occur alongside care? Can family be present?","prescriber":"Nursing/MD","start":"2024","refills":0,"status":"Active — negotiation"}
  ],
  "labs": [{"date":"11/2024","panel":"Cultural Safety Assessment","results":[
    {"test":"Primary language","value":"Hmong — White Mong dialect","unit":"","ref":"","flag":""},
    {"test":"Decision-making capacity","value":"Intact when interpreter available","unit":"","ref":"","flag":""},
    {"test":"Health literacy","value":"Limited formal education — verbal preferred","unit":"","ref":"","flag":""},
    {"test":"Family preference","value":"Eldest son present — family involvement desired","unit":"","ref":"","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Cultural safety — interpreter needed, spirit-based refusal (correct)","Patient lacks capacity — interpreter-assessed capacity is intact; different conclusion","Family can interpret — NOT appropriate for medical decisions; trained interpreter only","Force procedure — patient has capacity and right to refuse; ethics consultation pathway","Document refusal without interpreter — invalid documentation","Ignore cultural beliefs and proceed — violates cultural safety and patient rights"],
  "coachFinal": "Diagnosis: cultural safety — Hmong patient. Key learning: (1) Professional interpreter is mandatory: family members filter information based on their own beliefs. Only trained medical interpreters are appropriate for consent/refusal discussions — this is a patient safety and legal requirement. (2) Hmong health beliefs: traditional healing involves txiv neeb and belief that spirits can be disturbed by certain procedures. Nursing bridges, not dismisses, these beliefs. (3) Informed refusal requires informed communication: if the patient doesn't understand the procedure (no interpreter), the refusal cannot be documented as informed. (4) Cultural safety vs competence: cultural competence = knowing facts about a culture. Cultural safety = creating an environment where patients feel safe to participate in their own care without judgment. (5) Ethics consultation: when cultural beliefs conflict with medical recommendations and patient has capacity — the appropriate pathway is ethics consultation, not override."
},
"layer2-nursing-family-refusal": {
  "diagnosis": "Family Refusal of Treatment — Surrogate Conflicts With Documented Patient Wishes, Nursing Advocacy and Ethics Consultation",
  "problems": [
    {"problem":"Surrogate refusing NG tube against patient's documented prior wishes","icd":"Z71.89","onset":"2024","status":"Active","notes":"Helen Foster, 84F — severe dementia. Son refusing NG tube. PCP notes document patient's wish: 'no tubes if I can't care for myself.'"},
    {"problem":"Substituted judgment standard — prior wishes override surrogate preference","icd":"Z71.89","onset":"2024","status":"Active","notes":"Surrogate must act on patient's known wishes (substituted judgment), not personal preference. Prior statement is legally and ethically significant."},
    {"problem":"Nursing advocacy — document conflict, escalate, request ethics consultation","icd":"Z71.89","onset":"2024","status":"Active","notes":"Nurses are ethically obligated to advocate for documented patient wishes, even when that means challenging the surrogate."}
  ],
  "medications": [
    {"name":"Social work consultation — family conflict, goals of care","sig":"Social work mediates family conflict, clarifies what patient would have wanted based on values and prior conversations.","prescriber":"Nursing/MD","start":"2024","refills":0,"status":"Active — urgent"},
    {"name":"Palliative care — goals of care and comfort alternatives","sig":"Palliative care explores comfort feeding (assisted oral feeding) as an alternative aligned with patient's prior wishes.","prescriber":"MD/Nursing","start":"2024","refills":0,"status":"Active"},
    {"name":"Ethics committee consultation — surrogate vs documented wishes","sig":"Nursing can initiate ethics consultation independently. Ethics committees advise on the ethical and legal framework — do not make decisions.","prescriber":"Nursing/MD","start":"2024","refills":0,"status":"Active — refer"}
  ],
  "labs": [{"date":"11/2024","panel":"Nursing Advocacy Assessment","results":[
    {"test":"PCP documentation 2021","value":"'Patient stated: no tubes or machines if I can't care for myself'","unit":"","ref":"","flag":""},
    {"test":"Formal advance directive","value":"None on file","unit":"","ref":"AD present","flag":"L"},
    {"test":"Surrogate","value":"Son — legal healthcare surrogate (verbal)","unit":"","ref":"","flag":""},
    {"test":"Current status","value":"Unable to take PO safely — aspiration risk","unit":"","ref":"","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Surrogate refusal — nursing advocacy for documented prior wishes (correct)","Surrogate has absolute authority — must act on patient's known wishes, not personal preferences","Ignore prior documented wishes — prior statements legally and ethically significant","Proceed with NG tube over family objection — requires ethics/legal process first","Document and do nothing — nursing must actively advocate","Discharge — abandonment; ethics consultation is the appropriate pathway"],
  "coachFinal": "Diagnosis: surrogate refusal conflict, nursing advocacy. Key learning: (1) Substituted judgment: surrogate must decide what the patient WOULD have chosen based on known values and prior wishes — not what the surrogate wants. Prior documented statement ('no tubes') is the strongest guide. (2) Nursing advocacy: ANA Code of Ethics obligates nurses to advocate for patient's rights and prior wishes — not defer automatically to surrogates who conflict with documented patient wishes. (3) Ethics consultation: nursing can and should initiate independently when surrogate conflicts with prior documented wishes. (4) Alternatives to NG tube: comfort feeding, hospice care, oral care and comfort measures. Palliative care helps families understand these can be compassionate choices aligned with patient wishes. (5) Documentation: document all family conversations, the patient's prior expressed wishes, consultations ordered, and nursing assessment of the conflict."
},
"nursing-med-reconciliation": {
  "diagnosis": "Medication Reconciliation Near-Miss — Duplicate Metoprolol, Nursing Interception, Incident Report",
  "problems": [
    {"problem":"Duplicate metoprolol — succinate (home) + tartrate (admission orders)","icd":"Z79.899","onset":"2024","status":"Active","notes":"Charles Kim, 72M — home: metoprolol succinate 50mg daily. Admission orders: metoprolol tartrate 25mg BID also written. Total dose doubled."},
    {"problem":"Formulation confusion — succinate vs tartrate are same drug","icd":"T44.7X5A","onset":"2024","status":"Active","notes":"Succinate = extended-release once daily. Tartrate = immediate-release BID-TID. Both ordered simultaneously = double dosing."},
    {"problem":"Nursing interception — held before administration, prescriber notified","icd":"Z79.899","onset":"2024","status":"Active","notes":"Nurse identified discrepancy, held tartrate dose, notified prescriber. Classic near-miss — caught before patient harm."}
  ],
  "medications": [
    {"name":"Metoprolol succinate 50mg daily — continue HOME dose ONLY","sig":"One metoprolol product at home dose equivalent. Prescriber notified, tartrate order discontinued.","prescriber":"Medicine (corrected)","start":"2024","refills":5,"status":"Active — corrected"},
    {"name":"HOLD metoprolol tartrate 25mg BID — duplicate","sig":"Duplicate identified and held by nursing pending prescriber correction.","prescriber":"Nursing — HELD","start":"HELD","refills":0,"status":"HELD — duplicate"},
    {"name":"Incident report — near-miss filed","sig":"Document near-miss in hospital reporting system. No patient harm. System vulnerability identified for quality improvement.","prescriber":"Nursing","start":"2024","refills":0,"status":"Filed"}
  ],
  "labs": [{"date":"11/2024","panel":"Medication Reconciliation","results":[
    {"test":"Home medication verified","value":"Metoprolol succinate 50mg daily — confirmed with pharmacy and PCP","unit":"","ref":"","flag":""},
    {"test":"Admission order reviewed","value":"Metoprolol tartrate 25mg BID also ordered — duplicate identified","unit":"","ref":"","flag":"H"},
    {"test":"Resting HR","value":"62","unit":"bpm","ref":"60-100","flag":""},
    {"test":"BP","value":"122/74","unit":"mmHg","ref":"<130/80","flag":""},
    {"test":"Double dose consequence","value":"Symptomatic bradycardia risk if both given","unit":"","ref":"","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Duplicate metoprolol — nursing reconciliation interception (correct)","Intentional dose increase — communication failure; verify before giving","Give both as ordered — nurses have duty to hold potentially unsafe orders and verify","Therapeutic interchange — succinate and tartrate are same drug; duplicate if both given","Metoprolol toxicity — bradycardia not yet present; caught before administration","Document and administer — never administer a medication appearing to be an error without verification"],
  "coachFinal": "Diagnosis: medication reconciliation near-miss — duplicate metoprolol. Key learning: (1) Medication reconciliation: comparing home medication list to admission orders to identify discrepancies — omissions, duplications, dose differences, wrong formulations. Required at every care transition (Joint Commission). (2) Metoprolol succinate vs tartrate: succinate = extended-release once daily; tartrate = immediate-release BID-TID. Different formulations, same drug — both ordered simultaneously = double dosing. Common error at care transitions. (3) Nursing right to hold: nurses have professional and legal obligation NOT to administer medications they identify as potentially unsafe. Prescriber must be notified, order clarified, and documentation completed. 'Following orders' is not a defense. (4) Near-miss reporting: always report near-misses — they identify system vulnerabilities before they cause patient harm. Near-miss reporting is a patient safety culture responsibility, not a punitive measure. (5) High-alert medications: beta-blockers are on ISMP high-alert lists — errors cause significant cardiac consequences. Extra verification steps at every transition."
},
"nursing-patient-refusal-blood": {
  "diagnosis": "Jehovah's Witness — Informed Refusal of Transfusion, Blood-Sparing Protocol, Nursing Ethical Obligations",
  "problems": [
    {"problem":"Informed refusal of blood transfusion — Hgb 6.8","icd":"Z71.89","onset":"2024","status":"Active","notes":"Samuel Torres, 52M — post-op hip replacement. Jehovah's Witness with signed advance directive refusing all blood products. Capacity confirmed."},
    {"problem":"Nursing ethical tension — patient safety vs autonomy","icd":"Z71.89","onset":"2024","status":"Active","notes":"Patient has capacity, signed AD. Informed refusal is legally and ethically binding. Nursing obligation: ensure informed, provide alternatives."},
    {"problem":"Blood-sparing alternatives — nursing coordination role","icd":"D64.9","onset":"2024","status":"Active","notes":"EPO, IV iron, tranexamic acid — blood-sparing measures acceptable to most JW patients. Nursing coordinates implementation."}
  ],
  "medications": [
    {"name":"Erythropoietin alpha 40,000 units SQ weekly","sig":"Stimulates RBC production. Onset 1-2 weeks. Blood-sparing in JW patients.","prescriber":"Hematology/Medicine","start":"2024","refills":2,"status":"Active"},
    {"name":"IV iron sucrose 200mg IV x3 doses","sig":"Rapid iron repletion to support EPO-driven erythropoiesis.","prescriber":"Medicine","start":"2024","refills":0,"status":"Active"},
    {"name":"Tranexamic acid 1g IV — antifibrinolytic","sig":"Reduces ongoing blood loss. No blood products involved — acceptable to most JW patients.","prescriber":"Surgery","start":"2024","refills":0,"status":"Active"},
    {"name":"DO NOT transfuse — honor advance directive","sig":"Valid AD with capacity. Refusal is legally and ethically binding. Document and proceed with blood-sparing measures.","prescriber":"Nursing documentation","start":"HONOR","refills":0,"status":"Honored"}
  ],
  "labs": [{"date":"11/2024","panel":"Post-Op Anemia","results":[
    {"test":"Hemoglobin","value":"6.8","unit":"g/dL","ref":"13.5-17.5","flag":"L"},
    {"test":"Reticulocyte count","value":"2.1","unit":"%","ref":"0.5-1.5%","flag":"H"},
    {"test":"Ferritin","value":"18","unit":"ng/mL","ref":"30-300","flag":"L"},
    {"test":"Advance directive","value":"Signed, capacity confirmed — no blood products","unit":"","ref":"","flag":""},
    {"test":"HR at rest","value":"104","unit":"bpm","ref":"60-100","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["JW patient — informed refusal of blood, blood-sparing protocol (correct)","Override refusal — patient has capacity and signed AD; override is assault","Family can override — family cannot override a capacitated adult's AD","Court order — not appropriate for capacitated adult with documented refusal","Transfuse without consent — battery and legal liability","EPO insufficient — IV iron + TXA optimize speed; EPO + iron is standard of care"],
  "coachFinal": "Diagnosis: JW patient, informed blood refusal. Key learning: (1) Informed refusal = informed consent: a capacitated adult with information about consequences has the absolute right to refuse life-saving treatment. Signed advance directives are legally binding. (2) Capacity assessment before accepting refusal: confirm patient understands the situation, risks, consequences, and alternatives. JW beliefs alone do not impair capacity. (3) Blood-sparing protocol: EPO + IV iron (augments erythropoiesis), TXA (antifibrinolytic), intraoperative cell salvage, minimizing phlebotomy. Most are acceptable to JW patients as no allogenic blood involved. (4) Documentation: document informed refusal discussion, AD reviewed, blood-sparing alternatives offered and accepted, and that the refusal is honored. (5) Pediatric JW patients: courts regularly override parental refusal of blood for minors. Adult JW with capacity and signed AD: binding."
},
"nursing-peds-pain-nonverbal": {
  "diagnosis": "Pediatric Pain — Nonverbal Child, FLACC Score 7, Inadequate Analgesia, Multimodal Protocol",
  "problems": [
    {"problem":"Post-op pain — nonverbal 4-year-old, FLACC 7","icd":"R52","onset":"2024","status":"Active","notes":"Lily Chen, 4F — post-appendectomy. Grimacing, guarding, crying. FLACC 7 (moderate-severe). Last analgesic 5 hours ago."},
    {"problem":"Inadequate pain control — reactive rather than proactive","icd":"R52","onset":"2024","status":"Active","notes":"Pain allowed to peak before treatment. Scheduled ATC analgesics prevent pain peaks better than reactive PRN dosing."},
    {"problem":"Parent education — behavioral pain cues","icd":"Z71.89","onset":"2024","status":"Active","notes":"Parents believe crying is fear not pain. Nursing education on FLACC indicators and behavioral pain recognition."}
  ],
  "medications": [
    {"name":"Acetaminophen 15mg/kg PO/PR q6h — scheduled ATC","sig":"Around-the-clock — proactive pain management prevents peaks. Do NOT wait for FLACC to escalate before treating.","prescriber":"Pediatric Surgery","start":"2024","refills":0,"status":"Active — scheduled"},
    {"name":"Ibuprofen 10mg/kg PO q6-8h — alternate with acetaminophen","sig":"Multimodal — alternating with acetaminophen provides synergistic analgesia and reduces opioid requirements. Age >6 months, no bleeding risk.","prescriber":"Pediatric Surgery","start":"2024","refills":0,"status":"Active — multimodal"},
    {"name":"Morphine 0.05-0.1mg/kg IV PRN — breakthrough FLACC ≥7","sig":"Opioid for breakthrough pain unresponsive to oral analgesics. Reassess pain 30 min after administration.","prescriber":"Pediatric Surgery","start":"2024","refills":0,"status":"Active PRN"}
  ],
  "labs": [{"date":"11/2024","panel":"Pediatric Pain Assessment","results":[
    {"test":"FLACC score","value":"7/10","unit":"","ref":"0-2 relaxed; 7-10 severe","flag":"H"},
    {"test":"HR","value":"138","unit":"bpm","ref":"80-130 age 4","flag":"H"},
    {"test":"RR","value":"28","unit":"breaths/min","ref":"22-34 age 4","flag":""},
    {"test":"SpO2","value":"98","unit":"%","ref":"≥95%","flag":""},
    {"test":"Last analgesic","value":"5 hours ago","unit":"","ref":"Q6h scheduled","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Post-op pain — FLACC 7, inadequate analgesia (correct)","Fear/anxiety only — FLACC 7 and tachycardia support pain, not anxiety alone","Wait for child to verbalize — nonverbal children cannot self-report; FLACC is the validated tool","Surgical complication — FLACC helps distinguish; post-op day 1 pain is expected","Opioid for all pediatric pain — multimodal (acetaminophen + ibuprofen) is first line; opioids for breakthrough only","Delay assessment — active pain requires immediate assessment and intervention"],
  "coachFinal": "Diagnosis: inadequate pediatric pain — FLACC 7. Key learning: (1) FLACC scale: Face (0-2), Legs (0-2), Activity (0-2), Cry (0-2), Consolability (0-2). Total 0-10. Score 7 = severe — immediate intervention required. Validated for ages 2 months–7 years. (2) Proactive vs reactive: scheduled ATC analgesics (acetaminophen ± ibuprofen) prevent pain peaks. Not waiting for FLACC to escalate is the standard of care in pediatric post-op pain. (3) Multimodal analgesia: alternating acetaminophen + ibuprofen provides synergistic analgesia and reduces opioid requirements — standard pediatric post-op practice. (4) Tachycardia as pain indicator: HR 138 above expected range for age → pain activates sympathetic response. HR normalization with analgesic confirms pain was the cause. (5) Parent education: teach behavioral pain cues (grimacing, guarding, furrowed brow) vs fear (crying that stops with distraction). Parents are key partners in pediatric pain assessment."
},
"nursing-therapeutic-relationship": {
  "diagnosis": "Borderline Personality Disorder — Nursing Therapeutic Relationship, Limit-Setting, Team Consistency",
  "problems": [
    {"problem":"BPD — splitting behaviors, demanding excessive attention","icd":"F60.3","onset":"2024","status":"Active","notes":"Angela Morrison, 35F — inpatient for self-harm. Praising some nurses, hostile to others. Demanding attention 15+ times per shift. AMA threats."},
    {"problem":"Staff splitting — inconsistent team responses worsening behaviors","icd":"F60.3","onset":"2024","status":"Active","notes":"Nursing team divided. Inconsistency worsens BPD splitting. Unified care plan and team meeting needed."},
    {"problem":"AMA threats — safety assessment and documentation","icd":"Z91.89","onset":"2024","status":"Active","notes":"Assess genuine vs relational use of threat. Document capacity, education on consequences, and discussion each time."}
  ],
  "medications": [
    {"name":"Consistent nursing assignment — therapeutic consistency","sig":"Limit number of nurses. Consistent assignment reduces splitting and builds therapeutic alliance over admission.","prescriber":"Charge Nurse/Nurse Manager","start":"2024","refills":0,"status":"Active — staffing"},
    {"name":"Limit-setting — clear, consistent, non-punitive","sig":"'I can spend 15 minutes with you at 9am and 2pm.' Do not respond to escalation with extra attention — reinforces the behavior. Follow through consistently.","prescriber":"Nursing/Psychiatry","start":"2024","refills":0,"status":"Active — care plan"},
    {"name":"Team meeting and unified written care plan","sig":"All staff agree on limits, responses to behaviors, and language used. Inconsistency between nurses is the primary driver of splitting escalation.","prescriber":"Nursing/Psychiatry","start":"2024","refills":0,"status":"Active — multidisciplinary"}
  ],
  "labs": [{"date":"11/2024","panel":"Psychiatric Assessment","results":[
    {"test":"C-SSRS","value":"Moderate ideation — passive wish to die, no current plan","unit":"","ref":"None","flag":"H"},
    {"test":"Safety","value":"No means access on unit. No immediate plan.","unit":"","ref":"","flag":""},
    {"test":"Milieu behavior","value":"Demanding staff attention 15+ times per shift","unit":"","ref":"","flag":"H"},
    {"test":"Medication adherence","value":"Refusing PRN hydroxyzine — testing staff","unit":"","ref":"","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["BPD — splitting, limit-setting nursing intervention (correct)","Malingering — BPD behaviors are not consciously intentional in the same sense","Bipolar disorder with psychosis — different pattern; BPD is a stable personality structure","Anti-social personality disorder — exploitation/criminality vs abandonment fear; different","Extra attention for compliance — reinforces maladaptive behavior; consistent limits are therapeutic","Involuntary hold for AMA threats — assess each threat carefully; most require documentation, not hold"],
  "coachFinal": "Diagnosis: BPD nursing therapeutic relationship. Key learning: (1) Splitting in BPD: patients divide people into all-good or all-bad — not deliberate manipulation, but a core defense mechanism from unstable object representations. Understanding this prevents staff from taking it personally. (2) Limit-setting principles: clear, consistent, non-punitive, behavior-focused. Increased attention in response to escalation REINFORCES the behavior — the limit IS the therapeutic intervention. (3) Team consistency: if nurses respond differently, the patient splits the team. A unified written care plan with specific language is the most important intervention. Address explicitly at every handoff. (4) Therapeutic relationship in BPD: genuine empathy + clear structure. The structure provides the safety and predictability these patients lack internally. Making exceptions undermines the therapeutic relationship, not strengthens it. (5) AMA threats: document capacity assessment, education on consequences, and the discussion. Engage psychiatry when threats escalate or when there is acute safety concern."
},
"study-pediatric-tachycardia": {
  "diagnosis": "Pediatric SVT — HR 240 bpm, Vagal Maneuver (Ice to Face), Adenosine Rapid IV Push Protocol",
  "problems": [
    {"problem":"SVT — infant, HR 240 bpm, narrow complex, hemodynamically stable","icd":"I47.1","onset":"2024","status":"Active","notes":"Tyler Brown, 6M — sudden onset pallor, HR 240 bpm, narrow complex on monitor. BP 82/52, capillary refill 2s. Hemodynamically stable."},
    {"problem":"Vagal maneuver — ice bag to face (diving reflex) in infant","icd":"I47.1","onset":"2024","status":"Active","notes":"Ice bag to face for 15-30 seconds. Triggers mammalian diving reflex → vagal tone → may terminate SVT. First-line before adenosine."},
    {"problem":"Adenosine administration — nursing rapid push protocol","icd":"I47.1","onset":"2024","status":"Active","notes":"0.1mg/kg rapid IV push with immediate NS flush. Half-life <10 seconds — technique is everything. Physician at bedside. Run ECG during administration."}
  ],
  "medications": [
    {"name":"Ice bag to face — vagal maneuver (infant)","sig":"Ice water bag to face 15-30 seconds. Triggers diving reflex → vagal tone → may terminate SVT. Do NOT use carotid massage in infants.","prescriber":"ED/Nursing protocol","start":"2024","refills":0,"status":"Active — first step"},
    {"name":"Adenosine 0.1mg/kg IV rapid push (max 6mg first dose)","sig":"RAPID push followed IMMEDIATELY by 20mL NS flush. Most proximal IV. Second dose: 0.2mg/kg (max 12mg). Run ECG throughout.","prescriber":"Pediatric ED","start":"2024","refills":0,"status":"Active — if vagal fails"},
    {"name":"Continuous cardiac monitoring — 12-lead ECG during adenosine","sig":"Run ECG printout during adenosine. Transient AV block reveals underlying rhythm. Diagnostically critical.","prescriber":"Nursing/ED","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"SVT Assessment","results":[
    {"test":"HR on monitor","value":"240","unit":"bpm","ref":"100-160 age 6 months","flag":"H"},
    {"test":"Rhythm","value":"Narrow complex, regular, P waves absent","unit":"","ref":"Normal sinus","flag":"H"},
    {"test":"BP","value":"82/52","unit":"mmHg","ref":"70-100/40-65 age 6 months","flag":""},
    {"test":"SpO2","value":"97","unit":"%","ref":"≥95%","flag":""},
    {"test":"Capillary refill","value":"2","unit":"seconds","ref":"<2 seconds","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["SVT — infant, narrow complex HR 240, vagal then adenosine (correct)","Sinus tachycardia — P waves precede each QRS; P waves absent here = SVT","VT — wide complex; this is narrow complex tachycardia","Atrial flutter 2:1 — flutter waves at 480 bpm; look carefully at baseline","Fever-driven sinus tachycardia — no fever; HR 240 in infant without fever = SVT","WPW — check delta waves in sinus rhythm post-conversion"],
  "coachFinal": "Diagnosis: pediatric SVT — vagal then adenosine. Key learning: (1) SVT in infants: HR >220 with abrupt onset + narrow complex = SVT until proven otherwise. P waves absent or buried in T wave. (2) Pediatric vagal maneuver: infants = ice bag to face (diving reflex). Older children = Valsalva, blow through straw, or modified Valsalva (supine + legs elevated). NOT carotid massage in infants. (3) Adenosine technique: half-life <10 seconds — MUST be given as a rapid IV push followed IMMEDIATELY by a fast saline flush. Most proximal IV access. Delay in the line = drug degrades before reaching the heart. (4) ECG during adenosine: run continuous printout throughout — transient AV block reveals underlying rhythm (atrial flutter, sinus tachycardia, true SVT). This strip is diagnostically critical. (5) Post-conversion: 12-lead ECG for WPW (delta waves = short PR + slurred upstroke). WPW predicts recurrence — EP referral consideration."
}
}

def enrich(slug, e):
    path = os.path.join(EMR_DIR, f"{slug}.js")
    if not os.path.exists(path): print(f"  SKIP {slug}"); return False
    with open(path) as f: src = f.read()
    m = re.search(r'window\.EMR_DATA\s*=\s*(\{[\s\S]+\})\s*;', src)
    if not m: print(f"  PARSE ERROR {slug}"); return False
    data = json.loads(m.group(1))
    if "meta" not in data: data["meta"] = {}
    data["meta"]["diagnosis"] = e.get("diagnosis","")
    data["meta"]["caseId"] = slug
    for k in ["problems","medications","labs","imaging"]:
        if k in e: data[k] = e[k]
    if "ddxTargets" in e:
        if "guided" not in data: data["guided"] = {}
        data["guided"]["ddxTargets"] = e["ddxTargets"]
    if "coachFinal" in e:
        if "guided" not in data: data["guided"] = {}
        if "coachPrompts" not in data["guided"]: data["guided"]["coachPrompts"] = {}
        data["guided"]["coachPrompts"]["final"] = e["coachFinal"]
    with open(path,'w') as f: f.write(f"\nwindow.EMR_DATA = {json.dumps(data,indent=2)};\n")
    return True

done = 0
for s,e in ENRICHMENTS.items():
    if enrich(s,e): print(f"✓ {s}"); done += 1
print(f"\nBatch 16b: {done}/{len(ENRICHMENTS)} enriched")
