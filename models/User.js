const mongoose = require("mongoose");
const RegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:String
})
//we will create a new collection
module.exports = mongoose.model("User",RegisterSchema)
//faaltoo comment
//second comment