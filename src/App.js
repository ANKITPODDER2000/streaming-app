import React, { Component } from 'react';
import HomePage from './component/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDetails from './component/MovieDetails';
import PersonDetails from './component/PersonDetails';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/movie-details/:movieid" exact component={MovieDetails} />
					<Route path="/person-details/:userid" exact component={PersonDetails} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
