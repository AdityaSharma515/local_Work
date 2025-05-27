const fs=require("fs");
const { Command } = require('commander');
const program = new Command();

program
  .name('Todo')
  .description('CLI to Todo app')
  .version('0.8.0');

program.command('add_todo')
  .description('Add the todo in list')
  .argument('<file>',"file to count")
  .action((file) => {
    fs.readFile(file,"utf-8",(error,data)=>{
        if (error) {
            console.log("got a error");
        }
        else{
            const value=data.split(" ").length;
            console.log(value);
        }
    })
  });

program.parse();