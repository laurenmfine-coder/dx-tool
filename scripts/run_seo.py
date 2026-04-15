#!/usr/bin/env python3
import os, re, json, time, requests
from pathlib import Path

# === PASTE YOUR KEY BETWEEN THE QUOTES BELOW ===
API_KEY = "PASTE_KEY_HERE"
# ================================================

TOPICS_DIR = Path(__file__).parent.parent / "topics"
API_URL = "https://api.anthropic.com/v1/messages"

SYSTEM_PROMPT = """You are a medical education content writer. Return ONLY a JSON object:
{"summary":"2-3 sentences","pathophysiology":"2-3 sentences","clinical_reasoning":"2-3 sentences"}
No markdown, no preamble, just JSON."""

def get_title(p):
    txt = p.read_text(encoding='utf-8', errors='ignore')
    m = re.search(r'<h1[^>]*>(.*?)</h1>', txt, re.DOTALL)
    return re.sub(r'<[^>]+>','',m.group(1)).strip() if m else p.stem.replace('-',' ').title()

def needs_seo(p):
    return 'rdx-seo-content' not in p.read_text(encoding='utf-8', errors='ignore')

def generate(topic):
    r = requests.post(API_URL,
        headers={"Content-Type":"application/json","x-api-key":API_KEY,"anthropic-version":"2023-06-01"},
        json={"model":"claude-sonnet-4-20250514","max_tokens":600,"system":SYSTEM_PROMPT,
              "messages":[{"role":"user","content":f"SEO content for: {topic}"}]})
    if r.status_code != 200:
        print(f"  ERROR {r.status_code}: {r.text[:100]}")
        return None
    txt = r.json()['content'][0]['text'].strip()
    txt = re.sub(r'^```json\s*','',txt); txt = re.sub(r'\s*```$','',txt)
    return json.loads(txt)

def inject(p, title, data):
    block = f'''
<section class="rdx-seo-content" style="max-width:720px;margin:0 auto;padding:0 24px 32px">
  <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:28px 32px">
    <h2 style="font-family:serif;font-size:20px;color:#1e293b;font-weight:400;margin-bottom:16px">About {title}</h2>
    <p style="font-size:15px;color:#334155;line-height:1.7;margin-bottom:14px">{data["summary"]}</p>
    <h3 style="font-size:14px;font-weight:600;color:#475569;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px">Pathophysiology</h3>
    <p style="font-size:15px;color:#334155;line-height:1.7;margin-bottom:14px">{data["pathophysiology"]}</p>
    <h3 style="font-size:14px;font-weight:600;color:#475569;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px">Clinical Reasoning</h3>
    <p style="font-size:15px;color:#334155;line-height:1.7;margin-bottom:0">{data["clinical_reasoning"]}</p>
  </div>
</section>'''
    content = p.read_text(encoding='utf-8', errors='ignore')
    for marker in ['<div class="rdx-references"', '</body>']:
        if marker in content:
            content = content.replace(marker, block+'\n'+marker, 1)
            p.write_text(content, encoding='utf-8')
            return True
    return False

files = [f for f in sorted(TOPICS_DIR.glob("*.html")) if needs_seo(f)]
print(f"Processing {len(files)} pages...\n")
done = errors = 0
for i, f in enumerate(files):
    title = get_title(f)
    print(f"[{i+1}/{len(files)}] {title}...", end=" ", flush=True)
    try:
        data = generate(title)
        if data and inject(f, title, data):
            done += 1; print("✓")
        else:
            errors += 1; print("SKIP")
        time.sleep(0.3)
    except Exception as e:
        errors += 1; print(f"ERR: {e}")
print(f"\nDone: {done} processed, {errors} errors")
