const initState = {
	tuitions: [],
	fetching: false,
	fetched: false,
	error: null,
	limit: 10,
	skip: 0
};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case 'FETCH_TUITIONS':
			return { ...state, fetching: true }
		case "FETCH_TUITIONS_REJECTED":
			return { ...state, fetching: false, error: action.payload }
		case "FETCH_TUITIONS_FULFILLED":
			return {
				...state,
				fetching: false,
				tuitions: action.payload.data,
				fetched: true,
			}
		default:
			return state
	}
}
