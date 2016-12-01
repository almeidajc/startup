import React from 'react';
import {Link} from 'react-router';
import { Button, Glyphicon } from 'react-bootstrap';
import Rout from './routes';

import storeArt from './reducers'
import { articleInput, articleDelete } from './actions';
import articleStore from './articleStore';
import Article from './Article'


let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
let request = indexedDB.open("NewNotices", 1);
request.onsuccess = function(event) {
  let db = event.target.result;
  let objectStore = db.createObjectStore("NewNotices", { keyPath: "index" });
  objectStore.createIndex("notice", "notice", { unique: false });
}

class ArticlesList extends React.Component {
  constructor(props) {
    super(props);

    this.showNotice = this.showNotice.bind(this);
    // console.log(this.props);
}

  showNotice(index){
    // console.log(JSON.stringify(item))
    this.context.router.push(`Article/${index}`);
  }

  storeAction(item){
    if(item.favourite === undefined){
      item.favourite = "yes";
      articleStore.dispatch(articleInput(item));
      }
    else{
      item.favourite = null;
      articleStore.dispatch(articleDelete(item));
    }
  }

  render() {
    return (
      <ul>
        {this.renderItems()}
      </ul>
    );
  }

  renderItems () {
     let articles;
     if(this.props.articles != null){
       articles = this.props.articles;
       return articles.docs.map(this.renderItem, this);
     }
     return (
       <li />
     )
  }

        //  <Button onClick={this.handleShow.bind(this, item)}><Glyphicon glyph="info-sign" /> Show notice</Button>
   renderItem (item, index) {
      let boundItemClick = this.initializeState;
      let icon, text;

      function add(){
        let transaction = db.transaction(["NewNotices"], "readwrite");
        transaction.objectStore("NewNotices").add({id: index, notice: item})
      }




      if(item.favourite === undefined){
        text = `add to favourite`;
        icon = "ok";
      }
      else{
        text = `remove from favourite`;
        icon = "remove";
      }
     return (
       <div>
         <li key={index}>
           <h3>{`${item.headline.main || item.headline.name}`}</h3>
         </li>
         <button onClick={()=>{this.showNotice(index)}} ><Glyphicon glyph="info-sign" />Read More</button>
         <button onClick={()=>{this.storeAction(item)}} ><Glyphicon glyph={icon} /> {text} </button>
       </div>
     );
   }


}
// <button>Show</button>

// <button onClick={addFavourites(item)}> Add to favourites </button>

// <button onClick={console.log("hello")} > Show notice</button>
//onClick={thisClass.showNotice.bind(this,item)}



ArticlesList.contextTypes = {
    router: React.PropTypes.func
};

export default ArticlesList;
