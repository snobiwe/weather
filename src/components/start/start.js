import React, {memo} from 'react';
import './start.css';
import plant from './images/plant.png';


const Start = memo (({title, subtitle, text, button}) => {
    return (
        <div className="start">
            <div className="start_column">
            <h1 className="start_title">{title}</h1>
            <h4 className="start_subtitle">{subtitle}</h4>
            <p className="start_text">{text}</p>
            <div>{button}</div>
            </div>
            <img src={plant} className="start_photo" alt="plant" />
        </div>
    )
})

export default Start