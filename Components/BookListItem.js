const BookListItem = (book) => {
  let html = `<li
                class="book-list__item relative mb-2 mx-2 last:mb-0 p-3 text-gray-900 last:border-b-0 border-b border-gray-700 cursor-pointer">
              ${book.author} - ${book.title}    
              </li>`;
  return html;
};
