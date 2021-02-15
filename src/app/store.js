import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import thunk from 'redux-thunk';

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
}

export default configureStore();
