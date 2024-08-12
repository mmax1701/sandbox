// Change code below this line
function add(...args) {
  let sum = 0;
  for (const arg of args) {
      sum += arg
  } return sum;
  // Change code above this line
}

console.log(add(12, 4, 11, 48)); //возвращает 75