
const {StatusCodes} =  require('http-status-codes')

function pingProblemController(req, res) {
    return res.json({ message: 'Problem controller is up' });
}

function addProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: 'Not Implemented' });

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