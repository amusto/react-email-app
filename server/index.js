// Common modules are better supported by Node over ES2016 modules
const express = require('express');
const app = express(); // Generates a running express app

app.get('/', (req, res) => {
    res.send({hi: "there"});
});
app.listen(5000, console.log('Running app on port: 5000'));