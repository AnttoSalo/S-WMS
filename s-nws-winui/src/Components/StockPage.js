import React, {useState} from 'react';
import GridComponent from './GridComponent';
import data from '../mockdata.json';
import LayoutComponent from './LayoutComponent';
import SearchTool from './SearchTool';
const StockPage = () => {
	const [items, setItems] = useState(data.warehouseBalances);

	return (
		<LayoutComponent>
			<SearchTool items={items} setItems={setItems}></SearchTool>
			<div className="grid-container p-3 w-50">
				{/* Destructure the 'items' object to pass the array directly */}
				<GridComponent items={items}></GridComponent>
			</div>
		</LayoutComponent>
	);
};

export default StockPage;
