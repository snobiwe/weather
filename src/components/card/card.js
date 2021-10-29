import React, {memo} from 'react';
import plant from './images/plant.png';
import './card.css';


const Card = memo(({title, text}) => {
    return (
        <div className="card">
            <img src={plant} className="card_photo" alt="plant" />
            <p className="info">9 min read <span className="info_span">| Very easy</span></p>
            <h3 className="card_title">{title}</h3>
            <p className="card_text">{text}</p>
        </div>
    )
});

export default Card;