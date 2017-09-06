var answer = "";
while((answer.indexOf("yes") === -1) && (answer.indexOf("yay") === -1)) {
answer = prompt("Are We There Yet?");
if (answer.indexOf("yes") > -1 || answer.indexOf("yay") > -1) {
  alert("YAY, We made it!");
}
}
