import React, {Component} from 'react'

class MoveBooks extends Component {

  render() {
    const { book, ChangeShelf } = this.props;
    const { shelf } = book;

    return (
      <div className="book-shelf-changer">
        <select
          onChange={(e) =>
          ChangeShelf(book,e.target.value)}
          defaultValue={shelf}
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
