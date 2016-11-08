import handleM from './reducers.js'
import { createStore } from 'redux'

let moviesStore = createStore(handleM);
export default moviesStore;
