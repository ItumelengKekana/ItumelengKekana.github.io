const express = require('express')
const router = express.Router();


router.get('/', function(req, res){
    res.render('main/home')
})

router.get('/projects', function(req, res){
    res.render('main/projects')
})

router.get('/education', function(req, res){
    res.render('main/education')
})


module.exports = router;