import React from 'react'
import { Route } from 'react-router-dom'

import './CategoryBox.css';
import categoryList from '../data/courseList.json'
import CategoryButton from './CategoryButton'
import InfoPage from './InfoPage'
console.log(categoryList)

function CategoryBox() {
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
                                {categoryList.map(cat => {
                                    return <CategoryButton category={cat} />
                                })}
                            </section>
                            <div className="progress-node--1"></div>
                        </div>
                    )
                }}
            />
            <Route
                path={`/category/:category`}
                exact
                render={routerProps => {

                    let { category } = routerProps.match.params
                    let queryItem = categoryList.find(item => {
                        let linkName = item.replace(/ /g, "-")
                        return linkName === category
                    })
                    return <InfoPage category={queryItem} />
                }}
            />
        </div >
    )

}


export default CategoryBox
