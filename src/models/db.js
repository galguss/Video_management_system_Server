const mySql = require('mysql2');

const pool = mySql.createPool({
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE
});
    
module.exports = pool.promise();