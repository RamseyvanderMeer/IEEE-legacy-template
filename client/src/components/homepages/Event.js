import React, { useState } from 'react'
import './Events.scss'
import Popup from './Popup'

const Event = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='clear'>
            <button className="single-event" onClick={() => setIsOpen(!isOpen)} style={{ backgroundImage: `url(${props.image})`, backgroundSize: 'cover' }} key={props.id}>
                <div className="single-event__overlay" >
                    <div className="single-event__content">
                        <div className='single-event__content__title'>{props.title}</div>
                    </div>
                </div>
            </button>
            <div >
                <Popup setIsOpen={setIsOpen} isOpen={isOpen} id={props.id} image={props.image} title={props.title} date={props.date} description={props.description} />
            </div>
        </div>
    )
}

export default Event