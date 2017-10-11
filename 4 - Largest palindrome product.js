//Problem 4
//A palindromic number reads the same both ways. 
//The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.

function palindrome(min, max){
  var a = max;
  var b = max;
  var list = [];
  function check(){
    var num = a * b;
    var anum = num.toString();
    if (anum === num.toString().split("").reverse().join("")){
      list.push(num);
      console.log(list);
      console.log("largest palindromic under 1000: " + num+ " = "+ a+" * "+b);
    } else {
      console.log("not palindrome " +num+ " = "+ a+" * "+b);
      if (a>min){
        a--;
      } 
      else {
        b--;
        a = max;
      } 
      check();
    }
  }
check();
  }
console.log("-----------");
palindrome(900, 999);