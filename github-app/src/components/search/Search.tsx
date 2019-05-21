import React, { Component, FormEvent } from 'react';
import './Search.scss';

interface SearchProps {
	fetchUser: any;
}

export default class Search extends Component<SearchProps> {
	private myRef = React.createRef<HTMLInputElement>();

	handleClick = (e: FormEvent<Element>) => {
		e.preventDefault();
		let username = this.myRef.current;
		if (username) {
			this.props.fetchUser(username.value);
			return (username.value = '');
		}
	};

	render() {
		return (
			<form className="main__searchbox" onSubmit={this.handleClick}>
				<input
					type="text"
					ref={this.myRef}
					name="username"
					className="main__input"
					placeholder="type username..."
				/>
				<input type="submit" name="search" className="main__button" value="Search GitHub User" />
			</form>
		);
	}
}
