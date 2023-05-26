const friendsNames = [
  "abul",
  "fozol",
  "rayhan",
  "rahman",
  "kabir",
  "oyon",
  "samet",
  "sokal",
  "fozol",
  "kishor",
  "kabir",
  "oyon",
];
// const abc = [12, 10, 12];
function removeDuplicate(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}
const result = removeDuplicate(friendsNames);
console.log(result);
