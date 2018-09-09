import React from 'react';
import Table from '../containers/store-list';
import Details from '../containers/details';

const WebPage = () => (
	<div>
	<h2>Store</h2>
	<Table />
	<hr />
	<h3>Details:</h3>
	<Details />
	</div>
	);

export default WebPage;