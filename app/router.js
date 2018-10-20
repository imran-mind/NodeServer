var express = require('express');
var router = express.Router();
var GreetObject = require('./index');

router.get('/customers', function(req, res){
   res.send(GreetObject.greet('Rashid Bhai'));
});
router.post('/', function(req, res){
   res.send(GreetObject.hello());
});

//export this router to use in our index.js
module.exports = router;

