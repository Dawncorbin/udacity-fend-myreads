import React, {Component} from 'react'

import Book from "./Book";

class BookShelf extends Component {
  state = {}

  render() {
    const { books, refreshAllBooks } = this.props;
    return (

      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {/*map each book*/}
            {books.map(book => (
                  <Book refreshAllBooks={refreshAllBooks}
                    book={book}
                    key={book.id}
                    />
                 ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
