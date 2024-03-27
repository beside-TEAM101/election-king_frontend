'use client'

import Image from 'next/image'
import { animated, useSpring } from '@react-spring/web'
import { PARTY_BORDER_COLOR } from '@/constants/party'
import detailStyle from '@/styles/detail.module.scss'
import { useEffect, useState } from 'react'

export default function ProfileImage({
	src,
	alt,
	party,
}: {
	src: string
	alt: string
	party: string
}) {
	const [, setIsReady] = useState(false)

	const pickUpAll = useSpring({
		from: { x: 0, y: -60, opacity: 0 },
		to: async (next) => {
			await next({ x: 0, y: 0, opacity: 1 })
		},
		config: { duration: 500 },
	})

	const tongs = useSpring({
		from: { x: 0, y: 0, opacity: 1 },
		to: async (next) => {
			await next({ x: 0, y: -60, opacity: 1 })
		},
		config: { duration: 500 },
		delay: 1000,
	})

	useEffect(() => {
		setTimeout(() => {
			setIsReady(true)
		}, 300)
	}, [])

	return (
		<animated.div style={pickUpAll} className={detailStyle.preview__layer}>
			<animated.span style={tongs} className={detailStyle.preview__handleLayer}>
				<Image src="/assets/detail/pickup.svg" width={96} height={80} alt="" />
			</animated.span>
			<span className={detailStyle.preview__img}>
				<Image
					src={src}
					alt={alt}
					width={64}
					height={64}
					className={`${PARTY_BORDER_COLOR[party] || PARTY_BORDER_COLOR['무소속']}`}
				/>
			</span>
		</animated.div>
	)
}
