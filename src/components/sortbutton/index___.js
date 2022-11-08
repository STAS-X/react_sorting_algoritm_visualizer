import ResetButton from './sortButton';

import styles from './styles.module.css';

const Controls = () => {
	return (
		<div className={styles.controls}>
			<div className={styles.controls__buttons}>
				<ResetButton />
			</div>
		</div>
	);
};

export default Controls;
