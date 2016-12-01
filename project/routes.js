import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import articleStore from './articleStore';
import header from './header'
import SearchConfig from './SearchConfig';
import ApiConfig from './ApiConfig';
import ArticlesList from './ArticlesList';
import Favourites from './Favourites'
import Article from './Article'
              // <Route path='/favourites' component={Favourites} />
/*
<Route path='ApiConfig/:item' component={ApiConfig} />
<Route path='/ArticlesList' component={ArticlesList} />
<Route path='/article/:item' component={Article} />
<Route path='/favourites' component={Favourites} />
*/


export default (
                <Provider store={articleStore}>
                  <Router history={browserHistory}>
                    <Route path='/' component={header}>
                      <Route path='SearchConfig' component={SearchConfig} />
                      <Route path='ApiConfig/:item' component={ApiConfig} />
                      <Route path='ArticlesList' component={ArticlesList} />
                      <Route path='Article/:index' component={Article} />
                      <Route path='Favourites' component={Favourites} />
                    </Route>
                  </Router>
                </Provider>
              )
