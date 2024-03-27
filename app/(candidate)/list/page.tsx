'use client'

/* eslint-disable no-nested-ternary */

import Loading from '@/components/common/loading'
import hangjun from '@/constants/hangjun'
import useRoute from '@/hooks/useRoute'
import arrowBtnIcon from '@/public/assets/icons/dropdown-arrow.svg'
import sampleImage from '@/public/assets/images/profile.png'
import request from '@/service/request'
import variables from '@/styles/variables.module.scss'
import { TListResponse } from '@/types/list'
import { objectToQueryString } from '@/utils/string'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense, useEffect, useState } from 'react'
import { PARTY_BORDER_COLOR } from '@/constants/party'

export default function List() {
	const {
		router,
		pathname,
		queries: { query },
		notFound,
	} = useRoute()
	const { city, district, type, pageIndex, pageSize } = query
	const [selectedCity, setSelectedCity] = useState(city || '서울특별시')
	const [selectedDistrict, setSelectedDistrict] = useState(district || '강남구')
	const { sido, sigugun } = hangjun

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
		})
		fetchData(newQueries)
	}, [city, district, pageIndex, pageSize, type])

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

	return (
		<div className={variables.candidateWrap}>
			<div className={variables.candidateOptions}>
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

				<div className="noOutline">
					<select
						className="select"
						value={selectedDistrict}
						onChange={(e) => {
							handleDistrictButtonClick(e.target.value)
						}}>
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
			</div>
			<h1>후보자를 확인해보세요.</h1>

			<section>
				<Suspense fallback={<Loading />}>
					{candidates.length === 0 ? (
						<div className={variables.noData}>
							<p>후보자 정보가 없습니다</p>
						</div>
					) : (
						<ul>
							{candidates.map((candidate) => (
								<li key={candidate.id}>
									<Link href={`/detail/${candidate.id}`} key={candidate.name}>
										<div
											className={variables.candidateCard}
											key={candidate.name}>
											<article>
												{candidate.imgUrl !== null ? (
													<span className={variables.candidateCard_thumbnail}>
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

											<div className={variables.candidateCard__info}>
												<label htmlFor="name">{candidate.name}</label>
												<div className={variables.candidateCard__items}>
													<span>{candidate.party}</span>
													<span>∙&nbsp;{candidate.age}</span>
													<span>∙&nbsp;{candidate.job}</span>
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
