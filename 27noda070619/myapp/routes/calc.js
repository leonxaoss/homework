var express = require('express');
var router = express.Router();



router.post('/', function(req, res, next) {
  var sum = 0;
    sum = +req.body.num1 + +req.body.num2;
  res.json({status: 'ok', data: {res: sum}});
});

module.exports = router;
