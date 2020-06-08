import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './CategoryButton.css'

class CategoryButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            linkName: props.category.replace(/ /g, "-"),
            imgPath: "/images/icons/" + props.category + ".svg",
            linkStyle: { "textDecoration": "none" }
        }
    }

    render() {
        return (
            <Link to={this.props.sub ? `/subcategory/${this.state.linkName}` : `/category/${this.state.linkName}`} style={this.state.linkStyle} >

                <div className="category-button">
                    <img src={this.state.imgPath} alt={this.props.category} className="category-button__icon" />
                    <p className="category-button__title">{this.props.category}</p>
                </div>
            </Link>
        )
    }
}

export default CategoryButton
