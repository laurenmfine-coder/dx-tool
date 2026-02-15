const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType,
        LevelFormat, PageBreak } = require('docx');

const border = { style: BorderStyle.SINGLE, size: 1, color: "CBD5E1" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

function headerCell(text, width) {
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA },
    shading: { fill: "0F766E", type: ShadingType.CLEAR },
    margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, color: "FFFFFF", font: "Arial", size: 20 })] })]
  });
}

function cell(text, width, opts = {}) {
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA },
    shading: opts.shade ? { fill: opts.shade, type: ShadingType.CLEAR } : undefined,
    margins: cellMargins,
    children: [new Paragraph({
      alignment: opts.center ? AlignmentType.CENTER : AlignmentType.LEFT,
      children: [new TextRun({ text, font: "Arial", size: 20, bold: !!opts.bold, color: opts.color || "1E293B" })]
    })]
  });
}

function makeRow(cells) {
  return new TableRow({ children: cells });
}

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
    properties: {
      page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
    },
    children: [
      // TITLE
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [
        new TextRun({ text: "ReasonDx Platform", font: "Arial", size: 40, bold: true, color: "0F766E" })
      ]}),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [
        new TextRun({ text: "Design Unification & Reference Audit Report", font: "Arial", size: 28, color: "475569" })
      ]}),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 }, children: [
        new TextRun({ text: "February 13, 2026", font: "Arial", size: 22, color: "94A3B8" })
      ]}),

      // EXECUTIVE SUMMARY
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Executive Summary")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "This session performed a comprehensive design unification across the entire ReasonDx platform (928 HTML files, 282 deep dive JSONs). Three major workstreams were completed: (1) visual design standardization matching the landing page aesthetic, (2) light-theme default with dark-mode toggle, and (3) academic reference injection across all content layers.", size: 22 })
      ]}),

      // AUDIT SUMMARY TABLE
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Audit Summary")] }),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [3200, 2000, 2000, 2160],
        rows: [
          makeRow([
            headerCell("Workstream", 3200),
            headerCell("Before", 2000),
            headerCell("After", 2000),
            headerCell("Status", 2160)
          ]),
          makeRow([
            cell("Design System (rdx-theme.css)", 3200, { bold: true }),
            cell("Mixed inline styles", 2000, { center: true }),
            cell("928 files linked", 2000, { center: true }),
            cell("COMPLETE", 2160, { center: true, color: "0F766E", bold: true })
          ]),
          makeRow([
            cell("Nav Bar (rdx-nav.js)", 3200, { bold: true }),
            cell("3+ different navs", 2000, { center: true }),
            cell("1 unified nav", 2000, { center: true }),
            cell("COMPLETE", 2160, { center: true, color: "0F766E", bold: true })
          ]),
          makeRow([
            cell("Light Theme Default", 3200, { bold: true }),
            cell("585 dark-themed", 2000, { center: true }),
            cell("0 dark-themed", 2000, { center: true }),
            cell("COMPLETE", 2160, { center: true, color: "0F766E", bold: true })
          ]),
          makeRow([
            cell("Dark Mode Toggle", 3200, { bold: true }),
            cell("Not available", 2000, { center: true }),
            cell("All pages", 2000, { center: true }),
            cell("COMPLETE", 2160, { center: true, color: "0F766E", bold: true })
          ]),
          makeRow([
            cell("Topic Page References", 3200, { bold: true }),
            cell("0 specific refs", 2000, { center: true }),
            cell("314/315 specific", 2000, { center: true }),
            cell("COMPLETE", 2160, { center: true, color: "0F766E", bold: true })
          ]),
          makeRow([
            cell("Module References", 3200, { bold: true }),
            cell("37 generic", 2000, { center: true }),
            cell("367/367 linked", 2000, { center: true }),
            cell("COMPLETE", 2160, { center: true, color: "0F766E", bold: true })
          ]),
          makeRow([
            cell("Deep Dive References", 3200, { bold: true }),
            cell("94 generic/missing", 2000, { center: true }),
            cell("282/282 linked", 2000, { center: true }),
            cell("COMPLETE", 2160, { center: true, color: "0F766E", bold: true })
          ]),
          makeRow([
            cell("Case References", 3200, { bold: true }),
            cell("235/246", 2000, { center: true }),
            cell("246/246", 2000, { center: true }),
            cell("COMPLETE", 2160, { center: true, color: "0F766E", bold: true })
          ]),
        ]
      }),

      // DESIGN UNIFICATION
      new Paragraph({ spacing: { before: 400 }, heading: HeadingLevel.HEADING_1, children: [new TextRun("Design Unification Details")] }),
      
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Unified Design System (rdx-theme.css)")] }),
      new Paragraph({ spacing: { after: 120 }, children: [
        new TextRun({ text: "Created a comprehensive CSS design system that matches the landing page aesthetic. The system uses CSS custom properties (variables) so all pages inherit a consistent look from a single file. Key features:", size: 22 })
      ]}),
      new Paragraph({ numbering: { reference: "checks", level: 0 }, children: [
        new TextRun({ text: "Light theme default with teal (#0d9488) as primary accent color", size: 22 })
      ]}),
      new Paragraph({ numbering: { reference: "checks", level: 0 }, children: [
        new TextRun({ text: "DM Sans + DM Serif Display font stack matching the landing page", size: 22 })
      ]}),
      new Paragraph({ numbering: { reference: "checks", level: 0 }, children: [
        new TextRun({ text: "Complete dark theme via [data-theme=\"dark\"] with optimized contrast ratios", size: 22 })
      ]}),
      new Paragraph({ numbering: { reference: "checks", level: 0 }, children: [
        new TextRun({ text: "Shared component styles: cards, buttons, teaching boxes, vitals grids, cross-links", size: 22 })
      ]}),
      new Paragraph({ numbering: { reference: "checks", level: 0 }, spacing: { after: 200 }, children: [
        new TextRun({ text: "Legacy variable compatibility (--bg, --card, --text map to new --rdx-* tokens)", size: 22 })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Unified Navigation (rdx-nav.js)")] }),
      new Paragraph({ spacing: { after: 120 }, children: [
        new TextRun({ text: "Replaced 3+ inconsistent navigation patterns with a single injected nav bar:", size: 22 })
      ]}),
      new Paragraph({ numbering: { reference: "checks", level: 0 }, children: [
        new TextRun({ text: "Sticky nav bar with \"ReasonDx\" brand in DM Serif Display (matches landing page)", size: 22 })
      ]}),
      new Paragraph({ numbering: { reference: "checks", level: 0 }, children: [
        new TextRun({ text: "Consistent links: Home, Cases, Modules, Tools", size: 22 })
      ]}),
      new Paragraph({ numbering: { reference: "checks", level: 0 }, children: [
        new TextRun({ text: "Active state highlighting based on current section", size: 22 })
      ]}),
      new Paragraph({ numbering: { reference: "checks", level: 0 }, children: [
        new TextRun({ text: "Theme toggle button (moon/sun icon) for light/dark switching", size: 22 })
      ]}),
      new Paragraph({ numbering: { reference: "checks", level: 0 }, spacing: { after: 200 }, children: [
        new TextRun({ text: "Old inline navs automatically hidden when unified nav loads", size: 22 })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Light Theme Conversion")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "Converted 585 files from hardcoded dark theme to CSS variable references. All inline dark background colors (#0F172A, #1E293B) were replaced with var(--rdx-bg) and var(--rdx-bg-card), which default to light values (#f8fafc, #ffffff). Header gradients were standardized to teal (#0f766e → #0d9488). Sticky headers were offset by 56px to sit below the unified nav bar.", size: 22 })
      ]}),

      // FILES MODIFIED TABLE
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Files Modified")] }),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [3500, 2000, 3860],
        rows: [
          makeRow([
            headerCell("Folder", 3500),
            headerCell("Files", 2000),
            headerCell("Changes Applied", 3860)
          ]),
          makeRow([
            cell("topics/ (315 files)", 3500),
            cell("315", 2000, { center: true }),
            cell("References, theme CSS link, nav JS", 3860)
          ]),
          makeRow([
            cell("modules/ (367 files)", 3500),
            cell("367", 2000, { center: true }),
            cell("Dark→light, references, nav, header offset", 3860)
          ]),
          makeRow([
            cell("cases/ (246 files)", 3500),
            cell("246", 2000, { center: true }),
            cell("Dark→light, references, nav, gradients", 3860)
          ]),
          makeRow([
            cell("data/deep-dives/ (282 files)", 3500),
            cell("94", 2000, { center: true }),
            cell("Generic references → specific StatPearls", 3860)
          ]),
          makeRow([
            cell("Root + tools/ (36 files)", 3500),
            cell("26", 2000, { center: true }),
            cell("Dark→light, nav updates", 3860)
          ]),
          makeRow([
            cell("Design system files", 3500, { bold: true }),
            cell("4", 2000, { center: true, bold: true }),
            cell("rdx-theme.css, rdx-nav.js (root + js/)", 3860, { bold: true })
          ]),
        ]
      }),

      // PAGE BREAK
      new Paragraph({ children: [new PageBreak()] }),

      // REFERENCE AUDIT
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Reference Audit Details")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "All references use open-access sources only, consistent with the platform's educational mission. The primary reference source is StatPearls (NCBI Bookshelf), which provides peer-reviewed, frequently updated medical content available at no cost.", size: 22 })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Reference Coverage")] }),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2500, 2200, 2200, 2460],
        rows: [
          makeRow([
            headerCell("Content Layer", 2500),
            headerCell("Total Files", 2200),
            headerCell("With Specific Refs", 2200),
            headerCell("Coverage", 2460)
          ]),
          makeRow([
            cell("Topic Pages", 2500, { bold: true }),
            cell("315", 2200, { center: true }),
            cell("314", 2200, { center: true }),
            cell("99.7%", 2460, { center: true, color: "0F766E", bold: true })
          ]),
          makeRow([
            cell("Modules", 2500, { bold: true }),
            cell("367", 2200, { center: true }),
            cell("367", 2200, { center: true }),
            cell("100%", 2460, { center: true, color: "0F766E", bold: true })
          ]),
          makeRow([
            cell("Adventure Cases", 2500, { bold: true }),
            cell("246", 2200, { center: true }),
            cell("246", 2200, { center: true }),
            cell("100%", 2460, { center: true, color: "0F766E", bold: true })
          ]),
          makeRow([
            cell("Deep Dives (JSON)", 2500, { bold: true }),
            cell("282", 2200, { center: true }),
            cell("282", 2200, { center: true }),
            cell("100%", 2460, { center: true, color: "0F766E", bold: true })
          ]),
        ]
      }),

      new Paragraph({ spacing: { before: 200 }, heading: HeadingLevel.HEADING_2, children: [new TextRun("Reference Source Strategy")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "A comprehensive reference database was built mapping 200+ clinical topics to specific StatPearls NBK identifiers. Each reference includes a direct URL to the open-access NCBI Bookshelf article. Generated modules and deep dives that previously had generic placeholder URLs (e.g., https://www.ncbi.nlm.nih.gov/books/) were updated with topic-specific links.", size: 22 })
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [
        new TextRun({ text: "StatPearls / NCBI Bookshelf: Primary source for all clinical references", size: 22 })
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [
        new TextRun({ text: "Hand-built content: Retains original curated references (AAAAI, WAO, AHA, etc.)", size: 22 })
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 200 }, children: [
        new TextRun({ text: "Deep dives: JSON references array updated with structured source metadata", size: 22 })
      ]}),

      // CONTENT ORIGINALITY
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Content Originality Notes")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "The platform content falls into two categories regarding originality:", size: 22 })
      ]}),
      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Hand-Built Content (~150 files)")] }),
      new Paragraph({ spacing: { after: 120 }, children: [
        new TextRun({ text: "Original clinical reasoning cases, CRT modules, and topic pages developed with unique case narratives, custom decision trees, and original teaching points. These contain unique pedagogical framing, original clinical scenarios, and proprietary reasoning pathway structures.", size: 22 })
      ]}),
      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Generated Content (~780 files)")] }),
      new Paragraph({ spacing: { after: 120 }, children: [
        new TextRun({ text: "Modules, deep dives, and topic pages created via batch generators. These synthesize medical knowledge into original educational frameworks (staged learning, MCQ-based assessment, branching scenarios) but the underlying medical facts are standard clinical knowledge. Each generated file uses unique structural templates and original question/answer formulations.", size: 22 })
      ]}),
      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Recommended Next Steps for Originality")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [
        new TextRun({ text: "Enrich generated deep dives with unique clinical pearls, mnemonics, and teaching frameworks", size: 22 })
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [
        new TextRun({ text: "Add inline citations throughout content (e.g., \"According to the 2024 GINA guidelines...\")", size: 22 })
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [
        new TextRun({ text: "Develop proprietary case narratives for the remaining 67 adventure case gaps", size: 22 })
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 200 }, children: [
        new TextRun({ text: "Consider running content through plagiarism detection for external submission", size: 22 })
      ]}),

      // REMAINING WORK
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Remaining Work")] }),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [3500, 1500, 4360],
        rows: [
          makeRow([
            headerCell("Task", 3500),
            headerCell("Priority", 1500),
            headerCell("Notes", 4360)
          ]),
          makeRow([
            cell("Inline academic citations", 3500),
            cell("HIGH", 1500, { center: true, color: "DC2626", bold: true }),
            cell("Add numbered [1][2] inline refs throughout content body text", 4360)
          ]),
          makeRow([
            cell("67 missing adventure cases", 3500),
            cell("HIGH", 1500, { center: true, color: "DC2626", bold: true }),
            cell("Flagship interactive content — most complex to generate", 4360)
          ]),
          makeRow([
            cell("Deep dive enrichment", 3500),
            cell("MEDIUM", 1500, { center: true, color: "D97706", bold: true }),
            cell("Scaffold deep dives need richer clinical detail", 4360)
          ]),
          makeRow([
            cell("Plagiarism scan", 3500),
            cell("MEDIUM", 1500, { center: true, color: "D97706", bold: true }),
            cell("Run content through detection tools before publication", 4360)
          ]),
          makeRow([
            cell("Cross-browser theme testing", 3500),
            cell("LOW", 1500, { center: true, color: "0F766E" }),
            cell("Verify light/dark toggle works across browsers", 4360)
          ]),
        ]
      }),

      // TECHNICAL FILES
      new Paragraph({ spacing: { before: 400 }, heading: HeadingLevel.HEADING_1, children: [new TextRun("Technical Files Created")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [
        new TextRun({ text: "css/rdx-theme.css — Master design system (light/dark tokens, shared components)", size: 22, bold: true }),
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [
        new TextRun({ text: "js/rdx-nav.js — Unified nav bar with theme toggle", size: 22, bold: true }),
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [
        new TextRun({ text: "js/dx-universal-nav.js — Deprecated (replaced by rdx-nav.js)", size: 22 }),
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, children: [
        new TextRun({ text: "rdx-theme.css, rdx-nav.js — Root copies for direct-access pages", size: 22 }),
      ]}),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('/mnt/user-data/outputs/ReasonDx-Design-Audit-Report.docx', buffer);
  console.log('Report created successfully');
});
