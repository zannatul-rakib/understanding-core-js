function factorial(numbers) {
  for (let i = numbers; i >= 1; i--) {
    console.log(i);
  }
}

factorial(5);
// const result = factorial(5);
// console.log(result);

function reverseFactorial(number) {
  let factNum = 1;
  for (let i = number; i >= 1; i--) {
    factNum = factNum * i;
    console.log(i);
  }
  return factNum;
}
const nums = 12;
const output = reverseFactorial(nums);
console.log("Factorial of -", nums, ":", output);
