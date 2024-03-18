'use client'

import variables from '@/app/styles/variables.module.scss'
import Image from 'next/image'
import headLineImage from '@/public/assets/images/headlLine-character.png'

export default function HeadLine() {
	return (
		<section className={variables.headlineWrap}>
			<h1>
				22대 총선 선거 <br /> 누가누가 잘뽑나?
			</h1>
			<Image
				src={headLineImage}
				alt="헤드라인 대표 이미지"
				width={168}
				height={172}
				priority
			/>
		</section>
	)
}
