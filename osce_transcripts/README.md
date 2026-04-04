# OSCE Transcript Analysis — ReasonDx Arm 7

## Data Governance

**Audio must never leave the simulation center.**

Pipeline:
1. Export audio/video from Broward simulation center system
2. Transcribe on-site using local Whisper (free, runs on laptop, no cloud)
3. Delete audio files immediately after confirming transcript
4. Work only with de-identified text from this point forward

## Whisper Installation (free, one-time)

```bash
brew install ffmpeg
pip install faster-whisper
```

## Transcribing an OSCE Recording

```python
from faster_whisper import WhisperModel
model = WhisperModel("large-v3-turbo", device="cpu", compute_type="int8")
segments, info = model.transcribe("osce_recording.mp4", beam_size=5)
with open("transcript.txt", "w") as f:
    for segment in segments:
        f.write(f"[{int(segment.start//60):02d}:{segment.start%60:04.1f} --> "
                f"{int(segment.end//60):02d}:{segment.end%60:04.1f}] "
                f"{segment.text.strip()}\n")
```

A 15-minute OSCE station takes ~3-5 minutes on a standard Mac laptop.

## Transcript Format

Simplest is plain speaker-labeled text:

```
Student: Good morning, I'm the doctor today. What brings you in?
Patient: I've been having this chest pain for the last two days.
Student: Can you tell me more about it — where exactly do you feel it?
Patient: It's right here in the middle, kind of like pressure.
Student: Does the pressure go anywhere, like your arm or your jaw?
```

## Running the Analysis

```bash
# Single transcript
python3 osce_transcript_analyzer.py osce_transcripts/STU_001.txt --student STU_001 --case chest_pain -v

# Batch — all .txt files in a folder
python3 osce_transcript_analyzer.py --batch osce_transcripts/ --out results.json -v
```

## Key Output Fields for Convergent Validity Comparison

Match these to the same student's ReasonDx platform passive measures:

| OSCE transcript field | Platform passive analog |
|---|---|
| question_sequence_score | question_type_classifier.expertPattern |
| semantic_qualifier_score | implicit_confidence.score (inverted) |
| cue_follow_up_score | cue_utilization.utilizationRate |
| pivot_behavior_score | rpfs.differentialEvolution convergence |
| overall_reasoning_quality | RPFS composite score |

## De-identification

Replace student name → STU_001, STU_002...
Replace SP name → "Patient"
