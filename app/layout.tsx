import type { Metadata } from 'next'
import PreFont from 'next/font/local'
import './globals.css'
// import Header from './components/Header/page'
import Footer from './components/Footer/page'

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
				<div className={pretendard.className}>
					{/* <Header /> */}
					<main>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}
