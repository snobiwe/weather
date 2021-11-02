import React, {memo} from 'react';
import './page.css';


const Page = memo(({title, subtitle, button, card}) => {
    return (
        <div className="page">

        <div className="fields">

            <div className="field">
            <p className="field_name">Articles</p>
            <select className="select">
                <option>For beginners</option>
            </select>
            </div>

            <div className="field">
            <p className="field_name">Read</p>
            <select className="select">
                <option>All articles</option>
            </select>
            </div>

            <div className="field">
            <p className="field_name">Complexity</p>
            <select className="select select_last">
                <option>Any</option>
            </select>
            </div>
            <div className="button">{button}</div>

        </div>

        <div className="content">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>

        <ul className="container">
        <li className="card">{card}</li>
        <li className="card">{card}</li>
        <li className="card">{card}</li>
        </ul>

        </div>

        </div>
    )
})

export default Page;

// <Page button={<Button text={"click please"} />} title={"Do you love plants"} subtitle={"We can tell you so much about plants that you will begin to love them. " + 
    // "For starters, here are general articles about plants, their types, and similar information"} card={<Card plant={plant} text={"test kek lol cheburek"} />} />,
