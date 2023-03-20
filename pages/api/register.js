import { Router } from 'next/router';

export default function handler(req, res) {
    console.log("register api page called...");

    console.log(req.body);

    const mysql = require('mysql2');

  // create the connection to database
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password12',
    port: 3307,
    database: 'wse'
  });

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const address = req.body.address;
    const telephone = req.body.telephone;
    
    

    console.log("firstname is: "+ firstname);
    console.log("lastname  is: "+ lastname);
    console.log("email is:" + email);
    console.log("address is :" + address);
    console.log("telephone is:" + telephone);
    

    // simple query
;

connection.query(
    
    "INSERT INTO `students` (firstname, lastname, email, address, telephone) VALUES ('"+firstname+"','"+lastname+"','"+email+"','"+address+"','"+telephone+"');",
    function(err, results, fields)
              {
                //error handler
                if (err) {
                  console.log(err);
                  res.status(200).json("fail" + err.sqlMessage);
  
                return
                }
  
                else {res.status(200).json("ok");}
     
  }
  )} 