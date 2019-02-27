var mysql = require('mysql');

const database = 'cholon_dev';

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database
});

con.connect(function(err) {
  if (err) console.log(`Error: ${err}`);
  console.log("Connected!");
});

exports.connection = con;

exports.endConnection = () => {
    con.end((error) => {
        if (error) console.log(`Could not disconnect database due to ${error}`);
        else {
            con = null;
            console.log(`${database} disconnected successfully!`);
        }
    });
}