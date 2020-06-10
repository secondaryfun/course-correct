import './Button.css'
import React from 'react'


export default function Button(props) {
    return (
        <div className="basic-button" onClick={props.onClick} >{props.type}</div>
    )
}
