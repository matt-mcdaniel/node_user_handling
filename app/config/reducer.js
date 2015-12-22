import objectAssign from 'object-assign';

const reducer = (state = { readme: null, users: [] }, action) => {
	if (action.type === 'README') {
		state.readme = action.readme;
		return state;
	} else if (action.type === 'ADD_USER') {
		state.users = [...state.users, action.user];
		return state;
	} else if (action.type === 'SELECT_USER') {
		console.log('hello from reducer.js:', action.user);
	} else {
		return state;
	}
}

export default reducer;