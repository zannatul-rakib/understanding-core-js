var shoppingCart = {
  booK: 3,
  box: 2,
  keyboard: 2,
  mouse: 1,
  pen: 5,
};

var findPen = shoppingCart.pen;
console.log(findPen);

var findmouse = shoppingCart["mouse"];
console.log(findmouse);

var allProperties = Object.keys(shoppingCart);
console.log(allProperties);

var allvalues = Object.values(shoppingCart);
console.log(allvalues);
