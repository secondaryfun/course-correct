import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CategoryBox from './components/CategoryBox';
import CategoryBoxUser from './components/CategoryBoxUser';
import Form from './components/Form'
import './App.css';

console.log(process.env.NODE_ENV)

export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			categoryList: { categories: [] },
			userCourseList: { courses: [] },
			linkStyle: { "textDecoration": "none", "color": "white" }
		}
	}
	componentDidMount() {
		this.getCategories()
		this.updateUserCourses()
	}
	getCategories = () => {
		const url = "https://udemy-courses-api.herokuapp.com/category"

		fetch(url)
			.then(res => res.json())
			.then(result => {
				this.setState({ categoryList: result });
			}).catch(err => console.log(err))
	}
	updateUserCourses = () => {
		const url = "https://udemy-courses-api.herokuapp.com/courses/category/user"

		fetch(url)
			.then(res => res.json())
			.then(result => {
				console.log('Updated user courses.')
				this.setState({ userCourseList: result });
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
							<Link to={"/add-course/"} style={this.state.linkStyle} >
								<h3 className="nav-link" >Add a Course</h3>
							</Link>
							<Link to={"/user-courses/"} style={this.state.linkStyle} >
								<h3 className="nav-link" >View Added Courses</h3>
							</Link>

						</header>
						<CategoryBox categoryList={this.state.categoryList} />
						<CategoryBoxUser courseList={this.state.userCourseList} updateUserCourses={this.updateUserCourses} />
						<Form categoryList={this.state.categoryList} updateUserCourses={this.updateUserCourses} />
					</div>
				</div>
				<footer className="footer">
					<p>2020 CourseCorrect.</p>
				</footer>
			</div>
		)
	}
}
