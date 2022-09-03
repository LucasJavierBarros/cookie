module.exports = (req,res,next) => {

    if(req.session.userColor){
        res.locals.user = req.session.userColor
    }

    next()
}