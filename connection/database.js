const mysql = require('mysql2')

const pool = mysql.createPool({
    host : 'localhost',
    database : 'nodejs-course',
    user : 'root',
    password : 'root1234'
})

module.exports = pool.promise();