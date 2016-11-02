import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';


class Rout extends Component {
 render() {
   return (
     <Router history={hashHistory}>
        <DefaultRoute component={Movie} handler={require('/Movie.js')} />
        <Route path='/movieList' component={MovieList} />
        <Route path='/CreateMovie' component={CreateMovie} />
     </Router>
   )
 }
}

export defualt Rout
