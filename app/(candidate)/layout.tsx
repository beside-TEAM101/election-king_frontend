import Header from '@/components/common/Header'
import Loading from '@/components/common/loading'
import { Suspense } from 'react'

export default function CandidateLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<Suspense fallback={<Loading />}>{children}</Suspense>
		</>
	)
}
