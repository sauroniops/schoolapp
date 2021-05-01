const express = require("express");
const app = express();
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 100,
    host     : '192.168.64.2',
    user     : 'jake',
    password : 'password',
    database : 'ffcoupons',
    // debug    :  false
});


function queryRow(tableName) {

    // let selectQuery = 'SELECT * FROM ?? WHERE ?? = ?';
    // let query = mysql.format(selectQuery,["restpic","dop", userName]);

    let selectQuery = 'SELECT * FROM ??';
    let query = mysql.format(selectQuery,[tableName]);

    pool.query(query,(err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows fetch
        // for(let now in data[0]){
        //     console.log(now);
        // }
        console.log(data[1]['alt']);
    });
}

setTimeout(() => {
    queryRow('restpic');
},5000);

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});



