import React from 'react';
import './Content.scss';

interface ContentProps {
	avatar: string;
	username: string;
	realName: string;
	location: string;
	url: string;
	notFound: string;
	repos: number;
	followers: number;
}

const Content = (props: ContentProps) => {
	const { avatar, username, realName, location, url, notFound, repos, followers } = props;

	return notFound ? (
		<div className="main__error">
			<h1 className="main__title">{notFound}</h1>
		</div>
	) : (
		<div className="main__content">
			<a href={url} className="main__avatar" target="_blank" title="avatar" rel="noopener noreferrer">
				<img src={avatar} className="main__image" alt="logo" />
			</a>
			<a href={url} target="_blank" title={username} rel="noopener noreferrer">
				<h1 className="main__title">{username}</h1>
			</a>
			<div className="main__content--wrapper">
				<h2 className="main__content__title">Real name</h2>
				<h3 className="main__content__text">{realName}</h3>
			</div>

			<div className="main__content--wrapper">
				<h2 className="main__content__title">Location</h2>
				<h3 className="main__content__text">{location}</h3>
			</div>

			<div className="main__content--wrapper">
				<h2 className="main__content__title">Number of public repos</h2>
				<h3 className="main__content__text">{repos}</h3>
			</div>

			<div className="main__content--wrapper">
				<h2 className="main__content__title">Number of followers</h2>
				<h3 className="main__content__text">{followers}</h3>
			</div>
		</div>
	);
};

export default Content;
