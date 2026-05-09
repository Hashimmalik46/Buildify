from Functions.generateCompanySkills import generateCompanySkills
def GenerateSkills(app,client):

    @app.route('/generate-skills', methods=['POST'])
    def generate_skills():
        company_consts=generateCompanySkills(client)
        return company_consts
