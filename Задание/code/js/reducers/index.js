import {combineReducers} from 'redux';
import StoreReducers from './store';
import ActiveStore from './store-active';

const allReducers = combineReducers({
	store: StoreReducers,
	active: ActiveStore,
});

export default allReducers;