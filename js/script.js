const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(item => item % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(item => item % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(item => item % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(item => item % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(item => item % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(item => item % 2 !== 0);