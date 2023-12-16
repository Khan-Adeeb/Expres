var express = require('express');
var router = express.Router();
var db=require('../config/database');


/* GET users listing. */
// router.get('/post', function(req, res, next) {
//   res.status(504).json({
//     title:"first post",
//     content:"this is a short description"
//   })
// });


// router.get('/form', function(req,res,next){
//     const data= [{
//             username: "adeeb",
//             password: "adeeb124"
//         },{
//             username: "anjali",
//             password: "anjali1234"
//         }];
//     res.status(200).json(data)
// } );

router.get('/login', function(req,res){
  res.render('login',{title:'form'})
});

router.post('/login', checker , function(req, res,next){
    res.status(200).json({
        message:"success",
        Response : "You are now logged in!"
    })
});

function checker(req,res,next) {
    // console.log(req.body);
    const idmail= req.body.Email;
    const idpass= req.body.Pass;
    console.log("mail : " , idmail , "pass : ", idpass);
    
    if(idmail == "" && idpass == ""){
        res.status(202).jason({
            Response : "Please enter details"
        })
    }
    else if(idmail == ""){
        res.status(202).json({
            Response : "Enter your Email"
        })
    }
    else if(idpass == ""){
        res.status(202).json({
            Response : "Enter your Password"
        })
    }
    else{
        next();
    }
}



// function checker(req,res,next){
//     const mail= req.query.email;
//     const pass= req.query.password;
//     console.log('mail :', mail ,'password :',pass);
//     if(mail == ""){
//         res.send("enter you EMAIL")
//     }
//     if(pass == ""){
//       res.send('enter your PASSWORD')
//     }
//     else{
//         next();
//     }
//   }



router.get('/newlogin', function(req,res){
    res.render('newlogin',{ })
});

router.post('/newlogin', function(req,res,next){
  const {Email , Pass} = req.body
  console.log("database result:" , "Emailid :",Email," Pass:", Pass);

  db.query(
    `SELECT * FROM user_data WHERE Email='${Email}' AND Password='${Pass}'`,
    function(err, results) {
      if(err)
      throw err;
      console.log("DB", results);
      const data= results;
      
      if ( data.length== 0){
        res.status(201).json({
            message:"fail",
            Response : "Login credentials are not found!"
        })
      }
      else{
        res.status(200).json({
            message:"success",
            Response : "You are now logged in!"
        })
      }
  }
  );
});

module.exports = router;
