import React from 'react'
import './InfoPage.css'


function InfoPage() {
    return (
        <div className="info-page">
            <h4 className="category-box__header">What do you want to learn about?</h4>
            {/* <section className="category-box__button-container">
                {categoryList.map(cat => {
                    return <CategoryButton category={cat} />
                })}
            </section> */}
            <div className="progress-node--1"></div>
        </div>
    )
}

export default InfoPage
