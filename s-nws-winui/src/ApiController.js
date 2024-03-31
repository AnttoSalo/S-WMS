import axios from 'axios';
import data from './mockdata.json';

const APIURL = 'http://localhost:3000/api';
function getBalances() {
	axios.get(APIURL + '/balances').then((response) => response.json);
}
function postAllItems() {
	data.warehouseBalances.forEach((item) => postItem(item));
}
function postItem(item) {
	axios
		.post(APIURL + '/stock/create-item', {
			name: item.name,
			item: item.item,
			quantity: item.quantity,
			unitWeight: item.unitWeight,
			supplier: item.supplier,
			lastOrderDate: item.lastOrderDate
		})
		.then((response) => {
			console.log('New item created:', response.data);
			// Handle the response data as needed
		})
		.catch((error) => {
			console.error('Error:', error);
			// Handle errors
		});
}
export default postAllItems;
