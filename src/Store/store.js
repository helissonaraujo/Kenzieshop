import { legacy_createStore as createStore, combineReducers } from 'redux';
import cartReducer from './Modules/cart/reducer';
import productsReducer from './Modules/products/reducer';

const reducers = combineReducers({
	products: productsReducer,
	cart: cartReducer,
});

export const store = createStore(reducers);

