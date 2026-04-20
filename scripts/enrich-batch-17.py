#!/usr/bin/env python3
import json, re, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

ENRICHMENTS = {
"ot-burn-rehabilitation": {
  "diagnosis": "Post-Burn Hand Rehabilitation — OT Scar Management, Compression Garments, Contracture Prevention",
  "problems": [
    {"problem":"Post-burn hypertrophic scar — bilateral hands, 8% TBSA","icd":"L91.0","onset":"2024","status":"Active","notes":"Marcus Davis, 34M — flame burns bilateral hands, healed 6 weeks ago. Hypertrophic scarring. MCP flexion contracture beginning (-15° right, -20° left)."},
    {"problem":"Contracture risk — MCP flexion contracture developing","icd":"M72.0","onset":"2024","status":"Active","notes":"Scar contraction pulling MCPs toward flexion. Intrinsic-plus position splinting required to maintain extension."},
    {"problem":"ADL impairment — grip and pinch reduced","icd":"Z73.6","onset":"2024","status":"Active","notes":"Grip 12kg right, 10kg left (norm 35-55kg). ADL training with adaptive equipment for dressing, eating, hygiene."}
  ],
  "medications": [
    {"name":"Compression gloves — custom-fit, 23h/day","sig":"25 mmHg pressure garments redirect collagen from hypertrophic to flat horizontal orientation. Worn 23h/day for 18-24 months of scar maturation.","prescriber":"OT","start":"2024","refills":0,"status":"Active — fitted"},
    {"name":"Silicone gel sheets — under compression","sig":"Occlusion and hydration — reduces scar thickness and pruritus. Applied under compression garments.","prescriber":"OT","start":"2024","refills":2,"status":"Active"},
    {"name":"Resting hand splint — intrinsic-plus position (nights and rest)","sig":"Wrist 30° extension, MCPs 70° flexion, IPs straight, thumb abducted. Prevents MCP flexion contracture AND extension contracture. Night splint.","prescriber":"OT","start":"2024","refills":1,"status":"Active — night splint"}
  ],
  "labs": [{"date":"11/2024","panel":"OT Burn Assessment","results":[
    {"test":"Vancouver Scar Scale","value":"9/14 — moderate hypertrophic","unit":"","ref":"0 = normal skin","flag":"H"},
    {"test":"Grip strength right","value":"12","unit":"kg","ref":"35-55 kg norm","flag":"L"},
    {"test":"Grip strength left","value":"10","unit":"kg","ref":"35-55 kg norm","flag":"L"},
    {"test":"MCP extension right","value":"-15°","unit":"","ref":"0° full extension","flag":"H"},
    {"test":"MCP extension left","value":"-20°","unit":"","ref":"0° full extension","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Post-burn scar — OT compression, contracture prevention (correct)","Surgical release indicated — contracture <30° in functional range; OT conservative management first","No scar management until 6 months — early intervention (6+ weeks) prevents progression","Compression not needed for hand burns — hands are highest contracture risk area","Splinting in full extension only — intrinsic-plus is the correct position, not full extension","Active stretching only — compression + silicone + splinting are all required components"],
  "coachFinal": "Diagnosis: post-burn OT rehabilitation — bilateral hands. Key learning: (1) Intrinsic-plus position: wrist 30° extension, MCPs 70° flexion, IPs full extension, thumb abducted. Maximizes all ligament lengths — prevents the most common post-burn contracture deformities. (2) Pressure garment timeline: 18-24 months of scar maturation. 23h/day — 1h off for hygiene and exercise. Pressure redirects collagen from hypertrophic vertical to flat horizontal orientation. (3) Vancouver Scar Scale: tracks scar response to treatment serially. (4) Contracture prevention is far superior to contracture release surgery — daily passive ROM + splinting is mandatory. (5) ADL retraining: adaptive equipment (button hooks, built-up handles) maintains independence during scar maturation period."
},
"ot-low-vision-rehab": {
  "diagnosis": "AMD Low Vision — OT Eccentric Viewing Training, Magnification Devices, Environmental Modification",
  "problems": [
    {"problem":"Advanced AMD — VA 20/200 bilateral, central scotoma","icd":"H35.32","onset":"2022","status":"Active","notes":"Eleanor Walsh, 79F — bilateral AMD, central scotoma, peripheral vision preserved. OT low vision rehab referral."},
    {"problem":"ADL impairment — reading, medication management, cooking","icd":"Z73.6","onset":"2024","status":"Active","notes":"Cannot read medication labels. Medication error and fall risk from low vision."},
    {"problem":"Fall risk — low vision contributing","icd":"Z91.81","onset":"2024","status":"Active","notes":"Low vision significantly increases fall risk. Contrast enhancement and home safety modification needed."}
  ],
  "medications": [
    {"name":"Eccentric viewing training — preferred retinal locus development","sig":"Train patient to use peripheral PRL to replace damaged macula. Looking slightly off-center targets the PRL. Weeks to months of practice required — OT guides.","prescriber":"OT/Low Vision Specialist","start":"2024","refills":0,"status":"Active — training"},
    {"name":"Magnification — stand magnifier, electronic CCTV","sig":"Power required: 20/200 ÷ 20/20 = 10x. Prescription magnifier, stand magnifier, or CCTV/smartphone app. Prescribe based on VA and task demands.","prescriber":"OT/Optometrist","start":"2024","refills":0,"status":"Active — prescribed"},
    {"name":"Environmental modification — high contrast, task lighting","sig":"100W equivalent LED task lighting at reading surface. Dark cutting board, high-contrast plate edges, large-print med labels. No glare sources.","prescriber":"OT","start":"2024","refills":0,"status":"Active — home modification"}
  ],
  "labs": [{"date":"11/2024","panel":"Low Vision Assessment","results":[
    {"test":"BCVA right","value":"20/200","unit":"","ref":"20/20","flag":"H"},
    {"test":"BCVA left","value":"20/200","unit":"","ref":"20/20","flag":"H"},
    {"test":"Amsler grid","value":"Central scotoma bilateral — missing/distorted center","unit":"","ref":"No distortion","flag":"H"},
    {"test":"Contrast sensitivity","value":"Severely reduced","unit":"","ref":"Normal","flag":"H"},
    {"test":"Medication label reading","value":"Unable at 20/200","unit":"","ref":"Functional","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["AMD low vision — eccentric viewing, magnification, environmental OT (correct)","Cortical blindness — peripheral vision preserved; AMD is macular (central)","Glaucoma — peripheral field loss, not central; different OT approach","No OT role in low vision — INCORRECT; OT is primary for ADL rehabilitation in low vision","Cataracts — surgically correctable; AMD is not reversible","Depression causing functional impairment — vision loss is structural; depression is a real comorbidity"],
  "coachFinal": "Diagnosis: AMD low vision, OT rehabilitation. Key learning: (1) Eccentric viewing: AMD destroys the macula but spares peripheral retina. OT trains use of a PRL (preferred retinal locus) in the peripheral retina as the new functional center. Requires weeks-months of systematic practice. (2) Magnification hierarchy: spectacles → handheld magnifier → stand magnifier → electronic (CCTV, smartphone apps). 10x magnification needed to simulate normal acuity at 20/200. (3) Contrast enhancement dramatically improves functional vision in AMD: high-contrast household items, dark cutting boards, bright task lighting (not glare). OT home assessment identifies specific modifications. (4) Medication management: pill organizers, large-print labels, pharmacy blister packs. Medication errors from low vision are a significant safety concern. (5) Lighting: bright task LED lighting (100W equivalent) at reading surface dramatically improves functional vision. Dimmer switches for glare control. Lighting assessment is a core OT low vision intervention."
},
"ot-mental-health-clubhouse": {
  "diagnosis": "Schizophrenia — OT Clubhouse Model, IPS Supported Employment, Cognitive Remediation",
  "problems": [
    {"problem":"Schizophrenia — stable, socially isolated, unemployed 2 years","icd":"F20.9","onset":"2016","status":"Active","notes":"Derrick Williams, 32M — schizophrenia well-controlled. COPM 2.5/10 performance. No social roles or meaningful occupation."},
    {"problem":"Occupational role loss — work and social participation absent","icd":"Z73.6","onset":"2022","status":"Active","notes":"Days spent watching TV. Clubhouse model for structured occupation and peer support. IPS model for vocational rehabilitation."},
    {"problem":"Cognitive deficits — attention, processing speed, working memory","icd":"F20.9","onset":"2016","status":"Active","notes":"MoCA 22/30. Trail Making B 145s. Cognitive deficits from schizophrenia — not medication side effects. Cognitive remediation indicated."}
  ],
  "medications": [
    {"name":"Clubhouse model participation — Fountain House approach","sig":"Work-ordered day in clubhouse (café, reception, work units). Actual work, not make-work. Provides structure, valued roles, and peer community.","prescriber":"OT/Psychiatry","start":"2024","refills":0,"status":"Active — enrollment"},
    {"name":"IPS (Individual Placement and Support) — supported employment","sig":"Zero exclusion, rapid job placement with ongoing support. OT identifies job match based on interests and cognitive capacity. Place then train model.","prescriber":"OT/VR counselor","start":"2024","refills":0,"status":"Active — vocational"},
    {"name":"Cognitive remediation therapy — CogPack 3x/week","sig":"Computerized training targeting attention, memory, processing speed. Combined with vocational rehab significantly improves employment outcomes.","prescriber":"OT/Psychiatry","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Occupational Performance Assessment","results":[
    {"test":"COPM — performance","value":"2.5/10","unit":"","ref":"7+ = functional","flag":"L"},
    {"test":"COPM — satisfaction","value":"2/10","unit":"","ref":"7+","flag":"L"},
    {"test":"Trail Making Test B","value":"145","unit":"seconds","ref":"<90 seconds","flag":"H"},
    {"test":"MoCA","value":"22/30","unit":"","ref":"≥26","flag":"L"},
    {"test":"Last employment","value":"2019 — warehouse","unit":"","ref":"Currently employed","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Schizophrenia — clubhouse + IPS vocational rehab (correct)","Day program arts and crafts only — insufficient; IPS and clubhouse are evidence-based recovery interventions","Defer vocational rehab until fully stable — IPS: zero exclusion criteria; employment improves function","Cognitive deficits prevent employment — IPS evidence shows employment improves cognition; not an exclusion criterion","Group therapy replaces OT — occupational participation is distinct from psychotherapy","Hospitalization for social isolation — community OT is appropriate; not a crisis"],
  "coachFinal": "Diagnosis: schizophrenia, OT community reintegration. Key learning: (1) IPS (place then train): zero exclusion criteria, rapid placement into competitive employment with ongoing job support. Consistently outperforms traditional vocational rehab for serious mental illness. (2) Clubhouse model: peer-run community with real work units. Provides structure, social connection, and valued roles — not make-work. Fountain House is the original model. (3) Cognitive remediation: computerized exercises targeting attention, working memory, and processing speed. When combined with vocational rehab, significantly improves employment outcomes vs either alone. (4) Recovery-oriented OT: 'recovery' = building a meaningful life despite symptoms — not symptom elimination. OT targets occupational participation even with incomplete symptom control. (5) COPM: Canadian Occupational Performance Measure — client-identifies priority occupational goals, self-rates performance and satisfaction. Drives goal-setting and tracks progress."
},
"ot-neonatal-icu": {
  "diagnosis": "NICU OT — 29-Week Premature Infant, Feeding Readiness, Kangaroo Care, Neurodevelopmental Positioning",
  "problems": [
    {"problem":"Premature infant 29 weeks GA — NICU day 14, now 31 corrected","icd":"P07.35","onset":"2024","status":"Active","notes":"Baby Isabella — medically stable. OT referral for feeding readiness, positioning, and neurodevelopmental care."},
    {"problem":"Oral feeding not yet initiated — sucking-swallowing-breathing immature","icd":"P92.5","onset":"2024","status":"Active","notes":"Coordination matures at 32-34 weeks corrected GA. NNS pacifier started. NG tube feeding continues."},
    {"problem":"NICU over-stimulation — premature brain vulnerable to sensory stress","icd":"P07.35","onset":"2024","status":"Active","notes":"Non-nutritive sucking, containment, and kangaroo care reduce stress behaviors and support neurodevelopment."}
  ],
  "medications": [
    {"name":"Kangaroo care (skin-to-skin) — 1-2h daily with parent","sig":"Regulates temperature, HR, RR, reduces cortisol. OT guides parent positioning and timing relative to feeding cycles.","prescriber":"OT/NICU nursing","start":"2024","refills":0,"status":"Active — daily"},
    {"name":"Non-nutritive sucking — pacifier during tube feeds","sig":"Coordinates sucking rhythm, strengthens oral motor function, reduces stress. Precedes oral feeding trial.","prescriber":"OT","start":"2024","refills":0,"status":"Active"},
    {"name":"Nesting — flexion positioning with positional aids","sig":"Rolls and blankets maintain physiologic flexion posture — prevents excessive extension, promotes neurodevelopment and sleep quality.","prescriber":"OT/NICU nursing","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"NICU OT Assessment","results":[
    {"test":"Corrected GA","value":"31 weeks","unit":"","ref":"Term = 40 weeks","flag":""},
    {"test":"NNS strength — sucks/min","value":"20","unit":"sucks/min","ref":"Mature >30/min","flag":"L"},
    {"test":"Rooting reflex","value":"Present but immature","unit":"","ref":"Present","flag":""},
    {"test":"Sucking-swallowing-breathing coordination","value":"Uncoordinated — not safe for oral feeding yet","unit":"","ref":"Coordinated at 32-34w","flag":"L"},
    {"test":"Gag reflex","value":"Present","unit":"","ref":"Present","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Premature NICU OT — feeding readiness and neurodevelopmental care (correct)","Begin oral feeding at 29 weeks — not safe; coordination not mature","PT appropriate for NICU not OT — OT is primary NICU discipline for feeding and neurodevelopment","No therapy in NICU — appropriate OT reduces stress, doesn't increase stimulation","Family excluded from OT — parents are essential partners; kangaroo care is family-centered","Feeding readiness = weight milestone — readiness is neurodevelopmental (coordination, state regulation, strength)"],
  "coachFinal": "Diagnosis: NICU OT — premature infant. Key learning: (1) Oral feeding readiness: not weight or GA alone. Key criteria: corrected GA ≥32-34 weeks, physiologic stability during NNS, strong rooting, sucking-swallowing-breathing coordination. OT assesses and advances readiness. (2) NICU OT scope: feeding readiness, NNS, sensory processing, positioning, parent education (kangaroo care, feeding cues), developmental follow-up planning. (3) Kangaroo care evidence: reduces apneic episodes, improves weight gain, improves breastfeeding rates, reduces LOS, improves neurodevelopmental outcomes. OT teaches optimal parent positioning. (4) Developmental care (NIDCAP): minimizes noxious stimuli, clusters cares, optimizes positioning, involves family. OT implements these principles. (5) Discharge planning begins in NICU: OT contributes to early intervention referral, identifies developmental risk factors, and educates parents on developmental care at home."
},
"ot-polytrauma-tbi": {
  "diagnosis": "Moderate TBI Polytrauma — OT Cognitive Rehabilitation, Compensatory Strategy Training, Return to Work",
  "problems": [
    {"problem":"Moderate TBI — GCS 9 at scene, cognitive deficits","icd":"S09.90XA","onset":"2024","status":"Active","notes":"Alex Rivera, 28M — MVA. Posttraumatic amnesia resolved. Memory, attention, executive function impaired. MoCA 22/30."},
    {"problem":"Cognitive-communication deficits — word-finding, processing speed","icd":"F07.89","onset":"2024","status":"Active","notes":"Co-managed by OT and SLP. OT focuses on functional cognition and ADL performance."},
    {"problem":"Return to work — construction foreman, cognitively demanding","icd":"Z56.5","onset":"2024","status":"Active","notes":"Construction foreman requires sustained attention and executive function — both impaired. Graduated return-to-work plan."}
  ],
  "medications": [
    {"name":"Compensatory strategy training — memory book, phone reminders","sig":"Memory book (daily planner + contact list + to-do list). Phone alarm reminders for scheduled tasks. Structured daily routine. Train the HABIT of recording and reviewing — not just giving the book.","prescriber":"OT","start":"2024","refills":0,"status":"Active"},
    {"name":"Attention Process Training (APT) — 3x/week 1h","sig":"Hierarchical attention tasks: sustained → selective → alternating → divided. Evidence for attention improvement post-TBI.","prescriber":"OT","start":"2024","refills":0,"status":"Active"},
    {"name":"Work hardening — graduated cognitive demand simulation","sig":"Simulated work tasks with increasing complexity, time pressure, and dual tasks mirroring construction foreman demands. Progress based on performance.","prescriber":"OT/Vocational rehab","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"TBI Cognitive Assessment","results":[
    {"test":"MoCA","value":"22/30","unit":"","ref":"≥26","flag":"L"},
    {"test":"Trail Making B","value":"145","unit":"seconds","ref":"<90 seconds","flag":"H"},
    {"test":"Digit Span Forward","value":"5 digits","unit":"","ref":"7±2","flag":"L"},
    {"test":"CPT-II sustained attention","value":"Elevated omission and commission errors","unit":"","ref":"Normal range","flag":"H"},
    {"test":"FIM","value":"106/126","unit":"","ref":"108+ = modified independence","flag":"L"}
  ]}],
  "imaging": [],
  "ddxTargets": ["TBI — OT cognitive rehabilitation, return to work (correct)","Dementia — TBI is non-progressive (improving); dementia is progressive","PTSD cognitive symptoms — co-occurs with TBI; treat both; OT addresses functional cognition","Malingering — neuropsychological testing can detect; clinical findings support genuine deficits","No OT if physically independent — cognitive OT is distinct from physical rehabilitation","Medication side effects — TBI is primary etiology; review meds but TBI drives deficits"],
  "coachFinal": "Diagnosis: moderate TBI, OT cognitive rehabilitation. Key learning: (1) OT cognitive rehab approaches: restorative (directly trains impaired functions — attention training) and compensatory (teaches strategies to work around deficits — memory book, phone reminders). Both used simultaneously. (2) Memory book training: OT trains the systematic habit of recording and reviewing — not just providing the book. This is the most evidence-based intervention for TBI memory impairment. (3) Trail Making B: measures cognitive flexibility and executive function — >90s = impairment. At 145s this patient has significant executive function deficit. This guides return-to-work planning — job demands must match cognitive recovery level. (4) Graduated RTW: reduced hours, reduced demands, familiar tasks. Supervisors need education about TBI cognitive deficits. OT provides job task analysis. (5) Insight: TBI patients often lack awareness (anosognosia) of cognitive changes. OT uses objective task performance to gauge capacity and develops realistic self-awareness as part of rehabilitation."
},
"pediatric-sensory-ot": {
  "diagnosis": "ASD Sensory Processing — OT Sensory Diet, Wilbarger Brushing Protocol, School-Based Environmental Modifications",
  "problems": [
    {"problem":"ASD sensory processing difficulties — tactile hypersensitivity, proprioceptive hyposensitivity","icd":"F84.0","onset":"2022","status":"Active","notes":"Noah Chen, 6M — ASD. Hypersensitive to tactile input, hyposensitive proprioceptively (seeks crashing, jumping). 3-4 meltdowns/week at school."},
    {"problem":"School participation limitations — avoids crowded spaces, cafeteria","icd":"F84.0","onset":"2024","status":"Active","notes":"Sensory avoidance limits social participation and school engagement. IEP modifications needed."},
    {"problem":"Meltdowns from sensory overload — school and home impact","icd":"F84.0","onset":"2024","status":"Active","notes":"Unexpected touch, crowded hallways, cafeteria noise trigger meltdowns. Proactive sensory diet reduces frequency."}
  ],
  "medications": [
    {"name":"Sensory diet — scheduled proprioceptive input 5-6x daily","sig":"Heavy work activities (wall push-ups, carrying books, weighted vest, jumping) maintain optimal arousal level. Proactive — prevents overload. Implemented by family and school.","prescriber":"OT","start":"2024","refills":0,"status":"Active — home/school program"},
    {"name":"Wilbarger brushing protocol — every 90 minutes","sig":"Surgical brush to skin (arms, back, legs) per OT-taught protocol, followed by joint compressions. Reduces tactile hypersensitivity. Must be taught correctly by OT — incorrect technique can increase arousal.","prescriber":"OT","start":"2024","refills":0,"status":"Active — supervised"},
    {"name":"School IEP modifications — sensory accommodations","sig":"Preferential seating away from high-traffic areas, noise-canceling headphones for cafeteria, advance warning for transitions, seam-free socks, tagless shirts.","prescriber":"OT (school + outpatient)","start":"2024","refills":0,"status":"Active — IEP"}
  ],
  "labs": [{"date":"11/2024","panel":"Sensory OT Assessment","results":[
    {"test":"Sensory Profile — tactile","value":"Hypersensitivity +3SD","unit":"","ref":"Within typical range","flag":"H"},
    {"test":"Sensory Profile — proprioception","value":"Hyposensitivity +2SD","unit":"","ref":"Within typical range","flag":"H"},
    {"test":"Meltdown frequency","value":"3-4/week school; 1-2/week home","unit":"","ref":"0","flag":"H"},
    {"test":"Vineland — daily living skills","value":"72 — borderline","unit":"","ref":"85-115 average","flag":"L"},
    {"test":"SIPT postural-ocular","value":"1.8SD below mean","unit":"","ref":"±1SD typical","flag":"L"}
  ]}],
  "imaging": [],
  "ddxTargets": ["ASD sensory processing — sensory diet and desensitization (correct)","Sensory processing disorder without ASD — ASD is the primary diagnosis here","ADHD sensory symptoms — some overlap; ASD diagnosis is established","DCD — motor planning; sensory modulation is the primary issue","Anxiety driving avoidance — anxiety is secondary to sensory overload; treat the sensory first","No OT needed, ABA only — OT and ABA address different domains; both appropriate for ASD"],
  "coachFinal": "Diagnosis: ASD sensory processing, OT intervention. Key learning: (1) Sensory processing in ASD: ~90% have differences. Hyper = over-responsive (avoids); hypo = under-responsive (seeks). Specific profile drives OT intervention. Hypersensitive tactile + hyposensitive proprioceptive is a common ASD combination. (2) Sensory diet: individualized schedule of sensory activities throughout the day to maintain optimal arousal. Proprioceptive 'heavy work' is organizing for most ASD children. Family and school implement. (3) Wilbarger brushing: deep pressure tactile stimulation every 90 minutes reduces tactile hypersensitivity. MUST be taught by trained OT — incorrect application increases arousal rather than decreasing it. (4) School OT collaboration: IEP contributions, environmental modifications, and coordination with school OT are core outpatient OT responsibilities for school-age ASD children. (5) Family-centered OT: parents are the primary implementers of the sensory diet. OT trains parents, provides home program, and coaches implementation — the intervention happens at home and school, not just in the clinic."
},
"psychiatric-discharge-ot": {
  "diagnosis": "Psychiatric Discharge OT — ADL Readiness Assessment, Medication Management, Step-Down Care Planning",
  "problems": [
    {"problem":"Inpatient psychiatric discharge — OT community readiness assessment","icd":"F32.2","onset":"2024","status":"Active","notes":"Diana Park, 45F — MDD with psychotic features, inpatient x12 days. PHQ-9 improved 24→12. OT assessing discharge readiness for independent living."},
    {"problem":"Medication management — requires cueing, not yet independent","icd":"Z73.6","onset":"2024","status":"Active","notes":"Pill organizer initiated. Patient does not consistently self-initiate — cueing required. Safety concern for independent living."},
    {"problem":"Unstructured time — relapse risk for depression","icd":"Z60.4","onset":"2023","status":"Active","notes":"Social isolation and unstructured time are relapse risk factors. Partial hospitalization program referral for structured step-down."}
  ],
  "medications": [
    {"name":"Weekly pill organizer — medication management system","sig":"Pre-filled weekly organizer. Phone alarm reminders. Simplify regimen. Pharmacy blister packaging if adherence remains poor.","prescriber":"OT/Pharmacy","start":"2024","refills":0,"status":"Active — discharge education"},
    {"name":"Partial hospitalization program (PHP) — step-down care","sig":"6h/day structured programming. Bridges inpatient to outpatient. Provides peer support, relapse prevention, and structured activity. OT recommends based on ADL function and support system.","prescriber":"OT/Psychiatry","start":"2024","refills":0,"status":"Active — referral"},
    {"name":"Crisis plan — 988 Lifeline, wallet card, warning signs","sig":"Written crisis plan: personal warning signs, coping strategies, support contacts, 988. Laminated wallet card. Rehearse with OT before discharge — not just review.","prescriber":"OT/Psychiatry","start":"2024","refills":0,"status":"Active — discharge"}
  ],
  "labs": [{"date":"11/2024","panel":"Discharge Readiness Assessment","results":[
    {"test":"Medication management","value":"Requires cueing — does not self-initiate consistently","unit":"","ref":"Independent","flag":"H"},
    {"test":"Meal preparation","value":"Independent for simple meals","unit":"","ref":"Independent","flag":""},
    {"test":"PHQ-9","value":"12 — moderate (improved from 24)","unit":"","ref":"0-4 minimal","flag":"H"},
    {"test":"Safety — suicidal ideation","value":"No active ideation — passive wish resolved","unit":"","ref":"None","flag":""},
    {"test":"Social support","value":"One friend, one sister — willing to check in daily","unit":"","ref":"Support present","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Psychiatric discharge OT — community readiness, PHP referral, crisis plan (correct)","Discharge without OT assessment — unacceptable; OT discharge assessment is standard","Home health OT only — PHP provides more appropriate step-down for this patient","All ADLs independent — medication management requires cueing; safety concern","No structured program needed — unstructured time is a relapse risk; PHP is protective","Discharge to group home — independent living with support is appropriate; not group home level"],
  "coachFinal": "Diagnosis: psychiatric discharge OT planning. Key learning: (1) OT discharge assessment covers: IADL performance (medication management, meal prep, money management, community navigation), cognitive function, social participation capacity, available community resources, and safety in independent living. Symptom improvement alone is insufficient. (2) Medication management is the most common post-discharge failure point: pill organizers, phone reminders, simplified regimens, pharmacy blister packs reduce non-adherence. (3) Step-down care: inpatient → PHP (6h/day) → IOP (3h/day) → outpatient. Abrupt transition from inpatient to weekly outpatient is a high-risk discharge pattern. OT recommends appropriate level based on functional assessment. (4) Structured activity as relapse prevention: unstructured time is a significant depression relapse risk — rumination, reduced activation, social withdrawal. Scheduled activities and programs are evidence-based protective factors. OT prescribes occupation as a therapeutic intervention. (5) Crisis planning: identify warning signs, coping strategies, support contacts, 988. Rehearse before discharge — not just hand over the paper."
},
"vet-dystocia-dog": {
  "diagnosis": "Canine Dystocia — Primary Uterine Inertia in French Bulldog, Oxytocin Trial Then Cesarean Section",
  "problems": [
    {"problem":"Primary uterine inertia — French Bulldog, 6h labor, no pups","icd":"O62.0","onset":"2024","status":"Active","notes":"Bella, 3yr French Bulldog — weak infrequent contractions, 6 hours, no delivery. Brachycephalic breed: highest dystocia incidence."},
    {"problem":"Fetal viability — heart rates 160-175 bpm (normal)","icd":"O66.9","onset":"2024","status":"Active","notes":"No fetal distress yet. Prolonged labor risks progressive hypoxia. Oxytocin trial vs immediate C-section decision required."},
    {"problem":"Borderline low calcium — contributing to uterine inertia","icd":"O66.9","onset":"2024","status":"Active","notes":"Serum calcium 8.2 mg/dL (ref 8.8-11.0). Borderline low — IV calcium may enhance uterine contractility."}
  ],
  "medications": [
    {"name":"Oxytocin 0.5-2 IU IM — uterine stimulant","sig":"Small doses q30 min x2-3 trials if cervix dilated, no obstruction. Overuse = sustained contraction → fetal asphyxia. DO NOT use for obstructive dystocia.","prescriber":"Veterinarian","start":"2024","refills":0,"status":"Active — trial"},
    {"name":"Calcium gluconate 10% 1mL/kg slow IV — if contractility poor","sig":"Slow IV over 10-20 min with cardiac monitoring. Enhances uterine contractility. Useful when serum calcium borderline low.","prescriber":"Veterinarian","start":"2024","refills":0,"status":"Consider"},
    {"name":"Cesarean section — if oxytocin fails or fetal distress","sig":"Proceed immediately if: 2 oxytocin trials fail, fetal HR declining, >4h between pups, or owner elects surgery. BOAS anesthetic protocol.","prescriber":"Veterinarian","start":"2024","refills":0,"status":"Standby — surgical prep"}
  ],
  "labs": [{"date":"11/2024","panel":"Canine Dystocia Assessment","results":[
    {"test":"Radiograph — fetal count/position","value":"3 pups. 2 anterior, 1 posterior. No obstruction.","unit":"","ref":"","flag":""},
    {"test":"Fetal Doppler HR","value":"160-175 bpm — viable","unit":"","ref":"180-220 normal whelping","flag":""},
    {"test":"Serum calcium","value":"8.2","unit":"mg/dL","ref":"8.8-11.0","flag":"L"},
    {"test":"Blood glucose (dam)","value":"68","unit":"mg/dL","ref":"70-140","flag":"L"},
    {"test":"BCS","value":"5/9 — ideal","unit":"","ref":"5/9","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Primary uterine inertia — oxytocin trial, C-section standby (correct)","Obstructive dystocia — radiograph/palpation confirm no obstruction; oxytocin appropriate","Secondary uterine inertia — no pups yet delivered; primary inertia is correct","Normal labor — 6h without delivery and weak contractions is not normal","Fetal oversize — radiograph does not show disproportion","Hypocalcemia as sole cause — calcium borderline low; contributing factor, not sole cause"],
  "coachFinal": "Diagnosis: canine dystocia — primary uterine inertia. IPE key learning: (1) Dystocia classification: primary inertia (won't contract) vs secondary inertia (exhaustion after partial delivery) vs obstructive (mechanical). Treatment differs: inertia → oxytocin; obstruction → surgical. (2) Oxytocin protocol: 0.5-2 IU IM, max 2-3 doses q30 min. Only if cervix dilated and no obstruction. Overdose = tetanic contraction → fetal asphyxia. (3) Brachycephalic breed risk: French Bulldogs and English Bulldogs have highest dystocia rates from pelvic conformation. Many practitioners plan elective C-section. BOAS anesthesia requires rapid intubation protocol. (4) One Health/IPE: dystocia management in dogs mirrors obstetric emergency protocols in humans — oxytocin use, fetal monitoring, surgical decision points. Understanding one deepens understanding of the other. (5) Zoonotic awareness: owners handling neonatal whelping fluids should practice handwashing. Pregnant owners counseled on potential risks."
},
"vet-equine-colic": {
  "diagnosis": "Equine Colic — Large Colon Displacement, Medical Management With NSAID and Fluids",
  "problems": [
    {"problem":"Equine colic — large colon displacement, 4 hours","icd":"K56.69","onset":"2024","status":"Active","notes":"Thunder, 8yr Thoroughbred — HR 52, flank watching, decreased gut sounds. No gastric reflux. Rectal exam: gas-distended large colon."},
    {"problem":"Medical vs surgical decision — HR 52, no reflux, responds to flunixin","icd":"K56.69","onset":"2024","status":"Active","notes":"Key decision point: HR <60, no reflux, responds to NSAID — medical management appropriate. Monitor closely."},
    {"problem":"Gut sounds absent — motility assessment","icd":"K56.69","onset":"2024","status":"Active","notes":"Auscultation: hypomotile all quadrants. IV fluids support hydration and GI motility."}
  ],
  "medications": [
    {"name":"Flunixin meglumine 1.1mg/kg IV — NSAID","sig":"Visceral analgesia AND anti-endotoxin effects. Monitor pain response. Do not mask excessively — masking may delay surgical decision.","prescriber":"Veterinarian","start":"2024","refills":0,"status":"Active"},
    {"name":"IV balanced electrolytes 10-20L — hydration","sig":"IV crystalloids for hydration and GI motility support. Monitor PCV and TP.","prescriber":"Veterinarian","start":"2024","refills":0,"status":"Active"},
    {"name":"Nasogastric tube — reflux monitoring q1-2h","sig":"Remain in place. Net reflux >2L = small intestinal obstruction = surgical emergency.","prescriber":"Veterinarian","start":"2024","refills":0,"status":"Active — monitoring"},
    {"name":"Surgical referral criteria — prepare if deteriorating","sig":"Refer if: HR >60 persistent, pain uncontrolled, PCV >50%, net reflux >2L, increasing distension.","prescriber":"Veterinarian","start":"2024","refills":0,"status":"Contingency"}
  ],
  "labs": [{"date":"11/2024","panel":"Colic Assessment","results":[
    {"test":"Heart rate","value":"52","unit":"bpm","ref":"28-44 resting; >48 = significant","flag":"H"},
    {"test":"Mucous membranes","value":"Pale pink, moist","unit":"","ref":"Pink, moist","flag":""},
    {"test":"CRT","value":"2","unit":"seconds","ref":"<2 seconds","flag":""},
    {"test":"PCV","value":"38","unit":"%","ref":"32-48%","flag":""},
    {"test":"Gut sounds","value":"Hypomotile all quadrants","unit":"","ref":"Normal borborygmi","flag":"H"},
    {"test":"Gastric reflux (NG tube)","value":"0.5L — no significant reflux","unit":"","ref":"<2L = no SI obstruction","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Large colon displacement — medical management (correct)","Small intestinal obstruction — large reflux (>2L) distinguishes; absent here","Gastric rupture — acute collapse, extreme pain; this horse responds to flunixin","Right dorsal displacement — pinging on right flank; rectal exam findings differ","Large colon volvulus — severe uncontrolled pain, tight bands on rectal; not present","Spasmodic colic — hyperactive gut sounds, rapid NSAID response; hypomotility here"],
  "coachFinal": "Diagnosis: equine colic — large colon displacement, medical management. IPE key learning: (1) Medical vs surgical colic: surgical indicators = HR persistently >60, uncontrolled pain, net reflux >2L (SI obstruction), PCV >50%, tight bands on rectal, turbid peritoneal tap. Medical indicators = HR <60, NSAID-responsive, no reflux, large colon on rectal exam. (2) Gastric reflux significance: horses cannot vomit — NG tube monitoring is critical. >2L = SI obstruction = emergency. (3) NSAID masking: flunixin provides analgesia AND reduces endotoxin effects. However, excessive pain masking delays surgical decision — monitor clinical signs frequently. (4) One Health/IPE: colic decision-making mirrors human acute abdomen — NSAID trial, serial reassessment, surgical threshold criteria. (5) Biosecurity: Salmonella is a complication in hospitalized colic horses. Strict handwashing and biosecurity protect other horses and human handlers."
},
"vet-gi-stasis-rabbit": {
  "diagnosis": "Rabbit GI Stasis — 48h No Fecal Output, Pain Management, Fluid Therapy, Dietary Correction",
  "problems": [
    {"problem":"GI stasis — Holland Lop, 48h no fecal output","icd":"K56.7","onset":"2024","status":"Active","notes":"Cleo, 4yr — hunched posture, bruxism, reduced appetite, zero fecal pellets x48h. Can be fatal within 48-72h without treatment."},
    {"problem":"Dietary cause — pellet-primary diet, insufficient hay","icd":"K56.7","onset":"2024","status":"Active","notes":"Commercial pellets as primary diet. Rabbits require 80%+ hay for gut motility. Low fiber → hypomotility → gas → pain → worsening stasis cycle."},
    {"problem":"Pain management — bruxism indicates abdominal pain","icd":"K56.7","onset":"2024","status":"Active","notes":"Meloxicam reduces abdominal pain → encourages eating → restores gut motility. Pain relief is key to breaking the stasis cycle."}
  ],
  "medications": [
    {"name":"Meloxicam 0.5mg/kg SQ daily — rabbit NSAID","sig":"Rabbit-specific NSAID dosing. Reduces abdominal pain → encourages eating → restores motility. Rehydrate before NSAIDs if dehydrated.","prescriber":"Veterinarian","start":"2024","refills":0,"status":"Active"},
    {"name":"SC fluids — lactated Ringer's 50-100mL SQ","sig":"Rehydration improves gut motility. SQ fluids for moderate dehydration.","prescriber":"Veterinarian","start":"2024","refills":0,"status":"Active"},
    {"name":"Simethicone 65mg PO — gas relief","sig":"Infant gas drops — safe at this dose in rabbits. Reduces gas discomfort.","prescriber":"Veterinarian","start":"2024","refills":0,"status":"Active"},
    {"name":"Critical Care syringe feeding — if not eating independently","sig":"Oxbow Critical Care 3-5mL q4-6h. Fiber keeps gut moving. Eating is the primary treatment for GI stasis.","prescriber":"Veterinarian","start":"2024","refills":1,"status":"Active — if inappetent"}
  ],
  "labs": [{"date":"11/2024","panel":"Rabbit GI Assessment","results":[
    {"test":"Radiograph — gas pattern","value":"Diffuse gas distension small intestine and cecum","unit":"","ref":"Minimal gas","flag":"H"},
    {"test":"Gut sounds","value":"Absent bilaterally","unit":"","ref":"Active borborygmi","flag":"H"},
    {"test":"Weight","value":"1.6","unit":"kg","ref":"1.8kg baseline — 5% loss","flag":"L"},
    {"test":"PCV","value":"42","unit":"%","ref":"33-50%","flag":""},
    {"test":"Fecal output","value":"Zero pellets x48 hours","unit":"","ref":"150-300 pellets/day","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["GI stasis — dietary fiber deficiency (correct)","GI obstruction (foreign body) — diffuse gas is motility-based, not obstructive pattern","Hepatic lipidosis — secondary to anorexia; monitor liver enzymes","Uterine adenocarcinoma — most common neoplasm in unspayed female rabbits; check spay status","Dental disease causing inappetence → secondary stasis — molar spurs common; oral exam needed","Viral hemorrhagic disease — acute catastrophic presentation; different"],
  "coachFinal": "Diagnosis: rabbit GI stasis. IPE key learning: (1) GI stasis pathophysiology: rabbits require constant fiber (hay) for cecal fermentation and gut motility. Low fiber → hypomotility → gas accumulation → bacterial overgrowth → pain → anorexia → worsening cycle. Fatal within 48-72h without intervention. (2) Dietary correction is definitive: 80%+ Timothy hay as primary diet. Pellets = supplement (tablespoon/day). Vegetables (dark leafy greens) appropriate. High-sugar treats cause gut flora disruption. (3) Eating drives gut motility: the primary intervention for GI stasis is pain control (enables eating) + offering hay freely + syringe feeding if inappetent. (4) IPE connection: GI motility pharmacology, pain management principles, and nutritional intervention are shared across veterinary and human medicine. (5) Rabbit-specific physiology: unlike dogs/cats, rabbits cannot vomit. Gas accumulation from stasis = cecal dilation = potentially fatal. This is similar to horses — comparative physiology bridges species for health professions students."
},
"vet-rodenticide-coagulopathy": {
  "diagnosis": "Anticoagulant Rodenticide Toxicity in Dog — Vitamin K1 Therapy, Coagulopathy Management",
  "problems": [
    {"problem":"Anticoagulant rodenticide toxicity — second-generation (brodifacoum)","icd":"T60.4X1A","onset":"2024","status":"Active","notes":"Max, 4yr Labrador — found bag of rodenticide 3 days ago. Now: epistaxis, hematuria, hemoptysis. PT/PTT markedly prolonged. Second-generation rodenticides have 3-6 week duration of action."},
    {"problem":"Active internal hemorrhage — hemoptysis and hematuria","icd":"R04.2","onset":"2024","status":"Active","notes":"Bleeding from multiple sites — coagulopathy from vitamin K epoxide reductase inhibition. Clotting factors II, VII, IX, X depleted."},
    {"problem":"Vitamin K1 therapy — long course required for second-generation rodenticide","icd":"T60.4X1A","onset":"2024","status":"Active","notes":"Vitamin K1 4-8 weeks for brodifacoum (second-gen). First-gen warfarin-based rodenticides: 2-3 weeks. PT recheck 48h after stopping vitamin K to confirm."}
  ],
  "medications": [
    {"name":"Vitamin K1 (phytonadione) 2.5mg/kg PO BID — rodenticide antidote","sig":"Give orally with a small fatty meal — fat enhances absorption. SQ injection is an alternative but IM injection risks hematoma at injection site.","prescriber":"Veterinarian","start":"2024","refills":2,"status":"Active — 4-6 week course"},
    {"name":"Fresh frozen plasma 10-15mL/kg IV — if active life-threatening bleeding","sig":"FFP for acute coagulopathy with active hemorrhage — replaces clotting factors immediately while vitamin K1 takes 6-12h to begin working.","prescriber":"Veterinarian","start":"2024","refills":0,"status":"Active — acute hemorrhage"},
    {"name":"Cage rest — minimize hemorrhage risk","sig":"Strict cage rest until coagulopathy resolves. No roughhousing or exercise.","prescriber":"Veterinarian","start":"2024","refills":0,"status":"Active"}
  ],
  "labs": [{"date":"11/2024","panel":"Rodenticide Toxicity Panel","results":[
    {"test":"PT (prothrombin time)","value":">120","unit":"seconds","ref":"6-8 seconds","flag":"H"},
    {"test":"PTT (partial thromboplastin time)","value":">120","unit":"seconds","ref":"8-12 seconds","flag":"H"},
    {"test":"PCV","value":"28","unit":"%","ref":"37-55%","flag":"L"},
    {"test":"Platelet count","value":"320","unit":"K/μL","ref":"200-500","flag":""},
    {"test":"Urine — hematuria","value":"Gross hematuria","unit":"","ref":"Clear","flag":"H"}
  ]}],
  "imaging": [],
  "ddxTargets": ["Anticoagulant rodenticide toxicity — prolonged PT/PTT, exposure history (correct)","Von Willebrand disease — normal PT/PTT; platelet function defect","Thrombocytopenic coagulopathy — platelet count normal; clotting factors are depleted","DIC — underlying trigger required; no sepsis or other DIC cause; exposure history is key","Immune-mediated thrombocytopenia — platelets normal here; PT/PTT prolonged = factor deficiency","Liver failure coagulopathy — PT/PTT prolonged in liver failure; exposure history distinguishes"],
  "coachFinal": "Diagnosis: anticoagulant rodenticide toxicity — brodifacoum. IPE key learning: (1) Mechanism: second-generation anticoagulant rodenticides (brodifacoum, bromadiolone) inhibit vitamin K epoxide reductase → depletes vitamin K-dependent clotting factors (II, VII, IX, X). Identical mechanism to warfarin — but duration of action is 4-8 weeks vs warfarin's days. (2) Vitamin K1 (phytonadione) is the antidote: not vitamin K3 (menadione) — must be K1. Give PO with fatty food for best absorption. Duration: 4-6 weeks for second-gen rodenticides. PT recheck 48h AFTER stopping — if prolonged, continue another 2 weeks. (3) PT/PTT prolonged with normal platelets = clotting factor deficiency (rodenticide, liver disease, inherited factor deficiency). Normal PT/PTT with low platelets = thrombocytopenia (ITP, ehrlichiosis). (4) IPE connection — human anticoagulation: warfarin reversal with vitamin K1 + FFP is identical in humans and dogs. Mechanism, monitoring (PT/INR), and reversal are shared knowledge. (5) One Health: accidental human anticoagulant rodenticide exposure does occur — presenting with unexplained bleeding and prolonged coagulation studies. Medical providers should ask about rodenticide exposure in unexplained coagulopathy."
},
"vet-salmonella-zoonosis": {
  "diagnosis": "Salmonella in Reptile — Zoonotic Risk Counseling, Immunocompromised Owner Precautions, No Antibiotic Treatment",
  "problems": [
    {"problem":"Salmonella colonization in healthy bearded dragon — expected finding","icd":"A02.9","onset":"2024","status":"Active","notes":"Spike, 2yr bearded dragon — asymptomatic carrier. Salmonella isolated on cloacal culture requested by concerned owner. Normal flora in reptiles."},
    {"problem":"Zoonotic risk to household — immunocompromised owner","icd":"Z57.5","onset":"2024","status":"Active","notes":"Owner is a 3-year-old child and immunocompromised grandmother (chemotherapy). High-risk household. Zoonotic counseling critical."},
    {"problem":"No antibiotic treatment — asymptomatic carrier, resistance risk","icd":"A02.9","onset":"2024","status":"Active","notes":"Asymptomatic Salmonella in reptile is NOT treated with antibiotics. Treatment creates antibiotic-resistant strains and does not eliminate carriage."}
  ],
  "medications": [
    {"name":"NO antibiotics — asymptomatic reptile Salmonella","sig":"Do NOT treat asymptomatic Salmonella carrier with antibiotics. Creates resistance. Does not eliminate carriage. Counseling is the intervention.","prescriber":"Veterinarian — DO NOT TREAT","start":"AVOID","refills":0,"status":"NOT INDICATED"},
    {"name":"Hand hygiene protocol — household counseling","sig":"Wash hands with soap and water after ANY reptile contact, cage cleaning, or surface touching. Alcohol-based hand sanitizer is INSUFFICIENT against Salmonella. Soap and water only.","prescriber":"Veterinarian — zoonotic counseling","start":"2024","refills":0,"status":"Active — owner education"},
    {"name":"Reptile handling restrictions — immunocompromised household","sig":"Child <5 years and immunocompromised adults should NOT handle reptiles or their enclosures. If unavoidable: gloves + immediate handwashing. Consider rehoming if risk is unmanageable.","prescriber":"Veterinarian","start":"2024","refills":0,"status":"Active — risk counseling"}
  ],
  "labs": [{"date":"11/2024","panel":"Reptile Zoonosis Assessment","results":[
    {"test":"Cloacal culture — Salmonella","value":"Salmonella enterica serovar Typhimurium — isolated","unit":"","ref":"Normal flora in reptiles","flag":""},
    {"test":"Reptile clinical status","value":"Asymptomatic — eating well, normal activity","unit":"","ref":"Healthy","flag":""},
    {"test":"Household risk stratification","value":"Child age 3, grandmother on chemotherapy — HIGH RISK","unit":"","ref":"Low risk = healthy adults","flag":"H"},
    {"test":"Antibiotic sensitivity","value":"Pan-sensitive — but treatment not indicated","unit":"","ref":"","flag":""}
  ]}],
  "imaging": [],
  "ddxTargets": ["Asymptomatic reptile Salmonella — zoonotic counseling, no antibiotics (correct)","Treat reptile with antibiotics — creates resistance, does not eliminate carriage; NOT indicated","Euthanize reptile — not indicated for asymptomatic carriage; counseling first","Culture-negative = safe — all reptiles should be presumed Salmonella carriers regardless of culture result","Reptile poses no zoonotic risk — FALSE; reptiles are the most common source of Salmonella zoonosis in humans","Hand sanitizer is sufficient — INCORRECT; alcohol-based sanitizer does NOT kill Salmonella adequately; soap and water required"],
  "coachFinal": "Diagnosis: reptile Salmonella zoonosis. IPE key learning: (1) All reptiles are presumed Salmonella carriers: culture-negative result does not mean safe — reptiles shed intermittently. CDC estimates 70,000+ human Salmonella infections annually from reptile contact in the US. (2) No antibiotic treatment for asymptomatic carrier: treating creates antibiotic-resistant strains. Does not eliminate carriage — bacteria persist in the GI tract. The veterinarian's intervention is counseling, not antibiotics. (3) Handwashing — soap and water ONLY: alcohol-based hand sanitizers do not reliably kill Salmonella. Soap and water is the only effective option. This is a critical public health message. (4) High-risk household members: children <5 years, pregnant women, elderly, and immunocompromised persons are at greatest risk for serious Salmonella disease (bacteremia, meningitis). These households should seriously consider whether reptile ownership is appropriate. (5) One Health — human health connection: when a human patient presents with Salmonella, especially a child or immunocompromised adult, healthcare providers should ask about reptile contact. This is a classic One Health bridge case — veterinary diagnosis informs human health practice."
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
print(f"\nBatch 17: {done}/{len(ENRICHMENTS)} enriched")
