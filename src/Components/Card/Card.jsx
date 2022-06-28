import React from 'react';
import styled from 'styled-components';
import CardButton from '../Button/CardButton';
import { device } from '../DeviseSize/Devise';

const CardFrame = styled.div`
	width: 352px;
	height: 256px;
	background: #ffffff;
	border-radius: 24px;
	@media ${device.mobileM} {
		width: 300px;
		height: 210px;
		margin-bottom: 10px;
	}
	@media ${device.mobileL} {
		width: 197px;
		height: 216px;
		margin-bottom: 0px;
	}
	@media ${device.tablet} {
		width: 282px;
		height: 228px;
		margin-bottom: 0px;
	}
	@media ${device.laptop} {
		width: 285px;
		height: 240px;
		margin-bottom: 0px;
	}
	@media ${device.laptopL} {
		width: 352px;
		height: 256px;
		margin-bottom: 0px;
	}
`;

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 32px;
	@media ${device.mobileL} {
		width: 90%;
		height: 90%;
		padding: 15px;
	}
	@media ${device.laptopL} {
		width: 80%;
		height: 80%;
		padding: 32px;
	}
`;

export const Category = styled.div`
	width: 59px;
	height: 24px;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: #000000;
	opacity: 0.5;
`;

export const NameProduct = styled.div`
	/* width: 225px; */
	height: 48px;
	font-weight: 400;
	line-height: 48px;
	letter-spacing: -0.02em;
	color: #000000;
	@media ${device.mobileL} {
		font-size: 25px;
	}
	@media ${device.laptopL} {
		font-size: 40px;
	}
`;

export const PriceWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Currency = styled.div`
	font-weight: 400;
	font-size: 30px;
	line-height: 35px;
	letter-spacing: -0.02em;
	color: #000000;
`;

export const ValueWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const Value = styled.div`
	font-weight: 400;
	line-height: 72px;
	letter-spacing: -0.02em;
	color: #000000;
	@media ${device.mobileM} {
		font-size: 60px;
	}
	@media ${device.mobileL} {
		font-size: 35px;
	}
	@media ${device.tablet} {
		font-size: 60px;
	}
	@media ${device.laptop} {
		font-size: 60px;
	}
	@media ${device.laptopL} {
		font-size: 60px;
	}
`;

const Card = (props) => {
	return (
		<CardFrame>
			<CardWrapper>
				<Category>{props.item.category}</Category>
				<NameProduct>{props.item.name}</NameProduct>
				<PriceWrapper>
					<ValueWrapper>
						<Currency>$</Currency>
						<Value>{props.item.price}</Value>
					</ValueWrapper>
					<CardButton innerText='Buy' item={props.item} />
				</PriceWrapper>
			</CardWrapper>
		</CardFrame>
	);
};

export default Card;
