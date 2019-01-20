import React, {Component} from 'react'
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

class BookCase extends Component {
  state = {}

  render() {
    const books = this.props.books;
      return (
          <div className="app">
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              
              <div className="list-books-content">
                <div>
                    <BookShelf
                        books={books.filter(book => book.shelf === "currentlyReading")}
                        name="Currenty Reading"
                        refreshAllBooks={this.props.refreshAllBooks}
                    />

                    <BookShelf
                       books={books.filter(book => book.shelf === "wantToRead")}
                       name="Want To Read"
                       refreshAllBooks={this.props.refreshAllBooks}
                    />

                    <BookShelf
                       books={books.filter(book => book.shelf === "read")}
                       name="Read"
                       refreshAllBooks={this.props.refreshAllBooks}
                    />
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          </div>
      )
    }
}


export default BookCase;
