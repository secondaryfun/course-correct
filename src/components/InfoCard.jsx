import React, { Component } from 'react'
import './InfoCard.css'

class InfoCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            linkName: props.course["published_title"],
            linkStyle: { "textDecoration": "none" }
        }
    }

    render() {
        let course = this.props.course
        return (

            <div className="info-card">
                <h1>{course.title}</h1>
                <p>{course["primary_category"]}<p></p>{course["primary_subcategory"]}</p>
                <p>Rating: {course.rating ? course.rating.toFixed(2) : null} | # of Reviews: {course["num_reviews"]}</p>
                <img src={course["image_240x135"]} alt={course["title"]} className="info-card__img" />
                <h4>{course["headline"]}</h4>
                {
                    !this.props.user ? (
                        <a href={`https://www.udemy.com${course.url}`} target="_blank" style={this.state.linkStyle} rel="noopener noreferrer" >
                            link to course
                        </a>
                    ) : null
                }
            </div>
        )
    }
}

export default InfoCard
