// import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from './Components/Button/Button';

function App() {
	const [listProducts, setListProducns] = useState([]);

	useEffect(() => {
		axios({
			method: 'GET',
			url: 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e',
		}).then((response) => {
			setListProducns(response.data.slice(0, 6));
		});
	}, []);

	return (
		<>
			<div className='wrapper'>
				<div className='wrapper_card'>
					{listProducts.map((item, index) => (
						<Card key={index} item={item} />
					))}
				</div>
				<Button items={listProducts} innerText='Buy cheapest' />
			</div>
		</>
	);
}

export default App;
