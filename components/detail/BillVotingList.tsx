'use client'

import { getBillVotingResults } from '@/service/detail'
import detailStyle from '@/styles/detail.module.scss'
import { TBillVotingResultResponse } from '@/types/detail'
import Link from 'next/link'
import { useCallback, useState } from 'react'

const VOTE_CLASSES = {
	찬성: 'agree',
	반대: 'oppose',
	기권: 'abstain',
	불참: 'absent',
}

export default function BillVotingList({
	candidateName,
	billVoteList,
}: {
	candidateName: string
	billVoteList: TBillVotingResultResponse
}) {
	const { result, totalCount } = billVoteList
	const [list, setList] = useState(result)
	const [pageIndex, setPaseIndex] = useState(0)

	const updateList = useCallback(async () => {
		const nextIndex = pageIndex + 1
		setPaseIndex(nextIndex)
		try {
			const response = await getBillVotingResults({
				pageIndex: nextIndex,
				pageSize: 10,
			})

			setList([...list, ...response.result])
		} catch (err) {
			console.log(err)
		}
	}, [list, pageIndex])

	return (
		<>
			<ul className={detailStyle.voting}>
				{list.length > 0 ? (
					list.map((voting) => (
						<li key={voting.billId}>
							<div>
								<p className={detailStyle.voting__name}>{voting.billName}</p>
								<p className={detailStyle.voting__detail}>
									{candidateName} 후보자는{' '}
									<span
										className={`${detailStyle.voting__candidate} ${detailStyle[`voting__${VOTE_CLASSES[voting.vote]}`]}`}>
										{voting.vote}
									</span>{' '}
									∙ 투표결과{' '}
									<span
										className={`${detailStyle.result} ${voting.billResult.includes('가결') ? detailStyle.result__positive : detailStyle.result__denial}`}>
										{voting.billResult}
									</span>
								</p>
							</div>
							<Link href={voting.billUrl} target="_blank">
								<img src="/assets/icons/arrow_right.svg" alt="" />
							</Link>
						</li>
					))
				) : (
					<li>투표 결과가 없습니다.</li>
				)}
			</ul>
			{totalCount > list.length && (
				<div className={detailStyle.voting__more}>
					<button
						type="button"
						className={detailStyle.voting__more__button}
						onClick={updateList}>
						더보기
					</button>
				</div>
			)}
		</>
	)
}
