var h1 = document.querySelector("h1");
var body = document.querySelector("body");
var isBlue = false;
setInterval(function(){
  if (isBlue)  {
    body.style.background = "white";
    h1.style.color = "white";
  } else {
    body.style.background = "black";
    h1.style.color = "black";
  }
  isBlue = !isBlue;
}, 1000/60);
