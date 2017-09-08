var h1 = document.querySelector("h1");
var body = document.querySelector("body");
var fps = prompt("How many Fps you want to show on screen?");
var first = 255;
var second = 255;
var third = 255;
var final = "rgb(" + first+", "+ second+ ", " + third + ")"
var red = [];
var green = [];
var blue = [];
h1.style.color = final;
var counter = 255;

for (var i = 0; i <= 1530; i++) {
  if (i <= 255 ) {
    red.push(255);
    green.push(i);
    blue.push(0);
  }
  else if (i <= 510){

    red.push(counter);
    counter --;
    green.push(255);
    blue.push(0);
  }
  else if (i <= 765) {
    red.push(0);
    green.push(255);
    counter ++;
    blue.push(counter);
  }
  else if (i <= 1020) {
    red.push(0);
    counter --;
    green.push(counter);
    blue.push(255);
  }
  else if (i <= 1275) {
    counter ++;
    red.push(counter);
    green.push(0);
    blue.push(255);
  }
  else {
    counter --;
    red.push(255);
    green.push(0);
    blue.push(counter);
  }
  console.log(counter);
}

var count = 0;
setInterval(function(){
  first = red[count];
  second = green[count];
  third = blue[count];
  var final = "rgb(" + first+", "+ second+ ", " + third + ")"
  h1.style.color = final;
  body.style.background = final;
  count ++;
  if(count === 1531){
    count = 0;
  }
}, 1000/fps);
