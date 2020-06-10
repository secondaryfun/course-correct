import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './titleButton.css'

class TitleButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            linkName: props.title.replace(/ /g, "-"),
            linkStyle: { "textDecoration": "none" }
        }
    }

    render() {
        console.log(this.state.linkName)
        return (
            <Link to={`/${this.props.route}/${this.state.linkName}`} style={this.state.linkStyle} >

                <div className="title-button">
                    <p className="title-button__title">{this.props.title}</p>
                </div>
            </Link>
        )
    }
}

export default TitleButton
