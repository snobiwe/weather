import React, {memo} from 'react';
import { Link } from 'react-router-dom';
import './button.css';

// function click () {
//   alert("U CLIKED MAZAFAKA")
// }

const Button = memo(({text, path}) => {
  return (
    <Link to={path}>
      <button className="button">
        <p className="button_text">{text}</p>
      </button>
    </Link>
  )
});

export default Button


// <Button text={'Press on me'} /> ,