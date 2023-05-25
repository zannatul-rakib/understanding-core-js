const arr = [52, 85, 625, 47, 36, 98, 58, 85, 74, 965, 122, 63, 78];

function getEvenNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 === 0) {
      console.log(index, element);
    }
  }
}

getEvenNumbers(arr);
