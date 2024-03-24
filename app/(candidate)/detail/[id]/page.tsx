/* eslint-disable consistent-return */
import { TDetailResponse } from '@/types/detail'
import detailStyle from '@/styles/detail.module.scss'
import Link from 'next/link'
import Tooltips from '@/components/detail/Tooltips'
import TabMenu from '@/components/detail/TabMenu'
import { getBillVotingResults, getDetail } from '@/service/detail'
import BillVotingList from '@/components/detail/BillVotingList'
import Image from 'next/image'

export default async function Detail({ params }: { params: { id: string } }) {
	const [{ value: detail }, { value: billVoteList }] =
		(await Promise.allSettled<TDetailResponse>([
			getDetail(params.id),
			getBillVotingResults({
				pageIndex: 0,
				pageSize: 10,
			}),
		])) as any

	if (!detail) {
		return <div className={detailStyle.notfound}>후보자 정보가 없습니다.</div>
	}

	return (
		<>
			<div className={detailStyle.preview}>
				<div className={detailStyle.preview__layer}>
					<span className={detailStyle.preview__img}>
						<Image
							src={detail.imgUrl}
							alt=""
							width={64}
							height={64}
							loading="eager"
						/>
					</span>
				</div>
				<p className={detailStyle.preview__name}>{detail.name}</p>
				<div className={detailStyle.info}>
					<p className={detailStyle.info__title}>한줄요약</p>
					<div className={detailStyle.info__content}>
						<p className={detailStyle.summary}>
							전과 기록이 <strong>{detail.conviction ?? 0}건</strong> 있어요
							{/* 전과 기록이 <strong>{detail.conviction}건</strong> 있고, 회의
							출석률이{' '}
							<strong>
								{Math.ceil(detail.congressActivity.averageTurnout ?? 0)}%
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
								{detail.party} ∙ {detail.age}세 ∙ {detail.job}
							</p>
						</div>
						<div className={detailStyle.profile}>
							<p className={detailStyle.profile__title}>학력</p>
							<p className={detailStyle.profile__text}>{detail.education}</p>
						</div>
					</div>
					<p className={detailStyle.origin}>출처 : 중앙선거관리위원회</p>
				</section>
				<section id="conviction" className={detailStyle.info}>
					<p className={detailStyle.info__title}>전과 정보</p>
					<div className={detailStyle.info__content}>
						<div className={detailStyle.conviction}>
							<p className={detailStyle.conviction__text}>
								전과 기록이 <strong>{detail.conviction ?? 0}건</strong> 있어요
							</p>
							{detail.convictionDetailUrl && (
								<Link
									href={detail.convictionDetailUrl}
									target="_blank"
									className={detailStyle.conviction__downloadLink}>
									전과기록 증명서 보기
								</Link>
							)}
						</div>
					</div>
					<p className={detailStyle.origin}>출처 : 중앙선거관리위원회</p>
				</section>
				<section id="pledge" className={detailStyle.info}>
					<p className={detailStyle.info__title}>공약</p>
					<div className={detailStyle.info__content}>
						<ul className={detailStyle.pledge}>
							{detail.promises.length > 0 ? (
								detail.promises.map((promise) => (
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
						{detail.promises.length > 0 && (
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
						{billVoteList.totalCount > 0 ? (
							<BillVotingList
								candidateName={detail.name}
								billVoteList={billVoteList}
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
							<div className={detailStyle.participationRate__chartbox}>
								<div
									className={`${detailStyle.participationRate__chart} ${detailStyle.participationRate__chart_average}`}>
									<strong>
										{Math.floor(
											detail.congressActivity?.totalAverageTurnout ?? 0
										)}
										%
									</strong>
									<span
										style={{
											height: Math.floor(
												detail.congressActivity?.totalAverageTurnout ?? 0
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
											detail.congressActivity?.turnoutTopPercentile ?? 0
										)}
										%
									</span>
									<strong>
										{Math.floor(
											detail.congressActivity?.individualAverageTurnout ?? 0
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
						</div>
					</div>
					<p className={detailStyle.origin}>출처 : 열려라국회</p>
				</section>
			</div>
		</>
	)
}
