import React, {Component} from 'react'
import Search from "./Search";


class Book extends Component {
  state = {}

  render() {
    //Join the array of authors to create a single author string
    const authors = this.props.book.authors && this.props.book.authors.join(' | ');

    return (
        <div className="book">
          <div className="book-top">

              <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url("${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ""}")` }}>
              </div>
            <Search/>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{authors}</div>
        </div>


    )
  }
}

export default Book;
