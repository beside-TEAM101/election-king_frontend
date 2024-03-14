import Image from 'next/image'
import { Menu } from '@headlessui/react'
import variables from '@/app/styles/variables.module.scss'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

interface DropdownProps {
	defaultOption?: string
	currentOption?: string
	options: string[]
	onSelect: (options: string) => void
	placeholder?: string
}

export default function Dropdown({
	currentOption,
	options,
	onSelect,
	placeholder,
}: DropdownProps) {
	return (
		<Menu as="div" className={variables.dropdown}>
			<Menu.Button className={variables.dropdown__btn}>
				{currentOption || <p>{placeholder}</p>}
				<Image
					src="/assets/icons/dropdown-arrow.svg"
					alt="dropdown arrow button"
					width="16"
					height="16"
				/>
			</Menu.Button>

			<Menu.Items className={variables.dropdown__content}>
				<div>
					{options.map((option, index) => (
						<Menu.Item key={index}>
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
						</Menu.Item>
					))}
				</div>
			</Menu.Items>
		</Menu>
	)
}
