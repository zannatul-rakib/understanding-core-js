for (var i = 1; i < 20; i++) {
  if (i > 10) {
    break;
  }
  console.log(i);
}

for (var i = 1; i <= 12; i++) {
  if (i > 5) {
    break;
  }
  console.log(i);
}

var items = ["laptop", "keyboard", "mouse", "phone", "ear pod", "butter ban"];
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  if (item === "ear pod") {
    break;
  }
  console.log(item);
}

var numbers = [12, 58, 69, 87, 63, 85, 29, 78, 59, 31, 89];
for (var i = 0; i < numbers.length; i++) {
  var num = numbers[i];
  if (num > 84) {
    break;
  }
  console.log(num);
}
