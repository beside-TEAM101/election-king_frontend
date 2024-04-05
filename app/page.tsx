'use client'

import HeadLine from '@/components/common/HeadLine'
import hangjun from '@/constants/hangjun'
import arrowBtnIcon from '@/public/assets/icons/dropdown-arrow.svg'
import commonStyle from '@/styles/common.module.scss'
import variables from '@/styles/variables.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function HomePage() {
	const [city, setCity] = useState('서울특별시')
	const [district, setDistrict] = useState('구 선택')
	const [, setDong] = useState('')

	const { sido, sigugun, dongList } = hangjun

	const router = useRouter()

	const handleButtonClick = () => {
		const queryParams = `?candidates&pageIndex=0&pageSize=50&type=CONGRESS&city=${city}&district=${district}`
		router.push(`/list${queryParams}`)
	}

	const handleDistrictChange = (selectedDistrict) => {
		setDistrict(selectedDistrict)
		if (selectedDistrict === '구 선택') {
			setDong('')
		} else {
			const selectedDong = dongList.find(
				(item) => item.dong === selectedDistrict
			)
			if (selectedDong) {
				setDong(selectedDong.dong)
			} else {
				setDong('')
			}
		}
	}

	const today = new Date()
	const EarlyDday = new Date(2024, 3, 5)
	const Dday = new Date(2024, 3, 10)
	const gap = EarlyDday.getTime() - today.getTime()
	const gapDay = Dday.getTime() - today.getTime()

	const EarlyVote = Math.ceil(gap / (1000 * 60 * 60 * 24))
	const voteDday = Math.ceil(gapDay / (1000 * 60 * 60 * 24))

	return (
		<div className={commonStyle.container}>
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
								onChange={(e) => handleDistrictChange(e.target.value)}>
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
					</div>
				</div>

				{district !== '구 선택' && (
					<div className={variables.searchOptions__dongWrap}>
						<span>{district}에 해당하는 지역</span>
						<p>
							{dongList
								.filter((el) => el.sigugun === district && el.sido === city)
								.map((el) => el.codeNm)
								.join(', ')}
						</p>
					</div>
				)}
				<button
					type="button"
					className={variables.mainButton}
					onClick={handleButtonClick}>
					후보 조회하기
				</button>
			</div>
		</div>
	)
}
