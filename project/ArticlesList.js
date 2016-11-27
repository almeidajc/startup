import React from 'react';
import {Link} from 'react-router';
import { Button, Glyphicon } from 'react-bootstrap';


class ArticlesList extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
}

  handleShow(item){
    alert("acaa")
    // this.context.router.push(`Article/${JSON.parse(item)}`);
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
       articles = this.props.articles.response;
       return articles.docs.map(this.renderItem);
     }
     return (
       <li />
     )
  }

        //  <Button onClick={this.handleShow.bind(this, item)}><Glyphicon glyph="info-sign" /> Show notice</Button>
//<Glyphicon glyph="info-sign" />
   renderItem (item, index) {
     //  let boundItemClick = this.initializeState;;
     return (
       <li key={index}>
         <h3>{`${item.headline.main}`}</h3>
         <Button bsStyle="primary" onClick={console.log("item")}>Submit</Button>
       </li>
     );
   }
}

// <button onClick={console.log("hello")} > Show notice</button>
//onClick={thisClass.handleShow.bind(this)}

ArticlesList.contextTypes = {
    router: React.PropTypes.func
};

export default ArticlesList;
