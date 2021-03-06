import React, {Component} from 'react'
//import Search from "./Search";

class Book extends Component {

  render() {
    //Join the array of authors to create a single author string
    const authors = this.props.book.authors && this.props.book.authors.join(' | ');
    let book = this.props.book;

    return (
      <li>
        <div className="book">
          <div className="book-top">

              <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url("${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ""}")` }}>
                    <div className="book-shelf-changer">
                      <select
                        onChange={(event) => {this.props.refreshAllBooks(
                          this.props.book, event.target.value
                        )}}
                        value={book.shelf || "none"}
                        >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>

              </div>
          {/*  <Search/>*/}
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{authors}</div>
        </div>
        </li>
    );
  }
}

export default Book;
