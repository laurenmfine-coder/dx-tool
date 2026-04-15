# ReasonDx Scripts

## generate_topic_seo.py
Generates SEO content blocks for all topic pages using the Anthropic API.
Injects static HTML summaries so Google can index real clinical content.

### Usage
```bash
export ANTHROPIC_API_KEY="sk-ant-..."
pip install requests
python3 scripts/generate_topic_seo.py
git add topics/
git commit -m "SEO: add content blocks to all topic pages"
git push
```

Processes ~289 remaining topic pages at ~0.3s each (~90 seconds total).
Already-processed pages are skipped automatically.
