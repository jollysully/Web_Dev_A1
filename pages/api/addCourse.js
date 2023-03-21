import { Router } from 'next/router';

export default function handler(req, res) {
    console.log("addcourse api page called...");

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
    const Title = req.body.Title;
    const Description = req.body.Description;
    const nfq = req.body.nfq;
    const courseyear = req.body.courseyear;
    

    console.log("Title is: "+ Title);
    console.log("Description  is: "+ Description);
    console.log("nfq is :" + nfq);
    console.log("courseyear is:" + courseyear);
    
    // simple query
;

connection.query(
    
  "INSERT INTO `courses` (Title, Description, nfq, courseyear) VALUES ('"+Title+"','"+Description+"','"+nfq+"','"+courseyear+"');",
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