import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  async function SaveGrade(req, res) {
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
      "INSERT INTO grades (sid,grade,courseid) VALUES ('"+sid+"', '"+grade+"', '"+cid+"');",
      function(err, results, fields) {
        // error handler
        if (err) {
          console.log(err);
          res.status(200).json("fail" + err.sqlMessage);
          return;
        } else {
          res.status(200).json("ok");
        }
      }
    );    
  },
  {
    cookieName: "myapp_cookiename",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);