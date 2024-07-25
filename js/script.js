function checkForSpam(message) {
  let result;
  // Change code below this line
result = message.toLowerCase().includes('sale') || message.toLowerCase().includes('spam')
  // Change code above this line

  console.log(result);
  return result;
}

checkForSpam("[SPAM] How to earn fast money?")