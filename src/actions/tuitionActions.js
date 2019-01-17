import axios from 'axios'

export function fetchTuitionsAction(skip = 0, limit = 10) {
	return dispatch => {
		dispatch({
			type: 'FETCH_TUITIONS',
			payload: axios.get('https://eduatlas.com/tuition/all', {
				params: {
					demands: 'name city email primaryNumber claimedBy',
					skip,
					limit
				}
			})
		});
	}
}
