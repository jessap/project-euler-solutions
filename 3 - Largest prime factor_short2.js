//Problem 3
//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?
function largestFactor(num){
  var v = 2;
  var pList = [];
  anum = num;
  while (v <= anum) {
    if (anum%v ===0) {
      pList.push(v);
      anum /= v;
    } else {
      v++
    }
  }
  console.log("The prime factors of " + num + ": "+ pList + " of which the largest prime factor is: " + v+ ".")
}
console.log("----");
largestFactor(13195);
largestFactor(600851475143)