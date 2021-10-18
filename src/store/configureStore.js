import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
// import { composeWithDevTools as devTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './countries/countries';

const reducer = combineReducers({
  countries: countriesReducer,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), applyMiddleware(logger)),
);

export default store;
