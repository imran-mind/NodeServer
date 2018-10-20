var express = require('express');
var router = express.Router();
var app = express();
var PORT = 9090;
var userRouter = require('./app/router');

app.use('/api/v1',userRouter);

app.listen(PORT, function () {
    console.log(':) Server is listing on PORT ', 9090);
});