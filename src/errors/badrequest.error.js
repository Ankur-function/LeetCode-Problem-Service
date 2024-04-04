const BaseError = require("./base.error");
const {StatusCodes} = require('http-status-codes')


// bad request happens because of client side fault
class BadRequest extends BaseError{
    constructor(propertyName, details){
 // here property name is that property which client has wrongly filled or forgot to fill which was mandotary
        super("BadRequest", StatusCodes.BAD_REQUEST, `Invalid structure for ${propertyName} provided`, details)
    }
}

module.exports = BadRequest;