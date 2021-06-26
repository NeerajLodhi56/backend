const mongoose = require("mongoose");
const RegisterSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
})
//we will create a new collection
module.exports = mongoose.model("Register",RegisterSchema)