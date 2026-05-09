from Functions.evaluateEmployee import evaluateEmployee
from flask import request, jsonify

def EmployeeEvaluation(app):

    #signup/skillchange
    @app.route('/employee-evaluation', methods=['POST'])
    def employee_evaluation():
        employee_id = request.json.get('employee_id')
        evaluation = evaluateEmployee(employee_id)
        #db
        return jsonify(evaluation)
    
    #route....employeesroute....hr on prompt change
    #callgenerateskillsfunction
    #db
    
