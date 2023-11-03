// One of the files called user.js in the model folder tells you how the 
// user should behave in terms of email, password, and description.

const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

const user = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    lastName:{
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    encrypted_password: {
        type: String,
        required: true
    },
    salt: String,    // assist the implementation of the password encrypted
                     // which stands for the username
    
}, {timestamps: true}) // determine when the account is created 

user.virtual("password")
  .set(function(password){
    this._password = password;
    this.salt = uuidv1;
    this.encrypted_password = this.securePassword(password);
  })
  .get(function(){
     return this._password;
  })

user.methods = {
    authenticate: function(plainpassword){
       return this.securePassword(plainpassword) === this.encrypted_password;
    },
    securePassword: function(plainpassword){
        if(!plainpassword) return "";

        try{
           return crypto.createHmac("sha256", this.salt).update(plainpassword).digest("hex");
        }catch(err){
           return "";
        }
    }
}

module.exports = mongoose.model("User", user);