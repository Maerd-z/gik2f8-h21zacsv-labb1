'use strict';

let bookList = [];
// API call
window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

// Result of API call is filtered.
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
// bookList[index].id
var htmlBoxTemplate = `<div class="w-80 custom-box mb-5 mx-5 bg-white rounded">Hello</div>`

function DisplayInfo(e){
  var node = e.target;
  var parent = e.target.parentNode;
  
  console.log(parent.childElementCount)

  node.insertAdjacentHTML('afterend', htmlBoxTemplate)
  // Custom box kan nu ändras.
  const box = document.getElementsByClassName('custom-box')
  //let book = getByBookId(index).id
  //console.log(e)
}

function RemoveDisplay(e){
  var node = e.target;
  var nextSibling = node.nextElementSibling;
  node.parentNode.removeChild(nextSibling);
}
// The filtered booklist is sent to BookList. BookList returns html for a list of books.
function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');
  const bookList_item = document.getElementsByClassName('book-list__item');
  const root = document.getElementById('root');


  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
  
  // Adds event listeners.
  // mouseover to get ID then call DisplayInfo?
  for (let i=0; i < bookList_item.length; i++){
    bookList_item[i].addEventListener('mouseover', DisplayInfo)
    bookList_item[i].addEventListener('mouseout', RemoveDisplay)
  }
}
