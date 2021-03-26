import React from 'react';
import './Search.css';

function Search({ searchFunc, string }) {
	const onSearchChange = (e) => {
		const str = e.target.value;
		string = str;
		searchFunc(string);
	};
	return (
		<div className="search" onChange={onSearchChange}>
			<form action="" method="post" className="search">
				<input type="search" name="" placeholder="поиск" className="input" />
				<span className="submit"> </span>
			</form>
		</div>
	);
}

export default Search;
