'use client'

import React, { useState, useEffect } from 'react'
import request from '@/service/request'
import { TListResponse } from '@/types/list'
import { notFound } from 'next/navigation'
import variables from '@/styles/variables.module.scss'
import Dropdown from '@/components/common/Dropdown'
import Image from 'next/image'
import Link from 'next/link'
import sampleImage from '@/public/assets/images/profile.png'
import { hangjun } from '@/app/constants/hangjun'
import arrowBtnIcon from '@/public/assets/icons/dropdown-arrow.svg'

export default function List({
	params,
}: {
	params: {
		pageIndex?: number
		pageSize?: number
		city?: string
		district?: string
		party?: string
	}
}) {
	const [city, setCity] = useState('')
	const [district, setDistrict] = useState('')
	const { sido, sigugun } = hangjun

	const [candidates, setCandidates] = useState([])
	const [field, setField] = useState('')
	const fieldOptions = [
		'서울특별시',
		'부산광역시',
		'대구광역시',
		'인천광역시',
		'광주광역시',
		'대전광역시',
		'울산광역시',
		'세종특별자치시',
		'경기도',
		'강원도',
		'충청북도',
		'충청남도',
		'전라북도',
		'전라남도',
		'경상북도',
		'경상남도',
		'제주특별자치도',
	]

	const {
		pageIndex = 0,
		pageSize = 10,
		// city = '서울특별시',
		// district = '종로구',
	} = params

	useEffect(() => {
		async function fetchCandidates() {
			try {
				const { data } = await request.get<TListResponse>(
					`/candidates?pageIndex=${pageIndex}&pageSize=${pageSize}&city=${city}&district=${district}`
				)
				setCandidates(data)
			} catch (err) {
				console.error('Error fetching candidates:', err)
				notFound()
			}
		}

		fetchCandidates()
	}, [pageIndex, pageSize, city, district])

	return (
		<div className={variables.candidateWrap}>
			{/* <div className={variables.justifCenter}>
				<Dropdown
					placeholder="서울시"
					currentOption={field}
					onSelect={(selected) => {
						setField(selected)
					}}
					options={fieldOptions}
				/>
				<Dropdown
					placeholder="종로구"
					currentOption={field}
					onSelect={(selected) => {
						setField(selected)
					}}
					options={fieldOptions}
				/>
			</div> */}

			<div className={variables.justifCenter}>
				<div className="selectBox">
					<select className="select" onChange={(e) => setCity(e.target.value)}>
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

				<div className="selectBox">
					<select
						className="select"
						onChange={(e) => setDistrict(e.target.value)}>
						<option className="selectOption" value="">
							종로구
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
			{candidates.length === 0 ? (
				<div className={variables.noData}>
					<p>후보자 정보가 없습니다</p>
				</div>
			) : (
				<ul>
					{candidates.map((candidate) => (
						<li key={candidate.id}>
							<Link href={`/detail/${candidate.id}`} key={candidate.name}>
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
			)}
		</div>
	)
}
