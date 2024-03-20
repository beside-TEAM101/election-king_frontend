'use client'

import Image from 'next/image'
import variables from '@/styles/variables.module.scss'
import Link from 'next/link'
import sampleImage from '@/public/assets/images/profile.png'
import Dropdown from '@/components/common/Dropdown'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import useCandidateStore from '../store/useCandidateStore'

export default function List({
	pageIndex = 0,
	pageSize = 10,
	city = '서울특별시',
	district = '종로구',
}) {
	// const { candidates, fetchCandidates } = useCandidateStore()

	// useEffect(() => {
	// 	fetchCandidates(0, 10, '서울특별시', '종로구')
	// }, [])

	const fieldOptions = [
		'노원구',
		'은평구',
		'서대문구',
		'마포구',
		'양천구',
		'강서구',
		'구로구',
		'금천구',
		'영등포구',
		'동작구',
		'관악구',
		'서초구',
		'강남구',
		'송파구',
		'강동구',
	]
	const [field, setField] = useState('')
	const [candidates, setCandidates] = useState([])

	// const candidates: {
	// 	name: string
	// 	age: number
	// 	party: string
	// 	job: string
	// 	imgUrl: string | null
	// }[] = [
	// 	{
	// 		name: '곽상언',
	// 		age: 52,
	// 		party: '더불어민주당',
	// 		job: '변호사',
	// 		imgUrl:
	// 			'http://info.nec.go.kr/photo_20240410/Gsg1101/Hb100151444/gicho/100151444.JPG',
	// 	},
	// 	{
	// 		name: '임연희',
	// 		age: 61,
	// 		party: '국민의힘',
	// 		job: '주식회사 아트앤컬트코리아(공연기획연출) 대표이사',
	// 		imgUrl:
	// 			'http://info.nec.go.kr/photo_20240410/Gsg1101/Hb100151744/gicho/100151744.JPG',
	// 	},
	// 	{
	// 		name: '이종걸',
	// 		age: 66,
	// 		party: '더불어민주당',
	// 		job: '변호사',
	// 		imgUrl:
	// 			'http://info.nec.go.kr/photo_20240410/Gsg1101/Hb100151819/gicho/100151819.JPG',
	// 	},
	// 	{
	// 		name: '한규창',
	// 		age: 74,
	// 		party: '무소속',
	// 		job: '한자교육지도사(한문 훈장)',
	// 		imgUrl:
	// 			'http://info.nec.go.kr/photo_20240410/Gsg1101/Hb100151836/gicho/100151836.JPG',
	// 	},
	// 	{
	// 		name: '전현희',
	// 		age: 59,
	// 		party: '더불어민주당',
	// 		job: '정당인',
	// 		imgUrl: null,
	// 	},
	// ]

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://3.39.25.35:8080/candidates?pageIndex=${pageIndex}&pageSize=${pageSize}&city=${city}&district=${district}`
				)
				setCandidates(response.data.result)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [pageIndex, pageSize, city, district])

	return (
		<div className={variables.candidateWrap}>
			<div className={variables.justifCenter}>
				<Dropdown
					placeholder="서울시"
					currentOption={field}
					onSelect={(selected) => {
						setField(selected)
					}}
					options={fieldOptions}
				/>
				<Dropdown
					placeholder="서울시"
					currentOption={field}
					onSelect={(selected) => {
						setField(selected)
					}}
					options={fieldOptions}
				/>
			</div>
			<h1>후보자를 확인해보세요.</h1>
			<ul>
				{candidates.map((candidate) => (
					<li key={candidate.id}>
						<Link href={`/detail/${candidate.name}`} key={candidate.name}>
							<div className={variables.candidateCard} key={candidate.name}>
								<article>
									<Image
										className={variables.candidateCard__img}
										src={sampleImage}
										alt={candidate.name}
										width={38}
										height={38}
									/>
								</article>
								<div className={variables.candidateCard__info}>
									<label htmlFor="name">{candidate.name}</label>
									<div className={variables.candidateCard__items}>
										<span>{candidate.party}</span>
										<span>∙&nbsp;{candidate.age}</span>
										<span>∙&nbsp;{candidate.job}</span>
										{candidate.imgUrl && (
											<Image src={candidate.imgUrl} alt={candidate.name} />
										)}
									</div>
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
