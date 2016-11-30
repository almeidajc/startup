import React from 'react';
import ReactDOM from 'react-dom';
import Rout from './routes';

import { initializeState } from './actions';
import articleStore from './articleStore';

articleStore.dispatch(initializeState());

ReactDOM.render(Rout, document.getElementById('app'));
