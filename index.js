function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => console.log(json));
  }
  then((json) => console.log(json))
  // To pass the tests, don't forget to return your fetch!
  
function renderBooks(books) {
  const main = document.getElementbyId("book-list");

  books.forEach(book => {
    const listItem = document.createElement('Li');
    listItem.testContent = book.name;
    main.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// Call fetchbook() when the page is loaded document.addEventListener("DOMContentLoaded", fetchbooks); 
