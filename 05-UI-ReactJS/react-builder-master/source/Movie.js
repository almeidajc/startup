import React from 'react';
import ReactDOM from 'react-dom';
import CreateMovie from './CreateMovie';
import MovieList from './MovieList';
import MovieEdit from './MovieEdit';

class Movie extends React.Component{
  render () {
    return (
        <div className="movie">
            <CreateMovie onSubmit={this.handleCreateMovie} /> <br />
            <MovieList movies={this.getMovies()} />
            <h3 id="favouriteListTitle" />
            <ul id="list" />
            <MovieEdit movies={this.getMovies()} />
        </div>
    );
  }

  getMovies () {
    let movies = localStorage.getItem("movieStorage") || [];
    if(movies != ''){
      return JSON.parse(movies);
    }
    else {
      return JSON.parse('null');
    }
  }

  handleCreateMovie (event) {
    let movies = JSON.parse(localStorage.getItem("movieStorage")) || [];
    movies.push(event);
    localStorage.setItem("movieStorage", JSON.stringify(movies));
  }

  editMovie() {

  }
};

export default Movie;
