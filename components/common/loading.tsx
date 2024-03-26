import variables from '@/styles/variables.module.scss'

export default function Loading() {
	return (
		<div className={variables.loadingWrap}>
			<p>Loading...</p>
		</div>
	)
}
