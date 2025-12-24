/**
 * ReasonDx Physical Examination Findings Library
 * Complete searchable library organized by body system
 * Version 1.0 | December 2024
 * 
 * Total: ~800 findings across all body systems
 */

const PhysicalExamLibrary = {

    metadata: {
        version: "1.0",
        totalFindings: 812,
        lastUpdated: "2024-12",
        categories: 16
    },

    // ============================================================
    // GENERAL / VITAL SIGNS (~50 findings)
    // ============================================================
    general: {
        name: "General Appearance & Vital Signs",
        findings: [
            // Mental Status
            { id: "gen-001", finding: "Alert and oriented x3 (person, place, time)", normal: true, tags: ["mental status", "orientation"] },
            { id: "gen-002", finding: "Alert and oriented x4 (person, place, time, situation)", normal: true, tags: ["mental status", "orientation"] },
            { id: "gen-003", finding: "Lethargic but arousable", normal: false, tags: ["mental status", "consciousness"] },
            { id: "gen-004", finding: "Somnolent", normal: false, tags: ["mental status", "consciousness"] },
            { id: "gen-005", finding: "Obtunded", normal: false, tags: ["mental status", "consciousness"] },
            { id: "gen-006", finding: "Stuporous", normal: false, tags: ["mental status", "consciousness"] },
            { id: "gen-007", finding: "Comatose/unresponsive", normal: false, tags: ["mental status", "consciousness", "emergency"] },
            { id: "gen-008", finding: "Confused", normal: false, tags: ["mental status", "delirium"] },
            { id: "gen-009", finding: "Agitated", normal: false, tags: ["mental status", "behavior"] },
            { id: "gen-010", finding: "Combative", normal: false, tags: ["mental status", "behavior", "emergency"] },
            
            // Appearance
            { id: "gen-011", finding: "Appears stated age", normal: true, tags: ["appearance"] },
            { id: "gen-012", finding: "Appears older than stated age", normal: false, tags: ["appearance", "chronic illness"] },
            { id: "gen-013", finding: "Well-developed, well-nourished (WDWN)", normal: true, tags: ["appearance", "nutrition"] },
            { id: "gen-014", finding: "Cachectic/wasted appearance", normal: false, tags: ["appearance", "nutrition", "malignancy", "chronic illness"] },
            { id: "gen-015", finding: "Malnourished appearance", normal: false, tags: ["appearance", "nutrition"] },
            { id: "gen-016", finding: "Obese habitus", normal: false, tags: ["appearance", "obesity"] },
            { id: "gen-017", finding: "Morbidly obese", normal: false, tags: ["appearance", "obesity"] },
            
            // Distress
            { id: "gen-018", finding: "No acute distress (NAD)", normal: true, tags: ["distress"] },
            { id: "gen-019", finding: "Mild distress", normal: false, tags: ["distress"] },
            { id: "gen-020", finding: "Moderate distress", normal: false, tags: ["distress"] },
            { id: "gen-021", finding: "Severe distress", normal: false, tags: ["distress", "emergency"] },
            { id: "gen-022", finding: "Appears uncomfortable", normal: false, tags: ["distress", "pain"] },
            { id: "gen-023", finding: "Writhing in pain", normal: false, tags: ["distress", "pain", "renal colic"] },
            { id: "gen-024", finding: "Lying completely still", normal: false, tags: ["distress", "peritonitis"] },
            
            // Skin color (general)
            { id: "gen-025", finding: "Skin color normal", normal: true, tags: ["skin", "color"] },
            { id: "gen-026", finding: "Pale/pallor", normal: false, tags: ["skin", "color", "anemia", "shock"] },
            { id: "gen-027", finding: "Flushed", normal: false, tags: ["skin", "color", "fever"] },
            { id: "gen-028", finding: "Jaundiced/icteric", normal: false, tags: ["skin", "color", "liver", "hemolysis"] },
            { id: "gen-029", finding: "Cyanotic", normal: false, tags: ["skin", "color", "hypoxia"] },
            { id: "gen-030", finding: "Diaphoretic", normal: false, tags: ["skin", "sweating", "MI", "hypoglycemia"] },
            { id: "gen-031", finding: "Ashen/gray", normal: false, tags: ["skin", "color", "shock", "emergency"] },
            
            // Vital sign findings
            { id: "gen-032", finding: "Vital signs within normal limits", normal: true, tags: ["vitals"] },
            { id: "gen-033", finding: "Febrile (T >38°C/100.4°F)", normal: false, tags: ["vitals", "fever", "infection"] },
            { id: "gen-034", finding: "High-grade fever (T >39°C/102.2°F)", normal: false, tags: ["vitals", "fever", "infection"] },
            { id: "gen-035", finding: "Hypothermic (T <36°C/96.8°F)", normal: false, tags: ["vitals", "hypothermia", "sepsis"] },
            { id: "gen-036", finding: "Afebrile", normal: true, tags: ["vitals", "fever"] },
            { id: "gen-037", finding: "Tachycardic (HR >100 bpm)", normal: false, tags: ["vitals", "heart rate"] },
            { id: "gen-038", finding: "Bradycardic (HR <60 bpm)", normal: false, tags: ["vitals", "heart rate"] },
            { id: "gen-039", finding: "Irregularly irregular pulse", normal: false, tags: ["vitals", "heart rate", "afib"] },
            { id: "gen-040", finding: "Tachypneic (RR >20/min)", normal: false, tags: ["vitals", "respiratory"] },
            { id: "gen-041", finding: "Bradypneic (RR <12/min)", normal: false, tags: ["vitals", "respiratory"] },
            { id: "gen-042", finding: "Hypertensive (BP >140/90)", normal: false, tags: ["vitals", "blood pressure"] },
            { id: "gen-043", finding: "Severely hypertensive (BP >180/120)", normal: false, tags: ["vitals", "blood pressure", "emergency"] },
            { id: "gen-044", finding: "Hypotensive (SBP <90)", normal: false, tags: ["vitals", "blood pressure", "shock"] },
            { id: "gen-045", finding: "Orthostatic hypotension present", normal: false, tags: ["vitals", "blood pressure", "dehydration"] },
            { id: "gen-046", finding: "Hypoxic (SpO2 <90% on RA)", normal: false, tags: ["vitals", "oxygen", "respiratory"] },
            { id: "gen-047", finding: "Oxygen saturation normal on room air", normal: true, tags: ["vitals", "oxygen"] },
            { id: "gen-048", finding: "Wide pulse pressure", normal: false, tags: ["vitals", "aortic regurgitation"] },
            { id: "gen-049", finding: "Narrow pulse pressure", normal: false, tags: ["vitals", "tamponade", "shock"] },
            { id: "gen-050", finding: "Pulsus paradoxus present (>10 mmHg)", normal: false, tags: ["vitals", "tamponade", "asthma"] }
        ]
    },

    // ============================================================
    // HEAD (~20 findings)
    // ============================================================
    head: {
        name: "Head",
        findings: [
            { id: "head-001", finding: "Normocephalic, atraumatic (NC/AT)", normal: true, tags: ["shape", "trauma"] },
            { id: "head-002", finding: "Scalp without lesions", normal: true, tags: ["scalp"] },
            { id: "head-003", finding: "Scalp laceration", normal: false, tags: ["scalp", "trauma"] },
            { id: "head-004", finding: "Scalp hematoma", normal: false, tags: ["scalp", "trauma"] },
            { id: "head-005", finding: "Scalp tenderness to palpation", normal: false, tags: ["scalp", "tenderness"] },
            { id: "head-006", finding: "Battle sign (mastoid ecchymosis)", normal: false, tags: ["trauma", "basilar skull fracture"] },
            { id: "head-007", finding: "Raccoon eyes (periorbital ecchymosis)", normal: false, tags: ["trauma", "basilar skull fracture"] },
            { id: "head-008", finding: "Frontal bossing", normal: false, tags: ["shape", "acromegaly", "rickets"] },
            { id: "head-009", finding: "Temporal wasting", normal: false, tags: ["wasting", "malnutrition", "HIV"] },
            { id: "head-010", finding: "Alopecia - patchy", normal: false, tags: ["hair", "alopecia areata"] },
            { id: "head-011", finding: "Alopecia - diffuse", normal: false, tags: ["hair", "thyroid", "chemotherapy"] },
            { id: "head-012", finding: "Facial asymmetry", normal: false, tags: ["cranial nerve", "stroke", "Bell's palsy"] },
            { id: "head-013", finding: "Moon facies", normal: false, tags: ["Cushing", "steroids"] },
            { id: "head-014", finding: "Facial plethora", normal: false, tags: ["Cushing", "polycythemia"] },
            { id: "head-015", finding: "Coarse facial features", normal: false, tags: ["acromegaly", "hypothyroid"] },
            { id: "head-016", finding: "Anterior fontanelle flat and soft (infant)", normal: true, tags: ["fontanelle", "pediatric"] },
            { id: "head-017", finding: "Anterior fontanelle bulging (infant)", normal: false, tags: ["fontanelle", "pediatric", "ICP", "meningitis"] },
            { id: "head-018", finding: "Anterior fontanelle sunken (infant)", normal: false, tags: ["fontanelle", "pediatric", "dehydration"] },
            { id: "head-019", finding: "Cephalohematoma (newborn)", normal: false, tags: ["pediatric", "birth trauma"] },
            { id: "head-020", finding: "Caput succedaneum (newborn)", normal: false, tags: ["pediatric", "birth trauma"] }
        ]
    },

    // ============================================================
    // EYES (~75 findings)
    // ============================================================
    eyes: {
        name: "Eyes",
        findings: [
            // Pupils
            { id: "eye-001", finding: "Pupils equal, round, reactive to light (PERRL)", normal: true, tags: ["pupils"] },
            { id: "eye-002", finding: "Pupils equal, round, reactive to light and accommodation (PERRLA)", normal: true, tags: ["pupils"] },
            { id: "eye-003", finding: "Pupils 3mm bilaterally", normal: true, tags: ["pupils", "size"] },
            { id: "eye-004", finding: "Anisocoria (unequal pupils)", normal: false, tags: ["pupils", "CN III", "Horner"] },
            { id: "eye-005", finding: "Miosis (constricted pupils <2mm)", normal: false, tags: ["pupils", "opioids", "Horner"] },
            { id: "eye-006", finding: "Mydriasis (dilated pupils >6mm)", normal: false, tags: ["pupils", "anticholinergic", "CN III"] },
            { id: "eye-007", finding: "Fixed and dilated pupils", normal: false, tags: ["pupils", "emergency", "herniation", "death"] },
            { id: "eye-008", finding: "Sluggish pupillary response", normal: false, tags: ["pupils", "CN III"] },
            { id: "eye-009", finding: "Afferent pupillary defect (Marcus Gunn pupil)", normal: false, tags: ["pupils", "optic nerve", "MS"] },
            { id: "eye-010", finding: "Argyll Robertson pupils (accommodate but don't react)", normal: false, tags: ["pupils", "syphilis"] },
            { id: "eye-011", finding: "Hippus (pupillary oscillation)", normal: false, tags: ["pupils"] },
            
            // Extraocular movements
            { id: "eye-012", finding: "Extraocular movements intact (EOMI)", normal: true, tags: ["EOM"] },
            { id: "eye-013", finding: "Extraocular movements intact without nystagmus", normal: true, tags: ["EOM", "nystagmus"] },
            { id: "eye-014", finding: "Horizontal nystagmus", normal: false, tags: ["EOM", "nystagmus", "vestibular", "cerebellar"] },
            { id: "eye-015", finding: "Vertical nystagmus", normal: false, tags: ["EOM", "nystagmus", "central"] },
            { id: "eye-016", finding: "Rotary/torsional nystagmus", normal: false, tags: ["EOM", "nystagmus", "BPPV"] },
            { id: "eye-017", finding: "Direction-changing nystagmus", normal: false, tags: ["EOM", "nystagmus", "central"] },
            { id: "eye-018", finding: "CN III palsy (down and out, ptosis, mydriasis)", normal: false, tags: ["EOM", "cranial nerve", "aneurysm"] },
            { id: "eye-019", finding: "CN IV palsy (hypertropia, head tilt)", normal: false, tags: ["EOM", "cranial nerve"] },
            { id: "eye-020", finding: "CN VI palsy (esotropia, can't abduct)", normal: false, tags: ["EOM", "cranial nerve", "ICP"] },
            { id: "eye-021", finding: "Internuclear ophthalmoplegia (INO)", normal: false, tags: ["EOM", "MS", "stroke"] },
            { id: "eye-022", finding: "Conjugate gaze deviation", normal: false, tags: ["EOM", "stroke"] },
            { id: "eye-023", finding: "Strabismus", normal: false, tags: ["EOM", "alignment"] },
            { id: "eye-024", finding: "Diplopia elicited on exam", normal: false, tags: ["EOM", "diplopia"] },
            { id: "eye-025", finding: "Limitation of upward gaze", normal: false, tags: ["EOM", "Parinaud", "thyroid"] },
            
            // Conjunctiva/Sclera
            { id: "eye-026", finding: "Conjunctivae clear", normal: true, tags: ["conjunctiva"] },
            { id: "eye-027", finding: "Conjunctival injection (red eye)", normal: false, tags: ["conjunctiva", "infection", "inflammation"] },
            { id: "eye-028", finding: "Conjunctival pallor (anemia)", normal: false, tags: ["conjunctiva", "anemia"] },
            { id: "eye-029", finding: "Subconjunctival hemorrhage", normal: false, tags: ["conjunctiva", "bleeding"] },
            { id: "eye-030", finding: "Chemosis (conjunctival edema)", normal: false, tags: ["conjunctiva", "allergy", "thyroid"] },
            { id: "eye-031", finding: "Sclerae anicteric (no jaundice)", normal: true, tags: ["sclera", "jaundice"] },
            { id: "eye-032", finding: "Scleral icterus/jaundice", normal: false, tags: ["sclera", "jaundice", "liver", "hemolysis"] },
            { id: "eye-033", finding: "Blue sclera", normal: false, tags: ["sclera", "osteogenesis imperfecta"] },
            { id: "eye-034", finding: "Pinguecula", normal: false, tags: ["conjunctiva"] },
            { id: "eye-035", finding: "Pterygium", normal: false, tags: ["conjunctiva"] },
            
            // Eyelids
            { id: "eye-036", finding: "Eyelids normal", normal: true, tags: ["eyelids"] },
            { id: "eye-037", finding: "Ptosis - unilateral", normal: false, tags: ["eyelids", "CN III", "Horner", "MG"] },
            { id: "eye-038", finding: "Ptosis - bilateral", normal: false, tags: ["eyelids", "MG", "myopathy"] },
            { id: "eye-039", finding: "Lid lag", normal: false, tags: ["eyelids", "hyperthyroid"] },
            { id: "eye-040", finding: "Lid retraction", normal: false, tags: ["eyelids", "hyperthyroid"] },
            { id: "eye-041", finding: "Periorbital edema", normal: false, tags: ["eyelids", "allergy", "nephrotic"] },
            { id: "eye-042", finding: "Xanthelasma (yellow lid plaques)", normal: false, tags: ["eyelids", "hyperlipidemia"] },
            { id: "eye-043", finding: "Chalazion", normal: false, tags: ["eyelids"] },
            { id: "eye-044", finding: "Hordeolum (stye)", normal: false, tags: ["eyelids", "infection"] },
            { id: "eye-045", finding: "Blepharitis", normal: false, tags: ["eyelids", "inflammation"] },
            { id: "eye-046", finding: "Ectropion", normal: false, tags: ["eyelids"] },
            { id: "eye-047", finding: "Entropion", normal: false, tags: ["eyelids"] },
            { id: "eye-048", finding: "Lagophthalmos (incomplete closure)", normal: false, tags: ["eyelids", "CN VII"] },
            
            // Fundoscopic/Ophthalmoscopic
            { id: "eye-049", finding: "Red reflex present bilaterally", normal: true, tags: ["fundus"] },
            { id: "eye-050", finding: "Red reflex absent/white", normal: false, tags: ["fundus", "cataract", "retinoblastoma"] },
            { id: "eye-051", finding: "Optic disc margins sharp", normal: true, tags: ["fundus", "optic disc"] },
            { id: "eye-052", finding: "Papilledema", normal: false, tags: ["fundus", "optic disc", "ICP"] },
            { id: "eye-053", finding: "Optic disc pallor", normal: false, tags: ["fundus", "optic disc", "optic atrophy"] },
            { id: "eye-054", finding: "Optic disc cupping (increased cup-to-disc ratio)", normal: false, tags: ["fundus", "glaucoma"] },
            { id: "eye-055", finding: "Cotton wool spots", normal: false, tags: ["fundus", "retina", "diabetes", "HIV", "HTN"] },
            { id: "eye-056", finding: "Flame hemorrhages", normal: false, tags: ["fundus", "retina", "HTN"] },
            { id: "eye-057", finding: "Dot-blot hemorrhages", normal: false, tags: ["fundus", "retina", "diabetes"] },
            { id: "eye-058", finding: "Hard exudates", normal: false, tags: ["fundus", "retina", "diabetes"] },
            { id: "eye-059", finding: "AV nicking", normal: false, tags: ["fundus", "HTN"] },
            { id: "eye-060", finding: "Copper wiring", normal: false, tags: ["fundus", "HTN"] },
            { id: "eye-061", finding: "Silver wiring", normal: false, tags: ["fundus", "HTN severe"] },
            { id: "eye-062", finding: "Roth spots", normal: false, tags: ["fundus", "endocarditis", "leukemia"] },
            { id: "eye-063", finding: "Macular degeneration changes", normal: false, tags: ["fundus", "macula"] },
            { id: "eye-064", finding: "Cherry red spot (macula)", normal: false, tags: ["fundus", "CRAO", "Tay-Sachs"] },
            { id: "eye-065", finding: "Neovascularization", normal: false, tags: ["fundus", "proliferative retinopathy"] },
            { id: "eye-066", finding: "Diabetic retinopathy - nonproliferative", normal: false, tags: ["fundus", "diabetes"] },
            { id: "eye-067", finding: "Diabetic retinopathy - proliferative", normal: false, tags: ["fundus", "diabetes"] },
            { id: "eye-068", finding: "Hypertensive retinopathy", normal: false, tags: ["fundus", "HTN"] },
            
            // Other eye findings
            { id: "eye-069", finding: "Proptosis/exophthalmos", normal: false, tags: ["orbit", "thyroid", "tumor"] },
            { id: "eye-070", finding: "Enophthalmos", normal: false, tags: ["orbit", "Horner", "fracture"] },
            { id: "eye-071", finding: "Kayser-Fleischer rings", normal: false, tags: ["cornea", "Wilson disease"] },
            { id: "eye-072", finding: "Arcus senilis", normal: false, tags: ["cornea", "aging", "hyperlipidemia"] },
            { id: "eye-073", finding: "Corneal opacity/clouding", normal: false, tags: ["cornea"] },
            { id: "eye-074", finding: "Hypopyon (pus in anterior chamber)", normal: false, tags: ["anterior chamber", "infection"] },
            { id: "eye-075", finding: "Hyphema (blood in anterior chamber)", normal: false, tags: ["anterior chamber", "trauma"] },
            { id: "eye-076", finding: "Visual acuity decreased", normal: false, tags: ["vision"] },
            { id: "eye-077", finding: "Visual field deficit on confrontation", normal: false, tags: ["vision", "stroke", "tumor"] },
            { id: "eye-078", finding: "Photophobia", normal: false, tags: ["light sensitivity", "meningitis", "uveitis"] }
        ]
    },

    // ============================================================
    // EARS (~30 findings)
    // ============================================================
    ears: {
        name: "Ears",
        findings: [
            { id: "ear-001", finding: "External ears normal bilaterally", normal: true, tags: ["external"] },
            { id: "ear-002", finding: "External auditory canals clear", normal: true, tags: ["canal"] },
            { id: "ear-003", finding: "Tympanic membranes intact and pearly gray", normal: true, tags: ["TM"] },
            { id: "ear-004", finding: "Light reflex present bilaterally", normal: true, tags: ["TM"] },
            { id: "ear-005", finding: "Tympanic membrane erythematous", normal: false, tags: ["TM", "otitis media"] },
            { id: "ear-006", finding: "Tympanic membrane bulging", normal: false, tags: ["TM", "otitis media"] },
            { id: "ear-007", finding: "Tympanic membrane retracted", normal: false, tags: ["TM", "effusion", "ETD"] },
            { id: "ear-008", finding: "Tympanic membrane perforated", normal: false, tags: ["TM", "perforation"] },
            { id: "ear-009", finding: "Middle ear effusion (air-fluid level)", normal: false, tags: ["TM", "effusion"] },
            { id: "ear-010", finding: "Hemotympanum", normal: false, tags: ["TM", "trauma", "basilar skull fracture"] },
            { id: "ear-011", finding: "Cerumen impaction", normal: false, tags: ["canal", "cerumen"] },
            { id: "ear-012", finding: "External auditory canal erythema/edema", normal: false, tags: ["canal", "otitis externa"] },
            { id: "ear-013", finding: "Otorrhea - clear", normal: false, tags: ["canal", "discharge", "CSF leak"] },
            { id: "ear-014", finding: "Otorrhea - purulent", normal: false, tags: ["canal", "discharge", "infection"] },
            { id: "ear-015", finding: "Otorrhea - bloody", normal: false, tags: ["canal", "discharge", "trauma"] },
            { id: "ear-016", finding: "Hearing grossly intact bilaterally", normal: true, tags: ["hearing"] },
            { id: "ear-017", finding: "Hearing decreased - right", normal: false, tags: ["hearing", "hearing loss"] },
            { id: "ear-018", finding: "Hearing decreased - left", normal: false, tags: ["hearing", "hearing loss"] },
            { id: "ear-019", finding: "Hearing decreased - bilateral", normal: false, tags: ["hearing", "hearing loss"] },
            { id: "ear-020", finding: "Weber midline (normal)", normal: true, tags: ["hearing", "Weber"] },
            { id: "ear-021", finding: "Weber lateralizes to right", normal: false, tags: ["hearing", "Weber"] },
            { id: "ear-022", finding: "Weber lateralizes to left", normal: false, tags: ["hearing", "Weber"] },
            { id: "ear-023", finding: "Rinne: AC > BC bilaterally (normal)", normal: true, tags: ["hearing", "Rinne"] },
            { id: "ear-024", finding: "Rinne: BC > AC (conductive loss)", normal: false, tags: ["hearing", "Rinne", "conductive"] },
            { id: "ear-025", finding: "Tragal tenderness (tragus sign)", normal: false, tags: ["tenderness", "otitis externa"] },
            { id: "ear-026", finding: "Mastoid tenderness", normal: false, tags: ["tenderness", "mastoiditis"] },
            { id: "ear-027", finding: "Preauricular lymphadenopathy", normal: false, tags: ["lymph", "infection"] },
            { id: "ear-028", finding: "Postauricular lymphadenopathy", normal: false, tags: ["lymph", "infection"] },
            { id: "ear-029", finding: "Tophi on ears", normal: false, tags: ["external", "gout"] },
            { id: "ear-030", finding: "Cauliflower ear deformity", normal: false, tags: ["external", "trauma"] }
        ]
    },

    // ============================================================
    // NOSE (~25 findings)  
    // ============================================================
    nose: {
        name: "Nose",
        findings: [
            { id: "nose-001", finding: "External nose normal", normal: true, tags: ["external"] },
            { id: "nose-002", finding: "Nasal mucosa pink and moist", normal: true, tags: ["mucosa"] },
            { id: "nose-003", finding: "Nasal mucosa erythematous", normal: false, tags: ["mucosa", "infection", "rhinitis"] },
            { id: "nose-004", finding: "Nasal mucosa pale/boggy", normal: false, tags: ["mucosa", "allergic rhinitis"] },
            { id: "nose-005", finding: "Nasal mucosa edematous", normal: false, tags: ["mucosa", "congestion"] },
            { id: "nose-006", finding: "Turbinate hypertrophy", normal: false, tags: ["mucosa", "chronic rhinitis"] },
            { id: "nose-007", finding: "Nasal septum midline", normal: true, tags: ["septum"] },
            { id: "nose-008", finding: "Deviated nasal septum - right", normal: false, tags: ["septum", "deviation"] },
            { id: "nose-009", finding: "Deviated nasal septum - left", normal: false, tags: ["septum", "deviation"] },
            { id: "nose-010", finding: "Septal perforation", normal: false, tags: ["septum", "cocaine", "vasculitis"] },
            { id: "nose-011", finding: "Septal hematoma", normal: false, tags: ["septum", "trauma", "emergency"] },
            { id: "nose-012", finding: "Clear rhinorrhea", normal: false, tags: ["discharge", "viral", "allergic", "CSF"] },
            { id: "nose-013", finding: "Purulent rhinorrhea", normal: false, tags: ["discharge", "bacterial", "sinusitis"] },
            { id: "nose-014", finding: "Bloody rhinorrhea", normal: false, tags: ["discharge", "epistaxis"] },
            { id: "nose-015", finding: "Epistaxis - anterior source visualized", normal: false, tags: ["bleeding", "Kiesselbach"] },
            { id: "nose-016", finding: "Epistaxis - posterior suspected", normal: false, tags: ["bleeding", "emergency"] },
            { id: "nose-017", finding: "Nasal polyps present", normal: false, tags: ["polyps", "chronic rhinosinusitis"] },
            { id: "nose-018", finding: "Nasal flaring", normal: false, tags: ["respiratory distress", "pediatric"] },
            { id: "nose-019", finding: "Saddle nose deformity", normal: false, tags: ["external", "GPA", "syphilis", "trauma"] },
            { id: "nose-020", finding: "Frontal sinus tenderness", normal: false, tags: ["tenderness", "sinusitis"] },
            { id: "nose-021", finding: "Maxillary sinus tenderness", normal: false, tags: ["tenderness", "sinusitis"] },
            { id: "nose-022", finding: "Ethmoid sinus tenderness", normal: false, tags: ["tenderness", "sinusitis"] },
            { id: "nose-023", finding: "Allergic shiners (infraorbital darkening)", normal: false, tags: ["allergic", "rhinitis"] },
            { id: "nose-024", finding: "Transverse nasal crease (allergic salute)", normal: false, tags: ["allergic", "rhinitis"] },
            { id: "nose-025", finding: "Nasal foreign body visualized", normal: false, tags: ["foreign body", "pediatric"] }
        ]
    },

    // ============================================================
    // THROAT / OROPHARYNX (~55 findings)
    // ============================================================
    throat: {
        name: "Throat/Oropharynx",
        findings: [
            // Oral mucosa
            { id: "thr-001", finding: "Oral mucosa pink and moist", normal: true, tags: ["mucosa"] },
            { id: "thr-002", finding: "Oral mucosa dry", normal: false, tags: ["mucosa", "dehydration"] },
            { id: "thr-003", finding: "Oral mucosa pale", normal: false, tags: ["mucosa", "anemia"] },
            { id: "thr-004", finding: "Oral ulcers/aphthous ulcers", normal: false, tags: ["mucosa", "ulcers", "autoimmune"] },
            { id: "thr-005", finding: "Oral candidiasis (thrush)", normal: false, tags: ["mucosa", "candida", "immunocompromised"] },
            { id: "thr-006", finding: "Leukoplakia", normal: false, tags: ["mucosa", "premalignant"] },
            { id: "thr-007", finding: "Erythroplakia", normal: false, tags: ["mucosa", "premalignant"] },
            { id: "thr-008", finding: "Koplik spots", normal: false, tags: ["mucosa", "measles"] },
            { id: "thr-009", finding: "Palatal petechiae", normal: false, tags: ["mucosa", "strep", "mono"] },
            { id: "thr-010", finding: "Hairy leukoplakia (lateral tongue)", normal: false, tags: ["mucosa", "HIV", "EBV"] },
            
            // Pharynx
            { id: "thr-011", finding: "Pharynx clear, no erythema or exudate", normal: true, tags: ["pharynx"] },
            { id: "thr-012", finding: "Pharyngeal erythema", normal: false, tags: ["pharynx", "pharyngitis"] },
            { id: "thr-013", finding: "Pharyngeal exudates", normal: false, tags: ["pharynx", "strep", "mono"] },
            { id: "thr-014", finding: "Tonsillar erythema", normal: false, tags: ["tonsils", "pharyngitis"] },
            { id: "thr-015", finding: "Tonsillar exudates", normal: false, tags: ["tonsils", "strep", "mono"] },
            { id: "thr-016", finding: "Tonsillar enlargement - 1+ (within pillars)", normal: true, tags: ["tonsils", "size"] },
            { id: "thr-017", finding: "Tonsillar enlargement - 2+ (to pillars)", normal: false, tags: ["tonsils", "size"] },
            { id: "thr-018", finding: "Tonsillar enlargement - 3+ (past pillars)", normal: false, tags: ["tonsils", "size"] },
            { id: "thr-019", finding: "Tonsillar enlargement - 4+ (kissing/midline)", normal: false, tags: ["tonsils", "size", "obstruction"] },
            { id: "thr-020", finding: "Peritonsillar bulge/fullness", normal: false, tags: ["tonsils", "peritonsillar abscess"] },
            { id: "thr-021", finding: "Uvula midline", normal: true, tags: ["uvula"] },
            { id: "thr-022", finding: "Uvula deviated", normal: false, tags: ["uvula", "peritonsillar abscess"] },
            { id: "thr-023", finding: "Uvula edematous", normal: false, tags: ["uvula", "angioedema"] },
            { id: "thr-024", finding: "Posterior pharyngeal cobblestoning", normal: false, tags: ["pharynx", "postnasal drip"] },
            { id: "thr-025", finding: "Post-nasal drip visible", normal: false, tags: ["pharynx", "rhinitis", "sinusitis"] },
            
            // Teeth/Gums
            { id: "thr-026", finding: "Dentition good repair", normal: true, tags: ["teeth"] },
            { id: "thr-027", finding: "Dentition poor repair", normal: false, tags: ["teeth", "dental caries"] },
            { id: "thr-028", finding: "Dental caries present", normal: false, tags: ["teeth", "caries"] },
            { id: "thr-029", finding: "Missing teeth", normal: false, tags: ["teeth"] },
            { id: "thr-030", finding: "Dental abscess/swelling", normal: false, tags: ["teeth", "abscess", "infection"] },
            { id: "thr-031", finding: "Gingival hyperplasia", normal: false, tags: ["gums", "phenytoin", "cyclosporine"] },
            { id: "thr-032", finding: "Gingival bleeding", normal: false, tags: ["gums", "gingivitis", "thrombocytopenia"] },
            { id: "thr-033", finding: "Gingivitis", normal: false, tags: ["gums", "inflammation"] },
            { id: "thr-034", finding: "Lead line on gingiva", normal: false, tags: ["gums", "lead poisoning"] },
            
            // Tongue
            { id: "thr-035", finding: "Tongue midline on protrusion", normal: true, tags: ["tongue", "CN XII"] },
            { id: "thr-036", finding: "Tongue deviates to right", normal: false, tags: ["tongue", "CN XII palsy"] },
            { id: "thr-037", finding: "Tongue deviates to left", normal: false, tags: ["tongue", "CN XII palsy"] },
            { id: "thr-038", finding: "Tongue fasciculations", normal: false, tags: ["tongue", "LMN", "ALS"] },
            { id: "thr-039", finding: "Macroglossia", normal: false, tags: ["tongue", "amyloid", "hypothyroid", "acromegaly"] },
            { id: "thr-040", finding: "Geographic tongue", normal: false, tags: ["tongue"] },
            { id: "thr-041", finding: "Hairy tongue", normal: false, tags: ["tongue"] },
            { id: "thr-042", finding: "Glossitis (smooth, red tongue)", normal: false, tags: ["tongue", "B12", "iron", "folate"] },
            { id: "thr-043", finding: "Coated/furred tongue", normal: false, tags: ["tongue", "dehydration"] },
            { id: "thr-044", finding: "Strawberry tongue", normal: false, tags: ["tongue", "scarlet fever", "Kawasaki"] },
            
            // Palate/Swallowing/Voice
            { id: "thr-045", finding: "Palate elevates symmetrically", normal: true, tags: ["palate", "CN IX/X"] },
            { id: "thr-046", finding: "Palate elevation asymmetric", normal: false, tags: ["palate", "CN IX/X palsy"] },
            { id: "thr-047", finding: "Gag reflex intact", normal: true, tags: ["gag", "CN IX/X"] },
            { id: "thr-048", finding: "Gag reflex absent/diminished", normal: false, tags: ["gag", "CN IX/X", "aspiration risk"] },
            { id: "thr-049", finding: "High arched palate", normal: false, tags: ["palate", "Marfan"] },
            { id: "thr-050", finding: "Cleft palate", normal: false, tags: ["palate", "congenital"] },
            { id: "thr-051", finding: "Voice normal", normal: true, tags: ["voice"] },
            { id: "thr-052", finding: "Voice hoarse", normal: false, tags: ["voice", "laryngitis", "RLN"] },
            { id: "thr-053", finding: "Hot potato voice", normal: false, tags: ["voice", "peritonsillar abscess"] },
            { id: "thr-054", finding: "Stridor audible", normal: false, tags: ["voice", "upper airway obstruction", "emergency"] },
            { id: "thr-055", finding: "Drooling/unable to handle secretions", normal: false, tags: ["swallowing", "epiglottitis", "emergency"] }
        ]
    },

    // ============================================================
    // NECK (~45 findings)
    // ============================================================
    neck: {
        name: "Neck",
        findings: [
            // General
            { id: "neck-001", finding: "Neck supple", normal: true, tags: ["general", "ROM"] },
            { id: "neck-002", finding: "Full range of motion", normal: true, tags: ["general", "ROM"] },
            { id: "neck-003", finding: "Nuchal rigidity/neck stiffness", normal: false, tags: ["general", "meningitis", "SAH"] },
            { id: "neck-004", finding: "Meningismus", normal: false, tags: ["general", "meningitis"] },
            { id: "neck-005", finding: "Decreased ROM - flexion", normal: false, tags: ["general", "ROM"] },
            { id: "neck-006", finding: "Decreased ROM - extension", normal: false, tags: ["general", "ROM"] },
            { id: "neck-007", finding: "Decreased ROM - rotation", normal: false, tags: ["general", "ROM"] },
            { id: "neck-008", finding: "Torticollis", normal: false, tags: ["general", "muscle spasm"] },
            { id: "neck-009", finding: "Kernig sign positive", normal: false, tags: ["meningeal signs", "meningitis"] },
            { id: "neck-010", finding: "Brudzinski sign positive", normal: false, tags: ["meningeal signs", "meningitis"] },
            
            // Lymph nodes
            { id: "neck-011", finding: "No cervical lymphadenopathy", normal: true, tags: ["lymph"] },
            { id: "neck-012", finding: "Anterior cervical lymphadenopathy", normal: false, tags: ["lymph", "infection"] },
            { id: "neck-013", finding: "Posterior cervical lymphadenopathy", normal: false, tags: ["lymph", "mono", "HIV"] },
            { id: "neck-014", finding: "Supraclavicular lymphadenopathy - left (Virchow's node)", normal: false, tags: ["lymph", "malignancy", "GI cancer"] },
            { id: "neck-015", finding: "Supraclavicular lymphadenopathy - right", normal: false, tags: ["lymph", "malignancy", "lung cancer"] },
            { id: "neck-016", finding: "Submental lymphadenopathy", normal: false, tags: ["lymph", "infection"] },
            { id: "neck-017", finding: "Submandibular lymphadenopathy", normal: false, tags: ["lymph", "infection"] },
            { id: "neck-018", finding: "Lymph nodes tender", normal: false, tags: ["lymph", "infection", "reactive"] },
            { id: "neck-019", finding: "Lymph nodes non-tender", normal: false, tags: ["lymph", "malignancy"] },
            { id: "neck-020", finding: "Lymph nodes mobile", normal: false, tags: ["lymph", "reactive"] },
            { id: "neck-021", finding: "Lymph nodes fixed/matted", normal: false, tags: ["lymph", "malignancy", "TB"] },
            { id: "neck-022", finding: "Lymph nodes rubbery", normal: false, tags: ["lymph", "lymphoma"] },
            { id: "neck-023", finding: "Lymph nodes hard", normal: false, tags: ["lymph", "metastatic"] },
            
            // Thyroid
            { id: "neck-024", finding: "Thyroid normal size, no nodules", normal: true, tags: ["thyroid"] },
            { id: "neck-025", finding: "Thyroid not palpable", normal: true, tags: ["thyroid"] },
            { id: "neck-026", finding: "Goiter (thyroid enlargement)", normal: false, tags: ["thyroid", "goiter"] },
            { id: "neck-027", finding: "Thyroid nodule - solitary", normal: false, tags: ["thyroid", "nodule"] },
            { id: "neck-028", finding: "Thyroid nodule - multiple", normal: false, tags: ["thyroid", "nodule", "MNG"] },
            { id: "neck-029", finding: "Thyroid tender", normal: false, tags: ["thyroid", "thyroiditis"] },
            { id: "neck-030", finding: "Thyroid bruit", normal: false, tags: ["thyroid", "Graves", "hyperthyroid"] },
            
            // Vessels
            { id: "neck-031", finding: "JVP normal (<8 cm H2O at 45°)", normal: true, tags: ["JVP"] },
            { id: "neck-032", finding: "JVP elevated", normal: false, tags: ["JVP", "heart failure", "tamponade"] },
            { id: "neck-033", finding: "JVD present", normal: false, tags: ["JVP", "heart failure"] },
            { id: "neck-034", finding: "Hepatojugular reflux positive", normal: false, tags: ["JVP", "heart failure"] },
            { id: "neck-035", finding: "Kussmaul sign (JVP rises with inspiration)", normal: false, tags: ["JVP", "constrictive pericarditis", "tamponade"] },
            { id: "neck-036", finding: "Carotid pulses 2+ bilaterally", normal: true, tags: ["carotid"] },
            { id: "neck-037", finding: "Carotid bruit - right", normal: false, tags: ["carotid", "stenosis"] },
            { id: "neck-038", finding: "Carotid bruit - left", normal: false, tags: ["carotid", "stenosis"] },
            { id: "neck-039", finding: "Carotid bruit - bilateral", normal: false, tags: ["carotid", "stenosis"] },
            { id: "neck-040", finding: "Carotid upstroke delayed (parvus et tardus)", normal: false, tags: ["carotid", "aortic stenosis"] },
            
            // Trachea
            { id: "neck-041", finding: "Trachea midline", normal: true, tags: ["trachea"] },
            { id: "neck-042", finding: "Tracheal deviation - right", normal: false, tags: ["trachea", "pneumothorax", "mass"] },
            { id: "neck-043", finding: "Tracheal deviation - left", normal: false, tags: ["trachea", "pneumothorax", "mass"] },
            { id: "neck-044", finding: "Tracheal tug", normal: false, tags: ["trachea", "aortic aneurysm"] },
            { id: "neck-045", finding: "Neck mass palpable", normal: false, tags: ["mass", "tumor", "cyst"] }
        ]
    },

    // ============================================================
    // CARDIOVASCULAR (~100 findings)
    // ============================================================
    cardiovascular: {
        name: "Cardiovascular",
        findings: [
            // Heart sounds - basic
            { id: "cv-001", finding: "Regular rate and rhythm (RRR)", normal: true, tags: ["rhythm"] },
            { id: "cv-002", finding: "Irregularly irregular rhythm", normal: false, tags: ["rhythm", "afib"] },
            { id: "cv-003", finding: "Regularly irregular rhythm", normal: false, tags: ["rhythm", "PVCs", "PACs", "Wenckebach"] },
            { id: "cv-004", finding: "S1 normal intensity", normal: true, tags: ["S1"] },
            { id: "cv-005", finding: "S1 loud", normal: false, tags: ["S1", "mitral stenosis"] },
            { id: "cv-006", finding: "S1 soft/diminished", normal: false, tags: ["S1", "MR", "heart failure"] },
            { id: "cv-007", finding: "S1 variable intensity", normal: false, tags: ["S1", "afib", "AV block"] },
            { id: "cv-008", finding: "S2 normal intensity", normal: true, tags: ["S2"] },
            { id: "cv-009", finding: "S2 loud (P2 component)", normal: false, tags: ["S2", "pulmonary HTN"] },
            { id: "cv-010", finding: "S2 soft", normal: false, tags: ["S2", "aortic stenosis"] },
            { id: "cv-011", finding: "S2 physiologically split", normal: true, tags: ["S2", "splitting"] },
            { id: "cv-012", finding: "S2 widely split", normal: false, tags: ["S2", "splitting", "RBBB", "pulmonic stenosis"] },
            { id: "cv-013", finding: "S2 fixed split", normal: false, tags: ["S2", "splitting", "ASD"] },
            { id: "cv-014", finding: "S2 paradoxically split", normal: false, tags: ["S2", "splitting", "LBBB", "AS"] },
            { id: "cv-015", finding: "S2 single/absent split", normal: false, tags: ["S2", "splitting"] },
            
            // Extra heart sounds
            { id: "cv-016", finding: "No extra heart sounds", normal: true, tags: ["extra sounds"] },
            { id: "cv-017", finding: "No murmurs, rubs, or gallops", normal: true, tags: ["extra sounds"] },
            { id: "cv-018", finding: "S3 gallop present", normal: false, tags: ["S3", "heart failure", "volume overload"] },
            { id: "cv-019", finding: "S4 gallop present", normal: false, tags: ["S4", "HTN", "diastolic dysfunction", "HCM"] },
            { id: "cv-020", finding: "Summation gallop (S3 + S4)", normal: false, tags: ["gallop", "heart failure"] },
            { id: "cv-021", finding: "Opening snap", normal: false, tags: ["extra sounds", "mitral stenosis"] },
            { id: "cv-022", finding: "Ejection click - aortic", normal: false, tags: ["extra sounds", "bicuspid aortic valve", "AS"] },
            { id: "cv-023", finding: "Ejection click - pulmonic", normal: false, tags: ["extra sounds", "pulmonic stenosis"] },
            { id: "cv-024", finding: "Midsystolic click", normal: false, tags: ["extra sounds", "MVP"] },
            { id: "cv-025", finding: "Pericardial friction rub", normal: false, tags: ["extra sounds", "pericarditis"] },
            { id: "cv-026", finding: "Pericardial knock", normal: false, tags: ["extra sounds", "constrictive pericarditis"] },
            { id: "cv-027", finding: "Prosthetic valve sounds normal", normal: true, tags: ["extra sounds", "prosthetic"] },
            
            // Systolic murmurs
            { id: "cv-028", finding: "Systolic murmur present", normal: false, tags: ["murmur", "systolic"] },
            { id: "cv-029", finding: "Systolic ejection murmur (crescendo-decrescendo)", normal: false, tags: ["murmur", "systolic", "AS", "flow"] },
            { id: "cv-030", finding: "Holosystolic/pansystolic murmur", normal: false, tags: ["murmur", "systolic", "MR", "TR", "VSD"] },
            { id: "cv-031", finding: "Late systolic murmur", normal: false, tags: ["murmur", "systolic", "MVP"] },
            { id: "cv-032", finding: "Murmur grade I/VI (barely audible)", normal: false, tags: ["murmur", "grade"] },
            { id: "cv-033", finding: "Murmur grade II/VI (soft but easily heard)", normal: false, tags: ["murmur", "grade"] },
            { id: "cv-034", finding: "Murmur grade III/VI (moderately loud)", normal: false, tags: ["murmur", "grade"] },
            { id: "cv-035", finding: "Murmur grade IV/VI (loud with thrill)", normal: false, tags: ["murmur", "grade", "thrill"] },
            { id: "cv-036", finding: "Murmur grade V/VI (very loud, heard with edge of stethoscope)", normal: false, tags: ["murmur", "grade"] },
            { id: "cv-037", finding: "Murmur grade VI/VI (heard without stethoscope)", normal: false, tags: ["murmur", "grade"] },
            { id: "cv-038", finding: "Murmur best heard at apex", normal: false, tags: ["murmur", "location", "MR", "MS"] },
            { id: "cv-039", finding: "Murmur best heard at RUSB (aortic area)", normal: false, tags: ["murmur", "location", "AS"] },
            { id: "cv-040", finding: "Murmur best heard at LUSB (pulmonic area)", normal: false, tags: ["murmur", "location", "PS"] },
            { id: "cv-041", finding: "Murmur best heard at LLSB (tricuspid area)", normal: false, tags: ["murmur", "location", "TR", "VSD", "HCM"] },
            { id: "cv-042", finding: "Murmur radiates to carotids", normal: false, tags: ["murmur", "radiation", "AS"] },
            { id: "cv-043", finding: "Murmur radiates to axilla", normal: false, tags: ["murmur", "radiation", "MR"] },
            { id: "cv-044", finding: "Murmur radiates to back", normal: false, tags: ["murmur", "radiation", "coarctation"] },
            { id: "cv-045", finding: "Murmur increases with Valsalva", normal: false, tags: ["murmur", "maneuver", "HCM", "MVP"] },
            { id: "cv-046", finding: "Murmur decreases with Valsalva", normal: false, tags: ["murmur", "maneuver", "AS", "MR"] },
            { id: "cv-047", finding: "Murmur increases with squatting", normal: false, tags: ["murmur", "maneuver", "AS", "MR"] },
            { id: "cv-048", finding: "Murmur decreases with squatting", normal: false, tags: ["murmur", "maneuver", "HCM", "MVP"] },
            { id: "cv-049", finding: "Murmur increases with handgrip", normal: false, tags: ["murmur", "maneuver", "MR", "AR", "VSD"] },
            { id: "cv-050", finding: "Murmur decreases with handgrip", normal: false, tags: ["murmur", "maneuver", "AS", "HCM"] },
            
            // Diastolic murmurs
            { id: "cv-051", finding: "Diastolic murmur present", normal: false, tags: ["murmur", "diastolic"] },
            { id: "cv-052", finding: "Early diastolic decrescendo murmur", normal: false, tags: ["murmur", "diastolic", "AR", "PR"] },
            { id: "cv-053", finding: "Mid-diastolic rumble", normal: false, tags: ["murmur", "diastolic", "MS"] },
            { id: "cv-054", finding: "Late diastolic (presystolic) murmur", normal: false, tags: ["murmur", "diastolic", "MS"] },
            { id: "cv-055", finding: "Austin Flint murmur", normal: false, tags: ["murmur", "diastolic", "severe AR"] },
            { id: "cv-056", finding: "Graham Steell murmur", normal: false, tags: ["murmur", "diastolic", "pulm HTN", "PR"] },
            
            // Continuous murmurs
            { id: "cv-057", finding: "Continuous murmur (machinery murmur)", normal: false, tags: ["murmur", "continuous", "PDA"] },
            { id: "cv-058", finding: "Venous hum", normal: false, tags: ["murmur", "continuous", "benign"] },
            
            // PMI/Precordium
            { id: "cv-059", finding: "PMI at 5th ICS, MCL (normal)", normal: true, tags: ["PMI"] },
            { id: "cv-060", finding: "PMI displaced laterally", normal: false, tags: ["PMI", "cardiomegaly", "LVH"] },
            { id: "cv-061", finding: "PMI displaced inferiorly", normal: false, tags: ["PMI", "cardiomegaly"] },
            { id: "cv-062", finding: "PMI diffuse", normal: false, tags: ["PMI", "cardiomegaly"] },
            { id: "cv-063", finding: "PMI sustained/heaving", normal: false, tags: ["PMI", "LVH", "pressure overload"] },
            { id: "cv-064", finding: "PMI hyperdynamic", normal: false, tags: ["PMI", "volume overload"] },
            { id: "cv-065", finding: "Right ventricular heave/lift", normal: false, tags: ["precordium", "RVH", "pulm HTN"] },
            { id: "cv-066", finding: "Thrill palpable", normal: false, tags: ["precordium", "grade IV+ murmur"] },
            { id: "cv-067", finding: "Parasternal lift", normal: false, tags: ["precordium", "RVH"] },
            
            // Peripheral pulses
            { id: "cv-068", finding: "Peripheral pulses 2+ and equal bilaterally", normal: true, tags: ["pulses"] },
            { id: "cv-069", finding: "Radial pulse 2+ bilaterally", normal: true, tags: ["pulses", "radial"] },
            { id: "cv-070", finding: "Radial pulse diminished/absent - right", normal: false, tags: ["pulses", "radial", "PAD", "dissection"] },
            { id: "cv-071", finding: "Radial pulse diminished/absent - left", normal: false, tags: ["pulses", "radial", "PAD", "dissection"] },
            { id: "cv-072", finding: "Femoral pulse 2+ bilaterally", normal: true, tags: ["pulses", "femoral"] },
            { id: "cv-073", finding: "Femoral pulse diminished/absent", normal: false, tags: ["pulses", "femoral", "PAD", "coarctation"] },
            { id: "cv-074", finding: "Dorsalis pedis pulse 2+ bilaterally", normal: true, tags: ["pulses", "DP", "pedal"] },
            { id: "cv-075", finding: "Dorsalis pedis pulse diminished/absent", normal: false, tags: ["pulses", "DP", "PAD"] },
            { id: "cv-076", finding: "Posterior tibial pulse 2+ bilaterally", normal: true, tags: ["pulses", "PT", "pedal"] },
            { id: "cv-077", finding: "Posterior tibial pulse diminished/absent", normal: false, tags: ["pulses", "PT", "PAD"] },
            { id: "cv-078", finding: "Radio-femoral delay", normal: false, tags: ["pulses", "coarctation"] },
            { id: "cv-079", finding: "Pulse deficit", normal: false, tags: ["pulses", "afib"] },
            { id: "cv-080", finding: "Pulsus alternans", normal: false, tags: ["pulses", "severe LV dysfunction"] },
            { id: "cv-081", finding: "Pulsus parvus et tardus", normal: false, tags: ["pulses", "AS"] },
            { id: "cv-082", finding: "Water-hammer/Corrigan pulse", normal: false, tags: ["pulses", "AR"] },
            { id: "cv-083", finding: "Bisferiens pulse", normal: false, tags: ["pulses", "AR", "HCM"] },
            
            // Edema
            { id: "cv-084", finding: "No peripheral edema", normal: true, tags: ["edema"] },
            { id: "cv-085", finding: "Trace pedal edema", normal: false, tags: ["edema"] },
            { id: "cv-086", finding: "1+ pitting edema (2mm, rapid rebound)", normal: false, tags: ["edema", "pitting"] },
            { id: "cv-087", finding: "2+ pitting edema (4mm, 10-15 sec rebound)", normal: false, tags: ["edema", "pitting"] },
            { id: "cv-088", finding: "3+ pitting edema (6mm, 1-2 min rebound)", normal: false, tags: ["edema", "pitting"] },
            { id: "cv-089", finding: "4+ pitting edema (8mm, >2 min rebound)", normal: false, tags: ["edema", "pitting"] },
            { id: "cv-090", finding: "Non-pitting edema", normal: false, tags: ["edema", "lymphedema", "myxedema"] },
            { id: "cv-091", finding: "Bilateral lower extremity edema", normal: false, tags: ["edema", "heart failure", "venous insufficiency"] },
            { id: "cv-092", finding: "Unilateral lower extremity edema", normal: false, tags: ["edema", "DVT", "cellulitis"] },
            { id: "cv-093", finding: "Sacral edema", normal: false, tags: ["edema", "heart failure", "bedridden"] },
            { id: "cv-094", finding: "Anasarca", normal: false, tags: ["edema", "heart failure", "nephrotic"] },
            
            // Other CV findings
            { id: "cv-095", finding: "Capillary refill <2 seconds", normal: true, tags: ["perfusion"] },
            { id: "cv-096", finding: "Capillary refill >2 seconds (delayed)", normal: false, tags: ["perfusion", "shock", "PAD"] },
            { id: "cv-097", finding: "Clubbing present", normal: false, tags: ["clubbing", "cyanotic heart disease", "endocarditis"] },
            { id: "cv-098", finding: "Splinter hemorrhages", normal: false, tags: ["nails", "endocarditis"] },
            { id: "cv-099", finding: "Janeway lesions", normal: false, tags: ["endocarditis"] },
            { id: "cv-100", finding: "Osler nodes", normal: false, tags: ["endocarditis"] }
        ]
    },

    // ============================================================
    // PULMONARY (~85 findings)
    // ============================================================
    pulmonary: {
        name: "Pulmonary/Respiratory",
        findings: [
            // Inspection
            { id: "pulm-001", finding: "Chest wall symmetric", normal: true, tags: ["inspection"] },
            { id: "pulm-002", finding: "Chest wall asymmetric", normal: false, tags: ["inspection", "scoliosis", "pneumothorax"] },
            { id: "pulm-003", finding: "Barrel chest", normal: false, tags: ["inspection", "COPD", "emphysema"] },
            { id: "pulm-004", finding: "Pectus excavatum", normal: false, tags: ["inspection", "congenital"] },
            { id: "pulm-005", finding: "Pectus carinatum", normal: false, tags: ["inspection", "congenital"] },
            { id: "pulm-006", finding: "Kyphosis", normal: false, tags: ["inspection", "spine"] },
            { id: "pulm-007", finding: "Scoliosis", normal: false, tags: ["inspection", "spine"] },
            { id: "pulm-008", finding: "Normal respiratory effort", normal: true, tags: ["inspection", "effort"] },
            { id: "pulm-009", finding: "Increased work of breathing", normal: false, tags: ["inspection", "effort", "distress"] },
            { id: "pulm-010", finding: "Use of accessory muscles", normal: false, tags: ["inspection", "effort", "distress"] },
            { id: "pulm-011", finding: "Intercostal retractions", normal: false, tags: ["inspection", "effort", "distress"] },
            { id: "pulm-012", finding: "Subcostal retractions", normal: false, tags: ["inspection", "effort", "distress"] },
            { id: "pulm-013", finding: "Supraclavicular retractions", normal: false, tags: ["inspection", "effort", "distress"] },
            { id: "pulm-014", finding: "Suprasternal retractions", normal: false, tags: ["inspection", "effort", "distress"] },
            { id: "pulm-015", finding: "Tripod positioning", normal: false, tags: ["inspection", "COPD", "distress"] },
            { id: "pulm-016", finding: "Pursed lip breathing", normal: false, tags: ["inspection", "COPD"] },
            { id: "pulm-017", finding: "Paradoxical breathing", normal: false, tags: ["inspection", "diaphragm weakness"] },
            { id: "pulm-018", finding: "Chest expansion symmetric", normal: true, tags: ["inspection", "expansion"] },
            { id: "pulm-019", finding: "Chest expansion decreased bilaterally", normal: false, tags: ["inspection", "expansion", "COPD"] },
            { id: "pulm-020", finding: "Chest expansion decreased - right", normal: false, tags: ["inspection", "expansion", "unilateral"] },
            { id: "pulm-021", finding: "Chest expansion decreased - left", normal: false, tags: ["inspection", "expansion", "unilateral"] },
            
            // Palpation
            { id: "pulm-022", finding: "Tactile fremitus normal bilaterally", normal: true, tags: ["palpation", "fremitus"] },
            { id: "pulm-023", finding: "Tactile fremitus increased", normal: false, tags: ["palpation", "fremitus", "consolidation"] },
            { id: "pulm-024", finding: "Tactile fremitus decreased", normal: false, tags: ["palpation", "fremitus", "effusion", "pneumothorax"] },
            { id: "pulm-025", finding: "Tactile fremitus absent", normal: false, tags: ["palpation", "fremitus", "effusion", "pneumothorax"] },
            { id: "pulm-026", finding: "Chest wall tenderness", normal: false, tags: ["palpation", "tenderness", "costochondritis"] },
            { id: "pulm-027", finding: "Subcutaneous emphysema/crepitus", normal: false, tags: ["palpation", "emphysema", "pneumothorax"] },
            
            // Percussion
            { id: "pulm-028", finding: "Percussion resonant bilaterally", normal: true, tags: ["percussion"] },
            { id: "pulm-029", finding: "Percussion hyperresonant", normal: false, tags: ["percussion", "pneumothorax", "emphysema"] },
            { id: "pulm-030", finding: "Percussion dull", normal: false, tags: ["percussion", "consolidation", "effusion"] },
            { id: "pulm-031", finding: "Percussion flat/stony dull", normal: false, tags: ["percussion", "effusion"] },
            { id: "pulm-032", finding: "Diaphragm excursion normal (3-5 cm)", normal: true, tags: ["percussion", "diaphragm"] },
            { id: "pulm-033", finding: "Diaphragm excursion decreased", normal: false, tags: ["percussion", "diaphragm", "COPD", "effusion"] },
            
            // Auscultation - breath sounds
            { id: "pulm-034", finding: "Clear to auscultation bilaterally (CTAB)", normal: true, tags: ["auscultation", "breath sounds"] },
            { id: "pulm-035", finding: "Breath sounds vesicular (normal)", normal: true, tags: ["auscultation", "breath sounds"] },
            { id: "pulm-036", finding: "Breath sounds bronchovesicular", normal: false, tags: ["auscultation", "breath sounds"] },
            { id: "pulm-037", finding: "Breath sounds bronchial/tubular", normal: false, tags: ["auscultation", "breath sounds", "consolidation"] },
            { id: "pulm-038", finding: "Breath sounds diminished bilaterally", normal: false, tags: ["auscultation", "breath sounds", "COPD", "obesity"] },
            { id: "pulm-039", finding: "Breath sounds diminished at bases", normal: false, tags: ["auscultation", "breath sounds", "effusion", "atelectasis"] },
            { id: "pulm-040", finding: "Breath sounds diminished right", normal: false, tags: ["auscultation", "breath sounds"] },
            { id: "pulm-041", finding: "Breath sounds diminished left", normal: false, tags: ["auscultation", "breath sounds"] },
            { id: "pulm-042", finding: "Breath sounds absent right", normal: false, tags: ["auscultation", "breath sounds", "pneumothorax", "effusion"] },
            { id: "pulm-043", finding: "Breath sounds absent left", normal: false, tags: ["auscultation", "breath sounds", "pneumothorax", "effusion"] },
            { id: "pulm-044", finding: "Good air movement bilaterally", normal: true, tags: ["auscultation", "air movement"] },
            { id: "pulm-045", finding: "Poor air movement", normal: false, tags: ["auscultation", "air movement", "severe obstruction"] },
            
            // Adventitious sounds - crackles
            { id: "pulm-046", finding: "No adventitious sounds", normal: true, tags: ["auscultation", "adventitious"] },
            { id: "pulm-047", finding: "Crackles/rales present", normal: false, tags: ["auscultation", "crackles"] },
            { id: "pulm-048", finding: "Fine crackles (rales)", normal: false, tags: ["auscultation", "crackles", "CHF", "ILD", "pneumonia"] },
            { id: "pulm-049", finding: "Coarse crackles", normal: false, tags: ["auscultation", "crackles", "bronchitis", "pneumonia"] },
            { id: "pulm-050", finding: "Crackles at bilateral bases", normal: false, tags: ["auscultation", "crackles", "CHF"] },
            { id: "pulm-051", finding: "Crackles diffuse bilaterally", normal: false, tags: ["auscultation", "crackles", "pulmonary edema"] },
            { id: "pulm-052", finding: "Crackles right base", normal: false, tags: ["auscultation", "crackles"] },
            { id: "pulm-053", finding: "Crackles left base", normal: false, tags: ["auscultation", "crackles"] },
            { id: "pulm-054", finding: "Crackles that clear with coughing", normal: false, tags: ["auscultation", "crackles", "secretions"] },
            { id: "pulm-055", finding: "Velcro-like crackles", normal: false, tags: ["auscultation", "crackles", "IPF", "ILD"] },
            { id: "pulm-056", finding: "Inspiratory crackles", normal: false, tags: ["auscultation", "crackles"] },
            { id: "pulm-057", finding: "Expiratory crackles", normal: false, tags: ["auscultation", "crackles"] },
            
            // Adventitious sounds - wheezes
            { id: "pulm-058", finding: "Wheezes present", normal: false, tags: ["auscultation", "wheezes"] },
            { id: "pulm-059", finding: "Expiratory wheezes", normal: false, tags: ["auscultation", "wheezes", "asthma", "COPD"] },
            { id: "pulm-060", finding: "Inspiratory wheezes", normal: false, tags: ["auscultation", "wheezes"] },
            { id: "pulm-061", finding: "Bilateral diffuse wheezes", normal: false, tags: ["auscultation", "wheezes", "asthma", "COPD"] },
            { id: "pulm-062", finding: "Focal wheeze", normal: false, tags: ["auscultation", "wheezes", "obstruction", "tumor"] },
            { id: "pulm-063", finding: "Monophonic wheeze", normal: false, tags: ["auscultation", "wheezes", "fixed obstruction"] },
            { id: "pulm-064", finding: "Polyphonic wheezes", normal: false, tags: ["auscultation", "wheezes", "diffuse obstruction"] },
            
            // Adventitious sounds - rhonchi/stridor/rub
            { id: "pulm-065", finding: "Rhonchi present", normal: false, tags: ["auscultation", "rhonchi", "secretions"] },
            { id: "pulm-066", finding: "Rhonchi clear with coughing", normal: false, tags: ["auscultation", "rhonchi"] },
            { id: "pulm-067", finding: "Stridor - inspiratory", normal: false, tags: ["auscultation", "stridor", "upper airway", "emergency"] },
            { id: "pulm-068", finding: "Stridor - biphasic", normal: false, tags: ["auscultation", "stridor", "upper airway", "emergency"] },
            { id: "pulm-069", finding: "Pleural friction rub", normal: false, tags: ["auscultation", "rub", "pleurisy"] },
            { id: "pulm-070", finding: "Squeaks", normal: false, tags: ["auscultation", "bronchiolitis"] },
            
            // Voice sounds
            { id: "pulm-071", finding: "Egophony present (E-to-A change)", normal: false, tags: ["auscultation", "voice", "consolidation"] },
            { id: "pulm-072", finding: "Bronchophony present", normal: false, tags: ["auscultation", "voice", "consolidation"] },
            { id: "pulm-073", finding: "Whispered pectoriloquy", normal: false, tags: ["auscultation", "voice", "consolidation"] },
            
            // Other
            { id: "pulm-074", finding: "Cough present during exam", normal: false, tags: ["cough"] },
            { id: "pulm-075", finding: "Cough productive", normal: false, tags: ["cough", "sputum"] },
            { id: "pulm-076", finding: "Cough dry/nonproductive", normal: false, tags: ["cough"] },
            { id: "pulm-077", finding: "Hemoptysis noted", normal: false, tags: ["cough", "hemoptysis"] },
            { id: "pulm-078", finding: "Speaking in full sentences", normal: true, tags: ["speech"] },
            { id: "pulm-079", finding: "Speaking in short phrases only", normal: false, tags: ["speech", "dyspnea"] },
            { id: "pulm-080", finding: "Speaking in single words only", normal: false, tags: ["speech", "severe dyspnea"] },
            { id: "pulm-081", finding: "Unable to speak", normal: false, tags: ["speech", "respiratory failure", "emergency"] },
            { id: "pulm-082", finding: "Prolonged expiratory phase", normal: false, tags: ["expiration", "obstruction"] },
            { id: "pulm-083", finding: "I:E ratio normal (1:2)", normal: true, tags: ["I:E ratio"] },
            { id: "pulm-084", finding: "I:E ratio prolonged (1:4 or greater)", normal: false, tags: ["I:E ratio", "obstruction"] },
            { id: "pulm-085", finding: "Accessory muscle use - sternocleidomastoid", normal: false, tags: ["accessory muscles", "distress"] }
        ]
    },

    // ============================================================
    // ABDOMINAL (~67 findings)
    // ============================================================
    abdominal: {
        name: "Abdominal",
        findings: [
            { id: "abd-001", finding: "Abdomen flat", normal: true, tags: ["inspection", "contour"] },
            { id: "abd-002", finding: "Abdomen scaphoid", normal: false, tags: ["inspection", "contour", "malnutrition"] },
            { id: "abd-003", finding: "Abdomen distended", normal: false, tags: ["inspection", "contour", "obstruction", "ascites"] },
            { id: "abd-004", finding: "Abdomen protuberant/obese", normal: false, tags: ["inspection", "contour", "obesity"] },
            { id: "abd-005", finding: "Visible peristalsis", normal: false, tags: ["inspection", "obstruction"] },
            { id: "abd-006", finding: "Visible pulsations", normal: false, tags: ["inspection", "AAA"] },
            { id: "abd-007", finding: "Caput medusae", normal: false, tags: ["inspection", "portal hypertension", "cirrhosis"] },
            { id: "abd-008", finding: "Striae present", normal: false, tags: ["inspection", "skin"] },
            { id: "abd-009", finding: "Surgical scars present", normal: false, tags: ["inspection", "surgical history"] },
            { id: "abd-010", finding: "Cullen sign (periumbilical ecchymosis)", normal: false, tags: ["inspection", "hemorrhagic pancreatitis", "ruptured ectopic"] },
            { id: "abd-011", finding: "Grey Turner sign (flank ecchymosis)", normal: false, tags: ["inspection", "hemorrhagic pancreatitis", "retroperitoneal bleed"] },
            { id: "abd-012", finding: "Bowel sounds normoactive", normal: true, tags: ["auscultation", "bowel sounds"] },
            { id: "abd-013", finding: "Bowel sounds hyperactive", normal: false, tags: ["auscultation", "bowel sounds", "diarrhea", "early obstruction"] },
            { id: "abd-014", finding: "Bowel sounds hypoactive", normal: false, tags: ["auscultation", "bowel sounds", "ileus"] },
            { id: "abd-015", finding: "Bowel sounds absent", normal: false, tags: ["auscultation", "bowel sounds", "ileus", "peritonitis"] },
            { id: "abd-016", finding: "High-pitched/tinkling bowel sounds", normal: false, tags: ["auscultation", "bowel sounds", "obstruction"] },
            { id: "abd-017", finding: "Abdominal bruit", normal: false, tags: ["auscultation", "bruit", "AAA", "renal artery stenosis"] },
            { id: "abd-018", finding: "Tympany throughout", normal: true, tags: ["percussion"] },
            { id: "abd-019", finding: "Shifting dullness present", normal: false, tags: ["percussion", "ascites"] },
            { id: "abd-020", finding: "Fluid wave present", normal: false, tags: ["percussion", "ascites"] },
            { id: "abd-021", finding: "Liver span normal (6-12 cm MCL)", normal: true, tags: ["percussion", "liver"] },
            { id: "abd-022", finding: "Liver span increased (hepatomegaly)", normal: false, tags: ["percussion", "liver", "hepatomegaly"] },
            { id: "abd-023", finding: "Loss of liver dullness", normal: false, tags: ["percussion", "pneumoperitoneum", "perforation"] },
            { id: "abd-024", finding: "Abdomen soft", normal: true, tags: ["palpation", "consistency"] },
            { id: "abd-025", finding: "Abdomen non-tender", normal: true, tags: ["palpation", "tenderness"] },
            { id: "abd-026", finding: "Abdomen rigid/board-like", normal: false, tags: ["palpation", "consistency", "peritonitis", "emergency"] },
            { id: "abd-027", finding: "Voluntary guarding", normal: false, tags: ["palpation", "guarding"] },
            { id: "abd-028", finding: "Involuntary guarding", normal: false, tags: ["palpation", "guarding", "peritonitis"] },
            { id: "abd-029", finding: "Rebound tenderness present", normal: false, tags: ["palpation", "peritoneal irritation", "peritonitis"] },
            { id: "abd-030", finding: "No rebound tenderness", normal: true, tags: ["palpation", "peritoneal irritation"] },
            { id: "abd-031", finding: "RUQ tenderness", normal: false, tags: ["palpation", "tenderness", "cholecystitis", "hepatitis"] },
            { id: "abd-032", finding: "LUQ tenderness", normal: false, tags: ["palpation", "tenderness", "spleen"] },
            { id: "abd-033", finding: "RLQ tenderness", normal: false, tags: ["palpation", "tenderness", "appendicitis"] },
            { id: "abd-034", finding: "LLQ tenderness", normal: false, tags: ["palpation", "tenderness", "diverticulitis"] },
            { id: "abd-035", finding: "Epigastric tenderness", normal: false, tags: ["palpation", "tenderness", "PUD", "pancreatitis", "gastritis"] },
            { id: "abd-036", finding: "Periumbilical tenderness", normal: false, tags: ["palpation", "tenderness", "early appendicitis", "SBO"] },
            { id: "abd-037", finding: "Suprapubic tenderness", normal: false, tags: ["palpation", "tenderness", "cystitis", "PID"] },
            { id: "abd-038", finding: "CVA tenderness", normal: false, tags: ["palpation", "tenderness", "pyelonephritis", "nephrolithiasis"] },
            { id: "abd-039", finding: "Diffuse abdominal tenderness", normal: false, tags: ["palpation", "tenderness", "peritonitis"] },
            { id: "abd-040", finding: "Murphy sign positive", normal: false, tags: ["special sign", "cholecystitis"] },
            { id: "abd-041", finding: "McBurney point tenderness", normal: false, tags: ["special sign", "appendicitis"] },
            { id: "abd-042", finding: "Rovsing sign positive", normal: false, tags: ["special sign", "appendicitis"] },
            { id: "abd-043", finding: "Psoas sign positive", normal: false, tags: ["special sign", "appendicitis", "psoas abscess"] },
            { id: "abd-044", finding: "Obturator sign positive", normal: false, tags: ["special sign", "appendicitis", "pelvic abscess"] },
            { id: "abd-045", finding: "Carnett sign positive (abdominal wall)", normal: false, tags: ["special sign", "abdominal wall pain"] },
            { id: "abd-046", finding: "Kehr sign (left shoulder pain)", normal: false, tags: ["special sign", "splenic injury", "ruptured ectopic"] },
            { id: "abd-047", finding: "Liver not palpable", normal: true, tags: ["palpation", "liver"] },
            { id: "abd-048", finding: "Liver palpable below costal margin", normal: false, tags: ["palpation", "liver", "hepatomegaly"] },
            { id: "abd-049", finding: "Liver edge smooth", normal: true, tags: ["palpation", "liver"] },
            { id: "abd-050", finding: "Liver edge nodular/irregular", normal: false, tags: ["palpation", "liver", "cirrhosis", "malignancy"] },
            { id: "abd-051", finding: "Liver tender to palpation", normal: false, tags: ["palpation", "liver", "hepatitis", "congestion"] },
            { id: "abd-052", finding: "Spleen not palpable", normal: true, tags: ["palpation", "spleen"] },
            { id: "abd-053", finding: "Spleen palpable (splenomegaly)", normal: false, tags: ["palpation", "spleen", "splenomegaly"] },
            { id: "abd-054", finding: "Pulsatile abdominal mass", normal: false, tags: ["palpation", "AAA", "emergency"] },
            { id: "abd-055", finding: "Non-pulsatile abdominal mass", normal: false, tags: ["palpation", "mass", "tumor"] },
            { id: "abd-056", finding: "Bladder palpable/distended", normal: false, tags: ["palpation", "bladder", "retention"] },
            { id: "abd-057", finding: "No inguinal hernia", normal: true, tags: ["hernia", "inguinal"] },
            { id: "abd-058", finding: "Inguinal hernia - direct", normal: false, tags: ["hernia", "inguinal", "direct"] },
            { id: "abd-059", finding: "Inguinal hernia - indirect", normal: false, tags: ["hernia", "inguinal", "indirect"] },
            { id: "abd-060", finding: "Femoral hernia", normal: false, tags: ["hernia", "femoral"] },
            { id: "abd-061", finding: "Umbilical hernia", normal: false, tags: ["hernia", "umbilical"] },
            { id: "abd-062", finding: "Incisional hernia", normal: false, tags: ["hernia", "incisional"] },
            { id: "abd-063", finding: "Hernia reducible", normal: false, tags: ["hernia", "reducible"] },
            { id: "abd-064", finding: "Hernia incarcerated", normal: false, tags: ["hernia", "incarcerated", "emergency"] },
            { id: "abd-065", finding: "No organomegaly", normal: true, tags: ["palpation", "organs"] },
            { id: "abd-066", finding: "No masses palpated", normal: true, tags: ["palpation", "mass"] },
            { id: "abd-067", finding: "Ascites present", normal: false, tags: ["ascites", "cirrhosis", "malignancy", "CHF"] }
        ]
    },

    // ============================================================
    // GENITOURINARY (~44 findings)
    // ============================================================
    genitourinary: {
        name: "Genitourinary",
        findings: [
            { id: "gu-001", finding: "Penis normal appearance", normal: true, tags: ["male", "penis"] },
            { id: "gu-002", finding: "Circumcised", normal: true, tags: ["male", "penis"] },
            { id: "gu-003", finding: "Uncircumcised, foreskin retractable", normal: true, tags: ["male", "penis"] },
            { id: "gu-004", finding: "Phimosis (foreskin non-retractable)", normal: false, tags: ["male", "penis"] },
            { id: "gu-005", finding: "Paraphimosis", normal: false, tags: ["male", "penis", "emergency"] },
            { id: "gu-006", finding: "Penile discharge", normal: false, tags: ["male", "penis", "STI", "urethritis"] },
            { id: "gu-007", finding: "Penile ulcer/lesion", normal: false, tags: ["male", "penis", "STI", "cancer"] },
            { id: "gu-008", finding: "Priapism", normal: false, tags: ["male", "penis", "emergency"] },
            { id: "gu-009", finding: "Scrotum normal appearance", normal: true, tags: ["male", "scrotum"] },
            { id: "gu-010", finding: "Testes descended bilaterally", normal: true, tags: ["male", "testes"] },
            { id: "gu-011", finding: "Testes normal size bilaterally", normal: true, tags: ["male", "testes"] },
            { id: "gu-012", finding: "Testicular atrophy", normal: false, tags: ["male", "testes", "hypogonadism"] },
            { id: "gu-013", finding: "Testicular mass", normal: false, tags: ["male", "testes", "cancer"] },
            { id: "gu-014", finding: "Testicular tenderness", normal: false, tags: ["male", "testes", "epididymitis", "torsion"] },
            { id: "gu-015", finding: "Epididymal tenderness", normal: false, tags: ["male", "epididymis", "epididymitis"] },
            { id: "gu-016", finding: "Prehn sign positive (relief with elevation)", normal: false, tags: ["male", "epididymitis"] },
            { id: "gu-017", finding: "Absent cremasteric reflex", normal: false, tags: ["male", "torsion", "emergency"] },
            { id: "gu-018", finding: "Scrotal swelling", normal: false, tags: ["male", "scrotum"] },
            { id: "gu-019", finding: "Hydrocele (transilluminates)", normal: false, tags: ["male", "scrotum", "hydrocele"] },
            { id: "gu-020", finding: "Varicocele (bag of worms)", normal: false, tags: ["male", "scrotum", "varicocele"] },
            { id: "gu-021", finding: "Spermatocele", normal: false, tags: ["male", "epididymis"] },
            { id: "gu-022", finding: "Prostate normal size", normal: true, tags: ["male", "prostate", "DRE"] },
            { id: "gu-023", finding: "Prostate enlarged (BPH)", normal: false, tags: ["male", "prostate", "BPH"] },
            { id: "gu-024", finding: "Prostate nodule/induration", normal: false, tags: ["male", "prostate", "cancer"] },
            { id: "gu-025", finding: "Prostate tender (prostatitis)", normal: false, tags: ["male", "prostate", "prostatitis"] },
            { id: "gu-026", finding: "Prostate boggy", normal: false, tags: ["male", "prostate", "prostatitis"] },
            { id: "gu-027", finding: "External genitalia normal appearance", normal: true, tags: ["female", "vulva"] },
            { id: "gu-028", finding: "Vulvar erythema", normal: false, tags: ["female", "vulva", "infection", "dermatitis"] },
            { id: "gu-029", finding: "Vulvar lesion/ulcer", normal: false, tags: ["female", "vulva", "STI", "cancer"] },
            { id: "gu-030", finding: "Bartholin gland cyst/abscess", normal: false, tags: ["female", "Bartholin", "abscess"] },
            { id: "gu-031", finding: "Vaginal discharge - normal", normal: true, tags: ["female", "vagina", "discharge"] },
            { id: "gu-032", finding: "Vaginal discharge - abnormal", normal: false, tags: ["female", "vagina", "discharge", "infection"] },
            { id: "gu-033", finding: "Cystocele", normal: false, tags: ["female", "prolapse"] },
            { id: "gu-034", finding: "Rectocele", normal: false, tags: ["female", "prolapse"] },
            { id: "gu-035", finding: "Uterine prolapse", normal: false, tags: ["female", "prolapse"] },
            { id: "gu-036", finding: "Cervix normal appearance", normal: true, tags: ["female", "cervix", "speculum"] },
            { id: "gu-037", finding: "Cervical os closed", normal: true, tags: ["female", "cervix"] },
            { id: "gu-038", finding: "Cervical motion tenderness (CMT)", normal: false, tags: ["female", "cervix", "PID", "ectopic"] },
            { id: "gu-039", finding: "Uterus normal size", normal: true, tags: ["female", "uterus", "bimanual"] },
            { id: "gu-040", finding: "Uterus enlarged", normal: false, tags: ["female", "uterus", "pregnancy", "fibroids"] },
            { id: "gu-041", finding: "Uterine tenderness", normal: false, tags: ["female", "uterus", "PID", "endometritis"] },
            { id: "gu-042", finding: "Adnexal mass", normal: false, tags: ["female", "adnexa", "ovarian cyst", "ectopic"] },
            { id: "gu-043", finding: "Adnexal tenderness", normal: false, tags: ["female", "adnexa", "PID", "torsion", "ectopic"] },
            { id: "gu-044", finding: "No adnexal masses or tenderness", normal: true, tags: ["female", "adnexa"] }
        ]
    },

    // ============================================================
    // RECTAL (~20 findings)
    // ============================================================
    rectal: {
        name: "Rectal",
        findings: [
            { id: "rect-001", finding: "Normal rectal tone", normal: true, tags: ["tone"] },
            { id: "rect-002", finding: "Decreased rectal tone", normal: false, tags: ["tone", "neurologic", "cauda equina"] },
            { id: "rect-003", finding: "No rectal masses", normal: true, tags: ["mass"] },
            { id: "rect-004", finding: "Rectal mass palpable", normal: false, tags: ["mass", "cancer", "polyp"] },
            { id: "rect-005", finding: "Stool in rectal vault", normal: true, tags: ["stool"] },
            { id: "rect-006", finding: "Empty rectal vault", normal: false, tags: ["stool", "obstruction"] },
            { id: "rect-007", finding: "Fecal impaction", normal: false, tags: ["stool", "impaction", "constipation"] },
            { id: "rect-008", finding: "Stool guaiac negative (FOBT negative)", normal: true, tags: ["stool", "bleeding"] },
            { id: "rect-009", finding: "Stool guaiac positive (FOBT positive)", normal: false, tags: ["stool", "bleeding", "GI bleed", "cancer"] },
            { id: "rect-010", finding: "Gross blood on exam", normal: false, tags: ["bleeding", "hemorrhoids", "cancer"] },
            { id: "rect-011", finding: "Melena on exam", normal: false, tags: ["bleeding", "upper GI bleed"] },
            { id: "rect-012", finding: "External hemorrhoids", normal: false, tags: ["hemorrhoids", "external"] },
            { id: "rect-013", finding: "Internal hemorrhoids", normal: false, tags: ["hemorrhoids", "internal"] },
            { id: "rect-014", finding: "Thrombosed hemorrhoid", normal: false, tags: ["hemorrhoids", "thrombosed", "pain"] },
            { id: "rect-015", finding: "Anal fissure", normal: false, tags: ["fissure", "pain"] },
            { id: "rect-016", finding: "Perianal abscess", normal: false, tags: ["abscess", "infection"] },
            { id: "rect-017", finding: "Anal fistula", normal: false, tags: ["fistula", "Crohns"] },
            { id: "rect-018", finding: "Rectal prolapse", normal: false, tags: ["prolapse"] },
            { id: "rect-019", finding: "Non-tender rectal exam", normal: true, tags: ["tenderness"] },
            { id: "rect-020", finding: "Tender rectal exam", normal: false, tags: ["tenderness", "prostatitis", "abscess"] }
        ]
    },

    // ============================================================
    // SKIN/INTEGUMENTARY (~60 findings)
    // ============================================================
    skin: {
        name: "Skin/Integumentary",
        findings: [
            { id: "skin-001", finding: "Skin warm and dry", normal: true, tags: ["temperature", "moisture"] },
            { id: "skin-002", finding: "Skin cool and dry", normal: false, tags: ["temperature", "moisture", "shock", "hypothyroid"] },
            { id: "skin-003", finding: "Skin cool and clammy", normal: false, tags: ["temperature", "moisture", "shock", "diaphoresis"] },
            { id: "skin-004", finding: "Skin warm and moist", normal: false, tags: ["temperature", "moisture", "fever", "hyperthyroid"] },
            { id: "skin-005", finding: "Diaphoresis", normal: false, tags: ["moisture", "sweating", "MI", "hypoglycemia"] },
            { id: "skin-006", finding: "Skin turgor normal", normal: true, tags: ["turgor", "hydration"] },
            { id: "skin-007", finding: "Decreased skin turgor (tenting)", normal: false, tags: ["turgor", "dehydration"] },
            { id: "skin-008", finding: "Skin color normal", normal: true, tags: ["color"] },
            { id: "skin-009", finding: "Pallor", normal: false, tags: ["color", "anemia", "shock"] },
            { id: "skin-010", finding: "Jaundice/icterus", normal: false, tags: ["color", "liver", "hemolysis", "biliary"] },
            { id: "skin-011", finding: "Cyanosis - central", normal: false, tags: ["color", "cyanosis", "hypoxia"] },
            { id: "skin-012", finding: "Cyanosis - peripheral (acrocyanosis)", normal: false, tags: ["color", "cyanosis", "peripheral vascular"] },
            { id: "skin-013", finding: "Erythema - localized", normal: false, tags: ["color", "erythema", "inflammation", "infection"] },
            { id: "skin-014", finding: "Erythema - generalized", normal: false, tags: ["color", "erythema", "drug reaction", "viral"] },
            { id: "skin-015", finding: "Flushing", normal: false, tags: ["color", "flushing", "carcinoid", "menopause"] },
            { id: "skin-016", finding: "Mottling", normal: false, tags: ["color", "mottling", "shock", "sepsis"] },
            { id: "skin-017", finding: "Macule(s)", normal: false, tags: ["lesion", "primary", "flat"] },
            { id: "skin-018", finding: "Papule(s)", normal: false, tags: ["lesion", "primary", "raised"] },
            { id: "skin-019", finding: "Plaque(s)", normal: false, tags: ["lesion", "primary", "raised", "psoriasis"] },
            { id: "skin-020", finding: "Nodule(s)", normal: false, tags: ["lesion", "primary", "deep"] },
            { id: "skin-021", finding: "Vesicle(s)", normal: false, tags: ["lesion", "primary", "fluid", "herpes", "varicella"] },
            { id: "skin-022", finding: "Bullae", normal: false, tags: ["lesion", "primary", "fluid", "burns", "pemphigus"] },
            { id: "skin-023", finding: "Pustule(s)", normal: false, tags: ["lesion", "primary", "pus", "infection"] },
            { id: "skin-024", finding: "Wheal(s)/urticaria", normal: false, tags: ["lesion", "primary", "hives", "allergic"] },
            { id: "skin-025", finding: "Petechiae", normal: false, tags: ["lesion", "bleeding", "thrombocytopenia", "vasculitis"] },
            { id: "skin-026", finding: "Purpura", normal: false, tags: ["lesion", "bleeding", "vasculitis"] },
            { id: "skin-027", finding: "Ecchymosis", normal: false, tags: ["lesion", "bleeding", "bruise", "trauma", "coagulopathy"] },
            { id: "skin-028", finding: "Scale(s)", normal: false, tags: ["lesion", "secondary", "psoriasis", "dermatitis"] },
            { id: "skin-029", finding: "Crust(s)", normal: false, tags: ["lesion", "secondary", "impetigo"] },
            { id: "skin-030", finding: "Ulcer(s)", normal: false, tags: ["lesion", "secondary", "deep", "venous", "arterial", "diabetic"] },
            { id: "skin-031", finding: "Excoriation(s)", normal: false, tags: ["lesion", "secondary", "scratching"] },
            { id: "skin-032", finding: "Lichenification", normal: false, tags: ["lesion", "secondary", "chronic", "eczema"] },
            { id: "skin-033", finding: "Cellulitis signs (erythema, warmth, swelling)", normal: false, tags: ["infection", "cellulitis"] },
            { id: "skin-034", finding: "Abscess (fluctuant)", normal: false, tags: ["infection", "abscess"] },
            { id: "skin-035", finding: "Herpes simplex lesions", normal: false, tags: ["infection", "viral", "vesicles"] },
            { id: "skin-036", finding: "Herpes zoster (dermatomal)", normal: false, tags: ["infection", "viral", "shingles", "dermatomal"] },
            { id: "skin-037", finding: "Tinea (fungal) infection", normal: false, tags: ["infection", "fungal", "ringworm"] },
            { id: "skin-038", finding: "Candidiasis", normal: false, tags: ["infection", "fungal", "yeast"] },
            { id: "skin-039", finding: "Psoriatic plaques", normal: false, tags: ["psoriasis", "silvery scale"] },
            { id: "skin-040", finding: "Eczematous dermatitis", normal: false, tags: ["dermatitis", "eczema", "atopic"] },
            { id: "skin-041", finding: "Contact dermatitis", normal: false, tags: ["dermatitis", "contact", "allergic"] },
            { id: "skin-042", finding: "Drug eruption/rash", normal: false, tags: ["drug reaction", "morbilliform"] },
            { id: "skin-043", finding: "Target lesions (erythema multiforme)", normal: false, tags: ["drug reaction", "EM", "target"] },
            { id: "skin-044", finding: "Stevens-Johnson syndrome signs", normal: false, tags: ["drug reaction", "SJS", "emergency", "mucosal"] },
            { id: "skin-045", finding: "Spider angiomas", normal: false, tags: ["vascular", "liver disease"] },
            { id: "skin-046", finding: "Telangiectasias", normal: false, tags: ["vascular", "dilated capillaries"] },
            { id: "skin-047", finding: "Varicose veins", normal: false, tags: ["vascular", "venous insufficiency"] },
            { id: "skin-048", finding: "Venous stasis changes", normal: false, tags: ["vascular", "venous insufficiency", "hyperpigmentation"] },
            { id: "skin-049", finding: "Livedo reticularis", normal: false, tags: ["vascular", "mottled", "autoimmune"] },
            { id: "skin-050", finding: "Nails normal appearance", normal: true, tags: ["nails"] },
            { id: "skin-051", finding: "Clubbing", normal: false, tags: ["nails", "clubbing", "lung disease", "cardiac"] },
            { id: "skin-052", finding: "Koilonychia (spoon nails)", normal: false, tags: ["nails", "iron deficiency"] },
            { id: "skin-053", finding: "Onychomycosis", normal: false, tags: ["nails", "fungal"] },
            { id: "skin-054", finding: "Splinter hemorrhages", normal: false, tags: ["nails", "endocarditis", "trauma"] },
            { id: "skin-055", finding: "Terry nails (white)", normal: false, tags: ["nails", "liver disease"] },
            { id: "skin-056", finding: "Nail pitting", normal: false, tags: ["nails", "psoriasis", "alopecia areata"] },
            { id: "skin-057", finding: "Hair distribution normal", normal: true, tags: ["hair"] },
            { id: "skin-058", finding: "Alopecia - patchy", normal: false, tags: ["hair", "alopecia", "areata", "fungal"] },
            { id: "skin-059", finding: "Alopecia - diffuse", normal: false, tags: ["hair", "alopecia", "telogen effluvium"] },
            { id: "skin-060", finding: "Hirsutism", normal: false, tags: ["hair", "excess", "PCOS", "androgen"] }
        ]
    },

    // ============================================================
    // MUSCULOSKELETAL (~74 findings)
    // ============================================================
    musculoskeletal: {
        name: "Musculoskeletal",
        findings: [
            { id: "msk-001", finding: "Normal gait", normal: true, tags: ["gait"] },
            { id: "msk-002", finding: "Antalgic gait (limping)", normal: false, tags: ["gait", "pain"] },
            { id: "msk-003", finding: "Ataxic gait", normal: false, tags: ["gait", "cerebellar", "neurologic"] },
            { id: "msk-004", finding: "Shuffling gait", normal: false, tags: ["gait", "Parkinsons"] },
            { id: "msk-005", finding: "Steppage gait (foot drop)", normal: false, tags: ["gait", "foot drop", "peroneal nerve"] },
            { id: "msk-006", finding: "Trendelenburg gait", normal: false, tags: ["gait", "hip", "gluteus medius weakness"] },
            { id: "msk-007", finding: "Spastic gait", normal: false, tags: ["gait", "UMN", "stroke"] },
            { id: "msk-008", finding: "Normal posture", normal: true, tags: ["posture"] },
            { id: "msk-009", finding: "Kyphosis", normal: false, tags: ["posture", "spine", "thoracic"] },
            { id: "msk-010", finding: "Scoliosis", normal: false, tags: ["posture", "spine", "curvature"] },
            { id: "msk-011", finding: "Normal muscle bulk", normal: true, tags: ["muscle", "bulk"] },
            { id: "msk-012", finding: "Muscle atrophy", normal: false, tags: ["muscle", "atrophy", "disuse", "denervation"] },
            { id: "msk-013", finding: "Cervical spine - full ROM", normal: true, tags: ["spine", "cervical", "ROM"] },
            { id: "msk-014", finding: "Cervical spine - limited ROM", normal: false, tags: ["spine", "cervical", "ROM"] },
            { id: "msk-015", finding: "Cervical spine tenderness", normal: false, tags: ["spine", "cervical", "tenderness"] },
            { id: "msk-016", finding: "Cervical paraspinal muscle spasm", normal: false, tags: ["spine", "cervical", "spasm"] },
            { id: "msk-017", finding: "Spurling test positive", normal: false, tags: ["spine", "cervical", "radiculopathy"] },
            { id: "msk-018", finding: "Lumbar spine - full ROM", normal: true, tags: ["spine", "lumbar", "ROM"] },
            { id: "msk-019", finding: "Lumbar spine - limited flexion", normal: false, tags: ["spine", "lumbar", "ROM"] },
            { id: "msk-020", finding: "Lumbar spine - limited extension", normal: false, tags: ["spine", "lumbar", "ROM", "stenosis"] },
            { id: "msk-021", finding: "Lumbar paraspinal tenderness", normal: false, tags: ["spine", "lumbar", "tenderness"] },
            { id: "msk-022", finding: "Lumbar paraspinal muscle spasm", normal: false, tags: ["spine", "lumbar", "spasm"] },
            { id: "msk-023", finding: "Straight leg raise positive", normal: false, tags: ["spine", "lumbar", "radiculopathy", "sciatica"] },
            { id: "msk-024", finding: "Crossed straight leg raise positive", normal: false, tags: ["spine", "lumbar", "disc herniation"] },
            { id: "msk-025", finding: "FABER test positive", normal: false, tags: ["hip", "SI joint"] },
            { id: "msk-026", finding: "Shoulder - full ROM", normal: true, tags: ["shoulder", "ROM"] },
            { id: "msk-027", finding: "Shoulder - limited ROM", normal: false, tags: ["shoulder", "ROM", "frozen shoulder"] },
            { id: "msk-028", finding: "Shoulder tenderness - AC joint", normal: false, tags: ["shoulder", "AC joint", "separation"] },
            { id: "msk-029", finding: "Neer impingement test positive", normal: false, tags: ["shoulder", "impingement"] },
            { id: "msk-030", finding: "Hawkins test positive", normal: false, tags: ["shoulder", "impingement"] },
            { id: "msk-031", finding: "Drop arm test positive", normal: false, tags: ["shoulder", "rotator cuff tear"] },
            { id: "msk-032", finding: "Empty can test positive", normal: false, tags: ["shoulder", "supraspinatus"] },
            { id: "msk-033", finding: "Shoulder apprehension test positive", normal: false, tags: ["shoulder", "instability"] },
            { id: "msk-034", finding: "Elbow - full ROM", normal: true, tags: ["elbow", "ROM"] },
            { id: "msk-035", finding: "Lateral epicondyle tenderness", normal: false, tags: ["elbow", "tennis elbow"] },
            { id: "msk-036", finding: "Medial epicondyle tenderness", normal: false, tags: ["elbow", "golfers elbow"] },
            { id: "msk-037", finding: "Wrist - full ROM", normal: true, tags: ["wrist", "ROM"] },
            { id: "msk-038", finding: "Phalen test positive", normal: false, tags: ["wrist", "carpal tunnel"] },
            { id: "msk-039", finding: "Tinel sign positive (wrist)", normal: false, tags: ["wrist", "carpal tunnel"] },
            { id: "msk-040", finding: "Finkelstein test positive", normal: false, tags: ["wrist", "de Quervain"] },
            { id: "msk-041", finding: "Anatomic snuffbox tenderness", normal: false, tags: ["wrist", "scaphoid fracture"] },
            { id: "msk-042", finding: "Hand grip strength normal", normal: true, tags: ["hand", "strength"] },
            { id: "msk-043", finding: "Hand grip strength decreased", normal: false, tags: ["hand", "weakness"] },
            { id: "msk-044", finding: "Heberden nodes (DIP)", normal: false, tags: ["hand", "OA", "DIP"] },
            { id: "msk-045", finding: "Bouchard nodes (PIP)", normal: false, tags: ["hand", "OA", "PIP"] },
            { id: "msk-046", finding: "Swan neck deformity", normal: false, tags: ["hand", "RA"] },
            { id: "msk-047", finding: "Boutonniere deformity", normal: false, tags: ["hand", "RA"] },
            { id: "msk-048", finding: "Ulnar deviation", normal: false, tags: ["hand", "RA"] },
            { id: "msk-049", finding: "Dupuytren contracture", normal: false, tags: ["hand", "Dupuytren"] },
            { id: "msk-050", finding: "Hip - full ROM", normal: true, tags: ["hip", "ROM"] },
            { id: "msk-051", finding: "Hip - limited internal rotation", normal: false, tags: ["hip", "ROM", "OA"] },
            { id: "msk-052", finding: "Hip - pain with ROM", normal: false, tags: ["hip", "pain", "OA", "AVN"] },
            { id: "msk-053", finding: "Greater trochanter tenderness", normal: false, tags: ["hip", "bursitis", "trochanteric"] },
            { id: "msk-054", finding: "Trendelenburg test positive", normal: false, tags: ["hip", "abductor weakness"] },
            { id: "msk-055", finding: "Knee - full ROM", normal: true, tags: ["knee", "ROM"] },
            { id: "msk-056", finding: "Knee - limited ROM", normal: false, tags: ["knee", "ROM"] },
            { id: "msk-057", finding: "Knee effusion", normal: false, tags: ["knee", "effusion", "swelling"] },
            { id: "msk-058", finding: "Ballottement positive (patellar tap)", normal: false, tags: ["knee", "effusion"] },
            { id: "msk-059", finding: "Joint line tenderness - medial", normal: false, tags: ["knee", "meniscus", "medial"] },
            { id: "msk-060", finding: "Joint line tenderness - lateral", normal: false, tags: ["knee", "meniscus", "lateral"] },
            { id: "msk-061", finding: "McMurray test positive", normal: false, tags: ["knee", "meniscus"] },
            { id: "msk-062", finding: "Lachman test positive", normal: false, tags: ["knee", "ACL"] },
            { id: "msk-063", finding: "Anterior drawer positive", normal: false, tags: ["knee", "ACL"] },
            { id: "msk-064", finding: "Posterior drawer positive", normal: false, tags: ["knee", "PCL"] },
            { id: "msk-065", finding: "Valgus stress test positive", normal: false, tags: ["knee", "MCL"] },
            { id: "msk-066", finding: "Varus stress test positive", normal: false, tags: ["knee", "LCL"] },
            { id: "msk-067", finding: "Ankle - full ROM", normal: true, tags: ["ankle", "ROM"] },
            { id: "msk-068", finding: "Ankle swelling", normal: false, tags: ["ankle", "swelling", "sprain"] },
            { id: "msk-069", finding: "Lateral malleolus tenderness", normal: false, tags: ["ankle", "sprain", "fracture"] },
            { id: "msk-070", finding: "Medial malleolus tenderness", normal: false, tags: ["ankle", "sprain", "fracture"] },
            { id: "msk-071", finding: "Thompson test positive", normal: false, tags: ["ankle", "Achilles rupture"] },
            { id: "msk-072", finding: "Achilles tendon tenderness", normal: false, tags: ["ankle", "Achilles tendinitis"] },
            { id: "msk-073", finding: "Plantar fascia tenderness", normal: false, tags: ["foot", "plantar fasciitis"] },
            { id: "msk-074", finding: "First MTP tenderness/swelling", normal: false, tags: ["foot", "gout", "bunion"] }
        ]
    },

    // ============================================================
    // NEUROLOGICAL (~89 findings)
    // ============================================================
    neurological: {
        name: "Neurological",
        findings: [
            { id: "neuro-001", finding: "Alert and oriented x4", normal: true, tags: ["mental status"] },
            { id: "neuro-002", finding: "Attention intact", normal: true, tags: ["mental status", "attention"] },
            { id: "neuro-003", finding: "Attention impaired", normal: false, tags: ["mental status", "attention", "delirium"] },
            { id: "neuro-004", finding: "Memory intact (immediate, short, long-term)", normal: true, tags: ["mental status", "memory"] },
            { id: "neuro-005", finding: "Short-term memory impaired", normal: false, tags: ["mental status", "memory", "dementia"] },
            { id: "neuro-006", finding: "Language fluent and appropriate", normal: true, tags: ["mental status", "language"] },
            { id: "neuro-007", finding: "Aphasia - expressive (Brocas)", normal: false, tags: ["mental status", "language", "aphasia", "stroke"] },
            { id: "neuro-008", finding: "Aphasia - receptive (Wernickes)", normal: false, tags: ["mental status", "language", "aphasia", "stroke"] },
            { id: "neuro-009", finding: "Aphasia - global", normal: false, tags: ["mental status", "language", "aphasia", "stroke"] },
            { id: "neuro-010", finding: "Dysarthria", normal: false, tags: ["speech", "dysarthria", "stroke", "ALS"] },
            { id: "neuro-011", finding: "Pupils equal, round, reactive (PERRLA)", normal: true, tags: ["cranial nerve", "pupils"] },
            { id: "neuro-012", finding: "Anisocoria", normal: false, tags: ["cranial nerve", "pupils", "CN3"] },
            { id: "neuro-013", finding: "Pupil fixed and dilated", normal: false, tags: ["cranial nerve", "pupils", "emergency", "herniation"] },
            { id: "neuro-014", finding: "RAPD (Marcus Gunn pupil)", normal: false, tags: ["cranial nerve", "CN2", "optic nerve", "MS"] },
            { id: "neuro-015", finding: "Visual acuity intact", normal: true, tags: ["cranial nerve", "CN2", "vision"] },
            { id: "neuro-016", finding: "Visual fields full", normal: true, tags: ["cranial nerve", "CN2", "visual fields"] },
            { id: "neuro-017", finding: "Visual field deficit", normal: false, tags: ["cranial nerve", "CN2", "visual fields", "stroke"] },
            { id: "neuro-018", finding: "EOM intact", normal: true, tags: ["cranial nerve", "CN3", "CN4", "CN6", "EOM"] },
            { id: "neuro-019", finding: "CN III palsy (ptosis, down-and-out)", normal: false, tags: ["cranial nerve", "CN3", "aneurysm", "diabetes"] },
            { id: "neuro-020", finding: "CN VI palsy (lateral gaze palsy)", normal: false, tags: ["cranial nerve", "CN6", "increased ICP"] },
            { id: "neuro-021", finding: "Nystagmus - horizontal", normal: false, tags: ["cranial nerve", "nystagmus", "vestibular", "cerebellar"] },
            { id: "neuro-022", finding: "Nystagmus - vertical", normal: false, tags: ["cranial nerve", "nystagmus", "central"] },
            { id: "neuro-023", finding: "Facial sensation intact (CN V)", normal: true, tags: ["cranial nerve", "CN5", "sensation"] },
            { id: "neuro-024", finding: "Facial symmetry normal (CN VII)", normal: true, tags: ["cranial nerve", "CN7", "facial"] },
            { id: "neuro-025", finding: "Facial weakness - UMN pattern (forehead spared)", normal: false, tags: ["cranial nerve", "CN7", "stroke"] },
            { id: "neuro-026", finding: "Facial weakness - LMN pattern (forehead involved)", normal: false, tags: ["cranial nerve", "CN7", "Bells palsy"] },
            { id: "neuro-027", finding: "Hearing intact (CN VIII)", normal: true, tags: ["cranial nerve", "CN8", "hearing"] },
            { id: "neuro-028", finding: "Hearing decreased", normal: false, tags: ["cranial nerve", "CN8", "hearing loss"] },
            { id: "neuro-029", finding: "Palate elevates symmetrically (CN IX, X)", normal: true, tags: ["cranial nerve", "CN9", "CN10", "palate"] },
            { id: "neuro-030", finding: "Uvula deviation", normal: false, tags: ["cranial nerve", "CN9", "CN10"] },
            { id: "neuro-031", finding: "Gag reflex present", normal: true, tags: ["cranial nerve", "CN9", "CN10", "gag"] },
            { id: "neuro-032", finding: "Gag reflex absent", normal: false, tags: ["cranial nerve", "CN9", "CN10", "bulbar"] },
            { id: "neuro-033", finding: "Shoulder shrug intact (CN XI)", normal: true, tags: ["cranial nerve", "CN11", "trapezius"] },
            { id: "neuro-034", finding: "Shoulder shrug weakness", normal: false, tags: ["cranial nerve", "CN11"] },
            { id: "neuro-035", finding: "Tongue midline (CN XII)", normal: true, tags: ["cranial nerve", "CN12", "tongue"] },
            { id: "neuro-036", finding: "Tongue deviation", normal: false, tags: ["cranial nerve", "CN12", "hypoglossal"] },
            { id: "neuro-037", finding: "Tongue fasciculations", normal: false, tags: ["cranial nerve", "CN12", "ALS", "LMN"] },
            { id: "neuro-038", finding: "Motor strength 5/5 throughout", normal: true, tags: ["motor", "strength"] },
            { id: "neuro-039", finding: "Upper extremity weakness", normal: false, tags: ["motor", "weakness", "UE"] },
            { id: "neuro-040", finding: "Lower extremity weakness", normal: false, tags: ["motor", "weakness", "LE"] },
            { id: "neuro-041", finding: "Hemiparesis (unilateral weakness)", normal: false, tags: ["motor", "weakness", "hemiparesis", "stroke"] },
            { id: "neuro-042", finding: "Paraparesis (bilateral LE weakness)", normal: false, tags: ["motor", "weakness", "paraparesis", "spinal cord"] },
            { id: "neuro-043", finding: "Quadriparesis", normal: false, tags: ["motor", "weakness", "quadriparesis", "spinal cord"] },
            { id: "neuro-044", finding: "Proximal weakness", normal: false, tags: ["motor", "weakness", "myopathy"] },
            { id: "neuro-045", finding: "Distal weakness", normal: false, tags: ["motor", "weakness", "neuropathy"] },
            { id: "neuro-046", finding: "Wrist drop", normal: false, tags: ["motor", "weakness", "radial nerve"] },
            { id: "neuro-047", finding: "Foot drop", normal: false, tags: ["motor", "weakness", "peroneal nerve"] },
            { id: "neuro-048", finding: "Muscle tone normal", normal: true, tags: ["motor", "tone"] },
            { id: "neuro-049", finding: "Hypotonia (flaccidity)", normal: false, tags: ["motor", "tone", "LMN", "cerebellar"] },
            { id: "neuro-050", finding: "Hypertonia - spasticity", normal: false, tags: ["motor", "tone", "UMN", "spasticity"] },
            { id: "neuro-051", finding: "Hypertonia - rigidity", normal: false, tags: ["motor", "tone", "Parkinsons", "rigidity"] },
            { id: "neuro-052", finding: "Cogwheel rigidity", normal: false, tags: ["motor", "tone", "Parkinsons"] },
            { id: "neuro-053", finding: "No pronator drift", normal: true, tags: ["motor", "drift"] },
            { id: "neuro-054", finding: "Pronator drift present", normal: false, tags: ["motor", "drift", "UMN", "stroke"] },
            { id: "neuro-055", finding: "Light touch intact", normal: true, tags: ["sensory", "light touch"] },
            { id: "neuro-056", finding: "Light touch decreased", normal: false, tags: ["sensory", "light touch"] },
            { id: "neuro-057", finding: "Pinprick sensation intact", normal: true, tags: ["sensory", "pain"] },
            { id: "neuro-058", finding: "Pinprick sensation decreased", normal: false, tags: ["sensory", "pain"] },
            { id: "neuro-059", finding: "Vibration sense intact", normal: true, tags: ["sensory", "vibration", "dorsal column"] },
            { id: "neuro-060", finding: "Vibration sense decreased", normal: false, tags: ["sensory", "vibration", "B12", "neuropathy"] },
            { id: "neuro-061", finding: "Proprioception intact", normal: true, tags: ["sensory", "proprioception", "dorsal column"] },
            { id: "neuro-062", finding: "Proprioception impaired", normal: false, tags: ["sensory", "proprioception", "dorsal column"] },
            { id: "neuro-063", finding: "Dermatomal sensory loss", normal: false, tags: ["sensory", "dermatomal", "radiculopathy"] },
            { id: "neuro-064", finding: "Stocking-glove sensory loss", normal: false, tags: ["sensory", "neuropathy", "diabetes"] },
            { id: "neuro-065", finding: "Sensory level present", normal: false, tags: ["sensory", "spinal cord", "level"] },
            { id: "neuro-066", finding: "DTRs 2+ and symmetric", normal: true, tags: ["reflex", "DTR"] },
            { id: "neuro-067", finding: "DTRs hyperactive (3+)", normal: false, tags: ["reflex", "DTR", "UMN", "hyperreflexia"] },
            { id: "neuro-068", finding: "DTRs diminished (1+)", normal: false, tags: ["reflex", "DTR", "LMN", "hyporeflexia"] },
            { id: "neuro-069", finding: "DTRs absent (0)", normal: false, tags: ["reflex", "DTR", "areflexia", "neuropathy"] },
            { id: "neuro-070", finding: "Clonus present", normal: false, tags: ["reflex", "clonus", "UMN"] },
            { id: "neuro-071", finding: "Babinski negative (toes downgoing)", normal: true, tags: ["reflex", "Babinski", "plantar"] },
            { id: "neuro-072", finding: "Babinski positive (toes upgoing)", normal: false, tags: ["reflex", "Babinski", "UMN"] },
            { id: "neuro-073", finding: "Hoffman sign negative", normal: true, tags: ["reflex", "Hoffman"] },
            { id: "neuro-074", finding: "Hoffman sign positive", normal: false, tags: ["reflex", "Hoffman", "UMN", "cervical myelopathy"] },
            { id: "neuro-075", finding: "Finger-to-nose intact", normal: true, tags: ["coordination", "cerebellar"] },
            { id: "neuro-076", finding: "Finger-to-nose dysmetria", normal: false, tags: ["coordination", "cerebellar", "dysmetria"] },
            { id: "neuro-077", finding: "Heel-to-shin intact", normal: true, tags: ["coordination", "cerebellar"] },
            { id: "neuro-078", finding: "Heel-to-shin ataxia", normal: false, tags: ["coordination", "cerebellar", "ataxia"] },
            { id: "neuro-079", finding: "Rapid alternating movements intact", normal: true, tags: ["coordination", "cerebellar"] },
            { id: "neuro-080", finding: "Dysdiadochokinesia", normal: false, tags: ["coordination", "cerebellar"] },
            { id: "neuro-081", finding: "Intention tremor", normal: false, tags: ["coordination", "cerebellar", "tremor"] },
            { id: "neuro-082", finding: "Romberg negative", normal: true, tags: ["coordination", "Romberg", "proprioception"] },
            { id: "neuro-083", finding: "Romberg positive", normal: false, tags: ["coordination", "Romberg", "proprioception", "dorsal column"] },
            { id: "neuro-084", finding: "Kernig sign negative", normal: true, tags: ["meningeal", "Kernig"] },
            { id: "neuro-085", finding: "Kernig sign positive", normal: false, tags: ["meningeal", "Kernig", "meningitis"] },
            { id: "neuro-086", finding: "Brudzinski sign negative", normal: true, tags: ["meningeal", "Brudzinski"] },
            { id: "neuro-087", finding: "Brudzinski sign positive", normal: false, tags: ["meningeal", "Brudzinski", "meningitis"] },
            { id: "neuro-088", finding: "Nuchal rigidity absent", normal: true, tags: ["meningeal", "neck"] },
            { id: "neuro-089", finding: "Nuchal rigidity present", normal: false, tags: ["meningeal", "neck", "meningitis", "SAH"] }
        ]
    },

    // ============================================================
    // PSYCHIATRIC/MENTAL STATUS (~47 findings)
    // ============================================================
    psychiatric: {
        name: "Psychiatric/Mental Status",
        findings: [
            { id: "psych-001", finding: "Appearance appropriate - well-groomed", normal: true, tags: ["appearance", "grooming"] },
            { id: "psych-002", finding: "Poor hygiene/grooming", normal: false, tags: ["appearance", "grooming", "depression", "psychosis"] },
            { id: "psych-003", finding: "Disheveled appearance", normal: false, tags: ["appearance", "mania", "psychosis"] },
            { id: "psych-004", finding: "Clothing appropriate", normal: true, tags: ["appearance", "dress"] },
            { id: "psych-005", finding: "Clothing inappropriate/bizarre", normal: false, tags: ["appearance", "dress", "psychosis", "mania"] },
            { id: "psych-006", finding: "Behavior appropriate and cooperative", normal: true, tags: ["behavior"] },
            { id: "psych-007", finding: "Psychomotor agitation", normal: false, tags: ["behavior", "agitation", "mania", "anxiety"] },
            { id: "psych-008", finding: "Psychomotor retardation", normal: false, tags: ["behavior", "retardation", "depression"] },
            { id: "psych-009", finding: "Eye contact appropriate", normal: true, tags: ["behavior", "eye contact"] },
            { id: "psych-010", finding: "Poor eye contact", normal: false, tags: ["behavior", "eye contact", "depression", "anxiety"] },
            { id: "psych-011", finding: "Guarded/suspicious behavior", normal: false, tags: ["behavior", "paranoia"] },
            { id: "psych-012", finding: "Speech normal rate and rhythm", normal: true, tags: ["speech", "rate"] },
            { id: "psych-013", finding: "Speech pressured", normal: false, tags: ["speech", "pressured", "mania"] },
            { id: "psych-014", finding: "Speech slow/poverty of speech", normal: false, tags: ["speech", "slow", "depression"] },
            { id: "psych-015", finding: "Speech volume appropriate", normal: true, tags: ["speech", "volume"] },
            { id: "psych-016", finding: "Speech loud", normal: false, tags: ["speech", "volume", "mania"] },
            { id: "psych-017", finding: "Speech soft/whispered", normal: false, tags: ["speech", "volume", "depression"] },
            { id: "psych-018", finding: "Mood euthymic", normal: true, tags: ["mood"] },
            { id: "psych-019", finding: "Mood depressed", normal: false, tags: ["mood", "depression"] },
            { id: "psych-020", finding: "Mood anxious", normal: false, tags: ["mood", "anxiety"] },
            { id: "psych-021", finding: "Mood irritable", normal: false, tags: ["mood", "irritability", "mania"] },
            { id: "psych-022", finding: "Mood euphoric/elevated", normal: false, tags: ["mood", "euphoria", "mania"] },
            { id: "psych-023", finding: "Affect appropriate/congruent", normal: true, tags: ["affect"] },
            { id: "psych-024", finding: "Affect flat", normal: false, tags: ["affect", "flat", "schizophrenia", "depression"] },
            { id: "psych-025", finding: "Affect blunted", normal: false, tags: ["affect", "blunted"] },
            { id: "psych-026", finding: "Affect labile", normal: false, tags: ["affect", "labile", "mania", "pseudobulbar"] },
            { id: "psych-027", finding: "Affect incongruent", normal: false, tags: ["affect", "incongruent", "schizophrenia"] },
            { id: "psych-028", finding: "Thought process linear and goal-directed", normal: true, tags: ["thought process"] },
            { id: "psych-029", finding: "Thought process tangential", normal: false, tags: ["thought process", "tangential", "mania"] },
            { id: "psych-030", finding: "Thought process circumstantial", normal: false, tags: ["thought process", "circumstantial"] },
            { id: "psych-031", finding: "Flight of ideas", normal: false, tags: ["thought process", "flight of ideas", "mania"] },
            { id: "psych-032", finding: "Loose associations", normal: false, tags: ["thought process", "loose associations", "psychosis"] },
            { id: "psych-033", finding: "Thought blocking", normal: false, tags: ["thought process", "blocking", "psychosis"] },
            { id: "psych-034", finding: "No delusions elicited", normal: true, tags: ["thought content", "delusions"] },
            { id: "psych-035", finding: "Delusions present", normal: false, tags: ["thought content", "delusions", "psychosis"] },
            { id: "psych-036", finding: "No hallucinations reported", normal: true, tags: ["thought content", "hallucinations"] },
            { id: "psych-037", finding: "Auditory hallucinations", normal: false, tags: ["thought content", "hallucinations", "auditory", "psychosis"] },
            { id: "psych-038", finding: "Visual hallucinations", normal: false, tags: ["thought content", "hallucinations", "visual", "delirium"] },
            { id: "psych-039", finding: "No suicidal ideation", normal: true, tags: ["thought content", "suicidal", "SI"] },
            { id: "psych-040", finding: "Suicidal ideation present", normal: false, tags: ["thought content", "suicidal", "SI", "emergency"] },
            { id: "psych-041", finding: "No homicidal ideation", normal: true, tags: ["thought content", "homicidal", "HI"] },
            { id: "psych-042", finding: "Homicidal ideation present", normal: false, tags: ["thought content", "homicidal", "HI", "emergency"] },
            { id: "psych-043", finding: "Insight good", normal: true, tags: ["insight"] },
            { id: "psych-044", finding: "Insight poor/limited", normal: false, tags: ["insight", "poor"] },
            { id: "psych-045", finding: "Judgment intact", normal: true, tags: ["judgment"] },
            { id: "psych-046", finding: "Judgment impaired", normal: false, tags: ["judgment", "impaired"] },
            { id: "psych-047", finding: "Oriented to person, place, time, situation", normal: true, tags: ["orientation"] }
        ]
    }

};

// ============================================================
// SEARCH FUNCTION
// ============================================================
PhysicalExamLibrary.search = function(query, options = {}) {
    const {
        system = null,          // Filter by body system
        normalOnly = null,      // true = normal findings, false = abnormal, null = all
        maxResults = 20,
        fuzzyThreshold = 0.3
    } = options;

    const results = [];
    const queryLower = query.toLowerCase();
    const queryWords = queryLower.split(/\s+/);

    // Get systems to search
    const systemsToSearch = system 
        ? [this[system]] 
        : Object.values(this).filter(s => s && s.findings);

    for (const sys of systemsToSearch) {
        if (!sys.findings) continue;

        for (const finding of sys.findings) {
            // Filter by normal/abnormal if specified
            if (normalOnly !== null && finding.normal !== normalOnly) continue;

            // Calculate match score
            let score = 0;
            const findingLower = finding.finding.toLowerCase();
            const tagsLower = (finding.tags || []).map(t => t.toLowerCase());

            // Exact match in finding
            if (findingLower.includes(queryLower)) {
                score += 10;
            }

            // Word matches
            for (const word of queryWords) {
                if (findingLower.includes(word)) score += 3;
                if (tagsLower.some(tag => tag.includes(word))) score += 2;
            }

            // Fuzzy matching for typos
            if (score === 0) {
                const similarity = this._fuzzyMatch(queryLower, findingLower);
                if (similarity > fuzzyThreshold) {
                    score = similarity * 5;
                }
            }

            if (score > 0) {
                results.push({
                    ...finding,
                    system: sys.name,
                    score
                });
            }
        }
    }

    // Sort by score and limit results
    return results
        .sort((a, b) => b.score - a.score)
        .slice(0, maxResults);
};

// Simple fuzzy matching using Levenshtein distance
PhysicalExamLibrary._fuzzyMatch = function(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = this._levenshtein(longer, shorter);
    return (longer.length - editDistance) / longer.length;
};

PhysicalExamLibrary._levenshtein = function(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    
    return matrix[str2.length][str1.length];
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PhysicalExamLibrary;
}
if (typeof window !== 'undefined') {
    window.PhysicalExamLibrary = PhysicalExamLibrary;
}
