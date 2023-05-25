const arr = [52, 85, 65, 47, 36, 98, 58, 85, 74, 63, 78];

function getOddSum(numbers) {
  const oddNums = [];
  const sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    2;
    if (element % 2 !== 0) {
      //   console.log(index, element);
      oddNums.push(element);
    }
  }
  return oddNums;
}

const output = getOddSum(arr);
console.log(output);
