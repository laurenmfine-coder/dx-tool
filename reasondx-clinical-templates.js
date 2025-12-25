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

// ============================================================================
// ABDOMINAL PAIN TEMPLATES
// ============================================================================

    const urgentCauses = [
        "Acute appendicitis",
        "Acute cholecystitis/cholangitis",
        "Acute pancreatitis",
        "Small bowel obstruction",
        "Large bowel obstruction",
        "Perforated viscus",
        "Acute mesenteric ischemia",
        "Ruptured AAA",
        "Ectopic pregnancy",
        "Ovarian/testicular torsion",
        "Incarcerated/strangulated hernia"
    ];

    // ============================================================
    // PAIN LOCATION DIFFERENTIALS (From UpToDate Tables)
    // ============================================================
    const differentialByLocation = {
        rightUpperQuadrant: [
            "Acute cholecystitis",
            "Biliary colic",
            "Acute cholangitis",
            "Hepatitis",
            "Hepatic abscess",
            "Fitz-Hugh-Curtis syndrome (perihepatitis)",
            "Right lower lobe pneumonia",
            "Pulmonary embolism"
        ],
        epigastric: [
            "Acute pancreatitis",
            "Peptic ulcer disease",
            "Gastritis/GERD",
            "Acute coronary syndrome (atypical)",
            "Biliary colic",
            "Acute cholecystitis",
            "Esophageal perforation (Boerhaave)",
            "Gastric perforation"
        ],
        leftUpperQuadrant: [
            "Splenic infarct",
            "Splenic rupture",
            "Splenic abscess",
            "Left lower lobe pneumonia",
            "Gastritis"
        ],
        rightLowerQuadrant: [
            "Acute appendicitis",
            "Cecal diverticulitis",
            "Crohn disease (terminal ileitis)",
            "Mesenteric adenitis",
            "Ovarian torsion",
            "Ruptured ovarian cyst",
            "Ectopic pregnancy",
            "Pelvic inflammatory disease"
        ],
        leftLowerQuadrant: [
            "Diverticulitis",
            "Sigmoid volvulus",
            "Ovarian torsion",
            "Ruptured ovarian cyst",
            "Ectopic pregnancy",
            "Pelvic inflammatory disease"
        ],
        periumbilical: [
            "Early appendicitis",
            "Small bowel obstruction",
            "Acute mesenteric ischemia",
            "Gastroenteritis",
            "AAA rupture"
        ],
        diffuse: [
            "Small bowel obstruction",
            "Large bowel obstruction",
            "Peritonitis",
            "Gastroenteritis",
            "Mesenteric ischemia",
            "Diabetic ketoacidosis",
            "Inflammatory bowel disease"
        ]
    };

    // ============================================================
    // HPI TEMPLATES BY DIAGNOSIS
    // ============================================================
    const hpiTemplates = {
        
        // ============================================================
        // ACUTE APPENDICITIS
        // Classic: periumbilical pain migrating to RLQ, anorexia, N/V
        // Migration occurs in only 50-60% of patients
        // ============================================================
        appendicitis: {
            onset: [
                "It started about {duration} ago, first around my belly button.",
                "The pain began around my navel, then moved to my right side over several hours.",
                "It came on gradually yesterday - started in the middle, now it's down here on the right.",
                "About {duration} ago. It was vague at first, now it's definitely on the right side.",
                "It started this morning around my belly button, but now it's definitely on my right lower side."
            ],
            location: [
                "Right here in my lower right side. [points to McBurney's point area]",
                "It started around my belly button but moved down to my right side.",
                "Lower right abdomen - it's pretty localized now.",
                "Down here on the right. [points to RLQ]"
            ],
            quality: [
                "It's a constant, dull ache now. It was crampy at first.",
                "Constant pain - not really cramping anymore.",
                "A sharp, constant pain.",
                "It's a steady, aching pain."
            ],
            severity: [
                "Maybe a 6 or 7 out of 10. It's getting worse.",
                "About a 7 - it hurts more when I move.",
                "Probably an 8 now. It's been steadily getting worse.",
                "Started as a 4, now it's more like a 7 or 8."
            ],
            timing: [
                "It's been constant for the past {duration}.",
                "Constant since it moved to my right side.",
                "It doesn't go away - it's there all the time now."
            ],
            aggravating: [
                "Moving makes it much worse.",
                "Walking, coughing, any movement hurts.",
                "When the car hit bumps on the way here, that was awful.",
                "Pressing on it makes it worse.",
                "I can't jump or walk quickly without it hurting."
            ],
            alleviating: [
                "Lying still helps a little.",
                "Not much helps. Maybe lying curled up on my side.",
                "Staying completely still is the only thing that helps."
            ],
            associated: [
                "I don't have any appetite. The thought of food makes me nauseous.",
                "I felt nauseous and threw up once.",
                "I'm not hungry at all and feel sick to my stomach.",
                "I had a low-grade fever this morning.",
                "I feel nauseous but haven't vomited.",
                "I don't want to eat anything."
            ],
            // Atypical presentations - retrocecal, pelvic appendix
            atypical: {
                retrocecal: [
                    "It's more in my back and flank than my front.",
                    "The pain is kind of in my right side toward my back.",
                    "It hurts when I extend my right leg."
                ],
                pelvic: [
                    "I've been having some urinary frequency.",
                    "It feels like it's deep in my pelvis.",
                    "I've had some loose stools and feel like I need to go."
                ]
            },
            // Key teaching point: Pain PRECEDES vomiting in appendicitis
            sequenceNote: "In appendicitis, pain typically PRECEDES nausea/vomiting. If vomiting precedes pain, consider other diagnoses."
        },

        // ============================================================
        // ACUTE CHOLECYSTITIS
        // RUQ or epigastric pain, steady and severe, >4-6 hours
        // Murphy's sign, often history of fatty food ingestion
        // ============================================================
        cholecystitis: {
            onset: [
                "It started about {duration} ago after I ate dinner.",
                "A few hours after eating a big meal, this pain hit me.",
                "It came on about an hour after I had some fried food.",
                "Started last night after dinner and hasn't gone away.",
                "I've had these attacks before, but this one won't stop."
            ],
            location: [
                "Right here under my ribs on the right side.",
                "In my upper right belly, under my ribcage.",
                "It's in my right upper abdomen but goes to my back.",
                "Right upper quadrant, and I feel it in my right shoulder blade too."
            ],
            quality: [
                "It's a constant, severe pain - not crampy.",
                "Steady, constant pain. It doesn't come and go.",
                "A constant ache that won't let up.",
                "It feels like something is pressing on me hard, constantly."
            ],
            radiation: [
                "Yes, to my right shoulder blade.",
                "It goes around to my back.",
                "To my back between my shoulder blades.",
                "Into my right shoulder."
            ],
            severity: [
                "This is pretty bad - maybe an 8 out of 10.",
                "7 or 8. It's been constant at this level.",
                "About a 7 - it's definitely worse than my usual attacks."
            ],
            timing: [
                // Key point: biliary colic <6 hrs, cholecystitis >4-6 hrs
                "It's been constant for over 6 hours now.",
                "This has gone on for {duration} - usually my attacks only last a few hours.",
                "It won't go away. Usually these pass in a couple hours but not this time.",
                "Constant for the past {duration}."
            ],
            aggravating: [
                "Taking a deep breath makes it worse.",
                "Moving around hurts.",
                "Eating anything makes it worse.",
                "Pressing on it is very painful."
            ],
            alleviating: [
                "Nothing really helps.",
                "I tried antacids but they didn't work.",
                "Lying still is a little better."
            ],
            associated: [
                "I feel nauseous and threw up twice.",
                "I've been nauseous since it started.",
                "I feel like I have a fever.",
                "I've been sweating.",
                "I haven't been able to eat anything."
            ],
            // History of similar episodes
            priorEpisodes: [
                "I've had pain like this before after fatty foods, but it usually goes away in a few hours.",
                "This happens sometimes after big meals, but never this long.",
                "I was told I have gallstones but haven't done anything about it."
            ],
            // Risk factors
            riskFactors: [
                "I'm a bit overweight.",
                "I've had four kids.",
                "I've lost a lot of weight recently.",
                "Gallstones run in my family."
            ]
        },

        // ============================================================
        // ACUTE PANCREATITIS
        // Severe epigastric pain radiating to back, N/V
        // Relieved by sitting forward, associated with alcohol or gallstones
        // ============================================================
        pancreatitis: {
            onset: [
                "It started suddenly about {duration} ago.",
                "It came on pretty quickly after I ate.",
                "It started gradually but got severe over a few hours.",
                "I woke up with this pain about {duration} ago."
            ],
            location: [
                "Right here in the upper middle of my belly. [points to epigastrium]",
                "In my upper abdomen, and it goes straight through to my back.",
                "Across my upper abdomen.",
                "In the pit of my stomach."
            ],
            quality: [
                "It's like a knife going straight through to my back.",
                "Boring, constant pain.",
                "A deep, constant, severe ache.",
                "Like someone is squeezing my insides."
            ],
            radiation: [
                "Yes, straight through to my back.",
                "It bores right through to my spine.",
                "To my back, like a band across.",
                "Goes through to my back between my shoulder blades."
            ],
            severity: [
                "This is the worst pain I've ever had. 10 out of 10.",
                "Easily a 9 or 10. It's unbearable.",
                "About a 9 - nothing helps.",
                "It's excruciating - maybe a 10."
            ],
            timing: [
                "It's been constant since it started.",
                "Constant - no relief at all.",
                "It's been at this level for {duration}."
            ],
            aggravating: [
                "Lying flat makes it worse.",
                "Eating anything makes it unbearable.",
                "Moving around.",
                "Taking a deep breath."
            ],
            alleviating: [
                // Classic: relief sitting up and leaning forward
                "Sitting up and leaning forward helps a little.",
                "I've been hunched over - that's the only way I can tolerate it.",
                "Curling up into a ball helps slightly.",
                "Nothing really helps."
            ],
            associated: [
                "I've been vomiting repeatedly - can't keep anything down.",
                "The nausea and vomiting are relentless.",
                "I feel feverish.",
                "I'm very nauseous.",
                "I've been throwing up for hours."
            ],
            // Etiology-specific questions
            alcoholHistory: [
                "I had quite a bit to drink last night.",
                "I drink pretty heavily - maybe a six-pack a day.",
                "I had a binge drinking episode over the weekend.",
                "I don't really drink much."
            ],
            gallstoneHistory: [
                "I've been told I have gallstones.",
                "I've had gallbladder attacks before.",
                "I had my gallbladder out years ago.",
                "No, I've never had gallbladder problems."
            ],
            // Physical findings descriptions
            physicalFindings: {
                cullenSign: "Bruising is noted around the umbilicus (Cullen's sign - suggests hemorrhagic pancreatitis)",
                greyTurnerSign: "Bruising is noted on the flanks (Grey Turner sign - suggests hemorrhagic pancreatitis)"
            }
        },

        // ============================================================
        // SMALL BOWEL OBSTRUCTION (SBO)
        // Crampy periumbilical pain, N/V, distention, obstipation
        // Prior abdominal surgery is key risk factor
        // ============================================================
        smallBowelObstruction: {
            onset: [
                "It started about {duration} ago with cramping.",
                "The cramping started yesterday and has been getting worse.",
                "It came on suddenly with severe cramping.",
                "Started gradually with bloating, now I have severe cramps."
            ],
            location: [
                "All around my belly button mostly.",
                "In the middle of my abdomen.",
                "It moves around - sometimes here, sometimes there.",
                "Mostly around my navel."
            ],
            quality: [
                // Key: crampy/colicky pain in waves
                "It comes in waves - cramping that gets really intense then eases a bit.",
                "Cramping - it builds up, peaks, then backs off, then starts again.",
                "Colicky pain that comes and goes every few minutes.",
                "Crampy, squeezing pain that comes in waves."
            ],
            severity: [
                "When it cramps up, it's an 8 or 9. Then it backs off to maybe a 5.",
                "The waves are really intense - maybe 8 out of 10.",
                "It peaks at about a 9, then drops to a 4 or 5.",
                "During the cramps, it's unbearable. Between them, it's just uncomfortable."
            ],
            timing: [
                // Paroxysms every 4-5 minutes
                "The cramps come every few minutes.",
                "It cycles - intense pain for a minute or two, then a break, then it starts again.",
                "The waves come about every 4-5 minutes."
            ],
            aggravating: [
                "Eating or drinking anything makes it worse.",
                "Nothing specific - the waves just keep coming."
            ],
            alleviating: [
                "Nothing helps.",
                "Maybe lying still between the waves."
            ],
            associated: {
                vomiting: [
                    // Proximal: severe early vomiting; Distal: later, may be feculent
                    "I've been vomiting a lot - can't keep anything down.",
                    "I've thrown up multiple times. It started green, now it smells terrible.",
                    "I'm vomiting everything I try to drink.",
                    "The vomiting started early and hasn't stopped."
                ],
                distention: [
                    "My belly is really bloated and tight.",
                    "I look pregnant - my abdomen is so distended.",
                    "My stomach is blown up like a balloon."
                ],
                obstipation: [
                    // Key: inability to pass gas or stool
                    "I haven't passed gas or had a bowel movement in {duration}.",
                    "I can't pass gas at all.",
                    "No bowel movements and no gas for over a day.",
                    "I feel like I need to go but nothing comes out."
                ]
            },
            // Key risk factor - prior abdominal surgery
            surgicalHistory: [
                "I had my appendix out about 10 years ago.",
                "I've had several abdominal surgeries - gallbladder, hysterectomy, and appendix.",
                "I had a C-section and then a bowel surgery years ago.",
                "I had colon surgery for cancer 3 years ago.",
                "I've never had any abdominal surgery."
            ],
            // Hernia history
            herniaHistory: [
                "I have a hernia in my groin that's been getting bigger.",
                "I had a hernia repair a few years ago.",
                "I noticed a bulge in my groin that I can't push back in now.",
                "No, I don't have any hernias that I know of."
            ],
            // Signs of strangulation - concerning features
            strangulationSigns: [
                "The pain is now constant - it used to come and go.",
                "I feel feverish.",
                "The pain changed - now it's constant and worse.",
                "I feel really sick overall."
            ]
        },

        // ============================================================
        // PEPTIC ULCER DISEASE (PUD)
        // Epigastric pain, burning/gnawing, may be relieved by food (DU)
        // Risk: NSAIDs, H. pylori
        // ============================================================
        pepticUlcer: {
            onset: [
                "This has been going on for weeks, but it got worse {duration} ago.",
                "I've had stomach pain off and on for months.",
                "It started a few weeks ago and hasn't gone away."
            ],
            location: [
                "Right here in the pit of my stomach. [points to epigastrium]",
                "Upper middle of my abdomen.",
                "Just below my breastbone."
            ],
            quality: [
                "Burning, gnawing pain.",
                "Like something is eating away at my stomach.",
                "A burning sensation.",
                "It feels like hunger pains, but worse."
            ],
            severity: [
                "Usually a 4 or 5, sometimes worse.",
                "It varies - sometimes a 3, sometimes a 7.",
                "About a 5 most of the time."
            ],
            timing: {
                duodenalPattern: [
                    // DU: pain 2-3 hours after meals, relieved by food
                    "It usually comes on a few hours after eating.",
                    "Worse when my stomach is empty, especially at night.",
                    "I wake up at 2 or 3 AM with the pain."
                ],
                gastricPattern: [
                    // GU: pain with eating
                    "Eating makes it worse.",
                    "It starts shortly after I eat.",
                    "Food doesn't help - sometimes makes it worse."
                ]
            },
            aggravating: [
                "Spicy foods make it worse.",
                "Alcohol definitely makes it worse.",
                "Stress seems to trigger it.",
                "When I take ibuprofen for my back, it gets really bad."
            ],
            alleviating: [
                "Antacids help for a little while.",
                "Eating something bland helps temporarily.",
                "Milk used to help but not anymore.",
                "The medication my doctor gave me helps."
            ],
            associated: [
                "I've been feeling nauseous sometimes.",
                "I feel bloated after eating.",
                "My stools have been dark.",
                "I threw up something that looked like coffee grounds."
            ],
            // Risk factors
            nsaidUse: [
                "I take ibuprofen almost every day for my arthritis.",
                "I use aspirin for my heart.",
                "I take a lot of Advil for headaches.",
                "No, I don't really take pain relievers."
            ],
            hPylori: [
                "I was tested for that bacteria thing - I think it was positive.",
                "I've never been tested for H. pylori.",
                "I was treated for that a few years ago."
            ]
        },

        // ============================================================
        // DIVERTICULITIS
        // LLQ pain, fever, change in bowel habits
        // More common in older patients
        // ============================================================
        diverticulitis: {
            onset: [
                "It started about {duration} ago in my left lower side.",
                "The pain came on gradually over a day or two.",
                "It started as mild discomfort and got progressively worse."
            ],
            location: [
                "In my lower left abdomen.",
                "Down here on the left side. [points to LLQ]",
                "Left lower part of my belly."
            ],
            quality: [
                "A constant, aching pain.",
                "Steady pain with some cramping.",
                "Constant and achy."
            ],
            severity: [
                "About a 6 or 7 out of 10.",
                "Maybe a 5 to 7 - it's been pretty steady.",
                "Probably a 6 most of the time."
            ],
            aggravating: [
                "Eating makes it worse.",
                "Moving around.",
                "Pressing on it."
            ],
            alleviating: [
                "Not eating helps a little.",
                "Lying still.",
                "Nothing really helps."
            ],
            associated: [
                "I've had a fever.",
                "My bowel habits have changed - more constipation.",
                "I've had some loose stools.",
                "I feel nauseous but haven't vomited."
            ],
            priorEpisodes: [
                "I've had diverticulitis before - this feels similar.",
                "I was told I have diverticulosis.",
                "This is my first time having this kind of pain."
            ]
        },

        // ============================================================
        // GASTROENTERITIS
        // Diffuse crampy pain, N/V, diarrhea
        // Usually self-limited, sick contacts
        // ============================================================
        gastroenteritis: {
            onset: [
                "It started suddenly about {duration} ago.",
                "I woke up in the middle of the night feeling terrible.",
                "It came on quickly after eating at a restaurant."
            ],
            location: [
                "All over my belly - kind of everywhere.",
                "Mostly around my belly button.",
                "Diffuse - hard to pinpoint."
            ],
            quality: [
                "Crampy pain that comes and goes.",
                "Cramping that's worse before I have diarrhea.",
                "Waves of cramping."
            ],
            severity: [
                "Maybe a 5 or 6 during the cramps, less in between.",
                "About a 4 to 6.",
                "Not the worst pain, but constant discomfort."
            ],
            associated: {
                diarrhea: [
                    "I've had watery diarrhea - probably 8 or 10 times today.",
                    "Lots of diarrhea, no blood in it.",
                    "Watery stools all day."
                ],
                vomiting: [
                    "I threw up several times earlier.",
                    "The vomiting was worse at first, now it's mostly diarrhea.",
                    "I've been vomiting and having diarrhea."
                ],
                fever: [
                    "I feel feverish.",
                    "I've had chills.",
                    "Maybe a low-grade fever."
                ]
            },
            sickContacts: [
                "My kids had this a few days ago.",
                "Several people at work have been out sick.",
                "My spouse had the same thing last week.",
                "I was at a party where others got sick too."
            ],
            foodHistory: [
                "I ate at a new restaurant yesterday.",
                "I had some questionable leftovers.",
                "I ate some raw oysters two days ago."
            ]
        }
    };

    // ============================================================
    // RISK FACTOR QUESTIONS AND ANSWERS
    // ============================================================
    const riskFactorResponses = {
        
        // Surgical history - crucial for SBO
        surgicalHistory: {
            "prior abdominal surgery": {
                positive: [
                    "I had my appendix out about 10 years ago.",
                    "I've had a C-section and my gallbladder removed.",
                    "I had colon cancer surgery 3 years ago.",
                    "I've had multiple abdominal surgeries over the years.",
                    "I had a hysterectomy."
                ],
                negative: [
                    "No, I've never had any abdominal surgery.",
                    "No surgeries on my belly."
                ]
            }
        },

        // Gallbladder/biliary risk factors
        biliary: {
            "prior gallbladder attacks": {
                positive: [
                    "Yes, I've had pain like this before after fatty meals.",
                    "I've been told I have gallstones but haven't had surgery.",
                    "I get these attacks a few times a year."
                ],
                negative: [
                    "No, I've never had gallbladder problems.",
                    "This is the first time I've had this kind of pain."
                ]
            },
            "fatty food trigger": {
                positive: [
                    "Yes, it started after I ate a greasy meal.",
                    "Fatty foods always seem to trigger it.",
                    "I had fried chicken right before this started."
                ],
                negative: [
                    "I haven't noticed that.",
                    "This came on without eating anything."
                ]
            }
        },

        // Pancreatitis risk factors
        pancreatitis: {
            "alcohol use": {
                positive: [
                    "I drink pretty heavily - maybe a six-pack a day.",
                    "I had a lot to drink over the weekend.",
                    "I drink socially, probably more than I should.",
                    "I've been drinking more lately due to stress."
                ],
                negative: [
                    "I rarely drink alcohol.",
                    "I don't drink at all.",
                    "Maybe one glass of wine a week."
                ]
            },
            "gallstones": {
                positive: [
                    "Yes, I know I have gallstones.",
                    "I've had gallbladder problems before.",
                    "My doctor mentioned gallstones on an ultrasound."
                ],
                negative: [
                    "No, I've never been told I have gallstones.",
                    "I had my gallbladder removed years ago."
                ]
            },
            "triglycerides": {
                positive: [
                    "My triglycerides have always been very high.",
                    "I think my cholesterol levels are bad.",
                    "Yes, I have high triglycerides."
                ],
                negative: [
                    "My cholesterol is pretty normal.",
                    "I don't know what my triglycerides are."
                ]
            }
        },

        // PUD risk factors
        pepticUlcer: {
            "nsaid use": {
                positive: [
                    "I take ibuprofen almost every day for my arthritis.",
                    "I use a lot of Advil for headaches.",
                    "I take aspirin daily for my heart.",
                    "I've been taking naproxen for my back pain."
                ],
                negative: [
                    "No, I don't take pain medications very often.",
                    "I usually just take Tylenol if I need something."
                ]
            },
            "h pylori": {
                positive: [
                    "Yes, I was treated for that bacteria before.",
                    "I tested positive for H. pylori.",
                    "I think my doctor mentioned something about that."
                ],
                negative: [
                    "I've never been tested.",
                    "No, I don't have that."
                ]
            },
            "smoking": {
                positive: [
                    "Yes, I smoke about a pack a day.",
                    "I've smoked for 20 years.",
                    "I quit a few years ago."
                ],
                negative: [
                    "No, I don't smoke.",
                    "Never smoked."
                ]
            }
        },

        // GYN history for females
        gynecologic: {
            "last menstrual period": {
                responses: [
                    "About 2 weeks ago.",
                    "I'm on day 14 of my cycle.",
                    "I should have started a week ago but I'm late.",
                    "I'm post-menopausal.",
                    "I had my period last week."
                ]
            },
            "possibility of pregnancy": {
                positive: [
                    "I might be. My period is late.",
                    "I suppose it's possible.",
                    "I've been trying to get pregnant."
                ],
                negative: [
                    "No, I'm on birth control.",
                    "I had my tubes tied.",
                    "I'm post-menopausal.",
                    "I'm not sexually active.",
                    "My partner had a vasectomy."
                ]
            },
            "vaginal discharge or bleeding": {
                positive: [
                    "I've had some unusual discharge.",
                    "I've had some spotting.",
                    "Yes, some abnormal bleeding."
                ],
                negative: [
                    "No, nothing unusual.",
                    "Everything's been normal."
                ]
            }
        }
    };

    // ============================================================
    // PHYSICAL EXAM EXPECTED FINDINGS BY DIAGNOSIS
    // ============================================================
    const expectedExamFindings = {
        appendicitis: {
            likely: [
                "RLQ tenderness, maximal at McBurney's point",
                "Low-grade fever (up to 101°F/38.3°C)",
                "Guarding in RLQ"
            ],
            possible: [
                "Rovsing's sign (RLQ pain with LLQ palpation) - sens 22-68%, spec 58-96%",
                "Psoas sign (RLQ pain with passive hip extension) - sens 13-42%, spec 79-97%",
                "Obturator sign (RLQ pain with internal rotation of flexed hip) - sens 8%, spec 94%",
                "Rebound tenderness",
                "Rectal tenderness (pelvic appendix)"
            ],
            perforated: [
                "High-grade fever (>101°F/38.3°C)",
                "Diffuse peritonitis",
                "Tachycardia",
                "Toxic appearance",
                "Rigidity"
            ],
            note: "McBurney's point: 1.5-2 inches from ASIS on line to umbilicus. Sens 50-94%, spec 75-86%."
        },

        cholecystitis: {
            likely: [
                "RUQ tenderness",
                "Positive Murphy's sign (inspiratory arrest with RUQ palpation) - sens 97%, spec 48%",
                "Fever",
                "Tachycardia"
            ],
            possible: [
                "Palpable gallbladder (if distended)",
                "Voluntary guarding",
                "Mild jaundice (if bile duct involvement)"
            ],
            complicated: [
                "High fever with rigors (cholangitis)",
                "Severe sepsis appearance (gangrenous cholecystitis)",
                "Crepitus (emphysematous cholecystitis - rare)"
            ],
            note: "Murphy's sign sensitivity may be diminished in elderly patients."
        },

        pancreatitis: {
            likely: [
                "Epigastric tenderness",
                "Abdominal distention (ileus)",
                "Decreased bowel sounds",
                "Tachycardia"
            ],
            possible: [
                "Fever",
                "Hypotension (if severe with third-spacing)",
                "Jaundice (if gallstone etiology with CBD obstruction)"
            ],
            severe: [
                "Cullen's sign (periumbilical ecchymosis) - ~3%, indicates hemorrhagic pancreatitis",
                "Grey Turner sign (flank ecchymosis) - ~3%, indicates hemorrhagic pancreatitis",
                "Signs of shock",
                "Pleural effusion (left > right)",
                "Subcutaneous fat nodules (pancreatic panniculitis - rare)"
            ],
            note: "Physical findings vary with severity. Mild pancreatitis may have minimal tenderness."
        },

        smallBowelObstruction: {
            likely: [
                "Abdominal distention (less with proximal SBO)",
                "Hyperactive, high-pitched bowel sounds early",
                "Tympany to percussion",
                "Diffuse tenderness"
            ],
            possible: [
                "Visible peristalsis",
                "Surgical scars (clue to adhesive SBO)",
                "Hernia (inguinal, femoral, incisional)"
            ],
            strangulation: [
                "Fever",
                "Tachycardia unresponsive to fluids",
                "Localized severe tenderness",
                "Peritoneal signs (rebound, guarding)",
                "Absent bowel sounds (late)",
                "Hemodynamic instability"
            ],
            note: "Hallmark: dehydration (tachycardia, orthostatic hypotension, dry mucus membranes)"
        },

        pepticUlcer: {
            likely: [
                "Epigastric tenderness (usually mild-moderate)",
                "Normal vital signs (uncomplicated)"
            ],
            complicated: {
                perforation: [
                    "Rigid abdomen",
                    "Diffuse peritonitis",
                    "Absent bowel sounds",
                    "Tachycardia",
                    "Hypotension"
                ],
                bleeding: [
                    "Hematemesis",
                    "Melena on rectal exam",
                    "Tachycardia",
                    "Pallor",
                    "Orthostatic hypotension"
                ]
            }
        },

        diverticulitis: {
            likely: [
                "LLQ tenderness",
                "Low-grade fever",
                "Localized guarding"
            ],
            possible: [
                "Palpable mass (phlegmon or abscess)",
                "Decreased bowel sounds"
            ],
            complicated: [
                "High fever",
                "Peritonitis (if perforated)",
                "Rebound tenderness",
                "Rigidity"
            ]
        }
    };

    // ============================================================
    // WORKUP EXPECTED RESULTS BY DIAGNOSIS
    // ============================================================
    const expectedWorkup = {
        appendicitis: {
            labs: {
                cbc: "Leukocytosis (10,000-18,000) with left shift in ~80%",
                cmp: "Usually normal; may have mild dehydration",
                ua: "May show pyuria/bacteriuria (pelvic appendix irritating bladder)"
            },
            imaging: {
                ct: {
                    findings: [
                        "Enlarged appendix (>6mm diameter)",
                        "Appendiceal wall thickening and enhancement",
                        "Periappendiceal fat stranding",
                        "Appendicolith (in ~25%)",
                        "Periappendiceal fluid"
                    ],
                    perforated: [
                        "Free fluid",
                        "Extraluminal air",
                        "Abscess/phlegmon",
                        "Loss of appendiceal wall integrity"
                    ],
                    sensitivity: "94%",
                    specificity: "95%"
                },
                ultrasound: {
                    findings: [
                        "Non-compressible appendix >6mm",
                        "Target sign",
                        "Periappendiceal fluid"
                    ],
                    note: "First-line in children, pregnant patients, young women"
                }
            }
        },

        cholecystitis: {
            labs: {
                cbc: "Leukocytosis with left shift",
                lft: "Mild elevation of AST, ALT, alk phos, bilirubin possible even without CBD obstruction",
                lipase: "Usually normal (unless concurrent pancreatitis)"
            },
            imaging: {
                ultrasound: {
                    findings: [
                        "Gallstones",
                        "Gallbladder wall thickening (>4-5mm)",
                        "Pericholecystic fluid",
                        "Sonographic Murphy's sign",
                        "Gallbladder distention"
                    ],
                    sensitivity: "88%",
                    specificity: "80%"
                },
                hida: {
                    findings: [
                        "Non-visualization of gallbladder at 4 hours diagnostic",
                        "Normal: gallbladder, CBD, and small bowel visualized within 60 min"
                    ],
                    indication: "When US nondiagnostic but clinical suspicion high",
                    sensitivity: "90-97%",
                    specificity: "71-90%"
                },
                ct: {
                    findings: [
                        "Gallbladder wall edema",
                        "Pericholecystic stranding/fluid",
                        "High-attenuation bile"
                    ],
                    note: "May miss gallstones (isodense with bile)"
                }
            }
        },

        pancreatitis: {
            labs: {
                lipase: "Elevated ≥3x upper limit of normal (more sensitive than amylase)",
                amylase: "Elevated ≥3x upper limit of normal (may be normal in alcoholic/hypertriglyceridemic)",
                cbc: "Leukocytosis, elevated hematocrit (hemoconcentration)",
                cmp: "Elevated BUN, glucose; hypocalcemia",
                lft: "Elevated if gallstone etiology",
                triglycerides: "Check for hypertriglyceridemia-induced (may interfere with amylase assay)"
            },
            imaging: {
                ct: {
                    timing: "Not needed for diagnosis if clinical + labs clear; perform at 72+ hrs to assess severity",
                    interstitialEdematous: [
                        "Enlarged pancreas",
                        "Heterogeneous enhancement",
                        "Peripancreatic fat stranding"
                    ],
                    necrotizing: [
                        "Lack of pancreatic enhancement (necrosis)",
                        "Peripancreatic fluid collections",
                        "Gas bubbles (infected necrosis)"
                    ]
                },
                ultrasound: {
                    indication: "Assess for gallstones as etiology",
                    limitations: "Bowel gas often limits pancreas visualization"
                }
            },
            severityMarkers: {
                clinical: ["SIRS criteria", "Organ failure", "APACHE II", "Ranson criteria"],
                labs: ["BUN >20", "Hematocrit >44%", "Rising BUN at 24 hrs"],
                crp: "CRP >150 mg/L at 48 hrs suggests severe pancreatitis"
            }
        },

        smallBowelObstruction: {
            labs: {
                cbc: "Leukocytosis (suggests strangulation if elevated with left shift)",
                cmp: "Dehydration pattern (elevated BUN/Cr ratio); electrolyte abnormalities",
                lactate: "Elevated with ischemia/strangulation (sensitive but not specific)",
                abg: "Metabolic alkalosis (vomiting) or lactic acidosis (ischemia)"
            },
            imaging: {
                xray: {
                    findings: [
                        "Dilated small bowel loops (>3cm)",
                        "Multiple air-fluid levels on upright",
                        "Paucity of colonic gas",
                        "String of beads sign (fluid-filled loops)"
                    ],
                    sensitivity: "79-83%",
                    limitations: "Cannot determine site, cause, or ischemia"
                },
                ct: {
                    findings: [
                        "Dilated small bowel (>2.5cm) proximal to transition point",
                        "Decompressed bowel distal to transition point",
                        "Transition zone identifiable"
                    ],
                    strangulation: [
                        "Bowel wall thickening",
                        "Decreased/absent wall enhancement",
                        "Mesenteric haziness",
                        "Small bowel feces sign",
                        "Pneumatosis intestinalis",
                        "Portal/mesenteric venous gas",
                        "Free fluid (especially high-density)"
                    ],
                    closedLoop: [
                        "U-shaped or C-shaped dilated loop",
                        "Whirl sign (twisted mesentery)",
                        "Beak sign",
                        "Two adjacent collapsed loops"
                    ],
                    sensitivity: "90-94%",
                    specificity: "96%"
                }
            }
        }
    };

    // ============================================================
    // NEGATIVE RESPONSE TEMPLATES
    // For ruling out specific diagnoses
    // ============================================================
    const negativeResponses = {
        appendicitisNegative: {
            location: [
                "The pain is in my upper abdomen, not lower.",
                "It's on my left side, not right."
            ],
            timing: [
                "The pain comes and goes - it's not constant.",
                "I've had this for weeks."
            ],
            associated: [
                "I have a great appetite.",
                "No nausea at all.",
                "The vomiting started before the pain."
            ]
        },
        
        cholecystitisNegative: {
            timing: [
                "The pain only lasted about an hour then went away.",
                "It comes and goes throughout the day."
            ],
            triggers: [
                "Eating doesn't seem to affect it.",
                "Fatty foods don't make any difference."
            ]
        },
        
        pancreatitisNegative: {
            location: [
                "The pain doesn't go to my back at all.",
                "It's more in my lower abdomen."
            ],
            position: [
                "Sitting forward doesn't help.",
                "Position doesn't change the pain."
            ]
        },
        
        sboNegative: {
            bowelFunction: [
                "I've been having regular bowel movements.",
                "I'm passing gas normally."
            ],
            quality: [
                "The pain is constant, not crampy.",
                "It doesn't come in waves."
            ]
        }
    };

    // ============================================================
    // HELPER FUNCTIONS
    // ============================================================
    
    function getRandomResponse(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function getHPIResponse(diagnosis, category) {
        if (hpiTemplates[diagnosis] && hpiTemplates[diagnosis][category]) {
            const template = hpiTemplates[diagnosis][category];
            if (Array.isArray(template)) {
                return getRandomResponse(template);
            }
            return template;
        }
        return null;
    }

    function getRiskFactorResponse(category, factor, isPositive) {
        const type = isPositive ? 'positive' : 'negative';
        if (riskFactorResponses[category] && 
            riskFactorResponses[category][factor] &&
            riskFactorResponses[category][factor][type]) {
            return getRandomResponse(riskFactorResponses[category][factor][type]);
        }
        return null;
    }

    function getExamFindings(diagnosis, severity) {
        if (expectedExamFindings[diagnosis]) {
            if (severity && expectedExamFindings[diagnosis][severity]) {
                return expectedExamFindings[diagnosis][severity];
            }
            return expectedExamFindings[diagnosis];
        }
        return null;
    }

    function getWorkupResults(diagnosis, testType) {
        if (expectedWorkup[diagnosis]) {
            if (testType && expectedWorkup[diagnosis][testType]) {
                return expectedWorkup[diagnosis][testType];
            }
            return expectedWorkup[diagnosis];
        }
        return null;
    }

    function matchQuestion(question, caseData) {
        const q = question.toLowerCase();
        
        // Onset patterns
        if (q.includes('when') && (q.includes('start') || q.includes('begin'))) {
            return 'onset';
        }
        
        // Location patterns
        if (q.includes('where') || q.includes('location') || q.includes('point')) {
            return 'location';
        }
        
        // Quality patterns
        if (q.includes('what') && (q.includes('like') || q.includes('feel')) ||
            q.includes('describe') || q.includes('character') || q.includes('type of pain')) {
            return 'quality';
        }
        
        // Radiation patterns
        if (q.includes('radiate') || q.includes('spread') || q.includes('travel') ||
            q.includes('go anywhere')) {
            return 'radiation';
        }
        
        // Severity patterns
        if (q.includes('scale') || q.includes('severe') || q.includes('rate') ||
            q.includes('how bad') || q.includes('1 to 10')) {
            return 'severity';
        }
        
        // Timing patterns
        if (q.includes('constant') || q.includes('come and go') || q.includes('intermittent') ||
            q.includes('how long') && q.includes('last')) {
            return 'timing';
        }
        
        // Aggravating patterns
        if (q.includes('worse') || q.includes('aggravat') || q.includes('trigger') ||
            q.includes('make it')) {
            return 'aggravating';
        }
        
        // Alleviating patterns
        if (q.includes('better') || q.includes('help') || q.includes('reliev') ||
            q.includes('ease')) {
            return 'alleviating';
        }
        
        // Associated symptoms
        if (q.includes('other') && q.includes('symptom') || q.includes('nausea') ||
            q.includes('vomit') || q.includes('fever') || q.includes('bowel') ||
            q.includes('appetite') || q.includes('diarrhea')) {
            return 'associated';
        }
        
        // Surgical history
        if (q.includes('surgery') || q.includes('operation') || q.includes('surgical')) {
            return 'surgicalHistory';
        }
        
        return null;
    }

    // ============================================================
    // PUBLIC API
    // ============================================================
    return {
        hpiTemplates: hpiTemplates,
        riskFactorResponses: riskFactorResponses,
        expectedExamFindings: expectedExamFindings,
        expectedWorkup: expectedWorkup,
        negativeResponses: negativeResponses,
        differentialByLocation: differentialByLocation,

// ============================================================================
// DYSPNEA TEMPLATES
// ============================================================================

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

// ============================================================================
// HEADACHE TEMPLATES
// ============================================================================

  clinicalDangerSigns: {
    highRiskHistoricalFeatures: [
      "Sudden-onset headache (thunderclap) - maximal intensity within seconds to minutes",
      "Worst headache of life / First headache of this type",
      "New headache pattern or significant change from prior headaches",
      "Age >50 with new or progressively worsening headache",
      "Headache with exertion, sexual activity, or Valsalva",
      "Headache with fever and altered mental status",
      "Headache with seizure",
      "Headache with syncope or near-syncope at onset",
      "Immunocompromised patient with new headache",
      "Cancer patient with new headache",
      "Pregnant or postpartum patient with new headache",
      "Anticoagulated patient with new headache",
      "Family history of SAH (first or second degree relatives)",
      "Multiple family members with simultaneous headaches (CO poisoning)"
    ],
    
    highRiskExamFindings: [
      "Fever (makes migraine/tension headache highly unlikely)",
      "Altered level of consciousness",
      "Focal neurologic deficit (any new finding)",
      "Papilledema",
      "Meningismus (nuchal rigidity)",
      "Toxic appearance",
      "Severe hypertension (diastolic ≥120 mmHg)",
      "Pupillary asymmetry",
      "Third nerve palsy",
      "Horner syndrome (miosis, ptosis, anhidrosis)",
      "Abnormal extraocular movements",
      "Visual changes or loss",
      "Preretinal/subhyaloid hemorrhage (Terson syndrome)",
      "Temporal artery tenderness or decreased pulsations"
    ],
    
    cannotMissDiagnoses: [
      "Subarachnoid hemorrhage (SAH)",
      "Bacterial meningitis",
      "Intracranial mass lesion (tumor, abscess)",
      "Cerebral venous sinus thrombosis",
      "Carotid or vertebral artery dissection",
      "Acute angle-closure glaucoma",
      "Giant cell arteritis (temporal arteritis)",
      "Carbon monoxide poisoning",
      "Hypertensive encephalopathy",
      "Pituitary apoplexy",
      "Reversible cerebral vasoconstriction syndrome (RCVS)",
      "Idiopathic intracranial hypertension",
      "Pre-eclampsia/eclampsia"
    ]
  },

  // ============================================================================
  // DIAGNOSIS: SUBARACHNOID HEMORRHAGE (SAH)
  // ============================================================================
  
  subarachnoidHemorrhage: {
    description: "Aneurysmal SAH - sudden onset severe headache from ruptured intracranial aneurysm",
    prevalence: "~8% of ED thunderclap headache patients have SAH",
    
    hpiTemplates: {
      onset: [
        "I was just sitting at my desk when suddenly this headache hit me out of nowhere - it went from zero to the worst pain imaginable in seconds",
        "It happened so fast - I was fine one moment, then felt like something exploded in my head the next second",
        "I was in the middle of [activity] when it suddenly struck - reached maximum intensity almost instantly",
        "The pain came on like a thunderclap - immediately the worst headache I've ever had",
        "I was straining on the toilet when suddenly this devastating headache hit me all at once"
      ],
      
      quality: [
        "It feels like someone hit me in the back of the head with a baseball bat",
        "The pressure is unbearable - feels like my head is going to explode",
        "It's like something burst inside my skull",
        "The worst pain I've ever experienced in my entire life - nothing compares"
      ],
      
      severity: [
        "This is the worst headache of my entire life - 10 out of 10",
        "I've had headaches before but nothing even close to this - 10/10 easily",
        "The pain is absolutely unbearable - I can't even think straight",
        "I would do anything to make this stop - it's excruciating"
      ],
      
      location: [
        "It started in the back of my head and spread everywhere",
        "The whole head is throbbing but especially the back of my neck",
        "It's all over but worst at the base of my skull",
        "Feels like it's deep inside, affecting my whole head and neck"
      ],
      
      timing: [
        "It hasn't let up at all since it started [time] ago",
        "The intensity has been constant since onset - no relief whatsoever",
        "Started suddenly and has been relentless ever since",
        "It's been exactly the same terrible level since it hit me"
      ],
      
      aggravating: [
        "Any movement at all makes it worse - even moving my eyes",
        "Light makes it unbearable, and any noise is excruciating",
        "I can't bend forward or move my neck at all",
        "Coughing or straining makes it even more intense"
      ],
      
      alleviating: [
        "Nothing has helped - I've tried everything",
        "I took [pain medication] but it hasn't touched this",
        "Lying perfectly still in the dark is the only thing that makes it slightly more bearable",
        "I tried my usual headache medication but it had absolutely no effect"
      ],
      
      associatedSymptoms: [
        "I vomited several times right after it started",
        "My neck feels so stiff I can barely move it",
        "I almost passed out when it hit - everything went gray for a moment",
        "I've been nauseous ever since and the light is killing me",
        "I felt a strange sensation in my neck spreading down my back",
        "I'm seeing double and my vision seems off",
        "I felt like I was going to black out when it started",
        "I actually did lose consciousness briefly when it hit"
      ],
      
      settingAtOnset: [
        "I was just sitting doing paperwork when it struck",
        "It happened during sexual intercourse",
        "I was lifting something heavy when it started",
        "I was on the toilet straining when it hit",
        "I was exercising at the gym when it came on",
        "I was just waking up from sleep"
      ],
      
      priorSentinelHeadache: [
        "Actually, I had a similar but milder severe headache about two weeks ago that went away after a day",
        "A few days ago I had a sudden bad headache that was unusual for me, but it wasn't this severe",
        "No, nothing like this has ever happened before",
        "I've had some headaches lately but nothing that prepared me for this"
      ]
    },
    
    physicalExamFindings: {
      vitalSigns: [
        "Hypertension - BP 180/100 or higher (common)",
        "Tachycardia",
        "May have fever if hemorrhage is several days old"
      ],
      
      neuroExam: [
        "Alert but distressed, photophobic",
        "Nuchal rigidity / meningismus",
        "Cranial nerve findings may be present",
        "Third nerve palsy (especially posterior communicating artery aneurysm)",
        "Altered level of consciousness (variable)",
        "Focal neurologic deficit (depending on location)",
        "Terson syndrome (preretinal hemorrhages) - suggests worse prognosis"
      ],
      
      meningealSigns: [
        "Positive Kernig sign",
        "Positive Brudzinski sign",
        "Resistance to passive neck flexion",
        "Note: Meningismus may develop several hours after bleed"
      ],
      
      gradingScales: {
        huntHess: {
          grade1: "Asymptomatic or mild headache, slight nuchal rigidity",
          grade2: "Moderate to severe headache, nuchal rigidity, no deficit except cranial nerve palsy",
          grade3: "Drowsy, confused, or mild focal deficit",
          grade4: "Stupor, moderate to severe hemiparesis, possible early decerebrate rigidity",
          grade5: "Deep coma, decerebrate rigidity, moribund appearance"
        }
      }
    },
    
    diagnosticWorkup: {
      headCT: {
        sensitivity: "~100% within 6 hours of onset if expert reader",
        sensitivityDecline: "92% at 24 hours, 58% by day 5",
        findings: [
          "Blood in basal cisterns",
          "Blood in sylvian fissures, interhemispheric fissure",
          "Intracerebral extension (20-40%)",
          "Intraventricular blood (15-35%)",
          "Hydrocephalus"
        ],
        patterns: {
          aneurysmal: "Blood in basal cisterns, variable distribution",
          perimesencephalic: "Blood restricted to area in front of brainstem - often nonaneurysmal",
          convexal: "Blood at convexity - consider RCVS or cerebral amyloid angiopathy"
        }
      },
      
      lumbarPuncture: {
        indication: "Required if CT negative and SAH suspected (unless CT within 6 hours with expert interpretation)",
        classicFindings: [
          "Elevated opening pressure (mean ~350 mm H2O, normal <200)",
          "Elevated RBC count that does NOT diminish tube 1 to tube 4",
          "Xanthochromia (pink/yellow supernatant)"
        ],
        xanthochromia: {
          timing: "Detectable by 12 hours, lasts ≥2 weeks",
          note: "Absence does not exclude SAH if LP done <2 hours after onset",
          causes: "Hemoglobin degradation products - distinguishes true SAH from traumatic tap"
        },
        traumaticTapVsSAH: [
          "Clearing of RBCs between tubes suggests traumatic tap (but NOT reliable)",
          "Xanthochromia strongly suggests true SAH",
          "Elevated opening pressure suggests pathologic process",
          "If last tube has near-zero RBCs, traumatic tap more likely"
        ]
      },
      
      vascularImaging: {
        CTA: "Sens 83-98% for aneurysm detection, may miss <3mm aneurysms",
        MRA: "Similar sensitivity to CTA for aneurysm detection",
        DSA: "Gold standard - highest resolution for aneurysm detection"
      },
      
      ottawaSAHRule: {
        description: "Clinical decision rule for low-risk patients",
        criteria: [
          "Age ≥40 years",
          "Neck pain or stiffness",
          "Limited neck flexion on exam",
          "Witnessed loss of consciousness",
          "Onset during exertion",
          "Thunderclap headache (instantly peaking pain)"
        ],
        performance: "100% sensitivity, 15% specificity - any positive feature warrants investigation"
      }
    },
    
    differentialDiagnoses: [
      "Reversible cerebral vasoconstriction syndrome (RCVS)",
      "Intracerebral hemorrhage",
      "Cerebral venous sinus thrombosis",
      "Cervical artery dissection",
      "Pituitary apoplexy",
      "Hypertensive crisis",
      "Meningitis",
      "Primary thunderclap headache (diagnosis of exclusion)"
    ],
    
    riskFactorResponses: {
      familyHistory: [
        "Yes, my mother had a brain aneurysm that ruptured when she was 50",
        "My uncle died from a brain hemorrhage - they said it was an aneurysm",
        "My sister was diagnosed with an unruptured aneurysm a few years ago",
        "No family history of aneurysms or strokes that I know of"
      ],
      
      smoking: [
        "Yes, I've smoked for about 20 years",
        "I quit smoking 5 years ago but smoked for decades before",
        "No, I've never been a smoker"
      ],
      
      hypertension: [
        "Yes, I have high blood pressure but I've been pretty good about taking my medications",
        "I was told my blood pressure was high at my last check-up but I haven't started medication yet",
        "No, my blood pressure has always been normal"
      ],
      
      substanceUse: [
        "I use cocaine occasionally - last time was a few days ago",
        "I was using methamphetamines earlier today",
        "No recreational drugs",
        "Just alcohol socially, nothing else"
      ],
      
      priorAneurysm: [
        "Yes, I was actually told I had a small aneurysm that they were monitoring",
        "I had an aneurysm clipped/coiled several years ago",
        "No, I've never been told I have an aneurysm"
      ]
    }
  },

  // ============================================================================
  // DIAGNOSIS: BACTERIAL MENINGITIS
  // ============================================================================
  
  bacterialMeningitis: {
    description: "Acute bacterial infection of the leptomeninges",
    commonPathogens: {
      adults: ["Streptococcus pneumoniae", "Neisseria meningitidis", "Listeria monocytogenes (age >50 or immunocompromised)"],
      healthcareAssociated: ["Staphylococci", "Gram-negative bacilli"]
    },
    
    hpiTemplates: {
      onset: [
        "The headache started yesterday and has been getting progressively worse",
        "I've been feeling sick for about 2 days now - started with fever and chills, then this terrible headache developed",
        "It came on over several hours - started feeling feverish, then developed this pounding headache",
        "Woke up this morning feeling awful with fever and severe headache that keeps getting worse",
        "Been feeling like I'm coming down with something for a day or two, but this headache is now unbearable"
      ],
      
      quality: [
        "It's a constant, throbbing pain all over my head",
        "Feels like intense pressure inside my skull",
        "Pounding headache that won't let up",
        "My whole head is aching and feels heavy"
      ],
      
      severity: [
        "This is severe - probably an 8 or 9 out of 10",
        "It's the worst headache I've had while being sick like this",
        "Really intense - I can barely think straight",
        "Very severe and nothing seems to help it"
      ],
      
      timing: [
        "It's been constant for the past day, maybe getting slightly worse",
        "Started about 24 hours ago and has been relentless",
        "Been going on since yesterday afternoon without any relief"
      ],
      
      aggravating: [
        "Looking at any light makes it so much worse",
        "Every sound seems magnified and painful",
        "I can't move my neck without terrible pain",
        "Bending my head forward is excruciating"
      ],
      
      alleviating: [
        "Lying in a dark quiet room helps a little, but it's still there",
        "Nothing has really helped - ibuprofen barely touched it",
        "Keeping perfectly still makes it slightly more bearable"
      ],
      
      associatedSymptoms: {
        fever: [
          "I've had a high fever - my wife said it was 103°F earlier",
          "Been having fever and chills for about a day now",
          "Definitely running a fever - feeling very hot and cold alternating"
        ],
        
        neckStiffness: [
          "My neck is so stiff - I can barely move it",
          "It hurts to bend my chin toward my chest",
          "The back of my neck is killing me",
          "I can't turn my head without severe pain"
        ],
        
        mentalStatusChanges: [
          "I feel confused, like I can't think clearly",
          "My family says I've been acting strange and not making sense",
          "I keep losing track of what I'm saying",
          "I feel really out of it - hard to focus on anything"
        ],
        
        nausea: [
          "I've vomited several times",
          "Feel extremely nauseous - can't keep anything down",
          "The nausea is almost as bad as the headache"
        ],
        
        photophobia: [
          "The light is absolutely unbearable",
          "Even this dim room feels too bright",
          "I've had all the curtains closed because light makes it so much worse"
        ],
        
        rash: [
          "I noticed some red spots on my legs and arms that weren't there before",
          "There's a spreading rash - started as dots and now some areas look bruised",
          "Haven't noticed any rash",
          "My skin looks normal to me"
        ]
      },
      
      recentHistory: {
        infections: [
          "I had a bad sinus infection about a week ago",
          "Been dealing with an ear infection for the past few days",
          "Had what I thought was just a cold that started getting much worse",
          "I've had some dental problems lately - bad toothache"
        ],
        
        exposures: [
          "My college roommate was just diagnosed with meningitis",
          "There's been some kind of outbreak at my school",
          "A coworker was hospitalized with a serious infection last week",
          "No known sick contacts that I'm aware of"
        ]
      }
    },
    
    physicalExamFindings: {
      vitalSigns: [
        "Fever >38°C (present in 74% of cases)",
        "Tachycardia",
        "Hypotension if septic",
        "Tachypnea"
      ],
      
      generalAppearance: [
        "Toxic-appearing, acutely ill",
        "Altered mental status (Glasgow Coma Scale <14 in 71%)",
        "Photophobic - shielding eyes from light",
        "Lethargic or confused"
      ],
      
      meningealSigns: {
        nuchalRigidity: {
          description: "Resistance to passive neck flexion",
          sensitivity: "30%",
          specificity: "68%",
          note: "Less sensitive in elderly >60 years"
        },
        
        kernigSign: {
          description: "Inability to extend knee when hip flexed 90°",
          sensitivity: "5%",
          specificity: "95%"
        },
        
        brudzinskiSign: {
          description: "Spontaneous hip flexion with passive neck flexion",
          sensitivity: "5%",
          specificity: "95%"
        },
        
        joltAccentuationHeadache: {
          description: "Worsening headache with horizontal head rotation 2-3 times per second",
          note: "May be more sensitive than Kernig/Brudzinski, but studies show variable results"
        }
      },
      
      skinFindings: {
        petechiae: "Small, non-blanching red dots (especially N. meningitidis)",
        purpura: "Larger non-blanching lesions, palpable",
        note: "Rash present in 8-26% overall, 64% with meningococcal meningitis"
      },
      
      neurologicFindings: [
        "Cranial nerve palsies (9% of cases)",
        "Focal deficits (22% - aphasia, hemiparesis)",
        "Seizures (23%)",
        "Papilledema (4%)"
      ],
      
      classicTriad: {
        components: ["Fever", "Nuchal rigidity", "Altered mental status"],
        prevalence: "41% have all three",
        twoOfFourRule: "95% have at least 2 of: headache, fever, nuchal rigidity, altered mental status"
      }
    },
    
    diagnosticWorkup: {
      bloodTests: [
        "CBC with differential (leukocytosis or leukopenia)",
        "Blood cultures (positive in 50-90%)",
        "BMP, glucose (for CSF:serum ratio)",
        "Coagulation studies if petechiae/purpura",
        "Procalcitonin (supports bacterial etiology)"
      ],
      
      indicationsForCTBeforeLP: [
        "Immunocompromised state (HIV, transplant, immunosuppressive therapy)",
        "History of CNS disease (mass, stroke, focal infection)",
        "New-onset seizure within 1 week",
        "Papilledema",
        "Abnormal level of consciousness",
        "Focal neurologic deficit"
      ],
      
      CSFFindings: {
        typical: {
          openingPressure: "Elevated (>200 mm H2O)",
          WBC: ">1000/microL, predominantly neutrophils",
          glucose: "<40 mg/dL or CSF:serum ratio ≤0.4",
          protein: ">200 mg/dL",
          gramStain: "Positive in 50-90% (sensitivity 50-90%, specificity ~100%)"
        },
        
        byPathogen: {
          pneumococcus: "Gram-positive diplococci",
          meningococcus: "Gram-negative diplococci",
          hInfluenzae: "Small pleomorphic gram-negative coccobacilli",
          listeria: "Gram-positive rods and coccobacilli"
        }
      },
      
      keyPrinciple: "If CT will delay LP, start empiric antibiotics immediately after blood cultures"
    },
    
    riskFactorResponses: {
      immuneStatus: [
        "I'm on chemotherapy for cancer",
        "I take immunosuppressive medications for my transplant",
        "I have HIV - my last CD4 count was pretty low",
        "I take steroids for my autoimmune disease",
        "I'm not on any medications that affect my immune system"
      ],
      
      splenectomy: [
        "I had my spleen removed after a car accident years ago",
        "I've had my spleen removed due to blood condition",
        "No, I still have my spleen"
      ],
      
      recentProcedures: [
        "I had brain surgery about 2 weeks ago",
        "I have a shunt in my head for hydrocephalus",
        "I had a spinal tap done recently",
        "No recent procedures involving my head or spine"
      ],
      
      vaccinations: [
        "I got the meningitis vaccine when I went to college",
        "I'm not sure if I've ever been vaccinated for meningitis",
        "I know I've had my pneumonia shots",
        "I haven't had any vaccines in years"
      ],
      
      age: [
        "I'm 65 years old",
        "I'm in my 30s",
        "I'm elderly - in my 70s"
      ]
    }
  },

  // ============================================================================
  // DIAGNOSIS: MIGRAINE
  // ============================================================================
  
  migraine: {
    description: "Primary episodic headache disorder with severe headache, nausea, photophobia, phonophobia",
    prevalence: "12-15% of general population; F>M (17% vs 6%)",
    
    hpiTemplates: {
      prodrome: [
        "I could tell yesterday that a migraine was coming - I was really tired and irritable",
        "I've been craving sweets and yawning a lot since yesterday - that usually means a migraine is on its way",
        "My neck has been stiff since this morning, and I know that's my warning sign",
        "I noticed light was starting to bother me more than usual before the headache hit"
      ],
      
      onset: [
        "It started this morning and has gradually gotten worse over the past few hours",
        "I woke up with it - started mild but has been building for about 4 hours now",
        "It came on over about an hour, starting as a dull ache and now it's throbbing",
        "Started at work after lunch and has been progressively worsening"
      ],
      
      quality: [
        "It's a throbbing, pulsating pain",
        "Feels like my head is being squeezed and pounding at the same time",
        "It pulses with my heartbeat, especially when I move",
        "Intense throbbing on one side"
      ],
      
      severity: [
        "This is a 7 or 8 out of 10 - worse than my usual migraines",
        "About a 6 out of 10, which is typical for my migraines",
        "It's been getting worse - started at maybe a 4 and now it's at least an 8"
      ],
      
      location: [
        "It's on the right side of my head, behind my eye",
        "The left temple and forehead are the worst",
        "It started on one side but now the whole head hurts",
        "Mainly the right side of my head, radiating to my neck"
      ],
      
      duration: [
        "It's been going for about 6 hours now",
        "This one has lasted almost a whole day",
        "Usually my migraines last 4 to 8 hours - this one is typical so far",
        "It's been 12 hours and shows no signs of stopping"
      ],
      
      aggravating: [
        "Any physical activity makes it so much worse - even walking",
        "Light is unbearable - I've been hiding in a dark room",
        "Noise makes it worse - even normal conversation volume",
        "Bending over or moving my head quickly makes it pound",
        "The smell of food is making my nausea worse",
        "Going up stairs made me feel like my head would explode"
      ],
      
      alleviating: [
        "Lying down in a dark, quiet room helps some",
        "Cold compress on my forehead gives a little relief",
        "My medication usually helps if I catch it early enough",
        "Sleep is the only thing that really makes it go away",
        "Pressing on my temples gives temporary relief"
      ],
      
      associatedSymptoms: {
        nausea: [
          "I'm very nauseous - I've vomited twice already",
          "Feel queasy but haven't thrown up yet",
          "The nausea is almost as bad as the headache"
        ],
        
        photophobia: [
          "The light is killing me - I can barely open my eyes",
          "Even the screen on my phone is too bright",
          "I've had all the lights off and curtains closed"
        ],
        
        phonophobia: [
          "Every sound feels amplified and painful",
          "My kids' normal volume feels like shouting",
          "I'm wearing earplugs because any noise is unbearable"
        ],
        
        osmophobia: [
          "Smells are really bothering me - especially food smells",
          "My husband's cologne made me gag"
        ],
        
        cutaneousAllodynia: [
          "My scalp is so tender I can't even brush my hair",
          "Wearing my glasses hurts my head",
          "Even my shirt collar touching my neck is painful"
        ]
      },
      
      aura: {
        visual: [
          "Before the headache I saw zigzag lines that started small and grew larger over about 15-20 minutes",
          "I had a blind spot in my vision that gradually expanded with shimmering edges",
          "I saw flashing lights and then had a patch where I couldn't see clearly",
          "There were these scintillating lines like a fortress pattern that spread across my vision"
        ],
        
        sensory: [
          "My left hand went numb and tingly, then it spread up my arm before the headache started",
          "I had pins and needles in my face that lasted about 20 minutes",
          "One side of my face felt numb just before the headache hit"
        ],
        
        language: [
          "I was having trouble finding words right before the headache - my speech was mixed up",
          "I couldn't get my words out right for about 15 minutes before the pain started"
        ],
        
        motor: [
          "My arm felt weak and heavy before the headache - it's better now",
          "One side of my face drooped briefly before the pain started"
        ],
        
        timing: [
          "The visual symptoms lasted about 30 minutes then the headache started",
          "The aura came on gradually over about 10 minutes",
          "These symptoms went away as the headache got worse"
        ]
      },
      
      triggers: [
        "I didn't sleep well last night - that always triggers my migraines",
        "I skipped lunch today and that probably set it off",
        "It's that time of the month - my migraines always come with my period",
        "I had some red wine last night which is a trigger for me",
        "There was a lot of stress at work this week",
        "The weather changed dramatically today - the barometric pressure drop always gets me",
        "I've been staring at my computer screen all day",
        "I was out in bright sunlight without my sunglasses"
      ],
      
      priorHistory: [
        "I've had migraines since I was a teenager - usually 2-3 per month",
        "These started in my 20s and I get them more during stressful times",
        "I've had similar headaches before but they seem to be getting more frequent",
        "My mom has migraines too - I think I inherited them from her"
      ],
      
      medicationResponse: [
        "Sumatriptan usually works if I take it right away",
        "I took my triptan but it hasn't kicked in yet",
        "Excedrin used to help but doesn't seem to work as well anymore",
        "I've tried ibuprofen and acetaminophen with no relief",
        "I didn't have my medication with me when it started"
      ]
    },
    
    physicalExamFindings: {
      general: [
        "Patient appears uncomfortable, lying in darkened room",
        "Eyes closed, avoiding light",
        "Quiet, minimal movement",
        "Holding head or pressing temples"
      ],
      
      vitalSigns: [
        "Vital signs typically normal",
        "May have mild tachycardia from pain",
        "Blood pressure normal to mildly elevated from pain"
      ],
      
      neurologicExam: {
        critical: "Neurologic exam should be NORMAL between attacks",
        warning: "Any focal neurologic deficit is NOT typical migraine - requires urgent workup",
        typicalFindings: [
          "Cranial nerves intact",
          "Motor strength normal",
          "Sensory exam normal",
          "Coordination normal",
          "Gait normal"
        ]
      },
      
      duringAura: [
        "Visual field cut (if visual aura active)",
        "Sensory changes (if sensory aura active)",
        "All findings should resolve with aura"
      ]
    },
    
    diagnosticCriteria: {
      migraineWithoutAura: {
        A: "At least 5 attacks fulfilling criteria B-D",
        B: "Headache lasting 4-72 hours",
        C: "At least 2 of: unilateral, pulsating, moderate/severe intensity, aggravation by routine physical activity",
        D: "At least 1 of: nausea/vomiting, photophobia AND phonophobia",
        E: "Not better accounted for by another diagnosis"
      },
      
      migraineWithAura: {
        auraCharacteristics: [
          "At least one symptom spreads gradually over ≥5 minutes",
          "Two or more symptoms occur in succession",
          "Each symptom lasts 5-60 minutes",
          "At least one symptom is unilateral",
          "At least one symptom is positive (scintillations, tingling)",
          "Aura accompanied or followed within 60 minutes by headache"
        ]
      }
    },
    
    redFlags: [
      "First or worst headache of life",
      "Thunderclap onset",
      "New headache after age 50",
      "Headache with fever and meningismus",
      "New focal neurologic deficit that persists",
      "Headache with papilledema",
      "Headache that is progressively worsening",
      "Headache that differs from previous migraines",
      "Headache triggered by cough, exertion, or Valsalva",
      "Headache in immunocompromised or cancer patient"
    ],
    
    workup: {
      routine: "No imaging needed if typical migraine with normal exam",
      indicationsForImaging: [
        "Unexplained abnormal neurologic finding",
        "Atypical headache features",
        "Does not meet migraine criteria",
        "Additional risk factors for secondary headache"
      ],
      preferredImaging: "MRI with contrast for non-emergency; CT for emergency settings"
    }
  },

  // ============================================================================
  // DIAGNOSIS: TENSION-TYPE HEADACHE
  // ============================================================================
  
  tensionTypeHeadache: {
    description: "Most common primary headache - bilateral, non-pulsating, mild-moderate intensity",
    
    hpiTemplates: {
      onset: [
        "It started gradually this afternoon and has been steady",
        "I noticed it building up over a few hours",
        "It came on slowly after working at my desk all day",
        "Started this morning and has been pretty constant"
      ],
      
      quality: [
        "It feels like a tight band around my head",
        "More of a pressure or squeezing sensation",
        "Like my head is in a vice",
        "Dull, aching pressure on both sides"
      ],
      
      severity: [
        "It's about a 4 or 5 out of 10 - annoying but I can still function",
        "Mild to moderate - maybe a 5/10",
        "Not severe, just constant and bothersome"
      ],
      
      location: [
        "Both sides of my head, mostly the forehead",
        "All around my head like a band",
        "The temples and back of my head",
        "Mostly in the forehead and behind my eyes"
      ],
      
      aggravating: [
        "Stress definitely makes it worse",
        "Sitting at my computer for hours doesn't help",
        "It gets worse later in the day"
      ],
      
      alleviating: [
        "Taking a break and getting some fresh air helps",
        "Tylenol or ibuprofen usually takes the edge off",
        "Relaxing and massaging my temples helps some"
      ],
      
      associatedSymptoms: [
        "Maybe some mild light sensitivity, but not like a migraine",
        "Some neck tension and tightness in my shoulders",
        "No nausea or vomiting",
        "I can still eat and work, just uncomfortable"
      ]
    },
    
    physicalExamFindings: [
      "Vital signs normal",
      "Neurologic exam normal",
      "May have pericranial muscle tenderness",
      "No meningismus",
      "No papilledema"
    ],
    
    distinguishingFeatures: {
      vsMigraine: [
        "Bilateral (migraine typically unilateral)",
        "Non-pulsating (migraine is throbbing)",
        "Mild to moderate (migraine moderate to severe)",
        "Not aggravated by routine activity (migraine is)",
        "No nausea or vomiting (common in migraine)",
        "Light/sound sensitivity less prominent"
      ]
    }
  },

  // ============================================================================
  // DIAGNOSIS: CERVICAL ARTERY DISSECTION
  // ============================================================================
  
  cervicalArteryDissection: {
    description: "Carotid or vertebral artery dissection causing headache and stroke risk",
    
    hpiTemplates: {
      onset: [
        "The headache started after I was doing some intense exercise",
        "It came on after I had my neck manipulated at the chiropractor",
        "I had been turning my head a lot while painting the ceiling and then this headache started",
        "It started suddenly while I was doing yoga - during a neck stretch"
      ],
      
      quality: [
        "It's a sharp, constant pain on one side of my head and neck",
        "There's a pulsating quality to it behind my ear",
        "The pain radiates from my neck up into my head"
      ],
      
      location: [
        "Mainly on the right side of my neck and head",
        "It's centered around my temple and behind my eye",
        "The pain goes from my neck up the back of my head"
      ],
      
      associatedSymptoms: {
        hornerSyndrome: [
          "I noticed my right eyelid is drooping",
          "My pupil looks smaller on one side",
          "One side of my face seems drier - less sweaty"
        ],
        
        strokeSymptoms: [
          "I'm having some weakness on my left side",
          "My speech feels a bit slurred",
          "I've been having some vision problems",
          "Part of my face feels numb"
        ],
        
        pulsatileTinnitus: [
          "I can hear a whooshing sound in my ear",
          "There's a rhythmic pulsing sound in my head"
        ]
      },
      
      recentTrauma: [
        "I was in a minor car accident last week - just a fender bender",
        "I had aggressive chiropractic manipulation a few days ago",
        "I remember jerking my head suddenly while exercising",
        "No trauma that I can remember"
      ]
    },
    
    physicalExamFindings: {
      hornerSyndrome: {
        triad: ["Miosis (small pupil)", "Ptosis (drooping eyelid)", "Anhidrosis (decreased sweating)"],
        prevalence: "~38% carotid dissection, ~19% vertebral dissection"
      },
      
      neurologicDeficits: [
        "Hemiparesis",
        "Hemisensory loss",
        "Visual field deficit",
        "Ataxia (vertebral dissection)",
        "Cranial nerve palsies"
      ],
      
      other: [
        "Carotid bruit (may be present)",
        "Neck tenderness over affected vessel"
      ]
    },
    
    diagnosticWorkup: {
      imaging: [
        "CTA or MRA of head and neck (sensitivity 50-80%, specificity 67-99%)",
        "MRI may show intramural hematoma",
        "DSA if high suspicion and noninvasive imaging negative"
      ],
      
      keyPoint: "Most patients do NOT have thunderclap headache - only 3-9% do"
    }
  },

  // ============================================================================
  // DIAGNOSIS: GIANT CELL ARTERITIS
  // ============================================================================
  
  giantCellArteritis: {
    description: "Inflammatory vasculitis affecting medium/large arteries, primarily in elderly",
    ageGroup: "Almost exclusively >50 years old, peak 70-80",
    
    hpiTemplates: {
      onset: [
        "This headache started about 2 weeks ago and has been getting worse",
        "I've had a new type of headache for the past month that's different from anything before",
        "The headache has been gradually worsening over several weeks"
      ],
      
      quality: [
        "It's a throbbing, burning pain in my temple",
        "Feels like a constant ache, worse when I touch my scalp",
        "There's tenderness over my temple that I've never had before"
      ],
      
      location: [
        "Mainly in my right temple area",
        "Over both of my temples",
        "The sides of my head near my ears"
      ],
      
      associatedSymptoms: {
        jawClaudication: [
          "My jaw gets tired and hurts when I chew - I have to stop eating and rest",
          "When I eat, my jaw muscles ache and I have to take breaks",
          "Chewing has become painful after a few bites"
        ],
        
        visualSymptoms: [
          "I had an episode where I temporarily lost vision in one eye - it came back but scared me",
          "I've been having blurry vision on and off",
          "My vision seems to be getting worse, especially on one side",
          "I had complete vision loss in my right eye that hasn't come back"
        ],
        
        scalpTenderness: [
          "My scalp is so tender I can barely brush my hair",
          "It hurts to lay my head on the pillow"
        ],
        
        systemicSymptoms: [
          "I've been feeling generally unwell - fatigued and feverish",
          "I've lost about 10 pounds without trying",
          "I've had these strange fevers that come and go",
          "I've been feeling stiff and achy, especially in my shoulders and hips"
        ]
      }
    },
    
    physicalExamFindings: {
      temporalArtery: [
        "Temporal artery tender to palpation",
        "Decreased or absent temporal artery pulse",
        "Temporal artery nodularity or swelling",
        "Scalp tenderness over affected area"
      ],
      
      visual: [
        "May have anterior ischemic optic neuropathy",
        "Visual field defects",
        "Afferent pupillary defect"
      ],
      
      systemic: [
        "Low-grade fever",
        "Weight loss signs"
      ]
    },
    
    diagnosticWorkup: {
      labs: [
        "ESR (typically markedly elevated, often >100 mm/hr)",
        "CRP (elevated)",
        "CBC (may show normocytic anemia, thrombocytosis)"
      ],
      
      imaging: [
        "Temporal artery ultrasound may show 'halo sign'",
        "CT/MR angiography if large vessel involvement suspected"
      ],
      
      biopsy: "Temporal artery biopsy - gold standard for diagnosis",
      
      urgency: "Vision loss can be permanent - start steroids immediately if suspected while awaiting workup"
    }
  },

  // ============================================================================
  // DIAGNOSIS: CARBON MONOXIDE POISONING
  // ============================================================================
  
  carbonMonoxidePoisoning: {
    description: "Toxic exposure causing headache, typically multiple household members affected",
    
    hpiTemplates: {
      onset: [
        "The headache started this morning and my spouse has the same headache",
        "We all woke up with headaches - everyone in the house is affected",
        "The headache seems to get worse when I'm at home and better when I leave",
        "It started a few hours after we turned on the furnace for the first time this winter"
      ],
      
      quality: [
        "It's a dull, constant headache - feels like pressure",
        "Throbbing headache that won't go away",
        "Like a tight band around my head"
      ],
      
      timing: [
        "It started this morning and has been constant all day",
        "The headache improved when I went outside and came back when I returned home",
        "Worse in the morning, seems to lessen as the day goes on"
      ],
      
      associatedSymptoms: [
        "I also feel dizzy and confused",
        "I've been nauseous and threw up once",
        "My vision seems blurry",
        "I feel weak and tired",
        "I've been having trouble thinking clearly",
        "My chest feels tight"
      ],
      
      environmentalClues: [
        "We just had a new gas furnace installed",
        "We've been using a propane heater indoors",
        "There was a generator running in the garage",
        "We had a charcoal grill going inside because of the storm",
        "Our carbon monoxide detector has been beeping - we thought the battery was dead"
      ],
      
      multipleAffected: [
        "My whole family has headaches and feels sick",
        "The dog has been acting strange too - very lethargic",
        "Everyone at work on my floor has been complaining of headaches today"
      ]
    },
    
    physicalExamFindings: [
      "May appear normal or have subtle findings",
      "Classic 'cherry red' skin is rare and late finding",
      "Tachycardia",
      "Altered mental status in severe cases",
      "Cardiac ischemia/arrhythmia possible"
    ],
    
    diagnosticWorkup: {
      keyTest: "Carboxyhemoglobin (COHb) level via co-oximetry",
      note: "Standard pulse oximetry will be falsely normal",
      PaO2: "Arterial PaO2 is normal (measures dissolved O2, not hemoglobin saturation)",
      levels: {
        normal: "<3% non-smoker, up to 10% in smokers",
        symptomatic: ">10% typically symptomatic",
        severe: ">25-30% severe poisoning risk"
      }
    }
  },

  // ============================================================================
  // DIAGNOSIS: ACUTE ANGLE-CLOSURE GLAUCOMA
  // ============================================================================
  
  acuteAngleClosureGlaucoma: {
    description: "Ophthalmic emergency with acute elevated intraocular pressure",
    
    hpiTemplates: {
      onset: [
        "My eye started hurting suddenly a few hours ago, and now I have a terrible headache",
        "I was in a dark room watching a movie when my eye suddenly became very painful",
        "The headache started with severe eye pain on one side"
      ],
      
      quality: [
        "Deep aching pain in and around my eye",
        "Feels like pressure building inside my eye",
        "Throbbing pain behind my eyeball"
      ],
      
      location: [
        "Centered around my right eye but radiates to my forehead",
        "It's behind my eye on the left side",
        "One-sided headache worst around the eye"
      ],
      
      associatedSymptoms: [
        "I'm seeing halos around lights",
        "My vision has become very blurry in that eye",
        "I've been nauseous and vomited",
        "The eye looks red",
        "I can barely see out of the affected eye"
      ]
    },
    
    physicalExamFindings: {
      affectedEye: [
        "Conjunctival injection (red eye) with ciliary flush",
        "Cornea appears hazy or 'steamy' (normally clear)",
        "Pupil mid-dilated and fixed/sluggish",
        "Elevated intraocular pressure (often >40 mmHg, normal 10-21)"
      ],
      
      noDischarge: "No purulent discharge (distinguishes from conjunctivitis)"
    },
    
    diagnosticWorkup: {
      essential: "Intraocular pressure measurement (tonometry)",
      slitLamp: "Shows shallow anterior chamber, corneal edema",
      urgency: "Sight-threatening emergency - requires immediate ophthalmology consultation"
    }
  },

  // ============================================================================
  // DIAGNOSIS: IDIOPATHIC INTRACRANIAL HYPERTENSION (PSEUDOTUMOR CEREBRI)
  // ============================================================================
  
  idiopathicIntracranialHypertension: {
    description: "Elevated ICP without mass lesion, typically in obese women of childbearing age",
    
    hpiTemplates: {
      onset: [
        "The headaches have been getting progressively worse over the past few weeks",
        "I've been having daily headaches for about a month now",
        "Started as occasional headaches but now it's constant"
      ],
      
      quality: [
        "Feels like pressure inside my head",
        "A constant, dull ache that's always there",
        "Throbbing headache that's worse in the morning"
      ],
      
      aggravating: [
        "It gets much worse when I strain, cough, or bend over",
        "Lying down makes it worse",
        "Any Valsalva maneuver increases the pressure"
      ],
      
      associatedSymptoms: {
        visual: [
          "I've been having brief episodes where my vision goes gray or black",
          "I'm seeing double sometimes",
          "My peripheral vision seems to be getting worse",
          "I have this whooshing sound in my ears"
        ],
        
        tinnitus: [
          "I hear a pulsing sound in my ears, like my heartbeat",
          "There's a constant whooshing noise"
        ]
      }
    },
    
    physicalExamFindings: {
      key: "Papilledema (bilateral disc swelling)",
      visual: [
        "Visual field defects (enlarged blind spot)",
        "Decreased visual acuity if advanced",
        "Sixth nerve palsy (false localizing sign)"
      ]
    },
    
    diagnosticWorkup: {
      imaging: "MRI brain to rule out mass lesion, venous thrombosis",
      LP: "Opening pressure elevated (>250 mm H2O in adults), normal CSF composition",
      criteria: "Modified Dandy criteria - normal neuroimaging, elevated ICP, normal CSF, no other cause"
    }
  },

  // ============================================================================
  // NEGATIVE RESPONSE TEMPLATES - For Ruling Out Specific Diagnoses
  // ============================================================================
  
  negativeResponses: {
    notSAH: {
      onset: [
        "No, it came on gradually over a few hours",
        "It wasn't sudden - just slowly got worse",
        "I've had this same headache before"
      ],
      severity: [
        "It's bad but not the worst ever",
        "I've had worse headaches from my migraines"
      ]
    },
    
    notMeningitis: {
      fever: [
        "No fever that I've noticed",
        "I've checked my temperature - it's been normal"
      ],
      neck: [
        "My neck feels fine - no stiffness",
        "I can move my neck without any problem"
      ],
      mentalStatus: [
        "I feel completely lucid and clear-headed",
        "No confusion at all"
      ]
    },
    
    notArterialDissection: {
      trauma: [
        "No recent neck trauma or manipulation",
        "Haven't had any chiropractic work or injuries"
      ],
      horner: [
        "My eyes and face feel normal",
        "No drooping or vision changes"
      ]
    },
    
    notGCA: {
      age: [
        "I'm only 35 years old",
        "I'm in my 40s"
      ],
      temple: [
        "No tenderness when I touch my temples",
        "The temporal area feels normal"
      ],
      jaw: [
        "No pain when I chew",
        "Eating doesn't cause any jaw fatigue"
      ]
    },
    
    notGlaucoma: {
      eye: [
        "My eyes feel fine",
        "No eye pain at all"
      ],
      vision: [
        "Vision is clear in both eyes",
        "No halos around lights"
      ]
    },
    
    notCO: {
      household: [
        "No one else in my family is sick",
        "I'm the only one with a headache"
      ],
      environment: [
        "We don't use any gas appliances",
        "No recent furnace or heater use"
      ]
    }
  },

  // ============================================================================
  // RISK FACTOR RESPONSE TEMPLATES - General
  // ============================================================================
  
  riskFactorResponses: {
    headacheHistory: {
      migraines: [
        "Yes, I've had migraines for years - about 2-3 per month",
        "I get migraines occasionally, maybe once every few months",
        "No history of migraines",
        "I used to get migraines but they stopped years ago"
      ],
      
      priorHeadaches: [
        "This is exactly like my usual headaches",
        "This feels completely different from my normal headaches",
        "I rarely get headaches - this is unusual for me",
        "I've never had a headache this severe before"
      ]
    },
    
    medications: {
      anticoagulants: [
        "I take warfarin for my heart condition",
        "I'm on Eliquis for atrial fibrillation",
        "I take aspirin every day",
        "Not on any blood thinners"
      ],
      
      hormones: [
        "I take birth control pills",
        "I'm on hormone replacement therapy",
        "Not taking any hormones"
      ],
      
      analgesics: [
        "I take Excedrin almost daily for headaches",
        "I use ibuprofen a few times a week",
        "I rarely need to take pain medication"
      ]
    },
    
    immuneStatus: [
      "I have HIV and my CD4 count is low",
      "I'm on immunosuppressants for my transplant",
      "I'm going through chemotherapy right now",
      "My immune system is healthy as far as I know"
    ],
    
    cancerHistory: [
      "I was diagnosed with lung cancer 6 months ago",
      "I had breast cancer but it's been in remission for 5 years",
      "No history of cancer"
    ],
    
    pregnancyStatus: [
      "I'm 28 weeks pregnant",
      "I just had a baby 3 weeks ago",
      "No, I'm not pregnant and haven't been recently",
      "I had a baby 6 weeks ago and had pre-eclampsia during the pregnancy"
    ],
    
    substanceUse: {
      alcohol: [
        "I had some red wine last night",
        "I drink socially but nothing recently",
        "I don't drink alcohol"
      ],
      
      drugs: [
        "I used cocaine earlier today",
        "I smoke marijuana occasionally",
        "No recreational drug use"
      ],
      
      smoking: [
        "I smoke about a pack a day",
        "I quit smoking 2 years ago",
        "Never smoked"
      ]
    }
  },

  // ============================================================================
  // DIFFERENTIAL DIAGNOSES BY SCENARIO
  // ============================================================================
  
  differentialsByScenario: {
    thunderclapHeadache: [
      "Subarachnoid hemorrhage (SAH)",
      "Reversible cerebral vasoconstriction syndrome (RCVS)",
      "Cervical artery dissection",
      "Cerebral venous sinus thrombosis",
      "Pituitary apoplexy",
      "Hypertensive crisis",
      "Colloid cyst of third ventricle",
      "Spontaneous intracranial hypotension (rebound after CSF leak)",
      "Primary thunderclap headache (diagnosis of exclusion)"
    ],
    
    headacheWithFever: [
      "Bacterial meningitis",
      "Viral meningitis",
      "Encephalitis",
      "Brain abscess",
      "Sinusitis with intracranial extension",
      "Subarachnoid hemorrhage (late, as blood breaks down)",
      "Systemic infection with headache"
    ],
    
    headacheWithFocalDeficit: [
      "Stroke (ischemic or hemorrhagic)",
      "Brain tumor",
      "Brain abscess",
      "Subdural hematoma",
      "Migraine with aura (diagnosis of exclusion)",
      "Todd's paralysis post-seizure",
      "Arterial dissection with stroke"
    ],
    
    headacheWithVisualSymptoms: [
      "Migraine with visual aura",
      "Acute angle-closure glaucoma",
      "Giant cell arteritis",
      "Idiopathic intracranial hypertension",
      "Optic neuritis",
      "Pituitary apoplexy",
      "Cerebral venous sinus thrombosis"
    ],
    
    newHeadacheOver50: [
      "Giant cell arteritis",
      "Brain tumor (primary or metastatic)",
      "Subdural hematoma",
      "Cerebral venous sinus thrombosis",
      "Medication overuse headache",
      "Secondary headache from systemic illness"
    ],
    
    headacheInPregnancy: [
      "Pre-eclampsia/eclampsia",
      "PRES (posterior reversible encephalopathy syndrome)",
      "Cerebral venous sinus thrombosis",
      "Reversible cerebral vasoconstriction syndrome",
      "Pituitary apoplexy",
      "Post-dural puncture headache",
      "Primary headache (migraine, tension)"
    ],
    
    postureDependent: {
      worseStanding: [
        "Post-dural puncture headache",
        "Spontaneous intracranial hypotension (CSF leak)"
      ],
      worseLyingDown: [
        "Elevated intracranial pressure",
        "Brain tumor",
        "Idiopathic intracranial hypertension"
      ]
    }
  },

  // ============================================================================
  // WORKUP EXPECTATIONS
  // ============================================================================
  
  workupExpectations: {
    SAH: {
      headCT: {
        positive: "Hyperdense blood in basal cisterns, sylvian fissures, interhemispheric fissure",
        sensitivity: "~100% within 6 hours, 92% at 24 hours, declines thereafter",
        fisherGrade: "Grading of blood volume predicts vasospasm risk"
      },
      LP: {
        positive: "Elevated RBCs not clearing, xanthochromia, elevated opening pressure",
        timing: "Required if CT negative and SAH suspected (unless CT within 6 hours)"
      },
      CTA: "May show aneurysm, sensitivity 83-98%",
      DSA: "Gold standard for aneurysm detection"
    },
    
    meningitis: {
      bloodWork: {
        CBC: "Leukocytosis with left shift (or leukopenia in severe cases)",
        cultures: "Positive in 50-90%",
        procalcitonin: "Elevated supports bacterial etiology"
      },
      LP: {
        WBC: ">1000/microL, neutrophil predominant",
        glucose: "<40 mg/dL or CSF:serum ratio ≤0.4",
        protein: ">200 mg/dL",
        gramStain: "Positive in 50-90%; sensitivity 50-90%, specificity ~100%",
        openingPressure: "Elevated (mean ~350 mm H2O)"
      },
      CTIndications: "Immunocompromised, CNS disease history, new seizure, papilledema, AMS, focal deficit"
    },
    
    migraine: {
      imaging: "Not routinely needed if typical features with normal exam",
      indicationsForImaging: [
        "Abnormal neurologic exam",
        "Atypical features",
        "First severe headache",
        "Progressive worsening pattern",
        "Age >50 with new headache"
      ]
    },
    
    dissection: {
      CTA_MRA: "Sensitivity 50-80%, specificity 67-99%",
      DSA: "If noninvasive imaging negative but high suspicion"
    },
    
    GCA: {
      labs: {
        ESR: "Typically markedly elevated, often >100 mm/hr",
        CRP: "Elevated",
        CBC: "Normocytic anemia, thrombocytosis possible"
      },
      biopsy: "Temporal artery biopsy is gold standard"
    },
    
    COpoisoning: {
      COHb: "Carboxyhemoglobin via co-oximetry (standard pulse ox is falsely normal)",
      levels: "Normal <3% non-smoker; >10% typically symptomatic"
    },
    
    glaucoma: {
      IOP: "Elevated intraocular pressure (often >40 mmHg, normal 10-21)",
      slitLamp: "Shallow anterior chamber, corneal edema"
    }
  },

  // ============================================================================
  // HELPER FUNCTIONS
  // ============================================================================
  
  helpers: {
    getRandomResponse: function(responseArray) {
      if (!responseArray || responseArray.length === 0) return "";
      return responseArray[Math.floor(Math.random() * responseArray.length)];
    },
    
    getHPIResponse: function(diagnosis, category) {
      const templates = this[diagnosis]?.hpiTemplates?.[category];
      if (!templates) return null;
      if (Array.isArray(templates)) {
        return this.helpers.getRandomResponse(templates);
      }
      return templates;
    },
    
    getExamFindings: function(diagnosis) {
      return this[diagnosis]?.physicalExamFindings || null;
    },
    
    getWorkupResults: function(diagnosis) {
      return this.workupExpectations[diagnosis] || null;
    },
    
    getDifferentials: function(scenario) {
      return this.differentialsByScenario[scenario] || [];
    },
    
    getRiskFactorResponse: function(category, factor, isPositive) {
      const responses = this.riskFactorResponses[category]?.[factor];
      if (!responses) return null;

// ============================================================================
// FEVER TEMPLATES
// ============================================================================

  clinicalDangerSigns: {
    // Signs suggesting sepsis/septic shock
    sepsisFeatures: [
      "Hypotension (SBP <100 mmHg or MAP <65 mmHg)",
      "Altered mental status / confusion",
      "Tachypnea (RR >22/min)",
      "Hypoxemia requiring supplemental oxygen",
      "Lactate >2 mmol/L",
      "Oliguria despite fluid resuscitation",
      "Mottled skin / poor capillary refill (>3 seconds)",
      "Rigors / shaking chills (suggest bacteremia)"
    ],
    
    // FUO high-risk features requiring urgent workup
    feverHighRiskFeatures: [
      "Immunocompromised patient (HIV, transplant, chemotherapy, biologics)",
      "Prosthetic heart valve or implanted device",
      "Recent surgery or hospitalization",
      "Injection drug use",
      "Fever >38.3°C for >3 weeks without diagnosis",
      "Associated weight loss >5% body weight",
      "Night sweats requiring sheet changes",
      "New heart murmur",
      "Petechial or purpuric rash",
      "Lymphadenopathy"
    ],
    
    // UTI features suggesting complicated infection
    complicatedUTIFeatures: [
      "Fever >38.4°C (101°F)",
      "Flank pain or costovertebral angle tenderness",
      "Rigors or shaking chills",
      "Nausea and vomiting",
      "Signs of systemic illness",
      "Male patient with UTI symptoms",
      "Pregnancy",
      "Urinary tract obstruction (nephrolithiasis)",
      "Indwelling catheter or recent instrumentation",
      "Immunocompromised state"
    ],
    
    // Critical illness markers in sepsis
    sepsisOrganDysfunction: [
      "Respiratory: PaO2/FiO2 <300, need for mechanical ventilation",
      "Cardiovascular: Hypotension requiring vasopressors",
      "Renal: Creatinine >2.0 mg/dL or oliguria",
      "Hepatic: Bilirubin >2.0 mg/dL",
      "Hematologic: Platelets <100,000 or INR >1.5",
      "Neurologic: GCS <15"
    ]
  },

  // ============================================
  // SEPSIS / SEPTIC SHOCK
  // ============================================
  
  sepsis: {
    hpiTemplates: {
      onset: [
        "Started feeling sick yesterday, got progressively worse over the past 24 hours",
        "Woke up this morning with fever and chills, been getting weaker throughout the day",
        "Been feeling off for about 2 days, but took a turn for the worse last night",
        "Developed fever and body aches 3 days ago, came in today because I'm much worse"
      ],
      
      feverPattern: [
        "Temperature at home was 102.5°F, had shaking chills that wouldn't stop",
        "Fever up to 103°F with severe rigors that made my whole body shake",
        "Been having fevers off and on, highest was 101.8°F, with chills each time",
        "Temperature was 104°F this morning, took Tylenol but it barely helped"
      ],
      
      associatedSymptoms: {
        respiratory: [
          "Developed a cough about 2 days ago with yellow-green sputum",
          "Having trouble catching my breath even just sitting here",
          "Cough started a few days before the fever",
          "Breathing has been getting harder, feel like I can't get enough air"
        ],
        urinary: [
          "Pain and burning with urination for the past 3 days",
          "Been urinating more frequently but only small amounts",
          "Back pain on my right side along with the fever",
          "Haven't been urinating much today despite drinking fluids"
        ],
        abdominal: [
          "Severe abdominal pain, worst in my right lower side",
          "Nausea and vomiting for the past day, can't keep anything down",
          "Pain in my belly that's been getting worse",
          "Had diarrhea for 2 days before the fever started"
        ],
        skin: [
          "Noticed a red, warm, swollen area on my leg that's been spreading",
          "Have a wound that's been getting more red and painful",
          "Developed a rash with these dark spots that don't go away when I press on them",
          "The skin around my incision has been getting redder and more painful"
        ],
        neurologic: [
          "Family says I've been confused and not making sense",
          "Having trouble staying awake, feel very drowsy",
          "My family noticed I wasn't acting like myself",
          "Been having headaches and feel confused"
        ]
      },
      
      mentalStatusChanges: [
        "My spouse says I've been acting confused since this morning",
        "Can't think straight, everything feels foggy",
        "Family brought me in because I wasn't responding normally",
        "Been having trouble remembering things and focusing"
      ],
      
      fluidIntake: [
        "Haven't been able to keep any fluids down",
        "Barely had anything to drink in the past day",
        "Feel too sick to eat or drink",
        "Been trying to drink but keep throwing up"
      ]
    },
    
    riskFactors: {
      immunocompromise: [
        "Currently on chemotherapy for cancer",
        "Taking immunosuppressive medications for transplant",
        "Have HIV, last CD4 count was under 200",
        "On long-term steroids for autoimmune disease",
        "Receiving biologic therapy for rheumatoid arthritis"
      ],
      
      indwellingDevices: [
        "Have a central line/PICC line in place",
        "Have an indwelling urinary catheter",
        "Have a prosthetic heart valve",
        "Have a pacemaker/defibrillator",
        "Recently had surgery with hardware placed"
      ],
      
      recentHealthcare: [
        "Was in the hospital about 2 weeks ago",
        "Had surgery about a week ago",
        "Recently completed a course of antibiotics",
        "Have been getting dialysis"
      ],
      
      comorbidities: [
        "Have diabetes, blood sugars have been hard to control",
        "Have chronic kidney disease",
        "Have liver cirrhosis",
        "Have COPD and am on home oxygen",
        "Had my spleen removed years ago"
      ]
    },
    
    physicalExam: {
      vitalSigns: {
        typical: "Temperature 39.2°C (102.6°F), HR 118, BP 88/52, RR 26, SpO2 92% on room air",
        severeShock: "Temperature 38.8°C (101.8°F), HR 132, BP 72/40, RR 32, SpO2 88% on room air",
        earlyPresentation: "Temperature 38.9°C (102°F), HR 105, BP 102/68, RR 22, SpO2 95% on room air",
        hypothermic: "Temperature 35.8°C (96.4°F), HR 110, BP 85/50, RR 28 - Note: Hypothermia in sepsis indicates poor prognosis"
      },
      
      general: {
        toxicAppearing: "Acutely ill-appearing, diaphoretic, appears uncomfortable and lethargic",
        alteredMentalStatus: "Confused, oriented only to person, responds slowly to questions",
        extremelyIll: "Minimally responsive, appears moribund"
      },
      
      skin: {
        warmShock: "Skin warm and flushed, bounding pulses (early/warm distributive shock)",
        coldShock: "Skin cool and mottled, delayed capillary refill >3 seconds (late/cold shock)",
        petechiae: "Petechial rash on trunk and extremities (consider meningococcemia)",
        cellulitis: "Erythema, warmth, and induration of affected area with advancing border"
      },
      
      cardiopulmonary: {
        tachycardia: "Tachycardic, regular rhythm, no murmurs",
        hyperdynamic: "Hyperdynamic precordium, bounding pulses",
        pulmonaryFindings: "Crackles in right lower lobe, decreased breath sounds at bases",
        clearLungs: "Clear to auscultation bilaterally despite tachypnea"
      },
      
      sourceFindings: {
        pneumonia: "Decreased breath sounds right base, dullness to percussion, egophony",
        UTI_pyelonephritis: "Costovertebral angle tenderness on right, suprapubic tenderness",
        abdominal: "Diffuse abdominal tenderness with guarding, hypoactive bowel sounds",
        softTissue: "Erythema, warmth, fluctuance at wound site with purulent drainage",
        line: "Erythema and tenderness around central line insertion site"
      }
    },
    
    workupExpected: {
      initialLabs: {
        CBC: "WBC 18,500 with 92% neutrophils and 15% bands (left shift); or WBC 2,100 (leukopenia - poor prognostic sign); Platelets 85,000 (thrombocytopenia suggests DIC)",
        BMP: "Creatinine 2.1 mg/dL (AKI), BUN 45 mg/dL, Glucose 185 mg/dL, Bicarbonate 16 mEq/L (metabolic acidosis)",
        lactate: "Lactate 4.2 mmol/L (elevated >2 indicates tissue hypoperfusion; >4 high mortality)",
        LFTs: "AST 125, ALT 98, Bilirubin 2.8 mg/dL (hepatic dysfunction)",
        coagulation: "PT 18 seconds, INR 1.6, PTT 45 seconds (coagulopathy), D-dimer elevated",
        procalcitonin: "Procalcitonin 12.5 ng/mL (supports bacterial infection; useful for antibiotic duration)"
      },
      
      bloodCultures: {
        technique: "Two sets from two separate venipuncture sites BEFORE antibiotics; incubate ≥5 days",
        positiveRates: "Positive in 30-50% of sepsis cases",
        commonOrganisms: "E. coli, S. aureus, K. pneumoniae, S. pneumoniae most common",
        MRSAconsideration: "Consider MRSA coverage if risk factors: recent hospitalization, healthcare exposure, known colonization"
      },
      
      sourceSpecificStudies: {
        respiratory: "Chest X-ray (infiltrate), sputum culture and Gram stain, consider CT chest, respiratory viral panel",
        urinary: "Urinalysis (pyuria, bacteriuria, nitrites), urine culture, consider CT abdomen/pelvis if obstruction suspected",
        abdominal: "CT abdomen/pelvis with contrast (abscess, perforation, obstruction)",
        softTissue: "Wound culture, consider CT or MRI if deep infection/necrotizing fasciitis suspected",
        cardiac: "Blood cultures x 2+ sets, echocardiogram if endocarditis suspected"
      },
      
      ABG: "pH 7.28, PaCO2 28 mmHg (respiratory compensation), PaO2 65 mmHg, HCO3 14 mEq/L (metabolic acidosis with respiratory compensation)"
    },
    
    managementPrinciples: {
      hourOneBundleSSC: [
        "Measure lactate level; remeasure if initial lactate >2 mmol/L",
        "Obtain blood cultures before antibiotics",
        "Administer broad-spectrum antibiotics",
        "Begin 30 mL/kg crystalloid for hypotension or lactate ≥4 mmol/L",
        "Apply vasopressors if hypotensive during or after fluid resuscitation (MAP ≥65 mmHg)"
      ],
      
      fluidResuscitation: {
        initialVolume: "30 mL/kg crystalloid within first 3 hours",
        fluidChoice: "Balanced crystalloid (lactated Ringer's) preferred over normal saline",
        reassessment: "Assess fluid responsiveness with dynamic measures (pulse pressure variation, passive leg raise)",
        avoidance: "Avoid hydroxyethyl starch - increased mortality and renal injury"
      },
      
      antibiotics: {
        timing: "Within 1 hour of recognition - each hour delay increases mortality",
        broadSpectrum: "Cover gram-positive, gram-negative; add MRSA coverage if risk factors",
        typicalRegimen: "Vancomycin + piperacillin-tazobactam OR vancomycin + cefepime OR vancomycin + meropenem",
        narrowing: "De-escalate based on culture results, typically within 48-72 hours"
      },
      
      vasopressors: {
        firstLine: "Norepinephrine - first-line vasopressor",
        secondLine: "Vasopressin (up to 0.03 units/min) as second agent to reduce norepinephrine dose",
        targetMAP: "Target MAP 65-70 mmHg (higher may not improve outcomes)",
        avoidDopamine: "Avoid dopamine - increased arrhythmia risk vs norepinephrine"
      },
      
      sourceControl: {
        timing: "Within 6-12 hours of diagnosis when feasible",
        examples: "Drain abscess, remove infected catheter/device, debride necrotic tissue, relieve obstruction"
      }
    }
  },

  // ============================================
  // FEVER OF UNKNOWN ORIGIN (FUO)
  // ============================================
  
  feverOfUnknownOrigin: {
    definition: {
      classic: "Temperature >38.3°C (100.9°F) on several occasions for >3 weeks without diagnosis despite appropriate evaluation",
      newer: "Some experts suggest lowering threshold to >38.0°C (100.4°F)",
      categories: [
        "Classic FUO - no recent healthcare, not immunocompromised, no recent travel",
        "Healthcare-associated FUO - hospitalized or recent healthcare exposure",
        "FUO in immunocompromised - neutropenia, transplant, HIV, biologics, steroids",
        "Travel-associated FUO - recent travel to endemic areas"
      ]
    },
    
    hpiTemplates: {
      feverPattern: [
        "Been having fevers every day for about a month now, temperatures up to 102°F",
        "Temperatures spike in the late afternoon, then come down overnight",
        "Fevers have been coming and going for over 3 weeks, can't figure out why",
        "Running low-grade fevers around 100.5°F most days for the past month"
      ],
      
      associatedSymptoms: {
        constitutional: [
          "Lost about 15 pounds over the past 2 months without trying",
          "Wake up drenched in sweat almost every night",
          "Feel exhausted all the time, no energy to do anything",
          "Having chills with the fevers, sometimes shaking chills"
        ],
        joint: [
          "Joints have been aching, especially in my hands and knees",
          "Developed swelling in my wrists along with the fevers",
          "My joints feel stiff in the morning, takes hours to loosen up"
        ],
        skin: [
          "Noticed a rash that comes and goes, seems worse when I have fever",
          "Developed some bumps under my skin on my arms",
          "Have had mouth sores off and on"
        ],
        GI: [
          "Been having abdominal pain and diarrhea on and off",
          "Lost my appetite, food doesn't taste right",
          "Having some belly discomfort, mostly on the right side"
        ],
        headache: [
          "Headaches especially in my temple area, with scalp tenderness",
          "Jaw gets tired when I eat, have to stop and rest",
          "Having vision changes, things seem blurry sometimes"
        ]
      },
      
      priorWorkup: [
        "Had blood tests and chest X-ray, they were normal",
        "Already saw my regular doctor, they couldn't figure it out",
        "Been on antibiotics twice but fevers keep coming back",
        "Had a CT scan that didn't show anything obvious"
      ]
    },
    
    keyHistoryElements: {
      medications: [
        "Taking [medication] - started about 3 weeks before fevers began",
        "On blood pressure medication for years",
        "Taking herbal supplements",
        "Recently started a new medication"
      ],
      
      occupational: [
        "Work as a veterinarian/farmer - have contact with animals",
        "Work in healthcare",
        "Work in a microbiology laboratory",
        "Work outdoors, lots of tick exposure"
      ],
      
      travel: [
        "Traveled to [endemic area] about 6 weeks ago",
        "Lived in [country] years ago",
        "Recently returned from visiting family abroad",
        "Haven't traveled anywhere in years"
      ],
      
      animalExposure: [
        "Have cats at home, one scratched me recently",
        "Work with livestock - cattle and sheep",
        "Go hunting regularly, handle game",
        "Have a new puppy at home"
      ],
      
      foodExposure: [
        "Like unpasteurized cheese from the farmers market",
        "Ate some undercooked meat while traveling",
        "Drink raw milk",
        "No unusual food exposures"
      ],
      
      sexualHistory: [
        "Multiple partners, don't always use protection",
        "Monogamous relationship",
        "No new sexual contacts"
      ],
      
      substanceUse: [
        "Used to inject drugs years ago",
        "Smoke cigarettes",
        "Occasional marijuana use"
      ],
      
      familyHistory: [
        "Mother had lupus",
        "Father had inflammatory bowel disease",
        "Family member had tuberculosis",
        "No family history of febrile illnesses"
      ]
    },
    
    physicalExamFocus: {
      vital: "Confirm fever - rectal or oral temperature preferred; document pattern",
      
      headNeck: {
        temporalArtery: "Palpate for tenderness, nodularity, decreased pulse (GCA)",
        eyes: "Fundoscopy for Roth spots (endocarditis), papilledema",
        oralCavity: "Examine teeth, gums (dental abscess), palate (ulcers)"
      },
      
      lymphNodes: {
        cervical: "Anterior and posterior chains",
        supraclavicular: "Left supraclavicular (Virchow's node - abdominal malignancy)",
        axillary: "Bilateral",
        inguinal: "Bilateral"
      },
      
      cardiopulmonary: {
        heart: "Listen carefully for new murmurs (endocarditis)",
        lungs: "Crackles, decreased breath sounds"
      },
      
      abdominal: {
        hepatosplenomegaly: "Palpate for organomegaly",
        masses: "Assess for masses",
        tenderness: "Localize tenderness"
      },
      
      musculoskeletal: {
        joints: "Swelling, warmth, effusion",
        spine: "Tenderness over vertebrae (osteomyelitis, diskitis)"
      },
      
      skin: {
        rashes: "Examine entire skin surface",
        splinterHemorrhages: "Check nail beds",
        janewayLesions: "Painless erythematous lesions on palms/soles",
        oslerNodes: "Painful nodules on fingers/toes",
        livedo: "Livedo reticularis (vasculitis)"
      },
      
      genitourinary: {
        prostate: "Tenderness (prostatitis)",
        testicular: "Swelling, tenderness (epididymitis)",
        pelvic: "If symptoms suggest PID"
      }
    },
    
    initialWorkup: {
      basicLabs: [
        "CBC with differential and peripheral smear",
        "Complete metabolic panel including calcium",
        "Liver function tests (AST, ALT, alkaline phosphatase, bilirubin)",
        "Blood cultures x 2 sets from 2 sites (incubate ≥5 days)",
        "Urinalysis with reflex urine culture",
        "HIV antigen/antibody with reflex confirmatory testing",
        "ANA (antinuclear antibody)",
        "Rheumatoid factor",
        "ESR and CRP",
        "Ferritin (markedly elevated in Still's disease)",
        "Procalcitonin (utility in FUO unclear)"
      ],
      
      forYoungAdults: [
        "Heterophile antibody test (Monospot)",
        "EBV serology if Monospot negative"
      ],
      
      ifMalariaRisk: [
        "Thick and thin blood smears for malaria"
      ],
      
      imaging: [
        "CT chest, abdomen, pelvis with contrast"
      ]
    },
    
    advancedWorkup: {
      targetedBySymptoms: {
        endocarditis: "Echocardiogram (TTE, then TEE if high suspicion), serial blood cultures",
        tuberculosis: "TST or IGRA, sputum AFB stain/culture/PCR, consider bronchoscopy",
        endemicMycoses: "Histoplasma/Blastomycosis/Coccidioides serology and antigen testing",
        vasculitis: "ANCA, complement levels, affected tissue biopsy",
        lymphoma: "LDH, CT imaging, PET/CT, lymph node biopsy",
        mononucleosis: "EBV serology, CMV IgG/IgM or PCR, toxoplasma serology"
      },
      
      biopsySites: [
        "Temporal artery - if GCA suspected (do not delay steroids for biopsy)",
        "Lymph node - if enlarged, for malignancy/infection",
        "Skin - if rash present, relatively low risk",
        "Liver - if imaging shows lesions, for granulomatous disease",
        "Bone marrow - if cytopenias present, highest yield with hematologic abnormalities",
        "Bowel - if IBD suspected"
      ],
      
      PETscan: {
        indication: "Persistent FUO with unrevealing initial workup",
        sensitivity: "84-86%",
        specificity: "52-63%",
        diagnosticYield: "≥50%",
        bestFor: "Neoplasm, infection; less sensitive for Still's disease, TB, polymyalgia rheumatica"
      }
    },
    
    commonEtiologies: {
      infections: [
        "Tuberculosis (especially extrapulmonary)",
        "Endocarditis (culture-negative in 5-10%)",
        "Osteomyelitis",
        "Intra-abdominal abscess",
        "HIV (acute infection)",
        "EBV/CMV mononucleosis"
      ],
      
      malignancies: [
        "Lymphoma (especially non-Hodgkin)",
        "Leukemia",
        "Renal cell carcinoma",
        "Hepatocellular carcinoma",
        "Metastatic cancer"
      ],
      
      inflammatoryAutoimmune: [
        "Adult-onset Still's disease",
        "Giant cell arteritis/polymyalgia rheumatica",
        "Systemic lupus erythematosus",
        "Vasculitis",
        "Inflammatory bowel disease",
        "Sarcoidosis"
      ],
      
      other: [
        "Drug fever",
        "Pulmonary embolism",
        "Factitious fever"
      ]
    },
    
    outcomes: {
      nodiagnosis: "Up to 50% remain without diagnosis after extensive evaluation",
      prognosis: "Most undiagnosed patients have good prognosis",
      spontaneousResolution: "59% of undiagnosed cases resolve spontaneously"
    }
  },

  // ============================================
  // URINARY TRACT INFECTION
  // ============================================
  
  urinaryTractInfection: {
    
    // SIMPLE CYSTITIS
    simpleCystitis: {
      definition: "Infection confined to the bladder (lower urinary tract), no systemic symptoms",
      
      hpiTemplates: {
        dysuria: [
          "Burns when I urinate, been going on for 2 days",
          "Pain and stinging with urination since yesterday",
          "Hurts at the end when I'm finishing urinating",
          "Sharp burning sensation when I pee"
        ],
        
        frequency: [
          "Having to urinate every 30 minutes",
          "Constantly feel like I need to go even when I just went",
          "Going to the bathroom way more than usual, maybe 15 times a day",
          "Wake up multiple times at night to urinate"
        ],
        
        urgency: [
          "When I feel the urge, I have to go immediately or I'll have an accident",
          "Can barely hold it, have to rush to the bathroom",
          "Feel like I'm going to lose control of my bladder"
        ],
        
        suprapubicDiscomfort: [
          "Pressure and cramping in my lower belly",
          "Aching sensation right above my pubic bone",
          "Feel like my bladder is heavy and uncomfortable"
        ],
        
        urineCharacteristics: [
          "Urine looks cloudy and smells strong",
          "Noticed some blood in my urine",
          "Urine is darker than usual and has an odor"
        ],
        
        negativeFeatures: [
          "No fever or chills",
          "No back pain",
          "Just the bladder symptoms, otherwise feel okay",
          "No nausea or vomiting"
        ]
      },
      
      riskFactors: {
        female: [
          "Sexually active, had intercourse 2 days ago",
          "Use spermicides with diaphragm",
          "Went through menopause 5 years ago",
          "Have had several UTIs before"
        ],
        
        MDRriskFactors: [
          "Was on antibiotics about 3 months ago",
          "Was hospitalized last month",
          "Have had resistant bacteria before",
          "Recently traveled internationally",
          "Live in a nursing facility"
        ]
      },
      
      physicalExam: {
        vitalSigns: "Afebrile, vital signs normal",
        abdominal: "Mild suprapubic tenderness, no flank tenderness, no CVA tenderness",
        pelvic: "No vaginal discharge; if discharge present, evaluate for vaginitis"
      },
      
      diagnosis: {
        clinicalDiagnosis: "Can diagnose on symptoms alone in women with classic presentation",
        urinalysis: "Pyuria (WBC ≥10/hpf), bacteriuria, may have nitrites (gram-negative) or leukocyte esterase",
        urineCulture: "Not necessary for uncomplicated cases; obtain if MDR risk factors, treatment failure, or recurrent"
      },
      
      treatment: {
        firstLine: {
          nitrofurantoin: "100mg BID x 5 days - avoid if CrCl <30",
          TMP_SMX: "160/800mg BID x 3 days - avoid if local resistance >20%"
        },
        
        alternatives: {
          fosfomycin: "3g single dose - reserve for MDR risk; slightly less effective",
          pivmecillinam: "400mg BID x 3-5 days - where available",
          betaLactams: "Less effective than first-line; amoxicillin-clavulanate 500mg TID x 5-7 days",
          fluoroquinolones: "Reserve for more serious infections due to adverse effects"
        },
        
        avoidance: [
          "Fluoroquinolones - avoid for uncomplicated cystitis (risk of tendinopathy, neuropathy, CNS effects)",
          "Avoid nitrofurantoin if CrCl <30 mL/min",
          "Avoid TMP-SMX if local resistance >20%"
        ]
      }
    },

    // COMPLICATED UTI / PYELONEPHRITIS
    complicatedUTI: {
      definition: "UTI extending beyond bladder: pyelonephritis (kidney) or with systemic features",
      
      hpiTemplates: {
        onset: [
          "Started with burning when I urinated 2 days ago, then yesterday developed fever and back pain",
          "Had bladder symptoms for a few days, then suddenly got much sicker with chills",
          "Woke up with high fever, back pain, and nausea"
        ],
        
        flankPain: [
          "Severe pain in my right side, in my back just below my ribs",
          "Left-sided back pain that goes around to my front",
          "Aching pain in my back that's worse when someone touches it",
          "The pain is constant, deep, and makes me not want to move"
        ],
        
        systemicSymptoms: [
          "Temperature was 103°F with shaking chills",
          "Been vomiting since last night, can't keep anything down",
          "Feel terrible - weak, sweaty, achy all over",
          "Had rigors that made my whole body shake"
        ],
        
        cystitisSymptoms: [
          "Also having burning with urination and going frequently",
          "Still having the urgency and frequency on top of the fever",
          "The bladder symptoms started first, then the fever and back pain"
        ]
      },
      
      riskFactors: {
        anatomic: [
          "Have kidney stones, had one pass last year",
          "Had kidney surgery before",
          "Have an enlarged prostate",
          "Have a catheter in place"
        ],
        
        hostFactors: [
          "Diabetic, blood sugars have been running high",
          "Had a kidney transplant",
          "On medications that suppress my immune system",
          "Am pregnant"
        ],
        
        MDRriskFactors: [
          "Was in the hospital recently",
          "On antibiotics in the past 3 months",
          "Known to have resistant bacteria",
          "Have a urinary catheter"
        ]
      },
      
      physicalExam: {
        vitalSigns: "Temperature 39.4°C (103°F), HR 112, BP 105/65, RR 20",
        vitalSignsSevere: "Temperature 38.8°C, HR 125, BP 85/50, RR 26 (septic)",
        
        general: "Ill-appearing, diaphoretic, lying still, appears uncomfortable",
        
        abdominal: "Mild suprapubic tenderness, no peritoneal signs",
        
        CVAtenderness: "Marked costovertebral angle tenderness on [right/left], patient winces with percussion",
        
        skinInSepsis: "Warm and flushed (early shock) OR cool and mottled (late shock)"
      },
      
      workup: {
        urinalysis: "Pyuria with WBC casts (pathognomonic of pyelonephritis), bacteriuria",
        urineCulture: "Required - for directed therapy",
        bloodCultures: "Recommended for all hospitalized patients and those with sepsis",
        
        basicLabs: "CBC (leukocytosis), BMP (creatinine for kidney function), lactate if sepsis suspected",
        
        imaging: {
          notRoutine: "Not needed for uncomplicated pyelonephritis with good clinical response",
          indications: "Obtain CT abdomen/pelvis if: no improvement in 48-72h, suspected obstruction/abscess, severely ill, diabetic, transplant recipient",
          findings: "CT may show renal enlargement, perinephric stranding, hydronephrosis, abscess"
        }
      },
      
      hospitalizationIndications: [
        "Sepsis or critical illness",
        "Persistent high fever (>38.4°C/101°F) or pain despite initial treatment",
        "Marked debility or frailty",
        "Suspected urinary tract obstruction",
        "Unable to maintain oral hydration or take oral medications",
        "Concern about medication adherence",
        "Pregnancy"
      ],
      
      treatment: {
        outpatient: {
          noMDRrisk: {
            firstLine: "Fluoroquinolone (ciprofloxacin 500mg BID or levofloxacin 750mg daily) x 5-7 days",
            alternative: "TMP-SMX 160/800mg BID x 7-14 days (if susceptible)"
          },
          withMDRrisk: "Consider initial IV dose, await cultures, use broader-spectrum oral agents based on susceptibilities"
        },
        
        inpatient: {
          nonCritical: [
            "Ceftriaxone 1g IV daily",
            "Fluoroquinolone IV",
            "Add vancomycin if gram-positive cocci on Gram stain or MRSA risk"
          ],
          criticalOrObstruction: [
            "Piperacillin-tazobactam 4.5g IV q6h OR",
            "Cefepime 2g IV q8h OR",
            "Meropenem 1g IV q8h",
            "Plus vancomycin if MRSA risk"
          ]
        },
        
        duration: "5-14 days depending on agent and severity; shorter courses for fluoroquinolones"
      }
    },
    
    // Asymptomatic bacteriuria - DO NOT TREAT
    asymptomaticBacteriuria: {
      definition: "Positive urine culture WITHOUT urinary symptoms",
      management: "Do NOT treat (except in pregnancy or prior to urologic procedures)",
      exceptions: [
        "Pregnancy - screen and treat",
        "Prior to urologic procedures that breach mucosa"
      ],
      notIndication: [
        "Elderly patients",
        "Diabetic patients",
        "Catheterized patients (unless symptomatic)",
        "Spinal cord injury",
        "Nursing home residents"
      ]
    },
    
    // Common organisms
    commonOrganisms: {
      uncomplicated: {
        mostCommon: "Escherichia coli (75-95%)",
        other: ["Staphylococcus saprophyticus", "Klebsiella", "Proteus", "Enterococcus"]
      },
      
      complicated: {
        organisms: ["E. coli (still most common)", "Klebsiella", "Proteus", "Pseudomonas", "Enterococcus", "Staphylococcus"],
        MDRconcerns: ["ESBL-producing Enterobacterales", "Pseudomonas aeruginosa"]
      }
    }
  },

  // ============================================
  // DIFFERENTIAL DIAGNOSES BY FEVER SCENARIO
  // ============================================
  
  differentialsByScenario: {
    acuteFeverWithFocalSource: [
      "Pneumonia",
      "Urinary tract infection / pyelonephritis",
      "Cellulitis / skin and soft tissue infection",
      "Intra-abdominal infection",
      "Meningitis",
      "Septic arthritis",
      "Endocarditis"
    ],
    
    acuteFeverNoFocalSource: [
      "Viral syndrome",
      "Early bacterial infection (source not yet apparent)",
      "Drug fever",
      "Acute HIV infection",
      "Malaria (if travel history)",
      "Dengue / other arbovirus (if endemic exposure)"
    ],
    
    prolongedFeverFUO: [
      "Tuberculosis",
      "Endocarditis",
      "Occult abscess",
      "Lymphoma / leukemia",
      "Solid tumor",
      "Adult-onset Still's disease",
      "Giant cell arteritis",
      "Vasculitis",
      "Drug fever",
      "Factitious fever"
    ],
    
    feverImmunocompromised: [
      "Bacterial sepsis",
      "Invasive fungal infection (Candida, Aspergillus)",
      "Pneumocystis jirovecii pneumonia",
      "CMV disease",
      "Mycobacterial infection",
      "Reactivation of latent infection",
      "Malignancy"
    ],
    
    feverAfterTravel: [
      "Malaria (most important to exclude)",
      "Typhoid fever",
      "Dengue",
      "Hepatitis A/E",
      "Rickettsial infections",
      "Leptospirosis",
      "Traveler's diarrhea with bacteremia"
    ],
    
    feverWithRash: [
      "Viral exanthem",
      "Drug reaction",
      "Meningococcemia (petechiae/purpura)",
      "Endocarditis (Janeway lesions, splinter hemorrhages)",
      "Rickettsial infection",
      "Still's disease (salmon-colored evanescent rash)",
      "SLE",
      "Vasculitis"
    ],
    
    recurrentFevers: [
      "Familial Mediterranean fever",
      "Adult-onset Still's disease",
      "Malaria (tertian/quartan patterns)",
      "Periodic fever syndromes",
      "Relapsing infection (inadequately treated)",
      "Drug fever (intermittent exposure)"
    ]
  },

  // ============================================
  // NEGATIVE RESPONSE TEMPLATES
  // ============================================
  
  negativeResponses: {
    notSepsis: {
      vitalSigns: "No fever, blood pressure stable, heart rate normal",
      mentalStatus: "Alert and oriented, no confusion",
      appearance: "Appears well, not toxic-appearing",
      perfusion: "Warm extremities, normal capillary refill"
    },
    
    notPyelonephritis: {
      noFlankPain: "No back pain or flank discomfort",
      noCVAtenderness: "No costovertebral angle tenderness bilaterally",
      noSystemicSymptoms: "No fever, chills, or nausea",
      localizedToLower: "Symptoms limited to bladder - burning and frequency only"
    },
    
    notComplicated: {
      noFever: "No temperature elevation",
      noSystemic: "No chills, rigors, or body aches",
      noRiskFactors: "No diabetes, no kidney problems, not pregnant, no recent antibiotics",
      mildSymptoms: "Mild discomfort only, able to maintain oral intake"
    }
  },

  // ============================================
  // CLINICAL SCORING SYSTEMS
  // ============================================
  
  clinicalScores: {
    qSOFA: {
      name: "quick SOFA (qSOFA)",
      criteria: [
        "Respiratory rate ≥22/min",
        "Altered mentation (GCS <15)",
        "Systolic blood pressure ≤100 mmHg"
      ],
      interpretation: "≥2 points suggests increased risk of poor outcome in infection",
      note: "Screening tool only - does not define sepsis"
    },
    
    SOFA: {
      name: "Sequential Organ Failure Assessment",
      components: [
        "Respiration: PaO2/FiO2 ratio",
        "Coagulation: Platelet count",
        "Liver: Bilirubin",
        "Cardiovascular: MAP or vasopressor requirement",
        "Central Nervous System: Glasgow Coma Scale",
        "Renal: Creatinine or urine output"
      ],
      interpretation: "Acute change ≥2 points from baseline = organ dysfunction (sepsis definition)"
    },
    
    NEWS: {
      name: "National Early Warning Score",
      usedFor: "Early identification of clinical deterioration",
      components: ["RR", "SpO2", "Supplemental O2", "Temperature", "SBP", "HR", "Level of consciousness"]
    }
  },

  // ============================================
  // HELPER FUNCTIONS
  // ============================================
  
  helperFunctions: `
    // Get random response from array
    function getRandomResponse(responseArray) {
      return responseArray[Math.floor(Math.random() * responseArray.length)];
    }
    
    // Get HPI response for specific diagnosis and category
    function getHPIResponse(diagnosis, category) {
      const templates = FeverTemplates[diagnosis]?.hpiTemplates;
      if (!templates || !templates[category]) return null;
      
      const responses = templates[category];
      if (Array.isArray(responses)) {
        return getRandomResponse(responses);
      }
      // If nested object, return the object for further selection
      return responses;
    }
    
    // Get physical exam findings
    function getExamFindings(diagnosis) {
      return FeverTemplates[diagnosis]?.physicalExam || null;
    }
    
    // Get workup expectations
    function getWorkupExpected(diagnosis) {
      return FeverTemplates[diagnosis]?.workupExpected || 
             FeverTemplates[diagnosis]?.workup || null;
    }
    
    // Get differential diagnoses by scenario
    function getDifferentials(scenario) {
      return FeverTemplates.differentialsByScenario[scenario] || [];
    }
    
    // Check if feature suggests sepsis
    function isSepsisFeature(feature) {
      return FeverTemplates.clinicalDangerSigns.sepsisFeatures.some(
        f => f.toLowerCase().includes(feature.toLowerCase())
      );
    }

// ============================================================================
// SYNCOPE TEMPLATES
// ============================================================================

  // ============================================
  
  definitions: {
    syncope: "Transient, self-limited loss of consciousness caused by inadequate cerebral blood flow, with spontaneous complete recovery",
    presyncope: "Prodromal symptoms suggesting impending syncope without actual loss of consciousness",
    keyFeature: "By definition, syncope is self-terminating with spontaneous return to baseline - prolonged LOC (>5 min) suggests other causes"
  },

  // ============================================
  // CLINICAL DANGER SIGNS - SYNCOPE
  // ============================================
  
  clinicalDangerSigns: {
    // High-risk features requiring admission/urgent evaluation
    highRiskFeatures: [
      "Syncope during exertion (in 'full flight', not after exercise)",
      "Syncope while supine or sitting",
      "Syncope without any warning/prodrome",
      "Syncope associated with chest pain or dyspnea",
      "Syncope causing motor vehicle accident or severe injury",
      "Known structural heart disease or heart failure",
      "Family history of sudden cardiac death (especially <50 years)",
      "Abnormal ECG (see specific findings below)",
      "Palpitations immediately preceding syncope",
      "New neurologic deficits after event"
    ],
    
    // High-risk ECG findings
    highRiskECGFindings: [
      "Non-sinus rhythm (atrial fibrillation, flutter, ventricular rhythm)",
      "Sinus bradycardia <40 bpm in awake patient",
      "Sinus pauses >3 seconds",
      "Mobitz II second-degree AV block",
      "Third-degree (complete) AV block",
      "Alternating left and right bundle branch block",
      "Ventricular tachycardia or rapid SVT",
      "Long QT interval (QTc >500 ms)",
      "Short QT interval (QTc <340 ms)",
      "Brugada pattern (RBBB with ST elevation V1-V3)",
      "Preexcitation (short PR, delta wave - WPW)",
      "Epsilon waves or T-wave inversions in right precordial leads (ARVC)",
      "Left ventricular hypertrophy pattern (HCM)",
      "Signs of acute ischemia or prior MI",
      "Bifascicular block (LBBB or RBBB + fascicular block)",
      "QRS duration ≥120 ms",
      "Pacemaker with evidence of malfunction"
    ],
    
    // Structural heart disease markers
    structuralHeartDiseaseMarkers: [
      "History of coronary artery disease or prior MI",
      "Known cardiomyopathy (dilated, hypertrophic, ARVC)",
      "Moderate-severe valvular disease (especially aortic stenosis)",
      "Prior cardiac surgery",
      "Congenital heart disease",
      "Reduced ejection fraction or heart failure",
      "Implanted pacemaker or ICD"
    ],
    
    // Family history red flags
    familyHistoryRedFlags: [
      "Sudden unexplained death, especially age <40-50",
      "Known channelopathy (long QT, short QT, Brugada, CPVT)",
      "Familial cardiomyopathy (HCM, ARVC, DCM)",
      "Familial conduction system disease",
      "Drowning without explanation",
      "Single-vehicle accidents without explanation"
    ],
    
    // Features suggesting cardiac syncope
    cardiacSyncopeFeatures: [
      "Syncope during exertion",
      "Syncope while supine",
      "Sudden onset without prodrome",
      "Brief palpitations immediately before syncope",
      "Abnormal cardiac examination",
      "Abnormal ECG",
      "Known heart disease"
    ],
    
    // Signs this may NOT be true syncope
    notTrueSyncopeSigns: [
      "Prolonged LOC (>5 minutes)",
      "Prolonged confusion (postictal state >5 minutes)",
      "Tongue biting (especially lateral tongue)",
      "Tonic-clonic movements BEFORE collapse",
      "Urinary/fecal incontinence (more suggestive of seizure)",
      "Witnessed cyanosis during event",
      "Focal neurologic deficits after event",
      "Many episodes daily (suggests psychogenic)"
    ]
  },

  // ============================================
  // VASOVAGAL (REFLEX) SYNCOPE
  // ============================================
  
  vasovagalSyncope: {
    description: "Most common cause (25-65% of cases), excellent prognosis, NO increased mortality",
    
    hpiTemplates: {
      classicProdrome: [
        "I felt warm and sweaty, then my vision started going dark around the edges before I passed out",
        "I got lightheaded and nauseated, started sweating, then everything went black",
        "I felt dizzy, my hearing got muffled like I was underwater, then woke up on the floor",
        "Started feeling warm and queasy, saw spots, then next thing I knew people were standing over me",
        "I felt faint, got pale according to my friend, then blacked out for a few seconds",
        "My vision got blurry, I felt hot and clammy, then I collapsed"
      ],
      
      typicalTriggers: [
        "I was getting blood drawn and the next thing I knew I was waking up on the floor",
        "Standing in line at the grocery store for about 20 minutes in a warm crowded area",
        "I was at a funeral and started feeling faint during the service",
        "I was watching a medical procedure on TV and suddenly felt lightheaded",
        "It happened right after I heard some really bad news",
        "I had just witnessed a car accident and felt sick, then passed out",
        "I was standing for a long time at a concert when it got really hot",
        "I fainted right after having a painful blood draw"
      ],
      
      situationalTriggers: [
        "I was urinating and suddenly felt dizzy and collapsed (micturition syncope)",
        "I was straining to have a bowel movement and blacked out (defecation syncope)",
        "I had a bad coughing fit and then passed out (cough syncope)",
        "I fainted right after swallowing a large bite of food (deglutition syncope)",
        "It happened right after I finished eating a big meal (postprandial)"
      ],
      
      recovery: [
        "I felt tired and weak for about 30 minutes afterward",
        "I was sweaty and nauseated for a while after waking up",
        "It took me about an hour to feel completely normal again",
        "I felt drained and had to lie down for a while, but then I was fine",
        "I was pale and cold afterward according to the people with me"
      ],
      
      positionalHistory: [
        "I was standing in line for about 15-20 minutes when it happened",
        "I had been standing at a party for a while before I went down",
        "I was sitting in church when I started feeling faint and slumped over",
        "I was getting up from a seated position when I felt dizzy, then passed out"
      ],
      
      priorEpisodes: [
        "This has happened a few times before over the years, usually in similar situations",
        "I've fainted a couple times before when getting blood drawn",
        "I've always been prone to fainting - happened as a teenager too",
        "This is my first time ever passing out"
      ]
    },
    
    physicalExam: {
      vitalSigns: [
        "Vitals normal on arrival (normalized after event)",
        "BP 118/72, HR 68, RR 14, O2 sat 99% on RA",
        "May have mild residual tachycardia (compensatory)",
        "Orthostatic vital signs negative (typically)"
      ],
      
      generalAppearance: [
        "Alert, oriented, at baseline mental status",
        "Appears tired but otherwise well",
        "No acute distress",
        "May appear pale or diaphoretic if recent event"
      ],
      
      cardiovascular: [
        "Regular rate and rhythm",
        "No murmurs, rubs, or gallops",
        "Normal S1, S2",
        "Pulses equal bilaterally",
        "No JVD"
      ],
      
      neurologic: [
        "Alert and oriented x3",
        "No focal neurologic deficits",
        "Cranial nerves II-XII intact",
        "Motor strength 5/5 in all extremities",
        "Sensation intact",
        "No signs of head trauma"
      ]
    },
    
    workupExpected: {
      ecg: [
        "Normal sinus rhythm",
        "Normal intervals (PR, QRS, QTc)",
        "No ischemic changes",
        "No conduction abnormalities"
      ],
      
      labsIfObtained: [
        "CBC: Normal",
        "BMP: Normal electrolytes",
        "Glucose: Normal",
        "Troponin: Negative (if checked)"
      ]
    },
    
    diagnosticCriteria: [
      "Precipitating event (fear, pain, emotional distress, prolonged standing)",
      "Typical prodrome (warmth, sweating, nausea, pallor, visual changes)",
      "Brief LOC with rapid recovery",
      "Fatigue, nausea, pallor persisting minutes to hours after event",
      "Normal examination and ECG"
    ],
    
    managementPrinciples: [
      "Reassurance - excellent prognosis, no increased mortality",
      "Education on avoiding triggers",
      "Recognition of prodromal symptoms",
      "Physical counterpressure maneuvers (leg crossing, muscle tensing)",
      "Adequate hydration and salt intake",
      "Avoid prolonged standing in warm environments",
      "Sit or lie down at first warning symptoms",
      "Outpatient follow-up if recurrent"
    ]
  },

  // ============================================
  // ORTHOSTATIC SYNCOPE
  // ============================================
  
  orthostaticSyncope: {
    description: "5-24% of syncope cases, due to drop in BP with position change",
    
    hpiTemplates: {
      typicalPresentation: [
        "I stood up from sitting and immediately felt dizzy, then blacked out",
        "I got out of bed this morning and collapsed right after standing",
        "Every time I stand up quickly I get lightheaded, this time I actually passed out",
        "I had been lying down for a while, stood up, and everything went dark",
        "I was sitting on the toilet, stood up, and next thing I knew I was on the floor"
      ],
      
      associatedFactors: [
        "I've been having diarrhea and vomiting for the past 2 days, haven't been able to keep much down",
        "I started a new blood pressure medication last week",
        "It's been really hot and I probably haven't been drinking enough",
        "I donated blood yesterday and felt fine until this morning",
        "I've been on a diuretic for my blood pressure",
        "I have diabetes and have had problems with my blood pressure being all over the place"
      ],
      
      medicationHistory: [
        "I take lisinopril and amlodipine for blood pressure",
        "They just increased my metoprolol dose",
        "I'm on tamsulosin for my prostate",
        "I take prazosin for nightmares",
        "I use nitroglycerin when I get chest pain",
        "I'm on a water pill (furosemide/hydrochlorothiazide)"
      ],
      
      comorbidities: [
        "I have Parkinson's disease",
        "I'm diabetic and my sugars have been running high",
        "I have autonomic neuropathy from my diabetes",
        "I've had problems with low blood pressure for years"
      ]
    },
    
    physicalExam: {
      vitalSignsSupine: [
        "BP 128/78 supine, HR 72",
        "After 5 minutes supine: BP 130/80, HR 70"
      ],
      
      vitalSignsStanding: [
        "Immediately upon standing: BP 105/60, HR 95 (drop of 25 mmHg systolic)",
        "After 3 minutes standing: BP 98/58, HR 100 (persistent drop)",
        "Patient reports lightheadedness when standing",
        "Symptoms reproduced with position change"
      ],
      
      diagnosticCriteria: [
        "Drop in SBP ≥20 mmHg (or ≥30 mmHg in hypertensive patients)",
        "AND/OR drop in DBP ≥10 mmHg",
        "AND/OR increase in HR ≥20 bpm",
        "Within 3 minutes of standing",
        "With reproduction of symptoms"
      ],
      
      generalAppearance: [
        "Appears dehydrated (dry mucous membranes, decreased skin turgor)",
        "Fatigued appearance",
        "Otherwise well-appearing"
      ],
      
      cardiovascular: [
        "Regular rate and rhythm",
        "No murmurs",
        "Tachycardia when standing (compensatory)"
      ]
    },
    
    workupExpected: {
      labs: [
        "BMP: May show evidence of dehydration (elevated BUN/Cr ratio)",
        "CBC: Hematocrit may be elevated (hemoconcentration) or low (anemia)",
        "Glucose: Check for hypoglycemia or hyperglycemia"
      ],
      
      ecg: [
        "Typically normal",
        "May show sinus tachycardia"
      ]
    },
    
    causes: {
      volumeDepletion: [
        "Dehydration",
        "Vomiting/diarrhea",
        "Blood loss",
        "Diuretic use",
        "Inadequate fluid intake"
      ],
      
      medications: [
        "Antihypertensives (especially vasodilators, alpha-blockers)",
        "Diuretics",
        "Nitrates",
        "Tricyclic antidepressants",
        "Phenothiazines",
        "Antiparkinsonian drugs",
        "Phosphodiesterase inhibitors (sildenafil)"
      ],
      
      autonomicDysfunction: [
        "Diabetes mellitus with autonomic neuropathy",
        "Parkinson disease",
        "Pure autonomic failure",
        "Multiple system atrophy",
        "Amyloidosis"
      ]
    },
    
    managementPrinciples: [
      "Treat underlying cause",
      "Volume repletion if dehydrated",
      "Review and adjust medications",
      "Rise slowly from lying/sitting",
      "Compression stockings",
      "Increase salt and fluid intake",
      "Sleep with head of bed elevated",
      "Physical counterpressure maneuvers"
    ]
  },

  // ============================================
  // CARDIAC SYNCOPE - ARRHYTHMIC
  // ============================================
  
  cardiacSyncopeArrhythmic: {
    description: "Most common life-threatening cause, 1-year mortality approaches 30%",
    
    hpiTemplates: {
      suddenOnset: [
        "I was just sitting there and suddenly everything went black, no warning at all",
        "One second I was fine, the next I woke up on the floor",
        "I didn't feel anything before it happened, just suddenly collapsed",
        "My husband said I just dropped mid-sentence",
        "No dizziness, no warning - just gone"
      ],
      
      withPalpitations: [
        "I felt my heart racing really fast, then blacked out",
        "My heart was pounding and skipping, then I passed out",
        "I noticed my heart was beating irregularly just before I collapsed",
        "I felt fluttering in my chest, then everything went dark",
        "My heart was racing for a few seconds, then I fainted"
      ],
      
      exertionalSyncope: [
        "I passed out while running on the treadmill",
        "I collapsed during my basketball game",
        "It happened while I was climbing stairs",
        "I fainted in the middle of my workout",
        "I was swimming laps and suddenly felt faint, then blacked out"
      ],
      
      supineSyncope: [
        "I was lying in bed when I passed out",
        "It happened while I was sleeping - my wife says I was unresponsive",
        "I was already lying down watching TV when I lost consciousness"
      ],
      
      chestSymptoms: [
        "I had some chest pressure before I passed out",
        "I was short of breath just before collapsing",
        "I felt a strange sensation in my chest, then fainted"
      ],
      
      cardiacHistory: [
        "I had a heart attack two years ago",
        "I have heart failure, my ejection fraction is around 30%",
        "I have an abnormal heart rhythm that they've been monitoring",
        "I had a stent placed last year",
        "My cardiologist said I have a weak heart"
      ],
      
      familyHistory: [
        "My brother died suddenly at age 35",
        "My father had a pacemaker put in when he was 50",
        "There's a history of sudden death in my family",
        "My mother was told she has long QT syndrome",
        "My cousin drowned unexpectedly - they never found out why"
      ]
    },
    
    physicalExam: {
      vitalSigns: {
        unstable: [
          "HR 38 (severe bradycardia)",
          "HR 165 irregular (rapid atrial fibrillation)",
          "HR 180 regular (SVT or VT)",
          "BP 85/55 (hypotension)",
          "Irregular pulse"
        ],
        stable: [
          "Vitals may be normal between arrhythmic episodes",
          "May have baseline tachycardia or bradycardia",
          "Irregularly irregular pulse (atrial fibrillation)"
        ]
      },
      
      cardiovascular: [
        "Irregular rhythm on auscultation",
        "S3 gallop (heart failure)",
        "Systolic murmur (aortic stenosis, HCM)",
        "JVD (right heart failure, tamponade)",
        "Peripheral edema"
      ],
      
      deviceCheck: [
        "Note presence of pacemaker/ICD (palpable under skin)",
        "Device interrogation needed if present"
      ]
    },
    
    workupExpected: {
      ecg: {
        bradyarrhythmias: [
          "Sinus bradycardia <40 bpm",
          "Sinus pause >3 seconds",
          "Mobitz I (Wenckebach) - Type I second-degree AV block",
          "Mobitz II - Type II second-degree AV block (high risk)",
          "Third-degree (complete) heart block",
          "Sick sinus syndrome"
        ],
        tachyarrhythmias: [
          "Ventricular tachycardia (wide complex, regular)",
          "Atrial fibrillation with rapid ventricular response",
          "Atrial flutter",
          "SVT (narrow complex, regular, rapid)",
          "Torsades de pointes (polymorphic VT with long QT)"
        ],
        predisposingFindings: [
          "Long QT interval (QTc >500 ms)",
          "Short QT interval (QTc <340 ms)",
          "Preexcitation (WPW pattern - short PR, delta wave)",
          "Brugada pattern (RBBB + ST elevation V1-V3)",
          "Epsilon waves (ARVC)",
          "Bifascicular block",
          "Prior MI pattern (Q waves, ST changes)"
        ]
      },
      
      labs: [
        "Troponin: May be elevated if ischemia caused arrhythmia",
        "BNP/NT-proBNP: Elevated in heart failure (predictive of adverse outcomes)",
        "BMP: Check potassium, magnesium (arrhythmia risk)",
        "CBC: Check for anemia"
      ],
      
      additionalTesting: [
        "Continuous telemetry monitoring",
        "Echocardiogram (structural heart disease)",
        "Ambulatory ECG monitoring (Holter, event monitor, or implantable loop recorder)",
        "Electrophysiology study (selected patients)"
      ]
    },
    
    riskFactors: [
      "Known structural heart disease",
      "History of heart failure (EF <40%)",
      "Prior myocardial infarction",
      "Known arrhythmia history",
      "Abnormal ECG",
      "Family history of sudden death",
      "Syncope during exertion",
      "Syncope while supine",
      "Syncope without prodrome"
    ],
    
    managementPrinciples: [
      "Admit for cardiac monitoring",
      "Continuous telemetry",
      "Cardiology consultation",
      "Treat underlying arrhythmia",
      "Consider pacemaker (bradyarrhythmias)",
      "Consider ICD (ventricular arrhythmias with structural heart disease)",
      "Electrophysiology study in selected patients",
      "Long-term ambulatory monitoring if diagnosis unclear"
    ]
  },

  // ============================================
  // CARDIAC SYNCOPE - STRUCTURAL
  // ============================================
  
  cardiacSyncopeStructural: {
    description: "Syncope due to cardiac outflow obstruction or other structural abnormalities",
    
    hpiTemplates: {
      aorticStenosis: [
        "I passed out while climbing the stairs",
        "I've been getting more short of breath with activity, then today I fainted",
        "I felt chest pressure going up the hill, then blacked out",
        "I'm 75 and my doctor has mentioned a heart murmur"
      ],
      
      hypertrophicCardiomyopathy: [
        "I'm 22 and collapsed during basketball practice",
        "I passed out while running - just suddenly went down",
        "My older brother died suddenly during a soccer game, and now I fainted during exercise",
        "I've been told I have a heart murmur that gets louder when I squat"
      ],
      
      pulmonaryEmbolism: [
        "I suddenly couldn't catch my breath, then passed out",
        "I had calf pain for a few days, then today I fainted and can't breathe right",
        "I just got off a long flight and collapsed at the airport",
        "I've been on bed rest after surgery and suddenly fainted"
      ],
      
      cardiacTamponade: [
        "I've been having chest pain and shortness of breath, then passed out",
        "I have cancer and have been feeling progressively worse, then collapsed",
        "I was in a car accident last week, and now I'm having trouble breathing and fainted"
      ],
      
      aorticDissection: [
        "I had sudden severe tearing pain in my chest going to my back, then blacked out",
        "I felt like I was being ripped apart in my chest, then collapsed",
        "Sudden worst pain of my life in my chest, now my arm feels weak"
      ]
    },
    
    physicalExam: {
      aorticStenosis: [
        "Harsh crescendo-decrescendo systolic murmur at right upper sternal border",
        "Radiates to carotids",
        "Delayed carotid upstroke (parvus et tardus)",
        "S4 gallop may be present",
        "Narrow pulse pressure"
      ],
      
      hypertrophicCardiomyopathy: [
        "Harsh systolic murmur that increases with Valsalva and standing",
        "Decreases with squatting or leg raise",
        "May have S4 gallop",
        "Bifid carotid pulse"
      ],
      
      pulmonaryEmbolism: [
        "Tachycardia, tachypnea",
        "Hypoxemia",
        "JVD",
        "Unilateral leg swelling/tenderness (DVT)",
        "Clear lung fields (usually)"
      ],
      
      cardiacTamponade: [
        "Beck's triad: Hypotension, JVD, muffled heart sounds",
        "Pulsus paradoxus >10 mmHg",
        "Tachycardia"
      ],
      
      aorticDissection: [
        "Unequal blood pressures in arms (>20 mmHg difference)",
        "Unequal pulses",
        "New aortic regurgitation murmur",
        "Severe hypertension or hypotension",
        "Focal neurologic deficits (if carotid involved)"
      ]
    },
    
    workupExpected: {
      ecg: [
        "Aortic stenosis: LVH pattern, strain pattern",
        "HCM: LVH, abnormal Q waves, T-wave inversions",
        "PE: Sinus tachycardia, S1Q3T3 (uncommon), right heart strain",
        "Tamponade: Low voltage, electrical alternans",
        "Dissection: May show ischemia if coronary involvement"
      ],
      
      imaging: [
        "Echocardiography: Essential for structural disease",
        "CT angiography: PE (chest), aortic dissection",
        "Bedside ultrasound: Tamponade (pericardial effusion), RV strain (PE)"
      ],
      
      labs: [
        "D-dimer (PE if low clinical probability)",
        "Troponin",
        "BNP (heart failure, PE)"
      ]
    }
  },

  // ============================================
  // CAROTID SINUS SYNDROME
  // ============================================
  
  carotidSinusSyncope: {
    description: "Reflex syncope from carotid sinus hypersensitivity, typically in older males (>60)",
    
    hpiTemplates: {
      typicalPresentation: [
        "I was shaving my neck and suddenly felt faint, then passed out",
        "I turned my head quickly to look behind me and collapsed",
        "I was wearing a tight collar and fainted",
        "It happened when I was putting on a tie",
        "I had neck surgery a few years ago and have had fainting episodes since"
      ]
    },
    
    physicalExam: [
      "Usually normal examination",
      "Consider carotid sinus massage in older patients (>50, especially males)",
      "Positive if sinus pause >3-5 seconds and/or BP drop >50 mmHg with symptom reproduction"
    ],
    
    contraindications: [
      "History of TIA or stroke within 3 months",
      "Carotid bruits (unless Doppler excludes significant stenosis)",
      "History of VT or recent MI"
    ],
    
    diagnosticCriteria: [
      "Carotid sinus hypersensitivity: Pause >3-5 sec and/or BP drop >50 mmHg with CSM",
      "Carotid sinus syndrome: Hypersensitivity PLUS reproduction of symptoms",
      "Must be upright during testing for symptom reproduction"
    ]
  },

  // ============================================
  // MEDICATIONS CAUSING SYNCOPE
  // ============================================
  
  medicationRelatedSyncope: {
    description: "5-15% of syncopal events are medication-related",
    
    commonMedications: {
      causesHypotension: [
        "Antihypertensives (all classes)",
        "Alpha-blockers (prazosin, terazosin, tamsulosin)",
        "Vasodilators (nitrates, hydralazine)",
        "Diuretics",
        "ACE inhibitors/ARBs"
      ],
      
      causesBradycardia: [
        "Beta-blockers",
        "Non-dihydropyridine calcium channel blockers (diltiazem, verapamil)",
        "Digoxin",
        "Clonidine",
        "Antiarrhythmics (amiodarone, sotalol)"
      ],
      
      causesQTProlongation: [
        "Antiarrhythmics (sotalol, amiodarone, quinidine, procainamide)",
        "Antipsychotics (haloperidol, ziprasidone, thioridazine)",
        "Antidepressants (TCAs, citalopram)",
        "Antibiotics (fluoroquinolones, macrolides, azole antifungals)",
        "Antiemetics (ondansetron, metoclopramide)"
      ],
      
      causesVolumeDepletion: [
        "Diuretics",
        "SGLT2 inhibitors",
        "Laxatives (if abused)"
      ]
    },
    
    hpiTemplates: [
      "I just started a new blood pressure medication last week",
      "They increased my metoprolol dose, and I've been feeling dizzy",
      "I'm taking several medications for my heart",
      "I started taking tamsulosin for my prostate and have been lightheaded"
    ]
  },

  // ============================================
  // DIFFERENTIAL DIAGNOSIS - NOT TRUE SYNCOPE
  // ============================================
  
  notTrueSyncope: {
    description: "Conditions that cause TLOC or apparent TLOC but are not syncope",
    
    seizure: {
      hpiTemplates: [
        "I bit my tongue hard and it's still bleeding",
        "I woke up confused and didn't know where I was for about 10 minutes",
        "My wife said I was shaking for over a minute before I stopped",
        "I lost control of my bladder during the episode",
        "I had a warning sensation - a strange taste in my mouth - before it happened",
        "The shaking started before I fell"
      ],
      
      differentiatingFeatures: [
        "Tonic-clonic movements BEGIN BEFORE collapse (vs. after in syncope)",
        "Prolonged rhythmic convulsions (>15-30 seconds)",
        "Lateral tongue biting",
        "Prolonged postictal confusion (>5 minutes)",
        "Urinary/fecal incontinence",
        "Cyanosis during event",
        "Aura (focal symptoms before event)"
      ]
    },
    
    stroke: {
      differentiatingFeatures: [
        "Focal neurologic deficits that persist",
        "Does NOT fully resolve spontaneously",
        "Speech changes, weakness, sensory loss",
        "Syncope very rare cause of stroke"
      ]
    },
    
    psychogenicPseudosyncope: {
      hpiTemplates: [
        "It happens multiple times a day",
        "The episodes last for 5-10 minutes each time",
        "I have a lot of stress and anxiety",
        "I've had extensive testing and they can't find anything wrong"
      ],
      
      features: [
        "Very frequent episodes (multiple per day or week)",
        "Prolonged duration (often >5 minutes)",
        "Eyes typically closed (in true syncope, eyes are usually open)",
        "Resistance to eye opening",
        "Multiple somatic complaints",
        "Often normal vitals during 'episode'",
        "May have history of trauma or psychiatric conditions"
      ]
    },
    
    metabolicCauses: {
      hypoglycemia: [
        "Tremor, sweating, confusion before LOC",
        "History of diabetes on insulin or sulfonylureas",
        "Usually does not fully resolve immediately"
      ],
      
      hypoxia: [
        "Associated respiratory distress",
        "Cyanosis",
        "Underlying lung disease"
      ]
    },
    
    intoxication: [
      "Signs of drug/alcohol use",
      "Does not return to baseline immediately",
      "Altered mental status persists"
    ]
  },

  // ============================================
  // RISK STRATIFICATION
  // ============================================
  
  riskStratification: {
    highRiskCriteria: {
      description: "Patients requiring admission and urgent evaluation",
      criteria: [
        "Abnormal ECG (see specific findings above)",
        "Known structural heart disease (CHF, CAD, cardiomyopathy)",
        "History of heart failure",
        "Syncope during exertion",
        "Syncope while supine or recumbent",
        "Sudden onset without prodrome",
        "Associated chest pain or dyspnea",
        "Family history of sudden cardiac death",
        "Systolic BP <90 mmHg",
        "Shortness of breath",
        "Hematocrit <30% (suggests bleeding)",
        "Elevated troponin or BNP"
      ]
    },
    
    lowRiskCriteria: {
      description: "Patients who may be safely discharged with outpatient follow-up",
      criteria: [
        "Classic vasovagal features with typical prodrome",
        "Clear precipitating trigger (blood draw, fear, pain, prolonged standing)",
        "No cardiac history",
        "Normal ECG",
        "Normal physical examination",
        "Young age without family history",
        "Rapid return to baseline"
      ]
    },
    
    intermediateRiskCriteria: {
      description: "Disposition depends on local resources, patient factors, follow-up availability",
      considerations: [
        "Older age without other high-risk features",
        "Unclear etiology but no high-risk features",
        "Borderline ECG findings",
        "Ability to arrange outpatient monitoring",
        "Patient reliability for follow-up"
      ]
    },
    
    sanFranciscoSyncopeRule: {
      acronym: "CHESS",
      criteria: [
        "C - History of Congestive heart failure",
        "H - Hematocrit <30%",
        "E - Abnormal ECG",
        "S - Shortness of breath",
        "S - Systolic BP <90 mmHg at triage"
      ],
      interpretation: "Any positive criterion = high risk for adverse outcome at 7 days"
    },
    
    canadianSyncopeRiskScore: {
      description: "Validated score for 30-day serious adverse events",
      variables: [
        "Predisposition to vasovagal symptoms (-1 point)",
        "Heart disease history (+1 point)",
        "Any SBP <90 or >180 mmHg (+2 points)",
        "Elevated troponin (+2 points)",
        "Abnormal QRS axis (+1 point)",
        "QRS >130 ms (+1 point)",
        "QTc >480 ms (+2 points)",
        "ED diagnosis of vasovagal syncope (-2 points)",
        "ED diagnosis of cardiac syncope (+2 points)"
      ]
    }
  },

  // ============================================
  // WORKUP SUMMARY
  // ============================================
  
  workupSummary: {
    allPatients: [
      "Comprehensive history (patient AND witnesses)",
      "Physical examination including orthostatic vital signs",
      "12-lead ECG (obtain in ALL syncope patients)"
    ],
    
    ifStructuralHeartDiseaseSuspected: [
      "Echocardiogram"
    ],
    
    ifHighRisk: [
      "Continuous telemetry monitoring",
      "Troponin",
      "BNP/NT-proBNP",
      "CBC (hematocrit)",
      "BMP (electrolytes)",
      "Cardiology consultation"
    ],
    
    ifDiagnosisUnclear: [
      "Ambulatory ECG monitoring (duration based on symptom frequency):",
      "  - Daily symptoms: 24-48 hour Holter",
      "  - Weekly symptoms: 1-2 week event monitor or patch monitor",
      "  - Monthly or less: Implantable loop recorder (ILR) - up to 3 years",
      "Tilt-table testing if reflex syncope suspected but not classic",
      "Electrophysiology study in selected patients with structural heart disease"
    ],
    
    lowYieldTests: [
      "Head CT (unless trauma or neurologic findings)",
      "MRI brain (unless specific indication)",
      "EEG (unless seizure suspected)",
      "Carotid Doppler (syncope is not a TIA)"
    ]
  },

  // ============================================
  // DISPOSITION GUIDANCE
  // ============================================
  
  dispositionGuidance: {
    admitIndications: [
      "High-risk features present (see above)",
      "Abnormal ECG suggesting arrhythmia",
      "Known or suspected structural heart disease",
      "Syncope causing significant injury",
      "Syncope during exertion",
      "Syncope while supine",
      "Hemodynamic instability",
      "Associated chest pain or dyspnea",
      "Inability to exclude serious etiology"
    ],
    
    dischargeWithFollowUp: [
      "Classic vasovagal syncope with typical features",
      "Situational syncope (micturition, cough, defecation)",
      "Orthostatic syncope in stable patient (after volume repletion)",
      "Normal ECG, normal examination, low-risk history",
      "Reliable follow-up available"
    ],
    
    dischargeInstructions: [
      "Avoid driving until etiology clarified (if recurrent or high-risk features)",
      "Recognize and respond to warning symptoms",
      "Avoid triggers (prolonged standing, dehydration, heat)",
      "Physical counterpressure maneuvers",
      "Adequate hydration",
      "Fall precautions",
      "Return if: chest pain, palpitations, dyspnea, recurrence, near-syncope"
    ]
  },

  // ============================================
  // CLINICAL PEARLS
  // ============================================
  
  clinicalPearls: [
    "History is diagnostic in ~50% of cases - invest time in detailed history from patient AND witnesses",
    "True syncope is brief and self-limited - prolonged LOC (>5 min) is NOT syncope",
    "Classic vasovagal syncope has excellent prognosis - NO increased mortality",
    "Cardiac syncope has 30% one-year mortality - aggressive workup warranted",
    "Syncope during exertion or while supine = cardiac until proven otherwise",
    "Syncope without prodrome suggests arrhythmia",
    "Always check medications - 5-15% of syncope is medication-related",
    "ECG is abnormal in only 2-7% but should be obtained in ALL patients",
    "Brief convulsive movements CAN occur with syncope (due to cerebral hypoperfusion)",
    "Tongue biting (especially lateral) and prolonged postictal state favor seizure over syncope",
    "Psychogenic pseudosyncope: frequent episodes, long duration, eyes closed, resistance to opening",
    "Orthostatic vital signs: wait 5 min supine, then recheck after 3 min standing",
    "Insertable cardiac monitors (loop recorders) can detect arrhythmias in up to 75% at 3 years",
    "Most arrhythmias detectable with 14-day ambulatory monitoring",
    "Routine neuroimaging and EEG are LOW YIELD without specific indications"
  ],

  // ============================================
  // NEGATIVE RESPONSE TEMPLATES
  // ============================================
  
  negativeResponseTemplates: {
    notCardiacSyncope: [
      "No history of heart disease or heart failure",
      "No family history of sudden death",
      "Normal ECG with normal sinus rhythm and intervals",
      "Normal cardiac examination without murmurs",
      "Classic prodrome before the event",
      "Episode occurred during typical vasovagal trigger",
      "Standing position at time of event",
      "Rapid complete recovery"
    ],
    
    notSeizure: [
      "No aura or warning different from typical presyncope",
      "Brief event (<1 minute)",
      "Immediate return to baseline without confusion",
      "No tongue biting",
      "No incontinence",
      "Any movements occurred AFTER collapse (not before)",
      "No prior seizure history"
    ],
    
    notOrthostatic: [
      "Negative orthostatic vital signs",
      "Did not occur with position change",
      "No volume depletion",
      "Not on medications causing orthostasis",

// ============================================================================
// ALTERED MENTAL STATUS TEMPLATES
// ============================================================================

    // Key categories from UpToDate
    // ============================================================
    
    const lifeThreatening = [
        "Hypoglycemia",
        "Diabetic Ketoacidosis (DKA)",
        "Hyperosmolar Hyperglycemic State (HHS)",
        "Sepsis/Meningitis",
        "Stroke (ischemic or hemorrhagic)",
        "Intracranial hemorrhage",
        "Status epilepticus/Postictal state",
        "Hypertensive encephalopathy",
        "Drug overdose/Toxidrome",
        "Wernicke encephalopathy",
        "Hepatic encephalopathy",
        "Uremic encephalopathy",
        "Hypoxia/Hypercarbia",
        "Severe electrolyte abnormalities (Na, Ca)"
    ];

    const commonCauses = [
        "Delirium (multifactorial)",
        "Medication-induced",
        "Infection (UTI, pneumonia)",
        "Metabolic derangements",
        "Alcohol withdrawal",
        "Dementia with acute change"
    ];

    // ============================================================
    // DIABETIC KETOACIDOSIS (DKA) TEMPLATES
    // From UpToDate: DKA in adults - Clinical features and Treatment
    // ============================================================
    
    const dkaTemplates = {
        // Classic DKA presentation - evolves over 24 hours
        onset: [
            "It started yesterday. I was feeling really thirsty and peeing all the time.",
            "Over the past day, maybe a little longer. I've felt worse and worse.",
            "Started feeling sick yesterday. Throwing up since this morning.",
            "Past 24 hours I've been feeling terrible. Couldn't keep anything down."
        ],
        
        // Polyuria, polydipsia, weight loss - earliest symptoms
        associatedSymptoms: [
            "I've been so thirsty - drinking gallons but still thirsty. And peeing constantly.",
            "Drinking a lot of water, peeing every hour. My mouth is so dry.",
            "I've lost weight recently, maybe 10 pounds. Always thirsty and tired.",
            "Can't quench my thirst. Up all night going to the bathroom."
        ],
        
        // Nausea/vomiting - common in DKA, especially adults
        nauseaVomiting: [
            "I've been throwing up all morning. Can't keep anything down.",
            "Nauseous since yesterday, vomited maybe 4 or 5 times.",
            "My stomach has been upset. Threw up a few times.",
            "I feel sick to my stomach. Haven't been able to eat."
        ],
        
        // Abdominal pain - associated with severity of acidosis
        // Per UpToDate: 86% with bicarb ≤5, only 13% with bicarb ≥15
        abdominalPain: [
            "My stomach really hurts. It's all over, kind of crampy.",
            "Yeah, belly pain. Started with the vomiting.",
            "My abdomen is sore, especially in the middle.",
            "Stomach has been hurting since this morning."
        ],
        
        // Breathing changes - Kussmaul respirations
        breathing: [
            "I feel like I can't catch my breath. Taking deep breaths but still feel like I need air.",
            "My breathing feels different - deeper than usual.",
            "I've been breathing fast and deep. Can't seem to slow down.",
            "Feel short of breath even though I'm breathing hard."
        ],
        
        // Mental status changes - primarily with high osmolality
        mentalStatus: [
            "I've been feeling confused, foggy headed.",
            "My family says I'm not making sense.",
            "Hard to think clearly. Everything is fuzzy.",
            "I feel out of it. Can't concentrate."
        ],
        
        // Precipitating factors
        precipitants: {
            infection: [
                "I've had a cough and fever for a few days. Then this started.",
                "I think I have a UTI - burning when I pee. Then I got really sick.",
                "Had a cold that got worse. Now this."
            ],
            missedInsulin: [
                "I ran out of insulin a few days ago. Couldn't afford the refill.",
                "I stopped taking my insulin because I wasn't eating.",
                "Haven't been taking my insulin regularly.",
                "My insulin pump stopped working. I didn't have backup."
            ],
            newOnset: [
                "I don't have diabetes. At least, I didn't think I did.",
                "This is the first time anything like this has happened.",
                "I've never been diagnosed with diabetes."
            ],
            sglt2Inhibitor: [
                "I take a diabetes pill - I think it's called Jardiance or something.",
                "I'm on one of those newer diabetes medications.",
                "My doctor started me on a new diabetes medicine recently."
            ]
        },
        
        // Medical history relevant to DKA
        diabetesHistory: {
            type1: [
                "I have type 1 diabetes. Been on insulin since I was a teenager.",
                "I'm a type 1 diabetic. Use an insulin pump.",
                "Had diabetes since I was 12. Always on insulin."
            ],
            type2OnInsulin: [
                "Type 2 diabetes. On insulin now - it wasn't controlled with pills.",
                "I have diabetes. Started insulin a couple years ago.",
                "Diabetic for 15 years. On insulin and pills."
            ],
            type2NoInsulin: [
                "I have type 2 diabetes. Just take pills for it.",
                "Diabetic - take metformin and another pill.",
                "Yes, diabetes. Controlled with medication and diet."
            ]
        },
        
        // Negative responses for ruling out other diagnoses
        negatives: {
            chestPain: "No chest pain.",
            headache: "No headache.",
            focalWeakness: "No weakness on one side.",
            seizure: "No, I haven't had any seizures.",
            trauma: "No, I didn't hit my head or fall."
        }
    };

    // ============================================================
    // HYPEROSMOLAR HYPERGLYCEMIC STATE (HHS) TEMPLATES
    // From UpToDate: HHS develops more insidiously over days
    // More common in elderly, often type 2 diabetes
    // ============================================================
    
    const hhsTemplates = {
        // Insidious onset - days to a week
        onset: [
            "It's been going on for maybe a week. Just getting worse gradually.",
            "Several days now. My family noticed I was more confused yesterday.",
            "It came on slowly. Maybe 4-5 days of feeling bad.",
            "Been feeling off for about a week. Today is the worst."
        ],
        
        // Polyuria, polydipsia - often severe
        associatedSymptoms: [
            "I've been drinking so much water but still feel dehydrated.",
            "Urinating constantly. Probably lost a lot of weight.",
            "So thirsty all the time. Dry mouth. Peeing a lot.",
            "Can't drink enough. Feel dried out."
        ],
        
        // Neurologic symptoms - more common in HHS due to higher osmolality
        // Per UpToDate: effective Posm >320-330 causes neurologic deterioration
        neurologicSymptoms: [
            "I've been confused. My daughter says I'm not making sense.",
            "Feel very weak. Hard to walk. Dizzy.",
            "Having trouble speaking clearly. Words aren't coming out right.",
            "Very sleepy. Hard to stay awake. Confused.",
            "My vision has been blurry. Feel disoriented."
        ],
        
        // Mental status in HHS - can progress to coma
        mentalStatus: [
            "My family says I've been acting strange for a few days.",
            "I don't remember much of the past day or two.",
            "Been very drowsy. Hard to stay alert.",
            "Confused about where I am. What day is it?"
        ],
        
        // Less nausea/vomiting than DKA, less abdominal pain
        giSymptoms: [
            "No, not really vomiting. Just feel weak.",
            "A little nauseous but haven't thrown up.",
            "No stomach pain. Just feel terrible overall."
        ],
        
        // Precipitating factors - similar to DKA
        precipitants: {
            infection: [
                "I've had a cough for over a week. Got pneumonia before.",
                "Think I have a bladder infection. Burning when I pee.",
                "Been running a low fever. Maybe an infection."
            ],
            poorFluidIntake: [
                "I haven't been drinking much. Don't feel thirsty.",
                "Haven't been able to get enough fluids. Live alone.",
                "My caregiver was away. Didn't drink enough."
            ],
            medicationChange: [
                "Started a new medication recently - a steroid I think.",
                "Doctor changed my diabetes medicine.",
                "Taking a diuretic - water pill."
            ]
        },
        
        // Patient demographics - typically elderly
        demographics: {
            elderly: [
                "I'm 78. Live in assisted living.",
                "I'm 82. My daughter brought me in.",
                "I'm 71. Have some memory problems."
            ]
        }
    };

    // ============================================================
    // HYPOGLYCEMIA TEMPLATES
    // From UpToDate: Hypoglycemia in adults with/without diabetes
    // ============================================================
    
    const hypoglycemiaTemplates = {
        // Symptoms - neurogenic (autonomic) and neuroglycopenic
        onset: [
            "It came on suddenly - maybe 30 minutes ago.",
            "Started feeling shaky about an hour ago. Got worse.",
            "Suddenly felt weak and sweaty.",
            "It hit me all at once. Felt terrible."
        ],
        
        // Neurogenic/autonomic symptoms - tremor, palpitations, diaphoresis
        neurogenicSymptoms: [
            "I'm shaky and sweaty. Heart is racing.",
            "Trembling, feel anxious. Pounding heart.",
            "Sweating a lot. Feel nervous and jittery.",
            "Hands are shaking. Feel like my heart is beating fast.",
            "Cold and clammy. Tingling around my mouth."
        ],
        
        // Neuroglycopenic symptoms - confusion, dizziness, weakness
        neuroglycopenicSymptoms: [
            "I feel confused, can't think straight.",
            "Very dizzy and weak. Hard to concentrate.",
            "Feel drowsy. Hard to keep my eyes open.",
            "My thinking is foggy. Can't find my words.",
            "Feel like I might pass out."
        ],
        
        // Severe symptoms - seizure, coma
        severeSymptoms: [
            "I apparently had a seizure. Don't remember it.",
            "My wife says I passed out. I don't remember.",
            "They found me unresponsive. I blacked out."
        ],
        
        // Timing and triggers
        timing: {
            fasting: [
                "I haven't eaten since yesterday.",
                "I skipped breakfast and lunch.",
                "It happened after I fasted overnight.",
                "Haven't eaten all day."
            ],
            postprandial: [
                "It was about 2 hours after I ate.",
                "This happens after meals sometimes.",
                "Started about an hour after lunch.",
                "Always seems to happen after eating."
            ],
            exercise: [
                "I was exercising when it started.",
                "Happened during my workout.",
                "After I went for a run."
            ],
            insulin: [
                "I took my insulin but didn't eat.",
                "I might have taken too much insulin.",
                "Gave myself my shot then got busy and forgot to eat.",
                "Insulin pump may have given too much."
            ]
        },
        
        // Diabetes history for hypoglycemia
        diabetesHistory: {
            type1: [
                "I have type 1 diabetes. On insulin.",
                "Type 1 - use an insulin pump.",
                "Diabetic since childhood. On multiple insulin shots."
            ],
            type2OnInsulin: [
                "Type 2 diabetes. On insulin.",
                "Take insulin and glipizide for my diabetes.",
                "On insulin twice a day."
            ],
            type2OnSulfonylurea: [
                "I take glipizide for my diabetes.",
                "On glyburide - a diabetes pill.",
                "Take glimepiride every morning."
            ],
            noDiabetes: [
                "I don't have diabetes.",
                "Never been diagnosed with diabetes.",
                "My blood sugar has always been normal."
            ]
        },
        
        // Previous episodes
        priorEpisodes: [
            "This has happened before. Usually when I skip meals.",
            "I've had low blood sugar episodes several times.",
            "First time this has happened to me.",
            "It's been happening more and more lately."
        ],
        
        // Recovery with glucose
        recoveryWithGlucose: [
            "I felt better after I drank some juice.",
            "Someone gave me sugar and I started feeling better.",
            "Had some crackers and felt improved.",
            "The paramedics gave me something and I feel much better now."
        ],
        
        // Risk factors
        riskFactors: {
            renalDisease: [
                "I have kidney disease. On dialysis.",
                "My kidneys don't work well.",
                "Chronic kidney disease - stage 4."
            ],
            liverDisease: [
                "I have cirrhosis.",
                "Liver problems from hepatitis.",
                "My liver doesn't work well."
            ],
            alcohol: [
                "I drink quite a bit. Maybe a bottle of wine daily.",
                "I've been drinking heavily lately.",
                "Had a lot to drink last night."
            ],
            medications: [
                "I'm not sure what medications might cause this.",
                "Take several medications for my heart.",
                "On a lot of different medicines."
            ]
        }
    };

    // ============================================================
    // DELIRIUM TEMPLATES
    // From UpToDate: Delirium - Evaluation and diagnosis
    // ============================================================
    
    const deliriumTemplates = {
        // Key features: Acute change, fluctuating course, inattention
        // Information often from family/caregivers
        
        onset: [
            "He's been confused since yesterday. It came on suddenly.",
            "She was fine two days ago. Now she doesn't know where she is.",
            "This started overnight. He woke up very confused.",
            "It's been getting worse over the past day or two."
        ],
        
        // Fluctuating course - waxes and wanes
        fluctuation: [
            "Sometimes she seems okay, then she gets confused again.",
            "He was better this morning but got worse this evening.",
            "It comes and goes. Some moments he's lucid.",
            "Worse at night. A little better during the day."
        ],
        
        // Inattention
        attention: [
            "He can't focus on what I'm saying.",
            "She keeps getting distracted. Can't finish a sentence.",
            "Can't pay attention to anything.",
            "Keeps drifting off mid-conversation."
        ],
        
        // Disorganized thinking
        thinking: [
            "His thoughts are all jumbled. Not making sense.",
            "She's saying things that don't connect.",
            "Rambling, jumping from topic to topic.",
            "Confused about simple things."
        ],
        
        // Altered level of consciousness
        consciousness: {
            hypoactive: [
                "He's very drowsy. Hard to keep him awake.",
                "She's lethargic. Just wants to sleep.",
                "Very quiet and withdrawn. Not like him.",
                "Sleeping all the time. Hard to rouse."
            ],
            hyperactive: [
                "He's very agitated. Trying to pull out his IV.",
                "She keeps trying to get out of bed.",
                "Restless, can't sit still. Pulling at things.",
                "Combative. Fighting with the nurses."
            ],
            mixed: [
                "Sometimes agitated, sometimes very sleepy.",
                "Goes back and forth between restless and drowsy.",
                "Periods of agitation then crashes."
            ]
        },
        
        // Perceptual disturbances
        hallucinations: [
            "He says he sees people in the room who aren't there.",
            "She thinks there are bugs on the wall.",
            "Keeps talking to someone who isn't here.",
            "Seeing things. Pointing at the corner."
        ],
        
        // Sleep-wake disturbance
        sleep: [
            "He's been up all night. Sleeping during the day.",
            "Her sleep schedule is completely off.",
            "Awake at 3 AM, trying to leave the house.",
            "Day-night reversal. Wide awake at midnight."
        ],
        
        // Baseline function - important for diagnosis
        baselineFunction: [
            "Normally he's completely independent. Sharp as a tack.",
            "She has mild memory problems but nothing like this.",
            "He has dementia but this is much worse than usual.",
            "Completely normal before this started.",
            "Has some forgetfulness but is normally oriented."
        ],
        
        // Precipitating factors for delirium
        precipitants: {
            infection: [
                "She might have a urinary tract infection.",
                "He's had a cough and fever.",
                "Was diagnosed with pneumonia a few days ago."
            ],
            medications: [
                "They started a new medication in the hospital.",
                "She was given something for sleep.",
                "He's on a lot of pain medicine since surgery.",
                "Started an antibiotic a few days ago."
            ],
            surgery: [
                "Just had hip surgery two days ago.",
                "Post-operative from heart surgery.",
                "Had a procedure under anesthesia yesterday."
            ],
            hospitalization: [
                "Been in the hospital for a week now.",
                "This started after being admitted.",
                "First few days in hospital she was fine."
            ],
            alcoholWithdrawal: [
                "He drinks heavily. Hasn't had alcohol for 2 days.",
                "She stopped drinking when she came to the hospital.",
                "Usually drinks a lot. Cut off since admission."
            ],
            benzoWithdrawal: [
                "Takes Xanax daily. Hasn't had it in 2 days.",
                "Ran out of her anxiety medication.",
                "Usually takes Ativan. Hasn't had any."
            ],
            urinaryRetention: [
                "He hasn't been able to urinate.",
                "Catheter was removed and she hasn't voided.",
                "Complaining of bladder discomfort."
            ],
            constipation: [
                "Hasn't had a bowel movement in 5 days.",
                "Very constipated.",
                "Impacted - they had to disimpact him."
            ],
            pain: [
                "He's been in a lot of pain.",
                "Pain isn't being well controlled.",
                "She's uncomfortable but can't tell us where."
            ],
            environmentalFactors: [
                "No windows in the room. Lost track of day and night.",
                "Doesn't have her glasses or hearing aids.",
                "Transferred rooms three times.",
                "No visitors allowed. Very isolated."
            ]
        },
        
        // Risk factors
        riskFactors: {
            age: [
                "He's 85 years old.",
                "She's elderly - 78.",
                "He's 90. Has been getting frailer."
            ],
            dementia: [
                "She has Alzheimer's disease.",
                "He has dementia - diagnosed 3 years ago.",
                "Memory has been declining for years."
            ],
            multipleComorbidities: [
                "Has a lot of medical problems - heart failure, diabetes, kidney disease.",
                "Multiple chronic conditions.",
                "Very sick with many health issues."
            ]
        },
        
        // Negatives - important for ruling out other causes
        negatives: {
            focalNeuroDeficit: [
                "No weakness on one side.",
                "Arms and legs seem equal.",
                "No facial droop."
            ],
            headache: [
                "No headache that she mentioned.",
                "He didn't complain of head pain.",
                "No headache."
            ],
            fever: [
                "No fever that I know of.",
                "Temperature has been normal.",
                "Not running a fever."
            ],
            trauma: [
                "No falls or head injury.",
                "Didn't hit his head.",
                "No trauma."
            ]
        }
    };

    // ============================================================
    // ALCOHOL WITHDRAWAL TEMPLATES
    // Commonly associated with altered mental status
    // ============================================================
    
    const alcoholWithdrawalTemplates = {
        onset: [
            "He stopped drinking 2 days ago and now this.",
            "Hasn't had alcohol since coming to the hospital yesterday.",
            "Ran out of money for alcohol 3 days ago.",
            "Trying to quit. Last drink was 48 hours ago."
        ],
        
        drinkingHistory: [
            "Drinks a pint of vodka daily.",
            "Heavy drinker - a case of beer a day.",
            "Alcoholic for 20 years. Drinks all day.",
            "Drinks heavily. Can't go a day without it."
        ],
        
        symptoms: {
            mild: [
                "He's anxious and can't sleep. Hands are shaking.",
                "Tremulous, sweating. Heart racing.",
                "Jittery, nervous. Can't sit still."
            ],
            moderate: [
                "Seeing things. Very agitated.",
                "Confused, sweating profusely. Very anxious.",
                "Hallucinating. Thinks there are bugs everywhere."
            ],
            severe: [
                "Had a seizure. Very confused.",
                "Delirious. Doesn't know where he is. Fever.",
                "DTs - shaking, seeing things, heart racing, fever."
            ]
        },
        
        priorWithdrawal: [
            "This has happened before when he stopped drinking.",
            "Had DTs in the past - was in the ICU.",
            "Never had withdrawal this bad before.",
            "Has had seizures from alcohol withdrawal before."
        ]
    };

    // ============================================================
    // CLINICAL DECISION TOOLS
    // ============================================================
    
    const clinicalTools = {
        // Confusion Assessment Method (CAM) - for delirium
        // From UpToDate: Sensitivity 80%, Specificity 99%
        cam: {
            description: "Confusion Assessment Method - gold standard for delirium detection",
            features: [
                "1. Acute onset and fluctuating course",
                "2. Inattention",
                "3. Disorganized thinking",
                "4. Altered level of consciousness"
            ],
            interpretation: "Delirium present if Features 1 AND 2 AND (3 OR 4)"
        },
        
        // DKA severity classification
        dkaSeverity: {
            mild: {
                pH: ">7.25",
                bicarbonate: "15-18 mEq/L",
                mentalStatus: "Alert",
                anionGap: ">10"
            },
            moderate: {
                pH: "7.00-7.24",
                bicarbonate: "10-15 mEq/L",
                mentalStatus: "Alert/drowsy",
                anionGap: ">12"
            },
            severe: {
                pH: "<7.00",
                bicarbonate: "<10 mEq/L",
                mentalStatus: "Stupor/coma",
                anionGap: ">12"
            }
        },
        
        // HHS criteria
        hhsCriteria: {
            glucose: "≥600 mg/dL (33.3 mmol/L)",
            effectiveOsmolality: ">320 mOsm/kg",
            pH: ">7.30",
            bicarbonate: ">20 mEq/L",
            ketones: "Negative or trace"
        },
        
        // Whipple's triad for hypoglycemia
        whipplesTriad: {
            description: "Confirms pathologic hypoglycemia",
            criteria: [
                "1. Symptoms consistent with hypoglycemia",
                "2. Low plasma glucose measured when symptoms present",
                "3. Resolution of symptoms when glucose is raised"
            ]
        },
        
        // Hypoglycemia levels (from ADA/Endocrine Society)
        hypoglycemiaLevels: {
            level1: {
                glucose: "<70 mg/dL (3.9 mmol/L) but ≥54 mg/dL",
                action: "Alert - take action (carbohydrate, recheck)"
            },
            level2: {
                glucose: "<54 mg/dL (3.0 mmol/L)",
                action: "Serious - immediate action required"
            },
            level3: {
                description: "Requires assistance of another person",
                action: "Glucagon or IV dextrose"
            }
        }
    };

    // ============================================================
    // PHYSICAL EXAM FINDINGS
    // ============================================================
    
    const physicalExamFindings = {
        dka: {
            general: [
                "Appears ill, dehydrated, drowsy",
                "Deep, rapid breathing (Kussmaul respirations)",
                "Fruity odor on breath (acetone)"
            ],
            vitals: [
                "Tachycardia, hypotension if severe",
                "Tachypnea with deep respirations",
                "Normal or low temperature (may mask fever)"
            ],
            skin: [
                "Dry mucous membranes",
                "Poor skin turgor",
                "Flushed appearance"
            ],
            neuro: [
                "Drowsy but arousable (mild-moderate)",
                "Obtunded or comatose (severe)",
                "No focal deficits"
            ]
        },
        
        hhs: {
            general: [
                "Severely dehydrated",
                "Altered mental status prominent",
                "No Kussmaul respirations (minimal acidosis)"
            ],
            vitals: [
                "Tachycardia, often hypotensive",
                "Normal respiratory pattern",
                "May have low-grade fever"
            ],
            neuro: [
                "Lethargy to coma",
                "May have focal signs (hemiparesis, hemianopsia)",
                "Seizures possible"
            ]
        },
        
        hypoglycemia: {
            mild: [
                "Tremulous, diaphoretic",
                "Tachycardia, pale",
                "Anxious appearing"
            ],
            severe: [
                "Obtunded or unresponsive",
                "May be hypothermic",
                "Seizure activity possible"
            ]
        },
        
        delirium: {
            hypoactive: [
                "Drowsy, withdrawn",
                "Decreased psychomotor activity",
                "Poor eye contact"
            ],
            hyperactive: [
                "Agitated, restless",
                "Pulling at lines/tubes",
                "Hypervigilant or combative"
            ],
            general: [
                "Fluctuating attention",
                "Disorganized speech",
                "May have asterixis (metabolic)",
                "No focal neurologic deficits (usually)"
            ]
        },
        
        alcoholWithdrawal: {
            mild: [
                "Tremor, diaphoresis",
                "Tachycardia, hypertension",
                "Anxious, irritable"
            ],
            severe: [
                "Severe diaphoresis, hyperthermia",
                "Marked tachycardia and hypertension",
                "Visual hallucinations",
                "Severe confusion/delirium"
            ]
        }
    };

    // ============================================================
    // WORKUP TEMPLATES
    // ============================================================
    
    const workupFindings = {
        dka: {
            glucose: "Usually 350-500 mg/dL (can be >800 or normal with SGLT2i)",
            pH: "<7.30 (mild), <7.24 (moderate), <7.00 (severe)",
            bicarbonate: "<18 mEq/L",
            anionGap: "Elevated (usually >20)",
            ketones: "Positive (beta-hydroxybutyrate elevated)",
            sodium: "Usually low (correct for glucose: add 2 mEq/L per 100 mg/dL glucose above 100)",
            potassium: "Normal or high initially (total body depleted)",
            bun_cr: "Elevated (prerenal azotemia)"
        },
        
        hhs: {
            glucose: "Usually >600 mg/dL, often >1000",
            pH: ">7.30",
            bicarbonate: ">20 mEq/L",
            anionGap: "Normal or mildly elevated",
            ketones: "Negative or trace",
            osmolality: "Effective Posm >320 mOsm/kg",
            sodium: "Variable (may be normal or elevated despite hyperglycemia)",
            bun_cr: "Elevated"
        },
        
        hypoglycemia: {
            glucose: "<70 mg/dL (level 1), <54 mg/dL (level 2)",
            workupDuringEpisode: [
                "Glucose",
                "Insulin level",
                "C-peptide",
                "Beta-hydroxybutyrate",
                "Proinsulin",
                "Sulfonylurea/meglitinide screen"
            ]
        },
        
        delirium: {
            basicLabs: [
                "BMP (glucose, electrolytes, BUN, Cr)",
                "CBC with differential",
                "Urinalysis",
                "Liver function tests if indicated"
            ],
            additionalTesting: [
                "Blood/urine cultures if infection suspected",
                "Chest X-ray if respiratory symptoms",
                "Drug levels if applicable",
                "Ammonia if liver disease",
                "TSH if thyroid suspected",
                "ABG if hypoxia/hypercarbia suspected"
            ],
            imaging: "CT head if focal deficits, trauma, or unclear etiology",
            lp: "If infection suspected and no clear source"
        }
    };

    // ============================================================
    // HELPER FUNCTIONS
    // ============================================================
    
    function getRandomResponse(category) {
        if (Array.isArray(category)) {
            return category[Math.floor(Math.random() * category.length)];
        }
        return category;
    }

    function getTemplateForDiagnosis(diagnosis) {
        const diagnosisLower = diagnosis.toLowerCase();
        
        if (diagnosisLower.includes('dka') || diagnosisLower.includes('ketoacidosis')) {
            return dkaTemplates;
        } else if (diagnosisLower.includes('hhs') || diagnosisLower.includes('hyperosmolar')) {
            return hhsTemplates;
        } else if (diagnosisLower.includes('hypoglycemia') || diagnosisLower.includes('low blood sugar')) {
            return hypoglycemiaTemplates;
        } else if (diagnosisLower.includes('delirium') || diagnosisLower.includes('acute confusion')) {
            return deliriumTemplates;
        } else if (diagnosisLower.includes('alcohol withdrawal') || diagnosisLower.includes('dt')) {
            return alcoholWithdrawalTemplates;
        }
        
        return null;
    }

    // ============================================================
    // PUBLIC API
    // ============================================================
    
    return {
        lifeThreatening: lifeThreatening,
        commonCauses: commonCauses,
        dkaTemplates: dkaTemplates,
        hhsTemplates: hhsTemplates,
        hypoglycemiaTemplates: hypoglycemiaTemplates,
        deliriumTemplates: deliriumTemplates,
        alcoholWithdrawalTemplates: alcoholWithdrawalTemplates,
        clinicalTools: clinicalTools,

// ============================================================================
// AMS DETAILED LIBRARY
// ============================================================================

        dka: {
            // Chief complaint variations
            chiefComplaint: [
                "I've been throwing up and feeling really confused.",
                "I feel terrible - nauseous, weak, can't think straight.",
                "My family brought me in. They said I wasn't making sense.",
                "I can't stop vomiting. Feel awful.",
                "Very weak, dizzy, stomach hurts, short of breath."
            ],
            
            // Onset - DKA typically 24 hours
            onset: [
                "Started yesterday. Got worse overnight.",
                "About a day ago. Woke up feeling terrible this morning.",
                "Maybe 24 hours. It's gotten progressively worse.",
                "Since yesterday afternoon. Much worse now."
            ],
            
            // Location of abdominal pain
            location: [
                "All over my belly, but worst in the middle.",
                "Around my stomach area, kind of diffuse.",
                "Upper abdomen mostly. Hard to pinpoint.",
                "Whole abdomen hurts."
            ],
            
            // Quality of symptoms
            quality: [
                "Crampy stomach pain. Feel nauseous constantly.",
                "Dull ache in my belly. Waves of nausea.",
                "Sharp at times, then just sore.",
                "Achy all over. Stomach is the worst."
            ],
            
            // Severity
            severity: [
                "Pretty bad - maybe 6 or 7 out of 10.",
                "Worst I've felt in a long time. 8 out of 10.",
                "The nausea is terrible. Pain is moderate.",
                "Very weak. Stomach pain is about a 5."
            ],
            
            // Associated symptoms - key for DKA
            associated: {
                polyuria: [
                    "I've been peeing constantly. Every 30 minutes.",
                    "Urinating all the time. Up all night.",
                    "Going to the bathroom way more than normal."
                ],
                polydipsia: [
                    "So thirsty. Can't drink enough water.",
                    "My mouth is completely dry. Drinking constantly.",
                    "Thirsty no matter how much I drink."
                ],
                nausea: [
                    "Very nauseous. Threw up several times.",
                    "Can't keep anything down.",
                    "Constant nausea since yesterday."
                ],
                vomiting: [
                    "Vomited maybe 5 or 6 times.",
                    "Throwing up everything. Even water.",
                    "Been vomiting since this morning."
                ],
                breathing: [
                    "Taking deep breaths but still feel like I need air.",
                    "Breathing fast. Can't catch my breath.",
                    "My breathing feels labored."
                ],
                mentalStatus: [
                    "Foggy headed. Hard to concentrate.",
                    "Confused. Can't think clearly.",
                    "Feel out of it."
                ],
                weightLoss: [
                    "Lost maybe 10 pounds recently.",
                    "Clothes are looser. Definitely lost weight.",
                    "My wife says I look thinner."
                ],
                fatigue: [
                    "Exhausted. No energy at all.",
                    "Extremely tired and weak.",
                    "Can barely get out of bed."
                ]
            },
            
            // Diabetes-specific questions
            diabetesHistory: [
                "Type 1 diabetic since I was 15. On insulin pump.",
                "Have type 1 diabetes. Multiple daily injections.",
                "Type 2 on insulin for the past 5 years.",
                "Diabetic. Take metformin and insulin.",
                "I don't have diabetes that I know of."
            ],
            
            insulinCompliance: [
                "I ran out of insulin 3 days ago.",
                "Haven't been taking it regularly. Cost too much.",
                "My pump malfunctioned. No backup.",
                "Stopped taking it because I wasn't eating.",
                "I've been taking it as prescribed."
            ],
            
            recentIllness: [
                "Had a bad cough for a few days before this.",
                "Think I have a UTI - burning when I pee.",
                "Had a fever a couple days ago.",
                "No recent illness that I know of."
            ],
            
            lastMeal: [
                "Haven't eaten since yesterday. Too nauseous.",
                "Tried to eat this morning but threw it up.",
                "Can't remember. Maybe yesterday afternoon."
            ],
            
            lastInsulin: [
                "Took it yesterday morning.",
                "Two days ago was my last dose.",
                "This morning, but I vomited it up.",
                "I've been taking it but maybe not enough."
            ],
            
            // Negatives for differential
            negatives: {
                chestPain: ["No chest pain.", "Chest feels fine."],
                headache: ["No headache.", "Head is okay."],
                focalWeakness: ["No, equal strength on both sides.", "No weakness on one side."],
                seizure: ["No seizures.", "Haven't had any seizures."],
                trauma: ["No falls or injuries.", "Didn't hit my head."],
                drugs: ["No recreational drugs.", "I don't use drugs."]
            }
        },
        
        // ========== HHS DETAILED RESPONSES ==========
        hhs: {
            chiefComplaint: [
                "My mother has been confused for several days.",
                "He's not acting right. Very drowsy and confused.",
                "She doesn't know where she is. Won't wake up properly.",
                "Found him very weak, couldn't stand up."
            ],
            
            onset: [
                "It's been coming on over the past week.",
                "Started about 4-5 days ago. Getting worse.",
                "Gradually over several days. Today is the worst.",
                "Maybe a week of not feeling well, but the confusion is new."
            ],
            
            associated: {
                polyuria: [
                    "She's been going to the bathroom constantly for days.",
                    "Urinating all the time. Wet the bed.",
                    "Been to the bathroom more times than I can count."
                ],
                polydipsia: [
                    "Drinking huge amounts of water but still thirsty.",
                    "Can't get enough fluids.",
                    "So thirsty. Mouth completely dry."
                ],
                weakness: [
                    "Very weak. Can barely walk.",
                    "Legs gave out. Fell trying to get up.",
                    "No strength at all."
                ],
                mentalStatus: [
                    "Confused. Doesn't recognize family members.",
                    "In and out. Sometimes lucid, then confused again.",
                    "Very drowsy. Hard to wake him up.",
                    "Talking nonsense. Very disoriented."
                ],
                visionChanges: [
                    "Says her vision is blurry.",
                    "Can't see well. Keeps squinting.",
                    "Complaining of vision problems."
                ],
                speech: [
                    "Words are slurred.",
                    "Having trouble speaking clearly.",
                    "Speech doesn't make sense."
                ]
            },
            
            fluidIntake: [
                "She hasn't been drinking much. Lives alone.",
                "Hot weather and he doesn't drink enough.",
                "Caregiver was away. Not sure if she had enough fluids.",
                "Hard to get her to drink anything."
            ],
            
            diabetesHistory: [
                "Type 2 diabetes for 20 years.",
                "Diabetic. Takes pills for it.",
                "On metformin and glipizide.",
                "Diabetic but not sure about medications.",
                "Not that we know of. Never been diagnosed."
            ],
            
            negatives: {
                nausea: ["No vomiting.", "Hasn't complained of nausea."],
                abdominalPain: ["No stomach pain.", "Belly seems okay."],
                breathing: ["Breathing normally.", "No trouble breathing."],
                headache: ["No headache mentioned.", "Doesn't complain of head pain."]
            }
        },
        
        // ========== HYPOGLYCEMIA DETAILED RESPONSES ==========
        hypoglycemia: {
            chiefComplaint: [
                "I feel shaky and sweaty. Something's wrong.",
                "I think my blood sugar is low.",
                "Feel like I'm going to pass out.",
                "My husband found me confused and sweating."
            ],
            
            onset: [
                "It came on suddenly about 30 minutes ago.",
                "Started feeling off about an hour ago, got worse.",
                "All of a sudden I felt terrible.",
                "Happened quickly. One minute I was fine."
            ],
            
            // Neurogenic (autonomic) symptoms
            neurogenicSymptoms: {
                tremor: [
                    "My hands are shaking badly.",
                    "Can't stop trembling.",
                    "Very shaky all over."
                ],
                diaphoresis: [
                    "I'm drenched in sweat.",
                    "Sweating profusely.",
                    "Cold and clammy."
                ],
                palpitations: [
                    "Heart is pounding.",
                    "Can feel my heart racing.",
                    "Heart beating really fast."
                ],
                anxiety: [
                    "Feel very anxious, like something bad is happening.",
                    "Nervous and jittery.",
                    "Panicky feeling."
                ],
                hunger: [
                    "Suddenly very hungry.",
                    "Stomach is growling. Need to eat.",
                    "Ravenously hungry."
                ],
                paresthesias: [
                    "Tingling around my mouth.",
                    "Numbness in my lips.",
                    "Pins and needles feeling."
                ]
            },
            
            // Neuroglycopenic symptoms
            neuroglycopenicSymptoms: {
                confusion: [
                    "Can't think straight.",
                    "Confused about where I am.",
                    "Foggy headed. Thoughts aren't clear."
                ],
                dizziness: [
                    "Very dizzy. Room is spinning.",
                    "Lightheaded. Feel like I might fall.",
                    "Unsteady on my feet."
                ],
                weakness: [
                    "Very weak. Legs feel like jelly.",
                    "No strength. Can barely stand.",
                    "Extremely weak."
                ],
                visualChanges: [
                    "Vision is blurry.",
                    "Seeing double.",
                    "Hard to focus my eyes."
                ],
                drowsiness: [
                    "Very sleepy. Hard to stay awake.",
                    "Can barely keep my eyes open.",
                    "Feel like I'm going to pass out."
                ],
                difficultyConcentrating: [
                    "Can't focus on what you're saying.",
                    "Mind keeps wandering.",
                    "Hard to pay attention."
                ],
                slurredSpeech: [
                    "Words aren't coming out right.",
                    "Trouble speaking clearly.",
                    "Speech feels thick."
                ],
                behaviorChanges: [
                    "My wife says I was acting strange.",
                    "Apparently I was combative. Don't remember.",
                    "Family says I wasn't making sense."
                ]
            },
            
            // Severe symptoms
            severeSymptoms: {
                seizure: [
                    "They said I had a seizure. I don't remember.",
                    "Apparently I was convulsing.",
                    "My wife saw me shaking all over."
                ],
                lossOfConsciousness: [
                    "I blacked out.",
                    "Found unresponsive by family.",
                    "Don't remember anything for about 20 minutes."
                ]
            },
            
            // Timing relative to meals/insulin
            timing: {
                fasting: [
                    "I haven't eaten since last night.",
                    "Skipped breakfast and lunch.",
                    "It's been over 12 hours since I ate."
                ],
                postprandial: [
                    "About 2-3 hours after eating.",
                    "This happens after meals sometimes.",
                    "Usually occurs a couple hours after I eat."
                ],
                afterExercise: [
                    "Was exercising when it started.",
                    "Happened during my workout.",
                    "After running for about an hour."
                ],
                afterInsulin: [
                    "Took my insulin but then didn't eat.",
                    "Might have given myself too much insulin.",
                    "Took my shot and then got busy. Forgot to eat."
                ]
            },
            
            // Diabetes and medication history
            diabetesMedications: [
                "On insulin - Lantus and Humalog.",
                "Take glipizide for my diabetes.",
                "On an insulin pump.",
                "Just metformin. That doesn't cause low sugar, does it?",
                "I don't have diabetes."
            ],
            
            // Prior episodes
            priorEpisodes: [
                "This has happened a few times before.",
                "First time this bad.",
                "I get low blood sugar fairly often.",
                "Never had this happen before."
            ],
            
            // Treatment already tried
            selfTreatment: [
                "Drank some orange juice. Felt a little better.",
                "Had some candy. Helped temporarily.",
                "Haven't been able to eat anything.",
                "Too confused to treat myself. Family called 911."
            ],
            
            // Risk factors
            riskFactors: {
                renal: [
                    "I have kidney disease. On dialysis.",
                    "Kidneys don't work well.",
                    "CKD stage 4."
                ],
                liver: [
                    "I have cirrhosis.",
                    "Liver problems.",
                    "Hepatitis affecting my liver."
                ],
                alcohol: [
                    "I drink heavily.",
                    "Had a lot to drink last night.",
                    "Don't eat much when I drink."
                ],
                malnutrition: [
                    "Haven't been eating well lately.",
                    "Lost my appetite.",
                    "Only been having liquids."
                ]
            }
        },
        
        // ========== DELIRIUM DETAILED RESPONSES ==========
        // Note: Responses often from family/caregiver
        delirium: {
            chiefComplaint: [
                "My father has been confused since yesterday.",
                "She's not acting like herself. Very confused.",
                "He woke up this morning not knowing where he was.",
                "Something's wrong with mom. She's seeing things."
            ],
            
            onset: [
                "It started suddenly yesterday.",
                "Noticed it this morning. Was fine last night.",
                "Over the past day or two.",
                "Came on quickly - within 24 hours."
            ],
            
            baselineFunction: [
                "Normally completely independent. Sharp as a tack.",
                "She has mild memory problems but nothing like this.",
                "He has dementia, but this is much worse than his baseline.",
                "Usually oriented and conversational.",
                "Lives alone. Manages everything herself."
            ],
            
            fluctuation: [
                "She goes in and out. Sometimes seems okay.",
                "Worse at night, better in the morning.",
                "Changes throughout the day.",
                "Some moments he's lucid, then confused again."
            ],
            
            attention: [
                "He can't focus on what I'm saying.",
                "Gets distracted in the middle of sentences.",
                "Can't follow a conversation.",
                "Keeps losing track."
            ],
            
            thinking: [
                "Her thoughts are jumbled.",
                "Not making sense. Ideas don't connect.",
                "Rambling, jumping from topic to topic.",
                "Says things that don't make sense."
            ],
            
            consciousness: {
                hypoactive: [
                    "Very drowsy. Hard to keep him awake.",
                    "Lethargic. Just wants to sleep all day.",
                    "Withdrawn. Not interacting.",
                    "Sleeping much more than usual."
                ],
                hyperactive: [
                    "Very agitated. Won't stay in bed.",
                    "Combative with the nurses.",
                    "Restless. Picking at things.",
                    "Trying to pull out his IV."
                ]
            },
            
            hallucinations: [
                "Seeing people who aren't there.",
                "Says there are bugs on the wall.",
                "Talks to someone invisible.",
                "Points at things and acts scared."
            ],
            
            sleepWake: [
                "Day and night are reversed.",
                "Up all night, sleeps during the day.",
                "Sleep schedule is completely off.",
                "Awake at 3 AM wanting to leave."
            ],
            
            precipitants: {
                infection: [
                    "She might have a UTI. Burning when she pees.",
                    "Had pneumonia diagnosed a few days ago.",
                    "Running a fever. Coughing.",
                    "Skin looks red and infected."
                ],
                medication: [
                    "Started a new medication recently.",
                    "They gave her something for pain.",
                    "On antibiotics. Maybe that's causing it.",
                    "Added a sleeping pill a few days ago."
                ],
                surgery: [
                    "Just had hip surgery 2 days ago.",
                    "Post-op from abdominal surgery.",
                    "Had anesthesia yesterday.",
                    "Recovering from cardiac surgery."
                ],
                hospital: [
                    "Been in the hospital a week now.",
                    "This started after admission.",
                    "Was fine the first few days.",
                    "The hospitalization seems to have triggered it."
                ],
                environmental: [
                    "Doesn't have her glasses or hearing aids.",
                    "Room doesn't have windows. Can't tell day from night.",
                    "Been moved to different rooms several times.",
                    "Very isolated. No visitors allowed."
                ],
                withdrawal: [
                    "He drinks heavily. Hasn't had alcohol for 2 days.",
                    "Takes Xanax daily. Ran out.",
                    "Usually on sleeping pills. Didn't get them here."
                ],
                painUrinaryConstipation: [
                    "In a lot of pain. Not well controlled.",
                    "Hasn't urinated in 12 hours.",
                    "Very constipated. No BM in 5 days.",
                    "Catheter was removed and she's uncomfortable."
                ]
            },
            
            riskFactors: {
                age: [
                    "She's 85 years old.",
                    "He's elderly - 82.",
                    "She's 78 with several health issues."
                ],
                dementia: [
                    "Has Alzheimer's disease.",
                    "Diagnosed with dementia 3 years ago.",
                    "Memory problems for years, but not this bad."
                ],
                comorbidities: [
                    "Has heart failure, diabetes, and kidney disease.",
                    "Multiple medical problems.",
                    "History of stroke."
                ]
            },
            
            negatives: {
                focalDeficit: [
                    "No weakness on one side.",
                    "Arms and legs seem equal.",
                    "No facial droop."
                ],
                headache: [
                    "No headache.",
                    "Doesn't complain of head pain.",
                    "Head is fine."
                ],
                trauma: [
                    "No falls recently.",
                    "Didn't hit his head.",
                    "No injuries."
                ],
                fever: [
                    "No fever that we know of.",
                    "Temperature has been normal.",
                    "Not running hot."
                ]
            }
        }
    };

    // ============================================================
    // PHYSICAL EXAM RESPONSE TEMPLATES
    // ============================================================
    
    const physicalExamResponses = {
        
        dka: {
            generalAppearance: [
                "Patient appears ill and dehydrated. Drowsy but responsive.",
                "Acutely ill-appearing. Deep, rapid respirations noted.",
                "Lethargic. Fruity odor on breath.",
                "Obtunded. Appears severely dehydrated."
            ],
            vitals: {
                heartRate: "Tachycardia - heart rate 112 bpm",
                bloodPressure: "Hypotensive - BP 92/58",
                respiratoryRate: "Tachypneic with deep respirations (Kussmaul) - RR 28",
                temperature: "Afebrile - 98.4°F (may be masking infection)",
                oxygenSaturation: "O2 sat 97% on room air"
            },
            heent: [
                "Dry mucous membranes. Cracked lips.",
                "Sunken eyes. Dry oral mucosa.",
                "Fruity/acetone odor on breath."
            ],
            cardiovascular: [
                "Tachycardic. Regular rhythm. No murmurs.",
                "Rapid heart rate. Weak pulses.",
                "Delayed capillary refill."
            ],
            respiratory: [
                "Deep, labored breathing (Kussmaul respirations).",
                "Clear to auscultation bilaterally despite tachypnea.",
                "No crackles or wheezes. Deep inspirations."
            ],
            abdominal: [
                "Diffuse tenderness without guarding or rebound.",
                "Soft but tender, especially epigastric.",
                "Hypoactive bowel sounds."
            ],
            skin: [
                "Poor skin turgor. Dry and warm.",
                "Decreased turgor. Tenting present.",
                "Flushed appearance."
            ],
            neurologic: [
                "Drowsy but arousable. Oriented to person only.",
                "GCS 13 (E3V4M6). No focal deficits.",
                "Lethargic. Moves all extremities equally.",
                "Obtunded. Withdraws to pain. No focal signs."
            ]
        },
        
        hhs: {
            generalAppearance: [
                "Elderly patient appears severely dehydrated and confused.",
                "Obtunded. Appears profoundly volume depleted.",
                "Lethargic, barely responsive to verbal stimuli."
            ],
            vitals: {
                heartRate: "Tachycardia - heart rate 118 bpm",
                bloodPressure: "Hypotensive - BP 88/52",
                respiratoryRate: "Normal to mildly elevated - RR 18",
                temperature: "Low-grade fever - 99.8°F",
                oxygenSaturation: "O2 sat 95% on room air"
            },
            heent: [
                "Very dry mucous membranes.",
                "Sunken eyes. Dry tongue.",
                "No fruity odor (unlike DKA)."
            ],
            cardiovascular: [
                "Tachycardic. Weak, thready pulses.",
                "Hypotension with position changes.",
                "Delayed capillary refill >3 seconds."
            ],
            respiratory: [
                "Breathing normally (no Kussmaul respirations).",
                "Clear lungs bilaterally.",
                "No respiratory distress."
            ],
            neurologic: [
                "Obtunded. GCS 10 (E2V3M5).",
                "Focal weakness on left side noted.",
                "Confused, disoriented to time, place, person.",
                "Seizure activity witnessed.",
                "Responds only to painful stimuli."
            ],
            skin: [
                "Severely decreased skin turgor.",
                "Very dry. Tenting for several seconds.",
                "Cool extremities."
            ]
        },
        
        hypoglycemia: {
            generalAppearance: {
                mild: [
                    "Patient appears anxious, tremulous, diaphoretic.",
                    "Awake and alert but shaky.",
                    "Pale and sweaty."
                ],
                moderate: [
                    "Confused appearance. Diaphoretic.",
                    "Drowsy, difficulty following commands.",
                    "Slurred speech, unsteady."
                ],
                severe: [
                    "Unresponsive. Profoundly diaphoretic.",
                    "Obtunded. GCS 8.",
                    "Post-ictal following witnessed seizure."
                ]
            },
            vitals: {
                heartRate: "Tachycardia - heart rate 108 bpm",
                bloodPressure: "Normal to slightly elevated - BP 138/88",
                respiratoryRate: "Normal - RR 16",
                temperature: "Possibly hypothermic - 97.1°F",
                oxygenSaturation: "O2 sat 98% on room air"
            },
            skin: [
                "Diaphoretic. Cold and clammy.",
                "Pale, sweaty.",
                "Cool, moist skin."
            ],
            neurologic: {
                mild: [
                    "Alert, oriented. Tremor present.",
                    "Anxious. Fine motor tremor.",
                    "Intact neurologically."
                ],
                moderate: [
                    "Confused. Disoriented to time.",
                    "Slurred speech. Ataxic gait.",
                    "Difficulty with concentration."
                ],
                severe: [
                    "Obtunded. GCS 9.",
                    "Unresponsive to verbal, withdraws to pain.",
                    "Post-ictal confusion following seizure."
                ]
            },
            cardiovascular: [
                "Tachycardic. Regular rhythm.",
                "Bounding pulses.",
                "No murmurs."
            ]
        },
        
        delirium: {
            generalAppearance: {
                hypoactive: [
                    "Elderly patient appears drowsy, withdrawn.",
                    "Lethargic. Minimal spontaneous movement.",
                    "Quiet, apathetic. Decreased eye contact."
                ],
                hyperactive: [
                    "Agitated. Trying to climb out of bed.",
                    "Restless. Picking at sheets and IV lines.",
                    "Combative when approached."
                ],
                mixed: [
                    "Alternates between drowsy and agitated.",
                    "Periods of agitation followed by somnolence."
                ]
            },
            vitals: {
                heartRate: "May be normal or tachycardic depending on etiology",
                bloodPressure: "Variable - depends on underlying cause",
                respiratoryRate: "Usually normal unless respiratory infection",
                temperature: "May have fever if infectious etiology",
                oxygenSaturation: "Variable - check for hypoxia as cause"
            },
            mental_status: [
                "Inattentive. Cannot focus on examiner.",
                "Disorganized thinking. Tangential responses.",
                "Disoriented to time, sometimes place.",
                "Fluctuating level of consciousness.",
                "Visual hallucinations reported."
            ],
            neurologic: [
                "No focal motor deficits.",
                "May have asterixis if metabolic etiology.",
                "Tremor possible if withdrawal etiology.",
                "Gait unsteady if able to ambulate."
            ],
            cam_assessment: [
                "Feature 1 (Acute onset, fluctuating): POSITIVE",
                "Feature 2 (Inattention): POSITIVE", 
                "Feature 3 (Disorganized thinking): POSITIVE",
                "Feature 4 (Altered consciousness): POSITIVE",
                "CAM POSITIVE - Delirium present"
            ]
        },
        
        alcoholWithdrawal: {
            generalAppearance: {
                mild: [
                    "Tremulous. Appears anxious.",
                    "Restless. Mild diaphoresis.",
                    "Awake, alert, mildly agitated."
                ],
                moderate: [
                    "Diaphoretic. Visibly tremulous.",
                    "Confused. Reporting visual hallucinations.",
                    "Agitated, difficult to redirect."
                ],
                severe: [
                    "Profoundly diaphoretic. Febrile.",
                    "Delirious. Severe agitation.",
                    "Florid hallucinations. Combative."
                ]
            },
            vitals: {
                mildModerate: {
                    heartRate: "Tachycardia - HR 110",
                    bloodPressure: "Hypertension - BP 165/95",
                    respiratoryRate: "Mildly elevated - RR 20",
                    temperature: "Low-grade fever possible"
                },
                severe: {
                    heartRate: "Marked tachycardia - HR 140",
                    bloodPressure: "Severe hypertension - BP 190/110",
                    respiratoryRate: "Elevated - RR 24",
                    temperature: "Fever - 102.5°F"
                }
            },
            neurologic: [
                "Coarse tremor of hands.",
                "Hyperreflexia.",
                "Hallucinations - visual (insects, animals).",
                "Disoriented. Confused.",
                "Seizure activity possible."
            ],
            skin: [
                "Profuse diaphoresis.",
                "Flushed.",
                "Warm to touch."
            ]
        }
    };

    // ============================================================
    // PUBLIC API
    // ============================================================
    
    return {
        hpiResponses: hpiResponses,
        physicalExamResponses: physicalExamResponses
    };

})();

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AlteredMentalStatusDetailedLibrary;
}
if (typeof window !== 'undefined') {
    window.AlteredMentalStatusDetailedLibrary = AlteredMentalStatusDetailedLibrary;
}
