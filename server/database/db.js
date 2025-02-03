const mysql = require('mysql2');

// Создание подключения
const connection = mysql.createConnection({
    host: 'localhost',  // Если БД работает на локальной машине
    user: 'root',       // Пользователь MySQL
    password: '6639', // Твой пароль
    database: 'ourgame'  // Имя базы данных
});

// Проверка подключения
connection.connect(err => {
    if (err) {
        console.error('Ошибка подключения к БД:', err);
        return;
    }
    console.log('Успешно подключено к базе данных');
});
