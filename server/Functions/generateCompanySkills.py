import json
import os

# 2. Define the Balanced Architecture Prompt
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
"""

user_instruction = "Generate the Top 15 mastery skills report for my software services firm."

def generateCompanySkills(client):
    try:
        # 3. Execute the API Call
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=user_instruction,
            # config=types.GenerateContentConfig(
            #     system_instruction=system_prompt,
            #     temperature=0.2,  # Low temperature for stable, expert output
            #     max_output_tokens=2048,
            #     top_p=0.8
            # )
            config={
                "response_mime_type": "application/json"
            }
        )

        # 4. Output the Result
        # print("--- Top 15 mastery skills report for 2026 ---")
        evaluation = json.loads(response.text)
        # print(json.dumps(evaluation, indent=4))
        return evaluation
    except Exception as e:
        print(f"An error occurred: {e}")
