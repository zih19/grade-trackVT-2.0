const express = require('express');
const router = express.Router();

const { signup, signin } = require("../controllers/user");
const {check} = require('express-validator')

router.post('/signup', [
    check("firstname", "Name at least should be 1 character").isLength({min:1}),
    check("lastname", "Name at least should be 1 character").isLength({min:1}),
    check("email", "Email should be valid").isEmail(),
    check("password", "Password should be at least 6 characters").isLength({min: 6}),
],signup);

router.post('/signin', signin);


module.exports = router;