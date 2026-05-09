from Functions.generateSkillsFunction import generateNewSkills
from Functions.evaluateEmployeeFunction import evaluateEmployee
from flask import request, jsonify

def GenerateSkills(app, client, supabase):

    @app.route('/generate-skills', methods=['POST'])
    def generate_skills():
        description = request.json.get('description')
        market_skills = generateNewSkills(client, description)
        
        # Update market_skills table with new skills
        # Delete all existing skills
        supabase.table('market_trends').delete().neq('id', '00000000-0000-0000-0000-000000000000').execute()
        
        # Insert new skills from generateNewSkills response
        if market_skills and 'skills' in market_skills:
            skills_to_insert = []
            for skill in market_skills['skills']:
                skills_to_insert.append({
                    'metric_name': skill.get('metric_name'),
                    'value': str(skill.get('value')),
                    'category': skill.get('category')
                })
            
            if skills_to_insert:
                supabase.table('market_skills').insert(skills_to_insert).execute()
        
        # Fetch all employee IDs from Supabase
        response = supabase.table('profiles').select('id').execute()
        employees = response.data
        
        for employee in employees:
            employee_id = employee['id']
            
            # Fetch skills and experience for each employee
            emp_response = supabase.table('profiles').select('skills, experience_years').eq('id', employee_id).execute()
            emp_record = emp_response.data[0] if emp_response.data else None
            
            if emp_record:
                emp_data = {
                    "skills": emp_record.get('skills', []),
                    "experience_years": emp_record.get('experience_years', 0)
                }
                evaluation = evaluateEmployee(client, emp_data, market_skills)
                
                # Update employee record with score and review
                if evaluation:
                    supabase.table('profiles').update({
                        'score': evaluation.get('score'),
                        'review': evaluation.get('review')
                    }).eq('id', employee_id).execute()
        
        # return jsonify({"status": "okay", "message": "Skills generated and employee evaluations completed successfully"})
        return market_skills
