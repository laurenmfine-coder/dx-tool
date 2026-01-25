// Deep Reasoning Cases - Extracted from training.html
// This file contains the case data for deep reasoning mode

    const deepReasoningCases = {
        "pancreatitis-deep": {
            id: "pancreatitis-deep",
            title: "Acute Pancreatitis - Deep Reasoning Case",
            category: "Gastroenterology",
            icon: "🔬",
            type: "deep-reasoning",
            difficulty: "intermediate",
            estimatedTime: "45-60 minutes",
            
            // ==================== LEARNING OBJECTIVES ====================
            learningObjectives: [
                "Identify the anatomical relationships of the pancreas and their clinical significance",
                "Explain the pathophysiological cascade of acute pancreatitis at the cellular level",
                "Connect diagnostic test results to underlying pathophysiology",
                "Justify treatment decisions based on mechanism of action",
                "Recognize and explain complications based on disease progression"
            ],
            
            // ==================== PRE-CASE SCIENCE PRIMER ====================
            sciencePrimer: {
                title: "Foundations: Pancreatic Anatomy & Physiology",
                estimatedTime: "8-10 minutes",
                
                anatomy: {
                    title: "Pancreatic Anatomy",
                    objectives: ["Locate the pancreas and its anatomical relationships", "Identify the ductal system", "Understand blood supply"],
                    
                    // External resources from UBC Clinical Anatomy (Creative Commons)
                    externalResources: [
                        {
                            title: "Interactive Foregut Atlas",
                            description: "Labeled cadaveric images showing pancreas, duodenum, liver, gallbladder and blood supply",
                            url: "https://www.clinicalanatomy.ca/abdomen/abdomenForegut.html",
                            type: "interactive-atlas",
                            source: "UBC Clinical Anatomy"
                        },
                        {
                            title: "Foregut Anatomy Module",
                            description: "Interactive learning module covering foregut organs including pancreas",
                            url: "https://www.clinicalanatomy.ca/abdomen/Foregut/story.html",
                            type: "interactive-module",
                            source: "UBC Clinical Anatomy"
                        },
                        {
                            title: "Liver & Gallbladder 3D Model",
                            description: "3D photogrammetry model showing biliary anatomy",
                            url: "https://www.clinicalanatomy.ca/abdomen/liver3D.html",
                            type: "3d-model",
                            source: "UBC Clinical Anatomy"
                        },
                        {
                            title: "Lipid Digestion Module",
                            description: "Interactive module on lipid digestion and pancreatic enzyme function",
                            url: "https://www.clinicalanatomy.ca/abdomen/Lipids/story.html",
                            type: "interactive-module",
                            source: "UBC Clinical Anatomy"
                        },
                        {
                            title: "Abdominal Radiology Atlas",
                            description: "Interactive radiological images of abdominal structures",
                            url: "https://www.clinicalanatomy.ca/radiology/abdomenAP.html",
                            type: "radiology",
                            source: "UBC Clinical Anatomy"
                        }
                    ],
                    
                    content: [
                        {
                            id: "location",
                            title: "Location & Relationships",
                            text: "The pancreas is a retroperitoneal organ lying posterior to the stomach at the level of L1-L2. It's divided into head (nestled in C-loop of duodenum), neck, body, and tail (extending toward the splenic hilum).",
                            clinicalCorrelation: "Retroperitoneal location explains why pancreatitis causes BACK pain (not just abdominal). The C-loop relationship explains why pancreatic head masses cause biliary obstruction.",
                            image: "pancreas_anatomy.svg"
                        },
                        {
                            id: "ducts",
                            title: "Ductal System",
                            text: "The main pancreatic duct (of Wirsung) runs the length of the pancreas and joins the common bile duct at the ampulla of Vater, entering the duodenum at the major papilla. The accessory duct (of Santorini) drains the upper head.",
                            clinicalCorrelation: "A gallstone impacting at the ampulla blocks BOTH bile and pancreatic drainage - this is why gallstones cause pancreatitis. The shared drainage also explains why pancreatitis can cause jaundice.",
                            image: "pancreatic_ducts.svg"
                        },
                        {
                            id: "blood_supply",
                            title: "Blood Supply",
                            text: "Dual blood supply: Superior pancreaticoduodenal artery (from gastroduodenal/celiac) and inferior pancreaticoduodenal artery (from SMA). Rich venous drainage to portal system.",
                            clinicalCorrelation: "Adequate perfusion is critical during pancreatitis - this is why aggressive IV fluid resuscitation is essential. Poor perfusion leads to pancreatic necrosis."
                        }
                    ],
                    
                    interactiveQuiz: [
                        {
                            question: "Why does a gallstone at the ampulla of Vater cause pancreatitis?",
                            options: [
                                { text: "It directly damages pancreatic tissue", correct: false },
                                { text: "It blocks pancreatic enzyme drainage, causing backflow and ductal pressure", correct: true },
                                { text: "It introduces bacteria into the pancreas", correct: false },
                                { text: "It cuts off blood supply to the pancreas", correct: false }
                            ],
                            explanation: "The ampulla is the shared exit point for bile and pancreatic secretions. A stone here causes obstruction → increased ductal pressure → premature enzyme activation within the pancreas."
                        },
                        {
                            question: "Why does pancreatitis cause back pain?",
                            options: [
                                { text: "Referred pain from the stomach", correct: false },
                                { text: "Spinal nerve compression", correct: false },
                                { text: "The pancreas is retroperitoneal, lying against the posterior abdominal wall", correct: true },
                                { text: "Muscle spasm from vomiting", correct: false }
                            ],
                            explanation: "The retroperitoneal position means pancreatic inflammation directly irritates posterior structures, causing the classic 'boring through to the back' pain."
                        }
                ],
                    
                    interactiveQuiz: [
                        {
                            question: "Why does a gallstone at the ampulla of Vater cause pancreatitis?",
                            options: [
                                { text: "It directly damages pancreatic tissue", correct: false },
                                { text: "It blocks pancreatic enzyme drainage, causing backflow and ductal pressure", correct: true },
                                { text: "It introduces bacteria into the pancreas", correct: false },
                                { text: "It cuts off blood supply to the pancreas", correct: false }
                            ],
                            explanation: "The ampulla is the shared exit point for bile and pancreatic secretions. A stone here causes obstruction → increased ductal pressure → premature enzyme activation within the pancreas."
                        },
                        {
                            question: "Why does pancreatitis cause back pain?",
                            options: [
                                { text: "Referred pain from the stomach", correct: false },
                                { text: "Spinal nerve compression", correct: false },
                                { text: "The pancreas is retroperitoneal, lying against the posterior abdominal wall", correct: true },
                                { text: "Muscle spasm from vomiting", correct: false }
                            ],
                            explanation: "The retroperitoneal position means pancreatic inflammation directly irritates posterior structures, causing the classic 'boring through to the back' pain."
                        }
                    ]
                },
                
                physiology: {
                    title: "Pancreatic Physiology",
                    objectives: ["Understand exocrine enzyme production and activation", "Recognize protective mechanisms against autodigestion"],
                    
                    // External resources for physiology
                    externalResources: [
                        {
                            title: "Lipid Digestion Module",
                            description: "Interactive module covering pancreatic lipase and fat digestion",
                            url: "https://www.clinicalanatomy.ca/abdomen/Lipids/story.html",
                            type: "interactive-module",
                            source: "UBC Clinical Anatomy"
                        },
                        {
                            title: "Protein Digestion Module",
                            description: "Interactive module on proteases including trypsin and chymotrypsin",
                            url: "https://www.clinicalanatomy.ca/abdomen/Proteins/story.html",
                            type: "interactive-module",
                            source: "UBC Clinical Anatomy"
                        },
                        {
                            title: "Carbohydrate Digestion Module",
                            description: "Interactive module covering amylase and carbohydrate breakdown",
                            url: "https://www.clinicalanatomy.ca/abdomen/Carbohydrates/story.html",
                            type: "interactive-module",
                            source: "UBC Clinical Anatomy"
                        }
                    ],
                    
                    content: [
                        {
                            id: "exocrine",
                            title: "Exocrine Function",
                            text: "Acinar cells produce digestive enzymes: proteases (trypsinogen, chymotrypsinogen), lipase, and amylase. These are secreted as inactive ZYMOGENS to prevent autodigestion. Ductal cells add bicarbonate to neutralize gastric acid.",
                            clinicalCorrelation: "Lipase and amylase are released when acinar cells are damaged - that's why we measure them. Lipase is more specific because amylase is also in salivary glands."
                        },
                        {
                            id: "activation",
                            title: "Normal Enzyme Activation",
                            text: "Trypsinogen is converted to active TRYPSIN by enterokinase (in duodenal brush border) - this happens ONLY in the intestinal lumen. Trypsin then activates other zymogens. This compartmentalization is critical.",
                            clinicalCorrelation: "In pancreatitis, this careful compartmentalization fails - trypsinogen activates INSIDE the pancreas, starting the destructive cascade."
                        },
                        {
                            id: "protection",
                            title: "Protective Mechanisms",
                            text: "The pancreas has multiple safeguards: 1) Enzymes stored as inactive zymogens, 2) Trypsin inhibitor (SPINK1) in acinar cells, 3) Spatial separation of activation site. When these fail, pancreatitis occurs.",
                            clinicalCorrelation: "Genetic mutations in SPINK1 (trypsin inhibitor) cause hereditary pancreatitis - the protection mechanism is defective."
                        }
                    ],
                    
                    interactiveQuiz: [
                        {
                            question: "Why are pancreatic enzymes stored as zymogens?",
                            options: [
                                { text: "They are more stable for storage", correct: false },
                                { text: "To prevent autodigestion of the pancreas itself", correct: true },
                                { text: "They work better when activated in the intestine", correct: false },
                                { text: "It makes them easier to transport", correct: false }
                            ],
                            explanation: "Active proteases would digest the pancreas! Zymogens are inactive precursors that are only activated in the intestinal lumen, safely away from pancreatic tissue."
                        }
                    ]
                },
                
                primerComplete: {
                    message: "You now understand the anatomical and physiological foundations. As you work through this case, you'll see how disruption of these normal mechanisms leads to disease.",
                    transitionText: "A patient is waiting in the ED. Apply what you've learned."
                }
            },
            
            // ==================== CLINICAL CASE - LONGITUDINAL ====================
            longitudinalTimeline: [
                {
                    day: 1,
                    title: "Emergency Department",
                    setting: "ED",
                    timeLabel: "Day 1, 2:00 AM"
                },
                {
                    day: 3,
                    title: "New Symptoms",
                    setting: "Inpatient",
                    timeLabel: "Day 3, 8:00 AM"
                },
                {
                    day: 5,
                    title: "Surgical Planning",
                    setting: "Inpatient",
                    timeLabel: "Day 5"
                },
                {
                    day: 7,
                    title: "Post-Op Day 1",
                    setting: "Inpatient",
                    timeLabel: "Day 7 (POD 1)"
                },
                {
                    day: 8,
                    title: "Discharge",
                    setting: "Inpatient",
                    timeLabel: "Day 8 (POD 2)"
                },
                {
                    day: 30,
                    title: "Follow-up",
                    setting: "Clinic",
                    timeLabel: "4 Weeks Later"
                }
            ],
            
            // ==================== DAY 1: ED PRESENTATION ====================
            day1: {
                patientInfo: {
                    name: "Ryan Mitchell",
                    firstName: "Ryan",
                    lastName: "Mitchell",
                    age: 48,
                    gender: "male",
                    setting: "emergency_department",
                    chiefComplaint: "Severe abdominal pain for 6 hours"
                },
                
                vitalSigns: {
                    BP: "102/68",
                    HR: 108,
                    RR: 22,
                    Temp: "100.4°F",
                    SpO2: "95%"
                },
                
                presentation: `"The pain started suddenly about 6 hours ago, right after I finished dinner at a steakhouse. I had a few beers with the meal. The pain is right here in my upper belly and it bores straight through to my back. It's constant and severe - 9 out of 10. I've vomited three times. Nothing makes it better - I tried lying flat but that made it worse. Leaning forward helps a little. I've had gallbladder 'attacks' before - similar but not this bad. I drink maybe 4-5 beers a day, more on weekends. No fever that I noticed. The pain is so bad I can't think straight."`,
                
                // Key history questions with pathophysiology links
                historyQuestions: [
                    {
                        id: "alcohol",
                        question: "Tell me about your alcohol use",
                        answer: "I drink 4-5 beers daily, more on weekends. Probably 30-40 drinks per week. I've been drinking like this for about 15 years.",
                        mechanismLink: {
                            title: "Why does alcohol cause pancreatitis?",
                            explanation: "Alcohol has direct toxic effects on acinar cells AND causes sphincter of Oddi spasm (blocking drainage). Metabolites like acetaldehyde are directly toxic. Chronic use sensitizes the pancreas - then an acute binge triggers the attack.",
                            diagram: "alcohol_pancreatitis_mechanism"
                        }
                    },
                    {
                        id: "gallstones",
                        question: "Tell me about your prior gallbladder attacks",
                        answer: "I've had maybe 3-4 episodes of right-sided belly pain after fatty meals over the past year. They usually lasted an hour or two then went away. My doctor mentioned gallstones on an ultrasound but said we could watch it.",
                        mechanismLink: {
                            title: "How do gallstones cause pancreatitis?",
                            explanation: "A gallstone passes from the gallbladder → cystic duct → common bile duct → impacts at ampulla of Vater. This blocks pancreatic drainage → increased ductal pressure → duct rupture or reflux of bile into pancreatic duct → triggers enzyme activation cascade.",
                            diagram: "gallstone_pancreatitis_mechanism"
                        }
                    },
                    {
                        id: "pain_position",
                        question: "You mentioned leaning forward helps?",
                        answer: "Yeah, if I sit up and lean forward over a pillow, it's maybe 7 out of 10 instead of 9. Lying flat is the worst.",
                        mechanismLink: {
                            title: "Why does position affect pain?",
                            explanation: "Leaning forward shifts the inflamed pancreas away from the posterior peritoneum and paravertebral structures. This is classic for retroperitoneal pathology and helps distinguish from other causes of abdominal pain."
                        }
                    }
                ],
                
                physicalExam: [
                    {
                        id: "abdomen",
                        category: "Abdominal",
                        finding: "Epigastric tenderness with guarding. Decreased bowel sounds. No rebound. No Grey-Turner or Cullen signs.",
                        mechanismLink: {
                            title: "What do these findings mean?",
                            explanation: "Epigastric tenderness localizes to the pancreas location. Guarding = peritoneal irritation from inflammation. Decreased bowel sounds = ileus from retroperitoneal inflammation. Grey-Turner (flank ecchymosis) and Cullen (periumbilical ecchymosis) indicate hemorrhagic pancreatitis - their absence is reassuring but doesn't rule out severe disease."
                        }
                    }
                ],
                
                // Workup with mechanism explanations
                workup: {
                    labs: [
                        {
                            id: "lipase",
                            name: "Lipase",
                            result: "1,842 U/L (normal < 60)",
                            interpretation: "Markedly elevated - diagnostic of acute pancreatitis",
                            mechanismExplanation: {
                                title: "Why is lipase elevated in pancreatitis?",
                                content: "Lipase is an enzyme produced exclusively by pancreatic acinar cells. When acinar cells are damaged by the inflammatory process, they release their contents into the bloodstream. Lipase rises within 4-8 hours and stays elevated for 8-14 days.",
                                whyThisTest: "Lipase is MORE SPECIFIC than amylase because it's only made by the pancreas. Amylase is also in salivary glands, so it can be elevated in mumps, parotitis, or even just vomiting. Lipase >3x upper limit of normal is one of the diagnostic criteria.",
                                diagram: "lipase_mechanism"
                            }
                        },
                        {
                            id: "alt",
                            name: "ALT",
                            result: "185 U/L (normal < 40)",
                            interpretation: "Elevated - suggests gallstone etiology",
                            mechanismExplanation: {
                                title: "Why does ALT suggest gallstones?",
                                content: "ALT >150 in acute pancreatitis has a positive predictive value >85% for gallstone etiology. The stone transiently obstructs the bile duct, causing hepatocyte injury and ALT release. Even if the stone passes, the ALT elevation persists for days.",
                                whyThisTest: "This helps determine etiology - gallstone pancreatitis requires cholecystectomy during the same admission to prevent recurrence (25% recurrence rate within weeks if not done)."
                            }
                        },
                        {
                            id: "bun",
                            name: "BUN",
                            result: "28 mg/dL (normal 7-20)",
                            interpretation: "Elevated - indicates hemoconcentration/dehydration",
                            mechanismExplanation: {
                                title: "Why is BUN elevated?",
                                content: "In pancreatitis, massive third-spacing occurs - fluid leaks from vessels into the retroperitoneum and peritoneal cavity. This causes intravascular depletion and hemoconcentration. BUN rises because less fluid reaches the kidneys and nitrogen waste concentrates.",
                                whyThisTest: "BUN is part of severity scoring (BISAP). BUN >25 indicates significant volume depletion and predicts worse outcomes. This is why aggressive fluid resuscitation is critical."
                            }
                        },
                        {
                            id: "calcium",
                            name: "Calcium",
                            result: "7.8 mg/dL (normal 8.5-10.5)",
                            interpretation: "LOW - sign of severe pancreatitis",
                            mechanismExplanation: {
                                title: "Why is calcium low in pancreatitis?",
                                content: "Saponification: Lipase breaks down peripancreatic fat → free fatty acids released → fatty acids bind calcium forming 'soap' (calcium salts) → serum calcium drops. Also, inflammation causes calcium to shift into tissues.",
                                whyThisTest: "Hypocalcemia is a marker of severity (Ranson criteria). Severe hypocalcemia (<7.0) can cause tetany, seizures, arrhythmias and requires replacement. Monitor closely."
                            }
                        }
                    ],
                    
                    imaging: [
                        {
                            id: "ruq_us",
                            name: "Right Upper Quadrant Ultrasound",
                            result: "Gallstones present. Common bile duct 8mm (upper limit of normal). No cholecystitis.",
                            mechanismExplanation: {
                                title: "Why ultrasound first?",
                                content: "Ultrasound is the first-line imaging to evaluate for gallstone etiology. It visualizes gallstones with 95% sensitivity and can measure CBD diameter (dilation suggests stone may still be obstructing).",
                                whyThisTest: "Identifying gallstones changes management - the patient needs cholecystectomy this admission. A dilated CBD (>6mm, or >8mm post-cholecystectomy) suggests choledocholithiasis requiring ERCP before surgery.",
                                limitation: "Ultrasound does NOT visualize the pancreas well due to overlying bowel gas. Don't use it to evaluate pancreatic inflammation - that's what CT is for."
                            }
                        },
                        {
                            id: "ct",
                            name: "CT Abdomen with Contrast",
                            result: "Diffuse pancreatic enlargement with peripancreatic fat stranding. No necrosis. No fluid collections. Peripancreatic inflammation extends into anterior pararenal space.",
                            mechanismExplanation: {
                                title: "What does CT show and why?",
                                content: "The CT findings directly reflect the pathophysiology: Pancreatic enlargement = edema from inflammation. Fat stranding = inflammatory exudate leaking into peripancreatic tissues. No necrosis = good prognostic sign (necrosis would appear as non-enhancing areas).",
                                whyThisTest: "CT is not needed for diagnosis (clinical + lipase is sufficient) but is valuable for: 1) Assessing severity, 2) Identifying necrosis, 3) Looking for complications. Best done 72+ hours after onset when necrosis becomes visible.",
                                timingNote: "Early CT may underestimate severity. Necrosis takes 48-72 hours to demarcate. Consider repeat CT if clinical deterioration."
                            }
                        }
                    ]
                },
                
                // Treatment decisions with mechanism explanations
                treatments: [
                    {
                        id: "ivf",
                        name: "Aggressive IV Fluid Resuscitation",
                        order: "Lactated Ringer's 250-500 mL/hr for first 12-24 hours",
                        mechanismExplanation: {
                            title: "Why aggressive fluids?",
                            rationale: "Pancreatitis causes massive third-spacing - liters of fluid sequester in the retroperitoneum. This depletes intravascular volume, reduces pancreatic perfusion, and promotes necrosis. Aggressive early resuscitation (within first 12-24 hours) improves outcomes.",
                            howItWorks: "Fluids restore intravascular volume → maintain pancreatic perfusion → prevent ischemic necrosis. Target urine output 0.5-1.0 mL/kg/hr, heart rate <120, BUN trending down.",
                            whyLR: "Lactated Ringer's is preferred over normal saline. LR is more physiologic and reduces systemic inflammatory response. NS can cause hyperchloremic acidosis.",
                            caution: "Monitor for fluid overload (pulmonary edema, especially in older patients or those with heart disease). Reassess frequently."
                        }
                    },
                    {
                        id: "npo",
                        name: "NPO (Nothing by Mouth)",
                        order: "NPO initially, advance diet as tolerated",
                        mechanismExplanation: {
                            title: "Why NPO?",
                            rationale: "Traditional teaching: 'rest the pancreas' by avoiding oral intake. Food stimulates CCK and secretin release → pancreatic enzyme secretion → potentially worsens inflammation.",
                            modernEvidence: "Actually, recent evidence shows EARLY feeding (within 24-48 hours) is safe and may improve outcomes. The pancreas is already maximally stimulated during acute pancreatitis. Start low-fat solid diet when pain improving and patient hungry.",
                            keyPoint: "Don't keep patients NPO for days 'waiting for lipase to normalize.' If they're hungry, pain is improving, and no obstruction - feed them!"
                        }
                    },
                    {
                        id: "pain",
                        name: "Pain Control",
                        order: "Hydromorphone 0.5-1mg IV q3h PRN, consider PCA",
                        mechanismExplanation: {
                            title: "Why opioids?",
                            rationale: "Pancreatitis is extremely painful. Adequate analgesia is humane and reduces stress response. Opioids work by binding mu-receptors in CNS, reducing pain transmission.",
                            oldMyth: "Old teaching said 'avoid morphine because it causes sphincter of Oddi spasm.' This is not clinically significant. Use whatever opioid works. Untreated severe pain is worse than theoretical sphincter effects.",
                            goal: "Make the patient comfortable. Pain score <4 is reasonable target. PCA gives patient control and often achieves better pain relief."
                        }
                    },
                    {
                        id: "no_antibiotics",
                        name: "No Prophylactic Antibiotics",
                        order: "Antibiotics NOT indicated at this time",
                        mechanismExplanation: {
                            title: "Why no antibiotics?",
                            rationale: "Acute pancreatitis is initially a STERILE inflammatory process - there's no infection. Multiple RCTs show prophylactic antibiotics do NOT reduce mortality, infected necrosis, or need for surgery.",
                            whenToUse: "Antibiotics ARE indicated for: 1) Infected pancreatic necrosis (usually week 2-3, suspect if fever recurs or clinical deterioration), 2) Concurrent cholangitis, 3) Other documented infection.",
                            harm: "Unnecessary antibiotics promote resistance, cause C. diff, and don't help. Use them when there's a specific indication, not prophylactically."
                        }
                    }
                ],
                
                // Reasoning prompts - student must explain
                reasoningPrompts: [
                    {
                        id: "rp1",
                        timing: "after-labs",
                        question: "Explain why lipase is elevated in this patient. Connect the cellular pathophysiology to the lab finding.",
                        sampleAnswer: "In pancreatitis, the normal protective mechanisms fail and trypsinogen is activated to trypsin inside the pancreas. This triggers a cascade of enzyme activation, causing acinar cell damage and necrosis. Lipase, normally contained within acinar cells, is released into the bloodstream as the cells are destroyed. The marked elevation (>3x normal) reflects significant pancreatic cellular injury.",
                        keyConceptsToCheck: ["acinar cell damage", "enzyme release", "cellular injury"]
                    },
                    {
                        id: "rp2",
                        timing: "after-treatment-decision",
                        question: "Why are we giving aggressive IV fluids? Explain the pathophysiology that makes this necessary.",
                        sampleAnswer: "Pancreatitis causes massive third-spacing - inflammatory exudate and fluid leak out of blood vessels into the retroperitoneal space due to increased vascular permeability. This depletes intravascular volume, leading to hypotension, hemoconcentration (elevated BUN), and reduced blood flow to the pancreas itself. Poor pancreatic perfusion can lead to ischemic necrosis. Aggressive fluid resuscitation restores intravascular volume, maintains organ perfusion, and helps prevent the conversion from edematous to necrotizing pancreatitis.",
                        keyConceptsToCheck: ["third-spacing", "intravascular depletion", "pancreatic perfusion", "prevent necrosis"]
                    }
                ],
                
                dayConclusion: {
                    summary: "Patient admitted to hospital with acute gallstone pancreatitis (elevated ALT suggests biliary etiology despite significant alcohol use). Started on aggressive IV fluids, pain control, and NPO with plan for early feeding advancement. Surgery consulted for cholecystectomy during this admission.",
                    clinicalPearl: "When both gallstones AND alcohol are present, treat as gallstone pancreatitis - the patient still needs cholecystectomy to prevent recurrence."
                }
            },
            
            // ==================== DAY 1 ADMISSION DECISION ====================
            // (This gets added to day1 content - admission criteria discussion)
            admissionCriteria: {
                title: "Admission Decision",
                question: "This patient meets criteria for inpatient admission. Which factors support this decision?",
                factors: [
                    { text: "Unable to maintain oral hydration", applies: true, explanation: "Patient is vomiting and NPO - cannot self-hydrate" },
                    { text: "Severe pain requiring IV analgesia", applies: true, explanation: "Pain 9/10 requiring IV opioids" },
                    { text: "Signs of systemic illness (tachycardia, fever)", applies: true, explanation: "HR 108, Temp 100.4°F indicate systemic response" },
                    { text: "Comorbidities requiring close monitoring", applies: false, explanation: "No significant comorbidities mentioned, but still warrants admission" },
                    { text: "Concern for complications (necrosis, organ failure)", applies: true, explanation: "Elevated BUN, hypocalcemia suggest more severe disease" }
                ],
                severityScoring: {
                    bisap: {
                        name: "BISAP Score",
                        description: "Bedside Index for Severity in Acute Pancreatitis - predicts mortality",
                        criteria: [
                            { criterion: "BUN > 25 mg/dL", present: true, points: 1 },
                            { criterion: "Impaired mental status", present: false, points: 0 },
                            { criterion: "SIRS (≥2 criteria)", present: true, points: 1 },
                            { criterion: "Age > 60 years", present: false, points: 0 },
                            { criterion: "Pleural effusion", present: false, points: 0 }
                        ],
                        totalScore: 2,
                        interpretation: "BISAP 2: ~2% mortality risk. Score ≥3 indicates severe disease with higher mortality."
                    },
                    teachingPoint: "BISAP is calculated at admission using readily available data. It helps identify patients who need ICU-level care. This patient's score of 2 suggests moderate severity - warrants close monitoring but not necessarily ICU."
                }
            },
            
            // ==================== DAY 3: NEW SYMPTOMS & WORKUP ====================
            day3: {
                title: "Hospital Day 3 - New Respiratory Symptoms",
                
                updatedVitals: {
                    BP: "118/72",
                    HR: 88,
                    RR: 22,
                    Temp: "99.2°F",
                    SpO2: "93% on RA → 96% on 3L NC"
                },
                
                clinicalProgress: {
                    improving: [
                        "Pain improved from 9/10 to 4/10",
                        "Tolerating clear liquids without nausea",
                        "BUN trending down (28→22→18 mg/dL)",
                        "Heart rate normalized"
                    ],
                    concerning: [
                        "New dyspnea this morning",
                        "Required supplemental oxygen",
                        "WBC increased from 12.1 to 14.2",
                        "New dullness to percussion at left lung base"
                    ]
                },
                
                physicalExam: {
                    general: "Alert, appears more comfortable than admission but with mild respiratory distress",
                    lungs: "Decreased breath sounds bilateral bases, worse on left. Dullness to percussion left base. No wheezes.",
                    abdomen: "Soft, mild epigastric tenderness (improved), hypoactive bowel sounds",
                    extremities: "No edema, warm and well-perfused"
                },
                
                clinicalQuestion: {
                    question: "What is the most likely cause of this patient's new respiratory symptoms?",
                    options: [
                        {
                            text: "Pleural effusion from pancreatitis",
                            correct: true,
                            explanation: "Reactive pleural effusions occur in 10-20% of acute pancreatitis cases. The left side is more commonly affected due to proximity of the pancreatic tail. Mechanism: direct diaphragmatic inflammation, enzyme-rich fluid tracking through lymphatics, and systemic capillary leak."
                        },
                        {
                            text: "Hospital-acquired pneumonia",
                            correct: false,
                            explanation: "Less likely at day 3 in a non-ventilated patient. The exam shows dullness (effusion) rather than consolidation with bronchial breath sounds. No productive cough or high fever."
                        },
                        {
                            text: "Pulmonary embolism",
                            correct: false,
                            explanation: "Should always be considered in hospitalized patients, but the bilateral dullness to percussion and clinical context favor effusion. If effusion doesn't explain symptoms, PE should be evaluated."
                        },
                        {
                            text: "Acute respiratory distress syndrome (ARDS)",
                            correct: false,
                            explanation: "ARDS is a serious complication of severe pancreatitis but presents with bilateral infiltrates, severe hypoxemia (P/F ratio <300), and typically in more critically ill patients. This presentation is milder."
                        }
                    ]
                },
                
                // SBAR Call to Attending
                sbarCall: {
                    context: "The resident asks you to call the attending to discuss the new respiratory findings and your recommended workup plan.",
                    attending: "Dr. Martinez",
                    
                    imagingOptions: [
                        {
                            id: "ct_ap",
                            name: "CT Abdomen/Pelvis with IV contrast",
                            appropriate: true,
                            isPrimary: true,
                            rationale: "Best choice. Day 3 is optimal timing - necrosis takes 48-72h to demarcate. Will evaluate pancreatic necrosis, peripancreatic collections, AND visualize pleural effusions on lower cuts.",
                            feedback: "Excellent choice. CT with contrast at 72+ hours is the gold standard for evaluating pancreatic necrosis. The study will also show the pleural effusions."
                        },
                        {
                            id: "cxr",
                            name: "Chest X-ray",
                            appropriate: false,
                            rationale: "Will confirm effusions but won't evaluate the pancreas",
                            feedback: "CXR would show the effusions, but we need to evaluate the pancreas for necrosis. This doesn't address the primary concern."
                        },
                        {
                            id: "ct_chest",
                            name: "CT Chest without contrast",
                            appropriate: false,
                            rationale: "Evaluates lungs but misses the pancreas entirely",
                            feedback: "This would characterize the lung findings but completely misses the pancreas. We need abdominal imaging."
                        },
                        {
                            id: "ct_cap",
                            name: "CT Chest/Abdomen/Pelvis with contrast",
                            appropriate: true,
                            isPrimary: false,
                            rationale: "More comprehensive but possibly more than needed - CT A/P usually captures lower lungs",
                            feedback: "Acceptable choice - comprehensive imaging. Some would argue CT A/P alone is sufficient since it captures the lung bases, but this isn't wrong."
                        },
                        {
                            id: "us",
                            name: "Right upper quadrant ultrasound",
                            appropriate: false,
                            rationale: "Good for gallstones/biliary dilation but poor for pancreatic parenchyma",
                            feedback: "We already know there are gallstones. Ultrasound cannot adequately evaluate pancreatic necrosis due to overlying bowel gas."
                        },
                        {
                            id: "mri",
                            name: "MRCP",
                            appropriate: false,
                            rationale: "Better for ductal anatomy, not acute necrosis assessment",
                            feedback: "MRCP is excellent for biliary/pancreatic duct evaluation but is not the first choice for assessing necrosis in acute pancreatitis. CT is preferred."
                        }
                    ],
                    
                    idealSBAR: {
                        situation: "Hi Dr. Martinez, this is [name] calling about Mr. R.M. in room 412. He's the 48-year-old with acute gallstone pancreatitis admitted 3 days ago. He's developed new respiratory symptoms this morning that I wanted to discuss with you.",
                        background: "He presented with severe epigastric pain, lipase over 1800, and initial CT showing edematous pancreatitis without necrosis. He's been on aggressive LR resuscitation, IV hydromorphone, and was just started on clear liquids yesterday which he's tolerating. His pain has improved significantly. He does have a heavy alcohol history but ALT elevation pointed to gallstones as the trigger.",
                        assessment: "This morning he developed dyspnea requiring 3 liters nasal cannula to maintain sats above 92. Exam shows decreased breath sounds and dullness at bilateral bases, left worse than right. His WBC bumped from 12 to 14. I'm thinking reactive pleural effusions from his pancreatitis, but I'm also mindful that we're now at the 72-hour window where we could see necrosis develop.",
                        recommendation: "I'd like to get a CT abdomen and pelvis with contrast to evaluate for necrosis and characterize the effusions. If the CT shows uncomplicated disease, we can manage the effusions supportively. Does that sound reasonable to you?"
                    },
                    
                    attendingResponses: {
                        excellent: "That's a very thorough presentation and I agree with your reasoning. Yes, let's get the CT with contrast - you're right that day 3 is the perfect time to look for necrosis. Make sure the patient is well-hydrated before contrast. Call me with the results and we'll make a plan from there. Good work.",
                        good: "Thanks for the update. Yes, CT is the right call. Make sure it's with IV contrast so we can assess enhancement. Any signs of sepsis - high fevers, hemodynamic instability?",
                        needsWork: "I need a bit more information. What was his initial CT showing exactly? And what's his urine output been like? Let's make sure we have the full picture. But yes, imaging is reasonable at this point."
                    }
                },
                
                // Results section (shown after SBAR)
                imagingResults: {
                    title: "CT Abdomen/Pelvis with IV Contrast - Results",
                    findings: [
                        "Pancreas: Diffusely edematous with homogeneous enhancement. No focal areas of non-enhancement to suggest necrosis.",
                        "Peripancreatic changes: Moderate peripancreatic fat stranding and fluid tracking along the left paracolic gutter.",
                        "Collections: Small peripancreatic fluid collection anterior to pancreatic body, ~3cm, no rim enhancement.",
                        "Pleural: Moderate left pleural effusion, small right pleural effusion.",
                        "Other: Cholelithiasis. No biliary ductal dilation. No free air."
                    ],
                    interpretation: "Acute interstitial (edematous) pancreatitis without necrosis. Reactive pleural effusions. No infected collections.",
                    clinicalSignificance: {
                        good_news: [
                            "NO NECROSIS - pancreas enhances normally (this is the key finding)",
                            "No infected collections (would see gas bubbles or rim enhancement)",
                            "No biliary obstruction"
                        ],
                        monitoring: [
                            "Peripancreatic fluid collection - may evolve into pseudocyst if persists >4 weeks",
                            "Pleural effusions - usually resolve with treatment of underlying pancreatitis"
                        ]
                    }
                },
                
                managementDiscussion: {
                    title: "Management Based on CT Results",
                    keyPoint: "With NO necrosis, this is classified as mild-moderate acute pancreatitis with excellent prognosis (mortality <1-3%)",
                    plan: [
                        {
                            item: "Continue supportive care",
                            rationale: "Aggressive hydration (goal UOP 0.5-1 mL/kg/hr), pain control, nutrition"
                        },
                        {
                            item: "Advance diet",
                            rationale: "Since tolerating clears, advance to low-fat solid diet. Evidence shows early feeding is safe and may reduce complications."
                        },
                        {
                            item: "Pleural effusions - supportive management",
                            rationale: "Small-moderate effusions typically resolve as pancreatitis improves. Thoracentesis only if large, symptomatic, or concern for infection."
                        },
                        {
                            item: "Plan cholecystectomy this admission",
                            rationale: "For gallstone pancreatitis, same-admission cholecystectomy prevents recurrence (25-30% recur within 6 weeks if delayed)"
                        },
                        {
                            item: "Repeat imaging only if clinical deterioration",
                            rationale: "No routine follow-up CT needed if improving. Re-image if new fever, worsening pain, or clinical decline."
                        }
                    ]
                },
                
                dayConclusion: {
                    summary: "CT confirms interstitial pancreatitis without necrosis - excellent prognostic sign. Pleural effusions are reactive and should improve with treatment. Plan to advance diet and schedule cholecystectomy once acute inflammation resolves.",
                    teachingPoint: "The presence or absence of necrosis is THE key prognostic factor in acute pancreatitis. Interstitial pancreatitis has <3% mortality; necrotizing pancreatitis has 15-30% mortality. CT at 72+ hours is the gold standard for this assessment."
                }
            },
            
            // ==================== DAY 5: PRE-OPERATIVE PLANNING ====================
            day5: {
                title: "Hospital Day 5 - Surgical Planning",
                
                updatedVitals: {
                    BP: "124/78",
                    HR: 76,
                    RR: 16,
                    Temp: "98.6°F",
                    SpO2: "97% on room air"
                },
                
                clinicalProgress: {
                    status: "Significantly improved",
                    details: [
                        "Pain now 2/10, controlled with oral acetaminophen and occasional tramadol",
                        "Tolerating low-fat solid diet without nausea or pain exacerbation",
                        "Off supplemental oxygen since yesterday",
                        "Ambulating in halls independently",
                        "Having bowel movements"
                    ],
                    labs: {
                        WBC: "9.8 (normalized)",
                        lipase: "245 (down from 1842, still elevated but trending down)",
                        BUN: "14 (normalized)",
                        calcium: "8.6 (normalized)",
                        LFTs: "ALT 52 (improved from 185)"
                    }
                },
                
                surgicalConsultation: {
                    title: "Surgery Team Evaluation",
                    assessment: "Patient recovering well from acute gallstone pancreatitis. Now meets criteria for cholecystectomy.",
                    
                    criteriaForSurgery: {
                        title: "Is this patient ready for cholecystectomy?",
                        criteria: [
                            { criterion: "Pain controlled on oral medications", met: true, explanation: "Only using acetaminophen and occasional tramadol" },
                            { criterion: "Tolerating regular diet", met: true, explanation: "Eating low-fat solids without difficulty" },
                            { criterion: "Inflammatory markers improving", met: true, explanation: "WBC normalized, lipase trending down" },
                            { criterion: "No evidence of ongoing necrosis or infected collections", met: true, explanation: "CT showed no necrosis, no interval worsening" },
                            { criterion: "Medically stable for general anesthesia", met: true, explanation: "Vitals normal, off oxygen, ambulatory" }
                        ],
                        conclusion: "Patient meets criteria for laparoscopic cholecystectomy. Recommend surgery tomorrow (Day 6)."
                    },
                    
                    timingDiscussion: {
                        question: "Why perform cholecystectomy during THIS admission rather than waiting 6-8 weeks?",
                        answer: "Landmark studies (PONCHO trial, Cochrane reviews) show same-admission cholecystectomy is SAFER than delayed surgery:",
                        evidence: [
                            "25-30% recurrence rate of biliary events within 6 weeks if cholecystectomy delayed",
                            "Recurrent attacks can be more severe than index episode",
                            "Same-admission surgery does NOT increase complication rates when inflammation has resolved",
                            "Reduces total hospital days and healthcare costs",
                            "Patient avoids living with 'ticking time bomb' of retained gallstones"
                        ],
                        caveat: "Surgery IS delayed for: ongoing severe inflammation, necrotizing pancreatitis, infected collections, or unstable patient."
                    },
                    
                    proceduralPlanning: {
                        procedure: "Laparoscopic cholecystectomy",
                        approach: "Standard 4-port technique",
                        considerations: [
                            "Recent inflammation may cause adhesions - anticipate potentially difficult dissection",
                            "Will obtain intraoperative cholangiogram to rule out retained CBD stones",
                            "Low threshold to convert to open if severe inflammation encountered",
                            "NPO after midnight, surgery scheduled for 7:30 AM"
                        ]
                    }
                },
                
                preOpEducation: {
                    title: "Pre-Operative Patient Education",
                    discussion: [
                        {
                            topic: "Why surgery now?",
                            explanation: "Your gallstones caused this episode of pancreatitis. If we don't remove the gallbladder, there's a 1 in 4 chance you'll have another attack within the next few weeks - and it could be worse."
                        },
                        {
                            topic: "What to expect",
                            explanation: "Laparoscopic surgery - 4 small incisions. Usually takes about an hour. Most patients go home the next day. You'll have some shoulder pain from the gas we use - this is normal and temporary."
                        },
                        {
                            topic: "Risks",
                            explanation: "Bile duct injury (<0.5%), bleeding, infection, need to convert to open surgery (5-10% in post-pancreatitis setting). Overall very safe procedure."
                        },
                        {
                            topic: "Recovery",
                            explanation: "Diet: Can eat normally after surgery - no gallbladder needed for digestion. Activity: Walking same day, no heavy lifting for 2 weeks. Most people return to work in 1-2 weeks."
                        }
                    ]
                },
                
                alcoholCounseling: {
                    title: "Addressing Alcohol Use",
                    context: "While gallstones triggered this episode, patient has significant alcohol history (30-40 drinks/week).",
                    discussion: {
                        opening: "Mr. M, removing your gallbladder will prevent another gallstone attack. But I want to talk about your alcohol use too, because it affects your pancreas independently.",
                        keyPoints: [
                            "Alcohol is directly toxic to the pancreas - causes damage separate from gallstones",
                            "With your drinking history, your pancreas is 'sensitized' - more vulnerable to injury",
                            "Even after cholecystectomy, continued heavy drinking puts you at risk for chronic pancreatitis",
                            "Chronic pancreatitis means permanent damage, chronic pain, diabetes, and malnutrition"
                        ],
                        recommendation: "I strongly recommend cutting back significantly or stopping alcohol completely. This hospitalization is a wake-up call. Would you be open to talking with our alcohol counselor before discharge?",
                        resources: "Social work consulted for alcohol cessation resources, outpatient program referrals"
                    }
                },
                
                dayConclusion: {
                    summary: "Patient clinically improved and meets criteria for same-admission cholecystectomy scheduled for tomorrow. Pre-operative workup complete. Alcohol counseling initiated.",
                    teachingPoint: "Same-admission cholecystectomy for gallstone pancreatitis is the standard of care once acute inflammation resolves. Waiting increases recurrence risk without improving surgical outcomes."
                }
            },
            
            // ==================== DAY 7: POST-OPERATIVE MANAGEMENT ====================
            day7: {
                title: "Hospital Day 7 (Post-Op Day 1) - Post-Operative Care",
                
                surgeryNote: {
                    title: "Operative Summary (Day 6)",
                    procedure: "Laparoscopic cholecystectomy with intraoperative cholangiogram",
                    findings: [
                        "Moderate adhesions around gallbladder from recent inflammation - lysed without difficulty",
                        "Gallbladder with multiple faceted stones, thickened wall",
                        "Critical view of safety obtained",
                        "Intraoperative cholangiogram: No CBD stones, contrast flows freely into duodenum",
                        "No bile leak from liver bed"
                    ],
                    duration: "72 minutes (slightly longer than average due to adhesions)",
                    EBL: "25 mL",
                    complications: "None"
                },
                
                postOpDay1: {
                    vitals: {
                        BP: "128/76",
                        HR: 82,
                        RR: 14,
                        Temp: "99.1°F",
                        SpO2: "98% on room air"
                    },
                    
                    assessment: {
                        pain: "Incisional pain 4/10, well-controlled with scheduled acetaminophen and PRN oxycodone (used twice overnight)",
                        diet: "Started clear liquids this morning, tolerating well",
                        activity: "Ambulated twice with nursing, steady gait",
                        surgical_sites: "4 laparoscopic port sites clean, dry, intact. No erythema or drainage.",
                        abdomen: "Soft, appropriately tender at port sites, no distension, positive bowel sounds",
                        drains: "None placed"
                    },
                    
                    labsPostOp: {
                        ordered: false,
                        rationale: "Routine post-op labs not indicated for uncomplicated laparoscopic cholecystectomy in stable patient. Would check if fever, unexpected pain, or clinical concern."
                    }
                },
                
                postOpComplications: {
                    title: "Post-Cholecystectomy Complications to Monitor",
                    watchFor: [
                        {
                            complication: "Bile leak",
                            presentation: "Increasing abdominal pain, fever, bilious drainage from incisions",
                            timing: "Usually POD 2-5",
                            management: "HIDA scan or CT, may need ERCP with stent or percutaneous drain"
                        },
                        {
                            complication: "Retained CBD stone",
                            presentation: "Jaundice, RUQ pain, elevated bilirubin/LFTs",
                            timing: "Days to weeks post-op",
                            management: "MRCP or ERCP for diagnosis and stone removal"
                        },
                        {
                            complication: "Surgical site infection",
                            presentation: "Erythema, warmth, purulent drainage from port sites",
                            timing: "POD 3-7",
                            management: "Usually local wound care, antibiotics if cellulitis"
                        },
                        {
                            complication: "Post-cholecystectomy syndrome",
                            presentation: "Persistent RUQ pain, dyspepsia despite gallbladder removal",
                            timing: "Weeks to months",
                            management: "Evaluate for sphincter of Oddi dysfunction, retained stones, other causes"
                        }
                    ],
                    reassurance: "This patient is doing well with no concerning signs. Low-grade temp (99.1°F) POD1 is common and usually not concerning - often related to atelectasis."
                },
                
                dischargeReadiness: {
                    title: "Assessing Discharge Readiness",
                    criteria: [
                        { criterion: "Pain controlled on oral medications", met: true, status: "Using minimal oxycodone, mostly acetaminophen" },
                        { criterion: "Tolerating oral intake", met: "partial", status: "Tolerating clears, will advance to regular diet" },
                        { criterion: "Afebrile or low-grade temp only", met: true, status: "99.1°F, no signs of infection" },
                        { criterion: "Ambulating independently", met: true, status: "Walking halls without assistance" },
                        { criterion: "Adequate support at home", met: true, status: "Lives with wife who can assist" },
                        { criterion: "Understands discharge instructions", met: "pending", status: "Education to be completed today" }
                    ],
                    plan: "Advance diet to regular. If tolerating and meeting all criteria, plan discharge tomorrow (POD2/Hospital Day 8)."
                },
                
                dayConclusion: {
                    summary: "POD1 from uncomplicated laparoscopic cholecystectomy. Patient recovering well, no surgical complications. Planning discharge tomorrow if continues to progress.",
                    teachingPoint: "Most lap chole patients are discharged POD0-1. Our patient stayed slightly longer due to recovering from pancreatitis first. The IOC confirmed no retained CBD stones - this was important given his biliary pancreatitis."
                }
            },
            
            // ==================== DAY 8: DISCHARGE ====================
            day8: {
                title: "Hospital Day 8 (Post-Op Day 2) - Discharge Day",
                
                morningAssessment: {
                    vitals: {
                        BP: "122/74",
                        HR: 78,
                        RR: 14,
                        Temp: "98.4°F",
                        SpO2: "99% on room air"
                    },
                    status: "Feeling well, ate full breakfast without difficulty, pain minimal",
                    exam: "Port sites healing well, abdomen soft, non-tender, active bowel sounds"
                },
                
                dischargeChecklist: {
                    title: "Discharge Criteria - Final Check",
                    allMet: true,
                    criteria: [
                        { item: "Pain controlled on PO meds", met: true, notes: "Didn't need any oxycodone since yesterday afternoon" },
                        { item: "Tolerating regular diet", met: true, notes: "Ate eggs, toast, and coffee for breakfast" },
                        { item: "Afebrile x 24 hours", met: true, notes: "Tmax 98.4°F" },
                        { item: "Passing flatus/BM", met: true, notes: "Had bowel movement this morning" },
                        { item: "Ambulating independently", met: true, notes: "Walking halls, using stairs" },
                        { item: "Surgical sites without concern", met: true, notes: "No erythema, drainage, or dehiscence" },
                        { item: "Home support confirmed", met: true, notes: "Wife will be present, can drive him to follow-up" },
                        { item: "Follow-up scheduled", met: true, notes: "Surgery clinic 2 weeks, PCP 4 weeks" },
                        { item: "Prescriptions sent", met: true, notes: "Acetaminophen, 5 oxycodone tabs PRN, omeprazole" },
                        { item: "Discharge education completed", met: true, notes: "See below" }
                    ]
                },
                
                dischargeEducation: {
                    title: "Discharge Instructions",
                    sections: [
                        {
                            topic: "Activity",
                            instructions: [
                                "No heavy lifting (>10 lbs) for 2 weeks",
                                "Walking is encouraged - helps prevent blood clots",
                                "May shower tomorrow - pat incisions dry",
                                "No baths, swimming, or submerging incisions for 2 weeks",
                                "May climb stairs carefully",
                                "No driving while taking oxycodone"
                            ]
                        },
                        {
                            topic: "Diet",
                            instructions: [
                                "Resume regular diet - no dietary restrictions after cholecystectomy",
                                "Some patients have loose stools or fat intolerance initially - this usually resolves",
                                "Stay well hydrated",
                                "AVOID ALCOHOL - critical for your pancreas health"
                            ],
                            emphasize: "Given your history of heavy alcohol use and this episode of pancreatitis, abstaining from alcohol is the single most important thing you can do to prevent future problems."
                        },
                        {
                            topic: "Medications",
                            instructions: [
                                "Acetaminophen 1000mg every 6 hours as needed for pain (preferred)",
                                "Oxycodone 5mg every 4-6 hours as needed for severe pain only (5 tablets provided)",
                                "Omeprazole 20mg daily for 2 weeks (stomach protection)",
                                "Resume home medications"
                            ]
                        },
                        {
                            topic: "Wound Care",
                            instructions: [
                                "Steri-strips will fall off on their own in 7-10 days",
                                "Keep incisions clean and dry",
                                "Small amount of bruising is normal",
                                "No creams or ointments on incisions"
                            ]
                        },
                        {
                            topic: "Warning Signs - Return to ED if:",
                            instructions: [
                                "Fever > 101.5°F",
                                "Severe abdominal pain not controlled by medications",
                                "Persistent nausea/vomiting",
                                "Jaundice (yellow skin or eyes)",
                                "Redness, swelling, or drainage from incisions",
                                "Inability to eat or drink"
                            ]
                        }
                    ]
                },
                
                followUpPlan: {
                    appointments: [
                        {
                            type: "Surgery clinic",
                            timing: "2 weeks",
                            purpose: "Wound check, post-op assessment, path results from gallbladder"
                        },
                        {
                            type: "Primary care",
                            timing: "4 weeks", 
                            purpose: "Overall health, reinforce alcohol cessation, address any ongoing issues"
                        },
                        {
                            type: "Alcohol counseling (scheduled)",
                            timing: "1 week",
                            purpose: "Initial visit with outpatient counselor, discuss treatment options"
                        }
                    ],
                    labsNeeded: "None routine. Check LFTs at PCP visit if any concerns."
                },
                
                patientQuestions: {
                    title: "Common Patient Questions at Discharge",
                    qa: [
                        {
                            q: "Can I drink alcohol now that my gallbladder is out?",
                            a: "Your gallbladder being removed doesn't change the risk to your pancreas. Alcohol directly damages the pancreas. Given this episode and your history, I strongly recommend no alcohol. This is about protecting your pancreas from permanent damage."
                        },
                        {
                            q: "Will I have digestive problems without my gallbladder?",
                            a: "Most people do fine. The gallbladder stores bile, but bile is still made by your liver and flows into your intestine. Some people have looser stools initially, especially with fatty foods, but this usually improves over weeks to months."
                        },
                        {
                            q: "Why did I get pancreatitis in the first place?",
                            a: "A gallstone temporarily blocked the shared drainage of your bile duct and pancreas. This caused backup of pancreatic enzymes which started digesting the pancreas itself. Now that the gallbladder is out, that can't happen again."
                        },
                        {
                            q: "Could this happen again?",
                            a: "Gallstone pancreatitis - no, the source is removed. But if you continue drinking heavily, you're at risk for alcoholic pancreatitis, which can cause chronic, permanent damage. That's why alcohol cessation is so important."
                        }
                    ]
                },
                
                dayConclusion: {
                    summary: "Patient discharged home POD2 in good condition. Total hospital stay: 8 days. Cholecystectomy completed successfully, pancreatitis resolved. Key follow-up: alcohol cessation, surgery and PCP appointments.",
                    teachingPoint: "This case demonstrates the complete inpatient journey for gallstone pancreatitis: diagnosis, supportive care, timing of cholecystectomy, and comprehensive discharge planning. The alcohol counseling piece is often overlooked but critical for long-term outcomes."
                }
            },
            
            // ==================== DAY 30: FOLLOW-UP ====================
            day30: {
                title: "4-Week Follow-Up Visit",
                
                setting: "Outpatient Primary Care Clinic",
                
                patientUpdate: {
                    subjective: "Patient reports feeling well. Returned to work as an accountant 2 weeks ago. Incisions healed completely. No abdominal pain. Eating regular diet. Reports he has attended 3 AA meetings and has not had any alcohol since hospitalization.",
                    positives: [
                        "No recurrent abdominal pain",
                        "Tolerating regular diet including some fatty foods",
                        "Energy back to baseline",
                        "Engaging with alcohol cessation program"
                    ],
                    concerns: [
                        "Occasional loose stools after very fatty meals",
                        "Some mild anxiety about health after hospitalization"
                    ]
                },
                
                examination: {
                    vitals: {
                        BP: "128/82",
                        HR: 72,
                        Weight: "198 lbs (was 203 lbs at admission)"
                    },
                    exam: {
                        general: "Well-appearing, good spirits",
                        abdomen: "Soft, non-tender, well-healed laparoscopic scars",
                        other: "No jaundice, no peripheral edema"
                    }
                },
                
                labResults: {
                    title: "Labs (drawn 1 week ago)",
                    results: [
                        { test: "Lipase", value: "45 U/L", normal: "< 60", interpretation: "Normalized" },
                        { test: "ALT", value: "32 U/L", normal: "< 40", interpretation: "Normalized" },
                        { test: "AST", value: "28 U/L", normal: "< 40", interpretation: "Normalized" },
                        { test: "Total Bilirubin", value: "0.8 mg/dL", normal: "< 1.2", interpretation: "Normal" },
                        { test: "Fasting Glucose", value: "118 mg/dL", normal: "< 100", interpretation: "Impaired fasting glucose" },
                        { test: "GGT", value: "42 U/L", normal: "< 60", interpretation: "Normal (good sign with alcohol cessation)" }
                    ]
                },
                
                glucoseDiscussion: {
                    title: "Addressing the Elevated Fasting Glucose",
                    finding: "Fasting glucose 118 mg/dL indicates prediabetes (100-125 mg/dL range)",
                    possibleCauses: [
                        "Pre-existing prediabetes (undiagnosed before hospitalization)",
                        "Stress hyperglycemia during acute illness (may persist)",
                        "Early pancreatic endocrine dysfunction from pancreatitis",
                        "Related to obesity/metabolic syndrome (BMI ~29)"
                    ],
                    plan: [
                        "Repeat fasting glucose in 3 months",
                        "Check HbA1c today to assess 3-month average",
                        "Lifestyle counseling: weight loss, exercise, low-sugar diet",
                        "If HbA1c >5.7%, formal diabetes prevention program"
                    ],
                    teachingPoint: "Acute pancreatitis can damage islet cells (endocrine pancreas). Even one episode of pancreatitis increases lifetime diabetes risk. Patients should be monitored for glucose abnormalities."
                },
                
                alcoholCessation: {
                    title: "Alcohol Cessation Progress",
                    status: "Engaged and motivated",
                    details: [
                        "Attending AA meetings (3 so far)",
                        "Meeting with alcohol counselor weekly",
                        "Wife is supportive, no alcohol in the home",
                        "Has not had a drink since hospitalization (30 days)",
                        "Reports occasional cravings but managing with support system"
                    ],
                    reinforcement: "This is excellent progress. The first month is often the hardest. Your pancreas will thank you. Keep going with AA and your counselor. Every day of sobriety is a victory for your health.",
                    concerningPatterns: "Watch for: returning to social situations with alcohol, stress triggers, minimizing the health consequences. Have low threshold to intensify treatment if needed."
                },
                
                surgeryFollowUp: {
                    title: "Post-Cholecystectomy Status",
                    status: "Uncomplicated recovery",
                    pathology: "Chronic cholecystitis with cholelithiasis. No dysplasia or malignancy.",
                    postCholecystectomyDiarrhea: {
                        present: true,
                        severity: "Mild",
                        management: [
                            "This is common - bile flows continuously instead of being released in response to fatty meals",
                            "Usually improves over 3-6 months as body adapts",
                            "Can try reducing very high-fat meals",
                            "If bothersome, can trial bile acid binder (cholestyramine) - not needed currently"
                        ]
                    }
                },
                
                longTermPlan: {
                    title: "Ongoing Care Plan",
                    items: [
                        {
                            issue: "Alcohol use disorder",
                            plan: "Continue AA, weekly counseling, reassess at every visit. Consider pharmacotherapy (naltrexone) if struggling."
                        },
                        {
                            issue: "Prediabetes",
                            plan: "Check HbA1c today. Repeat fasting glucose 3 months. Lifestyle modification. Screen annually going forward."
                        },
                        {
                            issue: "Post-cholecystectomy status",
                            plan: "No routine follow-up needed unless symptoms develop."
                        },
                        {
                            issue: "Weight management",
                            plan: "Goal: 10% weight loss over 6 months. Refer to nutritionist if desired."
                        },
                        {
                            issue: "General health maintenance",
                            plan: "Update vaccinations, colon cancer screening discussion (age 48), BP monitoring."
                        }
                    ]
                },
                
                caseConclusion: {
                    summary: "Mr. R.M. has made an excellent recovery from acute gallstone pancreatitis. Cholecystectomy was successful, pancreatitis resolved, and he is engaged in alcohol cessation. New finding of prediabetes requires monitoring. Overall prognosis is good with continued sobriety.",
                    keyTakeaways: [
                        "Gallstone pancreatitis requires same-admission cholecystectomy to prevent recurrence",
                        "Severity assessment (no necrosis) guides prognosis and management intensity",
                        "CT at 72+ hours is the gold standard for necrosis evaluation",
                        "Alcohol cessation counseling is essential even when gallstones are the trigger",
                        "Long-term sequelae to monitor: diabetes, chronic pancreatitis, recurrent biliary issues",
                        "SBAR communication ensures clear, complete handoffs to consultants and attendings",
                        "Discharge planning includes medications, activity, diet, warning signs, and follow-up"
                    ],
                    clinicalPearl: "The best predictor of outcome in acute pancreatitis is the presence or absence of pancreatic necrosis. Our patient had interstitial (edematous) pancreatitis with an excellent prognosis. Had he developed necrotizing pancreatitis, his hospital course would have been weeks to months with potential need for ICU care, antibiotics for infected necrosis, and possible surgical or endoscopic debridement."
                }
            }
        },
        
        // ================================================================
        // DKA (DIABETIC KETOACIDOSIS) - DEEP REASONING CASE
        // ================================================================
        'dka-deep': {
            id: 'dka-deep',
            title: 'Diabetic Ketoacidosis',
            subtitle: 'Metabolic emergency requiring systematic management',
            category: 'Endocrine',
            difficulty: 'Advanced',
            estimatedTime: '50-65 min',
            tags: ['Metabolism', 'Acid-Base', 'Fluid Management', 'Insulin Physiology', 'ICU'],
            
            // ==================== SCIENCE PRIMER ====================
            primer: {
                anatomy: {
                    title: "Pancreatic Islet Anatomy & Glucose Regulation",
                    sections: [
                        {
                            title: "Islets of Langerhans",
                            content: "The endocrine pancreas consists of ~1 million islets scattered throughout the organ, comprising only 1-2% of pancreatic mass but receiving 10-15% of blood flow. Each islet contains multiple cell types working in concert.",
                            keyPoints: [
                                "Beta cells (65-80%): Produce insulin - the only hormone that lowers blood glucose",
                                "Alpha cells (15-20%): Produce glucagon - raises blood glucose",
                                "Delta cells (3-10%): Produce somatostatin - inhibits both insulin and glucagon",
                                "PP cells: Produce pancreatic polypeptide - regulates pancreatic secretions"
                            ],
                            clinicalCorrelation: "In Type 1 DM, autoimmune destruction targets beta cells specifically, leaving alpha cells intact. This creates a 'bihormonal' problem: absent insulin AND inappropriately elevated glucagon, both driving hyperglycemia."
                        },
                        {
                            title: "Insulin's Target Tissues",
                            content: "Insulin acts on three major metabolic tissues, each with distinct responses:",
                            keyPoints: [
                                "Liver: ↓ Gluconeogenesis, ↓ Glycogenolysis, ↑ Glycogen synthesis, ↑ Lipogenesis",
                                "Muscle: ↑ Glucose uptake (GLUT4), ↑ Glycogen synthesis, ↑ Protein synthesis",
                                "Adipose: ↑ Glucose uptake, ↑ Lipogenesis, ↓ Lipolysis (KEY for DKA)"
                            ],
                            clinicalCorrelation: "In DKA, the lack of insulin removes the 'brake' on lipolysis. Adipose tissue releases massive amounts of free fatty acids, which the liver converts to ketones. This is the fundamental driver of ketoacidosis."
                        }
                    ],
                    externalResources: [
                        {
                            title: "Pancreatic Histology",
                            url: "https://www.histology.leeds.ac.uk/digestive/pancreas.php",
                            description: "Interactive histology of islets"
                        }
                    ]
                },
                
                physiology: {
                    title: "Metabolic Pathways in DKA",
                    sections: [
                        {
                            title: "Normal Fed State (Insulin Present)",
                            content: "After eating, rising glucose stimulates insulin release. Insulin promotes anabolism:",
                            keyPoints: [
                                "Glucose enters cells via GLUT4 (muscle, fat) - used for energy",
                                "Excess glucose stored as glycogen (liver, muscle)",
                                "Further excess converted to fat (lipogenesis)",
                                "Lipolysis is SUPPRESSED - fat stays in adipose tissue",
                                "Ketogenesis is SUPPRESSED - liver makes minimal ketones"
                            ]
                        },
                        {
                            title: "Fasting State (Low Insulin, High Glucagon)",
                            content: "Between meals, falling insulin and rising glucagon promote catabolism:",
                            keyPoints: [
                                "Liver releases glucose from glycogen (glycogenolysis)",
                                "Liver makes new glucose from amino acids/lactate (gluconeogenesis)",
                                "Adipose releases free fatty acids (lipolysis)",
                                "Liver converts some FFAs to ketones for brain fuel",
                                "This is NORMAL and controlled - mild ketosis during fasting"
                            ]
                        },
                        {
                            title: "DKA State (Absent Insulin + Stress Hormones)",
                            content: "DKA is an UNCONTROLLED catabolic state. Without insulin, plus counter-regulatory hormones (glucagon, cortisol, catecholamines):",
                            keyPoints: [
                                "MASSIVE lipolysis → flood of free fatty acids to liver",
                                "MASSIVE ketogenesis → acetoacetate, beta-hydroxybutyrate, acetone",
                                "Ketoacids dissociate → H+ ions cause acidemia",
                                "MASSIVE gluconeogenesis → extreme hyperglycemia",
                                "Osmotic diuresis → dehydration, electrolyte losses",
                                "Total body potassium depletion (despite normal/high serum K+)"
                            ],
                            clinicalCorrelation: "The triad of DKA: Hyperglycemia (usually >250), Ketosis (ketones in blood/urine), Acidosis (pH <7.3, bicarb <18). All three must be present for DKA diagnosis."
                        },
                        {
                            title: "The Potassium Paradox",
                            content: "One of the most dangerous aspects of DKA is potassium handling:",
                            keyPoints: [
                                "Total body K+ is DEPLETED (urinary losses from osmotic diuresis)",
                                "But serum K+ is often NORMAL or HIGH on presentation",
                                "Why? Acidemia causes K+ to shift OUT of cells (H+/K+ exchange)",
                                "Also: Insulin normally drives K+ INTO cells - no insulin = K+ stays out",
                                "When you give insulin: K+ rushes into cells → serum K+ DROPS rapidly",
                                "This can cause fatal arrhythmias if not anticipated"
                            ],
                            clinicalCorrelation: "NEVER give insulin if K+ < 3.3 mEq/L. Replace potassium FIRST. Even with normal K+, add KCl to IV fluids because K+ WILL drop with insulin."
                        }
                    ],
                    quiz: [
                        {
                            question: "Why do DKA patients develop ketoacidosis specifically, rather than just hyperglycemia?",
                            options: [
                                "Glucose is converted to ketones when blood sugar is high",
                                "Lack of insulin removes suppression of lipolysis, flooding the liver with free fatty acids that are converted to ketones",
                                "The kidneys produce ketones when filtering excess glucose",
                                "Ketones are released from dying pancreatic beta cells"
                            ],
                            correctIndex: 1,
                            explanation: "Insulin normally SUPPRESSES lipolysis in adipose tissue. Without insulin, massive amounts of free fatty acids are released and transported to the liver, which converts them to ketone bodies (beta-hydroxybutyrate, acetoacetate). These are acids that cause the pH to drop."
                        },
                        {
                            question: "A DKA patient has serum K+ of 5.2 mEq/L (normal-high). What is their total body potassium status?",
                            options: [
                                "Total body K+ is high - they need no potassium replacement",
                                "Total body K+ is normal - the serum level is accurate",
                                "Total body K+ is DEPLETED - the serum level is falsely elevated",
                                "Cannot determine total body K+ from serum levels"
                            ],
                            correctIndex: 2,
                            explanation: "Total body K+ is severely depleted from osmotic diuresis. The serum K+ appears normal/high because acidemia and lack of insulin both shift K+ OUT of cells into the bloodstream. Once you give insulin and correct acidosis, K+ will shift back into cells and serum K+ will DROP dramatically."
                        }
                    ]
                }
            },
            
            // ==================== LONGITUDINAL TIMELINE ====================
            longitudinalTimeline: [
                { day: 1, title: "Emergency Department", setting: "ED", timeLabel: "Hour 0" },
                { day: 2, title: "ICU Hour 4", setting: "ICU", timeLabel: "Hour 4" },
                { day: 3, title: "ICU Hour 12", setting: "ICU", timeLabel: "Hour 12" },
                { day: 4, title: "Step-Down Day 2", setting: "Floor", timeLabel: "Day 2" },
                { day: 5, title: "Discharge", setting: "Floor", timeLabel: "Day 3" },
                { day: 30, title: "Follow-up", setting: "Clinic", timeLabel: "2 Weeks" }
            ],
            
            // ==================== DAY 1 (HOUR 0): ED PRESENTATION ====================
            day1: {
                patientInfo: {
                    name: "Jason Thomas",
                    firstName: "Jason",
                    lastName: "Thomas",
                    age: 24,
                    gender: "female",
                    setting: "urgent_care",
                    chiefComplaint: "Nausea, vomiting, and confusion"
                },
                
                vitals: {
                    BP: "98/62",
                    HR: 124,
                    RR: 28,
                    Temp: "97.8°F",
                    SpO2: "99% RA",
                    glucose: "486 mg/dL (fingerstick)"
                },
                
                hpiSections: [
                    {
                        question: "Onset and progression?",
                        answer: "3 days of increasing polyuria, polydipsia, and fatigue. Today developed nausea, vomiting x4, and abdominal pain. Family noted she seemed 'out of it' and brought her in.",
                        mechanismLink: {
                            title: "Why polyuria and polydipsia?",
                            explanation: "Glucose >180 mg/dL exceeds kidney's reabsorption capacity → glucosuria → osmotic diuresis → polyuria. Water loss triggers thirst → polydipsia. This is the body trying to excrete excess glucose."
                        }
                    },
                    {
                        question: "Diabetes history?",
                        answer: "Diagnosed with Type 1 DM at age 12. On insulin pump (Omnipod) with Humalog. Last A1c was 8.2% three months ago. Admits to 'pump issues' this week - site looked red so she removed it 2 days ago and hasn't replaced it.",
                        mechanismLink: {
                            title: "Why does stopping insulin cause DKA so quickly in Type 1?",
                            explanation: "Type 1 diabetics have NO endogenous insulin production. Without exogenous insulin, there is zero suppression of lipolysis and gluconeogenesis. DKA can develop within 12-24 hours of insulin cessation. Type 2 diabetics rarely get DKA because they retain some insulin production."
                        }
                    },
                    {
                        question: "Any illness or precipitant?",
                        answer: "Had a cold last week with cough and congestion, mostly resolved now. No fever, no dysuria, no sick contacts with serious illness.",
                        mechanismLink: {
                            title: "Why does illness precipitate DKA?",
                            explanation: "Infection/stress → counter-regulatory hormones (cortisol, glucagon, catecholamines) → increased insulin resistance AND increased gluconeogenesis/lipolysis. The usual insulin dose becomes insufficient. Combined with her stopped insulin, this created the 'perfect storm' for DKA."
                        }
                    }
                ],
                
                physicalExam: {
                    general: "Lethargic but arousable, appears dehydrated, deep rapid breathing",
                    HEENT: "Dry mucous membranes, fruity odor to breath, sunken eyes",
                    cardiovascular: "Tachycardic, regular rhythm, no murmurs, weak peripheral pulses",
                    respiratory: "Tachypneic with deep breaths (Kussmaul respirations), lungs clear",
                    abdomen: "Soft, diffusely tender without rebound or guarding, hypoactive bowel sounds",
                    neuro: "Alert to person, oriented to place but not date, no focal deficits",
                    skin: "Dry, reduced turgor, no rashes, pump site on abdomen with mild erythema"
                },
                
                examFindings: [
                    {
                        finding: "Kussmaul respirations",
                        explanation: "Deep, rapid breathing is respiratory compensation for metabolic acidosis. The body blows off CO2 to raise pH. RR 28 with deep breaths suggests significant acidemia."
                    },
                    {
                        finding: "Fruity breath odor",
                        explanation: "Acetone (a ketone body) is volatile and exhaled. The sweet/fruity smell is pathognomonic for ketosis. It's the same compound in nail polish remover."
                    },
                    {
                        finding: "Altered mental status",
                        explanation: "Caused by multiple factors: hyperosmolarity (glucose pulling water from brain cells), acidemia affecting neuronal function, and dehydration reducing cerebral perfusion."
                    },
                    {
                        finding: "Abdominal pain",
                        explanation: "Very common in DKA (>50% of patients). Mechanism unclear but may relate to gastric distension, electrolyte abnormalities, or direct effect of ketones. Usually resolves with DKA treatment - if it persists, look for another cause."
                    }
                ],
                
                labResults: {
                    title: "Initial Laboratory Results",
                    values: [
                        { test: "Glucose", value: "482 mg/dL", normal: "70-100", interpretation: "Severely elevated", mechanism: "No insulin → uncontrolled gluconeogenesis + no cellular uptake" },
                        { test: "pH (venous)", value: "7.18", normal: "7.35-7.45", interpretation: "Moderate acidemia", mechanism: "Ketoacids (beta-hydroxybutyrate, acetoacetate) release H+ ions" },
                        { test: "Bicarbonate", value: "8 mEq/L", normal: "22-28", interpretation: "Severely low", mechanism: "Consumed buffering ketoacids" },
                        { test: "Anion gap", value: "28", normal: "8-12", interpretation: "Elevated", mechanism: "AG = Na - (Cl + HCO3). Unmeasured anions are ketoacids" },
                        { test: "Beta-hydroxybutyrate", value: "6.8 mmol/L", normal: "<0.6", interpretation: "Markedly elevated", mechanism: "Primary ketone in DKA (3:1 ratio to acetoacetate)" },
                        { test: "Sodium", value: "128 mEq/L", normal: "136-145", interpretation: "Low (pseudohyponatremia)", mechanism: "Each 100 mg/dL glucose above normal → Na appears 1.6 mEq/L lower. Corrected Na = 134" },
                        { test: "Potassium", value: "5.4 mEq/L", normal: "3.5-5.0", interpretation: "High-normal", mechanism: "MISLEADING - total body K+ is depleted. Acidemia + no insulin shifts K+ out of cells" },
                        { test: "Creatinine", value: "1.8 mg/dL", normal: "0.6-1.2", interpretation: "Elevated (AKI)", mechanism: "Prerenal azotemia from severe dehydration" },
                        { test: "BUN", value: "32 mg/dL", normal: "7-20", interpretation: "Elevated", mechanism: "Dehydration (BUN:Cr ratio ~18:1 suggests prerenal)" }
                    ]
                },
                
                severityAssessment: {
                    title: "DKA Severity Classification",
                    criteria: [
                        { parameter: "pH", mild: ">7.25", moderate: "7.0-7.24", severe: "<7.0", patient: "7.18 → MODERATE" },
                        { parameter: "Bicarbonate", mild: "15-18", moderate: "10-14", severe: "<10", patient: "8 → SEVERE" },
                        { parameter: "Mental status", mild: "Alert", moderate: "Drowsy", severe: "Stupor/Coma", patient: "Drowsy → MODERATE" },
                        { parameter: "Anion gap", mild: ">10", moderate: ">12", severe: ">12", patient: "28 → SEVERE" }
                    ],
                    overall: "MODERATE-SEVERE DKA based on pH, very low bicarbonate, and altered mental status. Requires ICU admission."
                },
                
                initialManagement: {
                    title: "Initial Management - The DKA Protocol",
                    priority: "ABCs → IV Access → Labs → Start Fluids → Then Insulin",
                    steps: [
                        {
                            order: 1,
                            action: "IV Fluid Resuscitation",
                            specifics: "Normal saline (0.9% NaCl) 1-1.5 L bolus over first hour",
                            rationale: "Patients are typically 5-10L fluid depleted. Volume resuscitation improves perfusion, reduces glucose (dilution + increased GFR), and is the FIRST priority.",
                            warning: "Start fluids BEFORE insulin. Giving insulin without fluids can cause cardiovascular collapse."
                        },
                        {
                            order: 2,
                            action: "Potassium Assessment",
                            specifics: "Check K+ before starting insulin",
                            rationale: "If K+ < 3.3: Hold insulin, give K+ first (40 mEq over 1 hr). If K+ 3.3-5.3: Add 20-40 mEq KCl per liter of fluids. If K+ > 5.3: Recheck in 2 hours, no K+ in initial fluids.",
                            warning: "Insulin drives K+ into cells. Starting insulin with low K+ can cause fatal arrhythmias."
                        },
                        {
                            order: 3,
                            action: "Insulin Infusion",
                            specifics: "Regular insulin 0.1 units/kg/hr IV continuous infusion (no bolus needed per current guidelines)",
                            rationale: "Insulin stops ketogenesis (the primary goal) and lowers glucose. Goal: glucose drop 50-70 mg/dL per hour.",
                            warning: "Do NOT drop glucose too fast. Rapid correction can cause cerebral edema, especially in younger patients."
                        },
                        {
                            order: 4,
                            action: "Monitor Closely",
                            specifics: "BMP every 2-4 hours, glucose every 1 hour, neuro checks every hour",
                            rationale: "DKA management requires frequent reassessment. Electrolytes shift rapidly with treatment."
                        }
                    ]
                },
                
                clinicalDecision: {
                    question: "The patient's initial K+ is 5.4 mEq/L. How should this affect your insulin timing?",
                    options: [
                        {
                            text: "K+ is high, so start insulin immediately without potassium replacement",
                            correct: false,
                            explanation: "Wrong approach. Although serum K+ is 5.4, total body K+ is severely depleted. You can start insulin, but MUST add K+ to maintenance fluids (typically 20-40 mEq/L) because K+ will drop rapidly once insulin is given."
                        },
                        {
                            text: "Start insulin infusion AND add potassium (20-40 mEq/L) to IV fluids",
                            correct: true,
                            explanation: "Correct! K+ 3.3-5.3 (or even slightly above) means you can start insulin but should add K+ to fluids. The 5.4 is falsely elevated from acidemia - total body K+ is depleted. Anticipate K+ dropping with treatment."
                        },
                        {
                            text: "Hold insulin until K+ drops below 5.0",
                            correct: false,
                            explanation: "Unnecessary delay. K+ of 5.4 in DKA is not truly elevated - it's a shift phenomenon. Delaying insulin prolongs ketoacidosis. Start insulin and monitor K+ closely."
                        },
                        {
                            text: "Give calcium gluconate to protect the heart from hyperkalemia",
                            correct: false,
                            explanation: "Not indicated. K+ of 5.4 without ECG changes doesn't require cardiac membrane stabilization. The K+ will drop with treatment. Calcium gluconate is for K+ >6.5 or with ECG changes."
                        }
                    ]
                },
                
                sbarCall: {
                    context: "The ED attending wants you to call the ICU to arrange admission and present the case.",
                    attending: "Dr. Patel (ICU attending)",
                    
                    idealSBAR: {
                        situation: "Hi Dr. Patel, this is [name] calling from the ED about a patient who needs ICU admission for DKA. She's a 24-year-old Type 1 diabetic with moderate-severe DKA.",
                        background: "She's had Type 1 diabetes since age 12, usually on an insulin pump. She removed her pump site 2 days ago due to site irritation and hasn't replaced it. She had a recent URI last week. She presented today with 3 days of polyuria and polydipsia, then nausea, vomiting, and confusion.",
                        assessment: "Vitals show HR 124, BP 98/62, RR 28 with Kussmaul respirations. She's lethargic but arousable. Labs show glucose 482, pH 7.18, bicarb 8, anion gap 28, beta-hydroxybutyrate 6.8. Potassium is 5.4 but we know total body K is depleted. Creatinine 1.8 with prerenal picture. This is moderate-severe DKA.",
                        recommendation: "We've started a liter of normal saline bolus and I'd like to get her to the ICU to start an insulin drip with close monitoring. She'll need q1h glucose checks, q2-4h BMPs, and hourly neuro checks. Can you accept her to the unit?"
                    },
                    
                    attendingResponses: {
                        excellent: "Great presentation. Yes, please send her up. Make sure the insulin drip order is in and we'll have nursing start it when she arrives. What's her current mental status - do we need to think about airway protection?",
                        good: "Thanks for the call. She definitely needs the unit. Has she gotten any fluids yet? Let's make sure she gets at least a liter before the insulin starts.",
                        needsWork: "I need a few more details. What's her anion gap? And do we know what precipitated this - is there an underlying infection we need to treat?"
                    }
                },
                
                dayConclusion: {
                    summary: "24-year-old Type 1 diabetic presenting with moderate-severe DKA precipitated by insulin pump discontinuation and recent URI. Started fluid resuscitation, admitted to ICU for insulin infusion and close monitoring.",
                    clinicalPearl: "In DKA, fluids come FIRST, then insulin (after confirming K+ ≥3.3). The serum K+ is deceptively normal or high - total body potassium is always depleted. Always add K+ to maintenance fluids."
                }
            },
            
            // ==================== DAY 2 (HOUR 4): ICU MONITORING ====================
            day2: {
                title: "ICU Hour 4 - Response to Treatment",
                
                currentStatus: {
                    vitals: {
                        BP: "108/68",
                        HR: 102,
                        RR: 22,
                        Temp: "98.2°F",
                        SpO2: "99% RA",
                        UOP: "150 mL/hr (excellent response to fluids)"
                    },
                    clinicalChange: "More alert, answering questions appropriately. Still has mild nausea but no further vomiting. Abdominal pain improving.",
                    fluidBalance: "Received 3L NS total. Now on NS + 40 mEq KCl/L at 250 mL/hr."
                },
                
                intervalLabs: {
                    title: "4-Hour Labs (Trending)",
                    values: [
                        { test: "Glucose", initial: "482", now: "318 mg/dL", target: "↓50-70/hr", status: "Appropriate drop (41/hr)" },
                        { test: "pH", initial: "7.18", now: "7.24", target: ">7.3", status: "Improving" },
                        { test: "Bicarbonate", initial: "8", now: "12 mEq/L", target: ">18", status: "Improving" },
                        { test: "Anion gap", initial: "28", now: "20", target: "<12", status: "Closing" },
                        { test: "Potassium", initial: "5.4", now: "4.2 mEq/L", target: "4.0-5.0", status: "Dropped as expected - continue K+ replacement" },
                        { test: "Creatinine", initial: "1.8", now: "1.4 mg/dL", target: "Baseline", status: "Improving with hydration" }
                    ]
                },
                
                managementCheck: {
                    title: "Hour 4 Decision Points",
                    questions: [
                        {
                            question: "Glucose is approaching 250. What adjustment is needed?",
                            answer: "When glucose reaches 200-250, ADD dextrose to IV fluids (D5 1/2 NS or D10) while CONTINUING insulin infusion at same rate.",
                            rationale: "The goal is to resolve ketoacidosis, not just lower glucose. Ketogenesis stops when insulin is present, regardless of glucose level. If you stop insulin when glucose normalizes, ketoacidosis continues/worsens. Adding dextrose allows insulin to continue while preventing hypoglycemia.",
                            commonMistake: "Stopping or reducing insulin when glucose reaches 250. This allows ketogenesis to resume and prolongs DKA."
                        },
                        {
                            question: "When can we stop the insulin drip?",
                            answer: "DKA resolution requires ALL of: pH >7.3 AND bicarbonate ≥18 AND anion gap <12 AND patient tolerating PO. Then transition to subcutaneous insulin (give SQ insulin 1-2 hours BEFORE stopping drip).",
                            rationale: "Glucose normalization does NOT mean DKA is resolved. The anion gap (ketoacidosis) must close. Also, insulin drip has a half-life of minutes - stopping it causes immediate loss of insulin effect, so SQ insulin must be on board first."
                        },
                        {
                            question: "Potassium dropped from 5.4 to 4.2. What now?",
                            answer: "Continue potassium replacement. The drop confirms total body K+ depletion. Maintain K+ in fluids (40 mEq/L) and recheck with next BMP.",
                            rationale: "K+ will continue to shift intracellularly as acidosis corrects and insulin acts. May need 200-300 mEq total K+ replacement over DKA treatment course."
                        }
                    ]
                },
                
                complicationWatch: {
                    title: "Complications to Monitor",
                    complications: [
                        {
                            name: "Cerebral Edema",
                            riskFactors: "Young age, new diagnosis, rapid glucose correction, excessive fluid",
                            signs: "Headache, altered mental status, seizures, bradycardia, posturing",
                            prevention: "Don't drop glucose >50-70/hr. Avoid hypotonic fluids early. Monitor neuro status hourly.",
                            treatment: "If suspected: Mannitol 0.5-1 g/kg or hypertonic saline, elevate head, reduce IV rate, stat CT"
                        },
                        {
                            name: "Hypokalemia",
                            riskFactors: "Inadequate K+ replacement, aggressive insulin",
                            signs: "ECG changes (flattened T, U waves), weakness, arrhythmias",
                            prevention: "Add K+ to all fluids once K+ <5.3. Check K+ every 2-4 hours.",
                            treatment: "Replace aggressively. If <3.3, hold insulin until K+ repleted."
                        },
                        {
                            name: "Hypoglycemia",
                            riskFactors: "Continuing insulin without adding dextrose",
                            signs: "Glucose <70, diaphoresis, tremor, confusion",
                            prevention: "Add D5 or D10 to fluids when glucose approaches 200-250.",
                            treatment: "D50 bolus, increase dextrose in fluids"
                        }
                    ]
                },
                
                dayConclusion: {
                    summary: "Patient responding appropriately to DKA protocol at hour 4. Glucose dropping ~40/hr, anion gap closing, mental status improved. K+ dropped as expected - continuing replacement. Will add dextrose when glucose <250.",
                    clinicalPearl: "The anion gap tells you if DKA is resolving. Don't be fooled by improving glucose - check the gap! DKA resolution = pH >7.3, HCO3 ≥18, AG <12, AND tolerating PO."
                }
            },
            
            // ==================== DAY 3 (HOUR 12): TRANSITION ====================
            day3: {
                title: "ICU Hour 12 - Preparing for Transition",
                
                currentStatus: {
                    vitals: {
                        BP: "118/72",
                        HR: 88,
                        RR: 16,
                        Temp: "98.6°F"
                    },
                    clinicalStatus: "Alert and oriented x3. Nausea resolved. Hungry. Tolerating sips of clear liquids without difficulty.",
                    currentFluids: "D5 1/2 NS + 40 mEq KCl at 150 mL/hr",
                    insulinDrip: "Regular insulin at 0.1 units/kg/hr (unchanged)"
                },
                
                resolutionLabs: {
                    title: "12-Hour Labs - DKA Resolution Check",
                    values: [
                        { test: "Glucose", value: "186 mg/dL", status: "✓ At target (on dextrose-containing fluids)" },
                        { test: "pH", value: "7.34", status: "✓ >7.3 - Resolved" },
                        { test: "Bicarbonate", value: "19 mEq/L", status: "✓ ≥18 - Resolved" },
                        { test: "Anion gap", value: "10", status: "✓ <12 - Resolved" },
                        { test: "Potassium", value: "3.9 mEq/L", status: "Within range, continue monitoring" },
                        { test: "Beta-hydroxybutyrate", value: "0.8 mmol/L", status: "✓ Markedly improved (was 6.8)" }
                    ],
                    conclusion: "DKA RESOLVED: pH >7.3 ✓, HCO3 ≥18 ✓, AG <12 ✓. Patient tolerating PO. Ready for transition to subcutaneous insulin."
                },
                
                transitionProtocol: {
                    title: "Transitioning from IV to Subcutaneous Insulin",
                    steps: [
                        {
                            step: 1,
                            action: "Calculate Total Daily Dose (TDD)",
                            detail: "TDD = 0.5-0.6 units/kg/day for insulin-naive, OR use pre-hospitalization regimen if known. Our patient was on ~45 units/day total on her pump.",
                            example: "Patient weight: 65 kg. Could use 0.5 × 65 = ~32 units TDD if new. She was on 45 units, so we'll resume her home regimen with adjustment."
                        },
                        {
                            step: 2,
                            action: "Choose regimen",
                            detail: "Options: Resume pump, start MDI (multiple daily injections), or basal-bolus. Given her pump site issues, we'll start MDI until she can establish new pump site.",
                            example: "Basal-bolus: 50% as basal (glargine), 50% as bolus (lispro divided among meals). ~20 units glargine daily + ~8 units lispro with each meal."
                        },
                        {
                            step: 3,
                            action: "Give subcutaneous basal insulin",
                            detail: "Administer long-acting insulin (glargine/detemir/degludec) 1-2 hours BEFORE stopping insulin drip.",
                            rationale: "Insulin drip has ~5 minute half-life. If you stop it without SQ insulin on board, patient has no insulin → immediate return to DKA. Long-acting takes 1-2 hours to start working."
                        },
                        {
                            step: 4,
                            action: "Continue drip overlap",
                            detail: "Keep insulin drip running for 1-2 hours after SQ insulin given, then discontinue.",
                            example: "Give glargine 20 units SQ now. Continue drip for 2 more hours, then stop."
                        },
                        {
                            step: 5,
                            action: "Start oral intake and bolus insulin",
                            detail: "When eating meals, give rapid-acting insulin. Transition diet: clears → full liquids → regular diabetic diet.",
                            example: "Give lispro 6-8 units with first meal, adjust based on carb content and glucose."
                        }
                    ],
                    commonErrors: [
                        "Stopping insulin drip before SQ insulin has time to work → DKA recurrence",
                        "Not giving basal insulin → only covers meals, overnight DKA",
                        "Restarting pump immediately on infected/irritated site → pump failure",
                        "Sending patient home same day → often insufficient education, high readmission rate"
                    ]
                },
                
                educationStart: {
                    title: "Patient Education - Beginning the Conversation",
                    topics: [
                        {
                            topic: "What happened",
                            discussion: "You developed DKA because you didn't have insulin for 2 days. Your body started breaking down fat for energy, which created acids that made your blood too acidic. This is life-threatening."
                        },
                        {
                            topic: "Prevention",
                            discussion: "NEVER go without insulin, even if you're not eating. If your pump fails, you need backup supplies: insulin pens or syringes. Do you have backup supplies at home?"
                        },
                        {
                            topic: "Sick day rules",
                            discussion: "When you're sick, you need MORE insulin, not less. Check glucose and ketones more often. If ketones are positive, take extra insulin per your sick day protocol. If you can't keep fluids down or ketones don't clear, call us or come in."
                        }
                    ]
                },
                
                dayConclusion: {
                    summary: "DKA resolved at hour 12. Transitioned to subcutaneous insulin with basal-bolus regimen. Patient tolerating PO, alert and stable. Ready for step-down to floor for continued education and monitoring.",
                    clinicalPearl: "Always give basal insulin 1-2 hours BEFORE stopping the insulin drip. The drip's effect disappears in minutes - without overlap, you'll induce DKA recurrence."
                }
            },
            
            // ==================== DAY 4: FLOOR CARE ====================
            day4: {
                title: "Hospital Day 2 - Floor Management",
                
                currentStatus: {
                    vitals: "Stable: BP 116/74, HR 78, afebrile",
                    glucoseLog: [
                        { time: "Fasting", value: "156 mg/dL", insulin: "Pre-breakfast lispro 8u" },
                        { time: "Pre-lunch", value: "198 mg/dL", insulin: "Lispro 8u" },
                        { time: "Pre-dinner", value: "167 mg/dL", insulin: "Lispro 8u" },
                        { time: "Bedtime", value: "145 mg/dL", insulin: "Glargine 20u" }
                    ],
                    summary: "Glucoses ranging 145-198. Eating regular diabetic diet. No hypoglycemia. No nausea or abdominal pain."
                },
                
                insulinAdjustment: {
                    title: "Insulin Titration Principles",
                    currentRegimen: "Glargine 20u nightly + Lispro 8u with meals",
                    assessment: [
                        { issue: "Fasting glucose 156", interpretation: "Slightly high. Basal may need increase.", action: "Consider glargine 22u tomorrow if pattern continues" },
                        { issue: "Pre-dinner 167", interpretation: "Lunch coverage adequate", action: "Continue lispro 8u" },
                        { issue: "No hypoglycemia", interpretation: "Safe to titrate up if needed", action: "Increase basal by 10-20% if fasting >130 x 2-3 days" }
                    ],
                    teachingPoint: "Basal insulin controls overnight/fasting glucose. Bolus insulin controls post-meal spikes. Adjust one at a time and give 2-3 days to see effect."
                },
                
                pumpDiscussion: {
                    title: "Insulin Pump vs. MDI Discussion",
                    patientQuestion: "Can I go back on my pump?",
                    clinicalResponse: {
                        assessment: "Let's look at what happened. Your pump site was irritated, you removed it, and didn't have backup supplies to cover you. This led to DKA within 48 hours.",
                        options: [
                            {
                                option: "Resume pump before discharge",
                                pros: "Returns to familiar system, better control if used correctly",
                                cons: "Risk of repeat failure if not well-prepared, need to choose new site",
                                requirements: "Demonstrated competency, backup supplies, new insertion site"
                            },
                            {
                                option: "Discharge on MDI, restart pump outpatient",
                                pros: "Ensures adequate education, can verify backup supplies, diabetes educator follow-up",
                                cons: "May have worse control short-term if unfamiliar with MDI",
                                requirements: "Pen teaching, carb counting review, close follow-up"
                            }
                        ],
                        recommendation: "Given this hospitalization, I'd recommend going home on MDI with close follow-up. Your diabetes educator can help you restart the pump in 1-2 weeks once we've ensured you have backup supplies and reviewed sick-day management."
                    }
                },
                
                diabetesEducation: {
                    title: "Comprehensive Diabetes Education",
                    sessions: [
                        {
                            topic: "DKA Prevention & Sick Day Rules",
                            keyPoints: [
                                "NEVER stop insulin, even if not eating (basal insulin is still needed)",
                                "When sick: check glucose every 2-4 hours, check ketones if glucose >250",
                                "If ketones positive: take correction dose (usually 10-20% extra), drink fluids",
                                "Call provider or go to ED if: ketones don't clear after 2 corrections, vomiting/can't keep fluids down, glucose >300 despite extra insulin, confusion or difficulty breathing"
                            ]
                        },
                        {
                            topic: "Backup Supplies",
                            keyPoints: [
                                "Always have at home: rapid-acting insulin pen, long-acting insulin pen, pen needles, ketone strips, glucose meter, fast-acting glucose",
                                "Know your backup doses if pump fails",
                                "Have provider contact number accessible"
                            ]
                        },
                        {
                            topic: "Carb Counting Review",
                            keyPoints: [
                                "Each meal: count carbs → calculate bolus using insulin-to-carb ratio",
                                "Her ratio: 1 unit per 10g carb (1:10)",
                                "Add correction factor if glucose high: 1 unit per 30 mg/dL above target"
                            ]
                        },
                        {
                            topic: "Hypoglycemia Management",
                            keyPoints: [
                                "Symptoms: shaking, sweating, confusion, hunger",
                                "Rule of 15: 15g fast carbs, wait 15 min, recheck",
                                "Glucagon kit for severe episodes - teach family member"
                            ]
                        }
                    ]
                },
                
                socialWork: {
                    title: "Psychosocial Assessment",
                    findings: "Patient is a college student with good family support. Admits she gets 'burned out' on diabetes management and sometimes skips checking glucose. Has insurance coverage for pump supplies but doesn't always order refills on time.",
                    interventions: [
                        "Diabetes distress screening: Moderate distress noted",
                        "Connected with diabetes support group for young adults",
                        "Set up auto-refill for supplies through pharmacy",
                        "Provided mental health resources for diabetes burnout"
                    ]
                },
                
                dayConclusion: {
                    summary: "Stable on basal-bolus regimen. Glucoses in acceptable range. Completed DKA prevention education. Decided to discharge on MDI with pump restart planned outpatient. Social work addressing diabetes burnout and supply management.",
                    clinicalPearl: "DKA often results from psychosocial factors (burnout, cost, access issues) rather than knowledge gaps. Address the root cause to prevent recurrence."
                }
            },
            
            // ==================== DAY 5: DISCHARGE ====================
            day5: {
                title: "Hospital Day 3 - Discharge Day",
                
                dischargeReadiness: {
                    title: "Discharge Criteria Checklist",
                    criteria: [
                        { item: "DKA resolved (pH >7.3, HCO3 ≥18, AG normal)", met: true },
                        { item: "Tolerating PO diet", met: true },
                        { item: "Stable on SQ insulin regimen x 24h", met: true },
                        { item: "Glucose reasonably controlled (no severe hypo/hyperglycemia)", met: true },
                        { item: "DKA prevention education completed", met: true },
                        { item: "Sick day rules verbalized", met: true },
                        { item: "Backup supplies available", met: true },
                        { item: "Follow-up scheduled", met: true },
                        { item: "Prescriptions sent", met: true }
                    ]
                },
                
                dischargeMedications: {
                    title: "Discharge Medications",
                    insulinRegimen: [
                        { name: "Insulin glargine (Lantus)", dose: "22 units SQ nightly", notes: "Long-acting basal insulin" },
                        { name: "Insulin lispro (Humalog)", dose: "Per carb count, ~1:10 ratio + correction factor 1:30", notes: "Rapid-acting with meals" }
                    ],
                    supplies: [
                        "Insulin pens (both types)",
                        "Pen needles",
                        "Glucose meter and strips",
                        "Ketone strips (blood ketone meter preferred)",
                        "Glucagon kit"
                    ],
                    notes: "Pump supplies ordered - restart pump at diabetes educator visit in 1-2 weeks"
                },
                
                dischargeInstructions: {
                    title: "Discharge Instructions",
                    sections: [
                        {
                            topic: "Insulin Administration",
                            instructions: [
                                "Glargine 22 units at bedtime every day - do not skip",
                                "Lispro: count carbs at each meal, use 1:10 ratio",
                                "If glucose >150 before meal, add correction: (glucose - 120) ÷ 30 = extra units",
                                "Rotate injection sites (abdomen, thighs, arms)"
                            ]
                        },
                        {
                            topic: "Monitoring",
                            instructions: [
                                "Check glucose: fasting, before meals, and bedtime (at least 4x/day)",
                                "Check ketones if glucose >250 or feeling unwell",
                                "Keep a log to share at follow-up visits"
                            ]
                        },
                        {
                            topic: "When to Seek Care",
                            instructions: [
                                "Glucose consistently >300 despite correction doses",
                                "Ketones positive that don't clear with extra insulin",
                                "Vomiting, unable to keep fluids down",
                                "Signs of DKA: excessive thirst, frequent urination, nausea, confusion, rapid breathing",
                                "Any hypoglycemia requiring assistance from another person"
                            ]
                        },
                        {
                            topic: "Sick Day Rules",
                            instructions: [
                                "NEVER stop insulin when sick",
                                "Check glucose every 2-4 hours",
                                "Check ketones if glucose >250",
                                "Stay hydrated - drink fluids even if not eating",
                                "If ketones +, take 10-20% extra rapid-acting insulin",
                                "Call if ketones don't clear after 2 doses"
                            ]
                        }
                    ]
                },
                
                followUp: {
                    appointments: [
                        { type: "Endocrinology", timing: "1-2 weeks", purpose: "Insulin titration, A1c check, pump restart discussion" },
                        { type: "Diabetes Educator", timing: "1 week", purpose: "Pump restart training, review sick day management" },
                        { type: "Primary Care", timing: "4 weeks", purpose: "General follow-up, depression/burnout screening" }
                    ],
                    labsOrdered: "A1c at endocrine visit (will reflect pre-hospitalization control)"
                },
                
                patientVerification: {
                    title: "Teach-Back Verification",
                    questions: [
                        { q: "What would you do if you woke up with glucose of 320 and felt nauseous?", expected: "Check ketones, take correction dose, call provider or go to ED if ketones don't clear" },
                        { q: "What if your pump fails again?", expected: "Use backup insulin pens - glargine at night, lispro with meals" },
                        { q: "When should you come to the ED?", expected: "Can't keep fluids down, ketones won't clear, confusion or trouble breathing, glucose won't come down" }
                    ]
                },
                
                dayConclusion: {
                    summary: "Patient discharged on insulin glargine/lispro MDI regimen with plans for pump restart at educator visit. Completed comprehensive DKA prevention education with successful teach-back. Close follow-up arranged.",
                    clinicalPearl: "A successful DKA discharge includes: stable glucose on SQ insulin x24h, demonstrated self-management knowledge, backup supplies, and close follow-up. Up to 30% of DKA patients are readmitted within a year - education and follow-up are critical."
                }
            },
            
            // ==================== DAY 30 (2 WEEKS): FOLLOW-UP ====================
            day30: {
                title: "2-Week Endocrinology Follow-up",
                setting: "Outpatient Endocrinology Clinic",
                
                patientUpdate: {
                    subjective: "Feeling much better. No repeat DKA symptoms. Restarted pump 5 days ago with diabetes educator. Ordered backup pen supplies for home. Has been checking ketones when glucose high.",
                    glucoseLog: "Fasting 110-140, post-meals 140-200, occasional spikes to 220s after large meals. One low (68) after miscalculating carbs - treated appropriately.",
                    concerns: "Worried about this happening again. Admits she was in denial about needing backup supplies."
                },
                
                examination: {
                    vitals: { BP: "112/70", HR: 72, weight: "65 kg (unchanged)" },
                    exam: "Well-appearing. Pump site on abdomen looks healthy, no erythema. Previous site healed."
                },
                
                labResults: {
                    values: [
                        { test: "A1c", value: "8.4%", interpretation: "Slightly higher than 3 months ago (8.2%) - reflects recent DKA episode and preceding poor control" },
                        { test: "Fasting glucose", value: "128 mg/dL", interpretation: "Reasonable" },
                        { test: "BMP", value: "All normal", interpretation: "Creatinine normalized, electrolytes normal" }
                    ]
                },
                
                pumpReview: {
                    title: "Pump Settings Review",
                    currentSettings: {
                        basalRates: "0.8 u/hr overnight, 1.0 u/hr daytime",
                        carbRatio: "1:10 all day",
                        correctionFactor: "1:30",
                        target: "120 mg/dL"
                    },
                    adjustments: [
                        "Fasting glucoses acceptable - basal rates appropriate",
                        "Post-meal spikes suggest may need 1:9 ratio at dinner (larger meals)",
                        "One low event - reviewed carb counting, seems to have been miscalculation"
                    ]
                },
                
                preventionReview: {
                    title: "DKA Prevention - Checking In",
                    discussion: [
                        {
                            question: "What backup supplies do you have at home now?",
                            answer: "Patient shows photo: glargine pen, lispro pen, pen needles, blood ketone meter with strips"
                        },
                        {
                            question: "If your pump site looks red and you need to remove it, what's your plan?",
                            answer: "Insert new site in different location. If can't get pump working, switch to backup pens: glargine 20u at night, lispro 1:10 with meals. If ketones positive, call the office."
                        },
                        {
                            question: "How are you doing emotionally with diabetes management?",
                            answer: "Patient admits the hospitalization was 'scary' and served as a 'wake-up call.' She's been more diligent but also more anxious. Discussed resources for diabetes distress."
                        }
                    ]
                },
                
                longTermPlan: {
                    items: [
                        { issue: "A1c 8.4%", plan: "Goal <7.5% for young adult. Adjusting dinner carb ratio. CGM data review at next visit." },
                        { issue: "Diabetes distress", plan: "Referred to diabetes psychologist for support. Normal to feel anxious after DKA." },
                        { issue: "Pump management", plan: "Continue current settings with dinner ratio adjustment. Change sites every 2-3 days, rotate locations." },
                        { issue: "Preventive care", plan: "Annual eye exam ordered, annual urine microalbumin ordered, up-to-date on vaccines" }
                    ],
                    nextAppointment: "3 months for A1c recheck and continued management"
                },
                
                caseConclusion: {
                    summary: "24-year-old Type 1 diabetic doing well 2 weeks post-DKA discharge. Successfully restarted on insulin pump with backup supplies secured. A1c slightly elevated but expected to improve with better adherence. Addressing emotional aspects of living with diabetes.",
                    keyTakeaways: [
                        "DKA in Type 1 DM occurs rapidly (12-24h) without insulin - backup supplies are essential",
                        "Initial management: Fluids FIRST, then insulin (after confirming K+ ≥3.3)",
                        "Serum K+ is falsely elevated in DKA - total body K+ is depleted - always replace K+",
                        "Resolution requires: pH >7.3, HCO3 ≥18, AG <12 (not just glucose normalization)",
                        "When glucose <250, add dextrose to fluids - don't stop insulin until DKA resolved",
                        "Give SQ basal insulin 1-2h before stopping insulin drip to prevent recurrence",
                        "DKA prevention education, backup supplies, and close follow-up reduce readmissions",
                        "Address psychosocial factors (burnout, distress) - often the root cause of DKA"
                    ],
                    clinicalPearl: "The most dangerous time in DKA management is the transition from IV to SQ insulin. Give basal insulin with overlap, ensure K+ is adequate, and confirm the patient can eat before stopping the drip. Discharging too early or without proper education leads to recurrence."
                }
            }
        },

        // ==================== HEART FAILURE DEEP CASE ====================
        'hf-deep': {
            id: 'hf-deep',
            title: 'Acute Decompensated Heart Failure',
            subtitle: 'Understanding the neurohormonal cascade and GDMT optimization',
            category: 'Cardiology',
            difficulty: 'Advanced',
            estimatedTime: '55-70 min',
            tags: ['Hemodynamics', 'Diuretics', 'GDMT', 'Cardiorenal', 'BNP'],
            
            primer: {
                anatomy: {
                    title: "Cardiac Structure & Heart Failure Pathophysiology",
                    sections: [
                        {
                            title: "Left vs Right Heart Function",
                            content: "The heart functions as two pumps in series. The right heart receives systemic venous return and pumps to the pulmonary circulation. The left heart receives pulmonary venous return and pumps to the systemic circulation.",
                            keyPoints: [
                                "Left ventricle (LV): Thick-walled (handles systemic pressures ~120 mmHg), pumps to aorta",
                                "Right ventricle (RV): Thin-walled (pulmonary pressures ~25 mmHg), pumps to pulmonary artery",
                                "LV failure → blood backs up into lungs → pulmonary congestion (dyspnea, orthopnea, rales)",
                                "RV failure → blood backs up into body → systemic congestion (JVD, edema, ascites)"
                            ],
                            clinicalCorrelation: "Most patients with HF have LEFT-sided failure, but prolonged LV failure leads to pulmonary hypertension, which eventually causes RV failure too ('biventricular failure')."
                        },
                        {
                            title: "Ejection Fraction & HF Classification",
                            content: "EF = (EDV - ESV) / EDV × 100. Normal EF is 55-70%. Heart failure is classified by EF:",
                            keyPoints: [
                                "HFrEF (reduced EF): EF ≤40% - systolic dysfunction, weak squeeze",
                                "HFmrEF (mildly reduced): EF 41-49% - intermediate phenotype",
                                "HFpEF (preserved EF): EF ≥50% - diastolic dysfunction, stiff ventricle",
                                "Treatment differs! GDMT has strongest evidence in HFrEF",
                                "Echo also shows chamber size, wall motion, valves, diastolic function"
                            ],
                            clinicalCorrelation: "A patient can have severe HF symptoms with a normal EF! In HFpEF, the ventricle is stiff and can't relax properly - filling pressures are high even though contraction is preserved."
                        },
                        {
                            title: "The Neurohormonal Model",
                            content: "Heart failure triggers compensatory mechanisms that initially help but eventually cause harm:",
                            keyPoints: [
                                "↓ Cardiac output → ↓ renal perfusion → RAAS activation → Na/water retention, vasoconstriction",
                                "Sympathetic activation → ↑ HR, ↑ contractility, vasoconstriction → ↑ afterload, ↑ O2 demand",
                                "BNP/ANP release (cardiac wall stress) → vasodilation, natriuresis (beneficial but overwhelmed)",
                                "These 'compensations' cause remodeling: LV dilation, fibrosis, worsening function",
                                "GDMT targets these pathways: ACEi/ARB/ARNI (RAAS), beta-blockers (SNS), MRA (aldosterone)"
                            ],
                            clinicalCorrelation: "Understanding this cascade explains why we use drugs that seem counterintuitive. Beta-blockers slow the heart but improve outcomes because blocking chronic sympathetic overdrive allows reverse remodeling."
                        }
                    ]
                },
                
                physiology: {
                    title: "BNP, Diuretics, and the Cardiorenal Axis",
                    sections: [
                        {
                            title: "BNP: The Heart Failure Biomarker",
                            content: "B-type Natriuretic Peptide is released from ventricular myocytes in response to wall stretch/volume overload:",
                            keyPoints: [
                                "BNP/NT-proBNP: Higher = more wall stress, correlates with filling pressures",
                                "BNP <100 or NT-proBNP <300: Heart failure very unlikely as cause of dyspnea",
                                "BNP >400 or NT-proBNP >900: Heart failure very likely",
                                "Gray zone exists - use clinical context",
                                "NT-proBNP is renally cleared - levels higher in CKD",
                                "Obesity lowers BNP (adipose tissue clears it) - use lower thresholds"
                            ],
                            clinicalCorrelation: "BNP is most useful to EXCLUDE heart failure in someone with dyspnea. A normal BNP makes HF very unlikely. Trends are helpful too - rising BNP during hospitalization suggests inadequate decongestion."
                        },
                        {
                            title: "Diuretic Physiology & Loop Diuretics",
                            content: "Loop diuretics (furosemide, bumetanide, torsemide) inhibit the Na-K-2Cl cotransporter in the thick ascending limb of the loop of Henle:",
                            keyPoints: [
                                "Site of action: Thick ascending loop - where 25% of filtered Na is reabsorbed",
                                "Effect: Blocks Na/K/Cl reabsorption → massive natriuresis and diuresis",
                                "IV is more reliable in acute HF - gut edema impairs oral absorption",
                                "Diuretic resistance: Post-diuretic Na retention, hypoalbuminemia, reduced GFR",
                                "Electrolyte effects: Hypokalemia, hypomagnesemia, hypocalcemia, metabolic alkalosis",
                                "Ototoxicity with high doses or rapid IV push"
                            ],
                            clinicalCorrelation: "In acute decompensated HF, the goal is aggressive decongestion. 'The patient has a right to be dry.' Under-diuresis is more common and harmful than over-diuresis. Aim for net negative 1-2L/day."
                        },
                        {
                            title: "Cardiorenal Syndrome",
                            content: "The heart and kidneys are intimately connected. Heart failure often causes kidney dysfunction, and vice versa:",
                            keyPoints: [
                                "Type 1: Acute HF → acute kidney injury (low perfusion, venous congestion)",
                                "Type 2: Chronic HF → progressive CKD",
                                "Type 3: Acute kidney injury → acute cardiac dysfunction",
                                "Type 4: CKD → chronic cardiac dysfunction",
                                "Venous congestion raises renal venous pressure → reduces GFR (often more than low CO)",
                                "Decongestion often IMPROVES renal function even as creatinine transiently rises"
                            ],
                            clinicalCorrelation: "Don't reflexively stop diuretics when creatinine rises! If the patient is still congested, the creatinine rise is often from venous congestion. Continuing diuresis may actually improve kidney function."
                        }
                    ],
                    quiz: [
                        {
                            question: "A patient with HFrEF (EF 25%) presents with dyspnea and leg edema. Why do we use beta-blockers long-term, even though they reduce heart rate and contractility?",
                            options: [
                                "Beta-blockers increase ejection fraction acutely",
                                "Chronic sympathetic activation causes harmful remodeling - blocking it allows reverse remodeling",
                                "Beta-blockers are used primarily for rate control of atrial fibrillation",
                                "They reduce diuretic requirements"
                            ],
                            correctIndex: 1,
                            explanation: "In heart failure, chronic sympathetic nervous system activation causes myocyte death, fibrosis, and progressive ventricular dilation (adverse remodeling). Beta-blockers interrupt this process, allowing 'reverse remodeling' with improved EF over months. This is why we start low and go slow - the long-term benefits outweigh the short-term reduction in inotropy."
                        },
                        {
                            question: "During diuresis for acute HF, the creatinine rises from 1.2 to 1.8. The patient still has JVD and 2+ leg edema. What should you do?",
                            options: [
                                "Stop diuretics immediately to protect the kidneys",
                                "Switch to IV fluids to improve kidney perfusion",
                                "Continue diuresis - the patient is still congested and decongestion may improve renal function",
                                "Add dopamine for renal protection"
                            ],
                            correctIndex: 2,
                            explanation: "Venous congestion (elevated CVP) actually impairs renal function by raising renal venous pressure. A rising creatinine during diuresis doesn't always mean harm - if the patient is still congested, continuing diuresis often leads to improved kidney function once decongestion is achieved. This is counterintuitive but well-established."
                        }
                    ]
                }
            },
            
            longitudinalTimeline: [
                { day: 1, title: "Emergency Department", setting: "ED", timeLabel: "Hour 0" },
                { day: 2, title: "Hospital Day 1", setting: "Telemetry", timeLabel: "Day 1" },
                { day: 3, title: "Hospital Day 2", setting: "Telemetry", timeLabel: "Day 2" },
                { day: 4, title: "Hospital Day 3", setting: "Telemetry", timeLabel: "Day 3" },
                { day: 5, title: "Discharge", setting: "Floor", timeLabel: "Day 4" },
                { day: 30, title: "Follow-up", setting: "Clinic", timeLabel: "2 Weeks" }
            ],
            
            day1: {
                patientInfo: {
                    name: "Ryan Mitchell",
                    firstName: "Ryan",
                    lastName: "Mitchell",
                    age: 68,
                    gender: "male",
                    setting: "urgent_care",
                    chiefComplaint: "I've been getting more short of breath"
                },
                
                vitals: {
                    BP: "158/92",
                    HR: 98,
                    RR: 24,
                    Temp: "98.2°F",
                    SpO2: "91% RA",
                    weight: "98 kg (baseline 90 kg 2 weeks ago)"
                },
                
                hpiSections: [
                    {
                        question: "Symptom onset and progression?",
                        answer: "Progressive dyspnea over 2 weeks. Initially only with exertion (climbing stairs), now short of breath walking to bathroom. Wakes up at night gasping for air 2-3 times (PND). Sleeps on 4 pillows (was 2). Legs increasingly swollen - can't fit into shoes.",
                        mechanismLink: {
                            title: "Why orthopnea and PND?",
                            explanation: "When lying flat, blood redistributes from legs to central circulation, increasing preload. A failing LV can't handle this, so pulmonary pressures rise → pulmonary edema → dyspnea. Sitting up moves blood back to legs, reducing preload. PND is delayed because fluid redistribution takes time."
                        }
                    },
                    {
                        question: "Cardiac history?",
                        answer: "Known HFrEF (EF 30% on echo 1 year ago). Prior MI 5 years ago with stent to LAD. Also has HTN, T2DM. On lisinopril 10mg, carvedilol 12.5mg BID, furosemide 40mg daily, atorvastatin 80mg. Admits he ran out of furosemide 10 days ago and didn't refill.",
                        mechanismLink: {
                            title: "Why does stopping diuretics cause such rapid decompensation?",
                            explanation: "In chronic HF, the kidneys are 'reset' to retain sodium avidly (RAAS activation). When diuretics are stopped, this sodium retention goes unchecked → rapid fluid accumulation. 8 kg weight gain = 8 L of fluid! This extra volume overwhelms the failing heart."
                        }
                    },
                    {
                        question: "Diet and medication adherence?",
                        answer: "Admits to eating more salty foods recently (holidays, family visiting). Missed carvedilol doses 'a few times' because he ran out temporarily. Checks blood sugar but hasn't checked weight regularly.",
                        mechanismLink: {
                            title: "Why is dietary sodium so important in HF?",
                            explanation: "Normally kidneys excrete excess sodium. In HF with RAAS activation, the kidneys are 'programmed' to retain sodium. Adding dietary sodium directly translates to fluid retention. A single salty meal can cause 1-2 kg weight gain in a HF patient."
                        }
                    }
                ],
                
                physicalExam: {
                    general: "Sitting upright, tripoding, appears uncomfortable, speaking in short sentences",
                    HEENT: "JVP elevated to angle of jaw (~15 cm H2O)",
                    cardiovascular: "Tachycardic, regular, S3 gallop present, no murmurs, PMI displaced laterally",
                    respiratory: "Bibasilar crackles 1/3 up, no wheezes, increased work of breathing",
                    abdomen: "Soft, mildly distended, liver edge palpable 3 cm below costal margin, + hepatojugular reflux",
                    extremities: "3+ pitting edema to thighs bilaterally, warm, 2+ pulses",
                    neuro: "Alert and oriented, no focal deficits",
                    examFindings: [
                        {
                            finding: "S3 gallop",
                            explanation: "An S3 is caused by rapid ventricular filling hitting a volume-overloaded, dilated ventricle. It's nearly pathognomonic for HF in adults (specificity >90%)."
                        },
                        {
                            finding: "Elevated JVP",
                            explanation: "JVP estimates right atrial pressure. Elevation indicates systemic venous congestion, usually from RV failure secondary to chronic LV failure."
                        },
                        {
                            finding: "Hepatojugular reflux",
                            explanation: "Pressing on the liver forces venous blood toward the heart. If JVP rises and stays elevated, the right heart can't handle the extra preload - indicates RV dysfunction."
                        }
                    ]
                },
                
                initialLabs: {
                    BMP: { Na: 134, K: 4.8, Cl: 98, CO2: 24, BUN: 42, Cr: 1.6, Glucose: 168 },
                    CBC: { WBC: 7.2, Hgb: 11.8, Plt: 210 },
                    cardiac: { BNP: 1840, Troponin: 0.04 },
                    other: { proBNP: 4200, lactate: 1.4 },
                    labInterpretation: [
                        {
                            lab: "BNP 1840",
                            meaning: "Markedly elevated - confirms significant cardiac wall stress/volume overload. Correlates with severity."
                        },
                        {
                            lab: "Creatinine 1.6 (baseline 1.1)",
                            meaning: "Elevated from baseline - cardiorenal syndrome. Could be from low perfusion OR venous congestion (often the latter in acute decompensation)."
                        },
                        {
                            lab: "Sodium 134",
                            meaning: "Mild hyponatremia - common in HF due to water retention exceeding sodium retention (ADH effect). Associated with worse prognosis."
                        },
                        {
                            lab: "Troponin 0.04",
                            meaning: "Mildly elevated - 'demand ischemia' from tachycardia and increased wall stress. Not an acute MI, but does indicate myocardial injury."
                        }
                    ]
                },
                
                imaging: {
                    cxr: {
                        findings: "Cardiomegaly, bilateral pleural effusions (R>L), pulmonary vascular congestion, Kerley B lines",
                        interpretation: "Classic radiographic findings of acute decompensated heart failure with pulmonary edema."
                    }
                },
                
                initialManagement: {
                    title: "ED Management of Acute Decompensated HF",
                    interventions: [
                        {
                            action: "IV Furosemide 80mg",
                            rationale: "Aggressive diuresis is cornerstone. Dose = 2x home dose (or higher if diuretic-resistant). IV preferred - gut edema impairs PO absorption."
                        },
                        {
                            action: "Supplemental O2 to maintain SpO2 >92%",
                            rationale: "Hypoxemia from pulmonary edema. If severe, consider BiPAP (reduces work of breathing and preload)."
                        },
                        {
                            action: "Continuous telemetry",
                            rationale: "HF patients at risk for arrhythmias, especially with electrolyte shifts during diuresis."
                        },
                        {
                            action: "Hold carvedilol temporarily",
                            rationale: "In acute decompensation with low output signs, can temporarily hold or reduce beta-blocker. Will restart before discharge once stable."
                        },
                        {
                            action: "Strict I/O, daily weights",
                            rationale: "Weight is the best measure of fluid status. Goal: net negative 1-2 L/day. 1 L fluid = 1 kg weight."
                        }
                    ]
                },
                
                clinicalReasoning: [
                    {
                        question: "What is the precipitant of this decompensation?",
                        keyPoints: [
                            "Medication non-adherence (stopped furosemide)",
                            "Dietary indiscretion (high sodium)",
                            "Possible missed carvedilol doses",
                            "No clear infection or new ischemia as trigger"
                        ],
                        teachingPoint: "Most ADHF is precipitated by modifiable factors: non-adherence, dietary indiscretion, or new arrhythmia. Always identify the precipitant to prevent recurrence."
                    }
                ],
                
                dayConclusion: {
                    summary: "68-year-old male with HFrEF presenting with acute decompensated heart failure triggered by medication non-adherence and dietary indiscretion. Started on IV diuresis with good initial response.",
                    teachingPoint: "In ADHF, the immediate goal is relieving congestion ('make the patient dry'). Volume status assessment (JVP, edema, weight, BNP) guides therapy. Diuresis is the mainstay - don't be timid."
                }
            }
        },

        // ==================== SEPSIS DEEP CASE ====================
        'sepsis-deep': {
            id: 'sepsis-deep',
            title: 'Sepsis & Septic Shock',
            subtitle: 'Early recognition and the sepsis bundle',
            category: 'Critical Care',
            difficulty: 'Advanced',
            estimatedTime: '50-65 min',
            tags: ['Infection', 'Resuscitation', 'Vasopressors', 'Lactate', 'Antibiotics'],
            
            primer: {
                anatomy: {
                    title: "Sepsis Pathophysiology: From Infection to Organ Dysfunction",
                    sections: [
                        {
                            title: "Definition of Sepsis",
                            content: "Sepsis is life-threatening organ dysfunction caused by a dysregulated host response to infection. It's not just infection - it's the body's harmful response to infection.",
                            keyPoints: [
                                "Sepsis = Infection + Organ Dysfunction (SOFA score ≥2)",
                                "Septic Shock = Sepsis + Vasopressors needed + Lactate >2 despite fluids",
                                "SIRS criteria (fever, tachycardia, tachypnea, WBC) are sensitive but not specific",
                                "qSOFA (quick SOFA): RR ≥22, SBP ≤100, altered mentation - bedside screening tool",
                                "Mortality: Sepsis ~10%, Septic Shock ~40%"
                            ],
                            clinicalCorrelation: "The key concept is ORGAN DYSFUNCTION. A patient with pneumonia and stable vitals has infection. A patient with pneumonia + confusion + hypotension + elevated lactate has sepsis."
                        },
                        {
                            title: "The Inflammatory Cascade",
                            content: "Sepsis involves a complex interplay of inflammation, coagulation, and endothelial dysfunction:",
                            keyPoints: [
                                "PAMPs (pathogen-associated molecular patterns) trigger immune response",
                                "Massive cytokine release: TNF-α, IL-1, IL-6 → systemic inflammation",
                                "Endothelial activation → vasodilation, capillary leak → hypotension, edema",
                                "Microvascular thrombosis → organ ischemia",
                                "Mitochondrial dysfunction → cellular energy failure",
                                "Later: immunoparalysis (immune suppression) → secondary infections"
                            ],
                            clinicalCorrelation: "The 'warm shock' of early sepsis (vasodilation, warm extremities, bounding pulses) differs from 'cold shock' (vasoconstriction, cool extremities) seen later or in cardiogenic shock. Recognizing the pattern helps identify the etiology."
                        },
                        {
                            title: "Lactate: The Sepsis Biomarker",
                            content: "Lactate is a key marker of tissue hypoperfusion and cellular dysfunction in sepsis:",
                            keyPoints: [
                                "Normal lactate: <2 mmol/L",
                                "Elevated lactate sources: Anaerobic metabolism (hypoperfusion), accelerated aerobic glycolysis (stress), impaired clearance (liver dysfunction)",
                                "Lactate >4 mmol/L: Associated with high mortality, defines 'cryptic shock'",
                                "Lactate clearance: Decreasing lactate indicates improving perfusion",
                                "Serial lactates every 2-4 hours guide resuscitation",
                                "Target: Lactate normalization or >10-20% decrease per check"
                            ],
                            clinicalCorrelation: "A patient with infection and lactate of 4.5 mmol/L has septic shock by definition, EVEN if blood pressure is normal. This is 'cryptic shock' - tissue hypoperfusion without overt hypotension."
                        }
                    ]
                },
                
                physiology: {
                    title: "The Sepsis Bundle & Resuscitation Principles",
                    sections: [
                        {
                            title: "Hour-1 Bundle (Surviving Sepsis Campaign)",
                            content: "Time-critical interventions that must begin within 1 hour of sepsis recognition:",
                            keyPoints: [
                                "1. Measure lactate (repeat if >2 to guide resuscitation)",
                                "2. Obtain blood cultures BEFORE antibiotics (but don't delay abx)",
                                "3. Administer broad-spectrum antibiotics",
                                "4. Begin 30 mL/kg crystalloid for hypotension or lactate ≥4",
                                "5. Start vasopressors if hypotensive during/after fluid resuscitation",
                                "Each hour of antibiotic delay increases mortality ~7%"
                            ],
                            clinicalCorrelation: "The bundle is 'all or none' - completing all elements within an hour saves lives. Studies show hospitals that achieve bundle compliance have significantly lower mortality."
                        },
                        {
                            title: "Fluid Resuscitation",
                            content: "Aggressive early fluid resuscitation is a cornerstone of sepsis management:",
                            keyPoints: [
                                "Initial bolus: 30 mL/kg crystalloid (LR or NS) within 3 hours",
                                "For 70 kg patient: 2.1 L of crystalloid",
                                "Reassess after each bolus: BP, HR, UOP, lactate, cap refill",
                                "Fluid responsiveness: Will more fluid increase cardiac output?",
                                "Dynamic measures: Passive leg raise, pulse pressure variation",
                                "Over-resuscitation causes harm: pulmonary edema, abdominal compartment syndrome"
                            ],
                            clinicalCorrelation: "The initial 30 mL/kg is mandatory. After that, assess fluid responsiveness before giving more. Not everyone needs 6-8 liters - individualize based on response."
                        },
                        {
                            title: "Vasopressors & Targets",
                            content: "When fluids alone don't restore perfusion, vasopressors are needed:",
                            keyPoints: [
                                "Norepinephrine: First-line vasopressor in septic shock",
                                "Mechanism: α1 (vasoconstriction) > β1 (inotropy)",
                                "Target MAP: ≥65 mmHg (higher in chronic hypertension)",
                                "Vasopressin: Add as second agent at norepinephrine 0.25-0.5 mcg/kg/min",
                                "Epinephrine: Alternative second agent, especially if cardiac dysfunction",
                                "Central line preferred but can start peripherally if needed urgently"
                            ],
                            clinicalCorrelation: "Don't delay vasopressors waiting for 'enough' fluids or central access. Prolonged hypotension kills. Start norepinephrine peripherally while working on central access if needed."
                        },
                        {
                            title: "Source Control",
                            content: "Antibiotics alone may not clear infection if there's an undrained source:",
                            keyPoints: [
                                "Identify the source: Lungs, urine, abdomen, skin/soft tissue, lines",
                                "Imaging: CT abdomen for intra-abdominal source, echo for endocarditis",
                                "Drain abscesses, remove infected catheters, debride necrotic tissue",
                                "Timing: Within 6-12 hours of diagnosis when possible",
                                "Delay of source control = ongoing sepsis despite antibiotics",
                                "Balance: Patient must be stable enough for procedure"
                            ],
                            clinicalCorrelation: "The classic example: cholangitis won't resolve without biliary drainage. Necrotizing fasciitis won't resolve without debridement. Always ask: 'Is there a source that needs intervention?'"
                        }
                    ],
                    quiz: [
                        {
                            question: "A 72-year-old with UTI has HR 110, BP 88/52, RR 24, T 101.8°F, lactate 4.2 mmol/L. Blood cultures are drawn. What is the most time-critical next step?",
                            options: [
                                "CT scan to rule out abscess",
                                "Central line placement for vasopressors",
                                "IV broad-spectrum antibiotics",
                                "30 mL/kg crystalloid bolus"
                            ],
                            correctIndex: 2,
                            explanation: "Antibiotics are the most time-critical intervention! Each hour of delay increases mortality by ~7%. Fluids are also urgent and can be given simultaneously, but antibiotics should not wait for CT, central line, or anything else. Draw cultures, then antibiotics immediately."
                        },
                        {
                            question: "After 2L of crystalloid, the same patient has BP 76/48, HR 118, lactate 3.8 (down from 4.2). What is the next step?",
                            options: [
                                "Give another 2L crystalloid bolus",
                                "Start norepinephrine to achieve MAP ≥65",
                                "Wait and reassess in 1 hour",
                                "Order echocardiogram to assess cardiac function"
                            ],
                            correctIndex: 1,
                            explanation: "This patient has received initial fluids but remains hypotensive (MAP ~57). The lactate is improving which is encouraging, but the MAP is below target. Start norepinephrine to achieve MAP ≥65 mmHg. Don't keep pushing fluids hoping BP will improve - vasopressors are indicated now."
                        }
                    ]
                }
            },
            
            longitudinalTimeline: [
                { day: 1, title: "Emergency Department", setting: "ED", timeLabel: "Hour 0" },
                { day: 2, title: "ICU Hour 6", setting: "ICU", timeLabel: "Hour 6" },
                { day: 3, title: "ICU Day 2", setting: "ICU", timeLabel: "Day 2" },
                { day: 4, title: "Step-Down", setting: "Floor", timeLabel: "Day 4" },
                { day: 5, title: "Discharge", setting: "Floor", timeLabel: "Day 7" },
                { day: 30, title: "Follow-up", setting: "Clinic", timeLabel: "4 Weeks" }
            ],
            
            day1: {
                patientInfo: {
                    name: "Maria King",
                    firstName: "Maria",
                    lastName: "King",
                    age: 67,
                    gender: "female",
                    setting: "urgent_care",
                    chiefComplaint: "Confusion, fever, and cough"
                },
                
                vitals: {
                    BP: "84/52",
                    HR: 118,
                    RR: 26,
                    Temp: "102.4°F",
                    SpO2: "89% RA"
                },
                
                hpiSections: [
                    {
                        question: "Symptom onset and progression?",
                        answer: "Per husband: 3 days of worsening cough with yellow-green sputum. Low-grade fever at home. Today found her confused, couldn't get out of bed, felt 'burning hot.' Called 911.",
                        mechanismLink: {
                            title: "Why confusion in sepsis?",
                            explanation: "Septic encephalopathy results from: cytokine-mediated neuroinflammation, microglial activation, blood-brain barrier disruption, altered cerebral blood flow, and metabolic derangements. It's an early sign of organ dysfunction and part of qSOFA."
                        }
                    },
                    {
                        question: "Medical history?",
                        answer: "COPD (on home O2 1L at night), Type 2 DM (A1c 8.9% last month), HTN, former smoker (40 pack-years, quit 5 years ago). Lives with husband who helps with medications.",
                        mechanismLink: {
                            title: "Why is she high-risk for severe sepsis?",
                            explanation: "Age >65, COPD (impaired pulmonary defense), diabetes (impaired immune function, microvascular disease), and smoking history all increase susceptibility to severe infections and worse outcomes from sepsis."
                        }
                    },
                    {
                        question: "Any recent healthcare exposures?",
                        answer: "No recent hospitalizations. No nursing home. Did have an outpatient bronchoscopy 1 month ago for evaluation of a lung nodule (benign). No sick contacts.",
                        mechanismLink: {
                            title: "Why does this matter for antibiotic selection?",
                            explanation: "Healthcare-associated infections may involve resistant organisms (MRSA, Pseudomonas). This patient's bronchoscopy was >30 days ago, so she's likely community-acquired. But her COPD means Pseudomonas is still a consideration for respiratory infections."
                        }
                    }
                ],
                
                physicalExam: {
                    general: "Acutely ill appearing, confused, diaphoretic, rigoring",
                    HEENT: "Dry mucous membranes, no meningeal signs, pupils equal and reactive",
                    cardiovascular: "Tachycardic, regular, no murmurs, bounding peripheral pulses, warm extremities with delayed cap refill (4 seconds)",
                    respiratory: "Tachypneic, increased work of breathing, bronchial breath sounds RLL, egophony present RLL",
                    abdomen: "Soft, non-tender, no hepatosplenomegaly",
                    extremities: "No edema, warm, mottled appearance to knees",
                    neuro: "Alert to self only, following simple commands, no focal deficits",
                    examFindings: [
                        {
                            finding: "Bounding pulses with delayed cap refill",
                            explanation: "Classic 'warm shock' - vasodilation (bounding pulses, warm skin) but inadequate tissue perfusion (delayed cap refill, mottling). High cardiac output, low systemic vascular resistance."
                        },
                        {
                            finding: "Egophony RLL",
                            explanation: "E-to-A changes indicate consolidated lung (sound transmission through fluid/solid is different). Points to pneumonia as the infectious source."
                        },
                        {
                            finding: "Mottling to knees",
                            explanation: "Mottling indicates microcirculatory dysfunction and is associated with elevated lactate and mortality. Mottling extent correlates with severity."
                        }
                    ]
                },
                
                initialLabs: {
                    BMP: { Na: 138, K: 4.2, Cl: 102, CO2: 18, BUN: 38, Cr: 1.9, Glucose: 224 },
                    CBC: { WBC: 18.4, Hgb: 13.2, Plt: 128 },
                    other: { lactate: 4.8, procalcitonin: 12.4 },
                    ABG: { pH: 7.28, pCO2: 28, pO2: 62, HCO3: 13 },
                    labInterpretation: [
                        {
                            lab: "Lactate 4.8 mmol/L",
                            meaning: "Significantly elevated - indicates tissue hypoperfusion. Defines this as septic SHOCK (not just sepsis). Lactate >4 is a critical threshold."
                        },
                        {
                            lab: "WBC 18.4 with left shift",
                            meaning: "Leukocytosis with bandemia indicates acute bacterial infection. (Note: Some septic patients have LOW WBC - immunosuppression or overwhelming infection.)"
                        },
                        {
                            lab: "Platelets 128K (low)",
                            meaning: "Thrombocytopenia in sepsis indicates consumptive coagulopathy - DIC is common in severe sepsis. Monitor for bleeding, check fibrinogen and D-dimer."
                        },
                        {
                            lab: "Creatinine 1.9 (baseline 0.9)",
                            meaning: "Acute kidney injury - sepsis-induced AKI from hypoperfusion and inflammation. Part of the organ dysfunction defining sepsis."
                        },
                        {
                            lab: "ABG: Metabolic acidosis with respiratory compensation",
                            meaning: "Low HCO3 with low pCO2 - she's hyperventilating to blow off CO2 and compensate for metabolic acidosis (from lactate)."
                        }
                    ]
                },
                
                imaging: {
                    cxr: {
                        findings: "Right lower lobe consolidation with air bronchograms, no pleural effusion",
                        interpretation: "Community-acquired pneumonia, likely bacterial. This is the sepsis source."
                    }
                },
                
                initialManagement: {
                    title: "Hour-1 Sepsis Bundle Execution",
                    interventions: [
                        {
                            action: "Blood cultures x2 (different sites) BEFORE antibiotics",
                            rationale: "Cultures identify organism and guide de-escalation. But don't delay antibiotics more than a few minutes - timing is critical."
                        },
                        {
                            action: "Ceftriaxone 2g IV + Azithromycin 500mg IV",
                            rationale: "CAP coverage: Ceftriaxone covers S. pneumoniae, H. flu, most Enterobacteriaceae. Azithromycin covers atypicals (Legionella, Mycoplasma). Given severity, some add vancomycin for MRSA."
                        },
                        {
                            action: "30 mL/kg crystalloid bolus (2.1L for her 70kg)",
                            rationale: "Mandatory initial resuscitation for hypotension or lactate ≥4. Use crystalloid (LR preferred). Give rapidly over 30-60 minutes."
                        },
                        {
                            action: "Norepinephrine started at 5 mcg/min, titrating to MAP ≥65",
                            rationale: "After fluids, MAP still 58 mmHg. Start vasopressor - don't keep pushing fluids hoping BP will improve. Target MAP ≥65 (or higher if chronically hypertensive)."
                        },
                        {
                            action: "Repeat lactate in 2 hours",
                            rationale: "Lactate clearance guides adequacy of resuscitation. Target >10% decrease or normalization. If not improving, reassess and intensify therapy."
                        }
                    ]
                },
                
                clinicalReasoning: [
                    {
                        question: "Does this patient have sepsis or septic shock?",
                        keyPoints: [
                            "Sepsis: Suspected infection + organ dysfunction (qSOFA ≥2 or SOFA ≥2)",
                            "This patient: Infection (pneumonia) + AKI + Confusion + Hypotension + Lactate 4.8",
                            "Septic Shock: Sepsis + vasopressors needed to maintain MAP ≥65 + lactate >2 despite adequate fluid resuscitation",
                            "She meets SEPTIC SHOCK criteria: requiring norepinephrine, lactate 4.8"
                        ],
                        teachingPoint: "Lactate ≥4 mmol/L, even without hypotension, indicates shock. This 'cryptic shock' carries the same mortality as overt hypotension. Always check lactate!"
                    }
                ],
                
                dayConclusion: {
                    summary: "67-year-old female with COPD presenting with septic shock from community-acquired pneumonia. Hour-1 bundle completed: cultures, antibiotics, fluids, vasopressors initiated. Lactate 4.8 indicates severe tissue hypoperfusion.",
                    teachingPoint: "The Hour-1 Bundle saves lives. Every hour of antibiotic delay increases mortality. Don't wait for test results, imaging, or procedures before starting antibiotics and fluids."
                }
            }
        },

        // ==================== ACUTE KIDNEY INJURY DEEP CASE ====================
        'aki-deep': {
            id: 'aki-deep',
            title: 'Acute Kidney Injury',
            subtitle: 'Pre-renal, intrinsic, and post-renal evaluation',
            category: 'Nephrology',
            difficulty: 'Intermediate',
            estimatedTime: '45-60 min',
            tags: ['Electrolytes', 'Fluids', 'Urinalysis', 'FeNa', 'Dialysis'],
            
            primer: {
                anatomy: {
                    title: "Renal Physiology & AKI Classification",
                    sections: [
                        {
                            title: "The Nephron: Filtration to Excretion",
                            content: "Each kidney contains ~1 million nephrons. Understanding nephron anatomy helps localize AKI:",
                            keyPoints: [
                                "Glomerulus: Filters plasma → 180 L/day ultrafiltrate (GFR ~120 mL/min)",
                                "Proximal tubule: Reabsorbs 65% of Na, water, glucose, amino acids, HCO3",
                                "Loop of Henle: Concentrating mechanism, 25% Na reabsorption (loop diuretics act here)",
                                "Distal tubule: Fine-tuning of Na/K balance, aldosterone-sensitive",
                                "Collecting duct: Final concentration via ADH, acid-base fine-tuning"
                            ],
                            clinicalCorrelation: "Different parts of the nephron are susceptible to different insults: proximal tubule is vulnerable to ischemia and toxins (aminoglycosides, contrast), loop of Henle to casts in rhabdomyolysis."
                        },
                        {
                            title: "AKI Classification: Pre-renal, Intrinsic, Post-renal",
                            content: "AKI is defined as a rapid decrease in kidney function. Classification by location helps guide management:",
                            keyPoints: [
                                "PRE-RENAL (55-60%): Reduced perfusion → kidneys working but under-perfused",
                                "Causes: Hypovolemia, HF, sepsis, NSAIDs/ACEi (functional)",
                                "INTRINSIC (35-40%): Kidney parenchyma damaged",
                                "Causes: ATN (ischemic, toxic), AIN (drugs), glomerulonephritis",
                                "POST-RENAL (5-10%): Obstruction to urine flow",
                                "Causes: BPH, stones, tumor, retroperitoneal fibrosis"
                            ],
                            clinicalCorrelation: "Pre-renal AKI is REVERSIBLE with fluid resuscitation. If prolonged, it becomes intrinsic (ATN). Always check post-renal first - it's easily diagnosed and treated with catheter or stent."
                        },
                        {
                            title: "KDIGO Staging of AKI",
                            content: "AKI is staged by creatinine rise or urine output decrease:",
                            keyPoints: [
                                "Stage 1: Cr rise 1.5-1.9x baseline OR rise ≥0.3 mg/dL OR UOP <0.5 mL/kg/h for 6-12h",
                                "Stage 2: Cr rise 2.0-2.9x baseline OR UOP <0.5 mL/kg/h for ≥12h",
                                "Stage 3: Cr rise ≥3x baseline OR Cr ≥4.0 OR RRT initiation OR UOP <0.3 mL/kg/h for ≥24h",
                                "Baseline: Lowest Cr in past 3 months (or estimate if unknown)",
                                "Higher stage = higher mortality and worse long-term renal outcomes"
                            ],
                            clinicalCorrelation: "A Cr of 2.0 in a patient with baseline 0.8 (Stage 2-3) is much more concerning than Cr 2.0 in someone with baseline 1.5 (Stage 1). Always establish baseline!"
                        }
                    ]
                },
                
                physiology: {
                    title: "Diagnosing the Cause: Labs, Urinalysis, and Imaging",
                    sections: [
                        {
                            title: "FeNa and FEUrea: Pre-renal vs. ATN",
                            content: "These calculations help distinguish pre-renal AKI (avid sodium retention) from ATN (tubular damage):",
                            keyPoints: [
                                "FeNa = (UNa × PCr) / (PNa × UCr) × 100",
                                "FeNa <1%: Pre-renal (tubules working, retaining sodium)",
                                "FeNa >2%: ATN (tubules damaged, can't retain sodium)",
                                "CAVEAT: Diuretics increase FeNa regardless of cause",
                                "FEUrea: Use if on diuretics. <35% suggests pre-renal",
                                "Contrast nephropathy and rhabdo can have low FeNa despite ATN"
                            ],
                            clinicalCorrelation: "FeNa is most useful when the clinical picture is unclear. If a patient is clearly volume-depleted and responds to fluids, you don't need FeNa. Use it for the tricky cases."
                        },
                        {
                            title: "Urine Microscopy: The Liquid Biopsy",
                            content: "Urine sediment examination provides clues to the cause of AKI:",
                            keyPoints: [
                                "Bland sediment (few cells/casts): Pre-renal or post-renal",
                                "Muddy brown granular casts: ATN (epithelial cell debris)",
                                "WBC casts: Pyelonephritis or interstitial nephritis",
                                "RBC casts: Glomerulonephritis (always pathologic!)",
                                "Eosinophiluria: Allergic interstitial nephritis (though low sensitivity)",
                                "Crystals: Oxalate (ethylene glycol), uric acid (tumor lysis)"
                            ],
                            clinicalCorrelation: "RBC casts are the smoking gun for glomerulonephritis - they form in the tubules when there's glomerular bleeding. Finding them should prompt urgent nephrology consult and consideration of immunosuppression."
                        },
                        {
                            title: "When to Image",
                            content: "Imaging is essential for diagnosing post-renal AKI and evaluating renal anatomy:",
                            keyPoints: [
                                "Renal ultrasound: First-line for all AKI - looking for hydronephrosis (obstruction)",
                                "Hydronephrosis = dilated collecting system = obstruction until proven otherwise",
                                "False negatives: Early obstruction, dehydration (non-dilated), encasing tumor",
                                "Bladder scan/Foley: Large post-void residual suggests outlet obstruction",
                                "CT without contrast: Stones, masses, retroperitoneal disease",
                                "Renal Doppler: Renal artery stenosis, thrombosis"
                            ],
                            clinicalCorrelation: "Every AKI patient should get a renal ultrasound (unless clearly pre-renal and improving). Post-renal AKI is reversible but can cause permanent damage if not relieved promptly."
                        }
                    ],
                    quiz: [
                        {
                            question: "A patient has Cr 3.2 (baseline 1.0). FeNa is 0.4%, urine is concentrated (SG 1.025), and sediment shows hyaline casts only. Most likely cause?",
                            options: [
                                "Acute tubular necrosis",
                                "Pre-renal azotemia",
                                "Acute interstitial nephritis",
                                "Post-renal obstruction"
                            ],
                            correctIndex: 1,
                            explanation: "Low FeNa (<1%) indicates avid sodium retention - the tubules are WORKING. Concentrated urine and bland sediment are also consistent with pre-renal AKI. The kidneys are responding appropriately to perceived volume depletion. Give fluids!"
                        },
                        {
                            question: "Same patient receives 2L NS, but Cr rises to 4.0. FeNa is now 3.2%, and microscopy shows muddy brown casts. What happened?",
                            options: [
                                "The patient developed contrast nephropathy",
                                "Pre-renal AKI progressed to ATN",
                                "Post-renal obstruction developed",
                                "Acute interstitial nephritis from the saline"
                            ],
                            correctIndex: 1,
                            explanation: "Prolonged pre-renal state (sustained hypoperfusion) leads to ischemic injury of the tubules → ATN. Now FeNa is high (tubules can't retain sodium) and muddy brown casts appear (sloughed tubular cells). This is why prompt treatment of pre-renal AKI is critical."
                        }
                    ]
                }
            },
            
            longitudinalTimeline: [
                { day: 1, title: "Emergency Department", setting: "ED", timeLabel: "Day 1" },
                { day: 2, title: "Hospital Day 2", setting: "Floor", timeLabel: "Day 2" },
                { day: 3, title: "Hospital Day 3", setting: "Floor", timeLabel: "Day 3" },
                { day: 4, title: "Hospital Day 5", setting: "Floor", timeLabel: "Day 5" },
                { day: 5, title: "Discharge", setting: "Floor", timeLabel: "Day 7" },
                { day: 30, title: "Follow-up", setting: "Clinic", timeLabel: "2 Weeks" }
            ],
            
            day1: {
                patientInfo: {
                    name: "Joseph Perez",
                    firstName: "Joseph",
                    lastName: "Perez",
                    age: 72,
                    gender: "male",
                    setting: "urgent_care",
                    chiefComplaint: "Generalized weakness and decreased urine output"
                },
                
                vitals: {
                    BP: "98/58",
                    HR: 96,
                    RR: 18,
                    Temp: "98.4°F",
                    SpO2: "96% RA",
                    weight: "76 kg"
                },
                
                hpiSections: [
                    {
                        question: "Symptom onset and progression?",
                        answer: "5 days of diarrhea and vomiting from 'stomach flu.' Decreased oral intake. Wife noticed he's barely urinating for past 2 days. Today felt too weak to get out of bed.",
                        mechanismLink: {
                            title: "Why does volume loss cause AKI?",
                            explanation: "The kidneys receive 20-25% of cardiac output for filtration. With hypovolemia, cardiac output drops and renal perfusion decreases. Below a critical threshold, GFR drops sharply. The kidneys can autoregulate, but not if MAP <65 or with RAAS inhibitors."
                        }
                    },
                    {
                        question: "Medications?",
                        answer: "Lisinopril 20mg for HTN, ibuprofen 600mg TID for knee arthritis ('been taking it every day for the past week because of increased pain'). Metformin 1000mg BID for diabetes.",
                        mechanismLink: {
                            title: "How do NSAIDs and ACEi worsen AKI?",
                            explanation: "NSAID (ibuprofen): Blocks prostaglandin-mediated afferent arteriolar dilation → reduced renal blood flow. ACEi (lisinopril): Blocks angiotensin II-mediated efferent arteriolar constriction → reduced glomerular filtration pressure. Together, they create a 'perfect storm' for AKI in hypovolemic patients."
                        }
                    },
                    {
                        question: "Urinary symptoms?",
                        answer: "Minimal urine output - wife estimates maybe a cup total yesterday. Dark yellow color. No dysuria, hematuria, or flank pain. Has BPH but usually voids without difficulty.",
                        mechanismLink: {
                            title: "Why is oliguria significant?",
                            explanation: "Oliguria (<400 mL/day or <0.5 mL/kg/h) indicates either severe reduction in GFR (pre-renal, ATN) or obstruction. Anuria (<100 mL/day) suggests complete obstruction or bilateral cortical necrosis."
                        }
                    }
                ],
                
                physicalExam: {
                    general: "Elderly male appearing fatigued, dry skin",
                    HEENT: "Dry mucous membranes, decreased skin turgor, sunken eyes",
                    cardiovascular: "Tachycardic, regular, no murmurs, flat JVP",
                    respiratory: "Clear to auscultation",
                    abdomen: "Soft, non-distended, no suprapubic fullness, mild diffuse tenderness",
                    extremities: "No edema, cool extremities, cap refill 4 seconds",
                    neuro: "Alert, oriented, no asterixis"
                },
                
                initialLabs: {
                    BMP: { Na: 132, K: 5.8, Cl: 96, CO2: 18, BUN: 86, Cr: 4.2, Glucose: 110 },
                    CBC: { WBC: 8.2, Hgb: 14.8, Plt: 245 },
                    urinalysis: { SG: 1.028, pH: 5.5, protein: "trace", blood: "negative", leuc: "negative", nitrite: "negative" },
                    urineChemistries: { UNa: 8, UCr: 142 },
                    labInterpretation: [
                        {
                            lab: "Creatinine 4.2 (baseline 1.1 from records)",
                            meaning: "Nearly 4x baseline - this is KDIGO Stage 3 AKI. Severe acute kidney injury requiring urgent evaluation and management."
                        },
                        {
                            lab: "BUN/Cr ratio = 20:1",
                            meaning: "Elevated ratio suggests pre-renal state (urea reabsorbed more than creatinine in low-flow states). Typical pre-renal ratio is >20:1."
                        },
                        {
                            lab: "Potassium 5.8",
                            meaning: "Hyperkalemia - the kidneys normally excrete K+. With AKI + ACEi (which ↓ aldosterone), K+ rises. Need to check EKG and treat if elevated."
                        },
                        {
                            lab: "FeNa calculated: 0.3%",
                            meaning: "Very low FeNa (<1%) indicates tubules are avidly retaining sodium - consistent with PRE-RENAL AKI. The kidneys are working; they're just underperfused."
                        },
                        {
                            lab: "Concentrated urine (SG 1.028)",
                            meaning: "Kidneys are concentrating urine appropriately - further supports pre-renal physiology. In ATN, concentrating ability is lost (SG ~1.010)."
                        }
                    ]
                },
                
                imaging: {
                    renalUS: {
                        findings: "Normal-sized kidneys bilaterally, no hydronephrosis, no masses, normal cortical echogenicity, bladder decompressed",
                        interpretation: "No evidence of obstruction. Normal kidney appearance supports potentially reversible pre-renal AKI."
                    }
                },
                
                initialManagement: {
                    title: "Management of Pre-Renal AKI",
                    interventions: [
                        {
                            action: "IV Normal Saline bolus 1L, then 150 mL/hr",
                            rationale: "Volume resuscitation is the treatment for pre-renal AKI. Replace deficit and cover ongoing losses. Monitor closely for response."
                        },
                        {
                            action: "STOP Lisinopril and Ibuprofen",
                            rationale: "Remove nephrotoxic insults. ACEi reduces GFR by lowering glomerular pressure. NSAIDs reduce renal perfusion. Both must be held in AKI."
                        },
                        {
                            action: "Treat hyperkalemia: Calcium gluconate, insulin/dextrose, kayexalate",
                            rationale: "K+ 5.8 with AKI is dangerous. Calcium stabilizes cardiac membrane. Insulin shifts K+ into cells. Kayexalate removes K+ from body."
                        },
                        {
                            action: "Strict I/O, Foley catheter for accurate UOP monitoring",
                            rationale: "Goal: UOP >0.5 mL/kg/hr indicates improving renal perfusion. Foley ensures accurate measurement and rules out retention."
                        },
                        {
                            action: "Recheck BMP in 6 hours",
                            rationale: "Expect creatinine to plateau or decrease with adequate resuscitation. If rising despite fluids, consider progression to ATN."
                        }
                    ]
                },
                
                clinicalReasoning: [
                    {
                        question: "What makes you confident this is pre-renal and not ATN?",
                        keyPoints: [
                            "Clinical context: Volume loss (GI illness), poor intake, hypotension",
                            "Medications: NSAIDs + ACEi in setting of hypovolemia",
                            "FeNa <1% (0.3%): Tubules working, retaining sodium",
                            "Concentrated urine (SG 1.028): Concentrating ability intact",
                            "BUN/Cr ratio >20: Classic pre-renal pattern",
                            "No muddy brown casts on microscopy: No tubular injury"
                        ],
                        teachingPoint: "Pre-renal AKI is diagnosed by the constellation of clinical context, FeNa, urine concentration, and sediment. If any parameter doesn't fit, reconsider."
                    }
                ],
                
                dayConclusion: {
                    summary: "72-year-old male with Stage 3 AKI (Cr 4.2, baseline 1.1) from pre-renal causes: GI volume loss + NSAID + ACEi. Hyperkalemia managed. Started aggressive volume resuscitation after ruling out obstruction.",
                    teachingPoint: "The classic triad causing pre-renal AKI in elderly: volume depletion + NSAIDs + ACEi/ARB. Always ask about OTC medications - patients don't think of ibuprofen as a 'medicine.'"
                }
            }
        },

        // ==================== ACUTE CORONARY SYNDROME DEEP CASE ====================
        'acs-deep': {
            id: 'acs-deep',
            title: 'Acute Coronary Syndrome',
            subtitle: 'STEMI, NSTEMI, and Unstable Angina management',
            category: 'Cardiology',
            difficulty: 'Advanced',
            estimatedTime: '55-70 min',
            tags: ['ECG', 'Troponin', 'Antiplatelet', 'Reperfusion', 'Risk Stratification'],
            
            primer: {
                anatomy: {
                    title: "Coronary Anatomy & Plaque Pathophysiology",
                    sections: [
                        {
                            title: "Coronary Artery Anatomy",
                            content: "Understanding coronary anatomy is essential for interpreting ECG changes and predicting complications:",
                            keyPoints: [
                                "Left Main → LAD (anterior wall, septum) + Circumflex (lateral wall)",
                                "LAD: 'Widow maker' - supplies 45-55% of LV mass, anterior wall, septum",
                                "Circumflex: Lateral wall, may supply inferior wall if dominant",
                                "RCA: Inferior wall, RV, SA node (60%), AV node (90%)",
                                "Dominance: Which artery gives the PDA (posterior descending artery)",
                                "Right dominant (85%): RCA gives PDA. Left dominant (8%): Circumflex gives PDA"
                            ],
                            clinicalCorrelation: "ECG localization: Inferior (II, III, aVF) = RCA. Anterior (V1-V4) = LAD. Lateral (I, aVL, V5-V6) = Circumflex. Always get right-sided leads (V4R) for inferior STEMI to check for RV involvement."
                        },
                        {
                            title: "Atherosclerosis & Plaque Rupture",
                            content: "ACS results from atherosclerotic plaque disruption, not gradual stenosis:",
                            keyPoints: [
                                "Stable plaque: Thick fibrous cap, small lipid core, causes stable angina",
                                "Vulnerable plaque: Thin cap, large lipid core, inflammatory cells - prone to rupture",
                                "Plaque rupture → Thrombosis → Acute coronary occlusion",
                                "70% of MIs occur at sites with <50% stenosis - vulnerable plaques!",
                                "Triggers: Physical exertion, emotional stress, cold exposure, morning awakening",
                                "Thrombus composition: Platelet-rich (white) initially, then fibrin-rich (red)"
                            ],
                            clinicalCorrelation: "This is why stenting 'significant' stenoses doesn't prevent all MIs - we're treating the wrong plaques. The vulnerable plaque that causes the MI often wasn't severely stenotic on prior angiography."
                        },
                        {
                            title: "ACS Spectrum: UA, NSTEMI, STEMI",
                            content: "ACS represents a continuum based on degree and duration of coronary occlusion:",
                            keyPoints: [
                                "Unstable Angina: Partial/intermittent occlusion, no myocyte death, troponin NEGATIVE",
                                "NSTEMI: Partial occlusion or microembolization, some myocyte death, troponin POSITIVE",
                                "STEMI: Complete occlusion, transmural ischemia, troponin POSITIVE, ST elevation",
                                "Time is muscle: 1 million myocytes die per hour during STEMI",
                                "STEMI requires emergent reperfusion (PCI or fibrinolytics)",
                                "NSTEMI/UA: Urgent but not emergent - risk stratify, then decide on timing"
                            ],
                            clinicalCorrelation: "The key distinction is STEMI vs non-STEMI. STEMI = complete occlusion = immediate cath lab. NSTEMI = usually subtotal occlusion = stabilize, anticoagulate, risk stratify, then cath within 24-72 hours."
                        }
                    ]
                },
                
                physiology: {
                    title: "Troponins, ECG Changes, and Risk Stratification",
                    sections: [
                        {
                            title: "Cardiac Troponins: The Gold Standard",
                            content: "Troponins I and T are structural proteins in cardiac myocytes released during cell death:",
                            keyPoints: [
                                "High-sensitivity troponin (hs-cTn): Detects smaller infarcts earlier",
                                "Rise: Begins 2-4 hours after injury, peaks 12-24 hours",
                                "Rule-out protocols: 0/1h or 0/3h depending on assay",
                                "Delta (change): More important than absolute value for acute MI",
                                "Chronic elevation: CKD, HF, PE, myocarditis, sepsis - doesn't mean ACS",
                                "Type 1 MI: Plaque rupture. Type 2 MI: Supply-demand mismatch (tachycardia, anemia)"
                            ],
                            clinicalCorrelation: "A rising troponin pattern (e.g., 20 → 150 → 400) suggests acute injury. A flat elevated troponin (e.g., 80 → 85 → 82) suggests chronic elevation from another cause like CKD or HF."
                        },
                        {
                            title: "ECG in ACS: Localization & Progression",
                            content: "The ECG evolves during acute MI and helps localize the culprit artery:",
                            keyPoints: [
                                "Hyperacute T waves: First change, peaked/symmetric T waves (minutes)",
                                "ST elevation: Transmural ischemia, indicates STEMI (>1mm, 2 contiguous leads)",
                                "ST depression: Subendocardial ischemia, seen in NSTEMI or reciprocal changes",
                                "Q waves: Indicate completed infarction (hours to days), may be permanent",
                                "T wave inversion: Evolving infarct or ischemia, can persist for weeks",
                                "New LBBB: Consider STEMI equivalent if clinical suspicion high"
                            ],
                            clinicalCorrelation: "Posterior STEMI is missed by standard ECG! Look for ST depression V1-V3 (mirror image of posterior ST elevation) and get posterior leads (V7-V9). Posterior MI often accompanies inferior STEMI."
                        },
                        {
                            title: "Risk Stratification: TIMI & HEART Scores",
                            content: "Risk scores guide disposition and treatment intensity in NSTEMI/UA:",
                            keyPoints: [
                                "TIMI Risk Score (0-7): Age ≥65, ≥3 CAD risk factors, known CAD, ASA use, angina ≥2 episodes/24h, ST deviation, elevated troponin",
                                "TIMI 0-2: Low risk (~5% events). TIMI 3-4: Intermediate. TIMI 5-7: High risk (~40% events)",
                                "HEART Score: History, ECG, Age, Risk factors, Troponin (0-10)",
                                "HEART 0-3: Low risk, can consider discharge. HEART 4-6: Admit. HEART 7-10: High risk",
                                "High-risk features: Hemodynamic instability, arrhythmias, ongoing chest pain, high scores"
                            ],
                            clinicalCorrelation: "Risk scores help determine timing of intervention. High-risk NSTEMI should go to cath lab within 24 hours. Low-risk may be managed with stress testing or outpatient cardiology follow-up."
                        }
                    ],
                    quiz: [
                        {
                            question: "A patient presents with chest pain. Troponin is 45 ng/L (normal <14). ECG shows 2mm ST elevation in II, III, aVF with reciprocal ST depression in I, aVL. What is the diagnosis and next step?",
                            options: [
                                "NSTEMI - admit and anticoagulate, cath within 24-72 hours",
                                "Inferior STEMI - activate cath lab for emergent PCI",
                                "Unstable angina - observe and repeat troponin",
                                "Pericarditis - treat with NSAIDs and colchicine"
                            ],
                            correctIndex: 1,
                            explanation: "ST elevation in II, III, aVF with reciprocal changes = Inferior STEMI, likely RCA occlusion. This requires emergent reperfusion. Door-to-balloon time should be <90 minutes. Also get right-sided leads (V4R) to check for RV involvement, which changes fluid management."
                        },
                        {
                            question: "Same patient. Right-sided leads show 1.5mm ST elevation in V4R. What does this indicate and how does it change management?",
                            options: [
                                "Left main disease - needs emergent CABG instead of PCI",
                                "RV infarction - avoid nitrates and diuretics, give fluids if hypotensive",
                                "Posterior extension - add posterior leads V7-V9",
                                "Artifact - right-sided leads are unreliable"
                            ],
                            correctIndex: 1,
                            explanation: "ST elevation in V4R indicates RV infarction. The RV is preload-dependent - these patients need volume, not vasodilators. Nitrates and diuretics can cause catastrophic hypotension. If hypotensive, give fluids. This is why right-sided leads are critical in inferior STEMI."
                        }
                    ]
                }
            },
            
            longitudinalTimeline: [
                { day: 1, title: "Emergency Department", setting: "ED", timeLabel: "Hour 0" },
                { day: 2, title: "Cath Lab & CCU", setting: "CCU", timeLabel: "Hour 2" },
                { day: 3, title: "CCU Day 2", setting: "CCU", timeLabel: "Day 2" },
                { day: 4, title: "Step-Down", setting: "Telemetry", timeLabel: "Day 3" },
                { day: 5, title: "Discharge", setting: "Floor", timeLabel: "Day 4" },
                { day: 30, title: "Follow-up", setting: "Clinic", timeLabel: "4 Weeks" }
            ],
            
            day1: {
                patientInfo: {
                    name: "Thomas Smith",
                    firstName: "Thomas",
                    lastName: "Smith",
                    age: 58,
                    gender: "male",
                    setting: "emergency_department",
                    chiefComplaint: "Crushing chest pain and shortness of breath"
                },
                
                vitals: {
                    BP: "148/92",
                    HR: 88,
                    RR: 20,
                    Temp: "98.6°F",
                    SpO2: "96% RA"
                },
                
                hpiSections: [
                    {
                        question: "Describe the chest pain",
                        answer: "Sudden onset 45 minutes ago while watching TV. Substernal, 'crushing' pressure radiating to left arm and jaw. 10/10 severity. Associated with diaphoresis and nausea. Nothing makes it better or worse. Never had pain like this before.",
                        mechanismLink: {
                            title: "Why does cardiac pain radiate to the arm and jaw?",
                            explanation: "Referred pain occurs because visceral afferents from the heart and somatic afferents from the arm/jaw converge on the same spinal cord neurons (T1-T4). The brain misinterprets the cardiac signal as coming from the skin/muscles of those dermatomes."
                        }
                    },
                    {
                        question: "Cardiac risk factors?",
                        answer: "HTN for 15 years (on lisinopril, not always compliant). Smokes 1 pack/day for 30 years. Father had MI at age 52. Cholesterol 'was high' but not on statin. No diabetes. Sedentary lifestyle, works as an accountant.",
                        mechanismLink: {
                            title: "How do risk factors promote atherosclerosis?",
                            explanation: "Smoking: Endothelial injury, oxidizes LDL, promotes thrombosis. HTN: Mechanical stress damages endothelium. Hyperlipidemia: LDL deposits in vessel wall, triggers inflammation. Family history: Genetic factors affecting lipid metabolism and vessel integrity. All accelerate plaque formation."
                        }
                    },
                    {
                        question: "Any recent symptoms?",
                        answer: "In retrospect, has had occasional 'heartburn' with exertion over the past month that resolved with rest. Didn't think much of it. No prior cardiac workup.",
                        mechanismLink: {
                            title: "What is the significance of these prior symptoms?",
                            explanation: "This is classic crescendo angina - stable angina progressing to unstable. It suggests a vulnerable plaque was already present and progressively destabilizing. The prior exertional symptoms were likely cardiac ischemia misattributed to GI causes."
                        }
                    }
                ],
                
                physicalExam: {
                    general: "Middle-aged male in obvious distress, clutching chest, diaphoretic",
                    HEENT: "No JVD (important - no right heart failure)",
                    cardiovascular: "Regular rhythm, no murmurs, S4 gallop present, PMI normal",
                    respiratory: "Clear bilaterally, no crackles (no pulmonary edema yet)",
                    abdomen: "Soft, non-tender",
                    extremities: "No edema, pulses 2+ throughout, cool and clammy skin",
                    neuro: "Alert, anxious, no focal deficits"
                },
                
                initialLabs: {
                    BMP: { Na: 140, K: 4.0, Cl: 102, CO2: 24, BUN: 18, Cr: 1.0, Glucose: 142 },
                    CBC: { WBC: 10.2, Hgb: 14.5, Plt: 245 },
                    cardiac: { TroponinI: 0.08, BNP: 89 },
                    coags: { PT: 12.5, INR: 1.0, PTT: 28 },
                    labInterpretation: [
                        {
                            lab: "Troponin I 0.08 ng/mL (normal <0.04)",
                            meaning: "Elevated but early - troponin rises 2-4 hours after onset. His pain started 45 minutes ago, so this is just beginning to rise. Will increase significantly on repeat testing."
                        },
                        {
                            lab: "Glucose 142 mg/dL",
                            meaning: "Stress hyperglycemia - catecholamine surge during MI causes glucose elevation even in non-diabetics. Associated with worse outcomes."
                        },
                        {
                            lab: "BNP 89 pg/mL",
                            meaning: "Minimally elevated - LV function still relatively preserved. Would be higher with significant LV dysfunction or prior HF."
                        }
                    ]
                },
                
                ecg: {
                    findings: "Sinus rhythm at 88 bpm. 3mm ST elevation in V1-V4 with hyperacute T waves. Reciprocal ST depression in II, III, aVF. No Q waves yet.",
                    interpretation: "ANTERIOR STEMI - acute LAD occlusion. Hyperacute changes suggest very early presentation. No Q waves indicates salvageable myocardium if reperfused quickly."
                },
                
                initialManagement: {
                    title: "STEMI Management: Time is Muscle",
                    interventions: [
                        {
                            action: "ACTIVATE CATH LAB - Code STEMI",
                            rationale: "Door-to-balloon goal <90 minutes. Every 30-minute delay increases mortality. Call interventional cardiology immediately."
                        },
                        {
                            action: "Aspirin 325mg chewed",
                            rationale: "Irreversibly inhibits platelet COX-1, reduces thromboxane A2. Chewing speeds absorption. Single most important medication - 25% mortality reduction."
                        },
                        {
                            action: "Ticagrelor 180mg loading dose (or Clopidogrel 600mg)",
                            rationale: "P2Y12 inhibitor for dual antiplatelet therapy. Ticagrelor preferred (faster onset, more potent, reversible). Given pre-cath."
                        },
                        {
                            action: "Heparin bolus (per cath lab protocol)",
                            rationale: "Anticoagulation to prevent clot propagation. Usually unfractionated heparin for cath lab (reversible, titratable)."
                        },
                        {
                            action: "Nitroglycerin SL if BP >90 systolic, not already given by EMS",
                            rationale: "Venodilation reduces preload, decreases oxygen demand. Also rules out coronary spasm as cause. Caution if RV infarct suspected."
                        },
                        {
                            action: "Morphine 2-4mg IV for pain if needed",
                            rationale: "Pain causes catecholamine surge increasing oxygen demand. Anxiolysis and vasodilation helpful. Use cautiously - may cause hypotension."
                        }
                    ]
                },
                
                dayConclusion: {
                    summary: "58-year-old male with multiple cardiac risk factors presenting with anterior STEMI. Cath lab activated for emergent PCI. Received aspirin, ticagrelor, and heparin.",
                    teachingPoint: "In STEMI, every minute matters. Prioritize cath lab activation over everything else. A focused history, ECG, and DAPT can happen simultaneously. Don't delay for troponin results - the ECG makes the diagnosis."
                }
            }
        },

        // ==================== PNEUMONIA DEEP CASE ====================
        'pneumonia-deep': {
            id: 'pneumonia-deep',
            title: 'Community-Acquired Pneumonia',
            subtitle: 'From diagnosis to antibiotic stewardship',
            category: 'Pulmonology',
            difficulty: 'Intermediate',
            estimatedTime: '45-55 min',
            tags: ['Infectious Disease', 'Antibiotics', 'Respiratory Failure', 'CURB-65', 'Oxygen'],
            
            primer: {
                anatomy: {
                    title: "Pulmonary Defense Mechanisms & Pneumonia Pathophysiology",
                    sections: [
                        {
                            title: "Normal Pulmonary Defenses",
                            content: "The respiratory system has multiple layers of defense against infection:",
                            keyPoints: [
                                "Upper airway: Nasal hairs, mucociliary clearance, IgA secretion",
                                "Cough reflex: Expels aspirated material and secretions",
                                "Mucociliary escalator: Cilia beat upward, moving mucus and trapped particles out",
                                "Alveolar macrophages: Phagocytose bacteria that reach alveoli",
                                "Surfactant: Contains antimicrobial proteins (SP-A, SP-D)",
                                "Neutrophil recruitment: Rapid response to overwhelming bacterial load"
                            ],
                            clinicalCorrelation: "Pneumonia occurs when these defenses are overwhelmed (large inoculum) or impaired (smoking damages cilia, stroke impairs cough, immunosuppression weakens macrophages)."
                        },
                        {
                            title: "Pneumonia Pathophysiology",
                            content: "When bacteria establish infection in the alveoli, an inflammatory cascade follows:",
                            keyPoints: [
                                "Bacterial multiplication in alveoli triggers inflammatory response",
                                "Cytokines recruit neutrophils → pus formation (consolidation)",
                                "Capillary leak → alveolar edema, impaired gas exchange",
                                "V/Q mismatch: Perfused but not ventilated alveoli → hypoxemia",
                                "Systemic inflammation: Fever, tachycardia, leukocytosis",
                                "Severe cases: Bacteremia, sepsis, ARDS, respiratory failure"
                            ],
                            clinicalCorrelation: "The 'consolidation' you see on X-ray is actually pus and inflammatory exudate filling the alveoli. That's why breath sounds are bronchial (transmitted through solid/fluid) rather than vesicular."
                        },
                        {
                            title: "Common CAP Pathogens",
                            content: "Etiology guides empiric antibiotic selection:",
                            keyPoints: [
                                "Streptococcus pneumoniae: Most common 'typical' pathogen, all ages",
                                "Haemophilus influenzae: COPD patients, smokers",
                                "Moraxella catarrhalis: COPD, elderly",
                                "Atypicals: Mycoplasma (young adults), Legionella (travel, water exposure), Chlamydia",
                                "Staphylococcus aureus: Post-influenza pneumonia, MRSA in healthcare exposure",
                                "Pseudomonas: Structural lung disease (bronchiectasis, CF), severe COPD"
                            ],
                            clinicalCorrelation: "Empiric antibiotics must cover both typical (S. pneumoniae) and atypical organisms because you can't reliably distinguish them clinically. That's why we give a beta-lactam PLUS a macrolide or fluoroquinolone."
                        }
                    ]
                },
                
                physiology: {
                    title: "Severity Assessment & Treatment Principles",
                    sections: [
                        {
                            title: "CURB-65: Severity Stratification",
                            content: "This validated score predicts mortality and guides disposition:",
                            keyPoints: [
                                "C - Confusion (new onset)",
                                "U - Urea (BUN) >19 mg/dL",
                                "R - Respiratory rate ≥30/min",
                                "B - Blood pressure: SBP <90 or DBP ≤60",
                                "65 - Age ≥65 years",
                                "Score 0-1: Outpatient treatment (0.7-3.2% mortality)",
                                "Score 2: Consider admission (9.2% mortality)",
                                "Score 3-5: Severe pneumonia, consider ICU (15-40% mortality)"
                            ],
                            clinicalCorrelation: "CURB-65 helps with disposition but doesn't replace clinical judgment. A young patient with score 0 but hypoxemia still needs admission. Conversely, a stable elderly patient with score 2 might go home with close follow-up."
                        },
                        {
                            title: "Empiric Antibiotic Selection",
                            content: "Guidelines recommend regimens based on setting and severity:",
                            keyPoints: [
                                "Outpatient (healthy): Amoxicillin OR doxycycline OR macrolide",
                                "Outpatient (comorbidities): Amoxicillin-clavulanate + macrolide OR respiratory FQ alone",
                                "Inpatient (non-ICU): Beta-lactam (ceftriaxone, ampicillin-sulbactam) + macrolide OR respiratory FQ alone",
                                "Inpatient (ICU): Beta-lactam + macrolide (or FQ). Add vancomycin if MRSA risk.",
                                "Duration: 5 days minimum, extend if slow response",
                                "De-escalate: Narrow spectrum once culture results return"
                            ],
                            clinicalCorrelation: "The beta-lactam covers typical organisms (pneumococcus, H. flu). The macrolide or fluoroquinolone covers atypicals (Legionella, Mycoplasma). Combined, you cover the major CAP pathogens."
                        },
                        {
                            title: "Oxygenation Goals & Escalation",
                            content: "Managing hypoxemia is critical in pneumonia:",
                            keyPoints: [
                                "Target SpO2: 92-96% for most patients (88-92% if COPD/CO2 retention risk)",
                                "Nasal cannula: Up to 6 L/min, ~44% FiO2",
                                "High-flow nasal cannula: Up to 60 L/min, up to 100% FiO2, provides some PEEP",
                                "NIPPV (BiPAP): Can avoid intubation in selected patients, contraindicated if altered mental status",
                                "Intubation: If failing HFNC/NIPPV, unable to protect airway, or severe ARDS",
                                "ARDS criteria: PaO2/FiO2 <300 with bilateral infiltrates within 1 week of known insult"
                            ],
                            clinicalCorrelation: "High-flow nasal cannula has become a game-changer for severe pneumonia. It provides high FiO2, some PEEP effect, and is better tolerated than BiPAP. Many patients who would have been intubated can now be managed on HFNC."
                        }
                    ],
                    quiz: [
                        {
                            question: "A 72-year-old nursing home resident presents with cough, fever, and confusion. RR 32, BP 85/52, BUN 28. What is the CURB-65 score and disposition?",
                            options: [
                                "Score 2 - Consider floor admission",
                                "Score 3 - Admit to floor, monitor closely",
                                "Score 4 - ICU admission recommended",
                                "Score 5 - ICU admission required, high mortality risk"
                            ],
                            correctIndex: 3,
                            explanation: "This patient scores 5/5: Confusion (1), Urea >19 (1), RR ≥30 (1), BP <90 systolic (1), Age ≥65 (1). CURB-65 of 5 predicts ~40% mortality. This is severe pneumonia requiring ICU-level care. Note: nursing home residence also suggests possible healthcare-associated pathogens."
                        },
                        {
                            question: "For the same patient, which empiric antibiotic regimen is most appropriate?",
                            options: [
                                "Azithromycin alone",
                                "Ceftriaxone + azithromycin",
                                "Ceftriaxone + azithromycin + vancomycin, consider Pseudomonas coverage",
                                "Levofloxacin alone"
                            ],
                            correctIndex: 2,
                            explanation: "This is severe CAP in a nursing home resident. Need: Beta-lactam + macrolide for typical/atypical coverage, PLUS vancomycin for MRSA risk (healthcare exposure), PLUS consider anti-pseudomonal coverage (piperacillin-tazobactam instead of ceftriaxone) given severity and nursing home residence."
                        }
                    ]
                }
            },
            
            longitudinalTimeline: [
                { day: 1, title: "Emergency Department", setting: "ED", timeLabel: "Day 1" },
                { day: 2, title: "Hospital Day 2", setting: "Floor", timeLabel: "Day 2" },
                { day: 3, title: "Hospital Day 3", setting: "Floor", timeLabel: "Day 3" },
                { day: 4, title: "Hospital Day 4", setting: "Floor", timeLabel: "Day 4" },
                { day: 5, title: "Discharge", setting: "Floor", timeLabel: "Day 5" },
                { day: 30, title: "Follow-up", setting: "Clinic", timeLabel: "6 Weeks" }
            ],
            
            day1: {
                patientInfo: {
                    name: "Emily Garcia",
                    firstName: "Emily",
                    lastName: "Garcia",
                    age: 64,
                    gender: "female",
                    setting: "emergency_department",
                    chiefComplaint: "Cough, fever, and difficulty breathing"
                },
                
                vitals: {
                    BP: "118/72",
                    HR: 102,
                    RR: 24,
                    Temp: "102.8°F",
                    SpO2: "89% RA → 94% on 3L NC"
                },
                
                hpiSections: [
                    {
                        question: "Symptom onset and progression?",
                        answer: "Started 4 days ago with runny nose and sore throat. 2 days ago developed productive cough with yellow-green sputum. Yesterday started having fevers to 103°F and feeling short of breath. Today couldn't walk across the room without getting winded.",
                        mechanismLink: {
                            title: "Why the progression from URI to pneumonia?",
                            explanation: "Viral URI damages the respiratory epithelium and impairs mucociliary clearance, allowing bacterial superinfection. The bacteria (often S. pneumoniae colonizing the nasopharynx) descend into the lower respiratory tract and establish infection in the alveoli."
                        }
                    },
                    {
                        question: "Associated symptoms?",
                        answer: "Chills and rigors with the fever. Right-sided chest pain that's worse with deep breathing ('pleuritic'). No hemoptysis. Decreased appetite but drinking fluids. No leg swelling or recent travel.",
                        mechanismLink: {
                            title: "What causes pleuritic chest pain in pneumonia?",
                            explanation: "The lung parenchyma itself has no pain fibers, but the parietal pleura does. When pneumonia involves the peripheral lung adjacent to the pleura, inflammation irritates the parietal pleura, causing sharp pain with breathing or coughing."
                        }
                    },
                    {
                        question: "Medical history and risk factors?",
                        answer: "Type 2 diabetes (A1c 8.2%), HTN, former smoker (quit 5 years ago, 20 pack-year history). No COPD diagnosis but occasional 'smoker's cough.' Up to date on vaccines including pneumococcal (2 years ago). No recent antibiotics or hospitalizations.",
                        mechanismLink: {
                            title: "How does diabetes increase pneumonia risk?",
                            explanation: "Diabetes impairs neutrophil function (chemotaxis, phagocytosis, killing), reduces mucociliary clearance, and causes microangiopathy affecting lung perfusion. Hyperglycemia also provides a favorable environment for bacterial growth."
                        }
                    }
                ],
                
                physicalExam: {
                    general: "Ill-appearing woman, using accessory muscles, speaking in short sentences",
                    HEENT: "Dry mucous membranes, no pharyngeal erythema",
                    cardiovascular: "Tachycardic, regular, no murmurs",
                    respiratory: "Decreased breath sounds RLL, bronchial breath sounds RLL, egophony positive RLL, crackles RLL extending to RML, dullness to percussion RLL",
                    abdomen: "Soft, non-tender",
                    extremities: "No edema, no calf tenderness",
                    neuro: "Alert and oriented, no confusion"
                },
                
                initialLabs: {
                    BMP: { Na: 136, K: 3.8, Cl: 100, CO2: 22, BUN: 22, Cr: 1.1, Glucose: 186 },
                    CBC: { WBC: 18.6, Hgb: 12.8, Plt: 342 },
                    other: { procalcitonin: 2.4, lactate: 1.6 },
                    ABG: { pH: 7.46, pCO2: 32, pO2: 58, HCO3: 23 },
                    labInterpretation: [
                        {
                            lab: "WBC 18.6 with left shift",
                            meaning: "Leukocytosis indicates bacterial infection with bone marrow response. Left shift (bandemia) suggests acute bacterial process."
                        },
                        {
                            lab: "Procalcitonin 2.4 ng/mL",
                            meaning: "Elevated procalcitonin (>0.5) strongly suggests bacterial infection rather than viral. Useful for deciding to start antibiotics and for guiding duration."
                        },
                        {
                            lab: "ABG: Respiratory alkalosis with hypoxemia",
                            meaning: "Low pCO2 (hyperventilation) compensating for hypoxemia. PaO2/FiO2 ratio on 3L NC (~30% FiO2) ≈ 193, approaching moderate ARDS territory."
                        },
                        {
                            lab: "BUN 22",
                            meaning: "BUN >19 adds a point to CURB-65. Also suggests some degree of dehydration."
                        }
                    ]
                },
                
                imaging: {
                    cxr: {
                        findings: "Dense right lower lobe consolidation with air bronchograms. Small right-sided pleural effusion. No pneumothorax. Heart size normal.",
                        interpretation: "Lobar pneumonia, right lower lobe. The air bronchograms confirm the density is consolidation (not atelectasis, which would collapse the bronchi)."
                    }
                },
                
                initialManagement: {
                    title: "CAP Management: Antibiotics and Supportive Care",
                    interventions: [
                        {
                            action: "Blood cultures x2, sputum culture before antibiotics",
                            rationale: "Identify organism for de-escalation. Blood cultures positive in ~10% of CAP. Don't delay antibiotics if cultures will take time."
                        },
                        {
                            action: "Ceftriaxone 1g IV + Azithromycin 500mg IV",
                            rationale: "Standard inpatient CAP regimen. Ceftriaxone covers pneumococcus and H. flu. Azithromycin covers atypicals (Legionella, Mycoplasma). Alternative: respiratory fluoroquinolone alone."
                        },
                        {
                            action: "Oxygen titrated to SpO2 92-96%",
                            rationale: "Correct hypoxemia but avoid hyperoxia (associated with worse outcomes). If escalating oxygen needs, consider HFNC."
                        },
                        {
                            action: "IV fluids: NS at 100 mL/hr",
                            rationale: "Patients with pneumonia are often volume-depleted from fever, decreased intake. Adequate hydration helps with secretion clearance."
                        },
                        {
                            action: "Calculate CURB-65: C-0, U-1, R-0, B-0, 65-0 = Score 1",
                            rationale: "Score of 1 suggests floor-level care is appropriate. However, her hypoxemia requiring supplemental O2 also warrants admission regardless of score."
                        }
                    ]
                },
                
                dayConclusion: {
                    summary: "64-year-old diabetic female with community-acquired pneumonia (RLL lobar consolidation), likely bacterial given procalcitonin elevation. CURB-65 score 1 but admitted for hypoxemia. Started on ceftriaxone + azithromycin.",
                    teachingPoint: "CURB-65 guides disposition but doesn't capture everything. Hypoxemia, high-risk comorbidities (diabetes, immunosuppression), and social factors all influence the admission decision independent of the score."
                }
            }
        },

        // ==================== PULMONARY EMBOLISM DEEP CASE ====================
        'pe-deep': {
            id: 'pe-deep',
            title: 'Pulmonary Embolism',
            subtitle: 'Risk stratification and anticoagulation decisions',
            category: 'Pulmonology',
            difficulty: 'Advanced',
            estimatedTime: '50-65 min',
            tags: ['VTE', 'D-dimer', 'Anticoagulation', 'Wells Score', 'CTPA'],
            
            primer: {
                anatomy: {
                    title: "Venous Thromboembolism Pathophysiology",
                    sections: [
                        {
                            title: "Virchow's Triad",
                            content: "Three factors predispose to venous thrombosis:",
                            keyPoints: [
                                "Stasis: Immobility (surgery, travel), CHF, obesity, pregnancy",
                                "Endothelial injury: Trauma, surgery, central lines, prior DVT",
                                "Hypercoagulability: Cancer, pregnancy, estrogen, inherited thrombophilias",
                                "Most PEs arise from DVTs in the legs (>90%)",
                                "Proximal DVTs (above knee) are higher risk for PE than distal",
                                "Upper extremity DVTs: Usually catheter-associated, still can cause PE"
                            ],
                            clinicalCorrelation: "When evaluating PE, always assess for underlying cause. Unprovoked PE in an older patient warrants age-appropriate cancer screening. Provoked PE (post-surgery, immobility) has lower recurrence risk after anticoagulation."
                        },
                        {
                            title: "Hemodynamic Consequences of PE",
                            content: "PE causes RV strain through mechanical obstruction and vasoconstriction:",
                            keyPoints: [
                                "Clot obstructs pulmonary arterial flow → increased PVR",
                                "Hypoxemia triggers pulmonary vasoconstriction → further increases PVR",
                                "RV pressure increases → RV dilation → RV failure",
                                "RV dilation shifts septum leftward → impairs LV filling",
                                "Decreased LV output → hypotension → decreased coronary perfusion",
                                "Death spiral: RV ischemia → worsening RV failure → cardiogenic shock"
                            ],
                            clinicalCorrelation: "This is why we risk-stratify PE. A small PE in a healthy patient is low-risk. A large PE with RV strain can rapidly decompensate. Signs of RV strain (elevated troponin, BNP, RV dilation on echo) identify higher-risk patients."
                        },
                        {
                            title: "Gas Exchange in PE",
                            content: "PE causes hypoxemia through multiple mechanisms:",
                            keyPoints: [
                                "V/Q mismatch: Areas ventilated but not perfused (dead space)",
                                "Shunting: Atelectasis from surfactant loss in under-perfused areas",
                                "Low mixed venous O2: Decreased cardiac output → tissues extract more O2",
                                "A-a gradient is typically elevated (normal <15 mmHg in young, increases with age)",
                                "PCO2 may be low (hyperventilation) or normal/high (massive PE with shock)",
                                "Some patients have normal SpO2 - hypoxemia is not universal"
                            ],
                            clinicalCorrelation: "A normal SpO2 does NOT rule out PE. Many patients with PE have normal oxygen levels but elevated A-a gradient. D-dimer and clinical probability are more important than SpO2 for diagnosis."
                        }
                    ]
                },
                
                physiology: {
                    title: "Diagnostic Approach & Risk Stratification",
                    sections: [
                        {
                            title: "Wells Score for PE",
                            content: "Clinical prediction rule to estimate pre-test probability:",
                            keyPoints: [
                                "Clinical signs of DVT: +3 points",
                                "PE is #1 diagnosis or equally likely: +3 points",
                                "Heart rate >100: +1.5 points",
                                "Immobilization or surgery in past 4 weeks: +1.5 points",
                                "Previous DVT/PE: +1.5 points",
                                "Hemoptysis: +1 point",
                                "Malignancy (treatment within 6 months or palliative): +1 point",
                                "≤4: PE unlikely, check D-dimer. >4: PE likely, proceed to CTPA."
                            ],
                            clinicalCorrelation: "The Wells score is most useful for determining if D-dimer can safely rule out PE. If Wells ≤4 AND D-dimer negative, PE is effectively excluded. If Wells >4, don't bother with D-dimer - go straight to imaging."
                        },
                        {
                            title: "D-dimer Interpretation",
                            content: "D-dimer is a fibrin degradation product, elevated when there's clot breakdown:",
                            keyPoints: [
                                "High sensitivity (~95%), low specificity (~40%)",
                                "Useful for RULING OUT PE when pre-test probability is low/intermediate",
                                "Age-adjusted cutoff: Age × 10 μg/L (if >50 years old)",
                                "Many conditions elevate D-dimer: Infection, cancer, pregnancy, surgery, inflammation",
                                "Never order D-dimer if you're going to image regardless of result",
                                "Negative D-dimer with low Wells score = safely rule out PE"
                            ],
                            clinicalCorrelation: "D-dimer is a rule-OUT test, not a rule-IN test. A positive D-dimer doesn't confirm PE - it just means you need imaging. The test is most valuable when negative in a low-probability patient."
                        },
                        {
                            title: "PESI Score: Risk Stratification After Diagnosis",
                            content: "Once PE is diagnosed, PESI (Pulmonary Embolism Severity Index) predicts 30-day mortality:",
                            keyPoints: [
                                "Age: +age in years",
                                "Male: +10",
                                "Cancer: +30",
                                "Heart failure: +10",
                                "Chronic lung disease: +10",
                                "Pulse ≥110: +20",
                                "SBP <100: +30",
                                "RR ≥30: +20",
                                "Temp <36°C: +20",
                                "Altered mental status: +60",
                                "SpO2 <90%: +20",
                                "Class I-II (≤85): Low risk, consider outpatient. Class III-V (>85): Higher risk."
                            ],
                            clinicalCorrelation: "Low-risk PE (PESI I-II, no RV strain, stable) can often be managed as outpatient with DOACs. High-risk PE with hemodynamic instability may need thrombolytics or embolectomy."
                        }
                    ],
                    quiz: [
                        {
                            question: "A 45-year-old woman presents with sudden dyspnea 10 days after knee surgery. HR 105, BP 128/82, SpO2 94%. No leg swelling. Wells score: surgery +1.5, HR >100 +1.5 = 3 points. What's the next step?",
                            options: [
                                "CT pulmonary angiography",
                                "D-dimer, if negative PE is ruled out",
                                "Ventilation-perfusion scan",
                                "Lower extremity ultrasound"
                            ],
                            correctIndex: 1,
                            explanation: "Wells score of 3 = 'PE unlikely' category. With low/intermediate pre-test probability, a negative D-dimer can safely rule out PE. This avoids radiation and contrast exposure from unnecessary CT. If D-dimer is positive, then proceed to CTPA."
                        },
                        {
                            question: "The D-dimer returns at 2,400 μg/L (normal <500). CTPA shows bilateral pulmonary emboli. Troponin is 0.08 (elevated), BNP 450. Echo shows RV dilation. BP 95/60, HR 115. What is the risk category and management?",
                            options: [
                                "Low-risk PE - outpatient anticoagulation with rivaroxaban",
                                "Intermediate-high risk PE - admit, anticoagulation, close monitoring for decompensation",
                                "High-risk (massive) PE - systemic thrombolytics indicated",
                                "Submassive PE - catheter-directed thrombolysis recommended"
                            ],
                            correctIndex: 1,
                            explanation: "This is intermediate-high risk PE: RV dysfunction (elevated troponin, BNP, RV dilation on echo) but borderline stable hemodynamics. She needs admission, anticoagulation, and close monitoring. If she decompensates (sustained hypotension, shock), escalate to thrombolytics. Not high-risk because she's not in frank shock (yet)."
                        }
                    ]
                }
            },
            
            longitudinalTimeline: [
                { day: 1, title: "Emergency Department", setting: "ED", timeLabel: "Hour 0" },
                { day: 2, title: "Hospital Day 1", setting: "Telemetry", timeLabel: "Day 1" },
                { day: 3, title: "Hospital Day 2", setting: "Telemetry", timeLabel: "Day 2" },
                { day: 4, title: "Discharge Planning", setting: "Floor", timeLabel: "Day 3" },
                { day: 5, title: "Discharge", setting: "Floor", timeLabel: "Day 3" },
                { day: 30, title: "Follow-up", setting: "Clinic", timeLabel: "3 Months" }
            ],
            
            day1: {
                patientInfo: {
                    name: "Karen Rodriguez",
                    firstName: "Karen",
                    lastName: "Rodriguez",
                    age: 52,
                    gender: "female",
                    setting: "emergency_department",
                    chiefComplaint: "Sudden shortness of breath and chest pain"
                },
                
                vitals: {
                    BP: "132/78",
                    HR: 108,
                    RR: 22,
                    Temp: "99.1°F",
                    SpO2: "92% RA"
                },
                
                hpiSections: [
                    {
                        question: "Describe the symptoms",
                        answer: "Sudden onset dyspnea 3 hours ago while at her desk at work. Sharp right-sided chest pain, worse with deep breaths. Felt like she 'couldn't catch her breath.' Denies cough, hemoptysis, or leg pain. No fever/chills. Never had anything like this before.",
                        mechanismLink: {
                            title: "Why is the chest pain pleuritic?",
                            explanation: "PE causes pleuritic pain when the clot lodges in a peripheral pulmonary artery near the visceral pleura, causing pulmonary infarction and pleural irritation. Central PEs may cause no chest pain at all, just dyspnea."
                        }
                    },
                    {
                        question: "Risk factors for VTE?",
                        answer: "On oral contraceptive pills for 5 years. No recent surgery, immobilization, or travel. No personal or family history of blood clots. No cancer history. Recently started a new desk job and sits for 8-10 hours daily with minimal breaks.",
                        mechanismLink: {
                            title: "How do estrogen-containing contraceptives increase VTE risk?",
                            explanation: "Estrogen increases hepatic synthesis of clotting factors (II, VII, IX, X, fibrinogen), decreases anticoagulant proteins (protein S, antithrombin), and increases platelet aggregation. Combined OCPs increase VTE risk 3-5 fold."
                        }
                    },
                    {
                        question: "Any other symptoms?",
                        answer: "Felt lightheaded when she stood up to go to her colleague's office after the symptoms started. Didn't pass out. Left calf has been 'achy' for about a week - attributed it to new exercise routine (started walking). No swelling noticed.",
                        mechanismLink: {
                            title: "What's the significance of the calf pain?",
                            explanation: "Calf pain raises suspicion for DVT - the source of the PE. Most PEs arise from proximal lower extremity DVTs. The 'new exercise' explanation is a common misattribution. Always examine the legs and consider ultrasound if PE is diagnosed."
                        }
                    }
                ],
                
                physicalExam: {
                    general: "Anxious-appearing woman, tachypneic, in mild distress",
                    HEENT: "No JVD at 45° (mild RV strain may not cause JVD)",
                    cardiovascular: "Tachycardic, regular, loud P2 (suggesting pulmonary hypertension), no murmurs",
                    respiratory: "Clear bilaterally, no wheezes or crackles, tachypneic",
                    abdomen: "Soft, non-tender",
                    extremities: "Left calf with mild tenderness to palpation, no obvious swelling, no erythema, no palpable cord. Right leg normal. Negative Homan's sign bilaterally.",
                    neuro: "Alert, anxious, no focal deficits"
                },
                
                initialLabs: {
                    BMP: { Na: 140, K: 4.1, Cl: 104, CO2: 23, BUN: 16, Cr: 0.9, Glucose: 108 },
                    CBC: { WBC: 9.2, Hgb: 13.8, Plt: 268 },
                    cardiac: { TroponinI: 0.06, BNP: 185 },
                    coags: { PT: 12.2, INR: 1.0, PTT: 28 },
                    other: { dDimer: 3840 },
                    ABG: { pH: 7.48, pCO2: 30, pO2: 72, HCO3: 22 },
                    labInterpretation: [
                        {
                            lab: "D-dimer 3840 μg/L (markedly elevated)",
                            meaning: "Very high D-dimer strongly suggests active clot. However, D-dimer doesn't confirm PE - imaging is needed. The magnitude correlates somewhat with clot burden."
                        },
                        {
                            lab: "Troponin 0.06 (mildly elevated)",
                            meaning: "Indicates RV strain/myocardial stretch from increased afterload. Elevated troponin in PE associated with worse outcomes - suggests intermediate-high risk."
                        },
                        {
                            lab: "BNP 185 (mildly elevated)",
                            meaning: "Released from ventricular wall stretch. Elevated in PE due to RV strain. Another marker of more-than-minimal clot burden."
                        },
                        {
                            lab: "ABG: Respiratory alkalosis, hypoxemia, elevated A-a gradient",
                            meaning: "Hyperventilation (low pCO2) with hypoxemia is classic for PE. A-a gradient = (150 - 30/0.8) - 72 = ~40 (elevated, normal <15)."
                        }
                    ]
                },
                
                imaging: {
                    ctpa: {
                        findings: "Filling defects in the right main pulmonary artery extending into segmental branches of RLL and RML. Small filling defect in left lower lobe segmental artery. RV/LV ratio 1.2 (mildly elevated, >1.0 suggests RV strain). No pleural effusion.",
                        interpretation: "Bilateral pulmonary emboli with moderate clot burden. CT evidence of RV strain (RV/LV ratio >1.0). This is intermediate-risk PE."
                    },
                    legUS: {
                        findings: "Left popliteal vein DVT with acute thrombus. No femoral or iliac DVT identified.",
                        interpretation: "Identified source of PE. Proximal DVT (popliteal is at the knee, considered proximal) with high embolic potential."
                    }
                },
                
                initialManagement: {
                    title: "PE Management: Anticoagulation and Risk Stratification",
                    interventions: [
                        {
                            action: "Initiate anticoagulation: Heparin drip or DOAC",
                            rationale: "Anticoagulation is the cornerstone of PE treatment. Options: (1) Heparin drip → warfarin if concern for deterioration (can reverse heparin), or (2) DOAC (rivaroxaban, apixaban) for stable patients. She's borderline - we'll use heparin drip initially."
                        },
                        {
                            action: "Risk stratification: Wells confirmed PE. Now assess severity.",
                            rationale: "Elevated troponin + elevated BNP + RV dilation on CT = intermediate-high risk PE. Not massive (hemodynamically stable), but higher risk than low-risk PE. Warrants close monitoring."
                        },
                        {
                            action: "Admit to monitored bed (telemetry or stepdown)",
                            rationale: "Intermediate-high risk PE needs monitoring for decompensation. If she becomes hypotensive or shows signs of shock, may need escalation to thrombolytics."
                        },
                        {
                            action: "Discontinue oral contraceptive pills",
                            rationale: "Estrogen-containing contraceptives are contraindicated with VTE history. Will need alternative contraception. Counsel on this before discharge."
                        },
                        {
                            action: "Supplemental oxygen to maintain SpO2 >92%",
                            rationale: "Correct hypoxemia but avoid aggressive hyperoxia. Usually modest oxygen requirements unless massive PE."
                        }
                    ]
                },
                
                dayConclusion: {
                    summary: "52-year-old female on OCPs presenting with bilateral PE and popliteal DVT. Intermediate-high risk given RV strain markers. Started on heparin, admitted to telemetry for monitoring.",
                    teachingPoint: "PE risk stratification determines management. Low-risk can go home on DOACs. Intermediate-risk needs admission and monitoring. High-risk (shock) may need thrombolytics or intervention. Always assess for RV strain with troponin, BNP, and imaging."
                }
            }
        },

        // ==================== STROKE DEEP CASE ====================
        'stroke-deep': {
            id: 'stroke-deep',
            title: 'Acute Ischemic Stroke',
            subtitle: 'Time-critical evaluation and reperfusion',
            category: 'Neurology',
            difficulty: 'Advanced',
            estimatedTime: '50-65 min',
            tags: ['tPA', 'Thrombectomy', 'NIHSS', 'Vascular Territories', 'Secondary Prevention'],
            
            primer: {
                anatomy: {
                    title: "Cerebrovascular Anatomy & Stroke Syndromes",
                    sections: [
                        {
                            title: "Anterior Circulation (Carotid System)",
                            content: "The anterior circulation supplies 80% of the brain:",
                            keyPoints: [
                                "Internal carotid artery (ICA) → Middle cerebral artery (MCA) + Anterior cerebral artery (ACA)",
                                "MCA: Motor/sensory cortex (face, arm > leg), Broca's area (dominant), Wernicke's area (dominant)",
                                "MCA syndrome: Contralateral face/arm weakness, sensory loss, aphasia (if dominant), neglect (if non-dominant)",
                                "ACA: Motor/sensory cortex (leg > arm), frontal lobe",
                                "ACA syndrome: Contralateral leg weakness > arm, personality changes, urinary incontinence"
                            ],
                            clinicalCorrelation: "MCA strokes are the most common. 'Face and arm weak, leg relatively spared' + aphasia (if left hemisphere) is classic MCA territory. The leg is supplied by ACA, which is often spared."
                        },
                        {
                            title: "Posterior Circulation (Vertebrobasilar)",
                            content: "The posterior circulation supplies the brainstem, cerebellum, and occipital lobes:",
                            keyPoints: [
                                "Vertebral arteries → Basilar artery → Posterior cerebral arteries (PCAs)",
                                "PCA: Occipital lobe (vision), medial temporal (memory)",
                                "PCA stroke: Contralateral homonymous hemianopia, may have memory deficits",
                                "Basilar artery: Brainstem (cranial nerves, consciousness, motor/sensory tracts)",
                                "Basilar occlusion: Coma, quadriplegia, 'locked-in' syndrome - catastrophic",
                                "Cerebellar: Ataxia, vertigo, nausea - risk of swelling and herniation"
                            ],
                            clinicalCorrelation: "Posterior circulation strokes present differently - vertigo, diplopia, ataxia, visual field cuts. Always consider stroke in sudden-onset vertigo, especially with other neurological symptoms. 'Dizziness' can be a stroke."
                        },
                        {
                            title: "Lacunar Syndromes",
                            content: "Small vessel disease affecting penetrating arteries causes characteristic syndromes:",
                            keyPoints: [
                                "Pure motor: Internal capsule or pons - face/arm/leg weakness, no sensory/cognitive deficits",
                                "Pure sensory: Thalamus - face/arm/leg numbness, no weakness",
                                "Ataxic hemiparesis: Pons or internal capsule - weakness + ipsilateral ataxia",
                                "Dysarthria-clumsy hand: Pons - slurred speech + hand clumsiness",
                                "Typically small strokes (<1.5 cm) from lipohyalinosis of small vessels",
                                "Associated with HTN and diabetes"
                            ],
                            clinicalCorrelation: "Lacunar strokes are 'smaller' but not necessarily benign. They indicate small vessel disease and predict future stroke risk. Long-term BP control is critical for secondary prevention."
                        }
                    ]
                },
                
                physiology: {
                    title: "Acute Stroke Management: Time is Brain",
                    sections: [
                        {
                            title: "The Ischemic Penumbra Concept",
                            content: "Stroke treatment targets the salvageable tissue surrounding the infarct core:",
                            keyPoints: [
                                "Core: Irreversibly damaged tissue (CBF <10 mL/100g/min)",
                                "Penumbra: Ischemic but viable tissue (CBF 10-20 mL/100g/min) - can be saved!",
                                "Without reperfusion, penumbra converts to core over minutes to hours",
                                "1.9 million neurons die per minute during ischemia",
                                "'Time is brain' - every minute without treatment = more brain loss",
                                "CTP (CT perfusion) can identify core vs penumbra to guide late intervention"
                            ],
                            clinicalCorrelation: "This is why we rush to treat stroke. The goal of thrombolytics and thrombectomy is to reperfuse the penumbra before it dies. A patient with a large penumbra and small core may benefit from intervention even beyond traditional time windows."
                        },
                        {
                            title: "IV tPA: Thrombolysis",
                            content: "Alteplase (tPA) dissolves clot and restores perfusion:",
                            keyPoints: [
                                "Time window: <4.5 hours from symptom onset (or last known well)",
                                "Dose: 0.9 mg/kg (max 90 mg), 10% bolus, 90% infusion over 1 hour",
                                "Benefit: ~30% relative reduction in disability at 3 months",
                                "Risk: ~6% symptomatic intracranial hemorrhage",
                                "Contraindications: Recent surgery, bleeding, very high BP, large infarct, low platelets",
                                "Extended window (4.5-9h): May be eligible if favorable perfusion imaging (small core)"
                            ],
                            clinicalCorrelation: "The benefit of tPA decreases with time. NNT at 90 min = 4, at 180 min = 9, at 270 min = 14. This is why 'door-to-needle' time is a quality metric. Target <60 minutes, ideally <45."
                        },
                        {
                            title: "Mechanical Thrombectomy",
                            content: "Endovascular clot retrieval for large vessel occlusions:",
                            keyPoints: [
                                "Indicated for: Large vessel occlusion (ICA, M1, basilar) + small core or large penumbra",
                                "Time window: Up to 24 hours if favorable perfusion imaging (DAWN/DEFUSE 3 trials)",
                                "Can be done after tPA (bridging) or alone if tPA contraindicated",
                                "NNT ~3-4 for good outcome (much better than tPA alone for LVO)",
                                "Requires interventional neurology/neuroradiology capability",
                                "CTA needed to identify LVO before activating thrombectomy team"
                            ],
                            clinicalCorrelation: "Thrombectomy has revolutionized stroke care for LVO. The key is identification - get a CTA with every stroke code. If there's an LVO and salvageable tissue, thrombectomy can be life-changing even 12-24 hours out."
                        },
                        {
                            title: "Secondary Prevention",
                            content: "After acute treatment, focus shifts to preventing recurrence:",
                            keyPoints: [
                                "Cardioembolic (AFib): Anticoagulation (DOACs preferred over warfarin)",
                                "Large artery (carotid stenosis): Endarterectomy or stenting if >70% stenosis",
                                "Small vessel (lacunar): Aggressive BP control (<130/80), statin",
                                "All strokes: Statin (even if LDL at goal), antiplatelet (aspirin or clopidogrel)",
                                "Dual antiplatelet (aspirin + clopidogrel): 21 days after minor stroke/TIA, then monotherapy",
                                "Lifestyle: Smoking cessation, exercise, diet, diabetes control"
                            ],
                            clinicalCorrelation: "Determining stroke etiology is crucial for prevention. A patient with AFib needs anticoagulation, not just aspirin. A patient with carotid stenosis may need surgery. The stroke workup isn't complete until you know the cause."
                        }
                    ],
                    quiz: [
                        {
                            question: "A 68-year-old presents 2 hours after sudden right face/arm weakness and aphasia. CT head is negative for hemorrhage. BP 182/95. What are the immediate priorities?",
                            options: [
                                "Lower BP to <140/90, then consider tPA",
                                "Get CTA, NIHSS, and give tPA if eligible while CTA is processing",
                                "MRI brain to confirm stroke before treatment",
                                "Aspirin 325mg and admit to stroke unit"
                            ],
                            correctIndex: 1,
                            explanation: "Time is brain! With symptom onset 2 hours ago and negative CT for hemorrhage, the priority is tPA eligibility. Get NIHSS, CTA (to identify LVO for thrombectomy), and if no contraindications, give tPA. Don't wait for CTA results to give tPA. Don't delay for BP control unless >185/110. MRI takes too long in the acute setting."
                        },
                        {
                            question: "CTA shows left M1 occlusion. NIHSS is 16. Patient received tPA at 2.5 hours. At 4 hours, NIHSS is still 14. What's next?",
                            options: [
                                "Continue to observe - tPA takes time to work",
                                "Repeat CT to check for hemorrhage",
                                "Proceed with mechanical thrombectomy",
                                "Increase BP to augment perfusion"
                            ],
                            correctIndex: 2,
                            explanation: "This patient has an LVO (M1) with minimal response to tPA (NIHSS dropped only 2 points). Thrombectomy is indicated for LVO and can be done after tPA (bridging therapy). With a persistent large vessel occlusion, thrombectomy offers the best chance of good outcome. Time window for thrombectomy extends well beyond 4 hours with favorable imaging."
                        }
                    ]
                }
            },
            
            longitudinalTimeline: [
                { day: 1, title: "Emergency Department", setting: "ED", timeLabel: "Hour 0" },
                { day: 2, title: "Neuro ICU", setting: "ICU", timeLabel: "Day 1" },
                { day: 3, title: "Stroke Unit Day 2", setting: "Floor", timeLabel: "Day 2" },
                { day: 4, title: "Stroke Unit Day 3", setting: "Floor", timeLabel: "Day 3" },
                { day: 5, title: "Discharge to Rehab", setting: "Floor", timeLabel: "Day 5" },
                { day: 30, title: "Follow-up", setting: "Clinic", timeLabel: "3 Months" }
            ],
            
            day1: {
                patientInfo: {
                    name: "Henry Williams",
                    firstName: "Henry",
                    lastName: "Williams",
                    age: 71,
                    gender: "male",
                    setting: "emergency_department",
                    chiefComplaint: "Sudden onset right-sided weakness and difficulty speaking"
                },
                
                vitals: {
                    BP: "178/94",
                    HR: 88,
                    RR: 16,
                    Temp: "98.4°F",
                    SpO2: "97% RA",
                    glucose: "142 mg/dL"
                },
                
                hpiSections: [
                    {
                        question: "What happened and when?",
                        answer: "Wife noticed him slumped in his chair at 10:15 AM with right face drooping and unable to speak clearly. She called 911 immediately. Last seen normal at 9:30 AM when she went to the grocery store. Current time is 11:00 AM. EMS activated stroke alert.",
                        mechanismLink: {
                            title: "Why is 'last known well' time critical?",
                            explanation: "tPA is only approved within 4.5 hours of symptom onset. If symptom onset is unknown (wake-up stroke, unwitnessed), 'last known well' is the reference time. This patient was last seen normal at 9:30 AM, so that's his reference point (90 minutes ago)."
                        }
                    },
                    {
                        question: "Medical history?",
                        answer: "HTN (on amlodipine 10mg), hyperlipidemia (on atorvastatin 20mg), type 2 diabetes (on metformin). No prior stroke or TIA. No known AFib. Former smoker, quit 10 years ago. No recent surgeries. Takes aspirin 81mg daily.",
                        mechanismLink: {
                            title: "How do these risk factors contribute to stroke?",
                            explanation: "HTN: #1 stroke risk factor, causes arteriolosclerosis and accelerates atherosclerosis. Diabetes: accelerates atherosclerosis, increases stroke risk 2-4x. Hyperlipidemia: atherosclerotic plaque formation. These commonly coexist and synergistically increase risk."
                        }
                    },
                    {
                        question: "Any recent symptoms?",
                        answer: "Wife recalls he complained of a brief episode of 'arm numbness' about a week ago that resolved within 30 minutes. He didn't seek medical attention. No headaches, chest pain, or palpitations.",
                        mechanismLink: {
                            title: "What was that arm numbness episode?",
                            explanation: "That was almost certainly a TIA (transient ischemic attack) - a warning stroke. TIA is the highest-risk period for subsequent stroke (up to 10% stroke risk in 90 days, half within 48 hours). If he had sought care then, we might have prevented this stroke."
                        }
                    }
                ],
                
                physicalExam: {
                    general: "Elderly male, awake, appears frustrated, not following commands consistently",
                    HEENT: "Right gaze preference (eyes deviate toward left hemisphere lesion), left pupil 3mm reactive, right 3mm reactive",
                    cardiovascular: "Irregularly irregular rhythm - NEW (possible AFib!), no murmurs",
                    respiratory: "Clear",
                    neuro: {
                        mental: "Alert, follows simple commands inconsistently, global aphasia (non-fluent speech, impaired comprehension)",
                        cranialNerves: "Right facial droop (lower face), gaze preference to left",
                        motor: "Right arm 0/5 (plegic), right leg 2/5 (severe paresis), left side 5/5",
                        sensory: "Unable to reliably assess due to aphasia, doesn't respond to stimuli on right",
                        coordination: "Cannot assess right side, left intact",
                        NIHSS: "18 (severe stroke)"
                    }
                },
                
                initialLabs: {
                    BMP: { Na: 138, K: 4.2, Cl: 102, CO2: 24, BUN: 20, Cr: 1.1, Glucose: 142 },
                    CBC: { WBC: 8.4, Hgb: 14.2, Plt: 238 },
                    coags: { PT: 12.0, INR: 1.0, PTT: 28 },
                    cardiac: { TroponinI: 0.02 },
                    labInterpretation: [
                        {
                            lab: "Glucose 142 mg/dL",
                            meaning: "Within acceptable range for tPA (would avoid if >400). Hyperglycemia associated with worse stroke outcomes - control to 140-180 during acute phase."
                        },
                        {
                            lab: "INR 1.0, Platelets 238K",
                            meaning: "No coagulopathy, platelets adequate. No contraindication to tPA from labs. (tPA contraindicated if INR >1.7 or platelets <100K)"
                        },
                        {
                            lab: "Troponin 0.02 (borderline)",
                            meaning: "Mildly elevated troponin can occur with acute stroke (neurogenic myocardial injury). Also warrants workup for concurrent ACS, but don't delay stroke treatment."
                        }
                    ]
                },
                
                imaging: {
                    ctHead: {
                        findings: "No hemorrhage. Subtle loss of gray-white differentiation in left insular cortex (early ischemic changes). No midline shift.",
                        interpretation: "CT negative for hemorrhage - patient IS a tPA candidate. Early ischemic changes in left MCA territory confirm clinical suspicion."
                    },
                    cta: {
                        findings: "Occlusion of left M1 segment of middle cerebral artery. Left ICA patent. Circle of Willis intact. No carotid stenosis.",
                        interpretation: "LARGE VESSEL OCCLUSION - patient is thrombectomy candidate! M1 occlusion explains the severe clinical presentation."
                    }
                },
                
                initialManagement: {
                    title: "Acute Stroke: tPA and Thrombectomy",
                    interventions: [
                        {
                            action: "IV Alteplase (tPA) 0.9 mg/kg",
                            rationale: "Within 4.5-hour window (last known well 90 min ago), no contraindications, NIHSS 18 (severe). Give 10% bolus, 90% infusion over 1 hour. Don't delay for thrombectomy - bridging therapy is standard."
                        },
                        {
                            action: "Activate thrombectomy team - LVO identified",
                            rationale: "M1 occlusion with severe deficits and small early changes on CT = thrombectomy candidate. Thrombectomy has NNT ~3 for good outcome in LVO. Goal: puncture within 90 min of arrival."
                        },
                        {
                            action: "BP management: Allow up to 185/110 pre-tPA, then <180/105 post-tPA",
                            rationale: "Permissive hypertension maintains perfusion to penumbra. After tPA, lower threshold to reduce hemorrhage risk. His BP 178/94 is acceptable."
                        },
                        {
                            action: "Continuous neuro checks q15 min during tPA infusion",
                            rationale: "Monitor for improvement (reperfusion) or worsening (hemorrhage). If sudden severe headache, worsening neuro status, or vomiting - STOP tPA, emergent CT."
                        },
                        {
                            action: "Telemetry for rhythm monitoring - ?AFib noted on exam",
                            rationale: "New AFib identified on exam! This may be the stroke etiology (cardioembolic). Will need anticoagulation for secondary prevention, but not acutely (hemorrhage risk post-tPA)."
                        }
                    ]
                },
                
                dayConclusion: {
                    summary: "71-year-old male with HTN, DM, HLD presenting with left MCA syndrome (right hemiplegia, aphasia). NIHSS 18. Left M1 occlusion on CTA. tPA given at 95 minutes. Thrombectomy pending. New AFib identified - likely stroke etiology.",
                    teachingPoint: "Stroke is a medical emergency requiring parallel processing: history, NIHSS, CT, and tPA decision happen simultaneously. CTA identifies LVO for thrombectomy. Finding AFib changes secondary prevention (anticoagulation vs antiplatelet)."
                }
            }
        },

        // ==================== UPPER GI BLEEDING DEEP CASE ====================
        'ugib-deep': {
            id: 'ugib-deep',
            title: 'Upper GI Bleeding',
            subtitle: 'Resuscitation, risk stratification, and endoscopy timing',
            category: 'Gastroenterology',
            difficulty: 'Advanced',
            estimatedTime: '50-65 min',
            tags: ['Resuscitation', 'Endoscopy', 'Transfusion', 'PPI', 'Variceal'],
            
            primer: {
                anatomy: {
                    title: "GI Bleeding Anatomy & Pathophysiology",
                    sections: [
                        {
                            title: "Upper vs Lower GI Bleeding",
                            content: "The ligament of Treitz (duodenojejunal junction) divides upper from lower GI bleeding:",
                            keyPoints: [
                                "Upper GIB: Esophagus, stomach, duodenum (proximal to ligament of Treitz)",
                                "Lower GIB: Jejunum, ileum, colon, rectum (distal to ligament of Treitz)",
                                "Upper GIB is more common and more dangerous (higher mortality)",
                                "Hematemesis (vomiting blood): Always upper GIB",
                                "Coffee-ground emesis: Partially digested blood - upper GIB",
                                "Melena (black tarry stool): Usually upper GIB (blood digested by gut bacteria)",
                                "Hematochezia (bright red blood per rectum): Usually lower, but can be brisk upper GIB"
                            ],
                            clinicalCorrelation: "Melena requires only 50-100 mL of blood in the upper GI tract. Hematochezia from an upper source indicates massive bleeding (>1L) with rapid transit - these patients are often hemodynamically unstable."
                        },
                        {
                            title: "Common Causes of Upper GI Bleeding",
                            content: "Understanding etiology guides management and predicts outcomes:",
                            keyPoints: [
                                "Peptic Ulcer Disease (35-50%): Gastric or duodenal ulcers, H. pylori, NSAIDs",
                                "Erosive disease (10-15%): Gastritis, esophagitis, stress ulcers in ICU",
                                "Varices (10-20%): Esophageal or gastric, from portal hypertension (cirrhosis)",
                                "Mallory-Weiss tear (5-10%): Mucosal tear at GE junction from forceful vomiting",
                                "Malignancy (2-5%): Gastric or esophageal cancer",
                                "Vascular: Dieulafoy lesion, angiodysplasia, aortoenteric fistula (rare but deadly)"
                            ],
                            clinicalCorrelation: "The distinction between VARICEAL and NON-VARICEAL bleeding is critical. Variceal bleeding has higher mortality (15-20%) and requires specific treatment (octreotide, antibiotics, urgent endoscopy, possible TIPS)."
                        },
                        {
                            title: "Variceal Bleeding Pathophysiology",
                            content: "Portal hypertension from cirrhosis leads to collateral vessel formation:",
                            keyPoints: [
                                "Normal portal pressure: 5-10 mmHg. Varices form when >12 mmHg",
                                "Collateral sites: Esophageal (most common), gastric, rectal (hemorrhoids), umbilical (caput medusae)",
                                "Esophageal varices: Thin-walled, high pressure, prone to rupture",
                                "Wall tension = (Pressure × Radius) / Wall thickness (Law of Laplace)",
                                "As varices enlarge and walls thin, rupture risk increases dramatically",
                                "Variceal bleeding is often massive and recurrent without intervention"
                            ],
                            clinicalCorrelation: "In a cirrhotic patient with GI bleeding, ASSUME it's variceal until proven otherwise. Start octreotide and antibiotics empirically - don't wait for endoscopy. Early treatment reduces mortality."
                        }
                    ]
                },
                
                physiology: {
                    title: "Resuscitation, Risk Stratification, and Management",
                    sections: [
                        {
                            title: "Initial Resuscitation",
                            content: "GI bleeding can be life-threatening - resuscitation takes priority:",
                            keyPoints: [
                                "ABCs: Protect airway if altered mental status or massive hematemesis",
                                "Two large-bore IVs (16-18G) - don't rely on central line for rapid infusion",
                                "Crystalloid resuscitation initially, avoid over-resuscitation in varices",
                                "Type and screen/crossmatch early - anticipate need for blood",
                                "Transfusion threshold: Hgb <7 g/dL in most patients (restrictive strategy)",
                                "Exception: Active bleeding with hemodynamic instability - transfuse for BP, not Hgb",
                                "Reverse anticoagulation if applicable: Vitamin K, FFP, PCC for warfarin; consider reversal agents for DOACs"
                            ],
                            clinicalCorrelation: "The TRIGGER trial and others showed restrictive transfusion (Hgb <7) improves survival in upper GIB compared to liberal transfusion. Over-transfusion may increase portal pressure and worsen variceal bleeding."
                        },
                        {
                            title: "Risk Stratification: Glasgow-Blatchford Score",
                            content: "GBS identifies patients who can be safely managed as outpatients:",
                            keyPoints: [
                                "BUN (mg/dL): 18.2-22.4 = 2, 22.4-28 = 3, 28-70 = 4, >70 = 6",
                                "Hemoglobin (g/dL) Men: 12-13 = 1, 10-12 = 3, <10 = 6; Women: 10-12 = 1, <10 = 6",
                                "Systolic BP: 100-109 = 1, 90-99 = 2, <90 = 3",
                                "Heart rate ≥100 = 1",
                                "Melena = 1, Syncope = 2",
                                "Hepatic disease = 2, Cardiac failure = 2",
                                "GBS = 0: Very low risk, can consider outpatient management",
                                "GBS ≥1: Requires inpatient management and endoscopy"
                            ],
                            clinicalCorrelation: "A GBS of 0 has >99% NPV for need for intervention. These patients can potentially be discharged with outpatient EGD. But GBS of 0 is rare - most GI bleeders need admission."
                        },
                        {
                            title: "Medical Management",
                            content: "Start medical therapy while arranging endoscopy:",
                            keyPoints: [
                                "PPI: IV pantoprazole 80mg bolus, then 8mg/hr infusion (or 40mg BID)",
                                "PPI mechanism: Raises gastric pH, promotes clot stability on ulcers",
                                "For suspected VARICEAL bleeding add:",
                                "- Octreotide: 50mcg bolus, then 50mcg/hr infusion (reduces portal pressure)",
                                "- IV antibiotics: Ceftriaxone 1g daily (reduces infection, rebleeding, mortality)",
                                "NPO for endoscopy",
                                "NG tube: Controversial - can confirm upper source but doesn't change outcomes"
                            ],
                            clinicalCorrelation: "Empiric PPI is reasonable for all upper GIB. If there's ANY suspicion of varices (known cirrhosis, stigmata of liver disease), add octreotide and antibiotics immediately - this saves lives."
                        },
                        {
                            title: "Endoscopy Timing",
                            content: "EGD is both diagnostic and therapeutic:",
                            keyPoints: [
                                "Urgent EGD (<24 hours): Standard for most upper GIB requiring admission",
                                "Emergent EGD (<12 hours): Hemodynamic instability, suspected variceal bleeding, transfusion requirement",
                                "Very urgent (<6 hours): Ongoing hemodynamic instability despite resuscitation",
                                "Endoscopic therapy: Epinephrine injection, thermal coagulation, clips, band ligation (varices)",
                                "Forrest classification for ulcers predicts rebleeding risk",
                                "High-risk stigmata: Active bleeding, visible vessel, adherent clot"
                            ],
                            clinicalCorrelation: "Earlier isn't always better. Very early EGD (<6h) in stable patients doesn't improve outcomes. But unstable patients and variceal bleeders benefit from urgent intervention."
                        }
                    ],
                    quiz: [
                        {
                            question: "A 58-year-old with known cirrhosis presents with hematemesis. BP 88/54, HR 112. Hgb 7.2. What is the immediate priority after IV access?",
                            options: [
                                "Emergent EGD within 1 hour",
                                "CT angiography to localize bleeding",
                                "Octreotide, antibiotics, IV PPI, and transfuse for hemodynamic instability",
                                "Place NG tube to assess ongoing bleeding"
                            ],
                            correctIndex: 2,
                            explanation: "In suspected variceal bleeding, start medical therapy immediately: octreotide (reduces portal pressure), antibiotics (ceftriaxone - proven mortality benefit), and PPI. Transfuse for hemodynamic instability (not just Hgb). Then arrange urgent endoscopy. Don't delay medical therapy for anything."
                        },
                        {
                            question: "A 45-year-old presents with melena, Hgb 8.5, HR 78, BP 128/82, BUN 18. No syncope, no liver disease. Glasgow-Blatchford Score is 3 (Hgb 10-12 range = 1 + melena = 1 + BUN slightly elevated = 1). Can this patient go home?",
                            options: [
                                "Yes - GBS <6 is low risk for outpatient management",
                                "No - Any GBS ≥1 requires admission and inpatient EGD",
                                "Yes - If repeat Hgb is stable in 6 hours",
                                "Depends on social situation and ability to return quickly"
                            ],
                            correctIndex: 1,
                            explanation: "Only GBS = 0 can be considered for outpatient management. This patient has GBS of 3, which requires admission for monitoring and inpatient EGD (within 24 hours). GBS is designed to identify the very low-risk patients who can avoid admission - everyone else stays."
                        }
                    ]
                }
            },
            
            longitudinalTimeline: [
                { day: 1, title: "Emergency Department", setting: "ED", timeLabel: "Hour 0" },
                { day: 2, title: "ICU Day 1", setting: "ICU", timeLabel: "Day 1" },
                { day: 3, title: "Step-Down", setting: "Floor", timeLabel: "Day 2" },
                { day: 4, title: "Hospital Day 3", setting: "Floor", timeLabel: "Day 3" },
                { day: 5, title: "Discharge", setting: "Floor", timeLabel: "Day 4" },
                { day: 30, title: "Follow-up", setting: "Clinic", timeLabel: "4 Weeks" }
            ],
            
            day1: {
                patientInfo: {
                    name: "Dennis Murphy",
                    firstName: "Dennis",
                    lastName: "Murphy",
                    age: 62,
                    gender: "male",
                    setting: "emergency_department",
                    chiefComplaint: "Vomiting blood and black stools"
                },
                
                vitals: {
                    BP: "94/58",
                    HR: 116,
                    RR: 20,
                    Temp: "98.2°F",
                    SpO2: "96% RA"
                },
                
                hpiSections: [
                    {
                        question: "Describe the bleeding",
                        answer: "Woke up at 3 AM feeling nauseated, then vomited 'a large amount' of bright red blood - estimated 2-3 cups. Had another episode of hematemesis in the ambulance. Also noticed black tarry stools for the past 2 days that he attributed to iron supplements, but now realizes it was blood.",
                        mechanismLink: {
                            title: "Why is hematemesis with melena concerning?",
                            explanation: "Hematemesis indicates active upper GI bleeding. Melena takes 8+ hours to develop, so 2 days of melena means this bleeding started days ago. The fresh hematemesis suggests either continued slow bleeding now accelerating, or rebleeding from a partially healed lesion."
                        }
                    },
                    {
                        question: "Medical history and medications?",
                        answer: "History of knee osteoarthritis - takes ibuprofen 800mg TID 'when it flares up' - has been taking it daily for the past 3 weeks. Also takes aspirin 81mg for 'heart protection.' No history of ulcers, liver disease, or prior GI bleeding. Social drinker, 2-3 beers on weekends.",
                        mechanismLink: {
                            title: "Why are NSAIDs and aspirin problematic together?",
                            explanation: "NSAIDs inhibit COX-1, which produces protective prostaglandins in the gastric mucosa. Aspirin adds antiplatelet effect. Together, they dramatically increase ulcer risk (3-5x for NSAIDs alone, additive with aspirin) and impair hemostasis once bleeding starts."
                        }
                    },
                    {
                        question: "Any warning symptoms before this?",
                        answer: "Now that he thinks about it, has had 'heartburn' and mild epigastric discomfort for the past month. Took antacids which helped temporarily. No weight loss, no dysphagia, no early satiety.",
                        mechanismLink: {
                            title: "What do these symptoms suggest?",
                            explanation: "Epigastric discomfort relieved by antacids is classic for peptic ulcer disease. He likely developed an NSAID-induced ulcer over the past weeks that initially caused dyspepsia, then eroded into a blood vessel causing the acute hemorrhage."
                        }
                    }
                ],
                
                physicalExam: {
                    general: "Pale, diaphoretic, anxious-appearing man",
                    HEENT: "Pale conjunctivae, dry mucous membranes, no scleral icterus",
                    cardiovascular: "Tachycardic, regular, no murmurs, weak peripheral pulses",
                    respiratory: "Clear bilaterally",
                    abdomen: "Soft, mild epigastric tenderness, no peritoneal signs, no hepatosplenomegaly, no ascites",
                    rectal: "Black, tarry stool, guaiac positive",
                    extremities: "Cool, pale, cap refill 4 seconds",
                    neuro: "Alert but anxious, oriented x3"
                },
                
                initialLabs: {
                    BMP: { Na: 140, K: 4.8, Cl: 104, CO2: 20, BUN: 42, Cr: 1.2, Glucose: 128 },
                    CBC: { WBC: 12.4, Hgb: 7.8, Plt: 245 },
                    coags: { PT: 13.2, INR: 1.1, PTT: 29 },
                    LFTs: { AST: 28, ALT: 32, ALP: 68, TBili: 0.8, Albumin: 3.8 },
                    labInterpretation: [
                        {
                            lab: "Hemoglobin 7.8 g/dL",
                            meaning: "Significant anemia from blood loss. Note: Hgb may not fully reflect acute loss yet due to hemoconcentration - will drop further with fluid resuscitation."
                        },
                        {
                            lab: "BUN 42 with normal creatinine (BUN/Cr ratio 35:1)",
                            meaning: "Elevated BUN/Cr ratio (>20:1) classic for upper GI bleeding - digested blood protein absorbed in gut increases BUN. Also contributes to prerenal component from volume loss."
                        },
                        {
                            lab: "Normal LFTs and albumin",
                            meaning: "No evidence of chronic liver disease. This is likely non-variceal bleeding (peptic ulcer given NSAID use). No need for empiric octreotide/antibiotics."
                        },
                        {
                            lab: "Potassium 4.8 (upper normal)",
                            meaning: "Can be elevated with massive GI bleeding due to absorption of hemoglobin breakdown products and cellular release from hypoperfusion."
                        }
                    ]
                },
                
                initialManagement: {
                    title: "UGIB Resuscitation and Stabilization",
                    interventions: [
                        {
                            action: "Two large-bore IVs (16G), start crystalloid resuscitation",
                            rationale: "Large-bore peripheral IVs allow faster infusion than central lines. Start NS or LR while blood is being prepared. Avoid over-resuscitation."
                        },
                        {
                            action: "Type and crossmatch 4 units pRBCs, transfuse 2 units now",
                            rationale: "Hgb 7.8 with ongoing bleeding and hemodynamic instability warrants transfusion. Target Hgb >7 (restrictive strategy), but in active bleeding, transfuse for hemodynamic stability."
                        },
                        {
                            action: "IV Pantoprazole 80mg bolus, then 8mg/hr infusion",
                            rationale: "High-dose IV PPI raises gastric pH, stabilizes clot on ulcer crater, reduces rebleeding. Start empirically before endoscopy."
                        },
                        {
                            action: "NPO, consult GI for urgent EGD",
                            rationale: "This patient needs EGD within 12-24 hours given hemodynamic instability and transfusion requirement. Timing depends on stability after resuscitation."
                        },
                        {
                            action: "STOP aspirin and ibuprofen",
                            rationale: "Remove offending agents. Will need to discuss with cardiology about aspirin resumption after hemostasis achieved (usually 3-7 days if indicated)."
                        },
                        {
                            action: "Calculate Glasgow-Blatchford Score",
                            rationale: "BUN >28 (4) + Hgb <10 male (6) + SBP <100 (2) + HR >100 (1) + melena (1) = GBS 14. High risk - definitely requires ICU admission and urgent intervention."
                        }
                    ]
                },
                
                dayConclusion: {
                    summary: "62-year-old male with NSAID-induced upper GI bleeding presenting with hematemesis, melena, and hemodynamic instability. GBS 14 indicating high risk. Resuscitation initiated, IV PPI started, urgent EGD planned.",
                    teachingPoint: "In acute UGIB: Resuscitate first (but avoid over-transfusion), start IV PPI, risk stratify with GBS, and arrange endoscopy timing based on stability. Always ask about NSAIDs, aspirin, and anticoagulants - they're often the culprit."
                }
            }
        },

        // ==================== HYPONATREMIA DEEP CASE ====================
        'hyponatremia-deep': {
            id: 'hyponatremia-deep',
            title: 'Hyponatremia',
            subtitle: 'Systematic approach to diagnosis and safe correction',
            category: 'Nephrology',
            difficulty: 'Intermediate',
            estimatedTime: '45-60 min',
            tags: ['Electrolytes', 'SIADH', 'Osmolality', 'Fluids', 'ODS'],
            
            primer: {
                anatomy: {
                    title: "Sodium, Water, and Osmolality Regulation",
                    sections: [
                        {
                            title: "The Sodium-Water Relationship",
                            content: "Hyponatremia is almost always a problem of TOO MUCH WATER, not too little sodium:",
                            keyPoints: [
                                "Sodium is the primary determinant of extracellular osmolality",
                                "Normal serum Na: 136-145 mEq/L",
                                "Hyponatremia = Serum Na <136 mEq/L (clinically significant <130)",
                                "Total body sodium determines VOLUME status",
                                "Serum sodium concentration reflects WATER balance",
                                "You can have low serum Na with high, normal, or low total body sodium"
                            ],
                            clinicalCorrelation: "A patient with CHF may have HIGH total body sodium (edema!) but LOW serum sodium concentration (dilutional). Treating with salt would make the edema worse. The treatment is water restriction, not sodium administration."
                        },
                        {
                            title: "ADH and Water Regulation",
                            content: "Antidiuretic hormone (ADH/vasopressin) is the key regulator of water balance:",
                            keyPoints: [
                                "ADH released from posterior pituitary in response to: High osmolality OR Low volume",
                                "ADH acts on collecting duct: Inserts aquaporin-2 channels → water reabsorption",
                                "High ADH = concentrated urine (high Uosm), water retention",
                                "Low ADH = dilute urine (low Uosm, <100), water excretion",
                                "Normal kidneys can dilute urine to ~50 mOsm/kg",
                                "If you drink massive water + ADH is suppressed → you excrete the water",
                                "If ADH is inappropriately elevated → you retain water → hyponatremia"
                            ],
                            clinicalCorrelation: "SIADH (Syndrome of Inappropriate ADH) is a common cause of euvolemic hyponatremia. ADH is 'on' despite low osmolality, so the kidneys can't excrete free water. Urine osmolality is inappropriately concentrated (>100 mOsm/kg)."
                        },
                        {
                            title: "Pseudohyponatremia and Hypertonic Hyponatremia",
                            content: "Not all low sodium values represent true hypotonic hyponatremia:",
                            keyPoints: [
                                "Step 1: ALWAYS check serum osmolality first",
                                "Hypotonic (<280 mOsm/kg): TRUE hyponatremia - proceed with workup",
                                "Isotonic (280-295): Pseudohyponatremia - severe hyperlipidemia or hyperproteinemia",
                                "Hypertonic (>295): Dilutional - hyperglycemia draws water into ECF",
                                "Glucose correction: For every 100 mg/dL glucose >100, add 1.6-2.4 to Na",
                                "Example: Glucose 500, Na 128 → Corrected Na = 128 + (4 × 1.6) = 134.4",
                                "Mannitol, radiocontrast can also cause hypertonic hyponatremia"
                            ],
                            clinicalCorrelation: "A diabetic with glucose of 600 and Na of 125 does NOT have clinically significant hyponatremia. When you treat the hyperglycemia, Na will rise. Don't give hypertonic saline - you'll overcorrect and cause harm."
                        }
                    ]
                },
                
                physiology: {
                    title: "Diagnostic Approach and Treatment",
                    sections: [
                        {
                            title: "The Hyponatremia Algorithm",
                            content: "Systematic approach: Osmolality → Volume status → Urine studies:",
                            keyPoints: [
                                "Step 1: Serum osmolality - Is this true hypotonic hyponatremia?",
                                "Step 2: Assess volume status clinically - Hypovolemic, euvolemic, or hypervolemic?",
                                "Step 3: Check urine osmolality - Is ADH active? (Uosm >100 = ADH on)",
                                "Step 4: Check urine sodium - Helps distinguish causes",
                                "HYPOVOLEMIC + UNa <20: Extrarenal loss (GI, skin) - give NS",
                                "HYPOVOLEMIC + UNa >20: Renal loss (diuretics, salt-wasting) - give NS",
                                "EUVOLEMIC + UNa >20: SIADH, hypothyroid, adrenal insufficiency",
                                "HYPERVOLEMIC: CHF, cirrhosis, nephrotic syndrome - restrict water"
                            ],
                            clinicalCorrelation: "Volume status assessment is the crux of hyponatremia diagnosis. Look at JVP, mucous membranes, skin turgor, edema, orthostatic vitals. Get it wrong, and you'll give the wrong treatment."
                        },
                        {
                            title: "SIADH: Diagnosis and Causes",
                            content: "Syndrome of Inappropriate ADH - most common cause of euvolemic hyponatremia:",
                            keyPoints: [
                                "Diagnostic criteria: Serum osm <275, Urine osm >100, Urine Na >30, euvolemic, normal thyroid/adrenal",
                                "CNS causes: Stroke, hemorrhage, infection, trauma, tumors",
                                "Pulmonary: Pneumonia, TB, lung cancer (small cell), positive pressure ventilation",
                                "Malignancy: Small cell lung cancer (ectopic ADH), head/neck cancers",
                                "Drugs: SSRIs, carbamazepine, cyclophosphamide, NSAIDs, opioids, ecstasy",
                                "Pain, nausea, post-operative state also stimulate ADH",
                                "Treatment: Fluid restriction (1-1.5 L/day), salt tabs, treat underlying cause"
                            ],
                            clinicalCorrelation: "New-onset SIADH in a smoker should prompt chest imaging for lung cancer. In a hospitalized patient, check the medication list - SSRIs are a very common culprit."
                        },
                        {
                            title: "Safe Correction: Avoiding Osmotic Demyelination",
                            content: "Correcting too fast causes osmotic demyelination syndrome (ODS):",
                            keyPoints: [
                                "ODS (Central Pontine Myelinolysis): Demyelination of pons, devastating neurological injury",
                                "Risk factors: Chronic hyponatremia (>48h), alcoholism, malnutrition, hypokalemia",
                                "Safe correction rate: ≤8-10 mEq/L in first 24 hours, ≤18 mEq/L in 48 hours",
                                "In high-risk patients: Limit to 4-6 mEq/L per 24 hours",
                                "If overcorrecting: Give D5W or desmopressin to bring Na back down",
                                "Symptoms of ODS: Occur 2-6 days after correction - dysarthria, dysphagia, quadriparesis, locked-in syndrome"
                            ],
                            clinicalCorrelation: "The slower the hyponatremia developed, the slower you must correct it. Acute hyponatremia (<48h) can be corrected faster because brain hasn't adapted. Chronic requires extreme caution."
                        },
                        {
                            title: "Severe Symptomatic Hyponatremia",
                            content: "When to use hypertonic saline (3% NaCl):",
                            keyPoints: [
                                "Symptoms: Seizures, severe confusion, coma, respiratory distress",
                                "Give 100-150 mL of 3% saline over 10-20 minutes",
                                "Goal: Raise Na by 4-6 mEq/L to stop symptoms",
                                "Recheck Na every 2-4 hours",
                                "Stop hypertonic saline once symptoms improve OR Na rises 4-6 mEq/L",
                                "Then proceed with slower correction for remaining deficit",
                                "ICU monitoring required for hypertonic saline"
                            ],
                            clinicalCorrelation: "Hypertonic saline is reserved for SYMPTOMATIC hyponatremia (seizures, severe encephalopathy). Most hyponatremia is chronic and asymptomatic - don't reflexively reach for 3% saline."
                        }
                    ],
                    quiz: [
                        {
                            question: "A 68-year-old woman on an SSRI presents with Na 118, serum osm 252, urine osm 450, urine Na 45. She's euvolemic by exam. What's the diagnosis?",
                            options: [
                                "Psychogenic polydipsia",
                                "SIADH, likely SSRI-induced",
                                "Hypothyroidism",
                                "Cerebral salt wasting"
                            ],
                            correctIndex: 1,
                            explanation: "This is classic SIADH: low serum osm (true hyponatremia), euvolemic, urine osm >100 (ADH is active despite low serum osm), urine Na >30. SSRIs are a well-known cause. Treatment: consider SSRI discontinuation, fluid restriction."
                        },
                        {
                            question: "This patient is asymptomatic. Na was 118 yesterday, now 126 after overnight fluids. What's the concern?",
                            options: [
                                "She needs more aggressive correction to reach normal",
                                "Correction of 8 mEq/L in 24 hours is too fast - risk of osmotic demyelination",
                                "This rate of correction is appropriate for chronic hyponatremia",
                                "She needs hypertonic saline to continue correction"
                            ],
                            correctIndex: 2,
                            explanation: "8 mEq/L rise in 24 hours is at the upper limit of safe correction (goal ≤8-10 mEq/24h). Since she's asymptomatic and has chronic SSRI use (suggesting chronic hyponatremia), you should NOT continue aggressive correction. Hold IV fluids, monitor closely. If Na rises further, consider D5W or desmopressin to slow correction."
                        }
                    ]
                }
            },
            
            longitudinalTimeline: [
                { day: 1, title: "Emergency Department", setting: "ED", timeLabel: "Day 1" },
                { day: 2, title: "Hospital Day 2", setting: "Floor", timeLabel: "Day 2" },
                { day: 3, title: "Hospital Day 3", setting: "Floor", timeLabel: "Day 3" },
                { day: 4, title: "Hospital Day 4", setting: "Floor", timeLabel: "Day 4" },
                { day: 5, title: "Discharge", setting: "Floor", timeLabel: "Day 5" },
                { day: 30, title: "Follow-up", setting: "Clinic", timeLabel: "2 Weeks" }
            ],
            
            day1: {
                patientInfo: {
                    name: "Mark Hall",
                    firstName: "Mark",
                    lastName: "Hall",
                    age: 74,
                    gender: "female",
                    setting: "urgent_care",
                    chiefComplaint: "Confusion and weakness"
                },
                
                vitals: {
                    BP: "138/82",
                    HR: 76,
                    RR: 16,
                    Temp: "98.4°F",
                    SpO2: "97% RA"
                },
                
                hpiSections: [
                    {
                        question: "Describe the confusion",
                        answer: "Daughter noticed patient has been 'not herself' for the past 3-4 days. Forgetting conversations, seems drowsy, stumbled twice yesterday. No falls. No headache, fever, or focal weakness. Eating and drinking normally.",
                        mechanismLink: {
                            title: "Why does hyponatremia cause confusion?",
                            explanation: "Neurons are sensitive to osmolality. Low serum osmolality causes water to shift INTO brain cells (down the osmotic gradient), causing cerebral edema. Even mild edema impairs neuronal function. Severe hyponatremia can cause seizures, coma, and brain herniation."
                        }
                    },
                    {
                        question: "Medical history and medications?",
                        answer: "HTN, depression, osteoporosis. Medications: sertraline 100mg (started 6 weeks ago for depression after husband's death), lisinopril 10mg, alendronate weekly, calcium/vitamin D. No recent medication changes except the sertraline.",
                        mechanismLink: {
                            title: "How do SSRIs cause hyponatremia?",
                            explanation: "SSRIs increase ADH release and may also increase renal sensitivity to ADH. SIADH develops in 5-10% of patients on SSRIs, typically within the first few weeks. Risk is higher in elderly women. It's one of the most common drug-induced causes of hyponatremia."
                        }
                    },
                    {
                        question: "Fluid intake and other symptoms?",
                        answer: "Drinks about 6-8 glasses of water daily - 'trying to stay hydrated.' No polydipsia. No vomiting, diarrhea. No recent illness. No cough or shortness of breath. Weight has been stable.",
                        mechanismLink: {
                            title: "Why does water intake matter?",
                            explanation: "In SIADH, the kidney can't excrete free water properly. Normal water intake that a healthy person would easily handle instead accumulates, diluting the serum sodium. Even moderate intake becomes 'excessive' in the context of impaired water excretion."
                        }
                    }
                ],
                
                physicalExam: {
                    general: "Elderly woman, drowsy but arousable, mildly confused",
                    HEENT: "Moist mucous membranes, no JVD, no thyroid enlargement",
                    cardiovascular: "Regular rhythm, no murmurs, no S3",
                    respiratory: "Clear bilaterally",
                    abdomen: "Soft, non-tender, no ascites",
                    extremities: "No edema, normal skin turgor",
                    neuro: "Oriented to person and place but not date, slow to respond, no focal deficits, gait mildly unsteady, no asterixis"
                },
                
                initialLabs: {
                    BMP: { Na: 119, K: 4.0, Cl: 86, CO2: 24, BUN: 10, Cr: 0.7, Glucose: 98 },
                    other: { serumOsm: 248, urineOsm: 520, urineNa: 58, TSH: 2.1, cortisol: 18 },
                    labInterpretation: [
                        {
                            lab: "Sodium 119 mEq/L",
                            meaning: "Severe hyponatremia. Symptoms typically appear below 125, and risk of seizures increases significantly below 115-120."
                        },
                        {
                            lab: "Serum osmolality 248 mOsm/kg (low)",
                            meaning: "Confirms TRUE hypotonic hyponatremia. This is not pseudohyponatremia (normal osm) or hypertonic (high osm from glucose)."
                        },
                        {
                            lab: "Urine osmolality 520 mOsm/kg (high)",
                            meaning: "Inappropriately concentrated urine. If the body sensed low serum osm, it should suppress ADH and make dilute urine (<100). Uosm >100 means ADH is active."
                        },
                        {
                            lab: "Urine sodium 58 mEq/L (high)",
                            meaning: "High urine Na (>30) with euvolemia suggests SIADH. In hypovolemia, urine Na would be low (<20) as kidneys conserve sodium."
                        },
                        {
                            lab: "TSH and cortisol normal",
                            meaning: "Rules out hypothyroidism and adrenal insufficiency as causes of euvolemic hyponatremia. This supports SIADH diagnosis."
                        }
                    ]
                },
                
                initialManagement: {
                    title: "Management of Symptomatic Chronic Hyponatremia",
                    interventions: [
                        {
                            action: "Fluid restriction to 1000 mL/day",
                            rationale: "First-line treatment for SIADH. Restrict free water intake to less than daily obligate losses, allowing gradual Na rise."
                        },
                        {
                            action: "Hold sertraline (suspect SSRI-induced SIADH)",
                            rationale: "Remove the likely precipitant. Discuss with psychiatry about alternative antidepressant with lower SIADH risk."
                        },
                        {
                            action: "Monitor Na every 6 hours, goal correction ≤8 mEq/L in 24 hours",
                            rationale: "Chronic hyponatremia requires SLOW correction to avoid osmotic demyelination syndrome. Her brain has adapted; rapid correction is dangerous."
                        },
                        {
                            action: "No hypertonic saline at this time",
                            rationale: "She has mild neurological symptoms (confusion, unsteadiness) but no seizures or coma. Fluid restriction should be sufficient. Reserve 3% saline for severe symptoms."
                        },
                        {
                            action: "Fall precautions, bed rest",
                            rationale: "Hyponatremia causes gait instability. Prevent injury while correcting sodium."
                        }
                    ]
                },
                
                dayConclusion: {
                    summary: "74-year-old woman with SSRI-induced SIADH presenting with symptomatic hyponatremia (Na 119). Euvolemic by exam with inappropriately concentrated urine. Started fluid restriction, held sertraline, monitoring for safe correction rate.",
                    teachingPoint: "The hyponatremia workup is: (1) Confirm true hyponatremia with serum osm, (2) Assess volume status, (3) Check urine osm and Na. SIADH = euvolemic + Uosm >100 + UNa >30 + normal thyroid/adrenal. Correct slowly - the brain adapted, and rapid correction causes ODS."
                }
            }
        },

        // ==================== COPD EXACERBATION DEEP CASE ====================
        'copd-deep': {
            id: 'copd-deep',
            title: 'COPD Exacerbation',
            subtitle: 'ABG interpretation, bronchodilators, and NIV decisions',
            category: 'Pulmonology',
            difficulty: 'Intermediate',
            estimatedTime: '45-55 min',
            tags: ['Acid-Base', 'Bronchodilators', 'Steroids', 'BiPAP', 'Respiratory Failure'],
            
            primer: {
                anatomy: {
                    title: "COPD Pathophysiology",
                    sections: [
                        {
                            title: "Obstructive Lung Disease",
                            content: "COPD is characterized by airflow limitation that is not fully reversible:",
                            keyPoints: [
                                "Chronic bronchitis: Airway inflammation, mucus hypersecretion, 'blue bloater'",
                                "Emphysema: Destruction of alveolar walls, loss of elastic recoil, 'pink puffer'",
                                "Most patients have components of both",
                                "Pathology: Small airway fibrosis, goblet cell hyperplasia, loss of alveolar attachments",
                                "Air trapping: Can't fully exhale → hyperinflation → increased work of breathing",
                                "FEV1/FVC <0.70 after bronchodilator confirms obstruction"
                            ],
                            clinicalCorrelation: "Hyperinflation is why COPD patients breathe with pursed lips (creates auto-PEEP to keep airways open) and lean forward (optimizes diaphragm mechanics). It's also why they become breathless - their lungs are already full."
                        },
                        {
                            title: "Gas Exchange in COPD",
                            content: "COPD causes both hypoxemia and hypercapnia through different mechanisms:",
                            keyPoints: [
                                "V/Q mismatch: Areas with poor ventilation but preserved perfusion → hypoxemia",
                                "Hypercapnia: Not from V/Q mismatch but from alveolar hypoventilation",
                                "Increased dead space: Emphysematous bullae - ventilated but not perfused",
                                "Respiratory muscle fatigue: Diaphragm at mechanical disadvantage due to hyperinflation",
                                "CO2 retention develops when ventilation can't match CO2 production",
                                "Chronic hypercapnia → renal compensation (HCO3 retention) → chronic respiratory acidosis"
                            ],
                            clinicalCorrelation: "Chronic CO2 retainers have compensated respiratory acidosis at baseline (e.g., pH 7.36, pCO2 55, HCO3 32). Their normal is NOT your normal. During exacerbation, they may develop acute-on-chronic respiratory acidosis."
                        },
                        {
                            title: "COPD Exacerbation Triggers",
                            content: "Exacerbations are acute worsening requiring change in therapy:",
                            keyPoints: [
                                "Infection (most common): Viral (rhinovirus, influenza) or bacterial (H. flu, M. catarrhalis, S. pneumoniae, Pseudomonas)",
                                "Air pollution and environmental irritants",
                                "Medication non-adherence",
                                "Pulmonary embolism (mimics or coexists with COPD exacerbation)",
                                "Heart failure decompensation (COPD and HF often coexist)",
                                "Pneumothorax (from ruptured bleb)",
                                "Cardinal symptoms: Increased dyspnea, increased sputum volume, increased sputum purulence"
                            ],
                            clinicalCorrelation: "Always consider PE in COPD exacerbation, especially if the presentation is atypical or patient doesn't respond to standard treatment. COPD patients are at increased VTE risk from immobility and inflammation."
                        }
                    ]
                },
                
                physiology: {
                    title: "ABG Interpretation and Treatment",
                    sections: [
                        {
                            title: "ABG in COPD: Acute vs Chronic",
                            content: "Distinguishing acute from chronic respiratory acidosis is critical:",
                            keyPoints: [
                                "Acute respiratory acidosis: For every 10 mmHg ↑ pCO2, HCO3 rises ~1 mEq/L",
                                "Chronic respiratory acidosis: For every 10 mmHg ↑ pCO2, HCO3 rises ~3.5 mEq/L",
                                "Example: pCO2 60, HCO3 26 → Acute (expected HCO3 ~25 for acute)",
                                "Example: pCO2 60, HCO3 33 → Chronic (expected HCO3 ~31-32 for chronic)",
                                "Acute-on-chronic: pH more acidemic than expected for the HCO3 level",
                                "Always compare to baseline ABG if available"
                            ],
                            clinicalCorrelation: "A pH of 7.25 with pCO2 70 and HCO3 30 in a known COPD patient suggests acute-on-chronic respiratory acidosis. The HCO3 is high (chronic compensation) but the pH is still acidemic (acute decompensation). This patient needs urgent intervention."
                        },
                        {
                            title: "Oxygen Therapy: The Hypoxic Drive Myth",
                            content: "Oxygen-induced hypercapnia is real but misunderstood:",
                            keyPoints: [
                                "Target SpO2 88-92% in COPD (not 94-98% like most patients)",
                                "Hypercapnia from oxygen is NOT primarily due to loss of hypoxic drive",
                                "Main mechanisms: V/Q redistribution (oxygen relieves hypoxic vasoconstriction → more blood to poorly ventilated areas), Haldane effect (oxygenated Hgb releases CO2)",
                                "DO NOT withhold oxygen from hypoxic COPD patient - they need it",
                                "DO titrate to SpO2 88-92% and monitor ABG for CO2 retention",
                                "If CO2 rises dangerously, add ventilatory support - don't just reduce oxygen"
                            ],
                            clinicalCorrelation: "The fear of oxygen has killed patients. A hypoxic COPD patient needs oxygen. Give it, target SpO2 88-92%, and watch the ABG. If CO2 rises with worsening acidosis, add BiPAP - don't leave them hypoxic."
                        },
                        {
                            title: "Bronchodilators and Steroids",
                            content: "The mainstays of COPD exacerbation treatment:",
                            keyPoints: [
                                "SABA (albuterol): First-line, repeat every 20 min x3 then q2-4h PRN",
                                "SAMA (ipratropium): Add to albuterol - combination is more effective than either alone",
                                "Nebulizer vs MDI+spacer: Equivalent efficacy, nebs easier in severe distress",
                                "Systemic steroids: Prednisone 40mg daily x5 days (REDUCE trial showed 5 = 14 days)",
                                "Antibiotics: For purulent sputum or severe exacerbation (azithromycin or doxycycline)",
                                "Magnesium: No strong evidence in COPD (unlike asthma)"
                            ],
                            clinicalCorrelation: "Don't skimp on bronchodilators in acute exacerbation. Continuous nebs may be needed initially. Steroids reduce treatment failure and improve lung function - the 5-day course is now standard."
                        },
                        {
                            title: "Non-Invasive Ventilation (NIV/BiPAP)",
                            content: "BiPAP reduces mortality and intubation in COPD exacerbation:",
                            keyPoints: [
                                "Indications: Respiratory acidosis (pH <7.35, pCO2 >45) despite initial treatment, severe dyspnea with accessory muscle use, respiratory rate >25",
                                "Settings: Start IPAP 10-12, EPAP 4-5, titrate to comfort and response",
                                "IPAP supports inspiratory effort (helps ventilation, CO2 clearance)",
                                "EPAP provides PEEP to counteract auto-PEEP (reduces work of breathing)",
                                "Contraindications: Uncooperative/altered mental status, facial trauma, high aspiration risk, hemodynamic instability",
                                "NIV reduces intubation by 65% and mortality by 50% in appropriate patients"
                            ],
                            clinicalCorrelation: "Start BiPAP early if there's respiratory acidosis. Don't wait until the patient is moribund. A trial of NIV is appropriate even for borderline cases - if they worsen, you can still intubate."
                        }
                    ],
                    quiz: [
                        {
                            question: "A known COPD patient presents with dyspnea. ABG: pH 7.28, pCO2 72, HCO3 33. Baseline pCO2 was 55. What does this represent?",
                            options: [
                                "Acute respiratory acidosis",
                                "Chronic respiratory acidosis (baseline)",
                                "Acute-on-chronic respiratory acidosis",
                                "Mixed metabolic and respiratory acidosis"
                            ],
                            correctIndex: 2,
                            explanation: "This is acute-on-chronic respiratory acidosis. The high HCO3 (33) reflects chronic compensation - expected for chronic pCO2 of ~55. But pCO2 is now 72 (17 above baseline), and pH is 7.28 (acidemic). The acute rise in CO2 hasn't had time for renal compensation, so pH drops. Treatment: BiPAP + bronchodilators + steroids."
                        },
                        {
                            question: "Same patient. SpO2 is 84%. You give oxygen and SpO2 improves to 91%. Repeat ABG shows pH 7.22, pCO2 82. What do you do?",
                            options: [
                                "Reduce oxygen - the CO2 is rising due to loss of hypoxic drive",
                                "Intubate immediately - the patient is deteriorating",
                                "Start BiPAP - provide ventilatory support while maintaining oxygenation",
                                "Give IV sodium bicarbonate to correct the acidosis"
                            ],
                            correctIndex: 2,
                            explanation: "The CO2 rose with oxygen, but you don't just remove oxygen from a hypoxic patient. The answer is to provide ventilatory support with BiPAP. BiPAP will help blow off CO2 while you continue to provide oxygen. If BiPAP fails, then consider intubation."
                        }
                    ]
                }
            },
            
            longitudinalTimeline: [
                { day: 1, title: "Emergency Department", setting: "ED", timeLabel: "Hour 0" },
                { day: 2, title: "Hospital Day 1", setting: "Floor", timeLabel: "Day 1" },
                { day: 3, title: "Hospital Day 2", setting: "Floor", timeLabel: "Day 2" },
                { day: 4, title: "Hospital Day 3", setting: "Floor", timeLabel: "Day 3" },
                { day: 5, title: "Discharge", setting: "Floor", timeLabel: "Day 4" },
                { day: 30, title: "Follow-up", setting: "Clinic", timeLabel: "4 Weeks" }
            ],
            
            day1: {
                patientInfo: {
                    name: "Robert Jenkins",
                    firstName: "Robert",
                    lastName: "Jenkins",
                    age: 69,
                    gender: "male",
                    setting: "urgent_care",
                    chiefComplaint: "Can't catch my breath"
                },
                
                vitals: {
                    BP: "148/88",
                    HR: 108,
                    RR: 28,
                    Temp: "100.4°F",
                    SpO2: "86% on 2L NC (home O2)"
                },
                
                hpiSections: [
                    {
                        question: "Describe the breathing difficulty",
                        answer: "Worsening over 4 days. Started with increased cough and 'cold symptoms.' Now can barely walk to the bathroom without stopping. Using his rescue inhaler every 2 hours with minimal relief. Slept sitting up last night. This is worse than his usual baseline.",
                        mechanismLink: {
                            title: "Why does airway inflammation worsen airflow limitation?",
                            explanation: "In COPD, airways are already narrowed at baseline. Infection/inflammation causes bronchospasm, mucosal edema, and mucus hypersecretion. This further narrows already compromised airways, dramatically increasing airway resistance and work of breathing."
                        }
                    },
                    {
                        question: "Sputum changes?",
                        answer: "Usually produces small amounts of white/clear mucus daily. Now has copious thick, yellow-green sputum. 'Filling up tissues.' Occasional streaks of blood yesterday.",
                        mechanismLink: {
                            title: "What does purulent sputum indicate?",
                            explanation: "Purulent (yellow-green) sputum suggests bacterial infection - the color comes from neutrophil enzymes (myeloperoxidase). The Anthonisen criteria for COPD exacerbation: increased dyspnea, increased sputum volume, increased sputum purulence. Two of three (especially purulence) suggests bacterial etiology and benefit from antibiotics."
                        }
                    },
                    {
                        question: "COPD history?",
                        answer: "Diagnosed 12 years ago. FEV1 was 38% predicted last year (GOLD Stage 3/Severe). On tiotropium, fluticasone/salmeterol, home oxygen 2L continuously. Uses albuterol PRN. Hospitalized twice in the past year for exacerbations. 50 pack-year smoking history, quit 8 years ago.",
                        mechanismLink: {
                            title: "Why does severe COPD predict worse exacerbation outcomes?",
                            explanation: "Lower FEV1 = less pulmonary reserve. These patients have limited ability to increase ventilation when demand rises. They also have more chronic hypercapnia and are more prone to respiratory failure during exacerbations. History of prior exacerbations predicts future ones."
                        }
                    }
                ],
                
                physicalExam: {
                    general: "Elderly man, sitting upright, leaning forward, using accessory muscles, speaking in 2-3 word sentences",
                    HEENT: "Pursed lip breathing, no JVD (hard to assess with accessory muscle use)",
                    cardiovascular: "Tachycardic, regular, distant heart sounds, no peripheral edema",
                    respiratory: "Diffuse expiratory wheezes bilaterally, prolonged expiratory phase (I:E 1:4), diminished breath sounds at bases, no crackles, hyperresonant to percussion",
                    abdomen: "Soft, non-tender, using abdominal muscles to breathe",
                    extremities: "Digital clubbing, no cyanosis currently (on oxygen)",
                    neuro: "Alert but appears fatigued, anxious"
                },
                
                initialLabs: {
                    BMP: { Na: 140, K: 4.2, Cl: 96, CO2: 32, BUN: 22, Cr: 1.0, Glucose: 142 },
                    CBC: { WBC: 14.2, Hgb: 16.8, Plt: 245 },
                    ABG: { pH: 7.31, pCO2: 62, pO2: 52, HCO3: 31, FiO2: "2L NC (~28%)" },
                    labInterpretation: [
                        {
                            lab: "ABG: pH 7.31, pCO2 62, HCO3 31",
                            meaning: "Acute-on-chronic respiratory acidosis. Elevated HCO3 (31) indicates chronic CO2 retention with renal compensation. But pH is acidemic (7.31) indicating acute decompensation on top of chronic baseline."
                        },
                        {
                            lab: "pO2 52 on 2L NC",
                            meaning: "Hypoxemic despite supplemental oxygen. Combined with CO2 retention, this indicates significant V/Q mismatch and hypoventilation."
                        },
                        {
                            lab: "Hemoglobin 16.8 (polycythemia)",
                            meaning: "Elevated Hgb is compensatory response to chronic hypoxemia - body makes more RBCs to carry more oxygen. Indicates chronic severe COPD."
                        },
                        {
                            lab: "WBC 14.2",
                            meaning: "Leukocytosis suggests bacterial infection (though steroids can also elevate WBC). Combined with purulent sputum, supports antibiotic use."
                        }
                    ]
                },
                
                imaging: {
                    cxr: {
                        findings: "Hyperinflated lungs, flattened diaphragms, increased AP diameter. No focal consolidation. No pneumothorax. Enlarged pulmonary arteries.",
                        interpretation: "Chronic changes of severe COPD (hyperinflation). No evidence of pneumonia. Enlarged pulmonary arteries suggest pulmonary hypertension from chronic hypoxemia."
                    }
                },
                
                initialManagement: {
                    title: "COPD Exacerbation Management",
                    interventions: [
                        {
                            action: "Increase oxygen to maintain SpO2 88-92%",
                            rationale: "Target is 88-92% in COPD, not 94-98%. Hypoxemia is dangerous - treat it. Monitor ABG to watch for worsening hypercapnia."
                        },
                        {
                            action: "Nebulized albuterol 2.5mg + ipratropium 0.5mg, repeat x2 over 1 hour",
                            rationale: "Combined SABA + SAMA is more effective than either alone in acute exacerbation. Frequent dosing initially, then space to q4h."
                        },
                        {
                            action: "Prednisone 40mg PO (or methylprednisolone IV if can't take PO)",
                            rationale: "Systemic steroids are proven to reduce treatment failure, improve FEV1, and shorten recovery. 5-day course is standard."
                        },
                        {
                            action: "Azithromycin 500mg daily x3 days (or doxycycline)",
                            rationale: "Antibiotics indicated for purulent sputum + severe exacerbation. Cover H. flu, M. catarrhalis, S. pneumoniae."
                        },
                        {
                            action: "Initiate BiPAP: IPAP 12, EPAP 5, FiO2 to maintain SpO2 88-92%",
                            rationale: "pH 7.31 with acute-on-chronic respiratory acidosis meets criteria for NIV. BiPAP will assist ventilation, reduce work of breathing, and help clear CO2. Goal: pH improvement within 1-2 hours."
                        }
                    ]
                },
                
                dayConclusion: {
                    summary: "69-year-old with severe COPD presenting with acute exacerbation triggered by presumed bacterial infection. Acute-on-chronic respiratory acidosis (pH 7.31) on ABG. Started on bronchodilators, steroids, antibiotics, and BiPAP.",
                    teachingPoint: "In COPD exacerbation: Give oxygen (target 88-92%), aggressive bronchodilators, steroids for everyone, antibiotics for purulent sputum. If respiratory acidosis persists, start BiPAP early - it saves lives and prevents intubation."
                }
            }
        },

        // ==================== CIRRHOSIS COMPLICATIONS DEEP CASE ====================
        'cirrhosis-deep': {
            id: 'cirrhosis-deep',
            title: 'Cirrhosis Complications',
            subtitle: 'Ascites, SBP, hepatic encephalopathy, and hepatorenal syndrome',
            category: 'Hepatology',
            difficulty: 'Advanced',
            estimatedTime: '55-70 min',
            tags: ['Portal Hypertension', 'Ascites', 'SBP', 'Encephalopathy', 'Hepatorenal'],
            
            primer: {
                anatomy: {
                    title: "Portal Hypertension and Cirrhosis Pathophysiology",
                    sections: [
                        {
                            title: "Portal Circulation and Hypertension",
                            content: "Portal hypertension is the driving force behind most cirrhosis complications:",
                            keyPoints: [
                                "Portal vein drains GI tract, spleen, pancreas → liver → hepatic veins → IVC",
                                "Normal portal pressure gradient <5 mmHg; clinically significant >10 mmHg",
                                "Cirrhosis causes intrahepatic resistance from fibrosis and nodules",
                                "Collaterals form: Esophageal varices, hemorrhoids, caput medusae",
                                "Portal pressure >12 mmHg → varices may bleed"
                            ],
                            clinicalCorrelation: "Variceal bleeding occurs when portal pressure exceeds 12 mmHg. Beta-blockers reduce portal pressure and prevent first bleed."
                        },
                        {
                            title: "Ascites Formation",
                            content: "Ascites is the most common complication of cirrhosis:",
                            keyPoints: [
                                "Portal hypertension → increased splanchnic capillary pressure",
                                "Hypoalbuminemia → decreased oncotic pressure",
                                "Splanchnic vasodilation → arterial underfilling → RAAS activation",
                                "Net result: Total body sodium excess but intravascular depletion",
                                "SAAG ≥1.1 confirms portal hypertension as cause"
                            ],
                            clinicalCorrelation: "The cirrhotic patient is total-body overloaded but intravascularly depleted. Aggressive diuresis can precipitate hepatorenal syndrome."
                        }
                    ]
                },
                physiology: {
                    title: "Diagnosis and Management",
                    sections: [
                        {
                            title: "SBP Management",
                            content: "Spontaneous bacterial peritonitis is life-threatening:",
                            keyPoints: [
                                "Diagnosis: Ascitic fluid PMN ≥250 cells/mm³",
                                "Treatment: Cefotaxime 2g IV q8h + Albumin 1.5g/kg day 1, 1g/kg day 3",
                                "Albumin reduces mortality from 30% to 10%",
                                "Prophylaxis for prior SBP or low-protein ascites"
                            ],
                            clinicalCorrelation: "Always tap new ascites or on admission. SBP can present only as worsening encephalopathy."
                        },
                        {
                            title: "Hepatic Encephalopathy",
                            content: "Results from neurotoxins bypassing the failing liver:",
                            keyPoints: [
                                "Ammonia crosses BBB causing astrocyte swelling",
                                "Precipitants: Infection, GI bleed, constipation, medications",
                                "Treatment: Lactulose to 2-3 BM/day, rifaximin for recurrence",
                                "Ammonia levels correlate poorly with severity"
                            ],
                            clinicalCorrelation: "Treat the precipitant, not just the ammonia level."
                        }
                    ],
                    quiz: [
                        {
                            question: "Cirrhotic patient with confusion has PMN 380 on paracentesis. What's the treatment?",
                            options: ["Lactulose only", "Cefotaxime + albumin", "Cefotaxime alone", "Diuretics"],
                            correctIndex: 1,
                            explanation: "PMN ≥250 = SBP. Requires antibiotics PLUS albumin - albumin reduces mortality significantly."
                        }
                    ]
                }
            },
            longitudinalTimeline: [
                { day: 1, title: "Emergency Department", setting: "ED", timeLabel: "Day 1" },
                { day: 2, title: "Hospital Day 2", setting: "Floor", timeLabel: "Day 2" },
                { day: 3, title: "Hospital Day 3", setting: "Floor", timeLabel: "Day 3" }
            ],
            day1: {
                patientInfo: { name: "John Chen", age: 58, gender: "male",
                    firstName: "John",
                    lastName: "Chen",
                    setting: "emergency_department", chiefComplaint: "Confusion and abdominal swelling" },
                vitals: { BP: "98/62", HR: 92, RR: 18, Temp: "100.8°F", SpO2: "96% RA" },
                hpiSections: [
                    { question: "Describe the confusion", answer: "Increasingly confused over 2 days, sleeping more, didn't recognize daughter today.", mechanismLink: { title: "Why confusion?", explanation: "Hepatic encephalopathy from ammonia and other toxins bypassing the failing liver." } }
                ],
                physicalExam: { general: "Cachectic, difficult to arouse", abdomen: "Tense ascites, diffusely tender", neuro: "Grade 3 HE, asterixis present" },
                initialLabs: {
                    BMP: { Na: 128, K: 3.4, BUN: 32, Cr: 1.8 },
                    ascitesFluid: { PMN: 420, protein: 0.9 },
                    labInterpretation: [{ lab: "PMN 420", meaning: "Diagnostic for SBP - start antibiotics immediately" }]
                },
                initialManagement: {
                    title: "SBP + HE Management",
                    interventions: [
                        { action: "Cefotaxime 2g IV q8h", rationale: "Empiric SBP treatment" },
                        { action: "Albumin 1.5g/kg day 1", rationale: "Reduces renal failure and mortality" },
                        { action: "Lactulose until bowel movement", rationale: "Treats hepatic encephalopathy" }
                    ]
                },
                dayConclusion: { summary: "58-year-old with SBP precipitating HE. Started antibiotics and albumin.", teachingPoint: "Always tap ascites - SBP presents subtly." }
            }
        },

        // ==================== THYROID EMERGENCIES DEEP CASE ====================
        'thyroid-deep': {
            id: 'thyroid-deep',
            title: 'Thyroid Emergencies',
            subtitle: 'Thyroid storm and myxedema coma',
            category: 'Endocrinology',
            difficulty: 'Advanced',
            estimatedTime: '50-65 min',
            tags: ['Thyroid Storm', 'Myxedema', 'PTU', 'Beta-Blocker'],
            
            primer: {
                anatomy: {
                    title: "Thyroid Physiology",
                    sections: [
                        {
                            title: "HPT Axis",
                            content: "The thyroid axis regulates metabolism:",
                            keyPoints: [
                                "Hypothalamus → TRH → Pituitary → TSH → Thyroid → T4/T3",
                                "T4 is the prohormone, T3 is active",
                                "TSH is the most sensitive marker of thyroid function"
                            ],
                            clinicalCorrelation: "Treatment blocks synthesis, release, and peripheral conversion."
                        },
                        {
                            title: "Thyroid Storm",
                            content: "Life-threatening hyperthyroidism exacerbation:",
                            keyPoints: [
                                "Precipitants: Infection, surgery, stopping medications",
                                "Burch-Wartofsky score ≥45 suggests storm",
                                "Mortality 10-30% with treatment"
                            ],
                            clinicalCorrelation: "Diagnosis is clinical - don't wait for labs."
                        }
                    ]
                },
                physiology: {
                    title: "Treatment",
                    sections: [
                        {
                            title: "Thyroid Storm Treatment Order",
                            content: "Sequence matters:",
                            keyPoints: [
                                "1. Beta-blocker (propranolol) - immediate symptom control",
                                "2. PTU - blocks synthesis AND T4→T3 conversion",
                                "3. Iodine (1 hour after PTU) - blocks release",
                                "4. Steroids - blocks conversion, treats adrenal insufficiency"
                            ],
                            clinicalCorrelation: "Iodine before PTU can worsen hyperthyroidism (Jod-Basedow)."
                        }
                    ],
                    quiz: [
                        {
                            question: "What's the correct treatment order for thyroid storm?",
                            options: ["Iodine → PTU → Beta-blocker", "Beta-blocker → PTU → Iodine → Steroids", "PTU → Iodine → Beta-blocker", "Steroids first"],
                            correctIndex: 1,
                            explanation: "Beta-blocker first for symptoms, PTU blocks synthesis, iodine 1h later blocks release, steroids block conversion."
                        }
                    ]
                }
            },
            longitudinalTimeline: [
                { day: 1, title: "Emergency Department", setting: "ED", timeLabel: "Hour 0" },
                { day: 2, title: "ICU Day 1", setting: "ICU", timeLabel: "Day 1" }
            ],
            day1: {
                patientInfo: { name: "Sandra Peterson", age: 42, gender: "female",
                    firstName: "Sandra",
                    lastName: "Peterson",
                    setting: "hospital_inpatient", chiefComplaint: "Racing heart, fever, confusion" },
                vitals: { BP: "158/72", HR: 148, RR: 24, Temp: "103.2°F", SpO2: "97% RA" },
                hpiSections: [
                    { question: "What happened?", answer: "Graves' disease, stopped methimazole 3 weeks ago. Agitated, sweating, pacing for 2 days.", mechanismLink: { title: "Why these symptoms?", explanation: "Thyroid hormone increases metabolic rate and catecholamine sensitivity." } }
                ],
                physicalExam: { general: "Agitated, diaphoretic", HEENT: "Lid lag, proptosis, goiter", cardiovascular: "Irregularly irregular (AFib), tachycardic" },
                initialLabs: {
                    thyroid: { TSH: "<0.01", freeT4: 5.8, freeT3: 18.2 },
                    labInterpretation: [{ lab: "TSH suppressed, T4/T3 elevated", meaning: "Confirms severe thyrotoxicosis" }]
                },
                initialManagement: {
                    title: "Thyroid Storm Management",
                    interventions: [
                        { action: "Propranolol 1mg IV then 60-80mg PO q4h", rationale: "First - controls symptoms immediately" },
                        { action: "PTU 600mg load, then 200mg q4h", rationale: "Blocks synthesis and conversion" },
                        { action: "SSKI 5 drops q6h - 1 HOUR AFTER PTU", rationale: "Blocks hormone release" },
                        { action: "Hydrocortisone 100mg IV q8h", rationale: "Blocks conversion, treats relative AI" }
                    ]
                },
                dayConclusion: { summary: "42-year-old with thyroid storm (Burch-Wartofsky 90). Started sequential therapy.", teachingPoint: "Treatment order matters: beta-blocker → PTU → iodine (1h later) → steroids." }
            }
        },

        // ==================== BACTERIAL MENINGITIS DEEP CASE ====================
        'meningitis-deep': {
            id: 'meningitis-deep',
            title: 'Bacterial Meningitis',
            subtitle: 'CSF analysis, empiric therapy, and dexamethasone',
            category: 'Infectious Disease',
            difficulty: 'Advanced',
            estimatedTime: '50-65 min',
            tags: ['CNS Infection', 'LP', 'CSF', 'Antibiotics', 'Dexamethasone'],
            
            primer: {
                anatomy: {
                    title: "Meningeal Anatomy",
                    sections: [
                        {
                            title: "Meninges and CSF",
                            content: "The meninges protect the CNS:",
                            keyPoints: [
                                "Three layers: Dura, arachnoid, pia mater",
                                "CSF in subarachnoid space",
                                "Blood-brain barrier limits antibiotic penetration"
                            ],
                            clinicalCorrelation: "Inflammation increases BBB permeability, improving antibiotic penetration."
                        },
                        {
                            title: "Pathogens by Age",
                            content: "Empiric therapy is age-based:",
                            keyPoints: [
                                "Adults <50: S. pneumoniae, N. meningitidis",
                                "Adults ≥50: Add Listeria coverage (ampicillin)",
                                "Post-neurosurgery: MRSA and Pseudomonas coverage"
                            ],
                            clinicalCorrelation: "Listeria is resistant to cephalosporins - must add ampicillin if ≥50 or immunocompromised."
                        }
                    ]
                },
                physiology: {
                    title: "Diagnosis and Treatment",
                    sections: [
                        {
                            title: "CSF Findings",
                            content: "CSF analysis distinguishes bacterial from viral:",
                            keyPoints: [
                                "Bacterial: WBC >1000 (neutrophils), glucose low (<40), protein high",
                                "Viral: WBC <500 (lymphocytes), glucose normal",
                                "Gram stain positive in 60-90% of untreated bacterial"
                            ],
                            clinicalCorrelation: "Treat based on clinical suspicion - don't wait for CSF if delayed."
                        },
                        {
                            title: "Empiric Antibiotics",
                            content: "Don't delay treatment:",
                            keyPoints: [
                                "Under 50: Ceftriaxone + Vancomycin",
                                "50 or older: ADD Ampicillin",
                                "Dexamethasone BEFORE or WITH first antibiotic dose"
                            ],
                            clinicalCorrelation: "Every hour of antibiotic delay increases mortality ~7%."
                        }
                    ],
                    quiz: [
                        {
                            question: "68-year-old with fever and confusion - empiric regimen?",
                            options: ["Ceftriaxone alone", "Ceftriaxone + Vancomycin", "Ceftriaxone + Vancomycin + Ampicillin", "Ampicillin alone"],
                            correctIndex: 2,
                            explanation: "Age ≥50 requires ampicillin for Listeria coverage. Full regimen: Ceftriaxone + Vancomycin + Ampicillin."
                        }
                    ]
                }
            },
            longitudinalTimeline: [
                { day: 1, title: "Emergency Department", setting: "ED", timeLabel: "Hour 0" },
                { day: 2, title: "ICU Day 1", setting: "ICU", timeLabel: "Day 1" }
            ],
            day1: {
                patientInfo: { name: "Alex Kumar", age: 22, gender: "male",
                    firstName: "Alex",
                    lastName: "Kumar",
                    setting: "emergency_department", chiefComplaint: "Severe headache, fever, stiff neck" },
                vitals: { BP: "108/68", HR: 112, RR: 20, Temp: "102.8°F", SpO2: "98% RA" },
                hpiSections: [
                    { question: "Symptom onset?", answer: "College student, worst headache of life overnight, then fever and confusion. Lives in dormitory.", mechanismLink: { title: "Why neck stiffness?", explanation: "Meningeal inflammation causes painful resistance to neck flexion." } }
                ],
                physicalExam: { general: "Ill, photophobic", neck: "Severe nuchal rigidity, positive Kernig and Brudzinski signs", skin: "Petechiae on lower extremities" },
                initialLabs: {
                    CSF: { WBC: 2400, neutrophils: "92%", glucose: 18, protein: 380, gramStain: "Gram-negative diplococci" },
                    labInterpretation: [{ lab: "Gram-negative diplococci", meaning: "N. meningitidis - meningococcal meningitis" }]
                },
                initialManagement: {
                    title: "Meningitis Management",
                    interventions: [
                        { action: "Dexamethasone 0.15mg/kg IV BEFORE antibiotics", rationale: "Reduces inflammation and improves outcomes" },
                        { action: "Ceftriaxone 2g IV + Vancomycin 1g IV within 15 min", rationale: "Empiric coverage - young adult doesn't need ampicillin" },
                        { action: "Droplet precautions, notify public health", rationale: "Meningococcal disease is contagious and reportable" }
                    ]
                },
                dayConclusion: { summary: "22-year-old with meningococcal meningitis. Dex before antibiotics.", teachingPoint: "Don't delay antibiotics. Dexamethasone before or with first dose." }
            }
        },

        // ==================== ANAPHYLAXIS DEEP CASE ====================
        'anaphylaxis-deep': {
            id: 'anaphylaxis-deep',
            title: 'Anaphylaxis',
            subtitle: 'Recognition, epinephrine, and biphasic reactions',
            category: 'Allergy/Immunology',
            difficulty: 'Intermediate',
            estimatedTime: '40-50 min',
            tags: ['Emergency', 'Epinephrine', 'Airway', 'Biphasic'],
            
            primer: {
                anatomy: {
                    title: "Anaphylaxis Pathophysiology",
                    sections: [
                        {
                            title: "IgE-Mediated Reaction",
                            content: "Mast cell degranulation causes multi-system effects:",
                            keyPoints: [
                                "Allergen crosslinks IgE on mast cells → immediate degranulation",
                                "Histamine causes vasodilation, bronchoconstriction, urticaria",
                                "Common triggers: Foods, insect stings, medications"
                            ],
                            clinicalCorrelation: "Symptoms develop within minutes. Faster onset often means more severe reaction."
                        }
                    ]
                },
                physiology: {
                    title: "Treatment",
                    sections: [
                        {
                            title: "Epinephrine is First Line",
                            content: "Epinephrine is the ONLY first-line treatment:",
                            keyPoints: [
                                "Dose: 0.3-0.5mg IM anterolateral thigh",
                                "Repeat every 5-15 min if needed",
                                "NO contraindications in anaphylaxis",
                                "Antihistamines/steroids are adjunctive only"
                            ],
                            clinicalCorrelation: "Delayed epinephrine is the most common error. Give it FIRST."
                        },
                        {
                            title: "Biphasic Reactions",
                            content: "Symptoms can recur hours later:",
                            keyPoints: [
                                "Occurs in 1-20% of cases, usually 8-12 hours",
                                "Observe minimum 4-6 hours",
                                "Always discharge with EpiPen prescription"
                            ],
                            clinicalCorrelation: "Never discharge without EpiPen and allergy referral."
                        }
                    ],
                    quiz: [
                        {
                            question: "Patient with throat tightness and BP 78/50 after eating shrimp - first treatment?",
                            options: ["Diphenhydramine", "Methylprednisolone", "Epinephrine IM", "Albuterol"],
                            correctIndex: 2,
                            explanation: "Epinephrine IM is ALWAYS first for anaphylaxis."
                        }
                    ]
                }
            },
            longitudinalTimeline: [
                { day: 1, title: "Emergency Department", setting: "ED", timeLabel: "Hour 0" },
                { day: 2, title: "Observation", setting: "ED", timeLabel: "Hour 6" }
            ],
            day1: {
                patientInfo: { name: "Teresa Nguyen", age: 34, gender: "female",
                    firstName: "Teresa",
                    lastName: "Nguyen",
                    setting: "emergency_department", chiefComplaint: "Difficulty breathing after eating" },
                vitals: { BP: "82/54", HR: 124, RR: 28, Temp: "98.6°F", SpO2: "91% RA" },
                hpiSections: [
                    { question: "What happened?", answer: "Peanut allergy, ate Thai food 20 min ago, developed lip tingling, hives, throat closing, nearly passed out.", mechanismLink: { title: "Why so rapid?", explanation: "IgE-mediated reactions cause immediate mast cell degranulation." } }
                ],
                physicalExam: { general: "Anxious, using accessory muscles", HEENT: "Lip/tongue angioedema, stridor", skin: "Diffuse urticaria" },
                initialManagement: {
                    title: "Anaphylaxis Management",
                    interventions: [
                        { action: "Epinephrine 0.5mg IM IMMEDIATELY", rationale: "Only first-line treatment" },
                        { action: "High-flow O2, prepare for airway", rationale: "Stridor indicates upper airway involvement" },
                        { action: "Large-bore IV, NS 2L bolus", rationale: "Distributive shock from vasodilation" },
                        { action: "Diphenhydramine + famotidine + methylprednisolone", rationale: "Adjunctive - NOT substitutes for epi" }
                    ]
                },
                dayConclusion: { summary: "Anaphylaxis from peanut exposure, required 2 doses epinephrine.", teachingPoint: "Epinephrine first. No contraindications. Repeat if needed. Always discharge with EpiPen." }
            }
        },

        // ==================== ADRENAL INSUFFICIENCY DEEP CASE ====================
        'adrenal-deep': {
            id: 'adrenal-deep',
            title: 'Adrenal Insufficiency',
            subtitle: 'Primary vs secondary, stress dosing, adrenal crisis',
            category: 'Endocrinology',
            difficulty: 'Intermediate',
            estimatedTime: '45-55 min',
            tags: ['Cortisol', 'HPA Axis', 'Stress Dosing', 'Crisis'],
            
            primer: {
                anatomy: {
                    title: "HPA Axis",
                    sections: [
                        {
                            title: "Primary vs Secondary AI",
                            content: "The distinction affects presentation:",
                            keyPoints: [
                                "Primary (Addison's): Adrenal destruction → low cortisol AND aldosterone",
                                "- Features: Hyperpigmentation, hyperkalemia, salt craving",
                                "Secondary: Pituitary/steroid suppression → low cortisol, aldosterone preserved",
                                "- Features: No hyperpigmentation, no hyperkalemia",
                                "Most common cause: Chronic steroid use"
                            ],
                            clinicalCorrelation: "Primary has hyperkalemia (no aldosterone). Secondary does not."
                        }
                    ]
                },
                physiology: {
                    title: "Management",
                    sections: [
                        {
                            title: "Adrenal Crisis",
                            content: "Medical emergency requiring immediate treatment:",
                            keyPoints: [
                                "Precipitants: Infection, stopping steroids, surgery",
                                "Presentation: Refractory hypotension, hypoglycemia",
                                "Treatment: Hydrocortisone 100mg IV + fluids",
                                "Response is often dramatic"
                            ],
                            clinicalCorrelation: "Don't wait for test results - treat empirically."
                        },
                        {
                            title: "Stress Dosing",
                            content: "Cortisol needs increase during stress:",
                            keyPoints: [
                                "Minor illness: Double the dose",
                                "Severe illness/surgery: Hydrocortisone 50-100mg q8h",
                                "Never abruptly stop steroids"
                            ],
                            clinicalCorrelation: "Patients must understand sick day rules."
                        }
                    ],
                    quiz: [
                        {
                            question: "Addison's patient with BP 76/48, glucose 52, ran out of hydrocortisone. Treatment?",
                            options: ["Fludrocortisone", "Dexamethasone", "Hydrocortisone 100mg IV + NS + D50", "Cosyntropin test first"],
                            correctIndex: 2,
                            explanation: "Adrenal crisis: Hydrocortisone 100mg IV (has mineralocorticoid activity), fluids, glucose. Don't delay for testing."
                        }
                    ]
                }
            },
            longitudinalTimeline: [
                { day: 1, title: "Emergency Department", setting: "ED", timeLabel: "Hour 0" },
                { day: 2, title: "Hospital Day 1", setting: "ICU", timeLabel: "Day 1" }
            ],
            day1: {
                patientInfo: { name: "Michael Rodriguez", age: 52, gender: "female",
                    firstName: "Michael",
                    lastName: "Rodriguez",
                    setting: "emergency_department", chiefComplaint: "Weakness, nausea, dizziness" },
                vitals: { BP: "78/52", HR: 108, RR: 18, Temp: "100.2°F", SpO2: "97% RA" },
                hpiSections: [
                    { question: "What happened?", answer: "On prednisone for lupus, tapered to 5mg. Got sick 2 weeks ago and hasn't recovered. Vomiting, can't eat.", mechanismLink: { title: "Why crisis now?", explanation: "HPA axis suppressed from prior high-dose steroids. Couldn't increase cortisol in response to illness." } }
                ],
                physicalExam: { general: "Ill, lethargic", skin: "Hyperpigmentation on knuckles", cardiovascular: "Hypotensive, orthostatic" },
                initialLabs: {
                    BMP: { Na: 126, K: 5.8, Glucose: 58 },
                    other: { cortisol: 2.1 },
                    labInterpretation: [{ lab: "Cortisol 2.1, Na 126, K 5.8", meaning: "Adrenal insufficiency with classic electrolyte pattern" }]
                },
                initialManagement: {
                    title: "Adrenal Crisis Management",
                    interventions: [
                        { action: "Hydrocortisone 100mg IV immediately", rationale: "Life-saving - don't wait for tests" },
                        { action: "NS bolus 2L, D50 for hypoglycemia", rationale: "Volume and glucose replacement" },
                        { action: "Continue hydrocortisone 50mg IV q6h", rationale: "Stress dosing until stable" }
                    ]
                },
                dayConclusion: { summary: "52-year-old with adrenal crisis from steroid suppression. Dramatic response to hydrocortisone.", teachingPoint: "In suspected adrenal crisis, give hydrocortisone empirically. Response confirms diagnosis." }
            }
        }
    };
