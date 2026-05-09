import json
import os
from dotenv import load_dotenv
from google import genai
from supabase import create_client
import flask
from routes.EmployeeEvaluation import EmployeeEvaluation
from routes.GenerateTrends import GenerateTrends

app = flask.Flask(__name__)


load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env'))

# Initialize the Gen AI client using the key from .env
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# Initialize Supabase client
supabase_url = os.getenv("VITE_SUPABASE_URL")
supabase_key = os.getenv("VITE_SUPABASE_ANON_KEY")
supabase = create_client(supabase_url, supabase_key)


EmployeeEvaluation(app,client,supabase)
GenerateTrends(app,client,supabase)


if __name__ == "__main__":
    app.run(debug=True)

