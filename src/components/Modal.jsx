import React, { Component } from 'react'
import Button from './Button'
import './Modal.css'

export default class Modal extends Component {
    constructor(props) {
        super(props)
        this.modalRef = React.createRef()

        console.log(this.props.data.title)
        this.state = {

        }
    }
    // componentDidMount() {
    //     document.addEventListener('mousedown', this.handleOutsideClick)
    //     this.modalRef.current.addEventListener('keydown', this.handleKeyDown);

    // }
    // componentWillUnmount() {
    //     document.removeEventListener('mousedown', this.handleOutsideClick)
    //     this.modalRef.current.removeEventListener('keydown', this.handleKeyDown);
    // }
    // handleOutsideClick = (e) => {
    //     if (!this.modalRef.current.contains(e.target)) this.closeModal(e)
    // }
    // handleKeyDown = (e) => {
    //     if (e.key === "Escape") {
    //         e.stopPropagation()
    //         this.closeModal(e)
    //     }
    // }
    closeModal = (e) => {
        this.setState({ display: false })
    }
    render() {
        const data = this.props.data
        console.log(data)
        return !this.props.display ? "" : (
            <div className="modal-overlay" onClick={this.closeModal}>
                <div className="modal__info-box">
                    <header className="modal__info-box__header">
                        <h1 className="modal__info-box__title">{data.title}</h1>
                    </header>
                    <main className="modal__info-box__body" ref={this.modalRef}>
                        {data.selectionList.map(item => {
                            return <Button type={item.title} onClick={data.callback} />
                        })}
                        <p>{data.userList}</p>
                    </main>
                    <footer className="modal__info-box__footer">
                        <button class="basic-button" onClose={e => this.onClose(e)}>basic-button</button>
                        <Button type="Update" onClick={this.closeModal} />
                    </footer>
                </div>
            </div>
        )
    }
}
