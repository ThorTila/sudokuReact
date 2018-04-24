import { createStore } from 'redux';
import reducers from '../reducers/reducers';
import DevTools from '../containers/DevTools';

const store = createStore(reducers, DevTools.instrument());

export default store;