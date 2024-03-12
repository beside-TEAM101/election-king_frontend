'use client'

import variables from '@/app/styles/variables.module.scss'
import Image from 'next/image'
import { useState } from 'react'

import { EKRadio } from './components/EKRadio'
import EKDropdown from './components/common/EKDropdown'

export default function Home() {
	const radioItems: { value: string; label: string }[] = [
		{ value: '국회의원 선거', label: '국회의원 선거' },
		{ value: '지자체장 선거', label: '지자체장 선거' },
	]

	const [value, setValue] = useState<string | null>(null)
	const fieldOptions = ['서울시', '경기도', '인천시', '부산시', '대전시']
	const [field, setField] = useState('')

	return (
		<div>
			<div className={variables.headlineWrap}>
				<h1 className={variables.headLineBold24}>
					22대 총선 선거 <br /> 누가누가 잘뽑나?
				</h1>
				<Image
					src="icons/headlLine-character.svg"
					alt="헤드라인 대표 이미지"
					width={168}
					height={172}
				/>
			</div>

			<div className={variables.dayWrap}>
				<div className={variables.dayBox}>
					<p>사전 투표</p> {/* textSemibold20 */}
					<div className={variables.dayItem}>
						<p>D-16</p>
						<span>4월 6일</span>
					</div>
				</div>
				<div className={variables.dayBox}>
					<p>본 투표</p> {/* textSemibold20 */}
					<div className={variables.dayItem}>
						<p>D-16</p>
						<span>4월 10일</span>
					</div>
				</div>
			</div>

			{/* searchOptions */}
			<div className={variables.searchOptions__wrap}>
				<h2>
					5초만에 <br /> 내가 뽑을 후보를 알아보세요
				</h2>
				<div className={variables.searchOptions__box}>
					<h3>어디서 투표하세요?</h3> {/* textSemibold15 */}
					<div className={variables.justifCenter}>
						<EKDropdown
							placeholder="서울시"
							currentOption={field}
							onSelect={(selected) => {
								setField(selected)
							}}
							options={fieldOptions}
						/>
						<EKDropdown
							placeholder="서울시"
							currentOption={field}
							onSelect={(selected) => {
								setField(selected)
							}}
							options={fieldOptions}
						/>
					</div>
				</div>

				<div className={variables.searchOptions__box}>
					<h3>어떤 선거후보를 찾으세요?</h3> {/* textSemibold15 */}
					<div className={variables.searchOptions__item}>
						{radioItems.map((item) => (
							<div key={item.value}>
								<input
									name="test1"
									type="radio"
									value={item.value}
									id={item.value}
									checked={value === item.value}
									onChange={(e) => setValue(e.target.value)}
								/>
								<label htmlFor={item.value}>{item.value}</label>
							</div>
						))}
					</div>
				</div>
				{/* test2 */}
				{/* <EKRadio
					name="test"
					items={radioItems}
					value={value}
					onChange={setValue}
				/> */}
				<button type="button" className={variables.mainButton}>
					후보 조회하기
				</button>
			</div>
		</div>
	)
}
