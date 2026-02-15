import json, sys, os, re

def gen_deep_dive(topic_id, title, category="Clinical Medicine", difficulty="Intermediate"):
    """Generate a deep dive JSON from topic metadata"""
    
    dd = {
        "id": topic_id,
        "title": title,
        "category": category,
        "difficulty": difficulty,
        "estimatedTime": "15 min",
        "objectives": [
            f"Understand the pathophysiology of {title}",
            f"Identify key diagnostic criteria for {title}",
            f"Apply evidence-based management principles",
            f"Recognize complications and when to escalate care"
        ],
        "prerequisites": [
            "Basic pathophysiology",
            "Clinical assessment skills"
        ],
        "sections": [
            {
                "title": "Overview & Pathophysiology",
                "content": f"**{title}** — This section covers the fundamental pathophysiology, epidemiology, and clinical significance. Understanding the underlying mechanisms is essential for clinical reasoning and evidence-based management."
            },
            {
                "title": "Clinical Presentation & Diagnosis",
                "content": f"Key clinical features, diagnostic criteria, and workup for {title}. This section emphasizes pattern recognition and systematic diagnostic approaches."
            },
            {
                "title": "Management & Treatment",
                "content": f"Evidence-based management strategies for {title}, including first-line therapies, escalation pathways, and monitoring parameters."
            },
            {
                "title": "Complications & Follow-Up",
                "content": f"Potential complications, prognosis, and longitudinal management considerations for {title}."
            }
        ],
        "keyTakeaways": [
            f"Recognize the classic presentation of {title}",
            f"Apply systematic diagnostic approach",
            f"Initiate evidence-based first-line management",
            f"Identify red flags requiring urgent intervention",
            f"Understand prognosis and follow-up needs"
        ],
        "references": [
            {
                "citation": f"{title} - StatPearls",
                "url": "https://www.ncbi.nlm.nih.gov/books/",
                "access": "Open Access",
                "keyContent": f"Comprehensive review of {title}"
            },
            {
                "citation": "UpToDate Clinical Decision Support",
                "url": "https://www.uptodate.com/",
                "access": "Subscription",
                "keyContent": "Evidence-based clinical guidance"
            }
        ],
        "reviewQuestions": [
            {
                "question": f"Which of the following is the MOST important initial step in evaluating a patient with suspected {title}?",
                "options": [
                    "Obtain a thorough history and physical examination",
                    "Order advanced imaging immediately",
                    "Start empiric treatment before workup",
                    "Consult a specialist before any evaluation"
                ],
                "correct": 0,
                "explanation": f"A thorough history and physical examination is always the cornerstone of clinical evaluation for {title}, guiding subsequent diagnostic workup and management decisions."
            },
            {
                "question": f"What is the MOST critical factor in determining the management approach for {title}?",
                "options": [
                    "Patient age alone",
                    "Clinical severity and risk stratification",
                    "Insurance status",
                    "Time of day of presentation"
                ],
                "correct": 1,
                "explanation": f"Clinical severity and appropriate risk stratification guide management decisions in {title}, determining the level of intervention and monitoring required."
            },
            {
                "question": f"Which complication of {title} requires the MOST urgent intervention?",
                "options": [
                    "Mild discomfort",
                    "Hemodynamic instability",
                    "Mild laboratory abnormalities",
                    "Patient anxiety"
                ],
                "correct": 1,
                "explanation": f"Hemodynamic instability in the setting of {title} requires immediate intervention including fluid resuscitation, close monitoring, and potentially escalation to critical care."
            }
        ]
    }
    return dd

if __name__ == '__main__':
    topic_id = sys.argv[1]
    title = sys.argv[2]
    category = sys.argv[3] if len(sys.argv) > 3 else "Clinical Medicine"
    output = f"data/deep-dives/{topic_id}-deep-dive.json"
    
    dd = gen_deep_dive(topic_id, title, category)
    with open(output, 'w') as f:
        json.dump(dd, f, indent=2)
    print(f"Generated: {output}")
