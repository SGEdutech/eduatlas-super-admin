import React from 'react';

import SmallBtn from './SmallBtn';

function Search() {
	return (
		<div className="row">
			<div className="col-9">
				<input className="form-control d-inline" placeholder="Search" />
			</div>
			<div className="col-3 text-center">
				<SmallBtn />
			</div>
		</div>
	)
}

export default Search;
