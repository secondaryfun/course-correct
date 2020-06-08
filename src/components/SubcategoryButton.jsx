import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './SubcategoryButton.css'

class SubcategoryButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            linkName: props.category.replace(/ /g, "-"),
            linkStyle: { "textDecoration": "none" }
        }
    }

    render() {
        return (
            <Link to={`/subcategory/${this.state.linkName}`} style={this.state.linkStyle} >

                <div className="sub-category-button">
                    <p className="sub-category-button__title">{this.props.category}</p>
                </div>
            </Link>
        )
    }
}

export default SubcategoryButton
