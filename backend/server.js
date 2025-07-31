const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [];

app.post('/register', (req, res) => {
    const { username, riskProfile, capital } = req.body;
    users.push({ username, riskProfile, capital });
    res.status(201).json({ message: 'Usuario registrado', user: { username, riskProfile, capital } });
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(3000, () => {
    console.log('Servidor backend en http://localhost:3000');
});