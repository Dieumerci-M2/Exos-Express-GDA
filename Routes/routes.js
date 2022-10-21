const express = require('express')

const router = express.Router();

const btn1 = 'Home' 
const btn2 = 'About'
const btn3 = 'Contact'
const title = 'backend'

router.get('/', (req, res)=>{
    res.render('home', {btn2, btn3, title}); 
})

router.get('/about', (req, res) => {

    res.render('about', {btn1, btn3, title});
});

router.get('/contact', (req, res) => {

    res.render('contact', {btn1, btn2, title});
});

module.exports = router
