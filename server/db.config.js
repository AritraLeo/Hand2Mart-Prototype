const mysql = require('mysql');

const dbConn = mysql.createConnection({
    // connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    // password: '',
    database: 'hand2mart_prototype'
});

// dbConn.connect((err) => {
    // if (error) {
    //     console.error('error connecting: ' + err.stack);
    //     // throw error;
    // }
    dbConn.on('error', function(err) {
  console.log("[mysql error]",err.stack);
});

    // else
    console.log("DB Connected");
// })


module.exports = dbConn;