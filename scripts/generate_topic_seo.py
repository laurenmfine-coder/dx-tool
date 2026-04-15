#!/usr/bin/env python3
"""
Generate SEO content blocks for ReasonDx topic pages.
Injects static HTML summaries so Google can index real content.
"""

import os
import re
import json
import time
import requests
from pathlib import Path

TOPICS_DIR = Path("/home/claude/dx-tool/topics")
API_URL = "https://api.anthropic.com/v1/messages"

SYSTEM_PROMPT = """You are a medical education content writer for ReasonDx, a clinical reasoning platform for health professions students. 

Write a concise, accurate SEO content block for a topic page. The content must be:
- Factually accurate and clinically sound
- Written for health professions students (medical, nursing, pharmacy, PT, etc.)
- Focused on clinical reasoning, pathophysiology, and diagnostic thinking
- 150-200 words of plain prose (no bullet points, no headers)
- Natural, educational tone

Return ONLY a JSON object with these fields:
{
  "summary": "2-3 sentence overview of the condition and its clinical significance",
  "pathophysiology": "2-3 sentences on the key mechanism/pathophysiology",
  "clinical_reasoning": "2-3 sentences on how clinicians think through diagnosis and key differentials",
  "keywords": ["5-8 SEO keyword phrases relevant to this topic"]
}

Return ONLY valid JSON, no markdown, no preamble."""

def get_topic_title(html_path):
    """Extract the H1 title from the topic page."""
    content = html_path.read_text()
    match = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
    if match:
        return re.sub(r'<[^>]+>', '', match.group(1)).strip()
    # Fall back to filename
    return html_path.stem.replace('-', ' ').title()

def already_has_seo_block(html_path):
    """Check if page already has our SEO block."""
    content = html_path.read_text()
    return 'rdx-seo-content' in content

def generate_content(topic_name):
    """Call Anthropic API to generate content for a topic."""
    response = requests.post(
        API_URL,
        headers={"Content-Type": "application/json"},
        json={
            "model": "claude-sonnet-4-20250514",
            "max_tokens": 1000,
            "system": SYSTEM_PROMPT,
            "messages": [
                {"role": "user", "content": f"Generate SEO content for the clinical topic: {topic_name}"}
            ]
        }
    )
    
    if response.status_code != 200:
        print(f"  API error {response.status_code}: {response.text[:200]}")
        return None
    
    data = response.json()
    text = data['content'][0]['text'].strip()
    
    # Strip markdown fences if present
    text = re.sub(r'^```json\s*', '', text)
    text = re.sub(r'\s*```$', '', text)
    
    return json.loads(text)

def build_seo_block(content_data, topic_name):
    """Build the HTML block to inject."""
    keywords_meta = ', '.join(content_data.get('keywords', []))
    
    return f'''
<section class="rdx-seo-content" style="max-width:720px;margin:0 auto 0;padding:0 24px 32px">
  <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:28px 32px">
    <h2 style="font-family:var(--rdx-font-serif,serif);font-size:20px;color:#1e293b;font-weight:400;margin-bottom:16px">About {topic_name}</h2>
    <p style="font-size:15px;color:#334155;line-height:1.7;margin-bottom:14px">{content_data['summary']}</p>
    <h3 style="font-size:14px;font-weight:600;color:#475569;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px">Pathophysiology</h3>
    <p style="font-size:15px;color:#334155;line-height:1.7;margin-bottom:14px">{content_data['pathophysiology']}</p>
    <h3 style="font-size:14px;font-weight:600;color:#475569;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px">Clinical Reasoning</h3>
    <p style="font-size:15px;color:#334155;line-height:1.7;margin-bottom:0">{content_data['clinical_reasoning']}</p>
  </div>
  <!-- SEO keywords: {keywords_meta} -->
</section>'''

def inject_into_page(html_path, seo_block):
    """Inject SEO block after the hero section."""
    content = html_path.read_text()
    
    # Insert after the hero section closing tag, before the nav script
    insert_after = '</section>\n<script src="../js/rdx-nav.js"></script>'
    replacement = f'</section>\n<script src="../js/rdx-nav.js"></script>\n{seo_block}'
    
    if insert_after in content:
        new_content = content.replace(insert_after, replacement, 1)
        html_path.write_text(new_content)
        return True
    
    # Fallback: insert before references div
    insert_before = '<div class="rdx-references"'
    if insert_before in content:
        new_content = content.replace(insert_before, f'{seo_block}\n{insert_before}', 1)
        html_path.write_text(new_content)
        return True
    
    return False

def main():
    topic_files = sorted(TOPICS_DIR.glob("*.html"))
    total = len(topic_files)
    processed = 0
    skipped = 0
    errors = 0
    
    print(f"Processing {total} topic pages...\n")
    
    for i, topic_path in enumerate(topic_files):
        if already_has_seo_block(topic_path):
            skipped += 1
            continue
        
        topic_name = get_topic_title(topic_path)
        print(f"[{i+1}/{total}] {topic_name}...", end=" ", flush=True)
        
        try:
            content_data = generate_content(topic_name)
            if not content_data:
                errors += 1
                print("SKIP (API error)")
                continue
            
            seo_block = build_seo_block(content_data, topic_name)
            success = inject_into_page(topic_path, seo_block)
            
            if success:
                processed += 1
                print("✓")
            else:
                errors += 1
                print("SKIP (inject failed)")
            
            # Rate limiting - be respectful of API
            time.sleep(0.3)
            
        except Exception as e:
            errors += 1
            print(f"ERROR: {e}")
            time.sleep(1)
    
    print(f"\n✅ Done! Processed: {processed}, Skipped (already done): {skipped}, Errors: {errors}")

if __name__ == "__main__":
    main()
