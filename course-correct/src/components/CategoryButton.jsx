import React, { Component } from 'react'
import './CategoryButton.css'

class CategoryButton extends Component {
    constructor(props) {
        super(props)
        let imgPath = "/images/icons/" + props.category + ".svg"
        console.log(imgPath)

        this.state = {
            imgPath: "/images/icons/" + props.category + ".svg"
        }
    }

    render() {
        return (
            <div
                className="category-button"
                onMouseEnter={e => {
                    e.target.classList.add("hover")
                }}
                onMouseLeave={e => {
                    e.target.classList.remove("hover")
                }}
            >
                <img src={this.state.imgPath} alt={this.props.category} className="category-button__icon" />
                <p className="category-button__title">{this.props.category}</p>
            </div>
        )
    }
}

export default CategoryButton
