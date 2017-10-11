///Problem 9
//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//a^2 + b^2 = c^2
//For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.
function pythagorean(sum){
/* -------
a2 + b2 = c2;
a + b + c = sum;
  -------
c=sum-(a+b);
Math.pow(a,2)+Math.pow(b,2)=Math.pow(sum-(a+b),2);  --->c inserted in pythagoras

Math.pow(a,2)+Math.pow(b,2)=Math.pow(sum,2)-Math.pow(2*sum*(a+b)+(a+b),2);
Math.pow(a,2)+Math.pow(b,2)=Math.pow(sum,2)-2*sum*(a+b)+Math.pow(a,2)+2*a*b+Math.pow(b,2);  ---(deduct Math.pow(a,2)+Math.pow(b,2) both sides)
0=Math.pow(sum,2)-2*sum*(a+b)+2*a*b;    
2*sum*(a+b)-2*a*b=Math.pow(sum,2);      ---/divide by 2
sum*(a+b)-a*b=(Math.pow(sum,2))/2;      ---factorise
a(sum-b)+sum*b=(Math.pow(sum,2))/2;
a(sum-b)=(Math.pow(sum,2))/2-sum*b;

a=(((Math.pow(sum,2))/2-sum*b))/(sum - b);
*/
  
var a,
    b,
    c;

for (b=1; b<sum; b+=1) {
    a=(((Math.pow(sum,2))/2-sum*b))/(sum-b);

    if (Math.floor(a) === a) {
        c=sum-(a+b);
      break;
    }
}	
console.log("a = " +a+ ", " + "b = " +b+ ", " + "c = " +c);
console.log("a + b + c = " + (a+b+c));
console.log(a+ "^2 + " +b+ "^2 = " +c+ "^2 =");
console.log(Math.pow(a,2)+ " + " +Math.pow(b,2)+ " = "+Math.pow(c,2));
console.log("The product of a*b*c = " + (a*b*c));
}
pythagorean(12);
pythagorean(1000);