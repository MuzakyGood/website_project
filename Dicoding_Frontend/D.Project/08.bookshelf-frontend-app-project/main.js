// Do your work here...

let books = [];
let editedBookId = null;
const STORAGE_KEY = 'BOOKSHELF_APPS';

/* =============
 * LOCAL STORAGE
 * =============
 */ 

const isStorageExist = () => {
    if ((typeof Storage) === undefined) {
        alert('Your browser not supported local storage!');
        return false;
    }
    return true;
}

const saveData = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(books));

const loadDataFromStorage = () => {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    if (serializedData) books = JSON.parse(serializedData);
}

/* ============
 * BOOKS OBJECT
 * ============
 */ 

const generateId = () => Number(new Date());

const generateBookObject = (id, title, author, year, isComplete) => {
    return {id, title, author, year, isComplete};
}

/* =================
 * DOOM MANIPULATION
 * =================
 */ 

const startEditBook = (book) => {
    document.getElementById('bookFormTitle').value = book.title;
    document.getElementById('bookFormAuthor').value = book.author;
    document.getElementById('bookFormYear').value = book.year;
    document.getElementById('bookFormIsComplete').checked = book.isComplete;

    editedBookId = book.id;

    const submitButton = document.getElementById('bookFormSubmit');
    submitButton.innerHTML = 'Simpan Perubahan Buku';
}

const makeBookElement = (book) => {
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');
    bookItem.setAttribute('data-bookid', book.id);
    bookItem.setAttribute('data-testid', 'bookItem');

    const title = document.createElement('h3');
    title.innerText = book.title;
    title.setAttribute('data-testid', 'bookItemTitle');

    const author = document.createElement('p');
    author.innerText = `Penulis: ${book.author}`;
    author.setAttribute('data-testid', 'bookItemAuthor');

    const year = document.createElement('p');
    year.innerText = `Tahun: ${book.year}`;
    year.setAttribute('data-testid', 'bookItemYear');

    const buttonContainer = document.createElement('div');

    const toggleButton = document.createElement('button');
    toggleButton.classList.add(book.isComplete ? 'btn-incomplete' : 'btn-complete');
    toggleButton.setAttribute('data-testid', 'bookItemIsCompleteButton');
    toggleButton.innerText = book.isComplete ? 'Belum selesai dibaca' : 'Selesai dibaca';

    toggleButton.addEventListener('click', () => {
      toggleBookStatus(book.id);
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn-delete');
    deleteButton.setAttribute('data-testid', 'bookItemDeleteButton');
    deleteButton.innerText = 'Hapus Buku';

    deleteButton.addEventListener('click', () => {
      deleteBook(book.id);
    });

    const editButton = document.createElement('button');
    editButton.classList.add('btn-edit');
    editButton.setAttribute('data-testid', 'bookItemEditButton');
    editButton.innerText = 'Edit Buku';
    editButton.addEventListener('click', () => {
        startEditBook(book);
    });

    buttonContainer.append(toggleButton, deleteButton, editButton); 
    bookItem.append(title, author, year, buttonContainer);

    return bookItem;
}

/* ======
 * RENDER
 * ======
 */ 

const renderBooks = (filterTitle = '') => {
    const incompleteBookList = document.getElementById('incompleteBookList');
    const completeBookList = document.getElementById('completeBookList');

    incompleteBookList.innerHTML = '';
    completeBookList.innerHTML = '';

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(filterTitle.toLowerCase())
    );


    for (const book of filteredBooks) {
        const bookElement = makeBookElement(book);

        if (book.isComplete) completeBookList.append(bookElement);
        else incompleteBookList.append(bookElement);
    }
}

/* ===============
 * CRUD OPERATIONS
 * ===============
 */ 

const addBooks = (title, author, year, isComplete) => {
    const id = generateId();
    const book = generateBookObject(id, title, author, year, isComplete);

    books.push(book);
    saveData();
    renderBooks();
}

const toggleBookStatus = (bookId) => {
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    book.isComplete = !book.isComplete;
    saveData();
    renderBooks();
}

const deleteBook = (bookId) => {
    const index = books.findIndex(b => b.id === bookId);
    if (index === -1) return;

    books.splice(index, 1);
    saveData();
    renderBooks();
}

/* ==============
 * EVENT LISTENER
 * ==============
 */ 

const updateBook = (id, title, author, year, isComplete) => {
    const book = books.find(b => b.id === id);
    if (!book) return;

    book.title = title;
    book.author = author;
    book.year = year;
    book.isComplete = isComplete;

    saveData();
    renderBooks();
}

window.document.addEventListener('DOMContentLoaded', () => {
    if (isStorageExist()) loadDataFromStorage();
    renderBooks();

    const bookForm = document.getElementById('bookForm');
    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('bookFormTitle').value;
        const author = document.getElementById('bookFormAuthor').value;
        const year = Number(document.getElementById('bookFormYear').value);
        const isComplete = document.getElementById('bookFormIsComplete').checked;

        if (editedBookId === null) addBooks(title, author, year, isComplete);
        else updateBook(editedBookId, title, author, year, isComplete);

        bookForm.reset();
        editedBookId = null;
        document.getElementById('bookFormSubmit').innerHTML = 'Masukkan Buku ke rak <span>Belum selesai dibaca</span>';
    });

    const searchForm = document.getElementById('searchBook');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const searchTitle = document.getElementById('searchBookTitle').value;

        renderBooks(searchTitle);
    });
});

// console.log('Hello, world!');