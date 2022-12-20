const BookDetails = (book) => {
    return `<div class="book-details absolute border border-gray-500 bg-white z-50 right-52 shadow-2xl p-4">
    ${book.coverImage && `<img src="${book.coverImage}" class="max-w-xs"/>`}
    <h3 class="w-full text-center text-xl font-bold py-1">${book.title}</h3>
    <div>
        <p>Author: ${book.author}</p>
        <p>Release date: ${book.releaseDate}</p>
        <p>Pages: ${book.pages}</p>
    </div>
    </div>`
}