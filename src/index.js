import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './components/button/button.js';
import Card from './components/card/card.js';
import Start from './components/start/start'



ReactDOM.render(
  
    // <Button text={'Press on me'} /> ,
    // <Card title={'What about indoor plants?'} text={'testtextajajaja'} />,
    <Start title={'All about plants'} subtitle={"We are plantters"} text={"Who are we? We are the ones who will tell you all about plants. Take a look inside the site and see for yourself. You will learn only the secrets and secrets of your cactus from us. Even Wikipedia does not know so much."} button={<Button text={"Press me"} />} />,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

