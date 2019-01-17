import React from 'react';
import SmallBtn from './SmallBtn';

function TableRow(props) {
	const { name, city, primaryNumber, email, _id } = props.tuition;
	return (
		<tr>
			<td>1</td>
			<td>{name}</td>
			<td>{city}</td>
			<td>{primaryNumber}</td>
			<td>{email}</td>
			<td>
				<SmallBtn />
				<SmallBtn />
			</td>
		</tr>
	)
}

export default TableRow;
