'use client'

import variables from '@/styles/variables.module.scss'
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
	const fieldOptions = ['서울시', '경기도', '인천시', '부산시', '대전시']
	const [field, setField] = useState('')

	const router = useRouter()

	return (
		<div>
			<HeadLine />
			<div className={variables.dayWrap}>
				<div className={variables.dayBox}>
					<p>사전 투표</p>
					<div className={variables.dayItem}>
						<p>D-16</p>
						<span>4월 6일</span>
					</div>
				</div>
				<hr />
				<div className={variables.dayBox}>
					<p>본 투표</p>
					<div className={variables.dayItem}>
						<p>D-16</p>
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
						<Dropdown
							placeholder="서울시"
							currentOption={field}
							onSelect={(selected) => {
								setField(selected)
							}}
							options={fieldOptions}
						/>
						<Dropdown
							placeholder="강남구"
							currentOption={field}
							onSelect={(selected) => {
								setField(selected)
							}}
							options={fieldOptions}
						/>
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
						router.push('/candidateList')
					}}>
					후보 조회하기
				</button>
			</div>
			<Footer />
		</div>
	)
}
