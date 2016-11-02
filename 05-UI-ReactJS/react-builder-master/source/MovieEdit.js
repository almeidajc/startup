import React from 'react';
import CreateMovie from './CreateMovie';

class MovieEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.renderItem = this.renderItem.bind(this);
    this.handleEditMovie;
  }

  render() {
    return (
      <ul>
        {this.renderItems()}
      </ul>
    );
  }

  handleEditMovie(title){
    console.log(title);
  }

  renderItems () {
    let favourites;
    if(this.props.movies !== null){
      favourites = this.props.movies.filter( function(item) {
        return item.title
      })
      return favourites.map(this.renderItem);
    }
    return (
      <li />
    )
  }

  renderItem (item, index) {
    return (
      <li key={index}>
        {`Title: ${item.title} Year: ${item.year} Duration: ${item.duration}        `}
        <button onClick={this.handleEditMovie(item.title)}> Edit </button>
      </li>
    );
  }



};


export default MovieEdit;
