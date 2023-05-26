// simple logic
function isLeapYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    return true;
  }
  return false;
}

// actual logic
function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

// isLeapYear(2036);

const myYear = 1999;
const output = isLeapYear(myYear);
console.log("is my year is leap year: ", output);

const bristy = 1902;
const outputB = isLeapYear(bristy);
console.log("Bristy r birthday is Leap Year: ", outputB);
