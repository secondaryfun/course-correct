import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Form.css';
import FormEdit from './FormEdit'



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
        const mixins = [FormData]
        this.state = {
            courseList: { courses: [] },
            userPick: "",
            inputError: false,
            formData: {},
            formResults: "",
            submitFormSuccessful: false,
        }
    }
    stringifyFormData = (data) => {
        const data1 = {};
        let formKey
        for (let key of data.keys()) {
            formKey = `${key}`
            data1[formKey] = data.get(key);
        }
        return data1
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let data = new FormData(e.target)
        data = JSON.stringify(this.stringifyFormData(data))

        if (!e.target.checkValidity()) {
            this.setState({ inputError: true })
            return;
        }
        console.log(data)

        const url = "https://udemy-courses-api.herokuapp.com/courses/"
        fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        }).then(res => res.json()).then(res => {
            console.log(res)
            this.setState({ formResults: res, submitFormSuccessful: true })
        }).catch(err => {
            console.log(err)
            this.setState({ formResults: err, submitFormSuccessful: false })
        })
    }


    render() {
        let categories = []
        if (this.props.categoryList.length) categories = this.props.categoryList
        return (<>
            <Route
                path="/add-course/"
                exact
                render={() => {
                    return (
                        <div className="form-wrapper">
                            <h3 className="form-type">Add a New Course</h3>
                            <form onSubmit={this.handleSubmit} noValidate >
                                <input type="hidden" name="primary_category" value="user" />
                                <ul>
                                    <li className="form-li" >
                                        <label htmlFor="title">*Course Title:</label>
                                        <input type="text" id="title" name="title" required data-parse="require" placeholder="Name of your Course" />
                                    </li>
                                    <li className="form-li" >
                                        <label htmlFor="imageLink">Image Link:</label>
                                        <input type="text" id="imageLink" name="image_240x135" placeholder="Add Hosted Image Link" />
                                    </li>
                                    <li className="form-li" >
                                        <label htmlFor="price">Price:</label>
                                        <input type="number" id="price" name="price" placeholder="9.99" min="0" />
                                    </li>
                                    <li className="form-li" >
                                        <label htmlFor="category">Course Category:</label>
                                        <input type="text" id="category" name="primary_subcategory" required placeholder="ex. Sports" />
                                    </li>
                                    <li className="form-li" >
                                        <label htmlFor="headline">Course Headline:</label>
                                        <textarea id="headline" name="headline" placeholder="Describe what your course teaches and who it is for in one or two lines."></textarea>
                                    </li>
                                    <li>
                                        <button className="form-button" type="submit">Add Your Course</button>
                                        {this.state.inputError ? <p>Submit Error, Please check your form for required (*) items.</p> : <p>* Required</p>}
                                        {this.state.formResults ? <p>{this.state.formResults.title} Successfully Created!</p> : <p></p>}
                                    </li>
                                </ul>
                            </form>
                        </div>
                    )
                }}
            />
        </>)
    }
}

export default Form

// https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
