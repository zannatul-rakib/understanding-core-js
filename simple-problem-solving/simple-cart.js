const shoppingCart = [
  {
    name: "shirt",
    price: 650,
    quantity: 5,
  },
  {
    name: "pant",
    price: 800,
    quantity: 4,
  },
  {
    name: "shoe",
    price: 1290,
    quantity: 3,
  },
  {
    name: "panjabi",
    price: 1750,
    quantity: 2,
  },
  {
    name: "watch",
    price: 980,
    quantity: 3,
  },
  {
    name: "belt",
    price: 350,
    quantity: 4,
  },
];

// total cost without quantity
function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum = sum + product.price;
    // console.log(product);
  }
  return sum;
}
const output = totalCost(shoppingCart);
console.log("my single total cost: ", output);

// total cost with quantity
function costWithQuantity(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const totalProduct = product.price * product.quantity;
    sum = sum + totalProduct;
  }
  return sum;
}
const totalOutput = costWithQuantity(shoppingCart);
console.log("grand total cost: ", totalOutput);
