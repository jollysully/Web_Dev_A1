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
    port: 3306,
    database: 'wse'
  });

    //res.status(200).json("ok");

    //catching the data entered on client side (register page)
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const address = req.body.address;
    const telephone = req.body.telephone;
    const sid = req.body.sid;
    
    

    console.log("firstname is: "+ firstname);
    console.log("lastname  is: "+ lastname);
    console.log("email is :" + email);
    console.log("address is:" + address);
    console.log("telephone is:" + telephone);
    console.log("enrolledin is:" + sid);
    

    
    // simple query
;

connection.query(
    
  "INSERT INTO `students` (firstname, lastname, email, address, telephone, sid) VALUES ('"+firstname+"','"+lastname+"','"+email+"','"+address+"','"+telephone+"','"+sid+"');",
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