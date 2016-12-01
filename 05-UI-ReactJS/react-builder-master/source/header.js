import React from 'react';
import {Link} from 'react-router';
import CreateMovie from './CreateMovie';
import MovieList from './MovieList';
import MovieEdit from './MovieEdit';


class Header extends React.Component{
  render () {
    return (
        <div className="header">
            <Link to="/CreateMovie"><button className="buttonsSection">Create Movie</button></Link>
            <Link to="/MovieList"><button className="buttonsSection">Edit Movie</button></Link>
            <Link to="/MovieList"><button className="buttonsSection">List Favourite Movies</button></Link>
        </div>
    );
  }

};


export default Header;
