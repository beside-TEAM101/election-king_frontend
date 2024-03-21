// import request from '@/service/request'
import { TDetailResponse } from '@/types/detail'
// import { notFound } from 'next/navigation'
import detailStyle from '@/styles/detail.module.scss'
import Link from 'next/link'
import { Tooltip } from 'react-tooltip'
import Tooltips from '@/components/detail/Tooltips'

export default async function Detail({ params }: { params: { id: string } }) {
	// const isActive = false
	const detail: TDetailResponse = {
		name: '정우택',
		age: 71,
		job: '국회의원',
		education: '미국 하와이대학교 대학원 졸업(경제학 박사)(1984.6.~1987.5.)', // 학력
		career: '(현)대한민국 국회부의장;(전)제32대 충청북도지사', // 이력
		conviction: 1, // 전과 수
		convictionDetailUrl:
			'http://info.nec.go.kr/unielec_pdf_file/20240410/open/Gsg4301/Hb100152668/junkwa/20240208105125072_1.tif', // 전과 상세 링크
		imgUrl:
			'http://info.nec.go.kr/photo_20240410/Gsg4301/Hb100152668/gicho/100152668.JPG', // 후보자 이미지 링크
		party: '국민의힘', // 정당 명
		billVotingResults: {
			votingList: [
				{
					billId: 'PRC_O2S3R0R7N0I6S1V7G3O6K2E9C5P2C6',
					assemblyTerm: '21',
					billName: '문화재보호법 일부개정법률안(대안)(문화체육관광위원장)',
					billResult: '수정가결',
					billUrl:
						'https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_O2S3R0R7N0I6S1V7G3O6K2E9C5P2C6',
					vote: '불참',
				},
				{
					billId: 'PRC_O2S3R1W2B0T7X1G8T5I0I4O6V5M3T7',
					assemblyTerm: '21',
					billName: '도로교통법 일부개정법률안(대안)(행정안전위원장)',
					billResult: '원안가결',
					billUrl:
						'https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_O2S3R1W2B0T7X1G8T5I0I4O6V5M3T7',
					vote: '찬성',
				},
				{
					billId: 'PRC_O2S3R1W2B0T7X1G8T5I0I4O6V5M3T7',
					assemblyTerm: '21',
					billName: '도로교통법 일부개정법률안(대안)(행정안전위원장)',
					billResult: '철회',
					billUrl:
						'https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_O2S3R1W2B0T7X1G8T5I0I4O6V5M3T7',
					vote: '반대',
				},
				{
					billId: 'PRC_O2T2Y0D9V2Z1R1N3Q1Y2A4X9T6P0K7',
					assemblyTerm: '21',
					billName: '교육공무원법 일부개정법률안(대안)(교육위원장)',
					billResult: '폐기',
					billUrl:
						'https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_O2T2Y0D9V2Z1R1N3Q1Y2A4X9T6P0K7',
					vote: '찬성',
				},
				{
					billId: 'PRC_O2T2Y0D9V2Z1R1N3Q1Y2A4X9T6P0K7',
					assemblyTerm: '21',
					billName: '교육공무원법 일부개정법률안(대안)(교육위원장)',
					billResult: '부결',
					billUrl:
						'https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_O2T2Y0D9V2Z1R1N3Q1Y2A4X9T6P0K7',
					vote: '기권',
				},
			],
		},
		billVotingResultsCount: 1, // 의안 투표 결과의 총 갯수
		congressActivity: {
			averageTurnout: 76.9757, // 의안 투표 참여율
			turnoutTopPercentile: 86, // 의안 투표 참여 상위 백분위 수
		},
	}
	// try {
	// 	const { data } = await request.get<TDetailResponse>('/candidate/100152668')
	// 	// console.log('res', data)
	// 	detail = data
	// } catch (err) {
	// 	notFound()
	// }

	const voteClasses = {
		찬성: 'agree',
		반대: 'oppose',
		기권: 'abstain',
		불참: 'absent',
	}

	return (
		<>
			<div className={detailStyle.preview}>
				<div className={detailStyle.preview__layer}>
					<span className={detailStyle.preview__img}>
						<img src={detail.imgUrl} alt="" />
					</span>
				</div>
				<p className={detailStyle.preview__name}>{detail.name}</p>
				<div className={detailStyle.info}>
					<p className={detailStyle.info__title}>한줄요약</p>
					<div className={detailStyle.info__content}>
						<p className={detailStyle.summary}>
							전과 기록이 <strong>{detail.conviction}건</strong> 있고, 회의
							출석률이{' '}
							<strong>
								{Math.ceil(detail.congressActivity.averageTurnout)}%
							</strong>
							에요.
						</p>
					</div>
				</div>
			</div>
			<ul className={detailStyle.menu}>
				<li className={`${detailStyle.menu__active} ${detailStyle.menu__item}`}>
					<button type="button">프로필</button>
				</li>
				<li className={`${detailStyle.menu__item}`}>
					<button type="button">전과정보</button>
				</li>
				<li className={`${detailStyle.menu__item}`}>
					<button type="button">공약</button>
				</li>
				<li className={`${detailStyle.menu__item}`}>
					<button type="button">의안찬반</button>
				</li>
				<li className={`${detailStyle.menu__item}`}>
					<button type="button">회의출석률</button>
				</li>
			</ul>
			<div className={detailStyle.detail}>
				<div className={detailStyle.info}>
					<p className={detailStyle.info__title}>프로필</p>
					<div className={detailStyle.info__content}>
						<div className={detailStyle.profile}>
							<p className={detailStyle.profile__title}>기본 정보</p>
							<p className={detailStyle.profile__text}>
								{detail.party} ∙ {detail.age}세 ∙ {detail.job}
							</p>
						</div>
						<div className={detailStyle.profile}>
							<p className={detailStyle.profile__title}>학력</p>
							<p className={detailStyle.profile__text}>{detail.education}</p>
						</div>
					</div>
					<p className={detailStyle.origin}>출처 : 중앙선거관리위원회</p>
				</div>
				<div className={detailStyle.info}>
					<p className={detailStyle.info__title}>전과 정보</p>
					<div className={detailStyle.info__content}>
						<div className={detailStyle.conviction}>
							<p className={detailStyle.conviction__text}>
								전과 기록이 <strong>{detail.conviction}건</strong> 있어요
							</p>
							<Link
								href={detail.convictionDetailUrl}
								target="_blank"
								className={detailStyle.conviction__downloadLink}>
								전과기록 증명서 보기
							</Link>
						</div>
					</div>
					<p className={detailStyle.origin}>출처 : 중앙선거관리위원회</p>
				</div>
				<div className={detailStyle.info}>
					<p className={detailStyle.info__title}>공약</p>
					<div className={detailStyle.info__content}>
						<ul className={detailStyle.pledge}>
							<li>
								<span>1</span>
								<p className={detailStyle.pledge__title}>
									노동 ∙ 일자리를 책임지는 대한민국
								</p>
								<p className={detailStyle.pledge__text}>
									일자리 확대, 국민께 드리는 최고의 선물입니다
								</p>
							</li>
							<li>
								<span>2</span>
								<p className={detailStyle.pledge__title}>
									환경 ∙ 안전하고 건강한 대한민국
								</p>
								<p className={detailStyle.pledge__text}>
									일자리 확대, 국민께 드리는 최고의 선물입니다
								</p>
							</li>
							<li>
								<span>3</span>
								<p className={detailStyle.pledge__title}>
									노동 ∙ 일자리를 책임지는 대한민국
								</p>
								<p className={detailStyle.pledge__text}>
									일자리 확대, 국민께 드리는 최고의 선물입니다
								</p>
							</li>
						</ul>
						<div className={detailStyle.pledge__more}>
							<button
								type="button"
								className={detailStyle.pledge__more__button}>
								더보기
							</button>
						</div>
					</div>
					<p className={detailStyle.origin}>출처 : 중앙선거관리위원회</p>
				</div>
				<div className={detailStyle.info}>
					<p className={detailStyle.info__title}>
						어떤 의안에 찬성/반대 했을까?
						<Tooltips
							id="voting-tooltip"
							text="20,21대 의정 정보만 제공합니다."
						/>
					</p>
					<div className={detailStyle.info__content}>
						<ul className={detailStyle.voting}>
							{detail.billVotingResults.votingList.length > 0 ? (
								detail.billVotingResults.votingList.map((list) => (
									<li key={list.billId}>
										<p className={detailStyle.voting__name}>{list.billName}</p>
										<p className={detailStyle.voting__detail}>
											{detail.name} 후보자는{' '}
											<span
												className={`${detailStyle.voting__candidate} ${detailStyle[`voting__${voteClasses[list.vote]}`]}`}>
												{list.vote}
											</span>{' '}
											∙ 투표결과{' '}
											<span
												className={`${detailStyle.result} ${list.billResult.includes('가결') ? detailStyle.result__positive : detailStyle.result__denial}`}>
												{list.billResult}
											</span>
										</p>
									</li>
								))
							) : (
								<li>투표 결과가 없습니다.</li>
							)}
						</ul>
					</div>
					<p className={detailStyle.origin}>출처 : 의안정보시스템</p>
				</div>
			</div>
		</>
	)
}
