function isEven(Num) {
  if(Num % 2 === 0)
  return true;
  else
  return false;
}
function factorial(Num){
if(Num === 0)
{
  return 1;
}
for (var i = Num - 1; i > 0; i--) {
  Num *=i;
}
  return Num;
}
function kebabToSnake(str) {
var stri = 0;
while(stri >= 0)
{
  str = str.replace("-","_");
  stri = str.indexOf("-");
}
return str;
}
