const mysql = require('mysql');
// MYSQL

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    // password: ' ',
    database: 'hand2mart_prototype'
});


export default pool;