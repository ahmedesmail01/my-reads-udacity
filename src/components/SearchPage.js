//
import * as API from "../BooksAPI";
import { Link } from "react-router-dom";
import { useState } from "react";
import SingleBook from "./SingleBook";

//this is the search page component
function SearchPage({ allBooks, changeShelf }) {
  const [search, setSearch] = useState([]);
  // here i detect the value which user write on the input field
  /* and then i send it to the search method in the api */
  const searchResults = (e) => {
    const query = e.target.value;
    if (!query) {
      setSearch([]);
      return;
    }
    API.search(query, 20).then((res) => {
      // i handle the error here or null values
      if (!res || res.error) {
        setSearch([]);
        return;
      }
      //here i handle the shelf of all results if it is already in a shelf and select
      //its value in the option list
      const finalBooks = res.map((book) => {
        const alreadyToken = allBooks.find((B) => B.id === book.id);
        book.shelf = alreadyToken ? alreadyToken.shelf : "none";
        return book;
      });
      //then i set the search results
      setSearch(finalBooks);
    });
  };
  return (
    <>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/my-reads-udacity" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={searchResults}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {search.map((book) => {
              return (
                <SingleBook
                  key={book.id}
                  book={book}
                  changeShelf={changeShelf}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default SearchPage;
