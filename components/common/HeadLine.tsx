'use client'

import Image from 'next/image'
import headLineImage from '@/public/assets/images/headlLine-character.svg'
import variables from '@/styles/variables.module.scss'

export default function HeadLine() {
	return (
		<section className={variables.headlineWrap}>
			<div className={variables.headlineWrap__box}>
				<div>
					<span className={variables.badge}>뽑기왕</span>
					<h1>
						22대 총선 선거 <br /> 누가누가 잘뽑나?
					</h1>
				</div>
				<Image
					src={headLineImage}
					alt="헤드라인 대표 이미지"
					width={160}
					height={160}
					priority
				/>
			</div>
		</section>
	)
}
