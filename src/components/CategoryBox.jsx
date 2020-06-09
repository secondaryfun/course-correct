import React, { Component } from 'react'
import { Route, useLocation } from 'react-router-dom'

import './CategoryBox.css';
import categoryList from '../data/courseList.json'
import CategoryButton from './CategoryButton'
import SubcategoryButton from './SubcategoryButton'
import SearchResultsPage from './SearchResultsPage'
// console.log(categoryList)


export class CategoryBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courseList: { courses: [] },
            userPick: "",
        }
    }

    render() {
        let catList = []
        if (this.props.categoryList.length) catList = this.props.categoryList
        return (
            <div>
                <Route
                    path="/"
                    exact
                    render={() => {
                        return (
                            <div className="category-box-wrapper">
                                <h4 className="category-box__header">What do you want to learn about?</h4>
                                <section className="category-box__button-container">
                                    {catList.map(cat => {
                                        return <CategoryButton category={cat.title} />
                                    })
                                    }
                                </section>
                                <div className="progress-node"></div>
                            </div>
                        )
                    }}
                />
                <Route
                    path={`/category/:queryItem`}
                    exact
                    render={routerProps => {
                        console.log(catList)
                        let { queryItem } = routerProps.match.params
                        let category = catList.find(item => {
                            let linkName = item.title.replace(/ /g, "-")
                            console.log(`list item: ${linkName} | queryItem: ${queryItem}`)

                            return linkName === queryItem
                        })
                        if (!category) category = { "sub-categories": [] }
                        return (

                            <div className="category-box-wrapper">
                                <h4 className="category-box__header">Pick a subcategory to refine your selection.</h4>
                                <section className="category-box__button-container">
                                    {category["sub-categories"].map(item => {
                                        return <SubcategoryButton category={item} />
                                    })
                                    }
                                </section>
                                <div className="progress-node progress-node--2"></div>
                            </div>
                        )
                    }}
                />
                <Route
                    path={`/subcategory/:category`}
                    exact
                    render={routerProps => {
                        let { category } = routerProps.match.params
                        return (
                            <div className="category-box-wrapper" >
                                <div className="progress-node progress-node--3"></div>
                                <h4 className="search-results__header">Your recommendations are ready!</h4>
                                <SearchResultsPage category={category} />

                            </div>
                        )
                    }}
                />
            </div >
        )
    }
}

export default CategoryBox
