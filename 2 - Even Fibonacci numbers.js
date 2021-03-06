//Problem 2
//Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
//By starting with 1 and 2, the first 10 terms will be:
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
//find the sum of the even-valued terms.
function fibonacci(maxValue) {
  var list = [1, 2];
  var sum = list[0] + list[1];
  var sumOfEven = 0;
  var element = 0;
  for (element; list[element] <= maxValue; element++){
    if (list[element]+list[element+1] <= maxValue){
      list.push(list[element]+list[element+1]);
      sum += list[element+2];
    }
  }
  for (var i = 0; i < list.length; i++ ){
    if (list[i]%2 ===0){
      sumOfEven += list[i];
    }
  }
  function test(){
    console.log("Fibonacci sequence whose values don't exceed " +maxValue+ ": " +list);
    console.log("The sum of the Fibonacci sequence: " + sum);
    console.log("The sum of all even numbers: " +sumOfEven);
  }
  test();
}
console.log("----");
fibonacci(4000000);