import Image from 'next/image'
import { Menu } from '@headlessui/react'
import variables from '@/app/styles/variables.module.scss'
import arrowBtnIcon from '@/public/assets/icons/dropdown-arrow.svg'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

interface DropdownProps {
	currentOption?: string
	options: string[]
	onSelect: (options: string) => void
	placeholder?: string
}

export default function Dropdown({
	currentOption,
	options,
	onSelect,
	placeholder = '서울시',
}: DropdownProps) {
	return (
		<Menu as="div" className={variables.dropdown}>
			<Menu.Button className={variables.dropdown__btn}>
				{currentOption || <span>{placeholder}</span>}
				<Image
					src={arrowBtnIcon}
					alt="dropdown arrow button"
					width={16}
					height={16}
				/>
			</Menu.Button>

			<Menu.Items className={variables.dropdown__content}>
				<div>
					{options.map((option) => (
						<Menu.Item>
							<div key={option}>
								{({ active }) => (
									<button
										type="button"
										className={classNames(
											active ? variables.dropdown__focusItem : '',
											variables.dropdown__item
										)}
										onClick={() => onSelect(option)}>
										{option}
									</button>
								)}
							</div>
						</Menu.Item>
					))}
				</div>
			</Menu.Items>
		</Menu>
	)
}
