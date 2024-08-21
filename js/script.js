function changeEven(numbers, value) {
  // Change code below this line
  const arr = [...numbers]
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      arr[i] = arr[i] + value;
    }
  } return console.log(arr);
  // Change code above this line
}

changeEven([2, 8, 3, 7, 4, 6], 10) //возвращает новый массив [12, 18, 3, 7, 14, 16]