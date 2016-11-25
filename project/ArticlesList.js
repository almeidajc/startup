import React from 'react';
import {Link} from 'react-router';
import { Button, Glyphicon } from 'react-bootstrap';


class ArticlesList extends React.Component {
  constructor(props) {
    super(props)

  }
  // <ul>
  //
  // {this.renderItems()}
  // </ul>

  render() {
    return (
      <ul>

      {this.renderItems()}
      </ul>
    );
  }

  renderItems () {
     let articles;
     if(this.props.articles !== null){
       console.log(this.props.articles)
       articles = this.props.articles;
       return articles.map(this.renderItem);
     }
     return (
       <li />
     )
  }

   renderItem (item, index) {
     let boundItemClick = this.initializeState;
     return (
       <li key={index}>
         {`Title: ${item.response.docs[index].headline.main}`}
         <Link to={`/Article/${JSON.stringify(item)}`}><Button><Glyphicon glyph="info-sign" /> Show notice</Button></Link>
       </li>
     );
   }
}

export default ArticlesList;
