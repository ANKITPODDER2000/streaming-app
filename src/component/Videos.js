import React, { Component } from 'react';
import YouTube from 'react-youtube';
import '../css/Videos.css';

class Videos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videoLink: this.props.movieVideo[0].key
		};
		this.changeVideo = this.changeVideo.bind(this);
	}
	changeVideo(e) {
		this.setState({
			videoLink: e.target.value
		});
	}
	render() {
		let opt = {
			width: '100%',
			playerVars: {
				autoplay: 0
			}
		};
		return (
			<div className="video-container">
				<h1>Related Videos</h1>
				<div className="select">
					<select value={this.state.videoLink} onChange={this.changeVideo}>
						{this.props.movieVideo.map((movie) => (
							<option key={movie.key} value={movie.key}>
								{movie.name.substring(0, 30)}...
							</option>
						))}
					</select>
				</div>
				<div className="video">
					<YouTube videoId={this.state.videoLink} opts={opt} />
				</div>
			</div>
		);
	}
}

export default Videos;
