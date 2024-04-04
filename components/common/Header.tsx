'use client'

import Image from 'next/image'
import goBackBtn from '@/public/assets/icons/back-arrow.svg'
import goMainBtn from '@/public/assets/icons/home.svg'
import shareBtn from '@/public/assets/icons/share.svg'
import variables from '@/styles/variables.module.scss'
import Link from 'next/link'
import useRoute from '@/hooks/useRoute'
import { useEffect, useState } from 'react'

function Header() {
	const { router, pathname, queries } = useRoute()
	const { city, district } = queries.query

	const [isShareSupported, setIsShareSupported] = useState(false)

	const goBack = () => {
		if (pathname === '/list') {
			router.push('/')
			return
		}

		router.back()
	}

	const handleListShare = async () => {
		if (isShareSupported) {
			try {
				await navigator.share({
					title: '뽑기왕',
					text: '뽑아라! 22대 총선, 당신의 한 표로 결과가 바뀐다!',
					url: `http://localhost:3000/list?candidates=&pageIndex=0&pageSize=50&type=CONGRESS&city=${city}&district=${district}`,
				})
				console.log('성공')
			} catch (e) {
				console.log('실패')
			}
		} else {
			console.log('test')
		}
	}

	useEffect(() => {
		const checkShareSupport = () => {
			if (navigator.share) {
				setIsShareSupported(true)
			} else {
				setIsShareSupported(false)
			}
		}
		checkShareSupport()
	}, [])

	return (
		<div className={variables.header}>
			<button type="button" onClick={goBack}>
				<Image src={goBackBtn} alt="뒤로가기 아이콘" width={24} height={24} />
			</button>

			<div>
				{isShareSupported && (
					<button
						type="button"
						className={variables.shareBtn}
						onClick={handleListShare}>
						<Image src={shareBtn} alt="공유 아이콘" width={24} height={24} />
					</button>
				)}
				<Link href="/">
					<Image
						src={goMainBtn}
						alt="메인페이지로 가는 아이콘"
						width={24}
						height={24}
					/>
				</Link>
			</div>
		</div>
	)
}

export default Header
