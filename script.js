'use strict';

var htmlBoxTemplate = `<div style="display: flex" class="w-80 custom-box mb-5 mx-5 bg-white rounded"></div>`
let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
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

function CreateInfoBox(e){
  var node = e.target;
  var parent = e.target.parentNode;
  
  node.insertAdjacentHTML('afterend', htmlBoxTemplate)
  const box = document.getElementsByClassName('custom-box')

  getByBookId(node.value).then((book) => RenderInfoBox(book, box[0]))
}

// Creates all element and adds them to the DOM.
function RenderInfoBox(book, box){
  box.style = "flex-flow: row wrap; border: 2px black; border-style: outset;"

  const img = document.createElement('img')
  img.src=`${book.coverImage}`;
  img.style = "display:block;"

  const head = document.createElement('h2')
  head.innerText = `Title: ${book.title} (${book.releaseDate})`
  head.style = "display:block;"

  const author = document.createElement('h2')
  author.innerText = `Author: ${book.author}`
  author.style = "display:block"

  const pages = document.createElement('p')
  pages.innerText = `Pages: This book is ${book.pages} pages long.`
  pages.style = "display:block;"


  box.appendChild(head)
  box.appendChild(pages)
  box.appendChild(author)
  box.appendChild(img)
}

function RemoveDisplay(e){
  var node = e.target;
  var nextSibling = node.nextElementSibling;
  node.parentNode.removeChild(nextSibling);
}

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');
  const bookList_item = document.getElementsByClassName('book-list__item');
  const root = document.getElementById('root');


  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
  
  // Adds event listeners.
  for (let i=0; i < bookList_item.length; i++){
    bookList_item[i].addEventListener('mouseover', CreateInfoBox)
    bookList_item[i].addEventListener('mouseout', RemoveDisplay)
  }
}
