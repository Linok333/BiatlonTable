import React from 'react';
import './image.css';

function Image({ imageSrc }) {
	return (
		<div className="image">
			< img src={imageSrc}
				width="350px" height="350px"/>
		</div>
	);
}

export default Image;
