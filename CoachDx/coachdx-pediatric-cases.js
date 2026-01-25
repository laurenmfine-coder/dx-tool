// CoachDx Pediatric SBAR Cases
// 15 cases covering common pediatric emergencies and presentations
// Each case includes level-specific adaptations for different learners

const PEDIATRIC_CASES = [
  // RESPIRATORY EMERGENCIES
  {
    id: 'peds-asthma-exacerbation',
    title: 'Pediatric Asthma Exacerbation',
    category: 'Respiratory',
    difficulty: 'intermediate',
    patientAge: '8 years',
    patientSex: 'Male',
    chiefComplaint: 'Difficulty breathing and wheezing',
    scenario: 'An 8-year-old boy with known asthma presents to the ED with worsening shortness of breath and wheezing for the past 6 hours despite using his albuterol inhaler at home.',
    vitals: { HR: 128, RR: 32, SpO2: '91% on RA', BP: '102/68', Temp: '37.8°C' },
    keyFindings: [
      'Tripod positioning, using accessory muscles',
      'Diffuse expiratory wheezes, prolonged expiratory phase',
      'Speaks in 2-3 word sentences',
      'PEFR 45% of predicted'
    ],
    idealSBAR: {
      situation: 'Calling about Tyler, 8-year-old with known asthma, moderate-severe exacerbation not responding to home albuterol, SpO2 91% on room air.',
      background: 'History of asthma with one prior ED visit. On albuterol PRN and fluticasone. URI symptoms for 2 days. Used albuterol 6 times today without improvement.',
      assessment: 'Moderate-severe asthma exacerbation with respiratory distress. Concerning for impending respiratory failure if no improvement.',
      recommendation: 'Request continuous albuterol nebulization, ipratropium, systemic corticosteroids, and supplemental oxygen. May need magnesium if no response.'
    },
    learningPoints: ['Recognize severity markers in pediatric asthma', 'Understand step-up therapy', 'Identify need for escalation']
  },
  {
    id: 'peds-croup',
    title: 'Croup - Moderate Severity',
    category: 'Respiratory',
    difficulty: 'beginner',
    patientAge: '2 years',
    patientSex: 'Female',
    chiefComplaint: 'Barky cough and noisy breathing',
    scenario: 'A 2-year-old girl presents at 2 AM with a "seal-like" barking cough that started suddenly. Parents report she has had a runny nose for 2 days.',
    vitals: { HR: 140, RR: 36, SpO2: '94% on RA', Temp: '38.2°C' },
    keyFindings: [
      'Inspiratory stridor at rest',
      'Barking cough',
      'Mild subcostal retractions',
      'No drooling, able to swallow',
      'Westley croup score: 5 (moderate)'
    ],
    idealSBAR: {
      situation: 'Calling about Emma, 2-year-old with moderate croup, stridor at rest, Westley score 5.',
      background: 'Previously healthy, no intubation history. URI prodrome for 2 days. No immunization concerns. No recent travel.',
      assessment: 'Moderate croup with stridor at rest requiring treatment beyond supportive care.',
      recommendation: 'Request dexamethasone 0.6 mg/kg PO/IM and nebulized epinephrine. Will need observation period post-epinephrine.'
    },
    learningPoints: ['Westley croup scoring', 'Distinguish croup from epiglottitis', 'Understand epinephrine rebound risk']
  },
  {
    id: 'peds-bronchiolitis',
    title: 'RSV Bronchiolitis',
    category: 'Respiratory',
    difficulty: 'intermediate',
    patientAge: '4 months',
    patientSex: 'Male',
    chiefComplaint: 'Congestion and poor feeding',
    scenario: 'A 4-month-old presents with 3 days of nasal congestion, cough, and decreased oral intake. Born at 34 weeks, now corrected to term age.',
    vitals: { HR: 168, RR: 58, SpO2: '90% on RA', Temp: '38.0°C' },
    keyFindings: [
      'Nasal flaring, subcostal and intercostal retractions',
      'Diffuse wheezes and crackles',
      'Taking only 50% of usual feeds',
      'Wet diapers decreased to 2 today',
      'RSV rapid test positive'
    ],
    idealSBAR: {
      situation: 'Calling about a 4-month-old former 34-weeker with RSV bronchiolitis, respiratory distress, and decreased feeding. SpO2 90%.',
      background: 'Former preterm infant, no chronic lung disease. No prior hospitalizations. Sick contact at daycare.',
      assessment: 'Moderate-severe bronchiolitis with hypoxia and dehydration. High-risk due to prematurity and young age.',
      recommendation: 'Recommend admission for oxygen support, IV fluids, and monitoring. Nasal suctioning PRN. May need high-flow nasal cannula.'
    },
    learningPoints: ['High-risk features for bronchiolitis', 'Supportive care is mainstay', 'Admission criteria']
  },
  // INFECTIOUS DISEASE
  {
    id: 'peds-febrile-infant',
    title: 'Febrile Infant Under 60 Days',
    category: 'Infectious Disease',
    difficulty: 'advanced',
    patientAge: '28 days',
    patientSex: 'Female',
    chiefComplaint: 'Fever',
    scenario: 'A 28-day-old infant presents with rectal temperature of 38.4°C noted at home 2 hours ago. Parents report she seems fussier than usual but is still feeding.',
    vitals: { HR: 172, RR: 44, SpO2: '98% on RA', Temp: '38.4°C rectal' },
    keyFindings: [
      'Well-appearing but slightly fussy',
      'Fontanelle soft and flat',
      'No rash, no bulging fontanelle',
      'Feeding well per parents',
      'Full-term, uncomplicated delivery'
    ],
    idealSBAR: {
      situation: 'Calling about a 28-day-old with fever 38.4°C. Well-appearing but this is a high-risk age group requiring full sepsis workup.',
      background: 'Full-term infant, uncomplicated delivery, no maternal GBS. No sick contacts. Immunizations not yet started.',
      assessment: 'Febrile neonate requiring full evaluation for serious bacterial infection despite well appearance.',
      recommendation: 'Recommend full sepsis workup: CBC, blood culture, UA with culture, LP. Empiric antibiotics (ampicillin + gentamicin or cefotaxime) pending results. Admission required.'
    },
    learningPoints: ['Age-based approach to febrile infants', 'Cannot rely on appearance in neonates', 'Rochester/Philadelphia criteria']
  },
  {
    id: 'peds-kawasaki',
    title: 'Kawasaki Disease',
    category: 'Infectious Disease',
    difficulty: 'advanced',
    patientAge: '3 years',
    patientSex: 'Male',
    chiefComplaint: 'Fever for 5 days and rash',
    scenario: 'A 3-year-old boy has had fever for 5 days unresponsive to antipyretics. Parents note red eyes, cracked lips, and a rash that appeared yesterday.',
    vitals: { HR: 132, RR: 24, SpO2: '99% on RA', Temp: '39.2°C' },
    keyFindings: [
      'Bilateral non-exudative conjunctival injection',
      'Cracked, erythematous lips; strawberry tongue',
      'Polymorphous rash on trunk',
      'Unilateral cervical lymphadenopathy >1.5 cm',
      'Swollen hands and feet with erythema',
      'Extremely irritable'
    ],
    idealSBAR: {
      situation: 'Calling about a 3-year-old with 5 days of fever meeting criteria for Kawasaki disease with 5 of 5 classic features.',
      background: 'Previously healthy child. Fever started 5 days ago, not responding to ibuprofen. Rash appeared day 4.',
      assessment: 'Classic Kawasaki disease. Urgent treatment needed to prevent coronary artery aneurysms.',
      recommendation: 'Request STAT echocardiogram, inflammatory markers (ESR, CRP), CBC. Plan for IVIG 2g/kg and high-dose aspirin. Cardiology consult.'
    },
    learningPoints: ['Kawasaki diagnostic criteria', 'Coronary artery complications', 'Treatment window importance']
  },
  // GASTROINTESTINAL
  {
    id: 'peds-intussusception',
    title: 'Intussusception',
    category: 'Gastrointestinal',
    difficulty: 'intermediate',
    patientAge: '9 months',
    patientSex: 'Male',
    chiefComplaint: 'Intermittent crying and vomiting',
    scenario: 'A 9-month-old presents with episodes of inconsolable crying with legs drawn up, occurring every 15-20 minutes for the past 6 hours. He vomited twice.',
    vitals: { HR: 156, RR: 32, SpO2: '98% on RA', Temp: '37.4°C' },
    keyFindings: [
      'Episodic severe crying with pain-free intervals',
      'Legs drawn to abdomen during episodes',
      'Palpable sausage-shaped mass in RUQ',
      'Currant jelly stool in diaper',
      'Mildly lethargic between episodes'
    ],
    idealSBAR: {
      situation: 'Calling about a 9-month-old with classic intussusception presentation: colicky pain, currant jelly stool, and palpable mass.',
      background: 'Previously healthy infant. Recent viral illness last week. Normal development.',
      assessment: 'High suspicion for ileocolic intussusception requiring urgent imaging and reduction.',
      recommendation: 'Recommend STAT abdominal ultrasound, surgical consult, IV access, and NPO status. Air enema reduction if confirmed and no perforation signs.'
    },
    learningPoints: ['Classic triad of intussusception', 'Target sign on ultrasound', 'Air vs barium enema reduction']
  },
  {
    id: 'peds-pyloric-stenosis',
    title: 'Pyloric Stenosis',
    category: 'Gastrointestinal',
    difficulty: 'intermediate',
    patientAge: '5 weeks',
    patientSex: 'Male',
    chiefComplaint: 'Projectile vomiting',
    scenario: 'A 5-week-old firstborn male presents with 4 days of progressively worsening non-bilious vomiting. Vomiting is forceful, occurring after every feed.',
    vitals: { HR: 168, RR: 40, SpO2: '99% on RA', Temp: '36.8°C' },
    keyFindings: [
      'Appears hungry immediately after vomiting',
      'Non-bilious projectile vomiting',
      'Olive-shaped mass in epigastrium',
      'Visible gastric peristalsis',
      'Decreased skin turgor, sunken fontanelle',
      'Labs: Na 132, K 2.8, Cl 88, HCO3 34'
    ],
    idealSBAR: {
      situation: 'Calling about a 5-week-old male with projectile non-bilious vomiting, palpable olive mass, and hypochloremic hypokalemic metabolic alkalosis - classic pyloric stenosis.',
      background: 'Firstborn male, full-term. No prior surgeries. Was gaining weight until 4 days ago.',
      assessment: 'Pyloric stenosis with significant dehydration and electrolyte abnormalities requiring correction before surgery.',
      recommendation: 'Confirm with ultrasound if needed. IV fluid resuscitation with NS, correct electrolytes. Surgical consult for pyloromyotomy after metabolic correction.'
    },
    learningPoints: ['Classic electrolyte pattern', 'Ultrasound criteria', 'Must correct electrolytes before surgery']
  },
  // NEUROLOGICAL
  {
    id: 'peds-febrile-seizure',
    title: 'Simple Febrile Seizure',
    category: 'Neurology',
    difficulty: 'beginner',
    patientAge: '18 months',
    patientSex: 'Female',
    chiefComplaint: 'Seizure with fever',
    scenario: 'An 18-month-old girl had a generalized tonic-clonic seizure lasting 2 minutes at home during a febrile illness. She is now post-ictal.',
    vitals: { HR: 130, RR: 28, SpO2: '97% on RA', Temp: '39.5°C' },
    keyFindings: [
      'Post-ictal drowsiness, improving',
      'Seizure was generalized, lasted <5 minutes',
      'First seizure ever',
      'Fever onset today with URI symptoms',
      'No meningeal signs',
      'Normal neuro exam as she awakens'
    ],
    idealSBAR: {
      situation: 'Calling about an 18-month-old with first-time simple febrile seizure - generalized, less than 5 minutes, now post-ictal and improving.',
      background: 'Previously healthy child. No family history of epilepsy. Developmentally normal. Current URI.',
      assessment: 'Simple febrile seizure in appropriate age group with reassuring post-ictal recovery.',
      recommendation: 'Recommend identifying fever source, antipyretics, observation until fully alert. LP not indicated for simple febrile seizure in this age with normal exam. Parental education.'
    },
    learningPoints: ['Simple vs complex febrile seizure criteria', 'When LP is indicated', 'Recurrence risk counseling']
  },
  {
    id: 'peds-meningitis',
    title: 'Bacterial Meningitis',
    category: 'Neurology',
    difficulty: 'advanced',
    patientAge: '6 years',
    patientSex: 'Male',
    chiefComplaint: 'Headache, fever, and neck stiffness',
    scenario: 'A 6-year-old presents with 2 days of fever, worsening headache, and new neck stiffness. He vomited 3 times and seems confused.',
    vitals: { HR: 145, RR: 28, SpO2: '96% on RA', Temp: '39.8°C', BP: '90/55' },
    keyFindings: [
      'Lethargic, slow to respond',
      'Positive Kernig and Brudzinski signs',
      'Photophobia',
      'No focal neurological deficits',
      'Petechial rash on lower extremities',
      'Immunizations up to date'
    ],
    idealSBAR: {
      situation: 'Calling about a 6-year-old with suspected bacterial meningitis - fever, neck stiffness, altered mental status, and petechial rash concerning for meningococcemia.',
      background: 'Immunizations up to date. Ill contact at school with "flu-like illness." Previously healthy.',
      assessment: 'High suspicion for bacterial meningitis, possibly meningococcal given petechiae. Requires emergent antibiotics.',
      recommendation: 'STAT blood cultures then empiric ceftriaxone and vancomycin. Dexamethasone before or with first antibiotic dose. CT head if focal signs before LP. Droplet precautions.'
    },
    learningPoints: ['Do not delay antibiotics for LP', 'Dexamethasone timing', 'Meningococcal precautions']
  },
  // CARDIAC
  {
    id: 'peds-svt',
    title: 'Supraventricular Tachycardia',
    category: 'Cardiac',
    difficulty: 'intermediate',
    patientAge: '4 months',
    patientSex: 'Female',
    chiefComplaint: 'Fast breathing and poor feeding',
    scenario: 'A 4-month-old infant presents with poor feeding, irritability, and rapid breathing for 1 day. Parents noticed she looks pale.',
    vitals: { HR: 280, RR: 60, SpO2: '92% on RA', Temp: '37.0°C', BP: '70/40' },
    keyFindings: [
      'Pale, mottled appearance',
      'Capillary refill 4 seconds',
      'Heart rate regular at 280 bpm',
      'No murmur appreciated',
      'Hepatomegaly on exam',
      'ECG: narrow complex regular tachycardia, no P waves visible'
    ],
    idealSBAR: {
      situation: 'Calling about a 4-month-old in SVT with heart rate 280 and signs of heart failure including poor perfusion, hepatomegaly, and hypotension.',
      background: 'No known cardiac history. Parents note she has been well until yesterday. No family history of sudden death or arrhythmias.',
      assessment: 'SVT with hemodynamic compromise requiring urgent cardioversion.',
      recommendation: 'Attempt vagal maneuvers (ice to face). If unsuccessful, adenosine 0.1 mg/kg rapid IV push. If unstable, synchronized cardioversion 0.5-1 J/kg. Cardiology consult.'
    },
    learningPoints: ['SVT presentation in infants differs from older children', 'Adenosine dosing and technique', 'When to cardiovert']
  },
  // ENDOCRINE
  {
    id: 'peds-dka',
    title: 'Pediatric DKA - New Onset Diabetes',
    category: 'Endocrine',
    difficulty: 'advanced',
    patientAge: '10 years',
    patientSex: 'Female',
    chiefComplaint: 'Vomiting and abdominal pain',
    scenario: 'A 10-year-old girl presents with 2 days of vomiting, abdominal pain, and excessive thirst. Parents note she has lost 8 pounds over the past month and wakes at night to urinate.',
    vitals: { HR: 128, RR: 32 (Kussmaul), SpO2: '99% on RA', Temp: '36.8°C', BP: '95/60' },
    keyFindings: [
      'Appears dehydrated with dry mucous membranes',
      'Deep, rapid breathing (Kussmaul)',
      'Fruity breath odor',
      'Diffuse abdominal tenderness',
      'Glucose: 485, pH: 7.18, HCO3: 10, K: 5.8, Anion gap: 28',
      'Urinalysis: large ketones, glucosuria'
    ],
    idealSBAR: {
      situation: 'Calling about a 10-year-old with new-onset diabetic ketoacidosis - pH 7.18, glucose 485, severe DKA with Kussmaul respirations.',
      background: 'No prior diabetes diagnosis. Classic symptoms of polyuria, polydipsia, weight loss over past month. No family history of Type 1.',
      assessment: 'Severe DKA in new-onset Type 1 diabetes. High risk for cerebral edema given age and new diagnosis.',
      recommendation: 'IV fluid bolus 10-20 mL/kg NS, then 1.5x maintenance. Start insulin infusion at 0.1 units/kg/hr AFTER initial fluid bolus. Frequent neuro checks. PICU admission. Avoid rapid glucose or sodium changes.'
    },
    learningPoints: ['Cerebral edema risk factors', 'Two-bag system for fluids', 'When to add dextrose']
  },
  // ALLERGIC/IMMUNOLOGIC
  {
    id: 'peds-anaphylaxis',
    title: 'Pediatric Anaphylaxis',
    category: 'Allergy',
    difficulty: 'intermediate',
    patientAge: '5 years',
    patientSex: 'Male',
    chiefComplaint: 'Allergic reaction after eating',
    scenario: 'A 5-year-old boy develops hives, lip swelling, and difficulty breathing 10 minutes after eating a cookie at a birthday party. He has a known peanut allergy.',
    vitals: { HR: 150, RR: 36, SpO2: '90% on RA', BP: '80/50', Temp: '37.0°C' },
    keyFindings: [
      'Diffuse urticaria',
      'Angioedema of lips and tongue',
      'Audible wheezing and stridor',
      'Altered mental status - confused',
      'EpiPen not given - left at home'
    ],
    idealSBAR: {
      situation: 'Calling about a 5-year-old with anaphylaxis from peanut exposure - hypotensive, with airway involvement and altered mental status.',
      background: 'Known peanut allergy, has EpiPen at home but not with him. No prior anaphylaxis requiring hospitalization.',
      assessment: 'Severe anaphylaxis with cardiovascular and respiratory compromise requiring immediate intervention.',
      recommendation: 'STAT IM epinephrine 0.15 mg (EpiPen Jr dose), IV access for fluids, albuterol nebulizer, IV diphenhydramine, IV methylprednisolone. Prepare for repeat epinephrine if no response in 5 minutes.'
    },
    learningPoints: ['IM epinephrine is first-line', 'Biphasic reaction monitoring', 'Proper EpiPen dosing by weight']
  },
  // TRAUMA/INJURY
  {
    id: 'peds-head-injury',
    title: 'Pediatric Minor Head Injury',
    category: 'Trauma',
    difficulty: 'beginner',
    patientAge: '2 years',
    patientSex: 'Male',
    chiefComplaint: 'Fall with head bump',
    scenario: 'A 2-year-old fell from a couch (approximately 2 feet) and hit his head on carpet. He cried immediately but now seems normal. No LOC per parents.',
    vitals: { HR: 110, RR: 24, SpO2: '99% on RA', Temp: '37.0°C' },
    keyFindings: [
      'Small frontal hematoma, non-parietal',
      'GCS 15, alert and playful',
      'No vomiting',
      'Acting normally per parents',
      'PECARN: No high-risk features'
    ],
    idealSBAR: {
      situation: 'Calling about a 2-year-old with minor head injury from couch fall. Low-risk by PECARN criteria - frontal hematoma, no LOC, acting normally.',
      background: 'No bleeding disorders, no prior head injuries. Fall was witnessed, from 2-foot height onto carpet.',
      assessment: 'Very low risk for clinically important traumatic brain injury per PECARN. CT likely not indicated.',
      recommendation: 'Observation versus discharge with strict return precautions is appropriate. Parental education on warning signs. No CT needed based on PECARN low-risk criteria.'
    },
    learningPoints: ['PECARN decision rules', 'Observation vs CT', 'High vs low risk hematoma locations']
  },
  {
    id: 'peds-nai',
    title: 'Suspected Non-Accidental Injury',
    category: 'Trauma',
    difficulty: 'advanced',
    patientAge: '6 months',
    patientSex: 'Female',
    chiefComplaint: 'Not moving right arm',
    scenario: 'A 6-month-old is brought in for not moving her right arm. Parents say she "rolled off the bed" yesterday. Different caretaker stories about timing.',
    vitals: { HR: 140, RR: 32, SpO2: '99% on RA', Temp: '37.2°C' },
    keyFindings: [
      'Swelling of right arm with limited movement',
      'Bruising on right upper arm and back',
      'Healing bruise on left cheek noted',
      'X-ray: spiral fracture of right humerus',
      'Inconsistent stories from parents about what happened'
    ],
    idealSBAR: {
      situation: 'Calling about a 6-month-old with spiral humerus fracture and multiple bruises in different stages of healing, concerning for non-accidental trauma.',
      background: 'Story is inconsistent between caregivers. Spiral fractures are concerning in non-ambulatory infants. Multiple bruises at different stages.',
      assessment: 'High concern for non-accidental injury. Fracture pattern and bruises not consistent with stated mechanism.',
      recommendation: 'Full skeletal survey, head CT, ophthalmology exam for retinal hemorrhages, coagulation studies. Social work and child protective services notification required. Patient should be admitted for safety.'
    },
    learningPoints: ['TEN-4 bruising rule', 'Fracture patterns concerning for NAI', 'Mandatory reporting requirements']
  },
  // TOXICOLOGY
  {
    id: 'peds-accidental-ingestion',
    title: 'Accidental Medication Ingestion',
    category: 'Toxicology',
    difficulty: 'intermediate',
    patientAge: '2 years',
    patientSex: 'Female',
    chiefComplaint: 'Got into grandmothers medications',
    scenario: 'A 2-year-old was found with an open pill bottle of grandmothers metoprolol. Unknown quantity ingested approximately 30 minutes ago. Child currently asymptomatic.',
    vitals: { HR: 90, RR: 22, SpO2: '99% on RA', BP: '85/55', Temp: '36.9°C' },
    keyFindings: [
      'Alert and acting normally',
      'Pill bottle originally had 30 pills, now has 24',
      'Metoprolol 50mg tablets',
      'No vomiting or symptoms yet',
      'Glucose: 95'
    ],
    idealSBAR: {
      situation: 'Calling about a 2-year-old who may have ingested up to 6 tablets of metoprolol 50mg (300mg total) 30 minutes ago. Currently asymptomatic but this is potentially toxic dose.',
      background: 'Previously healthy. Grandmothers medication was accessible. No vomiting since ingestion. Weight approximately 12 kg.',
      assessment: 'Potentially serious beta-blocker ingestion. May develop bradycardia, hypotension, hypoglycemia. Effects may be delayed with extended-release formulations.',
      recommendation: 'Poison control consultation. IV access, continuous monitoring, check glucose hourly. Prepare glucagon and calcium at bedside. May need high-dose insulin/glucose therapy if symptomatic.'
    },
    learningPoints: ['Beta-blocker toxicity can be delayed', 'Glucagon as antidote', 'High-dose insulin therapy']
  }
];

// Open-Access Guidelines References for Pediatric Cases
const PEDIATRIC_REFERENCES = {
  febrileInfant: {
    guideline: "Pantell RH, et al. Evaluation and Management of Well-Appearing Febrile Infants 8-60 Days Old. Pediatrics. 2021;148(2):e2021052228",
    url: "https://publications.aap.org/pediatrics/article/148/2/e2021052228/179783/",
    access: "AAP Open Access",
    keyContent: "Rochester, Philadelphia, and Boston criteria; updated risk stratification"
  },
  bronchiolitis: {
    guideline: "Ralston SL, et al. Clinical Practice Guideline: Bronchiolitis. Pediatrics. 2014;134(5):e1474-e1502",
    url: "https://publications.aap.org/pediatrics/article/134/5/e1474/75848/",
    access: "AAP Open Access",
    keyContent: "Supportive care emphasis, against routine bronchodilators/steroids"
  },
  kawasaki: {
    guideline: "McCrindle BW, et al. AHA Scientific Statement on Kawasaki Disease. Circulation. 2017;135:e927-e999",
    url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000484",
    access: "AHA Open Access",
    keyContent: "Diagnostic criteria, IVIG treatment, coronary monitoring"
  },
  seizures: {
    guideline: "Subcommittee on Febrile Seizures. Febrile Seizures: Clinical Practice Guideline. Pediatrics. 2011;127(2):389-394",
    url: "https://publications.aap.org/pediatrics/article/127/2/389/65067/",
    access: "AAP Open Access",
    keyContent: "Simple vs complex criteria, workup recommendations"
  },
  dehydration: {
    guideline: "Freedman SB, et al. Oral versus IV Rehydration in Gastroenteritis. NEJM. 2024",
    url: "https://pubmed.ncbi.nlm.nih.gov/",
    access: "PubMed",
    keyContent: "Oral rehydration therapy, IV indications"
  },
  poisoning: {
    guideline: "American Association of Poison Control Centers",
    url: "https://www.aapcc.org/",
    access: "Open Access",
    keyContent: "1-800-222-1222, toxidrome recognition, antidote protocols"
  }
};

// Export for use in CoachDx system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PEDIATRIC_CASES, PEDIATRIC_REFERENCES };
}
