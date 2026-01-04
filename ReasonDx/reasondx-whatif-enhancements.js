/**
 * ReasonDx What-If Scenario Enhancements
 * Comprehensive clinical validation and Q&A bank integration
 * 
 * This file enhances existing What-If scenarios with:
 * 1. Validated clinical modifications (historyAnswers, examFindings, labModifications)
 * 2. Comprehensive history Q&A bank integration
 * 3. New scenarios for cases that need them
 * 
 * Last Updated: December 28, 2025
 * Clinical Sources: StatPearls/NCBI, AAFP, AASLD, CHEST, AHA Guidelines
 */

(function() {
    'use strict';

    // Wait for cases to be defined
    function initializeEnhancements() {
        if (typeof window.cases === 'undefined') {
            setTimeout(initializeEnhancements, 100);
            return;
        }
        
        console.log('[ReasonDx] Initializing What-If scenario enhancements...');
        
        // Apply enhancements to all cases
        enhanceUGIBScenarios();
        enhanceSBOScenarios();
        enhanceMeningitisScenarios();
        enhanceTesticularTorsionScenarios();
        enhanceStrokeScenarios();
        enhanceDKAScenarios();
        enhanceAFibScenarios();
        enhanceAppendicitisScenarios();
        enhanceCholecystitisScenarios();
        enhancePEScenarios();
        enhanceSyncopeScenarios();
        enhanceSeizureScenarios();
        enhanceAnaphylaxisScenarios();
        enhanceDiverticulitisScenarios();
        enhancePneumothoraxScenarios();
        
        console.log('[ReasonDx] What-If scenario enhancements complete.');
    }

    // ==================== UPPER GI BLEEDING ENHANCEMENTS ====================
    function enhanceUGIBScenarios() {
        const ugibCase = window.cases?.find(c => c.id === 'ugib');
        if (!ugibCase || !ugibCase.whatIfScenarios) return;

        // What-If #1: Variceal Bleeding (Cirrhosis Patient)
        const varicealScenario = ugibCase.whatIfScenarios.find(s => s.id === 'whatif_ugib_variceal');
        if (varicealScenario) {
            varicealScenario.modifications = varicealScenario.modifications || {};
            varicealScenario.modifications.historyAnswers = {
                // Chief complaint - more dramatic
                "chief_complaint": "I vomited a large amount of bright red blood. I have liver disease.",
                "what_happened": "I was just sitting watching TV and suddenly felt nauseous, then vomited a lot of blood - bright red, like cups of it.",
                
                // Bleeding characterization
                "blood_vomit": "Yes, it was bright red blood - not coffee ground, actual red blood. I filled a whole bowl.",
                "hematemesis": "I've vomited blood three times now. Each time was a lot - maybe a cup or more.",
                "melena": "Yes, my stools have been black and tarry for the past day. They smell really bad.",
                "stool_color": "Black and sticky, like tar.",
                
                // Cirrhosis/Liver disease history - CRITICAL
                "liver_disease": "Yes, I have cirrhosis. I was diagnosed about 3 years ago.",
                "cirrhosis": "Yes, from hepatitis C. I also used to drink heavily.",
                "alcohol": "I used to drink a lot - a six-pack or more daily for about 20 years. I stopped 3 years ago when I got sick.",
                "hepatitis": "Yes, hepatitis C. I found out about it when I got the cirrhosis diagnosis.",
                "varices": "My doctor told me I have varices in my esophagus. I had them banded once about a year ago.",
                "prior_bleeding": "Yes, I had bleeding from varices about a year ago. They did a procedure to band them.",
                "ascites": "Yes, I have fluid in my belly. I have to get it drained every few weeks.",
                "encephalopathy": "Sometimes I get confused. My family says I get forgetful when I'm sicker.",
                
                // Medications - Liver patient specifics
                "medications": "I take propranolol for my varices, spironolactone and furosemide for the fluid, and lactulose.",
                "blood_thinners": "No blood thinners.",
                "nsaids": "No, my doctor told me never to take ibuprofen or aspirin because of my liver.",
                
                // Systemic symptoms
                "dizzy": "Yes, I feel dizzy when I stand up. Everything goes gray.",
                "lightheaded": "Very lightheaded. I almost passed out in the bathroom.",
                "weakness": "I feel very weak, like I could pass out.",
                "sweating": "Yes, I'm sweating and feel clammy."
            };
            
            varicealScenario.modifications.examFindings = {
                "general": "Ill-appearing male, pale, diaphoretic, in moderate distress",
                "vitals": "HR 118, BP 88/54, RR 22, T 98.6°F, SpO2 94% on RA",
                "skin": "Jaundiced. Spider angiomata on chest and back. Palmar erythema bilateral. Caput medusae present.",
                "abdomen": "Distended with ascites. Positive fluid wave. Splenomegaly palpable. No peritoneal signs.",
                "rectal": "Melena on exam. Hemoccult positive.",
                "neuro": "Oriented but slow to respond. No asterixis currently. GCS 14."
            };
            
            varicealScenario.modifications.labModifications = {
                "CBC": "Hgb 7.2 (was 9.5 baseline), Plt 68,000",
                "BMP": "Cr 1.8, BUN 42 (elevated BUN:Cr ratio)",
                "LFTs": "AST 89, ALT 52, T.Bili 4.2, Albumin 2.4",
                "Coags": "INR 1.8, PTT 42",
                "Type_Screen": "Type and crossmatch for 6 units pRBC"
            };
            
            varicealScenario.expectedReasoning = {
                topDiagnosis: "Variceal hemorrhage",
                mustNotMiss: ["Esophageal variceal rupture", "Gastric variceal bleeding", "Portal hypertensive gastropathy"],
                keyDiscriminators: ["Known cirrhosis/portal hypertension", "Prior variceal history", "Stigmata of chronic liver disease", "Massive bright red hematemesis", "Coagulopathy"],
                shouldRise: ["Variceal hemorrhage", "Portal hypertensive gastropathy"],
                shouldDrop: ["Peptic ulcer disease", "Mallory-Weiss tear", "NSAID gastropathy"]
            };
            
            varicealScenario.comparisonNotes = "CRITICAL DIFFERENCES from PUD bleed:\n" +
                "• Variceal: Need octreotide/terlipressin, prophylactic antibiotics (ceftriaxone), AVOID aggressive FFP\n" +
                "• EGD within 12 hours (vs 24h for non-variceal)\n" +
                "• Band ligation is treatment of choice\n" +
                "• Consider TIPS if refractory\n" +
                "• NO PPIs until source confirmed (PPIs don't help varices)\n" +
                "• Risk stratification: Child-Pugh class determines mortality";
        }

        // What-If #2: On Anticoagulation
        const anticoagScenario = ugibCase.whatIfScenarios.find(s => s.id === 'whatif_ugib_on_anticoagulation');
        if (anticoagScenario) {
            anticoagScenario.modifications = anticoagScenario.modifications || {};
            anticoagScenario.modifications.historyAnswers = {
                "blood_thinners": "Yes, I'm on Eliquis for my atrial fibrillation.",
                "anticoagulant": "Apixaban - Eliquis. I take it twice a day.",
                "why_anticoag": "I have atrial fibrillation. My doctor put me on it to prevent stroke.",
                "dose": "5mg twice a day.",
                "last_dose": "I took my morning dose about 4 hours ago.",
                "compliance": "I take it every day as prescribed.",
                "afib": "Yes, I've had AFib for about 3 years.",
                "chads_vasc": "My doctor said my stroke risk was high because of my age and blood pressure.",
                
                // Other bleeding risk factors
                "aspirin": "Yes, I also take a baby aspirin daily.",
                "nsaids": "I sometimes take ibuprofen for my arthritis.",
                "kidney": "My doctor said my kidneys are a little weak. I'm not sure what the number is.",
                
                // Bleeding presentation
                "vomit": "Coffee ground material - dark brown, grainy. Then some brighter blood.",
                "stool": "Black and tarry for the past 2 days."
            };
            
            anticoagScenario.modifications.examFindings = {
                "general": "Elderly male, pale, anxious",
                "vitals": "HR 102, BP 98/62, RR 18",
                "cardiac": "Irregularly irregular rhythm. No murmurs.",
                "skin": "Multiple ecchymoses on arms. Pallor.",
                "rectal": "Melena present"
            };
            
            anticoagScenario.modifications.labModifications = {
                "CBC": "Hgb 8.4, Plt 185,000",
                "BMP": "Cr 1.6, BUN 38",
                "Coags": "PT 14.2, INR 1.1 (DOACs don't elevate INR significantly)",
                "Anti_Xa": "Consider anti-Xa level if available"
            };
            
            anticoagScenario.expectedReasoning = {
                topDiagnosis: "UGIB on anticoagulation",
                mustNotMiss: ["Active hemorrhage requiring reversal", "Stroke risk if anticoagulation held"],
                keyDiscriminators: ["DOAC use", "AFib history", "Multiple antithrombotic agents", "Renal function"],
                shouldRise: ["UGIB with anticoagulant use", "Drug-induced gastropathy"],
                shouldDrop: ["Variceal bleeding"]
            };
            
            anticoagScenario.comparisonNotes = "ANTICOAGULATION MANAGEMENT:\n" +
                "• Apixaban reversal: Andexanet alfa (if available) or 4-factor PCC\n" +
                "• Warfarin: Vitamin K + 4F-PCC\n" +
                "• Balance stroke risk vs bleeding risk\n" +
                "• Multidisciplinary decision: GI, Cardiology, Hematology\n" +
                "• Restart anticoagulation typically within 7 days if no rebleeding\n" +
                "• CHA₂DS₂-VASc guides urgency of restarting";
        }

        // What-If #3: Massive/Unstable Hemorrhage
        const massiveScenario = ugibCase.whatIfScenarios.find(s => s.id === 'whatif_ugib_massive');
        if (massiveScenario) {
            massiveScenario.modifications = massiveScenario.modifications || {};
            massiveScenario.modifications.historyAnswers = {
                "what_happened": "I vomited a huge amount of blood - it just kept coming. I passed out briefly.",
                "syncope": "Yes, I passed out on my way to the bathroom. My wife found me on the floor.",
                "amount": "It was like a fountain. My wife said there was blood all over the bathroom floor.",
                "ongoing": "It's still happening. I vomited more blood in the ambulance.",
                "stool": "I had bloody diarrhea - bright red blood mixed with stool.",
                "hematochezia": "Yes, bright red blood from my rectum. Not just when I wipe - it's running out.",
                
                // Symptoms of shock
                "dizzy": "Very dizzy. The room is spinning.",
                "chest_pain": "I feel pressure in my chest.",
                "breathing": "Short of breath, like I can't catch my breath.",
                "confusion": "I feel confused. I'm having trouble thinking clearly.",
                "thirst": "I'm incredibly thirsty.",
                "cold": "I feel cold and clammy."
            };
            
            massiveScenario.modifications.examFindings = {
                "general": "Critically ill, altered mental status, actively vomiting blood",
                "vitals": "HR 132, BP 72/40, RR 28, T 97.2°F (hypothermic), SpO2 91% on RA",
                "skin": "Cold, clammy, mottled extremities. Delayed capillary refill >4 seconds.",
                "mental_status": "GCS 13 (confused, follows commands). Lethargic.",
                "cardiac": "Tachycardic, thready pulses",
                "rectal": "Frank hematochezia - bright red blood"
            };
            
            massiveScenario.modifications.vitals = {
                HR: { original: 88, modified: 132 },
                BP: { original: "128/78", modified: "72/40" },
                SpO2: { original: 98, modified: 91 }
            };
            
            massiveScenario.expectedReasoning = {
                topDiagnosis: "Massive UGIB with hemorrhagic shock",
                mustNotMiss: ["Hemorrhagic shock", "Aortoenteric fistula", "Massive variceal hemorrhage"],
                keyDiscriminators: ["Hemodynamic instability", "Ongoing bright red hematemesis", "Altered mental status", "Hematochezia from upper source (indicates rapid transit)"],
                shouldRise: ["Massive hemorrhage requiring emergent intervention", "Aortoenteric fistula"],
                shouldDrop: ["Stable UGIB", "Minor Mallory-Weiss"]
            };
            
            massiveScenario.comparisonNotes = "MASSIVE HEMORRHAGE PROTOCOL:\n" +
                "• Activate massive transfusion protocol (1:1:1 ratio pRBC:FFP:Plt)\n" +
                "• Permissive hypotension (target SBP 80-90) until bleeding controlled\n" +
                "• Early intubation for airway protection\n" +
                "• EMERGENT EGD (don't wait for resuscitation if unstable)\n" +
                "• Consider IR angioembolization or surgery if endoscopy fails\n" +
                "• TXA may reduce mortality (give within 3h of bleed onset)\n" +
                "• If hx of AAA repair: MUST rule out aortoenteric fistula";
        }
    }

    // ==================== SMALL BOWEL OBSTRUCTION ENHANCEMENTS ====================
    function enhanceSBOScenarios() {
        const sboCase = window.cases?.find(c => c.id === 'sbo');
        if (!sboCase || !sboCase.whatIfScenarios) return;

        // What-If #1: Strangulated SBO
        const strangulatedScenario = sboCase.whatIfScenarios.find(s => s.id === 'whatif_sbo_strangulation');
        if (strangulatedScenario) {
            strangulatedScenario.modifications = strangulatedScenario.modifications || {};
            strangulatedScenario.modifications.historyAnswers = {
                // Pain pattern change - KEY
                "pain_pattern": "At first the pain came in waves, but now it's constant and severe. It never lets up.",
                "pain_character": "It changed. It used to cramp and then ease off. Now it's constant, horrible pain.",
                "pain_severity": "10 out of 10. This is the worst pain I've ever felt.",
                "pain_location": "It started all over, but now it's really focused on my lower right side.",
                
                // Systemic symptoms
                "fever": "Yes, I developed a fever a few hours ago. I feel hot and shaky.",
                "chills": "Yes, I've had shaking chills.",
                "sweating": "I'm sweating but feel cold at the same time.",
                
                // Vomiting
                "vomit": "I'm still vomiting, but it's starting to look brownish and smell really foul.",
                "vomit_appearance": "It's brown and smells like stool. It's horrible.",
                "feculent": "Yes, it smells like feces.",
                
                // Bowel function
                "gas": "No gas at all. Nothing is coming out.",
                "stool": "Nothing. Complete obstruction.",
                "bloody_stool": "When I tried to have a bowel movement, there was some blood on the toilet paper.",
                
                // Progression
                "getting_worse": "Much worse. The pain is unbearable and I feel like I'm going to die.",
                "how_long_constant": "The pain became constant about 4-5 hours ago."
            };
            
            strangulatedScenario.modifications.examFindings = {
                "general": "Ill-appearing, in severe distress, diaphoretic",
                "vitals": "HR 124, BP 96/58, T 101.4°F, RR 26",
                "abdomen": "Distended, tense. Focal tenderness RLQ with guarding. Rebound tenderness present. Absent bowel sounds.",
                "peritoneal_signs": "Positive rebound, positive percussion tenderness, involuntary guarding"
            };
            
            strangulatedScenario.modifications.labModifications = {
                "CBC": "WBC 18,400 with left shift (15% bands)",
                "BMP": "Lactate 4.8 mmol/L (elevated - suggests ischemia)",
                "Lactate": "4.8 mmol/L (CRITICAL - suggests bowel ischemia)"
            };
            
            strangulatedScenario.expectedReasoning = {
                topDiagnosis: "Strangulated small bowel obstruction",
                mustNotMiss: ["Bowel ischemia/necrosis", "Perforation", "Sepsis"],
                keyDiscriminators: ["Constant pain (vs colicky)", "Peritoneal signs", "Fever/leukocytosis", "Elevated lactate", "Feculent vomiting"],
                shouldRise: ["Strangulated SBO", "Bowel necrosis", "Closed-loop obstruction"],
                shouldDrop: ["Simple/partial SBO", "Ileus"]
            };
            
            strangulatedScenario.comparisonNotes = "SIMPLE vs STRANGULATED SBO:\n" +
                "• Simple: Colicky pain, no peritoneal signs, normal lactate → Trial of conservative management\n" +
                "• Strangulated: CONSTANT pain, peritoneal signs, fever, elevated lactate → EMERGENT SURGERY\n" +
                "• Signs of strangulation: Fever, tachycardia, localized tenderness, peritonitis, elevated lactate\n" +
                "• CT findings: Bowel wall thickening, mesenteric haziness, reduced enhancement, pneumatosis\n" +
                "• NO NG tube decompression trial if strangulation suspected - immediate OR";
        }

        // What-If #2: Incarcerated Hernia
        const herniaScenario = sboCase.whatIfScenarios.find(s => s.id === 'whatif_sbo_hernia');
        if (herniaScenario) {
            herniaScenario.modifications = herniaScenario.modifications || {};
            herniaScenario.modifications.historyAnswers = {
                "hernia": "Actually, yes - I've had a bulge in my groin for years. I never got it fixed.",
                "hernia_history": "My doctor told me I had an inguinal hernia about 3 years ago, but I kept putting off the surgery.",
                "bulge": "The bulge is much bigger now and it's really painful. It won't go back in like it used to.",
                "reducible": "Usually I can push it back in, but now I can't. It's stuck out and very tender.",
                "groin_pain": "Yes, my right groin is extremely painful where the bulge is.",
                "prior_surgery": "No abdominal surgeries. Just the hernia they found."
            };
            
            herniaScenario.modifications.examFindings = {
                "inguinal": "Right inguinal bulge, firm, tender, non-reducible. Skin over bulge slightly erythematous.",
                "abdomen": "Distended, tympanitic. Diffuse tenderness. High-pitched bowel sounds with rushes."
            };
            
            herniaScenario.expectedReasoning = {
                topDiagnosis: "Incarcerated inguinal hernia causing SBO",
                mustNotMiss: ["Strangulated hernia", "Bowel ischemia within hernia sac"],
                keyDiscriminators: ["Known hernia now irreducible", "Groin bulge with tenderness", "No prior abdominal surgery"],
                shouldRise: ["Incarcerated hernia", "Strangulated hernia"],
                shouldDrop: ["Adhesive SBO"]
            };
        }
    }

    // ==================== MENINGITIS ENHANCEMENTS ====================
    function enhanceMeningitisScenarios() {
        const meningitisCase = window.cases?.find(c => c.id === 'meningitis');
        if (!meningitisCase || !meningitisCase.whatIfScenarios) return;

        // What-If #1: Viral Meningitis
        const viralScenario = meningitisCase.whatIfScenarios.find(s => s.id === 'whatif_meningitis_viral');
        if (viralScenario) {
            viralScenario.modifications = viralScenario.modifications || {};
            viralScenario.modifications.historyAnswers = {
                // Less severe presentation
                "headache_severity": "It's bad, maybe 7 out of 10, but I've had worse headaches.",
                "onset": "It came on more gradually over the past 2-3 days.",
                "fever": "Yes, low grade - around 100-101°F.",
                "neck_stiffness": "My neck is a little stiff, but I can move it.",
                "photophobia": "Light bothers me some, but I can tolerate it.",
                
                // Prodrome more prominent
                "prodrome": "I had a sore throat and runny nose for about a week before this started.",
                "sick_contacts": "Several people at work have had some kind of virus going around.",
                "gi_symptoms": "I've had some loose stools and mild nausea.",
                "rash": "No rash.",
                
                // Less toxic
                "overall_feeling": "I feel sick but not like I'm dying. I was able to drive myself here."
            };
            
            viralScenario.modifications.examFindings = {
                "general": "Alert, uncomfortable but not toxic-appearing",
                "vitals": "T 100.4°F, HR 88, BP 124/78",
                "neuro": "Mild nuchal rigidity. Positive Kernig but not dramatic. GCS 15.",
                "skin": "No rash, no petechiae"
            };
            
            viralScenario.modifications.labModifications = {
                "CSF": "WBC 150 (lymphocyte predominant 85%), Protein 65, Glucose 58 (normal), Gram stain negative"
            };
            
            viralScenario.expectedReasoning = {
                topDiagnosis: "Viral (aseptic) meningitis",
                mustNotMiss: ["Early bacterial meningitis", "HSV encephalitis"],
                keyDiscriminators: ["Gradual onset", "Less toxic appearance", "Viral prodrome", "Lymphocytic CSF pleocytosis", "Normal CSF glucose"],
                shouldRise: ["Viral meningitis", "Enteroviral meningitis"],
                shouldDrop: ["Bacterial meningitis"]
            };
        }

        // What-If #2: Meningococcemia (with purpura)
        const purpuraScenario = meningitisCase.whatIfScenarios.find(s => s.id === 'whatif_meningitis_purpura');
        if (purpuraScenario) {
            purpuraScenario.modifications = purpuraScenario.modifications || {};
            purpuraScenario.modifications.historyAnswers = {
                "rash": "Yes, I noticed red spots appearing on my legs and arms. They're spreading.",
                "rash_timing": "The spots started appearing just a few hours after my headache got worse.",
                "rash_character": "They started as small red dots but some of them are getting bigger and darker, almost purple.",
                "blanching": "No, when I press on them, they don't go away.",
                
                // Rapid deterioration
                "progression": "I'm getting worse very quickly. A few hours ago I felt okay, now I feel like I'm dying.",
                "confusion": "I'm having trouble thinking clearly. Everything is foggy."
            };
            
            purpuraScenario.modifications.examFindings = {
                "general": "Toxic-appearing, altered, in severe distress",
                "vitals": "T 103.8°F, HR 134, BP 84/52, RR 28",
                "skin": "Petechiae and purpura on extremities and trunk. Some lesions coalescing. Non-blanching.",
                "neuro": "GCS 12. Positive Kernig and Brudzinski. Photophobia."
            };
            
            purpuraScenario.expectedReasoning = {
                topDiagnosis: "Meningococcemia with meningitis",
                mustNotMiss: ["Meningococcal sepsis", "Waterhouse-Friderichsen syndrome (adrenal hemorrhage)", "DIC"],
                keyDiscriminators: ["Petechial/purpuric rash", "Rapid deterioration", "Shock", "Non-blanching rash"],
                shouldRise: ["Meningococcemia", "DIC", "Septic shock"],
                shouldDrop: ["Viral meningitis"]
            };
            
            purpuraScenario.comparisonNotes = "MENINGOCOCCEMIA EMERGENCY:\n" +
                "• Non-blanching petechial/purpuric rash = RED FLAG\n" +
                "• Give antibiotics IMMEDIATELY - before LP, before anything\n" +
                "• Ceftriaxone 2g IV STAT\n" +
                "• Droplet precautions\n" +
                "• Close contacts need chemoprophylaxis (rifampin, ciprofloxacin, or ceftriaxone)\n" +
                "• Can decompensate to DIC and death within hours\n" +
                "• Waterhouse-Friderichsen syndrome: bilateral adrenal hemorrhage → adrenal crisis";
        }
    }

    // ==================== TESTICULAR TORSION ENHANCEMENTS ====================
    function enhanceTesticularTorsionScenarios() {
        const torsionCase = window.cases?.find(c => c.id === 'testicular_torsion' || c.id === 'torsion');
        if (!torsionCase || !torsionCase.whatIfScenarios) return;

        // What-If #1: Epididymitis (the main mimic)
        const epididymitisScenario = torsionCase.whatIfScenarios.find(s => s.id === 'whatif_torsion_epididymitis');
        if (epididymitisScenario) {
            epididymitisScenario.modifications = epididymitisScenario.modifications || {};
            epididymitisScenario.modifications.historyAnswers = {
                // Onset - more gradual
                "onset": "It's been getting worse over the past 2-3 days.",
                "sudden": "No, it came on gradually. Started as mild discomfort that got worse.",
                
                // Urinary symptoms - KEY DIFFERENCE
                "urinary": "Yes, I've had burning when I pee for the past few days.",
                "dysuria": "Yes, it burns when I urinate. I've been going more often too.",
                "discharge": "I noticed some discharge from my penis yesterday.",
                "penile_discharge": "Yes, there's been some yellowish discharge.",
                
                // Sexual history
                "sexual_activity": "Yes, I'm sexually active. I have a new partner from about 3 weeks ago.",
                "new_partner": "Yes, we've been together about a month.",
                "protection": "We didn't use protection a few times.",
                "sti_history": "I had chlamydia once about 2 years ago.",
                
                // Pain character
                "pain_location": "The pain is mostly in the back of my testicle, near the top.",
                "pain_better": "Actually, when I lift my testicle up, it feels a little better.",
                "nausea": "I feel a little nauseous but haven't vomited.",
                
                // Systemic
                "fever": "I've felt warm. I think I have a low-grade fever."
            };
            
            epididymitisScenario.modifications.examFindings = {
                "vitals": "T 100.8°F, HR 92, BP 128/78",
                "scrotum": "Mild erythema and swelling. Tender predominantly over epididymis (posterior/superior testicle).",
                "cremasteric_reflex": "Cremasteric reflex PRESENT bilaterally.",
                "prehn_sign": "Positive Prehn sign - pain relieved with testicular elevation.",
                "testicular_lie": "Normal vertical lie bilaterally.",
                "urethral": "Scant mucopurulent urethral discharge noted."
            };
            
            epididymitisScenario.modifications.labModifications = {
                "UA": "Positive for leukocyte esterase, 25-50 WBC, bacteria present",
                "Urine_GC_CT": "Send for gonorrhea/chlamydia NAAT"
            };
            
            epididymitisScenario.expectedReasoning = {
                topDiagnosis: "Acute epididymitis",
                mustNotMiss: ["Testicular torsion (always consider)", "Epididymo-orchitis", "Testicular abscess"],
                keyDiscriminators: ["Gradual onset (days, not hours)", "Urinary symptoms present", "Urethral discharge", "Sexual history/STI risk", "Cremasteric reflex intact", "Positive Prehn sign", "Epididymal tenderness (not whole testis)"],
                shouldRise: ["Epididymitis", "STI (chlamydia/gonorrhea)"],
                shouldDrop: ["Testicular torsion"]
            };
            
            epididymitisScenario.comparisonNotes = "TORSION vs EPIDIDYMITIS:\n\n" +
                "TORSION:\n" +
                "• Sudden onset (minutes-hours)\n" +
                "• Severe pain, nausea/vomiting\n" +
                "• ABSENT cremasteric reflex\n" +
                "• High-riding testis, horizontal lie\n" +
                "• NO urinary symptoms\n" +
                "• Often younger (peak 12-18y)\n\n" +
                "EPIDIDYMITIS:\n" +
                "• Gradual onset (days)\n" +
                "• Dysuria, discharge common\n" +
                "• Cremasteric reflex PRESENT\n" +
                "• Positive Prehn sign\n" +
                "• Epididymal tenderness\n" +
                "• Often sexually active with STI risk";
        }

        // What-If #2: Appendix Testis Torsion (Blue Dot Sign)
        const blueDotScenario = torsionCase.whatIfScenarios.find(s => s.id === 'whatif_torsion_blue_dot');
        if (blueDotScenario) {
            blueDotScenario.modifications = blueDotScenario.modifications || {};
            blueDotScenario.modifications.historyAnswers = {
                "onset": "It started suddenly this morning, about 6 hours ago.",
                "pain_severity": "It hurts, maybe 5-6 out of 10. Bad but not unbearable.",
                "pain_location": "The pain is mostly at the top of my testicle.",
                "nausea": "I feel a little nauseous but haven't thrown up.",
                "urinary": "No burning or changes with urination.",
                "prior_episodes": "No, first time this has happened."
            };
            
            blueDotScenario.modifications.examFindings = {
                "scrotum": "Mild swelling at superior pole of left testicle.",
                "tenderness": "Focal tenderness at upper pole of testicle. Testicle itself non-tender.",
                "blue_dot": "Blue dot sign PRESENT - small blue/purple discoloration visible through scrotal skin at superior pole.",
                "cremasteric_reflex": "Cremasteric reflex present bilaterally.",
                "testicular_lie": "Normal vertical lie."
            };
            
            blueDotScenario.expectedReasoning = {
                topDiagnosis: "Torsion of appendix testis",
                mustNotMiss: ["Testicular torsion (must rule out)"],
                keyDiscriminators: ["Blue dot sign (pathognomonic)", "Localized tenderness at upper pole only", "Cremasteric reflex intact", "Normal testicular lie", "Less severe pain"],
                shouldRise: ["Appendix testis torsion", "Appendix epididymis torsion"],
                shouldDrop: ["Testicular torsion"]
            };
            
            blueDotScenario.comparisonNotes = "APPENDIX TESTIS TORSION:\n" +
                "• Most common cause of acute scrotum in prepubertal boys\n" +
                "• Blue dot sign present in only ~21% but pathognomonic when seen\n" +
                "• Tenderness localized to upper pole, NOT diffuse\n" +
                "• Cremasteric reflex intact\n" +
                "• Treatment: CONSERVATIVE (NSAIDs, rest)\n" +
                "• Self-limited - appendix will infarct and resolve\n" +
                "• If ANY doubt about testicular torsion → surgical exploration";
        }

        // What-If #3: Delayed Presentation
        const delayedScenario = torsionCase.whatIfScenarios.find(s => s.id === 'whatif_torsion_delayed');
        if (delayedScenario) {
            delayedScenario.modifications = delayedScenario.modifications || {};
            delayedScenario.modifications.historyAnswers = {
                "onset": "The severe pain started yesterday morning - about 18 hours ago.",
                "why_waited": "I thought it would get better. I was embarrassed to come in.",
                "current_pain": "The pain is actually less now than it was yesterday. It's kind of numb.",
                "pain_course": "It was really severe yesterday, then got a bit better overnight. Now it's more of a dull ache."
            };
            
            delayedScenario.modifications.examFindings = {
                "scrotum": "Enlarged, edematous, very erythematous left hemiscrotum.",
                "testicle": "Testicle firm, tender, with surrounding reactive hydrocele.",
                "cremasteric_reflex": "Absent left cremasteric reflex.",
                "testicular_lie": "Horizontal lie, high-riding."
            };
            
            delayedScenario.expectedReasoning = {
                topDiagnosis: "Testicular torsion - delayed presentation (likely non-viable)",
                mustNotMiss: ["Non-viable testicle requiring orchiectomy", "Intermittent torsion with re-torsion risk"],
                keyDiscriminators: [">12 hours from onset", "Pain now DECREASED (ominous - suggests infarction)", "Physical exam still consistent with torsion"],
                shouldRise: ["Late testicular torsion", "Testicular infarction"],
                shouldDrop: ["Salvageable torsion"]
            };
            
            delayedScenario.comparisonNotes = "TIME IS TESTICLE:\n" +
                "• <6 hours: ~90-100% salvage rate\n" +
                "• 6-12 hours: ~50% salvage rate\n" +
                "• 12-24 hours: ~20% salvage rate\n" +
                "• >24 hours: <10% salvage rate\n\n" +
                "PARADOXICALLY IMPROVED PAIN:\n" +
                "• Pain decreasing after severe onset may indicate infarction\n" +
                "• Necrotic tissue = less pain\n" +
                "• Does NOT mean patient is better\n" +
                "• Still needs surgical exploration - orchiectomy if non-viable, fixation of contralateral testis";
        }
    }

    // ==================== STROKE ENHANCEMENTS ====================
    function enhanceStrokeScenarios() {
        const strokeCase = window.cases?.find(c => c.id === 'stroke');
        if (!strokeCase || !strokeCase.whatIfScenarios) return;

        // What-If #1: Hemorrhagic Stroke
        const hemorrhagicScenario = strokeCase.whatIfScenarios.find(s => s.id === 'whatif_stroke_hemorrhagic');
        if (hemorrhagicScenario) {
            hemorrhagicScenario.modifications = hemorrhagicScenario.modifications || {};
            hemorrhagicScenario.modifications.historyAnswers = {
                "headache": "Yes, severe headache - the worst of my life. It came on suddenly with the weakness.",
                "headache_severity": "10 out of 10. Thunderclap headache - came on all at once.",
                "vomiting": "Yes, I vomited twice right after it started.",
                "consciousness": "I felt confused at first, like the room was spinning.",
                "blood_thinners": "Yes, I take Coumadin for my AFib.",
                "blood_pressure": "My blood pressure has been hard to control. It's often high.",
                "onset": "It came on suddenly - I was watching TV and suddenly got the worst headache, then my left side went weak."
            };
            
            hemorrhagicScenario.modifications.examFindings = {
                "vitals": "BP 218/124, HR 56 (Cushing reflex), RR 18",
                "neuro": "Left hemiplegia. Left facial droop. Dysarthria. GCS 12. Pupils 4mm right, 6mm left (anisocoria).",
                "fundoscopy": "Papilledema present"
            };
            
            hemorrhagicScenario.modifications.labModifications = {
                "Coags": "INR 3.4 (supratherapeutic on warfarin)"
            };
            
            hemorrhagicScenario.expectedReasoning = {
                topDiagnosis: "Intracerebral hemorrhage (ICH)",
                mustNotMiss: ["Hemorrhagic stroke", "Warfarin-associated ICH", "Herniation"],
                keyDiscriminators: ["Severe 'thunderclap' headache at onset", "Vomiting", "Decreased consciousness", "Severely elevated BP", "On anticoagulation", "Cushing reflex (HTN + bradycardia)"],
                shouldRise: ["ICH", "Hemorrhagic stroke", "SAH"],
                shouldDrop: ["Ischemic stroke (tPA candidate)"]
            };
            
            hemorrhagicScenario.comparisonNotes = "ISCHEMIC vs HEMORRHAGIC STROKE:\n\n" +
                "HEMORRHAGIC:\n" +
                "• Severe headache at onset\n" +
                "• Vomiting, decreased LOC\n" +
                "• Severely elevated BP\n" +
                "• tPA ABSOLUTELY CONTRAINDICATED\n" +
                "• Reverse anticoagulation STAT (Vit K + PCC for warfarin)\n" +
                "• BP target: <140 systolic (INTERACT2)\n\n" +
                "ISCHEMIC:\n" +
                "• Focal deficits without severe headache\n" +
                "• LOC usually preserved initially\n" +
                "• tPA if <4.5h, thrombectomy if <24h (LVO)\n" +
                "• Permissive HTN initially (allow up to 220/120 if not giving tPA)";
        }

        // What-If #2: Wake-up Stroke
        const wakeupScenario = strokeCase.whatIfScenarios.find(s => s.id === 'whatif_stroke_wake_up');
        if (wakeupScenario) {
            wakeupScenario.modifications = wakeupScenario.modifications || {};
            wakeupScenario.modifications.historyAnswers = {
                "onset": "I went to bed fine last night and woke up this morning with weakness. I don't know when it started.",
                "last_known_well": "I was fine when I went to sleep around 11 PM last night. My wife found me like this at 7 AM.",
                "time_unknown": "I have no idea. I woke up like this.",
                "sleep": "I was sleeping. Didn't feel anything until I tried to get out of bed this morning."
            };
            
            wakeupScenario.expectedReasoning = {
                topDiagnosis: "Wake-up stroke (unknown time of onset)",
                mustNotMiss: ["LVO stroke potentially eligible for thrombectomy", "Hemorrhagic stroke"],
                keyDiscriminators: ["Unknown time of onset", "Last known well >4.5 hours", "May still be thrombectomy candidate based on perfusion imaging"],
                shouldRise: ["Wake-up stroke", "Large vessel occlusion"],
                shouldDrop: ["tPA-eligible stroke"]
            };
            
            wakeupScenario.comparisonNotes = "WAKE-UP STROKE MANAGEMENT:\n" +
                "• Standard tPA: Usually NOT eligible (unknown onset)\n" +
                "• WAKE-UP Trial: MRI-based selection can identify tPA candidates\n" +
                "  - DWI-FLAIR mismatch suggests stroke <4.5h old\n" +
                "• THROMBECTOMY: May be eligible up to 24h with favorable perfusion imaging\n" +
                "  - DAWN/DEFUSE-3 criteria\n" +
                "  - Core-penumbra mismatch on CTP\n" +
                "• Get CTA immediately - if LVO, thrombectomy evaluation STAT\n" +
                "• \"Time is brain\" but imaging is the guide, not the clock";
        }
    }

    // ==================== DKA ENHANCEMENTS ====================
    function enhanceDKAScenarios() {
        const dkaCase = window.cases?.find(c => c.id === 'dka');
        if (!dkaCase || !dkaCase.whatIfScenarios) return;

        // What-If #1: HHS (Hyperosmolar Hyperglycemic State)
        const hhsScenario = dkaCase.whatIfScenarios.find(s => s.id === 'whatif_dka_hhs');
        if (hhsScenario) {
            hhsScenario.modifications = hhsScenario.modifications || {};
            hhsScenario.modifications.historyAnswers = {
                "diabetes": "Yes, type 2 diabetes. I take metformin and glipizide.",
                "insulin": "No, I don't take insulin.",
                "symptoms_duration": "I've been getting worse over the past week or so. More gradual.",
                "thirst": "Incredibly thirsty. I've been drinking gallons of water but still feel parched.",
                "urination": "I'm urinating constantly. I can't stay out of the bathroom.",
                "confusion": "My family says I've been very confused the past 2 days. I don't remember things.",
                "nausea": "Some nausea but not much vomiting.",
                "breathing": "My breathing seems okay. Not particularly fast.",
                "abdominal_pain": "Not really any belly pain."
            };
            
            hhsScenario.modifications.examFindings = {
                "general": "Elderly, severely dehydrated, confused, lethargic",
                "vitals": "HR 108, BP 92/58, T 99.8°F, RR 16 (NOT Kussmaul)",
                "neuro": "GCS 11. Oriented only to self. Slow to respond. No focal deficits.",
                "skin": "Very dry mucous membranes. Poor skin turgor. Tenting."
            };
            
            hhsScenario.modifications.labModifications = {
                "Glucose": "892 mg/dL (much higher than typical DKA)",
                "pH": "7.32 (mild acidosis, NOT severe)",
                "Bicarb": "19 mEq/L (mildly low)",
                "Ketones": "Trace to small (NOT large)",
                "Osmolality": "348 mOsm/kg (markedly elevated)",
                "BUN_Cr": "BUN 58, Cr 2.4 (prerenal from dehydration)",
                "Na": "Corrected Na 152 mEq/L"
            };
            
            hhsScenario.expectedReasoning = {
                topDiagnosis: "Hyperosmolar Hyperglycemic State (HHS)",
                mustNotMiss: ["Severe dehydration", "Underlying trigger (infection, MI, stroke)"],
                keyDiscriminators: ["Very high glucose (>600)", "Minimal/no ketosis", "High osmolality (>320)", "Altered mental status prominent", "Less acidotic than DKA", "Type 2 diabetes", "Gradual onset"],
                shouldRise: ["HHS", "Severe dehydration"],
                shouldDrop: ["DKA"]
            };
            
            hhsScenario.comparisonNotes = "DKA vs HHS:\n\n" +
                "DKA:\n" +
                "• Usually Type 1 DM\n" +
                "• Glucose 300-800\n" +
                "• pH <7.3, Bicarb <18\n" +
                "• Large ketones\n" +
                "• Kussmaul respirations\n" +
                "• Rapid onset (hours)\n" +
                "• Abdominal pain common\n\n" +
                "HHS:\n" +
                "• Usually Type 2 DM (elderly)\n" +
                "• Glucose often >600-1000\n" +
                "• pH >7.3, mild acidosis\n" +
                "• Minimal/no ketones\n" +
                "• Normal respirations\n" +
                "• Gradual onset (days-weeks)\n" +
                "• Altered mental status prominent\n" +
                "• MORE DEHYDRATED (avg 9L deficit vs 6L in DKA)\n\n" +
                "TREATMENT: Fluids even more critical in HHS. Start with NS, transition to 1/2NS. Insulin can wait until fluids started.";
        }

        // What-If #2: Low Potassium
        const lowKScenario = dkaCase.whatIfScenarios.find(s => s.id === 'whatif_dka_low_potassium');
        if (lowKScenario) {
            lowKScenario.modifications = lowKScenario.modifications || {};
            lowKScenario.modifications.historyAnswers = {
                "vomiting": "I've been vomiting a lot - probably 10-15 times since yesterday.",
                "diarrhea": "Yes, I've had diarrhea too.",
                "muscle": "My legs feel really weak and crampy.",
                "heart": "My heart feels like it's fluttering."
            };
            
            lowKScenario.modifications.labModifications = {
                "K": "2.8 mEq/L (LOW despite DKA - total body K very depleted)",
                "pH": "7.18",
                "Glucose": "485 mg/dL"
            };
            
            lowKScenario.expectedReasoning = {
                topDiagnosis: "DKA with severe hypokalemia",
                mustNotMiss: ["Hypokalemia before insulin", "Cardiac arrhythmia risk"],
                keyDiscriminators: ["Initial K <3.3", "Risk of fatal arrhythmia if insulin given before K repletion", "GI losses worsening K depletion"],
                shouldRise: ["Severe hypokalemia", "Arrhythmia risk"],
                shouldDrop: []
            };
            
            lowKScenario.comparisonNotes = "DKA POTASSIUM MANAGEMENT - CRITICAL:\n\n" +
                "• K appears normal/high initially due to acidosis (shifts K out of cells)\n" +
                "• TOTAL BODY K is always depleted in DKA\n" +
                "• When you give insulin + correct acidosis → K crashes\n\n" +
                "RULE:\n" +
                "• K <3.3: HOLD INSULIN, replace K first (20-40 mEq/hr)\n" +
                "• K 3.3-5.3: Give K with insulin (20-30 mEq per liter of IV fluid)\n" +
                "• K >5.3: Hold K, recheck in 2 hours\n\n" +
                "If you give insulin with K <3.3 → fatal arrhythmia";
        }
    }

    // ==================== ATRIAL FIBRILLATION ENHANCEMENTS ====================
    function enhanceAFibScenarios() {
        const afibCase = window.cases?.find(c => c.id === 'afib');
        if (!afibCase || !afibCase.whatIfScenarios) return;

        // What-If #1: Unstable (RVR with hypotension)
        const unstableScenario = afibCase.whatIfScenarios.find(s => s.id === 'whatif_afib_unstable');
        if (unstableScenario) {
            unstableScenario.modifications = unstableScenario.modifications || {};
            unstableScenario.modifications.historyAnswers = {
                "chest_pain": "Yes, I have chest pain and pressure. It's hard to breathe.",
                "lightheaded": "I feel very lightheaded. I almost passed out.",
                "breathing": "Very short of breath. I can barely catch my breath.",
                "confusion": "I feel confused. My mind is foggy."
            };
            
            unstableScenario.modifications.examFindings = {
                "vitals": "HR 172 (irregularly irregular), BP 78/52, RR 28, SpO2 88% on RA",
                "general": "Diaphoretic, in distress, altered mental status",
                "cardiac": "Tachycardic, irregularly irregular. S3 gallop.",
                "lungs": "Bibasilar crackles",
                "extremities": "Cool, mottled, weak pulses"
            };
            
            unstableScenario.expectedReasoning = {
                topDiagnosis: "Unstable atrial fibrillation with RVR",
                mustNotMiss: ["Hemodynamic instability requiring immediate cardioversion", "Underlying cause (PE, sepsis, ACS)"],
                keyDiscriminators: ["Hypotension", "Altered mental status", "Chest pain", "Pulmonary edema", "End-organ hypoperfusion"],
                shouldRise: ["Unstable AFib/RVR", "Cardiogenic shock"],
                shouldDrop: ["Stable AFib RVR (rate control)"]
            };
            
            unstableScenario.comparisonNotes = "STABLE vs UNSTABLE AFib:\n\n" +
                "STABLE:\n" +
                "• HR >100 but BP adequate\n" +
                "• No chest pain, pulmonary edema, or AMS\n" +
                "• Treatment: Rate control (beta-blocker, CCB, digoxin)\n" +
                "• Can consider rhythm control if <48h or on anticoag\n\n" +
                "UNSTABLE (any of these):\n" +
                "• Hypotension (SBP <90)\n" +
                "• Altered mental status\n" +
                "• Chest pain/ischemia\n" +
                "• Acute pulmonary edema\n" +
                "• Treatment: IMMEDIATE SYNCHRONIZED CARDIOVERSION\n" +
                "• Don't wait for anticoagulation if hemodynamically unstable";
        }

        // What-If #2: WPW with AFib
        const wpwScenario = afibCase.whatIfScenarios.find(s => s.id === 'whatif_afib_wpw');
        if (wpwScenario) {
            wpwScenario.modifications = wpwScenario.modifications || {};
            wpwScenario.modifications.historyAnswers = {
                "heart_history": "I was told I have something called WPW when I was younger. Wolff-Parkinson-White.",
                "episodes": "I've had fast heart episodes before, but never this bad.",
                "age": "I'm 28 years old."
            };
            
            wpwScenario.modifications.examFindings = {
                "vitals": "HR 220-280 (irregularly irregular with variable rate)",
                "ekg": "Irregularly irregular wide-complex tachycardia with variable QRS morphology. Some beats very wide, others narrower."
            };
            
            wpwScenario.expectedReasoning = {
                topDiagnosis: "Pre-excited atrial fibrillation (WPW with AFib)",
                mustNotMiss: ["Degeneration to VFib if given AV nodal blockers"],
                keyDiscriminators: ["History of WPW", "Young patient", "Very rapid rate (>200)", "Wide-complex irregular tachycardia", "Variable QRS width"],
                shouldRise: ["WPW with AFib", "Pre-excited AFib"],
                shouldDrop: ["Typical AFib RVR"]
            };
            
            wpwScenario.comparisonNotes = "WPW + AFib = DEADLY COMBINATION:\n\n" +
                "WHY DANGEROUS:\n" +
                "• Accessory pathway conducts FAST (no AV node delay)\n" +
                "• Can have rates >300 bpm\n" +
                "• Can degenerate to VFib and sudden death\n\n" +
                "CONTRAINDICATED DRUGS (block AV node, push conduction down accessory pathway):\n" +
                "• Beta-blockers\n" +
                "• Calcium channel blockers (diltiazem, verapamil)\n" +
                "• Digoxin\n" +
                "• Adenosine\n\n" +
                "TREATMENT:\n" +
                "• If unstable: Immediate cardioversion\n" +
                "• If stable: Procainamide or ibutilide\n" +
                "• Definitive: EP ablation of accessory pathway";
        }
    }

    // ==================== APPENDICITIS ENHANCEMENTS ====================
    function enhanceAppendicitisScenarios() {
        const appyCase = window.cases?.find(c => c.id === 'appendicitis' || c.id === 'rlq');
        if (!appyCase) return;
        
        // Add scenarios if not present
        if (!appyCase.whatIfScenarios) {
            appyCase.whatIfScenarios = [];
        }

        // Check if scenarios need to be added
        if (!appyCase.whatIfScenarios.find(s => s.id === 'whatif_appy_perforated')) {
            appyCase.whatIfScenarios.push({
                id: "whatif_appy_perforated",
                title: "What if the appendix has perforated?",
                description: "Patient with prolonged symptoms and signs of perforation",
                icon: "💥",
                estimatedMinutes: 8,
                modifications: {
                    chiefComplaint: {
                        original: "My right side has been hurting for 2 days",
                        modified: "My whole belly hurts now - it started on the right but spread everywhere"
                    },
                    historyAnswers: {
                        "duration": "The pain started about 4 days ago. It was in my right side but now my whole belly hurts.",
                        "pain_progression": "It actually got a little better for a few hours yesterday, then got much worse.",
                        "pain_character": "It was crampy at first, now it's constant and severe everywhere.",
                        "fever": "Yes, I've had high fevers - 102-103°F for the past 2 days.",
                        "vomiting": "I've been vomiting and can't keep anything down.",
                        "appetite": "I haven't been able to eat for 3 days.",
                        "bowel": "I haven't had a bowel movement in 3 days."
                    },
                    examFindings: {
                        "vitals": "T 102.8°F, HR 118, BP 98/62",
                        "abdomen": "Rigid, diffuse tenderness with guarding. Absent bowel sounds. Positive rebound and percussion tenderness throughout.",
                        "peritoneal_signs": "Diffuse peritonitis"
                    },
                    labModifications: {
                        "WBC": "22,400 with 18% bands",
                        "Lactate": "3.2 mmol/L"
                    }
                },
                expectedReasoning: {
                    topDiagnosis: "Perforated appendicitis with peritonitis",
                    mustNotMiss: ["Generalized peritonitis", "Sepsis", "Abscess formation"],
                    keyDiscriminators: ["Prolonged symptoms (>48h)", "Brief improvement then worsening (perforation)", "Diffuse peritonitis", "High fever", "Rigidity"],
                    shouldRise: ["Perforated appendicitis", "Peritonitis", "Intra-abdominal abscess"],
                    shouldDrop: ["Uncomplicated appendicitis"]
                },
                comparisonNotes: "UNCOMPLICATED vs PERFORATED APPENDICITIS:\n\n" +
                    "UNCOMPLICATED:\n" +
                    "• <48h symptoms usually\n" +
                    "• Localized RLQ tenderness\n" +
                    "• Treatment: Appendectomy (lap vs open)\n\n" +
                    "PERFORATED:\n" +
                    "• Often >48-72h symptoms\n" +
                    "• May have 'deceptive calm' (rupture relieves pressure briefly)\n" +
                    "• Then diffuse peritonitis or abscess\n" +
                    "• Treatment depends on findings:\n" +
                    "  - Abscess: Drainage + antibiotics, interval appendectomy\n" +
                    "  - Free perforation: Emergent surgery"
            });
        }

        if (!appyCase.whatIfScenarios.find(s => s.id === 'whatif_appy_pregnant')) {
            appyCase.whatIfScenarios.push({
                id: "whatif_appy_pregnant",
                title: "What if the patient is pregnant?",
                description: "Second trimester pregnant patient with RLQ/RUQ pain",
                icon: "🤰",
                estimatedMinutes: 8,
                modifications: {
                    chiefComplaint: {
                        original: "My right side has been hurting",
                        modified: "I'm pregnant and having pain on my right side"
                    },
                    historyAnswers: {
                        "pregnant": "Yes, I'm 24 weeks pregnant.",
                        "pain_location": "The pain is on my right side, but higher up than my pelvis - more toward my ribs.",
                        "prenatal": "Everything has been normal with my pregnancy until now.",
                        "contractions": "I don't think I'm having contractions. This pain is different.",
                        "vaginal_bleeding": "No bleeding.",
                        "fetal_movement": "The baby is still moving normally."
                    },
                    examFindings: {
                        "abdomen": "Gravid uterus. Tenderness in RIGHT FLANK/RUQ (displaced appendix). McBurney's point tenderness less reliable.",
                        "ob": "FHR 145 bpm. No contractions on tocometry."
                    }
                },
                expectedReasoning: {
                    topDiagnosis: "Appendicitis in pregnancy",
                    mustNotMiss: ["Appendicitis (shifted location)", "Preterm labor", "Placental abruption"],
                    keyDiscriminators: ["Pregnant patient", "Pain location may be RUQ/flank (displaced by gravid uterus)", "Standard exam findings unreliable"],
                    shouldRise: ["Appendicitis in pregnancy", "Pyelonephritis"],
                    shouldDrop: []
                },
                comparisonNotes: "APPENDICITIS IN PREGNANCY:\n\n" +
                    "LOCATION CHANGES:\n" +
                    "• 1st trimester: Classic RLQ\n" +
                    "• 2nd trimester: Right flank/lateral\n" +
                    "• 3rd trimester: RUQ/subcostal\n\n" +
                    "DIAGNOSTIC CHALLENGES:\n" +
                    "• WBC elevated in normal pregnancy\n" +
                    "• Nausea/vomiting common in pregnancy\n" +
                    "• Imaging: Ultrasound first, then MRI (no CT if possible)\n\n" +
                    "RISKS IF MISSED:\n" +
                    "• 3-5% fetal loss with uncomplicated appendicitis\n" +
                    "• 20-35% fetal loss with perforation\n" +
                    "• Higher perforation rate due to delayed diagnosis\n\n" +
                    "MANAGEMENT: Low threshold for surgery - delayed diagnosis is dangerous"
            });
        }
    }

    // ==================== CHOLECYSTITIS ENHANCEMENTS ====================
    function enhanceCholecystitisScenarios() {
        const cholecystitisCase = window.cases?.find(c => c.id === 'cholecystitis');
        if (!cholecystitisCase) return;
        
        if (!cholecystitisCase.whatIfScenarios) {
            cholecystitisCase.whatIfScenarios = [];
        }

        // Add acalculous cholecystitis scenario
        if (!cholecystitisCase.whatIfScenarios.find(s => s.id === 'whatif_cholecystitis_acalculous')) {
            cholecystitisCase.whatIfScenarios.push({
                id: "whatif_cholecystitis_acalculous",
                title: "What if there are no gallstones?",
                description: "ICU patient developing RUQ pain and fever without stones",
                icon: "🏥",
                estimatedMinutes: 8,
                modifications: {
                    historyAnswers: {
                        "setting": "I've been in the hospital for a week after my heart surgery.",
                        "pain_onset": "The pain started yesterday. I'm also on a feeding tube.",
                        "oral_intake": "I haven't eaten anything by mouth for about 5 days. Just tube feeds.",
                        "prior_gallbladder": "I've never had gallbladder problems before."
                    },
                    examFindings: {
                        "vitals": "T 102.4°F, HR 112, BP 96/58",
                        "abdomen": "RUQ tenderness with positive Murphy sign. Distension from ileus."
                    }
                },
                expectedReasoning: {
                    topDiagnosis: "Acalculous cholecystitis",
                    mustNotMiss: ["Gangrenous cholecystitis", "Sepsis", "Emphysematous cholecystitis"],
                    keyDiscriminators: ["Critically ill patient", "NPO/TPN", "No stone on imaging", "Post-operative/ICU setting"],
                    shouldRise: ["Acalculous cholecystitis", "Gangrenous cholecystitis"],
                    shouldDrop: ["Cholelithiasis with biliary colic"]
                },
                comparisonNotes: "ACALCULOUS CHOLECYSTITIS:\n\n" +
                    "RISK FACTORS:\n" +
                    "• Critically ill, ICU patients\n" +
                    "• Post-operative (cardiac surgery, trauma)\n" +
                    "• NPO/TPN >3 days\n" +
                    "• Burns, sepsis, mechanical ventilation\n\n" +
                    "WHY IT HAPPENS:\n" +
                    "• Gallbladder stasis without stones\n" +
                    "• Ischemia from hypoperfusion\n" +
                    "• Bile stasis → inflammation\n\n" +
                    "DANGER:\n" +
                    "• Higher mortality than calculous (30-50% vs 1%)\n" +
                    "• Higher perforation/gangrene rate\n" +
                    "• Diagnosis often delayed in sedated patients\n\n" +
                    "TREATMENT:\n" +
                    "• Percutaneous cholecystostomy if too sick for surgery\n" +
                    "• Broad-spectrum antibiotics"
            });
        }
    }

    // ==================== PULMONARY EMBOLISM ENHANCEMENTS ====================
    function enhancePEScenarios() {
        const peCase = window.cases?.find(c => c.id === 'pe');
        if (!peCase) return;
        
        if (!peCase.whatIfScenarios) {
            peCase.whatIfScenarios = [];
        }

        // Add massive PE scenario
        if (!peCase.whatIfScenarios.find(s => s.id === 'whatif_pe_massive')) {
            peCase.whatIfScenarios.push({
                id: "whatif_pe_massive",
                title: "What if the PE is massive/unstable?",
                description: "Hemodynamically unstable patient with suspected PE",
                icon: "⚡",
                estimatedMinutes: 8,
                modifications: {
                    historyAnswers: {
                        "onset": "Sudden severe shortness of breath. I almost passed out.",
                        "syncope": "Yes, I blacked out briefly when it started.",
                        "chest_pain": "Crushing chest pain and I can't breathe.",
                        "severity": "This is the worst I've ever felt. I feel like I'm dying."
                    },
                    examFindings: {
                        "vitals": "HR 132, BP 72/48, RR 32, SpO2 82% on 15L NRB",
                        "general": "Severe distress, diaphoretic, cyanotic",
                        "cardiac": "Tachycardic, JVD present, loud P2",
                        "extremities": "Cool, mottled"
                    }
                },
                expectedReasoning: {
                    topDiagnosis: "Massive PE with hemodynamic instability",
                    mustNotMiss: ["Obstructive shock from PE", "Right heart failure"],
                    keyDiscriminators: ["Hypotension (SBP <90)", "Syncope", "Severe hypoxia", "Signs of RV failure (JVD)"],
                    shouldRise: ["Massive PE", "High-risk PE"],
                    shouldDrop: ["Low-risk PE"]
                },
                comparisonNotes: "PE RISK STRATIFICATION:\n\n" +
                    "MASSIVE (HIGH-RISK):\n" +
                    "• Hemodynamic instability (SBP <90 for >15 min)\n" +
                    "• Cardiac arrest\n" +
                    "• Treatment: SYSTEMIC THROMBOLYTICS (tPA) or catheter-directed\n\n" +
                    "SUBMASSIVE (INTERMEDIATE):\n" +
                    "• Normotensive but RV dysfunction OR elevated troponin\n" +
                    "• Treatment: Anticoagulation, consider thrombolytics if worsens\n\n" +
                    "LOW-RISK:\n" +
                    "• Normotensive, no RV dysfunction, normal troponin\n" +
                    "• Treatment: Anticoagulation (can be outpatient if PESI low)\n\n" +
                    "For MASSIVE PE:\n" +
                    "• Don't wait for CT if unstable - bedside echo for RV strain\n" +
                    "• tPA 100mg IV over 2 hours (50mg bolus if arresting)\n" +
                    "• Consider ECMO if available"
            });
        }
    }

    // ==================== SYNCOPE ENHANCEMENTS ====================
    function enhanceSyncopeScenarios() {
        const syncopeCase = window.cases?.find(c => c.id === 'syncope');
        if (!syncopeCase || !syncopeCase.whatIfScenarios) return;

        // Cardiac syncope
        const cardiacScenario = syncopeCase.whatIfScenarios.find(s => s.id === 'whatif_syncope_cardiac');
        if (cardiacScenario) {
            cardiacScenario.modifications = cardiacScenario.modifications || {};
            cardiacScenario.modifications.historyAnswers = {
                "warning": "No warning at all. I was just standing there and suddenly I was on the ground.",
                "activity": "I was walking up the stairs when it happened.",
                "palpitations": "Yes, I felt my heart racing really fast just before I passed out.",
                "chest_pain": "I had some chest pressure right before.",
                "duration": "My wife said I was out for about 30 seconds.",
                "family_history": "My brother died suddenly at age 35. They said it was a heart problem.",
                "prior_episodes": "I've had a few of these. Usually with exercise.",
                "heart_history": "I was told I have a heart murmur."
            };
            
            cardiacScenario.modifications.examFindings = {
                "cardiac": "Harsh systolic murmur at RUSB radiating to carotids. Delayed carotid upstroke.",
                "ekg": "LVH with strain pattern. Consider HOCM or aortic stenosis."
            };
            
            cardiacScenario.expectedReasoning = {
                topDiagnosis: "Cardiac syncope",
                mustNotMiss: ["Aortic stenosis", "HOCM", "Arrhythmia (VT, long QT, Brugada)", "Sudden cardiac death risk"],
                keyDiscriminators: ["Exertional syncope", "No prodrome", "Family history of sudden death", "Murmur", "Palpitations preceding syncope"],
                shouldRise: ["Cardiac syncope", "Aortic stenosis", "Hypertrophic cardiomyopathy", "Arrhythmia"],
                shouldDrop: ["Vasovagal syncope", "Orthostatic hypotension"]
            };
        }
    }

    // ==================== SEIZURE ENHANCEMENTS ====================
    function enhanceSeizureScenarios() {
        const seizureCase = window.cases?.find(c => c.id === 'seizure');
        if (!seizureCase) return;
        
        if (!seizureCase.whatIfScenarios) {
            seizureCase.whatIfScenarios = [];
        }

        // Status epilepticus
        if (!seizureCase.whatIfScenarios.find(s => s.id === 'whatif_seizure_status')) {
            seizureCase.whatIfScenarios.push({
                id: "whatif_seizure_status",
                title: "What if the seizure won't stop?",
                description: "Patient with continuous seizure activity >5 minutes",
                icon: "⚠️",
                estimatedMinutes: 8,
                modifications: {
                    historyAnswers: {
                        "duration": "The seizure has been going on for about 15 minutes now.",
                        "continuous": "Yes, it hasn't stopped at all. Still seizing.",
                        "known_epilepsy": "Yes, I have epilepsy but I ran out of my medication a few days ago."
                    },
                    examFindings: {
                        "general": "Actively seizing, generalized tonic-clonic activity",
                        "vitals": "HR 148, BP 182/104, T 102.1°F, SpO2 84% on NRB",
                        "neuro": "Continuous seizure activity. No response to verbal stimuli."
                    }
                },
                expectedReasoning: {
                    topDiagnosis: "Generalized convulsive status epilepticus",
                    mustNotMiss: ["Status epilepticus", "Underlying trigger (infection, metabolic, stroke)", "Airway compromise"],
                    keyDiscriminators: [">5 minutes of continuous seizure", "Not responding to initial benzodiazepine", "Known epilepsy off medications"],
                    shouldRise: ["Status epilepticus", "Refractory status"],
                    shouldDrop: ["Simple seizure"]
                },
                comparisonNotes: "STATUS EPILEPTICUS MANAGEMENT:\n\n" +
                    "DEFINITION:\n" +
                    "• Seizure >5 min OR 2+ seizures without return to baseline\n\n" +
                    "TREATMENT TIMELINE:\n" +
                    "• 0-5 min: ABCs, benzodiazepine (lorazepam 4mg IV or midazolam IM)\n" +
                    "• 5-20 min: Second-line AED (fosphenytoin, levetiracetam, or valproate)\n" +
                    "• 20-40 min: Consider intubation, third-line agents\n" +
                    "• >40 min: Refractory - propofol or midazolam infusion, ICU\n\n" +
                    "DON'T FORGET:\n" +
                    "• Check glucose\n" +
                    "• Thiamine before glucose if alcoholic\n" +
                    "• Look for underlying cause\n" +
                    "• Temp control (hyperthermia from muscle activity)"
            });
        }
    }

    // ==================== ANAPHYLAXIS ENHANCEMENTS ====================
    function enhanceAnaphylaxisScenarios() {
        const anaphylaxisCase = window.cases?.find(c => c.id === 'anaphylaxis');
        if (!anaphylaxisCase) return;
        
        if (!anaphylaxisCase.whatIfScenarios) {
            anaphylaxisCase.whatIfScenarios = [];
        }

        // Biphasic reaction
        if (!anaphylaxisCase.whatIfScenarios.find(s => s.id === 'whatif_anaphylaxis_biphasic')) {
            anaphylaxisCase.whatIfScenarios.push({
                id: "whatif_anaphylaxis_biphasic",
                title: "What if symptoms return after treatment?",
                description: "Patient who improved then worsened 4 hours later",
                icon: "🔄",
                estimatedMinutes: 6,
                modifications: {
                    historyAnswers: {
                        "initial_treatment": "I got a shot of epinephrine and felt much better within an hour.",
                        "timeline": "I was in the ER for about 2 hours and they were going to send me home.",
                        "recurrence": "Then about 4 hours after the reaction started, everything came back - the hives, the breathing trouble.",
                        "current_symptoms": "It's not as bad as the first time but the hives are back and my throat feels tight again."
                    }
                },
                expectedReasoning: {
                    topDiagnosis: "Biphasic anaphylactic reaction",
                    mustNotMiss: ["Recurrent anaphylaxis", "Refractory anaphylaxis"],
                    keyDiscriminators: ["Initial improvement followed by recurrence", "4-12 hours after initial reaction", "No re-exposure to allergen"],
                    shouldRise: ["Biphasic anaphylaxis"],
                    shouldDrop: []
                },
                comparisonNotes: "BIPHASIC ANAPHYLAXIS:\n\n" +
                    "DEFINITION:\n" +
                    "• Recurrence of symptoms after initial resolution\n" +
                    "• Without re-exposure to antigen\n" +
                    "• Typically 1-72 hours after initial reaction (peak 8-10h)\n\n" +
                    "INCIDENCE: 1-20% of anaphylaxis cases\n\n" +
                    "RISK FACTORS:\n" +
                    "• Severe initial reaction\n" +
                    "• Delayed epinephrine administration\n" +
                    "• Unknown allergen\n" +
                    "• Previous biphasic reactions\n\n" +
                    "MANAGEMENT:\n" +
                    "• Observe 4-6 hours minimum after anaphylaxis\n" +
                    "• Longer observation (24h) for severe reactions\n" +
                    "• Steroids may reduce biphasic risk (controversial)\n" +
                    "• ALWAYS send home with EpiPen prescription"
            });
        }
    }

    // ==================== DIVERTICULITIS ENHANCEMENTS ====================
    function enhanceDiverticulitisScenarios() {
        const divertCase = window.cases?.find(c => c.id === 'diverticulitis');
        if (!divertCase) return;
        
        if (!divertCase.whatIfScenarios) {
            divertCase.whatIfScenarios = [];
        }

        // Complicated with abscess
        if (!divertCase.whatIfScenarios.find(s => s.id === 'whatif_divert_abscess')) {
            divertCase.whatIfScenarios.push({
                id: "whatif_divert_abscess",
                title: "What if there's an abscess?",
                description: "Complicated diverticulitis with abscess formation",
                icon: "🔴",
                estimatedMinutes: 8,
                modifications: {
                    historyAnswers: {
                        "duration": "The pain started about 5 days ago and has been getting worse despite taking antibiotics from urgent care.",
                        "fever": "I've had high fevers, up to 103°F, that won't break.",
                        "chills": "Yes, shaking chills.",
                        "prior_treatment": "I was put on Augmentin 3 days ago but I'm not getting better."
                    },
                    examFindings: {
                        "vitals": "T 102.6°F, HR 108, BP 118/72",
                        "abdomen": "LLQ tenderness with palpable fullness. Mild guarding but no peritonitis."
                    },
                    labModifications: {
                        "WBC": "18,200",
                        "CT": "4cm rim-enhancing pericolic abscess in LLQ"
                    }
                },
                expectedReasoning: {
                    topDiagnosis: "Complicated diverticulitis with abscess",
                    mustNotMiss: ["Abscess requiring drainage", "Sepsis", "Perforation"],
                    keyDiscriminators: ["Failed outpatient antibiotics", "Palpable mass", "Persistent fever", "CT showing abscess"],
                    shouldRise: ["Complicated diverticulitis", "Diverticular abscess"],
                    shouldDrop: ["Uncomplicated diverticulitis"]
                },
                comparisonNotes: "HINCHEY CLASSIFICATION:\n\n" +
                    "• Stage I: Pericolic/mesenteric abscess\n" +
                    "• Stage II: Pelvic, retroperitoneal, or distant abscess\n" +
                    "• Stage III: Purulent peritonitis (perforated)\n" +
                    "• Stage IV: Fecal peritonitis\n\n" +
                    "MANAGEMENT BY STAGE:\n" +
                    "• Abscess <3cm: IV antibiotics alone\n" +
                    "• Abscess 3-5cm: Consider drainage + antibiotics\n" +
                    "• Abscess >5cm: Percutaneous drainage + antibiotics\n" +
                    "• Stage III-IV: Emergent surgery\n\n" +
                    "After resolution: Colonoscopy in 6-8 weeks to rule out malignancy"
            });
        }
    }

    // ==================== PNEUMOTHORAX ENHANCEMENTS ====================
    function enhancePneumothoraxScenarios() {
        const ptxCase = window.cases?.find(c => c.id === 'pneumothorax');
        if (!ptxCase) return;
        
        if (!ptxCase.whatIfScenarios) {
            ptxCase.whatIfScenarios = [];
        }

        // Tension pneumothorax
        if (!ptxCase.whatIfScenarios.find(s => s.id === 'whatif_ptx_tension')) {
            ptxCase.whatIfScenarios.push({
                id: "whatif_ptx_tension",
                title: "What if it's a tension pneumothorax?",
                description: "Rapidly deteriorating patient with severe respiratory distress",
                icon: "🚨",
                estimatedMinutes: 6,
                modifications: {
                    historyAnswers: {
                        "onset": "Started suddenly and I'm getting worse fast.",
                        "breathing": "I can barely breathe. Each breath is getting harder.",
                        "severity": "I feel like I'm going to die. I can't get air in."
                    },
                    examFindings: {
                        "vitals": "HR 138, BP 78/50, RR 36, SpO2 72% on 15L NRB",
                        "general": "Severe distress, cyanotic, diaphoretic",
                        "chest": "Absent breath sounds on right. Tracheal deviation to LEFT. Distended neck veins. Hyperresonance on right.",
                        "cardiac": "Muffled heart sounds"
                    }
                },
                expectedReasoning: {
                    topDiagnosis: "Tension pneumothorax",
                    mustNotMiss: ["Tension physiology causing obstructive shock"],
                    keyDiscriminators: ["Hypotension", "Tracheal deviation (AWAY from affected side)", "JVD", "Absent breath sounds", "Rapid deterioration"],
                    shouldRise: ["Tension pneumothorax"],
                    shouldDrop: ["Simple pneumothorax"]
                },
                comparisonNotes: "TENSION PNEUMOTHORAX:\n\n" +
                    "CLASSIC TRIAD:\n" +
                    "1. Hypotension\n" +
                    "2. JVD\n" +
                    "3. Absent breath sounds\n\n" +
                    "OTHER SIGNS:\n" +
                    "• Tracheal deviation (late, away from tension)\n" +
                    "• Hyperresonance\n" +
                    "• Cyanosis\n\n" +
                    "DIAGNOSIS IS CLINICAL - DO NOT WAIT FOR CXR\n\n" +
                    "IMMEDIATE TREATMENT:\n" +
                    "• Needle decompression: 2nd ICS MCL or 4th/5th ICS AAL\n" +
                    "• Use large bore (14-16g) angiocath\n" +
                    "• Then tube thoracostomy\n\n" +
                    "In trauma: Consider bilateral needle decompression if unsure which side"
            });
        }
    }

    // Start initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeEnhancements);
    } else {
        initializeEnhancements();
    }

})();
