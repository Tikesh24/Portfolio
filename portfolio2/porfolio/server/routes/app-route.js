var express = require('express');
var router = express.Router();
var cors = require('cors');
var filehandler = require('./../services/filehandler')

router.get('/ping', function(req, res, next) {
  res.send('RESTful API');
});

router.get('/getPageData',cors(), function(req, res, next) {
  var content = filehandler.readPageData();
  res.send(content);
});

router.post('/updateFeedback',cors(),(req,res)=>{
  var feedback = req.body;
  console.log(feedback)
  filehandler.upDateFeedback(feedback);
  res.send('Successfull');
})

router.post('/updateUserData',cors(),(req,res)=>{
  var userData = req.body;
  filehandler.updateUserDataForm(userData) === false ? res.sendStatus(500) : res.sendStatus(200);
})

router.get('/getFeedBackData',cors(), function(req, res, next) {
  var content = filehandler.readDataFromFile();
  res.send(content);
});

module.exports = router;