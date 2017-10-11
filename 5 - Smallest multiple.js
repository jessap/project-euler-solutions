//Problem 5
//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
function smallestCommonMultiple(num){
  var numList = [];
  for (var j = 1; j <= num; j++){
    numList.push(j);
  }


  // leastCommonMultiple(m, n) = |m * n| / greatestCommonDivisor(m * n)

  /* GCD Implementation on an array of integers:
  function GCD(array) {
  var i, y,
      n = array.length,
      x = Math.abs(arr[0]);
 
  for (i = 1; i < n; i++) {
    y = Math.abs(array[i]);
 
    while (x && y) {
      (x > y) ? x %= y : y %= x;
    }
    x += y;
  }
  return x;
} 
*/


  var i, y,z,
      n = numList.length,
      x = Math.abs(numList[0]);
 
  for (i = 1; i < n; i++) {
    y = Math.abs(numList[i]);
    z = x;
    while (x && y) {
      (x > y) ? x %= y : y %= x;
    }
    x = Math.abs(z * numList[i] / (x + y));
  }
  return console.log(x);
  
}
smallestCommonMultiple(20);