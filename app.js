const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello world');
});

app.get('/hello/:name', (req, res) => {
    res.status(200).send(`Hello, ${req.params.name}`);
});

app.listen(3000, () => console.log('server rodando na porta 3000'))