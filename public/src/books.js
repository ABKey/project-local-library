const { getBooksBorrowedCount } = require("./home");

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = [];
  const notBorrowedBooks = [];
  books.forEach((book) =>
    book.borrows[0].returned === false
      ? borrowedBooks.push(book)
      : notBorrowedBooks.push(book)
  );
  return [borrowedBooks, notBorrowedBooks];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((borrow) => {
      const account = accounts.find((account) => account.id === borrow.id);
      account.returned = borrow.returned;
      return account;
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
