'use client'

import variables from '@/styles/variables.module.scss'
import home from '@/styles/home.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Dropdown from '@/components/common/Dropdown'
import HeadLine from '@/components/common/HeadLine'
import Footer from '@/components/common/Footer'

export default function HomePage() {
	const radioItems: { value: string; label: string }[] = [
		{ value: '국회의원 선거', label: '국회의원 선거' },
		{ value: '지자체장 선거', label: '지자체장 선거' },
	]

	const [value, setValue] = useState<string | null>('국회의원 선거')
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

	const router = useRouter()

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
						<div className={variables.justifCenter}>
							<Dropdown
								placeholder="서울시"
								isOutline
								currentOption={field}
								onSelect={(selected) => {
									setField(selected)
								}}
								options={fieldOptions}
							/>
							<Dropdown
								placeholder="서울시"
								isOutline
								currentOption={field}
								onSelect={(selected) => {
									setField(selected)
								}}
								options={fieldOptions}
							/>
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
									<label htmlFor={item.value}>{item.value}</label>
									<span />
								</div>
							</div>
						))}
					</div>
				</div>

				<button
					type="button"
					className={variables.mainButton}
					onClick={() => {
						router.push('/list')
					}}>
					후보 조회하기
				</button>
			</div>
			<Footer />
		</div>
	)
}
