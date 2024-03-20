import { Menu } from '@headlessui/react'
import Image from 'next/image'
import variables from '@/styles/variables.module.scss'
import arrowBtnIcon from '@/public/assets/icons/dropdown-arrow.svg'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

interface IProps {
	defaultOption?: string
	currentOption?: string

	options: string[]
	onSelect: (options: string) => void
	placeholder?: string
	isOutline?: boolean
}

const Dropdown: React.FC<IProps> = ({
	currentOption,
	options,
	onSelect,
	placeholder,
	isOutline = false,
}) => (
	<Menu as="div" className={variables.dropdown}>
		{/* <Menu.Button className={variables.dropdown__btn} outline={outline}> */}

		<Menu.Button
			className={classNames(
				isOutline
					? variables.dropdown__isOutline
					: variables.dropdown__noOutline,
				variables.dropdown__btn
			)}>
			{currentOption || <p>{placeholder}</p>}
			<Image
				src={arrowBtnIcon}
				alt="dropdown arrow button"
				width={16}
				height={16}
			/>
		</Menu.Button>

		<Menu.Items className={variables.dropdown__content}>
			<div>
				{options.map((option, _index) => (
					<Menu.Item key={option}>
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
export default Dropdown
