
const { StatusCodes } = require('http-status-codes');
const Notimplemented = require('../errors/notimplemented.error');
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories")

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
    return res.json({ message: 'Problem controller is up' });
}

async function addProblem(req, res, next) {

    try {
        console.log("incoming req body", req.body);
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created a new problem",
            error: {},
            data: newproblem
        })

    } catch (error) {

        next(error);
    }

}

async function getProblems(req, res, next) {
    try {

        const response = await problemService.getAllproblems();


        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched all the problems",
            error: {},
            data: response
        })


    } catch (error) {

        next(error);

    }

}


function deleteProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: 'Not Implemented' });

}

function updateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: 'Not Implemented' });

}

module.exports = {
    addProblem,
    getProblems,
    deleteProblems,
    updateProblem,
    pingProblemController
}

/**
 * res
 * 
 * res.status ---> returns the same response object with status property set
 * .json ---> return the same response object which has status set but this json to be returned is also set
 */