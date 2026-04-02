window.CASES=window.CASES||{};
window.CASES['ibd']={
  id:'ibd',name:'Claire Okafor',age:'22F',dob:'2003-03-11',mrn:'RDX-2026-33218',
  setting:'GI Clinic',category:'gastrointestinal',acuity:3,
  chiefComplaint:'Bloody diarrhea 8×/day + cramping + 10-lb weight loss — new IBD diagnosis',
  diagnosis:'Ulcerative Colitis — Moderate-Severe Pancolitis (Mayo Score 10)',
  presentation:{
    hpi:'22F, 6 weeks of bloody diarrhea (8×/day), urgency, tenesmus, cramping, 10-lb weight loss. Colonoscopy: continuous mucosal inflammation from rectum to cecum (pancolitis), no skip lesions, no fistulas. Biopsy: crypt distortion + goblet cell depletion + basal plasmacytosis — UC confirmed. Mayo score 10 (moderate-severe). CRP 64, albumin 2.8. Stool cultures negative, C. diff negative.',
    pmh:['No prior GI history'],meds:['None'],allergies:['NKDA']
  },
  vitals:{BP:'112/68',HR:'98',RR:'16',Temp:'37.6°C',SpO2:'98%'},
  labs:{
    'CBC':'WBC 12.4, Hgb 9.8 (L — iron deficiency from blood loss), Plt 498 (reactive thrombocytosis)',
    'BMP':'Albumin 2.8 (L — malnutrition/inflammation), K 3.2 (L), CRP 64 (H)',
    'Fecal calprotectin':'2,200 µg/g (H — active mucosal inflammation confirmed)',
    'Colonoscopy biopsy':'Crypt architectural distortion, goblet cell depletion, basal plasmacytosis — UC confirmed. No granulomas (would suggest Crohn\'s).'
  },
  orders:{
    correct:[
      {id:'steroids-uc',name:'Methylprednisolone 60mg IV or prednisone 40-60mg PO — induce remission',rationale:'Moderate-severe UC: systemic corticosteroids for induction. Goal: achieve remission then transition to steroid-sparing maintenance therapy. Steroids are NOT maintenance therapy — must transition to biologic or immunomodulator.'},
      {id:'biologic-uc',name:'Initiate biologic — vedolizumab (gut-selective) or infliximab (TNF inhibitor) + azathioprine',rationale:'Moderate-severe UC: anti-TNF (infliximab) or anti-integrin (vedolizumab). GEMINI trial: vedolizumab effective for UC with gut-selective mechanism (fewer systemic infections). Infliximab: faster onset, preferred for hospitalized/severe. Combo with azathioprine reduces immunogenicity. UC can be CURED by colectomy — factor this into therapy discussions.'},
      {id:'nutrition-uc',name:'Nutrition support — albumin 2.8, significant anabolic demand',rationale:'Malnutrition impairs healing and treatment response. Oral supplementation first; enteral nutrition if unable. IV iron for iron deficiency anemia (oral iron poorly tolerated in active IBD).'}
    ],
    incorrect:[
      {id:'mesalamine-severe-uc',name:'Mesalamine alone — appropriate for any UC',rationale:'Mesalamine (5-ASA) is effective for MILD UC but insufficient for moderate-severe disease. It has no role in Crohn\'s disease. For Mayo score ≥10: systemic steroids + biologic escalation is required.'},
      {id:'azathioprine-first-uc',name:'Start azathioprine alone — steroid-sparing',rationale:'Azathioprine takes 3-6 months to reach full effect — too slow for acute moderate-severe UC requiring immediate control. Use as maintenance after remission is induced with steroids + biologic. Azathioprine + thiopurine methyltransferase (TPMT) testing required before starting.'}
    ]
  },
  teachingPoints:{
    keyLearning:['UC vs Crohn\'s: UC is contiguous from rectum (no skip lesions), mucosal only, cured by colectomy. Crohn\'s is transmural, skip lesions, anywhere mouth-to-anus, not cured by surgery.','Mesalamine treats mild UC. Moderate-severe UC needs systemic steroids + biologic (infliximab or vedolizumab).','UC is CURABLE by colectomy (total proctocolectomy) — this distinguishes it from Crohn\'s. Always discuss surgical option.','Colorectal cancer risk: UC pancolitis ≥8 years → colonoscopy surveillance every 1-2 years.'],
    boardPearls:['Toxic megacolon: colon diameter >6cm + systemic toxicity — surgical emergency (colectomy).','Primary sclerosing cholangitis (PSC) in UC: UC is the most common IBD type associated with PSC. Screen with LFTs and MRCP. PSC increases CRC risk further.','Tofacitinib (JAK inhibitor): oral therapy for moderate-severe UC — increased cardiovascular + thrombotic risk (ORAL Surveillance).','Biologics and infection: screen for TB (IGRA) and HBV before all biologics.']
  },
  references:[{id:'StatPearls-UC',title:'Ulcerative Colitis',journal:'StatPearls',year:2024,url:'https://www.ncbi.nlm.nih.gov/books/NBK459282/',openAccess:true}]
};
