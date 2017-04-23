import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import findUserAddressSuccess from './middlewares';

import sagas from './sagas/sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  let middlewares = [
    sagaMiddleware,
    findUserAddressSuccess,
  ];
  if (process.env.NODE_ENV !== ('production' && 'test')) {
    middlewares = [...middlewares, logger];
  }
  const store = createStore(
    rootReducer,
    process.env.NODE_ENV === 'production' ?
      applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares)),
  );
  sagaMiddleware.run(sagas);
  return store;
};
export default configureStore;
