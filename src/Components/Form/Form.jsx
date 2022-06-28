import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import OrderButton from '../Button/OrderButton';

const CustomForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 40%;
`;

const CustomInput = styled.input`
	width: 288px;
	height: 56px;
	text-indent: 16px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 16px;

	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: -0.02em;
	&:focus {
		outline: none !important;
		border: 1px solid #4bcfa0;
	}
`;

const ButtonClear = styled.button`
	position: fixed;
	border: none;
	background: transparent;
	width: 24px;
	height: 24px;
	top: 302px;
	left: 290px;
	&::before {
		content: url('./ClearInput.svg');
	}
`;

const Form = () => {
	const {
		register,
		handleSubmit,
		// watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	// console.log(watch('example'));

	return (
		<CustomForm onSubmit={handleSubmit(onSubmit)}>
			<CustomInput
				id='NameInput'
				style={{ border: errors.Name && '1px solid red' }}
				placeholder='Name'
				{...register('Name', {
					required: 'This field in required',
					pattern: {
						value: /^[a-zA-Z]+$/,
						message: 'Only letters allowed',
					},
				})}
			/>
			{errors.Name && <p>{errors.Name.message}</p>}
			{errors.Name?.type === 'pattern' && (
				<ButtonClear type='reset' onClick={() => {}} />
			)}

			<CustomInput
				style={{ border: errors.Number && '1px solid red' }}
				placeholder='Number'
				{...register('Number', {
					required: 'This field in required',
					pattern: {
						value: /^[0-9]+$/g,
						message: 'This input is number only.',
					},
					minLength: { value: 12, message: 'Should contain 12 characters' },
				})}
			/>
			{errors.Number && <p>{errors.Number.message}</p>}

			<OrderButton innerText='Order' />
		</CustomForm>
	);
};

export default Form;
