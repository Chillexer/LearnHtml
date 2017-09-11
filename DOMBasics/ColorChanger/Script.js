console.log("Connected!!!");
var div = document.querySelector("div")
var button = document.querySelector("button")
var toggle = true;
button.addEventListener("click", function() {
  if(toggle){
    div.style.background = ("blue");
  } else {
    div.style.background = ("white");
    }
    toggle = !toggle;
})
