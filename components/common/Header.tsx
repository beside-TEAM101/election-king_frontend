'use client'

import Image from 'next/image'
import goBackBtn from '@/public/assets/icons/back-arrow.svg'
import goMainBtn from '@/public/assets/icons/home.svg'
import variables from '@/styles/variables.module.scss'
import Link from 'next/link'
import useRoute from '@/hooks/useRoute'

function Header() {
	const { router, pathname } = useRoute()
	console.log('pathname', pathname)
	const goBack = () => {
		if (pathname === '/list') {
			router.push('/')
			return
		}

		router.back()
	}
	return (
		<div className={variables.header}>
			<button
				type="button"
				onClick={goBack}
				href={`${pathname === '/list' ? '/' : '/list'}`}>
				<Image src={goBackBtn} alt="뒤로가기 아이콘" width={24} height={24} />
			</button>
			<Link href="/">
				<Image
					src={goMainBtn}
					alt="메인페이지로 가는 아이콘"
					width={24}
					height={24}
				/>
			</Link>
		</div>
	)
}

export default Header
