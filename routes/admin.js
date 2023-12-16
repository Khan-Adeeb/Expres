var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', authenticate ,function(req, res) {
//   res.send('resource');
// });

// // route.get('/kid/delete',authenticate, function(req,res){

// // });


// function authenticate(req,res,next){
//   const data= req.query.admin;
//   console.log('query ',data);
//   if(data==="true"){
//     console.log('he is admin')
//     next();
//   }
//   else{
//     res.send('you cannot access this page.')
//   }
// }



router.get('/card', function(req,res){
  res.render('card')
});

router.post('/card', checker, function(req, res){
    res.status(200).json({
        message:"success",
        Response : "You are now logged in!"
    })
});

function checker(req,res,next) {
    const idmail= req.body.Email;
    const idselect= req.body.Select;
    console.log("mail : " , idmail , "Framework : ", idselect);
    
    if((idmail && idselect) == ""){
        res.status(400).json({
        message : "error" ,
        Response : "Please enter details"
      })
    }
    else{
      next();
    }
}
    

module.exports = router;
