-- ============================================================
-- ReasonDx: RAG over Open-Access Clinical Guidelines
-- Run in Supabase SQL Editor
-- ============================================================

-- Step 1: Ensure vector extension is enabled (already required by case_embeddings)
CREATE EXTENSION IF NOT EXISTS vector;

-- Step 2: Create guidelines_embeddings table
CREATE TABLE IF NOT EXISTS guidelines_embeddings (
  id            bigserial PRIMARY KEY,
  source        text NOT NULL,           -- e.g. "AHA 2024 Heart Failure Guidelines"
  url           text,                    -- open-access URL
  license       text,                    -- CC-BY, CC-BY-NC, free-access, etc.
  specialty     text,                    -- e.g. "cardiology", "pulmonology"
  diagnosis_tags text[],                 -- e.g. ARRAY['heart failure','HFpEF','CHF']
  chunk_text    text NOT NULL,           -- the actual guideline content chunk
  chunk_index   int  DEFAULT 0,         -- position within source document
  embedding     vector(384),            -- BGE-small-en-v1.5 via rdx-embed worker
  created_at    timestamptz DEFAULT now()
);

-- Step 3: Index for fast vector search
CREATE INDEX IF NOT EXISTS guidelines_embeddings_embedding_idx
  ON guidelines_embeddings
  USING ivfflat (embedding vector_cosine_ops)
  WITH (lists = 50);

-- Step 4: Index for specialty + diagnosis filtering
CREATE INDEX IF NOT EXISTS guidelines_embeddings_specialty_idx
  ON guidelines_embeddings (specialty);

CREATE INDEX IF NOT EXISTS guidelines_embeddings_tags_idx
  ON guidelines_embeddings USING GIN (diagnosis_tags);

-- Step 5: match_guidelines() — cosine similarity search
-- Returns top N guideline chunks most relevant to a query embedding.
-- Optional filter by specialty or diagnosis_tags.
CREATE OR REPLACE FUNCTION match_guidelines(
  query_embedding  vector(384),
  match_count      int     DEFAULT 3,
  filter_specialty text    DEFAULT NULL,
  min_similarity   float   DEFAULT 0.3
)
RETURNS TABLE (
  id             bigint,
  source         text,
  url            text,
  license        text,
  specialty      text,
  diagnosis_tags text[],
  chunk_text     text,
  chunk_index    int,
  similarity     float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    ge.id,
    ge.source,
    ge.url,
    ge.license,
    ge.specialty,
    ge.diagnosis_tags,
    ge.chunk_text,
    ge.chunk_index,
    1 - (ge.embedding <=> query_embedding) AS similarity
  FROM guidelines_embeddings ge
  WHERE
    (filter_specialty IS NULL OR ge.specialty = filter_specialty)
    AND 1 - (ge.embedding <=> query_embedding) >= min_similarity
  ORDER BY ge.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- Step 6: Convenience view — deduplicated sources (for admin UI)
CREATE OR REPLACE VIEW guidelines_sources AS
SELECT
  source,
  url,
  license,
  specialty,
  diagnosis_tags,
  COUNT(*) AS chunk_count,
  MIN(created_at) AS first_embedded
FROM guidelines_embeddings
GROUP BY source, url, license, specialty, diagnosis_tags
ORDER BY specialty, source;
