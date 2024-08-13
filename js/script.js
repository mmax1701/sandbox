const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book `;
  },

  removeBook(bookName) {
    return `Deleting book ${bookName}`
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`
  }
  // Change code above this line
};





console.log(bookShelf.removeBook("Red sunset")); //возвращает строку "Deleting book Red sunset"