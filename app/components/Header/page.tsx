import Image from 'next/image'
import Link from 'next/link'
import variables from '@/app/styles/variables.module.scss'
import goBackBtn from '@/public/assets/icons/back-arrow.svg'
import goMainBtn from '@/public/assets/icons/home.svg'

function Header() {
	return (
		<div className={variables.header}>
			<Link href="/">
				<Image src={goBackBtn} alt="뒤로가기 아이콘" width={24} height={24} />
			</Link>
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
