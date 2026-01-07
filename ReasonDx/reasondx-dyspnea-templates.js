/**
 * ReasonDx Dyspnea/Shortness of Breath Clinical Case Template Library
 * 
 * Evidence-based templates derived from UpToDate:
 * 1. "Approach to the adult with dyspnea in the emergency department"
 * 2. "Approach to diagnosis and evaluation of acute decompensated heart failure in adults"
 * 3. "Overview of community-acquired pneumonia in adults"
 * 4. "COPD exacerbations: Management"
 * 
 * Includes:
 * - HPI templates with OPQRST components for major diagnoses
 * - Physical exam expected findings with sensitivity/specificity data
 * - Diagnostic workup results expectations
 * - Differential diagnosis frameworks
 * - Risk factor response templates
 * 
 * For use in ReasonDx clinical reasoning case simulations
 */

const DyspneaTemplates = {
    
    // ============================================================
    // LIFE-THREATENING CAUSES OF ACUTE DYSPNEA
    // (From UpToDate Table 1)
    // ============================================================
    lifeThreatening: [
        "Acute Coronary Syndrome",
        "Acute Decompensated Heart Failure",
        "Arrhythmia",
        "Pericardial Tamponade",
        "Pulmonary Embolism",
        "Pneumonia/Sepsis",
        "COPD Exacerbation",
        "Asthma Exacerbation",
        "Acute Airway Obstruction/Angioedema/Anaphylaxis",
        "Tension Pneumothorax",
        "Carbon Monoxide Poisoning",
        "Methemoglobinemia"
    ],
    
    // ============================================================
    // CLINICAL DANGER SIGNS - IMMINENT RESPIRATORY ARREST
    // From UpToDate: portend imminent respiratory arrest
    // ============================================================
    dangerSigns: {
        imminentArrest: [
            "Depressed mental status (severe hypoxia or hypercarbia)",
            "Inability to maintain respiratory effort (bradypnea, poor inspiratory effort, agonal respirations)",
            "Cyanosis (severe hypoxia or methemoglobinemia)"
        ],
        severeDistress: [
            "Retractions and use of accessory muscles (suprasternal, intercostal, subcostal)",
            "Brief, fragmented speech (unable to speak in full sentences)",
            "Significant tachypnea (>25 breaths/minute)",
            "Inability to lie supine (sitting bolt upright, tripod position)",
            "Profound diaphoresis",
            "Audible stridor or wheezing",
            "Dusky skin (poor perfusion or cyanosis)",
            "Agitation, somnolence, or altered mental status"
        ]
    },
    
    // ============================================================
    // HPI TEMPLATES BY DIAGNOSIS
    // ============================================================
    hpiTemplates: {
        
        // ACUTE DECOMPENSATED HEART FAILURE (ADHF)
        // From UpToDate: Most common cause in elderly, >50% of HF admissions
        // Clinical profiles: Warm and wet (70%), Cold and wet (<20%), others (<10%)
        adhf: {
            onset: [
                "It's been getting gradually worse over the past {duration} - started feeling more winded with less activity.",
                "I noticed it about a week ago - I could barely walk to the mailbox without getting short of breath.",
                "It came on over the past few days. I'm having trouble lying flat at night now.",
                "It's been building for maybe {duration}. I wake up at night gasping for air.",
                "It started gradually - first I noticed my ankles swelling, then the breathing got harder."
            ],
            location: [
                "I feel like I can't get a full breath in.",
                "It's like my chest is tight and I can't expand it.",
                "I feel like I'm drowning or suffocating.",
                "It feels like there's fluid in my lungs."
            ],
            quality: [
                "It's like air hunger - I just can't get enough air in.",
                "I feel like I'm suffocating, especially when I lie down.",
                "It's a heavy feeling in my chest when I try to breathe.",
                "Like breathing through a straw - I have to work hard to breathe."
            ],
            severity: [
                "It's really bad - maybe 8 out of 10. I can barely walk across the room.",
                "About a 7 - I'm completely winded just going to the bathroom.",
                "It's the worst it's ever been. I can't do anything without getting short of breath.",
                "Probably a 6, but it's definitely getting worse each day."
            ],
            timing: [
                "It's worse at night when I lie down. I have to sleep sitting up.",
                "I wake up around 2-3 AM gasping for air and have to sit up.",
                "It's constant now but much worse with any activity.",
                "It comes and goes but has been more frequent over the past week."
            ],
            aggravating: [
                "Any activity makes it worse - even getting dressed.",
                "Lying flat makes it much worse. I need 3 pillows to sleep.",
                "Walking even short distances. I had to stop halfway up the stairs.",
                "Bending over, like putting on my shoes.",
                "It gets worse when I eat a lot or drink too much fluid."
            ],
            alleviating: [
                "Sitting up helps quite a bit.",
                "Resting and keeping my legs elevated.",
                "When I sit at the edge of the bed with my feet down, it's a little better.",
                "Using my oxygen helps some but it's still there."
            ],
            associated: [
                // Key associated symptoms for ADHF
                "My ankles and legs are really swollen - worse than they've ever been.",
                "I've gained about {weight_gain} pounds in the past week.",
                "I'm urinating a lot at night - up 4-5 times.",
                "I have a cough, especially at night. Sometimes it's pink and frothy.",
                "I've been feeling really fatigued - no energy at all.",
                "My belly feels bloated and I don't have much appetite.",
                "I'm getting chest discomfort too with the breathing trouble.",
                "I feel confused and foggy - my family noticed it.",
                "My shoes don't fit anymore because my feet are so swollen."
            ],
            
            // Orthopnea - VERY specific for ADHF
            orthopnea: [
                "I can't lie flat at all anymore. I sleep in my recliner.",
                "I need to prop myself up on 3 or 4 pillows.",
                "Within minutes of lying down, I feel like I'm drowning.",
                "I've been sleeping sitting up for the past few nights."
            ],
            
            // Paroxysmal Nocturnal Dyspnea (PND)
            pnd: [
                "I wake up suddenly at night, maybe 1-2 AM, gasping for air. I have to sit up or stand by the window.",
                "A few times this week I've woken up choking and had to get out of bed.",
                "I wake up coughing and short of breath - it takes about 20 minutes sitting up to feel better.",
                "I've had several episodes of waking up unable to breathe. It's terrifying."
            ],
            
            // Peripheral edema progression
            edema: [
                "My legs have been swelling for about a week - started at the ankles, now it's up to my knees.",
                "I noticed my shoes were tight, then my socks left deep marks, now my whole legs are swollen.",
                "The swelling is worse in the evening after I've been up all day.",
                "My belly seems bigger and my legs are really swollen."
            ],
            
            // Weight gain - fluid retention
            weightGain: [
                "I've gained about 10 pounds in the past week.",
                "I noticed I was 8 pounds heavier than last week when I weighed myself.",
                "My clothes are all tight - probably gained 5-6 pounds.",
                "I don't weigh myself but my wedding ring is too tight and my shoes don't fit."
            ]
        },
        
        // ACUTE PULMONARY EDEMA (Flash Pulmonary Edema)
        // From UpToDate: <3% of ADHF, rapid onset, often with severe HTN
        acutePulmonaryEdema: {
            onset: [
                "It came on suddenly - over minutes. I couldn't breathe at all.",
                "I was fine, then within 15-20 minutes I was gasping for air.",
                "It hit me like a wave - sudden suffocation.",
                "I woke up suddenly unable to breathe - worst I've ever experienced.",
                "It came on very fast, maybe over 10-15 minutes."
            ],
            quality: [
                "I feel like I'm drowning. I can hear gurgling when I breathe.",
                "Complete suffocation - like being underwater.",
                "I can't catch my breath at all. It's terrifying.",
                "I feel like I'm breathing through water."
            ],
            severity: [
                "10 out of 10 - I thought I was going to die.",
                "The worst I've ever felt - absolute panic.",
                "It's unbearable - I can't get any air in."
            ],
            associated: [
                "I'm coughing up pink, frothy sputum.",
                "I'm drenched in sweat.",
                "I feel like I'm going to pass out.",
                "My heart is racing and pounding.",
                "I'm extremely anxious - sense of doom."
            ]
        },
        
        // COMMUNITY-ACQUIRED PNEUMONIA
        // From UpToDate: Leading cause of sepsis
        pneumonia: {
            onset: [
                "It started about {duration} ago with a cough, then I got more short of breath.",
                "I've had a cold for about a week, but 2 days ago the breathing got really bad.",
                "It came on over 3-4 days. Started with chills and cough, now I can barely breathe.",
                "I've been progressively getting worse over the past {duration}.",
                "It started with a fever about {duration} ago, then the cough and shortness of breath."
            ],
            location: [
                "It hurts on the right side of my chest when I breathe in.",
                "There's pain on my left side that's sharp when I take a deep breath.",
                "My chest feels heavy all over.",
                "The pain is right here [points to affected side]."
            ],
            quality: [
                "It's hard to take a deep breath - sharp pain when I try.",
                "I feel like I can't expand my lungs fully.",
                "There's a stabbing pain in my side when I breathe.",
                "It's like breathing through a wet blanket."
            ],
            severity: [
                "Maybe a 6 or 7 - it's gotten worse since yesterday.",
                "Pretty bad - 7 out of 10. I can't talk without getting winded.",
                "It's about an 8 now - it keeps getting worse.",
                "Started as a 4 but now it's a 7 or 8."
            ],
            aggravating: [
                "Taking deep breaths makes the chest pain worse.",
                "Coughing is very painful.",
                "Any exertion makes the breathing much harder.",
                "Talking too much makes me more winded."
            ],
            alleviating: [
                "Lying on the painful side actually helps a little.",
                "Shallow breathing is more comfortable but doesn't feel like enough.",
                "Taking the cough medicine helps some.",
                "Sitting up is better than lying down."
            ],
            associated: [
                // Classic pneumonia symptoms
                "I have a productive cough - bringing up {sputum_color} sputum.",
                "I've had fevers and chills - sometimes shaking chills.",
                "I'm coughing up thick yellow-green mucus.",
                "I've been having night sweats and my appetite is gone.",
                "I feel really weak and achy all over.",
                "I've had a fever up to {temperature}.",
                "My cough was dry at first but now I'm bringing up phlegm.",
                "I've been having headaches and muscle aches with it.",
                "I feel cold and shivery even though my temperature is high."
            ],
            
            // Pleuritic chest pain - common with pneumonia
            pleuriticPain: [
                "The pain is sharp and gets worse when I breathe in deep.",
                "It's like a stabbing in my side every time I cough or breathe deep.",
                "Taking a deep breath causes a sharp catch in my chest.",
                "The pain is worse with breathing and coughing."
            ],
            
            // Sputum characteristics
            sputum: [
                "Thick yellow sputum - quite a lot of it.",
                "Green, purulent mucus - tastes terrible.",
                "Rust-colored phlegm.",
                "Blood-tinged sputum.",
                "Clear at first but now it's yellow and thick."
            ]
        },
        
        // COPD EXACERBATION
        // From UpToDate: Chronic hypercapnic patients may not show typical signs
        copd: {
            onset: [
                "My breathing has been getting worse over the past {duration}.",
                "I caught a cold about a week ago and since then my COPD has flared up badly.",
                "It started about {duration} ago - worse than my usual shortness of breath.",
                "It's been gradually worsening, but the last 2 days have been really bad.",
                "I ran out of my inhalers about a week ago and it's gotten much worse."
            ],
            quality: [
                "It's like my usual COPD breathing but much, much worse.",
                "I feel like I can't empty my lungs - they feel full of air.",
                "There's a lot more wheezing than usual.",
                "It takes forever to breathe out.",
                "I feel like I'm breathing through a narrow straw."
            ],
            severity: [
                "This is the worst my breathing has been in years.",
                "It's about an 8 - I can barely make it to the bathroom.",
                "I'd say a 7, but it's not responding to my usual meds.",
                "It's really bad - I've never needed to come to the ER for this before."
            ],
            timing: [
                "It's constant now - doesn't let up.",
                "It's worse in the mornings when I first wake up.",
                "It gets worse whenever I try to do anything physical.",
                "It's been building over {duration} but really bad the last 2 days."
            ],
            aggravating: [
                "Any activity at all - even talking makes me more winded.",
                "Cold air makes it worse.",
                "Going up even one stair leaves me gasping.",
                "When I cough it gets really hard to catch my breath."
            ],
            alleviating: [
                "My inhalers help a little but not like they usually do.",
                "I tried my nebulizer but it's not working as well.",
                "Sitting up leaning forward helps some.",
                "Pursed lip breathing helps a tiny bit.",
                "Oxygen at home helps some."
            ],
            associated: [
                // Cardinal symptoms of COPD exacerbation
                "I'm coughing up a lot more mucus than usual.",
                "The phlegm has changed - it's thicker and {sputum_color} now.",
                "My wheezing is much louder - I can hear it without a stethoscope.",
                "I'm more tired than usual and can barely get out of bed.",
                "I've been confused - my family says I'm not acting right.",
                "I feel like my chest is really tight.",
                "I've had some low-grade fevers.",
                "I'm retaining fluid - my ankles are swollen."
            ],
            
            // Sputum changes - key indicator of bacterial infection
            sputumChange: [
                "My sputum is much thicker and has turned green.",
                "I'm producing way more phlegm than usual - maybe twice as much.",
                "The color changed from clear/white to yellow-green.",
                "It's harder to cough up and there's a lot more of it."
            ],
            
            // Baseline comparison - critical question
            baselineComparison: [
                "This is definitely worse than my usual - I know my COPD but this is different.",
                "My baseline is being short of breath with activity, but now I'm short of breath at rest.",
                "Usually I can walk about a block, but today I couldn't make it to the mailbox.",
                "I'm usually on 2 liters of oxygen but I needed to turn it up to 4 and it's still not enough."
            ]
        },
        
        // ASTHMA EXACERBATION
        // From UpToDate: Silent chest = ominous sign
        asthma: {
            onset: [
                "It started about {duration} ago - my asthma has been acting up.",
                "I was exposed to {trigger} and it triggered my asthma badly.",
                "I've been having more symptoms for the past week, but today it got really bad.",
                "It came on suddenly after I was around {trigger}.",
                "I've had a cold and now my asthma is flaring terribly."
            ],
            quality: [
                "I'm wheezing a lot and can't get air in.",
                "My chest is really tight - like a band around it.",
                "I can hear the whistling when I breathe out.",
                "It feels like breathing through a very narrow tube."
            ],
            severity: [
                "This is a bad attack - 8 out of 10.",
                "I've used my rescue inhaler {puffs} times today and it's not helping like usual.",
                "Probably a 7 - it's one of my worse episodes.",
                "It's a 9 - I can barely speak in full sentences."
            ],
            aggravating: [
                "Any physical activity makes it much worse.",
                "Cold air triggers more wheezing.",
                "Talking makes me more short of breath.",
                "Strong smells set it off."
            ],
            alleviating: [
                "My albuterol inhaler helps but only for about an hour now.",
                "Sitting up and leaning forward is a little easier.",
                "Being in a cool, humid room helps some.",
                "My rescue inhaler usually works but not today."
            ],
            associated: [
                "I'm coughing a lot - it's worse at night.",
                "I can't sleep because of the coughing and wheezing.",
                "I'm anxious and scared because I can't breathe.",
                "I'm sweating even though I'm not hot.",
                "I can barely finish a sentence without stopping to breathe."
            ],
            
            // Triggers - important history
            triggers: [
                "I was around cats/dust/pollen and it set it off.",
                "I was exercising in the cold air.",
                "I've been sick with a cold for a few days.",
                "I forgot to take my controller inhaler for a few days.",
                "There was a lot of smoke/pollution in the air."
            ],
            
            // Prior intubations - high risk marker per UpToDate
            priorIntubation: [
                "Yes, I've been intubated for asthma {number} times before.",
                "I was in the ICU on a ventilator about {duration} ago.",
                "No, I've never been intubated.",
                "I've had really bad attacks before but never on a ventilator."
            ],
            
            // Medication use
            rescueUse: [
                "I've used my albuterol about 10 times in the last 24 hours.",
                "I'm using my rescue inhaler every 2 hours and it's not lasting.",
                "I've used a whole albuterol inhaler in the past week.",
                "My nebulizer treatments aren't working like they used to."
            ]
        },
        
        // PULMONARY EMBOLISM
        // From UpToDate: Dyspnea at rest and tachypnea are most common signs
        pulmonaryEmbolism: {
            onset: [
                "It came on suddenly - one moment I was fine, the next I couldn't breathe.",
                "It started abruptly about {duration} ago.",
                "I was just sitting there and suddenly got very short of breath.",
                "It came on all at once - very sudden.",
                "I felt fine this morning, then suddenly I couldn't catch my breath."
            ],
            quality: [
                "I suddenly couldn't catch my breath for no reason.",
                "It feels like I can't get enough air no matter how hard I breathe.",
                "Sharp chest pain with breathing - hurts to take a deep breath.",
                "I just feel winded even sitting still."
            ],
            severity: [
                "It's an 8 out of 10 - came out of nowhere.",
                "Pretty severe - 7. I've never felt this before.",
                "It was suddenly very bad - maybe a 9.",
                "About a 7 or 8 - it scared me."
            ],
            aggravating: [
                "Taking deep breaths makes the chest pain worse.",
                "Any activity makes the breathlessness worse.",
                "It's just there even at rest."
            ],
            alleviating: [
                "Nothing really helps.",
                "Shallow breaths are a little easier but I don't feel like I'm getting enough air.",
                "Rest doesn't seem to make it better."
            ],
            associated: [
                // Classic PE symptoms
                "I also have a sharp pain in my side that's worse when I breathe.",
                "My heart is racing - I can feel it pounding.",
                "I felt lightheaded - almost like I might pass out.",
                "I coughed up some blood.",
                "I had sudden chest pain that came with the shortness of breath.",
                "I'm sweating and feel anxious.",
                "I've been feeling more fatigued than usual the past few days.",
                "My leg has been swollen and painful for a few days.",
                "I felt a strange flutter in my chest when it started."
            ],
            
            // Risk factor questions
            riskFactorResponses: {
                recentSurgery: [
                    "Yes, I had {surgery_type} about {duration} ago.",
                    "I had hip replacement surgery 2 weeks ago.",
                    "I had abdominal surgery about a month ago.",
                    "No, I haven't had any recent surgery."
                ],
                immobility: [
                    "I've been on bed rest for {duration} after my surgery.",
                    "I just got off a 12-hour flight yesterday.",
                    "I was in the hospital for a week and didn't get up much.",
                    "I've been pretty sedentary due to my back pain.",
                    "No, I've been normally active."
                ],
                priorVTE: [
                    "Yes, I had a blood clot in my leg {duration} ago.",
                    "I had a DVT before but that was years ago.",
                    "Yes, I had a pulmonary embolism about {duration} ago.",
                    "No, I've never had a blood clot."
                ],
                cancer: [
                    "Yes, I'm being treated for {cancer_type}.",
                    "I had cancer but I'm in remission now.",
                    "No history of cancer.",
                    "I'm undergoing chemotherapy right now."
                ],
                contraceptives: [
                    "Yes, I'm on birth control pills.",
                    "I'm taking hormone replacement therapy.",
                    "No, I'm not on any hormones.",
                    "I started estrogen about {duration} ago."
                ],
                legSymptoms: [
                    "Actually, my left leg has been swollen and painful for about {duration}.",
                    "My calf has been sore and I noticed some redness.",
                    "My leg felt tight and swollen before this started.",
                    "No, my legs feel fine."
                ]
            }
        },
        
        // PNEUMOTHORAX
        pneumothorax: {
            onset: [
                "It came on suddenly - I was just {activity} and suddenly couldn't breathe.",
                "I felt a pop in my chest and then couldn't catch my breath.",
                "It started all at once, out of nowhere.",
                "Sudden sharp chest pain and then I was gasping for air."
            ],
            quality: [
                "Sudden sharp pain on one side and I can't breathe on that side.",
                "It feels like something burst in my chest.",
                "Very sharp and I can't take a full breath."
            ],
            associated: [
                "The pain is on my right/left side.",
                "I feel like I can only use one lung.",
                "My heart is racing.",
                "I feel lightheaded."
            ]
        },
        
        // CARDIAC ARRHYTHMIA
        arrhythmia: {
            onset: [
                "It came on suddenly - I felt my heart racing and then got short of breath.",
                "My heart started beating really fast and I felt winded.",
                "It was sudden - palpitations and then breathlessness."
            ],
            associated: [
                "I can feel my heart racing - it's very irregular.",
                "I feel like my heart is skipping beats.",
                "I feel lightheaded and like I might pass out.",
                "My heart is pounding in my chest.",
                "I feel fluttering in my chest."
            ]
        },
        
        // ANAPHYLAXIS/ANGIOEDEMA
        anaphylaxis: {
            onset: [
                "It started right after I ate {food}/took {medication}/was stung by {insect}.",
                "Within minutes of exposure to {allergen} I couldn't breathe.",
                "It came on suddenly after {exposure}."
            ],
            associated: [
                "My throat feels like it's closing up.",
                "My lips and tongue are swelling.",
                "I broke out in hives all over.",
                "I feel itchy everywhere.",
                "I'm getting dizzy and my blood pressure feels low.",
                "My voice sounds different - kind of hoarse."
            ]
        },
        
        // METABOLIC ACIDOSIS (DKA, etc.)
        metabolicAcidosis: {
            onset: [
                "I've been feeling sick for a few days - nausea, vomiting, and now I can't stop breathing fast.",
                "It started with being really thirsty and urinating a lot, now I'm breathing really hard.",
                "I've been feeling terrible for {duration} and now I'm hyperventilating."
            ],
            quality: [
                "I have to breathe fast and deep - I can't stop.",
                "I'm breathing really rapidly but I don't feel short of breath exactly.",
                "I feel like I need to take big, deep breaths constantly."
            ],
            associated: [
                "I've been really thirsty and urinating all the time.",
                "I've been nauseous and vomited several times.",
                "My belly hurts.",
                "I feel confused and weak.",
                "My breath tastes fruity or metallic."
            ]
        }
    },
    
    // ============================================================
    // PHYSICAL EXAM EXPECTED FINDINGS BY DIAGNOSIS
    // With sensitivity/specificity data where available
    // ============================================================
    physicalExamFindings: {
        
        // ADHF Physical Exam
        // From UpToDate: JVP specificity 93%, sensitivity 57%
        adhf: {
            vital_signs: [
                "Blood pressure: {bp} (often elevated, except in cardiogenic shock)",
                "Heart rate: {hr} - tachycardic",
                "Respiratory rate: {rr} - tachypneic",
                "O2 saturation: {spo2}% on room air (often <92%)",
                "Temperature: Normal or low-grade fever"
            ],
            general: [
                "Patient appears anxious and in respiratory distress",
                "Sitting upright, unable to lie flat (orthopnea)",
                "Diaphoretic, pale, or dusky skin",
                "Using accessory muscles of respiration"
            ],
            cardiovascular: [
                // JVP - highly specific for ADHF (93%)
                "Jugular venous distension to {cm} cm above sternal angle (specific 93%, sens 57%)",
                "Positive hepatojugular reflux",
                "S3 gallop - indicative of LV systolic dysfunction",
                "S4 heart sound - LV diastolic dysfunction",
                "Displaced PMI - cardiomegaly",
                "Murmur of mitral regurgitation",
                "Tachycardia with regular or irregular rhythm",
                "Peripheral edema - pitting to {level} (ankles/pretibial/thighs)"
            ],
            pulmonary: [
                "Bibasilar crackles/rales - may extend higher with severity",
                "Decreased breath sounds at bases - pleural effusions",
                "Wheezing (cardiac asthma)",
                "Tachypnea"
            ],
            abdominal: [
                "Hepatomegaly - tender, enlarged liver from congestion",
                "Ascites - fluid wave positive",
                "Right upper quadrant tenderness"
            ],
            extremities: [
                "Bilateral lower extremity pitting edema",
                "Sacral edema in bedridden patients",
                "Cool extremities if low cardiac output"
            ],
            
            // Severity markers
            severityMarkers: {
                cardiogenicShock: [
                    "Hypotension (SBP <90 mmHg)",
                    "Cold, clammy, mottled extremities",
                    "Altered mental status",
                    "Narrow pulse pressure",
                    "Weak, thready pulses"
                ]
            }
        },
        
        // ACUTE PULMONARY EDEMA - Flash
        acutePulmonaryEdema: {
            vital_signs: [
                "Blood pressure: Often markedly elevated (SBP >180 mmHg)",
                "Heart rate: Tachycardic",
                "Respiratory rate: Very tachypneic (>30)",
                "O2 saturation: Usually <90% on room air"
            ],
            general: [
                "Severe respiratory distress - sitting bolt upright",
                "Alae nasi dilated",
                "Inspiratory retraction of intercostal spaces and supraclavicular fossae",
                "Profuse diaphoresis",
                "Cool, ashen, cyanotic skin",
                "Anxious, agitated appearance",
                "May produce pink, frothy sputum"
            ],
            pulmonary: [
                "Noisy respiration with audible gurgling",
                "Inspiratory and expiratory wheezes",
                "Coarse crackles throughout all lung fields",
                "Moist, fine crepitant rales - bases to apices"
            ],
            cardiovascular: [
                "S3 and/or S4 gallop if audible (often difficult to hear)",
                "Murmurs suggesting valvular disease",
                "Rapid heart rate"
            ]
        },
        
        // PNEUMONIA Physical Exam
        // From UpToDate: Sensitivity/specificity limited
        pneumonia: {
            vital_signs: [
                "Temperature: Fever >{temp}°F or hypothermia",
                "Heart rate: Tachycardic",
                "Respiratory rate: Tachypneic (>20)",
                "O2 saturation: Often <94% on room air",
                "Blood pressure: May be low if septic"
            ],
            general: [
                "Appears ill, fatigued",
                "May be shivering or having rigors",
                "Dyspneic at rest or with minimal exertion"
            ],
            pulmonary: [
                // Classic consolidation findings
                "Crackles/rales over affected area",
                "Bronchial breath sounds over consolidation",
                "Increased tactile fremitus",
                "Dullness to percussion",
                "Egophony (E-to-A changes)",
                "Whispered pectoriloquy",
                "Decreased breath sounds if pleural effusion present",
                "Pleural friction rub if pleuritis present"
            ],
            sepsis_signs: [
                "Altered mental status",
                "Hypotension (SBP <100 mmHg)",
                "Tachypnea (RR ≥22)",
                "Mottled skin",
                "Delayed capillary refill"
            ]
        },
        
        // COPD EXACERBATION
        copd: {
            vital_signs: [
                "Respiratory rate: Tachypneic (often >24)",
                "O2 saturation: Typically <90% on room air",
                "Heart rate: Tachycardic",
                "Blood pressure: May be elevated due to distress",
                "Temperature: May have low-grade fever if infectious cause"
            ],
            general: [
                "Tripod position - leaning forward with arms braced",
                "Pursed-lip breathing",
                "Use of accessory muscles (SCM, scalenes)",
                "Barrel chest (chronic finding)",
                "Appears anxious or distressed",
                "May be drowsy/confused if severe hypercapnia"
            ],
            pulmonary: [
                "Diffuse expiratory wheezes",
                "Prolonged expiratory phase",
                "Hyperresonance to percussion",
                "Decreased breath sounds globally",
                "Coarse rhonchi if mucus present",
                "Distant breath sounds"
            ],
            cardiovascular: [
                "May have right-sided heart failure signs (cor pulmonale)",
                "JVD if right heart failure",
                "Peripheral edema"
            ],
            
            // Severity indicators
            severeSigns: [
                "Inability to speak in full sentences",
                "Paradoxical chest/abdominal movement",
                "Central cyanosis",
                "Altered mental status",
                "Accessory muscle fatigue"
            ]
        },
        
        // ASTHMA EXACERBATION
        // From UpToDate: Silent chest is ominous
        asthma: {
            vital_signs: [
                "Respiratory rate: Tachypneic (often ≥25)",
                "O2 saturation: Variable - often <92% in severe attacks",
                "Heart rate: Tachycardic",
                "Pulsus paradoxus: >10 mmHg indicates severe obstruction"
            ],
            general: [
                "Sitting upright, unable to lie down",
                "Using accessory muscles",
                "Diaphoretic if severe",
                "Anxious, frightened appearance",
                "Brief, fragmented speech (severe attack)"
            ],
            pulmonary: [
                "Diffuse expiratory wheezing",
                "Prolonged expiratory phase",
                "Hyperresonance to percussion",
                "Decreased breath sounds - AIR MOVEMENT"
            ],
            
            // CRITICAL: Silent chest
            severeSigns: [
                "Silent chest (no wheezing) - OMINOUS, indicates severe obstruction with no air movement",
                "Inability to speak",
                "Paradoxical thoracoabdominal movement",
                "Central cyanosis",
                "Extreme fatigue/exhaustion",
                "Depressed mental status"
            ]
        },
        
        // PULMONARY EMBOLISM
        pulmonaryEmbolism: {
            vital_signs: [
                "Heart rate: Tachycardic (most common)",
                "Respiratory rate: Tachypneic (most common sign)",
                "O2 saturation: May be decreased",
                "Blood pressure: Normal, or hypotensive if massive PE"
            ],
            general: [
                "May appear anxious",
                "Diaphoretic",
                "Variable degree of distress"
            ],
            pulmonary: [
                "Often NORMAL lung exam",
                "May have crackles",
                "May have decreased breath sounds if effusion",
                "Pleural friction rub possible"
            ],
            cardiovascular: [
                "Tachycardia",
                "Loud P2 (pulmonary hypertension)",
                "Right ventricular heave",
                "Jugular venous distension if right heart failure",
                "Hypotension if massive PE"
            ],
            extremities: [
                "Unilateral leg swelling (DVT)",
                "Calf tenderness (DVT)",
                "Palpable cord (DVT)",
                "Warmth and erythema of leg"
            ]
        },
        
        // PNEUMOTHORAX
        pneumothorax: {
            vital_signs: [
                "Heart rate: Tachycardic",
                "Respiratory rate: Tachypneic",
                "O2 saturation: Decreased",
                "Blood pressure: Hypotensive if tension"
            ],
            pulmonary: [
                "Decreased or absent breath sounds on affected side",
                "Hyperresonance to percussion on affected side",
                "Decreased tactile fremitus on affected side",
                "Tracheal deviation AWAY from affected side (tension)"
            ],
            cardiovascular: [
                "JVD if tension pneumothorax",
                "Hypotension if tension pneumothorax",
                "Tachycardia"
            ]
        },
        
        // CARDIAC TAMPONADE
        cardiacTamponade: {
            classicTriad: [
                "Hypotension",
                "Distended neck veins (JVD)",
                "Muffled/distant heart sounds"
            ],
            other: [
                "Pulsus paradoxus >10 mmHg",
                "Tachycardia",
                "Tachypnea"
            ]
        },
        
        // ANAPHYLAXIS
        anaphylaxis: {
            skin: [
                "Urticaria (hives)",
                "Angioedema of lips, tongue, uvula",
                "Flushing",
                "Pruritus"
            ],
            airway: [
                "Stridor (upper airway)",
                "Wheezing (lower airway)",
                "Hoarse voice",
                "Difficulty swallowing"
            ],
            cardiovascular: [
                "Hypotension",
                "Tachycardia"
            ]
        }
    },
    
    // ============================================================
    // DIAGNOSTIC WORKUP EXPECTED RESULTS
    // ============================================================
    workupResults: {
        
        // ADHF Workup
        adhf: {
            labs: {
                bnp: [
                    "BNP: {value} pg/mL (elevated >400 pg/mL suggests HF)",
                    "BNP: >500 pg/mL has >90% PPV for ADHF",
                    "BNP: <100 pg/mL has >90% NPV - rules out ADHF"
                ],
                ntProBNP: [
                    "NT-proBNP: {value} pg/mL",
                    "Age-adjusted cutoffs: <50 yo: 450, 50-75 yo: 900, >75 yo: 1800 pg/mL"
                ],
                troponin: [
                    "Troponin: May be mildly elevated (demand ischemia, myocardial injury)",
                    "Does not necessarily indicate ACS"
                ],
                bmp: [
                    "Creatinine: May be elevated (cardiorenal syndrome)",
                    "BUN: Elevated",
                    "Sodium: May be low (dilutional)",
                    "Potassium: Variable"
                ],
                cbc: [
                    "WBC: May be elevated if infectious precipitant",
                    "Hemoglobin: Check for anemia (high-output HF)"
                ]
            },
            ecg: [
                "Sinus tachycardia",
                "Atrial fibrillation (common precipitant)",
                "Left ventricular hypertrophy",
                "ST-T changes (ischemia as precipitant)",
                "Q waves (prior MI)",
                "Low voltage (pericardial effusion)",
                "Left bundle branch block"
            ],
            cxr: [
                // Up to 20% may have normal CXR
                "Cardiomegaly (cardiothoracic ratio >0.5)",
                "Cephalization of pulmonary vessels",
                "Kerley B lines (interstitial edema)",
                "Peribronchial cuffing",
                "Perihilar alveolar edema ('butterfly' or 'bat wing' pattern)",
                "Bilateral pleural effusions (more common on right)",
                "Upper zone redistribution"
            ],
            echo: [
                "Reduced LVEF <40% (HFrEF)",
                "Preserved LVEF >50% (HFpEF)",
                "LV dilation",
                "Wall motion abnormalities",
                "Elevated filling pressures (E/e' ratio)",
                "Valvular abnormalities",
                "RV dysfunction"
            ],
            lungUltrasound: [
                "Multiple B-lines (≥3 per intercostal space) - pulmonary edema",
                "B-lines more sensitive than CXR for pulmonary edema",
                "Pleural effusions visible"
            ]
        },
        
        // PNEUMONIA Workup
        pneumonia: {
            labs: {
                cbc: [
                    "WBC: {count} - leukocytosis with left shift",
                    "May have leukopenia if severe/immunocompromised"
                ],
                bmp: [
                    "BUN and creatinine: May be elevated (dehydration or sepsis)"
                ],
                procalcitonin: [
                    "Procalcitonin: {value} - elevated suggests bacterial infection",
                    ">0.25 suggests bacterial infection",
                    "<0.1 makes bacterial infection unlikely"
                ],
                lactate: [
                    "Lactate: Elevated if sepsis"
                ],
                abg: [
                    "Hypoxemia with respiratory alkalosis typically",
                    "May have respiratory acidosis if severe/tiring"
                ]
            },
            cxr: [
                "Lobar consolidation (typical bacteria)",
                "Interstitial infiltrates (atypical pathogens, viral)",
                "Cavitation (consider TB, MRSA, anaerobes, Klebsiella)",
                "Air bronchograms within consolidation",
                "Parapneumonic effusion"
            ],
            micro: [
                "Sputum Gram stain and culture",
                "Blood cultures (positive in ~10-20% of CAP)",
                "Urinary antigens: S. pneumoniae, Legionella",
                "Respiratory viral panel",
                "COVID-19 PCR"
            ]
        },
        
        // COPD Exacerbation Workup
        copd: {
            labs: {
                abg: [
                    "Hypoxemia (PaO2 <60 mmHg)",
                    "Hypercapnia (PaCO2 elevated from baseline)",
                    "Respiratory acidosis (pH <7.35)",
                    "Compare to known baseline ABG if available"
                ],
                cbc: [
                    "May show leukocytosis if infectious",
                    "Polycythemia if chronic hypoxemia"
                ],
                bmp: [
                    "Bicarbonate: May be elevated (chronic compensation)"
                ]
            },
            cxr: [
                "Hyperinflation (flattened diaphragms)",
                "Increased AP diameter",
                "Hyperlucent lung fields",
                "Bullae may be visible",
                "Rule out pneumonia, pneumothorax, pleural effusion"
            ],
            ecg: [
                "Right axis deviation",
                "P pulmonale (peaked P waves in II)",
                "Low voltage",
                "Right ventricular hypertrophy signs"
            ],
            spirometry: [
                "FEV1 decreased from baseline",
                "Peak flow <25% predicted or <200 L/min suggests hypercapnia risk"
            ]
        },
        
        // ASTHMA Exacerbation Workup
        asthma: {
            peakFlow: [
                "PEFR: {value} L/min ({percent}% of predicted)",
                "<25% predicted or <200 L/min: severe, hypercapnia risk",
                "25-50% predicted: moderate-severe",
                ">50% predicted: mild-moderate"
            ],
            labs: {
                abg: [
                    "Mild attack: Respiratory alkalosis (hyperventilation)",
                    "Moderate: Normalization of PaCO2 (concerning)",
                    "Severe: Respiratory acidosis (impending respiratory failure)",
                    "Normal or elevated PaCO2 is OMINOUS"
                ]
            },
            cxr: [
                "Often normal",
                "Hyperinflation",
                "Rule out pneumonia, pneumothorax",
                "Mucous plugging/atelectasis possible"
            ]
        },
        
        // PULMONARY EMBOLISM Workup
        pulmonaryEmbolism: {
            dDimer: [
                "D-dimer: {value} (elevated >500 ng/mL)",
                "Negative D-dimer rules out PE in low/moderate pretest probability",
                "Do NOT use in high pretest probability - go straight to imaging"
            ],
            ctpa: [
                "Filling defect in pulmonary artery - diagnostic",
                "Sensitivity 94%, Specificity 96%",
                "May show RV enlargement (RV:LV ratio >0.9)"
            ],
            ecg: [
                "Sinus tachycardia (most common)",
                "S1Q3T3 (classic but uncommon)",
                "Right heart strain pattern",
                "T wave inversions V1-V4",
                "Right bundle branch block",
                "Low voltage"
            ],
            echo: [
                "RV dilation",
                "RV hypokinesis",
                "McConnell's sign (RV free wall akinesis with apical sparing)",
                "D-shaped septum",
                "TR with elevated RVSP"
            ],
            lowerExtremityDoppler: [
                "DVT present - supports PE diagnosis",
                "Non-compressible vein segment"
            ],
            preTestProbability: {
                wellsCriteria: [
                    "Clinical signs of DVT (+3)",
                    "PE most likely diagnosis (+3)",
                    "Heart rate >100 (+1.5)",
                    "Immobilization or surgery in past 4 weeks (+1.5)",
                    "Previous DVT/PE (+1.5)",
                    "Hemoptysis (+1)",
                    "Malignancy (+1)"
                ],
                perc: [
                    "Age <50",
                    "HR <100",
                    "O2 sat ≥95%",
                    "No unilateral leg swelling",
                    "No hemoptysis",
                    "No recent surgery/trauma",
                    "No prior DVT/PE",
                    "No estrogen use"
                ]
            }
        },
        
        // PNEUMOTHORAX Workup
        pneumothorax: {
            cxr: [
                "Visceral pleural line visible",
                "Absence of lung markings beyond pleural line",
                "Upright expiratory film may enhance visibility",
                "Tension: mediastinal shift away from affected side"
            ],
            ultrasound: [
                "Absence of lung sliding",
                "Absence of B-lines",
                "Lung point (diagnostic - transition zone)",
                "Barcode sign on M-mode"
            ]
        }
    },
    
    // ============================================================
    // DIFFERENTIAL DIAGNOSIS BY PRESENTATION
    // From UpToDate Table 1: Differential Diagnosis of Acute Dyspnea
    // ============================================================
    differentialsByCategory: {
        cardiac: [
            "Acute coronary syndrome",
            "Acute decompensated heart failure",
            "Cardiac arrhythmia (atrial fibrillation, SVT, VT)",
            "Cardiac tamponade",
            "Valvular disease (acute mitral regurgitation, aortic stenosis)",
            "Myocarditis",
            "Cardiomyopathy (stress/Takotsubo, dilated)"
        ],
        pulmonary: [
            "Pulmonary embolism",
            "Pneumonia",
            "COPD exacerbation",
            "Asthma exacerbation",
            "Pneumothorax",
            "Pleural effusion",
            "ARDS",
            "Pulmonary fibrosis",
            "Lung cancer"
        ],
        upperAirway: [
            "Foreign body aspiration",
            "Angioedema",
            "Anaphylaxis",
            "Epiglottitis",
            "Laryngeal edema"
        ],
        neuromuscular: [
            "Guillain-Barré syndrome",
            "Myasthenia gravis crisis",
            "ALS",
            "Botulism"
        ],
        metabolic: [
            "Metabolic acidosis (DKA, lactic acidosis, toxic ingestion)",
            "Severe anemia",
            "Thyrotoxicosis"
        ],
        toxicologic: [
            "Carbon monoxide poisoning",
            "Methemoglobinemia",
            "Aspirin toxicity",
            "Organophosphate poisoning"
        ],
        other: [
            "Panic attack/anxiety (diagnosis of exclusion)",
            "Obesity hypoventilation syndrome"
        ]
    },
    
    // ============================================================
    // RISK FACTOR RESPONSE TEMPLATES
    // ============================================================
    riskFactorResponses: {
        
        // Cardiac history
        cardiacHistory: {
            priorHF: [
                "Yes, I have heart failure - I was diagnosed {duration} ago.",
                "Yes, my ejection fraction is about {percent}%.",
                "Yes, I've been hospitalized for heart failure {number} times.",
                "No, I've never been told I have heart failure."
            ],
            priorMI: [
                "Yes, I had a heart attack {duration} ago.",
                "Yes, I have stents in my heart.",
                "Yes, I had bypass surgery {duration} ago.",
                "No, I've never had a heart attack."
            ],
            valvularDisease: [
                "Yes, I have a leaky heart valve.",
                "Yes, I have aortic stenosis.",
                "No, not that I know of."
            ]
        },
        
        // Pulmonary history
        pulmonaryHistory: {
            copd: [
                "Yes, I have COPD - diagnosed {duration} ago.",
                "Yes, I'm on {number} liters of oxygen at home.",
                "I have emphysema and chronic bronchitis.",
                "No, I don't have COPD."
            ],
            asthma: [
                "Yes, I've had asthma since childhood.",
                "Yes, I developed asthma as an adult.",
                "I've been intubated for asthma {number} times before.",
                "No asthma."
            ],
            priorPE: [
                "Yes, I had a blood clot in my lungs {duration} ago.",
                "Yes, I'm on blood thinners for prior clots.",
                "No, I've never had a pulmonary embolism."
            ]
        },
        
        // Social history
        smoking: [
            "Yes, I smoke {amount} packs per day for {years} years.",
            "I quit {duration} ago, but I smoked for {years} years.",
            "Yes, I smoke occasionally.",
            "No, I've never smoked."
        ],
        alcohol: [
            "Yes, I drink {amount} drinks per day.",
            "I drink socially, maybe {frequency}.",
            "No, I don't drink alcohol."
        ],
        drugs: [
            "Yes, I use cocaine occasionally.",
            "I use IV drugs.",
            "I use marijuana.",
            "No, I don't use any recreational drugs."
        ],
        
        // Medications
        medications: {
            cardiac: [
                "I take metoprolol, lisinopril, and furosemide.",
                "I'm on a lot of heart medications - let me list them...",
                "I'm supposed to take diuretics but I ran out.",
                "I haven't been taking my heart medications regularly."
            ],
            respiratory: [
                "I use albuterol and an inhaled steroid.",
                "I'm on a nebulizer at home.",
                "I use oxygen at home.",
                "I take my inhalers but they're not helping."
            ],
            anticoagulation: [
                "I'm on warfarin/Coumadin.",
                "I take apixaban/Eliquis.",
                "I'm supposed to be on blood thinners but I stopped taking them.",
                "No blood thinners."
            ]
        },
        
        // Diet and adherence
        adherence: {
            salt: [
                "I try to watch my salt but I ate something salty yesterday.",
                "I've been eating more sodium lately.",
                "I'm very careful about salt intake.",
                "I don't really watch my salt."
            ],
            fluid: [
                "I've been drinking a lot of fluids.",
                "I try to limit fluids but it's hard.",
                "I drink about {amount} liters per day."
            ],
            medicationAdherence: [
                "I take all my medications as prescribed.",
                "I miss doses sometimes when I forget.",
                "I ran out of my {medication} about a week ago.",
                "I stopped taking that medication because of side effects."
            ]
        }
    },
    
    // ============================================================
    // NEGATIVE RESPONSE TEMPLATES (for ruling out diagnoses)
    // ============================================================
    negativeResponses: {
        noOrthopnea: [
            "No, I can lie flat without any problems.",
            "Lying down doesn't make it worse."
        ],
        noPND: [
            "No, I don't wake up at night short of breath.",
            "I sleep through the night okay."
        ],
        noEdema: [
            "No, my ankles aren't swollen.",
            "No leg swelling."
        ],
        noFever: [
            "No fever that I know of.",
            "I haven't had any chills or sweats."
        ],
        noChestPain: [
            "No chest pain or discomfort.",
            "It's just the breathing - no chest pain."
        ],
        noHemoptysis: [
            "No, I haven't coughed up any blood.",
            "No blood in my sputum."
        ],
        noLegPain: [
            "No, my legs feel fine.",
            "No calf pain or swelling."
        ]
    },
    
    // ============================================================
    // HELPER FUNCTIONS
    // ============================================================
    
    /**
     * Get a random response from an array of options
     */
    getRandomResponse: function(responseArray) {
        if (!responseArray || responseArray.length === 0) return "";
        return responseArray[Math.floor(Math.random() * responseArray.length)];
    },
    
    /**
     * Get HPI response for a specific diagnosis and category
     */
    getHPIResponse: function(diagnosis, category) {
        if (this.hpiTemplates[diagnosis] && this.hpiTemplates[diagnosis][category]) {
            return this.getRandomResponse(this.hpiTemplates[diagnosis][category]);
        }
        return "";
    },
    
    /**
     * Get physical exam findings for a diagnosis
     */
    getExamFindings: function(diagnosis, category) {
        if (this.physicalExamFindings[diagnosis] && this.physicalExamFindings[diagnosis][category]) {
            return this.physicalExamFindings[diagnosis][category];
        }
        return [];
    },
    
    /**
     * Get workup results for a diagnosis
     */
    getWorkupResults: function(diagnosis, testType) {
        if (this.workupResults[diagnosis] && this.workupResults[diagnosis][testType]) {
            return this.workupResults[diagnosis][testType];
        }
        return [];
    },
    
    /**
     * Get risk factor response
     */
    getRiskFactorResponse: function(category, factor, isPositive) {
        if (this.riskFactorResponses[category] && this.riskFactorResponses[category][factor]) {
            const responses = this.riskFactorResponses[category][factor];
            // Filter for positive or negative responses based on isPositive flag
            // For simplicity, return random from array
            return this.getRandomResponse(responses);
        }
        return "";
    },
    
    /**
     * Match question to appropriate response template
     * This function can be expanded to intelligently parse student questions
     */
    matchQuestion: function(questionText, caseContext) {
        const lowerQ = questionText.toLowerCase();
        
        // Onset questions
        if (lowerQ.includes("when") && (lowerQ.includes("start") || lowerQ.includes("begin"))) {
            return this.getHPIResponse(caseContext.diagnosis, 'onset');
        }
        
        // Quality questions
        if (lowerQ.includes("feel like") || lowerQ.includes("describe") || lowerQ.includes("what kind")) {
            return this.getHPIResponse(caseContext.diagnosis, 'quality');
        }
        
        // Severity questions
        if (lowerQ.includes("how bad") || lowerQ.includes("scale") || lowerQ.includes("severity") || lowerQ.includes("1 to 10")) {
            return this.getHPIResponse(caseContext.diagnosis, 'severity');
        }
        
        // Aggravating questions
        if (lowerQ.includes("worse") || lowerQ.includes("aggravat") || lowerQ.includes("trigger")) {
            return this.getHPIResponse(caseContext.diagnosis, 'aggravating');
        }
        
        // Alleviating questions
        if (lowerQ.includes("better") || lowerQ.includes("help") || lowerQ.includes("relieve") || lowerQ.includes("alleviat")) {
            return this.getHPIResponse(caseContext.diagnosis, 'alleviating');
        }
        
        // Associated symptoms
        if (lowerQ.includes("other symptoms") || lowerQ.includes("else") || lowerQ.includes("associated")) {
            return this.getHPIResponse(caseContext.diagnosis, 'associated');
        }
        
        // Orthopnea questions
        if (lowerQ.includes("lie flat") || lowerQ.includes("lying down") || lowerQ.includes("pillow")) {
            if (caseContext.diagnosis === 'adhf' || caseContext.diagnosis === 'acutePulmonaryEdema') {
                return this.getHPIResponse(caseContext.diagnosis, 'orthopnea');
            } else {
                return this.getRandomResponse(this.negativeResponses.noOrthopnea);
            }
        }
        
        // PND questions
        if (lowerQ.includes("wake up") && lowerQ.includes("night") || lowerQ.includes("paroxysmal")) {
            if (caseContext.diagnosis === 'adhf') {
                return this.getHPIResponse('adhf', 'pnd');
            } else {
                return this.getRandomResponse(this.negativeResponses.noPND);
            }
        }
        
        // Edema questions
        if (lowerQ.includes("swell") || lowerQ.includes("edema") || lowerQ.includes("ankle")) {
            if (caseContext.diagnosis === 'adhf') {
                return this.getHPIResponse('adhf', 'edema');
            } else if (caseContext.diagnosis === 'pulmonaryEmbolism') {
                return this.riskFactorResponses.pulmonaryEmbolism?.riskFactorResponses?.legSymptoms 
                    ? this.getRandomResponse(this.hpiTemplates.pulmonaryEmbolism.riskFactorResponses.legSymptoms) 
                    : "";
            } else {
                return this.getRandomResponse(this.negativeResponses.noEdema);
            }
        }
        
        // Cough and sputum questions
        if (lowerQ.includes("cough") || lowerQ.includes("sputum") || lowerQ.includes("phlegm")) {
            if (caseContext.diagnosis === 'pneumonia') {
                return this.getHPIResponse('pneumonia', 'sputum');
            } else if (caseContext.diagnosis === 'copd') {
                return this.getHPIResponse('copd', 'sputumChange');
            }
        }
        
        // Fever questions
        if (lowerQ.includes("fever") || lowerQ.includes("temperature") || lowerQ.includes("chills")) {
            if (caseContext.diagnosis === 'pneumonia') {
                return this.getRandomResponse(this.hpiTemplates.pneumonia.associated);
            } else {
                return this.getRandomResponse(this.negativeResponses.noFever);
            }
        }
        
        // Smoking history
        if (lowerQ.includes("smoke") || lowerQ.includes("tobacco") || lowerQ.includes("cigarette")) {
            return this.getRandomResponse(this.riskFactorResponses.smoking);
        }
        
        // Cardiac history
        if (lowerQ.includes("heart") && (lowerQ.includes("problem") || lowerQ.includes("condition") || lowerQ.includes("history"))) {
            return this.getRandomResponse(this.riskFactorResponses.cardiacHistory.priorHF);
        }
        
        // Prior intubation (asthma)
        if (lowerQ.includes("intubat") || lowerQ.includes("ventilator") || lowerQ.includes("icu")) {
            if (caseContext.diagnosis === 'asthma') {
                return this.getRandomResponse(this.hpiTemplates.asthma.priorIntubation);
            }
        }
        
        // Medication questions
        if (lowerQ.includes("medication") || lowerQ.includes("medicine") || lowerQ.includes("taking")) {
            return this.getRandomResponse(this.riskFactorResponses.medications.cardiac);
        }
        
        // Default - return generic associated symptom
        return this.getHPIResponse(caseContext.diagnosis, 'associated');
    }
};

// Export for use in ReasonDx platform
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DyspneaTemplates;
}
