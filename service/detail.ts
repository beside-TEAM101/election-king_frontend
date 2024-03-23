/* eslint-disable consistent-return */
import { objectToQueryString } from '@/utils/string'
import { TDetailResponse } from '@/types/detail'
import { notFound } from 'next/navigation'
import request from './request'

export const getBillVotingResults = async (quries: {
	[key: string | number]: any
}) => {
	try {
		const { data } = await request.get(
			`/billvotes${objectToQueryString(quries)}`
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
		notFound()
	}
}
