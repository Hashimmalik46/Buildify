import json
import os
from dotenv import load_dotenv
from google import genai


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



if __name__ == "__main__":
    evaluate_candidate()