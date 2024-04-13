const express = require('express');

const { problemController } = require('../../controllers')
const problemRouter = express.Router();


// if any request comes and route startds with /ping, we map it to pingProblemController
problemRouter.get('/ping', problemController.pingProblemController);

problemRouter.get('/:id', problemController.getProblem);
problemRouter.get('/', problemController.getProblems);
problemRouter.post('/', problemController.addProblem);
problemRouter.delete('/:id', problemController.deleteProblem);
problemRouter.put('/', problemController.updateProblem);

module.exports = problemRouter;

