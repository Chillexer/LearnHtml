var guessed = false;
while(guessed == false)
{
var nr = Number(prompt("Guess a number between 0 and 10"));
var secretnr = 5;
if(nr < 0 || nr > 10)
{
  alert("Your number is not between 0 and 10")
}
else if(nr === secretnr)
{
    alert("You Guessed it!!!");
    guessed = true;
}
else if(nr < secretnr)
{
  alert("You Guessed To Low :)");
}
else
{
  alert("You Guessed To High :)");
}
}
