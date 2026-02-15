const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType,
        LevelFormat, PageBreak } = require('docx');

const border = { style: BorderStyle.SINGLE, size: 1, color: "CBD5E1" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

function hCell(text, width) {
  return new TableCell({ borders, width: { size: width, type: WidthType.DXA },
    shading: { fill: "0F766E", type: ShadingType.CLEAR }, margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, color: "FFFFFF", font: "Arial", size: 20 })] })] });
}
function c(text, width, opts = {}) {
  return new TableCell({ borders, width: { size: width, type: WidthType.DXA },
    shading: opts.shade ? { fill: opts.shade, type: ShadingType.CLEAR } : undefined, margins: cellMargins,
    children: [new Paragraph({ alignment: opts.center ? AlignmentType.CENTER : AlignmentType.LEFT,
      children: [new TextRun({ text, font: "Arial", size: 20, bold: !!opts.bold, color: opts.color || "1E293B" })] })] });
}
function row(cells) { return new TableRow({ children: cells }); }
function bullet(text, bold) {
  return new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 80 }, children: [
    new TextRun({ text, font: "Arial", size: 22, bold: !!bold }) ]});
}
function para(text) {
  return new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text, font: "Arial", size: 22 })] });
}
function heading(level, text) {
  return new Paragraph({ heading: level, children: [new TextRun(text)] });
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: "0F766E" },
        paragraph: { spacing: { before: 360, after: 200 } } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: "1E293B" },
        paragraph: { spacing: { before: 240, after: 120 } } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, font: "Arial", color: "475569" },
        paragraph: { spacing: { before: 180, after: 100 } } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ]
  },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    children: [
      // TITLE
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [
        new TextRun({ text: "ReasonDx Platform", font: "Arial", size: 40, bold: true, color: "0F766E" }) ]}),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [
        new TextRun({ text: "Design Unification, Reference Audit & RadDx Imaging Module", font: "Arial", size: 28, color: "475569" }) ]}),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 }, children: [
        new TextRun({ text: "February 13, 2026", font: "Arial", size: 22, color: "94A3B8" }) ]}),

      // EXECUTIVE SUMMARY
      heading(HeadingLevel.HEADING_1, "Executive Summary"),
      para("This session performed a comprehensive overhaul across the entire ReasonDx platform (928+ HTML files, 282 deep dive JSONs). Five major workstreams were completed: (1) visual design standardization with light theme default, (2) unified navigation with dark mode toggle, (3) StatPearls baseline references for all content, (4) specialty-specific clinical guideline references from 20+ medical societies and 138 unique sources, and (5) the new RadDx imaging reasoning module — a dedicated radiology section with 25 interactive scenarios across 8 body systems plus Radiopaedia integration."),

      // RADDX MODULE
      heading(HeadingLevel.HEADING_1, "RadDx — Imaging Reasoning Module (NEW)"),
      para("RadDx is a new dedicated section of the platform that teaches clinical imaging reasoning through an interactive 4-step framework: Order (what imaging and why), Expect (hypothesize before seeing results), Interpret (systematic reading), and Integrate (how findings change your clinical plan). This approach teaches the thinking behind imaging decisions rather than static pattern recognition from labeled images."),

      heading(HeadingLevel.HEADING_2, "RadDx Architecture"),
      new Table({
        width: { size: 9360, type: WidthType.DXA }, columnWidths: [3500, 1400, 4460],
        rows: [
          row([ hCell("Body System Page", 3500), hCell("Scenarios", 1400), hCell("Topics Covered", 4460) ]),
          row([ c("Chest Imaging", 3500, {bold:true}), c("6", 1400, {center:true}), c("Pneumonia, PE, pneumothorax, ARDS, pleural effusion, TB", 4460) ]),
          row([ c("Cardiac Imaging", 3500, {bold:true}), c("4", 1400, {center:true}), c("ACS/STEMI, heart failure, aortic dissection, cardiac tamponade", 4460) ]),
          row([ c("Neuroimaging", 3500, {bold:true}), c("4", 1400, {center:true}), c("Ischemic stroke, SAH, meningitis, seizure disorders", 4460) ]),
          row([ c("Abdominal Imaging", 3500, {bold:true}), c("3", 1400, {center:true}), c("Appendicitis, cholecystitis, small bowel obstruction", 4460) ]),
          row([ c("Musculoskeletal", 3500, {bold:true}), c("2", 1400, {center:true}), c("Hip fracture, compartment syndrome (don't-image)", 4460) ]),
          row([ c("Renal & GU", 3500, {bold:true}), c("2", 1400, {center:true}), c("Nephrolithiasis, testicular torsion", 4460) ]),
          row([ c("Pediatric Imaging", 3500, {bold:true}), c("3", 1400, {center:true}), c("Intussusception, pyloric stenosis, neonatal RDS", 4460) ]),
          row([ c("Obstetric Imaging", 3500, {bold:true}), c("1", 1400, {center:true}), c("Ectopic pregnancy", 4460) ]),
          row([ c("TOTAL", 3500, {bold:true, color:"0F766E"}), c("25", 1400, {center:true, bold:true, color:"0F766E"}), c("", 4460) ]),
        ]
      }),

      heading(HeadingLevel.HEADING_2, "Key Pedagogical Features"),
      bullet("4-step reasoning framework (Order → Expect → Interpret → Integrate) applied consistently across all scenarios", true),
      bullet("\"Don't-image\" decisions taught explicitly — tension pneumothorax, compartment syndrome, testicular torsion with classic presentation", true),
      bullet("Each scenario includes a full clinical vignette with vitals, exam findings, and labs to simulate real decision-making"),
      bullet("Interactive MCQ format with color-coded reveal panels: teaching (teal), danger/urgency (red), clinical pearls (purple)"),
      bullet("Radiopaedia case page links (staged-reveal format) rather than static labeled images — preserves the reasoning challenge"),
      bullet("Systematic reading frameworks included (e.g., ABCDEFGHI for CXR)"),
      bullet("Management integration at every step — imaging findings explicitly change the differential, disposition, or treatment"),

      heading(HeadingLevel.HEADING_2, "Platform Integration"),
      bullet("61 topic pages now include RadDx cross-links directing students to relevant imaging reasoning scenarios"),
      bullet("59 modules enriched with Radiopaedia links including modality, key findings, and direct case page links"),
      bullet("Radiopaedia-map.json database created with 40+ imaging scenarios mapped by body system with full teaching metadata"),
      bullet("All RadDx pages follow platform design system (rdx-theme.css, rdx-nav.js, light theme default)"),

      // PAGE BREAK
      new Paragraph({ children: [new PageBreak()] }),

      // REFERENCE ECOSYSTEM
      heading(HeadingLevel.HEADING_1, "Reference Ecosystem"),
      para("The platform now uses a multi-layered reference strategy: StatPearls (baseline textbook), specialty clinical guidelines (society-specific), and Radiopaedia imaging references. This mirrors how academic medical education programs structure their citations."),

      new Table({
        width: { size: 9360, type: WidthType.DXA }, columnWidths: [5000, 4360],
        rows: [
          row([ hCell("Metric", 5000), hCell("Value", 4360) ]),
          row([ c("Unique reference sources", 5000), c("138", 4360, {center:true, bold:true}) ]),
          row([ c("Total reference instances", 5000), c("895+", 4360, {center:true, bold:true}) ]),
          row([ c("Guideline organizations", 5000), c("20+", 4360, {center:true, bold:true}) ]),
          row([ c("Pages with StatPearls baseline", 5000), c("747", 4360, {center:true}) ]),
          row([ c("Pages with specialty guidelines", 5000), c("664", 4360, {center:true}) ]),
          row([ c("Modules with Radiopaedia links", 5000), c("100", 4360, {center:true}) ]),
        ]
      }),

      heading(HeadingLevel.HEADING_2, "Specialty Sources by Discipline"),
      bullet("Allergy/Immunology: AAAAI Practice Parameters, WAO, EAACI, NIAID"),
      bullet("Cardiology: AHA/ACC Guidelines (Circulation, JACC), ESC"),
      bullet("Pulmonology: GINA 2024, GOLD 2024, ATS/ERS, NHLBI EPR-4"),
      bullet("Endocrine: ADA Standards of Care 2024, ATA, Endocrine Society"),
      bullet("GI: ACG Clinical Guidelines, AGA, AASLD, Tokyo Guidelines"),
      bullet("Infectious Disease: IDSA, Surviving Sepsis Campaign, CDC"),
      bullet("Heme/Onc: ASH, ISTH, CHEST, AABB, NCCN"),
      bullet("Neuro: AAN, ILAE, AES, AHS"),
      bullet("Nephrology: KDIGO, AUA"),
      bullet("Psychiatry: APA, NICE, VA/DoD, ASAM"),
      bullet("Rheumatology: ACR, EULAR"),
      bullet("OB/GYN: ACOG Practice Bulletins, CDC US MEC, USPSTF"),
      bullet("Pediatrics: AAP/Bright Futures, CDC Milestones, NRP"),
      bullet("Emergency/Tox: ATLS, ACMT, EXTRIP, EAST, LITFL"),
      bullet("Radiology: Radiopaedia.org (40+ case mappings)"),

      // PAGE BREAK
      new Paragraph({ children: [new PageBreak()] }),

      // DESIGN UNIFICATION
      heading(HeadingLevel.HEADING_1, "Design Unification Summary"),
      new Table({
        width: { size: 9360, type: WidthType.DXA }, columnWidths: [3200, 2000, 2000, 2160],
        rows: [
          row([ hCell("Workstream", 3200), hCell("Before", 2000), hCell("After", 2000), hCell("Status", 2160) ]),
          row([ c("rdx-theme.css design system", 3200, {bold:true}), c("Mixed inline", 2000, {center:true}), c("928 files", 2000, {center:true}), c("COMPLETE", 2160, {center:true, color:"0F766E", bold:true}) ]),
          row([ c("Unified nav (rdx-nav.js)", 3200, {bold:true}), c("3+ different navs", 2000, {center:true}), c("1 unified nav", 2000, {center:true}), c("COMPLETE", 2160, {center:true, color:"0F766E", bold:true}) ]),
          row([ c("Light theme default", 3200, {bold:true}), c("585 dark pages", 2000, {center:true}), c("0 dark pages", 2000, {center:true}), c("COMPLETE", 2160, {center:true, color:"0F766E", bold:true}) ]),
          row([ c("StatPearls refs", 3200, {bold:true}), c("231 generic", 2000, {center:true}), c("747 specific", 2000, {center:true}), c("COMPLETE", 2160, {center:true, color:"0F766E", bold:true}) ]),
          row([ c("Specialty guidelines", 3200, {bold:true}), c("0 pages", 2000, {center:true}), c("664 pages", 2000, {center:true}), c("COMPLETE", 2160, {center:true, color:"0F766E", bold:true}) ]),
          row([ c("RadDx imaging module", 3200, {bold:true}), c("Not built", 2000, {center:true}), c("9 pages, 25 scenarios", 2000, {center:true}), c("COMPLETE", 2160, {center:true, color:"0F766E", bold:true}) ]),
          row([ c("Radiopaedia integration", 3200, {bold:true}), c("0 pages", 2000, {center:true}), c("100 modules linked", 2000, {center:true}), c("COMPLETE", 2160, {center:true, color:"0F766E", bold:true}) ]),
        ]
      }),

      // REMAINING WORK
      heading(HeadingLevel.HEADING_1, "Remaining Work & Expansion Opportunities"),
      heading(HeadingLevel.HEADING_2, "RadDx Expansion"),
      bullet("Additional scenarios for: dermatologic imaging, ophtho fundoscopy, ENT, vascular (CTA extremities)"),
      bullet("Embryology imaging: prenatal ultrasound findings correlated with MechanismDx content"),
      bullet("ECG interpretation module (dedicated deep-dive with rhythm strips and 12-lead analysis)"),
      bullet("Integration of imaging decision nodes directly into adventure cases (branching based on imaging choices)"),

      heading(HeadingLevel.HEADING_2, "Platform Content"),
      bullet("67 missing adventure cases — flagship interactive content, most complex to generate", true),
      bullet("Inline numbered citations [1][2] within body text across all content"),
      bullet("Deep dive content enrichment: scaffold files need richer clinical pearls and teaching frameworks"),
      bullet("Plagiarism scan before publication/patent submission"),

      heading(HeadingLevel.HEADING_2, "Reference Expansion"),
      bullet("AAFP primary care guidelines for common presentations"),
      bullet("UpToDate-equivalent structured approach references (open-access alternatives)"),
      bullet("Cochrane systematic reviews for evidence-based therapy topics"),
      bullet("WHO guidelines for global health and tropical medicine topics"),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('/mnt/user-data/outputs/ReasonDx-Design-Audit-Report.docx', buffer);
  console.log('Report updated with RadDx section');
});
