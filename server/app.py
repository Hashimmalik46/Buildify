import os
from dotenv import load_dotenv
from openai import OpenAI
from supabase import create_client
import flask
from routes.EmployeeEvaluation import EmployeeEvaluation
from routes.GenerateTrends import GenerateTrends

app = flask.Flask(__name__)


load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env'))

# Initialize the Groq OpenAI-compatible client using the key from .env
client = OpenAI(
    api_key=os.getenv("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1",
)

# Initialize Supabase client
supabase_url = os.getenv("VITE_SUPABASE_URL")
supabase_service_key = os.getenv("SUPABASE_SERVICE_ROLE_KEY") or os.getenv("SUPABASE_SECRET_KEY")
supabase_key = supabase_service_key or os.getenv("VITE_SUPABASE_ANON_KEY")
supabase = create_client(supabase_url, supabase_key)
app.config["SUPABASE_HAS_SERVICE_ROLE"] = bool(supabase_service_key)


EmployeeEvaluation(app,client,supabase)
GenerateTrends(app,client,supabase)


if __name__ == "__main__":
    app.run(debug=True)

