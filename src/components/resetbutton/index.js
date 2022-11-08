import LengthInput from '../lengthInput/lengthInput.jsx';
import SortButtons from '../sortbutton/sortButton.jsx';
import SortingSpeed from '../sortingSpeed/sortingSpeed.jsx';
import ResetButton from './resetButton';

import styles from './styles.module.css';

const Controls = () => {
	return (
		<div className={styles.controls}>
			<div className={styles.controls__buttons}>
				<ResetButton />
				<SortButtons />
			</div>
			<div className={styles.controls__sliders}>
				<LengthInput />
				<SortingSpeed />
			</div>
		</div>
	);
};

export default Controls;
