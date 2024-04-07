import BillVotingList from '@/components/detail/BillVotingList'
import ProfileImage from '@/components/detail/ProfileImage'
import TabMenu from '@/components/detail/TabMenu'
import Tooltips from '@/components/detail/Tooltips'
import { getBillVotingResults, getDetail } from '@/service/detail'
import detailStyle from '@/styles/detail.module.scss'
import { TBillVotingResultResponse } from '@/types/detail'
import { divideNumberToDigits } from '@/utils/number'
import Link from 'next/link'

const MILITARY = {
	'군복무를 마친사람': '군필',
	'해당없음(비대상)': '해당 없음',
	'군복무를 마치지 아니한 사람': '미필',
	'병적기록이 없는 사람': '병적 기록 없음',
}

export default async function Detail({ params }: { params: { id: string } }) {
	let billVoteList: TBillVotingResultResponse
	const detail = await getDetail(params.id)

	if (!detail) {
		return <div className={detailStyle.notfound}>후보자 정보가 없습니다.</div>
	}

	if (detail.monaCode) {
		billVoteList = await getBillVotingResults({
			pageIndex: 0,
			pageSize: 10,
			monaCode: detail.monaCode,
		})
	}

	console.log('detail', detail)

	return (
		<div className={detailStyle.container}>
			<div className={detailStyle.preview}>
				<ProfileImage
					src={detail.imgUrl}
					alt={detail.name}
					party={detail.party}
				/>
				<p className={detailStyle.preview__name}>{detail?.name}</p>
				<div className={detailStyle.info}>
					<p className={detailStyle.info__title}>한줄요약</p>
					<div className={detailStyle.info__content}>
						<p className={detailStyle.summary}>
							전과 기록이 <strong>{detail?.conviction ?? 0}건</strong> 있어요
							{/* 전과 기록이 <strong>{detail?.conviction}건</strong> 있고, 회의
							출석률이{' '}
							<strong>
								{Math.ceil(detail?.congressActivity.averageTurnout ?? 0)}%
							</strong>
							에요. */}
						</p>
					</div>
				</div>
			</div>
			<TabMenu />
			<div className={detailStyle.detail}>
				<section id="profile" className={detailStyle.info}>
					<p className={detailStyle.info__title}>프로필</p>
					<div className={detailStyle.info__content}>
						<div className={detailStyle.profile}>
							<p className={detailStyle.profile__title}>기본 정보</p>
							<p className={detailStyle.profile__text}>
								{detail?.party} ∙ {detail?.age}세 ∙ {detail?.job}
							</p>
						</div>
						<div className={detailStyle.profile}>
							<p className={detailStyle.profile__title}>학력</p>
							<p className={detailStyle.profile__text}>{detail?.education}</p>
						</div>
					</div>
					<p className={detailStyle.origin}>출처 : 중앙선거관리위원회</p>
				</section>
				<section id="conviction" className={detailStyle.info}>
					<p className={detailStyle.info__title}>전과·병역 정보</p>
					<div className={detailStyle.info__content}>
						<div className={detailStyle.conviction}>
							<p className={detailStyle.conviction__text}>
								전과 기록이 <strong>{detail?.conviction ?? 0}건</strong> 있어요
							</p>
							{detail?.convictionDetailUrl && (
								<Link
									href={detail?.convictionDetailUrl}
									className={detailStyle.conviction__downloadLink}
									download>
									전과기록 증명서 보기
								</Link>
							)}
							{/* <Link
									href="/viewer/1234"
									target="_blank"
									className={detailStyle.conviction__downloadLink}
									download
									rel="noreferrer">
									전과기록 증명서 보기
								</Link> */}
						</div>
					</div>
					<div className={detailStyle.info__content}>
						<div className={detailStyle.military}>
							<p className={detailStyle.military__text}>
								{MILITARY[detail?.military]}
							</p>
						</div>
					</div>
					<p className={detailStyle.origin}>출처 : 중앙선거관리위원회</p>
				</section>
				<section className={detailStyle.info}>
					<p className={detailStyle.info__title}>재산 정보</p>
					<div className={detailStyle.info__content}>
						<div className={detailStyle.property}>
							<p className={detailStyle.property__text}>
								{divideNumberToDigits(detail.property)} (천원)
							</p>
						</div>
					</div>
					<p className={detailStyle.origin}>출처 : 중앙선거관리위원회</p>
				</section>
				<section id="pledge" className={detailStyle.info}>
					<p className={detailStyle.info__title}>공약</p>
					<div className={detailStyle.info__content}>
						<ul className={detailStyle.pledge}>
							{detail?.promises.length > 0 ? (
								detail?.promises.map((promise) => (
									<li>
										<span>{promise.order}</span>
										<p className={detailStyle.pledge__title}>
											{promise.category} ∙ {promise.title}
										</p>
										<p className={detailStyle.pledge__text}>
											{promise.content}
										</p>
									</li>
								))
							) : (
								<p className={detailStyle.pledge__empty}>
									공약이 존재하지 않습니다.
								</p>
							)}
						</ul>
						{detail?.promises.length > 0 && (
							<div className={detailStyle.pledge__more}>
								<button
									type="button"
									className={detailStyle.pledge__more__button}>
									더보기
								</button>
							</div>
						)}
					</div>
					<p className={detailStyle.origin}>출처 : 중앙선거관리위원회</p>
				</section>
				<section id="voting" className={detailStyle.info}>
					<p className={detailStyle.info__title}>
						어떤 의안에 찬성/반대 했을까?
						<Tooltips
							id="voting-tooltip"
							text="20,21대 의정 정보만 제공합니다."
						/>
					</p>
					<div className={detailStyle.info__content}>
						{billVoteList?.totalCount > 0 ? (
							<BillVotingList
								candidateName={detail?.name}
								billVoteList={billVoteList}
								monaCode={detail?.monaCode}
							/>
						) : (
							<div className={detailStyle.voting_empty}>
								<strong>의정 정보가 없습니다</strong>
								<p>*20,21대 의정 정보만 제공합니다.</p>
							</div>
						)}
					</div>
					<p className={detailStyle.origin}>출처 : 의안정보시스템</p>
				</section>
				<section id="participationRate" className={detailStyle.info}>
					<p className={detailStyle.info__title}>
						투표는 얼마나 열심히 참여했을까?
						{/* <Tooltips
							id="voting-tooltip"
							text="20,21대 의정 정보만 제공합니다."
						/> */}
					</p>
					<div className={detailStyle.info__content}>
						<div className={detailStyle.participationRate}>
							{detail && detail.congressActivity ? (
								<div className={detailStyle.participationRate__chartbox}>
									<div
										className={`${detailStyle.participationRate__chart} ${detailStyle.participationRate__chart_average}`}>
										<strong>
											{Math.floor(
												detail.congressActivity.totalAverageTurnout ?? 0
											)}
											%
										</strong>
										<span
											style={{
												height: Math.floor(
													detail.congressActivity.totalAverageTurnout ?? 0
												),
											}}
											className={`${detailStyle.participationRate__chart__bar} ${detailStyle.participationRate__chart_average_bar}`}>
											bar
										</span>
										<p>평균 투표율</p>
									</div>
									<div
										className={`${detailStyle.participationRate__chart} ${detailStyle.participationRate__chart_candidate}`}>
										<span className={detailStyle.participationRate__chart_rank}>
											👑 상위{' '}
											{Math.floor(
												detail.congressActivity.turnoutTopPercentile ?? 0
											)}
											%
										</span>
										<strong>
											{Math.floor(
												detail.congressActivity.individualAverageTurnout ?? 0
											)}
											%
										</strong>
										<span
											style={{
												height: Math.floor(
													detail.congressActivity?.individualAverageTurnout ?? 0
												),
											}}
											className={`${detailStyle.participationRate__chart__bar} ${detailStyle.participationRate__chart_candidate_bar}`}>
											bar
										</span>
										<p>이 후보의 투표율</p>
									</div>
								</div>
							) : (
								<div className={detailStyle.participationRate_empty}>
									<strong>투표율 정보가 없습니다</strong>
									<p>*21대 투표율만 제공합니다.</p>
								</div>
							)}
						</div>
					</div>
					<p className={detailStyle.origin}>출처 : 열려라국회, 열린국회정보</p>
				</section>
			</div>
		</div>
	)
}
