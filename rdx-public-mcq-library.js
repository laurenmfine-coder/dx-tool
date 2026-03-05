// ReasonDx Public MCQ Library
// Generated: 2026-03-05T03:22:07.833699+00:00
// Source policy: NIAID / NHLBI / AHRQ / CDC (public domain only)
// 0 MCQs | 0 passed | 10 failed quality gate

window.RDX_PUBLIC_MCQ_LIBRARY = [];

// Auto-seed public library on load
(function() {
  try {
    var existing = JSON.parse(localStorage.getItem("rdx-public-mcqs") || "[]");
    var existingIds = new Set(existing.map(function(q) { return q.id || q.question; }));
    var added = 0;
    (window.RDX_PUBLIC_MCQ_LIBRARY || []).forEach(function(q) {
      var key = q.id || q.question;
      if (!existingIds.has(key)) { existing.push(q); added++; }
    });
    if (added > 0) {
      localStorage.setItem("rdx-public-mcqs", JSON.stringify(existing));
      console.log("[ReasonDx] Seeded " + added + " public MCQs (NIAID/NHLBI/AHRQ sources)");
    }
  } catch(e) { console.warn("[ReasonDx] Public MCQ seed error:", e); }
})();