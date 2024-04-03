export const divideNumberToDigits = (
	numbers: number,
	divider = ',',
	replaceIdx = 3
) => {
	const NUMBER_WITH_DIVIDER_REGEX = new RegExp(
		`(\\d)(?=(?:\\d{${replaceIdx}})+(?!\\d))`,
		'g'
	)

	return String(numbers).replace(NUMBER_WITH_DIVIDER_REGEX, `$1${divider}`)
}
