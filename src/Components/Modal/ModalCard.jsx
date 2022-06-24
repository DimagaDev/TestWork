import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Close } from '../AllSvg';
import {
	Category,
	Currency,
	NameProduct,
	PriceWrapper,
	ValueWrapper,
	Value,
} from '../Card/Card';
import Form from '../Form/Form';

const ButtonClose = styled.button`
	top: -8px;
	right: -8px;
	position: absolute;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	background: #f2f2f2;
	border: none;
`;

const ModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	justify-content: space-evenly;
`;

Modal.setAppElement('#root');

const ModalCard = (props) => {
	console.log(props);

	const [modalIsOpen, setIsOpen] = React.useState(props.isOpen);

	function closeModal() {
		setIsOpen(false);
		props.hadlerClose(false);
	}

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			className='Modal'
			contentLabel='Card Modal'
			overlayClassName='Overlay'
		>
			<ButtonClose onClick={closeModal}>
				<Close style={{ marginTop: '1px' }} />
			</ButtonClose>
			<ModalWrapper>
				<Category>{props.item.category}</Category>
				<NameProduct>{props.item.name}</NameProduct>
				<PriceWrapper>
					<ValueWrapper>
						<Currency>$</Currency>
						<Value>{props.item.price}</Value>
					</ValueWrapper>
				</PriceWrapper>
				<Form />
			</ModalWrapper>
		</Modal>
	);
};

export default ModalCard;
