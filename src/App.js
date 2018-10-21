import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chats from './Chats'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/


class App extends Component {

	usernames = [
		'Amy',
		'John'
	];

	render() {
		return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">ReactND - Coding Practice</h1>
			</header>

			<Chats usernames={this.usernames} />

		</div>
		);
	}

}

export default App;
