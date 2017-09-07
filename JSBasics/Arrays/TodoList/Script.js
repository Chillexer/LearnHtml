var todos = [];
app();

function app() {
while(input !== "quit"){
  var input = prompt("What would you like to do?");

  if(input === "list") {
    console.log(todos);
  }
  else if (input === "rem") {
    var remTodo = prompt("Enter the todo you want to remove");

    var index = todos.indexOf(remTodo);

    todos.pop(index);
  }
  else if (input === "new") {
    var newTodo = prompt("Enter new todo");

    todos.push(newTodo);
    }
  }
  console.log("Ok, YOU QUIT THE APP");
}
