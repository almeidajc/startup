import React from 'react';
import ReactDOM from 'react-dom';
import MovieInput from './MovieInput';
import List from './List';
import { Link } from 'react-router';

class Movie extends React.Component{
  constructor () {
    super();
    this.state = {movieToUpdate: {}}
  }

  render () {
    return (
        <div className="movie">
            <Link to ="/MovieInput/0"><button className="buttonsSection">Movie Input</button></Link>
            <Link to ="/List"><button className="buttonsSection">Movie List</button></Link>
            <h3 id="favouriteListTitle" />
            <ul id="list" />
        </div>
    );
  }
};

export default Movie;
