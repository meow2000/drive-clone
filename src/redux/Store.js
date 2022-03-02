import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootSagas from './sagas'
import rootReducer from './reducers/Index';
import createSagaMiddleware from 'redux-saga'
const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSagas);

export default store;