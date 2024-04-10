const sanitizeMarkdownContent = require('../utils/markdownSanitizer')

class ProblemService {

  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
      // 1. sanitize the markdown for description
      problemData.description = sanitizeMarkdownContent(problemData.description)

      console.log("problemData", problemData);
      const problem = await this.problemRepository.createProblem(problemData);

      console.log("problem created", problem);

      return problem;

  }
async getAllproblems(){

    const problems = await this.problemRepository.getAllproblems();
    return problems
  
}

}

module.exports = ProblemService;