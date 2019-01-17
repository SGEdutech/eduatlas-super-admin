import React from 'react'

function DateFilter() {
	return (
		<div className="row">
			<div className="col-6">
				<label htmlFor="from_date">From Date</label>
				<input id="from_date" className="form-control" placeholder="From Date" type="date" />
			</div>
			<div className="col-6">
				<label htmlFor="to_date">To Date</label>
				<input id="to_date" className="form-control" placeholder="To Date" type="date" />
			</div>
		</div>
	)
}

export default DateFilter;
