import React, { Component } from 'react';
import '../css/Banner.css';

class Banner extends Component {
	render() {
		return (
			<header
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/original${this.props.movie
						.backdrop_path})`
				}}
			>
                <div className='overlay'></div>
				<div className="content">
                    <h1>{this.props.movie?.title ||  this.props.movie?.original_title || "Movie Title .."}</h1>
                    <p>{this.props.movie.overview}</p>
                    <div className="btn-content">
                        <a href='/'>Watch Later</a>
                        <a href='/'>Watch Now</a>
                    </div>
                </div>
			</header>
		);
	}
}

export default Banner;
