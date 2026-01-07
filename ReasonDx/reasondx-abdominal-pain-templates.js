/**
 * ReasonDx Abdominal Pain Case Templates
 * Based on UpToDate Articles:
 * - "Evaluation of the adult with abdominal pain"
 * - "Acute appendicitis in adults: Clinical manifestations and differential diagnosis"
 * - "Acute calculous cholecystitis: Clinical features and diagnosis"
 * - "Clinical manifestations, diagnosis, and natural history of acute pancreatitis"
 * - "Etiologies, clinical manifestations, and diagnosis of mechanical small bowel obstruction"
 * - "Management of small bowel obstruction in adults"
 * 
 * Structure: Diagnosis-specific HPI templates and risk factor responses
 */

const ReasonDxAbdominalPainTemplates = (function() {
    'use strict';

    // ============================================================
    // LIFE-THREATENING / URGENT CAUSES OF ABDOMINAL PAIN
    // ============================================================
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
        urgentCauses: urgentCauses,
        
        getHPIResponse: getHPIResponse,
        getRiskFactorResponse: getRiskFactorResponse,
        getExamFindings: getExamFindings,
        getWorkupResults: getWorkupResults,
        matchQuestion: matchQuestion,
        getRandomResponse: getRandomResponse
    };
})();

// Export for Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ReasonDxAbdominalPainTemplates;
}
