import ReactDOM from 'react-dom'
import React, { Component } from 'react'

export class Popup extends Component {

    render() {
        return ReactDOM.createPortal(

            <div className={this.props.isOpen ? 'show' : 'hidden'}>
                <div className="card">
                    <div>
                        <b className='card__title'>{this.props.title}</b>
                        <br/>
                        <i className='card__date'>{this.props.date}</i>
                    </div>
                    <img className='card__image' src={this.props.image} alt={this.props.id} />
                    <p className='card__description'>{this.props.description}</p>
                    <button onClick={() => { this.props.setIsOpen(false) }} className='card__button'>x</button>
                    <img src={this.props.image} id={this.props.id} alt={this.props.id} className="card__background" />
                </div>
            </div>,
            document.body)
    }
}

export default Popup

