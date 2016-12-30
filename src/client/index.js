import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import routes from './routes';
 
const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
	const createLogger = require('redux-logger');
	const logger = createLogger();
	middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory} routes={routes} />
    </div>
  </Provider>,
  document.getElementById('root')
)
