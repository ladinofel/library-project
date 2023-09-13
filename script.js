//Initialize variables
let plus_button = document.getElementById('plus');
let modal = document.querySelector('#modal');
let submit_btn = document.getElementById('submit-book');
let generic_book;
let myForm;
let myLibrary = [];

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
  let book_title = document.getElementById('book-title').value;
  let book_author = document.getElementById('book-author').value;
  let page_count = document.getElementById('page-number').value;
  let book_status = document.querySelector('input[name="book-status"]:checked').value;
  let book_category = document.querySelector('input[name="book-category"]:checked').value;
  generic_book = new Book(book_author, book_title, page_count, book_status, book_category);
  myForm = document.getElementById('myForm').reset();
  console.log(generic_book);
  myLibrary.push(generic_book);
  console.log(myLibrary);
  modal.close();
})