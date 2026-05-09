from Functions.evaluateEmployee import evaluateEmployee
from flask import request, jsonify

def EmployeeEvaluation(app, client):

    #signup/skillchange
    @app.route('/employee-evaluation', methods=['POST'])
    def employee_evaluation():
        employee_id = request.json.get('employee_id')
        evaluation = evaluateEmployee(client,employee_id)
        #db
        return jsonify(evaluation)
    
    @app.route('/employees-evaluation', methods=['POST'])
    def employees_evaluation():
        employee_ids = [1,2,3,4,5]
        evaluations = []
        for emp_id in employee_ids:
            evaluations.append(evaluation)
        return jsonify(evaluations)
