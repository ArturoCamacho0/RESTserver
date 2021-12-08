require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('Hello world');
});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});