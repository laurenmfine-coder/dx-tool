/**
 * ReasonDx HPI Elements Library
 * Searchable library of History of Present Illness descriptors
 * Using OPQRST and OLDCARTS frameworks
 * Version 1.0 | December 2024
 * 
 * Total: ~250 standardized HPI elements
 */

const HPIElementsLibrary = {

    metadata: {
        version: "1.0",
        totalElements: 248,
        lastUpdated: "2024-12",
        frameworks: ["OPQRST", "OLDCARTS"]
    },

    // ============================================================
    // ONSET (~30 elements)
    // ============================================================
    onset: {
        name: "Onset",
        description: "When and how did the symptom begin?",
        elements: [
            { id: "onset-001", text: "Sudden onset (seconds)", synonyms: ["abrupt", "acute", "immediate", "instantaneous"], tags: ["timing", "acute"] },
            { id: "onset-002", text: "Sudden onset (minutes)", synonyms: ["rapid", "quick"], tags: ["timing", "acute"] },
            { id: "onset-003", text: "Gradual onset (hours)", synonyms: ["progressive", "slow"], tags: ["timing", "subacute"] },
            { id: "onset-004", text: "Gradual onset (days)", synonyms: ["insidious", "slowly progressive"], tags: ["timing", "subacute"] },
            { id: "onset-005", text: "Gradual onset (weeks)", synonyms: ["chronic", "longstanding"], tags: ["timing", "chronic"] },
            { id: "onset-006", text: "Gradual onset (months)", synonyms: ["chronic", "insidious"], tags: ["timing", "chronic"] },
            { id: "onset-007", text: "Onset at rest", synonyms: ["while sitting", "while lying down", "sedentary"], tags: ["activity"] },
            { id: "onset-008", text: "Onset with exertion", synonyms: ["with activity", "while exercising", "during physical activity", "exertional"], tags: ["activity", "cardiac"] },
            { id: "onset-009", text: "Onset upon awakening", synonyms: ["in the morning", "woke up with", "morning"], tags: ["timing", "sleep"] },
            { id: "onset-010", text: "Onset during sleep", synonyms: ["nocturnal", "woke patient from sleep", "nighttime"], tags: ["timing", "sleep"] },
            { id: "onset-011", text: "Onset after eating", synonyms: ["postprandial", "after meals", "after food"], tags: ["timing", "GI"] },
            { id: "onset-012", text: "Onset before eating", synonyms: ["preprandial", "when hungry", "empty stomach"], tags: ["timing", "GI"] },
            { id: "onset-013", text: "Onset after trauma", synonyms: ["after injury", "post-traumatic", "following accident"], tags: ["mechanism"] },
            { id: "onset-014", text: "Onset after medication", synonyms: ["drug-induced", "after starting medicine", "medication-related"], tags: ["iatrogenic"] },
            { id: "onset-015", text: "Onset with stress", synonyms: ["stress-related", "during stressful event", "anxiety-related"], tags: ["psychosomatic"] },
            { id: "onset-016", text: "Onset with position change", synonyms: ["positional", "when standing", "when lying down"], tags: ["positional"] },
            { id: "onset-017", text: "Onset with coughing/sneezing", synonyms: ["Valsalva-related", "with straining"], tags: ["mechanism"] },
            { id: "onset-018", text: "Onset with bowel movement", synonyms: ["with defecation", "with straining at stool"], tags: ["GI"] },
            { id: "onset-019", text: "Onset with urination", synonyms: ["with voiding", "during micturition"], tags: ["GU"] },
            { id: "onset-020", text: "Onset with sexual activity", synonyms: ["during intercourse", "coital"], tags: ["sexual"] },
            { id: "onset-021", text: "Onset spontaneous", synonyms: ["without provocation", "no clear trigger", "unprovoked"], tags: ["mechanism"] },
            { id: "onset-022", text: "Onset following illness", synonyms: ["post-viral", "after infection", "post-infectious"], tags: ["mechanism"] },
            { id: "onset-023", text: "Onset following surgery", synonyms: ["post-operative", "after procedure"], tags: ["iatrogenic"] },
            { id: "onset-024", text: "Recurrent episode", synonyms: ["has happened before", "similar to previous"], tags: ["pattern"] },
            { id: "onset-025", text: "First episode ever", synonyms: ["never happened before", "new symptom"], tags: ["pattern"] },
            { id: "onset-026", text: "Thunderclap onset", synonyms: ["maximal at onset", "worst immediately"], tags: ["acute", "emergency", "SAH"] },
            { id: "onset-027", text: "Onset with specific activity", synonyms: ["while doing X", "triggered by activity"], tags: ["activity"] },
            { id: "onset-028", text: "Onset with emotional distress", synonyms: ["after argument", "after bad news"], tags: ["psychosomatic"] }
        ]
    },

    // ============================================================
    // LOCATION (~40 elements)
    // ============================================================
    location: {
        name: "Location",
        description: "Where is the symptom located?",
        elements: [
            // General descriptors
            { id: "loc-001", text: "Localized/focal", synonyms: ["specific area", "pinpoint", "well-defined"], tags: ["pattern"] },
            { id: "loc-002", text: "Diffuse/generalized", synonyms: ["widespread", "all over", "everywhere"], tags: ["pattern"] },
            { id: "loc-003", text: "Radiating", synonyms: ["spreading", "traveling", "shooting"], tags: ["pattern"] },
            { id: "loc-004", text: "Migratory", synonyms: ["moving", "wandering", "shifting"], tags: ["pattern"] },
            { id: "loc-005", text: "Right-sided", synonyms: ["on the right", "right side"], tags: ["laterality"] },
            { id: "loc-006", text: "Left-sided", synonyms: ["on the left", "left side"], tags: ["laterality"] },
            { id: "loc-007", text: "Bilateral", synonyms: ["both sides", "on both sides"], tags: ["laterality"] },
            { id: "loc-008", text: "Midline/central", synonyms: ["in the middle", "centered"], tags: ["laterality"] },
            { id: "loc-009", text: "Unilateral", synonyms: ["one side only"], tags: ["laterality"] },
            
            // Chest locations
            { id: "loc-010", text: "Substernal/retrosternal", synonyms: ["behind sternum", "behind breastbone"], tags: ["chest", "cardiac"] },
            { id: "loc-011", text: "Precordial", synonyms: ["over heart", "left chest"], tags: ["chest", "cardiac"] },
            { id: "loc-012", text: "Left chest", synonyms: ["left side of chest"], tags: ["chest"] },
            { id: "loc-013", text: "Right chest", synonyms: ["right side of chest"], tags: ["chest"] },
            { id: "loc-014", text: "Chest wall", synonyms: ["superficial chest"], tags: ["chest", "MSK"] },
            
            // Abdominal locations
            { id: "loc-015", text: "Epigastric", synonyms: ["upper middle abdomen", "pit of stomach"], tags: ["abdomen"] },
            { id: "loc-016", text: "Periumbilical", synonyms: ["around belly button", "around navel"], tags: ["abdomen"] },
            { id: "loc-017", text: "Right upper quadrant (RUQ)", synonyms: ["right upper abdomen"], tags: ["abdomen"] },
            { id: "loc-018", text: "Left upper quadrant (LUQ)", synonyms: ["left upper abdomen"], tags: ["abdomen"] },
            { id: "loc-019", text: "Right lower quadrant (RLQ)", synonyms: ["right lower abdomen"], tags: ["abdomen"] },
            { id: "loc-020", text: "Left lower quadrant (LLQ)", synonyms: ["left lower abdomen"], tags: ["abdomen"] },
            { id: "loc-021", text: "Suprapubic", synonyms: ["above pubic bone", "lower middle abdomen"], tags: ["abdomen", "GU"] },
            { id: "loc-022", text: "Flank", synonyms: ["side", "lateral abdomen"], tags: ["abdomen", "renal"] },
            
            // Head locations
            { id: "loc-023", text: "Frontal/forehead", synonyms: ["front of head"], tags: ["head"] },
            { id: "loc-024", text: "Temporal", synonyms: ["side of head", "temple"], tags: ["head"] },
            { id: "loc-025", text: "Occipital", synonyms: ["back of head"], tags: ["head"] },
            { id: "loc-026", text: "Vertex", synonyms: ["top of head"], tags: ["head"] },
            { id: "loc-027", text: "Global/holocephalic", synonyms: ["entire head", "all over head"], tags: ["head"] },
            { id: "loc-028", text: "Retro-orbital", synonyms: ["behind eye"], tags: ["head", "eye"] },
            { id: "loc-029", text: "Hemicranial", synonyms: ["half of head", "one-sided headache"], tags: ["head", "migraine"] },
            
            // Radiation patterns
            { id: "loc-030", text: "Radiates to jaw", synonyms: ["moves to jaw"], tags: ["radiation", "cardiac"] },
            { id: "loc-031", text: "Radiates to left arm", synonyms: ["moves to left arm"], tags: ["radiation", "cardiac"] },
            { id: "loc-032", text: "Radiates to back", synonyms: ["moves to back"], tags: ["radiation"] },
            { id: "loc-033", text: "Radiates to shoulder", synonyms: ["moves to shoulder"], tags: ["radiation"] },
            { id: "loc-034", text: "Radiates to neck", synonyms: ["moves to neck"], tags: ["radiation"] },
            { id: "loc-035", text: "Radiates to groin", synonyms: ["moves to groin"], tags: ["radiation", "renal"] },
            { id: "loc-036", text: "Radiates down leg", synonyms: ["moves down leg", "sciatica pattern"], tags: ["radiation", "neuro"] },
            { id: "loc-037", text: "Band-like distribution", synonyms: ["dermatomal", "belt-like"], tags: ["pattern", "neuro"] },
            { id: "loc-038", text: "Referred pain pattern", synonyms: ["felt elsewhere from source"], tags: ["pattern"] },
            { id: "loc-039", text: "Deep/visceral", synonyms: ["internal", "inside"], tags: ["depth"] },
            { id: "loc-040", text: "Superficial", synonyms: ["surface", "skin-level"], tags: ["depth"] }
        ]
    },

    // ============================================================
    // DURATION (~25 elements)
    // ============================================================
    duration: {
        name: "Duration",
        description: "How long does the symptom last?",
        elements: [
            { id: "dur-001", text: "Seconds", synonyms: ["momentary", "fleeting", "brief seconds"], tags: ["acute"] },
            { id: "dur-002", text: "Less than 1 minute", synonyms: ["under a minute"], tags: ["acute"] },
            { id: "dur-003", text: "1-5 minutes", synonyms: ["few minutes", "several minutes"], tags: ["acute"] },
            { id: "dur-004", text: "5-15 minutes", synonyms: ["about 10 minutes"], tags: ["acute"] },
            { id: "dur-005", text: "15-30 minutes", synonyms: ["about 20 minutes", "quarter hour to half hour"], tags: ["acute"] },
            { id: "dur-006", text: "30-60 minutes", synonyms: ["about an hour", "half hour to hour"], tags: ["subacute"] },
            { id: "dur-007", text: "1-2 hours", synonyms: ["couple hours"], tags: ["subacute"] },
            { id: "dur-008", text: "2-4 hours", synonyms: ["few hours"], tags: ["subacute"] },
            { id: "dur-009", text: "4-12 hours", synonyms: ["several hours", "half day"], tags: ["subacute"] },
            { id: "dur-010", text: "12-24 hours", synonyms: ["about a day", "overnight"], tags: ["subacute"] },
            { id: "dur-011", text: "1-3 days", synonyms: ["few days"], tags: ["subacute"] },
            { id: "dur-012", text: "3-7 days", synonyms: ["about a week", "several days"], tags: ["subacute"] },
            { id: "dur-013", text: "1-2 weeks", synonyms: ["couple weeks"], tags: ["subacute"] },
            { id: "dur-014", text: "2-4 weeks", synonyms: ["few weeks", "about a month"], tags: ["chronic"] },
            { id: "dur-015", text: "1-3 months", synonyms: ["few months"], tags: ["chronic"] },
            { id: "dur-016", text: "3-6 months", synonyms: ["several months", "half year"], tags: ["chronic"] },
            { id: "dur-017", text: "6-12 months", synonyms: ["about a year"], tags: ["chronic"] },
            { id: "dur-018", text: "Greater than 1 year", synonyms: ["over a year", "years"], tags: ["chronic"] },
            { id: "dur-019", text: "Ongoing/continuous", synonyms: ["still present", "hasn't stopped"], tags: ["persistent"] },
            { id: "dur-020", text: "Total duration of illness", synonyms: ["since it started"], tags: ["course"] },
            { id: "dur-021", text: "Duration of each episode", synonyms: ["how long each attack lasts"], tags: ["episodic"] },
            { id: "dur-022", text: "Variable duration", synonyms: ["different each time"], tags: ["pattern"] },
            { id: "dur-023", text: "Progressive lengthening", synonyms: ["episodes getting longer"], tags: ["pattern", "worsening"] },
            { id: "dur-024", text: "Self-limited", synonyms: ["goes away on its own", "resolves spontaneously"], tags: ["pattern"] },
            { id: "dur-025", text: "Lifelong/since birth", synonyms: ["congenital", "always had"], tags: ["chronic", "congenital"] }
        ]
    },

    // ============================================================
    // CHARACTER/QUALITY (~50 elements)
    // ============================================================
    character: {
        name: "Character/Quality",
        description: "What does the symptom feel like?",
        elements: [
            // Pain qualities
            { id: "char-001", text: "Sharp", synonyms: ["stabbing", "knife-like", "piercing", "lancinating"], tags: ["pain", "somatic"] },
            { id: "char-002", text: "Dull", synonyms: ["aching", "deep ache"], tags: ["pain", "visceral"] },
            { id: "char-003", text: "Burning", synonyms: ["hot", "searing", "on fire"], tags: ["pain", "neuropathic"] },
            { id: "char-004", text: "Pressure", synonyms: ["squeezing", "tightness", "heaviness", "weight on chest"], tags: ["pain", "cardiac"] },
            { id: "char-005", text: "Cramping", synonyms: ["colicky", "spasmodic", "griping"], tags: ["pain", "GI", "muscle"] },
            { id: "char-006", text: "Throbbing", synonyms: ["pulsating", "pounding", "beating"], tags: ["pain", "vascular"] },
            { id: "char-007", text: "Tearing", synonyms: ["ripping", "splitting"], tags: ["pain", "aortic"] },
            { id: "char-008", text: "Electric/shooting", synonyms: ["lancinating", "shock-like", "lightning"], tags: ["pain", "neuropathic"] },
            { id: "char-009", text: "Gnawing", synonyms: ["nagging", "persistent ache"], tags: ["pain", "GI"] },
            { id: "char-010", text: "Boring", synonyms: ["drilling"], tags: ["pain"] },
            { id: "char-011", text: "Crushing", synonyms: ["vice-like", "pressing"], tags: ["pain", "cardiac"] },
            { id: "char-012", text: "Stinging", synonyms: ["pricking"], tags: ["pain", "superficial"] },
            { id: "char-013", text: "Sore", synonyms: ["tender", "raw"], tags: ["pain"] },
            
            // Sensory qualities
            { id: "char-014", text: "Tingling", synonyms: ["pins and needles", "paresthesia", "prickling"], tags: ["sensory", "neuro"] },
            { id: "char-015", text: "Numbness", synonyms: ["loss of sensation", "dead feeling", "anesthesia"], tags: ["sensory", "neuro"] },
            { id: "char-016", text: "Itching", synonyms: ["pruritus", "itchy"], tags: ["sensory", "skin"] },
            { id: "char-017", text: "Crawling sensation", synonyms: ["formication", "bugs crawling"], tags: ["sensory"] },
            { id: "char-018", text: "Cold sensation", synonyms: ["feels cold"], tags: ["sensory", "vascular"] },
            { id: "char-019", text: "Hot sensation", synonyms: ["feels warm", "flushing"], tags: ["sensory"] },
            
            // Respiratory qualities
            { id: "char-020", text: "Shortness of breath", synonyms: ["dyspnea", "can't catch breath", "breathless", "air hunger"], tags: ["respiratory"] },
            { id: "char-021", text: "Chest tightness", synonyms: ["can't take deep breath", "constriction"], tags: ["respiratory", "cardiac"] },
            { id: "char-022", text: "Wheezing", synonyms: ["whistling breath"], tags: ["respiratory", "asthma"] },
            
            // GI qualities
            { id: "char-023", text: "Nausea", synonyms: ["queasy", "sick to stomach", "urge to vomit"], tags: ["GI"] },
            { id: "char-024", text: "Bloating", synonyms: ["distension", "full feeling", "gassy"], tags: ["GI"] },
            { id: "char-025", text: "Heartburn", synonyms: ["acid reflux", "burning in chest/throat"], tags: ["GI", "GERD"] },
            
            // Neurological qualities
            { id: "char-026", text: "Dizziness", synonyms: ["lightheaded", "woozy", "unsteady"], tags: ["neuro", "vestibular"] },
            { id: "char-027", text: "Vertigo", synonyms: ["room spinning", "world spinning"], tags: ["neuro", "vestibular"] },
            { id: "char-028", text: "Weakness", synonyms: ["loss of strength", "can't move"], tags: ["neuro", "motor"] },
            { id: "char-029", text: "Fatigue", synonyms: ["tired", "exhausted", "no energy"], tags: ["constitutional"] },
            
            // Other qualities
            { id: "char-030", text: "Swelling", synonyms: ["edema", "puffiness", "enlargement"], tags: ["swelling"] },
            { id: "char-031", text: "Stiffness", synonyms: ["rigidity", "hard to move", "tightness"], tags: ["MSK"] },
            { id: "char-032", text: "Palpitations", synonyms: ["heart racing", "heart pounding", "fluttering", "skipped beats"], tags: ["cardiac"] },
            { id: "char-033", text: "Pressure sensation", synonyms: ["fullness"], tags: ["general"] },
            { id: "char-034", text: "Foreign body sensation", synonyms: ["something stuck", "lump in throat"], tags: ["general"] },
            { id: "char-035", text: "Productive cough", synonyms: ["cough with phlegm", "wet cough"], tags: ["respiratory"] },
            { id: "char-036", text: "Dry cough", synonyms: ["nonproductive", "hacking cough"], tags: ["respiratory"] },
            { id: "char-037", text: "Described as worst ever", synonyms: ["worst of my life", "10/10"], tags: ["severity", "emergency"] },
            { id: "char-038", text: "Band-like", synonyms: ["encircling", "girdle-like"], tags: ["pattern"] },
            { id: "char-039", text: "Vague/ill-defined", synonyms: ["hard to describe", "diffuse discomfort"], tags: ["character"] },
            { id: "char-040", text: "Well-localized", synonyms: ["can point to it with one finger"], tags: ["character"] }
        ]
    },

    // ============================================================
    // AGGRAVATING FACTORS (~35 elements)
    // ============================================================
    aggravating: {
        name: "Aggravating Factors",
        description: "What makes the symptom worse?",
        elements: [
            // Physical/positional
            { id: "agg-001", text: "Worse with movement", synonyms: ["worse with activity", "worse with motion"], tags: ["physical"] },
            { id: "agg-002", text: "Worse with walking", synonyms: ["worse with ambulation"], tags: ["physical", "claudication"] },
            { id: "agg-003", text: "Worse with exertion", synonyms: ["worse with exercise", "exercise-induced"], tags: ["physical", "cardiac"] },
            { id: "agg-004", text: "Worse when lying flat", synonyms: ["orthopnea", "worse supine"], tags: ["positional", "cardiac", "respiratory"] },
            { id: "agg-005", text: "Worse when lying on affected side", synonyms: ["side-dependent"], tags: ["positional"] },
            { id: "agg-006", text: "Worse when bending forward", synonyms: ["worse with flexion"], tags: ["positional", "MSK"] },
            { id: "agg-007", text: "Worse when bending backward", synonyms: ["worse with extension"], tags: ["positional", "MSK"] },
            { id: "agg-008", text: "Worse when standing", synonyms: ["worse upright"], tags: ["positional"] },
            { id: "agg-009", text: "Worse when sitting", synonyms: ["worse in seated position"], tags: ["positional"] },
            { id: "agg-010", text: "Worse with prolonged position", synonyms: ["worse after staying still"], tags: ["positional", "MSK"] },
            
            // Respiratory
            { id: "agg-011", text: "Worse with deep breathing", synonyms: ["pleuritic", "worse with inspiration"], tags: ["respiratory", "chest"] },
            { id: "agg-012", text: "Worse with coughing", synonyms: ["worse when coughing"], tags: ["respiratory", "chest"] },
            { id: "agg-013", text: "Worse with sneezing", synonyms: ["worse when sneezing"], tags: ["respiratory"] },
            { id: "agg-014", text: "Worse with talking", synonyms: ["worse with speech"], tags: ["respiratory", "throat"] },
            { id: "agg-015", text: "Worse with Valsalva", synonyms: ["worse with straining", "worse with bearing down"], tags: ["ICP", "hernia"] },
            
            // GI-related
            { id: "agg-016", text: "Worse with eating", synonyms: ["worse after meals", "worse with food", "postprandial worsening"], tags: ["GI"] },
            { id: "agg-017", text: "Worse with specific foods", synonyms: ["food triggers"], tags: ["GI", "allergy"] },
            { id: "agg-018", text: "Worse with fatty foods", synonyms: ["worse after greasy food"], tags: ["GI", "biliary"] },
            { id: "agg-019", text: "Worse with spicy foods", synonyms: ["worse after spicy food"], tags: ["GI", "GERD"] },
            { id: "agg-020", text: "Worse with alcohol", synonyms: ["worse after drinking"], tags: ["GI", "pancreas"] },
            { id: "agg-021", text: "Worse with caffeine", synonyms: ["worse with coffee"], tags: ["GI", "cardiac"] },
            { id: "agg-022", text: "Worse when hungry", synonyms: ["worse on empty stomach"], tags: ["GI", "PUD"] },
            
            // Environmental/temporal
            { id: "agg-023", text: "Worse at night", synonyms: ["nocturnal worsening", "worse when sleeping"], tags: ["temporal"] },
            { id: "agg-024", text: "Worse in morning", synonyms: ["morning worsening", "worse when waking"], tags: ["temporal"] },
            { id: "agg-025", text: "Worse with cold", synonyms: ["cold-sensitive", "worse in cold weather"], tags: ["environmental"] },
            { id: "agg-026", text: "Worse with heat", synonyms: ["heat-sensitive", "worse in hot weather"], tags: ["environmental"] },
            { id: "agg-027", text: "Worse with weather changes", synonyms: ["barometric pressure sensitive"], tags: ["environmental"] },
            
            // Physical examination
            { id: "agg-028", text: "Worse with palpation", synonyms: ["tender to touch", "reproducible with palpation"], tags: ["physical exam"] },
            { id: "agg-029", text: "Worse with pressure", synonyms: ["worse with compression"], tags: ["physical"] },
            
            // Psychological
            { id: "agg-030", text: "Worse with stress", synonyms: ["stress-related worsening", "worse with anxiety"], tags: ["psychological"] },
            { id: "agg-031", text: "Worse with emotional upset", synonyms: ["worse when upset"], tags: ["psychological"] },
            
            // Other
            { id: "agg-032", text: "Worse with urination", synonyms: ["dysuria"], tags: ["GU"] },
            { id: "agg-033", text: "Worse with defecation", synonyms: ["worse with bowel movements"], tags: ["GI", "rectal"] },
            { id: "agg-034", text: "Worse with swallowing", synonyms: ["odynophagia", "worse when eating/drinking"], tags: ["throat", "esophageal"] },
            { id: "agg-035", text: "Worse with light", synonyms: ["photophobia", "light sensitivity"], tags: ["neuro", "eye"] }
        ]
    },

    // ============================================================
    // RELIEVING FACTORS (~30 elements)
    // ============================================================
    relieving: {
        name: "Relieving Factors",
        description: "What makes the symptom better?",
        elements: [
            // Positional
            { id: "rel-001", text: "Relieved by rest", synonyms: ["better with rest", "improved at rest"], tags: ["physical"] },
            { id: "rel-002", text: "Relieved by position change", synonyms: ["positional relief"], tags: ["positional"] },
            { id: "rel-003", text: "Relieved by sitting up", synonyms: ["better upright"], tags: ["positional", "cardiac"] },
            { id: "rel-004", text: "Relieved by leaning forward", synonyms: ["better sitting up and forward"], tags: ["positional", "pericarditis", "pancreas"] },
            { id: "rel-005", text: "Relieved by lying down", synonyms: ["better supine"], tags: ["positional"] },
            { id: "rel-006", text: "Relieved by lying on affected side", synonyms: ["better on painful side"], tags: ["positional", "pleurisy"] },
            { id: "rel-007", text: "Relieved by fetal position", synonyms: ["curled up position"], tags: ["positional", "GI"] },
            { id: "rel-008", text: "Relieved by walking", synonyms: ["better with movement"], tags: ["physical", "claudication"] },
            
            // Medications
            { id: "rel-009", text: "Relieved by nitroglycerin", synonyms: ["responds to nitro", "NTG helps"], tags: ["medication", "cardiac"] },
            { id: "rel-010", text: "Relieved by antacids", synonyms: ["responds to antacids", "better with Tums"], tags: ["medication", "GI"] },
            { id: "rel-011", text: "Relieved by NSAIDs", synonyms: ["responds to ibuprofen", "better with anti-inflammatory"], tags: ["medication"] },
            { id: "rel-012", text: "Relieved by acetaminophen", synonyms: ["responds to Tylenol"], tags: ["medication"] },
            { id: "rel-013", text: "Relieved by opioids", synonyms: ["responds to narcotics"], tags: ["medication"] },
            { id: "rel-014", text: "Relieved by bronchodilator", synonyms: ["responds to inhaler", "better with albuterol"], tags: ["medication", "respiratory"] },
            { id: "rel-015", text: "Relieved by antihistamine", synonyms: ["responds to Benadryl"], tags: ["medication", "allergy"] },
            { id: "rel-016", text: "Relieved by prescribed medication", synonyms: ["responds to current meds"], tags: ["medication"] },
            
            // Physical measures
            { id: "rel-017", text: "Relieved by ice/cold", synonyms: ["better with cold", "ice helps"], tags: ["physical"] },
            { id: "rel-018", text: "Relieved by heat", synonyms: ["better with warmth", "heating pad helps"], tags: ["physical"] },
            { id: "rel-019", text: "Relieved by massage", synonyms: ["better with rubbing"], tags: ["physical", "MSK"] },
            { id: "rel-020", text: "Relieved by pressure", synonyms: ["better with compression"], tags: ["physical"] },
            
            // GI-related
            { id: "rel-021", text: "Relieved by eating", synonyms: ["better with food"], tags: ["GI", "PUD"] },
            { id: "rel-022", text: "Relieved by not eating", synonyms: ["better when fasting"], tags: ["GI"] },
            { id: "rel-023", text: "Relieved by bowel movement", synonyms: ["better after BM", "relief with defecation"], tags: ["GI", "IBS"] },
            { id: "rel-024", text: "Relieved by passing gas", synonyms: ["better after flatus"], tags: ["GI"] },
            { id: "rel-025", text: "Relieved by vomiting", synonyms: ["better after throwing up"], tags: ["GI"] },
            { id: "rel-026", text: "Relieved by belching", synonyms: ["better after burping"], tags: ["GI"] },
            
            // Other
            { id: "rel-027", text: "Relieved by sleep", synonyms: ["better after sleeping"], tags: ["rest"] },
            { id: "rel-028", text: "Relieved by relaxation", synonyms: ["better when calm"], tags: ["psychological"] },
            { id: "rel-029", text: "Nothing relieves it", synonyms: ["refractory", "unremitting", "nothing helps"], tags: ["severe"] },
            { id: "rel-030", text: "Partial relief only", synonyms: ["helps somewhat", "takes edge off"], tags: ["partial"] }
        ]
    },

    // ============================================================
    // TIMING/PATTERN (~25 elements)
    // ============================================================
    timing: {
        name: "Timing/Pattern",
        description: "What is the temporal pattern of the symptom?",
        elements: [
            { id: "time-001", text: "Constant", synonyms: ["continuous", "unremitting", "persistent", "always there"], tags: ["pattern"] },
            { id: "time-002", text: "Intermittent", synonyms: ["comes and goes", "episodic", "on and off"], tags: ["pattern"] },
            { id: "time-003", text: "Waxing and waning", synonyms: ["fluctuating", "variable intensity"], tags: ["pattern"] },
            { id: "time-004", text: "Progressive", synonyms: ["getting worse", "worsening over time", "escalating"], tags: ["pattern", "concerning"] },
            { id: "time-005", text: "Stable", synonyms: ["unchanged", "not getting worse", "same as before"], tags: ["pattern"] },
            { id: "time-006", text: "Improving", synonyms: ["getting better", "resolving"], tags: ["pattern"] },
            { id: "time-007", text: "Paroxysmal", synonyms: ["sudden attacks", "episodic severe"], tags: ["pattern"] },
            { id: "time-008", text: "Cyclic", synonyms: ["regular pattern", "predictable recurrence"], tags: ["pattern"] },
            { id: "time-009", text: "Diurnal variation", synonyms: ["changes throughout day"], tags: ["pattern"] },
            { id: "time-010", text: "Morning predominance", synonyms: ["worse in morning", "morning stiffness"], tags: ["pattern", "RA"] },
            { id: "time-011", text: "Evening predominance", synonyms: ["worse at night"], tags: ["pattern"] },
            { id: "time-012", text: "Nocturnal", synonyms: ["at night", "during sleep"], tags: ["pattern"] },
            { id: "time-013", text: "Post-prandial", synonyms: ["after meals"], tags: ["pattern", "GI"] },
            { id: "time-014", text: "Monthly pattern", synonyms: ["related to menstrual cycle"], tags: ["pattern", "GYN"] },
            { id: "time-015", text: "Seasonal pattern", synonyms: ["certain times of year"], tags: ["pattern", "allergy"] },
            { id: "time-016", text: "Frequency increasing", synonyms: ["happening more often"], tags: ["pattern", "concerning"] },
            { id: "time-017", text: "Frequency decreasing", synonyms: ["happening less often"], tags: ["pattern"] },
            { id: "time-018", text: "Daily episodes", synonyms: ["every day"], tags: ["frequency"] },
            { id: "time-019", text: "Weekly episodes", synonyms: ["once or twice a week"], tags: ["frequency"] },
            { id: "time-020", text: "Monthly episodes", synonyms: ["once or twice a month"], tags: ["frequency"] },
            { id: "time-021", text: "Rare episodes", synonyms: ["infrequent", "occasional"], tags: ["frequency"] },
            { id: "time-022", text: "First episode", synonyms: ["never happened before", "new"], tags: ["frequency"] },
            { id: "time-023", text: "Recurrent", synonyms: ["has happened before", "chronic recurring"], tags: ["frequency"] },
            { id: "time-024", text: "Acute on chronic", synonyms: ["worsening of chronic condition"], tags: ["pattern"] },
            { id: "time-025", text: "Triggered by specific events", synonyms: ["precipitated by"], tags: ["pattern"] }
        ]
    },

    // ============================================================
    // SEVERITY (~15 elements)
    // ============================================================
    severity: {
        name: "Severity",
        description: "How severe is the symptom?",
        elements: [
            { id: "sev-001", text: "Mild (1-3/10)", synonyms: ["minimal", "slight", "barely noticeable"], tags: ["scale"] },
            { id: "sev-002", text: "Moderate (4-6/10)", synonyms: ["significant", "bothersome", "uncomfortable"], tags: ["scale"] },
            { id: "sev-003", text: "Severe (7-9/10)", synonyms: ["intense", "debilitating", "very bad"], tags: ["scale"] },
            { id: "sev-004", text: "Worst ever (10/10)", synonyms: ["excruciating", "worst of my life", "unbearable"], tags: ["scale", "emergency"] },
            { id: "sev-005", text: "Currently improving", synonyms: ["better than before", "on the mend"], tags: ["trend"] },
            { id: "sev-006", text: "Currently worsening", synonyms: ["worse than before", "getting worse"], tags: ["trend", "concerning"] },
            { id: "sev-007", text: "Fluctuating severity", synonyms: ["varies in intensity"], tags: ["pattern"] },
            { id: "sev-008", text: "Interferes with daily activities", synonyms: ["affects function", "limits activities"], tags: ["impact"] },
            { id: "sev-009", text: "Interferes with sleep", synonyms: ["keeps awake", "wakes from sleep"], tags: ["impact"] },
            { id: "sev-010", text: "Interferes with work", synonyms: ["can't work", "missed work"], tags: ["impact"] },
            { id: "sev-011", text: "Does not interfere with activities", synonyms: ["can function normally"], tags: ["impact"] },
            { id: "sev-012", text: "Requires medication", synonyms: ["needs medicine for relief"], tags: ["impact"] },
            { id: "sev-013", text: "Requires rest", synonyms: ["needs to stop and rest"], tags: ["impact"] },
            { id: "sev-014", text: "Worst headache of life", synonyms: ["thunderclap"], tags: ["emergency", "SAH"] },
            { id: "sev-015", text: "Pain scale score", synonyms: ["numeric rating"], tags: ["scale"] }
        ]
    },

    // ============================================================
    // SEARCH FUNCTION
    // ============================================================
    search(query, options = {}) {
        const { category = null, maxResults = 20 } = options;
        if (!query || query.length < 2) return [];

        const results = [];
        const queryLower = query.toLowerCase();
        const queryWords = queryLower.split(/\s+/);

        const categoriesToSearch = category 
            ? [this[category]]
            : Object.values(this).filter(c => c && c.elements);

        for (const cat of categoriesToSearch) {
            if (!cat.elements) continue;

            for (const element of cat.elements) {
                let score = 0;
                const textLower = element.text.toLowerCase();
                const synonymsLower = (element.synonyms || []).map(s => s.toLowerCase());

                // Exact match in text
                if (textLower.includes(queryLower)) score += 10;

                // Word matches in text
                for (const word of queryWords) {
                    if (textLower.includes(word)) score += 3;
                    if (synonymsLower.some(s => s.includes(word))) score += 2;
                    if ((element.tags || []).some(t => t.includes(word))) score += 1;
                }

                if (score > 0) {
                    results.push({
                        ...element,
                        category: cat.name,
                        score
                    });
                }
            }
        }

        return results.sort((a, b) => b.score - a.score).slice(0, maxResults);
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HPIElementsLibrary;
}
if (typeof window !== 'undefined') {
    window.HPIElementsLibrary = HPIElementsLibrary;
}
