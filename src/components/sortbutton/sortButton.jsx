import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../UI/button';

import styles from './styles.module.css';

const bubbleSort = () => ({ type: 'SORTING/BUBBLE_SORT' });
const mergeSort = () => ({ type: 'SORTING/MERGE_SORT' });
const shakerSort = () => ({ type: 'SORTING/SHAKER_SORT' });
const quickSort = () => ({ type: 'SORTING/QUICK_SORT' });

const SortButtons = () => {
	const dispatch = useDispatch();

	const handleClick = (action) => dispatch(action());

	return (
		<div className={styles.sortbuttons}>
			<Button text="Пузырьком" onClick={() => handleClick(bubbleSort)} />
			<Button text="Слиянием" onClick={() => handleClick(mergeSort)} />
			<Button text="Перемешиванием" onClick={() => handleClick(shakerSort)} />
			<Button text="Быстрая" onClick={() => handleClick(quickSort)} />
		</div>
	);
};

export default SortButtons;
