const {check} = require('express-validator');

module.exports = [

    check('nombre')
        .notEmpty().withMessage('Debe ingresar su nombre').bail()
        .isLength({
            min : 3
        }).withMessage('Al menos 3 caracteres'),

    check('email')
        .notEmpty().withMessage('Debe ingresar su email').bail()
        .isEmail().withMessage('Formato incorrecto'),
    check('edad')
        .notEmpty().withMessage('Debe ingresar su edad').bail()
        .isNumeric({
            no_symbols: true
        }).withMessage('Debe ingresar un número'),
    check('color')
        .notEmpty().withMessage("Seleccione un color")

]