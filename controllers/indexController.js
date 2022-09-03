const {
    validationResult
} = require("express-validator");

module.exports = {
    index: (req, res) => {
        const bandera = false
        res.render("index",{bandera})
    },

    msgController: (req, res) => {
        let errors = validationResult(req);
        
        if (errors.isEmpty()) {

            req.session.userColor = req.body;
            res.locals.user = req.session.userColor;  
            
            if (req.body.recordar == "on") {
                res.cookie('recordando',req.session.userColor,{maxAge : 1000 * 60})
            }
            const bandera = true
            res.render("index",{bandera});

        } else {
            res.render("index", {
                errors: errors.mapped(),
                old: req.body,
            });
        }
    },
    exit: (req, res) => {
        req.session.destroy();
        res.redirect('/')
    },
    msg: (req, res) => {
        res.render("mensaje");
    },
    reset : (req,res) => {
        
        res.clearCookie('recordando')
        req.session.destroy();
        res.redirect('/')
        
    }
};