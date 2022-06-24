import React, { useState } from 'react';
import styled from 'styled-components';
import ModalCard from '../Modal/ModalCard';

const StyledCardButton = styled.button`
	width: 64px;
	height: 56px;

	background: #fff;
	color: #50daa8;
	border-radius: 16px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	&:hover {
		color: #fff;
		background-color: #50daa8;
		border: none;
	}
`;

const CardButton = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const hadlerClose = (state) => {
		setIsOpen(state);
	};

	return (
		<>
			<StyledCardButton
				onClick={() => {
					setIsOpen(true);
				}}
			>
				{props.innerText}
			</StyledCardButton>
			{isOpen && (
				<ModalCard
					item={props.item}
					isOpen={isOpen}
					hadlerClose={hadlerClose}
				/>
			)}
		</>
	);
};

export default CardButton;
