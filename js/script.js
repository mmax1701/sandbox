const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line

    let idx = this.books.indexOf(oldName)
    

return this.books.splice(idx, 1, newName)

    // Change code above this line
  },
};

console.log(bookShelf);
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books.
// Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

bookShelf.updateBook("Haze", "Dungeon chronicles"); //значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]