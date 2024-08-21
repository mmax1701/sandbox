function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  firstArray.forEach(function (item) {
    if (secondArray.includes(item)) {
commonElements.push(item)
    }
  })

  return commonElements;
  // Change code above this line
}
