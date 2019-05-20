import React, { Component } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import Content from '../content/Content';
import './Main.scss';

interface GithubCardProps {}
interface GithubCardState {
	avatar: string;
	username: string;
	realName: string;
	location: string;
	url: string;
	notFound: string;
	repos: number;
	followers: number;
}

export default class GithubCard extends Component<GithubCardProps, GithubCardState> {
	constructor(props: GithubCardProps) {
		super(props);
		this.state = {
			avatar: '',
			username: 'verzion2k',
			realName: '',
			location: '',
			url: '',
			notFound: '',
			repos: 0,
			followers: 0
		};
	}

	fetchApi = (url: string): any => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				// update state with API data
				this.setState({
					username: data.login,
					realName: data.name,
					avatar: data.avatar_url,
					location: data.location,
					repos: data.public_repos,
					followers: data.followers,
					url: data.html_url,
					notFound: data.message
				});
			})
			.catch((err) => console.log('oh no!'));
	};

	fetchUser = (username: string): any => {
		let url = `https://api.github.com/users/${username}`;
		this.fetchApi(url);
	};

	componentDidMount(): any {
		let url = `https://api.github.com/users/${this.state.username}`;
		this.fetchApi(url);
	}

	render() {
		const { avatar, username, realName, location, repos, followers } = this.state;

		return (
			<main className="main__container">
				<div className="main">
					<Input fetchUser={this.fetchUser} />
					<Button />
					<Content
						avatar={avatar}
						username={username}
						realName={realName}
						location={location}
						repos={repos}
						followers={followers}
					/>
				</div>
			</main>
		);
	}
}
