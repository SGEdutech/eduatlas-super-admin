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
			<StyledTh>#</StyledTh>
			<StyledTh>Name</StyledTh>
			<StyledTh>City</StyledTh>
			<StyledTh>Phone Number</StyledTh>
			<StyledTh>Email</StyledTh>
			<StyledTh>Actions</StyledTh>
		</tr>
	);
}

export default TableHeader;
