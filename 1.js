// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

console.log(getSumOfMultiplicators(1000,[3,5]));

function getSumOfMultiplicators(boundary, multiplicators){
  let sum = 0;

  for (let i=1; i<boundary; i++) {
    for (let j=0; j<multiplicators.length; j++) {
      if ((i % multiplicators[j]) === 0) {
        sum += i;
        break;
      }
    }
  }
  
  return sum;
}
