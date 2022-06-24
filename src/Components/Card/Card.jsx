import React from 'react';
import styled from 'styled-components';
import CardButton from '../Button/CardButton';

const CardFrame = styled.div`
	width: 352px;
	height: 256px;
	background: #ffffff;
	border-radius: 24px;
`;

const CardWrapper = styled.div`
	width: 80%;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 32px;
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
	font-size: 40px;
	line-height: 48px;
	letter-spacing: -0.02em;
	color: #000000;
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
	font-size: 60px;
	line-height: 72px;
	letter-spacing: -0.02em;
	color: #000000;
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
