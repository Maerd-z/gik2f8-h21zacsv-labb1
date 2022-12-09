const BookList = (bookList) => {
  // The surrounding list.
  let html = `<ul class="book-list rounded-md border-2 border-blue-400 bg-white w-full mx-auto">`;
  for (let i = 0; i < bookList.length; i++) {
    // BookListItem return a list element and is appended to the surrounding list.
    html += BookListItem(bookList[i]);
  }

  html += `</ul>`;
  
  return html;
};
