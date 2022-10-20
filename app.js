const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs')

app.set('views', './views')

app.get('/', (req, res) => {

    res.render('home');
});


app.get('/about', (req, res) => {

    res.render('about');
});

app.get('/contact', (req, res) => {

    res.render('contact');
});

app.listen(port, ()=> console.log( `Notre app est lancée sur : http://localhost:${port}`)) 