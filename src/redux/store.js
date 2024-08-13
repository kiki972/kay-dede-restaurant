import { createStore, combineReducers } from 'redux';
import { productsReducer } from './reducers/productsReducer';
import { reservationsReducer } from './reducers/reservationsReducer';
// Import other reducers

const rootReducer = combineReducers({
  products: productsReducer,
  reservations: reservationsReducer,
  // Add other reducers
});

const store = createStore(rootReducer);

export default store;