# CaseForge + StudyDx + NotebookDx — Deployment Guide

## 1. Run Database Migration

Open Supabase Dashboard → SQL Editor → New Query, then paste and run:

```
supabase/migrations/002_caseforge_studydx_notebookdx.sql
```

This creates all new tables (custom_cases, mcq_questions, mcq_collections, mcq_attempts, mcq_shares, notebooks, notebook_resources, notebook_materials, notebook_chats), RLS policies, triggers, views, and the SM-2 spaced repetition function.

**Verify:** After running, check Tables in the dashboard — you should see 10 new tables.

## 2. Deploy Cloudflare Workers

### StudyDx Engine (MCQ Pipeline)
```bash
cd workers/
wrangler deploy --config wrangler-studydx.toml
wrangler secret put ANTHROPIC_API_KEY --config wrangler-studydx.toml
# Paste your Anthropic API key when prompted
```

### CaseForge Builder (Case Parsing)
```bash
wrangler deploy --config wrangler-caseforge.toml
wrangler secret put ANTHROPIC_API_KEY --config wrangler-caseforge.toml
# Paste your Anthropic API key when prompted
```

### Verify Workers
```bash
# Test StudyDx
curl -X POST https://studydx-engine.<your-subdomain>.workers.dev \
  -H "Content-Type: application/json" \
  -d '{"type":"generate","content":"Anaphylaxis is a severe, potentially life-threatening allergic reaction. IgE-mediated mast cell degranulation releases histamine, tryptase, and prostaglandins. Epinephrine is the first-line treatment. Biphasic reactions can occur 4-12 hours after initial resolution.","topic":"Anaphylaxis","count":1}'

# Test CaseForge
curl -X POST https://caseforge-builder.<your-subdomain>.workers.dev \
  -H "Content-Type: application/json" \
  -d '{"type":"suggest-references","diagnosis":"Alpha-gal syndrome","specialty":"allergy_immunology"}'
```

## 3. Update Site Configuration

After deploying workers, update the worker URLs in the platform files that will call them. The worker URLs follow the pattern:
- `https://studydx-engine.<your-subdomain>.workers.dev`
- `https://caseforge-builder.<your-subdomain>.workers.dev`

## Worker API Reference

### StudyDx Engine Endpoints

| Type | Description | Required Fields |
|------|-------------|----------------|
| `generate` | Generate MCQs from any text | `content` |
| `generate-from-case` | Generate from case teaching data | `teachingPoints` or `boardPearls` |
| `generate-from-notebook` | Generate from notebook resource | `resourceContent` |
| `audit-only` | Quality-check an existing MCQ | `stem`, `options`, `correct_index` |
| `tag-only` | Tag with ABAI/ACGME metadata | `stem` |

### CaseForge Builder Endpoints

| Type | Description | Required Fields |
|------|-------------|----------------|
| `parse` | Convert text to EMR_DATA schema | `text` |
| `enhance` | Fill missing sections of partial case | `caseData` |
| `validate` | Check clinical accuracy | `caseData` |
| `generate-teaching` | Create teaching points/pearls | `caseData` or `diagnosis` |
| `suggest-references` | Find open-access references | `diagnosis` |
