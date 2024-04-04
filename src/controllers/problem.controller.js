
const { StatusCodes } = require('http-status-codes');
const Notimplemented = require('../errors/notimplemented.error');

function pingProblemController(req, res) {
    return res.json({ message: 'Problem controller is up' });
}

function addProblem(req, res, next) {

    try {
        throw new Notimplemented('addProblem Not Implemented')

    } catch (error) {
        console.log("error in catch", error);
        next(error);
    }

}

function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: 'Not Implemented' });

}

function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: 'Not Implemented' });

}

function deleteProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: 'Not Implemented' });

}

function updateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: 'Not Implemented' });

}

module.exports = {
    addProblem,
    getProblem,
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