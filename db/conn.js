const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/cinnema",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is sussessful with mongo db")
}).catch((e)=>{
    console.log("no connection")
});