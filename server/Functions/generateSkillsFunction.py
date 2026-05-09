import json

system_prompt = """
Role: You are a CTO-level Strategic Consultant. 
Core Objective: Identify the 15 most critical technical skills for a software engineering team in 2026. 
Provide a list that balances "Cutting-Edge Innovation" (Agentic AI, Vibe Coding) with "Architectural Foundations" (Cloud, Security, Data).

Constraints:
1. The 10/5 Split: 10 skills on "Emerging Tech" and 5 on "Durable Foundations."
2. Logic over Syntax: Prioritize how systems connect over specific code blocks.
3. No Categories: Provide a flat, numbered list of 15 specific skills.
4. Detail per Skill: Include Strategic Value, Tech Stack (2-3 tools), and a Durability Score (1-10).
5. Anti-Hype Filter: Avoid "Prompt Engineering"; use "Context Engineering" or "Agent Orchestration."

RESPONSE FORMAT:
Return a JSON object with a "skills" array containing exactly 15 items/objects. Each item MUST have exactly these three fields:
- metric_name: (string) The name of the trend
- value: (number 1-100) Priority/weight of the trend (100 being highest priority)
- category: (string) Category it belongs to: Frontend, Automation, Data, Security, Cloud, AI/ML, DevOps, etc

Example structure:
{
  "skills": [
    {"metric_name": "Agent Orchestration", "value": 95, "category": "Emerging Tech"},
    {"metric_name": "Cloud Architecture", "value": 85, "category": "Durable Foundations"}
  ]
}
"""


def generateNewSkills(client):
    try:
        # 3. Execute the API Call
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=["Generate the Top 15 mastery skills report for my software services firm.",
                f"Input Data: {json.dumps(system_prompt)}"
            ],
            config={
                "response_mime_type": "application/json"
            }
        )

        # 4. Output the Result
        # print("--- Top 15 mastery skills report for 2026 ---")
        response = json.loads(response.text)
        # print(json.dumps(evaluation, indent=4))
        return response
    except Exception as e:
        print(f"An error occurred: {e}")
