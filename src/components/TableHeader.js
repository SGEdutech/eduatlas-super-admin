import React from 'react';
import styled from 'styled-components';
import 'styled-components/macro';

const StyledTh = styled.th`
	&&& {
		font-size: 0.75rem
	}
`;

function TableHeader() {
	return (
		<tr>
			<th>#</th>
			<th>Name</th>
			<th>City</th>
			<th>Phone Number</th>
			<th>Email</th>
			<th>Actions</th>
		</tr>
	);
}

export default TableHeader;
