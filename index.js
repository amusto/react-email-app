// Common modules are better supported by Node over ES2016 modules
const express = require('express');
const app = express(); // Generates a running express app

app.get('/', (req, res) => {
    res.send({hi: "There Buddy!!!"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Running app on port: ${PORT}`));