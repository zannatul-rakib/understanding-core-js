const friendsAge = [32, 30, 39, 45, 23, 21, 14, 16, 19, 17];
const partial = friendsAge.splice(1, 5);
console.log(partial);
console.log(friendsAge);

// note:
// remove element from an array
// insert new elements in their place
// returning the deleted elements
// will change the original array
