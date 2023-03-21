export default function SaveGrade(req, res) {

 
    const cid = req.body.cid;
    const sid = req.body.sid;
    const grade = req.body.grade;


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
        "INSERT INTO grades (sid,courseid,grade) VALUES ('"+sid+"','"+cid+"','"+grade+"');",
        function(err, results, fields) {
            
            //error handler
            if (err) {
                console.log(err);
                res.status(200).json("fail" + err.sqlMessage);
              return
              }

              else {res.status(200).json("ok");}

            //console.log(results);
            //res.status(200).json(results);

        }
    );
       
 
     
     
     

}
