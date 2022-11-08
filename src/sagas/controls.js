import { all, put, select, takeLatest } from 'redux-saga/effects';

import { createArray } from '../utils';

function* resetArray() {
	const arrayLength = yield select(
		({ arraySettings }) => arraySettings.arrayLength
	);

	yield all([
		put({ type: 'COMPARISON/RESET' }),
		put({ type: 'ARRAY/SET_ARRAY', value: createArray(arrayLength) }),
	]);
}

function* setArrayLength({ value }) {
	yield put({ type: 'ARRAY/SET_LENGTH', value });
	yield resetArray();
}

export function* setSortedTime() {
	const { sortedTime, inProgress } = yield select(({ comparison }) => {
		return {
			sortedTime: comparison.sortedTime,
			inProgress: comparison.inProgress,
		};
	});

	if (inProgress) {
		yield put({
			type: 'COMPARISON/SET_SORTING_TIME',
			value: [Math.floor(sortedTime[0]) ?? 0, Math.floor(performance.now())],
		});
	}
}

export function* setSortType({value}) {
		yield put({
			type: 'COMPARISON/SET_SORT_TYPE',
			value,
		});
}

export default [
	takeLatest('CONTROLS/RESET_ARRAY', resetArray),
	takeLatest('CONTROLS/SET_ARRAY_LENGTH', setArrayLength),
	takeLatest('CONTROLS/SET_SORTING_TIME', setSortedTime),

];
