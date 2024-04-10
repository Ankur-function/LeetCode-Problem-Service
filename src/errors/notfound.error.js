const BaseError = require("./base.error");
const { StatusCodes } = require('http-status-codes')


// bad request happens because of client side fault
class NotFound extends BaseError {
    constructor(resourceName, resourceValue) {

        // here property name is that property which client has wrongly filled or forgot to fill which was mandotary
        super("NotFound", StatusCodes.NOT_FOUND, `The Requested resource ${resourceName} with value ${resourceValue} not found`, {
            resourceName,
            resourceValue
        });
    }
}

module.exports = NotFound;