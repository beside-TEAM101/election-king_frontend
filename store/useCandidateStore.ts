import { create } from 'zustand'

interface Candidate {
	name: string
	age: number
	party: string
	job: string
	imgUrl: string | null
}

interface State {
	candidates: Candidate[]
	fetchCandidates: (
		pageIndex: number,
		pageSize: number,
		city: string,
		district: string
	) => Promise<void>
}

const useCandidateStore = create<State>((set) => ({
	candidates: [],
	fetchCandidates: async () =>
		// pageIndex, pageSize, city, district
		{
			try {
				const response = await fetch(``)
				const data = await response.json()
				set({ candidates: data })
			} catch (error) {
				console.error('Error fetching candidates:', error)
			}
		},
}))

export default useCandidateStore
