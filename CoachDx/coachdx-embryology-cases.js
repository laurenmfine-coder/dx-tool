// ============================================================================
// COACHDX EMBRYOLOGY CASE PACK
// SBAR scenarios for embryology-based clinical reasoning training
// Created: February 8, 2026
// Dr. Lauren Fine | NSU KPCOM
// ============================================================================
//
// CASES INCLUDED:
// 1. Laryngotracheal Development — Tracheoesophageal Fistula
// 2. Skeletal Dysplasia — Achondroplasia Prenatal Diagnosis
// 3. Amniotic Band Syndrome — Asymmetric Limb Constriction
// 4. Polydactyly & Syndactyly — Postaxial Polydactyly Evaluation
// 5. Surfactant Deficiency & RDS — Premature Neonate
// 6. Cardiac Embryology — Cyanotic Newborn with CHD
// 7. Neuro Embryology — Neural Tube Defect Counseling
// 8. Respiratory Embryology — Congenital Diaphragmatic Hernia
// 9. Renal Embryology — Bilateral Hydronephrosis in Newborn
// 10. MSK Embryology — Clubfoot Evaluation
// 11. GI Embryology — Duodenal Atresia in Down Syndrome
// 12. Pharyngeal Apparatus — DiGeorge Syndrome Evaluation
// 13. Branchial Cleft Anomalies — Lateral Neck Mass
//
// ============================================================================

const COACHDX_EMBRYOLOGY_CASES = {

// ============================================================================
// CASE 1: LARYNGOTRACHEAL DEVELOPMENT — TEF
// ============================================================================

'tef-presentation': {
    id: 'tef-presentation',
    title: 'Tracheoesophageal Fistula — Feeding Intolerance in a Newborn',
    category: 'Respiratory Embryology',
    patient: {
        name: 'Baby Martinez',
        age: '4 hours old',
        sex: 'Male',
        setting: 'Newborn Nursery',
        acuity: 'Urgent',
        chiefComplaint: 'Excessive drooling, choking with first feed'
    },
    description: 'A full-term male born via uncomplicated vaginal delivery. Prenatal ultrasound showed polyhydramnios. At 4 hours of life, the infant has excessive oral secretions, drooling, and chokes/cyanoses with first breastfeeding attempt. A feeding tube cannot be passed beyond 10 cm.',
    openingStatement: 'Baby Martinez has the classic presentation of esophageal atresia with TEF. The feeding tube won\'t pass — let\'s work through the embryology and the urgent management.',
    conceptDomains: {
        'Situation': ['feeding_intolerance', 'inability_to_pass_ogt', 'polyhydramnios_history'],
        'Background': ['foregut_development', 'tracheoesophageal_septum', 'vacterl_association'],
        'Assessment': ['tef_type_classification', 'associated_anomalies', 'respiratory_status'],
        'Recommendation': ['npo_continuous_suction', 'surgical_consultation', 'vacterl_workup']
    },
    quickActions: [
        'What is the embryological defect?',
        'What are the TEF types?',
        'What is VACTERL association?',
        'What is the immediate management?'
    ],
    keyTeachingPoints: [
        'TEF results from incomplete separation of foregut into trachea and esophagus by the tracheoesophageal septum during weeks 4-5',
        'Most common type (Type C, 85%): proximal esophageal atresia + distal TEF',
        'Polyhydramnios occurs because the fetus cannot swallow amniotic fluid (blind esophageal pouch)',
        'VACTERL: Vertebral, Anorectal, Cardiac, TEF, Esophageal, Renal, Limb anomalies',
        'Immediate: NPO, continuous suction of proximal pouch, upright positioning, surgical repair'
    ],
    sbarTemplate: {
        situation: 'I have a full-term newborn who cannot tolerate feeds. He\'s drooling excessively and desats with attempts. OGT won\'t pass beyond 10 cm. Prenatal history notable for polyhydramnios.',
        background: 'This presentation is consistent with esophageal atresia, likely with a distal TEF (Type C). The polyhydramnios fits — the fetus couldn\'t swallow amniotic fluid. We need to evaluate for VACTERL-associated anomalies.',
        assessment: 'Esophageal atresia with probable distal TEF. Currently maintaining sats on room air between episodes. No respiratory distress at baseline. No obvious external anomalies on initial exam.',
        recommendation: 'NPO with Replogle tube to continuous suction in the proximal pouch. CXR with OGT in place to confirm atresia and look for distal gas (confirms TEF). Echocardiogram, renal US, spine films, and careful anorectal/limb exam for VACTERL. Pediatric surgery consult for primary repair.'
    },
    evidenceBase: {
        guidelines: ['AAP Neonatal Resuscitation Guidelines', 'Pediatric Surgery — Ashcraft\'s'],
        references: ['StatPearls NBK537376 — Esophageal Atresia']
    }
},

// ============================================================================
// CASE 2: SKELETAL DYSPLASIA
// ============================================================================

'skeletal-dysplasia-prenatal': {
    id: 'skeletal-dysplasia-prenatal',
    title: 'Skeletal Dysplasia — Short Limbs on Prenatal Ultrasound',
    category: 'MSK Embryology',
    patient: {
        name: 'Mother: Sarah Chen',
        age: '32 weeks gestational age',
        sex: 'Female fetus',
        setting: 'Maternal-Fetal Medicine Clinic',
        acuity: 'Non-urgent',
        chiefComplaint: 'Short femurs on routine ultrasound'
    },
    description: 'A 30-year-old G2P1 at 32 weeks presents for follow-up after routine ultrasound showed femur length below the 3rd percentile with rhizomelic (proximal) shortening. The head circumference is above the 90th percentile (relative macrocephaly). The chest circumference is normal. Amniotic fluid is normal.',
    openingStatement: 'The ultrasound findings — rhizomelic limb shortening with relative macrocephaly — point toward a specific skeletal dysplasia. Let\'s reason through the embryology of endochondral ossification and which dysplasia this pattern fits.',
    conceptDomains: {
        'Situation': ['short_long_bones', 'rhizomelic_pattern', 'macrocephaly'],
        'Background': ['endochondral_ossification', 'fgfr3_role', 'growth_plate_zones'],
        'Assessment': ['achondroplasia_features', 'lethal_vs_nonlethal_dysplasia', 'genetic_counseling'],
        'Recommendation': ['genetic_testing', 'delivery_planning', 'nicu_awareness']
    },
    keyTeachingPoints: [
        'Endochondral ossification: mesenchyme → cartilage model → bone replacement. Long bones grow via proliferation at growth plates',
        'FGFR3 gain-of-function mutation → constitutive inhibition of chondrocyte proliferation → short bones',
        'Achondroplasia: most common non-lethal skeletal dysplasia. Rhizomelic shortening, macrocephaly, frontal bossing, trident hand',
        'Thanatophoric dysplasia (also FGFR3): lethal, severely shortened limbs, narrow thorax → pulmonary hypoplasia',
        'Normal chest size and amniotic fluid = favorable prognostic signs (adequate lung development)'
    ],
    evidenceBase: {
        guidelines: ['ACOG Practice Bulletin — Skeletal Dysplasias'],
        references: ['StatPearls NBK559256 — Achondroplasia']
    }
},

// ============================================================================
// CASE 3: AMNIOTIC BAND SYNDROME
// ============================================================================

'amniotic-band-presentation': {
    id: 'amniotic-band-presentation',
    title: 'Amniotic Band Syndrome — Asymmetric Constriction Rings',
    category: 'MSK Embryology',
    patient: {
        name: 'Baby Williams',
        age: 'Newborn',
        sex: 'Female',
        setting: 'Delivery Room',
        acuity: 'Urgent evaluation',
        chiefComplaint: 'Constriction rings on fingers and abnormal foot'
    },
    description: 'A full-term female is born with circumferential constriction bands around the 2nd and 3rd digits of the left hand, with distal edema. The right foot has amputation of the 4th and 5th toes. The defects are completely asymmetric and do not follow any dermatomal pattern. No other anomalies are identified.',
    openingStatement: 'The asymmetric, non-dermatomal pattern of constriction and amputation is the hallmark. This is not a genetic syndrome — let\'s discuss what happened in utero and why the random distribution is actually the diagnostic clue.',
    conceptDomains: {
        'Situation': ['constriction_rings', 'digital_amputation', 'asymmetric_distribution'],
        'Background': ['amniotic_band_pathogenesis', 'extrinsic_vs_intrinsic_mechanism'],
        'Assessment': ['severity_classification', 'vascular_compromise', 'craniofacial_involvement'],
        'Recommendation': ['vascular_assessment', 'surgical_release', 'reassurance_non_hereditary']
    },
    keyTeachingPoints: [
        'ABS results from early amnion rupture → fibrous strands entangle fetal parts',
        'Hallmark: ASYMMETRIC defects that do NOT follow developmental or dermatomal patterns',
        'Distinguishes from genetic syndromes (which are symmetric and follow developmental rules)',
        'Spectrum: constriction rings → lymphedema → amputation → craniofacial clefts (most severe)',
        'Recurrence risk is essentially zero — sporadic, not genetic'
    ],
    evidenceBase: {
        references: ['StatPearls NBK525968 — Amniotic Band Syndrome']
    }
},

// ============================================================================
// CASE 4: POLYDACTYLY & SYNDACTYLY
// ============================================================================

'polydactyly-evaluation': {
    id: 'polydactyly-evaluation',
    title: 'Postaxial Polydactyly — Newborn Hand Evaluation',
    category: 'MSK Embryology',
    patient: {
        name: 'Baby Jackson',
        age: 'Newborn',
        sex: 'Male',
        setting: 'Newborn Nursery',
        acuity: 'Non-urgent',
        chiefComplaint: 'Extra digit on both hands, ulnar side'
    },
    description: 'A full-term male of African American descent is born with bilateral postaxial polydactyly — small, pedunculated extra digits on the ulnar side of each hand. The digits appear to be skin tags with no bony structure on palpation. The rest of the exam is normal.',
    openingStatement: 'Postaxial polydactyly is one of the most common congenital hand anomalies. Let\'s discuss the embryology of limb patterning and when this is an isolated finding versus a clue to a larger syndrome.',
    conceptDomains: {
        'Situation': ['postaxial_polydactyly', 'bilateral', 'skin_tag_type'],
        'Background': ['zpa_shh_signaling', 'limb_bud_patterning', 'ap_axis'],
        'Assessment': ['isolated_vs_syndromic', 'type_a_vs_type_b', 'genetic_associations'],
        'Recommendation': ['suture_ligation_vs_surgery', 'syndromic_workup_if_indicated']
    },
    keyTeachingPoints: [
        'Limb anterior-posterior patterning is controlled by the Zone of Polarizing Activity (ZPA) producing Sonic Hedgehog (SHH)',
        'Postaxial (ulnar/fibular side) = excess SHH signaling. Preaxial (radial/tibial) = different pathways',
        'Isolated postaxial polydactyly Type B (skin tag) is common in African Americans — autosomal dominant, benign',
        'Preaxial polydactyly warrants syndromic workup (Holt-Oram, Fanconi, trisomy 13)',
        'Syndactyly results from failure of programmed cell death (apoptosis) between digits during weeks 6-8'
    ],
    evidenceBase: {
        references: ['StatPearls NBK562295 — Polydactyly']
    }
},

// ============================================================================
// CASE 5: SURFACTANT DEFICIENCY & RDS
// ============================================================================

'rds-premature': {
    id: 'rds-premature',
    title: 'Neonatal RDS — Premature Infant with Respiratory Distress',
    category: 'Respiratory Embryology',
    patient: {
        name: 'Baby Thompson',
        age: '2 hours old, born at 28 weeks',
        sex: 'Male',
        setting: 'NICU',
        acuity: 'Critical',
        chiefComplaint: 'Progressive respiratory distress, grunting, retracting'
    },
    description: 'A 28-week premature male born via emergent C-section for preeclampsia. Mother received one dose of betamethasone 6 hours before delivery. At 2 hours of life: grunting, nasal flaring, intercostal retractions, FiO2 requirement increasing from 30% to 60%. CXR shows bilateral ground-glass opacities with air bronchograms.',
    openingStatement: 'This premature infant has classic neonatal RDS. Let\'s walk through why 28-weekers are so vulnerable — the embryology of lung development and surfactant production — and how we manage this.',
    conceptDomains: {
        'Situation': ['prematurity', 'progressive_respiratory_distress', 'cxr_findings'],
        'Background': ['lung_development_stages', 'type_ii_pneumocyte_maturation', 'surfactant_composition'],
        'Assessment': ['rds_severity', 'surfactant_deficiency', 'antenatal_steroid_timing'],
        'Recommendation': ['exogenous_surfactant', 'cpap_vs_intubation', 'nicu_management']
    },
    keyTeachingPoints: [
        'Lung development stages: embryonic (3-7wk), pseudoglandular (7-16wk), canalicular (16-26wk), saccular (26-36wk), alveolar (36wk-8yr)',
        'Type II pneumocytes produce surfactant starting ~24-28 weeks; adequate levels by ~35 weeks',
        'Surfactant: DPPC (dipalmitoylphosphatidylcholine) is the main component — reduces surface tension, prevents alveolar collapse',
        'Antenatal betamethasone (2 doses 24h apart) accelerates type II pneumocyte maturation — reduces RDS by 50%',
        'Treatment: exogenous surfactant (beractant, poractant), CPAP, gentle ventilation to avoid barotrauma'
    ],
    evidenceBase: {
        guidelines: ['AAP/NRP Guidelines', 'European Consensus Guidelines on Surfactant'],
        references: ['StatPearls NBK544371 — Lung Development']
    }
},

// ============================================================================
// CASE 6: CARDIAC EMBRYOLOGY — CYANOTIC CHD
// ============================================================================

'cyanotic-chd-newborn': {
    id: 'cyanotic-chd-newborn',
    title: 'Cyanotic CHD — Newborn with Failed Pulse Oximetry Screening',
    category: 'Embryology',
    patient: {
        name: 'Baby Davis',
        age: '24 hours old',
        sex: 'Male',
        setting: 'Newborn Nursery',
        acuity: 'Critical',
        chiefComplaint: 'Failed pulse oximetry screening, SpO2 85%'
    },
    description: 'A full-term male passes initial assessment but fails newborn pulse oximetry screening at 24 hours with pre-ductal SpO2 88% and post-ductal SpO2 82%. The infant appears dusky with mild tachypnea but no respiratory distress. CXR shows decreased pulmonary vascular markings and boot-shaped heart.',
    openingStatement: 'Failed pulse ox screening with pre-post ductal gradient and a boot-shaped heart — the embryology here involves neural crest cell migration and conotruncal septation. Let\'s work through the differential and why understanding cardiac embryology tells you the diagnosis.',
    conceptDomains: {
        'Situation': ['cyanosis', 'prepost_ductal_gradient', 'cxr_findings'],
        'Background': ['conotruncal_septation', 'neural_crest_contribution', 'ductus_arteriosus_physiology'],
        'Assessment': ['tetralogy_of_fallot', 'right_to_left_shunt', 'ductal_dependent_circulation'],
        'Recommendation': ['prostaglandin_e1', 'echocardiogram', 'surgical_planning']
    },
    keyTeachingPoints: [
        'Conotruncal septation (neural crest cells) divides the truncus arteriosus into aorta and pulmonary artery',
        'Unequal division → TOF: overriding aorta, VSD, RV hypertrophy, pulmonary stenosis',
        'Boot-shaped heart (coeur en sabot) = RV hypertrophy without enlarged pulmonary artery segment',
        'Cyanotic CHD differential (5 Ts): TOF, Transposition, Truncus, Tricuspid atresia, TAPVR',
        'Prostaglandin E1 maintains PDA patency — critical bridge therapy for ductal-dependent lesions'
    ],
    evidenceBase: {
        guidelines: ['AHA Congenital Heart Disease Guidelines', 'AAP Pulse Oximetry Screening'],
        references: ['StatPearls NBK537313 — Cardiac Embryology']
    }
},

// ============================================================================
// CASE 7: NEURO EMBRYOLOGY — NEURAL TUBE DEFECT
// ============================================================================

'ntd-counseling': {
    id: 'ntd-counseling',
    title: 'Neural Tube Defect — Myelomeningocele Prenatal Diagnosis',
    category: 'Embryology',
    patient: {
        name: 'Patient: Maria Rodriguez',
        age: '28-year-old, G1P0 at 20 weeks',
        sex: 'Female',
        setting: 'Maternal-Fetal Medicine',
        acuity: 'Non-urgent',
        chiefComplaint: 'Anatomy scan shows lumbosacral myelomeningocele'
    },
    description: 'A 28-year-old primigravida at 20 weeks has a level II ultrasound showing a lumbosacral myelomeningocele. Serum AFP was elevated. The \"lemon sign\" (frontal bone scalloping) and \"banana sign\" (cerebellar compression) are present. No other anomalies identified.',
    openingStatement: 'The elevated AFP and ultrasound findings confirm an open neural tube defect. Let\'s walk through neurulation — how the neural plate becomes the neural tube — and why failure of posterior neuropore closure leads to this specific constellation.',
    conceptDomains: {
        'Situation': ['elevated_afp', 'ultrasound_findings', 'lemon_banana_signs'],
        'Background': ['primary_neurulation', 'posterior_neuropore_closure', 'folic_acid_prevention'],
        'Assessment': ['ntd_classification', 'associated_findings', 'chiari_ii'],
        'Recommendation': ['fetal_surgery_consideration', 'delivery_planning', 'multidisciplinary_care']
    },
    keyTeachingPoints: [
        'Primary neurulation (weeks 3-4): neural plate folds → neural groove → neural tube. Closure begins in the cervical region and zips rostrally and caudally',
        'Posterior neuropore closes by day 28 — failure → spina bifida (meningocele or myelomeningocele)',
        'AFP elevated in maternal serum and amniotic fluid because open defect leaks fetal proteins',
        'Chiari II malformation (associated): cerebellar tonsillar herniation through foramen magnum → hydrocephalus',
        'Folic acid 400 mcg/day preconception reduces NTD risk by 50-70%; 4 mg/day if prior NTD pregnancy'
    ],
    evidenceBase: {
        guidelines: ['ACOG Practice Bulletin — Neural Tube Defects', 'MOMS Trial — Fetal Surgery'],
        references: ['StatPearls NBK519519 — Neural Tube Defects']
    }
},

// ============================================================================
// CASE 8: RESPIRATORY EMBRYOLOGY — CDH
// ============================================================================

'cdh-presentation': {
    id: 'cdh-presentation',
    title: 'Congenital Diaphragmatic Hernia — Respiratory Distress at Birth',
    category: 'Embryology',
    patient: {
        name: 'Baby Patel',
        age: 'Minutes old',
        sex: 'Male',
        setting: 'Delivery Room',
        acuity: 'Critical',
        chiefComplaint: 'Severe respiratory distress at birth, scaphoid abdomen'
    },
    description: 'A full-term male born with immediate severe respiratory distress despite vigorous cry. The abdomen appears scaphoid (concave). Heart sounds are shifted to the right. Bag-mask ventilation provides minimal improvement. Prenatal ultrasound at 34 weeks had been reported as normal.',
    openingStatement: 'Scaphoid abdomen, shifted heart sounds, immediate distress — the abdominal contents are in the chest. Let\'s reason through the embryology of diaphragm development and why this is a surgical emergency that requires careful initial resuscitation.',
    conceptDomains: {
        'Situation': ['immediate_distress', 'scaphoid_abdomen', 'shifted_heart_sounds'],
        'Background': ['pleuroperitoneal_folds', 'diaphragm_development', 'pulmonary_hypoplasia'],
        'Assessment': ['left_bochdalek_hernia', 'pulmonary_hypertension', 'severity_assessment'],
        'Recommendation': ['intubate_no_bmv', 'ogt_decompression', 'ecmo_consideration']
    },
    keyTeachingPoints: [
        'Diaphragm develops from 4 structures: septum transversum, pleuroperitoneal folds, body wall mesoderm, esophageal mesentery',
        'CDH usually = failure of left pleuroperitoneal fold closure (Bochdalek hernia, 80-85% left-sided)',
        'Abdominal organs herniate into chest → compress developing lung → pulmonary HYPOPLASIA (the real killer)',
        'DO NOT use bag-mask ventilation — gastric distension worsens mediastinal shift. INTUBATE immediately',
        'Associated with persistent pulmonary hypertension (PPHN) — may require inhaled NO, ECMO'
    ],
    evidenceBase: {
        guidelines: ['CDH Study Group Guidelines', 'Euro Consortium Guidelines'],
        references: ['StatPearls NBK544376 — Congenital Diaphragmatic Hernia']
    }
},

// ============================================================================
// CASE 9: RENAL EMBRYOLOGY — HYDRONEPHROSIS
// ============================================================================

'renal-hydronephrosis-newborn': {
    id: 'renal-hydronephrosis-newborn',
    title: 'Bilateral Hydronephrosis — Prenatal Diagnosis',
    category: 'Embryology',
    patient: {
        name: 'Baby Wilson (Male)',
        age: '34 weeks gestational age (prenatal)',
        sex: 'Male',
        setting: 'Maternal-Fetal Medicine',
        acuity: 'Urgent evaluation',
        chiefComplaint: 'Bilateral hydronephrosis and oligohydramnios on ultrasound'
    },
    description: 'A 34-week prenatal ultrasound shows bilateral hydronephrosis (APD >15mm bilaterally), a distended thick-walled bladder, and moderate oligohydramnios. The male fetus has been growing appropriately. This is the first noted abnormality.',
    openingStatement: 'Bilateral hydronephrosis with a distended bladder in a MALE fetus and oligohydramnios — let\'s reason through the embryology of the urinary system and what obstruction at the bladder outlet does to kidney development and lung maturation.',
    conceptDomains: {
        'Situation': ['bilateral_hydronephrosis', 'distended_bladder', 'oligohydramnios'],
        'Background': ['pronephros_mesonephros_metanephros', 'ureteric_bud_induction', 'posterior_urethral_valves'],
        'Assessment': ['puv_diagnosis', 'potter_sequence_risk', 'renal_function_prognosis'],
        'Recommendation': ['postnatal_vcug', 'valve_ablation', 'nephrology_follow_up']
    },
    keyTeachingPoints: [
        'Kidney development: pronephros (week 4, degenerates) → mesonephros (temporary) → metanephros (definitive kidney, week 5+)',
        'Metanephric kidney forms from ureteric bud (collecting system) + metanephric mesenchyme (nephrons)',
        'Posterior urethral valves (PUV): most common cause of bilateral obstructive uropathy in males. Mucosal folds obstruct urethra',
        'Oligohydramnios from obstructive uropathy → Potter sequence: pulmonary hypoplasia, limb deformities, flat facies',
        'Fetal urine production is the major source of amniotic fluid in the 2nd/3rd trimesters'
    ],
    evidenceBase: {
        references: ['StatPearls NBK532915 — Posterior Urethral Valves', 'StatPearls NBK557534 — Renal Embryology']
    }
},

// ============================================================================
// CASE 10: MSK EMBRYOLOGY — CLUBFOOT
// ============================================================================

'clubfoot-evaluation': {
    id: 'clubfoot-evaluation',
    title: 'Clubfoot (Talipes Equinovarus) — Newborn Evaluation',
    category: 'Embryology',
    patient: {
        name: 'Baby Kim',
        age: 'Newborn',
        sex: 'Male',
        setting: 'Newborn Nursery',
        acuity: 'Non-urgent',
        chiefComplaint: 'Bilateral foot deformity'
    },
    description: 'A full-term male is born with bilateral rigid foot deformity: both feet are plantarflexed (equinus), inverted (varus), and adducted (forefoot adduction). The deformity does not correct with gentle manipulation. No other anomalies on exam.',
    openingStatement: 'Bilateral rigid clubfoot — let\'s walk through the embryology of limb development, why this deformity occurs, and the remarkable success of the Ponseti method. But first, we need to distinguish positional from rigid clubfoot.',
    conceptDomains: {
        'Situation': ['bilateral_clubfoot', 'rigid_vs_positional', 'four_components'],
        'Background': ['limb_bud_development', 'mesenchymal_differentiation', 'muscle_bone_interaction'],
        'Assessment': ['idiopathic_vs_syndromic', 'pirani_score', 'associated_conditions'],
        'Recommendation': ['ponseti_method', 'serial_casting', 'achilles_tenotomy']
    },
    keyTeachingPoints: [
        'Limb buds appear at week 4 from lateral plate mesoderm. Upper limbs slightly before lower limbs',
        'Limb patterning: AER (proximal-distal), ZPA/SHH (anterior-posterior), Wnt7a (dorsal-ventral)',
        'Clubfoot (talipes equinovarus): CAVE — Cavus, Adduction, Varus, Equinus. Must be rigid (not passively correctable)',
        'Positional clubfoot (from intrauterine crowding) is flexible and self-corrects. True clubfoot is RIGID',
        'Ponseti method: serial casting (weekly × 6-8 weeks) → percutaneous Achilles tenotomy → bracing. 95% success rate'
    ],
    evidenceBase: {
        references: ['StatPearls NBK554554 — Clubfoot']
    }
},

// ============================================================================
// CASE 11: GI EMBRYOLOGY — DUODENAL ATRESIA
// ============================================================================

'duodenal-atresia-down': {
    id: 'duodenal-atresia-down',
    title: 'Duodenal Atresia — Double Bubble in Down Syndrome',
    category: 'Embryology',
    patient: {
        name: 'Baby Anderson',
        age: 'Newborn, Day 1',
        sex: 'Female',
        setting: 'NICU',
        acuity: 'Urgent',
        chiefComplaint: 'Bilious vomiting, Down syndrome facies'
    },
    description: 'A full-term female with phenotypic features of Down syndrome (epicanthal folds, flat nasal bridge, single palmar crease) develops bilious vomiting on day 1 of life. Abdominal X-ray shows the classic "double bubble" sign with no distal gas. Prenatal ultrasound had shown polyhydramnios.',
    openingStatement: 'Bilious vomiting in a newborn with Down syndrome features and a double bubble — let\'s connect the embryology. The duodenum is a foregut-midgut junction organ, and its atresia involves a failure of recanalization. And the Down syndrome association isn\'t coincidental.',
    conceptDomains: {
        'Situation': ['bilious_vomiting', 'double_bubble', 'down_syndrome'],
        'Background': ['foregut_midgut_junction', 'duodenal_recanalization', 'trisomy_21_association'],
        'Assessment': ['complete_vs_partial_obstruction', 'level_of_obstruction', 'associated_anomalies'],
        'Recommendation': ['ngt_decompression', 'diamond_duodenoduodenostomy', 'cardiac_evaluation']
    },
    keyTeachingPoints: [
        'Duodenum develops from both foregut (proximal to ampulla of Vater) and midgut (distal to ampulla)',
        'During weeks 5-6, the duodenal lumen obliterates (solid cord phase) then recanalizes by week 8-10. Failure → atresia',
        'Double bubble sign: dilated stomach + dilated proximal duodenum, with no distal gas = complete obstruction',
        '~30% of duodenal atresia patients have trisomy 21; ~5% of Down syndrome patients have duodenal atresia',
        'MUST evaluate for cardiac anomalies (40-50% of Down syndrome: AVSD most common)'
    ],
    evidenceBase: {
        references: ['StatPearls NBK555918 — Duodenal Atresia']
    }
},

// ============================================================================
// CASE 12: PHARYNGEAL APPARATUS — DIGEORGE
// ============================================================================

'digeorge-evaluation': {
    id: 'digeorge-evaluation',
    title: 'DiGeorge Syndrome — Hypocalcemia and Cardiac Defect',
    category: 'Embryology',
    patient: {
        name: 'Baby Taylor',
        age: '3 days old',
        sex: 'Male',
        setting: 'NICU',
        acuity: 'Urgent',
        chiefComplaint: 'Neonatal seizures, found to have hypocalcemia and truncus arteriosus'
    },
    description: 'A 3-day-old male presents with seizures. Labs show calcium 5.2 mg/dL (critically low), with absent PTH. Echocardiogram shows truncus arteriosus. Physical exam shows subtle facial features: short philtrum, small jaw, low-set ears. T-cell count is severely reduced.',
    openingStatement: 'Hypocalcemia from absent parathyroids, a conotruncal heart defect, and T-cell deficiency — these three organ systems all share an embryological origin. Let\'s trace it back to the pharyngeal apparatus and the 22q11.2 deletion.',
    conceptDomains: {
        'Situation': ['neonatal_seizures', 'hypocalcemia', 'truncus_arteriosus'],
        'Background': ['pharyngeal_pouches', 'neural_crest_migration', 'third_fourth_pouch_derivatives'],
        'Assessment': ['digeorge_22q11', 'catch_22_mnemonic', 'immunodeficiency_severity'],
        'Recommendation': ['fish_or_microarray', 'calcium_management', 'immunology_referral']
    },
    keyTeachingPoints: [
        'Pharyngeal pouches form endocrine and pharyngeal structures: 1st (middle ear), 2nd (tonsils), 3rd (inferior parathyroid + thymus), 4th (superior parathyroid + C cells)',
        '22q11.2 deletion → failed 3rd/4th pouch development → absent thymus (T-cell deficiency) + absent parathyroids (hypocalcemia)',
        'Neural crest cells from pharyngeal arches also form conotruncal septum → truncus arteriosus, TOF, interrupted aortic arch',
        'CATCH-22: Cardiac, Abnormal facies, Thymic aplasia, Cleft palate, Hypocalcemia — chromosome 22q11.2',
        'Most common microdeletion syndrome (~1:4000). Dx: FISH or chromosomal microarray'
    ],
    evidenceBase: {
        guidelines: ['AAP Clinical Report — 22q11.2 Deletion'],
        references: ['StatPearls NBK546711 — Pharyngeal Apparatus']
    }
},

// ============================================================================
// CASE 13: BRANCHIAL CLEFT ANOMALIES
// ============================================================================

'branchial-cleft-mass': {
    id: 'branchial-cleft-mass',
    title: 'Branchial Cleft Cyst — Lateral Neck Mass',
    category: 'Embryology',
    patient: {
        name: 'Emily Chen',
        age: '8 years old',
        sex: 'Female',
        setting: 'Pediatric Surgery Clinic',
        acuity: 'Non-urgent',
        chiefComplaint: 'Recurrent lateral neck swelling after upper respiratory infections'
    },
    description: 'An 8-year-old girl has a 2 cm fluctuant, non-tender mass at the anterior border of the SCM muscle at the junction of its upper and middle thirds. It has enlarged during each of her last three URI episodes. No overlying skin changes. Ultrasound shows a well-circumscribed cystic structure.',
    openingStatement: 'A recurrent lateral neck mass anterior to the SCM — the classic location tells you which branchial cleft this comes from. Let\'s work through the pharyngeal cleft embryology and understand why these remnants persist and how location predicts the anatomy.',
    conceptDomains: {
        'Situation': ['lateral_neck_mass', 'anterior_to_scm', 'recurrent_with_uri'],
        'Background': ['pharyngeal_clefts', 'cleft_obliteration', 'second_cleft_predominance'],
        'Assessment': ['second_branchial_cleft_cyst', 'cyst_vs_sinus_vs_fistula', 'differential_diagnosis'],
        'Recommendation': ['surgical_excision', 'preoperative_imaging', 'timing_of_surgery']
    },
    keyTeachingPoints: [
        'Pharyngeal/branchial clefts are grooves on the EXTERNAL surface between pharyngeal arches',
        '2nd branchial cleft cyst is the most common (95%): anterior border of SCM, upper third',
        'Clefts 2-4 normally obliterated by overgrowth of the 2nd arch (cervical sinus of His). Failure → cyst, sinus, or fistula',
        '2nd cleft fistula tract: opens externally at anterior SCM → passes between internal and external carotid → opens into tonsillar fossa',
        '1st cleft anomalies: near ear/parotid. 3rd/4th: lower neck, often present with thyroid abscess (especially left-sided pyriform sinus fistula)'
    ],
    evidenceBase: {
        references: ['StatPearls NBK546711 — Branchial Cleft Cyst']
    }
}

};

// Export for platform integration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { COACHDX_EMBRYOLOGY_CASES };
}
