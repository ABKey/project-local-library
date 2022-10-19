function getTotalBooksCount(books) {
 return books.length;
}

function getTotalAccountsCount(accounts) {
return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter(book => book.borrows[0].returned === false).length;
}

function getMostCommonGenres(books) {
  let genres = books.reduce((acc, book) => {
		acc[book.genre] != null	? acc[book.genre].count++ : acc[book.genre] = { name: book.genre, count: 1 }
		return acc;
	}, {})
	return Object.keys(genres)
		.map(genre => genres[genre])
		.sort((a,b) => b.count - a.count)
		.slice(0,5)
}

function getMostPopularBooks(books) {
  return books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  }).sort((bookA, bookB) => bookB.count - bookA.count).splice(0,5)
}

// HELPER FUNCTION
function reduceAndSort(result){
  return result.sort((a, b) => (a.count < b.count ? 1 : -1)).splice(0,5);;
 }

function getMostPopularAuthors(books, authors) {
  const authArray = [];
  authors.forEach(author => {
    const byThisAuthor = books.filter((book) => 
    book.authorId === author.id);
    let totalBorrows = 0;
    byThisAuthor.forEach(book => 
      (totalBorrows += book.borrows.length));
    authArray.push({
      name: author.name.first + " " + author.name.last,
      count: totalBorrows,
    });
  });
  return reduceAndSort(authArray);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
