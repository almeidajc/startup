import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './Movie';
import MovieInput from './MovieInput';
import MovieList from './MovieList';
import MovieEdit from './MovieEdit';
import moviesStore from './moviesStore';
import { handleM } from './reducers.js';
import { initializeState } from './actions';
import Rout from './routes';

moviesStore.dispatch(initializeState())

ReactDOM.render(<Rout />, document.getElementById('app'));
