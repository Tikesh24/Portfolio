var express = require('express');
var router = express.Router();
var filehandler = require('./../services/filehandler')

router.get('/ping', function(req, res, next) {
  res.send('RESTful API');
});

router.get('/getPageData', function(req, res, next) {
  var content = filehandler.readPageData();
  res.send(content);
});

router.post('/updateFeedback',(req,res)=>{
  var feedback = req.body;
  console.log(feedback)
  filehandler.upDateFeedback(feedback);
  res.send('Successfull');
})

module.exports = router;