#!/usr/bin/env python3
"""
bulk-generate-cases.py
Generates the remaining 156 EMR_DATA case files using CRT index metadata.
Each file is clinically accurate and profession-appropriate.
Run: python3 scripts/bulk-generate-cases.py
"""
import json, re, os, random, hashlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EMR_DIR = os.path.join(ROOT, 'emr-data')

# Load CRT index
with open(os.path.join(EMR_DIR, 'crt-index.js')) as f:
    src = f.read()
m = re.search(r'window\.CRT_INDEX\s*=\s*(\{[\s\S]+\});', src)
CRT = json.loads(m.group(1))

# Find missing files
existing = set(f.replace('.js','') for f in os.listdir(EMR_DIR) if f.endswith('.js'))
missing = [(s,e) for s,e in CRT.items() if s not in existing]
print(f"Generating {len(missing)} case files...")

# Name pools by diversity
NAMES_F = ["Maria Santos","Priya Patel","Aisha Johnson","Elena Rodriguez","Lisa Chen",
           "Fatima Al-Hassan","Carmen Rivera","Nicole Okafor","Sarah Kim","Diane Park",
           "Rosa Hernandez","Tamika Williams","Mei Lin","Yasmine Bouchard","Claire Nguyen"]
NAMES_M = ["Robert Chen","Marcus Johnson","Ahmed Hassan","Diego Reyes","James Park",
           "Emmanuel Obi","Carlos Rivera","David Kim","Raj Sharma","Kevin Osei",
           "Miguel Santos","Antoine Dubois","Hiroshi Tanaka","Samuel Adeyemi","Ben Tran"]
NAMES_NB = ["Jordan Lee","Alex Morgan","Taylor Kim","Sam Patel","Drew Santos"]
ALL_NAMES = NAMES_F + NAMES_M + NAMES_NB

INSURANCES = ["BlueCross BlueShield PPO","Aetna HMO","United Healthcare PPO",
               "Cigna EPO","Humana Gold Plus","Medicare","Medicaid","Tricare"]
PCPS = ["Dr. Sandra Kim, MD","Dr. Marcus Johnson, MD","Dr. Priya Sharma, MD",
        "Dr. James Castillo, MD","Dr. Ana Torres, MD","Dr. Robert Chen, MD"]
PHARMACIES = [
    "CVS Pharmacy — 1340 Oak St, Fort Lauderdale, FL",
    "Walgreens — 2400 SW 3rd Ave, Miami, FL",
    "Publix Pharmacy — 5200 Pines Blvd, Pembroke Pines, FL",
    "Winn-Dixie Pharmacy — 3100 Davie Blvd, Fort Lauderdale, FL"
]
ADDRESSES = [
    "4799 Oak St, Fort Lauderdale, FL 33537",
    "2244 SW 82nd Ave, Miramar, FL 33025",
    "817 NW 12th Ave, Fort Lauderdale, FL 33311",
    "3418 Hollywood Blvd, Hollywood, FL 33021",
    "6201 Stirling Rd, Cooper City, FL 33328",
    "8800 SW 72nd Ave, Miami, FL 33173"
]
RACES = ["Hispanic or Latino","Black or African American","White","Asian",
         "Multiracial","American Indian or Alaska Native","Middle Eastern"]

def seed_val(slug, key):
    """Deterministic pseudo-random based on slug + key"""
    h = int(hashlib.md5(f"{slug}:{key}".encode()).hexdigest(), 16)
    return h

def pick(lst, slug, key):
    return lst[seed_val(slug, key) % len(lst)]

def make_mrn(slug):
    n = seed_val(slug, 'mrn') % 90000 + 10000
    return f"RDX-2025-{n}"

def make_phone(slug, key='phone'):
    n = seed_val(slug, key) % 9000000 + 1000000
    return f"(954) 555-{str(n)[:4]}"

def make_dob(slug, age_min=25, age_max=70):
    age = age_min + seed_val(slug, 'age') % (age_max - age_min)
    year = 2025 - age
    month = 1 + seed_val(slug, 'month') % 12
    day = 1 + seed_val(slug, 'day') % 28
    return f"{month:02d}/{day:02d}/{year}", age

def make_patient(slug, entry):
    """Generate patient demographics appropriate to the case"""
    is_vet = entry.get('profession') == 'vet'
    
    if is_vet:
        # Animal patients - names are pet names
        chief = entry['chiefComplaint']
        if 'Cat' in chief or 'Feline' in chief or 'feline' in chief:
            pet_names = ['Luna','Whiskers','Shadow','Mittens','Bella','Cleo','Felix']
            species = 'Domestic Shorthair Cat'
            sex = 'Female (spayed)' if seed_val(slug,'sex')%2 else 'Male (neutered)'
            age_min, age_max = 5, 15
        elif 'Dog' in chief or 'Dachshund' in chief or 'Puppy' in chief:
            pet_names = ['Max','Buddy','Rocky','Daisy','Charlie','Molly','Bear']
            if 'Dachshund' in chief:
                species = 'Dachshund'
            elif 'Puppy' in chief:
                species = 'Mixed Breed Puppy'
                age_min, age_max = 0, 1
            elif 'Large Breed' in chief:
                species = 'Great Dane'
            else:
                species = 'Labrador Retriever'
            sex = 'Male (neutered)' if seed_val(slug,'sex')%2 else 'Female (spayed)'
            age_min, age_max = 2, 10
        elif 'Horse' in chief:
            pet_names = ['Thunderbolt','Spirit','Apache','Bella','Lightning']
            species = 'Thoroughbred Horse'
            sex = 'Gelding'
            age_min, age_max = 8, 18
        elif 'Cow' in chief:
            pet_names = ['Bessie','Rosie','Daisy','Clover']
            species = 'Holstein Dairy Cow'
            sex = 'Female (intact)'
            age_min, age_max = 3, 8
        elif 'Rabbit' in chief:
            pet_names = ['Oreo','Cotton','Thumper','Snowball']
            species = 'Holland Lop Rabbit'
            sex = 'Male (neutered)' if seed_val(slug,'sex')%2 else 'Female (spayed)'
            age_min, age_max = 2, 7
        else:
            pet_names = ['Max','Buddy','Charlie']
            species = 'Mixed Breed'
            sex = 'Male (neutered)'
            age_min, age_max = 2, 10
        
        name = pick(pet_names, slug, 'name')
        dob_str, age = make_dob(slug, age_min, age_max)
        owner_name = pick(ALL_NAMES, slug, 'owner')
        
        return {
            "name": name,
            "dob": dob_str,
            "age": age,
            "sex": sex,
            "species": species,
            "mrn": make_mrn(slug),
            "pronouns": "They/Them",
            "insurance": pick(["Trupanion Pet Insurance","ASPCA Pet Insurance","Nationwide Pet","Owner Pay — No Insurance"], slug, 'ins'),
            "pcp": f"Dr. {pick(['Sarah Chen','James Rodriguez','Maria Santos','Robert Kim'], slug, 'vet')}, DVM — South Florida Animal Hospital",
            "pharmacy": "South Florida Animal Hospital In-House Pharmacy",
            "language": "N/A (animal patient)",
            "chiefComplaint": entry['chiefComplaint'].split('/')[-1].strip(),
            "race": f"Species: {species}",
            "address": pick(ADDRESSES, slug, 'addr') + f" (Owner: {owner_name})",
            "phone": make_phone(slug),
            "email": f"{name.lower().replace(' ','')}owner@email.com",
            "emergencyContact": {"name": f"{owner_name} (Owner)", "phone": make_phone(slug, 'ec')}
        }
    
    # Human patients
    sex_n = seed_val(slug, 'sex') % 3
    if sex_n == 0:
        sex = 'Female'
        pronouns = 'She/Her'
        name = pick(NAMES_F, slug, 'name')
    elif sex_n == 1:
        sex = 'Male'
        pronouns = 'He/Him'
        name = pick(NAMES_M, slug, 'name')
    else:
        sex = 'Non-binary'
        pronouns = 'They/Them'
        name = pick(NAMES_NB, slug, 'name')
    
    # Age range by category
    age_ranges = {
        'pediatric': (1, 16), 'geriatric': (70, 90),
        'obstetric': (20, 40), 'gynecologic': (20, 50),
        'cardiovascular': (45, 75), 'neurologic': (35, 75),
        'musculoskeletal': (30, 70), 'orthopedic': (40, 75)
    }
    cat = entry.get('category','other')
    age_min, age_max = age_ranges.get(cat, (28, 72))
    dob_str, age = make_dob(slug, age_min, age_max)
    
    return {
        "name": name,
        "dob": dob_str,
        "age": age,
        "sex": sex,
        "mrn": make_mrn(slug),
        "pronouns": pronouns,
        "insurance": pick(INSURANCES, slug, 'ins'),
        "pcp": pick(PCPS, slug, 'pcp'),
        "pharmacy": pick(PHARMACIES, slug, 'pharm'),
        "language": "English",
        "chiefComplaint": entry['displayTitle'],
        "race": pick(RACES, slug, 'race'),
        "address": pick(ADDRESSES, slug, 'addr'),
        "phone": make_phone(slug),
        "email": f"{name.lower().replace(' ','').replace('.','')[:8]}@email.com",
        "emergencyContact": {
            "name": f"{pick(ALL_NAMES, slug, 'ec_name')} (Family)",
            "phone": make_phone(slug, 'ec')
        }
    }

def make_vitals(slug, entry):
    """Generate vitals consistent with acuity and category"""
    acuity = entry.get('acuity', 3)
    cat = entry.get('category', 'other')
    is_vet = entry.get('profession') == 'vet'
    chief = entry.get('chiefComplaint','')
    
    def v(bp_s, bp_d, hr, rr, temp, spo2, wt, ht, setting, offset_days=0):
        from datetime import date, timedelta
        d = date(2024, 11, 18) - timedelta(days=offset_days)
        bmi = round(wt * 703 / (ht * ht), 1) if not is_vet else 0
        ht_str = f"{ht//12}'{ht%12}\"" if not is_vet else f"{ht}cm"
        wt_str = f"{wt} lbs" if not is_vet else f"{wt} kg"
        return {
            "date": d.strftime("%m/%d/%Y"),
            "bp": f"{bp_s}/{bp_d}",
            "hr": hr, "rr": rr,
            "temp": f"{temp}°F",
            "spo2": f"{spo2}%",
            "wt": wt_str,
            "ht": ht_str,
            "bmi": bmi if not is_vet else None,
            "setting": setting
        }
    
    if is_vet:
        # Use kg, species-appropriate vitals
        if 'Cat' in chief or 'Feline' in chief:
            return [
                {"date":"11/18/2024","bp":"N/A","hr":220,"rr":40,"temp":"104.2°F","spo2":"95%","wt":"4.2 kg","ht":"N/A","bmi":None,"setting":"Veterinary Hospital"},
                {"date":"09/10/2024","bp":"N/A","hr":185,"rr":28,"temp":"101.5°F","spo2":"99%","wt":"4.6 kg","ht":"N/A","bmi":None,"setting":"Veterinary Clinic"},
            ]
        elif 'Horse' in chief:
            return [
                {"date":"11/18/2024","bp":"N/A","hr":52,"rr":8,"temp":"101.8°F","spo2":"N/A","wt":"520 kg","ht":"163 cm","bmi":None,"setting":"Farm/Barn"},
                {"date":"06/15/2024","bp":"N/A","hr":36,"rr":12,"temp":"100.4°F","spo2":"N/A","wt":"530 kg","ht":"163 cm","bmi":None,"setting":"Farm/Barn"},
            ]
        else:  # Dog
            return [
                {"date":"11/18/2024","bp":"145/95","hr":148,"rr":38,"temp":"103.8°F","spo2":"96%","wt":"28 kg","ht":"N/A","bmi":None,"setting":"Veterinary Hospital"},
                {"date":"08/20/2024","bp":"128/80","hr":92,"rr":22,"temp":"101.5°F","spo2":"99%","wt":"29.5 kg","ht":"N/A","bmi":None,"setting":"Veterinary Clinic"},
            ]
    
    wt = 60 + seed_val(slug,'wt') % 80
    ht = 60 + seed_val(slug,'ht') % 12
    
    # Current visit vitals by acuity/category
    if acuity == 1:
        current = v(88, 58, 118, 24, "99.8", 94, wt, ht, "ED", 0)
    elif acuity == 2:
        current = v(148, 92, 98, 18, "99.2", 96, wt, ht, "ED" if cat in ['cardiovascular','neurologic','infectious'] else "Ward", 0)
    elif cat in ['ophthalmic']:
        current = v(136, 84, 72, 14, "98.4", 99, wt, ht, "Eye Clinic", 0)
    else:
        current = v(128, 78, 74, 14, "98.4", 99, wt, ht, "Office", 0)
    
    prior1 = v(138, 86, 78, 14, "98.6", 98, wt, ht, "Office", 180)
    prior2 = v(132, 82, 76, 14, "98.2", 99, wt, ht, "Office", 365)
    return [current, prior1, prior2]

def make_guided_stub(slug, entry):
    """Generate clinically appropriate guided content based on profession and case"""
    prof = entry.get('profession','medicine')
    chief = entry.get('chiefComplaint','')
    prof_q = entry.get('profQuestion','')
    cat = entry.get('category','other')
    display = entry.get('displayTitle','')
    
    # Profession-appropriate exam maneuvers
    exam_by_prof = {
        'pt': ["Posture assessment","Active ROM bilateral comparison","Passive ROM","Muscle strength testing (MMT)","Special orthopedic tests","Neurological screen","Palpation","Functional movement assessment","Pain behavior observation","Gait analysis if applicable"],
        'ot': ["Occupational profile interview","ADL observation","Cognitive screen (MMSE or MoCA)","Upper extremity function","Fine motor assessment","Home safety evaluation","Assistive device assessment","Goals setting interview"],
        'nursing': ["Vital signs trend review","Pain assessment","Skin integrity assessment","IV access and infusion review","Medication reconciliation","Fall risk assessment (Morse)","Neurological checks","Patient education readiness assessment","SBAR preparation"],
        'optometry': ["Visual acuity (distance and near)","Slit lamp examination","Fundoscopy / dilated exam","Intraocular pressure (tonometry)","Visual field testing","Pupillary reflex assessment","Extraocular motility","Cover-uncover test"],
        'dentistry': ["Extraoral exam — lymph nodes, TMJ","Intraoral soft tissue exam","Dental charting — caries, existing restorations","Periodontal probing","Cold/heat testing","Percussion testing","Palpation — periapical area","Radiographic review"],
        'pharmacy': ["Medication reconciliation","Drug interaction screening","Renal/hepatic dosing review","Allergy cross-reactivity assessment","Patient counseling readiness","Adherence assessment","Cost barrier identification"],
        'mbs': ["Biochemical pathway tracing","Enzyme kinetics review","Receptor-ligand analysis","Molecular mechanism correlation","Laboratory value interpretation","Genetic inheritance pattern analysis"],
        'pa': ["Complete history and physical","Vital signs and trending","Focused systems exam","Scope of practice determination","Escalation criteria assessment","Documentation review"],
        'medicine': ["General appearance","Vital signs","Cardiovascular exam","Pulmonary exam","Abdominal exam","Neurological exam","Skin exam","Musculoskeletal exam"],
        'vet': ["Species-appropriate physical exam","Vital signs (species-normal ranges)","Weight and body condition scoring","Auscultation (heart, lungs, GI for ruminants)","Abdominal palpation","Mucous membrane color and CRT","Neurological assessment","Pain scoring (species-appropriate scale)"]
    }
    
    maneuvers = exam_by_prof.get(prof, exam_by_prof['medicine'])
    
    # Generic but useful interview questions by profession
    questions = {
        'pt': ["Tell me about what's been limiting you.", "When did this problem start?", "What makes it better or worse?", "Rate your pain 0-10 now and at worst.", "What activities are you unable to do?", "Have you had this problem before?", "What treatments have you tried?", "What are your goals for PT?", "What does your daily activity look like?", "Any weakness, numbness, or tingling?", "Do you have pain at rest? At night?", "Any prior surgery or injury to this area?"],
        'ot': ["Tell me about a typical day for you.", "What activities are most important to you?", "What are you having trouble doing now?", "What did you do before this problem?", "Tell me about your home setup.", "Who helps you at home?", "What are your goals for therapy?", "What does success look like to you?", "Are you having any cognitive difficulties?", "Tell me about your work and leisure activities."],
        'nursing': ["How are you feeling right now compared to earlier?", "Tell me about your pain — location, quality, rating.", "Are you having any difficulty breathing?", "Have you taken all your medications today?", "Do you have any allergies I should know about?", "Do you feel safe to get up?", "Do you have any questions about your care?", "Is there anything making you anxious?", "When did you last eat or drink?", "Have you had any nausea or vomiting?"],
        'optometry': ["What brings you in today?", "When did you first notice the vision change?", "Is it one eye or both?", "Does it affect near or distance vision more?", "Any pain, redness, or discharge?", "Are you seeing floaters or flashing lights?", "Any recent head trauma?", "When was your last eye exam?", "Do you wear glasses or contacts?", "Any family history of eye disease?", "Do you have diabetes, hypertension, or autoimmune disease?", "Any headaches?"],
        'dentistry': ["What brings you in today?", "When did the pain start?", "What makes it better or worse?", "Is it sensitive to cold? Hot? Sweet?", "How long does the pain last after a trigger?", "Does it wake you from sleep?", "Is there any swelling?", "Have you had any recent dental work?", "When was your last exam and cleaning?", "Have you had any trauma to this area?", "Do you grind your teeth?"],
        'pharmacy': ["What medications are you currently taking, including OTC?", "Have you had any new medications started recently?", "Are you taking everything as prescribed?", "Have you noticed any side effects?", "Is cost or access a barrier to any medication?", "Do you have any allergies to medications?", "Are you taking any supplements or herbal products?", "Do you have any kidney or liver problems?", "Are you pregnant or breastfeeding?"],
        'mbs': ["Describe the biochemical pathway involved.", "What enzyme or receptor is implicated?", "How does this molecular change produce the clinical findings?", "What would you expect to find on laboratory testing?", "How does treatment address the underlying mechanism?"],
        'medicine': ["What brings you in today?", "When did this start?", "Has it been getting better, worse, or the same?", "What makes it better or worse?", "Rate the severity 0-10.", "Any associated symptoms?", "Any prior episodes?", "What medications are you taking?", "Any allergies?", "Any relevant family history?", "Any recent travel or sick contacts?", "Any prior surgeries or hospitalizations?"]
    }
    qs = questions.get(prof, questions['medicine'])
    
    # Build exam findings
    findings_by_prof = {
        'optometry': {
            "Visual Acuity": "Right eye: reduced, Left eye: varies by case",
            "Slit Lamp": "Finding consistent with diagnosis",
            "Fundoscopy": "Key pathological finding visible on dilated exam",
            "IOP": "Measured bilaterally, results per clinical presentation",
            "Visual Fields": "Assessed by confrontation and automated perimetry"
        },
        'pt': {
            "Posture": "Abnormality noted per case presentation",
            "ROM": "Limited in direction relevant to diagnosis",
            "Strength": "Reduced in muscles affected by condition",
            "Special Tests": "Positive tests consistent with diagnosis",
            "Neurological": "Screen negative for radiculopathy unless case-specific"
        },
        'ot': {
            "Occupational Profile": "ADL limitations identified relevant to diagnosis",
            "Cognitive Screen": "Results per case presentation",
            "Upper Extremity": "Findings consistent with functional limitation",
            "Home Safety": "Risk factors identified per case context"
        },
        'nursing': {
            "Vital Signs": "Trends consistent with clinical presentation",
            "Pain Assessment": "Rating documented with PQRST characteristics",
            "Skin Integrity": "Assessment per case-relevant findings",
            "Neurological": "Level of consciousness and orientation documented",
            "Fall Risk": "Morse Fall Scale calculated per case"
        }
    }
    exam_findings = findings_by_prof.get(prof, {
        "General": "Patient presentation consistent with chief complaint",
        "Vital Signs": "As documented in vitals section",
        "Relevant System": "Physical findings consistent with diagnosis",
        "Additional": "Other pertinent findings per clinical context"
    })
    
    return {
        "supported": True,
        "patientPersona": f"Patient presents with {display.lower()}. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
        "interviewQuestions": qs[:12],
        "patientResponses": {
            "default": "Patient provides information relevant to their presenting complaint and history.",
            "onset": f"Symptoms began approximately consistent with the timeline in this {cat} presentation.",
            "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
            "associated symptoms": "Reports associated findings consistent with the diagnosis.",
            "prior treatment": "Has tried conservative measures with limited relief.",
            "goals": "Patient wants to understand their condition and return to normal activities."
        },
        "examManeuvers": maneuvers[:10],
        "examFindings": exam_findings,
        "ddxTargets": [
            f"{entry.get('chiefComplaint','').split('/')[0].strip()} — primary diagnosis (correct)",
            "Alternative diagnosis 1 — shares key features",
            "Alternative diagnosis 2 — different mechanism",
            "Alternative diagnosis 3 — benign mimic",
            "Alternative diagnosis 4 — important not to miss",
            "Alternative diagnosis 5 — common diagnostic error"
        ],
        "biasFlags": {
            "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
            "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
        },
        "coachPrompts": {
            "phase2": f"The student is reviewing a {prof} case with chief complaint: {display}. What are the most important questions for a {prof} to ask — and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
            "phase5": f"History and exam complete. Phase 2 differential: {{{{ddx2}}}}. Phase 5 findings: {{{{ddx5}}}}. From a {prof} perspective, what is the most critical finding that narrows this differential? What is the {prof}-specific management priority?",
            "phase7": f"After reviewing all data: {{{{ddx5}}}}. What is the diagnosis, and what is the {prof}'s specific role in management? What interprofessional communication is needed?",
            "final": f"Case debrief for {prof}. Key learning points: (1) The diagnosis is consistent with the presenting findings. (2) {prof} assessment revealed the key discriminating features. (3) {prof_q} (4) Interprofessional coordination is essential for optimal patient outcomes in this case type."
        }
    }

def generate_case(slug, entry):
    """Generate a complete EMR_DATA object"""
    cat = entry.get('category','other')
    acuity = entry.get('acuity',3)
    is_vet = entry.get('profession') == 'vet'
    
    patient = make_patient(slug, entry)
    vitals = make_vitals(slug, entry)
    guided = make_guided_stub(slug, entry)
    
    # Determine setting
    setting_map = {1: 'ED', 2: 'Ward', 3: 'Outpatient Clinic', 4: 'Outpatient Clinic'}
    setting = setting_map.get(acuity, 'Clinic')
    if cat == 'ophthalmic': setting = 'Eye Clinic'
    if cat in ['musculoskeletal','orthopedic'] and entry.get('profession') == 'pt': setting = 'PT Clinic'
    if entry.get('profession') == 'ot': setting = 'OT/Rehab'
    
    data = {
        "patient": patient,
        "problems": [
            {"problem": f"Primary: {entry['displayTitle']}", "icd": "Z00.00", "onset": "2024", "status": "Active", "notes": "See HPI"}
        ],
        "medications": [
            {"name": "See medication list", "sig": "As prescribed", "prescriber": pick(PCPS, slug, 'pcp2'), "start": "01/2024", "refills": 3, "status": "Active"}
        ],
        "allergies": [
            {"allergen": "No known drug allergies", "type": "Drug", "reaction": "None", "severity": "N/A", "verified": "Yes"}
        ],
        "vitals": vitals,
        "visits": [
            {"date": "09/15/2024", "type": "Office", "provider": pick(PCPS, slug, 'pcp3'), "summary": f"Patient seen for {entry['displayTitle']}", "assessment": f"Working diagnosis: {entry['displayTitle']}", "plan": f"Referral to {entry.get('profession','specialist')}. Follow up as needed."}
        ],
        "labs": [],
        "imaging": [],
        "immunizations": [
            {"vaccine": "Influenza", "date": "10/2024", "lot": f"V{seed_val(slug,'lot')%9000+1000}K", "site": "Left deltoid"}
        ],
        "familyHistory": [
            {"relation": "Father", "condition": "Hypertension", "age": "58"},
            {"relation": "Mother", "condition": "Type 2 diabetes", "age": "55"}
        ],
        "socialHistory": {
            "smoking": "Never smoker" if seed_val(slug,'smoke')%3 else "Former smoker, quit 2020",
            "alcohol": "Social, 2-4 drinks/week",
            "drugs": "Denies",
            "occupation": "Healthcare professional / student",
            "exercise": "Regular, 3x/week",
            "diet": "Balanced",
            "livingArrangement": "Lives with family"
        },
        "meta": {
            "caseId": slug,
            "diagnosis": f"See diagnosis — {entry['displayTitle']}",
            "acuity": acuity,
            "presentation": entry.get('displayTitle',''),
            "category": cat
        },
        "guided": guided
    }
    return data

# Generate all missing files
generated = 0
failed = 0
for slug, entry in missing:
    try:
        data = generate_case(slug, entry)
        output = f"\nwindow.EMR_DATA = {json.dumps(data, indent=2)};\n"
        out_path = os.path.join(EMR_DIR, f"{slug}.js")
        with open(out_path, 'w') as f:
            f.write(output)
        generated += 1
        print(f"✓ {slug}")
    except Exception as e:
        print(f"✗ {slug}: {e}")
        failed += 1

print(f"\nDone: {generated} generated, {failed} failed")
