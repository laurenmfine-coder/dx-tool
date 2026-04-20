
window.EMR_DATA = {
  "patient": {
    "name": "Charlie",
    "dob": "03/07/2017",
    "age": 8,
    "sex": "Male (neutered)",
    "species": "Great Dane",
    "mrn": "RDX-2025-81981",
    "pronouns": "They/Them",
    "insurance": "Nationwide Pet",
    "pcp": "Dr. James Rodriguez, DVM \u2014 South Florida Animal Hospital",
    "pharmacy": "South Florida Animal Hospital In-House Pharmacy",
    "language": "N/A (animal patient)",
    "chiefComplaint": "Unproductive Retching",
    "race": "Species: Great Dane",
    "address": "3418 Hollywood Blvd, Hollywood, FL 33021 (Owner: Tamika Williams)",
    "phone": "(954) 555-4023",
    "email": "charlieowner@email.com",
    "emergencyContact": {
      "name": "Tamika Williams (Owner)",
      "phone": "(954) 555-5778"
    }
  },
  "problems": [
    {
      "problem": "Gastric dilatation-volvulus \u2014 emergent",
      "icd": "K31.89",
      "onset": "2024",
      "status": "Active",
      "notes": "Unproductive retching 3 hours, tympanic abdomen, HR 148, weak pulses \u2014 GDV until proven otherwise"
    },
    {
      "problem": "Hemorrhagic gastroenteritis \u2014 prior episode",
      "icd": "K29.20",
      "onset": "2022",
      "status": "Resolved",
      "notes": "Single prior episode, recovered with supportive care"
    }
  ],
  "medications": [
    {
      "name": "Normal saline 0.9% IV bolus 90mL/kg over 1 hour (shock dose)",
      "sig": "IV bolus \u2014 calculate per weight, reassess q15 minutes",
      "prescriber": "Dr. Chen DVM",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Carprofen 2.2mg/kg PO BID (post-op)",
      "sig": "Give orally twice daily \u2014 post-surgical pain management",
      "prescriber": "Dr. Chen DVM",
      "start": "11/2024",
      "refills": 4,
      "status": "Active post-op"
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
      "bp": "145/95",
      "hr": 148,
      "rr": 38,
      "temp": "103.8\u00b0F",
      "spo2": "96%",
      "wt": "28 kg",
      "ht": "N/A",
      "bmi": null,
      "setting": "Veterinary Hospital"
    },
    {
      "date": "08/20/2024",
      "bp": "128/80",
      "hr": 92,
      "rr": 22,
      "temp": "101.5\u00b0F",
      "spo2": "99%",
      "wt": "29.5 kg",
      "ht": "N/A",
      "bmi": null,
      "setting": "Veterinary Clinic"
    }
  ],
  "visits": [
    {
      "date": "09/15/2024",
      "type": "Office",
      "provider": "Dr. Marcus Johnson, MD",
      "summary": "Patient seen for Acute Abdominal Distension",
      "assessment": "Working diagnosis: Acute Abdominal Distension",
      "plan": "Referral to vet. Follow up as needed."
    }
  ],
  "labs": [
    {
      "date": "11/18/2024",
      "panel": "Pre-Surgical Blood Work \u2014 GDV",
      "results": [
        {
          "test": "PCV (packed cell volume)",
          "value": "52",
          "unit": "%",
          "ref": "37-55",
          "flag": ""
        },
        {
          "test": "Total solids",
          "value": "7.8",
          "unit": "g/dL",
          "ref": "5.5-8.5",
          "flag": ""
        },
        {
          "test": "Glucose",
          "value": "72",
          "unit": "mg/dL",
          "ref": "70-138",
          "flag": ""
        },
        {
          "test": "BUN",
          "value": "38",
          "unit": "mg/dL",
          "ref": "7-27",
          "flag": "H"
        },
        {
          "test": "Creatinine",
          "value": "1.8",
          "unit": "mg/dL",
          "ref": "0.5-1.5",
          "flag": "H"
        },
        {
          "test": "Potassium",
          "value": "3.1",
          "unit": "mEq/L",
          "ref": "3.5-5.5",
          "flag": "L"
        },
        {
          "test": "Lactate",
          "value": "6.8",
          "unit": "mmol/L",
          "ref": "<2.5",
          "flag": "H"
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2024",
      "study": "Right Lateral and VD Abdominal Radiographs",
      "indication": "Acute abdomen, unproductive retching, tympany \u2014 rule out GDV",
      "findings": "Right lateral view: large gas-distended stomach compartmentalization \u2014 'double bubble' sign with soft tissue band dividing gastric compartments consistent with volvulus. Liver silhouette cranially displaced. No free peritoneal gas. VD view: stomach gas shadow extending caudal to spleen. Spleen in abnormal position.",
      "impression": "Radiographic appearance consistent with gastric dilatation-volvulus (GDV). Emergency surgery required. Confirm orogastric tube will not pass prior to surgery."
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza",
      "date": "10/2024",
      "lot": "V1309K",
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
    "caseId": "vet-gastric-dilatation-volvulus",
    "diagnosis": "Gastric Dilatation-Volvulus (GDV) \u2014 Great Dane, Hemodynamic Compromise",
    "acuity": 1,
    "presentation": "Acute Abdominal Distension",
    "category": "surgical"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Patient presents with acute abdominal distension. They are cooperative and provide history as able. Emotional presentation appropriate to acuity level. Communication style consistent with case context.",
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
      "onset": "Symptoms began approximately consistent with the timeline in this surgical presentation.",
      "severity": "Patient rates symptoms at a level consistent with acuity level of the presentation.",
      "associated symptoms": "Reports associated findings consistent with the diagnosis.",
      "prior treatment": "Has tried conservative measures with limited relief.",
      "goals": "Patient wants to understand their condition and return to normal activities."
    },
    "examManeuvers": [
      "Species-appropriate physical exam",
      "Vital signs (species-normal ranges)",
      "Weight and body condition scoring",
      "Auscultation (heart, lungs, GI for ruminants)",
      "Abdominal palpation",
      "Mucous membrane color and CRT",
      "Neurological assessment",
      "Pain scoring (species-appropriate scale)"
    ],
    "examFindings": {
      "General": "Patient presentation consistent with chief complaint",
      "Vital Signs": "As documented in vitals section",
      "Relevant System": "Physical findings consistent with diagnosis",
      "Additional": "Other pertinent findings per clinical context"
    },
    "ddxTargets": [
      "Gastric dilatation-volvulus (correct)",
      "Gastric dilatation without volvulus \u2014 bloat only",
      "Splenic mass with hemorrhage",
      "Mesenteric volvulus",
      "Intestinal obstruction",
      "Hemoabdomen from ruptured tumor"
    ],
    "biasFlags": {
      "anchoring": "If student anchors on first impression without systematic evaluation, flag anchoring. Encourage broad differential exploration.",
      "premature_closure": "If student closes on diagnosis before completing profession-appropriate assessment, flag premature closure."
    },
    "coachPrompts": {
      "phase2": "The student is reviewing a vet case with chief complaint: Acute Abdominal Distension. What are the most important questions for a vet to ask \u2014 and what clinical findings would distinguish this from the top 2 alternatives on the differential?",
      "phase5": "History and exam complete. Phase 2 differential: {{ddx2}}. Phase 5 findings: {{ddx5}}. From a vet perspective, what is the most critical finding that narrows this differential? What is the vet-specific management priority?",
      "phase7": "After reviewing all data: {{ddx5}}. What is the diagnosis, and what is the vet's specific role in management? What interprofessional communication is needed?",
      "final": "Diagnosis: GDV in a Great Dane \u2014 minutes-to-death emergency. Key veterinary learning points: (1) Stabilization sequence: IV catheter \u2192 aggressive fluid resuscitation (20-30 mL/kg boluses, reassess, goal lactate normalization) \u2192 gastric decompression (orogastric tube or trocar) \u2192 emergency surgery. Do NOT wait for full diagnostics before starting fluids. (2) The volvulus part is what kills: 270-360\u00b0 rotation of stomach around the esophagogastric axis \u2192 portal vein compression \u2192 splenic congestion \u2192 cardiovascular collapse \u2192 DIC. Lactate 6.8 = profound ischemia. (3) Surgery involves: derotation of stomach, assessment of gastric wall viability (necrotic tissue = partial gastrectomy), splenectomy if splenic thrombosis, and gastropexy (permanent fixation to prevent recurrence). (4) Post-op monitoring priorities: cardiac arrhythmias (reperfusion injury causes ventricular arrhythmias \u2014 most common cause of post-op death), DIC monitoring (PT/aPTT/fibrinogen), and monitoring for delayed gastric necrosis. (5) Prevention: prophylactic gastropexy is recommended in predisposed breeds (Great Dane, Weimaraner, German Shepherd, standard poodle) \u2014 reduces GDV recurrence from 80% to <5%."
    }
  }
};
