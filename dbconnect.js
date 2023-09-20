const express=require("express");
const app=express();
const mongoose=require("mongoose");


const uri="mongodb://127.0.0.1:27017/ejscode";


mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connected");
})
.catch((err)=>{
    console.log(err);
})
app.listen((err)=>{
    if(!err)
    {
        console.log("listening on port 3000");
    }
})

