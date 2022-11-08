const initial = {
	inProgress: false,
	sortedTime: [0,0],
    sortType:'',
	sortingSpeed: 1,
	activeElements: [],
	sortedElements: [],
	auxiliaryElements: [],
};

export default (state = initial, { type, value }) => {
	switch (type) {
		case 'COMPARISON/RESET':
			return {
				...initial,
				sortedTime: state.sortedTime,
				sortingSpeed: state.sortingSpeed,
                sortType:state.sortType
			};
		case 'COMPARISON/TOGGLE_SORT':
			return { ...state, inProgress: value };
		case 'COMPARISON/SET_SORT_TYPE':
			return { ...state, sortType: value };
		case 'COMPARISON/SET_SORTING_SPEED':
			return { ...state, sortingSpeed: value };
		case 'COMPARISON/SET_SORTING_TIME':
			return { ...state, sortedTime: value };
		case 'COMPARISON/SET_ACTIVE_ELEMENTS':
			return { ...state, activeElements: value };
		case 'COMPARISON/SET_AUXILIARY_ELEMENTS':
			return { ...state, auxiliaryElements: value };
		case 'COMPARISON/SET_SORTED_ELEMENTS':
			return { ...state, sortedElements: value };
		default:
			return state;
	}
};
