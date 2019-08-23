/** Console Application
 *  Todo List

"new" - Add A Todo
"list" - View all todos
"quit" - Quit Application */

console.log("WELCOME to TODO LIST!");

var todos = ["Buy new turtle"];
//ask what to do.
var input = prompt("What would you like to do?");

if(input === "list")
{
    console.log(todos);
}
else if (input ==="new")
{
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to todos array
    todo.push(newTodo);
}