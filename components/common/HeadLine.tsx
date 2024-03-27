'use client'

import Image from 'next/image'
import headLineImage from '@/public/assets/images/headlLine-character.svg'
import variables from '@/styles/variables.module.scss'
import { animated, useSpring } from '@react-spring/web'
import { useEffect, useState } from 'react'

export default function HeadLine() {
	const [, setIsReady] = useState(false)

	const pickUpAll = useSpring({
		from: { x: 108, y: -80, opacity: 0 },
		to: { x: 20, y: -28, opacity: 1 },
		config: { duration: 500 },
	})

	useEffect(() => {
		setTimeout(() => {
			setIsReady(true)
		}, 300)
	}, [])
	return (
		<section className={variables.headlineWrap}>
			<div className={variables.headlineWrap__box}>
				<div>
					<span className={variables.badge}>뽑기왕</span>
					<h1>
						22대 총선 선거 <br /> 누가누가 잘뽑나?
					</h1>
				</div>
				<animated.span
					style={pickUpAll}
					className={variables.headlineWrap__imgLayer}>
					<Image
						src={headLineImage}
						alt="헤드라인 대표 이미지"
						width={160}
						height={160}
						priority
					/>
				</animated.span>
			</div>
		</section>
	)
}
