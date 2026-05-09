import json




def generateNewTrends(client,description):
    system_prompt = f"""
Role: You are a CTO-level Strategic Consultant. 
Core Objective: Identify the 15 most critical skills for our company based on the below description.
description: {description}

RESPONSE FORMAT:
Return a JSON object with a "skills" array containing exactly 15 items. Each item MUST have exactly these three fields:
- metric_name: (string) The name of the skill
- value: (number 1-100) Priority/weight of the skill (100 being highest priority)
- category: (string) Category it belongs to.

Example structure:

  "trends": [
    "metric_name": "Agent Orchestration", "value": 95, "category": "Emerging Tech",
    "metric_name": "Cloud Architecture", "value": 85, "category": "Durable Foundations"
  ]
"""
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
