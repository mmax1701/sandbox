function getCommonElements(array1, array2) {
  // Change code below this line
    const newArr = [];

    for (let i = 0; i < array1.length; i += 1) {
        if (array2.includes(array1[i])) {
            newArr.push(array1[i])
        }
    }
    console.log(newArr);
    return newArr;

 // Change code above this line
}

getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) //возвращает [10, 30, 40]