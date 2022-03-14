const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'm1AUMjwrV33sHmt!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;