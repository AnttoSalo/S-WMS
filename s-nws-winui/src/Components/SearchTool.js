import React, {useState, useEffect} from 'react';

const SearchTool = ({items, setItemsCallback}) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [sortingCriteria, setSortingCriteria] = useState('default');
	const [sortingOrder, setSortingOrder] = useState('ascending'); // New state for sorting order
	const [filteredItems, setFilteredItems] = useState(items);

	useEffect(() => {
		// Apply sorting and filtering when criteria or sorting order change
		applySortingAndFiltering();
	}, [sortingCriteria, searchTerm, sortingOrder]);

	const applySortingAndFiltering = () => {
		// Filtering based on search term
		const filtered = items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

		// Sorting
		const sorted = [...filtered].sort((a, b) => {
			let result = 0;
			if (sortingCriteria === 'name') {
				result = a.name.localeCompare(b.name);
			} else if (sortingCriteria === 'quantity') {
				result = a.quantity - b.quantity;
			}
			// Add more sorting criteria if needed

			// Adjust the result based on sorting order
			return sortingOrder === 'ascending' ? result : -result;
		});

		setFilteredItems(sorted);
		setItemsCallback(sorted);
	};

	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSortingChange = (e) => {
		setSortingCriteria(e.target.value);
	};

	const handleSortingOrderChange = (order) => {
		setSortingOrder(order);
	};

	return (
		<div>
			<input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />

			<select value={sortingCriteria} onChange={handleSortingChange}>
				<option value="default">Default Sorting</option>
				<option value="name">Sort by Name</option>
				<option value="quantity">Sort by Quantity</option>
				{/* Add more sorting options if needed */}
			</select>

			<label>
				<input type="radio" name="sortingOrder" value="ascending" checked={sortingOrder === 'ascending'} onChange={() => handleSortingOrderChange('ascending')} />
				Ascending
			</label>

			<label>
				<input type="radio" name="sortingOrder" value="descending" checked={sortingOrder === 'descending'} onChange={() => handleSortingOrderChange('descending')} />
				Descending
			</label>
		</div>
	);
};

export default SearchTool;
