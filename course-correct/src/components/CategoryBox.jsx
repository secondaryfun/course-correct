import React, { Component } from 'react'
import './CategoryBox.css';
import categoryList from '../data/courses.json'
import CategoryButton from './CategoryButton'
console.log(categoryList)

class CategoryBox extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="category-box-wrapper">
                <h4 className="category-box__header">What do you want to learn about?</h4>
                {/* <p>Choose as many subjects as you like.</p> */}
                <section className="category-box__button-container">
                    {categoryList.map(cat => {
                        return <CategoryButton category={cat} />
                    })}
                </section>
                {/* <div className="button--green">LET'S GET MORE SPECIFIC</div> */}
                <div className="progress-node--1"></div>
            </div>
        )
    }
}


export default CategoryBox
