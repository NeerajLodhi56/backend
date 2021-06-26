const router = require("express").Router();
const Register = require("../models/Register")
//add new register
router.post("/",async(req,res)=>{
    const register = new Register({
        firstName : req.body.firstName, 
        lastName : req.body.lastName,
        email : req.body.email
    });
    try{
        const savedRegister = await register.save();
        res.send(savedRegister);
    }catch(error){
        res.status(400).send(error);
    }
})
//get all register user
router.get("/",async(req,res)=>{
    try{
        const registers = await Register.find();
        res.json(registers)
    } catch (error){
        res.json({message:error});
    }
})
module.exports = router