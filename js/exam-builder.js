/* js/exam-builder.js — ReasonDx Physical Exam Builder v3
 * 3-level hierarchy: System → Maneuver → Sub-maneuvers
 * Students must deliberately choose — no pre-exposed checklist.
 * Findings revealed only after explicit selection.
 */
(function () {
  'use strict';

  // ── Exam catalog: System → Maneuvers → optional sub-items ──────
  // Sub-items exist where the parent label is too vague to be clinically meaningful
  // (e.g. "Cerebellar function" → specific tests)
  var EXAM_CATALOG = [
    {
      system: 'General', icon: '👁️',
      maneuvers: [
        { name: 'General appearance and distress' },
        { name: 'Level of consciousness' },
        { name: 'Orientation', subs: [
          'Person', 'Place', 'Time', 'Situation / event'
        ]},
        { name: 'Body habitus and nutritional status' },
        { name: 'Affect and behavior on exam' },
        { name: 'Pain behavior (guarding, grimacing)' },
        { name: 'Gait and station' },
      ]
    },
    {
      system: 'Vital Signs', icon: '📊',
      maneuvers: [
        { name: 'Blood pressure (bilateral arms)' },
        { name: 'Heart rate and rhythm' },
        { name: 'Respiratory rate' },
        { name: 'Temperature and route' },
        { name: 'Oxygen saturation (SpO₂)' },
        { name: 'Weight and BMI' },
        { name: 'Pain scale (0–10)' },
        { name: 'Orthostatic vital signs', subs: [
          'Supine blood pressure and HR',
          'Sitting blood pressure and HR',
          'Standing blood pressure and HR (at 1 and 3 min)',
        ]},
        { name: 'Glasgow Coma Scale (GCS)', subs: [
          'Eye opening (E1–E4)',
          'Verbal response (V1–V5)',
          'Motor response (M1–M6)',
        ]},
      ]
    },
    {
      system: 'Skin', icon: '🖐️',
      maneuvers: [
        { name: 'Color, temperature, moisture' },
        { name: 'Turgor and capillary refill' },
        { name: 'Jaundice / pallor / cyanosis' },
        { name: 'Diaphoresis' },
        { name: 'Rash or lesion inspection', subs: [
          'Distribution and pattern',
          'Morphology (macule, papule, vesicle, pustule, plaque)',
          'Border and color',
          'Blanching vs non-blanching',
        ]},
        { name: 'Petechiae / purpura / ecchymosis' },
        { name: 'Spider angiomata / palmar erythema' },
        { name: 'Telangiectasias' },
        { name: 'Wound or ulcer inspection' },
      ]
    },
    {
      system: 'Head & Eyes', icon: '👁️',
      maneuvers: [
        { name: 'Head inspection (normocephalic, trauma)' },
        { name: 'Facial symmetry' },
        { name: 'Periorbital edema / proptosis' },
        { name: 'Conjunctiva and sclera' },
        { name: 'Pupils', subs: [
          'Size (mm) and symmetry',
          'Direct light reflex',
          'Consensual light reflex',
          'Accommodation reflex',
          'Afferent pupillary defect (swinging flashlight)',
        ]},
        { name: 'Extraocular movements (CN III/IV/VI)', subs: [
          'Horizontal gaze (left and right)',
          'Vertical gaze (up and down)',
          'Oblique movements',
          'Nystagmus (horizontal, vertical, rotary)',
          'Smooth pursuit vs saccades',
        ]},
        { name: 'Visual acuity (confrontation)' },
        { name: 'Visual fields (formal confrontation)' },
        { name: 'Fundoscopic exam', subs: [
          'Optic disc (margins, cup-to-disc ratio)',
          'Retinal vessels (AV nicking, hemorrhages)',
          'Macula',
          'Papilledema assessment',
        ]},
      ]
    },
    {
      system: 'Ears, Nose, Throat', icon: '👂',
      maneuvers: [
        { name: 'Ear canal and tympanic membranes', subs: [
          'External auditory canal inspection',
          'TM color and light reflex',
          'TM mobility (if pneumatic otoscope)',
          'Effusion or perforation',
        ]},
        { name: 'Hearing screen', subs: [
          'Whisper test (informal)',
          'Weber test (512 Hz tuning fork)',
          'Rinne test (512 Hz tuning fork)',
        ]},
        { name: 'Sinus tenderness', subs: [
          'Frontal sinus (percussion)',
          'Maxillary sinus (percussion)',
        ]},
        { name: 'Nasal mucosa and septum', subs: [
          'Mucosal color and moisture',
          'Septal deviation or perforation',
          'Turbinate hypertrophy',
          'Polyps',
        ]},
        { name: 'Post-nasal drip' },
        { name: 'Oropharynx', subs: [
          'Tonsil size and exudate',
          'Posterior pharynx erythema / cobblestoning',
          'Uvula position (midline)',
          'Palate elevation (CN IX/X)',
        ]},
        { name: 'Tongue and floor of mouth' },
        { name: 'Dentition and gums' },
        { name: 'Salivary glands (parotid, submandibular)' },
        { name: 'Voice quality / hoarseness' },
      ]
    },
    {
      system: 'Neck', icon: '🔍',
      maneuvers: [
        { name: 'Jugular venous distension (JVD)', subs: [
          'JVP estimation at 45°',
          'Hepatojugular reflux',
          'Waveform character (a, c, v waves)',
        ]},
        { name: 'Lymph node palpation', subs: [
          'Anterior cervical chain',
          'Posterior cervical chain',
          'Submandibular / submental',
          'Supraclavicular (Virchow\'s node)',
          'Axillary (if clinically relevant)',
        ]},
        { name: 'Thyroid palpation', subs: [
          'Size and symmetry',
          'Nodules (size, mobility, texture)',
          'Tenderness',
          'Bruit on auscultation',
        ]},
        { name: 'Tracheal position' },
        { name: 'Carotid assessment', subs: [
          'Carotid upstroke and volume',
          'Carotid bruits (auscultation)',
        ]},
        { name: 'Neck range of motion', subs: [
          'Flexion / extension',
          'Lateral bending',
          'Rotation',
        ]},
        { name: 'Meningismus', subs: [
          'Nuchal rigidity (chin-to-chest)',
          'Kernig sign',
          'Brudzinski sign',
          'Jolt accentuation (for meningitis)',
        ]},
        { name: 'Parotid / submandibular gland palpation' },
      ]
    },
    {
      system: 'Cardiovascular', icon: '❤️',
      maneuvers: [
        { name: 'Precordial inspection and palpation', subs: [
          'Visible heave or lift',
          'PMI location (ICS, MCL)',
          'PMI character (sustained vs tapping)',
          'Thrills on palpation',
        ]},
        { name: 'Auscultation — heart sounds', subs: [
          'S1 (quality, splitting)',
          'S2 (quality, physiologic splitting, fixed splitting)',
          'Rate and rhythm',
          'Aortic area (RUSB)',
          'Pulmonic area (LUSB)',
          'Tricuspid area (LLSB)',
          'Mitral area (apex)',
        ]},
        { name: 'Murmur assessment', subs: [
          'Grade (I–VI)',
          'Timing (systolic, diastolic, continuous)',
          'Quality (harsh, blowing, rumbling)',
          'Location and radiation',
          'Dynamic maneuver: Valsalva (↑ HOCM, ↓ AS/MR)',
          'Dynamic maneuver: Squatting (↓ HOCM, ↑ AS/MR)',
          'Dynamic maneuver: Handgrip (↑ MR/AR, ↓ HOCM)',
          'Dynamic maneuver: Expiration (↑ left-sided murmurs)',
        ]},
        { name: 'S3 gallop (early diastole / CHF)' },
        { name: 'S4 gallop (late diastole / stiff ventricle)' },
        { name: 'Pericardial friction rub' },
        { name: 'Peripheral pulses', subs: [
          'Radial (rate, rhythm, volume)',
          'Brachial',
          'Femoral (and femoral bruits)',
          'Popliteal',
          'Dorsalis pedis',
          'Posterior tibial',
        ]},
        { name: 'Pulsus paradoxus (>10 mmHg drop with inspiration)' },
        { name: 'Ankle-brachial index (ABI)' },
        { name: 'Abdominal aortic pulsation and aortic width' },
      ]
    },
    {
      system: 'Pulmonary', icon: '🫁',
      maneuvers: [
        { name: 'Inspection', subs: [
          'Respiratory rate and regularity',
          'Depth and effort',
          'Accessory muscle use (SCM, scalene)',
          'Nasal flaring',
          'Intercostal / supraclavicular retractions',
          'Paradoxical breathing',
          'Barrel chest / AP diameter',
          'Kyphoscoliosis',
        ]},
        { name: 'Percussion', subs: [
          'Resonance (anterior fields)',
          'Resonance (posterior fields)',
          'Dullness (consolidation, effusion)',
          'Hyperresonance (pneumothorax, emphysema)',
          'Diaphragmatic excursion',
        ]},
        { name: 'Auscultation — breath sounds', subs: [
          'Anterior: upper lobes',
          'Anterior: middle lobe / lingula',
          'Posterior: lower lobes',
          'Lateral fields',
          'Symmetry (left vs right)',
        ]},
        { name: 'Auscultation — adventitious sounds', subs: [
          'Crackles / rales (timing: early, late, pan-inspiratory)',
          'Wheezes (diffuse vs focal, inspiratory vs expiratory)',
          'Rhonchi',
          'Stridor',
          'Pleural friction rub',
        ]},
        { name: 'Tactile fremitus (increased / decreased)' },
        { name: 'Egophony (E-to-A change over consolidation)' },
        { name: 'Whispered pectoriloquy' },
        { name: 'Central vs peripheral cyanosis' },
        { name: 'Clubbing (digital)' },
        { name: 'Peak flow measurement (if obstructive suspected)' },
      ]
    },
    {
      system: 'Abdomen', icon: '🩺',
      maneuvers: [
        { name: 'Inspection', subs: [
          'Contour (flat, scaphoid, distended)',
          'Visible pulsation',
          'Peristaltic waves',
          'Scars / stomas',
          'Caput medusae',
          'Hernia (umbilical, epigastric, incisional)',
        ]},
        { name: 'Auscultation', subs: [
          'Bowel sounds (presence, quality, frequency)',
          'High-pitched / absent bowel sounds',
          'Aortic bruit',
          'Renal artery bruits (lateral to umbilicus)',
          'Iliac artery bruits',
        ]},
        { name: 'Percussion', subs: [
          'General tympany vs dullness',
          'Liver span (MCL)',
          'Spleen dullness / Traube\'s space',
          'Shifting dullness (ascites)',
        ]},
        { name: 'Palpation — light', subs: [
          'Voluntary guarding',
          'Involuntary guarding / rigidity',
          'Diffuse vs localized tenderness',
          'Superficial masses',
        ]},
        { name: 'Palpation — deep', subs: [
          'Liver edge (size, texture, tenderness)',
          'Spleen palpation',
          'Kidney palpation (bimanual)',
          'Deep masses',
          'Pulsatile aorta',
        ]},
        { name: 'Peritoneal signs', subs: [
          'Rebound tenderness',
          'Involuntary guarding / rigidity',
          'Rovsing sign (referred RLQ pain)',
          'Carnett sign (abdominal wall vs visceral)',
        ]},
        { name: 'Appendicitis provocation signs', subs: [
          'McBurney point tenderness',
          'Rovsing sign',
          'Psoas sign',
          'Obturator sign',
        ]},
        { name: 'Gallbladder / RUQ signs', subs: [
          'Murphy sign',
          'Courvoisier sign (palpable gallbladder)',
          'RUQ percussion tenderness',
        ]},
        { name: 'Ascites assessment', subs: [
          'Shifting dullness',
          'Fluid wave',
          'Puddle sign',
        ]},
        { name: 'Costovertebral angle (CVA) tenderness' },
        { name: 'Inguinal region', subs: [
          'Inguinal lymph nodes',
          'Inguinal hernia (direct vs indirect)',
          'Femoral hernia',
        ]},
        { name: 'Rectal exam (if indicated)', subs: [
          'Sphincter tone',
          'Prostate (size, texture, tenderness)',
          'Stool color / occult blood',
          'Masses',
        ]},
        { name: 'Pelvic exam (if indicated)' },
      ]
    },
    {
      system: 'Musculoskeletal', icon: '🦴',
      maneuvers: [
        { name: 'General inspection', subs: [
          'Posture and alignment',
          'Muscle bulk and atrophy',
          'Joint deformity (valgus, varus, contracture)',
          'Gait pattern',
        ]},
        { name: 'Muscle tone and bulk', subs: [
          'Upper extremity tone',
          'Lower extremity tone',
          'Fasciculations',
          'Spasticity vs rigidity vs flaccidity',
        ]},
        { name: 'Upper extremity ROM and strength', subs: [
          'Shoulder abduction / adduction',
          'Shoulder flexion / extension',
          'Elbow flexion / extension',
          'Wrist flexion / extension',
          'Grip strength',
          'Finger abduction',
        ]},
        { name: 'Lower extremity ROM and strength', subs: [
          'Hip flexion / extension (Thomas test)',
          'Hip abduction / adduction',
          'Knee flexion / extension',
          'Ankle dorsiflexion / plantarflexion',
          'Great toe extension (L5)',
        ]},
        { name: 'Spine assessment', subs: [
          'Inspection (scoliosis, kyphosis, lordosis)',
          'Midline tenderness on percussion',
          'Paraspinal muscle tenderness',
          'Lumbar ROM (flexion, extension, lateral bend)',
          'Schober test (lumbar flexibility)',
          'CVAT (costovertebral angle tenderness)',
        ]},
        { name: 'Shoulder exam', subs: [
          'Neer impingement sign',
          'Hawkins-Kennedy test',
          'Drop arm test (rotator cuff tear)',
          'Speed test (biceps tendon)',
          'Cross-arm adduction (AC joint)',
          'Sulcus sign (shoulder instability)',
        ]},
        { name: 'Elbow and wrist exam', subs: [
          'Lateral epicondyle tenderness (tennis elbow)',
          'Medial epicondyle tenderness (golfer\'s elbow)',
          'Phalen test (carpal tunnel)',
          'Tinel sign at wrist (carpal tunnel)',
          'Finkelstein test (De Quervain\'s)',
        ]},
        { name: 'Hip exam', subs: [
          'FABER test (flexion, abduction, external rotation)',
          'FADIR test (flexion, adduction, internal rotation)',
          'Log roll test',
          'Thomas test (hip flexor contracture)',
          'Trendelenburg sign',
          'Leg length discrepancy',
        ]},
        { name: 'Knee exam', subs: [
          'Effusion (bulge sign, ballotment)',
          'Medial / lateral joint line tenderness',
          'Valgus stress test (MCL)',
          'Varus stress test (LCL)',
          'Anterior drawer test',
          'Lachman test (ACL)',
          'McMurray test (meniscus)',
          'Patellar grind / apprehension',
        ]},
        { name: 'Ankle and foot exam', subs: [
          'Anterior drawer test',
          'Talar tilt test',
          'Thompson test (Achilles)',
          'Point tenderness (malleoli, 5th MT base)',
          'Ottawa rules application',
        ]},
        { name: 'Sacroiliac joint', subs: [
          'FABER test (SI component)',
          'Distraction test',
          'Compression test',
          'Gaenslen test',
        ]},
        { name: 'Joint inspection (swelling, warmth, erythema)' },
      ]
    },
    {
      system: 'Neurological', icon: '🧠',
      maneuvers: [
        { name: 'Mental status', subs: [
          'Orientation (person, place, time, situation)',
          'Attention (digit span forward and backward)',
          'Attention (serial 7s or months backward)',
          'Short-term memory (3-word recall at 5 min)',
          'Long-term memory',
          'Language — naming (watch, pen)',
          'Language — repetition',
          'Language — fluency and comprehension',
          'Visuospatial (clock draw)',
          'Executive function (Luria sequences, similarities)',
          'Abstract reasoning',
          'MMSE (score /30)',
          'MoCA (score /30)',
        ]},
        { name: 'Cranial nerves', subs: [
          'CN I — Olfaction (each nostril)',
          'CN II — Visual acuity (each eye)',
          'CN II — Visual fields (confrontation)',
          'CN II/III — Direct pupillary light reflex',
          'CN II/III — Consensual pupillary reflex',
          'CN II/III — Afferent pupillary defect (swinging flashlight)',
          'CN III/IV/VI — Extraocular movements (H-pattern)',
          'CN III/IV/VI — Nystagmus',
          'CN V — Facial light touch (V1, V2, V3 dermatomes)',
          'CN V — Corneal reflex',
          'CN V — Jaw strength (pterygoids)',
          'CN VII — Forehead wrinkling (upper)',
          'CN VII — Eye closure strength',
          'CN VII — Smile and nasolabial fold symmetry',
          'CN VIII — Hearing screen',
          'CN VIII — Weber test',
          'CN VIII — Rinne test',
          'CN IX/X — Palate elevation ("aah")',
          'CN IX/X — Gag reflex',
          'CN XI — SCM strength (head turn)',
          'CN XI — Trapezius strength (shoulder shrug)',
          'CN XII — Tongue protrusion (midline)',
          'CN XII — Tongue strength',
        ]},
        { name: 'Motor — upper extremities', subs: [
          'Pronator drift (arms outstretched, eyes closed)',
          'Shoulder abduction (C5, deltoid)',
          'Elbow flexion (C5–C6, biceps)',
          'Elbow extension (C7, triceps)',
          'Wrist extension (C6–C7)',
          'Wrist flexion',
          'Grip strength (C8)',
          'Finger abduction (T1, interossei)',
          'Thumb opposition',
        ]},
        { name: 'Motor — lower extremities', subs: [
          'Hip flexion (L2–L3, iliopsoas)',
          'Hip extension (L4–S1, gluteus max)',
          'Hip abduction (L4–S1, gluteus med)',
          'Knee extension (L3–L4, quadriceps)',
          'Knee flexion (L5–S1, hamstrings)',
          'Ankle dorsiflexion (L4–L5)',
          'Great toe extension (L5, EHL)',
          'Ankle plantarflexion (S1–S2)',
          'Ankle eversion (L5–S1, peroneals)',
        ]},
        { name: 'Muscle tone', subs: [
          'Resting tone (upper extremities)',
          'Resting tone (lower extremities)',
          'Spasticity (velocity-dependent resistance)',
          'Rigidity (lead-pipe or cogwheel)',
          'Hypotonia / flaccidity',
        ]},
        { name: 'Deep tendon reflexes', subs: [
          'Biceps (C5–C6)',
          'Brachioradialis (C6)',
          'Triceps (C7)',
          'Patellar (L3–L4)',
          'Achilles (S1–S2)',
          'Grading (0–4+ scale)',
          'Asymmetry (right vs left)',
          'Reinforcement (Jendrassik maneuver)',
        ]},
        { name: 'Pathological reflexes', subs: [
          'Babinski sign (plantar response)',
          'Hoffmann sign (finger flexor reflex)',
          'Clonus — ankle',
          'Clonus — wrist',
          'Grasp reflex (if frontal lobe suspected)',
          'Snout / palmomental reflex',
        ]},
        { name: 'Sensation', subs: [
          'Light touch (cotton wisp)',
          'Pinprick (sharp / dull discrimination)',
          'Vibration sense (128 Hz tuning fork — toes, medial malleolus)',
          'Proprioception / joint position sense (toes, fingers)',
          'Temperature sensation (cold vs warm)',
          'Two-point discrimination (fingertips)',
          'Graphesthesia (number written on palm)',
          'Stereognosis (object identification by touch)',
          'Sensory extinction (bilateral simultaneous stimulation)',
        ]},
        { name: 'Coordination', subs: [
          'Finger-nose-finger test',
          'Heel-knee-shin test',
          'Rapid alternating movements — hands (diadochokinesia)',
          'Rapid alternating movements — feet',
          'Rebound test',
          'Finger-tapping speed',
        ]},
        { name: 'Gait', subs: [
          'Standard walking (casual gait)',
          'Heel walking (L4–L5)',
          'Toe walking (S1)',
          'Tandem gait (heel-to-toe)',
          'Gait initiation and stop',
          'Turning (en bloc vs normal)',
          'Gait pattern: spastic, steppage, waddling, ataxic, Parkinsonian',
        ]},
        { name: 'Tremor assessment', subs: [
          'Resting tremor (arms relaxed in lap) — Parkinson\'s',
          'Postural tremor (arms outstretched) — essential, physiologic',
          'Intention tremor (finger-nose) — cerebellar',
          'Action tremor (cup holding)',
          'Frequency (slow ~4–6 Hz vs fast ~8–12 Hz)',
          'Distribution (hands, head, voice)',
        ]},
        { name: 'Cerebellar function', subs: [
          'Finger-nose-finger (past-pointing)',
          'Heel-shin test',
          'Rapid alternating movements (diadochokinesia)',
          'Rebound test',
          'Tandem gait',
          'Nystagmus (gaze-evoked)',
          'Dysarthria assessment',
        ]},
        { name: 'Meningeal signs', subs: [
          'Nuchal rigidity (chin-to-chest)',
          'Kernig sign',
          'Brudzinski sign',
          'Jolt accentuation of headache',
        ]},
        { name: 'Romberg test (proprioception vs cerebellar)' },
      ]
    },
    {
      system: 'Extremities & Vascular', icon: '🦵',
      maneuvers: [
        { name: 'Peripheral edema', subs: [
          'Location (ankle, pretibial, sacral)',
          'Pitting degree (1+ to 4+)',
          'Symmetry (bilateral vs unilateral)',
          'Distribution height',
        ]},
        { name: 'DVT assessment', subs: [
          'Calf circumference (bilateral measurement)',
          'Calf tenderness on palpation',
          'Homan sign (unreliable — note limitations)',
          'Warmth, erythema, cord palpation',
          'Wells DVT score components',
        ]},
        { name: 'Arterial insufficiency signs', subs: [
          'Skin pallor with elevation',
          'Dependent rubor',
          'Hair loss / skin atrophy',
          'Capillary refill time',
          'Temperature differential (limb vs limb)',
        ]},
        { name: 'Lymphedema assessment', subs: [
          'Non-pitting vs pitting edema',
          'Stemmer sign',
          'Skin texture changes',
        ]},
        { name: 'Clubbing assessment', subs: [
          'Schamroth window test',
          'Profile angle (>180° abnormal)',
          'Drumstick appearance',
        ]},
        { name: 'Peripheral skin changes', subs: [
          'Stasis dermatitis',
          'Venous ulcers (medial malleolus)',
          'Arterial ulcers (toes, pressure points)',
          'Lipodermatosclerosis',
        ]},
        { name: 'Splinter hemorrhages / nailfold changes' },
        { name: 'Raynaud phenomenon assessment' },
      ]
    },
    {
      system: 'Psychiatric', icon: '💬',
      maneuvers: [
        { name: 'Appearance and psychomotor activity', subs: [
          'Dress and grooming',
          'Psychomotor agitation or retardation',
          'Eye contact',
          'Posture and body language',
        ]},
        { name: 'Speech', subs: [
          'Rate (fast / slow / normal)',
          'Volume',
          'Tone and rhythm',
          'Articulation',
          'Pressured speech',
          'Poverty of speech (alogia)',
        ]},
        { name: 'Mood (subjective)', subs: [
          'Patient-reported mood ("How do you feel?")',
          'Duration of current mood state',
        ]},
        { name: 'Affect (objective)', subs: [
          'Range (full, restricted, blunted, flat)',
          'Quality (euthymic, dysphoric, euphoric, anxious)',
          'Congruence with thought content',
          'Lability',
        ]},
        { name: 'Thought process', subs: [
          'Linear vs circumstantial vs tangential',
          'Flight of ideas',
          'Loosening of associations',
          'Thought blocking',
          'Perseveration',
          'Clang associations',
        ]},
        { name: 'Thought content', subs: [
          'Suicidal ideation (passive vs active)',
          'Homicidal ideation',
          'Delusions (type: paranoid, grandiose, somatic, referential)',
          'Obsessions',
          'Phobias',
          'Preoccupations',
        ]},
        { name: 'Perceptual disturbances', subs: [
          'Auditory hallucinations',
          'Visual hallucinations',
          'Tactile hallucinations',
          'Illusions',
          'Depersonalization / derealization',
        ]},
        { name: 'Suicidality assessment (if SI present)', subs: [
          'Ideation frequency and intensity',
          'Plan (specific vs vague)',
          'Intent and motivation',
          'Means access',
          'Prior attempts',
          'Protective factors',
          'Columbia-Suicide Severity Rating Scale (C-SSRS)',
        ]},
        { name: 'Substance use screening', subs: [
          'CAGE questionnaire (alcohol)',
          'AUDIT-C',
          'Current substance use (type, frequency, quantity)',
          'Last use',
          'Withdrawal symptoms',
        ]},
        { name: 'Insight and judgment', subs: [
          'Awareness of illness',
          'Understanding of need for treatment',
          'Judgment (hypothetical scenarios)',
          'Capacity to make decisions',
        ]},
        { name: 'Cognitive function screen', subs: [
          'MMSE (score /30)',
          'MoCA (score /30)',
          'Clock draw',
          'Serial 7s',
          'Digit span',
        ]},
        { name: 'Impulse control assessment' },
      ]
    },
  ];

  // ── Comprehensive findings database ────────────────────────────
  var FINDINGS = {
    // General
    'General appearance and distress': 'Patient appears stated age, alert, in mild-to-moderate distress. Cooperative with exam.',
    'Level of consciousness': 'Alert and responsive. Follows commands.',
    'Orientation': 'Oriented to person, place, time, and situation.',
    'Person': 'States name correctly.',
    'Place': 'States correct hospital/location.',
    'Time': 'Correctly states date and year.',
    'Situation / event': 'Understands reason for presentation.',
    'Body habitus and nutritional status': 'BMI as documented. No cachexia or gross malnutrition.',
    'Affect and behavior on exam': 'Appropriate affect. Cooperative and engaged. No agitation.',
    'Pain behavior (guarding, grimacing)': 'No facial grimacing at rest. Mild guarding on deep palpation.',
    'Gait and station': 'Ambulatory. Steady gait without assistive device.',

    // Vital Signs
    'Blood pressure (bilateral arms)': 'See vitals tab. No significant interarm differential (< 10 mmHg).',
    'Heart rate and rhythm': 'See vitals tab. Radial pulse regular.',
    'Respiratory rate': 'See vitals tab.',
    'Temperature and route': 'See vitals tab.',
    'Oxygen saturation (SpO₂)': 'See vitals tab.',
    'Weight and BMI': 'See vitals tab.',
    'Pain scale (0–10)': 'Patient rates pain 7/10 at rest, 9/10 with movement.',
    'Orthostatic vital signs': 'Not performed in this encounter.',
    'Supine blood pressure and HR': 'See vitals tab (lying value).',
    'Sitting blood pressure and HR': 'No significant change from supine.',
    'Standing blood pressure and HR (at 1 and 3 min)': 'Orthostatic drop not present at this encounter.',
    'Glasgow Coma Scale (GCS)': 'GCS 15 (E4V5M6).',
    'Eye opening (E1–E4)': 'E4 — spontaneous.',
    'Verbal response (V1–V5)': 'V5 — oriented.',
    'Motor response (M1–M6)': 'M6 — obeys commands.',

    // Skin
    'Color, temperature, moisture': 'Warm, dry, intact. Normal color.',
    'Turgor and capillary refill': 'Skin turgor normal. Capillary refill < 2 seconds.',
    'Jaundice / pallor / cyanosis': 'No icterus. Conjunctivae non-icteric. No cyanosis.',
    'Diaphoresis': 'No diaphoresis at this time.',
    'Rash or lesion inspection': 'No rash or new skin lesions noted.',
    'Distribution and pattern': 'No rash identified.',
    'Morphology (macule, papule, vesicle, pustule, plaque)': 'No skin morphological abnormalities.',
    'Border and color': 'N/A — no lesions identified.',
    'Blanching vs non-blanching': 'N/A — no lesions identified.',
    'Petechiae / purpura / ecchymosis': 'No petechiae, purpura, or unexplained ecchymoses.',
    'Spider angiomata / palmar erythema': 'No spider angiomata. No palmar erythema.',
    'Telangiectasias': 'No telangiectasias noted.',
    'Wound or ulcer inspection': 'No open wounds or ulcerations.',

    // Head & Eyes
    'Head inspection (normocephalic, trauma)': 'Normocephalic, atraumatic. No palpable masses or scalp tenderness.',
    'Facial symmetry': 'Face symmetric at rest and with movement. No ptosis.',
    'Periorbital edema / proptosis': 'No periorbital edema. No proptosis or enophthalmos.',
    'Conjunctiva and sclera': 'Conjunctivae pink and moist. Sclerae white.',
    'Pupils': 'Pupils equal, round, reactive. No APD.',
    'Size (mm) and symmetry': 'Pupils 3 mm bilaterally, equal.',
    'Direct light reflex': 'Brisk bilaterally.',
    'Consensual light reflex': 'Present bilaterally.',
    'Accommodation reflex': 'Intact — pupils constrict on near gaze.',
    'Afferent pupillary defect (swinging flashlight)': 'No relative afferent pupillary defect.',
    'Extraocular movements (CN III/IV/VI)': 'Full range of movement. No diplopia reported.',
    'Horizontal gaze (left and right)': 'Intact to both sides.',
    'Vertical gaze (up and down)': 'Intact.',
    'Oblique movements': 'Intact.',
    'Nystagmus (horizontal, vertical, rotary)': 'No nystagmus at primary or eccentric gaze.',
    'Smooth pursuit vs saccades': 'Smooth pursuits intact. Saccades normal speed and accuracy.',
    'Visual acuity (confrontation)': 'Grossly intact to confrontation.',
    'Visual fields (formal confrontation)': 'Full to confrontation in all 4 quadrants bilaterally.',
    'Fundoscopic exam': 'Difficult to assess without dilation.',
    'Optic disc (margins, cup-to-disc ratio)': 'Disc margins sharp. Cup-to-disc ratio 0.3.',
    'Retinal vessels (AV nicking, hemorrhages)': 'No AV nicking. No hemorrhages or exudates.',
    'Macula': 'Macula flat and homogeneous.',
    'Papilledema assessment': 'No papilledema.',

    // ENT
    'Ear canal and tympanic membranes': 'TMs intact bilaterally, pearly gray.',
    'External auditory canal inspection': 'Clear bilaterally. No cerumen impaction.',
    'TM color and light reflex': 'Pearly gray with visible light reflex.',
    'TM mobility (if pneumatic otoscope)': 'Not assessed.',
    'Effusion or perforation': 'No effusion or perforation identified.',
    'Hearing screen': 'Gross hearing intact bilaterally.',
    'Whisper test (informal)': 'Responds to whispered words at 2 feet bilaterally.',
    'Weber test (512 Hz tuning fork)': 'Weber midline — no lateralization.',
    'Rinne test (512 Hz tuning fork)': 'AC > BC bilaterally (normal).',
    'Sinus tenderness': 'No frontal or maxillary sinus tenderness.',
    'Frontal sinus (percussion)': 'Non-tender.',
    'Maxillary sinus (percussion)': 'Non-tender.',
    'Nasal mucosa and septum': 'Mucosa pink and moist. Septum midline. No polyps.',
    'Mucosal color and moisture': 'Normal pink, moist mucosa.',
    'Septal deviation or perforation': 'Septum midline. No perforation.',
    'Turbinate hypertrophy': 'Turbinates not hypertrophied.',
    'Polyps': 'No polyps visualized.',
    'Post-nasal drip': 'No visible post-nasal drip on posterior pharynx.',
    'Oropharynx': 'Clear. Uvula midline.',
    'Tonsil size and exudate': 'Tonsils 1+, symmetric, without exudate.',
    'Posterior pharynx erythema / cobblestoning': 'No posterior pharyngeal erythema or cobblestoning.',
    'Uvula position (midline)': 'Uvula midline. No deviation.',
    'Palate elevation (CN IX/X)': 'Palate rises symmetrically with phonation.',
    'Tongue and floor of mouth': 'Tongue midline. Floor of mouth soft, non-tender. No masses.',
    'Dentition and gums': 'Dentition intact. Gums non-tender. No lesions.',
    'Salivary glands (parotid, submandibular)': 'Parotid and submandibular glands non-tender, non-enlarged.',
    'Voice quality / hoarseness': 'Voice clear and normal volume. No hoarseness.',

    // Neck
    'Jugular venous distension (JVD)': 'JVP not elevated at 45°.',
    'JVP estimation at 45°': 'Estimated JVP < 4 cm above sternal angle — within normal limits.',
    'Hepatojugular reflux': 'HJR absent (no > 3 cm rise with 10 sec abdominal pressure).',
    'Waveform character (a, c, v waves)': 'Normal waveform. No prominent a or v waves.',
    'Lymph node palpation': 'No lymphadenopathy.',
    'Anterior cervical chain': 'No palpable nodes.',
    'Posterior cervical chain': 'No palpable nodes.',
    'Submandibular / submental': 'No palpable nodes.',
    'Supraclavicular (Virchow\'s node)': 'No supraclavicular lymphadenopathy.',
    'Axillary (if clinically relevant)': 'Not assessed.',
    'Thyroid palpation': 'Thyroid midline, non-tender, no nodules.',
    'Size and symmetry': 'Normal size. Symmetric lobes.',
    'Nodules (size, mobility, texture)': 'No palpable nodules.',
    'Tenderness': 'Thyroid non-tender.',
    'Bruit on auscultation': 'No thyroid bruit.',
    'Tracheal position': 'Trachea midline.',
    'Carotid assessment': 'Normal carotid upstrokes. No bruits.',
    'Carotid upstroke and volume': 'Normal upstroke, full volume bilaterally.',
    'Carotid bruits (auscultation)': 'No carotid bruits bilaterally.',
    'Neck range of motion': 'Full range in all planes without pain.',
    'Flexion / extension': 'Full.',
    'Lateral bending': 'Full bilaterally.',
    'Rotation': 'Full bilaterally.',
    'Meningismus': 'No meningismus.',
    'Nuchal rigidity (chin-to-chest)': 'Neck supple. Full flexion to chest without resistance.',
    'Kernig sign': 'Negative bilaterally.',
    'Brudzinski sign': 'Negative.',
    'Jolt accentuation (for meningitis)': 'No jolt accentuation of headache.',
    'Parotid / submandibular gland palpation': 'Non-tender. No enlargement.',

    // Cardiovascular
    'Precordial inspection and palpation': 'No heave or lift. PMI at 5th ICS, MCL.',
    'Visible heave or lift': 'No right ventricular heave. No parasternal lift.',
    'PMI location (ICS, MCL)': 'PMI at 5th intercostal space, midclavicular line.',
    'PMI character (sustained vs tapping)': 'Non-sustained, normal amplitude.',
    'Thrills on palpation': 'No palpable thrill.',
    'Auscultation — heart sounds': 'S1/S2 normal. Regular rate and rhythm.',
    'S1 (quality, splitting)': 'S1 normal intensity. No splitting.',
    'S2 (quality, physiologic splitting, fixed splitting)': 'S2 normal. Physiologic splitting present. No fixed or paradoxical split.',
    'Rate and rhythm': 'Regular rate and rhythm.',
    'Aortic area (RUSB)': 'No murmur at RUSB.',
    'Pulmonic area (LUSB)': 'No murmur at LUSB.',
    'Tricuspid area (LLSB)': 'No murmur at LLSB.',
    'Mitral area (apex)': 'No murmur at apex.',
    'Murmur assessment': 'No murmur identified.',
    'Grade (I–VI)': 'N/A — no murmur.',
    'Timing (systolic, diastolic, continuous)': 'N/A — no murmur.',
    'Quality (harsh, blowing, rumbling)': 'N/A — no murmur.',
    'Location and radiation': 'N/A — no murmur.',
    'Dynamic maneuver: Valsalva (↑ HOCM, ↓ AS/MR)': 'No change in murmur character with Valsalva.',
    'Dynamic maneuver: Squatting (↓ HOCM, ↑ AS/MR)': 'No murmur to assess.',
    'Dynamic maneuver: Handgrip (↑ MR/AR, ↓ HOCM)': 'No murmur to assess.',
    'Dynamic maneuver: Expiration (↑ left-sided murmurs)': 'No murmur to assess.',
    'S3 gallop (early diastole / CHF)': 'No S3 gallop heard at apex.',
    'S4 gallop (late diastole / stiff ventricle)': 'No S4 gallop heard at apex.',
    'Pericardial friction rub': 'No pericardial rub.',
    'Peripheral pulses': 'Peripheral pulses 2+ bilaterally.',
    'Radial (rate, rhythm, volume)': 'Radial pulses 2+, regular, full volume bilaterally.',
    'Brachial': 'Brachial pulses 2+ bilaterally.',
    'Femoral (and femoral bruits)': 'Femoral pulses 2+ bilaterally. No femoral bruits.',
    'Popliteal': 'Popliteal pulses 1+ bilaterally.',
    'Dorsalis pedis': 'DP pulses 2+ bilaterally.',
    'Posterior tibial': 'PT pulses 2+ bilaterally.',
    'Pulsus paradoxus (>10 mmHg drop with inspiration)': 'Pulsus paradoxus not measured at this encounter.',
    'Ankle-brachial index (ABI)': 'Not performed.',
    'Abdominal aortic pulsation and aortic width': 'No pulsatile abdominal mass. Aorta not expanded to palpation.',

    // Pulmonary
    'Inspection': 'Breathing unlabored. No accessory muscle use.',
    'Respiratory rate and regularity': 'See vitals. Regular rhythm.',
    'Depth and effort': 'Normal depth. No increased effort.',
    'Accessory muscle use (SCM, scalene)': 'No accessory muscle use.',
    'Nasal flaring': 'No nasal flaring.',
    'Intercostal / supraclavicular retractions': 'No retractions.',
    'Paradoxical breathing': 'No paradoxical chest movement.',
    'Barrel chest / AP diameter': 'Normal AP diameter. No barrel chest.',
    'Kyphoscoliosis': 'No kyphoscoliosis.',
    'Percussion': 'Resonant throughout. No dullness.',
    'Resonance (anterior fields)': 'Resonant bilaterally.',
    'Resonance (posterior fields)': 'Resonant bilaterally.',
    'Dullness (consolidation, effusion)': 'No dullness on percussion.',
    'Hyperresonance (pneumothorax, emphysema)': 'No hyperresonance.',
    'Diaphragmatic excursion': 'Not formally measured.',
    'Auscultation — breath sounds': 'Clear bilaterally. Good air entry.',
    'Anterior: upper lobes': 'Clear.',
    'Anterior: middle lobe / lingula': 'Clear.',
    'Posterior: lower lobes': 'Clear.',
    'Lateral fields': 'Clear.',
    'Symmetry (left vs right)': 'Symmetric air entry bilaterally.',
    'Auscultation — adventitious sounds': 'No adventitious sounds.',
    'Crackles / rales (timing: early, late, pan-inspiratory)': 'No crackles.',
    'Wheezes (diffuse vs focal, inspiratory vs expiratory)': 'No wheezing.',
    'Rhonchi': 'No rhonchi.',
    'Stridor': 'No stridor.',
    'Pleural friction rub': 'No pleural friction rub.',
    'Tactile fremitus (increased / decreased)': 'Fremitus symmetric and normal bilaterally.',
    'Egophony (E-to-A change over consolidation)': 'No egophony.',
    'Whispered pectoriloquy': 'No whispered pectoriloquy.',
    'Central vs peripheral cyanosis': 'No central cyanosis. No peripheral cyanosis.',
    'Clubbing (digital)': 'No digital clubbing.',
    'Peak flow measurement (if obstructive suspected)': 'Not performed.',

    // Abdomen defaults
    'Costovertebral angle (CVA) tenderness': 'No CVA tenderness bilaterally.',
    'Inguinal region': 'No inguinal lymphadenopathy. No hernia on exam.',
    'Inguinal lymph nodes': 'No inguinal lymphadenopathy.',
    'Inguinal hernia (direct vs indirect)': 'No inguinal hernia appreciated.',
    'Femoral hernia': 'No femoral hernia.',
    'Rectal exam (if indicated)': 'Deferred at this encounter.',
    'Sphincter tone': 'Normal tone.',
    'Prostate (size, texture, tenderness)': 'Prostate smooth, non-tender, approximately 20–25g.',
    'Stool color / occult blood': 'Brown stool. Guaiac negative.',
    'Masses': 'No masses on rectal exam.',
    'Pelvic exam (if indicated)': 'Deferred at this encounter.',
    'Murphy sign (RUQ)': 'Murphy sign negative.',
    'Rovsing sign': 'Rovsing sign negative.',
    'Carnett sign (abdominal wall vs visceral pain)': 'Carnett sign negative — pain does not increase with abdominal tensing.',
    'Iliopsoas stretch test': 'Psoas sign negative.',
    'McBurney point tenderness': 'No McBurney point tenderness.',
    'Psoas sign': 'Negative.',
    'Obturator sign': 'Negative.',
    'Shifting dullness': 'No shifting dullness.',
    'Fluid wave': 'Fluid wave absent.',
    'Puddle sign': 'Not assessed.',
    'Courvoisier sign (palpable gallbladder)': 'No palpable gallbladder.',
    'RUQ percussion tenderness': 'No RUQ tenderness on percussion.',

    // MSK defaults
    'General inspection': 'No gross deformity or atrophy. Normal posture.',
    'Posture and alignment': 'Upright posture. Spine aligned.',
    'Muscle bulk and atrophy': 'Normal bulk. No focal atrophy.',
    'Joint deformity (valgus, varus, contracture)': 'No joint deformity.',
    'Gait pattern': 'Normal gait pattern.',
    'Neer impingement sign': 'Negative.',
    'Hawkins-Kennedy test': 'Negative.',
    'Drop arm test (rotator cuff tear)': 'Negative.',
    'Speed test (biceps tendon)': 'Negative.',
    'Cross-arm adduction (AC joint)': 'Negative.',
    'Sulcus sign (shoulder instability)': 'Negative.',
    'Lateral epicondyle tenderness (tennis elbow)': 'No lateral epicondyle tenderness.',
    'Medial epicondyle tenderness (golfer\'s elbow)': 'No medial epicondyle tenderness.',
    'Phalen test (carpal tunnel)': 'Negative at 60 seconds.',
    'Tinel sign at wrist (carpal tunnel)': 'Negative.',
    'Finkelstein test (De Quervain\'s)': 'Negative.',
    'FABER test (flexion, abduction, external rotation)': 'Negative bilaterally.',
    'FADIR test (flexion, adduction, internal rotation)': 'Negative bilaterally.',
    'Log roll test': 'Negative.',
    'Thomas test (hip flexor contracture)': 'Negative.',
    'Trendelenburg sign': 'Negative bilaterally.',
    'Leg length discrepancy': 'Legs equal length.',
    'Effusion (bulge sign, ballotment)': 'No effusion.',
    'Medial / lateral joint line tenderness': 'No joint line tenderness.',
    'Valgus stress test (MCL)': 'Stable to valgus stress.',
    'Varus stress test (LCL)': 'Stable to varus stress.',
    'Anterior drawer test': 'Negative.',
    'Lachman test (ACL)': 'Firm endpoint bilaterally.',
    'McMurray test (meniscus)': 'Negative.',
    'Patellar grind / apprehension': 'Negative.',
    'Talar tilt test': 'Stable.',
    'Thompson test (Achilles)': 'Negative — plantarflexion present.',
    'Point tenderness (malleoli, 5th MT base)': 'No bony point tenderness.',
    'Ottawa rules application': 'Ottawa ankle rules negative — no radiograph indicated.',
    'FABER test (SI component)': 'No SI joint reproduction.',
    'Distraction test': 'Negative.',
    'Compression test': 'Negative.',
    'Gaenslen test': 'Negative.',
    'Joint inspection (swelling, warmth, erythema)': 'No joint swelling, warmth, or erythema.',
    'Schober test (lumbar flexibility)': 'Schober test 5 cm expansion — normal.',

    // Neuro defaults
    'Mental status': 'Alert, oriented x4. Normal cognition on brief exam.',
    'Cranial nerves': 'CN II–XII grossly intact.',
    'CN I — Olfaction (each nostril)': 'Olfaction not formally tested.',
    'CN II — Visual acuity (each eye)': 'Grossly intact to confrontation.',
    'CN II — Visual fields (confrontation)': 'Full fields bilaterally.',
    'CN II/III — Direct pupillary light reflex': 'Brisk bilaterally.',
    'CN II/III — Consensual pupillary reflex': 'Present bilaterally.',
    'CN II/III — Afferent pupillary defect (swinging flashlight)': 'No RAPD.',
    'CN III/IV/VI — Extraocular movements (H-pattern)': 'Full in all directions.',
    'CN III/IV/VI — Nystagmus': 'No nystagmus.',
    'CN V — Facial light touch (V1, V2, V3 dermatomes)': 'Light touch symmetric in V1–V3 bilaterally.',
    'CN V — Corneal reflex': 'Intact bilaterally.',
    'CN V — Jaw strength (pterygoids)': 'Full jaw strength. No deviation.',
    'CN VII — Forehead wrinkling (upper)': 'Symmetric — upper CN VII intact.',
    'CN VII — Eye closure strength': 'Strong bilaterally.',
    'CN VII — Smile and nasolabial fold symmetry': 'Symmetric smile. Nasolabial folds equal.',
    'CN VIII — Hearing screen': 'Gross hearing intact bilaterally.',
    'CN VIII — Weber test': 'Midline.',
    'CN VIII — Rinne test': 'AC > BC bilaterally.',
    'CN IX/X — Palate elevation ("aah")': 'Symmetric palate rise. Uvula midline.',
    'CN IX/X — Gag reflex': 'Gag intact bilaterally.',
    'CN XI — SCM strength (head turn)': '5/5 bilaterally.',
    'CN XI — Trapezius strength (shoulder shrug)': '5/5 bilaterally.',
    'CN XII — Tongue protrusion (midline)': 'Tongue protrudes midline.',
    'CN XII — Tongue strength': 'Tongue pushes against cheek with full strength bilaterally.',
    'Pronator drift (arms outstretched, eyes closed)': 'No pronator drift.',
    'Shoulder abduction (C5, deltoid)': '5/5 bilaterally.',
    'Elbow flexion (C5–C6, biceps)': '5/5 bilaterally.',
    'Elbow extension (C7, triceps)': '5/5 bilaterally.',
    'Wrist extension (C6–C7)': '5/5 bilaterally.',
    'Wrist flexion': '5/5 bilaterally.',
    'Grip strength (C8)': '5/5 bilaterally.',
    'Finger abduction (T1, interossei)': '5/5 bilaterally.',
    'Thumb opposition': '5/5 bilaterally.',
    'Hip flexion (L2–L3, iliopsoas)': '5/5 bilaterally.',
    'Hip extension (L4–S1, gluteus max)': '5/5 bilaterally.',
    'Hip abduction (L4–S1, gluteus med)': '5/5 bilaterally.',
    'Knee extension (L3–L4, quadriceps)': '5/5 bilaterally.',
    'Knee flexion (L5–S1, hamstrings)': '5/5 bilaterally.',
    'Ankle dorsiflexion (L4–L5)': '5/5 bilaterally.',
    'Great toe extension (L5, EHL)': '5/5 bilaterally.',
    'Ankle plantarflexion (S1–S2)': '5/5 bilaterally.',
    'Ankle eversion (L5–S1, peroneals)': '5/5 bilaterally.',
    'Resting tone (upper extremities)': 'Normal tone. No rigidity or spasticity.',
    'Resting tone (lower extremities)': 'Normal tone.',
    'Spasticity (velocity-dependent resistance)': 'No spasticity.',
    'Rigidity (lead-pipe or cogwheel)': 'No rigidity.',
    'Hypotonia / flaccidity': 'No hypotonia.',
    'Biceps (C5–C6)': '2+ bilaterally.',
    'Brachioradialis (C6)': '2+ bilaterally.',
    'Triceps (C7)': '2+ bilaterally.',
    'Patellar (L3–L4)': '2+ bilaterally.',
    'Achilles (S1–S2)': '2+ bilaterally.',
    'Grading (0–4+ scale)': '2+ throughout — symmetric.',
    'Asymmetry (right vs left)': 'Symmetric bilaterally.',
    'Reinforcement (Jendrassik maneuver)': 'Reflexes normal without reinforcement.',
    'Babinski sign (plantar response)': 'Plantar response flexor bilaterally.',
    'Hoffmann sign (finger flexor reflex)': 'Hoffmann sign absent bilaterally.',
    'Clonus — ankle': 'No ankle clonus.',
    'Clonus — wrist': 'No wrist clonus.',
    'Grasp reflex (if frontal lobe suspected)': 'No grasp reflex.',
    'Snout / palmomental reflex': 'Snout and palmomental reflexes absent.',
    'Light touch (cotton wisp)': 'Light touch intact symmetrically in all 4 limbs.',
    'Pinprick (sharp / dull discrimination)': 'Sharp/dull discrimination intact symmetrically.',
    'Vibration sense (128 Hz tuning fork — toes, medial malleolus)': 'Vibration intact at toes bilaterally.',
    'Proprioception / joint position sense (toes, fingers)': 'Joint position sense intact at toes and fingers.',
    'Temperature sensation (cold vs warm)': 'Temperature sensation intact bilaterally.',
    'Two-point discrimination (fingertips)': 'Two-point discrimination < 5 mm at fingertips.',
    'Graphesthesia (number written on palm)': 'Graphesthesia intact bilaterally.',
    'Stereognosis (object identification by touch)': 'Stereognosis intact.',
    'Sensory extinction (bilateral simultaneous stimulation)': 'No extinction to bilateral simultaneous stimulation.',
    'Finger-nose-finger test': 'No dysmetria or past-pointing.',
    'Heel-knee-shin test': 'Heel-shin smooth bilaterally.',
    'Rapid alternating movements — hands (diadochokinesia)': 'Smooth and regular bilaterally.',
    'Rapid alternating movements — feet': 'Smooth bilaterally.',
    'Rebound test': 'No rebound.',
    'Finger-tapping speed': 'Normal speed and rhythm bilaterally.',
    'Standard walking (casual gait)': 'Normal gait. Normal stride length and arm swing.',
    'Heel walking (L4–L5)': 'Intact bilaterally.',
    'Toe walking (S1)': 'Intact bilaterally.',
    'Tandem gait (heel-to-toe)': 'No ataxia on tandem gait.',
    'Gait initiation and stop': 'Normal initiation. No festination or freezing.',
    'Turning (en bloc vs normal)': 'Turns normally (multi-step, not en bloc).',
    'Gait pattern: spastic, steppage, waddling, ataxic, Parkinsonian': 'Normal gait pattern. No spasticity, steppage, or ataxia.',
    'Resting tremor (arms relaxed in lap) — Parkinson\'s': 'No resting tremor.',
    'Postural tremor (arms outstretched) — essential, physiologic': 'No postural tremor.',
    'Intention tremor (finger-nose) — cerebellar': 'No intention tremor.',
    'Action tremor (cup holding)': 'No action tremor.',
    'Frequency (slow ~4–6 Hz vs fast ~8–12 Hz)': 'No tremor to characterize.',
    'Distribution (hands, head, voice)': 'No tremor noted.',
    'Finger-nose-finger (past-pointing)': 'No past-pointing.',
    'Heel-shin test': 'Smooth bilaterally.',
    'Rapid alternating movements (diadochokinesia)': 'Smooth and regular.',
    'Tandem gait': 'No ataxia.',
    'Nystagmus (gaze-evoked)': 'No gaze-evoked nystagmus.',
    'Dysarthria assessment': 'Speech clear. No dysarthria.',
    'Meningeal signs': 'No meningismus.',
    'Romberg test (proprioception vs cerebellar)': 'Romberg negative — stable with eyes closed.',

    // Extremities
    'Peripheral edema': 'No peripheral edema.',
    'Location (ankle, pretibial, sacral)': 'No edema at any location.',
    'Pitting degree (1+ to 4+)': 'No pitting edema.',
    'Symmetry (bilateral vs unilateral)': 'Symmetric lower extremities.',
    'Distribution height': 'No edema present.',
    'DVT assessment': 'No clinical signs of DVT.',
    'Calf circumference (bilateral measurement)': 'Calf circumference symmetric (< 3 cm difference).',
    'Calf tenderness on palpation': 'Calves non-tender bilaterally.',
    'Homan sign (unreliable — note limitations)': 'Homan sign not reliable — not routinely elicited. Clinical assessment used instead.',
    'Warmth, erythema, cord palpation': 'No warmth, erythema, or palpable cord.',
    'Wells DVT score components': 'Wells DVT score calculated based on clinical features.',
    'Arterial insufficiency signs': 'No signs of peripheral arterial disease.',
    'Skin pallor with elevation': 'No pallor with leg elevation.',
    'Dependent rubor': 'No dependent rubor.',
    'Hair loss / skin atrophy': 'No hair loss or skin atrophy.',
    'Capillary refill time': 'Capillary refill < 2 seconds.',
    'Temperature differential (limb vs limb)': 'Limbs symmetric in temperature.',
    'Lymphedema assessment': 'No lymphedema.',
    'Non-pitting vs pitting edema': 'No edema to assess.',
    'Stemmer sign': 'Stemmer sign negative — skin can be pinched at base of 2nd toe.',
    'Skin texture changes': 'No skin texture changes.',
    'Clubbing assessment': 'No clubbing.',
    'Schamroth window test': 'Schamroth window present — no clubbing.',
    'Profile angle (>180° abnormal)': 'Profile angle < 180°.',
    'Drumstick appearance': 'No drumstick deformity.',
    'Peripheral skin changes': 'No stasis changes or ulcerations.',
    'Stasis dermatitis': 'No stasis dermatitis.',
    'Venous ulcers (medial malleolus)': 'No venous ulcerations.',
    'Arterial ulcers (toes, pressure points)': 'No arterial ulcerations.',
    'Lipodermatosclerosis': 'No lipodermatosclerosis.',
    'Splinter hemorrhages / nailfold changes': 'No splinter hemorrhages. Nailfold capillaries normal.',
    'Raynaud phenomenon assessment': 'No Raynaud phenomenon observed.',

    // Psych
    'Appearance and psychomotor activity': 'Appropriate dress and grooming. No psychomotor agitation or retardation.',
    'Dress and grooming': 'Appropriately dressed. Well-groomed.',
    'Psychomotor agitation or retardation': 'No psychomotor disturbance.',
    'Eye contact': 'Good eye contact maintained.',
    'Posture and body language': 'Relaxed posture. Open body language.',
    'Speech': 'Normal rate, volume, and prosody.',
    'Rate (fast / slow / normal)': 'Normal rate.',
    'Volume': 'Normal volume.',
    'Tone and rhythm': 'Normal prosody.',
    'Articulation': 'Clear articulation.',
    'Pressured speech': 'No pressured speech.',
    'Poverty of speech (alogia)': 'No alogia.',
    'Mood (subjective)': 'Patient reports mood as "okay" or per clinical context.',
    'Patient-reported mood ("How do you feel?")': 'Patient describes mood in own words.',
    'Duration of current mood state': 'Per history.',
    'Affect (objective)': 'Affect appropriate to content. Full range.',
    'Range (full, restricted, blunted, flat)': 'Full affective range.',
    'Quality (euthymic, dysphoric, euphoric, anxious)': 'Euthymic.',
    'Congruence with thought content': 'Affect congruent with stated mood.',
    'Lability': 'No affective lability.',
    'Thought process': 'Linear and goal-directed.',
    'Linear vs circumstantial vs tangential': 'Thought process linear.',
    'Flight of ideas': 'No flight of ideas.',
    'Loosening of associations': 'No loosening of associations.',
    'Thought blocking': 'No thought blocking.',
    'Perseveration': 'No perseveration.',
    'Clang associations': 'No clang associations.',
    'Thought content': 'No delusions. No SI or HI reported.',
    'Suicidal ideation (passive vs active)': 'Per screen — see suicidality assessment.',
    'Homicidal ideation': 'Denies HI.',
    'Delusions (type: paranoid, grandiose, somatic, referential)': 'No delusional thought content.',
    'Obsessions': 'No obsessive ideation reported.',
    'Phobias': 'No phobias reported.',
    'Preoccupations': 'No notable preoccupations.',
    'Perceptual disturbances': 'Denies hallucinations or illusions.',
    'Auditory hallucinations': 'Denies auditory hallucinations.',
    'Visual hallucinations': 'Denies visual hallucinations.',
    'Tactile hallucinations': 'Denies tactile hallucinations.',
    'Illusions': 'Denies illusions.',
    'Depersonalization / derealization': 'No depersonalization or derealization.',
    'Suicidality assessment (if SI present)': 'Assess only if SI present on screen.',
    'Ideation frequency and intensity': 'Per clinical assessment.',
    'Plan (specific vs vague)': 'Per clinical assessment.',
    'Intent and motivation': 'Per clinical assessment.',
    'Means access': 'Per clinical assessment.',
    'Prior attempts': 'Per history.',
    'Protective factors': 'Per clinical assessment.',
    'Columbia-Suicide Severity Rating Scale (C-SSRS)': 'C-SSRS administered if indicated.',
    'Substance use screening': 'Denies current substance use.',
    'CAGE questionnaire (alcohol)': 'CAGE score 0/4.',
    'AUDIT-C': 'AUDIT-C score within normal limits.',
    'Current substance use (type, frequency, quantity)': 'Per history.',
    'Last use': 'Per history.',
    'Withdrawal symptoms': 'No withdrawal symptoms observed.',
    'Insight and judgment': 'Insight and judgment intact.',
    'Awareness of illness': 'Patient demonstrates awareness of condition.',
    'Understanding of need for treatment': 'Patient agrees to recommended plan.',
    'Judgment (hypothetical scenarios)': 'Intact judgment.',
    'Capacity to make decisions': 'Patient appears to have decision-making capacity.',
    'Cognitive function screen': 'Grossly intact on interview.',
    'MMSE (score /30)': 'MMSE not formally administered.',
    'MoCA (score /30)': 'MoCA not formally administered.',
    'Clock draw': 'Not formally assessed.',
    'Serial 7s': 'Serial 7s intact (100, 93, 86, 79, 72).',
    'Digit span': 'Forward digit span 6. Backward digit span 4.',
    'Impulse control assessment': 'No impulsive behavior observed during interview.',
    'Orientation (person, place, time, situation)': 'Oriented x4.',
    'Attention (digit span forward and backward)': 'Forward 6, backward 4.',
    'Attention (serial 7s or months backward)': 'Serial 7s intact.',
    'Short-term memory (3-word recall at 5 min)': '3/3 words recalled at 5 minutes.',
    'Long-term memory': 'Remote memory intact for personal history.',
    'Language — naming (watch, pen)': 'Correctly names common objects.',
    'Language — repetition': '"No ifs, ands, or buts" — intact.',
    'Language — fluency and comprehension': 'Fluent speech. Follows 3-step commands.',
    'Visuospatial (clock draw)': 'Clock draw intact — correct time placement.',
    'Executive function (Luria sequences, similarities)': 'Luria sequences intact. Similarities appropriate.',
    'Abstract reasoning': 'Interprets proverbs abstractly.',
  };

  var _selected = {};
  var _revealed = {};
  var _expanded = {};    // system expanded
  var _subExpanded = {}; // maneuver sub-items expanded
  var _guided = null;

  function _save() {
    try {
      sessionStorage.setItem('rdx-exam-state', JSON.stringify({
        selected: _selected, revealed: _revealed,
        expanded: _expanded, subExpanded: _subExpanded
      }));
    } catch (e) {}
  }

  function _load() {
    try {
      var raw = JSON.parse(sessionStorage.getItem('rdx-exam-state'));
      if (raw) {
        _selected = raw.selected || {};
        _revealed = raw.revealed || {};
        _expanded = raw.expanded || {};
        _subExpanded = raw.subExpanded || {};
        return true;
      }
    } catch (e) {}
    return false;
  }

  function _getFinding(key) {
    var caseFindings = _guided && _guided.examFindings;
    if (caseFindings && caseFindings[key]) return caseFindings[key];
    return FINDINGS[key] || 'Findings not documented for this maneuver in this case.';
  }

  function _selectedCount() { return Object.keys(_selected).length; }

  window._rdxExamToggleSystem = function (label) {
    _expanded[label] = !_expanded[label];
    _save(); _rerender();
  };

  window._rdxExamToggleSub = function (maneuverName) {
    _subExpanded[maneuverName] = !_subExpanded[maneuverName];
    _save(); _rerender();
  };

  window._rdxExamToggle = function (key) {
    if (_selected[key]) {
      delete _selected[key]; delete _revealed[key];
    } else {
      _selected[key] = true;
    }
    _save();
    if (window.GuidedMode) window.GuidedMode._examDoneOverride = Object.keys(_selected);
    _rerender();       // re-render exam builder only — no GuidedMode.renderPhase() call
    _updateExamBtn();  // update just the advance button state
  };

  window._rdxExamReveal = function (key) {
    _revealed[key] = true;
    _save(); _rerender();
  };

  function _rerender() {
    var el = document.getElementById('rdx-exam-builder');
    if (el) el.innerHTML = _buildInner();
  }

  // Update just the advance button — avoids rebuilding the entire phase
  function _updateExamBtn() {
    var btn = document.getElementById('rdx-exam-advance-btn');
    if (!btn) return;
    var count = Object.keys(_selected).length;
    var ready = count >= 2;
    btn.disabled = !ready;
    btn.style.background = ready ? '#2874A6' : '#CBD5E0';
    btn.style.cursor = ready ? 'pointer' : 'not-allowed';
    btn.textContent = ready ? '✓ Exam Complete — Refine DDx →' : 'Exam Complete — Refine DDx →';
    var hint = document.getElementById('rdx-exam-hint');
    if (hint) hint.style.display = ready ? 'none' : '';
  }

  function _buildManeuverRow(key, indent) {
    var isSel = !!_selected[key], isRev = !!_revealed[key];
    var safe = JSON.stringify(key);
    var pad = indent ? 'padding-left:28px;' : '';
    var html = '<div style="margin-bottom:' + (isRev ? '10' : '4') + 'px;' + pad + '">';
    html += '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">';
    html += '<button type="button" onclick="_rdxExamToggle(' + safe + ')" ';
    html += 'style="display:flex;align-items:center;gap:8px;padding:5px 12px 5px 8px;border-radius:6px;';
    html += 'border:1px solid ' + (isSel ? '#2874A6' : '#D1D5DB') + ';';
    html += 'background:' + (isSel ? '#EBF5FB' : '#fff') + ';';
    html += 'cursor:pointer;font-size:12px;color:' + (isSel ? '#1B4F72' : '#374151') + ';font-family:inherit;text-align:left">';
    html += '<span style="width:15px;height:15px;border-radius:3px;border:2px solid ';
    html += (isSel ? '#2874A6' : '#9CA3AF') + ';background:' + (isSel ? '#2874A6' : 'transparent');
    html += ';display:flex;align-items:center;justify-content:center;flex-shrink:0">';
    if (isSel) html += '<svg width="9" height="7" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3 5.5L8 1" stroke="white" stroke-width="1.8" stroke-linecap="round"/></svg>';
    html += '</span>' + key + '</button>';
    if (isSel && !isRev) {
      html += '<button type="button" onclick="_rdxExamReveal(' + safe + ')" ';
      html += 'style="padding:4px 11px;background:#2874A6;color:#fff;border:none;border-radius:5px;';
      html += 'font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;white-space:nowrap">Examine →</button>';
    }
    html += '</div>';
    if (isRev) {
      html += '<div style="margin-top:4px;margin-left:24px;padding:8px 12px;background:#F0F9FF;border-left:3px solid #2874A6;border-radius:0 6px 6px 0">';
      html += '<div style="font-size:10px;font-weight:700;color:#1B4F72;margin-bottom:2px;text-transform:uppercase;letter-spacing:.4px">Finding</div>';
      html += '<div style="font-size:12px;color:#1e3a5f;line-height:1.6">' + _getFinding(key) + '</div>';
      html += '</div>';
    }
    html += '</div>';
    return html;
  }

  function _buildInner() {
    var selCount = _selectedCount();
    var html = '';

    html += '<div style="background:#EBF5FB;border-radius:8px;padding:10px 14px;margin-bottom:14px;font-size:12px;color:#1B4F72;line-height:1.6">';
    html += '<strong>Choose examination maneuvers based on your differential.</strong> ';
    html += 'Expand a system, select the maneuvers you want to perform, then click <strong>Examine →</strong> to see findings. ';
    html += 'Some maneuvers have sub-items — expand them to access specific tests. ';
    html += '<span style="color:#2874A6;font-weight:600">Your selections are tracked.</span>';
    html += '</div>';

    html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">';
    html += '<div style="font-size:12px;color:#4a5568"><strong style="color:#2874A6">' + selCount + '</strong> maneuver' + (selCount !== 1 ? 's' : '') + ' selected</div>';
    if (selCount >= 2) {
      html += '<div style="font-size:11px;color:#1B7A3D;font-weight:600;background:#E8F5E9;padding:3px 10px;border-radius:10px">✓ Ready to advance</div>';
    } else {
      html += '<div style="font-size:11px;color:#718096">Select at least 2 to advance</div>';
    }
    html += '</div>';

    EXAM_CATALOG.forEach(function (sys) {
      var sysSelCount = 0;
      sys.maneuvers.forEach(function (m) {
        var key = typeof m === 'string' ? m : m.name;
        if (_selected[key]) sysSelCount++;
        if (typeof m !== 'string' && m.subs) {
          m.subs.forEach(function (s) { if (_selected[s]) sysSelCount++; });
        }
      });
      var isExp = !!_expanded[sys.system];
      var safeLabel = sys.system.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

      html += '<div style="margin-bottom:4px;border:1px solid ' + (sysSelCount > 0 ? '#AED6F1' : '#E4EEF6') + ';border-radius:8px;overflow:hidden">';
      html += '<button type="button" onclick="_rdxExamToggleSystem(\'' + safeLabel + '\')" ';
      html += 'style="width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 14px;';
      html += 'background:' + (sysSelCount > 0 ? '#EBF5FB' : '#F8FAFC') + ';border:none;cursor:pointer;text-align:left;font-family:inherit">';
      html += '<div style="display:flex;align-items:center;gap:8px">';
      html += '<span style="font-size:14px">' + sys.icon + '</span>';
      html += '<span style="font-size:12px;font-weight:700;color:' + (sysSelCount > 0 ? '#2874A6' : '#374151') + '">' + sys.system + '</span>';
      if (sysSelCount > 0) {
        html += '<span style="font-size:10px;background:#2874A6;color:#fff;padding:1px 7px;border-radius:10px;font-weight:700">' + sysSelCount + '</span>';
      }
      html += '</div>';
      html += '<span style="color:#94A3B8;font-size:13px;display:inline-block;transform:rotate(' + (isExp ? '90' : '0') + 'deg);transition:transform .15s">›</span>';
      html += '</button>';

      if (isExp) {
        html += '<div style="padding:10px 14px 12px;background:#fff;border-top:1px solid #E4EEF6">';
        sys.maneuvers.forEach(function (m) {
          if (typeof m === 'string') {
            html += _buildManeuverRow(m, false);
          } else if (!m.subs || m.subs.length === 0) {
            html += _buildManeuverRow(m.name, false);
          } else {
            // Parent with sub-items
            var isSubExp = !!_subExpanded[m.name];
            var safeM = m.name.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
            var subSelCount = m.subs.filter(function (s) { return _selected[s]; }).length;

            html += '<div style="margin-bottom:6px;border:1px solid ' + (subSelCount > 0 ? '#BFD7ED' : '#E9EFF5') + ';border-radius:6px;overflow:hidden">';
            html += '<div style="display:flex;align-items:center;gap:0;background:' + (subSelCount > 0 ? '#F0F7FF' : '#FAFBFC') + '">';
            // Parent toggle (select/deselect the parent name itself)
            html += '<button type="button" onclick="_rdxExamToggle(\'' + safeM + '\')" ';
            html += 'style="display:flex;align-items:center;gap:7px;padding:7px 10px;border:none;cursor:pointer;';
            html += 'background:transparent;font-size:12px;font-weight:600;color:' + (_selected[m.name] ? '#2874A6' : '#374151') + ';font-family:inherit;text-align:left;flex:1">';
            html += '<span style="width:14px;height:14px;border-radius:3px;border:2px solid ';
            html += (_selected[m.name] ? '#2874A6' : '#9CA3AF') + ';background:' + (_selected[m.name] ? '#2874A6' : 'transparent');
            html += ';display:flex;align-items:center;justify-content:center;flex-shrink:0">';
            if (_selected[m.name]) html += '<svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="white" stroke-width="1.8" stroke-linecap="round"/></svg>';
            html += '</span>';
            html += m.name;
            if (subSelCount > 0) html += ' <span style="font-size:10px;background:#2874A6;color:#fff;padding:0 5px;border-radius:8px;margin-left:4px">' + subSelCount + '</span>';
            html += '</button>';
            // Sub-items expand toggle
            html += '<button type="button" onclick="_rdxExamToggleSub(\'' + safeM + '\')" ';
            html += 'style="padding:7px 12px;border:none;border-left:1px solid #E4EEF6;background:transparent;cursor:pointer;font-size:11px;color:#64748B;font-family:inherit;white-space:nowrap">';
            html += (isSubExp ? '▲ Hide' : '▼ Specific tests') + '</button>';
            html += '</div>';

            // Revealed finding for parent
            if (_revealed[m.name]) {
              html += '<div style="padding:8px 12px;background:#F0F9FF;border-top:1px solid #E4EEF6">';
              html += '<div style="font-size:10px;font-weight:700;color:#1B4F72;margin-bottom:2px;text-transform:uppercase;letter-spacing:.4px">Finding</div>';
              html += '<div style="font-size:12px;color:#1e3a5f;line-height:1.6">' + _getFinding(m.name) + '</div>';
              html += '</div>';
            } else if (_selected[m.name]) {
              html += '<div style="padding:4px 12px 8px;background:#F8FAFC">';
              html += '<button type="button" onclick="_rdxExamReveal(\'' + safeM + '\')" ';
              html += 'style="padding:4px 11px;background:#2874A6;color:#fff;border:none;border-radius:5px;';
              html += 'font-size:11px;font-weight:700;cursor:pointer;font-family:inherit">Examine →</button>';
              html += '</div>';
            }

            // Sub-items
            if (isSubExp) {
              html += '<div style="padding:8px 12px 10px;background:#FAFBFC;border-top:1px solid #E9EFF5">';
              html += '<div style="font-size:10px;font-weight:700;color:#94A3B8;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">Specific Tests</div>';
              m.subs.forEach(function (s) { html += _buildManeuverRow(s, true); });
              html += '</div>';
            }
            html += '</div>';
          }
        });
        html += '</div>';
      }
      html += '</div>';
    });
    return html;
  }

  window.ExamBuilder = {
    init: function () {
      _guided = window.EMR_DATA && window.EMR_DATA.guided;
      _load();
    },
    render: function () {
      this.init();
      return '<div id="rdx-exam-builder">' + _buildInner() + '</div>';
    },
    getSelected:      function () { return Object.keys(_selected); },
    getRevealed:      function () { return Object.keys(_revealed); },
    getSelectedCount: function () { return Object.keys(_selected).length; },
    reset: function () {
      _selected = {}; _revealed = {}; _expanded = {}; _subExpanded = {};
      sessionStorage.removeItem('rdx-exam-state');
    }
  };

  setTimeout(function () {
    if (window.GuidedMode) {
      window.GuidedMode.getExamDone = function () {
        return window.ExamBuilder ? ExamBuilder.getSelected() : [];
      };
    }
  }, 500);

})();
