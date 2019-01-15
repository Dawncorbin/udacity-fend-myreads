import React, {Component} from 'react'

import BookShelf from "./BookShelf";

class BookCase extends Component {
  state = {

  }

render() {
    return (
      <div className="app">

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

                  <BookShelf title="Currenty Reading" />
                  <BookShelf title="want To Read"/>
                  <BookShelf title="Read"/>

            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>

      </div>
    )
  }
}


export default BookCase;
