export type TListResponse = {
	totalCount: number
	pageIndex: number
	pageSize: number
	result: TCandidate[]
}

type TCandidate = {
	id: number
	name: string
	age: number
	party: string
	job: string
	imgUrl?: string
}
