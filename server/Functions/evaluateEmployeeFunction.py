import json
import os

def evaluateEmployee(client, employee_data, company_consts):

    # 3. Merge into a single payload for the model
    # This linking ensures the AI compares specific fields directly
    context = {
        "candidate": employee_data,
        "company_needs": company_consts
    }

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=[
                "Analyze the candidate against the company needs. Return ONLY a JSON object with exactly two fields: "
                "score (integer 0-100 representing the match percentage) and review (string with analysis of strengths, weaknesses, and improvements needed). "
                "Return nothing else, only these two fields.",
                f"Input Data: {json.dumps(context)}"
            ],
            config={
                "response_mime_type": "application/json"
            }
        )

        # 5. Parse and Print the result
        evaluation = json.loads(response.text)
        return evaluation

    except Exception as e:
        print(f"An error occurred during API call: {e}")