
window.EMR_DATA = {
  "patient": {
    "name": "Ben Tran",
    "dob": "03/25/1959",
    "age": 66,
    "sex": "Male",
    "mrn": "RDX-2025-99913",
    "pronouns": "He/Him",
    "insurance": "United Healthcare PPO",
    "pcp": "Dr. Ana Torres, MD",
    "pharmacy": "Walgreens \u2014 2400 SW 3rd Ave, Miami, FL",
    "language": "English",
    "chiefComplaint": "Progressive Dyspnea 10 Days",
    "race": "Hispanic or Latino",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021",
    "phone": "(954) 555-5481",
    "email": "bentran@email.com",
    "emergencyContact": {
      "name": "Elena Rodriguez (Family)",
      "phone": "(954) 555-7632"
    }
  },
  "problems": [
    {
      "problem": "PCP \u2014 Pneumocystis jirovecii pneumonia, HIV-related",
      "icd": "B59",
      "onset": "2024",
      "status": "Active",
      "notes": "Marcus Brown, 34M \u2014 undiagnosed HIV. Progressive dyspnea x3 weeks, dry cough, fever. SpO2 86% on room air. CD4 42."
    },
    {
      "problem": "HIV \u2014 newly diagnosed, uncontrolled, CD4 42 cells/\u03bcL",
      "icd": "B24",
      "onset": "2024",
      "status": "Active",
      "notes": "No prior HIV testing. CD4 42 = AIDS. Multiple OI prophylaxis required. ART deferred until PCP treatment underway (2 weeks)."
    },
    {
      "problem": "Adjunctive corticosteroids \u2014 indicated for PCP with PaO2 <70",
      "icd": "B59",
      "onset": "2024",
      "status": "Active",
      "notes": "PaO2 58 on ABG \u2014 meets criteria for adjunctive steroids. Steroids reduce mortality by 50% in severe PCP."
    }
  ],
  "medications": [
    {
      "name": "TMP-SMX 15-20mg/kg/day IV divided q8h \u2014 PCP treatment",
      "sig": "Based on trimethoprim component. Duration 21 days. Transition to oral when clinically improved.",
      "prescriber": "ID/Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Prednisone 40mg PO BID x5 days, then taper \u2014 adjunctive steroid",
      "sig": "Start within 72h of PCP antibiotics. Indication: PaO2 <70 or A-a gradient >35 on room air. Reduces respiratory failure and mortality.",
      "prescriber": "ID/Medicine",
      "start": "2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "ART (antiretroviral therapy) \u2014 defer 2 weeks after PCP treatment",
      "sig": "Starting ART too early with active PCP can precipitate IRIS (immune reconstitution inflammatory syndrome). Begin after 2 weeks of PCP treatment.",
      "prescriber": "HIV Medicine/ID",
      "start": "Defer",
      "refills": 0,
      "status": "Defer \u2014 2 weeks"
    },
    {
      "name": "TMP-SMX 1 DS PO daily \u2014 PCP prophylaxis after treatment",
      "sig": "Lifelong prophylaxis until CD4 >200 x3 months on ART. Also covers Toxoplasma prophylaxis at this dose.",
      "prescriber": "ID",
      "start": "After treatment",
      "refills": 11,
      "status": "After treatment completion"
    }
  ],
  "allergies": [
    {
      "allergen": "No known drug allergies",
      "type": "Drug",
      "reaction": "None",
      "severity": "N/A",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "11/18/2024",
      "bp": "148/92",
      "hr": 98,
      "rr": 18,
      "temp": "99.2\u00b0F",
      "spo2": "96%",
      "wt": "123 lbs",
      "ht": "5'4\"",
      "bmi": 21.1,
      "setting": "ED"
    },
    {
      "date": "05/22/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6\u00b0F",
      "spo2": "98%",
      "wt": "123 lbs",
      "ht": "5'4\"",
      "bmi": 21.1,
      "setting": "Office"
    },
    {
      "date": "11/19/2023",
      "bp": "132/82",
      "hr": 76,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "99%",
      "wt": "123 lbs",
      "ht": "5'4\"",
      "bmi": 21.1,
      "setting": "Office"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Progressive Dyspnea 10 Days",
      "assessment": "Working diagnosis: Progressive Dyspnea 10 Days",
      "plan": "Referral to medicine. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/2024",
      "panel": "PCP/HIV Panel",
      "results": [
        {
          "test": "CD4 count",
          "value": "42",
          "unit": "cells/\u03bcL",
          "ref": ">500 normal",
          "flag": "L"
        },
        {
          "test": "HIV viral load",
          "value": "580,000",
          "unit": "copies/mL",
          "ref": "Undetectable",
          "flag": "H"
        },
        {
          "test": "ABG \u2014 PaO2",
          "value": "58",
          "unit": "mmHg",
          "ref": "80-100",
          "flag": "L"
        },
        {
          "test": "LDH",
          "value": "720",
          "unit": "U/L",
          "ref": "135-225",
          "flag": "H"
        },
        {
          "test": "Beta-D-glucan",
          "value": ">500",
          "unit": "pg/mL",
          "ref": "<80 pg/mL",
          "flag": "H"
        },
        {
          "test": "BAL \u2014 GMS stain",
          "value": "Pneumocystis cysts confirmed",
          "unit": "",
          "ref": "No organisms",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/2024",
      "study": "CXR PA",
      "indication": "Progressive dyspnea, HIV",
      "findings": "Bilateral perihilar ground-glass opacities, 'bat wing' distribution. No pleural effusion. No lobar consolidation.",
      "impression": "Classic PCP pattern \u2014 bilateral perihilar ground-glass opacities in HIV patient. CD4 42 makes PCP highly likely."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V1739K",
      "site": "Left deltoid"
    }
  ],
  "familyHistory": [
    {
      "relation": "Father",
      "condition": "Hypertension",
      "age": "58"
    },
    {
      "relation": "Mother",
      "condition": "Type 2 diabetes",
      "age": "55"
    }
  ],
  "socialHistory": {
    "smoking": "Never smoker",
    "alcohol": "Social, 2-4 drinks/week",
    "drugs": "Denies",
    "occupation": "Healthcare professional / student",
    "exercise": "Regular, 3x/week",
    "diet": "Balanced",
    "livingArrangement": "Lives with family"
  },
  "meta": {
    "caseId": "pcp-hiv-adult",
    "diagnosis": "Pneumocystis Pneumonia (PCP) \u2014 HIV with CD4 Count 42, TMP-SMX Treatment and PCP Prophylaxis Education",
    "acuity": 2,
    "presentation": "Progressive Dyspnea 10 Days",
    "category": "infectious"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with progressive dyspnea 10 days. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
    "interviewQuestions": [
      "What brings you in today?",
      "When did this start?",
      "Has it been getting better, worse, or the same?",
      "What makes it better or worse?",
      "Rate the severity 0-10.",
      "Any associated symptoms?",
      "Any prior episodes?",
      "What medications are you taking?",
      "Any allergies?",
      "Any relevant family history?",
      "Any recent travel or sick contacts?",
      "Any prior surgeries or hospitalizations?"
    ],
    "patientResponses": {
      "default": "Patient provides information relevant to their presenting complaint and history.",
      "onset": "Symptoms began approximately consistent with the timeline in this infectious presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "General appearance",
      "Vital signs",
      "Cardiovascular exam",
      "Pulmonary exam",
      "Abdominal exam",
      "Neurological exam",
      "Skin exam",
      "Musculoskeletal exam"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "PCP \u2014 CD4 42, bilateral GGO, elevated LDH and beta-D-glucan (correct)",
      "Bacterial pneumonia \u2014 lobar consolidation, more abrupt onset; GGO pattern atypical",
      "COVID-19 pneumonia \u2014 possible but PCP must be excluded in HIV/AIDS",
      "Tuberculosis \u2014 upper lobe disease, lymphadenopathy; PCP more consistent with this pattern",
      "Histoplasmosis \u2014 endemic exposure, disseminated pattern, different lab profile",
      "Lymphocytic interstitial pneumonia \u2014 HIV-related but indolent, CD4 often higher"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a medicine case with chief complaint: Progressive Dyspnea 10 Days. What are the most important questions for a medicine to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a medicine perspective, what is the most critical finding that narrows this differential? What is the medicine-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the medicine's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: PCP in HIV/AIDS. Key learning: (1) PCP classic presentation: subacute onset (weeks) of progressive exertional dyspnea + dry cough + fever in HIV patient with CD4 <200. CXR: bilateral perihilar ground-glass opacities ('bat wing' or 'butterfly' pattern). LDH is elevated in ~90% \u2014 a sensitive but nonspecific marker. Beta-D-glucan >80 pg/mL is sensitive for PCP. (2) Adjunctive steroids: indicated when PaO2 <70 mmHg or A-a gradient >35 on room air. Start within 72 hours of antibiotics. Regimen: prednisone 40mg BID x5d \u2192 40mg daily x5d \u2192 20mg daily x11d. Reduces mortality by ~50% in severe PCP \u2014 one of the clearest evidence-based adjunctive therapy benefits in ID. (3) IRIS (immune reconstitution inflammatory syndrome): starting ART too soon during active OI can trigger paradoxical worsening as CD4 cells recover and mount an inflammatory response against the pathogen. Standard: begin ART 2 weeks after starting OI treatment for PCP (vs 2 weeks for most OIs, 4-8 weeks for CNS infections like cryptococcal meningitis). (4) OI prophylaxis thresholds in HIV: CD4 <200 \u2192 TMP-SMX for PCP + Toxoplasma. CD4 <50 \u2192 add azithromycin for MAC (Mycobacterium avium complex). CD4 <100 + seropositive \u2192 add TMP-SMX dose for Toxoplasma encephalitis prevention. (5) TMP-SMX allergy in HIV: ~40% of HIV patients on TMP-SMX develop hypersensitivity. Desensitization protocol is preferred over switching to pentamidine (more toxic) when possible."
    }
  }
};
