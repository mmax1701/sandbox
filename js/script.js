const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  
  let value = [];

  for (const prop of products) {
    
    if (prop.hasOwnProperty(propName)) {
      value.push(prop[propName])
    } 

  } return value;
    // Change code above this line
    
}

console.log(getAllPropValues("price")); //возвращает [1300, 2700, 400, 1200]
