import '@/styles/globals.css'
import variables from '@/styles/variables.module.scss'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import { Suspense } from 'react'

const pretendard = localFont({
	src: [
		{
			path: '../public/assets/fonts/Pretendard-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/assets/fonts/Pretendard-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/assets/fonts/Pretendard-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../public/assets/fonts/Pretendard-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
})

export const metadata: Metadata = {
	title: '뽑기왕',
	description: '유권자들이 후보자들의 정보를 간편 조회할 수 있는 서비스',
	openGraph: {
		type: 'website',
		title: '뽑기왕',
		description: '유권자들이 후보자들의 정보를 간편 조회할 수 있는 서비스',
		images: 'https://election-king.team-101.com/og-image.jpg',
	},
	icons: {
		icon: ['/favicon.ico'],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ko">
			{process.env.NODE_ENV !== 'development' && (
				<>
					<Script
						strategy="afterInteractive"
						src="https://www.googletagmanager.com/gtag/js?id=G-ZB6EGCJR1V"
					/>
					<Script
						id="gtag-init"
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
							__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-ZB6EGCJR1V', {
							page_path: window.location.pathname,
					});
				`,
						}}
					/>
				</>
			)}
			<body>
				<div className={`${pretendard.className} ${variables.container}`}>
					<main>
						<Suspense>{children}</Suspense>
					</main>
				</div>
			</body>
		</html>
	)
}
