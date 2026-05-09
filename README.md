# EquiWork – AI-Powered Workforce Intelligence

<div align="center">

### Aligning Workforce Capability with Real-Time Market Demand

AI-driven employee grading, workforce analytics, market trend synchronization, and intelligent upskilling recommendations.

</div>

---

# 📌 Overview

**EquiWork** is an enterprise-grade AI platform that helps organizations future-proof their workforce by continuously aligning employee capabilities with evolving industry demands.

The platform evaluates employee skills, experience, and performance against real-time market trends to generate dynamic capability scores, market-fit insights, and personalized upskilling pathways.

Instead of relying on assumptions or geography-based allocation, EquiWork enables companies to distribute high-value work based on measurable capability using a unified AI-driven grading system.

---

# ✨ Core Features

## 👤 AI Employee Evaluation

* AI-generated **Market Fit Score**
* AI-generated **Performance Review**
* Dynamic **Grade Level (1–10)**
* Skill-gap analysis based on industry demand

---

## 📈 Real-Time Market Intelligence

* Integrates with live market trend APIs
* Tracks emerging technologies and hiring patterns
* Continuously updates workforce relevance

---

## 🔄 Dynamic Workforce Re-Scoring

HR teams can trigger organization-wide reassessments using custom industry prompts.

Example:

> “Prioritize AI engineering, cloud architecture, and cybersecurity expertise.”

The system automatically:

1. Fetches all employee profiles
2. Recalculates scores using AI
3. Updates Supabase records
4. Refreshes dashboards instantly

---

## 🎯 Intelligent Upskilling Recommendations

* Personalized growth roadmaps
* Target skill recommendations
* Training progress tracking
* Focus on internal upskilling over expensive lateral hiring

---

## 🧠 Executive HR Dashboard

* Workforce capability analytics
* Market trend visualizations
* Employee distribution insights
* Organization-wide performance overview

---

# 🚨 The Problem

Modern organizations face several workforce challenges:

* High-impact work is often assigned based on perception rather than measurable capability
* Rapid technological shifts create continuous skill gaps
* Companies heavily depend on expensive external hiring
* Workforce evaluation systems become outdated quickly
* Global teams lack a standardized capability assessment framework

---

# ✅ The Solution

EquiWork solves these challenges through:

* AI-powered onboarding and employee grading
* Real-time market trend synchronization
* Dynamic workforce intelligence
* Automated upskilling roadmaps
* Data-driven workforce allocation

---

# 🏗️ System Architecture

```text
Employee Registration
        │
        ▼
Frontend → Supabase → Evaluation API
        │                  │
        │                  ▼
        │          AI Score + Review
        │                  │
        ▼                  ▼
 Employee Dashboard ← Updated Database
```

---

# 🔌 API Workflow

## 1️⃣ Employee Registration (Onboarding)

### Flow

1. Employee signs up
2. Profile is created in Supabase
3. Frontend triggers Evaluation API
4. API calculates:

   * AI Score
   * AI Review
   * Grade Level
5. API directly updates Supabase
6. Dashboard fetches updated data

### Evaluation Inputs

* Skills
* Experience
* Role
* Market demand
* Industry trends

---

## 2️⃣ HR Dashboard & Market Trends

The HR dashboard integrates with the **Market Trends API** to display:

* Emerging technologies
* Hiring demand
* Industry growth areas
* Skill relevance

---

## 3️⃣ Global Workforce Re-Scoring

### Trigger

HR clicks:

```text
Generate Trends
```

### Example Prompt

```text
Focus on AI, Cloud Infrastructure, and Cybersecurity
```

### Process

* Frontend sends prompt to Evaluation API
* API fetches all employees
* Scores are recalculated
* Supabase updates automatically
* Dashboard refreshes with new rankings

---

# 🗄️ Database Schema (Supabase)

## `profiles`

Core employee information.

| Field              | Description                   |
| ------------------ | ----------------------------- |
| `id`               | Linked to Supabase Auth       |
| `role`             | employee / hr / admin         |
| `score`            | AI-generated market fit score |
| `review`           | AI-generated review           |
| `experience_years` | Total experience              |
| `skills`           | Employee skill set            |
| `burnout_risk`     | Burnout indicator             |

---

## `market_trends`

Stores market intelligence data.

| Field         | Description       |
| ------------- | ----------------- |
| `metric_name` | Trend metric      |
| `value`       | Metric value      |
| `category`    | Industry category |
| `source_api`  | Data source       |

---

## `grade_history`

Tracks employee growth over time.

| Field            | Description        |
| ---------------- | ------------------ |
| `employee_id`    | Employee reference |
| `previous_grade` | Previous grade     |
| `new_grade`      | Updated grade      |
| `timestamp`      | Change time        |

---

## `upskilling_recommendations`

Stores AI-generated roadmaps.

| Field             | Description      |
| ----------------- | ---------------- |
| `roadmap_details` | Learning roadmap |
| `target_skills`   | Required skills  |
| `status`          | Progress status  |

---

# 🔒 Security & Access Control

Implemented using **Supabase Row Level Security (RLS)**.

## Employees

Can access:

* Personal profile
* AI score
* Reviews
* Roadmaps
* Grade history

---

## HR/Admin

Can access:

* Workforce analytics
* Employee management
* Trend synchronization
* Organization-wide insights

---

## Public Access

Limited internal collaboration visibility.

---

# 🧰 Tech Stack

## Frontend

* React.js / Next.js
* Tailwind CSS

## Backend

* Node.js
* Express.js

## Database & Auth

* Supabase

## AI & APIs

* Evaluation API
* Market Trends API

## Visualization

* Recharts / Chart.js

---

# ⚡ Key Benefits

* Future-proofs workforce capabilities
* Reduces dependency on external hiring
* Enables fair capability-based work distribution
* Improves employee growth and retention
* Aligns workforce strategy with live market demand

---

# 📊 Example Use Cases

## Enterprise Workforce Planning

Identify future-ready teams and allocate strategic projects effectively.

## Internal Upskilling

Detect skill gaps early and generate personalized learning paths.

## Global Team Standardization

Evaluate employees using a common AI grading framework across regions.

## Hiring Optimization

Reduce unnecessary lateral hiring through intelligent reskilling.

---

# 🚀 Future Scope

* Predictive workforce forecasting
* AI interview simulations
* Integration with LMS platforms
* Skill certification tracking
* Organizational burnout analytics
* AI-powered career progression engine

---

# 🧪 Local Setup

## Clone Repository

```bash
git clone https://github.com/your-username/equiwork.git
cd equiwork
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
EVALUATION_API_URL=your_api
MARKET_TRENDS_API_URL=your_api
```

---

## Run Development Server

```bash
npm run dev
```

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Team EquiWork

Building the future of workforce intelligence through AI, analytics, and continuous upskilling.
