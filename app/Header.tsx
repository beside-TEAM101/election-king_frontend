import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import variables from '@/app/styles/variables.module.scss'

function Header() {
	return (
		<div className={variables.header}>
			<Link href="/">
				<Image
					src="/assets/icons/back-arrow.svg"
					alt="뒤로가기 아이콘"
					width={24}
					height={24}
				/>
			</Link>
			<Link href="/">
				<Image
					src="/assets/icons/home.svg"
					alt="메인페이지로 가는 아이콘"
					width={24}
					height={24}
				/>
			</Link>
		</div>
	)
}

export default Header
