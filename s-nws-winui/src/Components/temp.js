import React, {useState, useEffect} from 'react';

const SearchTool = ({items}) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [sortingCriteria, setSortingCriteria] = useState('default');
	const [filteredItems, setFilteredItems] = useState(items);

	useEffect(() => {
		// Apply sorting and filtering when criteria change
		applySortingAndFiltering();
	}, [sortingCriteria, searchTerm, items]);

	const applySortingAndFiltering = () => {
		// Filtering based on search term
		const filtered = items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

		// Sorting
		const sorted = [...filtered].sort((a, b) => {
			if (sortingCriteria === 'name') {
				return a.name.localeCompare(b.name);
			} else if (sortingCriteria === 'price') {
				return a.price - b.price;
			}
			// Add more sorting criteria if needed
			return 0;
		});

		setFilteredItems(sorted);
	};

	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSortingChange = (e) => {
		setSortingCriteria(e.target.value);
	};

	return (
		<div>
			<input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />

			<select value={sortingCriteria} onChange={handleSortingChange}>
				<option value="default">Default Sorting</option>
				<option value="name">Sort by Name</option>
				<option value="price">Sort by Price</option>
				{/* Add more sorting options if needed */}
			</select>

			<ul>
				{filteredItems.map((item) => (
					<li key={item.id}>
						{item.name} - ${item.price}
					</li>
				))}
			</ul>
		</div>
	);
};

export default SearchTool;
