const country = "Bangladesh";
const age = 53;
const isIndependent = true;
const student = {
  name: "Kuddus",
  age: 17,
  class: 11,
  section: "science",
};
const friendsAge = [23, 21, 14, 16, 19, 17];
function add(num1, num2) {
  return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof add);
// check array using Array.isArray
console.log(Array.isArray(friendsAge));

// using 'includes' find something in array
console.log(friendsAge.includes(21)); // ans true;
console.log(friendsAge.includes(20)); // ans false;

// using 'concat' to join more data
const newOldFriends = [32, 30, 39, 45];
const newFriends = newOldFriends.concat(friendsAge);
console.log(newFriends);
