def evaluateEmployee(employee_id):
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



    # 3. Merge into a single payload for the model
    # This linking ensures the AI compares specific fields directly
    context = {
        "candidate": employee_data,
        "company_needs": company_constraints
    }

    # 4. Generate the structured score
    # Setting response_mime_type ensures valid JSON output
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=[
                "Analyze the candidate against the company needs. "
                "Provide a match_score (0-100), a breakdown of skill alignment, "
                "and an assessment of their collaborative spirit.",
                f"Input Data: {json.dumps(context)}"
            ],
            config={
                "response_mime_type": "application/json"
            }
        )

        # 5. Parse and Print the result
        evaluation = json.loads(response.text)
        print(json.dumps(evaluation, indent=4))

    except Exception as e:
        print(f"An error occurred during API call: {e}")