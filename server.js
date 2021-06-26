const express = require("express");
const app = express();

const cors = require('cors');
require("./db/conn")
//imports routes
const registerRoutes = require("./routes/register")
const userRoutes = require("./routes/user")
//implements cors
app.use(cors());

//middleware
app.use(express.json());
//route middlware
app.use("/api/register",registerRoutes)
app.use("/api/user",userRoutes)
app.listen(3000,(req,res)=>{
    console.log('app is listning on port 3000')
})