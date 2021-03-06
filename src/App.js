import React from 'react'
import { Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'

import './App.css';
import Bookcase from './components/Bookcase';
import Search from './components/Search';

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
    BooksAPI.update(book, shelf).then(books => {
      book.shelf = shelf;

    BooksAPI.getAll()
      .then(books => {
        this.setState({ books });
    });
  });
};

  render() {
    return (
      <div className="app">
        <Route exact path="/"
                render={() => (
                  <Bookcase books={this.state.books} refreshAllBooks={this.refreshAllBooks} />
                )}
            />
        <Route exact path="/Search"
                render={() => (
                  <Search books={this.state.books} refreshAllBooks={this.refreshAllBooks} />
                )}
            />
      </div>

    );
  }
}

export default BooksApp
