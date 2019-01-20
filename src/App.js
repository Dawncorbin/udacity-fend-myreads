import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from "react-router-dom";
import BookCase from './components/BookCase';
import Search from './components/Search';

import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []

  };

//Once the component has mounted call 'BooksAPI.getAll'
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });

  }

  refreshAllBooks = (book, shelf) => {
    {/*Get the books currently on the bookshelves and update the state with the sorted list*/}
    BooksAPI.update(book, shelf);
    //  .then(() => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ books:books });
    });
//  });
}

  render() {
    return (
      <div className="app">
        <Route exact path="/"
                render={() => (
                  <BookCase books={this.state.books} refreshAllBooks={this.refreshAllBooks} />
                )}
            />
        <Route exact path="/Search"
                render={() => (
                  <Search books={this.state.books} refreshAllBooks={this.refreshAllBooks} />
                )}
            />
      </div>

    )
  }
};

export default BooksApp
