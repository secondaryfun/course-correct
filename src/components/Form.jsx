import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Form.css';
import CategoryButton from './CategoryButton'


export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courseList: { courses: [] },
            userPick: "",
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // submit()
    }

    handleCancel = (e) => {
        e.preventDefault()
        // cancel()
    }
    render() {
        return (
            <div>
                <Route
                    path="/content-creators//"
                    exact
                    render={() => {
                        return (
                            <form className="form-wrapper" action="" method="POST">
                                <ul>
                                    <li>
                                        <label for="name">Name:</label>
                                        <input type="text" id="name" name="user_name" />
                                    </li>
                                    <li>
                                        <label for="mail">E-mail:</label>
                                        <input type="email" id="mail" name="user_email" />
                                    </li>
                                    <li>
                                        <label for="msg">Message:</label>
                                        <textarea id="msg" name="user_message"></textarea>
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
