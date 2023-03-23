export default function handler(req, res) {

    console.log("login api page called...");
   
  
  
    // Get just the username and password and put them into variables.
    const username = req.body.username;
    const pass = req.body.password;
  
    console.log("username is: "+ username);
    console.log("password  is: "+ pass);

    var validator = require('validator');
  validator.isAscii(username);

  var testResult1 = validator.isAscii(username);
  console.log("is ascii username: " + testResult1);

  var testResult2 = validator.isEmpty(username);
  console.log("username is blank: " + testResult2);

  var testResult3 = validator.isEmail(username);
  console.log("is username a email: " + testResult3);

  var testResult4 = validator.isURL(username);
  console.log("is username a URL: " + testResult4);

  var testResult5 = validator.isLowercase(username);
  console.log("is username lowercase: " + testResult5);



  //pass
  var testResult6 = validator.isEmpty(pass);
  console.log("Password is blank: " + testResult6);

  var testResult7 = validator.isURL(pass);
  console.log("is password a URL: " + testResult7);
  
  if(testResult1 == true && testResult2 == false && testResult3 == false && testResult4 == false && testResult5 == true && testResult6 == false && testResult7 == false) {
    // get the client
    const mysql = require('mysql2');



    // create the connection to database
    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password12',
    port: 3306,
    database: 'wse'

});

connection.query(
    "SELECT * FROM adminlogin WHERE username = '"+username+"' and pass = '"+pass+"' LIMIT 1;",
    function(err, results, fields) {
        
        if(results.length ==1){
            res.status(200).json("ok");

        } else {
            res.status(200).json("fail");
        }
    }
);

}   else {res.status(200).json("not valid please try again..");}
}