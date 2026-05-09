import json
import os
from google import genai
from google.genai import types
from dotenv import load_dotenv


# 1. Setup Configuration
load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=API_KEY)


if __name__ == "__main__":
    generate_strategic_report()