import React, {useState} from 'react';
import GridComponent from './GridComponent';
import data from '../mockdata.json';
import LayoutComponent from './LayoutComponent';
import SearchTool from './SearchTool';
const StockPage = () => {
	const [items, setItems] = useState(data.warehouseBalances);
	const [visibleItems, setVisibleItems] = useState(data.warehouseBalances);

	const updateItems = (updatedItems) => {
		setVisibleItems(updatedItems);
	};

	return (
		<LayoutComponent>
			<div className="p-3">
				<SearchTool className="p-2" items={items} setItemsCallback={updateItems}></SearchTool>
			</div>
			<div className="grid-container p-3 w-80">
				{/* Destructure the 'items' object to pass the array directly */}
				<GridComponent items={visibleItems}></GridComponent>
			</div>
		</LayoutComponent>
	);
};

export default StockPage;
