import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './SearchResultsPage.css';
import InfoCard from './InfoCard'


export class SearchResultsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courseList: { courses: [] },
        }
    }
    componentDidMount() {
        this.getCourses()
    }
    getCourses() {
        const url = "https://rocky-refuge-49252.herokuapp.com/courses/sub-category/" + this.props.category.replace(/-/g, " ")

        fetch(url)
            .then(res => res.json())
            .then(results => {
                console.log(results)
                this.setState({ courseList: results });
                console.log(this.state.courseList)
            }).catch(err => console.log(err))
    }

    render() {
        let courses = []
        if (this.state.courseList.length) courses = this.state.courseList
        console.log(courses)
        return (
            <div>
                <Route
                    path="/"
                    exact
                    render={() => {
                        return (
                            <div className="info-card-wrapper">
                                <h4 className="info-card__header">Your recommendations are ready!</h4>
                                <section className="info-card__button-container">
                                    {courses.map(course => {
                                        return <InfoCard course={course} />
                                    })
                                    }
                                </section>
                            </div>
                        )
                    }}
                />
                {/* <Route
                    path={`/category/:queryItem`}
                    exact
                    render={routerProps => {
                        console.log(courses)
                        let { queryItem } = routerProps.match.params
                        let category = courses.find(item => {
                            let linkName = item.title.replace(/ /g, "-")
                            console.log(`list item: ${linkName} | queryItem: ${queryItem}`)

                            return linkName === queryItem
                        })
                        if (!category) category = { "sub-categories": [] }
                        return (

                            <div className="info-card-wrapper">
                                <h4 className="info-card__header">Pick a subcategory to refine your selection.</h4>
                                <section className="info-card__button-container">
                                    {category["sub-categories"].map(item => {
                                        return <SubInfoCard category={item} />
                                    })
                                    }
                                </section>
                                <div className="progress-node progress-node--2"></div>
                            </div>
                        )
                    }}
                />
                <Route
                    path={`/subcategory/:subcategory`}
                    exact
                    render={routerProps => {
                        return <SearchResultsPage category={subcategory} />
                    }}
                /> */}
            </div >
        )
    }
}

export default SearchResultsPage
