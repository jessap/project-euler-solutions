//Problem 7
//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the 10 001st prime number?

function primes(num){
var primeList = [2, 3], 
    x = 4; 
    function isPrime(x) {
    for (var i = 2; i < x; i++){
        if (x%i === 0){
          return false;
      } 
    }
        return true;
   }
      while (primeList.length <= num) {
          if (isPrime(x)){
            primeList.push(x);
          } x++;
        } 
  
  console.log("The "+ num+ "th/st prime number is " + primeList[num-1]);
}
primes(6);
primes(10001);