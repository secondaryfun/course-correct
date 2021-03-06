import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './CategoryBox.css';
import TitleButton from './titleButton'
import UserCoursePage from './UserCoursePage'


export class CategoryBoxUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        this.props.updateUserCourses()
    }
    render() {
        let courseList = []
        this.props.courseList.length ? courseList = this.props.courseList : courseList = []

        return (
            <div>
                <Route
                    path="/user-courses/"
                    exact
                    render={() => {
                        return (
                            <div className="category-box-wrapper">
                                <h4 className="category-box__header">Select a course to view.</h4>
                                <section className="category-box__button-container">
                                    {courseList.map(course => {
                                        return <TitleButton title={course.title} route="user-courses" />
                                    })
                                    }
                                </section>
                            </div>
                        )
                    }}
                />
                <Route
                    path={`/user-courses/:course`}
                    exact
                    render={routerProps => {
                        let { course } = routerProps.match.params
                        let userSelection = courseList.find(item => {
                            let compareItem = item.title.replace(/ /g, "-")
                            return compareItem === course
                        })
                        return (
                            <div className="category-box-wrapper" >
                                <h4 className="search-results__header">Your recommendations are ready!</h4>
                                <UserCoursePage course={userSelection} updateUserCourses={this.props.updateUserCourses} />

                            </div>
                        )
                    }}
                />
            </div >
        )
    }
}

export default CategoryBoxUser
