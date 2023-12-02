const mongoose = require("mongoose");
const {schema} = mongoose;

const userSchema = new Schema({
    FirstName: String,
    MiddleName: String,
    LastNamae: String,
    BirthDate: String,
    Email: {
        String,
        unique: true
    },
    Phone: {
        String,
        unique: true
    },
    Gender: String,
    GraduationDate: String,
    Username: {
        String,
        unique: true
    },
    Password: String,
    ConfirmedPassword: String,
})

const userModel = mongoose.model('User', userSchema);
module.exports = userModel; 