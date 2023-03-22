export default function getEnrolledStudents(req, res) {

    console.log("get enrolled page ID for query " + req.query.id);

    let sid = req.query.id;
  
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
    "SELECT * FROM students where sid = '"+sid+"';",
    function(err, results, fields) {
        
        console.log("sending back the results");
        console.log(results);
        res.status(200).json(results);
    }
);

}