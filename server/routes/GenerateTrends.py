from Functions.generateTrendsFunction import generateNewTrends
from Functions.evaluateEmployeeFunction import evaluateEmployee
from flask import request, jsonify

def GenerateTrends(app, client, supabase):

    @app.route('/generate-trends', methods=['POST'])
    def generate_trends():
        description = request.json.get('description')
        market_trends = generateNewTrends(client, description)
        
        # Update market_trends table with new trends
        # Delete all existing trends
        supabase.table('market_trends').delete().neq('id', '00000000-0000-0000-0000-000000000000').execute()
        
        # Insert new trends from generateNewTrends response
        if market_trends and 'trends' in market_trends:
            trends_to_insert = []
            for trend in market_trends['trends']:
                trends_to_insert.append({
                    'metric_name': trend.get('metric_name'),
                    'value': str(trend.get('value')),
                    'category': trend.get('category')
                })
            
            if trends_to_insert:
                supabase.table('market_trends').insert(trends_to_insert).execute()
        
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
                evaluation = evaluateEmployee(client, emp_data, market_trends)
                
                # Update employee record with score and review
                if evaluation:
                    supabase.table('profiles').update({
                        'score': evaluation.get('score'),
                        'review': evaluation.get('review')
                    }).eq('id', employee_id).execute()
        
        return jsonify({"status": "okay", "message": "Employee evaluations and Trends Set completed successfully"})
