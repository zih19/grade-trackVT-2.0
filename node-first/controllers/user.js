const User = require('../models/user');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const expressJwt = require("express-jwt");

exports.signup = (req, res) => {
   const errors = validationResult(req);
   
   if (!errors.isEmpty()) {
      return res.status(400).json({
        error: errors.array()[0].msg
      })
   }

   const user = new User(req.body);
   user.save((err, user) => {
      if (err) {
        return res.status(400).json({
            error: "Unable to add user"
        });
      }
     
      return res.json({
         message: "Success",
         user
      });
   });
}

exports.signin = (req, res) => {
   const {email, password} = new User(req.body);
   
   User.findOne({email}, (err, user) => {
       if(err || !user) {
          return res.status(400).json({
             error: "Email was not found!"
          })
       }
       
       // We need to authenticate the user: password = database
       if (!user.authenticate(password)) {
           return res.status(400).json({
             error: "Email and Password do not match"
           })
       }

       // Once both the email and the password are congruent, several functions like jwt-token
       // and cookie-parser must be performed efficiently.
       const token = jwt.sign({_id: user._id}, process.env.SECRET);

       // put the token into a cookie
       res.cookie('token', token, {expire: new Date() + 1});

       // send the response to the frontend
       const {_id, firstname, lastname, email} = user; // destructure the id, first name, last name, and email from the user
       return res.json({
          token,
          user: {
            _id,
            firstname,
            lastname,
            email
          }
       })
   })

}