import React, { Component } from 'react'
import Modal from './Modal'
import Button from './Button'
import './FormEdit.css'

export default class FormEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            display: true,
            userList: [],
            isModalOn: false,
            selectedItem: null,

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
    handleDelete = e => {
        e.preventDefault()
        const url = "https://rocky-refuge-49252.herokuapp.com/courses/" + this.props.course["_id"]
        fetch(url, {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => res.json()).then(res => {
            console.log(res)
            this.setState({ formResults: res, submitFormSuccessful: true })
        }).catch(err => {
            console.log(err)
            this.setState({ formResults: err, submitFormSuccessful: false })
        })
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

        const url = "https://rocky-refuge-49252.herokuapp.com/courses/" + this.props.course["_id"]
        fetch(url, {
            method: "put",
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
    pickOne = (item) => {
        this.setState({ isModalOn: false, selectedItem: item })
    }
    exitModal = () => {
        this.setState({ isModalOn: false })
    }
    showModal = e => {
        this.setState({ isModalOn: true })
    }
    render() {
        let course = {}
        this.props.course ? course = this.props.course : course = {}
        return (
            < div className="form-wrapper edit-form" >
                <h3 className="form-type">Course Editor</h3>
                <p>Edit the fields below and click Submit to make your changes.</p>
                {/* <Modal
                    data={{
                        title: "You are about to update this course. Are you sure?",
                        selectionList: "",
                        callback: this.handleSubmit
                    }}
                    display={this.state.isModalOn}
                /> */}
                <form onSubmit={this.handleSubmit} noValidate  >
                    <input type="hidden" name="primary_category" value="user" />
                    <ul>
                        <li className="form-li" >
                            <label htmlFor="title">*Course Title:</label>
                            <input type="text" id="title" name="title" placeholder={course.title} />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="imageLink">Image Link:</label>
                            <input type="number" id="imageLink" name="image_240x135" placeholder={course.image_240x135} />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="category">Course Category:</label>
                            <input type="text" id="category" name="primary_subcategory" placeholder={course.primary_subcategory} />
                        </li>
                        <li className="form-li" >
                            <label htmlFor="headline">Course Headline:</label>
                            <textarea id="headline" name="headline" placeholder={course.headline}  ></textarea>
                        </li>
                        <li>
                            <button className="form-button" type="submit">Submit</button>
                            <button className="form-button" onClick={this.handleDelete} >Delete</button>
                            {this.state.inputError ? <p>Submit Error, Please check your form for required (*) items.</p> : <p>* Required</p>}
                            {this.state.formResults ? <p>{this.state.formResults.title} Successfully Edited!</p> : <p></p>}
                        </li>
                    </ul>
                </form>
            </div >

        )
    }
}
