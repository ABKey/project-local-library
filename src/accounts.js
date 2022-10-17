function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  books.forEach(book => 
    counter = counter + book.borrows.filter(borrow => borrow.id === account.id).length);
  return counter;
}

function getBooksPossessedByAccount(account, books, authors) {

  let filteredBooks = books.filter(book =>
    book.borrows[0].returned === false && book.borrows[0].id === account.id);
    
  return filteredBooks.forEach(book => book['author'] = authors.find(author => 
    author.id === book.authorId));
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
