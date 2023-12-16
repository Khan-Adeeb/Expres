var express = require('express');
var router = express.Router();
var db=require('../config/database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/userform', function(req,res){
  res.render('userform');
});

router.post('/userform', function(req, res){
  // const {email, name , pass} = req.body
  // console.log("name:", name, "Emailid :",email," Pass:", pass);
  const mailid= req.body.Email;
  const passid= req.body.Pass;
  const nameid= req.body.Name;
  // console.log("Email:", mailid , " Pass:",passid , " Name:",nameid );
  db.query(
    `INSERT INTO user_data( Username, Password, Email) VALUES ('${nameid}','${passid}','${mailid}')` ,
    function(err, results) {
      if(err)
      throw err;
      console.log(results);
      const data= results;
      res.status(200).json({
        message:"success",
        Response : "You are now logged in!"
    })
  }
  );
});



module.exports = router;
