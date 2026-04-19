/* CASE: dka-v3 — Devon Patterson — Recurrent DKA, Sick Day Rules, Insulin Access */
window.CASES = window.CASES || {};
window.CASES['dka-v3'] = {
  id: 'dka-v3',
  name: 'Devon Patterson',
  age: '16M',
  dob: '2008-07-19',
  mrn: '512384',
  setting: 'Pediatric Endocrinology Clinic',
  chiefComplaint: 'Third DKA episode in 4 months — insurance denied CGM refill',
  diagnosis: 'Recurrent DKA — Insulin Rationing + Technology Barrier',
  category: 'endocrine',
  continuityNote: 'Prior encounters: dka-v1 (new T1DM), dka-v2 (cerebral edema, PICU). Third DKA in 4 months. CGM denied by insurance. Family reports insulin rationing.',
  presentation: {
    hpi: 'Devon, now 4 months post-diagnosis, presents to endocrinology clinic after third DKA hospitalization. HbA1c 12.4% (goal <7.5% for age). Review reveals: insurance denied CGM renewal 6 weeks ago ("not medically necessary"). Family has been splitting insulin cartridges to stretch supply — missed 3 doses of basal insulin in past month due to cost. No sick day protocol education documented. Mother tearful: "we are doing everything right but keep ending up in the hospital."',
    pmh: ['T1DM (4 months)', 'DKA × 3 (including 1 with cerebral edema)', 'No other chronic conditions'],
    meds: ['Insulin glargine 18 units QHS', 'Insulin lispro 1:10 carb ratio'],
    socialHx: 'Lives with mother, 2 younger siblings. Father not in home. Mother works 2 jobs. Medicaid insurance with prior authorization barriers.',
    labs: { HbA1c: '12.4%', 'Glucose (today)': '318', 'Urine ketones': 'Moderate' }
  },
  vitals: {
    BP: '112/68', HR: '88', RR: '16', Temp: '36.8°C', SpO2: '99% RA', Weight: '58 kg'
  },
  exam: {
    general: 'Thin adolescent, tired-appearing. No acute distress. No Kussmaul breathing.',
    abdomen: 'Mild diffuse tenderness — no peritoneal signs',
    skin: 'Lipohypertrophy bilateral abdomen from injection site rotation issues'
  },
  orders: {
    correct: [
      { id: 'cgm-appeal-dka3', name: 'File urgent CGM prior auth appeal with peer-to-peer review', rationale: '3 DKA hospitalizations in 4 months + cerebral edema = clear medical necessity. Document hospitalizations in appeal.' },
      { id: 'insulin-access-dka3', name: 'Connect to manufacturer patient assistance program (Lilly Insulin Value Program $35 cap)', rationale: 'Immediate cost relief. Never let insulin rationing continue — it is life-threatening.' },
      { id: 'sick-day-dka3', name: 'Structured sick day rule education: never stop basal insulin, ketone testing protocol', rationale: 'Omitting basal insulin during illness is the most common preventable DKA trigger' },
      { id: 'social-work-dka3', name: 'Social work referral — insurance navigation, food security, school 504 plan', rationale: 'SDOH are driving recurrent DKA. Address root causes, not just glucose.' },
      { id: 'pump-referral-dka3', name: 'Insulin pump referral — reduces DKA risk and improves control in T1DM', rationale: 'Closed-loop pump + CGM (artificial pancreas) dramatically reduces DKA in teenagers. File for this now.' },
      { id: 'close-fu-dka3', name: 'Weekly phone check-in × 4 weeks — nurse educator', rationale: 'Intensify support after recurrent DKA. Catch problems before next hospitalization.' }
    ],
    incorrect: [
      { id: 'blame-dka3', name: 'Counsel patient on adherence — DKA suggests missed doses', rationale: 'INCORRECT framing — this is a systems failure, not patient non-adherence. The family IS trying. Blame without addressing insulin access and CGM denial perpetuates harm.' },
      { id: 'add-insulin-dka3', name: 'Increase glargine dose to 24 units — HbA1c 12.4%', rationale: 'Increasing dose when patient is already rationing insulin will worsen hypoglycemia risk. Fix access first, then titrate.' },
      { id: 'discharge-dka3', name: 'Discharge with same plan — patient is stable today', rationale: 'Same plan = fourth DKA. The system failed this patient. Root cause intervention (CGM appeal, insulin access, education, social work) is mandatory before this visit ends.' }
    ]
  },

  teachingPoints: {
    keyLearning: ['Recurrent DKA is most commonly caused by insulin omission — which in adolescents is often driven by: cost/access barriers (insulin rationing), technology access (denied CGM), psychosocial factors (depression, disordered eating), or lack of sick day rule education. Address the social determinants of health, not just the physiology.','Sick day rules are life-saving and must be explicitly taught: (1) NEVER stop insulin during illness even if not eating. (2) Check glucose every 2-4h during illness. (3) Check ketones when glucose >240. (4) 20-30% carbohydrate replacement if not eating. (5) When to call/come in: vomiting, ketones >1.5, glucose >300 despite correction.','Emergency insulin access: in the US, Regular insulin (Humulin R) and NPH are available OTC at Walmart for $25/vial without prescription. This is a safety net option for insulin-rationing patients — teach families this exists.'],
    boardPearls: ['Adolescent T1DM adherence: only 20-30% of adolescents with T1DM achieve HbA1c <7.5%. Depression, disordered eating (insulin omission for weight control — "diabulimia"), and family conflict are major contributors. Screen routinely.','CGM access: insurance denial of CGM is associated with worse glycemic control and higher DKA rates. Document medical necessity in notes. Appeal all denials. Loaner programs exist (Dexterity, manufacturer patient assistance).','HbA1c targets by age (ADA): <7.5% for all pediatric ages, individualized if hypoglycemia unawareness or inability to recognize/communicate symptoms.']
  },
};
