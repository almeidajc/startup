import React from 'react';//esta
import Rout from './routes'; //no va
import Movie from './Movie'; //esta
import moviesStore from './moviesStore'; //esta
import { connect } from 'react-redux'; //esta
import { handleM } from './reducers.js'; //
import { Link } from 'react-router'; //esta
import { movieList } from './actions';  // esta

class MovieList extends React.Component {
  constructor () {
    super();

    this.renderItem = this.renderItem.bind(this);
  }

  render() {
    return (
      <ul>
        <Movie />
        {this.renderItems()}
      </ul>
    );
  }

  renderItems () {
     let movies;
     movies = moviesStore.getState();
     if(movies !== null){
       return movies.map(this.renderItem);
     }
     return (
       <li />
     )
   }

   renderItem (item, index) {
     let boundItemClick = this.initializeState;
     return (
       <li key={index}>
         {`Title: ${item.title} Year: ${item.year} Duration: ${item.duration}`}
         <Link to={`/MovieInput/${JSON.stringify(item , item.id=index)}`}><button className="buttonSelect">Edit</button></Link>
       </li>
     );
   }
 };

export default MovieList;
