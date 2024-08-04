function getEvenNumbers(start, end) {
   // Change code below this line

    const newArr = [];

    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            newArr.push(i)
        }
    }
  
return newArr
    // Change code above this line
  }

getEvenNumbers(6, 12) //возвращает [6, 8, 10, 12]