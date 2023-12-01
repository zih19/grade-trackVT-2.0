/* API endpoints for router */
const express = require("express");
const router = express.Router(); // This function allows us to use the router 
                                 // inside the router foder.
const cors = require("cors");
const {test, registerUser} = require('../controllers/authController');

// middleware
router.use(
    cors({
        credential: true,
        origin: 'http://localhost:7000'
    })
);

router.get('/', test);
router.post('/register', registerUser);

module.exports = router;