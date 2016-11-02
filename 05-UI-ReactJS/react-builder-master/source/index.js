import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';

// import Rout from './Rout'

import Movie from './Movie';
import CreateMovie from './CreateMovie';
import MovieList from './MovieList';
// import MovieEdit from './MovieEdit';


ReactDOM.render(<Movie />, document.getElementById('app'));
