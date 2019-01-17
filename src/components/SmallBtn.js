import React from 'react'

function SmallBtn() {
	return (
		<>
			<button type="button" rel="tooltip" className="btn btn-info btn-sm">
				<i className="material-icons">edit</i>
				{/* <i class="material-icons">close</i> */}
			</button>
		</>
	)
}

export default SmallBtn;
