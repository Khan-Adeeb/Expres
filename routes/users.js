var express = require('express');
var router = express.Router();
var db=require('../config/database');
const multer = require('multer');
const path= require('path');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/userform', function(req,res){
//   res.render('userform');
// });

// router.post('/userform', function(req, res){
//   // const {email, name , pass} = req.body
//   // console.log("name:", name, "Emailid :",email," Pass:", pass);
//   const mailid= req.body.Email;
//   const passid= req.body.Pass;
//   const nameid= req.body.Name;
//   // console.log("Email:", mailid , " Pass:",passid , " Name:",nameid );
//   db.query(
//     `INSERT INTO user_data( Username, Password, Email) VALUES ('${nameid}','${passid}','${mailid}')` ,
//     function(err, results) {
//       if(err)
//       throw err;
//       console.log(results);
//       const data= results;
//       res.status(200).json({
//         message:"success",
//         Response : "You are now logged in!"
//     })
//   }
//   );
// });



///------------MULTER----------------///
router.get('/multer', function(req,res){
  res.render('Multer');
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images'); // Specify the destination directory here
  },
  filename: (req, file, cb) => {
    // You can customize the filename if needed
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage })

router.post('/multer' , upload.single('avatar'), function(req,res,next){
  console.log('file',req.file);
  
  const supportedFiles= ['image/png', 'image/jpeg' , 'application/pdf'];
  const includes = supportedFiles.includes(req.file.mimetype);

  if(includes){
    res.status(202).json({
      message:"sucess"
    })
  }
  else{
    res.status(505).json({
      message:"File not supported"
    })
  }
  
  const data1= req.body.name;
  const data2= req.file.filename;
  
  db.query(
    `INSERT INTO multer (name, path) VALUES ('${data1}','${data2}')`,
    function(err,results){
      if(err)
      throw err;
    const data= results;
    console.log(results);
    }
  );
})



module.exports = router;
