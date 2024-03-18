import type { Metadata } from 'next'
import PreFont from 'next/font/local'
import '@/styles/globals.css'
import variables from '@/styles/variables.module.scss'

const pretendard = PreFont({
	src: '../public/assets/fonts/Pretendard-Regular.woff2',
	display: 'swap',
})

export const metadata: Metadata = {
	title: '총선 서비스',
	description: '유권자들이 후보자들의 정보를 간편 조회할 수 있는 서비스',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ko">
			<body>
				<div className={`${variables.container} ${pretendard.className}`}>
					{/* <Header /> */}
					<main>{children}</main>
				</div>
			</body>
		</html>
	)
}
