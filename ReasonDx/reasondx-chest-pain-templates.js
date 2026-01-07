/**
 * ReasonDx Chest Pain Case Answer Templates
 * Version 1.0 | December 2024
 * 
 * Based on: UpToDate "Approach to the adult with nontraumatic chest pain in the emergency department"
 * 
 * This file provides structured answer templates for chest pain presentations.
 * Cases reference these templates and customize specific answers as needed.
 */

const ChestPainCaseTemplates = (function() {
    'use strict';

    // ============================================================
    // LIFE-THREATENING DIFFERENTIALS FOR CHEST PAIN
    // (From UpToDate Table 1)
    // ============================================================
    const lifeThreatening = [
        "Acute Coronary Syndrome",
        "Acute Aortic Dissection", 
        "Pulmonary Embolism",
        "Tension Pneumothorax",
        "Pericardial Tamponade",
        "Mediastinitis (esophageal rupture)",
        "Myocarditis",
        "Stress (Takotsubo) Cardiomyopathy",
        "Perforated Peptic Ulcer"
    ];

    // ============================================================
    // ACS CLASSIFICATION (From UpToDate: Terminology and Classification)
    // ============================================================
    const acsClassification = {
        stemi: {
            definition: "ST-elevation MI - requires immediate reperfusion (PCI or thrombolytics)",
            ecg: "ST-elevation in contiguous leads, new LBBB, posterior MI pattern, de Winter sign"
        },
        nstemi: {
            definition: "Non-ST-elevation MI - elevated troponin with ischemic symptoms",
            ecg: "ST-depression, T-wave inversions, or may be normal"
        },
        unstableAngina: {
            definition: "Rare in era of high-sensitivity troponin - most now classified as NSTEMI",
            subtypes: [
                "New onset angina (especially at rest or with minimal exertion)",
                "Rest angina (particularly if prolonged >20 min)",
                "Early post-MI angina (within 48 hours)",
                "Post-revascularization angina",
                "Crescendo pattern (increasing frequency/severity)"
            ]
        }
    };

    // ============================================================
    // FEATURES LESS TYPICAL OF ACS (From UpToDate)
    // Important: 22% with sharp/stabbing pain had ACS, 13% with pleuritic pain had ACS
    // These features make ACS LESS likely but do NOT exclude it
    // ============================================================
    const featuresLessTypicalOfACS = [
        "Pleuritic pain - sharp pain with respiratory movements or cough",
        "Primary location in mid or lower abdomen",
        "Discomfort localized with one finger",
        "Discomfort reproduced by movement or palpation",
        "Constant pain lasting for days",
        "Fleeting pains lasting a few seconds or less",
        "Pain radiating to lower extremities",
        "Pain above the mandible (jaw)",
        "Sharp, knife-like, stabbing pain",
        "Pins and needles sensation"
    ];

    // ============================================================
    // HPI TEMPLATES BY DIAGNOSIS
    // ============================================================
    const hpiTemplates = {
        
        // ACUTE CORONARY SYNDROME (ACS/MI)
        // Based on UpToDate: "Initial evaluation and management of suspected acute coronary syndrome"
        // Key points: Pain is often "discomfort" not "pain", gradual onset, exacerbated by activity
        // Highest risk: radiation to both arms, associated with diaphoresis/nausea/vomiting
        acs: {
            onset: [
                // Gradual onset is typical for ACS
                "It started about {duration} ago while I was {activity}.",
                "It came on gradually, maybe over 10-15 minutes, while I was walking.",
                "I noticed it this morning when I woke up - maybe {duration} ago.",
                "It came on gradually over the past {duration}.",
                "It started while I was shoveling snow - came on gradually.",
                "I was exercising and it started coming on slowly.",
                "It began early this morning - that's when it seems worst."
            ],
            location: [
                // Non-focal, diffuse - patient often can't point with one finger
                "Right here in the center of my chest. [places whole hand on sternum]",
                "It's like a band across my chest - hard to point to exactly.",
                "Mostly in my chest, but it goes to my left arm.",
                "In my chest and up into my jaw.",
                "All across here [gestures across chest] - I can't really point to one spot.",
                "It's hard to localize - just my whole chest area.",
                "Center of my chest, but it feels like it spreads out."
            ],
            quality: [
                // Discomfort, pressure, tightness - NOT sharp, stabbing, knife-like
                "It's like a pressure, like someone sitting on my chest.",
                "A heavy, squeezing feeling - not really a sharp pain.",
                "It's tight, like a band around my chest.",
                "More like pressure or discomfort than actual pain.",
                "Like an elephant sitting on my chest.",
                "It's a crushing feeling.",
                "Like my chest is being squeezed in a vise.",
                "A heaviness - like a weight on my chest.",
                "Constricting, strangling feeling.",
                "It's hard to describe - more of a fullness or tightness.",
                "Like really bad heartburn but worse.",
                "A dull ache that won't go away."
            ],
            radiation: [
                // Radiation to upper extremities, especially BOTH arms, is highly suggestive
                "Yes, down my left arm to my wrist.",
                "Both arms actually - that's what scared me.",
                "To my jaw and neck on the left side.",
                "Into my back between my shoulder blades.",
                "Down my left arm and into my fingers.",
                "To my shoulders - both of them.",
                "Up into my throat and jaw - like a toothache almost.",
                "My left arm feels heavy and tingly.",
                "No, it stays in one place.",
                "Into my upper back."
            ],
            severity: [
                "Maybe a 7 or 8 out of 10.",
                "It's pretty bad - 8 out of 10.",
                "About a 6, but it's been getting worse.",
                "The worst chest discomfort I've ever had.",
                "I'd say a 7 - it's really uncomfortable.",
                "Probably an 8 - I've never felt anything like this."
            ],
            timing: [
                // ACS typically lasts >20-30 minutes, unlike stable angina (2-5 min)
                "It's been constant for {duration} - hasn't gone away.",
                "It's been there for over 30 minutes now.",
                "It comes and goes, but mostly it's there - waxes and wanes.",
                "It was there, went away for a bit, now it's back worse.",
                "It's been constant since it started.",
                "It lasted about 20 minutes, went away, now it's back."
            ],
            aggravating: [
                // Exertion, activity, emotional stress, cold
                "Walking makes it worse.",
                "It got worse when I was climbing stairs.",
                "Exertion definitely makes it worse.",
                "Physical activity brings it on.",
                "Emotional stress seems to trigger it too.",
                "It started when I was out in the cold.",
                "Nothing specific makes it worse - it's just there."
            ],
            alleviating: [
                // Nitro may help temporarily; rest may help but doesn't resolve it
                // Important: Nitro response does NOT distinguish cardiac from non-cardiac
                "Resting helps a little but it doesn't go away completely.",
                "Nothing really makes it better.",
                "I tried antacids but they didn't help.",
                "I took my nitroglycerin - it helped a little but it came back.",
                "Sitting still is a little better than moving.",
                "Rest helps some but it's still there."
            ],
            associated: [
                // Diaphoresis, nausea/vomiting have highest relative risk
                "I'm sweating a lot - like drenched - and feel nauseous.",
                "I feel short of breath.",
                "I feel like I might pass out.",
                "I'm nauseous and broke out in a cold sweat.",
                "My left arm feels numb and tingly.",
                "I feel anxious, like something bad is happening.",
                "I've been belching a lot.",
                "I feel clammy and my skin is cold.",
                "I threw up once.",
                "I feel lightheaded and weak.",
                "I'm having trouble catching my breath."
            ],
            
            // Atypical presentations - more common in elderly, females, diabetics
            // 1/3 of MI patients have NO chest pain (NRMI-II data)
            atypical: [
                "I just don't feel right. I'm more tired than usual and short of breath.",
                "Mainly just nausea and I'm sweating for no reason.",
                "I feel weak and a little dizzy. Not really chest pain.",
                "My jaw has been aching and I feel short of breath.",
                "I thought it was indigestion but antacids aren't helping.",
                "I just feel exhausted and can't catch my breath.",
                "I feel like I might faint. No chest pain really.",
                "My shoulder and arm hurt but not my chest.",
                "I've just had this feeling of doom - something's wrong.",
                "Mainly palpitations and feeling unwell.",
                "I just feel really fatigued and nauseated."
            ],
            
            // Prior MI comparison - important question per UpToDate
            priorMIComparison: [
                "Yes, this feels just like when I had my heart attack before.",
                "Similar but maybe not quite as bad as my last one.",
                "It's the same feeling I had before my stents.",
                "This is exactly what it felt like before.",
                "No, my last heart attack felt different."
            ],
            
            // Levine sign - clenched fist over sternum
            levineSign: "The patient places a clenched fist over the center of their chest when describing the discomfort."
        },

        // AORTIC DISSECTION
        aorticDissection: {
            onset: [
                "It started suddenly - one second I was fine, the next I had terrible pain.",
                "It came on all at once, like something ripped inside me.",
                "Suddenly, out of nowhere. Worst pain of my life instantly."
            ],
            location: [
                "Started in my chest and went straight through to my back.",
                "Between my shoulder blades mostly.",
                "My chest and back at the same time.",
                "It started in my chest and moved down into my belly."
            ],
            quality: [
                "Tearing, ripping pain.",
                "Sharp and tearing - like something is ripping apart.",
                "The worst sharp pain imaginable.",
                "Like being stabbed and torn at the same time."
            ],
            radiation: [
                "It moved - started in my chest and went to my back, then my belly.",
                "Down my back, like it's traveling.",
                "To my back between my shoulder blades."
            ],
            severity: [
                "10 out of 10. Worst pain of my life.",
                "Absolutely unbearable - 10 out of 10.",
                "Off the charts. I've never felt anything like this."
            ],
            associated: [
                "I felt like I was going to pass out.",
                "My left arm feels weak.",
                "I can't feel my legs as well.",
                "I lost vision in one eye for a minute.",
                "I felt like I was going to die."
            ]
        },

        // PULMONARY EMBOLISM
        pe: {
            onset: [
                "It came on suddenly when I stood up.",
                "I woke up with it this morning.",
                "Started a few hours ago, getting worse.",
                "Sudden - I was just sitting and it hit me."
            ],
            location: [
                "On the side of my chest. [points to lateral chest]",
                "Right here. [points to one side]",
                "In my chest, more on the right/left side."
            ],
            quality: [
                "Sharp, stabbing pain.",
                "It hurts when I breathe.",
                "Sharp, worse with deep breaths.",
                "Like a knife when I take a breath."
            ],
            aggravating: [
                "It hurts more when I take a deep breath.",
                "Breathing in makes it worse.",
                "Coughing is terrible - makes it so much worse."
            ],
            associated: [
                "I'm really short of breath.",
                "I can't catch my breath.",
                "I coughed up a little blood.",
                "My heart is racing.",
                "I feel like I can't get enough air.",
                "My leg has been swollen and painful."
            ],
            riskFactors: [
                "I was on a long flight last week.",
                "I just had surgery a few weeks ago.",
                "I've been in bed a lot lately recovering from {condition}.",
                "I'm on birth control pills.",
                "I had a blood clot before.",
                "I have cancer and I'm on chemotherapy."
            ]
        },

        // PNEUMOTHORAX
        pneumothorax: {
            onset: [
                "It started suddenly while I was just sitting there.",
                "I was at rest and suddenly felt this sharp pain.",
                "It came on out of nowhere."
            ],
            location: [
                "On one side of my chest. [points to affected side]",
                "Right here, on the right/left side."
            ],
            quality: [
                "Sharp, stabbing.",
                "Sharp pain that won't go away."
            ],
            associated: [
                "I'm having trouble breathing.",
                "Short of breath, can't take a deep breath.",
                "It's hard to breathe."
            ]
        },

        // PERICARDITIS
        pericarditis: {
            onset: [
                "It started a couple days ago.",
                "I've had it for a few days, getting worse.",
                "Started after I had that cold last week."
            ],
            location: [
                "In the center of my chest, maybe a little to the left.",
                "Behind my breastbone."
            ],
            quality: [
                "Sharp pain.",
                "It's sharp, not like pressure."
            ],
            aggravating: [
                "Lying down makes it much worse.",
                "It hurts when I take a deep breath.",
                "Worse when I lie flat."
            ],
            alleviating: [
                "Sitting up and leaning forward helps.",
                "It's better when I lean forward like this."
            ],
            associated: [
                "I had a viral infection last week.",
                "I've had a low fever.",
                "I had the flu about a week ago."
            ]
        },

        // GERD/ESOPHAGEAL
        gerd: {
            onset: [
                "It usually happens after I eat.",
                "It's been going on for weeks, off and on.",
                "It started after dinner."
            ],
            location: [
                "Right behind my breastbone.",
                "In my chest, but kind of burning.",
                "From my stomach up into my chest."
            ],
            quality: [
                "Burning feeling.",
                "Like heartburn but worse.",
                "Burning, like acid."
            ],
            aggravating: [
                "Eating makes it worse, especially spicy food.",
                "It's worse when I lie down after eating.",
                "Coffee and alcohol make it worse."
            ],
            alleviating: [
                "Antacids help.",
                "Tums helps a bit.",
                "Sitting up helps."
            ],
            associated: [
                "I sometimes have a sour taste in my mouth.",
                "I've been burping a lot.",
                "Sometimes food comes back up."
            ]
        },

        // MUSCULOSKELETAL
        musculoskeletal: {
            onset: [
                "I think I strained something at the gym.",
                "It started after I was moving furniture.",
                "I've been coughing a lot and now my chest hurts."
            ],
            location: [
                "Right here on my chest wall. [points to specific spot]",
                "On the side of my chest.",
                "Here where my ribs are."
            ],
            quality: [
                "Sharp when I move a certain way.",
                "Sore, like a muscle strain.",
                "It's tender to touch."
            ],
            aggravating: [
                "Moving my arm makes it worse.",
                "It hurts when I press on it.",
                "Certain positions make it worse.",
                "Taking a deep breath hurts."
            ],
            alleviating: [
                "Ibuprofen helps.",
                "Resting helps.",
                "It's better if I don't move."
            ]
        },

        // ANXIETY/PANIC
        anxiety: {
            onset: [
                "It comes on suddenly, usually when I'm stressed.",
                "It started when I was in a crowded place.",
                "I've had this before during panic attacks."
            ],
            location: [
                "All over my chest.",
                "Hard to pinpoint exactly."
            ],
            quality: [
                "Tight, like I can't breathe.",
                "Like my chest is being squeezed.",
                "Hard to describe - just uncomfortable."
            ],
            associated: [
                "My heart races and I feel like I can't breathe.",
                "I feel like I'm going to die.",
                "My hands get tingly.",
                "I feel dizzy and lightheaded.",
                "I start sweating and feel like I need to escape."
            ],
            history: [
                "I've had panic attacks before.",
                "I have anxiety disorder.",
                "This happens when I'm really stressed."
            ]
        }
    };

    // ============================================================
    // RISK FACTOR QUESTIONS AND ANSWERS
    // Based on UpToDate guidance on historical features
    // ============================================================
    const riskFactorResponses = {
        
        // Cardiac Risk Factors - increase likelihood of ACS
        cardiac: {
            "high blood pressure": {
                positive: [
                    "Yes, I have high blood pressure. I take medication for it.",
                    "Yes, but it's usually well controlled.",
                    "Yeah, I've had it for about 10 years.",
                    "My blood pressure runs a little high."
                ],
                negative: [
                    "No, my blood pressure has always been normal.",
                    "No, I just had it checked recently and it was fine."
                ]
            },
            "diabetes": {
                positive: [
                    "Yes, type 2 diabetes. I'm on metformin.",
                    "Yes, I've been diabetic for several years.",
                    "Yes, I control it with diet and medication.",
                    "I'm pre-diabetic - borderline."
                ],
                negative: [
                    "No, no diabetes.",
                    "No, my blood sugar has always been normal."
                ]
            },
            "high cholesterol": {
                positive: [
                    "Yes, I take a statin for it.",
                    "Yeah, it's been high. I'm on medication.",
                    "Yes, runs in my family.",
                    "My LDL has been high."
                ],
                negative: [
                    "No, my cholesterol is fine.",
                    "No, I had it checked recently."
                ]
            },
            "family history of heart disease": {
                positive: [
                    "My father had a heart attack at 55.",
                    "Yes, heart disease runs in my family. Dad and grandfather both had bypasses.",
                    "My mother died of a heart attack.",
                    "My brother had a heart attack at 50.",
                    "My dad had his first heart attack in his 40s."
                ],
                negative: [
                    "No, no heart problems in my family.",
                    "Not that I know of.",
                    "Everyone in my family lived to old age without heart problems."
                ]
            },
            "previous heart attack": {
                positive: [
                    "Yes, I had one about 5 years ago. Had stents put in.",
                    "Yes, I had a heart attack and bypass surgery.",
                    "I had a small heart attack last year.",
                    "I had an MI 3 years ago.",
                    "This feels just like my last heart attack."
                ],
                negative: [
                    "No, never had a heart attack.",
                    "No, this is all new for me."
                ]
            },
            "previous stents or bypass": {
                positive: [
                    "I had 2 stents put in about 3 years ago.",
                    "I had bypass surgery 5 years ago - three vessels.",
                    "I had a stent last year.",
                    "I've had multiple stents over the years.",
                    "I had bypass surgery and then a stent later."
                ],
                negative: [
                    "No, never had any heart procedures.",
                    "No, no stents or bypass."
                ]
            },
            "smoking": {
                positive: [
                    "Yes, I smoke about a pack a day.",
                    "I quit 2 years ago but smoked for 30 years.",
                    "Half a pack a day for the last 20 years.",
                    "I smoked for 25 years, quit 5 years ago."
                ],
                negative: [
                    "No, never smoked.",
                    "No, I've never smoked."
                ]
            },
            // IMPORTANT: Cocaine/amphetamines increase ACS risk regardless of other factors
            "cocaine use": {
                positive: [
                    "Yeah, I used some cocaine earlier today.",
                    "I did some coke at a party last night.",
                    "I use cocaine occasionally.",
                    "I used cocaine about 2 hours ago.",
                    "I've been using cocaine regularly."
                ],
                negative: [
                    "No, never.",
                    "No, I don't use drugs."
                ]
            },
            "amphetamine or meth use": {
                positive: [
                    "I took some meth earlier.",
                    "I use Adderall - more than prescribed sometimes.",
                    "I've been using methamphetamine.",
                    "I took some speed at a party."
                ],
                negative: [
                    "No, nothing like that.",
                    "No stimulants."
                ]
            },
            "other vascular disease": {
                positive: [
                    "I had a stroke 2 years ago.",
                    "I have peripheral artery disease - poor circulation in my legs.",
                    "I had a TIA last year.",
                    "I have a carotid blockage they're watching."
                ],
                negative: [
                    "No, no strokes or circulation problems.",
                    "No other vascular issues."
                ]
            }
        },

        // PE Risk Factors
        pe: {
            "recent surgery": {
                positive: [
                    "Yes, I had knee surgery 2 weeks ago.",
                    "I had my hip replaced last month.",
                    "I had abdominal surgery 3 weeks ago."
                ],
                negative: [
                    "No, no recent surgeries.",
                    "Not recently, no."
                ]
            },
            "recent immobilization": {
                positive: [
                    "I was on a long flight last week - about 10 hours.",
                    "I've been on bedrest recovering from surgery.",
                    "I was in the hospital for a week and didn't move much."
                ],
                negative: [
                    "No, I've been active.",
                    "No long trips or bedrest."
                ]
            },
            "previous blood clot": {
                positive: [
                    "Yes, I had a DVT in my leg a few years ago.",
                    "I had a pulmonary embolism before.",
                    "I've had blood clots - I'm supposed to be on blood thinners."
                ],
                negative: [
                    "No, never had a blood clot.",
                    "No history of clots."
                ]
            },
            "cancer": {
                positive: [
                    "Yes, I'm being treated for cancer.",
                    "I have cancer - I'm on chemotherapy.",
                    "I was diagnosed with cancer recently."
                ],
                negative: [
                    "No cancer.",
                    "No, no history of cancer."
                ]
            },
            "birth control or hormones": {
                positive: [
                    "Yes, I'm on birth control pills.",
                    "I take hormone replacement therapy.",
                    "I'm on estrogen."
                ],
                negative: [
                    "No, I'm not on any hormones.",
                    "No birth control pills."
                ]
            },
            "leg swelling or pain": {
                positive: [
                    "Actually, my left leg has been swollen and painful for a few days.",
                    "My calf has been hurting and looks swollen.",
                    "Yes, my leg has been bothering me - it's swollen."
                ],
                negative: [
                    "No, my legs are fine.",
                    "No swelling or leg pain."
                ]
            }
        },

        // Aortic Dissection Risk Factors
        aorticDissection: {
            "marfan syndrome": {
                positive: [
                    "Yes, I have Marfan syndrome.",
                    "I've been told I have a connective tissue disorder."
                ],
                negative: [
                    "No, nothing like that."
                ]
            },
            "bicuspid aortic valve": {
                positive: [
                    "Yes, I was born with a bicuspid aortic valve.",
                    "I have a heart valve problem - bicuspid valve."
                ],
                negative: [
                    "No, I don't think so."
                ]
            },
            "known aortic aneurysm": {
                positive: [
                    "Yes, they told me I have an aortic aneurysm. They've been watching it.",
                    "I know I have an enlarged aorta."
                ],
                negative: [
                    "No, not that I know of."
                ]
            },
            "previous aortic surgery": {
                positive: [
                    "Yes, I had aortic surgery a few years ago.",
                    "I had my aorta repaired."
                ],
                negative: [
                    "No, no aortic surgery."
                ]
            }
        }
    };

    // ============================================================
    // NEGATIVE RESPONSES (Important to rule out other diagnoses)
    // ============================================================
    const negativeResponses = {
        
        // For ACS - things that argue against it
        acsNegative: {
            "pleuritic pain": "The pain doesn't change when I breathe.",
            "positional": "Position doesn't affect it.",
            "reproducible": "Pushing on my chest doesn't make it worse.",
            "sharp/stabbing": "It's not really sharp - more like pressure."
        },

        // For PE - things that argue against it
        peNegative: {
            "no dyspnea": "I'm not really short of breath.",
            "no leg symptoms": "No, my legs are fine - no swelling or pain.",
            "no hemoptysis": "No, I haven't coughed up any blood.",
            "no risk factors": "No recent travel, surgery, or bedrest."
        },

        // For Dissection - things that argue against it
        dissectionNegative: {
            "gradual onset": "It came on gradually, not suddenly.",
            "not severe": "It's uncomfortable but not the worst pain ever.",
            "no tearing quality": "I wouldn't describe it as tearing.",
            "no radiation to back": "No, it doesn't go to my back."
        },

        // General negatives to help narrow differential
        generalNegative: {
            "fever": "No, no fever.",
            "cough": "No cough.",
            "recent illness": "No, I've been healthy.",
            "trauma": "No, no injury or trauma.",
            "similar episodes": "No, this has never happened before."
        }
    };

    // ============================================================
    // PHYSICAL EXAM EXPECTED FINDINGS BY DIAGNOSIS
    // Based on UpToDate: "Initial evaluation and management of suspected ACS"
    // ============================================================
    const expectedExamFindings = {
        acs: {
            // ACS characterized by subtle findings or normal exam
            likely: [
                "Diaphoresis (associated with increased likelihood of ACS)",
                "Anxious appearance",
                "Normal or mildly elevated BP (sympathetic activation)",
                "Tachycardia (reflex sympathetic activation)",
                "Cool, clammy skin"
            ],
            possible: [
                "S3 gallop (LV dysfunction)",
                "S4 gallop",
                "Paradoxically split S2 (delayed LV relaxation)",
                "New systolic murmur (papillary muscle dysfunction - OMINOUS)",
                "New or changed mitral regurgitation murmur",
                "Bilateral crackles (pulmonary edema from LV dysfunction)",
                "JVD (right-sided failure or RV infarct)",
                "Abnormal precordial impulse (dyskinetic area)",
                "Transient RV heave (RV dysfunction)"
            ],
            cardiogenicShock: [
                "Hypotension",
                "Tachycardia",
                "Impaired cognition",
                "Cool, clammy, pale, ashen skin",
                "Pulmonary crackles",
                "Oliguria"
            ],
            note: "ACS is characterized by SUBTLE findings or NORMAL exam. Many patients have none of these features."
        },

        aorticDissection: {
            likely: [
                "Severe distress/anxiety",
                "Hypertension (most common)",
                "Tachycardia"
            ],
            possible: [
                "Blood pressure differential >20 mmHg between arms",
                "Pulse deficit (absence of proximal extremity or carotid pulse)",
                "Aortic regurgitation murmur (32% in IRAD registry)",
                "Signs of shock/cardiac tamponade (8%)",
                "Acute heart failure (7%)",
                "Neurologic deficits (18-30%): Horner syndrome, paraparesis, paraplegia, altered mental status, stroke (5%)",
                "Signs of end-organ ischemia (mesenteric, renal, limb)"
            ],
            note: "Pulse deficit occurs in only 15% of cases. 30% of patients may have NORMAL exam initially."
        },

        pe: {
            likely: [
                "Tachycardia (most common)",
                "Tachypnea",
                "Hypoxia"
            ],
            possible: [
                "Unilateral leg swelling/tenderness (DVT)",
                "Elevated JVP",
                "Right-sided S3",
                "Accentuated P2 (pulmonary hypertension)",
                "Focal wheezing",
                "Low-grade fever",
                "Pleural friction rub"
            ],
            note: "Exam may be completely NORMAL in small PE. Most patients have normal extremity exam."
        },

        pneumothorax: {
            likely: [
                "Decreased breath sounds on affected side",
                "Tachypnea",
                "Tachycardia"
            ],
            tension: [
                "Hypotension",
                "Tracheal deviation (away from affected side)",
                "Distended neck veins",
                "Absent breath sounds on affected side",
                "Cyanosis",
                "Altered mental status"
            ],
            possible: [
                "Subcutaneous emphysema (uncommon)",
                "Hyperresonance to percussion"
            ]
        },

        pericarditis: {
            likely: [
                "Pericardial friction rub (scratchy, may have 1-3 components)",
                "Low-grade fever"
            ],
            withTamponade: [
                "Hypotension",
                "Elevated JVP with rapid y descent",
                "Muffled heart sounds (Beck's triad with hypotension and JVD)",
                "Pulsus paradoxus (>10 mmHg drop in SBP with inspiration)",
                "Tachycardia"
            ]
        },

        mediastinitis: {
            likely: [
                "Toxic/ill appearance",
                "Fever",
                "Tachycardia"
            ],
            possible: [
                "Hamman's crunch (crackling sound over mediastinum with mediastinal emphysema)",
                "Subcutaneous emphysema in neck/chest",
                "Signs of shock"
            ]
        }
    };

    // ============================================================
    // WORKUP EXPECTED RESULTS BY DIAGNOSIS
    // Based on UpToDate articles
    // ============================================================
    const expectedWorkup = {
        acs: {
            ecg: {
                stemi: [
                    "ST elevation ≥1mm in contiguous leads (≥2mm in V2-V3 for men, ≥1.5mm for women)",
                    "New LBBB (STEMI-equivalent)",
                    "Hyperacute T waves (tall, symmetric, peaked - early finding)",
                    "Reciprocal ST depression in opposite leads"
                ],
                stemiEquivalents: [
                    "New LBBB with symptoms",
                    "Horizontal ST depression V1-V4 (posterior MI - get V7-V9)",
                    "de Winter sign (upsloping ST depression V2-V6 with tall symmetric T waves)",
                    "Wellens pattern (deep symmetric T wave inversions V2-V3 - LAD critical stenosis)"
                ],
                nstemi: [
                    "ST depression (horizontal or downsloping)",
                    "T wave inversions",
                    "May be normal initially (41% of NSTEMI have no ST/T changes)",
                    "Dynamic changes with ongoing symptoms"
                ],
                notes: [
                    "Initial ECG is often NOT diagnostic",
                    "Repeat ECG every 15-30 minutes if symptoms persist",
                    "Get right-sided leads (V4R-V6R) for inferior STEMI to assess RV",
                    "Get posterior leads (V7-V9) if prominent R waves and ST depression V1-V2"
                ]
            },
            troponin: {
                timing: "May not be detectable for up to 2-3 hours after symptom onset",
                stemi: "Do NOT wait for troponin - treat based on ECG",
                nstemi: "Elevated high-sensitivity troponin confirms diagnosis",
                serial: "Repeat at 1-3 hours if initial is negative but suspicion remains",
                note: "Rise and fall pattern is characteristic of acute MI"
            },
            cxr: "Usually normal; may show pulmonary edema, cardiomegaly",
            echo: "Regional wall motion abnormality in affected territory; useful with LBBB or paced rhythm"
        },

        aorticDissection: {
            ecg: "Often nonspecific; may show ischemia if coronary involvement (especially RCA with Type A)",
            cxr: {
                findings: [
                    "Widened mediastinum (up to 76%)",
                    "Abnormal aortic contour",
                    "Displacement of aortic calcification",
                    "Pleural effusion (left > right)"
                ],
                note: "~90% have some CXR abnormality, but 10% may be normal"
            },
            dimer: "Elevated (can use with ADD-RS score to rule out)",
            cta: "Intimal flap, false lumen, extent of dissection, branch vessel involvement",
            echo: {
                tte: "May show aortic regurgitation, pericardial effusion, proximal dissection flap",
                tee: "94% sensitivity - preferred for unstable patients (bedside)"
            }
        },

        pe: {
            ecg: {
                findings: [
                    "Sinus tachycardia (most common)",
                    "S1Q3T3 pattern (uncommon but suggestive)",
                    "Right heart strain: RAD, RBBB, P pulmonale",
                    "T wave inversions V1-V4",
                    "Atrial arrhythmias"
                ],
                note: "Rarely normal; wide range of abnormalities possible; not specific"
            },
            cxr: {
                findings: [
                    "Often normal",
                    "Atelectasis (most common finding)",
                    "Hampton hump (pleural-based wedge - rare)",
                    "Westermark sign (oligemia distal to embolus - rare)",
                    "Pleural effusion"
                ]
            },
            dimer: "Elevated; use with Wells score or YEARS criteria to rule out in low/moderate risk",
            ctpa: "Filling defect in pulmonary arteries; can detect subsegmental PE",
            troponin: "May be mildly elevated with large PE (indicates RV strain)",
            bnp: "May be elevated (RV strain)"
        },

        pneumothorax: {
            cxr: "Visceral pleural line without peripheral lung markings; deep sulcus sign if supine",
            ultrasound: {
                findings: [
                    "Absent lung sliding",
                    "Lung point (pathognomonic - where sliding starts)",
                    "Absent comet tails/B-lines"
                ],
                note: "More sensitive than CXR, especially for small pneumothorax"
            }
        },

        pericarditis: {
            ecg: {
                stages: [
                    "Stage 1: Diffuse ST elevation with PR depression (spares aVR, V1)",
                    "Stage 2: ST normalizes, T waves flatten",
                    "Stage 3: T wave inversions",
                    "Stage 4: Normalization"
                ],
                distinguishFromSTEMI: [
                    "Diffuse (not territorial) ST elevation",
                    "Concave (upward) ST elevation",
                    "PR depression (especially lead II)",
                    "No reciprocal changes",
                    "No Q waves"
                ]
            },
            troponin: "Mildly elevated if myopericarditis",
            echo: "May show pericardial effusion",
            cxr: "Usually normal; cardiomegaly if large effusion (>200mL)"
        },

        mediastinitis: {
            cxr: "Mediastinal or free peritoneal air; widening",
            ct: "Extraesophageal air, periesophageal fluid, air/fluid in pleural spaces",
            esophagram: "Contrast leak confirms esophageal perforation"
        }
    };

    // ============================================================
    // QUESTION MATCHING FUNCTION
    // ============================================================
    function matchQuestion(question, caseData) {
        const q = question.toLowerCase();
        
        // Onset questions
        if (q.includes('when') && (q.includes('start') || q.includes('begin') || q.includes('notice'))) {
            return { category: 'onset', template: 'onset' };
        }
        if (q.includes('how long')) {
            return { category: 'onset', template: 'onset' };
        }
        
        // Location questions
        if (q.includes('where') && (q.includes('hurt') || q.includes('pain') || q.includes('feel'))) {
            return { category: 'location', template: 'location' };
        }
        
        // Quality questions
        if (q.includes('what') && (q.includes('feel like') || q.includes('describe'))) {
            return { category: 'quality', template: 'quality' };
        }
        if (q.includes('sharp') || q.includes('dull') || q.includes('pressure') || q.includes('burning')) {
            return { category: 'quality', template: 'quality' };
        }
        
        // Radiation
        if (q.includes('spread') || q.includes('radiat') || q.includes('travel') || q.includes('go anywhere')) {
            return { category: 'radiation', template: 'radiation' };
        }
        
        // Severity
        if (q.includes('scale') || q.includes('1 to 10') || q.includes('how bad') || q.includes('severe')) {
            return { category: 'severity', template: 'severity' };
        }
        
        // Aggravating
        if (q.includes('worse') || q.includes('aggravat') || q.includes('trigger')) {
            return { category: 'aggravating', template: 'aggravating' };
        }
        
        // Alleviating
        if (q.includes('better') || q.includes('reliev') || q.includes('help')) {
            return { category: 'alleviating', template: 'alleviating' };
        }
        
        // Associated symptoms
        if (q.includes('other symptom') || q.includes('anything else') || q.includes('associated')) {
            return { category: 'associated', template: 'associated' };
        }
        
        // Specific symptom questions
        if (q.includes('short') && q.includes('breath') || q.includes('breathing')) {
            return { category: 'associated', specificSymptom: 'dyspnea' };
        }
        if (q.includes('sweat') || q.includes('diaphor')) {
            return { category: 'associated', specificSymptom: 'diaphoresis' };
        }
        if (q.includes('nausea') || q.includes('vomit') || q.includes('throw up')) {
            return { category: 'associated', specificSymptom: 'nausea' };
        }
        if (q.includes('dizz') || q.includes('lightheaded') || q.includes('faint')) {
            return { category: 'associated', specificSymptom: 'dizziness' };
        }
        if (q.includes('palpitation') || q.includes('heart rac') || q.includes('heart pound')) {
            return { category: 'associated', specificSymptom: 'palpitations' };
        }
        
        return null;
    }

    // ============================================================
    // PUBLIC API
    // ============================================================
    return {
        lifeThreatening,
        hpiTemplates,
        riskFactorResponses,
        negativeResponses,
        expectedExamFindings,
        expectedWorkup,
        matchQuestion,
        
        // Get a random response from a template array
        getRandomResponse: function(templateArray) {
            if (!templateArray || templateArray.length === 0) return null;
            return templateArray[Math.floor(Math.random() * templateArray.length)];
        },
        
        // Get HPI response for a diagnosis
        getHPIResponse: function(diagnosis, category) {
            const template = this.hpiTemplates[diagnosis];
            if (!template || !template[category]) return null;
            return this.getRandomResponse(template[category]);
        },
        
        // Get risk factor response
        getRiskFactorResponse: function(riskCategory, factor, isPositive) {
            const cat = this.riskFactorResponses[riskCategory];
            if (!cat || !cat[factor]) return null;
            const responses = isPositive ? cat[factor].positive : cat[factor].negative;
            return this.getRandomResponse(responses);
        },
        
        metadata: {
            version: "1.0",
            basedOn: "UpToDate: Approach to the adult with nontraumatic chest pain in the emergency department",
            diagnosesCovered: Object.keys(hpiTemplates).length,
            lastUpdated: "December 2024"
        }
    };

})();

// Export for both browser and Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ChestPainCaseTemplates;
}
if (typeof window !== 'undefined') {
    window.ChestPainCaseTemplates = ChestPainCaseTemplates;
}

console.log('[ChestPainCaseTemplates] Loaded with templates for', Object.keys(ChestPainCaseTemplates.hpiTemplates).length, 'diagnoses');
