module.exports= (req,res,next) => {
    
    if (req.cookies.recordando) {
        req.session.userColor = req.cookies.recordando  
    }
    
    next();
}