import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import CategoryBox from './components/CategoryBox';
import Form from './components/Form'
import './App.css';


export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			categoryList: { categories: [] },
			linkStyle: { "textDecoration": "none", "color": "white" }
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
							<div className="logo-link">
								<Link to={"/courses/"} style={this.state.linkStyle} >
									<img src="/images/course-logo-color.png" alt="course-correct-logo" className="header__logo" />
								</Link>
							</div>
							<Link to={"/courses/"} style={this.state.linkStyle} >
								<h3 className="nav-link" >Find your path</h3>
							</Link>
							<Link to={"/content-creators/"} style={this.state.linkStyle} >
								<h3 className="nav-link" >Content Creators</h3>
							</Link>
						</header>
						<CategoryBox categoryList={this.state.categoryList} />
						<Form />
					</div>
				</div>
				<footer className="footer">
					<p>2020 CourseCorrect.</p>
				</footer>
			</div>
		)
	}
}
