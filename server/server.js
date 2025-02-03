const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Отдаём статику из папки build
app.use(express.static(path.join(__dirname, 'client/build')));

// Обработка всех других запросов (для React Router)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
