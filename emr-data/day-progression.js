// ═══════════════════════════════════════════════════════════════
// DAY PROGRESSION ENGINE
// Manages hospital day progression for inpatient/ICU settings
// Day 1 = Admission, Day 2+ = Progress, Final = Discharge
// ═══════════════════════════════════════════════════════════════

window.DAY_PROGRESSION = {

  // Day-specific clinical context overlays
  dayContexts: {
    1: {
      label: "Admission Day",
      icon: "📥",
      noteType: "admission",
      focus: "Initial assessment, admission orders, overnight anticipation",
      coachPrompt: "The learner just admitted this patient from the ED. Focus on: problem list, admission orders, overnight contingencies. Ask them to present their admission assessment.",
      tasks: [
        "Review ED handoff and chart",
        "Write admission H&P",
        "Place admission orders",
        "Anticipate overnight issues",
        "Confirm code status and allergies"
      ]
    },
    2: {
      label: "Hospital Day 2",
      icon: "📋",
      noteType: "progress",
      focus: "Overnight events, reassessment, plan adjustment",
      coachPrompt: "This is hospital day 2. The learner should focus on: what happened overnight, are they better/worse/same, any new data to incorporate, and updated plan. Ask about overnight events first.",
      tasks: [
        "Review overnight events and nursing notes",
        "Check new lab/imaging results",
        "Reassess: better, worse, or same?",
        "Write daily progress note (SOAP)",
        "Adjust orders as needed",
        "Assess discharge readiness"
      ],
      clinicalEvolution: {
        improving: {
          label: "Improving",
          description: "Patient responding to treatment. Clinical markers trending in right direction.",
          vitalsTrend: "normalizing",
          labsTrend: "improving"
        },
        stable: {
          label: "Stable",
          description: "No significant change. Monitoring continues.",
          vitalsTrend: "unchanged",
          labsTrend: "stable"
        },
        worsening: {
          label: "Worsening",
          description: "Clinical deterioration. May need escalation of care.",
          vitalsTrend: "deteriorating",
          labsTrend: "worsening"
        }
      }
    },
    3: {
      label: "Hospital Day 3",
      icon: "📊",
      noteType: "progress",
      focus: "Trending data, discharge planning, transitions of care",
      coachPrompt: "Hospital day 3. Push the learner on discharge planning: What criteria must be met? What follow-up is needed? What will the discharge medication list look like? Are there social barriers to discharge?",
      tasks: [
        "Trend all labs and vitals over 3 days",
        "Assess discharge criteria",
        "Begin discharge planning",
        "Medication reconciliation for discharge",
        "Schedule follow-up appointments",
        "Patient education on warning signs"
      ]
    },
    4: {
      label: "Discharge Day",
      icon: "🏠",
      noteType: "discharge",
      focus: "Discharge summary, medication reconciliation, transitions of care",
      coachPrompt: "Discharge day. The learner should demonstrate mastery of transitions of care. Ask about: discharge medication list vs admission list, follow-up plan, patient education, readmission risk factors.",
      tasks: [
        "Write discharge summary",
        "Complete medication reconciliation",
        "Finalize follow-up plan",
        "Provide patient education materials",
        "Arrange transportation if needed",
        "Hand off to outpatient provider"
      ]
    }
  },

  // Note template overrides by day
  noteTemplates: {
    admission: [
      {id:"cc",label:"CHIEF COMPLAINT",hint:"Reason for admission per ED handoff",size:""},
      {id:"hpi",label:"HISTORY OF PRESENT ILLNESS",hint:"Synthesize ED workup + your own assessment. OLDCARTS.",size:"xlarge"},
      {id:"pmh",label:"PAST MEDICAL HISTORY",hint:"Active diagnoses, surgeries, hospitalizations",size:""},
      {id:"psh",label:"PAST SURGICAL HISTORY",hint:"Prior surgeries with dates",size:""},
      {id:"meds",label:"HOME MEDICATIONS",hint:"Pre-admission medication list — verify with pharmacy/family",size:"large"},
      {id:"allergies",label:"ALLERGIES",hint:"Drug/food/environmental + reaction type",size:""},
      {id:"fhx",label:"FAMILY HISTORY",hint:"Pertinent to current admission",size:""},
      {id:"shx",label:"SOCIAL HISTORY",hint:"Living situation, support, substance use, code status discussion",size:""},
      {id:"ros",label:"REVIEW OF SYSTEMS",hint:"Constitutional through Psych — pertinent positives and negatives",size:"large"},
      {id:"pe",label:"PHYSICAL EXAMINATION",hint:"Complete admission exam — will be baseline for comparison",size:"xlarge"},
      {id:"assess",label:"ASSESSMENT & PROBLEM LIST",hint:"Numbered problem list with clinical reasoning for each",size:"large"},
      {id:"plan",label:"PLAN BY PROBLEM",hint:"Evidence-based plan for each problem. Include: diet, activity, DVT prophylaxis, code status.",size:"large"},
      {id:"overnight",label:"OVERNIGHT ANTICIPATORY GUIDANCE",hint:"What could go wrong at 3 AM? Contingency orders. When to call.",size:"large"},
      {id:"dispo",label:"ANTICIPATED DISPOSITION",hint:"Expected LOS, discharge criteria, barriers to discharge",size:""}
    ],
    progress: [
      {id:"events",label:"OVERNIGHT EVENTS",hint:"Nursing calls, vitals changes, new symptoms, PRN medications given",size:"large"},
      {id:"subjective",label:"SUBJECTIVE",hint:"How does the patient feel today? New complaints? Symptom trajectory.",size:"large"},
      {id:"objective",label:"OBJECTIVE",hint:"Vitals trend, focused exam findings, new lab/imaging results",size:"xlarge"},
      {id:"assess",label:"ASSESSMENT",hint:"Problem-based: better/worse/same for each. Updated differential if needed.",size:"large"},
      {id:"plan",label:"PLAN",hint:"Updated plan by problem. Discharge criteria. Pending items.",size:"large"}
    ],
    discharge: [
      {id:"course",label:"HOSPITAL COURSE",hint:"Narrative summary: admission → diagnosis → treatment → response → outcome",size:"xlarge"},
      {id:"discharge_dx",label:"DISCHARGE DIAGNOSIS",hint:"Final diagnosis list (may differ from admission diagnosis)",size:""},
      {id:"discharge_meds",label:"DISCHARGE MEDICATIONS",hint:"Full list with changes highlighted. New meds: indication. Stopped meds: reason.",size:"large"},
      {id:"followup",label:"FOLLOW-UP PLAN",hint:"PCP in X days, specialist in Y weeks, labs to recheck, imaging to schedule",size:"large"},
      {id:"patient_ed",label:"PATIENT EDUCATION",hint:"Diagnosis explanation, medication instructions, diet/activity, warning signs for ED return",size:"large"},
      {id:"pending",label:"PENDING RESULTS AT DISCHARGE",hint:"Any outstanding labs, cultures, pathology — who will follow up?",size:""}
    ]
  },

  // Get the current day's context
  getDayContext: function(day) {
    return this.dayContexts[day] || this.dayContexts[Math.min(day, 4)];
  },

  // Get note template for the current day
  getNoteTemplate: function(day) {
    var ctx = this.getDayContext(day);
    return this.noteTemplates[ctx.noteType] || this.noteTemplates.admission;
  },

  // Get max day for a setting
  getMaxDay: function(setting) {
    if (setting === "icu") return 5;
    if (setting === "inpatient") return 4;
    if (setting === "consult") return 2;
    return 1;
  },

  // Render the day selector bar
  renderDayBar: function(currentDay, setting, onDayChange) {
    var maxDay = this.getMaxDay(setting);
    if (maxDay <= 1) return "";

    var html = '<div class="day-progression-bar">';
    html += '<div class="day-bar-label">Hospital Course</div>';
    html += '<div class="day-bar-steps">';
    for (var d = 1; d <= maxDay; d++) {
      var ctx = this.getDayContext(d);
      var cls = "day-step";
      if (d === currentDay) cls += " active";
      else if (d < currentDay) cls += " completed";
      html += '<button class="' + cls + '" onclick="' + onDayChange + '(' + d + ')">';
      html += '<span class="day-step-icon">' + ctx.icon + '</span>';
      html += '<span class="day-step-label">' + ctx.label + '</span>';
      html += '</button>';
      if (d < maxDay) html += '<span class="day-step-connector"></span>';
    }
    html += '</div>';

    // Day context info
    var current = this.getDayContext(currentDay);
    html += '<div class="day-context-info">';
    html += '<div class="day-context-focus"><strong>Focus:</strong> ' + current.focus + '</div>';
    html += '<div class="day-context-tasks">';
    current.tasks.forEach(function(t) {
      html += '<span class="day-task-chip">' + t + '</span>';
    });
    html += '</div></div></div>';
    return html;
  }
};
