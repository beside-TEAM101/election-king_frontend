// 'use client'

// import React, { ReactNode } from 'react'

// const defaultCardCss =
// 	'border border-nutral-white-03 rounded hover:border-primary-light disabled:bg-nutral-white-02'
// let cardSizeCss = ''
// interface CardProps {
// 	children?: ReactNode
// 	size?: 'lg' | 'md' | 'sm'
// }
// export default function EKCard({
// 	children = undefined,
// 	size = 'sm',
// }: CardProps) {
// 	if (size === 'sm') {
// 		cardSizeCss = 'px-5 py-4'
// 	} else if (size === 'md') {
// 		cardSizeCss = 'px-5 py-6'
// 	} else if (size === '') {
//     cardSizeCss = ''
//   }
// 		return (
// 			<div>
// 				<div className="flex gap-3 text-body-02">
// 					<input
// 						className={`${cardSizeCss} ${defaultCardCss} appearance-none outline-none`}
// 						disabled={disabled}
// 					/>
// 					<label>{children}</label>
// 				</div>
// 			</div>
// 		)
// }
