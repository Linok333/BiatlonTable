import {
	SORT_TOTAL,SORT_SPEED,SEARCH_NAME,
} from '../action/actionTypes';
console.log('fdsss')
const initialState = {
	data: [
		{
			id: 1,participant: 'Lina',total: 450,speed: 10,country: 'Ukraine',percent: '98%',
		},
		{
			id: 2,participant: 'Vlad',total: 234,speed: 7,country: 'Canada',percent: '75%',
		},
		{
			id: 3,participant: 'Andrii',total: 308,speed: 6,country: 'China',percent: '85%',
		},
		{
			id: 4,participant: 'Dima',total: 307,speed: 9,country: 'France',percent: '85%',
		},
		{
			id: 5,participant: 'Dina',total: 286,speed: 8,country: 'Russia',percent: '80%',
		},
	],
	mainData: [
		{
			id: 1,participant: 'Lina',total: 450,speed: 10,country: 'Ukraine',percent: '98%',
		},
		{
			id: 2,participant: 'Vlad',total: 234,speed: 7,country: 'Canada',percent: '75%',
		},
		{
			id: 3,participant: 'Andrii',total: 308,speed: 6,country: 'China',percent: '85%',
		},
		{
			id: 4,participant: 'Dima',total: 307,speed: 9,country: 'France',percent: '85%',
		},
		{
			id: 5,participant: 'Dina',total: 286,speed: 8,country: 'Russia',percent: '80%',
		},
	],
	string: '',
	total: false,
	speed: false,
};

const sortAll = (data,value,current) => {
	if (value) {
		data.sort((a,b) => (a[current] > b[current] ? 1 : -1));
	} else {
		data.sort((a,b) => (a[current] > b[current] ? -1 : 1));
	}
	const ourData = data;
	return ourData;
};

const sortTotal = (state) => {
	const { total } = state;
	const { data } = state;
	const ourData = sortAll(data,total,'total');
	return {
		...state,
		total: !total,
		data: ourData,
		mainData: ourData,
	};
};

const sortSpeed = (state) => {
	const { speed } = state;
	const { data } = state;
	const ourData = sortAll(data,speed,'speed');
	return {
		...state,
		speed: !speed,
		data: ourData,
		mainData: ourData,
	};
};

const searchName = (state,searchString) => {
	const { mainData } = state;
	if (searchString === '') {
		return {
			data: mainData,
			mainData,
		};
	}

	const newData = mainData.filter((row) => row.participant.toUpperCase().indexOf(searchString.toUpperCase()) === 0);
	return {
		...state,
		data: newData,
		mainData,
	};
};

const reducer = (state = initialState,action) => {
	switch (action.type) {
		case SORT_TOTAL:
			return sortTotal(state);
		case SORT_SPEED:
			return sortSpeed(state);
		case SEARCH_NAME:
			return searchName(state,action.payload);
		default:
			return state;
	}
};

export default reducer;
