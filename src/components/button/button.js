import React, {} from 'react';
import ReactDOM from 'react-dom';
import './button.css';

// const button = React.memo (
//     (props) => {
//         (<button className="button" onClick={props.onClick}>
//       PRESS ON ME
//     </button>
//   )
//   return (
//     button
//   )
//     }
    
// );

// function click () {
//   console.log("Click")
// }

// export default function button (props) {
//        return (
//    <button onClick={click}>{props.text}</button>
//   )
// }

// button.defaultProps = {text:"Press On ME"};

export default function element () { 
return(
<h1>Привет, мир</h1>)
};
ReactDOM.render(element, document.getElementById('root'));



