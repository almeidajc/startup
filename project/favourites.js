import React from 'react';
import { connect } from 'react-redux';

import storeArt from './reducers'
import { articleDelete } from './actions';
import articleStore from './articleStore';
import ArticlesList from './ArticlesList';


class Favourites extends React.Component {

    constructor(props){
      super(props)
    }

  onRemove(index){
    articleStore.dispatch(articleDelete(index))
  }


  render () {
    console.log(this.props.articles);
    return (
      <ArticlesList articles={this.props.articles} onRemove={this.removeFavourite}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    article: state
  }
}


export default connect(mapStateToProps)(Favourites);
