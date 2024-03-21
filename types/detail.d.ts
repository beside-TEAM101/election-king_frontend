export type TDetailResponse = {
	education: string // 학력
	career: string // 이력
	conviction: number // 전과 수
	convictionDetailUrl: string
	imgUrl: string // 후보자 이미지 링크
	party: string // 정당 명
	billVotingResults: {
		votingList: TVotingList[]
	}
	billVotingResultsCount: number // 의안 투표 결과의 총 갯수
	congressActivity: {
		averageTurnout: number // 의안 투표 참여율
		turnoutTopPercentile: number // 의안 투표 참여 상위 백분위 수
	}
}

export type TVotingList = {
	billId: string // 의안 ID
	assemblyTerm: string // 국회의원 대 수 e.g. 20, 21
	billName: string // 의안 명
	billResult: string // 의안 투표 결과(최종) e.g. 원안가결, 수정가결, 폐기 등
	billUrl: string // 의안정보시스템 의안별 상세 URL
	vote: '불참' | '반대' | '찬성' | '기권' // e.g. 반대, 찬성, 기권, 불참
}