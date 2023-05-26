// ----------- Problems -----------
/*
01. show output from : 1 - 50;
02. if the divisible by 3 then instead of the number show 'foo' 
03. if the divisible by 5 then instead of the number show 'bar' 
04. if the divisible by both 3 & 5 then instead of the number show 'foobar' 
*/

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else if (i % 3 === 0) {
    console.log("foo");
  } else {
    console.log(i);
  }
}

// again practice
for (let i = 0; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else if (i % 3 === 0) {
    console.log("foo");
  } else {
    console.log(i);
  }
}
