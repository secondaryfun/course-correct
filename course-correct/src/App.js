import React from 'react';
import Advisor from './Advisor';
import './App.css';

function App() {
	return (
		<div className="body-wrapper">
			<div className="body-overlay">
				<header className="logo-header header">
					<img src="/images/course-logo-color.png" className="header__logo" />
					<h3>Find your path</h3>
				</header>
				<Advisor />
				<footer className="footer">
					<p>2020 CourseCorrect.</p>
				</footer>
			</div>
		</div>
	);
}

export default App;
