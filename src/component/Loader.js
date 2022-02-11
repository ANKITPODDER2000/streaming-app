import React, { Component } from 'react';
import '../css/Loader.css';

class Loader extends Component {
	render() {
		return (
			<div className="loader">
				<div className="circle" />
				<div className="circle" />
				<div className="circle" />
				<div className="circle" />
				<div className="circle" />
			</div>
		);
	}
}
export default Loader;
