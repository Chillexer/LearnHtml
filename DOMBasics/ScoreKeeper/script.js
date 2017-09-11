var p1btn = document.querySelector("#p1");
var p2btn = document.querySelector("#p2");
var resetbtn = document.querySelector("#reset");
var p1 = document.querySelector("#p1Score");
var p2 = document.querySelector("#p2Score");
var numInput = document.querySelector("input");
var p = document.querySelector("#p");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
numInput.value = winningScore;
p1btn.addEventListener("click", function() {
  if(!gameOver){
    p1Score ++;
    if(p1Score === winningScore){
      gameOver = true;
        p1.style.color = "lightgreen";
    }
    p1.textContent = p1Score;
  }
})
p2btn.addEventListener("click", function() {
  if(!gameOver){
    p2Score++
    if(p2Score === winningScore){
      gameOver = true;
      p2.style.color = "lightgreen";
    }
    p2.textContent = p2Score;
  }
})
resetbtn.addEventListener("click", function() {
  reset();
})
numInput.addEventListener("change", function() {
  winningScore = Number(numInput.value);
  p.textContent = winningScore;
  reset();
})
function reset() {
  p2Score = 0;
  p1Score = 0;
  p2.textContent = "0";
  p1.textContent = "0";
  gameOver = false;
  p1.style.color = "black";
  p2.style.color = "black";
}
