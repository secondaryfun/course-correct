import React from 'react';
import Advisor from './Advisor';
import './App.css';

function App() {
	return (
		<div className="body-wrapper">
			<div className="body-overlay">
				<header className="logo-header">
					<img src="/images/course-logo-color.png" className="header__logo" />
					<h1>Course Correct:</h1>
					<p>Find your path</p>
				</header>
				<Advisor />
				<footer className="footer">&copy 2020 CourseCorrect.</footer>
			</div>
		</div>
	);
}

export default App;
