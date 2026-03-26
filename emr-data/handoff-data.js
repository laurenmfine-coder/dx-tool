
window.HANDOFF_DATA = {

  // ─── SCHEMA ───
  // Each handoff object follows this structure:
  // {
  //   caseId: string,              // matches manifest case ID
  //   edPhysician: string,         // ED attending name
  //   handoffTime: string,         // time of sign-out
  //   admittingService: string,    // primary admitting service
  //   bedAssignment: string,       // floor/unit + room
  //   acuity: { esi: number, code: string },
  //   oneLiner: string,            // the verbal one-liner
  //   workingDx: string,           // ED's working diagnosis
  //   edCourse: string,            // what happened in the ED
  //   pendingItems: string[],      // labs/imaging/consults still pending
  //   completedOrders: string[],   // what's already been done
  //   activeIVs: string[],         // current drips/fluids
  //   watchOuts: string[],         // specific things to monitor
  //   disposition: string,         // why floor vs ICU
  //   familyUpdate: string,        // who's been notified
  //   codeStatus: string           // full code, DNR, etc.
  // }

  handoffs: {

    // ─────────────────────────────────────────────────────
    // CHF Exacerbation — Winston Carmichael
    // ─────────────────────────────────────────────────────
    "chf-exacerbation": {
      caseId: "chf-exacerbation",
      edPhysician: "Dr. Rebecca Marsh, MD",
      handoffTime: "02:15",
      admittingService: "Internal Medicine",
      bedAssignment: "4 West — Room 412",
      acuity: { esi: 2, code: "URGENT" },
      oneLiner: "65-year-old male with HFrEF, EF 25%, presenting with 5 days of progressive dyspnea, orthopnea, and weight gain — bilateral crackles and 3+ pitting edema on exam. BNP 2,400. This is his third CHF exacerbation admission this year.",
      workingDx: "Acute Decompensated Heart Failure (ADHF), NYHA Class IV",
      edCourse: "Arrived via EMS with SpO2 89% on room air, placed on 4L NC with improvement to 95%. IV furosemide 80mg given at 23:40 with 400mL urine output in first 2 hours. CXR shows bilateral pleural effusions and pulmonary edema. Troponin negative x1. ECG: sinus tachycardia at 108, old LBBB, no acute ST changes. BMP notable for Cr 1.8 (baseline 1.4), K 4.8. Kept upright, responded to initial diuresis.",
      pendingItems: [
        "Repeat troponin at 06:00 (6-hour)",
        "Repeat BMP at 06:00 (post-diuresis Cr and K)",
        "Echo ordered — not yet scheduled (last echo 08/2025 showed EF 25%)",
        "TSH pending"
      ],
      completedOrders: [
        "IV furosemide 80mg x1 (given at 23:40)",
        "CXR PA/Lateral — completed",
        "ECG — completed",
        "CBC, BMP, BNP, troponin, TSH — resulted except TSH",
        "Foley catheter placed for strict I&O"
      ],
      activeIVs: [
        "Normal saline TKO (hep-lock, not running)",
        "No continuous drips"
      ],
      watchOuts: [
        "Cr trending up — 1.4 baseline → 1.8 now. Cardiorenal syndrome risk. If Cr rises >2.2 or UOP drops, may need nephrology or diuretic strategy change.",
        "K 4.8 pre-diuresis — will drop with furosemide. Replete aggressively if <4.0.",
        "He has an ICD in place. If you get alarms, cardiology is aware.",
        "History of diuretic resistance on prior admissions — may need continuous furosemide drip if bolus doses plateau.",
        "Wife Denise is at bedside, very involved, knows his medication regimen well."
      ],
      disposition: "Floor appropriate. Hemodynamically stable (MAP 72). No inotrope need currently. If develops hypotension requiring pressors or respiratory failure requiring BiPAP/intubation, upgrade to CCU.",
      familyUpdate: "Wife Denise at bedside, updated by ED team. Aware of admission. Contact: (954) 555-4590.",
      codeStatus: "FULL CODE (confirmed with patient)"
    },

    // ─────────────────────────────────────────────────────
    // Pneumonia on COPD — from Shortness of Breath batch
    // ─────────────────────────────────────────────────────
    "pneumonia-on-copd": {
      caseId: "pneumonia-on-copd",
      edPhysician: "Dr. James Okafor, MD",
      handoffTime: "19:45",
      admittingService: "Internal Medicine",
      bedAssignment: "3 North — Room 318",
      acuity: { esi: 3, code: "MODERATE" },
      oneLiner: "71-year-old female with severe COPD on 2L home O2 presenting with 3 days of productive cough with green sputum, fever to 101.8°F, and increased dyspnea. CXR shows RLL consolidation. CURB-65 score 2.",
      workingDx: "Community-Acquired Pneumonia superimposed on COPD exacerbation",
      edCourse: "Arrived ambulatory via private vehicle. SpO2 88% on her home 2L, improved to 93% on 4L NC. Received ceftriaxone 1g IV and azithromycin 500mg IV in ED. Albuterol/ipratropium nebs x2 with some improvement. Methylprednisolone 125mg IV given. Procalcitonin 1.8 (elevated). Blood cultures drawn before antibiotics. Lactate 1.6. Flu/COVID negative.",
      pendingItems: [
        "Blood cultures — no growth yet (drawn at 17:30)",
        "Sputum culture — sent, pending",
        "Repeat SpO2 check after settling on floor"
      ],
      completedOrders: [
        "Ceftriaxone 1g IV x1",
        "Azithromycin 500mg IV x1",
        "Methylprednisolone 125mg IV x1",
        "Albuterol/ipratropium nebs x2",
        "CXR, CBC, BMP, procalcitonin, lactate, blood cultures x2, sputum culture",
        "Flu/COVID rapid — both negative"
      ],
      activeIVs: [
        "NS at 75 mL/hr"
      ],
      watchOuts: [
        "She's a CO2 retainer — baseline PaCO2 is 52. Don't over-oxygenate. Target SpO2 88-92%.",
        "If work of breathing worsens, trial BiPAP before intubation — she's responded to NIV previously.",
        "Home meds include tiotropium and fluticasone/salmeterol — restart when able.",
        "Lives alone. Will need PT/OT eval before discharge to assess functional status for safe home discharge."
      ],
      disposition: "Floor appropriate. Hemodynamically stable. Not meeting ICU criteria (no vasopressors, no NIV needed currently). If develops respiratory failure or hemodynamic instability, transfer to MICU.",
      familyUpdate: "Daughter notified by phone. Lives out of state. Emergency contact in chart.",
      codeStatus: "FULL CODE (but patient has expressed interest in discussing goals of care — bring it up if appropriate)"
    },

    // ─────────────────────────────────────────────────────
    // Appendicitis — Abdominal Pain
    // ─────────────────────────────────────────────────────
    "appendicitis-v1": {
      caseId: "appendicitis-v1",
      edPhysician: "Dr. Laura Tran, MD",
      handoffTime: "21:30",
      admittingService: "General Surgery",
      bedAssignment: "5 South — Room 507",
      acuity: { esi: 3, code: "MODERATE" },
      oneLiner: "28-year-old male presenting with 18 hours of periumbilical pain migrating to RLQ, anorexia, and low-grade fever. CT abdomen shows dilated appendix at 11mm with periappendiceal fat stranding. No perforation or abscess.",
      workingDx: "Acute uncomplicated appendicitis",
      edCourse: "Pain started periumbilical yesterday afternoon, migrated to RLQ overnight. Vomited x2. Temp 100.4°F. RLQ tender with guarding, positive McBurney's. WBC 14.2 with left shift. CT confirmed appendicitis, no perforation. Received morphine 4mg IV for pain, ondansetron 4mg IV. NPO since arrival. IV cefoxitin 2g given per surgical protocol.",
      pendingItems: [
        "OR scheduling — surgical team aware, likely first case AM",
        "Repeat CBC in AM pre-op",
        "Type and screen — sent, pending"
      ],
      completedOrders: [
        "CT abdomen/pelvis with IV contrast — completed",
        "CBC, BMP, lipase, UA — resulted",
        "Cefoxitin 2g IV x1 (surgical prophylaxis)",
        "Morphine 4mg IV x1, ondansetron 4mg IV x1",
        "NPO order placed",
        "IVF: LR at 125 mL/hr"
      ],
      activeIVs: [
        "Lactated Ringer's at 125 mL/hr"
      ],
      watchOuts: [
        "Monitor for signs of perforation overnight: increasing pain, rigidity, rising fever, tachycardia.",
        "If pain dramatically worsens or develops peritoneal signs, notify surgery immediately — may need to bump to urgent OR.",
        "NPO strictly — will be first case in the morning per Dr. Chen (surgery attending).",
        "Young healthy male, no significant PMH. Straightforward case."
      ],
      disposition: "Floor (surgical). Pre-op holding essentially. Planned laparoscopic appendectomy AM.",
      familyUpdate: "Parents notified. Mother en route to hospital.",
      codeStatus: "FULL CODE"
    },

    // ─────────────────────────────────────────────────────
    // DKA — Endocrine Emergency
    // ─────────────────────────────────────────────────────
    "dka": {
      caseId: "dka",
      edPhysician: "Dr. Anil Mehta, MD",
      handoffTime: "04:20",
      admittingService: "Internal Medicine (with Endocrine consult)",
      bedAssignment: "MICU — Bed 8",
      acuity: { esi: 2, code: "URGENT" },
      oneLiner: "34-year-old female with Type 1 DM presenting with 2 days of nausea, vomiting, abdominal pain, and polyuria. Found to have glucose 486, pH 7.14, bicarb 8, anion gap 28, positive ketones. She ran out of insulin 4 days ago.",
      workingDx: "Diabetic Ketoacidosis, severe (pH <7.2)",
      edCourse: "Arrived by EMS lethargic but arousable. Kussmaul respirations noted. Glucose at triage 486. VBG: pH 7.14, pCO2 18, bicarb 8. AG 28. Beta-hydroxybutyrate 6.8. Started insulin drip at 0.14 units/kg/hr per protocol. NS 1L bolus given, then transitioned to NS at 250 mL/hr. K was 5.4 initially (expected — acidosis shift), repeat at 2 hours was 4.6 with insulin running. Phosphorus 1.1 (low). Glucose at 2 hours: 380 and trending down. Precipitant: medication non-adherence (ran out of insulin, couldn't afford refill).",
      pendingItems: [
        "Repeat BMP and VBG at 06:00 (q2h per DKA protocol)",
        "A1c — sent, pending",
        "Endocrine consult placed — will see in AM",
        "Social work consult for medication access"
      ],
      completedOrders: [
        "Insulin drip initiated at 0.14 units/kg/hr",
        "NS 1L bolus → NS at 250 mL/hr",
        "KCl 40 mEq added to IVF (K 4.6 and trending down with insulin)",
        "Phosphorus replacement: K-Phos 15 mmol IV",
        "BMP, VBG, CBC, beta-hydroxybutyrate, UA, lipase, A1c",
        "Continuous glucose monitoring (q1h bedside + q2h lab draws)"
      ],
      activeIVs: [
        "Regular insulin drip at 7 units/hr (0.14 units/kg for 50 kg patient)",
        "NS + 40 mEq KCl/L at 250 mL/hr",
        "K-Phos infusing (will be complete by ~05:00)"
      ],
      watchOuts: [
        "DKA PROTOCOL IS RUNNING — follow ICU DKA order set. Do NOT stop insulin drip until anion gap closes, even if glucose normalizes. Add D5 to IVF when glucose <250.",
        "Potassium will drop fast with insulin. Check q2h. Replace aggressively. If K <3.3, hold insulin until repleted.",
        "Watch for cerebral edema (rare in adults but she's young) — if AMS worsens paradoxically, get stat CT head.",
        "Phosphorus was critically low at 1.1 — recheck after replacement.",
        "Social determinant trigger: she ran out of insulin because she couldn't afford it. Social work consult is critical for discharge planning.",
        "She's scared. Be kind. This isn't non-compliance — this is a system failure."
      ],
      disposition: "ICU for insulin drip management and q2h monitoring. Transfer to floor when: AG closed, tolerating PO, transitioned to SQ insulin.",
      familyUpdate: "Patient's sister called. Updated. Will visit in the morning.",
      codeStatus: "FULL CODE"
    },

    // ─────────────────────────────────────────────────────
    // Ectopic Pregnancy — Obstetric Emergency
    // ─────────────────────────────────────────────────────
    "ectopic-pregnancy": {
      caseId: "ectopic-pregnancy",
      edPhysician: "Dr. Sarah Kim, MD",
      handoffTime: "01:10",
      admittingService: "OB/GYN (Surgical)",
      bedAssignment: "L&D Observation — Bed 3",
      acuity: { esi: 2, code: "URGENT" },
      oneLiner: "26-year-old female, G2P1, LMP 7 weeks ago, presenting with acute left lower quadrant pain and vaginal spotting. Quantitative hCG 4,200 with no IUP on transvaginal ultrasound. Left adnexal mass 3.2 cm with free fluid in the cul-de-sac.",
      workingDx: "Left ectopic pregnancy with concern for pending rupture",
      edCourse: "Arrived with acute onset LLQ pain starting 3 hours ago. Syncopal episode at home. BP 98/62, HR 112 on arrival (orthostatic). TVUS shows empty uterus, left adnexal complex mass 3.2 cm, moderate free fluid in pelvis. hCG 4,200 — discriminatory zone without IUP is highly concerning for ectopic. Hemoglobin 10.2. Given NS 1L bolus with improvement in vitals (BP 108/70, HR 98). T&S and crossmatch sent. OB/GYN resident notified and evaluated in ED.",
      pendingItems: [
        "Crossmatch — pending (2 units pRBC)",
        "Repeat hCG in AM (if surgery delayed)",
        "Rh status — sent, need result for RhoGAM decision"
      ],
      completedOrders: [
        "TVUS — completed",
        "Quantitative hCG, CBC, BMP, T&S, coags, blood type",
        "NS 1L bolus — infused",
        "Large-bore IV x2 (18g bilateral ACs)",
        "NPO in case of OR"
      ],
      activeIVs: [
        "NS at 150 mL/hr via 18g left AC"
      ],
      watchOuts: [
        "HEMODYNAMICALLY BORDERLINE — was orthostatic on arrival. If BP drops or HR rises, she may be actively rupturing. Have blood available.",
        "OB/GYN attending (Dr. Patel) is aware and plans to take to OR in the morning for laparoscopic salpingectomy vs. salpingostomy. If she destabilizes overnight, this becomes an emergent case.",
        "If Rh-negative, needs RhoGAM before surgery.",
        "This is her second pregnancy — first was uncomplicated vaginal delivery. Fertility counseling will be important post-op.",
        "Husband is at bedside. They are both aware of the diagnosis and seem to be processing it. Be sensitive."
      ],
      disposition: "L&D observation with surgical plan for AM. If hemodynamic instability → emergent OR.",
      familyUpdate: "Husband at bedside. Both informed of diagnosis and surgical plan.",
      codeStatus: "FULL CODE"
    },

    // ─────────────────────────────────────────────────────
    // Stroke — Altered Mental Status
    // ─────────────────────────────────────────────────────
    "acute-stroke": {
      caseId: "acute-stroke",
      edPhysician: "Dr. Michael Torres, MD",
      handoffTime: "06:30",
      admittingService: "Neurology (Stroke Service)",
      bedAssignment: "Neuro ICU — Bed 2",
      acuity: { esi: 1, code: "CRITICAL" },
      oneLiner: "72-year-old male found by wife at 05:00 with right hemiplegia, global aphasia, left gaze preference. Last known well 22:00 last night. CT head: no hemorrhage. CTA: left MCA M1 occlusion. NIHSS 18. Not tPA candidate (outside window). Thrombectomy team activated.",
      workingDx: "Acute ischemic stroke — left MCA territory, large vessel occlusion",
      edCourse: "Wife found patient in bed unable to speak or move right side at 05:00. Last known normal 22:00 (>6 hours). CT head negative for hemorrhage. CTA shows left MCA M1 occlusion with good collaterals. NIHSS 18 (right hemiplegia, global aphasia, left gaze deviation, right homonymous hemianopia, left neglect). Outside tPA window. Interventional neuroradiology activated for mechanical thrombectomy — patient going to IR suite now. BP currently 178/94, permissive hypertension per stroke protocol (do not lower below 180/105 unless post-thrombectomy). Glucose 142.",
      pendingItems: [
        "THROMBECTOMY IN PROGRESS — expected completion ~07:30",
        "Post-procedure CT head (will be ordered after thrombectomy)",
        "Repeat NIHSS post-procedure",
        "MRI brain — order for tomorrow AM",
        "Echo, telemetry, lipid panel for stroke workup",
        "A1c pending"
      ],
      completedOrders: [
        "CT head without contrast — completed (no hemorrhage)",
        "CTA head and neck — completed (left MCA M1 occlusion)",
        "CBC, BMP, coags, glucose, troponin, A1c — resulted except A1c",
        "Aspirin held until post-thrombectomy imaging confirms no hemorrhage",
        "Continuous telemetry",
        "Strict NPO (aspiration risk with dysphagia)",
        "HOB at 0° (flat) per stroke protocol"
      ],
      activeIVs: [
        "NS at 100 mL/hr"
      ],
      watchOuts: [
        "POST-THROMBECTOMY PROTOCOL: After procedure, patient goes to Neuro ICU. Neuro checks q15 min x 2 hours, then q1h. Any neurological decline → stat CT head to rule out hemorrhagic conversion.",
        "BP management is critical. PRE-thrombectomy: permissive hypertension <220/120. POST-thrombectomy: target <180/105. Use nicardipine drip if needed.",
        "NPO strictly — high aspiration risk with global aphasia and likely dysphagia. Speech therapy swallow eval tomorrow.",
        "Do NOT give aspirin or anticoagulation until post-procedure CT confirms no hemorrhage (typically 24 hours post).",
        "Wife is in the waiting room. She is very distressed. Social work and chaplain have been notified."
      ],
      disposition: "Neuro ICU for post-thrombectomy monitoring. Transfer to stroke unit when stable for >24 hours post-procedure.",
      familyUpdate: "Wife (Margaret) in waiting room. Updated on thrombectomy plan. Stroke coordinator will follow up.",
      codeStatus: "FULL CODE (confirmed with wife as surrogate given patient's aphasia)"
    },

    // ─────────────────────────────────────────────────────
    // Bipolar Mania — Psychiatric Emergency
    // ─────────────────────────────────────────────────────
    "bipolar-mania": {
      caseId: "bipolar-mania",
      edPhysician: "Dr. Karen Liu, MD",
      handoffTime: "23:00",
      admittingService: "Psychiatry (Inpatient)",
      bedAssignment: "Psych Unit — Room 8B",
      acuity: { esi: 3, code: "MODERATE" },
      oneLiner: "38-year-old female with Bipolar I disorder brought in by family for 5 days of progressively worsening mania — decreased sleep (2 hours/night), rapid pressured speech, grandiosity (believes she's been chosen to advise the President), spending spree ($12,000 on credit cards), and impaired judgment. She stopped her lithium 2 weeks ago because she 'felt fine.'",
      workingDx: "Bipolar I Disorder, current episode manic, severe, without psychotic features",
      edCourse: "Brought by husband and mother. Alert, oriented x3 but distractible and difficult to redirect. Flight of ideas, pressured speech, elevated mood with irritability when challenged. No suicidal ideation. No command hallucinations but some grandiose ideation (not frankly delusional). Denies substance use — UDS negative. TSH normal. Lithium level undetectable (stopped 2 weeks ago). BMP normal including normal renal function. BAL 0.0. Medical clearance completed. Patient initially refused admission, then agreed when husband expressed concern. Voluntary admission.",
      pendingItems: [
        "Repeat lithium level in AM after reloading dose",
        "ECG — ordered but not yet completed (need baseline for QTc before starting any antipsychotics)"
      ],
      completedOrders: [
        "Medical clearance labs: CBC, BMP, TSH, lithium level, UDS, BAL, UA — all resulted",
        "Lithium level: <0.1 (undetectable)",
        "Voluntary admission paperwork completed",
        "1:1 sitter in ED (being discontinued on transfer to locked unit)"
      ],
      activeIVs: [
        "None — PO access intact"
      ],
      watchOuts: [
        "VOLUNTARY admission — she can request to leave. If she requests discharge and is determined to be a danger to herself (impaired judgment, financial harm), may need to convert to involuntary hold. Know your state criteria.",
        "Lithium was previously therapeutic at 900mg BID. Will need gradual re-titration with levels. Renal function is normal — good.",
        "She's PLEASANT but don't be fooled by the elevated mood — judgment is severely impaired. The $12,000 spending spree is evidence of functional impairment.",
        "Husband (David) is supportive but exhausted. He's the one who brought her in. He may need support resources.",
        "She's a high school teacher — will need FMLA paperwork eventually."
      ],
      disposition: "Psychiatry inpatient unit. Locked ward. Voluntary status.",
      familyUpdate: "Husband David and mother Joan both present. Updated. Supportive of admission.",
      codeStatus: "FULL CODE"
    },

    // ─────────────────────────────────────────────────────
    // Pediatric Bronchiolitis — Pediatric Emergency
    // ─────────────────────────────────────────────────────
    "bronchiolitis": {
      caseId: "bronchiolitis",
      edPhysician: "Dr. Priya Desai, MD",
      handoffTime: "20:15",
      admittingService: "Pediatrics",
      bedAssignment: "Peds Floor — Room 204",
      acuity: { esi: 3, code: "MODERATE" },
      oneLiner: "8-month-old male with 3 days of URI symptoms now with increased work of breathing, tachypnea, and poor feeding. RSV positive. SpO2 fluctuating 88-93% on room air. Requiring 1L NC to maintain >92%. Born full-term, no comorbidities.",
      workingDx: "RSV bronchiolitis with moderate respiratory distress",
      edCourse: "Parents brought him in after noticing fast breathing and refusal of bottle feeds today. Subcostal and intercostal retractions noted. SpO2 88% on arrival, improved to 94% on 1L NC. Nasal suctioning performed with improvement. Given 5 mL/kg NS bolus for mild dehydration (decreased wet diapers). RSV rapid positive. CXR: bilateral peribronchial thickening, no focal consolidation. Weight today: 8.2 kg (50th percentile for age). No apnea episodes observed.",
      pendingItems: [
        "Repeat weight in AM (assess hydration)",
        "Reassess feeding tolerance overnight"
      ],
      completedOrders: [
        "RSV rapid — positive",
        "CXR — completed",
        "NS bolus 40 mL (5 mL/kg) — infused",
        "Nasal suctioning PRN ordered",
        "Continuous pulse oximetry ordered",
        "D5 1/2 NS at maintenance rate ordered (if not tolerating PO)"
      ],
      activeIVs: [
        "Saline lock in place (for access if needed)"
      ],
      watchOuts: [
        "PEAK OF ILLNESS is usually day 3-5. He's on day 3. May worsen before improving.",
        "O2 requirement: Target SpO2 ≥90% per AAP guidelines. He's on 1L NC — if needing >2L or high-flow, consider PICU.",
        "Watch for APNEA — especially overnight. Young infants with RSV can have central apnea. Continuous monitoring is essential.",
        "Feeding: The most common reason these kids stay is inability to feed. If not taking at least 50% of normal volume, continue IV maintenance fluids.",
        "NO bronchodilators, NO steroids per AAP bronchiolitis guidelines. Supportive care only.",
        "Parents are first-time parents and very anxious. They need education about the expected course (5-7 days, will get worse before better) and reassurance about what we're monitoring."
      ],
      disposition: "Peds floor. Not meeting PICU criteria (no high-flow, no apnea, responsive to low-flow O2).",
      familyUpdate: "Both parents at bedside. Educated about RSV course. They are staying overnight.",
      codeStatus: "FULL CODE"
    },

    // ─────────────────────────────────────────────────────
    // Crohn's Flare — Abdominal Pain
    // ─────────────────────────────────────────────────────
    "crohn-flare": {
      caseId: "crohn-flare",
      edPhysician: "Dr. Robert Park, MD",
      handoffTime: "14:30",
      admittingService: "Internal Medicine (with GI consult)",
      bedAssignment: "3 South — Room 322",
      acuity: { esi: 3, code: "MODERATE" },
      oneLiner: "29-year-old female with known Crohn's disease (ileal) presenting with 4 days of worsening RLQ crampy pain, bloody diarrhea (8-10 episodes/day), and inability to tolerate PO. She self-discontinued adalimumab 6 weeks ago due to insurance lapse.",
      workingDx: "Crohn's disease flare — moderate-to-severe",
      edCourse: "CT abdomen/pelvis: ileal wall thickening and enhancement consistent with active Crohn's, no abscess, no obstruction, no free air. CRP 48 (markedly elevated). Albumin 2.9 (low). WBC 13.4. Hemoglobin 10.8 (from baseline 12.2). Received IV methylprednisolone 40mg, ondansetron 4mg, NS 1L bolus. Tolerating ice chips. GI consult placed.",
      pendingItems: [
        "GI consult — placed, will see in AM",
        "Stool studies (C. diff, culture, O&P) — sent",
        "Fecal calprotectin — sent",
        "Iron studies — sent"
      ],
      completedOrders: [
        "CT abdomen/pelvis with IV contrast — completed",
        "CBC, BMP, CRP, ESR, albumin, LFTs, iron studies, stool studies",
        "Methylprednisolone 40mg IV x1",
        "Ondansetron 4mg IV PRN",
        "NS 1L bolus",
        "Clear liquid diet when tolerating"
      ],
      activeIVs: [
        "NS at 125 mL/hr"
      ],
      watchOuts: [
        "Rule out C. diff before attributing everything to Crohn's — stool studies pending.",
        "She's nutritionally depleted (albumin 2.9, weight loss). GI will likely want to discuss nutrition plan.",
        "Adalimumab was discontinued for INSURANCE reasons, not clinical. Social work consult for medication access is essential.",
        "If she develops peritoneal signs, obstruction symptoms (vomiting, distension), or high fever — get surgical consult. CT showed no abscess but things can evolve.",
        "She's been managing this alone and seems overwhelmed. She may benefit from IBD support resources."
      ],
      disposition: "Floor appropriate. No surgical abdomen. Hemodynamically stable.",
      familyUpdate: "Patient is her own decision-maker. No family at bedside currently. Boyfriend listed as emergency contact.",
      codeStatus: "FULL CODE"
    }
  },

  // ─── HELPER: Get handoff for a case ───
  getHandoff: function(caseId) {
    return this.handoffs[caseId] || null;
  },

  // ─── HELPER: Check if handoff exists for a case ───
  hasHandoff: function(caseId) {
    return !!this.handoffs[caseId];
  },

  // ─── HELPER: Get all cases with handoffs ───
  getAvailableCases: function() {
    return Object.keys(this.handoffs);
  }
};