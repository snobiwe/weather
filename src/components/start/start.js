import React, {memo} from 'react';
import './start.css';
import plant from '../../images/plant.png';



const Start = memo (({title, subtitle, text, button}) => {
    return (
        <div className="start">
            <div className="start_column">
            <h1 className="start_title">{title}</h1>
            <h4 className="start_subtitle">{subtitle}</h4>
            <p className="start_text">{text}</p>
            
             <div className="button">{button}</div>
                 
            

            </div>
            <img src={plant} className="start_photo" alt="plant" />
        </div>
    )
})

export default Start

//<Start title={'All about plants'} 
//subtitle={"We are plantters"} 
//text={"Who are we? We are the ones who will tell you all about plants. " + 
//"Take a look inside the site and see for yourself. You will learn only the secrets and secrets of your cactus from us." + 
//"Even Wikipedia does not know so much."} button={<Button text={"Press me"} />} />,
