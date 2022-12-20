const BookList = (bookList) => {
  let html = `<ul class="book-list rounded-md border-2 border-gray-600 bg-white w-full mx-auto">`;

  for (let i = 0; i < bookList.length; i++) {
    html += BookListItem(bookList[i]);
  }

  html += `</ul>`;

  return html;
};
