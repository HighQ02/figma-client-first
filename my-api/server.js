const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware для обработки JSON
app.use(cors());
app.use(express.json());

// Данные (вместо файла используем массив в памяти)
const users = [
    { id: 1, name: 'Leanne' , lastname: 'Graham', email: 'Sincere@april.biz' },
    { id: 2, name: 'Ervin', lastname: 'Howell', email: 'Shanna@melissa.tv' },
    { id: 3, name: 'Clementine' , lastname: 'Bauch', email: 'Nathan@yesenia.net' },
];

// Получить всех пользователей
app.get('/users', (req, res) => {
  res.json(users);
});

// Добавить нового пользователя
app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Это сервер в котором будет хранится api, и перед этим необходимо скачать npm install express cors