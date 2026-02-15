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

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: "0F766E" },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: "1E293B" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, font: "Arial", color: "475569" },
        paragraph: { spacing: { before: 180, after: 100 }, outlineLevel: 2 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "checks", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2713", alignment: AlignmentType.LEFT,
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
        new TextRun({ text: "Design Unification, Reference Audit & Specialty Guidelines", font: "Arial", size: 28, color: "475569" }) ]}),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 }, children: [
        new TextRun({ text: "February 13, 2026", font: "Arial", size: 22, color: "94A3B8" }) ]}),

      // EXECUTIVE SUMMARY
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Executive Summary")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "This session performed a comprehensive overhaul across the entire ReasonDx platform (928 HTML files, 282 deep dive JSONs). Four major workstreams were completed: (1) visual design standardization with light theme default, (2) unified navigation with dark mode toggle, (3) StatPearls baseline references for all content, and (4) specialty-specific clinical guideline references from 20+ medical societies and 138 unique sources.", size: 22 })
      ]}),

      // REFERENCE ECOSYSTEM — THE STAR OF THIS SESSION
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Reference Ecosystem")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "The platform now uses a multi-layered reference strategy that combines foundational textbook references (StatPearls) with specialty-specific clinical guidelines, practice parameters, and society resources. This mirrors how academic medical education programs structure their citations.", size: 22 })
      ]}),

      // REFERENCE STATS TABLE
      new Table({
        width: { size: 9360, type: WidthType.DXA }, columnWidths: [5000, 4360],
        rows: [
          row([ hCell("Metric", 5000), hCell("Value", 4360) ]),
          row([ c("Unique reference sources", 5000), c("138", 4360, { center: true, bold: true }) ]),
          row([ c("Total reference instances across platform", 5000), c("895+", 4360, { center: true, bold: true }) ]),
          row([ c("Guideline organizations represented", 5000), c("20+", 4360, { center: true, bold: true }) ]),
          row([ c("Pages with StatPearls baseline", 5000), c("747", 4360, { center: true }) ]),
          row([ c("Pages with specialty guidelines added", 5000), c("664", 4360, { center: true }) ]),
        ]
      }),

      // SPECIALTY GUIDELINE SOURCES
      new Paragraph({ spacing: { before: 300 }, heading: HeadingLevel.HEADING_2, children: [new TextRun("Guideline Organizations by Specialty")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Allergy / Immunology")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "AAAAI Practice Parameters (JACI, JACI: In Practice), WAO Guidelines, EAACI Position Papers, NIAID Food Allergy Guidelines, Jeffrey Modell Foundation, IDF Resources. Topics covered: anaphylaxis, urticaria, angioedema, drug allergy, immunodeficiency, immunotherapy, venom allergy, FPIES, atopic dermatitis, eosinophilia, penicillin de-labeling, biologics selection.", size: 22 })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Cardiology")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "AHA/ACC Clinical Practice Guidelines (Circulation, JACC), ESC Guidelines. Topics covered: atrial fibrillation, heart failure, ACS/STEMI/NSTEMI, valvular disease, SVT/WPW, syncope, endocarditis, aortic dissection, hypertensive emergency, ACLS rhythms, cardiac tamponade, ECG interpretation.", size: 22 })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Pulmonology")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "GINA 2024 (Global Initiative for Asthma), GOLD 2024 (COPD), ATS/ERS Standards, NHLBI EPR-4, BTS Guidelines. Topics covered: asthma (all subtypes including biologics), COPD, ARDS, pneumonia, PFT interpretation, pleural effusion, pneumothorax.", size: 22 })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Endocrinology")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "ADA Standards of Care 2024, ATA Thyroid Guidelines, Endocrine Society Clinical Practice Guidelines, NIDDK, AACE/ACE Position Statements. Topics covered: diabetes/DKA/HHS, thyroid disorders/thyroid storm/myxedema, adrenal (Cushing/Addison), pituitary, calcium disorders, hypoglycemia, PCOS.", size: 22 })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Gastroenterology")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "ACG Clinical Guidelines, AGA Clinical Practice Updates, AASLD Practice Guidance, Tokyo Guidelines 2018, SAGES Guidelines. Topics covered: GI bleeding, IBD, liver disease/cirrhosis, hepatitis, pancreatitis, cholecystitis/cholangitis, gallstones, C. difficile, SBO.", size: 22 })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Infectious Disease")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "IDSA Practice Guidelines, Surviving Sepsis Campaign (SSC), WSES Guidelines, CDC STI/HIV Treatment Guidelines, IWGDF Diabetic Foot Guidelines. Topics covered: sepsis, meningitis, cellulitis/NF, UTI/pyelonephritis, HIV, TB, osteomyelitis, PID, diabetic foot, neutropenic fever.", size: 22 })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Hematology / Oncology")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "ASH Clinical Practice Guidelines (Blood Advances), ISTH Guidelines, CHEST Antithrombotic Guidelines, AABB Transfusion Guidelines, NCCN. Topics covered: DVT/PE/VTE, anemia, sickle cell, ITP, TTP, DIC, transfusion, leukemia.", size: 22 })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Neurology")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "AAN Evidence-Based Guidelines, AHS Consensus Statements, ILAE Classification, AES Practice Standards. Topics covered: seizures/epilepsy, stroke, GBS, myasthenia gravis, MS, headache/migraine, Parkinson disease, delirium.", size: 22 })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Nephrology")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "KDIGO Clinical Practice Guidelines, European Society of Endocrinology (hyponatremia), AUA/Endourology Society. Topics covered: AKI, electrolyte disorders, acid-base, nephrotic syndrome, PKD, nephrolithiasis.", size: 22 })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Psychiatry")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "APA Practice Guidelines, NICE Clinical Guidelines, VA/DoD Clinical Practice Guidelines, ASAM National Practice Guidelines, Maudsley Prescribing Guidelines. Topics covered: depression, anxiety, bipolar, schizophrenia, PTSD, substance use, personality disorders, psychopharmacology.", size: 22 })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Rheumatology")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "ACR Clinical Practice Guidelines, EULAR Recommendations. Topics covered: SLE, RA, gout, vasculitis, scleroderma, spondyloarthropathies.", size: 22 })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("OB/GYN")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "ACOG Practice Bulletins, CDC US MEC for Contraception, USPSTF Preventive Recommendations. Topics covered: preeclampsia, postpartum hemorrhage, ectopic pregnancy, contraception, labor, endometriosis, placental disorders.", size: 22 })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Pediatrics")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "AAP Clinical Practice Guidelines, AAP Bright Futures, CDC Developmental Milestones, AHA Kawasaki Disease Statement, AHA/AAP NRP. Topics covered: developmental milestones, well-child care, febrile seizures, bronchiolitis, croup, Kawasaki disease, neonatal resuscitation.", size: 22 })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Emergency Medicine / Toxicology")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "ACMT Position Statements, EXTRIP Workgroup, ATLS (ACS Committee on Trauma), ABA Burn Guidelines, MHAUS, EAST Practice Management Guidelines, LITFL. Topics covered: toxidromes, acetaminophen/salicylate/opioid toxicity, carbon monoxide, shock, trauma, burns, malignant hyperthermia.", size: 22 })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Primary Care / Preventive Medicine")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "USPSTF Recommendations, AAFP Clinical Resources, ASAM Guidelines, Wound Healing Society. Topics covered: screening recommendations, alcohol withdrawal, capacity assessment, wound healing.", size: 22 })
      ]}),

      // PAGE BREAK
      new Paragraph({ children: [new PageBreak()] }),

      // DESIGN UNIFICATION SUMMARY
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Design Unification Summary")] }),
      new Table({
        width: { size: 9360, type: WidthType.DXA }, columnWidths: [3200, 2000, 2000, 2160],
        rows: [
          row([ hCell("Workstream", 3200), hCell("Before", 2000), hCell("After", 2000), hCell("Status", 2160) ]),
          row([ c("rdx-theme.css design system", 3200, {bold:true}), c("Mixed inline", 2000, {center:true}), c("928 files linked", 2000, {center:true}), c("COMPLETE", 2160, {center:true, color:"0F766E", bold:true}) ]),
          row([ c("Unified nav bar (rdx-nav.js)", 3200, {bold:true}), c("3+ different navs", 2000, {center:true}), c("1 nav + toggle", 2000, {center:true}), c("COMPLETE", 2160, {center:true, color:"0F766E", bold:true}) ]),
          row([ c("Light theme default", 3200, {bold:true}), c("585 dark pages", 2000, {center:true}), c("0 dark pages", 2000, {center:true}), c("COMPLETE", 2160, {center:true, color:"0F766E", bold:true}) ]),
          row([ c("Dark mode toggle", 3200, {bold:true}), c("Not available", 2000, {center:true}), c("All pages", 2000, {center:true}), c("COMPLETE", 2160, {center:true, color:"0F766E", bold:true}) ]),
          row([ c("StatPearls baseline refs", 3200, {bold:true}), c("231 generic", 2000, {center:true}), c("747 specific", 2000, {center:true}), c("COMPLETE", 2160, {center:true, color:"0F766E", bold:true}) ]),
          row([ c("Specialty guideline refs", 3200, {bold:true}), c("0 pages", 2000, {center:true}), c("664 pages", 2000, {center:true}), c("COMPLETE", 2160, {center:true, color:"0F766E", bold:true}) ]),
          row([ c("Deep dive ref enrichment", 3200, {bold:true}), c("94 generic", 2000, {center:true}), c("240 multi-source", 2000, {center:true}), c("COMPLETE", 2160, {center:true, color:"0F766E", bold:true}) ]),
        ]
      }),

      // REMAINING WORK
      new Paragraph({ spacing: { before: 300 }, heading: HeadingLevel.HEADING_1, children: [new TextRun("Remaining Work")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [
        new TextRun({ text: "Inline citations: Add numbered [1][2] references within body text, not just end-of-page sections", size: 22, bold: true }) ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [
        new TextRun({ text: "67 missing adventure cases: Flagship interactive content, most complex to generate", size: 22, bold: true }) ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [
        new TextRun({ text: "Deep dive content enrichment: Scaffold files need richer clinical detail and unique teaching pearls", size: 22 }) ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [
        new TextRun({ text: "Plagiarism scan: Run content through detection tools before publication/patent submission", size: 22 }) ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [
        new TextRun({ text: "Cross-browser testing: Verify light/dark toggle and responsive design across devices", size: 22 }) ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [
        new TextRun({ text: "AAFP/primary care expansion: Add family medicine-specific resources for common topics", size: 22 }) ]}),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('/mnt/user-data/outputs/ReasonDx-Design-Audit-Report.docx', buffer);
  console.log('Updated report created');
});
