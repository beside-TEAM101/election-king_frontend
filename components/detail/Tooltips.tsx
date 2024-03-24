'use client'

/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable @next/next/no-img-element */

import { Tooltip } from 'react-tooltip'

export default function Tooltips({ id, text }: { id: string; text: string }) {
	return (
		<>
			<button type="button" data-tooltip-id={id}>
				<img src="/assets/icons/icon_info.svg" alt="" />
			</button>
			<Tooltip
				id={id}
				content={text}
				style={{
					boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.15)',
					padding: '15px 16px',
					backgroundColor: 'rgb(255, 255, 255)',
					borderRadius: '8px',
					color: '#222',
				}}
				openOnClick
			/>
		</>
	)
}
