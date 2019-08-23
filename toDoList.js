/** Console Application
 *  Todo List

"new" - Add A Todo
"list" - View all todos
"quit" - Quit Application */

console.log("WELCOME to TODO LIST!");

var todos = [];
//ask what to do with help tip
var input = prompt("What would you like to do? type \"help\" for information:");
var index = -1;
while(input !=="quit")
{   //ask what to do
   
    if(input === "list")
    {
        console.log("*******************");   
        todos.forEach(function(item, index)
        {
            console.log(index + " "+ item);    
        });
        console.log("*******************");
        
    }
    else if (input ==="new")
    {
        //ask for new todo
        var newTodo = prompt("Enter new todo");
        //add to todos array
        todos.push(newTodo);
        console.log("New todo's item is added!");
    }
    else if(input === "delete")
    {
        //ask for index of todo's item
       index = prompt("Enter index of todo to delete");
       //delete one element
       todos.splice(index, 1);
       console.log(index + " item is deleted");
    }
    else if(input ==="help")
    {   //show help
        console.log("HELP type:");
        console.log("new - Add a Todo");
        console.log("list - List all Todos");
        console.log("quit - Close the application Todos");
    }
    //ask what to do
    input = prompt("What would you like to do?");
}
console.log("TODO Application is closed!");
