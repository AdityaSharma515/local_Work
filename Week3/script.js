let todo=[];
function addelement(){
    todo.push({
        title:document.querySelector("input").value
    })
    render()
}
function DeleteLastTodo() {
    todo.splice(-1,1);
    render();
}
function DeleteFirstTodo() {
    todo.splice(0,1)
    render();
}
function DeleteTodo(index){
    todo.splice(index,1);
    render();
}


function todocompnent(todo,index) {
    const div=document.createElement("div");
    const span=document.createElement("span");
    const button=document.createElement("button");
    button.innerHTML="Delete";
    button.setAttribute("onclick","DeleteTodo("+index+")");
    span.innerHTML=todo.title;
    div.append(span);
    div.append(button);
    return div;
}

function render() {
    document.querySelector("#Todo").innerHTML="";
    for (let i = 0; i < todo.length; i++){
        const element = todocompnent(todo[i],i);
        document.querySelector("#Todo").appendChild(element);
    }
}