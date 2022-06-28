import * as React from 'react';

export const Close = (props) => (
	<svg
		width={20}
		height={20}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M15 5 5 15M5 5l10 10'
			stroke='#000'
			strokeWidth={2}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export const CloseInput = (props) => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<circle cx={12} cy={12} r={12} fill='#E43F3F' />
		<path
			d='M17 7 7 17M7 7l10 10'
			stroke='#fff'
			strokeWidth={2}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
