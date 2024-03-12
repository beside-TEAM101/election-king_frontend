import React from 'react'
import variables from '@/app/styles/variables.module.scss'
import Image from 'next/image'

const page = () => (
	<div className={variables.candidateWrap}>
		<h1>후보자를 확인해보세요.</h1>

		<div className={variables.candidateCard}>
			{/* <div className={variables.candidateCard__img}> */}
			<Image
				className={variables.candidateCard__img}
				src="/images/profile.png"
				alt="헤드라인 대표 이미지"
				width={45}
				height={45}
			/>
			{/* </div> */}
			<div className={variables.candidateCard__info}>
				<label htmlFor="name">item.name</label>
				<p>item.info</p>
			</div>
		</div>
	</div>
)

export default page
