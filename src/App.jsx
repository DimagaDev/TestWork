// import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import { useEffect, useState } from 'react';
import { device } from './Components/DeviseSize/Devise';
import styled from 'styled-components';
import axios from 'axios';

import Button from './Components/Button/Button';

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	@media ${device.mobileM} {
		flex-direction: column-reverse;
	}
	@media ${device.laptop} {
		flex-direction: column;
	}
	@media ${device.mobileL} {
		flex-direction: column;
	}
	@media ${device.tablet} {
		flex-direction: column;
	}
	@media ${device.laptopL} {
		flex-direction: column;
	}
`;

const WrapperCard = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	@media ${device.mobileM} {
		width: 80%;
		height: 80%;
	}
	@media ${device.mobileL} {
		width: 100%;
		height: 75%;
	}
	@media ${device.tablet} {
		width: 80%;
		height: 75%;
	}
	@media ${device.laptop} {
		width: 88%;
		height: 60%;
	}
	@media ${device.laptopL} {
		width: 80%;
		height: 65%;
	}
`;

function App() {
	const [listProducts, setListProducns] = useState([]);
	const [minPrice, setMinPrice] = useState();

	useEffect(() => {
		axios({
			method: 'GET',
			url: 'http://localhost:3002/',
			// url: 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e',
		}).then((response) => {
			setListProducns(response.data.slice(0, 6));
		});
	}, []);

	useEffect(() => {
		// min костыль не придумал как выбрать по уму минимальное =(
		let min = { price: listProducts[0]?.price };
		listProducts.forEach((item) => {
			if (min.price > item.price) {
				min = item;
			}
		});
		setMinPrice(min);
	}, [listProducts]);

	return (
		<>
			<Wrapper>
				<WrapperCard>
					{listProducts.map((item, index) => (
						<Card key={index} item={item} />
					))}
				</WrapperCard>
				<Button item={minPrice} innerText='Buy cheapest' />
			</Wrapper>
		</>
	);
}

export default App;
