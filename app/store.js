import { createStore, applyMiddleware } from 'redux';
import reducer from './config/reducer';

function logger({ getState }) {
	return (next) => (action) => {
    console.log(action.type, action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

let middleware = applyMiddleware(logger)(createStore);
let store = middleware(reducer);
//const store = createStore(reducer);

export default store;