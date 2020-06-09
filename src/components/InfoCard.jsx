import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './InfoCard.css'

class InfoCard extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            linkName: props.course["published_title"],
            linkStyle: { "textDecoration": "none" }
        }
    }

    render() {
        let course = this.props.course
        return (
            <a href={`https://www.udemy.com${course.url}`} target="_blank" style={this.state.linkStyle} >

                <div className="info-card">
                    <h1>{course.title}</h1>
                    <p>Rating: {course.rating.toFixed(2)} | # of Reviews: {course["num_reviews"]}</p>
                    <img src={course["image_240x135"]} alt={course["title"]} />
                    <h4>{course["headline"]}</h4>
                </div>
            </a>
        )
    }
}

export default InfoCard
