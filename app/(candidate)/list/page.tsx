'use client'

import React, { useState, useEffect } from 'react'
import request from '@/service/request'
import { TListResponse } from '@/types/list'
import { notFound } from 'next/navigation'
import variables from '@/styles/variables.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import sampleImage from '@/public/assets/images/profile.png'
import { hangjun } from '@/constants/hangjun'
import arrowBtnIcon from '@/public/assets/icons/dropdown-arrow.svg'
import { Suspense } from 'react'
import Loading from './loading'
// import { useRouter } from 'next/router'
import { usePathname, useRouter } from 'next/navigation'

export default function List({
	params,
}: {
	params: {
		pageIndex?: number
		pageSize?: number
		city?: string
		type?: string
		district?: string
		party?: string
	}
}) {
	// const router = useRouter()
	const router = usePathname()
	const [city, setCity] = useState(params.city || '서울특별시')
	const [district, setDistrict] = useState(params.district || '강남구')
	const { sido, sigugun } = hangjun

	const [candidates, setCandidates] = useState([])

	const { pageIndex = 0, pageSize = 10, type = 'CONGRESS' || 'MAYOR' } = params

	useEffect(() => {
		fetchData(city, district, pageIndex, pageSize, type)
	}, [city, district, pageIndex, pageSize, type])

	async function fetchData(
		city: string,
		district: string,
		pageIndex: number,
		pageSize: number,
		type: string
	) {
		try {
			const { data } = await request.get<TListResponse>(
				`/candidates?pageIndex=${pageIndex}&pageSize=${pageSize}&type=${type}&city=${city}&district=${district}`
			)
			setCandidates(data.result)
		} catch (err) {
			console.error('오류 발생:', err)
			notFound()
		}
	}

	const handleCityButtonClick = (selectedCity: string) => {
		router.push({
			pathname: router.pathname,
			query: { ...router.query, city: selectedCity },
		})
	}

	const handleDistrictButtonClick = (selectedDistrict: string) => {
		router.push({
			pathname: router.pathname,
			query: { ...router.query, district: selectedDistrict },
		})
	}

	return (
		<div className={variables.candidateWrap}>
			<div className={variables.justifCenter}>
				<div className="noOutline">
					<select
						className="select"
						value={city}
						onChange={(e) => {
							const selectedCity = e.target.value
							setCity(selectedCity)
							handleCityButtonClick(city)
						}}>
						<option className="selectOption" value="">
							{city}
						</option>
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
						value={district}
						onChange={(e) => {
							const selectedDistrict = e.target.value
							setDistrict(selectedDistrict)
							handleDistrictButtonClick(district)
						}}>
						<option className="selectOption" value="">
							{district}
						</option>
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
													<Image
														priority
														width={38}
														height={38}
														className={
															candidate.party === '더불어민주당'
																? `${variables.candidateCard__type1}`
																: candidate.party === '국민의당'
																	? `${variables.candidateCard__type2}`
																	: candidate.party === '개혁신당'
																		? `${variables.candidateCard__type3}`
																		: candidate.party === '녹색정의당'
																			? `${variables.candidateCard__type4}`
																			: candidate.party === '새로운미래'
																				? `${variables.candidateCard__type5}`
																				: candidate.party === '조국신당'
																					? `${variables.candidateCard__type6}`
																					: `${variables.candidateCard__type7}`
														}
														src={candidate.imgUrl}
														alt={candidate.name}
													/>
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
