import React, { Component } from 'react';
import { getSimilarMovies, getCastingDetails, getMovieDetails, getMovieVideos } from '../API/request';
import Banner from './Banner';
import MovieRow from '../component/MovieRow';
import Loader from './Loader';
import Videos from './Videos';

class MovieDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: this.props.location?.data || null,
			similarMovie: null,
			castDetails: null,
			movieVideo: null
		};
	}
	async componentDidMount() {
		if (this.state.movie === null) {
			let movieId = this.props.match.params.movieid;
			let movieReq = await getMovieDetails(movieId);
			this.setState({
				movie: movieReq
			});
		}
		if (this.state.movie != null) {
			let castDetailsReq = await getCastingDetails(this.props.match.params.movieid);
			let newSuggestMovieReq = await getSimilarMovies(this.props.match.params.movieid);
			let movieVideoReq = await getMovieVideos(this.props.match.params.movieid);
			this.setState({
				similarMovie: newSuggestMovieReq,
				castDetails: castDetailsReq,
				movieVideo: movieVideoReq
			});
		}
	}
	async componentDidUpdate(prevProps, prevState) {
		// if(prevProps.location.data === undefined) {
		// 	console.log(prevState);
		// 	return;
		// }
		console.log('called');
		if (prevProps.location.data === undefined) {
			prevProps.location.data = {};
			prevProps.location.data.id = '';
		}
		if (this.props.location.data && prevProps.location.data.id !== this.props.location.data.id) {
			this.setState({
				movie: null,
				similarMovie: null,
				castDetails: null
			});
			let castDetailsReq = await getCastingDetails(this.props.match.params.movieid);
			let newSuggestMovieReq = await getSimilarMovies(this.props.match.params.movieid);
			let movieVideoReq = await getMovieVideos(this.props.match.params.movieid);
			this.setState({
				similarMovie: newSuggestMovieReq,
				castDetails: castDetailsReq,
				movieVideo: movieVideoReq,
				movie: this.props.location.data
			});
		}
	}
	render() {
		let styleDiv = {
			background: 'black',
			color: '#fff'
		};
		let isLoaded = this.state.castDetails != null && this.state.similarMovie != null && this.state.movie !== null && this.state.movieVideo !== null;
		return (
			<div>
				{isLoaded === true ? (
					<div style={styleDiv}>
						<Banner movie={this.state.movie} />
						<MovieRow
							key={1}
							title="Movie Casting"
							isPoster={true}
							casting={true}
							movie={this.state.castDetails}
						/>
						{this.state.movieVideo.length > 0 ? <Videos movieVideo={this.state.movieVideo} /> : null}
						<MovieRow key={2} title="Similar movie" movie={this.state.similarMovie} />
						<div style={{ width: '100%', height: '100px' }} />
					</div>
				) : (
					<Loader />
				)}
			</div>
		);
	}
}

export default MovieDetails;
