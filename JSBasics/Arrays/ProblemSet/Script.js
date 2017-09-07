function reverse(arr) {

  for (var i = arr.length - 1; i >= 0 ; i--) {
    console.log(arr[i]);
  }
}
function uniform(arr) {
  var first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if(arr[i] !== first){
      return false;
    }
  }
  return true;
}
function sum(Sum) {
  var sum = 0;
  Sum.forEach(function (data, i) {
    sum += data;
  })
  return sum;
}
function max(Max) {
  var sum = Max[0];
  Max.forEach(function (data, i) {
    if (sum < data) {
      sum = data;
    }
  })
  return sum;
}
