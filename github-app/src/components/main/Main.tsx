import React, { Component } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import Content from '../content/Content';
import './Main.scss';

export default class GithubCard extends Component {
	render() {
		return (
			<main className="main__container">
				<div className="main">
					<Input />
					<Button />
					<Content />
				</div>
			</main>
		);
	}
}
