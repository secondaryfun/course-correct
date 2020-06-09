import React, { Component } from 'react'
import CategoryBox from './components/CategoryBox';
import './App.css';


export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			categoryList: { categories: [] },

		}
	}
	componentDidMount() {
		this.getCategories()
	}
	getCategories() {
		const url = "https://rocky-refuge-49252.herokuapp.com/category"

		fetch(url)
			.then(res => res.json())
			.then(result => {
				this.setState({ categoryList: result });
			}).catch(err => console.log(err))
	}
	render() {
		return (
			<div>
				<div className="body-wrapper">
					<div className="body-overlay">
						<header className="logo-header header">
							<img src="/images/course-logo-color.png" alt="course-correct-logo" className="header__logo" />
							<h3>Find your path</h3>
						</header>
						<CategoryBox categoryList={this.state.categoryList} sub={false} />
					</div>
				</div>
				<footer className="footer">
					<p>2020 CourseCorrect.</p>
				</footer>
			</div>
		)
	}
}
