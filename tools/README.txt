INSTRUCTIONS
============

1. Copy all .py files from this folder into:
   C:\Users\laure\Documents\GitHub\dx-tool\tools\

2. Set your API key (in Command Prompt):
   set ANTHROPIC_API_KEY=sk-ant-...

3. Navigate to your repo root:
   cd C:\Users\laure\Documents\GitHub\dx-tool

4. Run the pilot (5 cases, on ONE line):
   python3 tools/generate_public_mcqs.py --cases anaphylaxis,asthma-exacerbation,peanut-allergy-anaphylaxis,cvid-presentation,penicillin-allergy-delabeling --mcqs-per-case 2

5. Full run when ready:
   python3 tools/generate_public_mcqs.py --mcqs-per-case 3

Output: rdx-public-mcq-library.js in your repo root
