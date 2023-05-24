//simple way
const inch1 = 166;
const feet1 = inch1 / 12;
console.log(feet1);

// with function ---- inch to feet
function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
const myInch = 150;
const myFeet = inchToFeet(myInch);
console.log(myFeet);

//feet to inch
function feetToInch(feet1) {
  const inch1 = feet1 * 12;
  return inch1;
}
const roxyFeet = 23;
const ans1 = feetToInch(roxyFeet);
console.log(ans1);
