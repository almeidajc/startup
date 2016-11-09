import React from 'react';
import Rout from './routes';
import Movie from './Movie';
import moviesStore from './moviesStore';
import { Link } from 'react-router';

class MovieList extends React.Component {
  constructor (props) {
    super(props);
    this.movieDelete = this.movieDelete.bind(this);
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

  movieDelete(index) {
    this.props.onDelete(index)
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
         <button onClick={this.movieDelete.bind(this, index)}>Delete</button>
       </li>
     );
   }
 };

export default MovieList;
