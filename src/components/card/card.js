import React, {memo} from 'react';

import './card.css';


const Card = memo(({title, text, plant}) => {
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

// <Card title={'What about indoor plants?'} text={'testtextajajaja'} />,