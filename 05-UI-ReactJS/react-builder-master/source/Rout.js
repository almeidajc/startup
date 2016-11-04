import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Movie from './Movie';
import CreateMovie from './CreateMovie';
import MovieList from './MovieList';


class Rout extends Component {
 render() {
   return (
     <Router history={hashHistory}>
        <Route path='/movie' component={Movie} />
        <Route path='/movieList' component={MovieList} />
        <Route path='/CreateMovie' component={CreateMovie} />
     </Router>
   )
 }
}

export defualt Rout




// import React, { Component } from 'react';
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
// // import Application from './i';
// import Movie from './Movie';
//
// class Rout extends React.Component {
//  render() {
//    return (
//      <Router history={hashHistory}>
//        <Route path='/movie' component={NotFound} />
//        <Route path='/Hello' component={NotFound} />
//        <Route path='*' component={NotFound} />
//      </Router>
//    )
//  }
// }
// const NotFound = () => (
//  <h1>404.. This page is not found!</h1>)
//
// export default Rout
