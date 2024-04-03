/* eslint-disable consistent-return */
import { TBillVotingResultResponse, TDetailResponse } from '@/types/detail'
import { objectToQueryString } from '@/utils/string'
import { notFound } from 'next/navigation'
import request from './request'

export const getBillVotingResults = async (queries: {
	[key: string | number]: any
}) => {
	try {
		const { data } = await request.get<TBillVotingResultResponse>(
			`/billvotes${objectToQueryString(queries)}`
		)
		return data
	} catch (err) {
		console.log(err)
	}
}

export const getDetail = async (id: string) => {
	try {
		const { data } = await request.get<TDetailResponse>(`/candidate/${id}`)
		return data
	} catch (err) {
		console.log('err', err)
		notFound()
	}
}
