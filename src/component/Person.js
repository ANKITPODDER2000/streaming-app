import React, { Component } from 'react';
import '../css/Person.css';

export default class Person extends Component {
	render() {
		let person = this.props.person;
		return (
			<div className="container">
				<div className="inner-container">
					<img src={`https://image.tmdb.org/t/p/original${person.profile_path}`} />
					<div className="details">
						<h1>{person.name}</h1>
						<p>{person.biography}</p>
						{/* {person.also_known_as.length > 0 ? <p>Know As</p> : null}
						<ul>{person.also_known_as.map((name) => <li key={name}>{name}</li>)}</ul> */}
					</div>
				</div>
			</div>
		);
	}
}
