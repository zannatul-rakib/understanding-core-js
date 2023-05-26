const phones = [
  {
    name: "iPhone 12 pro",
    price: 129000,
    color: "black",
    camera: 12,
    storage: "128gb",
  },
  {
    name: "Samsung",
    price: 87990,
    color: "silver",
    camera: 64,
    storage: "128gb",
  },
  {
    name: "Vivo",
    price: 65990,
    color: "black iris",
    camera: 32,
    storage: "64gb",
  },
  {
    name: "Oppo",
    price: 45990,
    color: "red purple",
    camera: 64,
    storage: "64gb",
  },
  {
    name: "Nokia",
    price: 72990,
    color: "black",
    camera: 32,
    storage: "128gb",
  },
];

// find cheapest phone
function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
    // console.log(phone);
  }
  return cheapest;
}
const output = cheapestPhone(phones);
console.log(output);

// find expensive phone
function expensivePhone(phones) {
  let expensive = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price > expensive.price) {
      expensive = phone;
    }
  }
  return expensive;
}

const result = expensivePhone(phones);
console.log(result);
