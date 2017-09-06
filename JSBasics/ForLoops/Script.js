console.log("Numbers Between -10 and 19");
  for (var i = -10; i < 20; i++) {
      console.log(i);
    }
    console.log("Even Numbers Between 10 and 40");
    for (var i = 10; i < 41; i++) {
      if (i % 2 === 0)
      {
        console.log(i);
      }
      }
console.log("Odd Numbers Between 300 and 333");
for (var i = 300; i < 334; i++) {
  if (i % 2 !== 0)
  {
    console.log(i);
  }
}
console.log("Numbers Between 5 and 50 that is divisible by 5 and 3");
for (var i = 5; i < 50; i++) {
  if ((i % 5 === 0) && (i % 3 === 0))
  {
    console.log(i);
  }
}
