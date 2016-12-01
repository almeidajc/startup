import storeArt  from './reducers.js'
import { createStore } from 'redux'

let articleStore = createStore(storeArt);

export default articleStore;
