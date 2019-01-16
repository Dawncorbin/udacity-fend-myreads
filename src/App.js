import React from 'react'
import {Switch,Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import BookCase from './components/BookCase';
import Search from './components/Search';

import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books})
    });

  };

  render() {
    return (
      <div className="app">
      {this.state.showSearchPage
      ? (
        <Search />
      )}
    //  <Switch>
      //  <Route exact path={"/"} component={BookCase}/>
        //<Route exact path={"/Search"} component={Search}/>
      //</Switch>
      </div>
      //<BookCase />
    )
  }
}

export default BooksApp
