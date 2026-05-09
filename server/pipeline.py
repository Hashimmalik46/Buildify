import os
from google import genai
from google.genai import types

# 1. Setup Configuration
API_KEY = "YOUR_GEMINI_API_KEY" # Replace with your actual key
client = genai.Client(api_key=API_KEY)




def generate_strategic_report():
    try:
        # 3. Execute the API Call
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=user_instruction,
            config=types.GenerateContentConfig(
                system_instruction=system_prompt,
                temperature=0.2,  # Low temperature for stable, expert output
                max_output_tokens=2048,
                top_p=0.8
            )
        )

        # 4. Output the Result
        print("--- STRATEGIC WORKFORCE REPORT 2026 ---")
        print(response.text)

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    generate_strategic_report()