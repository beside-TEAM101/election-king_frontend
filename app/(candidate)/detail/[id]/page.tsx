import request from '@/service/request'
import { TDetailResponse } from '@/types/detail'
import { notFound } from 'next/navigation'

export default async function Detail({ params }: { params: { id: string } }) {
	try {
		const { data } = await request.get<TDetailResponse>(
			'/candidates?pageIndex=0&pageSize=10&city=서울특별시&district=종로구'
		)
		console.log('res', data)
	} catch (err) {
		notFound()
	}

	return <div>detail: {params.id}</div>
}
