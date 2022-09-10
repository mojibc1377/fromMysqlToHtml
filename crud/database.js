const mysql = require('mysql')
const conn = mysql.createConnection({
    host : 'localhost',
    database : 'test',
    user : 'root',
    password : '',
    port : 4306

});
 conn.connect(function(error){
    if (error){
        throw error;
    }
    else{
        console.log('the script has connected to database successfuly ');
    }
 });
 module.exports = conn;

