// basic function
function rupeeToTaka(rupee) {
  const taka = rupee * 1.29;
  return taka;
}
const myRupee = 10000;
const output = rupeeToTaka(myRupee);
console.log(output);

// es6 version
const convertTaka = (r) => r * 1.29;
console.log(convertTaka(5000));
