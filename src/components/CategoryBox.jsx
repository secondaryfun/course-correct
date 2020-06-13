import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './CategoryBox.css';
import categories from '../data/courseList.json'
import CategoryButton from './CategoryButton'
import TitleButton from './titleButton'
import SearchResultsPage from './SearchResultsPage'

const categoryList = categories.map(item => { return { title: item } })

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
        this.props.categoryList.length ? catList = this.props.categoryList : catList = categoryList

        return (
            <div>
                <Route
                    path="/courses/"
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
                        let { queryItem } = routerProps.match.params
                        let category = catList.find(item => {
                            let linkName = item.title.replace(/ /g, "-")

                            return linkName === queryItem
                        })
                        if (!category) category = { "sub-categories": [] }
                        return (

                            <div className="category-box-wrapper">
                                <h4 className="category-box__header">Pick a subcategory to refine your selection.</h4>
                                <section className="category-box__button-container">
                                    {category["sub-categories"].map(item => {
                                        return <TitleButton title={item} route="sub-category" />
                                    })
                                    }
                                </section>
                                <div className="progress-node progress-node--2"></div>
                            </div>
                        )
                    }}
                />
                <Route
                    path={`/sub-category/:category`}
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
