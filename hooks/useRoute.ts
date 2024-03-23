import {
	notFound,
	usePathname,
	useRouter,
	useSearchParams,
} from 'next/navigation'

export default function useRoute() {
	const router = useRouter()
	const pathname = usePathname()
	const queries = useSearchParams()
	const query = Object.fromEntries(useSearchParams().entries())

	console.log('query', query)

	return {
		router,
		pathname,
		queries: {
			qs: queries,
			query,
		},
		notFound,
	}
}
