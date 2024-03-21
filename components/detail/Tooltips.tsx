'use client'

/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable @next/next/no-img-element */

import { Tooltip } from 'react-tooltip'
import utilStyle from '@/styles/utils.module.scss'

export default function Tooltips({ id, text }: { id: string; text: string }) {
	return (
		<>
			<button type="button" data-tooltip-id={id}>
				<img src="/assets/icons/icon_info.svg" alt="" />
			</button>
			<Tooltip
				id={id}
				content={text}
				className={utilStyle.tooltip}
				openOnClick
			/>
		</>
	)
}
