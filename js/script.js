function createArrayOfNumbers(min, max) {
  const numbers = [];
    // Change code below this line

    const newArr = [];
    newArr.push(min, max)

    for (i = min; i <= max; i += 1){
        numbers.push(i)
    }
   

    console.log(numbers);
}
// Change code above this line


createArrayOfNumbers(29, 34)
// возвращает[29, 30, 31, 32, 33, 34]