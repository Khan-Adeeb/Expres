var express = require('express');
var router = express.Router();
var data= require('../public/javascripts/list');
 //import data from "../public/javascripts/list";
var db=require('../config/database');
const { log } = require('console');

 /* GET home page. */

router.get('/', function(req, res, next) {
  db.query(
    'SELECT * FROM `users`',
    function(err, results) {
      if(err)
      throw err;
      console.log(results);
      const data= results;
    res.render('index', { title: 'Student Details' , data:data});
  }
  );
});




// router.get('/abc', function(req, res){
//   res.render('contact', { Heading: 'Contact', Name: 'adeeb', Number:'4328765567'})
// });

// router.get('/Home', function(req, res){
//   res.render('Home', { Heading: 'this is home'})
// });

// router.get('/About', function(req, res){
//   res.render('About', { Paragraph: "fcgfhbdgvcusdjghcv dhh khsbdgfcvbjhsdgchv as as gcuhgashgcfhgvjhkajhdbcbn dshvvgjchvdjsghv chvfg"})
// });

// router.get('/Form', function(req, res){
//   res.render('Form', { })
// });

// router.post('/login', function(req,res){ 
//   // const data= req.body;
//   // console.log(data);

//   const {name, father} = req.body
//   res.render("submit", {name:name,father:father});
//   console.log();

// });


// //----------search------------

// router.get('/search', function(req, res){
//   const{querry}= req.query;
//   const dumb = data.getcountries( );
//   console.log('searching data',dumb);
  
//   function searching(dumb) {
//     if (dumb.continent==querry) {
//       return data0.push(dumb.country);
//     } else {
//       return "data does not exist";
//     }
//   }
//   let data0= []
//   let data1 = dumb.forEach (searching) ;
//   res.render("search",{search:data0 });
// });

// //------query parameter------

// router.get("/profile/:name" , function(req, res){
//   let data= req.params.name;

//   res.render("profile" ,{name:data} )
// })

module.exports = router;


