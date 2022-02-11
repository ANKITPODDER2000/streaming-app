import React, { Component } from 'react';
import '../css/MovieRow.css';
import MoviePoster from './MoviePoster';

class MovieRow extends Component {
	render() {
		return (
			<div className="movie-row">
				<h1>{this.props.title}</h1>
				<div className={`movie-list ${this.props.isPoster && 'imagePoster'}`}>
					{this.props.movie.map((movie) => (
						<MoviePoster
							key={movie.title}
							movie={movie}
							isPoster={this.props.isPoster}
							casting={this.props.casting}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default MovieRow;
