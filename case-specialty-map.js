// ═══════════════════════════════════════════════════════════════
// CASE-SPECIALTY RELEVANCE MAP
// Maps case categories to specialty rotations for case filtering
// Used by the case picker when a specialty is selected
// ═══════════════════════════════════════════════════════════════

window.CASE_SPECIALTY_MAP = {

  // Which specialties see which category of cases?
  // "primary" = core rotation cases, "consult" = would see as consult
  relevance: {
    "gastrointestinal":   { primary: ["im","fm","surgery","em"], consult: ["pediatrics"] },
    "cardiac":            { primary: ["im","em","fm"], consult: ["surgery"] },
    "cardiovascular":     { primary: ["im","em"], consult: ["surgery"] },
    "pulmonary":          { primary: ["im","fm","em"], consult: ["pediatrics","surgery"] },
    "respiratory":        { primary: ["im","fm","em","pediatrics"], consult: ["surgery"] },
    "neurologic":         { primary: ["neuro","im","em"], consult: ["surgery","fm","pediatrics"] },
    "neurological":       { primary: ["neuro","im","em"], consult: ["surgery","fm"] },
    "infectious":         { primary: ["im","fm","em","pediatrics"], consult: ["surgery"] },
    "endocrine":          { primary: ["im","fm","em"], consult: ["surgery","pediatrics"] },
    "hematologic":        { primary: ["im","em"], consult: ["surgery","fm"] },
    "renal":              { primary: ["im","fm","em"], consult: ["surgery"] },
    "rheumatologic":      { primary: ["im","fm"], consult: ["em"] },
    "toxicologic":        { primary: ["em","im"], consult: ["psychiatry","fm"] },
    "psychiatric":        { primary: ["psychiatry","em","fm"], consult: ["im"] },
    "obstetric":          { primary: ["obgyn","em","fm"], consult: ["im","surgery"] },
    "gynecologic":        { primary: ["obgyn","em","fm","surgery"], consult: ["im"] },
    "pediatric":          { primary: ["pediatrics","em","fm"], consult: ["surgery"] },
    "trauma":             { primary: ["surgery","em"], consult: ["im","neuro"] },
    "surgical":           { primary: ["surgery","em"], consult: ["im","fm"] },
    "orthopedic":         { primary: ["surgery","em"], consult: ["im","fm"] },
    "vascular":           { primary: ["surgery","im","em"], consult: ["fm"] },
    "ophthalmologic":     { primary: ["em","fm"], consult: ["im","surgery","neuro"] },
    "dermatologic":       { primary: ["im","fm","em"], consult: ["surgery"] },
    "urologic":           { primary: ["surgery","em","fm"], consult: ["im"] },
    "environmental":      { primary: ["em","im"], consult: ["fm"] },
    "ent":                { primary: ["surgery","em","fm"], consult: ["im","pediatrics"] },
    "demo":               { primary: ["im","fm","em","surgery","pediatrics","obgyn","psychiatry","neuro"], consult: [] },
    "general":            { primary: ["im","fm","em"], consult: ["surgery"] },
    "anesthetic":         { primary: ["surgery","em","im"], consult: ["fm"] },
    "pharmacologic":      { primary: ["im","fm","em"], consult: ["psychiatry"] },
    "oncologic":          { primary: ["im","surgery","em"], consult: ["neuro","fm"] },
    "metabolic":          { primary: ["im","em","fm"], consult: ["neuro","pediatrics"] }
  },

  // Check if a case is relevant to a specialty
  isRelevant: function(category, specialty, includeConsult) {
    var cat = (category || "general").toLowerCase();
    var entry = this.relevance[cat] || this.relevance["general"];
    if (entry.primary.indexOf(specialty) >= 0) return "primary";
    if (includeConsult && entry.consult.indexOf(specialty) >= 0) return "consult";
    return false;
  },

  // Filter a manifest for a given specialty
  filterManifest: function(manifest, specialty, includeConsult) {
    if (!specialty || specialty === "em") return manifest; // EM sees everything
    var self = this;
    var filtered = [];
    for (var i = 0; i < manifest.length; i++) {
      var group = manifest[i];
      var cases = [];
      for (var j = 0; j < group.cases.length; j++) {
        var c = group.cases[j];
        var rel = self.isRelevant(c.category, specialty, includeConsult !== false);
        if (rel) {
          var caseCopy = {};
          for (var k in c) caseCopy[k] = c[k];
          caseCopy._relevance = rel;
          cases.push(caseCopy);
        }
      }
      if (cases.length > 0) {
        filtered.push({ presentation: group.presentation, cases: cases });
      }
    }
    return filtered;
  },

  // Get case count for a specialty
  countForSpecialty: function(manifest, specialty) {
    if (!specialty || specialty === "em") {
      return manifest.reduce(function(sum, g) { return sum + g.cases.length; }, 0);
    }
    var filtered = this.filterManifest(manifest, specialty, true);
    return filtered.reduce(function(sum, g) { return sum + g.cases.length; }, 0);
  }
};
