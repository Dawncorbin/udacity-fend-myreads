import React, {Component} from 'react'

class MoveBooks extends Component {

  render() {
    let book = this.props.book;

    return (
      <div className="book-shelf-changer">
        <select
          onChange={(e) =>
          this.props.refreshAllBooks(this.props.book, e.target.value)}
          value={book.shelf || "none"}
          >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default MoveBooks;
