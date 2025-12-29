// ============================================================
// ReasonDx Pattern Recognition Enhancement
// Helps students recognize clinical patterns and compare presentations
// ============================================================

(function() {
    'use strict';
    
    // ============================================================
    // ILLNESS SCRIPTS - Classic Presentations
    // ============================================================
    
    const ILLNESS_SCRIPTS = {
        'community-acquired-pneumonia': {
            classicPatient: 'Middle-aged smoker or elderly patient',
            classicPresentation: 'Fever, productive cough, dyspnea developing over 3-5 days',
            keyVitals: 'Fever (may be absent in elderly), tachypnea, hypoxia',
            keyHistory: 'Cough with purulent sputum, pleuritic chest pain, recent URI',
            keyExam: 'Focal rales/crackles, decreased breath sounds, dullness to percussion',
            keyWorkup: 'CXR with infiltrate, elevated WBC, procalcitonin',
            mustNotMiss: ['Sepsis', 'Empyema', 'Lung abscess', 'Post-obstructive pneumonia (cancer)'],
            mimics: ['CHF exacerbation', 'PE', 'Atelectasis'],
            pitfall: 'Elderly patients may present with confusion and falls, not respiratory symptoms.'
        },
        
        'acute-coronary-syndrome': {
            classicPatient: 'Middle-aged male with CAD risk factors (HTN, DM, smoking, family history)',
            classicPresentation: 'Substernal chest pressure radiating to left arm/jaw with exertion',
            keyVitals: 'May be hypertensive or hypotensive, tachycardic',
            keyHistory: 'Chest pressure/tightness, diaphoresis, nausea, dyspnea',
            keyExam: 'Often unremarkable; may have S3/S4, new murmur, signs of CHF',
            keyWorkup: 'Serial troponins, ECG changes (ST elevation, depression, T-wave inversions)',
            mustNotMiss: ['STEMI (requires immediate cath)', 'Aortic dissection'],
            mimics: ['GERD', 'Costochondritis', 'Anxiety', 'PE'],
            pitfall: 'Women, diabetics, and elderly may have atypical presentations (dyspnea, fatigue, nausea).'
        },
        
        'pulmonary-embolism': {
            classicPatient: 'Post-surgical patient, recent immobility, cancer, OCPs, pregnant',
            classicPresentation: 'Sudden dyspnea with pleuritic chest pain',
            keyVitals: 'Tachycardia, tachypnea, hypoxia (may have normal SpO2)',
            keyHistory: 'Sudden onset dyspnea, pleuritic CP, leg swelling, risk factors',
            keyExam: 'Often unremarkable! May have unilateral leg swelling, tachycardia',
            keyWorkup: 'Wells score → D-dimer (if low risk) → CT-PA',
            mustNotMiss: ['Massive PE with hemodynamic instability'],
            mimics: ['Pneumonia', 'Anxiety', 'Pleurisy', 'Pneumothorax'],
            pitfall: 'A normal O2 sat does NOT rule out PE. The A-a gradient is often elevated.'
        },
        
        'acute-appendicitis': {
            classicPatient: 'Young adult (peak 10-30 years)',
            classicPresentation: 'Periumbilical pain migrating to RLQ over 12-24 hours',
            keyVitals: 'Low-grade fever (may be absent early)',
            keyHistory: 'Anorexia (almost always), nausea/vomiting, pain migration',
            keyExam: 'RLQ tenderness, McBurney point, positive psoas/obturator signs',
            keyWorkup: 'CT abdomen/pelvis (>95% sensitive), elevated WBC with left shift',
            mustNotMiss: ['Perforated appendicitis', 'Ectopic pregnancy (in women)', 'Testicular torsion (in men)'],
            mimics: ['Mesenteric lymphadenitis', 'Mittelschmerz', 'Crohn\'s flare', 'Ovarian cyst'],
            pitfall: 'Retrocecal appendix may present with flank pain and pyuria. Always image!'
        },
        
        'testicular-torsion': {
            classicPatient: 'Adolescent male (peak 12-18 years)',
            classicPresentation: 'Sudden severe testicular pain, often waking from sleep',
            keyVitals: 'May be normal or tachycardic from pain',
            keyHistory: 'Abrupt onset, severe pain, nausea/vomiting, no urinary symptoms',
            keyExam: 'High-riding testis, horizontal lie, absent cremasteric reflex',
            keyWorkup: 'Clinical diagnosis! Ultrasound if doubt, but don\'t delay surgery',
            mustNotMiss: ['Complete torsion (salvage drops rapidly after 6 hours)'],
            mimics: ['Epididymitis', 'Torsion of testicular appendage', 'Hernia', 'Trauma'],
            pitfall: 'Intermittent torsion may have "normal" exam between episodes. Still needs orchiopexy.'
        },
        
        'diabetic-ketoacidosis': {
            classicPatient: 'Type 1 diabetic or new-onset diabetes in young patient',
            classicPresentation: 'Polyuria, polydipsia, nausea, abdominal pain, altered mental status',
            keyVitals: 'Tachypnea (Kussmaul respirations), tachycardia, hypotension if severe',
            keyHistory: 'Missed insulin, infection, new diabetes, vomiting',
            keyExam: 'Dry mucous membranes, decreased skin turgor, fruity breath, altered sensorium',
            keyWorkup: 'Glucose >250, pH <7.3, bicarb <18, anion gap >12, positive ketones',
            mustNotMiss: ['Cerebral edema (especially in children)', 'Severe hypokalemia (check K before insulin!)'],
            mimics: ['Alcoholic ketoacidosis', 'Starvation ketosis', 'Sepsis'],
            pitfall: 'Serum K may be normal or HIGH despite total body depletion. Will drop rapidly with insulin!'
        },
        
        'atrial-fibrillation-rvr': {
            classicPatient: 'Elderly patient with hypertension, often during illness',
            classicPresentation: 'Palpitations, dyspnea, fatigue, dizziness',
            keyVitals: 'Irregularly irregular pulse, rate 110-180+, may be hypotensive',
            keyHistory: 'Palpitations, "heart racing," recent illness or stressor, alcohol use',
            keyExam: 'Irregular rhythm, variable pulse intensity, signs of CHF if decompensated',
            keyWorkup: 'ECG confirming AFib, TSH, electrolytes, echo if new-onset',
            mustNotMiss: ['Underlying cause (MI, PE, sepsis, thyrotoxicosis)'],
            mimics: ['SVT', 'Atrial flutter', 'MAT', 'Frequent PACs'],
            pitfall: 'New AFib with RVR may be the first sign of sepsis, PE, or MI. Search for the cause!'
        },
        
        'small-bowel-obstruction': {
            classicPatient: 'Patient with prior abdominal surgery',
            classicPresentation: 'Colicky abdominal pain, vomiting, distension, obstipation',
            keyVitals: 'Tachycardia, may have fever if strangulated',
            keyHistory: 'Prior surgery (adhesions), crampy pain, vomiting, no flatus/stool',
            keyExam: 'Distension, high-pitched/tinkling bowel sounds, prior surgical scars',
            keyWorkup: 'CT with IV contrast showing dilated loops, transition point',
            mustNotMiss: ['Strangulated bowel (fever, peritoneal signs, elevated lactate)'],
            mimics: ['Ileus', 'Large bowel obstruction', 'Gastroenteritis'],
            pitfall: 'Plain X-ray misses 20% of SBO. CT is the gold standard.'
        }
    };
    
    // ============================================================
    // COMPARISON TABLES - "How to tell them apart"
    // ============================================================
    
    const COMPARISON_TABLES = {
        'testicular-pain': {
            title: 'Testicular Torsion vs Epididymitis',
            headers: ['Feature', 'Torsion', 'Epididymitis'],
            rows: [
                ['Age', 'Adolescent (peak 12-18)', 'Young adult (sexually active)'],
                ['Onset', 'SUDDEN, often wakes from sleep', 'GRADUAL over days'],
                ['Pain character', 'Severe, constant', 'Moderate, may be relieved by elevation'],
                ['Urinary symptoms', 'Usually absent', 'Often present (dysuria, discharge)'],
                ['Cremasteric reflex', 'ABSENT', 'Present'],
                ['Testis position', 'High-riding, horizontal lie', 'Normal'],
                ['Prehn sign', 'Negative (no relief with elevation)', 'Positive (relief with elevation)'],
                ['Fever', 'Usually absent', 'May be present'],
                ['Time sensitivity', 'EMERGENCY - <6 hours for salvage', 'Not time-sensitive']
            ]
        },
        
        'chest-pain-cardiac': {
            title: 'ACS vs GERD vs MSK',
            headers: ['Feature', 'ACS', 'GERD', 'Costochondritis'],
            rows: [
                ['Quality', 'Pressure, tightness, "elephant"', 'Burning, "heartburn"', 'Sharp, well-localized'],
                ['Location', 'Substernal, may radiate', 'Epigastric, substernal', 'Specific chest wall area'],
                ['Triggers', 'Exertion, stress', 'Large meals, lying down, spicy food', 'Movement, palpation'],
                ['Relief', 'Rest, nitroglycerin', 'Antacids, PPI', 'NSAIDs, rest'],
                ['Associated symptoms', 'Diaphoresis, dyspnea, nausea', 'Regurgitation, sour taste', 'None'],
                ['Reproducible', 'Usually NO', 'NO', 'YES - tender to palpation'],
                ['ECG changes', 'May have ST changes', 'Normal', 'Normal'],
                ['Troponin', 'May be elevated', 'Normal', 'Normal']
            ]
        },
        
        'dyspnea-acute': {
            title: 'CHF vs Pneumonia vs PE',
            headers: ['Feature', 'CHF Exacerbation', 'Pneumonia', 'Pulmonary Embolism'],
            rows: [
                ['Onset', 'Gradual, progressive', 'Days, with prodrome', 'SUDDEN'],
                ['Fever', 'Usually absent', 'Present', 'Usually absent'],
                ['Cough', 'Dry or pink frothy sputum', 'Productive, purulent', 'Dry or hemoptysis'],
                ['Chest pain', 'Absent or dull', 'Pleuritic', 'Pleuritic'],
                ['JVD', 'Present', 'Absent', 'May be present'],
                ['Leg edema', 'Usually bilateral', 'Absent', 'May have unilateral swelling (DVT)'],
                ['CXR', 'Cardiomegaly, effusions, edema', 'Infiltrate', 'May be normal'],
                ['BNP', 'Elevated', 'Normal or mildly elevated', 'May be elevated'],
                ['D-dimer', 'May be elevated', 'May be elevated', 'Elevated (if low risk, rules out PE)']
            ]
        },
        
        'abdominal-pain-rlq': {
            title: 'Appendicitis vs Ovarian Pathology vs Mesenteric Adenitis',
            headers: ['Feature', 'Appendicitis', 'Ovarian Cyst/Torsion', 'Mesenteric Adenitis'],
            rows: [
                ['Age/Gender', 'Any, peak 10-30', 'Females of reproductive age', 'Children/adolescents'],
                ['Pain migration', 'Periumbilical → RLQ', 'Sudden onset in pelvis', 'Diffuse → RLQ'],
                ['Anorexia', 'Almost ALWAYS present', 'Variable', 'Variable'],
                ['Fever', 'Low-grade', 'Usually absent unless torsed', 'May be present (viral illness)'],
                ['GI symptoms', 'Nausea, vomiting', 'Less common', 'May have diarrhea'],
                ['Menstrual history', 'Not relevant', 'Mid-cycle (Mittelschmerz)', 'Not relevant'],
                ['Recent illness', 'Not usually', 'No', 'YES - recent viral URI'],
                ['WBC', 'Elevated with left shift', 'Usually normal', 'May be elevated'],
                ['Imaging', 'CT shows appendicitis', 'US shows cyst/torsion', 'CT shows enlarged nodes, normal appendix']
            ]
        }
    };
    
    // ============================================================
    // "RED FLAGS" BY PRESENTATION
    // ============================================================
    
    const RED_FLAGS = {
        'headache': [
            'Thunderclap onset (worst headache of life) → SAH',
            'Fever + stiff neck → Meningitis',
            'Papilledema → Elevated ICP',
            'New headache >50 years old → Temporal arteritis, mass',
            'Neurologic deficits → Stroke, mass',
            'Worse with Valsalva/position → Mass lesion',
            'History of cancer → Brain metastases'
        ],
        'back-pain': [
            'Bowel/bladder dysfunction → Cauda equina syndrome',
            'Saddle anesthesia → Cauda equina syndrome',
            'Progressive motor weakness → Cord compression',
            'Fever + back pain → Epidural abscess, osteomyelitis',
            'History of cancer → Metastases',
            'Significant trauma → Fracture',
            'Night pain unrelieved by position → Malignancy'
        ],
        'chest-pain': [
            'Tearing pain radiating to back → Aortic dissection',
            'Unequal blood pressures in arms → Aortic dissection',
            'Hypotension + distended neck veins → Tamponade, massive PE',
            'Subcutaneous emphysema → Esophageal rupture, pneumomediastinum',
            'Pain + severe diaphoresis → MI',
            'Pain with exertion → Unstable angina/ACS'
        ],
        'abdominal-pain': [
            'Rigid abdomen → Peritonitis (surgical emergency)',
            'Pain out of proportion to exam → Mesenteric ischemia',
            'Pulsatile abdominal mass → AAA',
            'Pain + melena/hematemesis → GI bleed',
            'Pain + jaundice + fever → Cholangitis (Charcot\'s triad)',
            'Pain + shock → Ruptured viscus, ruptured AAA, ruptured ectopic'
        ]
    };
    
    // ============================================================
    // FUNCTIONS
    // ============================================================
    
    function getIllnessScript(condition) {
        return ILLNESS_SCRIPTS[condition] || null;
    }
    
    function getComparisonTable(topic) {
        return COMPARISON_TABLES[topic] || null;
    }
    
    function getRedFlags(presentation) {
        return RED_FLAGS[presentation] || [];
    }
    
    // ============================================================
    // EXPOSE TO GLOBAL SCOPE
    // ============================================================
    
    window.ReasonDxPatterns = {
        ILLNESS_SCRIPTS,
        COMPARISON_TABLES,
        RED_FLAGS,
        getIllnessScript,
        getComparisonTable,
        getRedFlags,
        
        // Render comparison table as HTML
        renderComparisonTable: function(topic) {
            const table = COMPARISON_TABLES[topic];
            if (!table) return '';
            
            let html = `<div class="comparison-table">
                <h4 class="font-bold mb-2">${table.title}</h4>
                <table class="w-full text-sm border-collapse">
                    <thead><tr>`;
            
            table.headers.forEach(h => {
                html += `<th class="border p-2 bg-gray-100">${h}</th>`;
            });
            
            html += `</tr></thead><tbody>`;
            
            table.rows.forEach(row => {
                html += `<tr>`;
                row.forEach((cell, i) => {
                    html += `<td class="border p-2 ${i === 0 ? 'font-medium bg-gray-50' : ''}">${cell}</td>`;
                });
                html += `</tr>`;
            });
            
            html += `</tbody></table></div>`;
            return html;
        },
        
        // Render red flags as HTML
        renderRedFlags: function(presentation) {
            const flags = RED_FLAGS[presentation];
            if (!flags || flags.length === 0) return '';
            
            let html = `<div class="red-flags bg-red-50 border border-red-200 rounded-lg p-4 my-4">
                <h4 class="font-bold text-red-700 mb-2">🚩 Red Flags for ${presentation}</h4>
                <ul class="text-sm text-red-800">`;
            
            flags.forEach(flag => {
                html += `<li class="mb-1">• ${flag}</li>`;
            });
            
            html += `</ul></div>`;
            return html;
        }
    };
    
    console.log('✓ ReasonDx Pattern Recognition Enhancement loaded');
    
})();
