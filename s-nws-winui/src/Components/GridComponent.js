// React component with Bootstrap
import React from 'react';
import {Table} from 'react-bootstrap';

//Data destructured in a weird way? Maybe needs a fix
const GridComponent = ({items}) => {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>Name</th>
					<th>Quantity</th>
					<th>Last Order Date</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{items.map((item, index) => (
					<tr key={index}>
						<td>{item.name}</td>
						<td>{item.unitWeight}</td>
						<td>{item.lastOrderDate}</td>
						<td>{item.quantity}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default GridComponent;
