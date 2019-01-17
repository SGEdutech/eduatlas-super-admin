import React from 'react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

import styled from 'styled-components';
import 'styled-components/macro';

const TableComponent = ({ className, children }) => (
	<table className={'table ' + className}>
		{children}
	</table>
);

// FIXME: move to different file
const StyledTable = styled(TableComponent)`
	display: block; /* This is important as display table messes with overflow */
	overflow-x: auto;
`;

function Table(props) {
	const tuitions = props.tuitions || [];
	const tableRows = tuitions.map(tuition => <TableRow key={tuition._id} tuition={tuition} />);
	return (
		<StyledTable>
			<thead>
				<TableHeader />
			</thead>
			<tbody>
				{tableRows}
			</tbody>
		</StyledTable>
	);
}

export default Table;
