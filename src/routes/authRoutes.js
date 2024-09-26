// const express = require('express');
// const { register, login } = require('../controllers/authControllers');

// const router = express.Router();

// router.post('./register', register);
// router.post('./login', login);

// module.exports = router;


const express = require('express');
const { register, login } = require('../controllers/authControllers');

const router = express.Router();

router.post('/register', register); // Fixed the path
router.post('/login', login); // Fixed the path

module.exports = router;
