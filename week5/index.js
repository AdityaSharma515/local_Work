const express= require("express");
const cors=require("cors")
const app=express();
app.use(express.json());
app.use(cors());

app.post("/add",function(req,res){
    const a=parseInt(req.body.a);
    const b=parseInt(req.body.b);
    const ans=a+b;
    console.log(ans);
    res.json({ans});
})
// app.get("/Divide",function(req,res){
//     const a=req.query.a;
//     const b=req.query.b;
//     const ans=a/b;
//     res.json({ans});
// })
// app.get("/Subtract",function(req,res){
//     const a=req.query.a;
//     const b=req.query.b;
//     const ans=a-b;
//     res.json({ans});
// })

app.listen(3000);