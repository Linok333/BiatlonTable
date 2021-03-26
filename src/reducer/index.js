import {
	SORT_TOTAL, SORT_SPEED, SEARCH_NAME,
} from '../action/actionTypes';

const initialState = {
	data: [
		{
			id: 1, participant: 'Lina', total: 450, speed: 10, country: 'Ukraine', percent: '98%',
		},
		{
			id: 2, participant: 'Vlad', total: 234, speed: 7, country: 'Canada', percent: '75%',
		},
		{
			id: 3, participant: 'Andrii', total: 308, speed: 6, country: 'China', percent: '85%',
		},
		{
			id: 4, participant: 'Dima', total: 307, speed: 9, country: 'France', percent: '85%',
		},
		{
			id: 5, participant: 'Dina', total: 286, speed: 8, country: 'Russia', percent: '80%',
		},
	],
	mainData: [
		{
			id: 1, participant: 'Lina', total: 450, speed: 10, country: 'Ukraine', percent: '98%',
		},
		{
			id: 2, participant: 'Vlad', total: 234, speed: 7, country: 'Canada', percent: '75%',
		},
		{
			id: 3, participant: 'Andrii', total: 308, speed: 6, country: 'China', percent: '85%',
		},
		{
			id: 4, participant: 'Dima', total: 307, speed: 9, country: 'France', percent: '85%',
		},
		{
			id: 5, participant: 'Dina', total: 286, speed: 8, country: 'Russia', percent: '80%',
		},
	],
	string: '',
};

const sortTotal = (state) => {
	const { data } = state;
	data.sort((a, b) => (a.total > b.total ? -1 : 1));
	const ourData = data;
	return {
		data: ourData,
		mainData: ourData,
	};
};

const sortSpeed = (state) => {
	const { data } = state;
	data.sort((a, b) => (a.speed > b.speed ? -1 : 1));
	const ourData = data;
	return {
		data: ourData,
		mainData: ourData,
	};
};

const searchName = (state, searchString) => {
	const { mainData } = state;
	if (searchString === '') {
		return {
			data: mainData,
			mainData,
		};
	}

	const newData = mainData.filter((row) => row.participant.toUpperCase().indexOf(searchString.toUpperCase()) === 0);
	return {
		data: newData,
		mainData,
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SORT_TOTAL:
			return sortTotal(state);
		case SORT_SPEED:
			return sortSpeed(state);
		case SEARCH_NAME:
			return searchName(state, action.payload);
		default:
			return state;
	}
};

export default reducer;
