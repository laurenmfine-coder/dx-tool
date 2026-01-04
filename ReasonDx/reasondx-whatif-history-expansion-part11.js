/**
 * ReasonDx What-If History Q&A Expansion - Part 11
 * Final remaining scenarios
 * Last Updated: December 28, 2025
 */
(function() {
    'use strict';
    function init() {
        if (typeof window.cases === 'undefined') { setTimeout(init, 700); return; }
        expand();
    }
    function e(caseId, scenarioId, a) {
        const c = window.cases?.find(x => x.id === caseId);
        if (!c?.whatIfScenarios) return;
        const s = c.whatIfScenarios.find(x => x.id === scenarioId);
        if (s) { s.modifications = s.modifications || {}; s.modifications.historyAnswers = { ...s.modifications.historyAnswers, ...a }; }
    }
    function expand() {
        // AAA scenarios
        e('back-trap-aaa', 'whatif_aaa_bilateral_flank_pain', {"pain": "Pain in both flanks.", "bilateral": "Yes, both sides.", "back pain": "Yes, severe back pain.", "radiation": "Goes to my groin.", "pulsatile mass": "There's a pulsing in my belly.", "known aneurysm": "Yes, I have an aneurysm.", "size": "They said it's 6cm.", "syncope": "I almost passed out.", "hypotensive": "Blood pressure was low.", "expanding": "Is it expanding?"});
        e('back-trap-aaa', 'whatif_aaa_known_aneurysm', {"aneurysm": "Yes, I have an aneurysm.", "known": "Yes, known for 2 years.", "size": "It was 4.5cm.", "monitoring": "Being monitored with ultrasound.", "symptoms": "New back pain today.", "different": "Pain is different than usual.", "worried": "I'm worried it's growing.", "last ultrasound": "6 months ago.", "surgery planned": "They said maybe surgery soon."});
        e('back-trap-aaa', 'whatif_aaa_stable', {"pain": "Some back pain.", "aneurysm": "Yes, I have a small one.", "size": "About 3.5cm.", "stable": "I feel okay otherwise.", "hemodynamic": "Blood pressure is normal.", "vitals": "Vitals are stable.", "monitoring": "Being watched.", "growth": "It's been stable in size.", "surgery": "Not big enough for surgery yet."});
        // AS scenarios  
        e('syncope-aortic-stenosis', 'whatif_as_acute_chf', {"short of breath": "Severe shortness of breath.", "orthopnea": "Can't lie flat.", "murmur": "Yes, I have a heart murmur.", "aortic stenosis": "Yes, I have aortic stenosis.", "severe": "They said it's severe.", "new symptoms": "These symptoms are new.", "decompensated": "Am I in heart failure?", "surgery": "Do I need surgery now?"});
        e('syncope-aortic-stenosis', 'whatif_as_noncardiac_surgery', {"surgery planned": "I'm having hip surgery.", "aortic stenosis": "Yes, severe aortic stenosis.", "risk": "What's my surgical risk?", "symptoms": "I get short of breath with stairs.", "syncope": "I had near syncope once.", "valve first": "Do I need valve surgery first?"});
        e('syncope-aortic-stenosis', 'whatif_as_tavr_candidate', {"aortic stenosis": "Yes, severe.", "symptoms": "Short of breath and dizzy.", "tavr": "What's TAVR?", "age": "I'm 85.", "frail": "I'm pretty frail.", "minimally invasive": "Is there a less invasive option?"});
        // ASTHMA scenarios
        e('asthma-exacerbation', 'whatif_asthma_anaphylaxis', {"short of breath": "Can't breathe.", "asthma": "I have asthma but this is different.", "hives": "I have hives.", "swelling": "My lips are swelling.", "throat": "My throat feels tight.", "what ate": "Tried shellfish.", "epipen": "I don't have an EpiPen."});
        e('asthma-exacerbation', 'whatif_asthma_normal_co2', {"short of breath": "Very short of breath.", "co2": "They said my CO2 is normal.", "should be low": "Shouldn't it be low?", "ominous": "Is that bad?", "tiring out": "I'm getting tired.", "exhaustion": "I can't keep breathing like this."});
        // BACK scenarios
        e('back-pain-msk', 'whatif_back_cancer_history', {"back pain": "New back pain.", "cancer": "Yes, lung cancer.", "metastatic": "Yes, it spread.", "bone mets": "Spots in my bones.", "night pain": "Worse at night.", "weakness": "Some leg weakness."});
        e('back-pain-msk', 'whatif_back_chronic', {"back pain": "Chronic back pain for years.", "disability": "I'm on disability.", "opioids": "Yes, taking opioids.", "surgery": "Had surgery but didn't help.", "depression": "Yes, I'm depressed."});
        // BPPV scenarios
        e('vertigo-bppv', 'whatif_bppv_constant', {"vertigo": "Constant dizziness.", "not positional": "There all the time.", "not brief": "Lasts for hours.", "different from bppv": "Is this not BPPV?", "vestibular neuritis": "What's vestibular neuritis?"});
        e('vertigo-bppv', 'whatif_bppv_hearing_loss', {"vertigo": "Severe vertigo.", "hearing": "Yes, hearing loss.", "tinnitus": "Yes, ringing.", "fullness": "Ear feels full.", "menieres": "What's Meniere's?"});
        // BRBPR scenarios
        e('lgib-hematochezia', 'whatif_brbpr_unstable', {"rectal bleeding": "Large amount of blood.", "syncope": "I almost passed out.", "hypotensive": "Blood pressure is low.", "transfusion": "Do I need blood?", "emergency": "Is this an emergency?"});
        e('lgib-hematochezia', 'whatif_brbpr_weight_loss', {"rectal bleeding": "Blood in stool.", "weight loss": "Lost 20 pounds.", "bowel habits": "Stools are thinner.", "age": "I'm 62.", "family history": "Father had colon cancer."});
        e('lgib-hematochezia', 'whatif_brbpr_young_no_family_hx', {"rectal bleeding": "Bright red blood.", "age": "I'm 25.", "family history": "No family history.", "hemorrhoids": "Yes, I have hemorrhoids.", "anal fissure": "Could it be a fissure?"});
        // CAP scenarios
        e('cap-pneumonia', 'whatif_cap_no_hypoxia', {"pneumonia": "They said I have pneumonia.", "oxygen": "My oxygen is normal.", "short of breath": "Not too short of breath.", "outpatient": "Can I go home?", "treatment": "What antibiotic?"});
        // DISC scenarios
        e('back-pain-herniated-disc', 'whatif_disc_cancer_history', {"back pain": "Severe back pain.", "cancer": "Yes, prostate cancer.", "bone mets": "It spread to bones.", "cord compression": "Could it be pressing on my spinal cord?", "emergency": "Is this an emergency?"});
        e('back-pain-herniated-disc', 'whatif_disc_cauda_equina', {"back pain": "Severe back pain.", "leg weakness": "Both legs weak.", "bladder": "I can't pee.", "saddle": "Numb between my legs.", "incontinence": "Yes, bowel incontinence.", "emergency": "Is this an emergency?"});
        e('back-pain-herniated-disc', 'whatif_disc_progressive_weakness', {"back pain": "Back pain for weeks.", "leg weakness": "My leg is getting weaker.", "foot drop": "I can't lift my foot.", "progressive": "Getting worse.", "surgery": "Will I need surgery?"});
        // HEADACHE scenarios
        e('headache', 'whatif_headache_fever', {"headache": "Severe headache.", "fever": "High fever.", "neck": "Neck is stiff.", "photophobia": "Light bothers me.", "meningitis": "Could this be meningitis?"});
        e('headache', 'whatif_headache_papilledema', {"headache": "Headaches for weeks.", "vision": "Blurry vision.", "pulsatile tinnitus": "I hear whooshing.", "obese": "Yes, overweight.", "female": "Yes, female.", "iih": "What's IIH?"});
        e('headache', 'whatif_headache_postural', {"headache": "Headache when I sit up.", "better lying down": "Yes, better flat.", "lumbar puncture": "Had a spinal tap 3 days ago.", "csf leak": "Could I have a leak?", "blood patch": "What's a blood patch?"});
        // HEAT scenarios
        e('env-heat-island', 'whatif_heat_elderly_classic', {"hot": "Very hot outside.", "no ac": "No air conditioning.", "elderly": "She's 85.", "confusion": "Very confused.", "hot skin": "Skin is hot and dry.", "no sweating": "Not sweating.", "temperature": "Temp is 105°F.", "classic heat stroke": "Is this heat stroke?"});
        e('env-heat-island', 'whatif_heat_exhaustion', {"hot": "Out in the heat.", "exercising": "Was running.", "sweating": "A lot of sweating.", "temperature": "Temp is 101°F.", "nausea": "Yes, nauseous.", "confused": "I'm okay mentally.", "heat exhaustion": "Is this heat exhaustion?"});
        e('env-heat-island', 'whatif_heat_rhabdo', {"heat": "Out in the heat.", "exercising": "Marathon training.", "muscle pain": "Severe muscle pain.", "dark urine": "Urine is very dark.", "cola colored": "Yes, like cola.", "rhabdo": "What's rhabdomyolysis?", "kidneys": "Will my kidneys be okay?"});
        // Remaining stroke scenario
        e('acute-stroke', 'whatif_stroke_wake_up', {"symptoms": "I woke up with symptoms.", "when": "This morning.", "went to bed": "Fine when I went to bed.", "last known well": "About 10pm last night.", "time unknown": "I don't know when it started.", "weakness": "Right side is weak.", "speech": "Trouble speaking.", "tpa": "Can I get the clot buster?", "time window": "Am I too late?", "mri": "What about MRI?"});
    }
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
