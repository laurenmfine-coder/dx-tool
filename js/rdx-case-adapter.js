/**
 * ═══════════════════════════════════════════════════════════════
 * ReasonDx CRT Case Adapter — js/rdx-case-adapter.js
 * ═══════════════════════════════════════════════════════════════
 * Translates CRT_DATA cases into the rad-study orchestrator format
 * so any of the 361 existing CRT cases can run on the simulation
 * engine with multi-agent interaction, DDx chooser, PE matching,
 * readability analysis, and passive data collection.
 *
 * The adapter fills gaps with sensible defaults. Where CRT doesn't
 * have data (patient scripts, PE findings), the orchestrator's
 * Claude prompts use the case description to generate responses.
 * ═══════════════════════════════════════════════════════════════
 */

(function() {
  'use strict';

  // ── PATIENT NAME GENERATOR ──
  // Deterministic from case ID so the same case always gets the same patient
  // 50×50 = 2500 combinations — eliminates collisions across 361 cases
  var FIRST_NAMES_F = ['Sarah','Maria','Lisa','Jennifer','Amanda','Emily','Rachel','Angela','Patricia','Nicole','Katherine','Carmen','Aisha','Priya','Linda','Michelle','Christina','Sophia','Diana','Natasha','Gloria','Vanessa','Heather','Monica','Rosa','Tamara','Denise','Sylvia','Jasmine','Crystal','Yolanda','Lillian','Tanya','Gabriela','Fatima','Elena','Valentina','Cynthia','Adriana','Mariana','Helen','Grace','Nadia','Brenda','Claudia','Ingrid','Amara','Zara','Keiko','Simone'];
  var FIRST_NAMES_M = ['James','Robert','Michael','David','Carlos','William','Thomas','Anthony','Daniel','Mark','Kevin','Joseph','Andre','Raj','Brian','Christopher','Jason','Steven','Patrick','Omar','Gregory','Vincent','Marcus','Eduardo','Frank','Raymond','Derek','Samuel','Curtis','Ivan','Alejandro','Darren','Malcolm','Felix','Hassan','Yusuf','Dmitri','Kofi','Tariq','Bennett','Wesley','Elliott','Terrence','Franklin','Hector','Gilbert','Roland','Desmond','Nikolai','Cedric'];
  var LAST_NAMES = ['Johnson','Chen','Garcia','Williams','Patel','Kim','Martinez','Robinson','Lee','Walker','Brown','Davis','Wilson','Moore','Taylor','Anderson','Thompson','Nguyen','Jackson','White','Richardson','Stewart','Rivera','Torres','Murphy','Nakamura','Okafor','Vasquez','Singh','Petrov','Hoffman','Morales','Foster','Barnes','Reed','Goldman','Fitzgerald','Alvarez','Burke','Sato','Ellis','Reyes','Chambers','Adeyemi','Volkov','Herrera','Duval','Khatri','Mbeki','Lindqvist'];

  function hashCode(s) {
    var h = 0;
    for (var i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
    return Math.abs(h);
  }

  // Use different hash bits for first vs last name to avoid correlation
  // Incorporate a running index to break ties between similar case IDs
  var _nameIndex = 0;
  var _assignedNames = {};
  function generatePatientName(caseId, sex) {
    // Check cache first (deterministic per case)
    if (_assignedNames[caseId]) return _assignedNames[caseId];
    
    var h1 = hashCode(caseId);
    var h2 = hashCode(caseId + '_ln');
    var firstNames = sex === 'Male' ? FIRST_NAMES_M : FIRST_NAMES_F;
    var attempts = 0;
    var name;
    do {
      var fi = (h1 + attempts * 7) % firstNames.length;
      var li = (h2 + attempts * 13) % LAST_NAMES.length;
      name = firstNames[fi] + ' ' + LAST_NAMES[li];
      attempts++;
    } while (attempts < 100 && Object.values(_assignedNames).indexOf(name) !== -1);
    
    _assignedNames[caseId] = name;
    return name;
  }

  function generateAge(caseId, crt) {
    if (crt.patientSummary && crt.patientSummary.age) return crt.patientSummary.age;

    // Extract from any text field
    var allText = JSON.stringify(crt).substring(0, 5000);
    var ageMatch = allText.match(/(\d{1,2})-year-old|(\d{1,2})yo|age[: ]+(\d{1,3})/i);
    if (ageMatch) {
      var found = parseInt(ageMatch[1] || ageMatch[2] || ageMatch[3]);
      if (found > 0 && found < 120) return found;
    }

    // Clinically appropriate age by diagnosis/category
    var dx = (crt.diagnosis || '').toLowerCase();
    var cat = (crt.category || '').toLowerCase();
    var h = hashCode(caseId);

    // Pediatric
    if (/pediatric|croup|intussusception|kawasaki|pyloric|febrile seizure|bronchiolitis|angelman/.test(dx)) return 2 + (h % 8);
    if (/fpies|neonatal|aadc/.test(dx)) return 1;
    // Young adults
    if (/dka.*type.?1|anorexia|testicular torsion/.test(dx)) return 18 + (h % 12);
    if (/evali|vaping|overdose.*intentional/.test(dx)) return 20 + (h % 15);
    // Middle-aged
    if (/stemi|nstemi|acs|\bmi\b|coronary|aortic dissection/.test(dx)) return 52 + (h % 18);
    if (/stroke|cva|afib|atrial fibrillation/.test(dx)) return 58 + (h % 20);
    if (/chf|heart failure/.test(dx)) return 55 + (h % 20);
    if (/copd/.test(dx)) return 58 + (h % 15);
    // General ED
    if (/meningitis/.test(dx)) return 22 + (h % 20);
    if (/\bpe\b|pulmonary embolism/.test(dx)) return 32 + (h % 25);
    if (/appendicitis/.test(dx)) return 18 + (h % 30);
    if (/sepsis/.test(dx)) return 55 + (h % 25);
    // Allergy
    if (/anaphylaxis|allergy|allergic/.test(dx) || cat === 'allergy') return 25 + (h % 35);
    // Default: 30-70
    return 30 + (h % 40);
  }

  function guessSex(crt) {
    // Extract from text
    var allText = JSON.stringify(crt).substring(0, 3000).toLowerCase();
    if (/\bpregnant\b|\bovarian\b|\buterine\b|\bvaginal\b|\bgynec\b|\bbreastfeed\b|\bperipartum\b/.test(allText)) return 'Female';
    if (/\bprostat\b|\btesticular\b|\bpenile\b|\bepididym\b/.test(allText)) return 'Male';

    // Clinically weighted by diagnosis
    var dx = (crt.diagnosis || '').toLowerCase();
    if (/stemi|nstemi|\bmi\b|coronary|aortic dissection|aaa/.test(dx)) return 'Male'; // 2:1 male predominance
    if (/\bpe\b|pulmonary embolism|lupus|sle/.test(dx)) return 'Female'; // female predominance
    if (/testicular/.test(dx)) return 'Male';
    if (/ovarian|ectopic|eclamp/.test(dx)) return 'Female';

    // Deterministic from hash — roughly 50/50
    return hashCode(crt.id || '') % 2 === 0 ? 'Female' : 'Male';
  }

  // ── PE GENERATION FROM DIAGNOSIS ──
  // Generates baseline PE findings for common presentations
  function generatePE(crt) {
    var diagnosis = (crt.diagnosis || '').toLowerCase();
    var vitals = crt.initialVitals || {};

    var pe = {
      general: 'Alert, oriented. ',
      heent: 'Normocephalic, atraumatic. Pupils equal and reactive. Oropharynx clear. No lymphadenopathy. ',
      cardiovascular: 'Regular rate and rhythm. No murmurs, rubs, or gallops. Peripheral pulses 2+ bilaterally. No peripheral edema. ',
      respiratory: 'Clear to auscultation bilaterally. No wheezes, rhonchi, or crackles. Normal respiratory effort. ',
      abdomen: 'Soft, non-tender, non-distended. Normal bowel sounds. No hepatosplenomegaly. ',
      extremities: 'No edema, cyanosis, or clubbing. Full range of motion. ',
      skin: 'Warm, dry. No rashes or lesions. Capillary refill < 2 seconds. ',
      neuro: 'Alert and oriented x4. Cranial nerves II-XII intact. Motor strength 5/5 all extremities. Sensation intact. Reflexes 2+ symmetric. '
    };

    // Modify PE based on diagnosis category
    if (/heart failure|chf|adhf/i.test(diagnosis)) {
      pe.general = 'Appears fatigued, mildly dyspneic. Speaking in full sentences with occasional pauses.';
      pe.cardiovascular = 'Irregularly irregular rhythm. S3 gallop present. JVP elevated to 12 cm. PMI displaced laterally. No murmurs.';
      pe.respiratory = 'Bilateral basilar crackles extending one-third up the lung fields. No wheezes.';
      pe.abdomen = 'Soft, non-tender. Liver edge palpable 3 cm below right costal margin. Positive hepatojugular reflux.';
      pe.extremities = '2+ pitting edema bilaterally to mid-calf. Diminished pedal pulses.';
    }
    else if (/pneumonia|cap\b/i.test(diagnosis)) {
      pe.respiratory = 'Decreased breath sounds in the right lower lobe with coarse crackles. Dullness to percussion at right base. Egophony present in the right lower lobe.';
      pe.general = 'Ill-appearing, febrile. Mild respiratory distress.';
    }
    else if (/copd|asthma/i.test(diagnosis)) {
      pe.respiratory = 'Diffuse expiratory wheezes bilaterally. Prolonged expiratory phase. Using accessory muscles of respiration.';
      pe.general = 'Seated upright, tripod position. Visibly tachypneic.';
    }
    else if (/stroke|cva|tia/i.test(diagnosis)) {
      pe.neuro = 'Left-sided facial droop. Left arm drift. Dysarthric speech. Right gaze preference. Strength 3/5 left upper and lower extremities, 5/5 right side.';
      pe.general = 'Alert but confused. Having difficulty speaking clearly.';
    }
    else if (/\bmi\b|stemi|nstemi|acs/i.test(diagnosis)) {
      pe.general = 'Anxious, diaphoretic. Clutching chest.';
      pe.cardiovascular = 'Tachycardic, regular rhythm. S4 gallop present. No murmurs. No JVD.';
    }
    else if (/\bpe\b|pulmonary embolism/i.test(diagnosis)) {
      pe.general = 'Anxious, tachypneic. Mild distress.';
      pe.respiratory = 'Clear to auscultation bilaterally. Tachypneic. No wheezes or crackles.';
      pe.extremities = 'Left calf swollen and tender to palpation with a positive Homan sign. Right leg normal.';
      pe.cardiovascular = 'Tachycardic. Regular rhythm. Loud P2 component.';
    }
    else if (/meningitis/i.test(diagnosis)) {
      pe.general = 'Ill-appearing, febrile. Photophobic.';
      pe.neuro = 'Positive Kernig and Brudzinski signs. Nuchal rigidity. Alert but irritable. No focal neurological deficits.';
    }
    else if (/dka|diabetic keto/i.test(diagnosis)) {
      pe.general = 'Lethargic, dehydrated. Kussmaul respirations. Fruity breath odor.';
      pe.abdomen = 'Diffuse abdominal tenderness without guarding or rebound. Decreased bowel sounds.';
    }
    else if (/appendicitis/i.test(diagnosis)) {
      pe.abdomen = 'Right lower quadrant tenderness with guarding. Positive McBurney point. Positive Rovsing sign. Positive psoas sign. No rebound tenderness initially.';
      pe.general = 'Lying still, uncomfortable with movement.';
    }
    else if (/sepsis/i.test(diagnosis)) {
      pe.general = 'Ill-appearing, febrile, tachycardic, tachypneic. Altered mental status.';
      pe.skin = 'Warm and flushed. Delayed capillary refill > 3 seconds. Mottling of the extremities.';
    }
    else if (/pneumothorax|ptx/i.test(diagnosis)) {
      pe.respiratory = 'Absent breath sounds on the affected side. Hyperresonance to percussion. Tracheal deviation toward the contralateral side.';
      pe.cardiovascular = 'Tachycardic. Jugular venous distension present. Hypotension.';
      pe.general = 'Acute respiratory distress. Diaphoretic.';
    }
    else if (/aortic dissection/i.test(diagnosis)) {
      pe.cardiovascular = 'Blood pressure differential > 20 mmHg between arms. New diastolic murmur of aortic regurgitation. Tachycardic.';
      pe.general = 'Severe distress. Diaphoretic. Tearing pain radiating to back.';
      pe.extremities = 'Diminished left radial pulse compared to right. No edema.';
    }
    else if (/tamponade|pericardial effusion/i.test(diagnosis)) {
      pe.cardiovascular = 'Muffled heart sounds. Jugular venous distension. Pulsus paradoxus > 10 mmHg. Tachycardic.';
      pe.general = 'Appears uncomfortable, dyspneic. Hypotensive.';
    }
    else if (/gi.*bleed|upper.*gi|lower.*gi|melena|hematochezia/i.test(diagnosis)) {
      pe.abdomen = 'Soft, mildly tender. Hyperactive bowel sounds. No peritoneal signs.';
      pe.skin = 'Pale. Cool extremities. Delayed capillary refill.';
      pe.general = 'Pale, diaphoretic. Orthostatic. Tachycardic.';
    }
    else if (/overdose|ingestion|toxicol|poisoning/i.test(diagnosis)) {
      pe.general = 'Somnolent but arousable. Slurred speech.';
      pe.neuro = 'Pupils ' + (/opioid|heroin|fentanyl/i.test(diagnosis) ? 'pinpoint, 1mm bilateral.' : 'dilated, 6mm bilateral, reactive.') + ' GCS 12 (E3V4M5). No focal deficits.';
    }
    else if (/thyroid storm|thyrotoxicosis/i.test(diagnosis)) {
      pe.general = 'Agitated, tremulous, diaphoretic. Hyperthermia.';
      pe.cardiovascular = 'Tachycardic to 140s. Irregularly irregular rhythm (new atrial fibrillation). Wide pulse pressure.';
      pe.neuro = 'Hyperreflexia. Fine resting tremor. Lid lag present.';
    }
    else if (/pancreatitis/i.test(diagnosis)) {
      pe.abdomen = 'Epigastric tenderness with guarding. Diminished bowel sounds. No rebound. Voluntary guarding.';
      pe.general = 'Uncomfortable, lying still. Diaphoretic. Nauseous.';
    }
    else if (/anaphylaxis/i.test(diagnosis)) {
      pe.general = 'Acute distress. Flushed. Speaking in short phrases.';
      pe.skin = 'Diffuse urticaria. Angioedema of lips and periorbital region. Warm, erythematous.';
      pe.respiratory = 'Inspiratory stridor. Diffuse expiratory wheezes. Tachypneic.';
      pe.cardiovascular = 'Tachycardic. Hypotensive. Weak peripheral pulses.';
    }

    // Add vital sign abnormalities to general
    if (vitals.SpO2 && parseInt(vitals.SpO2) < 93) pe.general += ' SpO2 ' + vitals.SpO2 + ' on room air.';
    if (vitals.Temp && parseFloat(vitals.Temp) > 100.4) pe.general += ' Febrile to ' + vitals.Temp + '.';

    return pe;
  }

  // ── EXTRACT LAB RESULTS FROM ORDERS ──
  function extractLabResults(crt) {
    var labs = {};
    if (!crt.treatments || !crt.treatments.orders) return labs;

    crt.treatments.orders.forEach(function(order) {
      // Lab orders often have expected results in teaching text
      if (/(lab|panel|cbc|cmp|bmp|bnp|troponin|lactate|procalcitonin|coags|abg|ua|culture)/i.test(order.name)) {
        // Use the order name as the key, teaching text implies expected result
        labs[order.name] = 'If ordered: results pending';
      }
    });

    return labs;
  }

  // ── GENERATE SCORING CRITERIA ──
  function generateScoringCriteria(crt) {
    return {
      highScoreDiagnoses: [crt.diagnosis.toLowerCase()],
      criticalOrders: (crt.treatments && crt.treatments.orders)
        ? crt.treatments.orders.filter(function(o) { return o.critical; }).map(function(o) { return o.name; })
        : [],
      dangerousActions: (crt.treatments && crt.treatments.orders)
        ? crt.treatments.orders.filter(function(o) { return o.correct === false && o.critical; }).map(function(o) { return { action: o.name, reason: o.teaching }; })
        : [],
      mustNotMiss: crt.mustNotMiss || []
    };
  }

  // ══════════════════════════════════════════════════════════════
  // MAIN ADAPTER FUNCTION
  // ══════════════════════════════════════════════════════════════

  window.CaseAdapter = {

    /**
     * Convert a CRT case to the orchestrator format.
     * @param {string} caseId - key in CRT_DATA
     * @returns {object} case in orchestrator format, or null
     */
    fromCRT: function(caseId) {
      if (!window.CRT_DATA || !window.CRT_DATA[caseId]) {
        console.warn('CaseAdapter: case not found:', caseId);
        return null;
      }

      var crt = window.CRT_DATA[caseId];
      var sex = guessSex(crt);
      var patientName = generatePatientName(caseId, sex);
      var age = generateAge(caseId, crt);
      var vitals = crt.initialVitals || {};
      var pmh = (crt.patientSummary && crt.patientSummary.pmh) || [];
      if (typeof pmh === 'string') pmh = [pmh]; // handle string pmh
      var ccPhrasing = (crt.patientSummary && crt.patientSummary.chiefComplaintPhrasing) || [crt.chiefComplaint];

      // Build the case object
      var adapted = {
        caseId: caseId,
        title: crt.diagnosis || crt.chiefComplaint,
        targetDiagnosis: crt.diagnosis,
        source: 'crt_adapter',

        presentation: {
          patientName: patientName,
          age: age,
          sex: sex,
          chiefComplaint: crt.chiefComplaint || crt.presentation,
          vitals: {
            temp: vitals.Temp || '98.6\u00B0F',
            hr: parseInt(vitals.HR) || 80,
            bp: vitals.BP || '120/80',
            rr: parseInt(vitals.RR) || 16,
            spo2: vitals.SpO2 || '98%'
          },
          triageNote: 'Patient presents with ' + (crt.chiefComplaint || crt.presentation).toLowerCase() + '.'
        },

        // Patient script — for CRT-adapted cases, Claude generates responses
        // based on this combined context rather than pre-scripted segments
        patientScript: {
          identity: patientName + ', ' + age + '-year-old ' + sex.toLowerCase() + '.',
          hpiOnset: ccPhrasing[0] || crt.chiefComplaint,
          hpiProgression: ccPhrasing.length > 1 ? ccPhrasing.slice(1).join('. ') : '',
          hpiCough: '',
          hpiAssociatedSymptoms: '',
          hpiLocationPattern: '',
          pmh: pmh.join('. '),
          medications: '',
          allergies: 'No known drug allergies.',
          familyHistory: '',
          socialSmokingAlcohol: '',
          socialOccupation: '',
          socialTravel: '',
          ros: '',
          // Combined context for Claude to generate natural responses
          _crtContext: {
            diagnosis: crt.diagnosis,
            chiefComplaint: crt.chiefComplaint,
            presentation: crt.presentation,
            category: crt.category,
            pmh: pmh,
            chiefComplaintPhrasings: ccPhrasing,
            mustNotMiss: crt.mustNotMiss || [],
            keyLearningPoints: crt.keyLearningPoints || [],
            acuity: crt.acuity
          }
        },

        physicalExam: generatePE(crt),
        labResults: extractLabResults(crt),
        scoringCriteria: generateScoringCriteria(crt),

        // Management data from CRT treatments
        managementData: {
          criticalActions: (crt.treatments && crt.treatments.orders)
            ? crt.treatments.orders.filter(function(o) { return o.critical && o.correct; }).map(function(o) {
                return { action: o.name, teaching: o.teaching, references: o.references };
              })
            : [],
          dangerousActions: (crt.treatments && crt.treatments.orders)
            ? crt.treatments.orders.filter(function(o) { return o.correct === false; }).map(function(o) {
                return { action: o.name, reason: o.teaching };
              })
            : []
        },

        // Signals for the extractor — inferred from case content
        signals: {
          criticalHistory: [], // CRT doesn't define these — the orchestrator's Claude prompt handles it
          criticalPEFindings: [] // Inferred from diagnosis category in PE generation
        }
      };

      return adapted;
    },

    /**
     * List all available CRT cases with basic metadata.
     */
    listCases: function() {
      if (!window.CRT_DATA) return [];
      return Object.keys(window.CRT_DATA).map(function(key) {
        var c = window.CRT_DATA[key];
        return {
          id: key,
          diagnosis: c.diagnosis,
          chiefComplaint: c.chiefComplaint || c.presentation,
          category: c.category,
          acuity: c.acuity
        };
      });
    },

    /**
     * Get a case for the orchestrator — checks rad-study cases first,
     * then falls back to CRT adapter.
     */
    getCase: function(caseId) {
      // Check rad-study native cases first
      if (window.RAD_STUDY_CASES && window.RAD_STUDY_CASES[caseId]) {
        return window.RAD_STUDY_CASES[caseId];
      }
      // Try CRT adapter
      return this.fromCRT(caseId);
    }
  };

  console.log('CaseAdapter loaded. CRT cases available:', window.CRT_DATA ? Object.keys(window.CRT_DATA).length : 0);
})();
