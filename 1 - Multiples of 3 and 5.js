//Problem 1
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
//The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.
function factors (num1, num2, startNum, lastNum){
  
  var countNum1 = 0;
  var countNum2 = 0;
  var list = [];
  var sum = 0;
  
  for (var i = startNum; i<lastNum; i++) {
    if (i%num1 ===0){
      list.push(i);
      countNum1 += 1;
    }
    else if (i%num2 ===0) {
      list.push(i);
      countNum2 += 1;
    }
  }
  for (var v=0; v<list.length; v++){
    sum += list[v];
  }
  function results(){
  console.log("Counts of " + num1 + ": " + countNum1 + " occurences");
  console.log("Counts of " + num2 + ": " + countNum2 + " occurences");
  console.log("Sum of all the multiples of " + num1 + " and " + num2 + " : " + sum);
  console.log("list of numbers from " + startNum + " to " + lastNum + ": "+ list);
  }
  results();
}
console.log("-----");
//factors(3, 5, 1, 10);
factors(3, 5, 1, 1000);