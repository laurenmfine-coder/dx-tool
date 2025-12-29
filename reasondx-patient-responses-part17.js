/**
 * ReasonDx - Comprehensive Patient Response System v4.0
 * MASTER FILE - Part 17: Pediatric and OB/GYN Cases
 * 
 * Cases:
 * 1. Pediatric Fever (Occult Bacteremia) - 2F (mother provides history)
 * 2. Croup - 3M (mother provides history)
 * 3. Pelvic Inflammatory Disease - 22F
 * 4. Preeclampsia - 32F (28 weeks pregnant)
 */

(function() {
    'use strict';

    // ==========================================
    // CASE: Lily Thompson - Pediatric Fever
    // 2F, high fever, parent concerned (mother provides history)
    // ==========================================
    
    const LILY_THOMPSON = {
        meta: {
            caseId: "pediatric-fever",
            patientName: "Lily Thompson",
            age: 2,
            gender: "female",
            setting: "Emergency Department",
            diagnosis: "Febrile illness (ruling out occult bacteremia/UTI)",
            criticalFindings: [
                "High fever (103.5°F)",
                "Age 2 years (post-vaccine era)",
                "No clear source",
                "Irritable but consolable",
                "Decreased oral intake",
                "Slightly decreased urine output"
            ]
        },
        
        responses: {
            // ALL RESPONSES FROM MOTHER
            "hello|hi|good morning": 
                "*mother, holding fussy toddler* Hi. My daughter has a high fever and I'm really worried.",
            
            "how are you|how is she|how you doing":
                "*mother* She's been miserable. Fever since yesterday. She's not herself at all.",
            
            "what brings you in|chief complaint|why here":
                "*mother* She has a really high fever - 103.5 when I checked at home. It started yesterday and hasn't come down much even with Tylenol. She's cranky, not eating well. I'm scared it's something serious.",
            
            "tell me more|can you explain":
                "*mother* She woke up yesterday afternoon feeling warm. I took her temperature - it was 102. I gave her Tylenol and it came down a bit but went back up. Last night it was 103.5. She's been fussy, clingy, not wanting to eat or drink much.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "*mother* Yesterday around lunchtime. So about 24 hours now.",
            
            "sudden|gradual":
                "*mother* Kind of sudden. She was fine in the morning, then felt warm after her nap.",
            
            "getting worse|progression":
                "*mother* The fever keeps going up and down. She seems more tired today than yesterday.",
            
            // FEVER DETAILS
            "fever|how high|temperature":
                "*mother* Highest was 103.5 last night. This morning it was 102 after Tylenol.",
            
            "how did you take|method|thermometer":
                "*mother* Temporal thermometer. I checked it twice to make sure.",
            
            "tylenol|motrin|medication|gave her":
                "*mother* Tylenol. Children's Tylenol. The right dose for her weight. It brings it down for a few hours then it goes back up.",
            
            "how often|how much|dose":
                "*mother* Every 4-6 hours like the bottle says. She's 26 pounds so I give her 5ml.",
            
            // ASSOCIATED SYMPTOMS - LOOKING FOR SOURCE
            "runny nose|congestion|cold symptoms":
                "*mother* A little runny nose, clear stuff. But not too bad.",
            
            "cough|coughing":
                "*mother* Not really coughing. Maybe once or twice.",
            
            "ear|pulling ears|ear pain":
                "*mother* She hasn't been pulling at her ears. I checked - they don't look red outside.",
            
            "throat|sore throat|eating":
                "*mother* She's not eating much. Won't swallow solid food. Takes a little milk and water.",
            
            "rash|spots|skin":
                "*mother* No rash that I've seen. I've been checking.",
            
            "vomiting|throw up":
                "*mother* She threw up once last night. I think from the fever.",
            
            "diarrhea|bowel movements|poop":
                "*mother* No diarrhea. Her poops have been normal.",
            
            // URINARY - UTI COMMON IN THIS AGE
            "urination|peeing|wet diapers|diaper":
                "*mother* Her diapers have been less wet than usual. I'm worried she's not drinking enough.",
            
            "how many|wet diapers how often":
                "*mother* Usually she has 6-7 wet diapers a day. Yesterday maybe 4. Today only 2 so far and it's afternoon.",
            
            "smell|urine smell|pee smell":
                "*mother* I haven't noticed a smell. But I'm not sure I'd know what to look for.",
            
            "crying with diaper changes|pain with urination":
                "*mother* Maybe a little more fussy during changes? I'm not sure.",
            
            // BEHAVIOR/APPEARANCE
            "how does she look|appearance|behavior":
                "*mother* She's clingy and fussy. Wants to be held constantly. Not playing like usual.",
            
            "consolable|can you calm her":
                "*mother* Yes, if I hold her she calms down. She just wants mommy.",
            
            "alert|interactive|responsive":
                "*mother* She's alert. She knows I'm here. Makes eye contact. Just miserable.",
            
            "lethargic|sleepy|hard to wake":
                "*mother* More sleepy than usual but she wakes up. She's tired but not like... unresponsive or anything.",
            
            "playing|interested in toys|normal activities":
                "*mother* No interest in playing. Just wants to cuddle. That's not like her - she's usually so active.",
            
            "drinking|fluids|eating|appetite":
                "*mother* Not eating. Taking sips of water and a little milk but way less than usual.",
            
            // RED FLAGS - MENINGITIS ETC
            "stiff neck|neck pain|bend neck":
                "*mother* I don't think so. She moves her head around.",
            
            "light|bothered by light|photophobia":
                "*mother* No, light doesn't seem to bother her.",
            
            "bulging|soft spot|fontanelle":
                "*mother* I felt her soft spot - it feels normal to me. Not bulging.",
            
            "purple spots|petechiae|bruises":
                "*mother* No spots or bruises. I've been looking.",
            
            "seizure|shaking|convulsion":
                "*mother* No seizures, thank God.",
            
            // EXPOSURE/CONTACTS
            "daycare|school|other kids":
                "*mother* She goes to daycare 3 days a week. Some kids there have been sick.",
            
            "sick contacts|anyone else sick|exposed":
                "*mother* A few kids at daycare have had fevers. And my nephew was sick last week when we visited.",
            
            "travel|been anywhere":
                "*mother* No travel. Just home and daycare.",
            
            // IMMUNIZATIONS
            "vaccinations|vaccines|shots|immunizations":
                "*mother* She's up to date on everything. Just had her 2-year shots a month ago.",
            
            "which ones|what vaccines":
                "*mother* She got the DTaP, Hep A, and flu shot at her 2-year visit.",
            
            "reaction|previous reactions":
                "*mother* No bad reactions to vaccines before.",
            
            // PAST MEDICAL
            "medical history|birth history|any problems":
                "*mother* She was full term, healthy baby. No medical problems. This is the sickest she's ever been.",
            
            "born early|premature":
                "*mother* No, she was born at 39 weeks. Normal delivery.",
            
            "previous illnesses|sick before|hospitalizations":
                "*mother* She's had colds before. One ear infection at 6 months. Never been hospitalized.",
            
            "medications|takes any medications":
                "*mother* No medications. Just vitamins.",
            
            "allergies":
                "*mother* No allergies that we know of.",
            
            // FAMILY
            "family history|family":
                "*mother* No serious illnesses in the family. Me and my husband are healthy.",
            
            "siblings|brothers sisters":
                "*mother* She has a 5-year-old brother. He's fine - no fever.",
            
            // SOCIAL
            "live with|home|living situation":
                "*mother* Me, my husband, and her brother. We live in a house.",
            
            "smoke|smoking in home|secondhand":
                "*mother* No smoking. No one in the house smokes.",
            
            "pets":
                "*mother* We have a cat. Had her for years.",
            
            // MOTHER'S CONCERNS
            "worried about|concerns|scared":
                "*mother* I'm scared it's something serious. Meningitis. Or some infection. She's never had a fever this high.",
            
            "why did you bring her in|why come today":
                "*mother* The fever won't go away. She's not drinking. I counted her wet diapers and they're way down. Something's wrong - a mother knows.",
            
            "anything else":
                "*mother* Please just tell me she's going to be okay. She's my baby.",
        }
    };

    // ==========================================
    // CASE: Ethan Walker - Croup
    // 3M, barking cough, stridor (mother provides history)
    // ==========================================
    
    const ETHAN_WALKER = {
        meta: {
            caseId: "croup-pediatric",
            patientName: "Ethan Walker",
            age: 3,
            gender: "male",
            setting: "Emergency Department",
            diagnosis: "Viral croup (laryngotracheobronchitis)",
            criticalFindings: [
                "Barking cough (seal-like)",
                "Stridor at rest",
                "Hoarse voice",
                "Low-grade fever",
                "Worse at night",
                "Preceded by URI symptoms"
            ]
        },
        
        responses: {
            // ALL RESPONSES FROM MOTHER
            "hello|hi|good morning": 
                "*mother, holding coughing child* Please help him. He sounds like a seal and he's making this scary noise when he breathes.",
            
            "how are you|how is he":
                "*mother* He's terrified. I'm terrified. Listen to that cough! And that noise when he breathes!",
            
            "*child coughs*|cough":
                "*child produces loud barking cough* *mother* See? That's the cough. It sounds like a seal barking.",
            
            "what brings you in|chief complaint|why here":
                "*mother* That horrible barking cough and a scary noise when he breathes. It started tonight. He was fine when I put him to bed, then woke up an hour ago with this awful cough and struggling to breathe.",
            
            "tell me more|can you explain":
                "*mother* He had a runny nose and little cough for a couple days. I thought it was just a cold. Then tonight he woke up with this terrible barking cough and when he breathes in there's this high-pitched noise. He's scared and I'm scared.",
            
            // TIMELINE
            "when did this start|when start":
                "*mother* The barking cough and noisy breathing started about an hour ago. He woke up from sleep with it.",
            
            "asleep|woke up|night":
                "*mother* Yes, he was sleeping fine then suddenly woke up coughing and couldn't catch his breath.",
            
            "before tonight|cold symptoms|earlier":
                "*mother* He's had a runny nose for 2 days. A little cough. Low fever. I thought it was just a cold.",
            
            // STRIDOR - KEY FINDING
            "noise|breathing noise|stridor|describe":
                "*mother* It's like a high-pitched squeaky sound when he breathes in. Like a whistle or wheeze but different. *child inhales with audible stridor*",
            
            "when does it happen|all the time|with breathing":
                "*mother* When he breathes in. Every breath. It's worse when he's upset or crying.",
            
            "getting worse|better|same":
                "*mother* It was really bad when he first woke up. Slightly better now. But it's still there.",
            
            // COUGH CHARACTERISTICS
            "describe the cough|what does it sound like":
                "*mother* Like a seal barking. Or a dog. It's not a normal cough at all. It's so harsh and loud. *child coughs demonstrating*",
            
            "how often|frequency":
                "*mother* Comes in fits. He'll cough several times in a row, then stop, then start again.",
            
            "productive|bringing anything up":
                "*mother* No, it's dry. Nothing comes up.",
            
            // RESPIRATORY DISTRESS - ASSESS SEVERITY
            "breathing|respiratory|how is his breathing":
                "*mother* Fast. You can see his chest moving a lot. He's working hard to breathe.",
            
            "retractions|chest pulling in|using muscles":
                "*mother* What do you mean? *examiner points* Oh, yes, I can see the skin pulling in around his ribs when he breathes.",
            
            "color|blue|lips|skin color":
                "*mother* He looks a little pale. His lips aren't blue though.",
            
            "able to speak|talk|words":
                "*mother* He can talk but his voice is hoarse. He sounds raspy. *child* Mommy... *hoarse voice*",
            
            "drooling|swallowing|drool":
                "*mother* No drooling. He swallowed some water okay.",
            
            "sitting position|can lie down|position":
                "*mother* He wants to sit up. He cried more when I tried to lay him down.",
            
            // FEVER/CONSTITUTIONAL
            "fever|temperature":
                "*mother* He's had a low fever, 100.5. Not super high.",
            
            "eating|drinking|appetite":
                "*mother* He ate dinner fine. Hasn't wanted anything since he woke up.",
            
            "alert|how does he seem|responsiveness":
                "*mother* He's alert. Scared. Clingy. But he knows what's going on.",
            
            // DIFFERENTIATING FROM EPIGLOTTITIS (RARE BUT IMPORTANT)
            "sick how long|how sick|severity":
                "*mother* The cold for a couple days, but this breathing thing - just tonight. Came on fast.",
            
            "sore throat|throat pain|refusing to swallow":
                "*mother* He didn't complain about his throat. He drank water okay.",
            
            "drooling|excessive drool":
                "*mother* No drooling.",
            
            "position|sitting forward|tripod":
                "*mother* He wants to be held sitting up. But not doing anything weird with his positioning.",
            
            "high fever|toxic|very sick":
                "*mother* The fever is low. He's scared and coughing but doesn't look... I don't know... deathly sick?",
            
            // EXPOSURE
            "sick contacts|daycare|anyone sick":
                "*mother* He goes to preschool. A few kids have had colds. His sister had a cough last week.",
            
            "had this before|croup before|previous":
                "*mother* He had something like this once before, about a year ago. Not this bad though.",
            
            "what happened then|last time":
                "*mother* The doctor said it was croup. We did steam in the bathroom and he got better. But this is worse.",
            
            // WHAT THEY'VE TRIED
            "tried anything|home treatment|steam":
                "*mother* We tried steam in the bathroom. It helped a little. Then I took him outside in the cold air - that seemed to help too. But the noisy breathing keeps coming back.",
            
            "cold air|outside|helped":
                "*mother* Yes, the cold air outside helped for a few minutes. But then it came back.",
            
            // PAST MEDICAL
            "medical history|any conditions|healthy":
                "*mother* He's healthy. No asthma, no breathing problems usually. Just regular colds.",
            
            "born early|premature|birth history":
                "*mother* Full term, normal delivery. No NICU or anything.",
            
            "intubated|breathing tube|ever":
                "*mother* No, never.",
            
            "allergies":
                "*mother* No allergies.",
            
            "medications":
                "*mother* No medications. I gave him Tylenol for the fever earlier.",
            
            "vaccinations|vaccines":
                "*mother* All up to date. He had his flu shot.",
            
            // FAMILY
            "siblings|brothers sisters":
                "*mother* A 6-year-old sister. She's at home with my husband. She had a cough last week but nothing like this.",
            
            "family history|asthma|allergies in family":
                "*mother* I have mild asthma. My husband has allergies. No one else has had this breathing thing though.",
            
            // CONCERNS
            "worried about|concerns":
                "*mother* I'm terrified he can't breathe. That noise is so scary. Is his airway closing? Is he going to suffocate?",
            
            "anything else":
                "*mother* Please help him breathe. I've never been so scared.",
        }
    };

    // ==========================================
    // CASE: Brianna Davis - Pelvic Inflammatory Disease
    // 22F, pelvic pain, discharge, fever
    // ==========================================
    
    const BRIANNA_DAVIS = {
        meta: {
            caseId: "pid-moderate",
            patientName: "Brianna Davis",
            age: 22,
            gender: "female",
            occupation: "College student",
            setting: "Emergency Department",
            diagnosis: "Pelvic inflammatory disease (moderate)",
            criticalFindings: [
                "Bilateral lower abdominal/pelvic pain",
                "Cervical motion tenderness",
                "Adnexal tenderness",
                "Vaginal discharge (mucopurulent)",
                "Fever",
                "Multiple sexual partners, inconsistent condoms"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*uncomfortable, guarding abdomen* Hi. I have really bad pain in my lower belly.",
            
            "how are you|how you doing":
                "Not good. My stomach has been killing me for a few days. And I have a fever.",
            
            "what brings you in|chief complaint|why here":
                "Pain in my lower belly, both sides. It started a few days ago and keeps getting worse. I also have a fever and some discharge. I'm worried something's really wrong.",
            
            "tell me more|can you explain":
                "The pain started maybe 4-5 days ago. Kind of crampy at first, like period cramps. But it got worse and spread to both sides. Now it hurts to walk. I've had a fever since yesterday and there's this discharge that doesn't look right.",
            
            // TIMELINE
            "when did this start|when start|how long":
                "The pain started 4 or 5 days ago. Got really bad in the last 2 days.",
            
            "sudden|gradual":
                "Gradual. Started mild, got worse over days.",
            
            "getting worse|progression":
                "Definitely worse. That's why I came in. It's getting hard to walk.",
            
            // PAIN CHARACTERISTICS
            "describe the pain|what does it feel like":
                "Crampy, achy. Dull but constant. Sharp if I move too fast.",
            
            "where|location|point":
                "*points to lower abdomen* Down here. Both sides. Right above my hips.",
            
            "one side worse|left or right":
                "Pretty equal. Maybe slightly worse on the left.",
            
            "how bad|severity|scale":
                "Right now about a 6. When I walk or move suddenly, more like an 8.",
            
            "radiate|spread|go anywhere":
                "Just my lower belly. Maybe a little into my hips.",
            
            // ASSOCIATED GYN SYMPTOMS
            "discharge|vaginal discharge":
                "Yes. More than usual. Yellowish-green. Doesn't smell right.",
            
            "describe discharge|what does it look like":
                "It's thick, yellowish-green. Kind of smells off. I've never had discharge like this.",
            
            "how long|when did discharge start":
                "Noticed it maybe a week ago? Before the pain started.",
            
            "bleeding|vaginal bleeding|spotting":
                "A little spotting between periods. Not heavy.",
            
            "last period|lmp|menstrual":
                "About 2 weeks ago. It was normal.",
            
            "regular|periods regular":
                "Usually pretty regular. 28-day cycle.",
            
            "painful periods|dysmenorrhea":
                "Normal period cramps. Nothing like this.",
            
            "pain with sex|dyspareunia":
                "Actually yes. Sex has been hurting. Deep pain. I thought it was just... I don't know. Position or something.",
            
            // FEVER/SYSTEMIC
            "fever|temperature":
                "Yeah, I've had a fever. 101 when I checked yesterday.",
            
            "chills":
                "Some chills with the fever.",
            
            "nausea|vomiting":
                "Nauseous. Threw up once yesterday.",
            
            "appetite":
                "Not hungry. Haven't eaten much.",
            
            // URINARY
            "urination|peeing|burning":
                "It doesn't burn to pee. I thought maybe UTI at first but no burning.",
            
            "frequency|how often":
                "Maybe going a little more often. Hard to tell.",
            
            // SEXUAL HISTORY - CRITICAL FOR PID
            "sexually active|having sex":
                "Yes.",
            
            "partner|partners|how many":
                "*hesitates* Currently? I've been seeing a couple different people.",
            
            "how many|number":
                "Two guys right now. Maybe 4 total in the last 6 months.",
            
            "condoms|protection|barrier":
                "Sometimes. Not always. I know I should be more careful.",
            
            "when use|when don't you":
                "Usually at the beginning with someone new. Then we stop once we're more comfortable.",
            
            "last sexual contact|when|most recent":
                "About a week ago. With one of the guys I'm seeing.",
            
            "new partner|recent new partner":
                "One of them is pretty new. Started seeing him maybe 6 weeks ago.",
            
            "partner symptoms|partners have symptoms|told you anything":
                "I don't think so? I should probably ask... or tell them...",
            
            "sti history|stis before|previous":
                "I had chlamydia once, maybe 2 years ago. Got treated.",
            
            "treated|completed treatment":
                "Yeah, took the antibiotics. Thought I was fine after that.",
            
            "tested since|recent testing|when last tested":
                "Not since then. I know I should have.",
            
            "birth control|contraception":
                "I'm on the pill. That's why we don't always use condoms.",
            
            "iud|intrauterine device":
                "No IUD. Just the pill.",
            
            // PREGNANCY
            "pregnant|could you be pregnant":
                "I don't think so. I take my pill every day. But I guess it's possible?",
            
            "pregnancy test|tested":
                "I haven't taken a test.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Just the chlamydia before. Otherwise healthy.",
            
            "surgeries|operations":
                "No surgeries.",
            
            "medications":
                "Just birth control pills.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL
            "smoke|smoking":
                "Socially. When I drink.",
            
            "alcohol":
                "Yeah, weekends mostly. College.",
            
            "drugs|marijuana":
                "Weed sometimes. Nothing else.",
            
            "school|work":
                "College student. Junior. Been missing classes because of this.",
            
            // CONCERNS
            "worried about|concerns":
                "I'm scared I have something bad. An STI? Is this serious? Can it affect my fertility?",
            
            "fertility|affect having kids":
                "I do want kids someday. Is this going to mess that up?",
            
            "tell partners|need to tell":
                "Do I have to tell the guys I've been with? This is so embarrassing.",
            
            "anything else":
                "Please just fix this. And don't judge me. I know I should have been more careful.",
        }
    };

    // ==========================================
    // CASE: Michelle Rodriguez - Preeclampsia
    // 32F, 28 weeks pregnant, headache, elevated BP, edema
    // ==========================================
    
    const MICHELLE_RODRIGUEZ = {
        meta: {
            caseId: "preeclampsia",
            patientName: "Michelle Rodriguez",
            age: 32,
            gender: "female",
            occupation: "Accountant",
            setting: "Labor and Delivery Triage",
            diagnosis: "Preeclampsia with severe features",
            criticalFindings: [
                "28 weeks pregnant (third trimester)",
                "Elevated blood pressure (158/102)",
                "Severe headache",
                "Visual changes (spots)",
                "Rapid weight gain/edema",
                "RUQ pain (liver involvement)",
                "Proteinuria"
            ]
        },
        
        responses: {
            // OPENING
            "hello|hi|good morning": 
                "*visibly pregnant, holding head, ankles swollen* Hi. My OB sent me in. She said my blood pressure is really high.",
            
            "how are you|how you doing":
                "Scared. I have a bad headache and my OB is worried. She said to come right to labor and delivery.",
            
            "what brings you in|chief complaint|why here":
                "I had my regular OB appointment today and my blood pressure was really high - 158/102. I mentioned I've had a bad headache and she got worried. She sent me straight here.",
            
            "tell me more|can you explain":
                "I've been having this headache for 2 days. Didn't think much of it - pregnancy headaches, you know? But my hands and face are more swollen than usual, and my blood pressure has never been high before. My OB looked concerned.",
            
            // TIMELINE
            "when did this start|when start":
                "The headache started 2 days ago. The swelling has been building up over the last week or so. The high blood pressure - I found out today.",
            
            "blood pressure before|previous bp|normal before":
                "It's always been normal. 110s/70s at all my prenatal visits. Today it was way up.",
            
            // PREGNANCY DETAILS
            "how far along|weeks pregnant|gestational age":
                "28 weeks. Third trimester.",
            
            "due date|when due":
                "March 15th. So about 12 more weeks to go.",
            
            "first pregnancy|how many pregnancies|parity":
                "This is my first pregnancy.",
            
            "prenatal care|seeing a doctor|ob visits":
                "Yes, I've been going to all my appointments. Everything has been normal until now.",
            
            "complications|any problems|pregnancy problems":
                "No complications until now. Normal ultrasounds, normal blood work, no issues.",
            
            "baby moving|fetal movement|feel baby":
                "Yes, she's moving. Actually moving right now. That's reassuring, right?",
            
            // HEADACHE - CRITICAL
            "headache|describe headache":
                "It's bad. Throbbing. All over but worse in the front. Tylenol isn't helping.",
            
            "how bad|severity":
                "Maybe 7 or 8 out of 10. Doesn't go away.",
            
            "tylenol|tried anything|medication":
                "Took Tylenol yesterday and today. Didn't help at all.",
            
            "ever had headaches like this|similar":
                "Not during this pregnancy. I occasionally got migraines before pregnancy but this feels different.",
            
            "different how|compare":
                "It's constant. My migraines came with nausea and went away. This just stays.",
            
            // VISUAL SYMPTOMS - CRITICAL
            "vision|seeing|visual changes":
                "Actually yes - I've been seeing spots. Like sparkles or floaters. Started yesterday.",
            
            "describe|what do you see":
                "Little flashing lights. Spots in my vision. Like when you look at a bright light.",
            
            "blurry|blurred vision":
                "A little blurry too. Hard to focus sometimes.",
            
            "constant|comes and goes":
                "Comes and goes. Worse when the headache is bad.",
            
            // EDEMA
            "swelling|edema|puffy":
                "Yes, I'm really swollen. My ankles are huge. My hands are puffy - I had to take off my rings. Even my face looks puffy.",
            
            "when did swelling start|how long":
                "Ankles have been a little swollen for a while - they said that was normal. But it's much worse this past week. Hands and face are new.",
            
            "weight gain|gained weight|rapid":
                "I gained 8 pounds in the last 2 weeks. My OB was concerned about that.",
            
            // RUQ PAIN - LIVER
            "abdominal pain|stomach|belly":
                "Some pain up here on the right, under my ribs. I thought maybe the baby was kicking there.",
            
            "right side|ruq|under ribs":
                "Yes, right here. *points to RUQ* Kind of achy.",
            
            "how long|when did that start":
                "Last couple of days. I didn't think much of it.",
            
            // OTHER SYMPTOMS
            "nausea|vomiting":
                "A little nauseous today. Threw up once this morning.",
            
            "seizure|convulsion|passed out":
                "No seizures. I haven't passed out.",
            
            "bleeding|vaginal bleeding":
                "No bleeding.",
            
            "contractions|cramping|labor":
                "No contractions. No cramping.",
            
            "leaking fluid|water break":
                "No leaking fluid.",
            
            "urination|peeing":
                "Actually I've noticed I'm peeing less than usual. Even though I'm drinking water.",
            
            // RISK FACTORS
            "first pregnancy|first baby":
                "Yes, this is my first.",
            
            "age":
                "I'm 32.",
            
            "ivf|fertility treatment|how conceived":
                "Natural conception. No fertility treatments.",
            
            "family history|preeclampsia in family|mother|sister":
                "My mom had high blood pressure with me. She said she was on bed rest. Not sure if it was preeclampsia.",
            
            "chronic hypertension|high bp before pregnancy":
                "No, my blood pressure was always normal before pregnancy.",
            
            "diabetes|gestational diabetes":
                "No diabetes. My glucose test was normal.",
            
            "kidney problems|kidney disease":
                "No kidney problems.",
            
            "twins|multiples":
                "No, just one baby. A girl.",
            
            // PAST MEDICAL
            "medical history|conditions":
                "Nothing really. Occasional migraines before pregnancy. Otherwise healthy.",
            
            "medications|prenatal vitamins":
                "Just prenatal vitamins. Baby aspirin - my OB started that early in pregnancy.",
            
            "why baby aspirin|aspirin":
                "She said it might help prevent preeclampsia because of my mom's history.",
            
            "allergies":
                "No allergies.",
            
            // SOCIAL
            "smoke|smoking":
                "No, I quit when I found out I was pregnant. Wasn't a heavy smoker anyway.",
            
            "alcohol|drugs":
                "No alcohol since I got pregnant. No drugs.",
            
            "work|job":
                "Accountant. Desk job. Been working from home the last month.",
            
            "married|partner|support":
                "Married. My husband is parking the car. He's worried too.",
            
            // SEXUAL HISTORY - Currently pregnant
            "sexually active":
                "Yes, with my husband. We've been together 6 years, married 3.",
            
            "partner":
                "Just my husband.",
            
            "stis|std":
                "No, never. We were both tested before getting married.",
            
            // CONCERNS
            "worried about|concerns":
                "Is my baby okay? Is this preeclampsia? My mom had it - she told me how scary it was. Am I going to have to deliver early?",
            
            "baby|worried about baby":
                "I'm only 28 weeks. Is she big enough if she has to come out now?",
            
            "anything else":
                "Please tell me my baby is going to be okay. That's all I care about.",
        }
    };

    // ==========================================
    // Export all cases
    // ==========================================
    
    if (!window.COMPREHENSIVE_PATIENT_RESPONSES) {
        window.COMPREHENSIVE_PATIENT_RESPONSES = {};
    }
    
    window.COMPREHENSIVE_PATIENT_RESPONSES['pediatric-fever'] = LILY_THOMPSON;
    window.COMPREHENSIVE_PATIENT_RESPONSES['croup-pediatric'] = ETHAN_WALKER;
    window.COMPREHENSIVE_PATIENT_RESPONSES['pid-moderate'] = BRIANNA_DAVIS;
    window.COMPREHENSIVE_PATIENT_RESPONSES['preeclampsia'] = MICHELLE_RODRIGUEZ;
    
    console.log('ReasonDx Part 17 (Pediatric Fever, Croup, PID, Preeclampsia) loaded');

})();
