import { createStore, applyMiddleware } from 'redux';
import reducer from './config/reducer.js';

function logger({ getState }) {
	return (next) => (action) => {

	console.log('/** LOGGER **/');
   console.log(action.type, action);

   // Call the next dispatch method in the middleware chain.
   return next(action);
  }
}

let middleware = applyMiddleware(logger)(createStore);
let store = middleware(reducer);

export default store;