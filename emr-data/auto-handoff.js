// ═══════════════════════════════════════════════════════════════
// AUTO-HANDOFF GENERATOR
// Dynamically generates ED-to-Floor handoffs from EMR_DATA
// for cases without explicit entries in HANDOFF_DATA
// ═══════════════════════════════════════════════════════════════

(function() {
  "use strict";

  // ED physician name pool
  var ED_DOCS = [
    "Dr. Rebecca Marsh, MD", "Dr. James Chen, MD", "Dr. Sarah Lin, MD",
    "Dr. Michael Torres, MD", "Dr. Angela Davis, MD", "Dr. Robert Kim, MD",
    "Dr. Lisa Nguyen, MD", "Dr. Emily Park, MD", "Dr. Karen White, MD",
    "Dr. David Hoffman, MD", "Dr. Nancy Williams, MD", "Dr. Thomas Brown, MD",
    "Dr. Patricia Green, MD", "Dr. Kevin Moore, MD", "Dr. Sandra Lee, MD"
  ];

  // Admitting service mapping by presentation category
  var SERVICE_MAP = {
    "gastrointestinal": "Internal Medicine — GI",
    "cardiac": "Cardiology",
    "cardiovascular": "Cardiology",
    "pulmonary": "Internal Medicine — Pulmonary",
    "respiratory": "Internal Medicine — Pulmonary",
    "neurologic": "Neurology",
    "neurological": "Neurology",
    "infectious": "Internal Medicine — Infectious Disease",
    "endocrine": "Internal Medicine — Endocrine",
    "hematologic": "Internal Medicine — Hematology",
    "renal": "Internal Medicine — Nephrology",
    "rheumatologic": "Internal Medicine — Rheumatology",
    "toxicologic": "Internal Medicine — Toxicology",
    "psychiatric": "Psychiatry — Inpatient",
    "obstetric": "OB/GYN",
    "gynecologic": "OB/GYN",
    "pediatric": "Pediatrics",
    "trauma": "Trauma Surgery",
    "surgical": "General Surgery",
    "orthopedic": "Orthopedic Surgery",
    "vascular": "Vascular Surgery",
    "ophthalmologic": "Ophthalmology",
    "dermatologic": "Internal Medicine",
    "urologic": "Urology",
    "environmental": "Internal Medicine",
    "ent": "ENT / Otolaryngology",
    "demo": "Internal Medicine"
  };

  // Bed assignment by service
  var BED_MAP = {
    "Cardiology": "CCU — Bed ",
    "Internal Medicine — Pulmonary": "5 North — Room ",
    "Neurology": "Neuro Floor — Room ",
    "Internal Medicine — GI": "4 East — Room ",
    "Internal Medicine — Infectious Disease": "5 East — Room ",
    "Internal Medicine — Hematology": "4 West — Room ",
    "Internal Medicine — Endocrine": "ICU Step-Down — Bed ",
    "Internal Medicine — Nephrology": "4 West — Room ",
    "Internal Medicine — Toxicology": "ICU Step-Down — Bed ",
    "Psychiatry — Inpatient": "Psych Unit — Room ",
    "OB/GYN": "L&D — Room ",
    "Pediatrics": "Peds Floor — Room ",
    "Trauma Surgery": "Trauma ICU — Bed ",
    "General Surgery": "6 South — Room ",
    "Orthopedic Surgery": "6 South — Room ",
    "Vascular Surgery": "Vascular — Room ",
    "Internal Medicine": "5 East — Room ",
    "Urology": "5 North — Room ",
    "ENT / Otolaryngology": "4 North — Room "
  };

  function hashStr(s) {
    var h = 0;
    for (var i = 0; i < s.length; i++) {
      h = ((h << 5) - h) + s.charCodeAt(i);
      h |= 0;
    }
    return Math.abs(h);
  }

  function pickDoc(caseId) {
    return ED_DOCS[hashStr(caseId) % ED_DOCS.length];
  }

  function pickTime(caseId) {
    var hrs = hashStr(caseId + "t") % 24;
    var mins = (hashStr(caseId + "m") % 4) * 15;
    return (hrs < 10 ? "0" : "") + hrs + ":" + (mins < 10 ? "0" : "") + mins;
  }

  function pickRoom(caseId, prefix) {
    return prefix + (200 + (hashStr(caseId + "r") % 600));
  }

  // Build a one-liner from patient data
  function buildOneLiner(d) {
    var p = d.patient || {};
    var probs = d.problems || [];
    var age = p.age || "unknown age";
    var sex = (p.sex || "").toLowerCase().indexOf("female") >= 0 ? "female" : "male";
    var mainProb = probs.length > 0 ? probs[0].problem : "undifferentiated complaint";
    var pmh = probs.filter(function(pr) { return pr.status === "Chronic" || pr.status === "Active"; })
                    .slice(0, 3).map(function(pr) { return pr.problem; }).join(", ");
    var pmhStr = pmh ? " with PMH of " + pmh : "";
    return age + "-year-old " + sex + pmhStr + " presenting with " + mainProb + ".";
  }

  // Extract working diagnosis from most recent visit assessment
  function getWorkingDx(d) {
    var visits = d.visits || [];
    for (var i = visits.length - 1; i >= 0; i--) {
      if (visits[i].assessment) return visits[i].assessment.split("\n")[0];
    }
    var probs = d.problems || [];
    return probs.length > 0 ? probs[0].problem : "Undifferentiated";
  }

  // Build ED course from visit notes
  function getEdCourse(d) {
    var visits = d.visits || [];
    for (var i = visits.length - 1; i >= 0; i--) {
      if (visits[i].hpi) return visits[i].hpi.substring(0, 400) + (visits[i].hpi.length > 400 ? "..." : "");
    }
    return "Patient presented to the ED and was evaluated. See chart for details.";
  }

  // Build pending items from labs/imaging
  function getPendingItems(d) {
    var items = [];
    var labs = d.labs || [];
    if (labs.length > 0) {
      var abnormals = 0;
      labs.forEach(function(l) {
        (l.groups || []).forEach(function(g) {
          (g.results || []).forEach(function(r) {
            if (r.flag) abnormals++;
          });
        });
      });
      if (abnormals > 0) items.push("Repeat labs in AM (trending " + abnormals + " abnormal values)");
    }
    items.push("Reassess in AM — clinical trajectory pending");
    return items;
  }

  // Build completed orders from labs and imaging
  function getCompletedOrders(d) {
    var orders = [];
    var labs = d.labs || [];
    labs.forEach(function(l) {
      (l.groups || []).forEach(function(g) {
        orders.push(g.name + " panel — resulted");
      });
    });
    var imaging = d.imaging || [];
    imaging.forEach(function(img) {
      orders.push(img.study + " — " + (img.status || "complete"));
    });
    var meds = d.medications || [];
    meds.filter(function(m) { return m.status === "Active"; }).slice(0, 3).forEach(function(m) {
      orders.push(m.name + " continued");
    });
    return orders.length > 0 ? orders : ["Basic labs drawn", "Initial workup completed"];
  }

  // Build watch-outs from allergies and abnormal labs
  function getWatchOuts(d) {
    var watchOuts = [];
    var allergies = d.allergies || [];
    var severeAllergies = allergies.filter(function(a) {
      return a.severity === "Severe" && a.allergen !== "NKDA";
    });
    if (severeAllergies.length > 0) {
      watchOuts.push("SEVERE ALLERGY: " + severeAllergies.map(function(a) {
        return a.allergen + " (" + a.reaction + ")";
      }).join(", ") + " — verify all orders");
    }

    var labs = d.labs || [];
    labs.forEach(function(l) {
      (l.groups || []).forEach(function(g) {
        (g.results || []).forEach(function(r) {
          if (r.flag === "H" && r.test) {
            watchOuts.push(r.test + " elevated at " + r.value + " " + (r.unit || "") + " — monitor trend");
          }
        });
      });
    });

    // Limit to 4 most important
    if (watchOuts.length > 4) watchOuts = watchOuts.slice(0, 4);
    if (watchOuts.length === 0) watchOuts.push("Standard monitoring — reassess vitals and clinical status");
    return watchOuts;
  }

  // Determine acuity from case data
  function getAcuity(d) {
    var probs = d.problems || [];
    var severeKeywords = ["acute", "severe", "critical", "emergent", "unstable", "shock", "arrest", "hemorrhage", "rupture"];
    var mainProb = (probs.length > 0 ? probs[0].problem : "").toLowerCase();
    for (var i = 0; i < severeKeywords.length; i++) {
      if (mainProb.indexOf(severeKeywords[i]) >= 0) return { esi: 2, code: "URGENT" };
    }
    return { esi: 3, code: "URGENT" };
  }

  // Main generator function
  window.generateAutoHandoff = function(caseId, emrData) {
    if (!emrData) return null;

    var category = "general";
    // Try to determine category from manifest if available
    if (window.EMR_MANIFEST) {
      for (var i = 0; i < EMR_MANIFEST.length; i++) {
        var cases = EMR_MANIFEST[i].cases || [];
        for (var j = 0; j < cases.length; j++) {
          if (cases[j].id === caseId) {
            category = cases[j].category || "general";
            break;
          }
        }
      }
    }

    var service = SERVICE_MAP[category] || "Internal Medicine";
    var bedPrefix = BED_MAP[service] || "5 East — Room ";

    return {
      caseId: caseId,
      edPhysician: pickDoc(caseId),
      handoffTime: pickTime(caseId),
      admittingService: service,
      bedAssignment: pickRoom(caseId, bedPrefix),
      acuity: getAcuity(emrData),
      oneLiner: buildOneLiner(emrData),
      workingDx: getWorkingDx(emrData),
      edCourse: getEdCourse(emrData),
      pendingItems: getPendingItems(emrData),
      completedOrders: getCompletedOrders(emrData),
      activeIVs: ["NS at 125 mL/hr"],
      watchOuts: getWatchOuts(emrData),
      disposition: "Floor appropriate. Hemodynamically stable. See chart for full ED course.",
      familyUpdate: "Family aware of admission. Updated by ED nursing staff.",
      codeStatus: "Full Code",
      autoGenerated: true
    };
  };

  // Patch HANDOFF_DATA to fall back to auto-generated handoffs
  var _originalGetHandoff = null;
  var _originalHasHandoff = null;

  function patchHandoffData() {
    if (!window.HANDOFF_DATA) return;
    if (_originalGetHandoff) return; // already patched

    _originalGetHandoff = HANDOFF_DATA.getHandoff;
    _originalHasHandoff = HANDOFF_DATA.hasHandoff;

    HANDOFF_DATA.getHandoff = function(caseId) {
      // Try explicit handoff first
      var explicit = HANDOFF_DATA.handoffs[caseId];
      if (explicit) return explicit;
      // Generate from EMR_DATA if available
      if (window.EMR_DATA) {
        return window.generateAutoHandoff(caseId, window.EMR_DATA);
      }
      return null;
    };

    HANDOFF_DATA.hasHandoff = function(caseId) {
      if (HANDOFF_DATA.handoffs[caseId]) return true;
      // For non-ED settings, always return true (will auto-generate)
      return true;
    };
  }

  // Patch on load
  if (document.readyState === "complete" || document.readyState === "interactive") {
    patchHandoffData();
  } else {
    document.addEventListener("DOMContentLoaded", patchHandoffData);
  }
  // Also patch when HANDOFF_DATA becomes available
  var _checkInterval = setInterval(function() {
    if (window.HANDOFF_DATA) {
      patchHandoffData();
      clearInterval(_checkInterval);
    }
  }, 100);
  setTimeout(function() { clearInterval(_checkInterval); }, 10000);

})();
