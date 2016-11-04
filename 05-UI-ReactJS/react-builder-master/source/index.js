import React from 'react';
import ReactDOM from 'react-dom';
import connect from 'react-redux';
import { Router, Route, Link } from 'react-router';

// import Rout from './Rout'

import Header from './header';
import Movie from './Movie';
import CreateMovie from './CreateMovie';
import MovieList from './MovieList';
import MovieEdit from './MovieEdit';



ReactDOM.render((
  <Router >
    <Route path='/' component={Movie} />
    <Route path='/CreateMovie' component={CreateMovie} />
    <Route path='/MovieList' component={MovieList} />
    <Route path='/MovieEdit' component={MovieEdit} />

  </Router>
), document.getElementById('app'));
