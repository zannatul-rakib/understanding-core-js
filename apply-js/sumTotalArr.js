function getSumTotal(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    console.log(index, element, sum);
  }
  return sum;
}

const arr = [52, 85, 65, 47, 36, 98, 58, 85, 74, 63, 78];
getSumTotal(arr);
