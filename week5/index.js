const express= require("express");
const axios= require("axios");
const app=express();

app.get("/multiply",function(req,res){
    const a=req.query.a;
    const b=req.query.b;
    const ans=a*b;
    res.json({ans});
})

app.get("/add",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    const ans=a+b;
    res.json({ans});
})
app.get("/Divide",function(req,res){
    const a=req.query.a;
    const b=req.query.b;
    const ans=a/b;
    res.json({ans});
})
app.get("/Subtract",function(req,res){
    const a=req.query.a;
    const b=req.query.b;
    const ans=a-b;
    res.json({ans});
})

app.listen(3000);