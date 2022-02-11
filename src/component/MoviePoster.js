import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MoviePoster extends Component {
	render() {
		let links = (
			<Link
				to={{
					pathname:
						this.props.casting === true
							? `/person-details/${this.props.movie.id}`
							: `/movie-details/${this.props.movie.id}`,
					data: this.props.movie
				}}
			/>
		);
		return (
			<div className={`imageContainer ${this.props.isPoster && 'imagePoster'}`} key={this.props.movie.id}>
				{links}
				<img
					src={
						this.props.casting ? (
							`https://image.tmdb.org/t/p/original${this.props.movie.profile_path}`
						) : this.props.isPoster ? (
							`https://image.tmdb.org/t/p/original${this.props.movie.poster_path}`
						) : (
							`https://image.tmdb.org/t/p/original${this.props.movie.backdrop_path}`
						)
					}
					alt={this.props.movie.original_title}
				/>

				{/* <section className="details">
					<h3>{this.props.movie.title}</h3>
					<p className="release-date">{this.props.movie.release_date}</p>
					<p className="description">{this.props.movie.overview.substring(0, 40)}...</p>
					<a href="/">Watch Now</a>
				</section> */}
			</div>
		);
	}
}

export default MoviePoster;
