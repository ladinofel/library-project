//Initialize variables
let plus_button = document.getElementById('plus');
let modal = document.querySelector('#modal');
let submit_btn = document.getElementById('submit-book');
let generic_book;
let myForm;
let myLibrary = [];
let index;

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
  index = myLibrary.indexOf(generic_book);
  myLibrary[index].index = index;
  console.log(index);
  console.log(myLibrary);
  modal.close();
  cardCreator(generic_book);
})

//This function creates the card, grabs book info from myLibrary and modifies the DOM for display.
function cardCreator (generic_book) {  
  let card = document.createElement('div');
  let btn_container = document.createElement('div');
  let card_title = document.createElement('p');
  let card_author = document.createElement('p');
  let card_page = document.createElement('p');
  let card_status = document.createElement('p');
  let delete_btn = document.createElement('img');
  let status_btn = document.createElement('img');
  card_title.textContent = `Title: ${myLibrary[myLibrary.length - 1].book_title}`;
  card_author.textContent = `Author: ${myLibrary[myLibrary.length - 1].book_author}`;
  card_page.textContent = `Page number: ${myLibrary[myLibrary.length - 1].page_count}`;
  card_status.textContent = `Book status: ${myLibrary[myLibrary.length - 1].book_status}`;
  status_btn.src = "./img/bookmark-regular.svg";
  delete_btn.src = "./img/trash-can-regular.svg";
  btn_container.append(status_btn, delete_btn);
  btn_container.classList.add('btn_container');
  delete_btn.classList.add('btn');
  status_btn.classList.add('btn');
  card.append(card_title, card_author, card_page, card_status, btn_container);
  if(myLibrary[myLibrary.length -1].book_category === 'leisure'){
    let left_grid = document.querySelector('.left-grid');
    card.classList.add('leisure-card');
    left_grid.appendChild(card);
    } else {
    let right_grid = document.querySelector('.right-grid');
    card.classList.add('work-card');
    right_grid.appendChild(card);
  }
  
  delete_btn.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(generic_book), 1);
    card.remove();  
    console.log(index);
  })  
}
