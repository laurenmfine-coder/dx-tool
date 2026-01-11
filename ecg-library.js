// ===========================================
// ECG LIBRARY v2.0 - COMPREHENSIVE EDITION
// Realistic ECG generation with expanded patterns
// ===========================================
// 
// Attribution: ECG patterns based on clinical standards
// Compatible with PTB-XL dataset patterns (PhysioNet)
// License: CC BY 4.0
// ===========================================

const ECGLibrary = {
    
    // Configuration
    config: {
        width: 800,
        height: 200,
        gridMajorColor: '#FFCDD2',
        gridMinorColor: '#FFEBEE',
        traceColor: '#1A1A1A',
        backgroundColor: '#FAFAFA',
        annotationColor: '#E53935'
    },
    
    attribution: {
        text: "ECG patterns based on PTB-XL dataset standards",
        source: "PhysioNet",
        license: "CC BY 4.0",
        url: "https://physionet.org/content/ptb-xl/"
    },
    
    // ===========================================
    // COMPREHENSIVE PATTERN LIBRARY
    // ===========================================
    
    patterns: {
        // =====================
        // NORMAL
        // =====================
        normal: {
            id: "normal",
            name: "Normal Sinus Rhythm",
            category: "normal",
            leads: ["I", "II", "III", "aVR", "aVL", "aVF", "V1", "V2", "V3", "V4", "V5", "V6"],
            findings: [
                "Regular rhythm, rate 60-100 bpm",
                "Normal P wave morphology",
                "PR interval 120-200ms",
                "QRS duration <120ms",
                "No ST-T abnormalities"
            ],
            interpretation: "Normal sinus rhythm. No acute ischemic changes.",
            urgency: "none",
            waveformMods: {}
        },
        
        sinus_bradycardia: {
            id: "sinus_bradycardia",
            name: "Sinus Bradycardia",
            category: "normal",
            leads: ["II"],
            findings: ["Regular rhythm, rate <60 bpm", "Normal P waves preceding each QRS"],
            interpretation: "Sinus bradycardia. May be normal in athletes or during sleep.",
            urgency: "low",
            waveformMods: { heartRate: 48 }
        },
        
        sinus_tachycardia: {
            id: "sinus_tachycardia",
            name: "Sinus Tachycardia",
            category: "normal",
            leads: ["II"],
            findings: ["Regular rhythm, rate >100 bpm", "Normal P waves, may be superimposed on T waves"],
            interpretation: "Sinus tachycardia. Evaluate for underlying cause.",
            urgency: "evaluate",
            waveformMods: { heartRate: 115 }
        },
        
        // =====================
        // STEMI PATTERNS
        // =====================
        stemi_anterior: {
            id: "stemi_anterior",
            name: "Anterior STEMI",
            category: "stemi",
            leads: ["V1", "V2", "V3", "V4"],
            culpritArtery: "LAD (Left Anterior Descending)",
            findings: [
                "ST elevation V1-V4 (2-4mm)",
                "Hyperacute T waves in precordial leads",
                "Reciprocal ST depression in II, III, aVF",
                "Loss of R wave progression possible"
            ],
            interpretation: "Acute anterior STEMI. Immediate cath lab activation required.",
            urgency: "emergent",
            waveformMods: {
                V1: { stElevation: 2.5, tWave: 'hyperacute' },
                V2: { stElevation: 3.5, tWave: 'hyperacute' },
                V3: { stElevation: 3.0, tWave: 'hyperacute' },
                V4: { stElevation: 2.0, tWave: 'hyperacute' },
                II: { stDepression: 1.0 },
                III: { stDepression: 1.5 },
                aVF: { stDepression: 1.0 }
            }
        },
        
        stemi_anterior_extensive: {
            id: "stemi_anterior_extensive",
            name: "Extensive Anterior STEMI",
            category: "stemi",
            leads: ["V1", "V2", "V3", "V4", "V5", "V6", "I", "aVL"],
            culpritArtery: "Proximal LAD",
            findings: [
                "ST elevation V1-V6, I, aVL",
                "Large territory at risk",
                "High risk for cardiogenic shock"
            ],
            interpretation: "Extensive anterior STEMI - proximal LAD occlusion. High mortality risk.",
            urgency: "emergent",
            waveformMods: {
                V1: { stElevation: 3.0, tWave: 'hyperacute' },
                V2: { stElevation: 4.0, tWave: 'hyperacute' },
                V3: { stElevation: 4.0, tWave: 'hyperacute' },
                V4: { stElevation: 3.5, tWave: 'hyperacute' },
                V5: { stElevation: 2.5, tWave: 'hyperacute' },
                V6: { stElevation: 2.0, tWave: 'hyperacute' },
                I: { stElevation: 1.5 },
                aVL: { stElevation: 2.0 }
            }
        },
        
        stemi_inferior: {
            id: "stemi_inferior",
            name: "Inferior STEMI",
            category: "stemi",
            leads: ["II", "III", "aVF"],
            culpritArtery: "RCA (80%) or LCx (20%)",
            findings: [
                "ST elevation II, III, aVF (III > II suggests RCA)",
                "Reciprocal ST depression I, aVL",
                "Check V4R for RV involvement"
            ],
            interpretation: "Acute inferior STEMI. Watch for bradycardia and hypotension.",
            urgency: "emergent",
            waveformMods: {
                II: { stElevation: 2.5, tWave: 'hyperacute' },
                III: { stElevation: 3.5, tWave: 'hyperacute' },
                aVF: { stElevation: 2.5, tWave: 'hyperacute' },
                I: { stDepression: 1.5 },
                aVL: { stDepression: 2.0 }
            }
        },
        
        stemi_inferior_rv: {
            id: "stemi_inferior_rv",
            name: "Inferior STEMI with RV Involvement",
            category: "stemi",
            leads: ["II", "III", "aVF", "V1"],
            culpritArtery: "Proximal RCA",
            findings: [
                "ST elevation II, III, aVF",
                "ST elevation V1 (V4R would show elevation)",
                "Avoid nitrates and volume depletion"
            ],
            interpretation: "Inferior STEMI with RV infarction. Avoid nitrates! Fluid dependent.",
            urgency: "emergent",
            waveformMods: {
                II: { stElevation: 2.5, tWave: 'hyperacute' },
                III: { stElevation: 3.5, tWave: 'hyperacute' },
                aVF: { stElevation: 2.5, tWave: 'hyperacute' },
                V1: { stElevation: 1.5 },
                I: { stDepression: 1.5 },
                aVL: { stDepression: 2.0 }
            }
        },
        
        stemi_lateral: {
            id: "stemi_lateral",
            name: "Lateral STEMI",
            category: "stemi",
            leads: ["I", "aVL", "V5", "V6"],
            culpritArtery: "LCx or Diagonal branch",
            findings: [
                "ST elevation I, aVL, V5-V6",
                "Often smaller infarct territory",
                "May have reciprocal changes inferiorly"
            ],
            interpretation: "Acute lateral STEMI. Suspect LCx or diagonal occlusion.",
            urgency: "emergent",
            waveformMods: {
                I: { stElevation: 2.0, tWave: 'hyperacute' },
                aVL: { stElevation: 2.5, tWave: 'hyperacute' },
                V5: { stElevation: 2.0, tWave: 'hyperacute' },
                V6: { stElevation: 1.5, tWave: 'hyperacute' }
            }
        },
        
        stemi_posterior: {
            id: "stemi_posterior",
            name: "Posterior STEMI",
            category: "stemi",
            leads: ["V1", "V2", "V3"],
            culpritArtery: "LCx or RCA (posterior branch)",
            findings: [
                "ST depression V1-V3 (mirror image of posterior elevation)",
                "Tall R waves V1-V2",
                "Upright T waves V1-V2",
                "Check posterior leads V7-V9"
            ],
            interpretation: "Posterior STEMI. ST depression V1-V3 is the mirror. Consider posterior leads.",
            urgency: "emergent",
            waveformMods: {
                V1: { stDepression: 2.0, tallR: true, tWave: 'upright' },
                V2: { stDepression: 2.5, tallR: true, tWave: 'upright' },
                V3: { stDepression: 1.5, tWave: 'upright' }
            }
        },
        
        // =====================
        // NSTEMI / ISCHEMIA
        // =====================
        nstemi: {
            id: "nstemi",
            name: "NSTEMI Pattern",
            category: "ischemia",
            leads: ["V1", "V2", "V3", "V4", "V5"],
            findings: [
                "ST depression ≥0.5mm in 2+ contiguous leads",
                "T wave inversions",
                "No ST elevation (except aVR)"
            ],
            interpretation: "Ischemic changes consistent with NSTEMI. Correlate with troponin.",
            urgency: "urgent",
            waveformMods: {
                V2: { stDepression: 1.5, tWave: 'inverted' },
                V3: { stDepression: 2.0, tWave: 'inverted' },
                V4: { stDepression: 1.5, tWave: 'inverted' },
                V5: { stDepression: 1.0, tWave: 'inverted' }
            }
        },
        
        wellens_type_a: {
            id: "wellens_type_a",
            name: "Wellens' Syndrome Type A",
            category: "ischemia",
            leads: ["V2", "V3"],
            findings: [
                "Biphasic T waves in V2-V3",
                "Initial positive deflection, then inversion",
                "Often pain-free at time of ECG",
                "Minimal or no ST elevation"
            ],
            interpretation: "Wellens' Type A - HIGH RISK for proximal LAD stenosis. Cardiology consult.",
            urgency: "urgent",
            waveformMods: {
                V2: { tWave: 'biphasic_a' },
                V3: { tWave: 'biphasic_a' }
            }
        },
        
        wellens_type_b: {
            id: "wellens_type_b",
            name: "Wellens' Syndrome Type B",
            category: "ischemia",
            leads: ["V2", "V3", "V4"],
            findings: [
                "Deep symmetric T wave inversions V2-V4",
                "Isoelectric or minimally elevated ST segment",
                "Preserved R wave progression",
                "More common than Type A"
            ],
            interpretation: "Wellens' Type B - critical LAD stenosis. High risk for anterior MI.",
            urgency: "urgent",
            waveformMods: {
                V2: { tWave: 'deep_symmetric_inversion' },
                V3: { tWave: 'deep_symmetric_inversion' },
                V4: { tWave: 'deep_symmetric_inversion' }
            }
        },
        
        de_winter: {
            id: "de_winter",
            name: "de Winter T Waves",
            category: "ischemia",
            leads: ["V1", "V2", "V3", "V4", "V5", "V6"],
            findings: [
                "Upsloping ST depression >1mm at J point",
                "Tall, prominent, symmetric T waves",
                "Absence of ST elevation in precordial leads",
                "ST elevation in aVR"
            ],
            interpretation: "de Winter pattern - LAD occlusion equivalent. Treat as STEMI.",
            urgency: "emergent",
            waveformMods: {
                V2: { stDepression: 2.0, jPointDepression: true, tWave: 'tall_symmetric' },
                V3: { stDepression: 2.5, jPointDepression: true, tWave: 'tall_symmetric' },
                V4: { stDepression: 2.0, jPointDepression: true, tWave: 'tall_symmetric' },
                aVR: { stElevation: 1.5 }
            }
        },
        
        // =====================
        // ARRHYTHMIAS - ATRIAL
        // =====================
        afib_rvr: {
            id: "afib_rvr",
            name: "Atrial Fibrillation with RVR",
            category: "arrhythmia",
            leads: ["II"],
            findings: [
                "Irregularly irregular rhythm",
                "No discernible P waves",
                "Fibrillatory baseline",
                "Ventricular rate >100 bpm"
            ],
            interpretation: "Atrial fibrillation with rapid ventricular response. Rate control needed.",
            urgency: "urgent",
            waveformMods: { rhythm: 'afib', heartRate: 140 }
        },
        
        afib_controlled: {
            id: "afib_controlled",
            name: "Atrial Fibrillation (Controlled)",
            category: "arrhythmia",
            leads: ["II"],
            findings: [
                "Irregularly irregular rhythm",
                "No P waves",
                "Ventricular rate 60-100 bpm"
            ],
            interpretation: "Atrial fibrillation with controlled ventricular rate.",
            urgency: "low",
            waveformMods: { rhythm: 'afib', heartRate: 78 }
        },
        
        aflutter_typical: {
            id: "aflutter_typical",
            name: "Atrial Flutter (Typical)",
            category: "arrhythmia",
            leads: ["II", "III", "aVF"],
            findings: [
                "Sawtooth flutter waves at ~300/min",
                "Most visible in inferior leads",
                "Regular ventricular response (usually 2:1 → rate ~150)"
            ],
            interpretation: "Typical atrial flutter with 2:1 conduction.",
            urgency: "urgent",
            waveformMods: { rhythm: 'aflutter', heartRate: 150 }
        },
        
        aflutter_variable: {
            id: "aflutter_variable",
            name: "Atrial Flutter (Variable Block)",
            category: "arrhythmia",
            leads: ["II", "III", "aVF"],
            findings: [
                "Sawtooth flutter waves",
                "Variable ventricular response",
                "Irregular R-R intervals"
            ],
            interpretation: "Atrial flutter with variable AV conduction.",
            urgency: "urgent",
            waveformMods: { rhythm: 'aflutter_variable', heartRate: 110 }
        },
        
        mat: {
            id: "mat",
            name: "Multifocal Atrial Tachycardia",
            category: "arrhythmia",
            leads: ["II"],
            findings: [
                "Irregular rhythm with rate >100",
                "≥3 different P wave morphologies",
                "Variable PR intervals",
                "Often seen in COPD"
            ],
            interpretation: "Multifocal atrial tachycardia. Evaluate for pulmonary disease.",
            urgency: "moderate",
            waveformMods: { rhythm: 'mat', heartRate: 120 }
        },
        
        svt: {
            id: "svt",
            name: "SVT (AVNRT)",
            category: "arrhythmia",
            leads: ["II"],
            findings: [
                "Regular narrow complex tachycardia",
                "Rate typically 150-250 bpm",
                "P waves often hidden in QRS or just after",
                "Abrupt onset and termination"
            ],
            interpretation: "Supraventricular tachycardia - likely AVNRT. Consider vagal maneuvers or adenosine.",
            urgency: "urgent",
            waveformMods: { rhythm: 'svt', heartRate: 180 }
        },
        
        wpw: {
            id: "wpw",
            name: "WPW Pattern",
            category: "arrhythmia",
            leads: ["multiple"],
            findings: [
                "Short PR interval (<120ms)",
                "Delta wave (slurred QRS upstroke)",
                "Wide QRS (>120ms)",
                "Secondary ST-T changes"
            ],
            interpretation: "Wolff-Parkinson-White pattern. Risk for pre-excited AF.",
            urgency: "evaluate",
            waveformMods: { prInterval: 100, deltaWave: true, qrsWidth: 140 }
        },
        
        // =====================
        // ARRHYTHMIAS - VENTRICULAR
        // =====================
        vtach_mono: {
            id: "vtach_mono",
            name: "Monomorphic VT",
            category: "arrhythmia",
            leads: ["II"],
            findings: [
                "Wide complex regular tachycardia",
                "QRS >120ms, rate 150-250",
                "AV dissociation may be present",
                "Uniform QRS morphology"
            ],
            interpretation: "Monomorphic ventricular tachycardia. Assess hemodynamic stability.",
            urgency: "emergent",
            waveformMods: { rhythm: 'vtach', heartRate: 180, qrsWidth: 160 }
        },
        
        vtach_poly: {
            id: "vtach_poly",
            name: "Polymorphic VT",
            category: "arrhythmia",
            leads: ["II"],
            findings: [
                "Wide complex tachycardia",
                "Continuously changing QRS morphology",
                "Often degenerates to VF"
            ],
            interpretation: "Polymorphic VT. Check QTc - if prolonged, consider Torsades.",
            urgency: "emergent",
            waveformMods: { rhythm: 'vtach_poly', heartRate: 200 }
        },
        
        torsades: {
            id: "torsades",
            name: "Torsades de Pointes",
            category: "arrhythmia",
            leads: ["II"],
            findings: [
                "Polymorphic VT with twisting axis",
                "Associated with prolonged QT",
                "Amplitude waxes and wanes",
                "Short-long-short initiating sequence"
            ],
            interpretation: "Torsades de Pointes. Give IV magnesium. Stop QT-prolonging drugs.",
            urgency: "emergent",
            waveformMods: { rhythm: 'torsades', heartRate: 220 }
        },
        
        vfib: {
            id: "vfib",
            name: "Ventricular Fibrillation",
            category: "arrhythmia",
            leads: ["II"],
            findings: [
                "Chaotic, disorganized rhythm",
                "No identifiable QRS complexes",
                "No pulse",
                "Coarse vs fine VF"
            ],
            interpretation: "Ventricular fibrillation. IMMEDIATE DEFIBRILLATION.",
            urgency: "emergent",
            waveformMods: { rhythm: 'vfib' }
        },
        
        asystole: {
            id: "asystole",
            name: "Asystole",
            category: "arrhythmia",
            leads: ["II"],
            findings: [
                "Flat line or minimal undulation",
                "No QRS complexes",
                "Confirm in multiple leads"
            ],
            interpretation: "Asystole. Confirm rhythm, start CPR, epinephrine.",
            urgency: "emergent",
            waveformMods: { rhythm: 'asystole' }
        },
        
        pea: {
            id: "pea",
            name: "PEA (Organized Rhythm)",
            category: "arrhythmia",
            leads: ["II"],
            findings: [
                "Organized electrical activity",
                "No palpable pulse",
                "Consider reversible causes (H's and T's)"
            ],
            interpretation: "If pulseless: PEA arrest. Treat reversible causes.",
            urgency: "emergent",
            waveformMods: { heartRate: 40 }
        },
        
        // =====================
        // CONDUCTION BLOCKS
        // =====================
        first_degree_avb: {
            id: "first_degree_avb",
            name: "First Degree AV Block",
            category: "block",
            leads: ["II"],
            findings: [
                "PR interval >200ms",
                "Every P wave followed by QRS",
                "Constant PR interval"
            ],
            interpretation: "First degree AV block. Usually benign. Monitor if symptomatic.",
            urgency: "low",
            waveformMods: { prInterval: 280 }
        },
        
        second_degree_type1: {
            id: "second_degree_type1",
            name: "Second Degree Block Type I (Wenckebach)",
            category: "block",
            leads: ["II"],
            findings: [
                "Progressive PR prolongation",
                "Dropped QRS after longest PR",
                "Grouped beating pattern",
                "Usually at AV node level"
            ],
            interpretation: "Mobitz Type I (Wenckebach). Often benign, especially if asymptomatic.",
            urgency: "moderate",
            waveformMods: { rhythm: 'wenckebach' }
        },
        
        second_degree_type2: {
            id: "second_degree_type2",
            name: "Second Degree Block Type II",
            category: "block",
            leads: ["II"],
            findings: [
                "Fixed PR interval",
                "Intermittent dropped QRS",
                "Often with bundle branch block",
                "Infranodal block"
            ],
            interpretation: "Mobitz Type II. HIGH RISK for progression to complete block. Pacing often needed.",
            urgency: "urgent",
            waveformMods: { rhythm: 'mobitz2', qrsWidth: 130 }
        },
        
        second_degree_21: {
            id: "second_degree_21",
            name: "2:1 AV Block",
            category: "block",
            leads: ["II"],
            findings: [
                "Every other P wave conducted",
                "Cannot distinguish Type I vs II",
                "Look for clues: QRS width, response to atropine"
            ],
            interpretation: "2:1 AV block. Cannot determine Type I vs II. Evaluate further.",
            urgency: "urgent",
            waveformMods: { rhythm: '2to1_block' }
        },
        
        third_degree_avb: {
            id: "third_degree_avb",
            name: "Third Degree (Complete) AV Block",
            category: "block",
            leads: ["II"],
            findings: [
                "Complete AV dissociation",
                "Regular P-P interval",
                "Regular R-R interval",
                "No relationship between P and QRS"
            ],
            interpretation: "Complete heart block. Transcutaneous pacing if unstable. Permanent pacer likely.",
            urgency: "emergent",
            waveformMods: { rhythm: 'chb', heartRate: 35 }
        },
        
        lbbb: {
            id: "lbbb",
            name: "Left Bundle Branch Block",
            category: "block",
            leads: ["V1", "V6", "I"],
            findings: [
                "QRS ≥120ms",
                "Broad, notched R wave in I, aVL, V5-V6",
                "Deep QS or rS in V1-V3",
                "Appropriate discordance (ST opposite to QRS)"
            ],
            interpretation: "LBBB. New LBBB with symptoms = possible STEMI equivalent.",
            urgency: "evaluate",
            waveformMods: { morphology: 'lbbb', qrsWidth: 150 }
        },
        
        rbbb: {
            id: "rbbb",
            name: "Right Bundle Branch Block",
            category: "block",
            leads: ["V1", "V6", "I"],
            findings: [
                "QRS ≥120ms",
                "RSR' pattern in V1-V2 ('M' shaped)",
                "Wide slurred S wave in I, V6",
                "Can evaluate for STEMI in presence of RBBB"
            ],
            interpretation: "RBBB. Evaluate for underlying cause (PE, RV strain, etc).",
            urgency: "evaluate",
            waveformMods: { morphology: 'rbbb', qrsWidth: 140 }
        },
        
        lafb: {
            id: "lafb",
            name: "Left Anterior Fascicular Block",
            category: "block",
            leads: ["I", "II", "III", "aVL", "aVF"],
            findings: [
                "Left axis deviation (-45° to -90°)",
                "qR pattern in I, aVL",
                "rS pattern in II, III, aVF",
                "QRS <120ms"
            ],
            interpretation: "LAFB. Often seen with RBBB (bifascicular block).",
            urgency: "low",
            waveformMods: { axis: 'lad' }
        },
        
        lpfb: {
            id: "lpfb",
            name: "Left Posterior Fascicular Block",
            category: "block",
            leads: ["I", "II", "III", "aVL", "aVF"],
            findings: [
                "Right axis deviation (90° to 180°)",
                "rS pattern in I, aVL",
                "qR pattern in II, III, aVF",
                "Must exclude RVH, PE"
            ],
            interpretation: "LPFB. Rare. Must exclude other causes of RAD.",
            urgency: "evaluate",
            waveformMods: { axis: 'rad' }
        },
        
        bifascicular: {
            id: "bifascicular",
            name: "Bifascicular Block (RBBB + LAFB)",
            category: "block",
            leads: ["V1", "I", "II"],
            findings: [
                "RBBB pattern (RSR' in V1)",
                "Left axis deviation",
                "High risk for progression to complete block"
            ],
            interpretation: "Bifascicular block. Monitor for trifascicular block/complete heart block.",
            urgency: "moderate",
            waveformMods: { morphology: 'rbbb', axis: 'lad', qrsWidth: 140 }
        },
        
        // =====================
        // OTHER PATTERNS
        // =====================
        pe_pattern: {
            id: "pe_pattern",
            name: "Pulmonary Embolism Pattern",
            category: "other",
            leads: ["I", "III", "V1"],
            findings: [
                "Sinus tachycardia (most common)",
                "S1Q3T3 pattern (only 10-20%)",
                "T wave inversions V1-V4",
                "Right axis deviation",
                "New RBBB or incomplete RBBB"
            ],
            interpretation: "ECG findings suggestive of PE/RV strain. Correlate clinically. Consider CTA.",
            urgency: "emergent",
            waveformMods: {
                I: { sWave: 3 },
                III: { qWave: true, tWave: 'inverted' },
                V1: { tWave: 'inverted' },
                V2: { tWave: 'inverted' },
                V3: { tWave: 'inverted' },
                heartRate: 110
            }
        },
        
        hyperkalemia_mild: {
            id: "hyperkalemia_mild",
            name: "Hyperkalemia (Mild)",
            category: "metabolic",
            leads: ["V2", "V3"],
            findings: [
                "Peaked, narrow-based T waves",
                "Best seen in precordial leads",
                "K+ typically 5.5-6.5 mEq/L"
            ],
            interpretation: "Peaked T waves suggestive of hyperkalemia. Check potassium level.",
            urgency: "urgent",
            waveformMods: { tWave: 'peaked' }
        },
        
        hyperkalemia_severe: {
            id: "hyperkalemia_severe",
            name: "Hyperkalemia (Severe)",
            category: "metabolic",
            leads: ["multiple"],
            findings: [
                "Peaked T waves",
                "Prolonged PR interval",
                "Widened QRS",
                "Flattened/absent P waves",
                "Sine wave pattern (pre-arrest)"
            ],
            interpretation: "Severe hyperkalemia. Give calcium gluconate immediately. Emergent dialysis.",
            urgency: "emergent",
            waveformMods: { tWave: 'peaked', prInterval: 280, qrsWidth: 160, pWave: 'flat' }
        },
        
        hypokalemia: {
            id: "hypokalemia",
            name: "Hypokalemia",
            category: "metabolic",
            leads: ["V2", "V3"],
            findings: [
                "Flattened T waves",
                "Prominent U waves",
                "ST depression",
                "Prolonged QT (actually QU)"
            ],
            interpretation: "ECG changes consistent with hypokalemia. Check potassium and magnesium.",
            urgency: "urgent",
            waveformMods: { tWave: 'flat', uWave: true, stDepression: 0.5 }
        },
        
        hypocalcemia: {
            id: "hypocalcemia",
            name: "Hypocalcemia",
            category: "metabolic",
            leads: ["II"],
            findings: [
                "Prolonged QT interval",
                "Mainly due to prolonged ST segment",
                "T wave usually normal morphology"
            ],
            interpretation: "Prolonged QT suggestive of hypocalcemia. Check calcium level.",
            urgency: "moderate",
            waveformMods: { qtProlonged: true, stProlonged: true }
        },
        
        hypercalcemia: {
            id: "hypercalcemia",
            name: "Hypercalcemia",
            category: "metabolic",
            leads: ["II"],
            findings: [
                "Shortened QT interval",
                "Shortened ST segment",
                "J point at onset of T wave"
            ],
            interpretation: "Short QT suggestive of hypercalcemia. Check calcium level.",
            urgency: "moderate",
            waveformMods: { qtShortened: true }
        },
        
        digitalis_effect: {
            id: "digitalis_effect",
            name: "Digitalis Effect",
            category: "drug",
            leads: ["V4", "V5", "V6"],
            findings: [
                "Scooped ST depression ('Salvador Dali mustache')",
                "Shortened QT",
                "Flattened T waves",
                "May see U waves"
            ],
            interpretation: "Digitalis effect. Does not indicate toxicity - just drug presence.",
            urgency: "low",
            waveformMods: { stMorphology: 'scooped', qtShortened: true }
        },
        
        digitalis_toxicity: {
            id: "digitalis_toxicity",
            name: "Digitalis Toxicity",
            category: "drug",
            leads: ["II"],
            findings: [
                "Atrial tachycardia with block",
                "Accelerated junctional rhythm",
                "Bidirectional VT",
                "Regularized atrial fibrillation"
            ],
            interpretation: "Digitalis toxicity. Hold digoxin. Consider Digibind if severe.",
            urgency: "urgent",
            waveformMods: { rhythm: 'dig_toxicity' }
        },
        
        lvh: {
            id: "lvh",
            name: "Left Ventricular Hypertrophy",
            category: "hypertrophy",
            leads: ["V1", "V5", "V6"],
            findings: [
                "S in V1 + R in V5 or V6 > 35mm",
                "R in aVL > 11mm",
                "Cornell criteria positive",
                "May have LV strain pattern"
            ],
            interpretation: "LVH by voltage criteria. Consider echo for assessment.",
            urgency: "evaluate",
            waveformMods: { sV1: 18, rV5: 28 }
        },
        
        lvh_strain: {
            id: "lvh_strain",
            name: "LVH with Strain Pattern",
            category: "hypertrophy",
            leads: ["V5", "V6", "I", "aVL"],
            findings: [
                "LVH voltage criteria met",
                "Asymmetric ST depression/T inversion in lateral leads",
                "ST-T opposite to major QRS deflection"
            ],
            interpretation: "LVH with strain pattern. May mask or mimic ischemia.",
            urgency: "evaluate",
            waveformMods: { sV1: 18, rV5: 28, strainPattern: true }
        },
        
        rvh: {
            id: "rvh",
            name: "Right Ventricular Hypertrophy",
            category: "hypertrophy",
            leads: ["V1", "V2"],
            findings: [
                "Right axis deviation",
                "Tall R wave in V1 (R > S)",
                "Right atrial enlargement",
                "RV strain pattern"
            ],
            interpretation: "RVH. Consider pulmonary hypertension, congenital heart disease.",
            urgency: "evaluate",
            waveformMods: { tallR_V1: true, axis: 'rad' }
        },
        
        pericarditis: {
            id: "pericarditis",
            name: "Acute Pericarditis",
            category: "other",
            leads: ["multiple"],
            findings: [
                "Diffuse ST elevation (concave up)",
                "PR depression (most specific)",
                "No reciprocal changes (except aVR)",
                "Spodick sign (downsloping TP segment)"
            ],
            interpretation: "ECG pattern consistent with acute pericarditis. Echo to assess for effusion.",
            urgency: "moderate",
            waveformMods: { diffuseST: true, prDepression: true }
        },
        
        brugada_type1: {
            id: "brugada_type1",
            name: "Brugada Syndrome Type 1",
            category: "channelopathy",
            leads: ["V1", "V2"],
            findings: [
                "Coved ST elevation ≥2mm in V1-V2",
                "Negative T wave",
                "No other cause for changes"
            ],
            interpretation: "Brugada Type 1 pattern. High risk for sudden cardiac death. EP consult.",
            urgency: "urgent",
            waveformMods: { brugada: 'type1' }
        },
        
        long_qt: {
            id: "long_qt",
            name: "Long QT Syndrome",
            category: "channelopathy",
            leads: ["II", "V5"],
            findings: [
                "QTc > 470ms (men) or > 480ms (women)",
                "May have notched T waves",
                "Risk for Torsades de Pointes"
            ],
            interpretation: "Prolonged QT interval. Review medications. Avoid QT-prolonging drugs.",
            urgency: "moderate",
            waveformMods: { qtProlonged: true }
        },
        
        early_repol: {
            id: "early_repol",
            name: "Early Repolarization",
            category: "normal_variant",
            leads: ["V2", "V3", "V4"],
            findings: [
                "ST elevation 1-3mm with concave morphology",
                "Notching at J point",
                "Most common in young, athletic patients",
                "Typically benign"
            ],
            interpretation: "Early repolarization pattern. Usually benign. Compare with prior if available.",
            urgency: "low",
            waveformMods: { earlyRepol: true }
        },
        
        hypothermia: {
            id: "hypothermia",
            name: "Hypothermia (Osborn Waves)",
            category: "environmental",
            leads: ["V3", "V4", "II"],
            findings: [
                "J waves (Osborn waves) - positive deflection at J point",
                "Sinus bradycardia",
                "Prolonged intervals",
                "Atrial fibrillation common"
            ],
            interpretation: "Osborn waves suggesting hypothermia. Check core temperature.",
            urgency: "urgent",
            waveformMods: { osbornWaves: true, heartRate: 45 }
        }
    },
    
    // ===========================================
    // ECG GENERATION ENGINE
    // ===========================================
    
    generateSVG: function(patternId, options = {}) {
        const pattern = this.patterns[patternId];
        if (!pattern) return null;
        
        const width = options.width || this.config.width;
        const height = options.height || this.config.height;
        const showGrid = options.showGrid !== false;
        const showLabel = options.showLabel !== false;
        const lead = options.lead || pattern.leads[0];
        
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" style="background: ${this.config.backgroundColor};">`;
        
        // Background
        svg += `<rect width="100%" height="100%" fill="${this.config.backgroundColor}"/>`;
        
        // Grid
        if (showGrid) {
            svg += this._generateGrid(width, height);
        }
        
        // ECG trace
        svg += this._generateTrace(patternId, width, height, lead);
        
        // Calibration mark
        svg += `<rect x="10" y="${height - 35}" width="4" height="20" fill="${this.config.traceColor}"/>`;
        svg += `<text x="18" y="${height - 20}" font-family="Arial" font-size="10" fill="#666">1mV</text>`;
        
        // Label
        if (showLabel) {
            svg += `<text x="10" y="18" font-family="Arial" font-size="13" font-weight="bold" fill="#333">${lead}</text>`;
            svg += `<text x="${width - 10}" y="18" font-family="Arial" font-size="10" fill="#666" text-anchor="end">25mm/s</text>`;
        }
        
        svg += '</svg>';
        return svg;
    },
    
    generate12LeadSVG: function(patternId, options = {}) {
        const pattern = this.patterns[patternId];
        if (!pattern) return null;
        
        const totalWidth = options.width || 960;
        const totalHeight = options.height || 720;
        const showGrid = options.showGrid !== false;
        
        const leads12 = ['I', 'aVR', 'V1', 'V4', 'II', 'aVL', 'V2', 'V5', 'III', 'aVF', 'V3', 'V6'];
        const cols = 4;
        const rows = 3;
        const cellWidth = totalWidth / cols;
        const cellHeight = totalHeight / rows;
        
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth} ${totalHeight}" width="${totalWidth}" height="${totalHeight}">`;
        svg += `<rect width="100%" height="100%" fill="${this.config.backgroundColor}"/>`;
        
        if (showGrid) {
            svg += this._generateGrid(totalWidth, totalHeight);
        }
        
        leads12.forEach((lead, idx) => {
            const col = idx % cols;
            const row = Math.floor(idx / cols);
            const offsetX = col * cellWidth;
            const offsetY = row * cellHeight;
            
            // Lead label
            svg += `<text x="${offsetX + 8}" y="${offsetY + 16}" font-family="Arial" font-size="12" font-weight="bold" fill="#333">${lead}</text>`;
            
            // Trace
            svg += this._generateTrace(patternId, cellWidth, cellHeight, lead, offsetX, offsetY);
        });
        
        // Calibration and header
        svg += `<rect x="10" y="${totalHeight - 30}" width="4" height="20" fill="${this.config.traceColor}"/>`;
        svg += `<text x="18" y="${totalHeight - 15}" font-family="Arial" font-size="9" fill="#666">1mV | 25mm/s | 10mm/mV</text>`;
        
        svg += '</svg>';
        return svg;
    },
    
    _generateGrid: function(width, height) {
        let grid = '<g class="grid" opacity="0.7">';
        
        // Minor grid (1mm = 4px)
        for (let x = 0; x <= width; x += 4) {
            grid += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="${this.config.gridMinorColor}" stroke-width="0.5"/>`;
        }
        for (let y = 0; y <= height; y += 4) {
            grid += `<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${this.config.gridMinorColor}" stroke-width="0.5"/>`;
        }
        
        // Major grid (5mm = 20px)
        for (let x = 0; x <= width; x += 20) {
            grid += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="${this.config.gridMajorColor}" stroke-width="1"/>`;
        }
        for (let y = 0; y <= height; y += 20) {
            grid += `<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${this.config.gridMajorColor}" stroke-width="1"/>`;
        }
        
        grid += '</g>';
        return grid;
    },
    
    _generateTrace: function(patternId, width, height, lead, offsetX = 0, offsetY = 0) {
        const baseline = offsetY + height / 2;
        const pattern = this.patterns[patternId];
        const mods = pattern.waveformMods || {};
        const leadMods = mods[lead] || {};
        
        // Determine heart rate
        let heartRate = mods.heartRate || leadMods.heartRate || 75;
        const beatDuration = 60000 / heartRate; // ms
        const pixelsPerMs = width / 2500; // 2.5 seconds shown
        const beatWidth = beatDuration * pixelsPerMs;
        const numBeats = Math.ceil(width / beatWidth) + 1;
        
        let path = `M ${offsetX} ${baseline}`;
        let currentX = offsetX;
        
        for (let beat = 0; beat < numBeats && currentX < offsetX + width; beat++) {
            const beatPoints = this._generateBeatWaveform(patternId, lead, beatWidth, height / 2 - 20);
            
            beatPoints.forEach(p => {
                const x = currentX + p.x;
                const y = baseline - p.y;
                if (x <= offsetX + width) {
                    path += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
                }
            });
            
            currentX += beatWidth;
        }
        
        return `<path d="${path}" fill="none" stroke="${this.config.traceColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`;
    },
    
    _generateBeatWaveform: function(patternId, lead, beatWidth, maxAmplitude) {
        const points = [];
        const samples = 120;
        const pattern = this.patterns[patternId];
        const mods = pattern.waveformMods || {};
        const leadMods = mods[lead] || {};
        const globalRhythm = mods.rhythm;
        
        // Special rhythm handling
        if (globalRhythm === 'vfib') {
            return this._generateVFibWaveform(beatWidth, maxAmplitude, samples);
        }
        if (globalRhythm === 'asystole') {
            return this._generateAsystoleWaveform(beatWidth, samples);
        }
        if (globalRhythm === 'afib') {
            return this._generateAfibBeat(beatWidth, maxAmplitude, samples, leadMods);
        }
        
        for (let i = 0; i < samples; i++) {
            const t = i / samples;
            const x = t * beatWidth;
            let y = 0;
            
            // Baseline noise
            y += (Math.random() - 0.5) * 0.02 * maxAmplitude;
            
            // P wave (0-0.08)
            if (t < 0.08 && !leadMods.noP && mods.pWave !== 'flat') {
                const pAmp = lead === 'aVR' ? -0.1 : 0.1;
                y += pAmp * maxAmplitude * Math.sin(t / 0.08 * Math.PI);
            }
            
            // PR segment (0.08-0.16) - may have depression in pericarditis
            if (t >= 0.08 && t < 0.16) {
                if (mods.prDepression) {
                    y -= 0.05 * maxAmplitude;
                }
            }
            
            // QRS complex (0.16-0.24)
            if (t >= 0.16 && t < 0.24) {
                y += this._getQRSValue(t, lead, leadMods, mods, maxAmplitude);
            }
            
            // ST segment (0.24-0.32)
            if (t >= 0.24 && t < 0.32) {
                y += this._getSTValue(lead, leadMods, mods, maxAmplitude);
            }
            
            // T wave (0.32-0.48)
            if (t >= 0.32 && t < 0.48) {
                y += this._getTWaveValue(t, lead, leadMods, mods, maxAmplitude);
            }
            
            // U wave (0.48-0.55) if present
            if (t >= 0.48 && t < 0.55 && leadMods.uWave) {
                const uPhase = (t - 0.48) / 0.07;
                y += 0.08 * maxAmplitude * Math.sin(uPhase * Math.PI);
            }
            
            points.push({ x, y });
        }
        
        return points;
    },
    
    _getQRSValue: function(t, lead, leadMods, mods, maxAmplitude) {
        const qrsPhase = (t - 0.16) / 0.08;
        let y = 0;
        
        // Get base QRS amplitude for lead
        const baseAmps = {
            I: 0.6, II: 0.9, III: 0.4, aVR: -0.4, aVL: 0.3, aVF: 0.6,
            V1: -0.3, V2: 0.2, V3: 0.6, V4: 0.8, V5: 0.7, V6: 0.5
        };
        
        let qrsAmp = baseAmps[lead] || 0.5;
        
        // Modifications
        if (leadMods.sV1 && lead === 'V1') qrsAmp = -leadMods.sV1 / 20;
        if (leadMods.rV5 && (lead === 'V5' || lead === 'V6')) qrsAmp = leadMods.rV5 / 20;
        if (leadMods.tallR_V1 && lead === 'V1') qrsAmp = 0.6;
        if (leadMods.tallR && lead.startsWith('V')) qrsAmp = 0.8;
        
        // QRS morphology
        if (mods.morphology === 'lbbb') {
            if (lead === 'V1' || lead === 'V2') {
                // Deep QS
                y = -0.8 * maxAmplitude * Math.sin(qrsPhase * Math.PI);
            } else if (lead === 'V5' || lead === 'V6' || lead === 'I' || lead === 'aVL') {
                // Broad notched R
                y = 0.7 * maxAmplitude * Math.sin(qrsPhase * Math.PI);
                y += 0.15 * maxAmplitude * Math.sin(qrsPhase * 2 * Math.PI);
            }
        } else if (mods.morphology === 'rbbb') {
            if (lead === 'V1' || lead === 'V2') {
                // RSR' pattern
                if (qrsPhase < 0.3) y = 0.3 * maxAmplitude * Math.sin(qrsPhase / 0.3 * Math.PI);
                else if (qrsPhase < 0.5) y = -0.2 * maxAmplitude * Math.sin((qrsPhase - 0.3) / 0.2 * Math.PI);
                else y = 0.6 * maxAmplitude * Math.sin((qrsPhase - 0.5) / 0.5 * Math.PI);
            } else if (lead === 'I' || lead === 'V6') {
                // Wide S
                if (qrsPhase < 0.4) y = qrsAmp * maxAmplitude * Math.sin(qrsPhase / 0.4 * Math.PI);
                else y = -0.4 * maxAmplitude * Math.sin((qrsPhase - 0.4) / 0.6 * Math.PI);
            }
        } else {
            // Normal QRS
            if (qrsPhase < 0.15 && leadMods.qWave) {
                y = -0.2 * maxAmplitude * Math.sin(qrsPhase / 0.15 * Math.PI);
            } else if (qrsPhase < 0.15 && leadMods.sWave) {
                y = -leadMods.sWave / 10 * maxAmplitude * Math.sin(qrsPhase / 0.15 * Math.PI);
            } else if (qrsPhase >= 0.15 && qrsPhase < 0.6) {
                y = qrsAmp * maxAmplitude * Math.sin((qrsPhase - 0.15) / 0.45 * Math.PI);
            } else {
                y = -0.15 * maxAmplitude * Math.sin((qrsPhase - 0.6) / 0.4 * Math.PI);
            }
        }
        
        return y;
    },
    
    _getSTValue: function(lead, leadMods, mods, maxAmplitude) {
        let st = 0;
        
        if (leadMods.stElevation) {
            st = (leadMods.stElevation / 10) * maxAmplitude;
        } else if (leadMods.stDepression) {
            st = -(leadMods.stDepression / 10) * maxAmplitude;
        } else if (mods.diffuseST) {
            // Pericarditis - diffuse elevation except aVR
            st = lead === 'aVR' ? -0.1 * maxAmplitude : 0.1 * maxAmplitude;
        }
        
        return st;
    },
    
    _getTWaveValue: function(t, lead, leadMods, mods, maxAmplitude) {
        const tPhase = (t - 0.32) / 0.16;
        let tAmp = 0.2;
        
        // T wave modifications
        if (leadMods.tWave === 'hyperacute' || mods.tWave === 'peaked') {
            tAmp = 0.6;
        } else if (leadMods.tWave === 'inverted') {
            tAmp = -0.25;
        } else if (leadMods.tWave === 'deep_symmetric_inversion') {
            tAmp = -0.5;
        } else if (leadMods.tWave === 'biphasic_a') {
            // Wellens Type A
            if (tPhase < 0.4) return 0.15 * maxAmplitude * Math.sin(tPhase / 0.4 * Math.PI);
            else return -0.2 * maxAmplitude * Math.sin((tPhase - 0.4) / 0.6 * Math.PI);
        } else if (leadMods.tWave === 'tall_symmetric') {
            tAmp = 0.5;
        } else if (leadMods.tWave === 'flat' || mods.tWave === 'flat') {
            tAmp = 0.03;
        }
        
        if (lead === 'aVR') tAmp = -Math.abs(tAmp);
        
        return tAmp * maxAmplitude * Math.sin(tPhase * Math.PI);
    },
    
    _generateVFibWaveform: function(beatWidth, maxAmplitude, samples) {
        const points = [];
        for (let i = 0; i < samples; i++) {
            const x = (i / samples) * beatWidth;
            const y = (Math.random() - 0.5) * maxAmplitude * 0.8 * Math.sin(i * 0.3);
            points.push({ x, y });
        }
        return points;
    },
    
    _generateAsystoleWaveform: function(beatWidth, samples) {
        const points = [];
        for (let i = 0; i < samples; i++) {
            const x = (i / samples) * beatWidth;
            const y = (Math.random() - 0.5) * 2; // Minimal noise
            points.push({ x, y });
        }
        return points;
    },
    
    _generateAfibBeat: function(beatWidth, maxAmplitude, samples, leadMods) {
        const points = [];
        for (let i = 0; i < samples; i++) {
            const t = i / samples;
            const x = t * beatWidth;
            let y = 0;
            
            // Fibrillatory baseline
            y += (Math.random() - 0.5) * 0.08 * maxAmplitude;
            y += 0.03 * maxAmplitude * Math.sin(i * 0.5);
            
            // QRS (0.2-0.28)
            if (t >= 0.2 && t < 0.28) {
                const qrsPhase = (t - 0.2) / 0.08;
                y += 0.7 * maxAmplitude * Math.sin(qrsPhase * Math.PI);
            }
            
            // T wave (0.32-0.45)
            if (t >= 0.32 && t < 0.45) {
                const tPhase = (t - 0.32) / 0.13;
                y += 0.15 * maxAmplitude * Math.sin(tPhase * Math.PI);
            }
            
            points.push({ x, y });
        }
        return points;
    },
    
    // ===========================================
    // UTILITY FUNCTIONS
    // ===========================================
    
    getPatternsByCategory: function(category) {
        return Object.values(this.patterns).filter(p => p.category === category);
    },
    
    getAllCategories: function() {
        const categories = new Set();
        Object.values(this.patterns).forEach(p => categories.add(p.category));
        return Array.from(categories);
    },
    
    getPatternInfo: function(patternId) {
        return this.patterns[patternId] || null;
    },
    
    renderToElement: function(elementId, patternId, options = {}) {
        const element = document.getElementById(elementId);
        if (!element) return false;
        
        const svg = options.fullLead ? 
            this.generate12LeadSVG(patternId, options) : 
            this.generateSVG(patternId, options);
        
        if (!svg) return false;
        element.innerHTML = svg;
        return true;
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ECGLibrary;
}
