// ═══════════════════════════════════════════════════════════════
// DAY EVOLUTION ENGINE
// Generates realistic Day 2/3/4 clinical data (vitals, labs,
// overnight events, nursing notes) based on case diagnosis
// category and clinical trajectory (improving/stable/worsening).
// Works with DAY_PROGRESSION and the Virtual EMR.
// ═══════════════════════════════════════════════════════════════

window.DAY_EVOLUTION = {

  // ─── TRAJECTORY DEFINITIONS BY CATEGORY ───
  // Each category defines how vitals/labs trend across days
  trajectories: {

    // ── CARDIOVASCULAR ──
    cardiovascular: {
      improving: {
        vitalsDelta: { hr: [-12, -8], sbp: [-10, -5], rr: [-2, -1], temp: [-0.4, 0], spo2: [1, 2] },
        labsTrend: { troponin: "downtrending", bnp: "improving", lactate: "normalizing" },
        overnightEvents: [
          "No acute events overnight. Telemetry: NSR rate 68-82, no arrhythmias.",
          "One episode of chest discomfort at 0300 — resolved with sublingual NTG. No ECG changes.",
          "Diuresed 1.8L overnight. Weight down 2 kg from admission."
        ],
        nursingNotes: [
          "Patient resting comfortably. Ambulated to bathroom independently.",
          "Tolerating cardiac diet. Denies chest pain, dyspnea at rest.",
          "Voiding well. No peripheral edema increase."
        ]
      },
      worsening: {
        vitalsDelta: { hr: [8, 15], sbp: [-15, -8], rr: [2, 4], temp: [0.2, 0.8], spo2: [-3, -1] },
        labsTrend: { troponin: "rising", bnp: "worsening", lactate: "rising" },
        overnightEvents: [
          "RRT called at 0215 for hypotension (BP 82/48). 500mL NS bolus given, pressor evaluation.",
          "New-onset atrial fibrillation with RVR at 0400 — rate to 142. Amiodarone bolus given.",
          "Increasing O2 requirements overnight: NC 4L → 6L → High-flow 40L/60%. Pulmonary consulted."
        ],
        nursingNotes: [
          "Patient appears more fatigued. New crackles bilateral bases.",
          "Refusing meals. Complaining of increasing dyspnea.",
          "Urine output declining — 15 mL/hr x 4 hours."
        ]
      }
    },

    // ── PULMONARY ──
    pulmonary: {
      improving: {
        vitalsDelta: { hr: [-8, -5], sbp: [0, 5], rr: [-4, -2], temp: [-0.6, -0.2], spo2: [2, 4] },
        labsTrend: { wbc: "decreasing", lactate: "normalizing", pco2: "normalizing" },
        overnightEvents: [
          "Weaned from BiPAP to high-flow NC at 0300. Tolerating well, SpO2 93-95%.",
          "Sputum production decreasing. Color changing from green to white.",
          "Nebulizer frequency decreased from q2h to q4h."
        ],
        nursingNotes: [
          "Speaking in full sentences. Ambulated 50 feet with walker and O2.",
          "Appetite improving. Ate 60% of breakfast.",
          "Sleeping flat for first time — no orthopnea."
        ]
      },
      worsening: {
        vitalsDelta: { hr: [5, 12], sbp: [-8, -3], rr: [4, 8], temp: [0.4, 1.2], spo2: [-4, -2] },
        labsTrend: { wbc: "rising", lactate: "rising", pco2: "rising" },
        overnightEvents: [
          "Desaturation to 82% at 0130 despite BiPAP. Increased FiO2 to 80%.",
          "Repeat ABG: pH 7.22, pCO2 78 — worsening hypercapnia. Intubation discussed with family.",
          "New infiltrate on portable CXR — possible ARDS or hospital-acquired PNA."
        ],
        nursingNotes: [
          "Patient increasingly agitated, pulling at BiPAP mask.",
          "Unable to speak in full sentences. Accessory muscle use.",
          "Not tolerating PO — NG tube placed for medications."
        ]
      }
    },

    // ── NEUROLOGIC ──
    neurologic: {
      improving: {
        vitalsDelta: { hr: [-5, 0], sbp: [-8, -3], rr: [0, 0], temp: [-0.3, 0], spo2: [0, 1] },
        labsTrend: { glucose: "normalizing", sodium: "normalizing" },
        overnightEvents: [
          "NIHSS improved from 16 to 8 post-tPA. Right arm strength 3/5 (was 0/5).",
          "Passed bedside swallow evaluation — cleared for thickened liquids.",
          "No seizure activity on continuous EEG monitoring."
        ],
        nursingNotes: [
          "More alert this morning. Following commands consistently bilaterally.",
          "Naming objects but still word-finding difficulty for complex items.",
          "PT evaluated — transfers with moderate assist."
        ]
      },
      worsening: {
        vitalsDelta: { hr: [-8, -2], sbp: [10, 20], rr: [-2, 0], temp: [0.2, 0.6], spo2: [-2, -1] },
        labsTrend: { glucose: "variable", sodium: "variable" },
        overnightEvents: [
          "NIHSS worsened from 16 to 22 at 0300. New hemorrhagic conversion on STAT CT.",
          "GCS declined from 11 to 8. Intubated for airway protection at 0445.",
          "New seizure activity — levetiracetam loaded, continuous EEG initiated."
        ],
        nursingNotes: [
          "Less responsive than yesterday. Not following commands on right side.",
          "Left gaze preference more pronounced.",
          "Neurosurgery consulted for possible decompressive craniectomy."
        ]
      }
    },

    // ── INFECTIOUS / SEPSIS ──
    infectious: {
      improving: {
        vitalsDelta: { hr: [-10, -5], sbp: [8, 15], rr: [-2, -1], temp: [-1.0, -0.4], spo2: [1, 2] },
        labsTrend: { wbc: "decreasing", lactate: "normalizing", procalcitonin: "decreasing", creatinine: "improving" },
        overnightEvents: [
          "Fever curve trending down — Tmax 99.8°F (was 103.2°F). Pressors weaned off at 0200.",
          "Blood cultures from admission: 2/2 bottles growing gram-negative rods (ID pending).",
          "Urine output improving: 45 mL/hr (was 12 mL/hr on admission)."
        ],
        nursingNotes: [
          "Patient more alert. Following commands. Answering questions appropriately.",
          "Tolerating clear liquids. No nausea.",
          "Peripheral perfusion improved — extremities warm, cap refill < 2 sec."
        ]
      },
      worsening: {
        vitalsDelta: { hr: [5, 12], sbp: [-12, -5], rr: [2, 5], temp: [0.5, 1.5], spo2: [-3, -1] },
        labsTrend: { wbc: "rising", lactate: "rising", procalcitonin: "rising", creatinine: "worsening" },
        overnightEvents: [
          "Required norepinephrine uptitration to 0.15 mcg/kg/min (was 0.05). Added vasopressin 0.04 U/min.",
          "Repeat blood cultures drawn. Broadened antibiotics to meropenem + vancomycin.",
          "Anuric x 6 hours. Nephrology consulted for possible CRRT."
        ],
        nursingNotes: [
          "Patient increasingly confused, agitated. Required soft restraints.",
          "Skin mottled. New petechiae noted on trunk.",
          "High ventilator requirements — FiO2 70%, PEEP 12."
        ]
      }
    },

    // ── GASTROINTESTINAL ──
    gastrointestinal: {
      improving: {
        vitalsDelta: { hr: [-8, -4], sbp: [5, 10], rr: [-1, 0], temp: [-0.5, -0.1], spo2: [0, 1] },
        labsTrend: { wbc: "decreasing", lipase: "decreasing", lactate: "normalizing" },
        overnightEvents: [
          "Pain controlled with PCA — using 2-3 doses/hr (was 6/hr). Requesting PO pain meds.",
          "Passed flatus at 0500. Bowel sounds returning in all 4 quadrants.",
          "Diet advanced to clears — tolerating well. No nausea or vomiting."
        ],
        nursingNotes: [
          "Ambulated hallway x 2 with assistance.",
          "Abdominal exam: soft, mildly tender, improving from yesterday.",
          "Drain output decreasing (if applicable)."
        ]
      },
      worsening: {
        vitalsDelta: { hr: [5, 10], sbp: [-10, -5], rr: [1, 3], temp: [0.5, 1.2], spo2: [-1, 0] },
        labsTrend: { wbc: "rising", lipase: "rising", lactate: "rising" },
        overnightEvents: [
          "New bilious emesis x 3 overnight. NG tube placed — 800 mL output.",
          "Abdominal distension increasing. KUB shows dilated loops — possible ileus vs obstruction.",
          "Surgical team re-evaluated — possible return to OR."
        ],
        nursingNotes: [
          "Patient in significant distress. Pain 9/10 despite IV morphine.",
          "Abdomen rigid. Surgery at bedside.",
          "NPO strictly maintained. TPN discussed."
        ]
      }
    },

    // Default for categories not specifically defined
    _default: {
      improving: {
        vitalsDelta: { hr: [-8, -4], sbp: [3, 8], rr: [-2, -1], temp: [-0.4, 0], spo2: [1, 2] },
        labsTrend: { wbc: "decreasing", lactate: "normalizing" },
        overnightEvents: [
          "Stable overnight. No acute events. Vitals within normal limits.",
          "Pain well controlled. Slept well.",
          "Ambulated to bathroom independently."
        ],
        nursingNotes: [
          "Patient resting comfortably. No new complaints.",
          "Tolerating regular diet.",
          "Voiding without difficulty."
        ]
      },
      worsening: {
        vitalsDelta: { hr: [5, 10], sbp: [-10, -5], rr: [2, 4], temp: [0.3, 0.8], spo2: [-2, -1] },
        labsTrend: { wbc: "rising", lactate: "rising" },
        overnightEvents: [
          "RRT called overnight for clinical deterioration.",
          "New symptoms developed — see updated assessment.",
          "Increased monitoring frequency to q2h vitals."
        ],
        nursingNotes: [
          "Patient appears more ill than yesterday.",
          "Not tolerating PO. Fatigued.",
          "Family at bedside — updated by team."
        ]
      }
    }
  },

  // ─── GENERATE DAY-SPECIFIC CLINICAL DATA ───
  // Returns evolved vitals, labs, overnight events, and nursing notes
  // based on the case's category, trajectory, and current day

  generateDayData: function(caseData, day, trajectory) {
    if (!caseData || day <= 1) return null;
    trajectory = trajectory || "improving"; // Default to improving

    var category = (caseData.meta && caseData.meta.category) || "_default";
    var catTrajectories = this.trajectories[category] || this.trajectories._default;
    var traj = catTrajectories[trajectory] || catTrajectories.improving;
    if (!traj) return null;

    // Calculate day multiplier (Day 2 = 1x, Day 3 = 1.5-2x effect)
    var dayMult = 1 + (day - 2) * 0.5;

    // Evolve vitals from admission
    var admissionVitals = caseData.vitals && caseData.vitals[0];
    if (!admissionVitals) return null;

    var evolvedVitals = this._evolveVitals(admissionVitals, traj.vitalsDelta, dayMult, day);

    // Pick overnight event and nursing note (rotate by day)
    var eventIdx = (day - 2) % traj.overnightEvents.length;
    var noteIdx = (day - 2) % traj.nursingNotes.length;

    return {
      day: day,
      trajectory: trajectory,
      vitals: evolvedVitals,
      overnightEvents: traj.overnightEvents[eventIdx],
      nursingNotes: traj.nursingNotes[noteIdx],
      labsTrend: traj.labsTrend,
      overnightSummary: this._buildOvernightSummary(traj, day, trajectory)
    };
  },

  // ─── EVOLVE VITALS ───
  _evolveVitals: function(baseline, deltas, mult, day) {
    var bp = baseline.bp || "120/80";
    var parts = bp.split("/");
    var sbp = parseInt(parts[0]) || 120;
    var dbp = parseInt(parts[1]) || 80;

    function randRange(arr) {
      if (!arr || arr.length < 2) return 0;
      return arr[0] + Math.random() * (arr[1] - arr[0]);
    }

    var newSbp = Math.round(sbp + randRange(deltas.sbp || [0,0]) * mult);
    var newDbp = Math.round(dbp + randRange(deltas.sbp || [0,0]) * 0.6 * mult);
    var newHr = Math.round((baseline.hr || 80) + randRange(deltas.hr || [0,0]) * mult);
    var newRr = Math.round((baseline.rr || 16) + randRange(deltas.rr || [0,0]) * mult);
    var newSpo2 = Math.min(100, Math.round((parseInt(baseline.spo2) || 97) + randRange(deltas.spo2 || [0,0]) * mult));

    // Parse temp
    var tempStr = baseline.temp || "98.6°F";
    var tempVal = parseFloat(tempStr) || 98.6;
    var newTemp = (tempVal + randRange(deltas.temp || [0,0]) * mult).toFixed(1);

    // Date string for the evolved day
    var dateStr = this._dayDate(day);

    return {
      date: dateStr,
      bp: newSbp + "/" + newDbp,
      hr: Math.max(50, newHr),
      rr: Math.max(10, newRr),
      temp: newTemp + "°F",
      spo2: Math.max(80, newSpo2) + "%",
      wt: baseline.wt || "170 lbs",
      ht: baseline.ht || "5'9\"",
      bmi: baseline.bmi || 25,
      setting: "Inpatient — Day " + day
    };
  },

  // ─── BUILD OVERNIGHT SUMMARY ───
  _buildOvernightSummary: function(traj, day, trajectory) {
    var summary = "OVERNIGHT SUMMARY (Hospital Day " + day + ")\n\n";
    summary += "Trajectory: " + trajectory.charAt(0).toUpperCase() + trajectory.slice(1) + "\n\n";
    var eventIdx = (day - 2) % traj.overnightEvents.length;
    summary += "Events: " + traj.overnightEvents[eventIdx] + "\n\n";
    summary += "Labs Trend:\n";
    for (var key in traj.labsTrend) {
      summary += "  • " + key + ": " + traj.labsTrend[key] + "\n";
    }
    return summary;
  },

  // ─── DATE HELPER ───
  _dayDate: function(day) {
    // Returns date string offset from 02/26/2026
    var base = new Date(2026, 1, 26); // Feb 26
    base.setDate(base.getDate() + (day - 1));
    return (base.getMonth() + 1).toString().padStart(2, "0") + "/" +
           base.getDate().toString().padStart(2, "0") + "/" +
           base.getFullYear();
  },

  // ─── GET EVOLVED LAB VALUES ───
  // Returns lab deltas for common tests based on trajectory
  getEvolvedLabs: function(baselineLabs, category, trajectory, day) {
    if (!baselineLabs || !baselineLabs.groups) return null;
    var mult = 1 + (day - 2) * 0.4;
    var direction = trajectory === "improving" ? -1 : 1;

    // Deep clone the lab structure
    var evolved = JSON.parse(JSON.stringify(baselineLabs));
    evolved.date = this._dayDate(day);
    evolved.accession = "LAB-2026-HD" + day;

    evolved.groups.forEach(function(group) {
      group.results.forEach(function(result) {
        var val = parseFloat(result.value);
        if (isNaN(val)) return; // Skip non-numeric

        // Determine how much to shift based on whether it was abnormal
        var range = result.range || "";
        var rangeParts = range.split("-");
        var lo = parseFloat(rangeParts[0]);
        var hi = parseFloat(rangeParts[1]);
        if (isNaN(lo) || isNaN(hi)) return;

        var mid = (lo + hi) / 2;
        var isAbnormal = val < lo || val > hi;

        if (isAbnormal) {
          // Move toward normal if improving, away if worsening
          var delta = (mid - val) * 0.25 * mult * (trajectory === "improving" ? 1 : -0.5);
          var newVal = val + delta;
          result.value = newVal.toFixed(result.value.includes(".") ? 1 : 0);

          // Update flag
          var nv = parseFloat(result.value);
          if (nv >= lo && nv <= hi) result.flag = "";
          else if (nv < lo) result.flag = "L";
          else result.flag = "H";
        }
      });
    });

    return evolved;
  }
};
