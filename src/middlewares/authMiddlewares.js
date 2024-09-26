const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1];
    }
    if (token == null) return res.status(401).json({ message: 'You are token authorization denied'})
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decoded;
            console.log('The decoded user is :' , req.user);
            next();
        } catch (error) {
            res.status(400).json({message : "Token is not valid"})
        }
        
}

module.exports = verifyToken;