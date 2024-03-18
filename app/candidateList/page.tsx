'use client'

import Image from 'next/image'
import variables from '@/styles/variables.module.scss'
import Link from 'next/link'
import sampleImage from '@/public/assets/images/profile.png'
import Header from '@/components/common/Header'
// import useCandidateStore from '../store/useCandidateStore'

export default function List() {
	// const { candidates, fetchCandidates } = useCandidateStore()

	// useEffect(() => {
	// 	fetchCandidates(0, 10, '서울특별시', '종로구')
	// }, [])

	const candidates: {
		name: string
		age: number
		party: string
		job: string
		imgUrl: string | null
	}[] = [
		{
			name: '곽상언',
			age: 52,
			party: '더불어민주당',
			job: '변호사',
			imgUrl:
				'http://info.nec.go.kr/photo_20240410/Gsg1101/Hb100151444/gicho/100151444.JPG',
		},
		{
			name: '임연희',
			age: 61,
			party: '국민의힘',
			job: '주식회사 아트앤컬트코리아(공연기획연출) 대표이사',
			imgUrl:
				'http://info.nec.go.kr/photo_20240410/Gsg1101/Hb100151744/gicho/100151744.JPG',
		},
		{
			name: '이종걸',
			age: 66,
			party: '더불어민주당',
			job: '변호사',
			imgUrl:
				'http://info.nec.go.kr/photo_20240410/Gsg1101/Hb100151819/gicho/100151819.JPG',
		},
		{
			name: '한규창',
			age: 74,
			party: '무소속',
			job: '한자교육지도사(한문 훈장)',
			imgUrl:
				'http://info.nec.go.kr/photo_20240410/Gsg1101/Hb100151836/gicho/100151836.JPG',
		},
		{
			name: '전현희',
			age: 59,
			party: '더불어민주당',
			job: '정당인',
			imgUrl: null,
		},
	]

	return (
		<>
			<Header />
			<div className={variables.candidateWrap}>
				<h1>후보자를 확인해보세요.</h1>
				{candidates.map((candidate) => (
					<Link href={`/candidate/${candidate.name}`} key={candidate.name}>
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
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</>
	)
}
