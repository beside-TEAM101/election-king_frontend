import React from 'react'
import Image from 'next/image'
import variables from '@/styles/variables.module.scss'
import FooterImage from '@/public/assets/images/footer-character.svg'

function Footer() {
	return (
		<Image
			className={variables.footer}
			src={FooterImage}
			alt="아래 대표 이미지"
		/>
	)
}

export default Footer
