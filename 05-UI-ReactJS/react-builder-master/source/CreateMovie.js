import React from 'react';
import Header from './header';

class CreateMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "",year: "",duration: "", favourite: false};
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeDuration = this.handleChangeDuration.bind(this);
    this.handleFavourite = this.handleFavourite.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleChangeYear(event) {
    this.setState({
      year: event.target.value
    });
  }

  handleChangeDuration(event) {
    this.setState({
      duration: event.target.value
    });
  }

  handleFavourite (event) {
    this.setState({
      favourite: event.target.checked
    })
  }

  handleSubmit(event) {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
  }

  render() {
    return (
      <div>
            <Header />
            <label>Title: </label><input type="text" name="title" value={this.state.title} onChange={this.handleChangeTitle} /><br /><br />
            <label>Year: </label><input type="number" min="1900" max="2016" name="year" min="1900" max="2016" value={this.state.year} onChange={this.handleChangeYear} /><br /><br />
            <label>Duration in minutes: </label><input type="number"  name="duration" min="15" max="600" value={this.state.duration} onChange={this.handleChangeDuration}/><br /><br />
            <label />Is favourite ? <input type="checkbox" checked={this.state.favourite} onChange={this.handleFavourite} /> <br /> <br />
            <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
};

export default CreateMovie;
