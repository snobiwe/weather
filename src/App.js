import React, {memo} from 'react';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Button from './components/button/button.js';
import Card from './components/card/card.js';
import Start from './components/start/start';
import Page from './components/page/page.js';
import plant from './images/plant.png'


const App = memo(() => {
    return (
        <Router>
        <Switch>
        <Route exact path="/">
            <Start title={'All about plants'} 
            subtitle={"We are plantters"} 
            text={"Who are we? We are the ones who will tell you all about plants. " + 
            "Take a look inside the site and see for yourself. You will learn only the secrets and secrets of your cactus from us." + 
            "Even Wikipedia does not know so much."} button={<Button path="/page" text={"Press me"} />} />
        </Route>

        <Route path="/page">
            <Page button={<Button path="/" text={"click please"} />} 
            title={"Do you love plants"} 
            subtitle={"We can tell you so much about plants that you will begin to love them. " + 
            "For starters, here are general articles about plants, their types, and similar information"} 
            card={<Card plant={plant} text={"test kek lol cheburek"} />} />,
        </Route>
        </Switch>
        </Router>

        
    )
})

export default App