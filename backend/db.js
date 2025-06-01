const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456', // tu contraseña
    database: 'parcial_db',
    port: 3306 // Puerto correcto de MySQL
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la BD:', err);
    } else {
        console.log('Conectado a la BD MySQL ✅');
    }
});

module.exports = connection;
