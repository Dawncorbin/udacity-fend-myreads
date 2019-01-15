import React from 'react'
import {Switch,Route} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'

import BookCase from './components/BookCase';
import Search from './components/Search.js';

import './App.css';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
      <Switch>
        <Route exact path={"/"} component={BookCase}/>
        <Route exact path={"/Search"} component={Search}/>
      </Switch>
      </div>
      //<BookCase />
    )
  }
}

export default BooksApp
