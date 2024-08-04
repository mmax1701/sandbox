// function includes(array, value) {
//   // Change code below this line
//     for (i = 0; i < array.length; i+=1) {
//     if (i === value) {
//       console.log(true);
//     return true;
//     } 
    
//     if (i !== value) {
//       console.log(false);
//     return false;
//     } 
//   }
// }
//   // Change code above this line


  function includes(array, value) {
  // Change code below this line

      for (const arr of array) {
          if (arr === value) {
              return true;
          } 
        }
        
        return false;
      
  // Change code above this line
}



includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") //возвращает true