// ReasonDx Pediatric Abdominal Pain Clinical Templates
// Based on UpToDate Evidence-Based Guidelines
// Sources: 
// - Causes of acute abdominal pain in children and adolescents (Neuman MI)
// - Acute appendicitis in children: Clinical manifestations and diagnosis (Brandt ML, Lopez ME)
// - Intussusception in children (Salazar JH, Vo NJ)

const PEDIATRIC_ABDOMINAL_PAIN_TEMPLATES = {

    // ==================== PEDIATRIC APPENDICITIS ====================
    appendicitis_pediatric: {
        id: "appendicitis_pediatric",
        title: "Pediatric Abdominal Pain - Appendicitis",
        category: "Pediatric GI",
        icon: "👶",
        difficulty: "intermediate",
        urgency: "emergent",
        
        clinicalPearls: [
            "Appendicitis: Most common surgical emergency in childhood; peak age 10-19 years",
            "Classic triad of appendicitis (RLQ pain, guarding, migration) less common in young children",
            "Perforation rates by age: Neonates 50-85%, under 5yo 51-100%, 5-12yo 11-32%, over 12yo 10-20%",
            "Young children (under 5yo) often present with diffuse tenderness, fever, and diarrhea",
            "Pediatric Appendicitis Score (PAS): 0-3 low risk, 4-6 moderate, 7+ high risk",
            "Do NOT withhold analgesia - opioids do not mask appendicitis diagnosis",
            "WBC + ANC: Elevated in 85-96% of appendicitis; normal values help exclude",
            "Ultrasound is first-line imaging - avoid CT radiation when possible",
            "Diarrhea occurs in 32-46% of young children with appendicitis"
        ],
        
        guidelines: [
            {
                name: "American Pediatric Surgical Association Guidelines",
                citation: "Kelley-Quon LI, et al. J Pediatr Surg. 2021",
                keyPoints: [
                    "Ultrasound preferred initial imaging for suspected appendicitis",
                    "Clinical scoring systems guide imaging decisions",
                    "No prophylactic antibiotics needed before appendicitis imaging"
                ]
            }
        ],
        
        variants: {
            "schoolage-10-classic": {
                name: "M.J.",
                age: 10,
                gender: "male",
                chiefComplaint: "My stomach hurts really bad, especially on this side",
                variantDescription: "Classic appendicitis in school-age child",
                
                vitalSigns: {
                    BP: "108/68",
                    HR: 98,
                    RR: 20,
                    Temp: "100.8°F",
                    SpO2: "99%",
                    Weight: "32 kg"
                },
                
                missedConsequences: {
                    "Appendicitis": "Progresses to perforation within 24-72 hours, leading to peritonitis, abscess, sepsis",
                    "Perforated Appendicitis": "Perforation rates increase dramatically with delay. Prolonged hospitalization.",
                    "Intussusception": "Can cause bowel necrosis within hours if missed",
                    "Testicular Torsion": "Testicular loss if not identified within 6 hours"
                },
                
                commonPitfalls: [
                    "Assuming gastroenteritis without thorough exam",
                    "Not calculating Pediatric Appendicitis Score",
                    "Using CT as first-line instead of ultrasound",
                    "Withholding analgesia inappropriately",
                    "Dismissing appendicitis if WBC is normal (up to 15% have normal WBC)",
                    "Not recognizing pain migration as classic pattern"
                ],
                
                mcqs: [
                    {
                        id: "mcq1",
                        timing: "after-history",
                        question: "What is the MOST predictive clinical feature for appendicitis in this patient?",
                        options: [
                            { text: "Fever over 101°F", correct: false, explanation: "Fever is common but not highly specific." },
                            { text: "Migration of pain from periumbilical to RLQ", correct: true, explanation: "Migration of periumbilical pain to RLQ is one of THREE most predictive features (along with RLQ pain and guarding)." },
                            { text: "Vomiting before onset of pain", correct: false, explanation: "In appendicitis, pain typically precedes vomiting." },
                            { text: "Diarrhea", correct: false, explanation: "Diarrhea can occur but suggests gastroenteritis." }
                        ]
                    },
                    {
                        id: "mcq2",
                        timing: "after-exam",
                        question: "PAS score is 7. What is the most appropriate next step?",
                        options: [
                            { text: "Discharge home with return precautions", correct: false, explanation: "PAS 7+ is HIGH risk." },
                            { text: "Obtain abdominal CT scan immediately", correct: false, explanation: "CT not first-line in pediatrics." },
                            { text: "Surgical consultation prior to or concurrent with imaging", correct: true, explanation: "PAS 7+ warrants prompt surgical evaluation." },
                            { text: "Observe and repeat exam in 6 hours", correct: false, explanation: "Appropriate for low/moderate risk, not high risk." }
                        ]
                    }
                ],
                
                allDiagnoses: [
                    { name: "Acute Appendicitis", correctCategory: "likely", rationale: "Classic: periumbilical pain to RLQ, vomiting after pain, anorexia, low-grade fever." },
                    { name: "Mesenteric Lymphadenitis", correctCategory: "likely", rationale: "Can mimic appendicitis, often follows viral illness." },
                    { name: "Viral Gastroenteritis", correctCategory: "likely", rationale: "Common cause but usually diffuse tenderness." },
                    { name: "Perforated Appendicitis", correctCategory: "must-not-miss", rationale: "High fever, diffuse tenderness, peritoneal signs." },
                    { name: "Intussusception", correctCategory: "must-not-miss", rationale: "Less common at age 10 but must consider." },
                    { name: "Testicular Torsion", correctCategory: "must-not-miss", rationale: "Must examine genitals in all males with abdominal pain." },
                    { name: "Constipation", correctCategory: "less-likely", rationale: "Most common cause but different presentation." },
                    { name: "UTI", correctCategory: "less-likely", rationale: "Check UA if dysuria or frequency." }
                ],
                
                oldcartsNarrative: "My tummy started hurting yesterday around my belly button. It got worse and moved down here (points to RLQ). I threw up twice. I don't feel hungry. It hurts more when I walk or jump. My temperature was a little high. The pain is probably 7 out of 10.",
                
                historyQuestions: [
                    { id: "onset", text: "When did the pain start? Where did it start?",
                      answer: "Yesterday afternoon, around my belly button. Then moved to my right side by bedtime.",
                      tier: "essential", linkedDx: ["Acute Appendicitis"],
                      reasoning: "Migration of periumbilical pain to RLQ is classic for appendicitis" },
                    { id: "vomiting_timing", text: "When did you throw up - before or after the pain started?",
                      answer: "The pain started first, then I threw up later.",
                      tier: "essential", linkedDx: ["Acute Appendicitis"],
                      reasoning: "In appendicitis, pain precedes vomiting" },
                    { id: "appetite", text: "How's your appetite?",
                      answer: "Not hungry at all. Didn't eat dinner or breakfast.",
                      tier: "essential", linkedDx: ["Acute Appendicitis"],
                      reasoning: "Anorexia is a component of PAS" },
                    { id: "movement", text: "Does anything make the pain worse?",
                      answer: "Walking and jumping really hurt. And when I coughed.",
                      tier: "essential", linkedDx: ["Acute Appendicitis"],
                      reasoning: "Pain with movement indicates peritoneal irritation" },
                    { id: "bowel", text: "Any diarrhea or blood in stool?",
                      answer: "No diarrhea, no blood. Haven't pooped since the pain started.",
                      tier: "essential", linkedDx: ["Acute Appendicitis"],
                      reasoning: "Profuse diarrhea suggests gastroenteritis instead" }
                ],
                
                physicalExam: [
                    { id: "vitals", text: "Review vital signs", category: "Vitals",
                      finding: "BP 108/68, HR 98, RR 20, Temp 100.8°F, SpO2 99%",
                      tier: "essential", linkedDx: ["all"],
                      reasoning: "Low-grade fever and mild tachycardia consistent with appendicitis" },
                    { id: "general", text: "General appearance", category: "General",
                      finding: "Uncomfortable child lying still with knees slightly flexed. Reluctant to move.",
                      tier: "essential", linkedDx: ["Acute Appendicitis"],
                      reasoning: "Children with peritonitis prefer stillness" },
                    { id: "palpation", text: "Palpate abdomen", category: "Abdomen",
                      finding: "Voluntary guarding in RLQ. Maximal tenderness at McBurney's point. No palpable mass.",
                      tier: "essential", linkedDx: ["Acute Appendicitis"],
                      reasoning: "McBurney's point tenderness classic for appendicitis" },
                    { id: "rovsing", text: "Test Rovsing sign", category: "Abdomen",
                      finding: "Positive - palpation of LLQ causes RLQ pain",
                      tier: "essential", linkedDx: ["Acute Appendicitis"],
                      reasoning: "Rovsing sign 86-98% specific in children 3-12 years" },
                    { id: "genital", text: "Genital examination", category: "Genitourinary",
                      finding: "Normal male genitalia. Testes non-tender. No hernia.",
                      tier: "essential", linkedDx: ["Testicular Torsion"],
                      reasoning: "Must examine genitals in all males with abdominal pain" }
                ],
                
                workup: {
                    labs: [
                        { id: "cbc", name: "CBC",
                          result: "WBC 14,500, ANC 11,310, Hgb 13.2, Plt 285,000",
                          tier: "essential", reasoning: "Leukocytosis with neutrophilia supports appendicitis" },
                        { id: "crp", name: "CRP",
                          result: "4.2 mg/dL (elevated)",
                          tier: "essential", reasoning: "Elevated CRP supports inflammation; height correlates with perforation" },
                        { id: "ua", name: "Urinalysis",
                          result: "Trace leukocytes, nitrite negative, no bacteria",
                          tier: "essential", reasoning: "Rules out UTI. Trace WBCs can occur with appendix abutting bladder" }
                    ],
                    imaging: [
                        { id: "us", name: "Ultrasound Appendix Protocol",
                          result: "Non-compressible tubular structure 8mm with surrounding hyperechoic fat. No free fluid. IMPRESSION: Acute appendicitis.",
                          tier: "essential", reasoning: "US first-line. Non-compressible appendix >6mm diagnostic." }
                    ],
                    treatments: [
                        { id: "npo", name: "NPO", result: "Made NPO for surgery", tier: "essential", reasoning: "Pre-operative" },
                        { id: "ivf", name: "IV Fluids", result: "LR at 1.5x maintenance", tier: "essential", reasoning: "Resuscitation" },
                        { id: "analgesia", name: "Analgesia", result: "Morphine 0.1 mg/kg IV", tier: "essential", reasoning: "Pain control - does NOT mask diagnosis" },
                        { id: "antibiotics", name: "Preop Antibiotics", result: "Cefoxitin 40 mg/kg IV single dose", tier: "essential", reasoning: "Prophylactic - covers gram-neg and anaerobes" },
                        { id: "surgery", name: "Laparoscopic Appendectomy", result: "To OR for lap appy", tier: "essential", reasoning: "Definitive treatment" }
                    ],
                    disposition: [
                        { id: "admit", name: "Admit to Surgery", result: "Appropriate", tier: "essential", reasoning: "Surgical admission for appendectomy" }
                    ]
                },
                
                actualDiagnosis: {
                    name: "Acute Uncomplicated Appendicitis",
                    keyFindings: [
                        "Classic history: periumbilical pain migrating to RLQ",
                        "Pain preceded vomiting",
                        "Anorexia present",
                        "Low-grade fever (100.8°F)",
                        "McBurney's point tenderness",
                        "Positive Rovsing sign",
                        "WBC 14,500 with neutrophilia",
                        "CRP elevated",
                        "Diagnostic ultrasound: 8mm non-compressible appendix"
                    ],
                    teachingPoints: [
                        "PEDIATRIC APPENDICITIS SCORE (PAS):\n- Migration (1), Anorexia (1), Nausea/Vomiting (1)\n- RLQ tenderness (2), Cough/hop/percussion tenderness (2)\n- Fever 38°C+ (1), WBC 10k+ (1), ANC 7500+ (1)\n\nScore 0-3: Low risk (0-2%)\nScore 4-6: Moderate (8-48%)\nScore 7+: High risk (50-60%)",
                        "THREE MOST PREDICTIVE FEATURES: RLQ pain, RLQ guarding, Migration of pain. Specificity 86-98%.",
                        "DO NOT WITHHOLD ANALGESIA - opioids do not mask appendicitis per AAP guidelines.",
                        "ULTRASOUND FIRST in pediatrics - appendix >6mm non-compressible = diagnostic.",
                        "AGE AFFECTS PRESENTATION: Under 5yo have diffuse tenderness, diarrhea, high perforation rates."
                    ]
                }
            },
            
            "young-child-4-atypical": {
                name: "E.R.",
                age: 4,
                gender: "female",
                chiefComplaint: "My tummy hurts and I keep throwing up",
                variantDescription: "Atypical appendicitis in young child - high perforation risk",
                
                vitalSigns: {
                    BP: "90/58",
                    HR: 130,
                    RR: 26,
                    Temp: "103.2°F",
                    SpO2: "98%",
                    Weight: "17 kg"
                },
                
                missedConsequences: {
                    "Appendicitis": "51-100% perforation rates in under 5yo due to delayed diagnosis",
                    "Perforated Appendicitis": "Already likely perforated given fever and symptoms"
                },
                
                commonPitfalls: [
                    "Assuming gastroenteritis because child has diarrhea - 32-46% of young children with appendicitis have diarrhea",
                    "Waiting for focal RLQ findings to develop",
                    "Not recognizing high fever as sign of complicated appendicitis",
                    "Relying on classic migration history - often absent in young children"
                ],
                
                allDiagnoses: [
                    { name: "Perforated Appendicitis", correctCategory: "likely", rationale: "High fever, diffuse tenderness, young age - perforation rates 51-100%." },
                    { name: "Viral Gastroenteritis", correctCategory: "likely", rationale: "Common but fever/guarding/leukocytosis atypical." },
                    { name: "Intussusception", correctCategory: "must-not-miss", rationale: "Peak age 3mo-3yr but can occur up to 5." },
                    { name: "Malrotation with Volvulus", correctCategory: "must-not-miss", rationale: "Surgical emergency at any age." }
                ],
                
                oldcartsNarrative: "She started complaining her tummy hurt two days ago. She threw up a few times. Then she got a fever - 103 last night. She's had some loose poops, frequent but small and mucusy. She doesn't want to eat. She's just lying around and cries when we pick her up.",
                
                historyQuestions: [
                    { id: "onset", text: "When did this start?",
                      answer: "About two days ago. Tummy pain first, then vomiting.",
                      tier: "essential", linkedDx: ["Perforated Appendicitis"],
                      reasoning: "Pain preceding vomiting suggests appendicitis" },
                    { id: "stool", text: "Tell me about the loose stools",
                      answer: "Maybe 4-5 times a day, small amounts, mucusy, she acts like she has to go but not much comes out.",
                      tier: "essential", linkedDx: ["Perforated Appendicitis"],
                      reasoning: "Small frequent mucoid stools = pelvic appendix irritating rectosigmoid, NOT gastroenteritis" },
                    { id: "activity", text: "How is she acting?",
                      answer: "Just lying around, not playing. Cries when we move her.",
                      tier: "essential", linkedDx: ["Perforated Appendicitis"],
                      reasoning: "Preference for stillness suggests peritoneal irritation" }
                ],
                
                physicalExam: [
                    { id: "vitals", text: "Review vital signs", category: "Vitals",
                      finding: "HR 130, Temp 103.2°F, BP borderline low",
                      tier: "essential", linkedDx: ["all"],
                      reasoning: "High fever, tachycardia concerning for sepsis/peritonitis" },
                    { id: "abdominal", text: "Abdominal examination", category: "Abdomen",
                      finding: "Diffuse tenderness with guarding, mildly distended, hypoactive bowel sounds. No clear focal point - child cries throughout exam.",
                      tier: "essential", linkedDx: ["Perforated Appendicitis"],
                      reasoning: "Diffuse tenderness with guarding in young child concerning for peritonitis" }
                ],
                
                workup: {
                    labs: [
                        { id: "cbc", name: "CBC",
                          result: "WBC 18,500, ANC 15,170, Bands 8%",
                          tier: "essential", reasoning: "Marked leukocytosis with bandemia concerning for perforation" },
                        { id: "crp", name: "CRP",
                          result: "12.8 mg/dL",
                          tier: "essential", reasoning: "Markedly elevated - correlates with complicated appendicitis" },
                        { id: "lactate", name: "Lactate",
                          result: "2.8 mmol/L (elevated)",
                          tier: "essential", reasoning: "Concerning for hypoperfusion" }
                    ],
                    imaging: [
                        { id: "us", name: "Ultrasound",
                          result: "Appendix not visualized. Complex fluid in RLQ and pelvis. Hyperechoic fat. Free fluid. IMPRESSION: Concerning for perforated appendicitis.",
                          tier: "essential", reasoning: "US may not see perforated appendix but sees secondary signs" }
                    ],
                    treatments: [
                        { id: "ivf", name: "IV Resuscitation", result: "20 mL/kg NS bolus x2", tier: "essential", reasoning: "Aggressive resuscitation" },
                        { id: "antibiotics", name: "Broad-Spectrum Antibiotics", result: "Pip-tazo 100 mg/kg IV", tier: "essential", reasoning: "Perforated appendicitis needs extended coverage" }
                    ]
                },
                
                actualDiagnosis: {
                    name: "Perforated Appendicitis with Peritonitis",
                    keyFindings: [
                        "4-year-old - highest perforation rate age group",
                        "High fever 103.2°F",
                        "Diffuse tenderness with guarding",
                        "Small frequent mucoid stools (pelvic appendix)",
                        "Marked leukocytosis with bandemia",
                        "CRP 12.8, elevated lactate"
                    ],
                    teachingPoints: [
                        "YOUNG CHILDREN HAVE ATYPICAL PRESENTATIONS:\n- Diffuse tenderness (56%) rather than localized (38%)\n- Diarrhea in 32-46% - small volume, mucoid\n- Perforation rates 51-100%",
                        "DIARRHEA DOES NOT RULE OUT APPENDICITIS - pelvic appendix causes tenesmus with small mucoid stools",
                        "HIGH FEVER (>102°F) with abdominal pain = NOT reassuring as just a virus"
                    ]
                }
            }
        }
    },

    // ==================== INTUSSUSCEPTION ====================
    intussusception_pediatric: {
        id: "intussusception_pediatric",
        title: "Pediatric Abdominal Pain - Intussusception",
        category: "Pediatric GI",
        icon: "🔄",
        difficulty: "intermediate",
        urgency: "emergent",
        
        clinicalPearls: [
            "Peak incidence 4-36 months; most common cause of bowel obstruction in infants",
            "Classic triad (pain, mass, currant jelly stool) present in less than 15%",
            "Intermittent severe pain with normal intervals is characteristic",
            "LETHARGY may be ONLY presenting sign, especially in infants",
            "75% idiopathic; 25% have pathologic lead point",
            "Lead point more likely if under 3 months or over 5 years",
            "Ultrasound target sign is diagnostic - sensitivity/specificity near 100%",
            "Pneumatic/hydrostatic reduction successful 70-85%",
            "Recurrence in 10%; bloody stool is NOT contraindication to reduction"
        ],
        
        variants: {
            "infant-9mo-classic": {
                name: "Baby A.L.",
                age: 0.75,
                gender: "male",
                chiefComplaint: "He's been crying really hard off and on, pulling his legs up",
                variantDescription: "Classic ileocolic intussusception",
                
                vitalSigns: {
                    BP: "88/54",
                    HR: 150,
                    RR: 32,
                    Temp: "99.8°F",
                    SpO2: "99%",
                    Weight: "9 kg"
                },
                
                missedConsequences: {
                    "Intussusception": "Bowel ischemia, necrosis, perforation within hours",
                    "Malrotation with Volvulus": "Rapid progression to necrosis if missed"
                },
                
                commonPitfalls: [
                    "Assuming gastroenteritis with vomiting and diarrhea",
                    "Missing diagnosis because infant appears well between episodes",
                    "Waiting for classic triad (present in less than 15%)",
                    "Not considering intussusception in lethargic infant"
                ],
                
                mcqs: [
                    {
                        id: "mcq1",
                        timing: "after-history",
                        question: "A 9-month-old has episodes of severe crying with leg-drawing every 15-20 minutes, relatively normal between. Vomited 3 times. Most likely diagnosis?",
                        options: [
                            { text: "Viral gastroenteritis", correct: false, explanation: "GI doesn't cause episodic severe pain with well intervals." },
                            { text: "Infantile colic", correct: false, explanation: "Colic peaks at 6 weeks, different pattern." },
                            { text: "Intussusception", correct: true, explanation: "CLASSIC: intermittent severe colicky pain every 15-20 min with well intervals." },
                            { text: "Appendicitis", correct: false, explanation: "Rare in this age, doesn't cause intermittent pain with well intervals." }
                        ]
                    },
                    {
                        id: "mcq2",
                        timing: "after-exam",
                        question: "Ultrasound shows target sign in RUQ. What does this represent?",
                        options: [
                            { text: "Pyloric stenosis", correct: false, explanation: "Pyloric stenosis shows thickened pylorus." },
                            { text: "Telescoped bowel - intussusception", correct: true, explanation: "Target sign = layers of intestine within intestine = pathognomonic." },
                            { text: "Appendicitis", correct: false, explanation: "Appendicitis shows non-compressible tubular structure." },
                            { text: "Mesenteric lymphadenitis", correct: false, explanation: "Shows enlarged lymph nodes, not target sign." }
                        ]
                    }
                ],
                
                allDiagnoses: [
                    { name: "Ileocolic Intussusception", correctCategory: "likely", rationale: "9-month-old, intermittent severe pain, leg-drawing, vomiting." },
                    { name: "Viral Gastroenteritis", correctCategory: "likely", rationale: "Common but doesn't explain episodic pain pattern." },
                    { name: "Malrotation with Volvulus", correctCategory: "must-not-miss", rationale: "Surgical emergency. Bilious vomiting is red flag." },
                    { name: "Incarcerated Hernia", correctCategory: "must-not-miss", rationale: "Must examine groins in all infants." }
                ],
                
                oldcartsNarrative: "He was fine this morning, then suddenly started screaming about 4 hours ago - really screaming, pulling his legs up, went pale. It lasted 2-3 minutes then stopped. Happened again 15-20 minutes later. He's thrown up 3 times. Between episodes he seems sleepy, not himself. Last diaper looked mucusy.",
                
                historyQuestions: [
                    { id: "pattern", text: "Describe the episodes",
                      answer: "Every 15-20 minutes, intense screaming with legs pulled up for 2-3 minutes, then stops.",
                      tier: "essential", linkedDx: ["Intussusception"],
                      reasoning: "Classic intermittent pattern" },
                    { id: "between", text: "How does he act between episodes?",
                      answer: "At first normal, now getting more sleepy.",
                      tier: "essential", linkedDx: ["Intussusception"],
                      reasoning: "Progressive lethargy concerning" },
                    { id: "pallor", text: "Any color change during episodes?",
                      answer: "Yes, went really pale, almost grayish.",
                      tier: "essential", linkedDx: ["Intussusception"],
                      reasoning: "Pallor during episodes suggests visceral ischemia" },
                    { id: "vomiting", text: "Tell me about the vomiting",
                      answer: "Three times. Just formula at first, now greenish.",
                      tier: "essential", linkedDx: ["Intussusception", "Malrotation"],
                      reasoning: "Bilious vomiting is RED FLAG" },
                    { id: "stool", text: "What do the diapers look like?",
                      answer: "Last one had mucus, looked different.",
                      tier: "essential", linkedDx: ["Intussusception"],
                      reasoning: "Mucoid stool precedes currant jelly" }
                ],
                
                physicalExam: [
                    { id: "general", text: "General appearance", category: "General",
                      finding: "Currently quiet, lethargic. During observation: episode of severe crying, pallor, leg-drawing for 2 minutes, then settles.",
                      tier: "essential", linkedDx: ["Intussusception"],
                      reasoning: "Witnessing characteristic episode is diagnostic" },
                    { id: "abdominal", text: "Palpate abdomen", category: "Abdomen",
                      finding: "Between episodes: soft, non-tender. Sausage-shaped mass in RUQ/epigastrium. RLQ feels empty (Dance sign).",
                      tier: "essential", linkedDx: ["Intussusception"],
                      reasoning: "Sausage mass is the intussusception. Empty RLQ where cecum has telescoped." },
                    { id: "groin", text: "Examine inguinal areas", category: "Abdomen",
                      finding: "No hernias bilaterally",
                      tier: "essential", linkedDx: ["Incarcerated Hernia"],
                      reasoning: "Must rule out incarcerated hernia" }
                ],
                
                workup: {
                    imaging: [
                        { id: "us", name: "Abdominal Ultrasound",
                          result: "Target sign in RUQ, 3.2 cm diameter. Preserved Doppler flow. No free fluid. No lead point. IMPRESSION: Ileocolic intussusception.",
                          tier: "essential", reasoning: "Target sign pathognomonic. Preserved flow = viable bowel." }
                    ],
                    procedures: [
                        { id: "reduction", name: "Air Enema Reduction",
                          result: "Successful reduction with reflux of air into terminal ileum.",
                          tier: "essential", reasoning: "Treatment of choice - 70-85% success rate" }
                    ],
                    treatments: [
                        { id: "ivf", name: "IV Fluids", result: "NS 20 mL/kg bolus, then maintenance", tier: "essential", reasoning: "Hydration and prep" },
                        { id: "npo", name: "NPO", result: "NPO for procedure", tier: "essential", reasoning: "In case reduction fails" }
                    ],
                    disposition: [
                        { id: "observe", name: "Post-Reduction Observation",
                          result: "Admit 12-24h. Advance diet when awake. Monitor for recurrence (10% rate).",
                          tier: "essential", reasoning: "Traditional observation period" }
                    ]
                },
                
                actualDiagnosis: {
                    name: "Ileocolic Intussusception - Successful Pneumatic Reduction",
                    keyFindings: [
                        "9-month-old - peak age",
                        "Intermittent severe crying every 15-20 minutes",
                        "Leg-drawing during episodes",
                        "Pallor during episodes",
                        "Progressive lethargy",
                        "Bilious vomiting",
                        "Sausage-shaped mass",
                        "US: Target sign with preserved Doppler flow"
                    ],
                    teachingPoints: [
                        "CLASSIC TRIAD (pain, mass, currant jelly) present in LESS THAN 15%",
                        "INTERMITTENT PAIN PATTERN IS KEY:\n- Episodes every 15-20 minutes\n- 2-3 minutes of intense pain\n- Relatively normal between (early)",
                        "LETHARGY MAY BE ONLY SIGN - especially in young infants",
                        "EPIDEMIOLOGY: Peak 4-36 months, 75% idiopathic, 25% lead point",
                        "ULTRASOUND: Target sign diagnostic, near 100% sensitivity/specificity",
                        "REDUCTION: 70-85% success. Surgeon must be available. Bloody stool NOT contraindication.",
                        "RECURRENCE: 10% overall, 4% within 48 hours. Treat same as initial episode."
                    ]
                }
            },
            
            "infant-6mo-lethargy": {
                name: "Baby S.M.",
                age: 0.5,
                gender: "female",
                chiefComplaint: "She's not acting right - really sleepy and floppy",
                variantDescription: "Intussusception presenting as lethargy - atypical",
                
                vitalSigns: {
                    BP: "85/52",
                    HR: 145,
                    RR: 28,
                    Temp: "100.2°F",
                    SpO2: "98%",
                    Weight: "7 kg"
                },
                
                commonPitfalls: [
                    "Assuming CNS pathology without abdominal exam",
                    "Not considering intussusception in lethargic infant",
                    "Missing intermittent irritability between lethargy",
                    "Attributing lethargy to viral illness"
                ],
                
                allDiagnoses: [
                    { name: "Intussusception", correctCategory: "likely", rationale: "Lethargy with brief crying episode. Intussusception can present with altered consciousness." },
                    { name: "Meningitis", correctCategory: "likely", rationale: "Must consider in lethargic infant with fever." },
                    { name: "Sepsis", correctCategory: "likely", rationale: "Ill-appearing infant needs sepsis evaluation." },
                    { name: "NAT", correctCategory: "must-not-miss", rationale: "Always consider in altered infant." }
                ],
                
                oldcartsNarrative: "Something's wrong with her. She's been really sleepy all day, floppy. Earlier she had this crying fit - screaming for about a minute, then back to sleepy. Threw up once. Low fever. One diaper looked reddish-brown.",
                
                historyQuestions: [
                    { id: "crying", text: "Tell me about that crying episode",
                      answer: "Inconsolable for about a minute, really screaming, then suddenly stopped and got sleepy again. Happened twice.",
                      tier: "essential", linkedDx: ["Intussusception"],
                      reasoning: "Intermittent severe crying alternating with lethargy" },
                    { id: "stool", text: "Describe the reddish-brown diaper",
                      answer: "Darker than normal, reddish-brown and slimy.",
                      tier: "essential", linkedDx: ["Intussusception"],
                      reasoning: "Currant jelly or blood-tinged stool" }
                ],
                
                physicalExam: [
                    { id: "general", text: "General appearance", category: "General",
                      finding: "Lethargic, difficult to arouse. Opens eyes briefly then returns to sleep. Hypotonic.",
                      tier: "essential", linkedDx: ["Intussusception", "Sepsis"],
                      reasoning: "Altered mental status requires urgent evaluation" },
                    { id: "abdominal", text: "Abdominal examination", category: "Abdomen",
                      finding: "Soft but mildly distended. Palpable elongated mass in RUQ.",
                      tier: "essential", linkedDx: ["Intussusception"],
                      reasoning: "KEY finding - can be missed if abdominal exam not performed" },
                    { id: "fontanelle", text: "Fontanelle", category: "Neurologic",
                      finding: "Soft, flat - not bulging",
                      tier: "essential", linkedDx: ["Meningitis"],
                      reasoning: "Soft fontanelle argues against elevated ICP" }
                ],
                
                workup: {
                    labs: [
                        { id: "lactate", name: "Lactate",
                          result: "3.2 mmol/L (elevated)",
                          tier: "essential", reasoning: "Concerning for bowel ischemia" }
                    ],
                    imaging: [
                        { id: "us", name: "Abdominal Ultrasound",
                          result: "Target sign in RUQ. Small amount free fluid. Diminished Doppler flow. IMPRESSION: Intussusception with possible early compromise.",
                          tier: "essential", reasoning: "Diagnostic. Free fluid and diminished flow suggest advanced disease." }
                    ]
                },
                
                actualDiagnosis: {
                    name: "Intussusception - Atypical Presentation with Lethargy",
                    keyFindings: [
                        "6-month-old with lethargy as predominant symptom",
                        "Intermittent crying episodes",
                        "Blood-tinged stool",
                        "Palpable abdominal mass",
                        "Elevated lactate"
                    ],
                    teachingPoints: [
                        "LETHARGY CAN BE PRIMARY OR ONLY SIGN of intussusception in young infants",
                        "THE SEPTIC-APPEARING INFANT may have intussusception - always examine abdomen",
                        "CLINICAL PEARL: Unexplained lethargy + any episode of inconsolable crying = consider intussusception"
                    ]
                }
            }
        }
    },

    // ==================== CONSTIPATION (Most Common Cause) ====================
    constipation_pediatric: {
        id: "constipation_pediatric",
        title: "Pediatric Abdominal Pain - Constipation",
        category: "Pediatric GI",
        icon: "💩",
        difficulty: "foundational",
        urgency: "routine",
        
        clinicalPearls: [
            "MOST COMMON cause of acute abdominal pain in children (up to 48%)",
            "Constipation can cause SEVERE pain - don't dismiss",
            "Parents may not recognize relationship between constipation and pain",
            "Palpable stool on exam is diagnostic",
            "X-ray often not needed if clinical picture clear",
            "Treatment: Disimpaction first, then maintenance therapy",
            "Behavioral and dietary changes are cornerstones of management"
        ],
        
        variants: {
            "schoolage-7-constipation": {
                name: "T.K.",
                age: 7,
                gender: "female",
                chiefComplaint: "My tummy has been hurting on and off for a few days",
                variantDescription: "Functional constipation",
                
                vitalSigns: {
                    BP: "100/62",
                    HR: 88,
                    RR: 18,
                    Temp: "98.6°F",
                    SpO2: "99%"
                },
                
                commonPitfalls: [
                    "Not asking about stool history",
                    "Missing fecal loading on exam",
                    "Over-imaging",
                    "Not recognizing constipation can cause severe pain"
                ],
                
                allDiagnoses: [
                    { name: "Functional Constipation", correctCategory: "likely", rationale: "Infrequent hard stools, palpable stool on exam." },
                    { name: "Appendicitis", correctCategory: "must-not-miss", rationale: "Consider but LLQ tenderness with constipation history less likely." },
                    { name: "UTI", correctCategory: "less-likely", rationale: "No urinary symptoms." }
                ],
                
                oldcartsNarrative: "My tummy has been hurting for 3 days, crampy, comes and goes, worse after I eat. I haven't pooped in 4 or 5 days. When I go it's really hard and hurts.",
                
                historyQuestions: [
                    { id: "bowel", text: "Tell me about your pooping",
                      answer: "Maybe once or twice a week. Really hard, sometimes hurts so I hold it.",
                      tier: "essential", linkedDx: ["Constipation"],
                      reasoning: "Infrequent hard stools with withholding" },
                    { id: "last_bm", text: "When did you last poop?",
                      answer: "4 or 5 days ago, hard and took a long time.",
                      tier: "essential", linkedDx: ["Constipation"],
                      reasoning: "Prolonged interval" }
                ],
                
                physicalExam: [
                    { id: "abdominal", text: "Abdominal examination", category: "Abdomen",
                      finding: "Soft, mildly distended. LLQ and suprapubic tenderness. Firm rope-like mass in left lower quadrant = stool in descending/sigmoid colon. No RLQ tenderness. No peritoneal signs.",
                      tier: "essential", linkedDx: ["Constipation"],
                      reasoning: "Palpable stool diagnostic. No signs of appendicitis." }
                ],
                
                workup: {
                    labs: [
                        { id: "none", name: "Labs", result: "Not routinely needed", tier: "neutral", reasoning: "Clinical diagnosis" }
                    ],
                    imaging: [
                        { id: "xray", name: "Abdominal X-ray (if obtained)",
                          result: "Significant stool burden throughout colon",
                          tier: "neutral", reasoning: "Not needed if clinical diagnosis clear" }
                    ],
                    treatments: [
                        { id: "disimpaction", name: "Disimpaction",
                          result: "PEG 3350 (MiraLAX) 1-1.5 g/kg/day for 3-6 days",
                          tier: "essential", reasoning: "Must disimpact before maintenance" },
                        { id: "maintenance", name: "Maintenance",
                          result: "After disimpaction: PEG 3350 0.4-0.8 g/kg/day, titrate to soft daily stools",
                          tier: "essential", reasoning: "Prevents recurrence" },
                        { id: "counseling", name: "Diet and Behavioral Counseling",
                          result: "Increase fiber and fluids. Regular toilet time after meals. Positive reinforcement.",
                          tier: "essential", reasoning: "Cornerstone of long-term management" }
                    ],
                    disposition: [
                        { id: "discharge", name: "Discharge", result: "Home with treatment plan, PCP follow-up 2-4 weeks", tier: "essential", reasoning: "Outpatient management" }
                    ]
                },
                
                actualDiagnosis: {
                    name: "Functional Constipation",
                    keyFindings: [
                        "Intermittent crampy pain",
                        "Infrequent hard stools",
                        "Stool-withholding behavior",
                        "Palpable stool in left colon",
                        "No fever, vomiting, or peritoneal signs"
                    ],
                    teachingPoints: [
                        "CONSTIPATION IS #1 CAUSE of acute pediatric abdominal pain (up to 48%)",
                        "CONSTIPATION CAN CAUSE SEVERE PAIN - don't dismiss because seems too severe",
                        "ROME IV CRITERIA (2+ for 1 month):\n- ≤2 defecations per week\n- Excessive stool retention\n- Painful/hard bowel movements\n- Large fecal mass in rectum",
                        "TREATMENT:\n1. Disimpaction (PEG 1-1.5 g/kg/day x 3-6 days)\n2. Maintenance (PEG 0.4-0.8 g/kg/day)\n3. Diet modification\n4. Behavioral therapy\n5. Long-term follow-up",
                        "X-RAY NOT ROUTINELY NEEDED if clinical diagnosis clear"
                    ]
                }
            }
        }
    }
};

// ==================== DIFFERENTIAL BY AGE REFERENCE ====================
const PEDIATRIC_ABDOMINAL_PAIN_BY_AGE = {
    neonates: {
        lifeThreatening: ["NEC", "Malrotation with volvulus", "Incarcerated hernia", "Hirschsprung enterocolitis"],
        common: ["Colic", "Constipation", "GERD", "Milk protein allergy"],
        redFlags: ["Bilious vomiting", "Abdominal distension", "Bloody stool", "Failure to pass meconium"]
    },
    infants_1_12mo: {
        lifeThreatening: ["Intussusception", "Malrotation with volvulus", "Incarcerated hernia"],
        common: ["Colic", "Gastroenteritis", "Constipation", "GERD"],
        redFlags: ["Intermittent severe crying with well intervals", "Bilious vomiting", "Currant jelly stool", "Lethargy"]
    },
    toddlers_1_3yr: {
        lifeThreatening: ["Intussusception", "Appendicitis (atypical)", "Malrotation", "Incarcerated hernia"],
        common: ["Constipation", "Gastroenteritis", "UTI", "Viral illness"],
        redFlags: ["Bilious vomiting", "Bloody stool", "Peritoneal signs"]
    },
    preschool_3_5yr: {
        lifeThreatening: ["Appendicitis (atypical)", "Intussusception with lead point", "Meckel diverticulum"],
        common: ["Constipation", "Gastroenteritis", "Strep pharyngitis", "UTI", "Mesenteric lymphadenitis"],
        redFlags: ["High fever with abdominal tenderness", "Peritoneal signs"]
    },
    school_age_5_12yr: {
        lifeThreatening: ["Appendicitis", "Testicular torsion", "Ovarian torsion", "DKA"],
        common: ["Constipation", "Gastroenteritis", "Functional pain", "Strep pharyngitis", "Lower lobe pneumonia"],
        redFlags: ["Migration to RLQ", "Peritoneal signs", "Testicular/scrotal pain"]
    },
    adolescents_12_18yr: {
        lifeThreatening: ["Appendicitis", "Ectopic pregnancy", "Testicular torsion", "Ovarian torsion", "DKA"],
        common: ["Constipation", "Gastroenteritis", "Dysmenorrhea", "Mittelschmerz", "Functional pain"],
        redFlags: ["Positive pregnancy test with pain", "Peritoneal signs", "Hemodynamic instability"]
    }
};

// Export
if (typeof window !== 'undefined') {
    window.PEDIATRIC_ABDOMINAL_PAIN_TEMPLATES = PEDIATRIC_ABDOMINAL_PAIN_TEMPLATES;
    window.PEDIATRIC_ABDOMINAL_PAIN_BY_AGE = PEDIATRIC_ABDOMINAL_PAIN_BY_AGE;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PEDIATRIC_ABDOMINAL_PAIN_TEMPLATES, PEDIATRIC_ABDOMINAL_PAIN_BY_AGE };
}

console.log('ReasonDx Pediatric Abdominal Pain Templates loaded - 4 case categories, evidence-based from UpToDate');
