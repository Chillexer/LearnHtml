var age =  Number(prompt("What is your age?"));
var squreroot = Math.round(Math.sqrt(age))
if(age < 0){
  console.log("error");
}
else if (age === 21){
  console.log("Happy 21st birthday");
}
else if (squreroot * squreroot === age){
  console.log("perfect square!");
}
else if (age % 2 !== 0){
  console.log("your age is odd");
}
