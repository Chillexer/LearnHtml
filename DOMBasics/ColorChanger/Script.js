console.log("Connected!!!");
var div = document.querySelector("div")
var button = document.querySelector("button")
var toggle = true;
button.addEventListener("click", function() {
  if(toggle){
    toggle = !toggle;
    div.style.background = ("blue");
  }
  else {
    toggle = !toggle;
    div.style.background = ("white");
    }
})
