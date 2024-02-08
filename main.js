let myLibrary = [
  {
    image: "./hobbit.jpg",
    title: "The Hobbit",
    author: "J R R Tolkien",
    pages: "295 pages",
    read: false,
  },
  {
    image: "./cities.jpg",
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    pages: "250 pages",
    read: false,
  },
  {
    image: "./daVinci.jpg",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    pages: "355 pages",
    read: false,
  },
  {
    image: "./alchemist.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: "400 pages",
    read: false,
  },
  {
    image: "./default.avif",
    title: "A Song of Ice And Fire",
    author: "George R R Martin",
    pages: "600 pages",
    read: false,
  },
];

const form = document.getElementById("submit");
form.addEventListener("submit", function (e) {
  console.log("submitting");
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  bookView.innerHTML += `<div class="book">
  <img src="./default.avif" alt=${title}/>
  <div class="info">
  <h3>${title}</h3>
  <p>${author}</p>
  <p>${pages}</p>
  <p>${read === true ? "read" : "not yet"}</p>
  <button class="btn btn-light" onclick="remove(${myLibrary.length - 1})" id="${
    myLibrary.length - 1
  }" class="remove">Remove</button>
  <button id="readBtn" class="btn btn-info">${read === true ? "Already Read" : "Not read"}</button>
  </div>
  </div>`;

  
    document.getElementById("readBtn").onclick = function () {
      if (read === true) {
        read = false;
      } else if (read === false) {
        read = true;
      }
      document.getElementById("readBtn").textContent = ` ${read ? "Already Read" : "Not Read"}`;
    };
});
class Book {
  constructor(image, title, author, pages, read) {
    this.image = image;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.getInfo = function () {
      return `${this.title} , ${this.author}, ${this.pages} pages, ${
        this.read ? "read" : "not read yet"
      }`;
    };
  }
}

const bookView = document.getElementById("book");

// let filteredLIbrary = myLibrary;

function remove(index) {
  myLibrary[index] = null;
  bookView.innerHTML = "";
  myLibrary.map((book, index) => {
    console.log(book.read)
    if (book !== null) {
      bookView.innerHTML += `<div class="book ${index}">
      <img src=${book.image ? book.image : "./default.avif"} alt=${book.title}/>
      <div class="info">
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>${book.pages}</p>
      <p>${book.read === true ? "read" : "not yet"}</p>
      <button class="btn btn-light" onclick="remove(${index})" id="${index}" class="remove">Remove</button>
      <button id="readBtn" class="btn btn-info">${
        book.read === false ? "Already Read" : "Not Read"
      }</button>
      </div>
      </div>`;
      
    }
    document.querySelectorAll("#readBtn").forEach((button, i) => {
      button.onclick = function () {
        if (book.read) {
          book.read = false;
        } 
        else if (book.read === false) {
          book.read = true;
        }
        button.textContent = ` ${book.read ? "Already Read" : "Not Read"}`;
      };
    });
  });
}

myLibrary.map((book, index) => {
  if (book !== null) {
    bookView.innerHTML += `<div class="book ${index}">
    <img src=${book.image} alt=${book.title}/>
    <div class="info">
    <h3>${book.title}</h3>
    <p>Written by: ${book.author}</p>
    <p>${book.pages}</p>
    <p>${book.read === true ? "read" : "not yet"}</p>
    <button class="btn btn-light" onclick="remove(${index})" id="${index}" class="remove">Remove</button>
    <button id="readBtn"  class="btn btn-info">${
      book.read ? "Already Read" : "Not Read"
    }</button>
    </div>
    </div>`;
  }

  document.querySelectorAll("#readBtn").forEach((button, i) => {
    button.onclick = function () {
      if (book.read) {
        book.read = false;
      } else if (book.read === false) {
        book.read = true;
      }
      button.textContent = ` ${book.read ? "Already Read" : "Not Read"}`;
    };
  });
});

const handleIsRead = (book) => {
  book.read = !book.read;
  console.log(book?.read);
  console.log("clicked");
};
