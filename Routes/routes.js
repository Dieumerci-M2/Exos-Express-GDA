const express = require('express')

const router = express.Router();
const title = 'Backend'
router.get('/', (req, res)=>{
    res.render('home', {btn2 : 'About', btn3: 'Contact', title}); 
})

router.get('/about', (req, res) => {

    res.render('about', {btn1 : 'Home', btn3: 'Contact', title});
});

router.get('/contact', (req, res) => {

    res.render('contact', {btn1: 'Home', btn2: 'About', title});
});

module.exports = router
