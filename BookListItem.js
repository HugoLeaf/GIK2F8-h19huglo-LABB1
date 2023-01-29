const BookListItem = (book) => {
    
    let html = `<li
                  class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-blue-700 last:border-b-0 border-b border-indigo-700 cursor-pointer" value="${book.id}">
                ${book.author} - ${book.title}  
                </li>`;
    return html;
  };
  