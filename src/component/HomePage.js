import React, { Component } from 'react';
import { getPopularMovieWeek, getPopularMovieDay, getPopularMovie, getTopRatedMovie } from '../API/request';
import MovieRow from '../component/MovieRow';
import Banner from '../component/Banner';
import '../css/HomePage.css';
import Loader from './Loader';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trendingWeek: null,
			trendingDay: null,
			popular: null,
			topRated: null,
			banner: null
		};
	}
	componentDidMount() {
		getPopularMovieWeek().then((data) => this.setState({ trendingWeek: data }));

		getPopularMovieDay().then((data) => this.setState({ trendingDay: data })).then(() =>
			this.setState({
				banner: this.state.trendingDay[Math.floor(this.state.trendingDay.length * Math.random())]
			})
		);
		getPopularMovie().then((data) => this.setState({ popular: data }));
		getTopRatedMovie().then((data) => this.setState({ topRated: data }));
	}
	render() {
		let isLoaded =
			this.state.banner != null &&
			this.state.trendingDay != null &&
			this.state.trendingWeek != null &&
			this.state.popular != null &&
			this.state.topRated != null;
		let allApiContent = (
			<div>
				<Banner movie={this.state.banner} />
				<MovieRow key={2} title="Trending of this Day" movie={this.state.trendingDay} isPoster={true} />
				<MovieRow key={1} title="Trending of this Week" movie={this.state.trendingWeek} />
				<MovieRow key={3} title="Popular movies" movie={this.state.popular} />
				<MovieRow key={4} title="Top rated movies" movie={this.state.topRated} />
				<div style={{ width: '100%', height: '100px' }} />
			</div>
		);

		return <div className="mainContainer">{isLoaded ? allApiContent : <Loader />}</div>;
	}
}

export default HomePage;
