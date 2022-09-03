var express = require('express');
var router = express.Router();

const {index,msgController,exit,msg,reset} = require('../controllers/indexController')

const sessionValidation = require('../validations/sessionValidation')
/* GET home page. */
router
    .get('/', index)
    
    .post('/',sessionValidation,msgController)

    .get('/salir', exit)
    
    .get('/mensaje', msg)

    .get('/reset',reset)
module.exports = router;
