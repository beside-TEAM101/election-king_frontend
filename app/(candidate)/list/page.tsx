'use client'

/* eslint-disable no-nested-ternary */

import Loading from '@/components/common/loading'
import hangjun from '@/constants/hangjun'
import useRoute from '@/hooks/useRoute'
import arrowBtnIcon from '@/public/assets/icons/dropdown-arrow.svg'
import orderingBtnIcon from '@/public/assets/icons/ordering-btn.svg'

import sampleImage from '@/public/assets/images/profile.png'
import request from '@/service/request'
import listStyle from '@/styles/list.module.scss'

import { TListResponse } from '@/types/list'
import { objectToQueryString } from '@/utils/string'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense, useEffect, useState } from 'react'
import { PARTY_BORDER_COLOR } from '@/constants/party'
import { divideNumberToDigits } from '@/utils/number'

export default function List() {
	const {
		router,
		pathname,
		queries: { query },
		notFound,
	} = useRoute()
	const { city, district, type, pageIndex, pageSize, sort } = query
	const [selectedCity, setSelectedCity] = useState(city || '서울특별시')
	const [selectedDistrict, setSelectedDistrict] = useState(
		district || '구 선택'
	)
	const { sido, sigugun } = hangjun

	const [ordering, setOrdering] = useState('기호순')
	const orderList = [
		{ no: 0, order: '기호순', sortValue: null },
		{ no: 1, order: '전과 많은 순', sortValue: 'conviction' },
		{ no: 2, order: '재산 많은 순', sortValue: 'property' },
		// { no: 2, order: '군필', sortValue: '' },
		// { no: 3, order: '나이 많은 순/ 나이 어린 순', sortValue: '' },
		// { no: 4, order: '투표율 높은 순', sortValue: '' },
	]

	const [candidates, setCandidates] = useState([])

	async function fetchData(newQueries: string) {
		try {
			const response = await request.get<TListResponse>(
				`/candidates${newQueries}`
			)

			setCandidates(response.data.result)
		} catch (err) {
			console.error('오류 발생:', err)
			notFound()
		}
	}

	useEffect(() => {
		const newQueries = objectToQueryString({
			city,
			district,
			pageIndex,
			pageSize,
			type,
			sort,
		})
		fetchData(newQueries)
	}, [city, district, pageIndex, pageSize, type, sort])

	const handleCityButtonClick = (newCity: string) => {
		const newQueries = objectToQueryString({ ...query, city: newCity })
		router.push(`${pathname}${newQueries}`)
		setSelectedCity(newCity)
	}

	const handleDistrictButtonClick = (newDistrict: string) => {
		const newQueries = objectToQueryString({
			...query,
			district: newDistrict,
		})
		router.push(`${pathname}${newQueries}`)
		setSelectedDistrict(newDistrict)
	}

	const handleOrderingButtonClick = (newSort: string | null) => {
		const sortValue = newSort === '기호순' ? null : newSort
		const newQueries = objectToQueryString({
			...query,
			sort: sortValue,
		})
		router.push(`${pathname}${newQueries}`)
		setOrdering(newSort === null ? '기호순' : newSort)
	}

	// test
	const handleOrderingCityClick = (newCity: string | null) => {
		const newQueries = objectToQueryString({ ...query, city: newCity })
		router.push(`${pathname}${newQueries}`)
		setSelectedCity(newCity)
	}
	// test

	return (
		<div className={listStyle.candidateWrap}>
			<div className={listStyle.candidateOptions}>
				{/* test */}
				{!query.top10 && (
					<div className="noOutline">
						<select
							className="select"
							value={selectedCity}
							onChange={(e) => {
								handleCityButtonClick(e.target.value)
							}}>
							{sido.map((el) => (
								<option key={el.sido} value={el.sido}>
									{el.codeNm}
								</option>
							))}
						</select>
						<span className="icoArrow">
							<Image
								src={arrowBtnIcon}
								alt="dropdown arrow button"
								width={16}
								height={16}
							/>
						</span>
					</div>
				)}
				{/* test */}

				{/* test */}
				{query.top10 && (
					<div className="noOutline">
						<select
							className="select"
							value={selectedCity}
							onChange={(e) => {
								handleOrderingCityClick(e.target.value)
							}}>
							{sido.map((el) => (
								<option key={el.sido} value={el.sido}>
									{el.codeNm}
								</option>
							))}
						</select>
						<span className="icoArrow">
							<Image
								src={arrowBtnIcon}
								alt="dropdown arrow button"
								width={16}
								height={16}
							/>
						</span>
					</div>
				)}
				{/* test */}

				{!query.top10 && (
					<div className="noOutline">
						<select
							className="select"
							value={selectedDistrict}
							onChange={(e) => {
								handleDistrictButtonClick(e.target.value)
							}}>
							<option value="구 선택">구 선택</option>
							{sigugun
								.filter((el) => el.sido === city)
								.map((el) => (
									<option key={el.sigugun} value={el.sigugun}>
										{el.codeNm}
									</option>
								))}
						</select>
						<span className="icoArrow">
							<Image
								src={arrowBtnIcon}
								alt="dropdown arrow button"
								width={16}
								height={16}
							/>
						</span>
					</div>
				)}
			</div>
			{query.sort === 'property' ? (
				<h2>재산이 가장 많은 후보자를 확인해보세요</h2>
			) : query.sort === 'conviction' ? (
				<h2>전과가 가장 많은 후보자를 확인해보세요</h2>
			) : !query.sort && query.district ? (
				<h1>후보자를 확인해보세요.</h1>
			) : (
				<h1>후보자를 확인해보세요.</h1>
			)}

			{!query.top10 && (
				<div className={listStyle.info}>
					<p>
						후보자 <span>{candidates.length}명</span>
					</p>
					<div className="orderSelect">
						<select
							className="order"
							value={ordering}
							onChange={(e) => {
								handleOrderingButtonClick(e.target.value)
							}}>
							{orderList.map((el) => (
								<option key={el.no} value={el.sortValue}>
									{el.order}
								</option>
							))}
						</select>
						<span className="icoArrow">
							<Image
								src={orderingBtnIcon}
								alt="dropdown ordering button"
								width={16}
								height={16}
							/>
						</span>
					</div>
				</div>
			)}
			<section>
				<Suspense fallback={<Loading />}>
					{candidates.length === 0 ? (
						<div className={listStyle.noData}>
							<p>후보자 정보가 없습니다</p>
						</div>
					) : (
						<ul>
							{candidates.map((candidate, index) => (
								<li key={candidate.id}>
									<Link href={`/detail/${candidate.id}`} key={candidate.name}>
										<div className={listStyle.top10}>
											{query.sort && query.top10 && (
												<span className={listStyle.top10__no}>{index + 1}</span>
											)}
											<div
												className={listStyle.candidateCard}
												key={candidate.name}>
												<article>
													{candidate.imgUrl !== null ? (
														<span className={listStyle.candidateCard_thumbnail}>
															<Image
																priority
																width={38}
																height={38}
																className={`${PARTY_BORDER_COLOR[candidate.party] ?? PARTY_BORDER_COLOR['무소속']}`}
																src={candidate.imgUrl}
																alt={candidate.name}
															/>
														</span>
													) : (
														<Image
															src={sampleImage}
															width={46}
															height={46}
															alt="sample image"
														/>
													)}
												</article>
												<div className={listStyle.candidateCard__info}>
													<label htmlFor="name">{candidate.name}</label>
													<div className={listStyle.candidateCard__items}>
														<span>{candidate.party}</span>
														<span>∙&nbsp;{candidate.age}세</span>
														<span>∙&nbsp;{candidate.job}</span>
														{(query.sort === 'conviction' ||
															query.sort === null) && (
															<span>
																∙&nbsp; 전과 {candidate.conviction || 0}건
															</span>
														)}

														{(query.sort === 'property' ||
															query.sort === null) && (
															<span>
																∙&nbsp; 재산&nbsp;
																{divideNumberToDigits(candidate.property) ||
																	'없음'}
																(천원)
															</span>
														)}
													</div>
												</div>
											</div>
										</div>
									</Link>
								</li>
							))}
						</ul>
					)}
				</Suspense>
			</section>
		</div>
	)
}
