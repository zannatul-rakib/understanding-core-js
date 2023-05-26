// simple factorial
function simpleFactorial(numbers) {
  let factNum = 1;
  for (let i = 1; i <= numbers; i++) {
    factNum = factNum * i;
  }
  return factNum;
}
const result = simpleFactorial(10);
console.log(result);
