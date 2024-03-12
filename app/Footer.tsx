import React from 'react'
import Image from 'next/image'

function Footer() {
	return (
		<Image
			className="footer"
			src="icons/footer-character.svg"
			alt="아래 대표 이미지"
			width={409}
			height={109}
		/>
	)
}

export default Footer
