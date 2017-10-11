//Problem 3
//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

////NOT WORKING, BAD SOLUTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function primes(num){
  var primeList = [];
  function isPrime(num) {
    for (var i = 2; i < num; i++){
        if (num%i === 0){
          return false;
      } 
    }
        return true;
    
  }
  function addPrimes(num){
    for (var i = 2; i < num/2; i++){
    if (isPrime(i)){
      primeList.push(i);
    }
    }
  }

  //What the question asked is this part only:
  function largestFactor(num){
    var v = 2;
    anum = num;
      while (v <= anum) {
        if (anum%v ===0) {
          anum /= v;
        } else {
          v++;
        }
      }
       return v;
  }
           
  function test(){
    addPrimes(num);
    console.log(num + " is prime number: " + isPrime(num));
    console.log("List of primes up to "+ num+ ": " + primeList);
    console.log("The largest prime factor of "+num+": "+largestFactor(num));
   // console.log("All prime factors of "+num+": "+factorList);
  }
  test();
}

console.log("----");
primes(600851475143);