'use client'

import detailStyle from '@/styles/detail.module.scss'
import { useState } from 'react'

export default function TabMenu() {
	const [isActive, setIsActive] = useState('profile')
	const scrollToSection = (id) => {
		const SCROLL_MARGIN_TOP = 70
		const $section = document.getElementById(id)
		setIsActive(id)

		if ($section) {
			const rect = $section.getBoundingClientRect()
			const offset = rect.top + window.scrollY - SCROLL_MARGIN_TOP
			window.scrollTo({
				top: offset,
				behavior: 'smooth',
			})
		}
	}

	return (
		<ul className={detailStyle.menu}>
			<li
				className={`${detailStyle.menu__item} ${isActive === 'profile' ? detailStyle.menu__item__active : ''}`}>
				<button type="button" onClick={() => scrollToSection('profile')}>
					프로필
				</button>
			</li>
			<li
				className={`${detailStyle.menu__item} ${isActive === 'conviction' ? detailStyle.menu__item__active : ''}`}>
				<button type="button" onClick={() => scrollToSection('conviction')}>
					전과정보
				</button>
			</li>
			<li
				className={`${detailStyle.menu__item} ${isActive === 'pledge' ? detailStyle.menu__item__active : ''}`}>
				<button type="button" onClick={() => scrollToSection('pledge')}>
					공약
				</button>
			</li>
			<li
				className={`${detailStyle.menu__item} ${isActive === 'voting' ? detailStyle.menu__item__active : ''}`}>
				<button type="button" onClick={() => scrollToSection('voting')}>
					의안찬반
				</button>
			</li>
			{/* <li className={`${detailStyle.menu__item} ${isActive === ? detailStyle.menu__item__active : ''}`}>
				<button type="button" onClick={() => scrollToSection('attendance')}>
					회의출석률
				</button>
			</li> */}
			<li
				className={`${detailStyle.menu__item} ${isActive === 'participationRate' ? detailStyle.menu__item__active : ''}`}>
				<button
					type="button"
					onClick={() => scrollToSection('participationRate')}>
					투표참여율
				</button>
			</li>
		</ul>
	)
}
