from Functions.evaluateEmployee import evaluateEmployee
from flask import request, jsonify

def EmployeeEvaluation(app):

    @app.route('/employee-evaluation', methods=['POST'])
    def employee_evaluation():
        employee_id = request.json.get('employee_id')
        evaluation = evaluateEmployee(employee_id)
        return jsonify(evaluation)
    
