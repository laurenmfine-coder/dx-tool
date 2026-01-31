# DxSuite Science Modules: Open-Access Reference Framework

## Purpose
This document establishes the open-access sources used for MicrobiologyDx and PharmacologyDx content. All modules should cite these sources explicitly, ensuring verifiable, evidence-based content consistent with ReasonDx standards.

---

## MICROBIOLOGY SOURCES

### Primary Guidelines & Treatment Resources

| Source | URL | Content Type | Use For |
|--------|-----|--------------|---------|
| **CDC** | cdc.gov | Treatment guidelines, epidemiology, outbreak data | Current treatment recommendations, resistance patterns, prevention |
| **IDSA Practice Guidelines** | idsociety.org/practice-guideline | Evidence-based guidelines | Pneumonia, UTI, skin infections, meningitis, endocarditis |
| **WHO** | who.int | Global guidelines, disease summaries | TB, HIV, hepatitis, antimicrobial resistance |
| **NIH HIV Guidelines** | clinicalinfo.hiv.gov | ART guidelines, OI prevention | HIV/AIDS treatment, prophylaxis thresholds |

### Foundational Microbiology

| Source | URL | Content Type | Use For |
|--------|-----|--------------|---------|
| **OpenStax Microbiology** | openstax.org/details/books/microbiology | Free textbook | Cell structure, genetics, pathogenesis basics |
| **NCBI Bookshelf - Medical Microbiology** | ncbi.nlm.nih.gov/books/NBK7627 | Free textbook (Baron's) | Organism-specific chapters, virulence factors |
| **MicrobeWiki (Kenyon)** | microbewiki.kenyon.edu | Student-edited wiki | Supplementary organism details |

### Laboratory & Diagnostics

| Source | URL | Content Type | Use For |
|--------|-----|--------------|---------|
| **ASM Clinical Microbiology** | asm.org | Guidelines, resources | Lab methods, interpretation |
| **CDC ARLN** | cdc.gov/drugresistance | Resistance data | Current resistance patterns, CRE, ESBL prevalence |
| **CLSI** (selected free resources) | clsi.org | Breakpoints | Susceptibility interpretation |

### Vaccines & Prevention

| Source | URL | Content Type | Use For |
|--------|-----|--------------|---------|
| **CDC Immunization Schedules** | cdc.gov/vaccines/schedules | Vaccination guidelines | Meningococcal, pneumococcal, hepatitis vaccines |
| **CDC Pink Book** | cdc.gov/vaccines/pubs/pinkbook | Vaccine-preventable diseases | Epidemiology, vaccine details |

---

## PHARMACOLOGY SOURCES

### Drug Information

| Source | URL | Content Type | Use For |
|--------|-----|--------------|---------|
| **FDA Drug Labels** | accessdata.fda.gov/scripts/cder/daf | Official prescribing info | Indications, dosing, black box warnings, contraindications |
| **DailyMed (NIH/NLM)** | dailymed.nlm.nih.gov | Package inserts | Complete drug information |
| **Medscape Drug Reference** | reference.medscape.com/drugs | Drug monographs (free registration) | Clinical dosing, interactions, adverse effects |

### Antimicrobial Guidelines

| Source | URL | Content Type | Use For |
|--------|-----|--------------|---------|
| **IDSA Guidelines** | idsociety.org | Treatment guidelines | Empiric therapy, duration, special populations |
| **Sanford Guide** (selected free content) | sanfordguide.com | Antimicrobial reference | Quick reference (limited free access) |
| **CDC Antibiotic Prescribing** | cdc.gov/antibiotic-use | Stewardship guidelines | Appropriate use, resistance prevention |
| **Johns Hopkins ABX Guide** | hopkinsguides.com/hopkins/ab | Antimicrobial guide (institutional) | Treatment recommendations |

### Specific Drug Class Resources

| Drug Class | Primary Sources |
|------------|-----------------|
| **Beta-lactams** | FDA labels, IDSA guidelines, CDC resistance data |
| **Vancomycin** | IDSA vancomycin guidelines (2020), FDA label |
| **Aminoglycosides** | FDA labels, IDSA endocarditis guidelines |
| **Fluoroquinolones** | FDA black box warnings, IDSA guidelines |
| **Macrolides** | FDA labels, ATS/IDSA pneumonia guidelines |
| **Tetracyclines** | CDC tick-borne disease guidelines, FDA labels |
| **TMP-SMX** | NIH HIV OI guidelines, FDA label |
| **Antifungals** | IDSA candidiasis/aspergillosis guidelines, FDA labels |

### Pharmacokinetics & Dosing

| Source | URL | Content Type | Use For |
|--------|-----|--------------|---------|
| **FDA Renal Dosing Guidance** | fda.gov | Dosing adjustments | Renal/hepatic impairment |
| **UpToDate Drug Interactions** | Limited free via institutional | Interactions | CYP450 interactions (reference only) |
| **Lexicomp** (via institutional) | online.lexi.com | Drug database | Cross-reference dosing |

---

## CITATION FORMAT FOR MODULES

### In-Module Citations
Each module should include a "Sources" section at the bottom with format:

```html
<section class="section sources-section">
    <h2>📚 Sources & Guidelines</h2>
    <ul class="source-list">
        <li><strong>CDC:</strong> [Specific page title]. Centers for Disease Control and Prevention. 
            <a href="[URL]" target="_blank">[URL]</a>. Accessed [Date].</li>
        <li><strong>IDSA:</strong> [Guideline title]. Clinical Infectious Diseases. [Year];[Volume]:[Pages]. 
            <a href="[DOI or URL]" target="_blank">Open Access</a></li>
        <li><strong>FDA:</strong> [Drug name] Prescribing Information. 
            <a href="[DailyMed URL]" target="_blank">DailyMed</a></li>
    </ul>
</section>
```

### Inline High-Yield Boxes
When citing specific recommendations:

```html
<div class="clinical-pearl">
    <strong>Per IDSA 2019:</strong> Ceftriaxone 500mg IM x1 is first-line for uncomplicated gonorrhea.
    <span class="source-tag">[IDSA STI Guidelines 2021]</span>
</div>
```

---

## KEY GUIDELINES BY TOPIC

### Bacteria-Specific Guidelines

| Organism | Primary Guideline | Source |
|----------|-------------------|--------|
| S. aureus (MRSA) | IDSA MRSA Guidelines 2011 | CID 2011;52:e18-55 |
| S. pneumoniae | ATS/IDSA CAP Guidelines 2019 | AJRCCM 2019;200:e45-e67 |
| E. coli (UTI) | IDSA UTI Guidelines 2010 | CID 2011;52:e103-e120 |
| Pseudomonas | IDSA HAP/VAP Guidelines 2016 | CID 2016;63:e61-e111 |
| C. difficile | IDSA/SHEA CDI Guidelines 2021 | CID 2021;73:e1029-e1044 |
| N. gonorrhoeae | CDC STI Treatment Guidelines 2021 | cdc.gov/std/treatment-guidelines |
| N. meningitidis | CDC Meningococcal Disease | cdc.gov/meningococcal |
| M. tuberculosis | ATS/CDC/IDSA TB Guidelines 2016 | CID 2016;63:e87-e92 |
| HIV | NIH HIV Treatment Guidelines | clinicalinfo.hiv.gov |
| Hepatitis B/C | AASLD Hepatitis Guidelines | aasld.org/practice-guidelines |

### Drug Class Guidelines

| Drug Class | Primary Guideline |
|------------|-------------------|
| Vancomycin dosing | IDSA/ASHP/SIDP Vancomycin Guidelines 2020 |
| Aminoglycoside dosing | Hartford nomogram, IDSA endocarditis |
| Antifungal selection | IDSA Candidiasis 2016, Aspergillosis 2016 |
| PCP prophylaxis | NIH OI Prevention Guidelines |

---

## OPEN-ACCESS TEXTBOOKS

### Medical Microbiology
1. **Baron's Medical Microbiology** (NCBI Bookshelf)
   - URL: ncbi.nlm.nih.gov/books/NBK7627
   - Full chapters on all major pathogens
   - Free, citable, peer-reviewed

2. **OpenStax Microbiology**
   - URL: openstax.org/details/books/microbiology
   - Foundational concepts
   - Free PDF download

### Pharmacology
1. **NCBI Bookshelf - StatPearls**
   - URL: ncbi.nlm.nih.gov/books/NBK430685 (example)
   - Individual drug and disease articles
   - Continuously updated, peer-reviewed

2. **WHO Model Formulary**
   - Essential medicines information
   - Free access

---

## AUDIT CHECKLIST FOR MODULES

Each MicrobiologyDx/PharmacologyDx module should be verified against:

- [ ] **Treatment recommendations** match current IDSA/CDC guidelines
- [ ] **Drug dosing** verified against FDA labels/DailyMed
- [ ] **Resistance patterns** reflect current CDC/ARLN data
- [ ] **Vaccine recommendations** match CDC ACIP guidelines
- [ ] **Sources section** included with clickable links
- [ ] **No proprietary content** (Sanford full text, UpToDate verbatim, etc.)
- [ ] **High-yield points** tagged with guideline source

---

## VERSION CONTROL

| Date | Updates |
|------|---------|
| Jan 2026 | Initial framework created |
| | CDC STI Guidelines 2021 incorporated |
| | IDSA Vancomycin Guidelines 2020 incorporated |
| | NIH HIV Guidelines current version |

---

## NOTES

1. **Avoid**: Sanford Guide (subscription), UpToDate (subscription), Bates' Guide, proprietary board review materials

2. **Prefer**: CDC, IDSA open-access guidelines, FDA labels, NCBI Bookshelf, OpenStax

3. **For contested/evolving topics**: Cite primary literature via PubMed/PMC open-access articles

4. **Update frequency**: Review guidelines annually; CDC/IDSA updates take priority
