const express = require('express');
const app = express();
const port = 8000;

// Use ejs engine

app.set('view engine', 'ejs')

app.set('views')

// Route prefix

app.use("", require('./Routes/routes'))

app.listen(port, ()=> console.log( `Notre app est lancée sur : http://localhost:${port}`)) 