const express = require('express')
const verifyToken  = require('../middlewares/authMiddlewares')
const authorizeRoles = require('../middlewares/roleMiddlewares')

const router = express.Router()

//Only  admin
router.get('/admin', verifyToken, authorizeRoles("admin"), (req, res) => {
    res.json({message: "Wellcome Admin"});
})

//Both admin and manager
router.get('/manager', verifyToken, authorizeRoles("admin", "manager"), (req, res) => {
    res.get({message: "Wellcome Admin"});
})

//All can access
router.get('/user', verifyToken, authorizeRoles("admin", "manager", "user"), (req, res) => {
    res.json({message: "Wellcome User"});
})

module.exports = router