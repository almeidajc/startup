import React, { Component } from 'react';
import Movie from './Movie';
import List from './List';
import MovieInput from './MovieInput';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import moviesStore from './moviesStore';

class Rout extends Component {
 render() {
     return (
      <div>
        <Provider store={moviesStore}>
          <Router history = {browserHistory}>
            <Route path='/' component={Movie} />
              <Route path='/MovieInput/' component={MovieInput} />
              <Route path='/MovieInput/:item' component={MovieInput} />
              <Route path='/List' component={List} />
          </Router>
        </Provider>
      </div>
    )
  }
}

export default Rout;
