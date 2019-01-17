import React from 'react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

import styled from 'styled-components';
import 'styled-components/macro';

// FIXME: move to different file
const OverflowStyled = styled.div`
	overflow-x: auto;
`;

function Table(props) {
	const tuitions = props.tuitions || [];
	const tableRows = tuitions.map(tuition => <TableRow key={tuition._id} tuition={tuition} />);
	return (
		<OverflowStyled>
			<table className="table">
				<thead>
					<TableHeader />
				</thead>
				<tbody>
					{tableRows}
				</tbody>
			</table>
		</OverflowStyled>
	)
}

export default Table;
