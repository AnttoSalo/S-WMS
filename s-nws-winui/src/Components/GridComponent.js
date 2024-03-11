import React from 'react';
import {Table} from 'react-bootstrap';

const formatLabel = (label) => {
	// Capitalize first letter and add space before each capital letter
	return label.charAt(0).toUpperCase() + label.slice(1).replace(/([A-Z])/g, ' $1');
};

const GridComponent = ({items}) => {
	// Check if there are any items in the array
	if (items.length === 0) {
		return <p>No items to display</p>;
	}

	// Extract the keys from the first item to use as formatted column headers
	const columns = Object.keys(items[0]);

	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					{columns.map((column, index) => (
						<th key={index}>{formatLabel(column)}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{items.map((item, rowIndex) => (
					<tr key={rowIndex}>
						{columns.map((column, colIndex) => (
							<td key={colIndex}>{item[column]}</td>
						))}
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default GridComponent;
