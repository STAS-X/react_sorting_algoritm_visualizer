import { useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Bar from '../bar/bar';

import styles from './styles.module.css';

const WIDTH_MULTIPLIER = window.screen.width;

const ACTIVE_COLOR = '#ff5555';
const SORTED_COLOR = '#4ed26c';
const AUXILIARY_COLOR = '#bd93f9';
const DEFAULT_COLOR = '#ffb86c';

const resetArray = () => ({ type: 'CONTROLS/RESET_ARRAY' });
const setSortedTime = () => ({ type: 'CONTROLS/SET_SORTING_TIME' });

const Array = () => {
	const {
		activeElements,
		auxiliaryElements,
		sortedElements,
		inProgress,
		sortedTime,
        sortType
	} = useSelector(
		({ comparison }) => ({
			activeElements: comparison.activeElements,
			auxiliaryElements: comparison.auxiliaryElements,
			sortedElements: comparison.sortedElements,
			inProgress: comparison.inProgress,
			sortedTime: comparison.sortedTime,
			sortType: comparison.sortType,
		}),
		shallowEqual
	);
	const array = useSelector(({ arraySettings }) => arraySettings.array);

	const dispatch = useDispatch();
	const createArray = () => dispatch(resetArray());
	const updateSortingTime = () => dispatch(setSortedTime());
	let timeId = useRef(0);

	useEffect(() => {
		createArray();
	}, []);

	useEffect(() => {
		if (!inProgress && timeId.current) {
			clearInterval(timeId.current);
			timeId.current = 0;
		}
		if (inProgress) {
			timeId.current = setInterval(() => {
				updateSortingTime();
			}, 150);
		}
	}, [inProgress]);

	const barWidth = WIDTH_MULTIPLIER / array.length || 0;

	return (
		<>
			<div className={styles.title}>
				<h4>
					Время работы алгоритма сортировки{' '}
					{sortType ? '«' + sortType + '» ' : ''}:{' '}
					{inProgress
						? Math.floor(performance.now() - sortedTime[0])
						: Math.floor(sortedTime[1] - sortedTime[0])}{' '}
					мс.
				</h4>
			</div>
			<div className={styles.array}>
				{array.map((height, index) => {
					const barColor =
						(sortedElements.includes(index) && SORTED_COLOR) ||
						(activeElements.includes(index) && ACTIVE_COLOR) ||
						(auxiliaryElements.includes(index) && AUXILIARY_COLOR) ||
						DEFAULT_COLOR;

					return (
						<Bar
							key={index}
							width={barWidth}
							height={height}
							color={barColor}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Array;
