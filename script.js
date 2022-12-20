"use strict";

let bookList = [];

window.addEventListener("load", () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener("keyup", (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector(".book-list");
  const root = document.getElementById("root");

  existingElement && root.removeChild(existingElement);

  bookList.length > 0 &&
    searchField.value &&
    root.insertAdjacentHTML("beforeend", BookList(bookList));

  const bookListItems = document.querySelectorAll('.book-list__item');

  if (!bookListItems) return;

  for(let i = 0; i < bookListItems.length; i++) {
    const book = bookListItems[i];
    book.addEventListener("mouseenter", () => {
      getBook(bookList[i]).then((apiBook) => {
        book.insertAdjacentHTML("beforeend", BookDetails(apiBook));
      })
    });

    book.addEventListener("mouseleave", () => {
      const bookDetails = document.querySelectorAll('.book-details');

      bookDetails.forEach((detail) => {
        detail.remove();
      });
    });
  }
}
