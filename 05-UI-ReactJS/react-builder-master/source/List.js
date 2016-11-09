import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList';
import { Link } from 'react-router';
import { movieDelete } from './actions';
import { handleM } from './reducers.js';
import moviesStore from './moviesStore';
import { connect } from 'react-redux'


class List extends React.Component{
  constructor (props) {
    super(props)
  }

   deleteMovie(index) {
     moviesStore.dispatch(movieDelete(index))
   }


   render(){
     return(
       <MovieList movie={this.props.movies} onDelete={this.deleteMovie} />
     )
   }
}

function mapStateToProps(state) {
  return {
    movie: state
  }
}

export default connect(mapStateToProps)(List);
