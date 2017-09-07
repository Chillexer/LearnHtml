var todos = ["Turtle", "Cat", "Dog"];
listTodos();
app();
function app() {
while(input !== "quit"){
  var input = prompt("What would you like to do?");
  if(input === "list") {
    listTodos();
  }
  else if (input === "delete") {
    deleteTodos();
    listTodos();
  }
  else if (input === "new") {
    newTodos();
    listTodos();
    }
  }
  console.log("Ok, YOU QUIT THE APP");
}
function deleteTodos() {
  var index = prompt("Enter the index of the todo to remove");
  var name = todos[index];
  todos.splice(index, 1);
  console.log(name + " Have been deleted");
}

function listTodos() {
  console.log("*************");
todos.forEach(function(todo, i){
console.log(i + ": " + todo);
});
  console.log("*************");
}
function newTodos() {
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
}
