function filterArray(numbers, value) {
   // Change code below this line
    const newArr = [];

    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > value) {
            newArr.push(numbers[i])
        }
    }
console.log(newArr);
    return newArr;
  // Change code above this line
}

filterArray([12, 24, 8, 41, 76], 20) //возвращает [24, 41, 76]