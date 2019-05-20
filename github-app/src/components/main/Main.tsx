import React, { Component } from 'react';
import './Main.scss';

export default class GithubCard extends Component {
	render() {
		return (
			<main className="main">
				<Input />
				<Button />
				<Content />
			</main>
		);
	}
}
