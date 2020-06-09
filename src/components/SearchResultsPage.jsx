import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './SearchResultsPage.css';
import InfoCard from './InfoCard'


export class SearchResultsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courseList: []
        }
    }
    componentDidMount() {
        this.getCourses()
    }

    getCourses() {
        console.log(this.props)
        const url = "https://rocky-refuge-49252.herokuapp.com/courses/sub-category/" + this.props.category.replace(/-/g, " ")

        fetch(url)
            .then(res => res.json())
            .then(results => {
                console.log(results)
                this.setState({ courseList: results });
            }).catch(err => console.log(err))
    };
    render() {
        let courses = []
        if (this.state.courseList.length) courses = this.state.courseList
        console.log(courses)
        return (
            <div className="info-card-wrapper">
                <header className="info-card__header">
                    <span className="info-card__category" >{this.props.category}</span>
                </header>

                <section className="info-card__container">
                    {courses.map(course => {
                        return <InfoCard course={course} />
                    })
                    }
                </section>
            </div>
        )
    }
}

export default SearchResultsPage
