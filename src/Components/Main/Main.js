import React from 'react';
import './Main.css';
import { connect } from 'react-redux';
import TableResult from '../Table';
import Search from '../Search';
import Image from '../Image';

import CustomizedButtons from '../Button';
import {
	sortSpeedAction, sortTotalAction, searchNameAction,
} from '../../action/index';

function Main({
	state, sortTotal, sortSpeed, searchName,
}) {
	const { data, string } = state;

	return (
		<div className="main">
			<Search str={string}searchFunc={(searchStr) => searchName(searchStr)}/>
			<div className="imgTable">
				< Image imageSrc="https://st.depositphotos.com/2109979/3590/i/600/depositphotos_35905527-stock-photo-biathlon-3d-man-fires-a.jpg"/>
				<TableResult data={data}/>
				< Image imageSrc="https://st.depositphotos.com/2109979/3590/i/600/depositphotos_35905525-stock-photo-biathlon-3d-man-fires-a.jpg"/>
			</div>
			<div className="buttons">
				<CustomizedButtons sortFunc={sortTotal}
					data={data} value='true' text="Sort Total"/>
				<CustomizedButtons sortFunc={sortSpeed}
					data={data} value='false' text="Sort Speed"/>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	state,
});
const mapDispatchToProps = (dispatch) => ({
	searchName: (string) => dispatch(searchNameAction(string)),
	sortSpeed: () => dispatch(sortSpeedAction()),
	sortTotal: () => dispatch(sortTotalAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
