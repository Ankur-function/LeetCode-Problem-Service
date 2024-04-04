const BaseError = require("./base.error");
const { StatusCodes } = require('http-status-codes')

class Notimplemented extends BaseError {
    constructor(methodName) {
        super("Notimplemented", StatusCodes.NOT_IMPLEMENTED, `${methodName}`, {})
    }
}

module.exports = Notimplemented;