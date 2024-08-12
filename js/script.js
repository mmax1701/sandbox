// Change code below this line
function findMatches(first, ...args) {
  const matches = []; // Don't change this line

  for (const arg of args) {
    if (first.includes(arg)) {
     matches.push(arg)
   }
 }

  // Change code above this line
  return matches;
}

console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); //возвращает [17, 89, 2]