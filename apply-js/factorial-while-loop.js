// reverse way
function reverseFactorial(number) {
  let i = number;
  let result = 1;
  while (i >= 1) {
    result = result * i;
    i--;
  }
  return result;
}
const output = reverseFactorial(10);
console.log(output);

// normal way
function factorial(numbers) {
  let i = 1;
  let fact = 1;
  while (i <= numbers) {
    fact = fact * i;
    i++;
  }
  return fact;
}
const ans = factorial(6);
console.log(ans);
