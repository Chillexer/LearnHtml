var number = "-10";
  console.log("Numbers Between -10 and 19");
  while (number < 20) {
    console.log(number);
    number++;
}
number=10;
console.log("Even Numbers Between 10 and 40");
while (number < 41) {
  if (number % 2 === 0)
  {
    console.log(number);
  }
  number++;
}
number = 300;
console.log("Odd Numbers Between 300 and 333");
while (number < 334) {
  if (number % 2 !== 0)
  {
    console.log(number);
  }
  number++;
}
number = 5
console.log("Numbers Between 5 and 50 that is divisible by 5 and 3");
while (number < 50) {
  if ((number % 5 === 0) && (number % 3 === 0))
  {
    console.log(number);
  }
  number++;
}
