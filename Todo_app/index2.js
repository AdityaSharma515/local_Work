const express= require("express");


let todo =[{
    title:"Go To Gym"
},{
    title:"Sleep at 9PM"
}];

const app=express();
app.use(express.json());
app.get("/",function(req,res){
    let Todos=[];
    for (let i = 0; i < todo.length;i++) {
         Todos[i] = todo[i].title; 
    }
    res.json({
        Todos
    });
});

app.post("/",function (req,res){
    const addTodo=req.body.addTodo;
    todo.push({
        title: addTodo
    });
    res.json({smg:"DOne!"});
});

app.put("/",function(req,res){
    let newTodo=[];
    const value=req.body.index;
    const edit=req.body.newtitle;
    for (let i = 0; i < todo.length; i++) {
        if (i===value-1) {
            newTodo[i]={title:edit};
        }
        else{
            newTodo[i]=todo[i];
        }
        
    }
    todo=newTodo;
    res.json({})
})

app.delete("/",function(req,res){
    let newTodo=[];
    const value=req.body.index;
    
    for (let i = 0; i < todo.length; i++) {
        if (i===value-1) {
            continue;
        }
        else{
            newTodo[i]=todo[i];
        }
        
    }
    todo=newTodo;
    res.json({})
})


app.listen(3000);