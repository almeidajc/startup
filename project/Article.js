import React from 'react';
// import {Link} from 'react-router';
import { Button, Glyphicon, Image, Col, PageHeader, Row } from 'react-bootstrap';

let fav, icon;

class Article extends React.Component {
  constructor(props) {
    super(props)
    if(this.props.params.item.favourite === null){
      fav = `add to favourite`;
      icon = "ok";
    }
    else{
      fav =  `remove to favourite`;
      icon = "remove";
    }
    let item = JSON.parse(this.props.params.item)
    this.state = {
      headline: item.headline.main ,
      abstract: item.abstract,
      pub_date: item.pub_date,
      image: item.multimedia.url,
      link: item.web_url,
      favourite: item.favourite,
      button_text: fav,
      button_icon: icon
    }

    console.log(this.props.params.item)
    this.handleFavourite = this.handleFavourite.bind(this)

  }

handleFavourite(event){
  if(this.state.favourite === "no"){
      // agregar a favoritos con el store
  }
  else{
    // remover de favoritos
  }

}

  render(){
    return(
      <div>
          <h1>{this.state.headline || item.headline.name}</h1>
          <Image src={`${this.state.image}`} thumbnail />
          <p>{this.state.abstract}</p>
          <Button ><Glyphicon glyph={this.state.button_icon} />{this.state.button_text}</Button>
          <p>{this.state.pub_date}</p>
          <a href={`https://static01.nyt.com/${this.state.link}`}><Button bsStyle="primary">Read more</Button></a>
      </div>
    )
  }

}
