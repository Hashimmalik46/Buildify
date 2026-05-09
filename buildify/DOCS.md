# EquiWork: AI-Powered Workforce Intelligence

## 🚀 Overview
EquiWork is an enterprise-grade platform designed to align workforce capabilities with real-time market trends. Using AI scoring and data-driven insights, it bridge the gap between individual skills and global industry demands.

---

## 🛠️ The Pipeline

### 1. Employee Registration (Onboarding)
- **Input**: Employees enter their basic info, skills, and experience.
- **AI Action**: At the moment of registration, an AI model calculates a **Market Fit Score** (1-10) based on their details.
- **Result**: A user profile is automatically created in the database with their initial **Grade Level** (1-10).

### 2. Dashboards
- **Employee Portal**: Displays personal metrics, performance scores, current Grade Level, and AI-assigned roadmaps.
- **HR Dashboard**: Provides an executive overview of all employees, average productivity, and burnout alerts.

### 3. Market Trend Synchronization
- **HR Action**: HR triggers the "Generate Trends" process to fetch global industry data.
- **AI Action**: The AI model analyzes the new trends and updates the **Market Fit Score** for all affected employees.
- **Result**: The **Grade Level** is modified based on these shifts, and all dashboards are updated in real-time.

---

## 📂 Database Schema (Supabase)

### `profiles`
The core table storing user information.
- `id`: Linked to Supabase Auth.
- `role`: 'employee', 'hr', or 'admin'.
- `market_fit_score`: The primary AI-driven metric (1-10).
- `grade_level`: The final level (1-10).
- `experience_years`, `skills`, `burnout_risk`, etc.

### `market_trends`
Stores industry data fetched via APIs.
- `metric_name`, `value`, `category`, `source_api`.

### `grade_history`
Tracks movements in employee grades over time for growth analysis.

### `upskilling_recommendations`
HR-assigned roadmaps and training paths.
- `roadmap_details`, `target_skills`, `status`.

---

## 🔒 Security (RLS)
- **Employees**: Can only view their own performance logs, grade history, and roadmaps.
- **HR/Admins**: Have broad access to analyze workforce data and manage roadmaps.
- **Public**: Basic profile info is viewable for internal collaboration.
