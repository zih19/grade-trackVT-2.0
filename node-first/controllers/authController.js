const User = require("../models/user");

const test = async(req, res) => {
     res.json('test is working')
}

const registerUser = async(req, res) => {
   try{
      const{FirstName, middleName, LastName, BirthDate, 
            Email, Phone, Gender, GraduationDate, UserName, Password,
            ConfirmedPassword} = req.body;
      // check if everything works correctly
      if (!FirstName) {
         return res.json({
            error: 'FirstName Required'
         })
      };
      
      if (!LastName) {
         return res.json({
            error: 'LastName Required' 
         })
      };
      
      if (!BirthDate) {
         return res.json({
            error: "BirthDate Required"
         })
      };
      
      if (!Email) {
         return res.json({
            error: "Email Required"
         })
      };

      if (!Phone) {
         return res.json({
            error: "Phone Required"
         })
      };

      if (!Gender) {
         return res.json({
            error: "Gender Required"
         })
      };

      if (!GraduationDate) {
         return res.json({
            error: "Graduation Date Required"
         })
      };

      if (!UserName) {
         return res.json({
            error: "Username Required"
         })
      };

      if (!Password) {
         return res.json({
            error: "Password Required"
         })
      }
      else if (Password.length < 6) {
         return res.json({
            error: "Password should have at least 6 characters long"
         })
      };

      if (!ConfirmedPassword) {
         return res.json({
            error: "ConfirmedPassword Required"
         })
      }
      else if (ConfirmedPassword != Password) {
         return res.json({
            error: "The password confirmed is not congruent with the password above."
         })
      }

      const existEmail = await User.findOne({Email})
      if (existEmail) {
         return res.json({
            error: "Email is already taken"
         })
      }


   }catch(error) {

   }
}

module.exports = {
   test,
   registerUser
}