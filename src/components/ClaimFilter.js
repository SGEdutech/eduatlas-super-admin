import React from 'react'

function ClaimFilter() {
	return (
		<>
			<label htmlFor="claim_filter">Type</label>
			<select id="claim_filter" className="form-control">
				<option>All</option>
				<option>Claimed</option>
				<option>Unclaimed</option>
			</select>
		</>
	)
}

export default ClaimFilter;
