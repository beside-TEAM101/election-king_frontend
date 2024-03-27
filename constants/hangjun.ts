interface KoreanLocation {
	sido: { sido: string; codeNm: string }[]
	sigugun: { no: number; sido: string; sigugun: string; codeNm: string }[]
}

const hangjun: KoreanLocation = {
	sido: [
		{ sido: '서울특별시', codeNm: '서울특별시' },
		{ sido: '부산광역시', codeNm: '부산광역시' },
		{ sido: '대구광역시', codeNm: '대구광역시' },
		{ sido: '인천광역시', codeNm: '인천광역시' },
		{ sido: '광주광역시', codeNm: '광주광역시' },
		{ sido: '대전광역시', codeNm: '대전광역시' },
		{ sido: '울산광역시', codeNm: '울산광역시' },
		{ sido: '세종특별자치시', codeNm: '세종특별자치시' },
		{ sido: '경기도', codeNm: '경기도' },
		{ sido: '강원특별자치도', codeNm: '강원특별자치도' },
		{ sido: '충청북도', codeNm: '충청북도' },
		{ sido: '충청남도', codeNm: '충청남도' },
		{ sido: '전북특별자치도', codeNm: '전북특별자치도' },
		{ sido: '전라남도', codeNm: '전라남도' },
		{ sido: '경상북도', codeNm: '경상북도' },
		{ sido: '경상남도', codeNm: '경상남도' },
		{ sido: '제주특별자치도', codeNm: '제주특별자치도' },
	],
	sigugun: [
		/* 서울 */
		{ no: 1, sido: '서울특별시', sigugun: '종로구', codeNm: '종로구' },
		{
			no: 2,
			sido: '서울특별시',
			sigugun: '중구성동구갑',
			codeNm: '중구성동구갑',
		},
		{
			no: 2,
			sido: '서울특별시',
			sigugun: '중구성동구을',
			codeNm: '중구성동구을',
		},

		{ no: 3, sido: '서울특별시', sigugun: '용산구', codeNm: '용산구' },
		{ no: 5, sido: '서울특별시', sigugun: '광진구갑', codeNm: '광진구갑' },
		{ no: 5, sido: '서울특별시', sigugun: '광진구을', codeNm: '광진구을' },
		{ no: 6, sido: '서울특별시', sigugun: '동대문구갑', codeNm: '동대문구갑' },
		{ no: 6, sido: '서울특별시', sigugun: '동대문구을', codeNm: '동대문구을' },

		{ no: 7, sido: '서울특별시', sigugun: '중랑구갑', codeNm: '중랑구갑' },
		{ no: 7, sido: '서울특별시', sigugun: '중랑구을', codeNm: '중랑구을' },

		{ no: 8, sido: '서울특별시', sigugun: '성북구갑', codeNm: '성북구갑' },
		{ no: 8, sido: '서울특별시', sigugun: '성북구을', codeNm: '성북구을' },

		{ no: 9, sido: '서울특별시', sigugun: '강북구갑', codeNm: '강북구갑' },
		{ no: 9, sido: '서울특별시', sigugun: '강북구을', codeNm: '강북구을' },

		{ no: 10, sido: '서울특별시', sigugun: '도봉구갑', codeNm: '도봉구갑' },
		{ no: 10, sido: '서울특별시', sigugun: '도봉구을', codeNm: '도봉구을' },

		{ no: 11, sido: '서울특별시', sigugun: '노원구갑', codeNm: '노원구갑' },
		{ no: 11, sido: '서울특별시', sigugun: '노원구을', codeNm: '노원구을' },

		{ no: 12, sido: '서울특별시', sigugun: '은평구갑', codeNm: '은평구갑' },
		{ no: 12, sido: '서울특별시', sigugun: '은평구을', codeNm: '은평구을' },

		{ no: 13, sido: '서울특별시', sigugun: '서대문구갑', codeNm: '서대문구갑' },
		{ no: 13, sido: '서울특별시', sigugun: '서대문구을', codeNm: '서대문구을' },

		{ no: 14, sido: '서울특별시', sigugun: '마포구갑', codeNm: '마포구갑' },
		{ no: 14, sido: '서울특별시', sigugun: '마포구을', codeNm: '마포구을' },

		{ no: 15, sido: '서울특별시', sigugun: '양천구갑', codeNm: '양천구갑' },
		{ no: 15, sido: '서울특별시', sigugun: '양천구을', codeNm: '양천구을' },

		{ no: 16, sido: '서울특별시', sigugun: '강서구갑', codeNm: '강서구갑' },
		{ no: 16, sido: '서울특별시', sigugun: '강서구을', codeNm: '강서구을' },
		{ no: 16, sido: '서울특별시', sigugun: '강서구병', codeNm: '강서구병' },

		{ no: 17, sido: '서울특별시', sigugun: '구로구갑', codeNm: '구로구갑' },
		{ no: 17, sido: '서울특별시', sigugun: '구로구을', codeNm: '구로구을' },

		{ no: 18, sido: '서울특별시', sigugun: '금천구', codeNm: '금천구' },

		{ no: 19, sido: '서울특별시', sigugun: '영등포구갑', codeNm: '영등포구갑' },
		{ no: 19, sido: '서울특별시', sigugun: '영등포구을', codeNm: '영등포구을' },

		{ no: 20, sido: '서울특별시', sigugun: '동작구갑', codeNm: '동작구갑' },
		{ no: 20, sido: '서울특별시', sigugun: '동작구을', codeNm: '동작구을' },

		{ no: 21, sido: '서울특별시', sigugun: '관악구갑', codeNm: '관악구갑' },
		{ no: 21, sido: '서울특별시', sigugun: '관악구을', codeNm: '관악구을' },

		{ no: 22, sido: '서울특별시', sigugun: '서초구갑', codeNm: '서초구갑' },
		{ no: 22, sido: '서울특별시', sigugun: '서초구을', codeNm: '서초구을' },

		{ no: 23, sido: '서울특별시', sigugun: '강남구갑', codeNm: '강남구갑' },
		{ no: 23, sido: '서울특별시', sigugun: '강남구을', codeNm: '강남구을' },
		{ no: 23, sido: '서울특별시', sigugun: '강남구병', codeNm: '강남구병' },

		{ no: 24, sido: '서울특별시', sigugun: '송파구갑', codeNm: '송파구갑' },
		{ no: 24, sido: '서울특별시', sigugun: '송파구을', codeNm: '송파구을' },
		{ no: 24, sido: '서울특별시', sigugun: '송파구병', codeNm: '송파구병' },

		{ no: 25, sido: '서울특별시', sigugun: '강동구갑', codeNm: '강동구갑' },
		{ no: 25, sido: '서울특별시', sigugun: '강동구을', codeNm: '강동구을' },

		/* 부산 */
		{ no: 1, sido: '부산광역시', sigugun: '중구영동구', codeNm: '중구영동구' },
		{ no: 2, sido: '부산광역시', sigugun: '서구동구', codeNm: '서구동구' },
		{ no: 5, sido: '부산광역시', sigugun: '부산진구갑', codeNm: '부산진구갑' },
		{ no: 5, sido: '부산광역시', sigugun: '부산진구을', codeNm: '부산진구을' },

		{ no: 6, sido: '부산광역시', sigugun: '동래구', codeNm: '동래구' },
		{ no: 7, sido: '부산광역시', sigugun: '남구', codeNm: '남구' },
		{ no: 8, sido: '부산광역시', sigugun: '북구갑', codeNm: '북구갑' },
		{ no: 8, sido: '부산광역시', sigugun: '북구을', codeNm: '북구을' },

		{ no: 9, sido: '부산광역시', sigugun: '해운대구갑', codeNm: '해운대구갑' },
		{ no: 9, sido: '부산광역시', sigugun: '해운대구을', codeNm: '해운대구을' },

		{ no: 10, sido: '부산광역시', sigugun: '사하구갑', codeNm: '사하구갑' },
		{ no: 10, sido: '부산광역시', sigugun: '사하구을', codeNm: '사하구을' },

		{ no: 11, sido: '부산광역시', sigugun: '금정구', codeNm: '금정구' },
		{ no: 12, sido: '부산광역시', sigugun: '강서구', codeNm: '강서구' },
		{ no: 13, sido: '부산광역시', sigugun: '연제구', codeNm: '연제구' },
		{ no: 14, sido: '부산광역시', sigugun: '수영구', codeNm: '수영구' },
		{ no: 15, sido: '부산광역시', sigugun: '사상구', codeNm: '사상구' },
		{ no: 16, sido: '부산광역시', sigugun: '기장군', codeNm: '기장군' },

		/* 대구 */
		{ no: 1, sido: '대구광역시', sigugun: '중구남구', codeNm: '중구남구' },
		{
			no: 2,
			sido: '대구광역시',
			sigugun: '동구군위군갑',
			codeNm: '동구군위군갑',
		},
		{
			no: 2,
			sido: '대구광역시',
			sigugun: '동구군위군을',
			codeNm: '동구군위군을',
		},

		{ no: 3, sido: '대구광역시', sigugun: '서구', codeNm: '서구' },
		{ no: 5, sido: '대구광역시', sigugun: '북구갑', codeNm: '북구갑' },
		{ no: 5, sido: '대구광역시', sigugun: '북구을', codeNm: '북구을' },

		{ no: 6, sido: '대구광역시', sigugun: '수성구갑', codeNm: '수성구갑' },
		{ no: 6, sido: '대구광역시', sigugun: '수성구을', codeNm: '수성구을' },

		{ no: 7, sido: '대구광역시', sigugun: '달서구갑', codeNm: '달서구갑' },
		{ no: 7, sido: '대구광역시', sigugun: '달서구을', codeNm: '달서구을' },
		{ no: 7, sido: '대구광역시', sigugun: '달서구병', codeNm: '달서구병' },

		{ no: 8, sido: '대구광역시', sigugun: '달성군', codeNm: '달성군' },

		/* 인천 */
		{
			no: 1,
			sido: '인천광역시',
			sigugun: '중구강화군옹진군',
			codeNm: '중구강화군옹진군',
		},

		{
			no: 3,
			sido: '인천광역시',
			sigugun: '동구미추홀구갑',
			codeNm: '동구미추홀구갑',
		},
		{
			no: 3,
			sido: '인천광역시',
			sigugun: '동구미추홀구을',
			codeNm: '동구미추홀구을',
		},

		{ no: 4, sido: '인천광역시', sigugun: '연수구갑', codeNm: '연수구갑' },
		{ no: 4, sido: '인천광역시', sigugun: '연수구을', codeNm: '연수구을' },

		{ no: 5, sido: '인천광역시', sigugun: '남동구갑', codeNm: '남동구갑' },
		{ no: 5, sido: '인천광역시', sigugun: '남동구을', codeNm: '남동구을' },

		{ no: 6, sido: '인천광역시', sigugun: '부평구갑', codeNm: '부평구갑' },
		{ no: 6, sido: '인천광역시', sigugun: '부평구을', codeNm: '부평구을' },

		{ no: 7, sido: '인천광역시', sigugun: '계양구갑', codeNm: '계양구갑' },
		{ no: 7, sido: '인천광역시', sigugun: '계양구을', codeNm: '계양구을' },

		{ no: 2, sido: '인천광역시', sigugun: '서구갑', codeNm: '서구갑' },
		{ no: 2, sido: '인천광역시', sigugun: '서구을', codeNm: '서구을' },
		{ no: 2, sido: '인천광역시', sigugun: '서구병', codeNm: '서구병' },

		/* 광주 */
		{ no: 1, sido: '광주광역시', sigugun: '동구남구갑', codeNm: '동구남구갑' },
		{ no: 1, sido: '광주광역시', sigugun: '동구남구을', codeNm: '동구남구을' },

		{ no: 2, sido: '광주광역시', sigugun: '서구갑', codeNm: '서구갑' },
		{ no: 2, sido: '광주광역시', sigugun: '서구을', codeNm: '서구을' },

		{ no: 4, sido: '광주광역시', sigugun: '북구갑', codeNm: '북구갑' },
		{ no: 4, sido: '광주광역시', sigugun: '북구을', codeNm: '북구을' },

		{ no: 5, sido: '광주광역시', sigugun: '광산구갑', codeNm: '광산구갑' },
		{ no: 5, sido: '광주광역시', sigugun: '광산구을', codeNm: '광산구을' },

		/* 대전 */
		{ no: 1, sido: '대전광역시', sigugun: '동구', codeNm: '동구' },
		{ no: 2, sido: '대전광역시', sigugun: '중구', codeNm: '중구' },
		{ no: 3, sido: '대전광역시', sigugun: '서구갑', codeNm: '서구갑' },
		{ no: 3, sido: '대전광역시', sigugun: '서구을', codeNm: '서구을' },

		{ no: 4, sido: '대전광역시', sigugun: '유성구갑', codeNm: '유성구갑' },
		{ no: 4, sido: '대전광역시', sigugun: '유성구을', codeNm: '유성구을' },

		{ no: 5, sido: '대전광역시', sigugun: '대덕구', codeNm: '대덕구' },

		/* 울산 */
		{ no: 1, sido: '울산광역시', sigugun: '중구', codeNm: '중구' },
		{ no: 2, sido: '울산광역시', sigugun: '남구갑', codeNm: '남구갑' },
		{ no: 2, sido: '울산광역시', sigugun: '남구을', codeNm: '남구을' },

		{ no: 3, sido: '울산광역시', sigugun: '동구', codeNm: '동구' },
		{ no: 4, sido: '울산광역시', sigugun: '북구', codeNm: '북구' },
		{ no: 5, sido: '울산광역시', sigugun: '울주군', codeNm: '울주군' },

		/* 세종특별자치 */
		{
			no: 1,
			sido: '세종특별자치시',
			sigugun: '세종특별자치시',
			codeNm: '세종특별자치시',
		},

		/* 경기도 */
		{ no: 1, sido: '경기도', sigugun: '수원시갑', codeNm: '수원시갑' },
		{ no: 1, sido: '경기도', sigugun: '수원시을', codeNm: '수원시을' },
		{ no: 1, sido: '경기도', sigugun: '수원시병', codeNm: '수원시병' },
		{ no: 1, sido: '경기도', sigugun: '수원시정', codeNm: '수원시정' },
		{ no: 1, sido: '경기도', sigugun: '수원시무', codeNm: '수원시무' },

		{ no: 2, sido: '경기도', sigugun: '성남시수정구', codeNm: '성남시수정구' },
		{ no: 2, sido: '경기도', sigugun: '성남시중원구', codeNm: '성남시중원구' },
		{
			no: 2,
			sido: '경기도',
			sigugun: '성남시분당구갑',
			codeNm: '성남시분당구갑',
		},
		{
			no: 2,
			sido: '경기도',
			sigugun: '성남시분당구을',
			codeNm: '성남시분당구을',
		},

		{ no: 3, sido: '경기도', sigugun: '의정부시갑', codeNm: '의정부시갑' },
		{ no: 3, sido: '경기도', sigugun: '의정부시을', codeNm: '의정부시을' },

		{ no: 4, sido: '경기도', sigugun: '안양시만안구', codeNm: '안양시만안구' },

		{
			no: 4,
			sido: '경기도',
			sigugun: '안양시동안구갑',
			codeNm: '안양시동안구갑',
		},

		{
			no: 4,
			sido: '경기도',
			sigugun: '안양시동안구을',
			codeNm: '안양시동안구을',
		},

		{ no: 5, sido: '경기도', sigugun: '부천시갑', codeNm: '부천시갑' },
		{ no: 5, sido: '경기도', sigugun: '부천시을', codeNm: '부천시을' },
		{ no: 5, sido: '경기도', sigugun: '부천시병', codeNm: '부천시병' },

		{ no: 6, sido: '경기도', sigugun: '광명시갑', codeNm: '광명시갑' },
		{ no: 6, sido: '경기도', sigugun: '광명시을', codeNm: '광명시을' },

		{ no: 7, sido: '경기도', sigugun: '평택시갑', codeNm: '평택시갑' },
		{ no: 7, sido: '경기도', sigugun: '평택시을', codeNm: '평택시을' },
		{ no: 7, sido: '경기도', sigugun: '평택시병', codeNm: '평택시병' },

		{
			no: 8,
			sido: '경기도',
			sigugun: '동두천시양주시연천군갑',
			codeNm: '동두천시양주시연천군갑',
		},
		{
			no: 8,
			sido: '경기도',
			sigugun: '동두천시양주시연천군을',
			codeNm: '동두천시양주시연천군을',
		},

		{ no: 9, sido: '경기도', sigugun: '안산시갑', codeNm: '안산시갑' },
		{ no: 9, sido: '경기도', sigugun: '안산시을', codeNm: '안산시을' },
		{ no: 9, sido: '경기도', sigugun: '안산시병', codeNm: '안산시병' },

		{ no: 10, sido: '경기도', sigugun: '고양시갑', codeNm: '고양시갑' },
		{ no: 10, sido: '경기도', sigugun: '고양시을', codeNm: '고양시을' },
		{ no: 10, sido: '경기도', sigugun: '고양시병', codeNm: '고양시병' },
		{ no: 10, sido: '경기도', sigugun: '고양시정', codeNm: '고양시정' },

		{ no: 17, sido: '경기도', sigugun: '의왕시과천시', codeNm: '의왕시과천시' },

		{ no: 12, sido: '경기도', sigugun: '구리시', codeNm: '구리시' },
		{ no: 13, sido: '경기도', sigugun: '남양주시갑', codeNm: '남양주시갑' },
		{ no: 13, sido: '경기도', sigugun: '남양주시을', codeNm: '남양주시을' },
		{ no: 13, sido: '경기도', sigugun: '남양주시병', codeNm: '남양주시병' },

		{ no: 14, sido: '경기도', sigugun: '오산시', codeNm: '오산시' },
		{ no: 15, sido: '경기도', sigugun: '시흥시갑', codeNm: '시흥시갑' },
		{ no: 15, sido: '경기도', sigugun: '시흥시을', codeNm: '시흥시을' },

		{ no: 16, sido: '경기도', sigugun: '군포시', codeNm: '군포시' },
		{ no: 18, sido: '경기도', sigugun: '하남시갑', codeNm: '하남시갑' },
		{ no: 18, sido: '경기도', sigugun: '하남시을', codeNm: '하남시을' },

		{ no: 19, sido: '경기도', sigugun: '용인시갑', codeNm: '용인시갑' },
		{ no: 19, sido: '경기도', sigugun: '용인시을', codeNm: '용인시을' },
		{ no: 19, sido: '경기도', sigugun: '용인시병', codeNm: '용인시병' },
		{ no: 19, sido: '경기도', sigugun: '용인시정', codeNm: '용인시정' },

		{ no: 20, sido: '경기도', sigugun: '파주시갑', codeNm: '파주시갑' },
		{ no: 20, sido: '경기도', sigugun: '파주시을', codeNm: '파주시을' },

		{ no: 21, sido: '경기도', sigugun: '이천시', codeNm: '이천시' },
		{ no: 22, sido: '경기도', sigugun: '안성시', codeNm: '안성시' },
		{ no: 23, sido: '경기도', sigugun: '김포시갑', codeNm: '김포시갑' },
		{ no: 23, sido: '경기도', sigugun: '김포시을', codeNm: '김포시을' },

		{ no: 24, sido: '경기도', sigugun: '화성시갑', codeNm: '화성시갑' },
		{ no: 24, sido: '경기도', sigugun: '화성시을', codeNm: '화성시을' },
		{ no: 24, sido: '경기도', sigugun: '화성시병', codeNm: '화성시병' },
		{ no: 24, sido: '경기도', sigugun: '화성시정', codeNm: '화성시정' },

		{ no: 25, sido: '경기도', sigugun: '광주시갑', codeNm: '광주시갑' },
		{ no: 25, sido: '경기도', sigugun: '광주시을', codeNm: '광주시을' },

		{ no: 27, sido: '경기도', sigugun: '포천시가평군', codeNm: '포천시가평군' },
		{ no: 28, sido: '경기도', sigugun: '여주시양평군', codeNm: '여주시양평군' },

		/* 강원특별자치도 */
		{
			no: 1,
			sido: '강원특별자치도',
			sigugun: '춘천시철원군화천군양구군갑',
			codeNm: '춘천시철원군화천군양구군갑',
		},
		{
			no: 1,
			sido: '강원특별자치도',
			sigugun: '춘천시철원군화천군양구군을',
			codeNm: '춘천시철원군화천군양구군을',
		},
		{ no: 2, sido: '강원특별자치도', sigugun: '원주시갑', codeNm: '원주시갑' },
		{ no: 2, sido: '강원특별자치도', sigugun: '원주시을', codeNm: '원주시을' },

		{ no: 3, sido: '강원특별자치도', sigugun: '강릉시', codeNm: '강릉시' },
		{
			no: 4,
			sido: '강원특별자치도',
			sigugun: '동해시태백시삼척시정선군',
			codeNm: '동해시태백시삼척시정선군',
		},

		{
			no: 6,
			sido: '강원특별자치도',
			sigugun: '속초시인제군고성군양양군',
			codeNm: '속초시인제군고성군양양군',
		},
		{
			no: 8,
			sido: '강원특별자치도',
			sigugun: '홍천군횡성군영월군평창군',
			codeNm: '홍천군횡성군영월군평창군',
		},

		/* 충북 */
		{
			no: 1,
			sido: '충청북도',
			sigugun: '청주시상당구',
			codeNm: '청주시상당구',
		},
		{
			no: 1,
			sido: '충청북도',
			sigugun: '청주시서원구',
			codeNm: '청주시서원구',
		},
		{
			no: 1,
			sido: '충청북도',
			sigugun: '청주시흥덕구',
			codeNm: '청주시흥덕구',
		},
		{
			no: 1,
			sido: '충청북도',
			sigugun: '청주시청원구',
			codeNm: '청주시청원구',
		},
		{ no: 2, sido: '충청북도', sigugun: '충주시', codeNm: '충주시' },
		{
			no: 3,
			sido: '충청북도',
			sigugun: '제천시단양군',
			codeNm: '제천시단양군',
		},
		{
			no: 4,
			sido: '충청북도',
			sigugun: '보은군옥천군영동군괴산군',
			codeNm: '보은군옥천군영동군괴산군',
		},

		{
			no: 7,
			sido: '충청북도',
			sigugun: '증평군진천군음성군',
			codeNm: '증평군진천군음성군',
		},

		/* 충남 */
		{ no: 1, sido: '충청남도', sigugun: '천안시갑', codeNm: '천안시갑' },
		{ no: 1, sido: '충청남도', sigugun: '천안시을', codeNm: '천안시을' },
		{ no: 1, sido: '충청남도', sigugun: '천안시병', codeNm: '천안시병' },

		{
			no: 2,
			sido: '충청남도',
			sigugun: '공주시부여군청양군',
			codeNm: '공주시부여군청양군',
		},
		{
			no: 3,
			sido: '충청남도',
			sigugun: '보령시서천군',
			codeNm: '보령시서천군',
		},
		{ no: 4, sido: '충청남도', sigugun: '아산시갑', codeNm: '아산시갑' },
		{ no: 4, sido: '충청남도', sigugun: '아산시을', codeNm: '아산시을' },

		{
			no: 5,
			sido: '충청남도',
			sigugun: '서산시태안군',
			codeNm: '서산시태안군',
		},
		{
			no: 6,
			sido: '충청남도',
			sigugun: '논산시계룡시금산군',
			codeNm: '논산시계룡시금산군',
		},
		{ no: 8, sido: '충청남도', sigugun: '당진시', codeNm: '당진시' },

		{
			no: 13,
			sido: '충청남도',
			sigugun: '홍성군예산군',
			codeNm: '홍성군예산군',
		},

		/* 전북 */
		{ no: 1, sido: '전북특별자치도', sigugun: '전주시갑', codeNm: '전주시갑' },
		{ no: 1, sido: '전북특별자치도', sigugun: '전주시을', codeNm: '전주시을' },
		{ no: 1, sido: '전북특별자치도', sigugun: '전주시병', codeNm: '전주시병' },

		{
			no: 2,
			sido: '전북특별자치도',
			sigugun: '군산시김제시부안군갑',
			codeNm: '군산시김제시부안군갑',
		},
		{
			no: 2,
			sido: '전북특별자치도',
			sigugun: '군산시김제시부안군을',
			codeNm: '군산시김제시부안군을',
		},
		{ no: 3, sido: '전북특별자치도', sigugun: '익산시갑', codeNm: '익산시갑' },
		{ no: 3, sido: '전북특별자치도', sigugun: '익산시을', codeNm: '익산시을' },

		{
			no: 4,
			sido: '전북특별자치도',
			sigugun: '정읍시고창군',
			codeNm: '정읍시고창군',
		},
		{
			no: 5,
			sido: '전북특별자치도',
			sigugun: '남원시장수군임실군순창군',
			codeNm: '남원시장수군임실군순창군',
		},
		{
			no: 7,
			sido: '전북특별자치도',
			sigugun: '완주군진안군무주군',
			codeNm: '완주군진안군무주군',
		},

		/* 전남 */
		{ no: 1, sido: '전라남도', sigugun: '목포시', codeNm: '목포시' },
		{ no: 2, sido: '전라남도', sigugun: '여수시갑', codeNm: '여수시갑' },
		{ no: 2, sido: '전라남도', sigugun: '여수시을', codeNm: '여수시을' },

		{
			no: 3,
			sido: '전라남도',
			sigugun: '순천시광양시곡성군구례군갑',
			codeNm: '순천시광양시곡성군구례군갑',
		},
		{
			no: 3,
			sido: '전라남도',
			sigugun: '순천시광양시곡성군구례군을',
			codeNm: '순천시광양시곡성군구례군을',
		},
		{
			no: 4,
			sido: '전라남도',
			sigugun: '나주시화순군',
			codeNm: '나주시화순군',
		},
		{
			no: 6,
			sido: '전라남도',
			sigugun: '담양군함평군영광군장성군',
			codeNm: '담양군함평군영광군장성군',
		},

		{
			no: 9,
			sido: '전라남도',
			sigugun: '고흥군보성군장흥군강진군',
			codeNm: '고흥군보성군장흥군강진군',
		},

		{
			no: 14,
			sido: '전라남도',
			sigugun: '해남군완도군진도군',
			codeNm: '해남군완도군진도군',
		},
		{
			no: 15,
			sido: '전라남도',
			sigugun: '영암군무안군신안군',
			codeNm: '영암군무안군신안군',
		},

		/* 경북 */
		{ no: 1, sido: '경상북도', sigugun: '포항시북구', codeNm: '포항시북구' },
		{
			no: 1,
			sido: '경상북도',
			sigugun: '포항시남구울릉군',
			codeNm: '포항시남구울릉군',
		},

		{ no: 2, sido: '경상북도', sigugun: '경주시', codeNm: '경주시' },
		{ no: 3, sido: '경상북도', sigugun: '김천시', codeNm: '김천시' },
		{
			no: 4,
			sido: '경상북도',
			sigugun: '안동시예천군',
			codeNm: '안동시예천군',
		},
		{ no: 5, sido: '경상북도', sigugun: '구미시갑', codeNm: '구미시갑' },
		{ no: 5, sido: '경상북도', sigugun: '구미시을', codeNm: '구미시을' },

		{
			no: 6,
			sido: '경상북도',
			sigugun: '영주시영양군봉화군',
			codeNm: '영주시영양군봉화군',
		},
		{
			no: 7,
			sido: '경상북도',
			sigugun: '영천시청도군',
			codeNm: '영천시청도군',
		},
		{
			no: 8,
			sido: '경상북도',
			sigugun: '상주시문경시',
			codeNm: '상주시문경시',
		},
		{ no: 10, sido: '경상북도', sigugun: '경산시', codeNm: '경산시' },
		{
			no: 11,
			sido: '경상북도',
			sigugun: '의성군청송군영덕군울진군',
			codeNm: '의성군청송군영덕군울진군',
		},

		{
			no: 16,
			sido: '경상북도',
			sigugun: '고령군성주군칠곡군',
			codeNm: '고령군성주군칠곡군',
		},

		/* 경남 */
		{
			no: 1,
			sido: '경상남도',
			sigugun: '창원시의창구',
			codeNm: '창원시의창구',
		},
		{
			no: 1,
			sido: '경상남도',
			sigugun: '창원시성산구',
			codeNm: '창원시성산구',
		},
		{
			no: 1,
			sido: '경상남도',
			sigugun: '창원시마산합포구',
			codeNm: '창원시마산합포구',
		},
		{
			no: 1,
			sido: '경상남도',
			sigugun: '창원시마산회원구',
			codeNm: '창원시마산회원구',
		},
		{
			no: 1,
			sido: '경상남도',
			sigugun: '창원시진해구',
			codeNm: '창원시진해구',
		},

		{ no: 2, sido: '경상남도', sigugun: '진주시갑', codeNm: '진주시갑' },
		{ no: 2, sido: '경상남도', sigugun: '진주시을', codeNm: '진주시을' },

		{
			no: 3,
			sido: '경상남도',
			sigugun: '통영시고성군',
			codeNm: '통영시고성군',
		},
		{
			no: 4,
			sido: '경상남도',
			sigugun: '사천시남해군하동군',
			codeNm: '사천시남해군하동군',
		},
		{ no: 5, sido: '경상남도', sigugun: '김해시갑', codeNm: '김해시갑' },
		{ no: 5, sido: '경상남도', sigugun: '김해시을', codeNm: '김해시을' },

		{
			no: 6,
			sido: '경상남도',
			sigugun: '밀양시의령군함안군창녕군',
			codeNm: '밀양시의령군함안군창녕군',
		},
		{ no: 7, sido: '경상남도', sigugun: '거제시', codeNm: '거제시' },
		{ no: 8, sido: '경상남도', sigugun: '양산시갑', codeNm: '양산시갑' },
		{ no: 8, sido: '경상남도', sigugun: '양산시을', codeNm: '양산시을' },

		{
			no: 15,
			sido: '경상남도',
			sigugun: '산청군함양군거창군합천군',
			codeNm: '산청군함양군거창군합천군',
		},

		/* 제주 */
		{ no: 1, sido: '제주특별자치도', sigugun: '제주시', codeNm: '제주시' },
		{ no: 2, sido: '제주특별자치도', sigugun: '서귀포시', codeNm: '서귀포시' },
	],
}
export default hangjun
