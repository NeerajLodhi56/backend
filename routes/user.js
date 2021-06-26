const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require("bcryptjs")
//add new user
router.post("/",async(req,res)=>{
    //checking useremailId in database
    const emailExists = await User.findOne({
        email:req.body.email
    });
    if(emailExists)return res.status(400).send("email already exists")

    //has password
const salt = await bcrypt.genSalt(10)
const hasedPassword = await bcrypt.hash(req.body.password,salt)
    const user = new User ({
    name : req.body.name, 
    email : req.body.email,
password : hasedPassword
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(error){
        res.status(400).send(error);
    }
})
//get all  users
router.get("/",async(req,res)=>{
    try{
        const users = await User.find();
        res.json(users)
    } catch (error){
        res.json({message:error});
    }
})
module.exports = router;