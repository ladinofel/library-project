//Initialize variables
let plus_button = document.getElementById('plus');
let modal = document.querySelector('#modal');
let book_title;
let book_author;
let page_count;
let book_status;
let book_category;
let submit_btn = document.getElementById('submit-book');
let generic_book;
let myLibrary = {};

//This event listener triggers the modal 
plus_button.addEventListener('click', () => {
  modal.showModal();
})

//Constructor function
function Book(book_title, book_author, page_count, book_status, book_category) {
  this.book_title = book_title;
  this.book_author = book_author;
  this.page_count = page_count;
  this.book_status = book_status;
  this.book_category = book_category;
}

//This event listener collects the book info from the form and stores it into myLibrary
submit_btn.addEventListener('click', () => {
  book_title = document.getElementById('book-title').value;
  book_author = document.getElementById('book-author').value;
  page_count = document.getElementById('page-number').value;
  book_status = document.querySelector('input[name="book-status"]:checked').value;
  book_category = document.querySelector('input[name="book-category"]:checked').value;
  generic_book = new Book(book_author, book_title, page_count, book_status, book_category);
  console.log(generic_book);
  modal.close();
})