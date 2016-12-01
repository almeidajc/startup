import React from 'react';
// import {Link} from 'react-router';
import { Button, Glyphicon, Image, Col, PageHeader, Row } from 'react-bootstrap';
import storeArt from './reducers'
import { articleInput, articleDelete } from './actions';
import articleStore from './articleStore';

let fav, icon;

let notice;
let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
let request = indexedDB.open("NewNotices", 1);
request.onsuccess = function(event) {
  let db = event.target.result;
}
let transaction = db.transaction(["NewNotices"], "readwrite");

class Article extends React.Component {
    constructor(props) {
    super(props)

    notice  = transaction.id(this.props.params.index);

    let item = JSON.parse(notice.notice)
    if(item.favourite === null){
      fav = `add to favourite`;
      icon = "ok";
    }
    else{
      fav =  `remove to favourite`;
      icon = "remove";
    }
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

    // console.log(this.props.params.item)
    this.handleFavourite = this.handleFavourite.bind(this)

  }

handleFavourite(event){
  if(this.state.favourite === "no"){
      articleStore.dispatch(articleInput(item));
      }
    else{
      articleStore.dispatch(articleDelete(item));
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
