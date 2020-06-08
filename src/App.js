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
				console.log(result)
				this.setState({ categoryList: result });
				console.log(this.state.categoryList)
			}).catch(err => console.log(err))
	}
	render() {
		console.log(this.state.categoryList)
		return (
			<div className="body-wrapper">
				<div className="body-overlay">
					<header className="logo-header header">
						<img src="/images/course-logo-color.png" alt="course-correct-logo" className="header__logo" />
						<h3>Find your path</h3>
					</header>
					<CategoryBox categoryList={this.state.categoryList} sub={false} />
					<footer className="footer">
						<p>2020 CourseCorrect.</p>
					</footer>
				</div>
			</div>
		)
	}
}
