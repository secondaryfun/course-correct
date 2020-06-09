import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Form.css';
import CategoryButton from './CategoryButton'

const inputParsers = {
    date(input) {
        const [month, day, year] = input.split('/');
        return `${year}-${month}-${day}`;
    },
    uppercase(input) {
        return input.toUpperCase();
    },
    number(input) {
        return parseFloat(input);
    },
    require(input) {
        return input ? input : false
    }
};

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courseList: { courses: [] },
            userPick: "",
            inputError: false,
            formSubmitted: false,
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const form = e.target
        let parsedValue

        if (!e.target.checkValidity()) {
            return;
        }


        // for (let name of data.keys()) {
        //     const input = form.elements[name]
        //     const parserName = input.dataset.parse

        //     if (parserName) {
        //         const parser = inputParsers[parserName]
        //         parsedValue = parser(data.get(name))
        //     }

        //     if (!parsedValue) {
        //         this.setState({ inputError: true })
        //         return
        //     }
        // }

        const url = "https://rocky-refuge-49252.herokuapp.com/courses/"
        fetch(url, {
            method: 'POST',
            body: data,
        }).then(res => {
            this.setState({ formSubmitted: res })
        })
    }

    handleCancel = (e) => {
        e.preventDefault()
        // cancel()
    }
    render() {
        let categories = []
        if (this.props.categoryList.length) categories = this.props.categoryList
        return (
            <div>
                <Route
                    path="/content-creators//"
                    exact
                    render={() => {
                        return (
                            <form className="form-wrapper" onSubmit={this.handleSubmit} noValidate >
                                <input type="hidden" name="primary-subcategory" value="User Submitted" />
                                <ul>
                                    <li className="form-li" >
                                        <label htmlFor="title">*Course Title:</label>
                                        <input type="text" id="title" name="title" required data-parse="require" />
                                    </li>
                                    <li className="form-li" >
                                        <label htmlFor="rating">Average Rating:</label>
                                        <input type="number" id="rating" name="rating" placeholder="1-5" min="1" max="5" step=".5" />
                                    </li>
                                    <li className="form-li" >
                                        <label htmlFor="reviews">Number of Reviews:</label>
                                        <input type="number" id="reviews" name="num_reviews" min="1" data-parse="number" />
                                    </li>
                                    <li className="form-li" >
                                        <label htmlFor="headline">Course Headline:</label>
                                        <textarea id="headline" name="headline"></textarea>
                                    </li>
                                    <li className="form-li" >
                                        <label htmlFor="category">*Category:</label>
                                        <select id="category" name="primary_category" required data-parse="require">
                                            {categories.map(cat => {
                                                return <option value={cat.title}>{cat.title}</option>
                                            })}
                                        </select>
                                    </li>
                                    <li class="button">
                                        <button className="form-button" type="submit">Add Your Course</button>
                                        {this.state.inputError ? <p>Submit Error, Please check your form for required (*) items.</p> : <p>* Required</p>}
                                        {this.state.formSubmitted ? <p>{this.state.formSubmitted.title} Successfully Created!</p> : <p></p>}
                                    </li>
                                </ul>
                            </form>
                        )
                    }}
                />
            </div >
        )
    }
}

export default Form

// https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
