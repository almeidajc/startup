import React from 'react'
import MovieInput from './MovieInput'

class MovieEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {title: "",year: "",duration: "", favourite: false};
    this.handleUpdate = this.handleUpdate.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.initializeState = this.initializeState.bind(this);
    this.handleUpdateTitle = this.handleUpdateTitle.bind(this);
    this.handleUpdateYear = this.handleUpdateYear.bind(this);
    this.updateUpdateDuration = this.updateUpdateDuration.bind(this);
    this.handleUpdateFavourite = this.handleUpdateFavourite.bind(this);
  }

  render() {
    return (
      <div>
        {this.renderMovies()}
      </div>
    );
  }

  initializeState (index) {
    // // console.log(index)
    this.props.onSubmit(index);
  }

  handleUpdateTitle (event) {
    this.setState({title: event.target.value})
    // console.log(this.state.title);
  }

  handleUpdateYear(event) {
    this.setState({year: event.target.value});
    // console.log(this.state.year);
  }

  updateUpdateDuration(event) {
    this.setState({duration: event.target.value});
    // console.log(this.state.duration);
  }

  handleUpdateFavourite (event) {
    this.setState({favourite: event.target.checked})
    // console.log(this.state.favourite);
  }

  handleUpdate(index) {
    // console.log(index);
    this.props.onSubmit(this.state, index);
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
        {`Title: ${item.title} Year: ${item.year} Duration: ${item.duration}`}
      </li>
    );
  }


  renderMovies () {
    let isSelected = false;

    if (this.props.movies !== null ){
      return (
        this.props.movies.map(this.renderMovie)
      )
    } else {
      return null;
    }
  }

  renderMovie (item, index) {
    let boundItemClick = this.initializeState.bind(this, index);
    let boundItemUpdate = this.handleUpdate.bind(this, index)
    return (
      <div key={index}>
        <br />
        <label>Title: </label>
        <li>{item.title}</li>
        <button onClick={boundItemClick}>Edit</button>
      </div>
    )
  }
};

function enableEdit () {
  isEnabled = true;
}

export default MovieEdit;
