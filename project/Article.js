import React from 'react';
// import {Link} from 'react-router';
import { Button, Glyphicon, Image, Col, PageHeader, Row } from 'react-bootstrap';

class Article extends React.Component {
  constructor(props) {
    super(props)
    let favourite
    if(this.props.params.item.favourite === "no"){
      fav = `add to favourite`
    }
    else{
      fav =  `remove to favourite`
    }
    this.state = {
      headline: this.props.params.item.headline.main ,
      abstract: this.props.params.item.abstract,
      pub_date: this.props.params.item.pub_date,
      image: this.props.params.item.multimedia.url,
      link: this.props.params.item.web_url,
      favourite: this.props.params.item.favourite,
      button_text: fav
    }

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
        <PageHeader xs={12} md={10} lg{8}>{this.state.headline}</PageHeader>
        <Col xs={12} md={10} lg{8}>
          <Image src={`${this.state.image}`} thumbnail />
        </Col>
        <p>{this.state.abstract}</p>
        <Row>
          <Col sm={6} xs={6} lg={6} md={6}><Button onClick={this.}><Glyphicon glyph="star" />{this.state.button_text}</Button></Col>
          <Col smOffset={6} xsOffset={6} lgOffset={6} mdOffset={6}><p>{this.state.pub_date}</p></Col>
        </Row>
        <a href={`https://static01.nyt.com/${this.state.link}`}><Button bsStyle="primary">Read more</Button></a>
      </div>
    )
  }

}
