import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	width: 295px;
	height: 58px;

	background: #50daa8;
	border: 16px;
	color: #fff;
	border-radius: 16px;

	font-size: 16px;
	text-transform: uppercase;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0.04em;
	cursor: pointer;
	&:hover::after {
		content: url('./arrow.svg');
		vertical-align: middle;
		padding-left: 5px;
	}
`;

const Button = (props) => {
	return <StyledButton>{props.innerText}</StyledButton>;
};

export default Button;
