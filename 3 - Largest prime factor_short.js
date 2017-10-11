//Problem 3
//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?
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
  console.log(v);
}
console.log("----");
largestFactor(600851475143);