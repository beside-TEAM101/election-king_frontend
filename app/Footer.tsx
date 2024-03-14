import React from 'react'
import Image from 'next/image'
import variables from '@/app/styles/variables.module.scss'

function Footer() {
	return (
		<Image
			className={variables.footer}
			src="/images/footer-character.png"
			alt="아래 대표 이미지"
			width={375}
			height={70}
		/>
	)
}

export default Footer
