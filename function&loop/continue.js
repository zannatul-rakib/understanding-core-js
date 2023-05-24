var numbers = [12, 58, 69, 87, 63, 85, 29, 78, 59, 31, 89];
for (var i = 0; i < numbers.length; i++) {
  var num1 = numbers[i];
  if (num1 <= 50) {
    continue;
  }
  console.log(num1);
}
