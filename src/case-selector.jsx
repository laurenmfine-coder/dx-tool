import { useState, useMemo } from "react";

// ═══════════════════════════════════════════════════════════════════
// CASE REGISTRY — Master list of all cases across all boards
// Each board pulls from this shared registry
// ═══════════════════════════════════════════════════════════════════
const CASE_REGISTRY = {
  ed: [
    { id: "chest-pain-stemi", title: "STEMI", presentation: "Chest Pain", specialty: "Cardiology", difficulty: 3, acuity: "Critical", tags: ["ACS", "cardiac", "emergent", "cath lab"] },
    { id: "chest-pain-nstemi", title: "NSTEMI", presentation: "Chest Pain", specialty: "Cardiology", difficulty: 2, acuity: "Urgent", tags: ["ACS", "cardiac", "troponin"] },
    { id: "chest-pain-pe", title: "Pulmonary Embolism", presentation: "Chest Pain / Dyspnea", specialty: "Pulmonology", difficulty: 3, acuity: "Critical", tags: ["PE", "DVT", "Wells", "anticoagulation"] },
    { id: "chest-pain-pericarditis", title: "Acute Pericarditis", presentation: "Chest Pain", specialty: "Cardiology", difficulty: 2, acuity: "Moderate", tags: ["pericarditis", "friction rub", "diffuse ST elevation"] },
    { id: "stroke-ischemic", title: "Acute Ischemic Stroke", presentation: "Focal Weakness", specialty: "Neurology", difficulty: 3, acuity: "Critical", tags: ["stroke", "tPA", "NIHSS", "code stroke"] },
    { id: "meningitis", title: "Bacterial Meningitis", presentation: "Headache / Fever", specialty: "Infectious Disease", difficulty: 3, acuity: "Critical", tags: ["meningitis", "LP", "kernig", "brudzinski"] },
    { id: "anaphylaxis", title: "Anaphylaxis", presentation: "Allergic Reaction", specialty: "Allergy/Immunology", difficulty: 2, acuity: "Critical", tags: ["anaphylaxis", "epinephrine", "airway"] },
    { id: "dka-ed", title: "DKA", presentation: "Altered Mental Status", specialty: "Endocrinology", difficulty: 2, acuity: "Urgent", tags: ["DKA", "insulin", "anion gap", "acidosis"] },
  ],
  admitting: [
    { id: "chf-admit", title: "Acute Decompensated CHF", presentation: "Dyspnea / Edema", specialty: "Cardiology", difficulty: 2, acuity: "Urgent", tags: ["CHF", "diuresis", "BNP", "telemetry"] },
    { id: "pneumonia-admit", title: "Community-Acquired Pneumonia", presentation: "Cough / Fever", specialty: "Pulmonology", difficulty: 2, acuity: "Moderate", tags: ["pneumonia", "CURB-65", "antibiotics", "sepsis"] },
    { id: "dka-admit", title: "DKA", presentation: "Nausea / Vomiting", specialty: "Endocrinology", difficulty: 3, acuity: "Urgent", tags: ["DKA", "insulin drip", "anion gap", "ICU"] },
    { id: "gi-bleed-admit", title: "Upper GI Bleed", presentation: "Melena / Lightheadedness", specialty: "Gastroenterology", difficulty: 2, acuity: "Urgent", tags: ["GI bleed", "PPI", "EGD", "transfusion"] },
    { id: "copd-exacerbation", title: "COPD Exacerbation", presentation: "Dyspnea / Wheezing", specialty: "Pulmonology", difficulty: 1, acuity: "Moderate", tags: ["COPD", "bronchodilators", "steroids", "BiPAP"] },
    { id: "cellulitis-admit", title: "Cellulitis with Sepsis", presentation: "Leg Redness / Fever", specialty: "Infectious Disease", difficulty: 1, acuity: "Moderate", tags: ["cellulitis", "antibiotics", "SIRS", "wound"] },
    { id: "aki-admit", title: "Acute Kidney Injury", presentation: "Decreased Urine Output", specialty: "Nephrology", difficulty: 2, acuity: "Moderate", tags: ["AKI", "creatinine", "pre-renal", "fluid"] },
    { id: "sickle-cell-crisis", title: "Sickle Cell Vaso-occlusive Crisis", presentation: "Severe Pain", specialty: "Hematology", difficulty: 2, acuity: "Urgent", tags: ["sickle cell", "pain crisis", "hydroxyurea"] },
    { id: "appendicitis-admit", title: "Acute Appendicitis", presentation: "RLQ Pain", specialty: "Surgery", difficulty: 1, acuity: "Urgent", tags: ["appendicitis", "pre-op", "surgical consult"] },
    { id: "bowel-obstruction", title: "Small Bowel Obstruction", presentation: "Abdominal Pain / Vomiting", specialty: "Surgery", difficulty: 2, acuity: "Urgent", tags: ["SBO", "NG tube", "NPO", "surgery consult"] },
    { id: "psychosis-admit", title: "Acute Psychosis", presentation: "Disorganized Behavior", specialty: "Psychiatry", difficulty: 2, acuity: "Moderate", tags: ["psychosis", "antipsychotic", "safety", "psychiatric hold"] },
    { id: "suicidal-ideation", title: "Suicidal Ideation", presentation: "Depression / SI", specialty: "Psychiatry", difficulty: 3, acuity: "Urgent", tags: ["suicide", "safety assessment", "1:1", "psychiatric"] },
    { id: "preeclampsia-admit", title: "Preeclampsia", presentation: "Hypertension / Headache", specialty: "OB/GYN", difficulty: 3, acuity: "Urgent", tags: ["preeclampsia", "magnesium", "delivery", "fetal monitoring"] },
    { id: "hyperemesis", title: "Hyperemesis Gravidarum", presentation: "Intractable Vomiting", specialty: "OB/GYN", difficulty: 1, acuity: "Moderate", tags: ["hyperemesis", "pregnancy", "dehydration", "antiemetics"] },
    { id: "bronchiolitis-admit", title: "Bronchiolitis (RSV)", presentation: "Infant Respiratory Distress", specialty: "Pediatrics", difficulty: 2, acuity: "Moderate", tags: ["bronchiolitis", "RSV", "pediatric", "supportive care"] },
    { id: "peds-dka", title: "Pediatric DKA", presentation: "New-Onset T1DM", specialty: "Pediatrics", difficulty: 3, acuity: "Urgent", tags: ["DKA", "pediatric", "new diagnosis", "insulin"] },
  ],
  oncall: [
    { id: "fever-postop", title: "Post-op Fever (POD 2)", presentation: "Fever", specialty: "Surgery", difficulty: 2, acuity: "Moderate", tags: ["fever", "post-op", "5 W's", "wound"] },
    { id: "fever-neutropenic", title: "Neutropenic Fever", presentation: "Fever", specialty: "Hematology/Oncology", difficulty: 3, acuity: "Critical", tags: ["neutropenia", "febrile", "chemo", "broad spectrum"] },
    { id: "fever-uti", title: "Hospital-Acquired UTI", presentation: "Fever", specialty: "Internal Medicine", difficulty: 1, acuity: "Moderate", tags: ["UTI", "CAUTI", "foley", "urine culture"] },
    { id: "fall-unwitnessed", title: "Unwitnessed Fall", presentation: "Found on Floor", specialty: "Internal Medicine", difficulty: 2, acuity: "High", tags: ["fall", "head trauma", "CT head", "anticoagulation"] },
    { id: "fall-syncope", title: "Fall with Syncope", presentation: "Fall / LOC", specialty: "Cardiology", difficulty: 3, acuity: "High", tags: ["syncope", "cardiac", "orthostatic", "telemetry"] },
    { id: "delirium-agitation", title: "Acute Delirium / Agitation", presentation: "Confusion / Combative", specialty: "Internal Medicine", difficulty: 2, acuity: "High", tags: ["delirium", "CAM", "sundowning", "medications"] },
    { id: "delirium-withdrawal", title: "Alcohol Withdrawal", presentation: "Tremor / Agitation", specialty: "Internal Medicine", difficulty: 3, acuity: "Critical", tags: ["withdrawal", "CIWA", "benzodiazepine", "DTs"] },
    { id: "chest-pain-oncall", title: "New Chest Pain Overnight", presentation: "Chest Pain", specialty: "Cardiology", difficulty: 2, acuity: "High", tags: ["chest pain", "ACS", "troponin", "ECG"] },
    { id: "sob-oncall", title: "Acute Dyspnea Overnight", presentation: "Shortness of Breath", specialty: "Pulmonology", difficulty: 2, acuity: "High", tags: ["dyspnea", "CHF", "PE", "pneumonia"] },
    { id: "low-uop", title: "Low Urine Output", presentation: "Oliguria", specialty: "Nephrology", difficulty: 2, acuity: "Moderate", tags: ["oliguria", "AKI", "foley", "fluid challenge"] },
    { id: "hyperkalemia-oncall", title: "Critical Hyperkalemia", presentation: "Abnormal Lab", specialty: "Nephrology", difficulty: 3, acuity: "Critical", tags: ["hyperkalemia", "ECG", "calcium", "kayexalate", "dialysis"] },
    { id: "hypoglycemia-oncall", title: "Hypoglycemia Event", presentation: "Altered Mental Status", specialty: "Endocrinology", difficulty: 1, acuity: "High", tags: ["hypoglycemia", "D50", "insulin", "glucose"] },
    { id: "pain-management", title: "Uncontrolled Post-op Pain", presentation: "Severe Pain", specialty: "Surgery", difficulty: 1, acuity: "Moderate", tags: ["pain", "opioid", "PCA", "multimodal"] },
    { id: "rapid-response", title: "Rapid Response — Respiratory Failure", presentation: "Desaturation / Unresponsive", specialty: "Critical Care", difficulty: 3, acuity: "Critical", tags: ["rapid response", "intubation", "ICU transfer", "code"] },
    { id: "cdiff-oncall", title: "C. diff Colitis", presentation: "Diarrhea / Fever", specialty: "Infectious Disease", difficulty: 1, acuity: "Moderate", tags: ["C. diff", "diarrhea", "vancomycin PO", "isolation"] },
    { id: "foley-issue", title: "Foley Malfunction / Hematuria", presentation: "Lines & Tubes", specialty: "Urology", difficulty: 1, acuity: "Low", tags: ["foley", "hematuria", "CBI", "urology consult"] },
    { id: "epistaxis-oncall", title: "Severe Epistaxis Post-op", presentation: "Bleeding", specialty: "ENT", difficulty: 2, acuity: "High", tags: ["epistaxis", "packing", "ENT", "anticoagulation"] },
    { id: "seizure-oncall", title: "New-Onset Seizure", presentation: "Seizure / Postictal", specialty: "Neurology", difficulty: 2, acuity: "High", tags: ["seizure", "AED", "CT", "neuro consult"] },
  ],
  rounding: [
    { id: "chf-day2", title: "CHF — Day 2 (Diuresis Response)", presentation: "Follow-up", specialty: "Cardiology", difficulty: 2, acuity: "Stable", tags: ["CHF", "I&O", "weight", "echo"] },
    { id: "pneumonia-day3", title: "Pneumonia — Day 3 (Clinical Plateau)", presentation: "Follow-up", specialty: "Pulmonology", difficulty: 2, acuity: "Stable", tags: ["pneumonia", "de-escalation", "discharge criteria"] },
    { id: "dka-day2", title: "DKA — Day 2 (AG Closing, Transition)", presentation: "Follow-up", specialty: "Endocrinology", difficulty: 3, acuity: "Improving", tags: ["DKA", "subQ transition", "diet advance"] },
    { id: "postop-appy-day1", title: "Post-op Appendectomy — POD 1", presentation: "Surgical Follow-up", specialty: "Surgery", difficulty: 1, acuity: "Stable", tags: ["post-op", "diet advance", "ambulation", "discharge"] },
    { id: "chf-day4-afib", title: "CHF — Day 4 (New AFib)", presentation: "New Problem", specialty: "Cardiology", difficulty: 3, acuity: "Worsening", tags: ["AFib", "rate control", "anticoagulation", "complication"] },
    { id: "hospital-acquired-pna", title: "Day 5 — New HAP", presentation: "New Problem", specialty: "Infectious Disease", difficulty: 3, acuity: "Worsening", tags: ["HAP", "broad spectrum", "sputum culture"] },
    { id: "discharge-chf", title: "CHF — Discharge Day", presentation: "Discharge Planning", specialty: "Cardiology", difficulty: 2, acuity: "Stable", tags: ["discharge", "med rec", "follow-up", "education"] },
    { id: "discharge-pneumonia", title: "Pneumonia — Discharge Day", presentation: "Discharge Planning", specialty: "Pulmonology", difficulty: 1, acuity: "Stable", tags: ["discharge", "oral antibiotics", "follow-up"] },
  ]
};

// ═══════════════════════════════════════════════════════════════════
// SPECIALTY METADATA
// ═══════════════════════════════════════════════════════════════════
const SPECIALTIES = {
  "Cardiology": { icon: "❤️", color: "#DC2626" },
  "Pulmonology": { icon: "🫁", color: "#0EA5E9" },
  "Gastroenterology": { icon: "🔬", color: "#F59E0B" },
  "Neurology": { icon: "🧠", color: "#8B5CF6" },
  "Endocrinology": { icon: "⚡", color: "#10B981" },
  "Infectious Disease": { icon: "🦠", color: "#EF4444" },
  "Nephrology": { icon: "💧", color: "#3B82F6" },
  "Hematology": { icon: "🩸", color: "#E11D48" },
  "Hematology/Oncology": { icon: "🩸", color: "#E11D48" },
  "Allergy/Immunology": { icon: "🛡️", color: "#F97316" },
  "Psychiatry": { icon: "🧩", color: "#7C3AED" },
  "Surgery": { icon: "🔪", color: "#334155" },
  "OB/GYN": { icon: "🤰", color: "#EC4899" },
  "Pediatrics": { icon: "👶", color: "#06B6D4" },
  "Internal Medicine": { icon: "🏥", color: "#2874A6" },
  "Critical Care": { icon: "🚨", color: "#B91C1C" },
  "Urology": { icon: "🔬", color: "#6366F1" },
  "ENT": { icon: "👂", color: "#14B8A6" },
  "Rheumatology": { icon: "🦴", color: "#A855F7" },
  "Dermatology": { icon: "🧬", color: "#D97706" },
};

const CLERKSHIP_MAP = {
  "Internal Medicine": ["Cardiology", "Pulmonology", "Gastroenterology", "Nephrology", "Endocrinology", "Hematology", "Hematology/Oncology", "Infectious Disease", "Rheumatology", "Internal Medicine"],
  "Surgery": ["Surgery"],
  "Psychiatry": ["Psychiatry"],
  "OB/GYN": ["OB/GYN"],
  "Pediatrics": ["Pediatrics"],
  "Neurology": ["Neurology"],
  "Emergency Medicine": Object.keys(SPECIALTIES),
  "Family Medicine": Object.keys(SPECIALTIES),
};

const DIFFICULTY_LABELS = { 1: "Beginner", 2: "Intermediate", 3: "Advanced" };
const ACUITY_COLORS = {
  "Critical": { bg: "#FEE2E2", text: "#991B1B" },
  "Urgent": { bg: "#FEF3C7", text: "#92400E" },
  "High": { bg: "#FEF3C7", text: "#92400E" },
  "Moderate": { bg: "#DBEAFE", text: "#1E40AF" },
  "Low": { bg: "#F1F5F9", text: "#64748B" },
  "Stable": { bg: "#DCFCE7", text: "#166534" },
  "Improving": { bg: "#DCFCE7", text: "#166534" },
  "Worsening": { bg: "#FEE2E2", text: "#991B1B" },
};

// ═══════════════════════════════════════════════════════════════════
// BOARD LAUNCHER COMPONENT
// ═══════════════════════════════════════════════════════════════════
export default function CaseSelector() {
  const [board, setBoard] = useState(null);       // ed | admitting | oncall | rounding
  const [mode, setMode] = useState(null);          // random | browse | clerkship
  const [filters, setFilters] = useState({ specialties: [], difficulty: [], search: "" });
  const [clerkship, setClerkship] = useState(null);
  const [selectedCases, setSelectedCases] = useState(new Set());
  const [assignedCases, setAssignedCases] = useState([]);
  const [screen, setScreen] = useState("boards");  // boards | mode | browse | assigned

  const brand = "#2874A6";
  const brandDark = "#1B4F72";

  // Get cases for current board
  const boardCases = board ? (CASE_REGISTRY[board] || []) : [];

  // Filtered cases
  const filteredCases = useMemo(() => {
    let cases = [...boardCases];
    if (clerkship && CLERKSHIP_MAP[clerkship]) {
      const allowedSpecs = CLERKSHIP_MAP[clerkship];
      cases = cases.filter(c => allowedSpecs.includes(c.specialty));
    }
    if (filters.specialties.length > 0) {
      cases = cases.filter(c => filters.specialties.includes(c.specialty));
    }
    if (filters.difficulty.length > 0) {
      cases = cases.filter(c => filters.difficulty.includes(c.difficulty));
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      cases = cases.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.presentation.toLowerCase().includes(q) ||
        c.specialty.toLowerCase().includes(q) ||
        c.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return cases;
  }, [boardCases, filters, clerkship]);

  // Available specialties for current board
  const availableSpecialties = useMemo(() =>
    [...new Set(boardCases.map(c => c.specialty))].sort(),
  [boardCases]);

  // Random assignment
  const assignRandom = (count = 4) => {
    const pool = filteredCases.length > 0 ? filteredCases : boardCases;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, Math.min(count, shuffled.length));
    setAssignedCases(picked);
    setScreen("assigned");
  };

  // Manual selection
  const toggleCase = (id) => {
    const next = new Set(selectedCases);
    if (next.has(id)) next.delete(id); else next.add(id);
    setSelectedCases(next);
  };

  const confirmSelection = () => {
    const picked = boardCases.filter(c => selectedCases.has(c.id));
    setAssignedCases(picked);
    setScreen("assigned");
  };

  const toggleSpecialty = (spec) => {
    setFilters(f => ({
      ...f,
      specialties: f.specialties.includes(spec)
        ? f.specialties.filter(s => s !== spec)
        : [...f.specialties, spec]
    }));
  };

  const toggleDifficulty = (d) => {
    setFilters(f => ({
      ...f,
      difficulty: f.difficulty.includes(d)
        ? f.difficulty.filter(x => x !== d)
        : [...f.difficulty, d]
    }));
  };

  const reset = () => {
    setBoard(null); setMode(null); setFilters({ specialties: [], difficulty: [], search: "" });
    setClerkship(null); setSelectedCases(new Set()); setAssignedCases([]); setScreen("boards");
  };

  const boardMeta = {
    ed: { title: "ED Board", icon: "🚑", desc: "Triage, workup, stabilize, and disposition", color: "#DC2626", cases: CASE_REGISTRY.ed.length },
    admitting: { title: "Admitting Board", icon: "🏥", desc: "Receive ED handoffs, admission orders & H&P", color: "#2874A6", cases: CASE_REGISTRY.admitting.length },
    oncall: { title: "On-Call Board", icon: "📟", desc: "Cross-cover overnight issues and acute problems", color: "#7C3AED", cases: CASE_REGISTRY.oncall.length },
    rounding: { title: "Rounding Board", icon: "📋", desc: "Daily rounds, progress notes, discharge planning", color: "#059669", cases: CASE_REGISTRY.rounding.length },
  };

  // ═══════════════════════════════════════════════════════
  // SCREEN: Board Selection
  // ═══════════════════════════════════════════════════════
  if (screen === "boards") {
    return (
      <div style={{ minHeight: "100vh", background: "#F8FAFC", fontFamily: "'DM Sans', -apple-system, sans-serif" }}>
        <div style={{ background: `linear-gradient(135deg, ${brandDark} 0%, ${brand} 60%, #1ABC9C 100%)`, padding: "52px 24px 44px", textAlign: "center", color: "white" }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.8, marginBottom: 10 }}>ReasonDx</div>
          <h1 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 10px", fontFamily: "'Fraunces', Georgia, serif" }}>Virtual Hospital</h1>
          <p style={{ fontSize: 15, opacity: 0.9, maxWidth: 500, margin: "0 auto" }}>Choose your clinical experience. Each board simulates a different phase of hospital-based training.</p>
        </div>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "36px 24px" }}>
          <div style={{ display: "grid", gap: 14 }}>
            {Object.entries(boardMeta).map(([key, meta]) => (
              <div key={key} onClick={() => { setBoard(key); setScreen("mode"); }}
                style={{ background: "white", borderRadius: 14, border: "1px solid #E2E8F0", padding: "22px 24px",
                  cursor: "pointer", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 18 }}
                onMouseOver={e => { e.currentTarget.style.borderColor = meta.color; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 20px ${meta.color}18`; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: `${meta.color}12`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>{meta.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 17, color: "#1E293B" }}>{meta.title}</div>
                  <div style={{ fontSize: 13, color: "#64748B", marginTop: 2 }}>{meta.desc}</div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: meta.color }}>{meta.cases}</div>
                  <div style={{ fontSize: 10, color: "#94A3B8", fontWeight: 600 }}>CASES</div>
                </div>
              </div>
            ))}
          </div>

          {/* Communication Skills Section */}
          <div style={{ marginTop: 32, marginBottom: 8 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94A3B8", marginBottom: 12 }}>Communication & Handoff Training</div>
          </div>

          {/* SP Trainer card */}
          <div style={{ background: `linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)`, borderRadius: 14, padding: "22px 24px",
            cursor: "pointer", display: "flex", alignItems: "center", gap: 18, color: "white", marginBottom: 12 }}
            onClick={() => window.location.hash = "#sp-trainer"}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>🎭</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 17 }}>SP Practice Trainer</div>
              <div style={{ fontSize: 13, opacity: 0.9, marginTop: 2 }}>Practice as a standardized patient with AI interviewer, real-time coaching, and 🎤 microphone dictation</div>
            </div>
            <span style={{ fontSize: 24, opacity: 0.8 }}>→</span>
          </div>

          {/* SBAR Handoff Trainer card */}
          <div style={{ background: `linear-gradient(135deg, #0891B2 0%, #22D3EE 100%)`, borderRadius: 14, padding: "22px 24px",
            cursor: "pointer", display: "flex", alignItems: "center", gap: 18, color: "white", marginBottom: 12 }}
            onClick={() => window.location.hash = "#sbar-trainer"}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>📋</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 17 }}>SBAR Handoff Trainer</div>
              <div style={{ fontSize: 13, opacity: 0.9, marginTop: 2 }}>Practice structured handoffs — ED→Floor, Nurse→MD, shift sign-out — with AI feedback, 🎤 mic, and verbal recording</div>
            </div>
            <span style={{ fontSize: 24, opacity: 0.8 }}>→</span>
          </div>

          {/* CRT Hub link */}
          <div style={{ background: "white", borderRadius: 14, border: "1px solid #E2E8F0", padding: "18px 24px",
            cursor: "pointer", display: "flex", alignItems: "center", gap: 18 }}
            onClick={() => window.location.hash = "#crt-hub"}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "#FEF3C7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>🧠</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#1E293B" }}>Clinical Reasoning Trainer Hub</div>
              <div style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>Focused CRT cases with labs, imaging, and expert differential — all specialty modules</div>
            </div>
            <span style={{ fontSize: 20, color: "#94A3B8" }}>→</span>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════
  // SCREEN: Mode Selection
  // ═══════════════════════════════════════════════════════
  if (screen === "mode") {
    const meta = boardMeta[board];
    return (
      <div style={{ minHeight: "100vh", background: "#F8FAFC", fontFamily: "'DM Sans', -apple-system, sans-serif" }}>
        <div style={{ background: "white", borderBottom: "1px solid #E2E8F0", padding: "14px 24px", display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={reset} style={{ background: "none", border: "none", cursor: "pointer", color: brand, fontWeight: 600, fontSize: 14, fontFamily: "inherit" }}>← Back</button>
          <div style={{ fontSize: 16, fontWeight: 700, color: brandDark }}>{meta.icon} {meta.title}</div>
        </div>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "40px 24px" }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1E293B", marginBottom: 8, textAlign: "center" }}>How do you want your cases?</h2>
          <p style={{ fontSize: 14, color: "#64748B", textAlign: "center", marginBottom: 32 }}>Choose random assignment for a realistic experience, or browse to target specific learning goals.</p>

          <div style={{ display: "grid", gap: 12 }}>
            {/* Random */}
            <div onClick={() => assignRandom(board === "oncall" ? 6 : 4)}
              style={{ background: "white", borderRadius: 14, border: "2px solid #E2E8F0", padding: 24, cursor: "pointer", transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "#22C55E"; e.currentTarget.style.background = "#F0FFF4"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.background = "white"; }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ fontSize: 28 }}>🎲</span>
                <div style={{ fontWeight: 700, fontSize: 17, color: "#1E293B" }}>Random Assignment</div>
              </div>
              <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>Get {board === "oncall" ? "6" : "4"} randomly assigned cases — just like a real shift. You won't know what's coming.</div>
            </div>

            {/* Browse & Select */}
            <div onClick={() => { setMode("browse"); setScreen("browse"); }}
              style={{ background: "white", borderRadius: 14, border: "2px solid #E2E8F0", padding: 24, cursor: "pointer", transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = brand; e.currentTarget.style.background = "#F0F9FF"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.background = "white"; }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ fontSize: 28 }}>🔍</span>
                <div style={{ fontWeight: 700, fontSize: 17, color: "#1E293B" }}>Browse & Select</div>
              </div>
              <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>Filter by specialty, difficulty, or keyword. Hand-pick the cases you want to practice.</div>
            </div>

            {/* Clerkship Alignment */}
            <div style={{ background: "white", borderRadius: 14, border: "2px solid #E2E8F0", padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <span style={{ fontSize: 28 }}>🎓</span>
                <div style={{ fontWeight: 700, fontSize: 17, color: "#1E293B" }}>Match My Clerkship</div>
              </div>
              <div style={{ fontSize: 13, color: "#64748B", marginBottom: 14 }}>Get cases that align with your current rotation or course.</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {Object.keys(CLERKSHIP_MAP).map(c => {
                  const count = boardCases.filter(cs => CLERKSHIP_MAP[c].includes(cs.specialty)).length;
                  if (count === 0) return null;
                  return (
                    <button key={c} onClick={() => { setClerkship(c); assignRandom(board === "oncall" ? 6 : 4); }}
                      style={{ padding: "7px 14px", borderRadius: 10, border: "1px solid #E2E8F0", background: "white",
                        cursor: "pointer", fontSize: 12, fontWeight: 600, color: "#334155", fontFamily: "inherit",
                        transition: "all 0.15s" }}
                      onMouseOver={e => { e.currentTarget.style.background = brand; e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = brand; }}
                      onMouseOut={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#334155"; e.currentTarget.style.borderColor = "#E2E8F0"; }}>
                      {c} <span style={{ opacity: 0.7 }}>({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════
  // SCREEN: Browse & Filter
  // ═══════════════════════════════════════════════════════
  if (screen === "browse") {
    return (
      <div style={{ minHeight: "100vh", background: "#F8FAFC", fontFamily: "'DM Sans', -apple-system, sans-serif" }}>
        <div style={{ background: "white", borderBottom: "1px solid #E2E8F0", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={() => setScreen("mode")} style={{ background: "none", border: "none", cursor: "pointer", color: brand, fontWeight: 600, fontSize: 14, fontFamily: "inherit" }}>← Back</button>
          <div style={{ fontSize: 14, fontWeight: 700, color: brandDark }}>{boardMeta[board].icon} {boardMeta[board].title} — Case Browser</div>
          <button onClick={confirmSelection} disabled={selectedCases.size === 0}
            style={{ padding: "7px 16px", borderRadius: 8, border: "none", fontFamily: "inherit",
              background: selectedCases.size > 0 ? "#22C55E" : "#CBD5E1", color: "white", cursor: selectedCases.size > 0 ? "pointer" : "default",
              fontSize: 13, fontWeight: 700 }}>
            Start ({selectedCases.size}) →
          </button>
        </div>

        <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px 24px" }}>
          {/* Search */}
          <input value={filters.search} onChange={e => setFilters(f => ({ ...f, search: e.target.value }))}
            placeholder="Search cases by name, presentation, specialty, or keyword..."
            style={{ width: "100%", padding: "10px 16px", borderRadius: 10, border: "1px solid #E2E8F0", fontSize: 14, outline: "none", fontFamily: "inherit", marginBottom: 14 }} />

          {/* Specialty filters */}
          <div style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Specialty</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {availableSpecialties.map(spec => {
                const active = filters.specialties.includes(spec);
                const meta = SPECIALTIES[spec] || { icon: "📋", color: "#64748B" };
                return (
                  <button key={spec} onClick={() => toggleSpecialty(spec)}
                    style={{ padding: "4px 12px", borderRadius: 16, fontSize: 11, fontWeight: 600, fontFamily: "inherit",
                      border: `1.5px solid ${active ? meta.color : "#E2E8F0"}`, cursor: "pointer",
                      background: active ? `${meta.color}15` : "white", color: active ? meta.color : "#64748B" }}>
                    {meta.icon} {spec}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Difficulty filters */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Difficulty</div>
            <div style={{ display: "flex", gap: 6 }}>
              {[1, 2, 3].map(d => {
                const active = filters.difficulty.includes(d);
                const colors = { 1: "#22C55E", 2: "#F59E0B", 3: "#DC2626" };
                return (
                  <button key={d} onClick={() => toggleDifficulty(d)}
                    style={{ padding: "4px 14px", borderRadius: 16, fontSize: 11, fontWeight: 600, fontFamily: "inherit",
                      border: `1.5px solid ${active ? colors[d] : "#E2E8F0"}`, cursor: "pointer",
                      background: active ? `${colors[d]}15` : "white", color: active ? colors[d] : "#64748B" }}>
                    {"★".repeat(d)} {DIFFICULTY_LABELS[d]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results count */}
          <div style={{ fontSize: 12, color: "#94A3B8", marginBottom: 12 }}>
            {filteredCases.length} case{filteredCases.length !== 1 ? "s" : ""} found
            {(filters.specialties.length > 0 || filters.difficulty.length > 0 || filters.search) && (
              <button onClick={() => setFilters({ specialties: [], difficulty: [], search: "" })}
                style={{ marginLeft: 8, background: "none", border: "none", color: brand, cursor: "pointer", fontSize: 11, fontWeight: 600, fontFamily: "inherit", textDecoration: "underline" }}>
                Clear filters
              </button>
            )}
          </div>

          {/* Case list */}
          <div style={{ display: "grid", gap: 8 }}>
            {filteredCases.map(c => {
              const selected = selectedCases.has(c.id);
              const specMeta = SPECIALTIES[c.specialty] || { icon: "📋", color: "#64748B" };
              const acuity = ACUITY_COLORS[c.acuity] || ACUITY_COLORS.Moderate;
              const diff = { 1: { bg: "#DCFCE7", text: "#166534" }, 2: { bg: "#FEF3C7", text: "#92400E" }, 3: { bg: "#FEE2E2", text: "#991B1B" } };
              return (
                <div key={c.id} onClick={() => toggleCase(c.id)}
                  style={{ background: selected ? "#F0F9FF" : "white", borderRadius: 10, border: `2px solid ${selected ? brand : "#E2E8F0"}`,
                    padding: "14px 18px", cursor: "pointer", transition: "all 0.15s", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, border: `2px solid ${selected ? brand : "#CBD5E1"}`,
                    background: selected ? brand : "white", display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", fontSize: 14, fontWeight: 700, flexShrink: 0 }}>
                    {selected ? "✓" : ""}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#1E293B" }}>{c.title}</div>
                    <div style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>{c.presentation}</div>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexShrink: 0, flexWrap: "wrap", justifyContent: "flex-end" }}>
                    <span style={{ padding: "2px 8px", borderRadius: 10, fontSize: 10, fontWeight: 600, background: `${specMeta.color}15`, color: specMeta.color }}>{specMeta.icon} {c.specialty}</span>
                    <span style={{ padding: "2px 8px", borderRadius: 10, fontSize: 10, fontWeight: 600, background: diff[c.difficulty].bg, color: diff[c.difficulty].text }}>{"★".repeat(c.difficulty)}</span>
                    <span style={{ padding: "2px 8px", borderRadius: 10, fontSize: 10, fontWeight: 600, background: acuity.bg, color: acuity.text }}>{c.acuity}</span>
                  </div>
                </div>
              );
            })}
          </div>
          {filteredCases.length === 0 && (
            <div style={{ textAlign: "center", padding: 40, color: "#94A3B8", fontSize: 14 }}>
              No cases match your filters. Try broadening your search.
            </div>
          )}
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════
  // SCREEN: Assigned Cases (Ready to Start)
  // ═══════════════════════════════════════════════════════
  if (screen === "assigned") {
    const meta = boardMeta[board];
    return (
      <div style={{ minHeight: "100vh", background: "#F8FAFC", fontFamily: "'DM Sans', -apple-system, sans-serif" }}>
        <div style={{ background: `linear-gradient(135deg, ${meta.color} 0%, ${meta.color}CC 100%)`, padding: "40px 24px", textAlign: "center", color: "white" }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>{meta.icon}</div>
          <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 6px" }}>{meta.title}</h1>
          <p style={{ fontSize: 14, opacity: 0.9 }}>
            {assignedCases.length} case{assignedCases.length !== 1 ? "s" : ""} assigned
            {clerkship && ` — ${clerkship} Clerkship`}
          </p>
        </div>
        <div style={{ maxWidth: 650, margin: "0 auto", padding: "32px 24px" }}>
          <div style={{ display: "grid", gap: 10, marginBottom: 24 }}>
            {assignedCases.map((c, i) => {
              const specMeta = SPECIALTIES[c.specialty] || { icon: "📋", color: "#64748B" };
              const acuity = ACUITY_COLORS[c.acuity] || ACUITY_COLORS.Moderate;
              return (
                <div key={c.id} style={{ background: "white", borderRadius: 12, border: "1px solid #E2E8F0", padding: "16px 20px",
                  display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${meta.color}15`, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 16, fontWeight: 800, color: meta.color, flexShrink: 0 }}>{i + 1}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 15, color: "#1E293B" }}>{c.title}</div>
                    <div style={{ fontSize: 12, color: "#64748B", marginTop: 1 }}>{c.presentation}</div>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                    <span style={{ padding: "2px 8px", borderRadius: 10, fontSize: 10, fontWeight: 600, background: `${specMeta.color}15`, color: specMeta.color }}>{specMeta.icon} {c.specialty}</span>
                    <span style={{ padding: "2px 8px", borderRadius: 10, fontSize: 10, fontWeight: 600, background: acuity.bg, color: acuity.text }}>{c.acuity}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            style={{ width: "100%", padding: 16, borderRadius: 12, border: "none", background: meta.color, color: "white",
              cursor: "pointer", fontSize: 16, fontWeight: 700, fontFamily: "inherit", letterSpacing: "0.02em" }}>
            Begin {meta.title} →
          </button>

          <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
            <button onClick={() => assignRandom(board === "oncall" ? 6 : 4)}
              style={{ flex: 1, padding: 12, borderRadius: 10, border: "1px solid #E2E8F0", background: "white",
                cursor: "pointer", fontSize: 13, fontWeight: 600, color: "#64748B", fontFamily: "inherit" }}>
              🎲 Reshuffle
            </button>
            <button onClick={() => setScreen("mode")}
              style={{ flex: 1, padding: 12, borderRadius: 10, border: "1px solid #E2E8F0", background: "white",
                cursor: "pointer", fontSize: 13, fontWeight: 600, color: "#64748B", fontFamily: "inherit" }}>
              ← Change Mode
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
