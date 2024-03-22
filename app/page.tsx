'use client'

import variables from '@/styles/variables.module.scss'
import home from '@/styles/home.module.scss'
import { useRouter } from 'next/navigation'
import HeadLine from '@/components/common/HeadLine'
import Footer from '@/components/common/Footer'
import React, { useState } from 'react'
import { hangjun } from '@/constants/hangjun'
import Image from 'next/image'
import arrowBtnIcon from '@/public/assets/icons/dropdown-arrow.svg'

export default function HomePage() {
	const [city, setCity] = useState('')
	const [district, setDistrict] = useState('')
	const { sido, sigugun } = hangjun

	const radioItems: { value: string; label: string }[] = [
		{ value: 'CONGRESS', label: '국회의원 선거' },
		{ value: 'MAYOR', label: '지자체장 선거' },
	]

	const [value, setValue] = useState<string | null>('CONGRESS')

	const router = useRouter()

	const handleButtonClick = () => {
		const queryParams = `?pageIndex=0&pageSize=10&type=${value}&city=${city}&district=${district}`
		router.push(`/list${queryParams}`)
	}

	const today = new Date()
	const EarlyDday = new Date(2024, 3, 5)
	const Dday = new Date(2024, 3, 10)
	const gap = EarlyDday.getTime() - today.getTime()
	const gapDay = Dday.getTime() - today.getTime()

	const EarlyVote = Math.ceil(gap / (1000 * 60 * 60 * 24))
	const voteDday = Math.ceil(gapDay / (1000 * 60 * 60 * 24))

	return (
		<div className={home.container}>
			<HeadLine />
			<div className={variables.dayWrap}>
				<div className={variables.dayBox}>
					<p>사전 투표</p>
					<div className={variables.dayItem}>
						<p>D-{EarlyVote}</p>
						<span>4월 5 ~ 6일</span>
					</div>
				</div>
				<hr />
				<div className={variables.dayBox}>
					<p>본 투표</p>
					<div className={variables.dayItem}>
						<p>D-{voteDday}</p>
						<span>4월 10일</span>
					</div>
				</div>
			</div>

			<div className={variables.searchOptions}>
				<h2>
					5초만에 <br /> 내가 뽑을 후보를 알아보세요
				</h2>
				<div className={variables.searchOptions__box}>
					<h3>어디서 투표하세요?</h3>
					<div className={variables.justifCenter}>
						<div className="selectBox">
							<select
								className="select"
								onChange={(e) => setCity(e.target.value)}>
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
				</div>
				<div className={variables.searchOptions__box}>
					<h3>어떤 선거후보를 찾으세요?</h3>
					<div className={variables.searchOptions__radioGroup}>
						{radioItems.map((item) => (
							<div
								key={item.value}
								className={variables.searchOptions__radioGroup}>
								<div className="radio">
									<input
										name="test1"
										type="radio"
										value={item.value}
										id={item.value}
										checked={value === item.value}
										onChange={(e) => setValue(e.target.value)}
									/>
									<label htmlFor={item.value}>{item.label}</label>
									<span />
								</div>
							</div>
						))}
					</div>
				</div>

				<button
					type="button"
					className={variables.mainButton}
					onClick={handleButtonClick}>
					후보 조회하기
				</button>
			</div>

			<Footer />
		</div>
	)
}
