import { Router } from 'next/router';

export default function handler(req, res) {
    console.log("addCourse api page called...");

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

    const Title = req.body.Title;
    const Description = req.body.Description;
    const NFQ = req.body.NFQ;
    const courseyear = req.body.courseyear;
      

    console.log("Title is: "+ Title);
    console.log("Description  is: "+ Description);
    console.log("NFQ is:" + NFQ);
    console.log("courseyear is :" + courseyear);
    
    

    // simple query
;

connection.query(
    
    "INSERT INTO `courses` (Title, Description, NFQ, courseyear) VALUES ('"+Title+"','"+Description+"','"+NFQ+"','"+courseyear+"',);",
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
  )}; 