import { createStore, applyMiddleware } from 'redux';
import reducer from './config/reducer';

function logger({ getState }) {
	return (next) => (action) => {

	// fire socket event
   console.log(action.type, action);
   socket.emit(action.type, getState());
   console.log('from reducer:', getState());

   // Call the next dispatch method in the middleware chain.
   return next(action);
  }
}

let middleware = applyMiddleware(logger)(createStore);
let store = middleware(reducer);

export default store;