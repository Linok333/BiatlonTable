import {
	SORT_TOTAL, SORT_SPEED, SEARCH_NAME,
} from './actionTypes';

const sortTotalAction = () => ({
	type: SORT_TOTAL,
});

const sortSpeedAction = () => ({
	type: SORT_SPEED,
});

const searchNameAction = (searchStr) => ({
	type: SEARCH_NAME,
	payload: searchStr,
});

export {
	sortTotalAction,
	sortSpeedAction,
	searchNameAction,
};
