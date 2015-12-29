import objectAssign from 'object-assign';

const reducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_USERS':
			console.log('getting users');
			return [...state];
		case 'GET_USER_BY_ID':
			let match = state.filter((user) => user._id === action.id);
			let returnValue = match.length === 1 ? objectAssign({}, match[0]) : null;
			return returnValue;
		case 'ADD_USER':
			return [...state, action.user];
		default:
			return state;
	}
}

export default reducer;