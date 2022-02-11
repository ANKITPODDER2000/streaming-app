import React, { Component } from 'react';
import { getMovieCredits, getPersonDetails } from '../API/request';
import Person from './Person';
import Loader from './Loader';
import MovieRow from './MovieRow';

export default class PersonDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
			movies: null
		};
	}
	async componentDidMount() {
		let userReq = await getPersonDetails(this.props.match.params.userid);
		let movieReq = await getMovieCredits(this.props.match.params.userid);
		this.setState({ user: userReq, movies: movieReq });
	}
	render() {
		let isLoaded = this.state.user !== null && this.state.movies !== null;
		let heading = isLoaded ? `${this.state.user.gender === 2 ? 'His' : 'Her'} Movies` : 'Movies';
		let comp = (
			<div>
				<Person person={this.state.user} />
				<MovieRow key={2} isPoster={true} title={heading} movie={this.state.movies} />
				<div style={{ width: '100%', height: '100px' }} />
			</div>
		);
		return <div>{isLoaded ? comp : <Loader />}</div>;
	}
}
