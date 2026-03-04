/* js/ed-trackboard.js — Immersive ED Track Board
 * Replaces generic patient list when setting=ed.
 * Features: ESI acuity, bed assignments, status tracking,
 *           simulated real-time arrivals, dark clinical UI.
 *
 * Usage: EDTrackBoard.render() returns HTML string.
 *        EDTrackBoard.startSimulation() begins timed arrivals.
 *        EDTrackBoard.cleanup() stops timers.
 */
(function() {
  'use strict';

  // ═══════════════════════════════════════════════════════
  // ESI ACUITY DEFINITIONS
  // ═══════════════════════════════════════════════════════
  var ESI = {
    1: { label: 'ESI 1', name: 'Resuscitation', color: '#DC2626', bg: '#991B1B', text: '#FEE2E2', pulse: true },
    2: { label: 'ESI 2', name: 'Emergent',      color: '#F97316', bg: '#9A3412', text: '#FFEDD5', pulse: false },
    3: { label: 'ESI 3', name: 'Urgent',         color: '#EAB308', bg: '#854D0E', text: '#FEF9C3', pulse: false },
    4: { label: 'ESI 4', name: 'Less Urgent',    color: '#22C55E', bg: '#166534', text: '#DCFCE7', pulse: false },
    5: { label: 'ESI 5', name: 'Non-Urgent',     color: '#3B82F6', bg: '#1E40AF', text: '#DBEAFE', pulse: false }
  };

  // ═══════════════════════════════════════════════════════
  // STATUS DEFINITIONS
  // ═══════════════════════════════════════════════════════
  var STATUS = {
    waiting:    { label: 'Waiting',     icon: '\u23F3', color: '#F59E0B', bg: 'rgba(245,158,11,.12)' },
    triage:     { label: 'Triage',      icon: '\uD83D\uDCCB', color: '#8B5CF6', bg: 'rgba(139,92,246,.12)' },
    active:     { label: 'In Progress', icon: '\uD83D\uDE91', color: '#3B82F6', bg: 'rgba(59,130,246,.12)' },
    workup:     { label: 'Workup',      icon: '\uD83D\uDD2C', color: '#0891B2', bg: 'rgba(8,145,178,.12)' },
    results:    { label: 'Results Pending', icon: '\u2026', color: '#6366F1', bg: 'rgba(99,102,241,.12)' },
    dispo:      { label: 'Dispo Ready', icon: '\u2705', color: '#22C55E', bg: 'rgba(34,197,94,.12)' },
    admit:      { label: 'Admit',       icon: '\uD83C\uDFE5', color: '#2874A6', bg: 'rgba(40,116,166,.12)' },
    discharged: { label: 'Discharged',  icon: '\u2192', color: '#64748B', bg: 'rgba(100,116,139,.12)' }
  };

  // ═══════════════════════════════════════════════════════
  // BED ZONE MAP
  // ═══════════════════════════════════════════════════════
  var BEDS = {
    resus:   ['R1','R2'],
    acute:   ['A1','A2','A3','A4','A5','A6','A7','A8'],
    subacute:['B1','B2','B3','B4','B5','B6'],
    fast:    ['F1','F2','F3','F4'],
    hall:    ['H1','H2','H3']
  };

  function _assignBed(esi, usedBeds) {
    var zones;
    if (esi === 1) zones = ['resus','acute'];
    else if (esi === 2) zones = ['acute','resus'];
    else if (esi === 3) zones = ['acute','subacute'];
    else if (esi === 4) zones = ['subacute','fast'];
    else zones = ['fast','subacute','hall'];

    for (var z = 0; z < zones.length; z++) {
      var beds = BEDS[zones[z]];
      for (var b = 0; b < beds.length; b++) {
        if (usedBeds.indexOf(beds[b]) === -1) {
          usedBeds.push(beds[b]);
          return beds[b];
        }
      }
    }
    // Overflow to hallway
    var hIdx = usedBeds.filter(function(b){return b.indexOf('H')===0}).length + 1;
    var hall = 'H' + hIdx;
    usedBeds.push(hall);
    return hall;
  }

  // ═══════════════════════════════════════════════════════
  // BUILT-IN ED CASES (used when EMR_MANIFEST unavailable)
  // plus supplement from CRT_EXPANSION
  // ═══════════════════════════════════════════════════════
  var BUILT_IN = [
    {id:'chest-pain-nstemi',name:'David Chen',age:'58M',cc:'Chest pain radiating to left arm \u00D7 2hrs',dx:'NSTEMI',category:'Cardiovascular',esi:2,vitals:{HR:98,BP:'168/94',RR:20,SpO2:96,Temp:'37.0\u00B0C'}},
    {id:'copd-exacerbation',name:'Dorothy Williams',age:'71F',cc:'Worsening dyspnea and productive cough \u00D7 3 days',dx:'COPD Exacerbation',category:'Pulmonary',esi:2,vitals:{HR:108,BP:'142/88',RR:28,SpO2:88,Temp:'38.2\u00B0C'}},
    {id:'acute-stroke',name:'James Okafor',age:'67M',cc:'Left-sided weakness and slurred speech \u00D7 45min',dx:'Acute Ischemic Stroke',category:'Neurology',esi:1,vitals:{HR:88,BP:'192/104',RR:16,SpO2:97,Temp:'36.8\u00B0C'}},
    {id:'appendicitis',name:'Maria Gonzalez',age:'24F',cc:'RLQ abdominal pain, nausea, low-grade fever \u00D7 18hrs',dx:'Acute Appendicitis',category:'Surgery',esi:3,vitals:{HR:92,BP:'118/74',RR:18,SpO2:99,Temp:'38.4\u00B0C'}},
    {id:'upper-gi-bleed',name:'Harold Thompson',age:'63M',cc:'Hematemesis \u00D7 2 episodes, melena, lightheaded',dx:'Upper GI Bleed',category:'GI',esi:2,vitals:{HR:116,BP:'94/62',RR:22,SpO2:97,Temp:'36.9\u00B0C'}},
    {id:'aki-on-ckd',name:'Sunita Sharma',age:'74F',cc:'Decreased urine output, confusion \u00D7 1 day',dx:'AKI on CKD',category:'Renal',esi:2,vitals:{HR:96,BP:'158/92',RR:22,SpO2:94,Temp:'37.1\u00B0C'}},
    {id:'sepsis-uti',name:'Eleanor Davis',age:'82F',cc:'Confusion, fever, found on floor by neighbor',dx:'Urosepsis',category:'Infectious Disease',esi:2,vitals:{HR:112,BP:'82/48',RR:24,SpO2:94,Temp:'38.9\u00B0C'}},
    {id:'dka-presentation',name:'Marcus Johnson',age:'28M',cc:'Nausea, vomiting, abdominal pain, polyuria \u00D7 2 days',dx:'DKA',category:'Endocrine',esi:2,vitals:{HR:118,BP:'108/68',RR:32,SpO2:99,Temp:'37.3\u00B0C'}},
    {id:'dvt-pe',name:'Sandra Mitchell',age:'45F',cc:'Acute onset pleuritic chest pain, dyspnea after long flight',dx:'Pulmonary Embolism',category:'Cardiovascular',esi:2,vitals:{HR:110,BP:'128/84',RR:26,SpO2:91,Temp:'37.4\u00B0C'}},
    {id:'anaphylaxis-food',name:'Tyler Brooks',age:'19M',cc:'Lip swelling, hives, throat tightness after eating',dx:'Anaphylaxis',category:'Allergy',esi:1,vitals:{HR:128,BP:'88/54',RR:28,SpO2:93,Temp:'37.0\u00B0C'}},
    {id:'afib-rvr',name:'George Patterson',age:'72M',cc:'Palpitations, dizziness, chest discomfort \u00D7 4hrs',dx:'AFib with RVR',category:'Cardiovascular',esi:2,vitals:{HR:148,BP:'102/68',RR:20,SpO2:96,Temp:'37.0\u00B0C'}},
    {id:'hip-fracture',name:'Florence Nakamura',age:'84F',cc:'Fall, unable to bear weight on right leg',dx:'Hip Fracture',category:'Orthopedic',esi:3,vitals:{HR:88,BP:'148/82',RR:16,SpO2:98,Temp:'36.6\u00B0C'}},
    {id:'ankle-sprain',name:'Kevin O\'Brien',age:'22M',cc:'Twisted ankle playing basketball, swelling',dx:'Ankle Sprain',category:'MSK',esi:4,vitals:{HR:78,BP:'122/76',RR:14,SpO2:99,Temp:'36.8\u00B0C'}},
    {id:'uti-uncomplicated',name:'Rachel Kim',age:'31F',cc:'Dysuria, frequency, urgency \u00D7 3 days',dx:'Uncomplicated UTI',category:'GU',esi:5,vitals:{HR:82,BP:'118/72',RR:14,SpO2:99,Temp:'37.8\u00B0C'}},
    {id:'migraine-refractory',name:'Lisa Patel',age:'35F',cc:'Severe headache with aura, nausea, photophobia \u00D7 6hrs',dx:'Status Migrainosus',category:'Neurology',esi:3,vitals:{HR:76,BP:'132/78',RR:14,SpO2:99,Temp:'37.0\u00B0C'}},
    {id:'laceration-hand',name:'Rafael Mendez',age:'42M',cc:'Deep laceration right hand from kitchen knife',dx:'Hand Laceration',category:'Trauma',esi:4,vitals:{HR:84,BP:'128/78',RR:14,SpO2:99,Temp:'36.9\u00B0C'}},
    {id:'asthma-peds',name:'Aiden Okafor',age:'6M',cc:'Wheezing and difficulty breathing \u00D7 12hrs',dx:'Asthma Exacerbation',category:'Pediatrics',esi:2,vitals:{HR:128,BP:'90/58',RR:36,SpO2:89,Temp:'37.8\u00B0C'}},
    {id:'syncope-workup',name:'Patricia Lang',age:'68F',cc:'Witnessed syncope at grocery store, brief LOC',dx:'Syncope',category:'Cardiovascular',esi:3,vitals:{HR:54,BP:'108/62',RR:16,SpO2:97,Temp:'36.7\u00B0C'}},
    {id:'renal-colic',name:'Omar Hassan',age:'38M',cc:'Severe left flank pain, hematuria, cannot sit still',dx:'Renal Colic',category:'GU',esi:3,vitals:{HR:102,BP:'158/94',RR:20,SpO2:99,Temp:'37.1\u00B0C'}},
    {id:'cellulitis-leg',name:'Denise Walker',age:'56F',cc:'Red, swollen, warm left lower leg \u00D7 2 days, spreading',dx:'Cellulitis',category:'Infectious Disease',esi:3,vitals:{HR:92,BP:'138/82',RR:16,SpO2:98,Temp:'38.6\u00B0C'}},
    {id:'sbo',name:'William Chen',age:'77M',cc:'Abdominal distension, vomiting, no BM \u00D7 3 days',dx:'Small Bowel Obstruction',category:'Surgery',esi:3,vitals:{HR:96,BP:'132/78',RR:18,SpO2:97,Temp:'37.4\u00B0C'}},
    {id:'etoh-withdrawal',name:'Daniel Roberts',age:'52M',cc:'Tremor, agitation, diaphoresis, last drink 36hrs ago',dx:'Alcohol Withdrawal',category:'Toxicology',esi:2,vitals:{HR:118,BP:'162/98',RR:22,SpO2:98,Temp:'38.1\u00B0C'}},
    {id:'chest-pain-low-risk',name:'Michelle Wu',age:'29F',cc:'Sharp chest pain worse with inspiration \u00D7 1 day',dx:'Costochondritis',category:'MSK',esi:4,vitals:{HR:78,BP:'116/72',RR:14,SpO2:99,Temp:'36.9\u00B0C'}},
    {id:'hyperkalemia',name:'Earl Washington',age:'69M',cc:'Generalized weakness, missed dialysis \u00D7 2 sessions',dx:'Hyperkalemia',category:'Renal',esi:1,vitals:{HR:52,BP:'142/88',RR:18,SpO2:96,Temp:'36.8\u00B0C'}}
  ];

  // ═══════════════════════════════════════════════════════
  // STATE
  // ═══════════════════════════════════════════════════════
  var _board = [];             // current patients on board
  var _usedBeds = [];          // track bed assignments
  var _arrivalQueue = [];      // patients waiting to arrive
  var _arrivalTimer = null;    // interval ID
  var _clockTimer = null;
  var _filter = 'all';         // all | esi-1 | esi-2 | etc | waiting | active | dispo
  var _sort = 'esi';           // esi | bed | time | name
  var _searchTerm = '';        // free-text search
  var _categoryFilter = 'all'; // organ system filter
  var _simRunning = false;
  var _shiftStart = null;
  var _boardEl = null;

  function _esc(s) {
    if (!s) return '';
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function _formatTime(d) {
    var h = d.getHours(), m = d.getMinutes();
    var ap = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return h + ':' + (m < 10 ? '0' : '') + m + ' ' + ap;
  }

  function _minutesAgo(d) {
    return Math.floor((Date.now() - d.getTime()) / 60000);
  }

  function _waitTime(mins) {
    if (mins < 60) return mins + 'm';
    return Math.floor(mins / 60) + 'h ' + (mins % 60) + 'm';
  }

  // ═══════════════════════════════════════════════════════
  // BOARD DATA CONSTRUCTION
  // ═══════════════════════════════════════════════════════
  function _gatherEdCases() {
    var cases = [];
    var names = window.PATIENT_NAMES || {};

    // From EMR_MANIFEST — only cases explicitly tagged as ED
    if (window.EMR_MANIFEST) {
      EMR_MANIFEST.forEach(function(g) {
        g.cases.forEach(function(c) {
          if (c.setting === 'ed' || c.setting === 'ED') {
            var nameData = names[c.id] || {};
            var ptName = c.name || nameData.name || g.patient || '';
            var ptAge = c.age || (nameData.age !== undefined ? nameData.age + (nameData.sex === 'Male' ? 'M' : 'F') : '') || g.age || '';
            // Use c.cc first; fall back to g.presentation ONLY if it looks like a real CC
            // (not a batch label like "Allergy Variations — Batch 2-3")
            var cc = c.cc || '';
            if (!cc && g.presentation && g.presentation.indexOf('Batch') === -1 && g.presentation.indexOf('Variations') === -1) {
              cc = g.presentation;
            }
            if (!cc) cc = _ccFromId(c.id); // derive from case ID as last resort
            cases.push({
              id: c.id,
              name: ptName,
              age: ptAge,
              cc: cc,
              dx: c.diagnosis || '',  // stored but never shown on board
              category: c.category || '',
              esi: c.acuity === 'emergent' ? 1 : c.acuity === 'urgent' ? 2 : 3,
              vitals: c.vitals || g.vitals || null
            });
          }
        });
      });
    }

    // Add CRT expansion ED cases
    if (window.CRT_EXPANSION) {
      CRT_EXPANSION.forEach(function(crt) {
        if (crt.setting === 'ED' && !cases.find(function(c) { return c.id === crt.id; })) {
          var nameData = names[crt.id] || {};
          cases.push({
            id: crt.id,
            name: crt.patient.name || nameData.name || '',
            age: crt.patient.age || (nameData.age !== undefined ? nameData.age + (nameData.sex === 'Male' ? 'M' : 'F') : '') || '',
            cc: crt.patient.cc || _ccFromId(crt.id),
            dx: crt.title,
            category: crt.category,
            esi: crt.acuity === 'emergent' ? 1 : crt.acuity === 'urgent' ? 2 : 3,
            vitals: crt.patient.vitals || null
          });
        }
      });
    }

    // If no manifest data, use built-in
    if (cases.length < 8) {
      BUILT_IN.forEach(function(b) {
        if (!cases.find(function(c) { return c.id === b.id; })) {
          cases.push(JSON.parse(JSON.stringify(b)));
        }
      });
    }

    return cases;
  }

  // Generate a plausible chief complaint from a case ID (last resort)
  // Maps common diagnosis keywords to what a patient would actually say
  function _ccFromId(id) {
    var map = {
      'chest-pain':'Chest pain','dyspnea':'Shortness of breath','sob':'Shortness of breath',
      'headache':'Headache','seizure':'Seizure','syncope':'Passed out',
      'abdominal-pain':'Abdominal pain','abd-pain':'Abdominal pain',
      'fever':'Fever','rash':'Rash','swelling':'Swelling',
      'weakness':'Weakness','dizziness':'Dizziness','confusion':'Confusion',
      'cough':'Cough','vomiting':'Nausea and vomiting','nausea':'Nausea',
      'bleeding':'Bleeding','pain':'Pain','fall':'Fall','injury':'Injury',
      'allergic':'Allergic reaction','anaphylaxis':'Allergic reaction with difficulty breathing',
      'urticaria':'Hives','angioedema':'Swelling of face/lips',
      'asthma':'Difficulty breathing, wheezing','copd':'Worsening shortness of breath',
      'stroke':'Sudden weakness, slurred speech','mi':'Chest pain',
      'nstemi':'Chest pain','stemi':'Crushing chest pain',
      'pe':'Chest pain and shortness of breath','dvt':'Leg swelling and pain',
      'pneumonia':'Fever, cough, shortness of breath',
      'sepsis':'Fever and feeling very ill','dka':'Nausea, vomiting, abdominal pain',
      'gi-bleed':'Vomiting blood','sbo':'Abdominal pain and vomiting',
      'fracture':'Pain after injury','laceration':'Cut/wound',
      'overdose':'Ingestion/overdose','withdrawal':'Tremor and agitation',
      'meningitis':'Headache, neck stiffness, fever',
      'epiglottitis':'Sore throat, difficulty swallowing, drooling',
      'pancreatitis':'Severe abdominal pain radiating to back',
      'appendicitis':'Right lower abdominal pain',
      'cellulitis':'Red, swollen, warm skin',
      'eczema':'Worsening skin rash','dermatitis':'Skin rash',
      'eoe':'Difficulty swallowing, food getting stuck',
      'fpies':'Vomiting and lethargy after feeding',
      'mastocytosis':'Flushing episodes, hives',
      'drug-allergy':'Reaction after taking medication',
      'sjs':'Skin blistering and rash after medication',
      'dress':'Fever and rash after starting new medication',
      'insect-sting':'Reaction after insect sting',
      'food-allergy':'Reaction after eating',
      'peanut':'Reaction after eating peanut',
      'milk-allergy':'Feeding intolerance, bloody stools'
    };
    var lower = (id || '').toLowerCase();
    for (var key in map) {
      if (lower.indexOf(key) !== -1) return map[key];
    }
    // Generic fallback — don't show the case ID
    return 'Presenting complaint';
  }

  function _buildBoard() {
    var allCases = _gatherEdCases();
    _usedBeds = [];
    _board = [];
    _arrivalQueue = [];

    // Load learner progress from localStorage
    var progress = {};
    try { progress = JSON.parse(localStorage.getItem('rdx-ed-progress') || '{}'); } catch(e) {}

    // Shuffle for variety — but balance categories so no single system dominates
    // Step 1: Group by category
    var catGroups = {};
    allCases.forEach(function(c) {
      var cat = c.category || 'other';
      if (!catGroups[cat]) catGroups[cat] = [];
      catGroups[cat].push(c);
    });
    // Shuffle within each category
    Object.keys(catGroups).forEach(function(cat) {
      catGroups[cat].sort(function() { return Math.random() - 0.5; });
    });

    // Step 2: Round-robin pick from categories to build a balanced board
    var initialCount = Math.min(allCases.length, 12 + Math.floor(Math.random() * 5));
    var maxPerCat = 3; // Cap any single category at 3 patients on initial board
    var catKeys = Object.keys(catGroups).sort(function() { return Math.random() - 0.5; });
    var picked = [];
    var catUsed = {};
    var round = 0;
    while (picked.length < initialCount && round < 10) {
      var addedThisRound = false;
      for (var ci = 0; ci < catKeys.length && picked.length < initialCount; ci++) {
        var cat = catKeys[ci];
        catUsed[cat] = catUsed[cat] || 0;
        if (catUsed[cat] < maxPerCat && catGroups[cat].length > 0) {
          picked.push(catGroups[cat].shift());
          catUsed[cat]++;
          addedThisRound = true;
        }
      }
      if (!addedThisRound) {
        // All categories at max — increase cap and continue
        maxPerCat++;
      }
      round++;
    }

    // Step 3: Remaining cases go to arrival queue
    var remaining = [];
    Object.keys(catGroups).forEach(function(cat) {
      remaining = remaining.concat(catGroups[cat]);
    });
    remaining.sort(function() { return Math.random() - 0.5; });

    for (var i = 0; i < picked.length; i++) {
      var c = picked[i];
      var prog = progress[c.id] || {};
      var boardEntry = {
        id: c.id,
        name: c.name,
        age: c.age,
        cc: c.cc,
        dx: c.dx,           // stored internally but NOT shown on board
        category: c.category,
        esi: c.esi || 3,
        vitals: c.vitals,
        bed: null,
        status: 'waiting',  // default — overridden by learner progress below
        arrivalTime: null,
        seen: false,
        dxConfirmed: prog.dxConfirmed || false,
        dispoSet: prog.dispoSet || false,
        dispoLabel: prog.dispoLabel || ''
      };

      // Derive status from learner progress only
      if (prog.dispoSet) {
        boardEntry.status = prog.dispoLabel === 'Admit' ? 'admit' : 'discharged';
        boardEntry.seen = true;
      } else if (prog.dxConfirmed) {
        boardEntry.status = 'results';
        boardEntry.seen = true;
      } else if (prog.opened) {
        boardEntry.status = 'active';
        boardEntry.seen = true;
      }
      // else stays 'waiting'

      boardEntry.bed = _assignBed(boardEntry.esi, _usedBeds);
      // Stagger arrival times over past 0-4 hours
      var minsAgo = Math.floor(Math.random() * 240);
      boardEntry.arrivalTime = new Date(Date.now() - minsAgo * 60000);
      _board.push(boardEntry);
    }

    // Build arrival queue from remaining cases
    for (var j = 0; j < remaining.length; j++) {
      var c2 = remaining[j];
      var prog2 = progress[c2.id] || {};
      _arrivalQueue.push({
        id: c2.id,
        name: c2.name,
        age: c2.age,
        cc: c2.cc,
        dx: c2.dx,
        category: c2.category,
        esi: c2.esi || 3,
        vitals: c2.vitals,
        bed: null,
        status: 'waiting',
        arrivalTime: null,
        seen: false,
        dxConfirmed: prog2.dxConfirmed || false,
        dispoSet: prog2.dispoSet || false,
        dispoLabel: prog2.dispoLabel || ''
      });
    }

    // Sort board
    _sortBoard();
    _shiftStart = new Date();
  }

  function _sortBoard() {
    _board.sort(function(a, b) {
      if (_sort === 'esi') return (a.esi - b.esi) || (_minutesAgo(b.arrivalTime) - _minutesAgo(a.arrivalTime));
      if (_sort === 'bed') return (a.bed || 'ZZZ').localeCompare(b.bed || 'ZZZ');
      if (_sort === 'time') return (a.arrivalTime - b.arrivalTime);
      if (_sort === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }

  function _filteredBoard() {
    return _board.filter(function(p) {
      // ESI / status filter
      if (_filter !== 'all') {
        if (_filter.indexOf('esi-') === 0) { if (p.esi !== parseInt(_filter.split('-')[1])) return false; }
        else if (_filter === 'dispo') { if (p.status !== 'dispo' && p.status !== 'admit' && p.status !== 'discharged') return false; }
        else { if (p.status !== _filter) return false; }
      }
      // Category filter
      if (_categoryFilter !== 'all' && (p.category || '').toLowerCase() !== _categoryFilter.toLowerCase()) return false;
      // Search
      if (_searchTerm) {
        var q = _searchTerm.toLowerCase();
        var hay = (p.name + ' ' + p.cc + ' ' + p.category + ' ' + p.age).toLowerCase();
        if (hay.indexOf(q) < 0) return false;
      }
      return true;
    });
  }

  // ═══════════════════════════════════════════════════════
  // SIMULATED ARRIVALS
  // ═══════════════════════════════════════════════════════
  function _startArrivals() {
    if (_simRunning) return;
    _simRunning = true;

    _arrivalTimer = setInterval(function() {
      if (_arrivalQueue.length === 0) return;

      var newPt = _arrivalQueue.shift();
      newPt.bed = _assignBed(newPt.esi, _usedBeds);
      newPt.arrivalTime = new Date();
      newPt.status = 'waiting';
      newPt.seen = false;
      _board.push(newPt);
      _sortBoard();

      // Flash notification
      _showArrival(newPt);
      _renderBoardContent();

    }, 45000 + Math.floor(Math.random() * 90000)); // Every 45-135 seconds

    // Clock updates
    _clockTimer = setInterval(function() {
      var el = document.getElementById('ed-clock');
      if (el) el.textContent = _formatTime(new Date());
      // Update wait times
      document.querySelectorAll('[data-arrival]').forEach(function(el) {
        var t = parseInt(el.getAttribute('data-arrival'));
        if (t) el.textContent = _waitTime(_minutesAgo(new Date(t)));
      });
    }, 30000);
  }

  function _showArrival(pt) {
    var esi = ESI[pt.esi];
    var bar = document.getElementById('ed-arrival-bar');
    if (!bar) return;
    bar.innerHTML = '<div class="ed-arrival-flash" style="border-left:4px solid ' + esi.color + '"><span class="ed-arrival-dot" style="background:' + esi.color + '"></span><strong>New Arrival:</strong> ' + _esc(pt.name) + ' (' + _esc(pt.age) + ') \u2014 ' + _esc(pt.cc) + ' <span class="ed-arrival-esi" style="background:' + esi.bg + ';color:' + esi.text + '">' + esi.label + '</span> \u2192 Bed ' + _esc(pt.bed) + '</div>';
    bar.style.display = 'block';
    setTimeout(function() {
      bar.style.display = 'none';
    }, 12000);
  }

  // ═══════════════════════════════════════════════════════
  // STATUS PROGRESSION (optional realism)
  // ═══════════════════════════════════════════════════════
  function _progressPatient(id) {
    var pt = _board.find(function(p) { return p.id === id; });
    if (!pt) return;
    var flow = ['waiting','triage','active','workup','results','dispo'];
    var idx = flow.indexOf(pt.status);
    if (idx >= 0 && idx < flow.length - 1) {
      pt.status = flow[idx + 1];
      if (pt.status !== 'waiting' && pt.status !== 'triage') pt.seen = true;
      _renderBoardContent();
    }
  }

  // ═══════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════
  function _renderBoardContent() {
    var el = document.getElementById('ed-board-body');
    if (!el) return;

    var patients = _filteredBoard();

    // Stats
    var counts = { total: _board.length, esi1: 0, esi2: 0, esi3: 0, esi4: 0, esi5: 0, waiting: 0, active: 0, dispo: 0 };
    _board.forEach(function(p) {
      counts['esi' + p.esi]++;
      if (p.status === 'waiting' || p.status === 'triage') counts.waiting++;
      else if (p.status === 'dispo' || p.status === 'admit' || p.status === 'discharged') counts.dispo++;
      else counts.active++;
    });

    var statsEl = document.getElementById('ed-stats');
    if (statsEl) {
      statsEl.innerHTML = '<div class="ed-stat"><span class="ed-stat-val">' + counts.total + '</span><span class="ed-stat-lbl">Total</span></div>' +
        '<div class="ed-stat ed-stat-esi1"><span class="ed-stat-val">' + counts.esi1 + '</span><span class="ed-stat-lbl">ESI 1</span></div>' +
        '<div class="ed-stat ed-stat-esi2"><span class="ed-stat-val">' + counts.esi2 + '</span><span class="ed-stat-lbl">ESI 2</span></div>' +
        '<div class="ed-stat ed-stat-esi3"><span class="ed-stat-val">' + counts.esi3 + '</span><span class="ed-stat-lbl">ESI 3</span></div>' +
        '<div class="ed-stat"><span class="ed-stat-val" style="color:#F59E0B">' + counts.waiting + '</span><span class="ed-stat-lbl">Waiting</span></div>' +
        '<div class="ed-stat"><span class="ed-stat-val" style="color:#3B82F6">' + counts.active + '</span><span class="ed-stat-lbl">Active</span></div>' +
        '<div class="ed-stat"><span class="ed-stat-val" style="color:#22C55E">' + counts.dispo + '</span><span class="ed-stat-lbl">Dispo</span></div>';
    }

    // Rows
    var html = '';
    if (patients.length === 0) {
      html = '<tr><td colspan="8" style="text-align:center;padding:40px;color:#64748B;font-size:13px">No patients match this filter.</td></tr>';
    } else {
      patients.forEach(function(p, idx) {
        var esi = ESI[p.esi] || ESI[3];
        var status = STATUS[p.status] || STATUS.waiting;
        var wait = p.arrivalTime ? _waitTime(_minutesAgo(p.arrivalTime)) : '\u2014';
        var isNew = p.arrivalTime && _minutesAgo(p.arrivalTime) < 5;

        // Vitals string
        var vStr = '';
        if (p.vitals) {
          var parts = [];
          if (p.vitals.HR) parts.push('HR ' + p.vitals.HR);
          if (p.vitals.BP) parts.push('BP ' + p.vitals.BP);
          if (p.vitals.SpO2) parts.push('O\u2082 ' + p.vitals.SpO2 + '%');
          if (p.vitals.Temp) parts.push('T ' + p.vitals.Temp);
          vStr = parts.join(' \u00B7 ');
        }

        html += '<tr class="ed-row' + (isNew ? ' ed-row-new' : '') + (p.esi === 1 ? ' ed-row-critical' : '') + '" data-id="' + p.id + '" onclick="EDTrackBoard.openChart(\'' + p.id + '\')" style="--esi-color:' + esi.color + '">';

        // ESI badge
        html += '<td class="ed-cell-esi"><span class="ed-esi-badge" style="background:' + esi.bg + ';color:' + esi.text + ';border:1px solid ' + esi.color + '40">' + esi.label.replace('ESI ', '') + '</span></td>';

        // Bed
        html += '<td class="ed-cell-bed"><span class="ed-bed">' + _esc(p.bed || '\u2014') + '</span></td>';

        // Patient name + age (never show dx or case ID)
        html += '<td class="ed-cell-patient"><div class="ed-pt-name">' + _esc(p.name) + '</div><div class="ed-pt-age">' + _esc(p.age) + '</div></td>';

        // Chief Complaint only — no category tag, no diagnosis hints
        html += '<td class="ed-cell-cc"><div class="ed-cc-text">' + _esc(p.cc) + '</div></td>';

        // Vitals
        html += '<td class="ed-cell-vitals"><span class="ed-vitals-text">' + _esc(vStr) + '</span></td>';

        // Status — learner-driven only + dispo dropdown
        // If dxConfirmed, show a green checkmark next to status
        var statusHtml = status.icon + ' ' + status.label;
        if (p.dxConfirmed && !p.dispoSet) {
          statusHtml = '\uD83D\uDCCB Dx Confirmed';
        }
        if (p.dispoSet) {
          statusHtml = (p.dispoLabel === 'Admit' ? '\uD83C\uDFE5' : '\u2192') + ' ' + _esc(p.dispoLabel);
        }
        html += '<td class="ed-cell-status"><div style="display:flex;flex-direction:column;gap:4px"><span class="ed-status-badge" style="background:' + status.bg + ';color:' + status.color + '">' + statusHtml + '</span>';
        // Dispo dropdown — show once chart has been opened (seen)
        if (p.seen && p.status !== 'discharged') {
          var curDispo = p.dispoLabel || '';
          html += '<select class="ed-dispo-select" onclick="event.stopPropagation()" onchange="EDTrackBoard.setDispo(\'' + p.id + '\',this.value);event.stopPropagation()" style="padding:2px 4px;border-radius:4px;border:1px solid #334155;background:#1E293B;color:#94A3B8;font-size:10px;font-family:inherit;cursor:pointer;width:100%">';
          html += '<option value=""' + (!curDispo ? ' selected' : '') + '>Set dispo\u2026</option>';
          html += '<option value="Admit"' + (curDispo === 'Admit' ? ' selected' : '') + '>\uD83C\uDFE5 Admit</option>';
          html += '<option value="Discharge"' + (curDispo === 'Discharge' ? ' selected' : '') + '>\u2192 Discharge</option>';
          html += '<option value="Observe"' + (curDispo === 'Observe' ? ' selected' : '') + '>\u23F3 Observe</option>';
          html += '<option value="Transfer"' + (curDispo === 'Transfer' ? ' selected' : '') + '>\uD83D\uDE91 Transfer</option>';
          html += '<option value="AMA"' + (curDispo === 'AMA' ? ' selected' : '') + '>\u26A0 AMA</option>';
          html += '</select>';
        }
        html += '</div></td>';

        // Wait time
        html += '<td class="ed-cell-wait"><span data-arrival="' + (p.arrivalTime ? p.arrivalTime.getTime() : '') + '">' + wait + '</span></td>';

        // Action
        html += '<td class="ed-cell-action"><button type="button" class="ed-open-btn" onclick="event.stopPropagation();EDTrackBoard.openChart(\'' + p.id + '\')">' + (p.seen ? 'Resume' : 'Open Chart') + '</button></td>';

        html += '</tr>';
      });
    }

    el.innerHTML = html;
  }

  // ═══════════════════════════════════════════════════════
  // PUBLIC API
  // ═══════════════════════════════════════════════════════
  window.EDTrackBoard = {

    render: function() {
      _buildBoard();

      var html = '';
      html += '<div id="ed-trackboard" class="ed-trackboard">';

      // ─── Header Bar ───
      html += '<div class="ed-header">';
      html += '<div class="ed-header-left">';
      html += '<span class="ed-header-icon">\uD83D\uDEA8</span>';
      html += '<div>';
      html += '<div class="ed-header-title">Emergency Department</div>';
      html += '<div class="ed-header-sub">Track Board \u2022 <span id="ed-clock">' + _formatTime(new Date()) + '</span></div>';
      html += '</div>';
      html += '</div>';
      html += '<div class="ed-header-right">';
      html += '<div id="ed-stats" class="ed-stats"></div>';
      html += '</div>';
      html += '</div>';

      // ─── Arrival notification bar ───
      html += '<div id="ed-arrival-bar" class="ed-arrival-bar" style="display:none"></div>';

      // ─── Filter / Sort bar ───
      html += '<div class="ed-controls">';
      html += '<div class="ed-filters">';
      html += '<button type="button" class="ed-filter-btn ed-filter-active" data-f="all" onclick="EDTrackBoard.filter(\'all\',this)">All</button>';
      html += '<button type="button" class="ed-filter-btn ed-filter-esi1" data-f="esi-1" onclick="EDTrackBoard.filter(\'esi-1\',this)">ESI 1</button>';
      html += '<button type="button" class="ed-filter-btn ed-filter-esi2" data-f="esi-2" onclick="EDTrackBoard.filter(\'esi-2\',this)">ESI 2</button>';
      html += '<button type="button" class="ed-filter-btn ed-filter-esi3" data-f="esi-3" onclick="EDTrackBoard.filter(\'esi-3\',this)">ESI 3</button>';
      html += '<span class="ed-filter-sep"></span>';
      html += '<button type="button" class="ed-filter-btn" data-f="waiting" onclick="EDTrackBoard.filter(\'waiting\',this)">\u23F3 Waiting</button>';
      html += '<button type="button" class="ed-filter-btn" data-f="active" onclick="EDTrackBoard.filter(\'active\',this)">\uD83D\uDE91 Active</button>';
      html += '<button type="button" class="ed-filter-btn" data-f="dispo" onclick="EDTrackBoard.filter(\'dispo\',this)">\u2705 Dispo</button>';
      html += '</div>';
      html += '<div class="ed-sort">';
      // Search bar
      html += '<input type="text" id="ed-search" placeholder="\uD83D\uDD0D Search\u2026" oninput="EDTrackBoard.search(this.value)" style="padding:4px 8px;border-radius:6px;border:1px solid #334155;background:#1E293B;color:#E2E8F0;font-size:11px;font-family:inherit;width:120px;outline:none">';
      // Category filter
      html += '<select id="ed-cat-filter" onchange="EDTrackBoard.filterCategory(this.value)" style="padding:4px 8px;border-radius:6px;border:1px solid #334155;background:#1E293B;color:#E2E8F0;font-size:11px;font-family:inherit;cursor:pointer">';
      html += '<option value="all">All Systems</option>';
      var cats = {};
      _board.forEach(function(p) { if (p.category) cats[p.category] = true; });
      Object.keys(cats).sort().forEach(function(c) {
        html += '<option value="' + c + '">' + _esc(c.charAt(0).toUpperCase() + c.slice(1)) + '</option>';
      });
      html += '</select>';
      html += '<label class="ed-sort-label">Sort:</label>';
      html += '<select class="ed-sort-select" onchange="EDTrackBoard.sort(this.value)">';
      html += '<option value="esi">Acuity</option><option value="bed">Bed</option><option value="time">Arrival</option><option value="name">Name</option>';
      html += '</select>';
      html += '</div>';
      html += '</div>';

      // ─── Table ───
      html += '<div class="ed-table-wrap">';
      html += '<table class="ed-table">';
      html += '<thead><tr>';
      html += '<th class="ed-th" style="width:52px">ESI</th>';
      html += '<th class="ed-th" style="width:52px">Bed</th>';
      html += '<th class="ed-th" style="width:140px">Patient</th>';
      html += '<th class="ed-th">Chief Complaint</th>';
      html += '<th class="ed-th" style="width:180px">Vitals</th>';
      html += '<th class="ed-th" style="width:140px">Status / Dispo</th>';
      html += '<th class="ed-th" style="width:60px">Wait</th>';
      html += '<th class="ed-th" style="width:80px"></th>';
      html += '</tr></thead>';
      html += '<tbody id="ed-board-body"></tbody>';
      html += '</table>';
      html += '</div>';

      html += '</div>';

      // ─── STYLES ───
      html += '<style>';
      html += '.ed-trackboard{background:#0F172A;border-radius:14px;overflow:hidden;border:1px solid #1E293B;font-family:"IBM Plex Sans",-apple-system,sans-serif}';
      html += '.ed-header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;background:linear-gradient(135deg,#0F172A,#1E293B);border-bottom:1px solid #1E293B;flex-wrap:wrap;gap:12px}';
      html += '.ed-header-left{display:flex;align-items:center;gap:12px}';
      html += '.ed-header-icon{font-size:24px}';
      html += '.ed-header-title{font-size:17px;font-weight:800;color:#F1F5F9;letter-spacing:-.3px}';
      html += '.ed-header-sub{font-size:11px;color:#64748B;font-family:"IBM Plex Mono",monospace}';
      html += '.ed-stats{display:flex;gap:4px;flex-wrap:wrap}';
      html += '.ed-stat{padding:4px 10px;border-radius:6px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);text-align:center;min-width:48px}';
      html += '.ed-stat-val{display:block;font-family:"IBM Plex Mono",monospace;font-weight:800;font-size:16px;color:#F1F5F9;line-height:1.2}';
      html += '.ed-stat-lbl{font-size:9px;color:#64748B;text-transform:uppercase;letter-spacing:.5px;font-weight:600}';
      html += '.ed-stat-esi1 .ed-stat-val{color:#DC2626}.ed-stat-esi2 .ed-stat-val{color:#F97316}.ed-stat-esi3 .ed-stat-val{color:#EAB308}';
      html += '.ed-arrival-bar{padding:0 20px 12px}';
      html += '.ed-arrival-flash{display:flex;align-items:center;gap:8px;padding:10px 16px;background:rgba(245,158,11,.08);border-radius:8px;font-size:12px;color:#FDE68A;animation:edFlash .8s ease-out}';
      html += '.ed-arrival-dot{width:8px;height:8px;border-radius:50%;animation:edPulse 1.5s infinite}';
      html += '.ed-arrival-esi{padding:2px 8px;border-radius:4px;font-size:10px;font-weight:700;margin-left:4px}';
      html += '@keyframes edFlash{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}';
      html += '@keyframes edPulse{0%,100%{opacity:1}50%{opacity:.3}}';
      html += '.ed-controls{display:flex;align-items:center;justify-content:space-between;padding:10px 20px;background:#0F172A;border-bottom:1px solid #1E293B;gap:10px;flex-wrap:wrap}';
      html += '.ed-filters{display:flex;gap:4px;flex-wrap:wrap}';
      html += '.ed-filter-btn{padding:5px 12px;border-radius:6px;border:1px solid #334155;background:transparent;color:#94A3B8;font-size:11px;font-weight:600;cursor:pointer;transition:all .15s;font-family:inherit}';
      html += '.ed-filter-btn:hover{background:rgba(255,255,255,.05);color:#E2E8F0}';
      html += '.ed-filter-btn.ed-filter-active{background:rgba(40,116,166,.2);color:#5DADE2;border-color:#2874A6}';
      html += '.ed-filter-esi1.ed-filter-active{background:rgba(220,38,38,.15);color:#FCA5A5;border-color:#DC2626}';
      html += '.ed-filter-esi2.ed-filter-active{background:rgba(249,115,22,.15);color:#FDBA74;border-color:#F97316}';
      html += '.ed-filter-esi3.ed-filter-active{background:rgba(234,179,8,.15);color:#FDE047;border-color:#EAB308}';
      html += '.ed-filter-sep{width:1px;height:20px;background:#334155;margin:0 4px}';
      html += '.ed-sort{display:flex;align-items:center;gap:6px}';
      html += '.ed-sort-label{font-size:11px;color:#64748B;font-weight:600}';
      html += '.ed-sort-select{padding:4px 8px;border-radius:6px;border:1px solid #334155;background:#1E293B;color:#E2E8F0;font-size:11px;font-family:inherit;cursor:pointer}';
      html += '.ed-table-wrap{overflow-x:auto}';
      html += '.ed-table{width:100%;border-collapse:collapse}';
      html += '.ed-th{padding:8px 12px;text-align:left;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#475569;border-bottom:1px solid #1E293B;background:#0B1120;position:sticky;top:0}';
      html += '.ed-row{border-bottom:1px solid #1E293B;cursor:pointer;transition:background .15s}';
      html += '.ed-row:hover{background:rgba(40,116,166,.08)}';
      html += '.ed-row td{padding:10px 12px;vertical-align:middle}';
      html += '.ed-row-critical{background:rgba(220,38,38,.04);animation:edCritPulse 3s infinite}';
      html += '@keyframes edCritPulse{0%,100%{background:rgba(220,38,38,.04)}50%{background:rgba(220,38,38,.08)}}';
      html += '.ed-row-new{animation:edRowIn .5s ease-out}';
      html += '@keyframes edRowIn{from{opacity:0;background:rgba(245,158,11,.15)}to{opacity:1}}';
      html += '.ed-esi-badge{display:inline-flex;align-items:center;justify-content:center;width:28px;height:22px;border-radius:5px;font-size:11px;font-weight:800;font-family:"IBM Plex Mono",monospace}';
      html += '.ed-bed{font-family:"IBM Plex Mono",monospace;font-size:13px;font-weight:700;color:#E2E8F0;background:#1E293B;padding:3px 8px;border-radius:5px;display:inline-block}';
      html += '.ed-pt-name{font-size:13px;font-weight:700;color:#F1F5F9;white-space:nowrap}';
      html += '.ed-pt-age{font-size:11px;color:#64748B;font-family:"IBM Plex Mono",monospace}';
      html += '.ed-cc-text{font-size:12px;color:#CBD5E1;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}';
      html += '.ed-cat-tag{display:inline-block;margin-top:3px;padding:1px 6px;border-radius:4px;font-size:9px;font-weight:600;background:rgba(255,255,255,.06);color:#94A3B8;text-transform:uppercase;letter-spacing:.3px}';
      html += '.ed-vitals-text{font-family:"IBM Plex Mono",monospace;font-size:11px;color:#94A3B8;white-space:nowrap}';
      html += '.ed-status-badge{display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:6px;font-size:11px;font-weight:600;white-space:nowrap}';
      html += '.ed-cell-wait{font-family:"IBM Plex Mono",monospace;font-size:12px;color:#64748B;text-align:center}';
      html += '.ed-open-btn{padding:5px 12px;border-radius:6px;border:1px solid #334155;background:transparent;color:#5DADE2;font-size:11px;font-weight:600;cursor:pointer;transition:all .15s;font-family:inherit;white-space:nowrap}';
      html += '.ed-open-btn:hover{background:rgba(40,116,166,.15);border-color:#2874A6}';
      html += '.ed-dispo-select{appearance:auto;-webkit-appearance:auto}';
      html += '.ed-dispo-select:focus{border-color:#5DADE2;outline:none}';
      html += '@media(max-width:900px){.ed-cell-vitals,.ed-cell-wait,.ed-cell-action{display:none}.ed-header{padding:12px 14px}.ed-controls{padding:8px 14px}.ed-row td{padding:8px 10px}}';
      html += '@media(max-width:600px){.ed-cell-status{display:none}.ed-stats{gap:2px}.ed-stat{min-width:38px;padding:3px 6px}.ed-stat-val{font-size:14px}}';
      html += '</style>';

      return html;
    },

    startSimulation: function() {
      _renderBoardContent();
      _startArrivals();
    },

    cleanup: function() {
      if (_arrivalTimer) { clearInterval(_arrivalTimer); _arrivalTimer = null; }
      if (_clockTimer) { clearInterval(_clockTimer); _clockTimer = null; }
      _simRunning = false;
    },

    filter: function(f, btn) {
      _filter = f;
      document.querySelectorAll('.ed-filter-btn').forEach(function(b) { b.classList.remove('ed-filter-active'); });
      if (btn) btn.classList.add('ed-filter-active');
      _renderBoardContent();
    },

    search: function(term) {
      _searchTerm = (term || '').trim();
      _renderBoardContent();
    },

    filterCategory: function(cat) {
      _categoryFilter = cat || 'all';
      _renderBoardContent();
    },

    sort: function(s) {
      _sort = s;
      _sortBoard();
      _renderBoardContent();
    },

    openChart: function(caseId) {
      // Mark as opened in localStorage
      _saveProgress(caseId, { opened: true });
      // Update local board state
      var pt = _board.find(function(p) { return p.id === caseId; });
      if (pt && !pt.seen) {
        pt.seen = true;
        pt.status = 'active';
      }
      // Navigate to chart
      window.location.href = 'virtual-emr.html?setting=ed&case=' + caseId;
    },

    // Called by the EMR when learner confirms a diagnosis
    confirmDx: function(caseId) {
      _saveProgress(caseId, { dxConfirmed: true });
      var pt = _board.find(function(p) { return p.id === caseId; });
      if (pt) {
        pt.dxConfirmed = true;
        pt.status = 'results';
        _renderBoardContent();
      }
    },

    // Called by the EMR or the dispo dropdown when learner sets disposition
    setDispo: function(caseId, dispoLabel) {
      if (!dispoLabel) {
        // Reset dispo
        _saveProgress(caseId, { dispoSet: false, dispoLabel: '' });
        var pt0 = _board.find(function(p) { return p.id === caseId; });
        if (pt0) {
          pt0.dispoSet = false;
          pt0.dispoLabel = '';
          pt0.status = pt0.dxConfirmed ? 'results' : 'active';
          _renderBoardContent();
        }
        return;
      }
      _saveProgress(caseId, { dispoSet: true, dispoLabel: dispoLabel });
      var pt = _board.find(function(p) { return p.id === caseId; });
      if (pt) {
        pt.dispoSet = true;
        pt.dispoLabel = dispoLabel;
        pt.status = dispoLabel === 'Admit' ? 'admit' : dispoLabel === 'Observe' ? 'workup' : 'discharged';
        _renderBoardContent();
      }
    },

    // Reset all learner progress (for new shift)
    resetShift: function() {
      try { localStorage.removeItem('rdx-ed-progress'); } catch(e) {}
      _buildBoard();
      _renderBoardContent();
    },

    getBoard: function() {
      return _board;
    }
  };

  // ═══════════════════════════════════════════════════════
  // PROGRESS PERSISTENCE
  // ═══════════════════════════════════════════════════════
  function _saveProgress(caseId, updates) {
    try {
      var progress = JSON.parse(localStorage.getItem('rdx-ed-progress') || '{}');
      if (!progress[caseId]) progress[caseId] = {};
      Object.keys(updates).forEach(function(k) { progress[caseId][k] = updates[k]; });
      localStorage.setItem('rdx-ed-progress', JSON.stringify(progress));
    } catch(e) {}
  }

})();
