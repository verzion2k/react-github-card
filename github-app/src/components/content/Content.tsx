import React from 'react';
import './Content.scss';
import logo from './logo.png';

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
	return (
		<div className="main__content">
			<img src={logo} className="main__image" alt="logo" />
			<h1 className="main__title">verzion2k</h1>
			<div className="main__content--wrapper">
				<h2 className="main__content__title">Real name</h2>
				<h3 className="main__content__text">YYY</h3>
			</div>

			<div className="main__content--wrapper">
				<h2 className="main__content__title">Location</h2>
				<h3 className="main__content__text">YYY</h3>
			</div>

			<div className="main__content--wrapper">
				<h2 className="main__content__title">Number of public repos</h2>
				<h3 className="main__content__text">YYY</h3>
			</div>

			<div className="main__content--wrapper">
				<h2 className="main__content__title">Number of followers</h2>
				<h3 className="main__content__text">YYY</h3>
			</div>
		</div>
	);
};

export default Content;
