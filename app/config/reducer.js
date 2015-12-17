import objectAssign from 'object-assign';

const reducer = (state = [], action) => {
	switch (action.type) {

		case 'ADD_USER':
			return [...state, action.user]

		default:
			return state;

	}
}

export default reducer;