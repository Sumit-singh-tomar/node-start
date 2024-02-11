const Sequelize = require('sequelize')

const sequelize = new Sequelize('nodejs-course', 'root', 'root1234', {
    dialect:'mysql',
    host:'localhost',
})

module.exports = sequelize;



// const mysql = require('mysql2')

// const pool = mysql.createPool({
//     host : 'localhost',
//     database : 'nodejs-course',
//     user : 'root',
//     password : 'root1234'
// })

// module.exports = pool.promise();