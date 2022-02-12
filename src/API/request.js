import axios from 'axios';
console.log(process.env);
const api_key = process.env.REACT_APP_API_KEY;

const getPopularMovieWeek = async () => {
	let applicationUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`;
	let request = await axios.get(applicationUrl);
	let movieDetails = request.data.results;
	return movieDetails;
};
const getPopularMovieDay = async () => {
	let applicationUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`;
	let request = await axios.get(applicationUrl);
	let movieDetails = request.data.results;
	return movieDetails;
};

const getPopularMovie = async () => {
	let applicationUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
	let request = await axios.get(applicationUrl);
	let popularMovie = request.data.results;
	return popularMovie;
};

const getTopRatedMovie = async () => {
	let applicationUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;
	let request = await axios.get(applicationUrl);
	let movieDetails = request.data.results;
	return movieDetails;
};

const getSimilarMovies = async (id) => {
	let applicationUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}`;
	let request = await axios.get(applicationUrl);
	let movieDetails = request.data.results;
	return movieDetails;
};

const getCastingDetails = async (id) => {
	let applicationUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`;
	let request = await axios.get(applicationUrl);
	let movieDetails = request.data.cast;
	return movieDetails;
};

const getMovieDetails = async (id) => {
	let applicationUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`;
	console.log(applicationUrl);
	let request = await axios.get(applicationUrl);
	let movieDetails = request.data;
	return movieDetails;
};

const getPersonDetails = async (id) => {
	let applicationUrl = `https://api.themoviedb.org/3/person/${id}?api_key=${api_key}`;
	console.log(applicationUrl);
	let request = await axios.get(applicationUrl);
	let personDetails = request.data;
	return personDetails;
};

const getMovieCredits = async (id) => {
	let applicationUrl = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${api_key}`;
	let request = await axios.get(applicationUrl);
	let movieDetails = request.data.cast;
	return movieDetails;
};

const getMovieVideos = async (id) => {
	let applicationUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`;
	let request = await axios.get(applicationUrl);
	let movieDetails = request.data.results;
	console.log(movieDetails);
	return movieDetails;
};

export {
	getPopularMovieWeek,
	getPopularMovieDay,
	getPopularMovie,
	getTopRatedMovie,
	getSimilarMovies,
	getCastingDetails,
	getMovieDetails,
	getPersonDetails,
	getMovieCredits,
	getMovieVideos
};
