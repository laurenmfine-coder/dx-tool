/**
 * ProcedureDx Complete Procedure Library
 * Comprehensive procedures for EPA 12 coverage
 */

const COMPLETE_PROCEDURES = [
    // ==================== BASIC PROCEDURES ====================
    {
        id: 'venipuncture',
        name: 'Venipuncture / Blood Draw',
        description: 'Peripheral venous blood collection',
        difficulty: 'basic',
        category: 'Basic Skills',
        requiredSupplies: [
            { id: 'gloves', name: 'Non-sterile gloves', icon: '🧤', category: 'PPE' },
            { id: 'tourniquet', name: 'Tourniquet', icon: '🔗', category: 'Equipment' },
            { id: 'alcohol-prep', name: 'Alcohol prep pads', icon: '🧴', category: 'Supplies' },
            { id: 'vacutainer', name: 'Vacutainer holder', icon: '🔧', category: 'Equipment' },
            { id: 'needle-21g', name: '21g needle or butterfly', icon: '📌', category: 'Supplies' },
            { id: 'tubes', name: 'Collection tubes (appropriate colors)', icon: '🧪', category: 'Supplies' },
            { id: 'gauze', name: 'Gauze pads', icon: '🩹', category: 'Supplies' },
            { id: 'tape', name: 'Tape or bandage', icon: '🩹', category: 'Supplies' },
            { id: 'sharps', name: 'Sharps container', icon: '🗑️', category: 'Safety' }
        ],
        distractorSupplies: [
            { id: 'sterile-gloves', name: 'Sterile gloves', icon: '🧤', category: 'Not needed' },
            { id: 'lidocaine', name: 'Lidocaine', icon: '💉', category: 'Not routine' }
        ],
        keySteps: [
            'Verify patient identity and ordered tests',
            'Select appropriate tubes based on tests ordered',
            'Position patient arm extended on flat surface',
            'Apply tourniquet 3-4 inches above intended site',
            'Identify vein by palpation (median cubital preferred)',
            'Clean site with alcohol, allow to dry',
            'Anchor vein by pulling skin taut distally',
            'Insert needle bevel up at 15-30° angle',
            'Advance until flash of blood in tubing',
            'Fill tubes in correct order of draw',
            'Release tourniquet before removing needle',
            'Remove needle, apply pressure with gauze',
            'Apply bandage',
            'Label tubes at bedside',
            'Dispose of sharps properly'
        ],
        orderOfDraw: [
            'Blood cultures (yellow)',
            'Coagulation (light blue - citrate)',
            'Serum (red or gold - SST)',
            'Heparin (green)',
            'EDTA (lavender/purple)',
            'Glucose/Lactate (gray)'
        ],
        whatIfScenarios: [
            {
                prompt: "You've inserted the needle but aren't getting blood return. What do you try?",
                options: [
                    { text: "Remove and try a completely new site immediately", correct: false },
                    { text: "Advance slightly, withdraw slightly, or rotate needle - may have gone through vein or be against wall", correct: true },
                    { text: "Push harder and deeper", correct: false },
                    { text: "Remove tourniquet and try again", correct: false }
                ],
                explanation: "Before abandoning the stick, try minor adjustments. You may have gone through the vein (withdraw slightly) or be against the wall (rotate). If unsuccessful after 1-2 adjustments, remove and try new site. Multiple probing attempts cause hematoma."
            },
            {
                prompt: "The patient says they're 'a hard stick' and nurses always use their hand. What's your approach?",
                options: [
                    { text: "Insist on using the antecubital fossa - it's easier", correct: false },
                    { text: "Listen to the patient - examine hands, use butterfly needle if needed", correct: true },
                    { text: "Call the IV team instead", correct: false },
                    { text: "Use a larger needle for better visualization", correct: false }
                ],
                explanation: "Patients often know their bodies. Hand veins may be easier in some patients. Use a butterfly needle for hand/small veins. Warm compresses can help dilate veins. Respect patient experience while applying your assessment skills."
            }
        ]
    },
    {
        id: 'iv-placement',
        name: 'Peripheral IV Placement',
        description: 'Peripheral intravenous catheter insertion',
        difficulty: 'basic',
        category: 'Basic Skills',
        requiredSupplies: [
            { id: 'gloves', name: 'Non-sterile gloves', icon: '🧤', category: 'PPE' },
            { id: 'tourniquet', name: 'Tourniquet', icon: '🔗', category: 'Equipment' },
            { id: 'alcohol-chlorhex', name: 'Alcohol or chlorhexidine prep', icon: '🧴', category: 'Supplies' },
            { id: 'iv-catheter', name: 'IV catheter (18g or 20g)', icon: '📌', category: 'Supplies' },
            { id: 'saline-flush', name: 'Saline flush (10mL)', icon: '💉', category: 'Supplies' },
            { id: 'extension', name: 'Extension tubing with cap', icon: '🔌', category: 'Supplies' },
            { id: 'tegaderm', name: 'Transparent dressing (Tegaderm)', icon: '🩹', category: 'Supplies' },
            { id: 'tape', name: 'Tape', icon: '🩹', category: 'Supplies' },
            { id: 'gauze', name: 'Gauze', icon: '🩹', category: 'Supplies' },
            { id: 'sharps', name: 'Sharps container', icon: '🗑️', category: 'Safety' }
        ],
        distractorSupplies: [
            { id: 'sterile-gloves', name: 'Sterile gloves', icon: '🧤', category: 'Not needed for PIV' },
            { id: 'suture', name: 'Suture', icon: '🧵', category: 'Not for PIV' }
        ],
        keySteps: [
            'Verify patient identity and indication',
            'Select appropriate catheter size for indication',
            'Position arm and apply tourniquet',
            'Identify suitable vein (avoid joints, areas of flexion)',
            'Clean site and allow to dry',
            'Anchor vein by pulling skin taut',
            'Insert catheter bevel up at 10-30° angle',
            'Watch for flash of blood in chamber',
            'Lower angle and advance catheter 1-2mm',
            'Hold needle steady, advance plastic catheter only',
            'Release tourniquet',
            'Apply pressure above catheter tip, remove needle',
            'Connect extension tubing',
            'Flush with saline to confirm patency',
            'Secure with transparent dressing',
            'Document site, gauge, and date'
        ],
        whatIfScenarios: [
            {
                prompt: "You get flash but when you advance the catheter, it won't thread. What happened?",
                options: [
                    { text: "The vein collapsed - remove and start over", correct: false },
                    { text: "You likely didn't advance far enough after flash - the catheter tip isn't in the vein", correct: true },
                    { text: "The catheter is defective - get a new one", correct: false },
                    { text: "Push harder to force it through", correct: false }
                ],
                explanation: "The most common cause of 'flash but won't thread' is insufficient advancement after flash. After seeing blood, lower your angle and advance the whole unit 1-2mm MORE before trying to thread just the catheter. This ensures the catheter tip (not just needle) enters the vein."
            },
            {
                prompt: "After flushing, you notice swelling at the site. What does this indicate?",
                options: [
                    { text: "Normal - the vein is just filling", correct: false },
                    { text: "Infiltration - the catheter is not in the vein or has gone through", correct: true },
                    { text: "Allergic reaction to the flush", correct: false },
                    { text: "The flush is going in too fast", correct: false }
                ],
                explanation: "Swelling during flush indicates infiltration - fluid is going into tissue, not vein. Remove immediately. Document the infiltration, apply warm compress, and attempt new site. Do not use infiltrated site for medications."
            }
        ]
    },
    {
        id: 'foley',
        name: 'Urinary Catheter (Foley) Insertion',
        description: 'Indwelling urinary catheter placement',
        difficulty: 'basic',
        category: 'Basic Skills',
        requiredSupplies: [
            { id: 'sterile-gloves', name: 'Sterile gloves', icon: '🧤', category: 'Sterile' },
            { id: 'foley-kit', name: 'Foley catheter kit', icon: '📦', category: 'Kit' },
            { id: 'catheter', name: 'Foley catheter (14-16 Fr typical)', icon: '🔌', category: 'Kit' },
            { id: 'drainage-bag', name: 'Drainage bag', icon: '💧', category: 'Kit' },
            { id: 'sterile-water', name: 'Sterile water (10mL syringe)', icon: '💉', category: 'Kit' },
            { id: 'lubricant', name: 'Sterile lubricant', icon: '🧴', category: 'Kit' },
            { id: 'antiseptic', name: 'Antiseptic solution', icon: '🧴', category: 'Kit' },
            { id: 'drape', name: 'Sterile drape (fenestrated)', icon: '📄', category: 'Kit' },
            { id: 'cotton-balls', name: 'Cotton balls', icon: '⚪', category: 'Kit' }
        ],
        distractorSupplies: [
            { id: 'lidocaine-jelly', name: 'Lidocaine jelly', icon: '🧴', category: 'Optional but not required' },
            { id: 'guidewire', name: 'Guidewire', icon: '〰️', category: 'Not for standard Foley' }
        ],
        keySteps: [
            'Verify indication (avoid unnecessary catheters - infection risk)',
            'Position patient supine, legs apart (frog-leg for female)',
            'Open kit maintaining sterility',
            'Put on sterile gloves',
            'Test balloon with sterile water, then deflate',
            'Apply generous lubricant to catheter tip',
            'Clean urethral meatus (female: front to back; male: circular from meatus outward)',
            'For male: hold penis at 90° to straighten urethra',
            'Insert catheter until urine returns',
            'Advance 2-3 more inches to ensure balloon is in bladder',
            'Inflate balloon with sterile water (typically 10mL)',
            'Gently pull back until resistance (balloon at bladder neck)',
            'Connect to drainage bag',
            'Secure catheter to thigh (female) or lower abdomen (male)',
            'Hang bag below bladder level',
            'Document size, balloon volume, urine output'
        ],
        maleVsFemale: {
            male: 'Hold penis perpendicular to body to straighten urethra. More resistance may be encountered at prostate - gentle steady pressure, NEVER force.',
            female: 'Identify urethral meatus (between clitoris and vagina). If catheter goes in vagina, leave it as landmark and use new catheter for correct placement.'
        },
        whatIfScenarios: [
            {
                prompt: "In a male patient, you encounter resistance about 15cm in. What's likely and what do you do?",
                options: [
                    { text: "You've hit the bladder wall - stop and inflate balloon", correct: false },
                    { text: "Resistance at prostate - apply gentle steady pressure, ask patient to take deep breaths, do NOT force", correct: true },
                    { text: "Push harder - resistance is normal", correct: false },
                    { text: "The catheter is too small - get a larger one", correct: false }
                ],
                explanation: "Resistance at ~15cm in males is typically the external sphincter or prostatic urethra. Have patient take deep breaths to relax. Apply gentle steady pressure. If unable to pass with gentle technique, STOP - do not force. May need urology consult or coude catheter."
            },
            {
                prompt: "In a female patient, you insert the catheter but no urine returns. What do you do?",
                options: [
                    { text: "Inflate the balloon - you're probably in the bladder", correct: false },
                    { text: "Likely in vagina - leave it as landmark, get new sterile catheter for urethral attempt", correct: true },
                    { text: "Push deeper to reach bladder", correct: false },
                    { text: "Flush with saline to open a blockage", correct: false }
                ],
                explanation: "No urine return in a female usually means vaginal placement. Leave the misplaced catheter as a landmark (it marks where NOT to go) and use a fresh sterile catheter to find the urethral meatus above it. Remove the vaginal catheter after successful urethral placement."
            },
            {
                prompt: "After inflating the balloon, the patient reports severe pain. What should you do?",
                options: [
                    { text: "Pain is normal - give pain medication", correct: false },
                    { text: "The balloon may be in the urethra, not bladder - deflate immediately and reposition", correct: true },
                    { text: "Add more water to the balloon to seat it properly", correct: false },
                    { text: "Wait a few minutes for the pain to subside", correct: false }
                ],
                explanation: "Severe pain with balloon inflation suggests urethral inflation - a serious complication. Deflate immediately. The catheter wasn't advanced far enough. Reinsert, ensuring good urine return AND advancing 2-3 inches beyond before inflation."
            }
        ]
    },
    {
        id: 'ng-tube',
        name: 'Nasogastric Tube Insertion',
        description: 'NG tube placement for decompression or feeding access',
        difficulty: 'basic',
        category: 'Basic Skills',
        requiredSupplies: [
            { id: 'gloves', name: 'Non-sterile gloves', icon: '🧤', category: 'PPE' },
            { id: 'ng-tube', name: 'NG tube (14-18 Fr)', icon: '🔌', category: 'Equipment' },
            { id: 'lubricant', name: 'Water-soluble lubricant', icon: '🧴', category: 'Supplies' },
            { id: 'cup-water', name: 'Cup of water with straw', icon: '🥤', category: 'Supplies' },
            { id: 'syringe-60', name: '60mL catheter-tip syringe', icon: '💉', category: 'Supplies' },
            { id: 'tape', name: 'Tape or securement device', icon: '🩹', category: 'Supplies' },
            { id: 'stethoscope', name: 'Stethoscope', icon: '🩺', category: 'Equipment' },
            { id: 'emesis-basin', name: 'Emesis basin', icon: '🥣', category: 'Supplies' },
            { id: 'tissues', name: 'Tissues', icon: '🧻', category: 'Supplies' }
        ],
        distractorSupplies: [
            { id: 'sterile-gloves', name: 'Sterile gloves', icon: '🧤', category: 'Not required' },
            { id: 'lidocaine-spray', name: 'Lidocaine spray', icon: '💨', category: 'Optional' }
        ],
        keySteps: [
            'Verify indication and check for contraindications (facial fractures, esophageal stricture)',
            'Position patient sitting upright or high Fowler\'s',
            'Measure tube: nose to ear to xiphoid (NEX) - mark depth',
            'Examine nares for patency, select clearer side',
            'Lubricate distal 10cm of tube generously',
            'Insert into nares, direct back and down (NOT up)',
            'Advance to nasopharynx - patient may gag',
            'Have patient sip water and swallow as you advance',
            'Advance to premeasured mark during swallows',
            'Verify placement: aspirate gastric contents, check pH <5',
            'Confirm with X-ray before use (gold standard)',
            'Secure tube to nose with tape',
            'Connect to suction (decompression) or cap (feeding)',
            'Document tube size, depth at nares, confirmation method'
        ],
        whatIfScenarios: [
            {
                prompt: "The patient is coughing vigorously and can't speak. What happened?",
                options: [
                    { text: "Normal gagging - continue advancing", correct: false },
                    { text: "Tube is in trachea - remove immediately", correct: true },
                    { text: "Give the patient more water to drink", correct: false },
                    { text: "Ask them to swallow harder", correct: false }
                ],
                explanation: "Persistent coughing and inability to speak (or speaking in a whisper) indicates tracheal intubation. Remove immediately. The tube should pass easily when in esophagus. Reposition head (chin to chest) and retry."
            },
            {
                prompt: "You're unable to advance the tube past the nasopharynx - it keeps coiling in the mouth. What do you try?",
                options: [
                    { text: "Push harder to straighten it out", correct: false },
                    { text: "Withdraw slightly, have patient flex chin to chest, advance while patient swallows", correct: true },
                    { text: "Switch to the other naris immediately", correct: false },
                    { text: "Use a smaller diameter tube", correct: false }
                ],
                explanation: "Coiling occurs when the tube doesn't navigate the posterior pharynx into esophagus. Flexing chin to chest helps align the anatomy. Swallowing opens the esophageal inlet. Slight rotation of the tube may also help. If repeatedly unsuccessful, try other naris."
            },
            {
                prompt: "You aspirate greenish fluid. pH is 6. Is the tube in the stomach?",
                options: [
                    { text: "Yes - green fluid confirms gastric placement", correct: false },
                    { text: "Uncertain - pH 6 is too high for stomach; could be small intestine or respiratory secretions; get X-ray", correct: true },
                    { text: "No - this is bile from the lungs", correct: false },
                    { text: "Yes - start feeding immediately", correct: false }
                ],
                explanation: "Gastric pH should be <5 (often 1-3). pH of 6 is ambiguous - could be small intestine (post-pyloric), respiratory secretions, or stomach in patient on PPI. Green color alone doesn't confirm gastric placement. X-ray is gold standard before feeding."
            }
        ]
    },

    // ==================== INTERMEDIATE PROCEDURES ====================
    {
        id: 'lumbar-puncture',
        name: 'Lumbar Puncture',
        description: 'Diagnostic or therapeutic CSF sampling',
        difficulty: 'intermediate',
        category: 'Diagnostic',
        requiredSupplies: [
            { id: 'sterile-gloves', name: 'Sterile gloves', icon: '🧤', category: 'Sterile' },
            { id: 'mask', name: 'Surgical mask', icon: '😷', category: 'PPE' },
            { id: 'chlorhexidine', name: 'Chlorhexidine or betadine', icon: '🧴', category: 'Sterile' },
            { id: 'sterile-drape', name: 'Sterile drape (fenestrated)', icon: '📄', category: 'Sterile' },
            { id: 'lidocaine', name: '1% Lidocaine', icon: '💉', category: 'Anesthesia' },
            { id: 'syringe-5ml', name: '5mL syringe', icon: '💉', category: 'Supplies' },
            { id: 'needle-25g', name: '25g needle (for lidocaine)', icon: '📌', category: 'Supplies' },
            { id: 'spinal-needle', name: 'Spinal needle (20-22g)', icon: '📌', category: 'Equipment' },
            { id: 'manometer', name: 'Manometer with stopcock', icon: '📏', category: 'Equipment' },
            { id: 'csf-tubes', name: 'CSF collection tubes (4)', icon: '🧪', category: 'Supplies' },
            { id: 'bandage', name: 'Bandage', icon: '🩹', category: 'Supplies' }
        ],
        distractorSupplies: [
            { id: 'guidewire', name: 'Guidewire', icon: '〰️', category: 'Not for LP' },
            { id: 'suture', name: 'Suture', icon: '🧵', category: 'Not needed' }
        ],
        keySteps: [
            'Review indications and contraindications',
            'Check coagulation status, consider CT head if concern for mass/elevated ICP',
            'Position: lateral decubitus (fetal position) or sitting',
            'Identify landmarks: posterior superior iliac crests = L4 level',
            'Target L3-L4 or L4-L5 interspace (below conus)',
            'Sterile prep and drape',
            'Anesthetize skin and deeper tissues',
            'Insert spinal needle with stylet, bevel parallel to spine',
            'Advance toward umbilicus with slight cephalad angle',
            'Feel for "pop" through ligamentum flavum and dura',
            'Remove stylet to check for CSF flow',
            'Attach manometer, measure opening pressure (patient legs extended)',
            'Collect CSF in numbered tubes (1-4)',
            'Replace stylet before removing needle',
            'Apply bandage',
            'Patient may remain flat 1-2 hours (controversial)',
            'Send tubes: 1-cell count, 2-glucose/protein, 3-culture/gram stain, 4-hold/special'
        ],
        whatIfScenarios: [
            {
                prompt: "You get bone on your first attempt. What do you do?",
                options: [
                    { text: "Push harder to get past the bone", correct: false },
                    { text: "Withdraw to subcutaneous tissue and redirect - likely hit lamina, aim more midline or cephalad", correct: true },
                    { text: "Remove completely and try a different level", correct: false },
                    { text: "You've reached the vertebral body - go deeper", correct: false }
                ],
                explanation: "Hitting bone usually means you've contacted the lamina (too lateral) or spinous process (wrong interspace). Withdraw to just below skin, reassess landmarks, and redirect more midline or adjust your interspace. Don't redirect while deep in tissue."
            },
            {
                prompt: "The opening pressure is 32 cm H2O. What's your interpretation and action?",
                options: [
                    { text: "Normal - proceed with fluid collection", correct: false },
                    { text: "Elevated (normal <20-25) - collect smaller volume carefully, consider IIH or pathological cause", correct: true },
                    { text: "Remove the needle immediately - too dangerous", correct: false },
                    { text: "This is falsely elevated from positioning", correct: false }
                ],
                explanation: "Opening pressure >25 cm H2O is elevated. Ensure accurate measurement (legs extended, not Valsalva). Elevated pressure may indicate idiopathic intracranial hypertension, meningitis, or mass effect. Collect only necessary volume. If very elevated with papilledema/mass symptoms, limit drainage."
            },
            {
                prompt: "The CSF is bloody. How do you differentiate traumatic tap from true hemorrhage?",
                options: [
                    { text: "Send tube 1 and tube 4 for cell count - traumatic tap clears, true hemorrhage doesn't", correct: true },
                    { text: "Bloody CSF always means subarachnoid hemorrhage", correct: false },
                    { text: "Traumatic tap has clots, true hemorrhage doesn't", correct: false },
                    { text: "There's no way to tell - assume the worst", correct: false }
                ],
                explanation: "Compare tube 1 to tube 4. Traumatic tap: RBC count decreases from tube 1 to 4 (clearing). True SAH: RBCs remain constant. Also look for xanthochromia (yellow supernatant from hemoglobin breakdown) - present in SAH >12 hours, absent in traumatic tap."
            }
        ]
    },
    {
        id: 'arterial-line',
        name: 'Arterial Line Placement',
        description: 'Radial artery catheterization for continuous BP monitoring',
        difficulty: 'intermediate',
        category: 'Critical Care',
        requiredSupplies: [
            { id: 'sterile-gloves', name: 'Sterile gloves', icon: '🧤', category: 'Sterile' },
            { id: 'chlorhexidine', name: 'Chlorhexidine prep', icon: '🧴', category: 'Sterile' },
            { id: 'sterile-drape', name: 'Sterile drape', icon: '📄', category: 'Sterile' },
            { id: 'lidocaine', name: '1% Lidocaine', icon: '💉', category: 'Anesthesia' },
            { id: 'arterial-catheter', name: '20g arterial catheter', icon: '📌', category: 'Equipment' },
            { id: 'guidewire', name: 'Short guidewire (if using Seldinger)', icon: '〰️', category: 'Equipment' },
            { id: 'arm-board', name: 'Arm board', icon: '📋', category: 'Equipment' },
            { id: 'tape', name: 'Tape', icon: '🩹', category: 'Supplies' },
            { id: 'gauze', name: 'Gauze', icon: '🩹', category: 'Supplies' },
            { id: 'transducer', name: 'Pressure transducer system', icon: '📊', category: 'Equipment' },
            { id: 'saline-flush', name: 'Heparinized saline flush', icon: '💉', category: 'Supplies' },
            { id: 'tegaderm', name: 'Transparent dressing', icon: '🩹', category: 'Supplies' }
        ],
        distractorSupplies: [
            { id: 'suture', name: 'Suture', icon: '🧵', category: 'Usually not needed for radial' },
            { id: 'dilator', name: 'Dilator', icon: '🔧', category: 'Not for radial art line' }
        ],
        keySteps: [
            'Verify indication and perform Allen test',
            'Position wrist in slight extension over arm board',
            'Palpate radial artery course',
            'Sterile prep and drape',
            'Anesthetize skin (small wheal)',
            'Palpate artery with non-dominant hand',
            'Insert catheter at 30-45° angle, bevel up',
            'Advance until pulsatile flash',
            'Lower angle to 10°',
            'Advance catheter (direct) or wire then catheter (Seldinger)',
            'Remove needle/wire, connect to transducer',
            'Confirm arterial waveform',
            'Secure with suture or device',
            'Apply sterile dressing',
            'Zero and level transducer at phlebostatic axis',
            'Document Allen test result, site, and waveform'
        ],
        allenTest: 'Compress both radial and ulnar arteries while patient makes fist. Have patient open hand (pallor). Release ulnar artery - palm should pink up within 5-7 seconds (positive Allen = adequate collateral flow, safe to proceed with radial).',
        whatIfScenarios: [
            {
                prompt: "You get flash but lose it when you try to advance the catheter. What happened?",
                options: [
                    { text: "The artery went into spasm - wait and try again", correct: false },
                    { text: "You may have gone through the back wall - withdraw slowly watching for second flash", correct: true },
                    { text: "The catheter is defective", correct: false },
                    { text: "The patient's blood pressure is too low", correct: false }
                ],
                explanation: "Losing flash after initial pulsatile flow often means you've transfixed (gone through) the artery. Slowly withdraw the entire unit while watching for a second flash. When you see it, hold position, drop angle further, and try threading again or use wire."
            },
            {
                prompt: "The Allen test shows no return of color to the palm after 15 seconds. What do you do?",
                options: [
                    { text: "Proceed anyway - the test isn't reliable", correct: false },
                    { text: "Do not use this radial artery - inadequate collateral flow; try other wrist or different site", correct: true },
                    { text: "Wait longer - it will eventually pink up", correct: false },
                    { text: "Use a smaller catheter to reduce risk", correct: false }
                ],
                explanation: "A negative Allen test (>10-15 sec or no reperfusion) indicates inadequate ulnar collateral flow. If radial artery is occluded by catheter, hand could become ischemic. Use the other radial (if positive Allen) or consider femoral/brachial artery instead."
            }
        ]
    },
    {
        id: 'central-line-ij',
        name: 'Central Venous Catheter (Internal Jugular)',
        description: 'IJ central line placement with ultrasound guidance',
        difficulty: 'intermediate',
        category: 'Critical Care',
        requiredSupplies: [
            { id: 'sterile-gown', name: 'Sterile gown', icon: '🥼', category: 'Sterile' },
            { id: 'sterile-gloves', name: 'Sterile gloves', icon: '🧤', category: 'Sterile' },
            { id: 'cap', name: 'Surgical cap', icon: '🎓', category: 'PPE' },
            { id: 'mask', name: 'Surgical mask', icon: '😷', category: 'PPE' },
            { id: 'chlorhexidine', name: 'Chlorhexidine prep', icon: '🧴', category: 'Sterile' },
            { id: 'full-drape', name: 'Full body sterile drape', icon: '📄', category: 'Sterile' },
            { id: 'us-cover', name: 'Sterile ultrasound probe cover', icon: '📷', category: 'Equipment' },
            { id: 'us-gel', name: 'Sterile ultrasound gel', icon: '🧴', category: 'Equipment' },
            { id: 'lidocaine', name: '1% Lidocaine', icon: '💉', category: 'Anesthesia' },
            { id: 'introducer', name: 'Introducer needle', icon: '📌', category: 'Kit' },
            { id: 'guidewire', name: 'Guidewire', icon: '〰️', category: 'Kit' },
            { id: 'dilator', name: 'Dilator', icon: '🔧', category: 'Kit' },
            { id: 'catheter', name: 'Triple lumen catheter', icon: '🔌', category: 'Kit' },
            { id: 'scalpel', name: 'Scalpel (#11)', icon: '🔪', category: 'Kit' },
            { id: 'saline-flush', name: 'Saline flushes (3)', icon: '💉', category: 'Supplies' },
            { id: 'suture', name: 'Silk suture', icon: '🧵', category: 'Supplies' },
            { id: 'tegaderm', name: 'Transparent dressing', icon: '🩹', category: 'Supplies' },
            { id: 'caps', name: 'Catheter caps', icon: '🔘', category: 'Supplies' }
        ],
        distractorSupplies: [
            { id: 'picc', name: 'PICC line', icon: '🔌', category: 'Different procedure' },
            { id: 'betadine', name: 'Betadine', icon: '🧴', category: 'Chlorhex preferred for CVC' }
        ],
        keySteps: [
            'Verify indication and consent',
            'Gather all equipment before starting',
            'Position patient in Trendelenburg',
            'Pre-scan with ultrasound to identify IJ vein and carotid artery',
            'Full sterile prep (cap, mask, gown, gloves)',
            'Large sterile drape covering entire field',
            'Prep skin widely with chlorhexidine',
            'Cover ultrasound probe with sterile sheath',
            'Anesthetize skin and track',
            'Visualize vein with ultrasound',
            'Insert needle under direct ultrasound visualization',
            'Confirm venous blood (dark, non-pulsatile)',
            'Advance guidewire through needle - WATCH FOR ARRHYTHMIA',
            'Remove needle, keeping wire secure',
            'Make small nick with scalpel at wire site',
            'Advance dilator over wire',
            'Remove dilator, advance catheter over wire',
            'Remove wire - NEVER LET GO OF WIRE',
            'Aspirate and flush all ports',
            'Suture catheter in place',
            'Apply sterile dressing',
            'Order CXR to confirm position and rule out pneumothorax'
        ],
        whatIfScenarios: [
            {
                prompt: "You aspirate bright red pulsatile blood. What happened and what do you do?",
                options: [
                    { text: "It's just the angle - proceed with wire", correct: false },
                    { text: "Arterial puncture - remove needle, hold firm pressure for 10-15 minutes, do NOT proceed", correct: true },
                    { text: "The vein is just very well oxygenated", correct: false },
                    { text: "Flush it and see if it clears", correct: false }
                ],
                explanation: "Bright red pulsatile blood = arterial puncture (carotid). Remove needle immediately, apply firm pressure for 10-15 minutes (longer if coagulopathic). Do NOT place wire or dilator into artery. Reassess with ultrasound before attempting again."
            },
            {
                prompt: "When you advance the guidewire, the cardiac monitor shows runs of PVCs. What's happening?",
                options: [
                    { text: "Patient is having a heart attack from the procedure", correct: false },
                    { text: "Wire is in the heart - withdraw wire until PVCs stop", correct: true },
                    { text: "Normal - the wire just needs to be advanced further", correct: false },
                    { text: "The monitor is malfunctioning", correct: false }
                ],
                explanation: "PVCs during wire insertion mean the wire is irritating the right atrium or ventricle - it's too deep. Withdraw wire until arrhythmia stops. The wire should be inserted just far enough to maintain position (~20cm for IJ), not into the heart."
            },
            {
                prompt: "Post-procedure CXR shows the line tip in the right atrium. What do you do?",
                options: [
                    { text: "This is acceptable positioning", correct: false },
                    { text: "Pull back the catheter 2-3cm and resecure; tip should be at cavoatrial junction or SVC", correct: true },
                    { text: "Leave it - pulling back could dislodge the line", correct: false },
                    { text: "The CXR must be wrong", correct: false }
                ],
                explanation: "The catheter tip should be at the cavoatrial junction or low SVC, NOT in the right atrium (risk of arrhythmia, perforation). Pull back to appropriate position under sterile technique and resecure. Recheck with CXR if needed."
            }
        ]
    },
    {
        id: 'paracentesis',
        name: 'Abdominal Paracentesis',
        description: 'Diagnostic and therapeutic ascitic fluid removal',
        difficulty: 'intermediate',
        category: 'Diagnostic/Therapeutic',
        requiredSupplies: [
            { id: 'sterile-gloves', name: 'Sterile gloves', icon: '🧤', category: 'Sterile' },
            { id: 'chlorhexidine', name: 'Chlorhexidine prep', icon: '🧴', category: 'Sterile' },
            { id: 'sterile-drape', name: 'Sterile drape', icon: '📄', category: 'Sterile' },
            { id: 'lidocaine', name: '1% Lidocaine', icon: '💉', category: 'Anesthesia' },
            { id: 'syringe-10ml', name: '10mL syringe', icon: '💉', category: 'Supplies' },
            { id: 'needle-25g', name: '25g needle (for lidocaine)', icon: '📌', category: 'Supplies' },
            { id: 'para-needle', name: 'Paracentesis needle/catheter (15-18g)', icon: '📌', category: 'Kit' },
            { id: 'vacuum-bottles', name: 'Vacuum bottles (multiple)', icon: '🧪', category: 'Kit' },
            { id: 'specimen-tubes', name: 'Specimen tubes', icon: '🧪', category: 'Supplies' },
            { id: 'bandage', name: 'Bandage/dressing', icon: '🩹', category: 'Supplies' },
            { id: 'albumin', name: 'Albumin 25% (if >5L planned)', icon: '💊', category: 'Medication' }
        ],
        distractorSupplies: [
            { id: 'chest-tube', name: 'Chest tube', icon: '🔧', category: 'Wrong procedure' },
            { id: 'manometer', name: 'Manometer', icon: '📏', category: 'Not needed for para' }
        ],
        keySteps: [
            'Verify patient identity and indication',
            'Review coagulation status (usually safe without correction in cirrhosis)',
            'Confirm bladder is empty',
            'Position patient supine, slightly lateral to side of puncture',
            'Identify insertion site: LLQ (preferred) or midline below umbilicus',
            'Use ultrasound to confirm fluid pocket and mark site',
            'Avoid surgical scars, visible vessels, inferior epigastric artery',
            'Sterile prep and drape',
            'Anesthetize skin and deeper tissues in Z-track pattern',
            'Insert paracentesis needle/catheter with Z-track technique',
            'Advance until fluid returns',
            'Collect specimens first (cell count, albumin, protein, culture, +/- amylase, cytology)',
            'Connect to vacuum bottles for therapeutic drainage',
            'Monitor vital signs during drainage',
            'Remove catheter, apply dressing',
            'Give albumin if >5L removed (6-8g per liter over 5L)',
            'Document volume removed and fluid appearance'
        ],
        whatIfScenarios: [
            {
                prompt: "You drain 6L of ascitic fluid. What albumin replacement is indicated?",
                options: [
                    { text: "None - albumin isn't necessary", correct: false },
                    { text: "6-8g per liter over 5L removed = 6-8g for the 1L over 5L = one 25g vial", correct: false },
                    { text: "6-8g per liter of total volume removed = 36-48g = approximately 8-10 vials of 25% (50mL)", correct: true },
                    { text: "Give albumin only if hypotensive", correct: false }
                ],
                explanation: "For large volume paracentesis (>5L), give albumin 6-8g per liter of TOTAL volume removed to prevent post-paracentesis circulatory dysfunction. For 6L: 6L x 6-8g = 36-48g. 25% albumin = 25g per 100mL. So approximately 150-200mL (two 100mL vials or four 50mL vials)."
            },
            {
                prompt: "Your patient has an INR of 2.4 and platelets of 65,000 due to cirrhosis. Safe to proceed?",
                options: [
                    { text: "No - correct coagulopathy first with FFP and platelets", correct: false },
                    { text: "Yes - studies show paracentesis is safe in cirrhotic patients without correction", correct: true },
                    { text: "Only with IR guidance", correct: false },
                    { text: "Only if diagnostic (small volume)", correct: false }
                ],
                explanation: "AASLD guidelines and multiple studies show paracentesis is safe in cirrhotic patients without prophylactic correction of coagulopathy. The INR and platelet thresholds used for other procedures don't apply here. Use ultrasound guidance and avoid vessels."
            }
        ]
    },
    {
        id: 'thoracentesis',
        name: 'Thoracentesis',
        description: 'Diagnostic and therapeutic pleural fluid drainage',
        difficulty: 'intermediate',
        category: 'Diagnostic/Therapeutic',
        requiredSupplies: [
            { id: 'sterile-gloves', name: 'Sterile gloves', icon: '🧤', category: 'Sterile' },
            { id: 'gown', name: 'Sterile gown', icon: '🥼', category: 'PPE' },
            { id: 'chlorhexidine', name: 'Chlorhexidine prep', icon: '🧴', category: 'Sterile' },
            { id: 'sterile-drape', name: 'Sterile drape', icon: '📄', category: 'Sterile' },
            { id: 'lidocaine', name: '1% Lidocaine', icon: '💉', category: 'Anesthesia' },
            { id: 'syringe-10ml', name: '10mL syringe', icon: '💉', category: 'Supplies' },
            { id: 'syringe-60ml', name: '60mL syringe', icon: '💉', category: 'Supplies' },
            { id: 'needle-25g', name: '25g needle', icon: '📌', category: 'Supplies' },
            { id: 'thoracentesis-kit', name: 'Thoracentesis catheter kit', icon: '📦', category: 'Kit' },
            { id: 'three-way', name: 'Three-way stopcock', icon: '🔧', category: 'Kit' },
            { id: 'vacuum-bottle', name: 'Vacuum bottle', icon: '🧪', category: 'Kit' },
            { id: 'specimen-tubes', name: 'Specimen tubes', icon: '🧪', category: 'Supplies' },
            { id: 'bandage', name: 'Bandage', icon: '🩹', category: 'Supplies' }
        ],
        distractorSupplies: [
            { id: 'chest-tube', name: 'Chest tube', icon: '🔧', category: 'Different procedure' },
            { id: 'albumin', name: 'Albumin', icon: '💊', category: 'Not indicated (para not thora)' }
        ],
        keySteps: [
            'Verify patient identity and indication',
            'Review imaging to confirm effusion location and size',
            'Check coagulation status',
            'Position patient sitting upright, leaning forward over table/pillow',
            'Use ultrasound to identify fluid pocket and mark entry site',
            'Target 1-2 interspaces below top of effusion, above diaphragm',
            'Sterile prep and drape',
            'Anesthetize skin, subcutaneous tissue, periosteum of rib, parietal pleura',
            'Insert needle/catheter over superior aspect of rib (avoid NV bundle)',
            'Advance with constant negative pressure until fluid returns',
            'Thread catheter, remove needle',
            'Collect diagnostic specimens (pH, glucose, protein, LDH, cell count, gram stain/culture)',
            'Connect to drainage for therapeutic removal',
            'Limit to 1-1.5L to prevent re-expansion pulmonary edema',
            'Remove catheter, apply bandage',
            'Post-procedure CXR only if symptomatic or air aspirated'
        ],
        lightsCriteria: 'Exudate if ANY of: pleural protein/serum protein >0.5, pleural LDH/serum LDH >0.6, pleural LDH >2/3 upper limit of normal serum LDH',
        whatIfScenarios: [
            {
                prompt: "After removing 1.2L, the patient develops cough and chest discomfort. What's happening?",
                options: [
                    { text: "Anxiety - reassure and continue", correct: false },
                    { text: "Possible re-expansion pulmonary edema - stop draining, monitor, provide supportive care", correct: true },
                    { text: "Pneumothorax - insert chest tube", correct: false },
                    { text: "Normal - the lung is just re-expanding", correct: false }
                ],
                explanation: "Cough and discomfort during thoracentesis suggests early re-expansion pulmonary edema (RPE). Stop draining immediately. RPE occurs when lung re-expands rapidly after prolonged collapse. Usually self-limited but can be severe. This is why we limit single-session drainage to 1-1.5L."
            },
            {
                prompt: "Pleural fluid pH is 7.10, glucose is 35, LDH is 1200. What does this suggest?",
                options: [
                    { text: "Simple parapneumonic effusion - antibiotics only", correct: false },
                    { text: "Complicated parapneumonic effusion or empyema - likely needs chest tube drainage", correct: true },
                    { text: "Malignant effusion - needs cytology", correct: false },
                    { text: "Transudative effusion - treat underlying cause", correct: false }
                ],
                explanation: "Low pH (<7.20), low glucose (<60), and elevated LDH indicate complicated parapneumonic effusion or empyema. These effusions won't resolve with antibiotics alone and typically require chest tube drainage. If frankly purulent, it's empyema and definitely needs drainage."
            }
        ]
    },

    // ==================== ADVANCED PROCEDURES ====================
    {
        id: 'chest-tube',
        name: 'Chest Tube Insertion (Tube Thoracostomy)',
        description: 'Large-bore chest tube for pneumothorax or hemothorax',
        difficulty: 'advanced',
        category: 'Emergency/Critical Care',
        requiredSupplies: [
            { id: 'sterile-gown', name: 'Sterile gown', icon: '🥼', category: 'Sterile' },
            { id: 'sterile-gloves', name: 'Sterile gloves', icon: '🧤', category: 'Sterile' },
            { id: 'cap', name: 'Surgical cap', icon: '🎓', category: 'PPE' },
            { id: 'mask-shield', name: 'Mask with face shield', icon: '😷', category: 'PPE' },
            { id: 'chlorhexidine', name: 'Chlorhexidine prep', icon: '🧴', category: 'Sterile' },
            { id: 'sterile-drapes', name: 'Sterile drapes', icon: '📄', category: 'Sterile' },
            { id: 'lidocaine-epi', name: 'Lidocaine with epinephrine', icon: '💉', category: 'Anesthesia' },
            { id: 'scalpel', name: 'Scalpel (#10 blade)', icon: '🔪', category: 'Equipment' },
            { id: 'kelly-clamp', name: 'Kelly clamp', icon: '🔧', category: 'Equipment' },
            { id: 'chest-tube', name: 'Chest tube (28-36 Fr)', icon: '🔌', category: 'Equipment' },
            { id: 'suture-silk', name: 'Silk suture (0 or 2-0)', icon: '🧵', category: 'Supplies' },
            { id: 'chest-seal', name: 'Chest drainage system', icon: '📦', category: 'Equipment' },
            { id: 'petrolatum-gauze', name: 'Petrolatum gauze', icon: '🩹', category: 'Supplies' },
            { id: 'gauze-pads', name: 'Gauze pads', icon: '🩹', category: 'Supplies' },
            { id: 'tape', name: 'Silk tape', icon: '🩹', category: 'Supplies' }
        ],
        distractorSupplies: [
            { id: 'pigtail', name: 'Pigtail catheter', icon: '🔌', category: 'Different technique' },
            { id: 'trocar', name: 'Trocar', icon: '📌', category: 'Do NOT use - dangerous' }
        ],
        keySteps: [
            'Confirm indication (pneumothorax, hemothorax, empyema)',
            'Review imaging to confirm side and extent',
            'Position patient: arm above head, lateral decubitus or supine with roll',
            'Identify safe triangle: lateral border of pec major, anterior border of latissimus, line of 5th intercostal space',
            'Mark insertion site (typically 4th-5th ICS, mid-axillary line)',
            'Full sterile prep (gown, gloves, wide prep)',
            'Generous local anesthesia: skin, subcutaneous tissue, periosteum, intercostal muscle, parietal pleura',
            'Make 3-4cm incision along rib',
            'Blunt dissect with Kelly clamp over superior edge of rib',
            'Puncture parietal pleura with clamp (expect rush of air or fluid)',
            'Perform finger sweep to confirm pleural space and check for adhesions',
            'Guide chest tube into pleural space (posteriorly/superiorly for pneumothorax)',
            'Advance until all holes are inside chest',
            'Connect to drainage system',
            'Secure with suture (horizontal mattress + silk ties)',
            'Apply occlusive dressing',
            'Obtain CXR to confirm position',
            'Document tube size, position, initial output'
        ],
        whatIfScenarios: [
            {
                prompt: "During blunt dissection, you cannot seem to enter the pleural space. What's the concern?",
                options: [
                    { text: "You need a larger incision", correct: false },
                    { text: "There may be adhesions from prior surgery/disease - do NOT force; use finger to sweep and may need surgical consultation", correct: true },
                    { text: "Use a trocar to push through", correct: false },
                    { text: "You're not pushing hard enough", correct: false }
                ],
                explanation: "Difficulty entering pleural space may indicate pleural adhesions (from prior surgery, infection, or malignancy). NEVER use a trocar or force entry - risk of lung laceration. Use finger dissection to find free space. If unable, may need surgical thoracotomy or VATS."
            },
            {
                prompt: "Post-insertion, there's no respiratory variation in the water seal chamber and minimal drainage. What should you check?",
                options: [
                    { text: "The patient's pneumothorax has resolved - good job", correct: false },
                    { text: "Check for kinks, clamps, obstruction; tube may be malpositioned or clogged", correct: true },
                    { text: "Turn up the suction", correct: false },
                    { text: "The drainage system is defective", correct: false }
                ],
                explanation: "Lack of respiratory variation suggests the tube isn't communicating with pleural space properly. Check entire system for kinks or clamps left on. Tube may be malpositioned (subcutaneous, fissure, against chest wall) or obstructed with clot. CXR can help assess position."
            },
            {
                prompt: "There's 500mL of blood in the collection chamber in the first hour. What's your assessment?",
                options: [
                    { text: "This is expected initial drainage", correct: false },
                    { text: "Massive hemothorax - this meets criteria for thoracotomy consideration (>1500mL initial or >200mL/hr for 2-4 hours)", correct: true },
                    { text: "Clamp the tube to slow the bleeding", correct: false },
                    { text: "Remove the tube - it's making things worse", correct: false }
                ],
                explanation: "Indications for thoracotomy in hemothorax: >1500mL initial drainage OR >200mL/hr for 2-4 hours. 500mL/first hour approaches this threshold - close monitoring, surgical consult, prepare for OR. NEVER clamp a chest tube for hemothorax - blood will accumulate in chest."
            }
        ]
    },
    {
        id: 'intubation',
        name: 'Endotracheal Intubation',
        description: 'Direct and video laryngoscopy for emergency airway management',
        difficulty: 'advanced',
        category: 'Emergency/Critical Care',
        requiredSupplies: [
            { id: 'gloves', name: 'Gloves', icon: '🧤', category: 'PPE' },
            { id: 'gown', name: 'Gown', icon: '🥼', category: 'PPE' },
            { id: 'n95-shield', name: 'N95 + Face shield', icon: '😷', category: 'PPE (aerosol-generating)' },
            { id: 'laryngoscope', name: 'Laryngoscope handle + blades (Mac 3, Mac 4, Miller 2)', icon: '🔦', category: 'Equipment' },
            { id: 'video-laryngoscope', name: 'Video laryngoscope', icon: '📹', category: 'Equipment' },
            { id: 'ett-multiple', name: 'ETT multiple sizes (7.0, 7.5, 8.0)', icon: '🔌', category: 'Airway' },
            { id: 'stylet', name: 'Stylet', icon: '〰️', category: 'Airway' },
            { id: 'bougie', name: 'Bougie/intubating stylet', icon: '〰️', category: 'Airway' },
            { id: 'bvm', name: 'Bag-valve-mask', icon: '🎈', category: 'Equipment' },
            { id: 'oral-airway', name: 'Oral airway (various sizes)', icon: '🦷', category: 'Airway' },
            { id: 'suction', name: 'Suction (Yankauer)', icon: '💨', category: 'Equipment' },
            { id: 'etco2', name: 'End-tidal CO2 detector', icon: '📊', category: 'Equipment' },
            { id: 'syringe-10ml', name: '10mL syringe (cuff)', icon: '💉', category: 'Supplies' },
            { id: 'tape', name: 'Tape or ETT holder', icon: '🩹', category: 'Supplies' },
            { id: 'rsi-meds', name: 'RSI medications', icon: '💊', category: 'Medications' }
        ],
        distractorSupplies: [
            { id: 'lma', name: 'LMA', icon: '🔌', category: 'Rescue airway (not primary)' }
        ],
        keySteps: [
            'Evaluate airway: LEMON assessment (Look, Evaluate, Mallampati, Obstruction, Neck mobility)',
            'Preoxygenate with high-flow O2 or BVM for 3-5 minutes if time permits',
            'Position: sniffing position (neck flexed, head extended)',
            'Have backup airway equipment ready (bougie, LMA, cric kit)',
            'Administer induction agent and paralytic (RSI if indicated)',
            'Wait for paralysis (fasciculations stop)',
            'Open mouth with right hand, insert laryngoscope with left',
            'Advance blade to vallecula (Mac) or lift epiglottis directly (Miller)',
            'Lift blade up and away (toward ceiling-wall junction), do NOT lever on teeth',
            'Visualize cords',
            'Pass ETT through cords, observe it pass between arytenoids',
            'Stop when cuff passes cords (depth ~21-23cm at teeth for adults)',
            'Remove stylet, inflate cuff',
            'Confirm placement: ETCO2 waveform, bilateral breath sounds, absence of epigastric sounds',
            'Secure tube',
            'Order CXR for position',
            'Document visualization grade, tube size, depth, confirmation method'
        ],
        mallampatiClassification: [
            'Class I: Soft palate, uvula, fauces, pillars visible - Easy intubation',
            'Class II: Soft palate, uvula, fauces visible - Easy intubation',
            'Class III: Soft palate, base of uvula visible - Potentially difficult',
            'Class IV: Hard palate only visible - Difficult intubation predicted'
        ],
        whatIfScenarios: [
            {
                prompt: "You can see the epiglottis but not the cords (Cormack-Lehane Grade III view). What do you try?",
                options: [
                    { text: "Abort and bag-mask ventilate", correct: false },
                    { text: "Use bougie - blindly pass under epiglottis, feel for tracheal clicks, railroad ETT over it", correct: true },
                    { text: "Push harder on the blade to see better", correct: false },
                    { text: "Remove blade and try larger size", correct: false }
                ],
                explanation: "The bougie is your rescue device for difficult views. Pass the bougie under the epiglottis with upward angulation. You should feel 'clicks' as it bumps tracheal rings - this confirms tracheal (not esophageal) placement. Then railroad the ETT over the bougie."
            },
            {
                prompt: "After intubation, you have ETCO2 waveform but breath sounds are only on the right. What happened?",
                options: [
                    { text: "Right mainstem intubation - withdraw tube 2-3cm and reassess", correct: true },
                    { text: "The left lung has collapsed - order CXR", correct: false },
                    { text: "ETT is in the esophagus - remove immediately", correct: false },
                    { text: "Normal - recheck later", correct: false }
                ],
                explanation: "ETCO2 confirms tracheal placement. Right-sided breath sounds only = right mainstem bronchus intubation (the right bronchus is more vertical, tubes go there if too deep). Deflate cuff, withdraw 2-3cm, re-inflate, reconfirm bilateral breath sounds. Typical depth is 21-23cm at teeth."
            },
            {
                prompt: "You cannot intubate after 3 attempts and cannot ventilate with BVM. What's your next step?",
                options: [
                    { text: "Keep trying different laryngoscope blades", correct: false },
                    { text: "CICV - place LMA as bridge, if that fails, perform cricothyrotomy", correct: true },
                    { text: "Call anesthesia and wait", correct: false },
                    { text: "Perform tracheostomy", correct: false }
                ],
                explanation: "Can't intubate, can't ventilate (CICV) is an emergency. Follow the difficult airway algorithm: try supraglottic airway (LMA) first as it's faster and easier. If LMA doesn't ventilate, proceed to surgical airway (cricothyrotomy). Tracheostomy is too slow for emergency CICV."
            }
        ]
    },
    {
        id: 'cricothyrotomy',
        name: 'Cricothyrotomy',
        description: 'Emergency surgical airway for "cannot intubate, cannot ventilate"',
        difficulty: 'advanced',
        category: 'Emergency',
        requiredSupplies: [
            { id: 'gloves', name: 'Gloves', icon: '🧤', category: 'PPE' },
            { id: 'scalpel', name: 'Scalpel (#10 or #20 blade)', icon: '🔪', category: 'Equipment' },
            { id: 'bougie', name: 'Bougie', icon: '〰️', category: 'Equipment' },
            { id: 'cric-tube', name: 'Cuffed tracheostomy tube (6.0) or ETT (6.0)', icon: '🔌', category: 'Airway' },
            { id: 'tracheal-hook', name: 'Tracheal hook (optional)', icon: '🪝', category: 'Equipment' },
            { id: 'syringe', name: 'Syringe (for cuff)', icon: '💉', category: 'Supplies' },
            { id: 'bvm', name: 'Bag-valve-mask', icon: '🎈', category: 'Equipment' },
            { id: 'suction', name: 'Suction', icon: '💨', category: 'Equipment' },
            { id: 'tape', name: 'Tracheostomy ties/tape', icon: '🩹', category: 'Supplies' }
        ],
        distractorSupplies: [
            { id: 'laryngoscope', name: 'Laryngoscope', icon: '🔦', category: 'Not needed for cric' },
            { id: 'video-scope', name: 'Video laryngoscope', icon: '📹', category: 'Not needed' }
        ],
        keySteps: [
            'Confirm CICV emergency - this is last resort',
            'Position: neck extended (roll under shoulders if possible)',
            'Identify landmarks: thyroid cartilage, cricoid cartilage, cricothyroid membrane between them',
            'Stabilize larynx with non-dominant hand',
            'Make vertical skin incision over membrane (reduces vessel injury)',
            'Blunt dissect to membrane',
            'Make horizontal stab incision through membrane',
            'Insert finger or tracheal hook to maintain opening',
            'Insert bougie through incision into trachea',
            'Railroad cuffed tube (trach tube or 6.0 ETT) over bougie',
            'Remove bougie, inflate cuff',
            'Confirm placement with ETCO2, ventilate',
            'Secure tube'
        ],
        whatIfScenarios: [
            {
                prompt: "There's significant bleeding obscuring your view. What do you do?",
                options: [
                    { text: "Stop and apply pressure - bleeding control is priority", correct: false },
                    { text: "Continue - getting airway is life-saving; you can address bleeding after tube is in", correct: true },
                    { text: "Switch to needle cricothyrotomy instead", correct: false },
                    { text: "Abort and try intubation one more time", correct: false }
                ],
                explanation: "In CICV emergency, the patient will die without an airway. Bleeding, while concerning, is secondary. Use suction, continue with procedure, get the tube in. Once airway is secured and patient is ventilating, you can address bleeding with pressure and possibly surgical consultation."
            },
            {
                prompt: "You cannot palpate landmarks due to obesity/edema. What's your approach?",
                options: [
                    { text: "Make a longer midline vertical incision and dissect until you find the membrane", correct: true },
                    { text: "Abandon and try bag-mask ventilation again", correct: false },
                    { text: "Use a longer needle for needle cric", correct: false },
                    { text: "This patient cannot have a cricothyrotomy", correct: false }
                ],
                explanation: "In the obese or edematous neck, landmarks may not be palpable externally. Make a generous midline vertical incision to see and feel structures as you dissect. You will find the airway - stay midline and go through tissue planes until you reach the membrane."
            }
        ]
    }
];

// Export for use in ProcedureDx
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { COMPLETE_PROCEDURES };
}
