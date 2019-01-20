import React, {Component} from 'react'
import Search from "./Search";

class Book extends Component {
  state = {}

  render() {
    //Join the array of authors to create a single author string
    const authors = this.props.book.authors && this.props.book.authors.join(' | ');
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
            <Search/>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>

    )
  }
}

export default Book;
