import variables from '@/app/assets/styles/variables.module.scss'
import styles from './page.module.css'

export default function Home() {
	return (
		<div>
			<h1 className={styles.main}>총선</h1>
			<p className={variables.title}> 총선 scss적용</p>
		</div>
	)
}
