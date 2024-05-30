const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '82.180.143.28',
    user: 'u736231290_gameofskillspd',
    password: 'Sagar456@#',
    database: 'u736231290_gameofskillspd',
});

export default connection;