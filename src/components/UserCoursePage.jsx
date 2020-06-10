import React, { Component } from 'react'

import './SearchResultsPage.css';
import './UserCoursePage.css';
import FormEdit from './FormEdit'
import InfoCard from './InfoCard'


export class UserCoursePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editView: false,
        }
    }
    toggleEdit = e => {
        this.setState({ editView: !this.state.editview })
        console.log(this.state.editView)
    }

    render() {
        let course = {}
        this.props.course ? course = this.props.course : course = {}

        return (
            <div className="info-card-wrapper">
                <header className="info-card__header">
                    <span className={`info-card__category hover ${this.state.editView ? "inactive" : ""}`} onClick={this.toggleEdit} >View</span>
                    <span className={`info-card__category hover ${!this.state.editView ? "inactive" : ""}`} onClick={this.toggleEdit} >Edit</span>
                </header>
                <section className="info-card__container">
                    <div className={!this.state.editView ? "" : "hidden"}>
                        <InfoCard course={course} />
                    </div>
                    <div className={this.state.editView ? "" : "hidden"}>
                        <FormEdit course={course} />
                    </div>
                </section>
            </div>
        )
    }
}

export default UserCoursePage
