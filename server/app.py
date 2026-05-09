import json
import os
from dotenv import load_dotenv
from google import genai
from google.genai import types


load_dotenv()

# Initialize the Gen AI client using the key from .env
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def load_local_json(file_path):
    """Utility to load JSON data from a local file."""
    try:
        with open(file_path, 'r') as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Error loading {file_path}: {e}")
        return None

def evaluate_candidate():
    # 1. Load employee data
    employee_data = load_local_json('employee.json')
    if not employee_data:
        return

    # 2. Define company constraints
    company_consts = {
        "required_skills": ["Python", "Flask", "SQL", "Tailwind CSS"],
        "experience_target": 3,
        "soft_skills_priority": "Collaborative spirit and leadership"
    }
    # 3. Define the Balanced Architecture Prompt 
    # fetch from db

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


    # 3. Merge into a single payload for the model
    # This linking ensures the AI compares specific fields directly
    context = {
        "candidate": employee_data,
        "company_needs": system_prompt
    }

    # 4. Generate the structured score
    # Setting response_mime_type ensures valid JSON output
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=[
                "Generate the Top 15 mastery skills report for my software services firm."
                "Analyze the candidate against the company needs. "
                "Provide a match_score (0-100) based on how well it matches the employee's current skills, a breakdown of skill alignment,"
                "and an assessment of their collaborative spirit.",
                f"Input Data: {json.dumps(context)}"
            ],
            config={
                "response_mime_type": "application/json"
            }
        )

        # 5. Parse and Print the result
        evaluation = json.loads(response.text)
        # print(json.dumps(evaluation, indent=4))
        # 2. Save the entire list to a JSON file
        with open("terminal_output.json", "w") as f:
            json.dump(evaluation, f, indent=4)

    except Exception as e:
        print(f"An error occurred during API call: {e}")

if __name__ == "__main__":
    evaluate_candidate()