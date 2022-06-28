import React, { useState } from 'react';
import styled from 'styled-components';

import ModalCard from '../Modal/ModalCard';

const StyledButton = styled.button`
	width: 235px;
	height: 60px;

	background: #50daa8;
	border: 16px;
	color: #fff;
	border-radius: 16px;
	font-weight: 400;
	font-size: 24px;
	line-height: 28px;
	letter-spacing: -0.02em;
	cursor: pointer;
	&:hover {
		color: #50daa8;
		background-color: #fff;
		border: 1px solid rgba(0, 0, 0, 0.1);
	}
`;

const Button = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const hadlerClose = (state) => {
		setIsOpen(state);
	};

	return (
		<>
			<StyledButton
				onClick={() => {
					setIsOpen(true);
					console.log('click');
				}}
			>
				{props.innerText}
			</StyledButton>

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

export default Button;
