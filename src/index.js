const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const BaseError = require('./errors/base.error');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


// if any request comes and route starts with /api, we map it to apiRouter
app.use('/api', apiRouter);


app.get('/ping', (req, res) => {
    return res.json({ message: "Problem Service is alive" });
});

// last middleware, if any error occurs
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);

    try {
        // throw new BaseError("Some error", 404, "Something went wrong");

    } catch (error) {
        console.log("something wrong here", error.name, error.stack);
    }
    // finally {
    //     // we can use finally to close our db connection, doesn't matter try block gets execute or catch block finally will always execute
    //     console.log("Executed finally");
    // }
});