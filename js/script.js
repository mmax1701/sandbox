function findLongestWord(string) {
  // Change code below this line
    strArr = string.split(' ');
    
    let word = strArr[0];
    
    for (let i = 1; i < strArr.length; i += 1) {

        if (word.length < strArr[i].length) {
            word = strArr[i]
        } 

        
        
    }
    return word;


  // Change code above this line
}

findLongestWord("May the force be with you")